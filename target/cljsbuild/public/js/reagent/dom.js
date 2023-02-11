// Compiled by ClojureScript 1.11.54 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__32555 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__32556 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__32556);

try{var G__32557 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__32558 = container;
var G__32559 = (function (){
var _STAR_always_update_STAR__orig_val__32560 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__32561 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__32561);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__32560);
}});
return reagent.dom.global$module$react_dom.render(G__32557,G__32558,G__32559);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__32555);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
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
var G__32563 = arguments.length;
switch (G__32563) {
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
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__32564 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32564,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32564,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
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
reagent.ratom.flush_BANG_();

var seq__32568_32584 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__32569_32585 = null;
var count__32570_32586 = (0);
var i__32571_32587 = (0);
while(true){
if((i__32571_32587 < count__32570_32586)){
var vec__32578_32588 = chunk__32569_32585.cljs$core$IIndexed$_nth$arity$2(null,i__32571_32587);
var container_32589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32578_32588,(0),null);
var comp_32590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32578_32588,(1),null);
reagent.dom.re_render_component(comp_32590,container_32589);


var G__32591 = seq__32568_32584;
var G__32592 = chunk__32569_32585;
var G__32593 = count__32570_32586;
var G__32594 = (i__32571_32587 + (1));
seq__32568_32584 = G__32591;
chunk__32569_32585 = G__32592;
count__32570_32586 = G__32593;
i__32571_32587 = G__32594;
continue;
} else {
var temp__5804__auto___32595 = cljs.core.seq(seq__32568_32584);
if(temp__5804__auto___32595){
var seq__32568_32596__$1 = temp__5804__auto___32595;
if(cljs.core.chunked_seq_QMARK_(seq__32568_32596__$1)){
var c__5565__auto___32597 = cljs.core.chunk_first(seq__32568_32596__$1);
var G__32598 = cljs.core.chunk_rest(seq__32568_32596__$1);
var G__32599 = c__5565__auto___32597;
var G__32600 = cljs.core.count(c__5565__auto___32597);
var G__32601 = (0);
seq__32568_32584 = G__32598;
chunk__32569_32585 = G__32599;
count__32570_32586 = G__32600;
i__32571_32587 = G__32601;
continue;
} else {
var vec__32581_32602 = cljs.core.first(seq__32568_32596__$1);
var container_32603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32581_32602,(0),null);
var comp_32604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32581_32602,(1),null);
reagent.dom.re_render_component(comp_32604,container_32603);


var G__32605 = cljs.core.next(seq__32568_32596__$1);
var G__32606 = null;
var G__32607 = (0);
var G__32608 = (0);
seq__32568_32584 = G__32605;
chunk__32569_32585 = G__32606;
count__32570_32586 = G__32607;
i__32571_32587 = G__32608;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
