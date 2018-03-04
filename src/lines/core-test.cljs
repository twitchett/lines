(ns lines.core-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]))

(enable-console-print!)

(deftest test-numbers
  (is (= 1 1)))

; (doo-all-tests)