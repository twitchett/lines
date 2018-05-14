(ns lines.karmarunner
    (:require [lines.coretest]))

(enable-console-print!)

(defn ^:export run-all [karma]
  (run-all-tests karma))