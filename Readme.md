# gthvn1.github.io

This website is just used for testing clojurescript and reagent.

## Build & install
- Repo created using `lein new figwheel-main hello-world.core -- --reagent`
- `cd hello-world.core`
- Compiled with `lein fig:build`
- Production is done by `lein clean && lein fig:min`
  - Then copy some files from **resources/public**
    - `index.html`
    - `cljs-out/dev-main.js`
    - `css/style.css`
  - into **docs** repo

## Reagent
- https://reagent-project.github.io/
- https://cljdoc.org/d/reagent/reagent/1.1.1/doc/tutorials/using-hiccup-to-describe-html
