(defproject lines "0.1.0-SNAPSHOT"
  :description "some animations"
  :url "https://github.com/twitchett/lines"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [quil "2.6.0"]
                 [stubadub "2.0.0"]
                 [karma-reporter "2.1.1"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel  "0.5.14"]]

  :hooks [leiningen.cljsbuild]
  
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
            {:id "test"
             :source-paths ["src", "test"]
               ;; :notify-command makes lein-cljsbuild run the tests after
               ;; the build is done.
               :notify-command ["./run-karma.sh"]
               :compiler {:main "lines.karmarunner"
                          :output-to "resources/test/test.js"
                          :output-dir "resources/test/test"
                          ;; karma serves filesfrom a virtual root "base"
                          :asset-path "base/resources/test/test"
                          :optimizations :none
                          :pretty-print false}}
            ]

    ; :test-commands {"test" ["lein" "doo" "nashorn" "test" "once"]}
    })