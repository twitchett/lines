(ns lines.testrunner
    (:require [doo.runner :refer-macros [doo-tests]]
              [lines.core-test]))

(enable-console-print!)

(doo-tests 'lines.core-test)