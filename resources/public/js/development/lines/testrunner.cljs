(ns lines.testrunner
    (:require [doo.runner :refer-macros [doo-tests]]
              [lines.coretest]))

(enable-console-print!)

(doo-tests 'lines.coretest)