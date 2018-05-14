(defproject lines "0.1.0-SNAPSHOT"
  :description "some animations"
  :url "https://github.com/twitchett/lines"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [quil "2.6.0"]
                 ;; REMOVE DOO
                 ; [doo "0.1.8"]
                 [karma-reporter "2.1.1"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel  "0.5.14"]]
            ;; REMOVE DOO
            ; [lein-doo       "0.1.8"]]
  :hooks [leiningen.cljsbuild]
  
  ;; REMOVE DOO
  ; :doo
  ;   {:karma
  ;       {:launchers {:chrome-no-security {:plugin "karma-chrome-launcher"
  ;                                         :name "Chrome_no_security"}}}}
  
  :cljsbuild
    {:builds [; development build with figwheel hot swap
            {:id "development"
             :source-paths ["src"]
             :figwheel true
             :compiler {:main "lines.core"
                        :output-to "resources/public/js/main.js"
                        :output-dir "resources/public/js/development"
                        :asset-path "js/development"}}
            ; minified and bundled build for deployment
            {:id "optimized"
             :source-paths ["src"]
             :compiler {:main "lines.core"
                        :output-to "resources/public/js/main.js"
                        :output-dir "resources/public/js/optimized"
                        :asset-path "js/optimized"
                        :optimizations :advanced}}
            ; unit tests
            ; {:id "test"
            ;  :source-paths ["src"]
            ;  :compiler {:main "lines.testrunner"
            ;             :output-to "resources/public/js/test.js"
            ;             :output-dir "resouhttps://nvbn.github.io/2015/06/08/cljs-test/https://nvbn.github.io/2015/06/08/cljs-test/https://nvbn.github.io/2015/06/08/cljs-test/rces/public/js/test"
            ;             ; nashorn won't accept :none as a compiler optimization
            ;             :optimizations :none}}
            {:id "karmatest"
             :source-paths ["src"]
               ;; :notify-command makes lein-cljsbuild run the tests after
               ;; the build is done.
               ; :notify-command ["./trigger-karma.sh"]
               :compiler {:main "lines.karmarunner"
                          :output-to "resources/public/js/test.js"
                          :output-dir "resources/public/js/test"
                          ; :parallel-build "true"
                          ;; Karma's web server serves the assets under
                          ;; /base/, so that's our :asset-path.
                          :asset-path "base"
                          ;; :none works too!
                          :optimizations :advanced
                          :pretty-print false}}
            ]

    ; :test-commands {"test" ["lein" "doo" "nashorn" "test" "once"]}})