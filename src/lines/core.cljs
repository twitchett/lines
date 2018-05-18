(ns lines.core
  (:require [quil.core :as q :refer-macros [defsketch]]
            [quil.middleware :as m]
            [goog.string :as gstring]
            [goog.string.format]))

(enable-console-print!)

; configure global properties
(def width      500)    ; canvas width
(def height     500)    ; canvas height
(def frame-rate 300)    ; self-explanatory
(def t-step     0.005)  ; amount to increase t by at each iteration (to max of 1)

;; util function: returns the absolute value of n
(defn abs [n] (max n (- n)))

;; util function: formats a number to 3 dp
(defn fmt [s]
  (str (gstring/format "%.3f" s)))

;; distance between points c1 and c2 on the hue spectrum (0..255)
(defn c-distance [c1 c2]
  (if (<= c1 c2)
    (- c2 c1)
    (- 255 (- c1 c2))))

; Creates a new state with random values.
; Values can be overriden by passing a map.
; TODO use partial function or make the argument optional
(defn new-state [s]
  (let [x-start (or (:x-start s) (rand-int width))
        y-start (or (:y-start s) (rand-int width))
        c-start (or (:c-start s) (rand-int 225))
        c-end   (or (:c-end s) (rand-int 225))
        c-dist  (c-distance c-start c-end)
        c-step  (* c-dist t-step)]
    {:t   (or (:t s) 0)
     :n   (or (:t s) 0)
     ; start coordinaes
     :x1  x-start
     :y1  y-start
     ; end coordinates
     :x2  (or (:x2 s) (rand-int width))
     :y2  (or (:y2 s) (rand-int height))
     ; initial coordinates: same as start
     :x   x-start
     :y   y-start
     ; bezier curve anchor points
     :bx1 (or (:bx1 s) (rand-int width))
     :by1 (or (:by1 s) (rand-int height))
     :bx2 (or (:bx2 s) (rand-int width))
     :by2 (or (:by2 s) (rand-int height))
     ; colour (hue)
     :c   c-start
     :c1  c-start
     :c2  c-end
     :c-dist c-dist ; testing only
     :c-step c-step}))


;; Creates the initial state passed to draw-state
(defn setup []
  ; Configuration
  (q/frame-rate frame-rate)
  (q/color-mode :hsb)
  ; Return new initial state
  (new-state {}))


;; Increases `c` by `step`, wrapping around the max-hue value 255
(defn increase-hue [c step]
  ; (println "could return:" (abs (- (+ c amt) 255)))
  (let [hue (+ c step)]
    (if (< hue 255)
      hue
      (abs (- hue 255)))))


(defn update-state [{:keys [x y c c1 x1 y1 x2 y2 c2 bx1 by1 bx2 by2 t c-step n] :as state}]
  ; (println "updating state" state)
  ; (println "n=" n ", t=" t)
  (if (< t 1.0)
    ; not at target, step towards
    (assoc state
      :n (inc n)
      :x (q/bezier-point x1 bx1 bx2 x2 (+ t t-step))
      :y (q/bezier-point y1 by1 by2 y2 (+ t t-step))
      :c (increase-hue c c-step)
      :t (+ t t-step))
    ; reached target: create new state
    (new-state {
      :x-start x2
      :y-start y2
      :c-start c2})))


(defn draw-state [{:keys [x y c x1 y1 x2 y2 bx1 by1 bx2 by2] :as state}]
  ; cover everything with a low-opacity rectangle to 'fade' it out
  ; we need blend mode to fade to 0
  ; (blend-mode SUBTRACT)
  (q/fill 0 10 255 5)
  (q/rect 0 0 width height)
  ; (blend-mode BLEND)
  ; draw the new circle on top
  (q/fill c 100 100)
  (q/stroke 70 40 40)
  (q/ellipse x y 20 20))


; mouse-events (not currently used)
; (defn set-event-target [state e]
;   (assoc state
;     :x2 (:x e)
;     :y2 (:y e)
;     :c2 (rand-int 255)))


; called in index.html
(defn ^:export run-sketch []
  (q/defsketch lines
    ; matches against the id of an HTML element on the page
    :host "lines"
    :size [width height]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; event handlers
    ; :mouse-clicked set-event-target
    ; :mouse-dragged set-event-target
    ; enables functional mode:
    ; https://github.com/quil/quil/wiki/Functional-mode-%28fun-mode%29
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)