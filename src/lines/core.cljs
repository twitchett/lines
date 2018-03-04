(ns lines.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [goog.string :as gstring]
            [goog.string.format]))

; configure global properties
(def width 500)
(def height 500)
(def frame-rate 300)
(def t-step 0.005)    ; 200 steps 

;; util function: returns the absolute value of n
(defn abs [n] (max n (- n)))

; Creates a new state with random values.
; Values can be overriden by passing a map.
; TODO use partial function or make the argument optional
(defn new-state [s]
  (let [start   (list (q/random width) (q/random height))
        end     (list (q/random height) (q/random width))
        c-start (or (:c-start s) (q/random 225))
        c-end   (or (:c-end s) (q/random 225))
        c-diff  (abs (- c-end c-start))
        c-step  (or (:c-step s) (* c-diff t-step))]
    {:t   (or (:t s) 0)
     :n   (or (:t s) 0)
     ; start coordinaes
     :x1  (or (:x1 s) (first start))
     :y1  (or (:y1 s) (first start))
     ; end coordinates
     :x2  (or (:x2 s) (first end))
     :y2  (or (:y2 s) (second end))
     ; initial coordinates: same as start
     :x   (or (:x s) (first start))
     :y   (or (:y s) (second start))
     ; bezier curve anchor points
     :bx1 (or (:bx1 s) (q/random width))
     :by1 (or (:by1 s) (q/random height))
     :bx2 (or (:bx2 s) (q/random width))
     :by2 (or (:by2 s) (q/random height))
     ; colour (hue)
     :c   c-start
     :c1  c-start
     :c2  c-end
     :c-step c-step}))

;; Creates the initial state passed to draw-state
(defn setup []
  (println "-- setup")
  (q/frame-rate frame-rate)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  (new-state {}))

;; util function: formats a number to 3 dp
(defn fmt [s]
  (str (gstring/format "%.3f" s)))

(defn increase-hue [c amt]
  ; (println "could return:" (abs (- (+ c amt) 255)))
  (let [hue (+ c amt)]
    (if (< hue 255)
      hue
      (abs (- hue 255)))))

(defn new-color [c c1 c2 t c-step]
  (if (< c1 c2)
    ; just increase towards c2
    (let [diff (- c2 c1)
          frac (* diff t-step)
          newc-old (+ c (* frac t))
          newc (+ c (* c-step t))]
      (println "diff c1 -> c2: " (fmt c1) (fmt c2) (fmt diff))
      (println "frac: " (fmt frac))
      (println "new c: " (fmt newc) " @ " (fmt t))
      (println "--------------")
      newc)
    ; in this case we have to loop around the hue spectrum
    (let [diff (- 255 (- c1 c2))  ; we can use max/min here to work out the difference for both branches
          frac (* diff t-step)
          newc-old (increase-hue c frac)
          newc (increase-hue c c-step)]
      (println "diff c1 -> c2: " (fmt c1)  "--> " (fmt c2)  "::" (fmt diff))
      (println "frac: " (fmt frac))
      (println "newc: " (fmt newc))
      (println " !! -------------->>> ")
      newc)))

(defn update-state [{:keys [x y c c1 x1 y1 x2 y2 c2 bx1 by1 bx2 by2 t c-step n] :as state}]
  ; (println "updating state" state)
  (println "n=" n ", t=" t)
  (if (> 1.0 t)
    ; not at target, step towards
    (let [diff (abs (- c2 c1))
          frac (* diff t-step)
          curr (+ c (* frac t))
          ; newc (+ (* (abs (- c2 c1)) t-step) (* t t-step)
          ]
      ; (println "-------- @ t " (fnum t))
      ; (println "diff " (fnum c2) "-" (fnum c1) "->" (fnum diff))
      ; (println "frac " (fnum frac))
      ; (println "c -> c2" (fnum curr) (fnum c2))
      ; (println "c -> c2" (str (gstring/format "%.9f" c)) (str (gstring/format "%.3f" c2)))
      ; (println "t" (str (gstring/format "%.3f" t)))
      (assoc state
        :n (inc n)
        :c (new-color c c1 c2 t c-step)
        :x (q/bezier-point x1 bx1 bx2 x2 (+ t t-step))
        :y (q/bezier-point y1 by1 by2 y2 (+ t t-step))
        :t (+ t t-step)))
    ; reached target: create new state
    (new-state {:x x2
                :y y2
                :x1 x2
                :y1 y2
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
    ; :mouse-clicked set-event-target
    ; :mouse-dragged set-event-target
    ; This sketch uses functional-mode middleware.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
