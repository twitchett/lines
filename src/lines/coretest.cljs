(ns lines.coretest
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [lines.core :as l]))

;; default state
(def dstate {
  :t   0
  :n   0
  ; start points
  :x-start 0
  :y-start 0
  :c-start 0
  ; end points
  :x2  0
  :y2  0
  :c2  0
  ; bezier curve anchor points
  :bx1 0
  :by1 0
  :bx2 0
  :by2 0
})

(deftest rtest
  (is (< 100 (l/rtest))))

;; TODO more tests
; (deftest new-state
;   (println "got state" (l/new-state {}))
;   (let [teststate (assoc dstate :c2 200)
;         s (l/new-state teststate)]
;     (is (= 200 (:c-dist s)))  ; 200 - 0 = 200
;     (is (= 1 (:c-step s)))))

(deftest fmt
  (is (= "3.146" (l/fmt "3.1459")))
  (is (= "9876.100" (l/fmt "9876.1"))))

(deftest abs
  (is (= 15.01 (l/abs -15.01)))
  (is (= 20 (l/abs 20))))

