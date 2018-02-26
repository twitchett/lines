(ns lines.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (println "-- setup")
  (q/frame-rate 10)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  (let [start (list (q/random 500) (q/random 500))
        end   (list (q/random 500) (q/random 500))]
    {:color 0
     :x (first start)
     :y (second start)
     :x2 (first end)
     :y2 (second end)}))

(defn abs [n] (max n (- n)))

(defn converged? [a b]
  (println "abs is " (abs (- a b)))
  (< 0.1 (abs (- a b))))

(defn update-state [{:keys [x x2 y y2] :as state}]
  (println "-- update " state)
  (if (converged? x x2)
    {:color 122
      :x (q/lerp x x2 0.05)
      :y (q/lerp y y2 0.05)
      :x2 x2
      :y2 y2}
    {:color 0
     :x 0
     :y 0
     :x2 250
     :y2 250}
    ))

(defn draw-state [{:keys [x x2 y y2] :as state}]
  (q/ellipse x y 50 50)
  (q/fill 127 255 255)
  (q/ellipse x2 y2 20 20)
  (q/fill 100 100 100))

  ; Set circle color.
  ; (q/fill (:color state) 255 255)
  ; Calculate x and y coordinates of the circle.
  ; (let [angle (:angle state)
  ;       x (* 150 (q/cos angle))
  ;       y (* 150 (q/sin angle))]
  ;   ; Move origin point to the center of the sketch.
  ;   (q/with-translation [(/ (q/width) 2)
  ;                        (/ (q/height) 2)]
  ;     ; Draw the circle.
  ;     (q/ellipse x y 100 100))))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch lines
    :host "lines"
    :size [500 500]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
