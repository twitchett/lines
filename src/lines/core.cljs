(ns lines.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (println "well then")
  (q/frame-rate 10)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  (let [start (list (q/random 500) (q/random 500))
        end   (list (q/random 500) (q/random 500))]
    {:color 0
     :xc (first start)
     :yc (second start)
     :x2 (first end)
     :y2 (second end)}))

(defn abs [n] (max n (- n)))

(defn converged [i j]
  (< 5 (q/random 10))

(defn target-reached [state]
  (println "araaargh")
  (println state)
  (and (converged (:xc state) (:x2 state))
       (converged (:yc state) (:y2 state))))

(defn update-state [state]
  (println state)
  ; Update sketch state by changing circle color and position.
  (if (target-reached state)
    ; set a new target
    ((let [start (list (q/random 500) (q/random 500))
           end   (list (q/random 500) (q/random 500))]
      {:color 0
       :xc (first start)
       :yc (second start)
       :x2 (first end)
       :y2 (second end)}))
    ; move the shape towards the target
    ({:color 122
      :xc (q/lerp (:xc state) (:x2 state) 0.05)
      :yc (q/lerp (:yc state) (:y2 state) 0.05)
      :x2 (:x2 state)
      :y2 (:y2 state)})))

(defn draw-state [state]
    (q/ellipse (:xc state) (:yc state) 20 20)
    (q/fill 127 255 255)
    (q/ellipse (:x2 state) (:y2 state) 20 20)
    (q/fill 210 255 255))

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
(run-sketch)
