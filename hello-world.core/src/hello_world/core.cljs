(ns ^:figwheel-hooks hello-world.core
  (:require
    [brainfuck :as bf :refer [bf_run]]
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rdom]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))
(def click-count (atom 0))

(defn lister
  [items]
  [:ul
   (for [item items]
     ^{:key item} [:li item])])

(defn counting-click
  []
  [:div
   [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button"
            :value "Click me!"
            :on-click (fn [] (swap! click-count inc))}]])

(defn timer-component []
  (let [seconds-elapsed (atom 0)]     ;; setup, and local state
    (fn []        ;; inner, render function is returned
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div "Seconds Elapsed: " @seconds-elapsed])))

(defn atom-input
  "value is an atom"
  [value]
  [:input {:type "text"
           :value @value
           :size 100
           :rows "4"
           :on-change #(reset! value (-> % .-target .-value))}])

(defn shared-state
  []
  (let [val (atom "foo")]
    (fn
      []
      [:div
       [:p "The value is now: " @val]
       [:p "Change it here: " [atom-input val]]])))

(defn hello-bf []
  (let [bf_code (atom (str "++++++++"
                           "[>++++[>++>+++>+++>+<<<<-]"
                           ">+>+>->>+[<]<-]>>.>---.+++++++.."
                           "+++.>>.<-.<.+++.------.--------.>>+.>++."))]
    (fn
      []
      [:div
       [:p
        "BF Interpertator: "
        [:span {:style
                {:background-color "powderblue"
                 :color "green"
                 :font-weight "bold"}} (bf_run @bf_code)]]
       [:p "Enter your BF code" [atom-input bf_code]]])))

(defn hello-world []
  [:div
   [:div
    [:h1 (:text @app-state)]
    [:h2 "Useless stuff"]
    [timer-component]
    [counting-click]
    [:h2 "Brainfuck"]
    [hello-bf]]
   [:div
    [:h2 "Another pointless thing"]
    [lister '("Hello" "Every" "Body")]]])

(defn mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (rdom/render [hello-world] el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
