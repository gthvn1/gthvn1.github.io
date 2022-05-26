// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__9442 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__9443 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__9443);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__9444 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__9445 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__9445);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__9444);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__9442);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__9447 = arguments.length;
switch (G__9447) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__9448 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__9448,(0),null);
var callback = cljs.core.nth.call(null,vec__9448,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__9452_9468 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__9453_9469 = null;
var count__9454_9470 = (0);
var i__9455_9471 = (0);
while(true){
if((i__9455_9471 < count__9454_9470)){
var vec__9462_9472 = cljs.core._nth.call(null,chunk__9453_9469,i__9455_9471);
var container_9473 = cljs.core.nth.call(null,vec__9462_9472,(0),null);
var comp_9474 = cljs.core.nth.call(null,vec__9462_9472,(1),null);
reagent.dom.re_render_component.call(null,comp_9474,container_9473);


var G__9475 = seq__9452_9468;
var G__9476 = chunk__9453_9469;
var G__9477 = count__9454_9470;
var G__9478 = (i__9455_9471 + (1));
seq__9452_9468 = G__9475;
chunk__9453_9469 = G__9476;
count__9454_9470 = G__9477;
i__9455_9471 = G__9478;
continue;
} else {
var temp__5720__auto___9479 = cljs.core.seq.call(null,seq__9452_9468);
if(temp__5720__auto___9479){
var seq__9452_9480__$1 = temp__5720__auto___9479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9452_9480__$1)){
var c__4679__auto___9481 = cljs.core.chunk_first.call(null,seq__9452_9480__$1);
var G__9482 = cljs.core.chunk_rest.call(null,seq__9452_9480__$1);
var G__9483 = c__4679__auto___9481;
var G__9484 = cljs.core.count.call(null,c__4679__auto___9481);
var G__9485 = (0);
seq__9452_9468 = G__9482;
chunk__9453_9469 = G__9483;
count__9454_9470 = G__9484;
i__9455_9471 = G__9485;
continue;
} else {
var vec__9465_9486 = cljs.core.first.call(null,seq__9452_9480__$1);
var container_9487 = cljs.core.nth.call(null,vec__9465_9486,(0),null);
var comp_9488 = cljs.core.nth.call(null,vec__9465_9486,(1),null);
reagent.dom.re_render_component.call(null,comp_9488,container_9487);


var G__9489 = cljs.core.next.call(null,seq__9452_9480__$1);
var G__9490 = null;
var G__9491 = (0);
var G__9492 = (0);
seq__9452_9468 = G__9489;
chunk__9453_9469 = G__9490;
count__9454_9470 = G__9491;
i__9455_9471 = G__9492;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
