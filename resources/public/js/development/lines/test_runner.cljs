(ns lines.test-runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [lines.core-test]))

(doo-tests 'lines.core-test)