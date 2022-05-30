(ns hello-world.core-test
    (:require
     [cljs.test :refer-macros [deftest is]]))

(deftest always-true
  (is (= 10 10)))
