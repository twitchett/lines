(ns lines.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def width 500)
(def height 500)

(defn setup []
  (println "-- setup")
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state.
  (let [start (list (q/random width) (q/random height))
        end   (list (q/random height) (q/random width))]
    {:c   (q/random 255)
     :x   (first start)
     :y   (second start)
     :c2  (q/random 255)
     :x2  (first end)
     :y2  (second end)}))

(defn abs [n] (max n (- n)))

(defn converged? [a b]
  (< (abs (- a b)) 1.0))

(defn update-state [{:keys [x y c x2 y2 c2] :as state}]
  (println "-- update " state)
  (if (and (converged? x x2) (converged? y y2))
    ; reached target: set new random values
    {:c c2
     :x x2
     :y y2
     :c2 (q/random 225) 
     :x2 (q/random width)
     :y2 (q/random height)}
    ; not at target, step towards
    {:c (q/lerp c c2 0.05)
     :x (q/lerp x x2 0.05)
     :y (q/lerp y y2 0.05)
     :x2 x2
     :y2 y2
     :c2 c2}))

(defn draw-state [{:keys [x y c x2 y2 c2] :as state}]
  ; cover everything with a low-opacity rectangle to 'fade' it out
  ; we need blend mode to fade to 0
  ; (blend-mode SUBTRACT)
  (q/fill 0 10 255 5)
  (q/rect 0 0 width height)
  ; (blend-mode BLEND)

  ; draw the new circle on top
  (q/fill c 100 100)
  (q/ellipse x y 20 20))


(defn mouse-clicked [state e]
  (assoc state
    ; set target coordinates to mouse position
    :x2 (:x e)
    :y2 (:y e)
    :c2 (q/random 255)))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch lines
    :host "lines"
    :size [width height]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; event handlers
    :mouse-clicked mouse-clicked
    ; This sketch uses functional-mode middleware.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
