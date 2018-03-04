(ns lines.core-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [lines.core :as l]))


(def default-s {
  :t   0
  :n   0
  ; start points
  :x-start 1
  :y-start 1
  :c-start 0
  ; end points
  :x2  400
  :y2  400
  :c2  50
  ; bezier curve anchor points
  :bx1 50
  :by1 50
  :bx2 50
  :by2 50
})

;; TODO more tests

(deftest fmt
  (is (= "3.146" (l/fmt "3.1459")))
  (is (= "9876.100" (l/fmt "9876.1"))))

(deftest abs
  (is (= 15.01 (l/abs -15.01)))
  (is (= 20 (l/abs 20))))

