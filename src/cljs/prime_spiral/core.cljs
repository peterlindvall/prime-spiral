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
(defonce squareSize 80)                                     ;;ToDo Move to state and put in gui

;;Defining the state
(def state (atom {:count      0
                  :direction  "N"
                  :row-length 1                             ;; current row length. increases every second row
                  :iteration  0                             ;; n:o rows created with same row length
                  :step-count 0                             ;; number of steps moved within the row
                  }))

;; updating the state
(defn turn! [old-state]
  (swap! state assoc :direction (next-direction (old-state :direction)))
  )
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

;  function findPrimes(){
;                        for (let number = 2; number <= sq(matrixSize); number++){
;                                        if (isPrime(number))
;                                        primes.add(number);
;                        }
;}

;function isPrime(val) {
;                       if (val < 2) return false;
;                       for (let i = 2; i <= sqrt(val); i++) {
;                                  if (val % i == 0) return false;
;                       }
;return true;
;}

(defn meets-condition? [test-with x]
  (println "(meets-condition?" test-with " " x ")")
  (= (mod x test-with) 0)
  )

(defn prime? [x]
;;  (let [values (range 2 x)]
    (let [values (range 2 (+ 1 (Math/floor(Math/sqrt x))))]
    (if
      (or (< x 2) (some #(meets-condition? % x) values));;if x less than 2 or divisible with any value in value
      (false? 1)                                            ;;return false
      (true? true)                                          ;;return true
      )))

(defn f [x] (* x x))
(defn g [x] (* x x x))
(defn generate-the-data []
  (for [x (range 1 11)]
    {:num x :prime (prime? x) :cube (g x)}))

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
        matrixDim (min w h)                                 ;drawing square dimension
        no-of-digits (sqr (Math/floor (/ (- matrixDim squareSize) squareSize)))]
    ;(println matrixDim no-of-digits)
    (.beginPath ctx)
    (.moveTo ctx 0 0)
    (.lineTo ctx w h)
    (.moveTo ctx w 0)
    (.lineTo ctx 0 h)
    (.stroke ctx)
    ;(.fillStyle ctx "#000000")
    ;(.fillRect ctx 300 300 20 20)
    ;(.fillRect ctx (/ (- w size) 2) (/ (- h size) 2) 20 20)
    (draw-circle ctx w h 0 0)
    (draw-circle ctx w h 20 0)
    (draw-circle ctx w h 20 -20)
    (draw-circle ctx w h 0 -20)
    ;(println "Initial direction: " (@state :direction))
    (println "Initial state: " @state)
    (turn! @state)
    (println "Altered state: " @state)
    (println "no-of-digits" no-of-digits)
    (println (generate-the-data))
    )
  )

(defn draw-circle [ctx width height offsetX offsetY]
  (.beginPath ctx)
  (.arc ctx (+ (/ width 2) offsetX) (+ (/ height 2) offsetY) (/ squareSize 2) 0 (* 2 Math/PI))
  (.stroke ctx)
  )

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
