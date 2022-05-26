// Compiled by ClojureScript 1.11.4 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__10118__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10119__i = 0, G__10119__a = new Array(arguments.length -  0);
while (G__10119__i < G__10119__a.length) {G__10119__a[G__10119__i] = arguments[G__10119__i + 0]; ++G__10119__i;}
  args = new cljs.core.IndexedSeq(G__10119__a,0,null);
} 
return G__10118__delegate.call(this,args);};
G__10118.cljs$lang$maxFixedArity = 0;
G__10118.cljs$lang$applyTo = (function (arglist__10120){
var args = cljs.core.seq(arglist__10120);
return G__10118__delegate(args);
});
G__10118.cljs$core$IFn$_invoke$arity$variadic = G__10118__delegate;
return G__10118;
})()
);

(o.error = (function() { 
var G__10121__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10122__i = 0, G__10122__a = new Array(arguments.length -  0);
while (G__10122__i < G__10122__a.length) {G__10122__a[G__10122__i] = arguments[G__10122__i + 0]; ++G__10122__i;}
  args = new cljs.core.IndexedSeq(G__10122__a,0,null);
} 
return G__10121__delegate.call(this,args);};
G__10121.cljs$lang$maxFixedArity = 0;
G__10121.cljs$lang$applyTo = (function (arglist__10123){
var args = cljs.core.seq(arglist__10123);
return G__10121__delegate(args);
});
G__10121.cljs$core$IFn$_invoke$arity$variadic = G__10121__delegate;
return G__10121;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
