# gthvn1.github.io

- New version is in *[docs](https://github.com/gthvn1/gthvn1.github.io/tree/master/docs)*
- Old version is in *[docs.old-site/](https://github.com/gthvn1/gthvn1.github.io/tree/master/docs.old-site)*

## New version

This new version is for testing [Zig](https://ziglang.org/) and [WebAssembly](https://webassembly.org/).
For the moment we just compute the Fibonnaci sequence to see how JS and Wasm interact. 

---

## Old version...

This old version was just used for testing clojurescript and reagent.

### Build & install
- Repo created using `lein new figwheel-main hello-world.core -- --reagent`
- `cd hello-world.core`
- Compiled with `lein fig:build`
- Production is done by `lein clean && lein fig:min`
  - Then copy some files from **resources/public**
    - `index.html`
    - `cljs-out/dev-main.js`
    - `css/style.css`
  - into **docs** repo

### Reagent
- https://reagent-project.github.io/
- https://cljdoc.org/d/reagent/reagent/1.1.1/doc/tutorials/using-hiccup-to-describe-html
