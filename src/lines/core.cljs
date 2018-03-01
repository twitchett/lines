(ns lines.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

; define canvas size
(def width 500)
(def height 500)
(def t-step 0.005)

(defn setup []
  (println "-- setup")
  (q/frame-rate 300)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; No outlines around shapes
  ; (q/no-stroke)
  ; setup function returns initial state.
  (let [start (list (q/random width) (q/random height))
        end   (list (q/random height) (q/random width))]
    {:t   0
     :ix  (first start)
     :iy  (first start)
     :c   (q/random 255)
     :x   (first start)
     :y   (second start)
     :c2  (q/random 255)
     :x2  (first end)
     :y2  (second end)
     :bx1 (q/random 500)
     :by1 (q/random 500)
     :bx2 (q/random 500)
     :by2 (q/random 500)}))

(defn abs [n] (max n (- n)))

(defn converged? [a b]
  (< (abs (- a b)) 1.0))

(defn update-state [{:keys [x y c ix iy x2 y2 c2 bx1 by1 bx2 by2 t] :as state}]
  (println "-- update " t)
  ; (if (and (converged? x x2) (converged? y y2))
  (if (> 1.0 t)
    ; reached target: set new random values
    (assoc state
      :c (q/lerp c c2 0.05)
      :x (q/bezier-point ix bx1 bx2 x2 (+ t t-step))
      :y (q/bezier-point iy by1 by2 y2 (+ t t-step))
      :t (+ t t-step))
    ; not at target, step towards
    ; (assoc state
    ;   :c (q/lerp c c2 0.05)
    ;   :x (q/lerp x x2 0.05)
    ;   :y (q/lerp y y2 0.05))))
    {:c c2
     :x x2
     :y y2
     :ix x2
     :iy y2
     :c2 (q/random 225) 
     :x2 (q/random width)
     :y2 (q/random height)
     :bx1 (q/random 500)
     :by1 (q/random 500)
     :bx2 (q/random 500)
     :by2 (q/random 500)
     :t 0}
    ))

(defn draw-state [{:keys [x y c ix iy x2 y2 bx1 by1 bx2 by2] :as state}]\
  ; cover everything with a low-opacity rectangle to 'fade' it out
  ; we need blend mode to fade to 0
  ; (blend-mode SUBTRACT)
  (q/fill 0 10 255 5)
  (q/rect 0 0 width height)
  ; (blend-mode BLEND)
  ; draw the new circle on top
  (q/fill c 100 100)
  (q/stroke 70)
  (q/ellipse x y 20 20)
  
  ; (q/no-fill)
  ; (q/stroke 0 0 0)
  ; (q/bezier x y 10 10 90 90 x2 y2)
  ; (q/bezier ix iy bx1 by1 bx2 by2 x2 y2)
  )


(defn set-event-target [state e]
  (assoc state
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
    :mouse-clicked set-event-target
    :mouse-dragged set-event-target
    ; This sketch uses functional-mode middleware.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
