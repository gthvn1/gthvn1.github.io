// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/hello_world/core.cljs. Go ahead and edit it and see reloading in action."], 0));
hello_world.core.multiply = (function hello_world$core$multiply(a,b){
return (a * b);
});
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.app_state !== 'undefined')){
} else {
hello_world.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,"Hello World App"], null));
}
hello_world.core.get_app_element = (function hello_world$core$get_app_element(){
return goog.dom.getElement("app");
});
hello_world.core.simple_component = (function hello_world$core$simple_component(){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);

new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"I am a component"], null);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$someclass,"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null)], null)," and red "], null),"text."], null);
});
/**
 * Take a name and say a polite hello
 */
hello_world.core.hello_component = (function hello_world$core$hello_component(name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Hello, ",name], null);
});
hello_world.core.hello_world = (function hello_world$core$hello_world(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.hello_component,"tout le monde"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"I include simple-component."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.simple_component], null)], null);
});
hello_world.core.mount = (function hello_world$core$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.hello_world], null),el);
});
hello_world.core.mount_app_element = (function hello_world$core$mount_app_element(){
var temp__5720__auto__ = hello_world.core.get_app_element();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return hello_world.core.mount(el);
} else {
return null;
}
});
hello_world.core.mount_app_element();
hello_world.core.on_reload = (function hello_world$core$on_reload(){
return hello_world.core.mount_app_element();
});
