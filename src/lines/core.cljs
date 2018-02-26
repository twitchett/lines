(ns lines.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (println "-- setup")
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  (let [start (list (q/random 500) (q/random 500))
        end   (list (q/random 500) (q/random 500))]
    {:c   (q/random 255)
     :x   (first start)
     :y   (second start)
     :c2  (q/random 255)
     :x2  (first end)
     :y2  (second end)}))

(defn abs [n] (max n (- n)))

(defn converged? [a b]
  (println "abs is " (abs (- a b)))
  (< (abs (- a b)) 1.0))

(defn update-state [{:keys [x y c x2 y2 c2] :as state}]
  (println "-- update " state)
  (if (converged? x x2)
    ; reached target: set new random values
    {:c c2
     :x x2
     :y y2
     :c2 (q/random 225) 
     :x2 (q/random 500)
     :y2 (q/random 500)}
    ; not at target, step towards
    {:c (q/lerp c c2 0.05)
     :x (q/lerp x x2 0.05)
     :y (q/lerp y y2 0.05)
     :x2 x2
     :y2 y2
     :c2 c2}))

(defn mouse-clicked [state e]
  (println "huhhhh")
  {:colour (:colour state)
    ; :x (q/lerp x x2 0.05)
    ; :y (q/lerp y y2 0.05)
    :x (:x state)
    :y (:x state)
    :x2 (:x e)
    :y2 (:y e)}
  )

(defn draw-state [{:keys [x x2 y y2 c c2] :as state}]
  ; moving circle
  (q/ellipse x y 20 20)
  (q/fill c 255 255)
  ; target point
  (q/ellipse x2 y2 5 5)
  (q/fill c2 100 100))

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
    :mouse-clicked mouse-clicked
    ; This sketch uses functional-mode middleware.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
