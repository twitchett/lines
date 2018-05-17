(ns lines.coretest
  (:require [cljs.test :refer-macros [deftest is]]
            [stubadub.core :refer [calls-to] :refer-macros [with-stub]]
            [quil.core :as q]
            [lines.core :as l]))

(deftest fmt
  (is (= "3.146" (l/fmt "3.1459")))
  (is (= "9876.100" (l/fmt "9876.1"))))

(deftest abs
  (is (= 15.01 (l/abs -15.01)))
  (is (= 20 (l/abs 20))))

(deftest c-distance
  (is (= 100 (l/c-distance 0 100)))
  (is (= 1 (l/c-distance 254 255)))
  (is (= 0 (l/c-distance 1 1)))
  (is (= 20 (l/c-distance 250 15))))

(deftest increase-hue
  (is (= 20 (l/increase-hue 15 5)))
  (is (= 1 (l/increase-hue 255 1)))) ;; technically 255 + 1 should be 0, but...

(deftest new-state
  (let [s0 {:t      0
            :n      0
            ; start points
            :x-start 50
            :y-start 20
            :c-start 10
            ; end points
            :x2     500
            :y2     200
            :c-end  100
            ; bezier curve anchor points
            :bx1    1
            :by1    2
            :bx2    3
            :by2    4 }
        s1 {:t      0
            :n      0
            :x      50
            :x1     50
            :x2     500
            :y      20
            :y1     20
            :y2     200
            :c      10
            :c1     10
            :c2     100
            :c-dist 90
            :c-step 0.45
            :bx1    1
            :by1    2
            :bx2    3
            :by2    4 }]
    (is (= s1 (l/new-state s0)))))


(deftest update-state
  (let [s1 {:t      0       ;; input state
            :n      0
            :x      50
            :x1     50
            :x2     500
            :y      20
            :y1     20
            :y2     200
            :c      10
            :c1     10
            :c2     100
            :c-dist 90
            :c-step 0.45
            :bx1    1
            :by1    2
            :bx2    3
            :by2    4 }
        s2 {:t      0.005   ;; output state
            :n      1
            :x      0
            :x1     50
            :x2     500
            :y      0
            :y1     20
            :y2     200
            :c      10.45
            :c1     10
            :c2     100
            :c-dist 90
            :c-step 0.45
            :bx1    1
            :by1    2
            :bx2    3
            :by2    4 }]
    ;; quil's bezier-point only works when called inside a sketch.
    ;; this stub means x and y will be set to 0.
    (with-stub q/bezier-point :returns 0
      (is (= s2 (l/update-state s1))))))