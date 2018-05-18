(ns lines.karmarunner
  ;; jx.reporter.karma is this plugin: https://github.com/honzabrecka/karma-reporter
  (:require [jx.reporter.karma :include-macros true :refer-macros [run-all-tests]]
            [lines.coretest]))

(enable-console-print!)

(defn ^:export run-all [karma]
  (run-all-tests karma))
