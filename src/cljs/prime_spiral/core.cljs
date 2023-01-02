(ns prime-spiral.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rdom]
    [reagent.session :as session]
    [reitit.frontend :as reitit]
    [clerk.core :as clerk]
    [accountant.core :as accountant]
    ))

(declare div-with-canvas)
(declare draw-canvas-contents)
(declare home-page)
(declare draw-circle)
(declare next-direction)
(def window-width (reagent/atom nil))
(defn on-window-resize [evt]
  (reset! window-width (.-innerWidth js/window)))

;;Defining the state
(def the-state (atom {
                      :direction   "E"
                      :row-length  1                        ;; current row length. increases every second row
                      :iteration   0                        ;; n:o rows created with same row length
                      :step-count  0                        ;; number of steps moved within the row
                      :square-size 175                      ;;ToDo Make available in gui
                      :x           300
                      :y           300
                      :first-run   true
                      }))

;; updating the state
;(defn turn! [old-state]
;  (swap! state assoc :direction (next-direction (old-state :direction)))
;  )

(defn next-direction [current-direction]
  (case current-direction
    "E" "N"
    "S" "E"
    "W" "S"
    "N" "W"
    "E"                                                     ;default
    )
  )
;;(swap! m1 assoc :a "Aaay")
;;(swap! state #(update % :count inc))
(defn move-a-step! [state]
  (let [{
         row-length :row-length                             ;; current row length. increases every second row
         iteration  :iteration                              ;; n:o rows created with same row length
         step-count :step-count                             ;; number of steps moved within the row
         direction  :direction
         } state]
    (println "before m-a-s: " @the-state)
    (swap! the-state #(update % :step-count inc))           ;; one step has been taken
    (when (= step-count row-length)
      (do                                                   ;;time to turn
        (swap! the-state #(update % :iteration inc))        ;;on (more) row done with this row length
        (swap! the-state assoc :step-count 0)
        (swap! the-state assoc :direction (next-direction direction))
        (when (> iteration 1)                                 ;;increase row length
          (do
            (swap! the-state #(update % :row-length inc))   ;;increase row length
            (swap! the-state assoc :iteration 0)
            )
          )
        )))
  (println "after m-a-s: " @the-state)
  )

(defn prime? [x]
  (let [values (range 2 (+ 1 (Math/floor (Math/sqrt x))))]
    (and (> x 1) (not (some #(= 0 (mod x %)) values)))      ;;if x greater than 1 and not divisible with any value in values
    ))
(defn generate-number-map [no-of-digits]
  (for [x (range 1 (+ 1 no-of-digits))]
    {:num x :prime (prime? x)}))

(def offset 175)
(defn next-coordinate! [state] ;;Todo receive offset as parameter
  (let [{old-x     :x
         old-y     :y
         direction :direction
         first-run :first-run
         } state]
    (if first-run
      (do
        (swap! the-state assoc :first-run false)
        )
      (do
        (case direction                                     ;;Not first run, calculate a new coordinate and store it inte the state
          "E" (swap! the-state assoc :x (+ old-x offset))
          "S" (swap! the-state assoc :y (+ old-y offset))
          "W" (swap! the-state assoc :x (- old-x offset))
          "N" (swap! the-state assoc :y (- old-y offset))
          )))
    (move-a-step! @the-state)
    (list (@the-state :x) (@the-state :y))
    ))

;(def my-vector [{:a 1 :b 2} {:a 3 :b 4} {:a 5 :b 6}])
;(def mv-and-coords (map (fn [m] (assoc m :coord (next-coord))) my-vector))
;(println "-------------------------------")
;(println mv-and-coords)
;(println ((first mv-and-coords) :coord))
(defn add-coordinates [list-of-maps]
  (map (fn [m] (assoc m :coordinate (next-coordinate! @the-state))) list-of-maps)
  )
(defn ^:export main []
  (rdom/render [home-page]
               (.getElementById js/document "app"))
  (.addEventListener js/window "resize" on-window-resize))

;; -------------------------
;; Routes

(def router
  (reitit/router
    [["/" :index]
     ["/items"
      ["" :items]
      ["/:item-id" :item]]
     ["/about" :about]]))


(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))
;; -------------------------
;; Page components

(defn home-page []
  (fn []
    ;[:span.main
    ; [:h1 "Welcome to prime-spiral"]
    ; [:ul
    ;  [:li [:a {:href (path-for :items)} "Items of prime-spiral"]]
    ;  [:li [:a {:href "/broken/link"} "Broken link"]]]
    [div-with-canvas]
    ;]
    ))

(comment
  (defn Canvas [{:keys [width height render]}]
    (let [state (atom nil)]
      (reagent/create-class
        {:reagent-render      (fn []
                                (let [update-size (fn [el]
                                                    (when el
                                                      (let [size (.get-real-size el)
                                                            ctx (.getContext el "2d")]
                                                        (swap! state assoc :size size)
                                                        (render ctx size))))]
                                  (fn [] (let [{:keys [size]} @state]
                                           [:canvas {:style  {:width width :height height}
                                                     :ref    update-size
                                                     :width  (nth size 0)
                                                     :height (nth size 1)}]))))
         :component-did-mount (fn [] (reset! state {:size nil}))
         })))
  )

(defn div-with-canvas []
  (let [dom-node (reagent/atom nil)]
    (reagent/create-class
      {:component-did-update
       (fn [this]
         (draw-canvas-contents (.-firstChild @dom-node)))

       :component-did-mount
       (fn [this]
         (reset! dom-node (reagent.dom/dom-node this))
         (println "component-did-mount fn called")
         )

       :reagent-render
       (fn []
         (println "reagent-render fn called")
         @window-width                                      ;; Trigger re-render on window resizes
         [:div.with-canvas
          ;; reagent-render is called before the compoment mounts, so
          ;; protect against the null dom-node that occurs on the first render
          [:canvas (if-let [node @dom-node]
                     {:width  (.-clientWidth node)
                      :height (.-clientHeight node)})]])})))
(defn sqr [x] (* x x))
(defn draw-canvas-contents [canvas]
  (let [ctx (.getContext canvas "2d")
        w (.-clientWidth canvas)
        h (.-clientHeight canvas)
        matrixDim (min w h)
        square-size (@the-state :square-size)               ;the dimension of one square in the matrix
        no-of-digits (sqr (Math/floor (/ (- matrixDim square-size) square-size)))
        list-of-maps (add-coordinates (generate-number-map no-of-digits))
        ]
    ;(println matrixDim no-of-digits)
    ;(println "Initial state: " @the-state)
    ;(println list-of-maps "\n coll?" (coll? list-of-maps))
    (.beginPath ctx)
    (.moveTo ctx 0 0)
    (.lineTo ctx w h)
    (.moveTo ctx w 0)
    (.lineTo ctx 0 h)
    (.stroke ctx)
    ;(.fillStyle ctx "green")
    ;(.fillRect ctx 300 300 20 20)
    ;(.fillRect ctx (/ (- w size) 2) (/ (- h size) 2) 20 20)
    (doseq [item list-of-maps]
      (draw-circle ctx (item :coordinate)))
    ;(println "Initial direction: " (@state :direction))
    ;(println "Altered state: " @state)
    )
  )

(defn draw-circle [ctx coordinates]
  (let [[x y] coordinates]
    ;(println "coordinates " coordinates " x:" x " y:" y)
    (.beginPath ctx)
    ;(.arc ctx (+ (/ width 2) offsetX) (+ (/ height 2) offsetY) (/ (@state :square-size) 2) 0 (* 2 Math/PI))
    (.arc ctx x y (/ (@the-state :square-size) 2) 0 (* 2 Math/PI))
    (.stroke ctx)
    ))

(comment
  (defn items-page []
    (fn []
      [:span.main
       [:h1 "The items of prime-spiral"]
       [:ul (map (fn [item-id]
                   [:li {:name (str "item-" item-id) :key (str "item-" item-id)}
                    [:a {:href (path-for :item {:item-id item-id})} "Item: " item-id]])
                 (range 1 11))]]))
  )

(defn item-page []
  (fn []
    (let [routing-data (session/get :route)
          item (get-in routing-data [:route-params :item-id])]
      [:span.main
       [:h1 (str "Item " item " of prime-spiral")]
       [:p [:a {:href (path-for :items)} "Back to the list of items"]]])))

(defn about-page []
  (fn [] [:span.main
          [:h1 "About prime-spiral"]]))


;; -------------------------
;; Translate routes -> page components
(defn page-for [route]
  (case route
    :index #'home-page
    ;:about #'about-page
    ;:items #'items-page
    ;:item #'item-page
    ))

;; -------------------------
;; Page mounting component
(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      ;[:div
      ; [:header
      ;[:p [:a {:href (path-for :index)} "Home"] " | "
      ;[:a {:href (path-for :about)} "About prime-spiral"]]
      ;  ]
      [page]
      ; [:footer
      ;[:p "prime-spiral was generated by the "
      ; [:a {:href "https://github.com/reagent-project/reagent-template"} "Reagent Template"] "."]
      ;]]
      )))

;; -------------------------
;; Initialize app

(defn mount-root []
  (rdom/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (let [match (reitit/match-by-path router path)
             current-page (:name (:data match))
             route-params (:path-params match)]
         (reagent/after-render clerk/after-render!)
         (session/put! :route {:current-page (page-for current-page)
                               :route-params route-params})
         (clerk/navigate-page! path)
         ))
     :path-exists?
     (fn [path]
       (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
(defn ^:dev/after-load reload! []
  (mount-root))
