// Compiled by ClojureScript 1.11.54 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('prime_spiral.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
prime_spiral.core.window_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
prime_spiral.core.on_window_resize = (function prime_spiral$core$on_window_resize(evt){
return cljs.core.reset_BANG_(prime_spiral.core.window_width,window.innerWidth);
});
prime_spiral.core.the_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
prime_spiral.core.reset_state_BANG_ = (function prime_spiral$core$reset_state_BANG_(w,h){
return cljs.core.reset_BANG_(prime_spiral.core.the_state,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$direction,"S",cljs.core.cst$kw$row_DASH_length,(1),cljs.core.cst$kw$iteration,(0),cljs.core.cst$kw$step_DASH_count,(0),cljs.core.cst$kw$square_DASH_size,(1),cljs.core.cst$kw$x,(w / (2)),cljs.core.cst$kw$y,(h / (2)),cljs.core.cst$kw$first_DASH_run,true], null));
});
prime_spiral.core.move_a_step_BANG_ = (function prime_spiral$core$move_a_step_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prime_spiral.core.the_state,(function (p1__32611_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__32611_SHARP_,cljs.core.cst$kw$step_DASH_count,cljs.core.inc);
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__32615 = cljs.core.cst$kw$step_DASH_count;
var fexpr__32614 = cljs.core.deref(prime_spiral.core.the_state);
return (fexpr__32614.cljs$core$IFn$_invoke$arity$1 ? fexpr__32614.cljs$core$IFn$_invoke$arity$1(G__32615) : fexpr__32614.call(null,G__32615));
})(),(function (){var G__32617 = cljs.core.cst$kw$row_DASH_length;
var fexpr__32616 = cljs.core.deref(prime_spiral.core.the_state);
return (fexpr__32616.cljs$core$IFn$_invoke$arity$1 ? fexpr__32616.cljs$core$IFn$_invoke$arity$1(G__32617) : fexpr__32616.call(null,G__32617));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prime_spiral.core.the_state,cljs.core.assoc,cljs.core.cst$kw$step_DASH_count,(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prime_spiral.core.the_state,cljs.core.assoc,cljs.core.cst$kw$direction,(function (){var G__32618 = (function (){var G__32620 = cljs.core.cst$kw$direction;
var fexpr__32619 = cljs.core.deref(prime_spiral.core.the_state);
return (fexpr__32619.cljs$core$IFn$_invoke$arity$1 ? fexpr__32619.cljs$core$IFn$_invoke$arity$1(G__32620) : fexpr__32619.call(null,G__32620));
})();
return (prime_spiral.core.next_direction.cljs$core$IFn$_invoke$arity$1 ? prime_spiral.core.next_direction.cljs$core$IFn$_invoke$arity$1(G__32618) : prime_spiral.core.next_direction.call(null,G__32618));
})());

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__32622 = cljs.core.cst$kw$iteration;
var fexpr__32621 = cljs.core.deref(prime_spiral.core.the_state);
return (fexpr__32621.cljs$core$IFn$_invoke$arity$1 ? fexpr__32621.cljs$core$IFn$_invoke$arity$1(G__32622) : fexpr__32621.call(null,G__32622));
})(),(2))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prime_spiral.core.the_state,(function (p1__32612_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__32612_SHARP_,cljs.core.cst$kw$row_DASH_length,cljs.core.inc);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prime_spiral.core.the_state,cljs.core.assoc,cljs.core.cst$kw$iteration,(0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prime_spiral.core.the_state,(function (p1__32613_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__32613_SHARP_,cljs.core.cst$kw$iteration,cljs.core.inc);
}));
} else {
return null;
}
});
prime_spiral.core.next_coordinate_BANG_ = (function prime_spiral$core$next_coordinate_BANG_(state){
var map__32623 = state;
var map__32623__$1 = cljs.core.__destructure_map(map__32623);
var old_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32623__$1,cljs.core.cst$kw$x);
var old_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32623__$1,cljs.core.cst$kw$y);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32623__$1,cljs.core.cst$kw$direction);
var first_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32623__$1,cljs.core.cst$kw$first_DASH_run);
var square_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32623__$1,cljs.core.cst$kw$square_DASH_size);
if(cljs.core.truth_(first_run)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prime_spiral.core.the_state,cljs.core.assoc,cljs.core.cst$kw$first_DASH_run,false);
} else {
var G__32624_32629 = direction;
switch (G__32624_32629) {
case "E":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prime_spiral.core.the_state,cljs.core.assoc,cljs.core.cst$kw$x,(old_x + square_size));

break;
case "S":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prime_spiral.core.the_state,cljs.core.assoc,cljs.core.cst$kw$y,(old_y + square_size));

break;
case "W":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prime_spiral.core.the_state,cljs.core.assoc,cljs.core.cst$kw$x,(old_x - square_size));

break;
case "N":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(prime_spiral.core.the_state,cljs.core.assoc,cljs.core.cst$kw$y,(old_y - square_size));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32624_32629)].join('')));

}
}

prime_spiral.core.move_a_step_BANG_();

return (new cljs.core.List(null,(function (){var G__32626 = cljs.core.cst$kw$x;
var fexpr__32625 = cljs.core.deref(prime_spiral.core.the_state);
return (fexpr__32625.cljs$core$IFn$_invoke$arity$1 ? fexpr__32625.cljs$core$IFn$_invoke$arity$1(G__32626) : fexpr__32625.call(null,G__32626));
})(),(new cljs.core.List(null,(function (){var G__32628 = cljs.core.cst$kw$y;
var fexpr__32627 = cljs.core.deref(prime_spiral.core.the_state);
return (fexpr__32627.cljs$core$IFn$_invoke$arity$1 ? fexpr__32627.cljs$core$IFn$_invoke$arity$1(G__32628) : fexpr__32627.call(null,G__32628));
})(),null,(1),null)),(2),null));
});
prime_spiral.core.next_direction = (function prime_spiral$core$next_direction(current_direction){
var G__32631 = current_direction;
switch (G__32631) {
case "E":
return "N";

break;
case "S":
return "E";

break;
case "W":
return "S";

break;
case "N":
return "W";

break;
default:
return "E";

}
});
prime_spiral.core.prime_QMARK_ = (function prime_spiral$core$prime_QMARK_(x){
var values = cljs.core.range.cljs$core$IFn$_invoke$arity$2((2),((1) + (function (){var G__32634 = Math.sqrt(x);
return Math.floor(G__32634);
})()));
return (((x > (1))) && (cljs.core.not(cljs.core.some((function (p1__32633_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(x,p1__32633_SHARP_));
}),values))));
});
prime_spiral.core.generate_number_map = (function prime_spiral$core$generate_number_map(no_of_digits){
var iter__5520__auto__ = (function prime_spiral$core$generate_number_map_$_iter__32635(s__32636){
return (new cljs.core.LazySeq(null,(function (){
var s__32636__$1 = s__32636;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32636__$1);
if(temp__5804__auto__){
var s__32636__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32636__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__32636__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__32638 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__32637 = (0);
while(true){
if((i__32637 < size__5519__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5518__auto__,i__32637);
cljs.core.chunk_append(b__32638,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num,x,cljs.core.cst$kw$prime,prime_spiral.core.prime_QMARK_(x)], null));

var G__32639 = (i__32637 + (1));
i__32637 = G__32639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32638),prime_spiral$core$generate_number_map_$_iter__32635(cljs.core.chunk_rest(s__32636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32638),null);
}
} else {
var x = cljs.core.first(s__32636__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num,x,cljs.core.cst$kw$prime,prime_spiral.core.prime_QMARK_(x)], null),prime_spiral$core$generate_number_map_$_iter__32635(cljs.core.rest(s__32636__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),((1) + no_of_digits)));
});
prime_spiral.core.add_coordinates = (function prime_spiral$core$add_coordinates(list_of_maps){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$coordinate,prime_spiral.core.next_coordinate_BANG_(cljs.core.deref(prime_spiral.core.the_state)));
}),list_of_maps);
});
prime_spiral.core.main = (function prime_spiral$core$main(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prime_spiral.core.home_page], null),document.getElementById("app"));

return window.addEventListener("resize",prime_spiral.core.on_window_resize);
});
goog.exportSymbol('prime_spiral.core.main', prime_spiral.core.main);
prime_spiral.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.cst$kw$index], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$items], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",cljs.core.cst$kw$item], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",cljs.core.cst$kw$about], null)], null));
prime_spiral.core.path_for = (function prime_spiral$core$path_for(var_args){
var args__5772__auto__ = [];
var len__5766__auto___32646 = arguments.length;
var i__5767__auto___32647 = (0);
while(true){
if((i__5767__auto___32647 < len__5766__auto___32646)){
args__5772__auto__.push((arguments[i__5767__auto___32647]));

var G__32648 = (i__5767__auto___32647 + (1));
i__5767__auto___32647 = G__32648;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return prime_spiral.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(prime_spiral.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__32642){
var vec__32643 = p__32642;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32643,(0),null);
if(cljs.core.truth_(params)){
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(prime_spiral.core.router,route,params));
} else {
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(prime_spiral.core.router,route));
}
}));

(prime_spiral.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(prime_spiral.core.path_for.cljs$lang$applyTo = (function (seq32640){
var G__32641 = cljs.core.first(seq32640);
var seq32640__$1 = cljs.core.next(seq32640);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32641,seq32640__$1);
}));

prime_spiral.core.home_page = (function prime_spiral$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prime_spiral.core.div_with_canvas], null);
});
});
prime_spiral.core.div_with_canvas = (function prime_spiral$core$div_with_canvas(){
var dom_node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$){
var G__32649 = cljs.core.deref(dom_node).firstChild;
return (prime_spiral.core.draw_canvas_contents.cljs$core$IFn$_invoke$arity$1 ? prime_spiral.core.draw_canvas_contents.cljs$core$IFn$_invoke$arity$1(G__32649) : prime_spiral.core.draw_canvas_contents.call(null,G__32649));
}),cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
cljs.core.reset_BANG_(dom_node,reagent.dom.dom_node(this$));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["component-did-mount fn called"], 0));
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["reagent-render fn called"], 0));

cljs.core.deref(prime_spiral.core.window_width);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$with_DASH_canvas,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,(function (){var temp__5802__auto__ = cljs.core.deref(dom_node);
if(cljs.core.truth_(temp__5802__auto__)){
var node = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,node.clientWidth,cljs.core.cst$kw$height,node.clientHeight], null);
} else {
return null;
}
})()], null)], null);
})], null));
});
prime_spiral.core.debug = false;
prime_spiral.core.digits = (16);
prime_spiral.core.no_of_digits = (function prime_spiral$core$no_of_digits(canvas){
var w = canvas.clientWidth;
var h = canvas.clientHeight;
var matrix_dim = (function (){var x__5131__auto__ = w;
var y__5132__auto__ = h;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var square_size = (function (){var G__32651 = cljs.core.cst$kw$square_DASH_size;
var fexpr__32650 = cljs.core.deref(prime_spiral.core.the_state);
return (fexpr__32650.cljs$core$IFn$_invoke$arity$1 ? fexpr__32650.cljs$core$IFn$_invoke$arity$1(G__32651) : fexpr__32650.call(null,G__32651));
})();
if(prime_spiral.core.debug){
return prime_spiral.core.digits;
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__32652 = (function (){var G__32654 = ((matrix_dim - square_size) / square_size);
return Math.floor(G__32654);
})();
var G__32653 = (2);
return Math.pow(G__32652,G__32653);
})()], 0));

var G__32655 = (function (){var G__32657 = ((matrix_dim - square_size) / square_size);
return Math.floor(G__32657);
})();
var G__32656 = (2);
return Math.pow(G__32655,G__32656);
}
});
prime_spiral.core.draw_canvas_contents = (function prime_spiral$core$draw_canvas_contents(canvas){
var ctx = canvas.getContext("2d");
var w = canvas.clientWidth;
var h = canvas.clientHeight;
prime_spiral.core.reset_state_BANG_(w,h);

var seq__32658 = cljs.core.seq(prime_spiral.core.add_coordinates(prime_spiral.core.generate_number_map(prime_spiral.core.no_of_digits(canvas))));
var chunk__32659 = null;
var count__32660 = (0);
var i__32661 = (0);
while(true){
if((i__32661 < count__32660)){
var item = chunk__32659.cljs$core$IIndexed$_nth$arity$2(null,i__32661);
var G__32676_32690 = ctx;
var G__32677_32691 = (function (){var G__32680 = cljs.core.cst$kw$coordinate;
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32680) : item.call(null,G__32680));
})();
var G__32678_32692 = (function (){var G__32681 = cljs.core.cst$kw$prime;
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32681) : item.call(null,G__32681));
})();
var G__32679_32693 = (function (){var G__32682 = cljs.core.cst$kw$num;
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32682) : item.call(null,G__32682));
})();
(prime_spiral.core.draw_circle.cljs$core$IFn$_invoke$arity$4 ? prime_spiral.core.draw_circle.cljs$core$IFn$_invoke$arity$4(G__32676_32690,G__32677_32691,G__32678_32692,G__32679_32693) : prime_spiral.core.draw_circle.call(null,G__32676_32690,G__32677_32691,G__32678_32692,G__32679_32693));


var G__32694 = seq__32658;
var G__32695 = chunk__32659;
var G__32696 = count__32660;
var G__32697 = (i__32661 + (1));
seq__32658 = G__32694;
chunk__32659 = G__32695;
count__32660 = G__32696;
i__32661 = G__32697;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32658);
if(temp__5804__auto__){
var seq__32658__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32658__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32658__$1);
var G__32698 = cljs.core.chunk_rest(seq__32658__$1);
var G__32699 = c__5565__auto__;
var G__32700 = cljs.core.count(c__5565__auto__);
var G__32701 = (0);
seq__32658 = G__32698;
chunk__32659 = G__32699;
count__32660 = G__32700;
i__32661 = G__32701;
continue;
} else {
var item = cljs.core.first(seq__32658__$1);
var G__32683_32702 = ctx;
var G__32684_32703 = (function (){var G__32687 = cljs.core.cst$kw$coordinate;
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32687) : item.call(null,G__32687));
})();
var G__32685_32704 = (function (){var G__32688 = cljs.core.cst$kw$prime;
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32688) : item.call(null,G__32688));
})();
var G__32686_32705 = (function (){var G__32689 = cljs.core.cst$kw$num;
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__32689) : item.call(null,G__32689));
})();
(prime_spiral.core.draw_circle.cljs$core$IFn$_invoke$arity$4 ? prime_spiral.core.draw_circle.cljs$core$IFn$_invoke$arity$4(G__32683_32702,G__32684_32703,G__32685_32704,G__32686_32705) : prime_spiral.core.draw_circle.call(null,G__32683_32702,G__32684_32703,G__32685_32704,G__32686_32705));


var G__32706 = cljs.core.next(seq__32658__$1);
var G__32707 = null;
var G__32708 = (0);
var G__32709 = (0);
seq__32658 = G__32706;
chunk__32659 = G__32707;
count__32660 = G__32708;
i__32661 = G__32709;
continue;
}
} else {
return null;
}
}
break;
}
});
prime_spiral.core.add_coordinates(prime_spiral.core.generate_number_map(prime_spiral.core.no_of_digits((9))));
prime_spiral.core.draw_circle = (function prime_spiral$core$draw_circle(ctx,coordinates,prime,number){
var vec__32710 = coordinates;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710,(1),null);
if(cljs.core.truth_(prime)){
(ctx.fillStyle = "black");

ctx.beginPath();

ctx.arc(x,y,((function (){var G__32714 = cljs.core.cst$kw$square_DASH_size;
var fexpr__32713 = cljs.core.deref(prime_spiral.core.the_state);
return (fexpr__32713.cljs$core$IFn$_invoke$arity$1 ? fexpr__32713.cljs$core$IFn$_invoke$arity$1(G__32714) : fexpr__32713.call(null,G__32714));
})() / (2)),(0),((2) * Math.PI));

return ctx.fill();
} else {
return null;
}
});
prime_spiral.core.item_page = (function prime_spiral$core$item_page(){
return (function (){
var routing_data = reagent.session.get(cljs.core.cst$kw$route);
var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(routing_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_params,cljs.core.cst$kw$item_DASH_id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,["Item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)," of prime-spiral"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,prime_spiral.core.path_for(cljs.core.cst$kw$items)], null),"Back to the list of items"], null)], null)], null);
});
});
prime_spiral.core.about_page = (function prime_spiral$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"About prime-spiral"], null)], null);
});
});
prime_spiral.core.page_for = (function prime_spiral$core$page_for(route){
var G__32715 = route;
var G__32715__$1 = (((G__32715 instanceof cljs.core.Keyword))?G__32715.fqn:null);
switch (G__32715__$1) {
case "index":
return new cljs.core.Var(function(){return prime_spiral.core.home_page;},cljs.core.cst$sym$prime_DASH_spiral$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$prime_DASH_spiral$core,cljs.core.cst$sym$home_DASH_page,"src/cljs/prime_spiral/core.cljs",16,1,126,126,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(prime_spiral.core.home_page)?prime_spiral.core.home_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32715__$1)].join('')));

}
});
prime_spiral.core.current_page = (function prime_spiral$core$current_page(){
return (function (){
var page = cljs.core.cst$kw$current_DASH_page.cljs$core$IFn$_invoke$arity$1(reagent.session.get(cljs.core.cst$kw$route));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null);
});
});
prime_spiral.core.mount_root = (function prime_spiral$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prime_spiral.core.current_page], null),document.getElementById("app"));
});
prime_spiral.core.init_BANG_ = (function prime_spiral$core$init_BANG_(){
clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
var match = reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2(prime_spiral.core.router,path);
var current_page = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match));
var route_params = cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render(clerk.core.after_render_BANG_);

reagent.session.put_BANG_(cljs.core.cst$kw$route,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_page,prime_spiral.core.page_for(current_page),cljs.core.cst$kw$route_DASH_params,route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2(prime_spiral.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return prime_spiral.core.mount_root();
});
prime_spiral.core.reload_BANG_ = (function prime_spiral$core$reload_BANG_(){
return prime_spiral.core.mount_root();
});
