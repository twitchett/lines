(ns lines.core-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [lines.core :as l]))

(deftest test-numbers
  (is (= 1 1)))

(deftest fmt
  (is (= "3.146" (l/fmt "3.1459"))))

(deftest abs
  (is (= 15 (l/abs -15))))


