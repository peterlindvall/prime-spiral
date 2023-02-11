(ns prime-spiral.prod
  (:require [prime-spiral.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
