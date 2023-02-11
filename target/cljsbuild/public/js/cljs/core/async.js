// Compiled by ClojureScript 1.11.54 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29882 = arguments.length;
switch (G__29882) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29883 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29883 = (function (f,blockable,meta29884){
this.f = f;
this.blockable = blockable;
this.meta29884 = meta29884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29885,meta29884__$1){
var self__ = this;
var _29885__$1 = this;
return (new cljs.core.async.t_cljs$core$async29883(self__.f,self__.blockable,meta29884__$1));
}));

(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29885){
var self__ = this;
var _29885__$1 = this;
return self__.meta29884;
}));

(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta29884], null);
}));

(cljs.core.async.t_cljs$core$async29883.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29883");

(cljs.core.async.t_cljs$core$async29883.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29883");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29883.
 */
cljs.core.async.__GT_t_cljs$core$async29883 = (function cljs$core$async$__GT_t_cljs$core$async29883(f__$1,blockable__$1,meta29884){
return (new cljs.core.async.t_cljs$core$async29883(f__$1,blockable__$1,meta29884));
});

}

return (new cljs.core.async.t_cljs$core$async29883(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29889 = arguments.length;
switch (G__29889) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29892 = arguments.length;
switch (G__29892) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29895 = arguments.length;
switch (G__29895) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_29897 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29897) : fn1.call(null,val_29897));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29897) : fn1.call(null,val_29897));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29899 = arguments.length;
switch (G__29899) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___29901 = n;
var x_29902 = (0);
while(true){
if((x_29902 < n__5633__auto___29901)){
(a[x_29902] = (0));

var G__29903 = (x_29902 + (1));
x_29902 = G__29903;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__29904 = (i + (1));
i = G__29904;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29905 = (function (flag,meta29906){
this.flag = flag;
this.meta29906 = meta29906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29907,meta29906__$1){
var self__ = this;
var _29907__$1 = this;
return (new cljs.core.async.t_cljs$core$async29905(self__.flag,meta29906__$1));
}));

(cljs.core.async.t_cljs$core$async29905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29907){
var self__ = this;
var _29907__$1 = this;
return self__.meta29906;
}));

(cljs.core.async.t_cljs$core$async29905.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29905.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29905.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29905.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta29906], null);
}));

(cljs.core.async.t_cljs$core$async29905.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29905");

(cljs.core.async.t_cljs$core$async29905.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29905");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29905.
 */
cljs.core.async.__GT_t_cljs$core$async29905 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29905(flag__$1,meta29906){
return (new cljs.core.async.t_cljs$core$async29905(flag__$1,meta29906));
});

}

return (new cljs.core.async.t_cljs$core$async29905(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29908 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29908 = (function (flag,cb,meta29909){
this.flag = flag;
this.cb = cb;
this.meta29909 = meta29909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29910,meta29909__$1){
var self__ = this;
var _29910__$1 = this;
return (new cljs.core.async.t_cljs$core$async29908(self__.flag,self__.cb,meta29909__$1));
}));

(cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29910){
var self__ = this;
var _29910__$1 = this;
return self__.meta29909;
}));

(cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta29909], null);
}));

(cljs.core.async.t_cljs$core$async29908.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29908");

(cljs.core.async.t_cljs$core$async29908.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async29908");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29908.
 */
cljs.core.async.__GT_t_cljs$core$async29908 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29908(flag__$1,cb__$1,meta29909){
return (new cljs.core.async.t_cljs$core$async29908(flag__$1,cb__$1,meta29909));
});

}

return (new cljs.core.async.t_cljs$core$async29908(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29911_SHARP_){
var G__29913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29911_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29913) : fret.call(null,G__29913));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29912_SHARP_){
var G__29914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29912_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29914) : fret.call(null,G__29914));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29915 = (i + (1));
i = G__29915;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29920 = arguments.length;
var i__5767__auto___29921 = (0);
while(true){
if((i__5767__auto___29921 < len__5766__auto___29920)){
args__5772__auto__.push((arguments[i__5767__auto___29921]));

var G__29922 = (i__5767__auto___29921 + (1));
i__5767__auto___29921 = G__29922;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29918){
var map__29919 = p__29918;
var map__29919__$1 = cljs.core.__destructure_map(map__29919);
var opts = map__29919__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29916){
var G__29917 = cljs.core.first(seq29916);
var seq29916__$1 = cljs.core.next(seq29916);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29917,seq29916__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29924 = arguments.length;
switch (G__29924) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29822__auto___29970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_29948){
var state_val_29949 = (state_29948[(1)]);
if((state_val_29949 === (7))){
var inst_29944 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29950_29971 = state_29948__$1;
(statearr_29950_29971[(2)] = inst_29944);

(statearr_29950_29971[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29949 === (1))){
var state_29948__$1 = state_29948;
var statearr_29951_29972 = state_29948__$1;
(statearr_29951_29972[(2)] = null);

(statearr_29951_29972[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29949 === (4))){
var inst_29927 = (state_29948[(7)]);
var inst_29927__$1 = (state_29948[(2)]);
var inst_29928 = (inst_29927__$1 == null);
var state_29948__$1 = (function (){var statearr_29952 = state_29948;
(statearr_29952[(7)] = inst_29927__$1);

return statearr_29952;
})();
if(cljs.core.truth_(inst_29928)){
var statearr_29953_29973 = state_29948__$1;
(statearr_29953_29973[(1)] = (5));

} else {
var statearr_29954_29974 = state_29948__$1;
(statearr_29954_29974[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29949 === (13))){
var state_29948__$1 = state_29948;
var statearr_29955_29975 = state_29948__$1;
(statearr_29955_29975[(2)] = null);

(statearr_29955_29975[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29949 === (6))){
var inst_29927 = (state_29948[(7)]);
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29948__$1,(11),to,inst_29927);
} else {
if((state_val_29949 === (3))){
var inst_29946 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29948__$1,inst_29946);
} else {
if((state_val_29949 === (12))){
var state_29948__$1 = state_29948;
var statearr_29956_29976 = state_29948__$1;
(statearr_29956_29976[(2)] = null);

(statearr_29956_29976[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29949 === (2))){
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29948__$1,(4),from);
} else {
if((state_val_29949 === (11))){
var inst_29937 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
if(cljs.core.truth_(inst_29937)){
var statearr_29957_29977 = state_29948__$1;
(statearr_29957_29977[(1)] = (12));

} else {
var statearr_29958_29978 = state_29948__$1;
(statearr_29958_29978[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29949 === (9))){
var state_29948__$1 = state_29948;
var statearr_29959_29979 = state_29948__$1;
(statearr_29959_29979[(2)] = null);

(statearr_29959_29979[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29949 === (5))){
var state_29948__$1 = state_29948;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29960_29980 = state_29948__$1;
(statearr_29960_29980[(1)] = (8));

} else {
var statearr_29961_29981 = state_29948__$1;
(statearr_29961_29981[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29949 === (14))){
var inst_29942 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29962_29982 = state_29948__$1;
(statearr_29962_29982[(2)] = inst_29942);

(statearr_29962_29982[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29949 === (10))){
var inst_29934 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29963_29983 = state_29948__$1;
(statearr_29963_29983[(2)] = inst_29934);

(statearr_29963_29983[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29949 === (8))){
var inst_29931 = cljs.core.async.close_BANG_(to);
var state_29948__$1 = state_29948;
var statearr_29964_29984 = state_29948__$1;
(statearr_29964_29984[(2)] = inst_29931);

(statearr_29964_29984[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29714__auto__ = null;
var cljs$core$async$state_machine__29714__auto____0 = (function (){
var statearr_29965 = [null,null,null,null,null,null,null,null];
(statearr_29965[(0)] = cljs$core$async$state_machine__29714__auto__);

(statearr_29965[(1)] = (1));

return statearr_29965;
});
var cljs$core$async$state_machine__29714__auto____1 = (function (state_29948){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_29948);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e29966){if((e29966 instanceof Object)){
var ex__29717__auto__ = e29966;
var statearr_29967_29985 = state_29948;
(statearr_29967_29985[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29948);

return cljs.core.cst$kw$recur;
} else {
throw e29966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__29986 = state_29948;
state_29948 = G__29986;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$state_machine__29714__auto__ = function(state_29948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29714__auto____1.call(this,state_29948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29714__auto____0;
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29714__auto____1;
return cljs$core$async$state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_29968 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_29968[(6)] = c__29822__auto___29970);

return statearr_29968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__29987){
var vec__29988 = p__29987;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29988,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29988,(1),null);
var job = vec__29988;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29822__auto___30159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_29995){
var state_val_29996 = (state_29995[(1)]);
if((state_val_29996 === (1))){
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29995__$1,(2),res,v);
} else {
if((state_val_29996 === (2))){
var inst_29992 = (state_29995[(2)]);
var inst_29993 = cljs.core.async.close_BANG_(res);
var state_29995__$1 = (function (){var statearr_29997 = state_29995;
(statearr_29997[(7)] = inst_29992);

return statearr_29997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29995__$1,inst_29993);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0 = (function (){
var statearr_29998 = [null,null,null,null,null,null,null,null];
(statearr_29998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__);

(statearr_29998[(1)] = (1));

return statearr_29998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1 = (function (state_29995){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_29995);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e29999){if((e29999 instanceof Object)){
var ex__29717__auto__ = e29999;
var statearr_30000_30160 = state_29995;
(statearr_30000_30160[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29995);

return cljs.core.cst$kw$recur;
} else {
throw e29999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__30161 = state_29995;
state_29995 = G__30161;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__ = function(state_29995){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1.call(this,state_29995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_30001 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_30001[(6)] = c__29822__auto___30159);

return statearr_30001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30002){
var vec__30003 = p__30002;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30003,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30003,(1),null);
var job = vec__30003;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___30162 = n;
var __30163 = (0);
while(true){
if((__30163 < n__5633__auto___30162)){
var G__30006_30164 = type;
var G__30006_30165__$1 = (((G__30006_30164 instanceof cljs.core.Keyword))?G__30006_30164.fqn:null);
switch (G__30006_30165__$1) {
case "compute":
var c__29822__auto___30167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30163,c__29822__auto___30167,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async){
return (function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = ((function (__30163,c__29822__auto___30167,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async){
return (function (state_30019){
var state_val_30020 = (state_30019[(1)]);
if((state_val_30020 === (1))){
var state_30019__$1 = state_30019;
var statearr_30021_30168 = state_30019__$1;
(statearr_30021_30168[(2)] = null);

(statearr_30021_30168[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30020 === (2))){
var state_30019__$1 = state_30019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30019__$1,(4),jobs);
} else {
if((state_val_30020 === (3))){
var inst_30017 = (state_30019[(2)]);
var state_30019__$1 = state_30019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30019__$1,inst_30017);
} else {
if((state_val_30020 === (4))){
var inst_30009 = (state_30019[(2)]);
var inst_30010 = process__$1(inst_30009);
var state_30019__$1 = state_30019;
if(cljs.core.truth_(inst_30010)){
var statearr_30022_30169 = state_30019__$1;
(statearr_30022_30169[(1)] = (5));

} else {
var statearr_30023_30170 = state_30019__$1;
(statearr_30023_30170[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30020 === (5))){
var state_30019__$1 = state_30019;
var statearr_30024_30171 = state_30019__$1;
(statearr_30024_30171[(2)] = null);

(statearr_30024_30171[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30020 === (6))){
var state_30019__$1 = state_30019;
var statearr_30025_30172 = state_30019__$1;
(statearr_30025_30172[(2)] = null);

(statearr_30025_30172[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30020 === (7))){
var inst_30015 = (state_30019[(2)]);
var state_30019__$1 = state_30019;
var statearr_30026_30173 = state_30019__$1;
(statearr_30026_30173[(2)] = inst_30015);

(statearr_30026_30173[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__30163,c__29822__auto___30167,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async))
;
return ((function (__30163,switch__29713__auto__,c__29822__auto___30167,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0 = (function (){
var statearr_30027 = [null,null,null,null,null,null,null];
(statearr_30027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__);

(statearr_30027[(1)] = (1));

return statearr_30027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1 = (function (state_30019){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_30019);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e30028){if((e30028 instanceof Object)){
var ex__29717__auto__ = e30028;
var statearr_30029_30174 = state_30019;
(statearr_30029_30174[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30019);

return cljs.core.cst$kw$recur;
} else {
throw e30028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__30175 = state_30019;
state_30019 = G__30175;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__ = function(state_30019){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1.call(this,state_30019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__;
})()
;})(__30163,switch__29713__auto__,c__29822__auto___30167,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async))
})();
var state__29824__auto__ = (function (){var statearr_30030 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_30030[(6)] = c__29822__auto___30167);

return statearr_30030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
});})(__30163,c__29822__auto___30167,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async))
);


break;
case "async":
var c__29822__auto___30176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30163,c__29822__auto___30176,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async){
return (function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = ((function (__30163,c__29822__auto___30176,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async){
return (function (state_30043){
var state_val_30044 = (state_30043[(1)]);
if((state_val_30044 === (1))){
var state_30043__$1 = state_30043;
var statearr_30045_30177 = state_30043__$1;
(statearr_30045_30177[(2)] = null);

(statearr_30045_30177[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30044 === (2))){
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30043__$1,(4),jobs);
} else {
if((state_val_30044 === (3))){
var inst_30041 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30043__$1,inst_30041);
} else {
if((state_val_30044 === (4))){
var inst_30033 = (state_30043[(2)]);
var inst_30034 = async(inst_30033);
var state_30043__$1 = state_30043;
if(cljs.core.truth_(inst_30034)){
var statearr_30046_30178 = state_30043__$1;
(statearr_30046_30178[(1)] = (5));

} else {
var statearr_30047_30179 = state_30043__$1;
(statearr_30047_30179[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30044 === (5))){
var state_30043__$1 = state_30043;
var statearr_30048_30180 = state_30043__$1;
(statearr_30048_30180[(2)] = null);

(statearr_30048_30180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30044 === (6))){
var state_30043__$1 = state_30043;
var statearr_30049_30181 = state_30043__$1;
(statearr_30049_30181[(2)] = null);

(statearr_30049_30181[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30044 === (7))){
var inst_30039 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30050_30182 = state_30043__$1;
(statearr_30050_30182[(2)] = inst_30039);

(statearr_30050_30182[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__30163,c__29822__auto___30176,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async))
;
return ((function (__30163,switch__29713__auto__,c__29822__auto___30176,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0 = (function (){
var statearr_30051 = [null,null,null,null,null,null,null];
(statearr_30051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__);

(statearr_30051[(1)] = (1));

return statearr_30051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1 = (function (state_30043){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_30043);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e30052){if((e30052 instanceof Object)){
var ex__29717__auto__ = e30052;
var statearr_30053_30183 = state_30043;
(statearr_30053_30183[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30043);

return cljs.core.cst$kw$recur;
} else {
throw e30052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__30184 = state_30043;
state_30043 = G__30184;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__ = function(state_30043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1.call(this,state_30043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__;
})()
;})(__30163,switch__29713__auto__,c__29822__auto___30176,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async))
})();
var state__29824__auto__ = (function (){var statearr_30054 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_30054[(6)] = c__29822__auto___30176);

return statearr_30054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
});})(__30163,c__29822__auto___30176,G__30006_30164,G__30006_30165__$1,n__5633__auto___30162,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30006_30165__$1)].join('')));

}

var G__30185 = (__30163 + (1));
__30163 = G__30185;
continue;
} else {
}
break;
}

var c__29822__auto___30186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_30076){
var state_val_30077 = (state_30076[(1)]);
if((state_val_30077 === (7))){
var inst_30072 = (state_30076[(2)]);
var state_30076__$1 = state_30076;
var statearr_30078_30187 = state_30076__$1;
(statearr_30078_30187[(2)] = inst_30072);

(statearr_30078_30187[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (1))){
var state_30076__$1 = state_30076;
var statearr_30079_30188 = state_30076__$1;
(statearr_30079_30188[(2)] = null);

(statearr_30079_30188[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (4))){
var inst_30057 = (state_30076[(7)]);
var inst_30057__$1 = (state_30076[(2)]);
var inst_30058 = (inst_30057__$1 == null);
var state_30076__$1 = (function (){var statearr_30080 = state_30076;
(statearr_30080[(7)] = inst_30057__$1);

return statearr_30080;
})();
if(cljs.core.truth_(inst_30058)){
var statearr_30081_30189 = state_30076__$1;
(statearr_30081_30189[(1)] = (5));

} else {
var statearr_30082_30190 = state_30076__$1;
(statearr_30082_30190[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (6))){
var inst_30057 = (state_30076[(7)]);
var inst_30062 = (state_30076[(8)]);
var inst_30062__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30063 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30064 = [inst_30057,inst_30062__$1];
var inst_30065 = (new cljs.core.PersistentVector(null,2,(5),inst_30063,inst_30064,null));
var state_30076__$1 = (function (){var statearr_30083 = state_30076;
(statearr_30083[(8)] = inst_30062__$1);

return statearr_30083;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30076__$1,(8),jobs,inst_30065);
} else {
if((state_val_30077 === (3))){
var inst_30074 = (state_30076[(2)]);
var state_30076__$1 = state_30076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30076__$1,inst_30074);
} else {
if((state_val_30077 === (2))){
var state_30076__$1 = state_30076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30076__$1,(4),from);
} else {
if((state_val_30077 === (9))){
var inst_30069 = (state_30076[(2)]);
var state_30076__$1 = (function (){var statearr_30084 = state_30076;
(statearr_30084[(9)] = inst_30069);

return statearr_30084;
})();
var statearr_30085_30191 = state_30076__$1;
(statearr_30085_30191[(2)] = null);

(statearr_30085_30191[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (5))){
var inst_30060 = cljs.core.async.close_BANG_(jobs);
var state_30076__$1 = state_30076;
var statearr_30086_30192 = state_30076__$1;
(statearr_30086_30192[(2)] = inst_30060);

(statearr_30086_30192[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30077 === (8))){
var inst_30062 = (state_30076[(8)]);
var inst_30067 = (state_30076[(2)]);
var state_30076__$1 = (function (){var statearr_30087 = state_30076;
(statearr_30087[(10)] = inst_30067);

return statearr_30087;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30076__$1,(9),results,inst_30062);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0 = (function (){
var statearr_30088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30088[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__);

(statearr_30088[(1)] = (1));

return statearr_30088;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1 = (function (state_30076){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_30076);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e30089){if((e30089 instanceof Object)){
var ex__29717__auto__ = e30089;
var statearr_30090_30193 = state_30076;
(statearr_30090_30193[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30076);

return cljs.core.cst$kw$recur;
} else {
throw e30089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__30194 = state_30076;
state_30076 = G__30194;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__ = function(state_30076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1.call(this,state_30076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_30091 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_30091[(6)] = c__29822__auto___30186);

return statearr_30091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


var c__29822__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_30129){
var state_val_30130 = (state_30129[(1)]);
if((state_val_30130 === (7))){
var inst_30125 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30131_30195 = state_30129__$1;
(statearr_30131_30195[(2)] = inst_30125);

(statearr_30131_30195[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (20))){
var state_30129__$1 = state_30129;
var statearr_30132_30196 = state_30129__$1;
(statearr_30132_30196[(2)] = null);

(statearr_30132_30196[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (1))){
var state_30129__$1 = state_30129;
var statearr_30133_30197 = state_30129__$1;
(statearr_30133_30197[(2)] = null);

(statearr_30133_30197[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (4))){
var inst_30094 = (state_30129[(7)]);
var inst_30094__$1 = (state_30129[(2)]);
var inst_30095 = (inst_30094__$1 == null);
var state_30129__$1 = (function (){var statearr_30134 = state_30129;
(statearr_30134[(7)] = inst_30094__$1);

return statearr_30134;
})();
if(cljs.core.truth_(inst_30095)){
var statearr_30135_30198 = state_30129__$1;
(statearr_30135_30198[(1)] = (5));

} else {
var statearr_30136_30199 = state_30129__$1;
(statearr_30136_30199[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (15))){
var inst_30107 = (state_30129[(8)]);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30129__$1,(18),to,inst_30107);
} else {
if((state_val_30130 === (21))){
var inst_30120 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30137_30200 = state_30129__$1;
(statearr_30137_30200[(2)] = inst_30120);

(statearr_30137_30200[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (13))){
var inst_30122 = (state_30129[(2)]);
var state_30129__$1 = (function (){var statearr_30138 = state_30129;
(statearr_30138[(9)] = inst_30122);

return statearr_30138;
})();
var statearr_30139_30201 = state_30129__$1;
(statearr_30139_30201[(2)] = null);

(statearr_30139_30201[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (6))){
var inst_30094 = (state_30129[(7)]);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30129__$1,(11),inst_30094);
} else {
if((state_val_30130 === (17))){
var inst_30115 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
if(cljs.core.truth_(inst_30115)){
var statearr_30140_30202 = state_30129__$1;
(statearr_30140_30202[(1)] = (19));

} else {
var statearr_30141_30203 = state_30129__$1;
(statearr_30141_30203[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (3))){
var inst_30127 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30129__$1,inst_30127);
} else {
if((state_val_30130 === (12))){
var inst_30104 = (state_30129[(10)]);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30129__$1,(14),inst_30104);
} else {
if((state_val_30130 === (2))){
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30129__$1,(4),results);
} else {
if((state_val_30130 === (19))){
var state_30129__$1 = state_30129;
var statearr_30142_30204 = state_30129__$1;
(statearr_30142_30204[(2)] = null);

(statearr_30142_30204[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (11))){
var inst_30104 = (state_30129[(2)]);
var state_30129__$1 = (function (){var statearr_30143 = state_30129;
(statearr_30143[(10)] = inst_30104);

return statearr_30143;
})();
var statearr_30144_30205 = state_30129__$1;
(statearr_30144_30205[(2)] = null);

(statearr_30144_30205[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (9))){
var state_30129__$1 = state_30129;
var statearr_30145_30206 = state_30129__$1;
(statearr_30145_30206[(2)] = null);

(statearr_30145_30206[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (5))){
var state_30129__$1 = state_30129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30146_30207 = state_30129__$1;
(statearr_30146_30207[(1)] = (8));

} else {
var statearr_30147_30208 = state_30129__$1;
(statearr_30147_30208[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (14))){
var inst_30109 = (state_30129[(11)]);
var inst_30107 = (state_30129[(8)]);
var inst_30107__$1 = (state_30129[(2)]);
var inst_30108 = (inst_30107__$1 == null);
var inst_30109__$1 = cljs.core.not(inst_30108);
var state_30129__$1 = (function (){var statearr_30148 = state_30129;
(statearr_30148[(11)] = inst_30109__$1);

(statearr_30148[(8)] = inst_30107__$1);

return statearr_30148;
})();
if(inst_30109__$1){
var statearr_30149_30209 = state_30129__$1;
(statearr_30149_30209[(1)] = (15));

} else {
var statearr_30150_30210 = state_30129__$1;
(statearr_30150_30210[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (16))){
var inst_30109 = (state_30129[(11)]);
var state_30129__$1 = state_30129;
var statearr_30151_30211 = state_30129__$1;
(statearr_30151_30211[(2)] = inst_30109);

(statearr_30151_30211[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (10))){
var inst_30101 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30152_30212 = state_30129__$1;
(statearr_30152_30212[(2)] = inst_30101);

(statearr_30152_30212[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (18))){
var inst_30112 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30153_30213 = state_30129__$1;
(statearr_30153_30213[(2)] = inst_30112);

(statearr_30153_30213[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30130 === (8))){
var inst_30098 = cljs.core.async.close_BANG_(to);
var state_30129__$1 = state_30129;
var statearr_30154_30214 = state_30129__$1;
(statearr_30154_30214[(2)] = inst_30098);

(statearr_30154_30214[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0 = (function (){
var statearr_30155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30155[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__);

(statearr_30155[(1)] = (1));

return statearr_30155;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1 = (function (state_30129){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_30129);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e30156){if((e30156 instanceof Object)){
var ex__29717__auto__ = e30156;
var statearr_30157_30215 = state_30129;
(statearr_30157_30215[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30129);

return cljs.core.cst$kw$recur;
} else {
throw e30156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__30216 = state_30129;
state_30129 = G__30216;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__ = function(state_30129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1.call(this,state_30129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29714__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_30158 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_30158[(6)] = c__29822__auto__);

return statearr_30158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));

return c__29822__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30218 = arguments.length;
switch (G__30218) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30221 = arguments.length;
switch (G__30221) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30224 = arguments.length;
switch (G__30224) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29822__auto___30273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_30250){
var state_val_30251 = (state_30250[(1)]);
if((state_val_30251 === (7))){
var inst_30246 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30252_30274 = state_30250__$1;
(statearr_30252_30274[(2)] = inst_30246);

(statearr_30252_30274[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30251 === (1))){
var state_30250__$1 = state_30250;
var statearr_30253_30275 = state_30250__$1;
(statearr_30253_30275[(2)] = null);

(statearr_30253_30275[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30251 === (4))){
var inst_30227 = (state_30250[(7)]);
var inst_30227__$1 = (state_30250[(2)]);
var inst_30228 = (inst_30227__$1 == null);
var state_30250__$1 = (function (){var statearr_30254 = state_30250;
(statearr_30254[(7)] = inst_30227__$1);

return statearr_30254;
})();
if(cljs.core.truth_(inst_30228)){
var statearr_30255_30276 = state_30250__$1;
(statearr_30255_30276[(1)] = (5));

} else {
var statearr_30256_30277 = state_30250__$1;
(statearr_30256_30277[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30251 === (13))){
var state_30250__$1 = state_30250;
var statearr_30257_30278 = state_30250__$1;
(statearr_30257_30278[(2)] = null);

(statearr_30257_30278[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30251 === (6))){
var inst_30227 = (state_30250[(7)]);
var inst_30233 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30227) : p.call(null,inst_30227));
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30233)){
var statearr_30258_30279 = state_30250__$1;
(statearr_30258_30279[(1)] = (9));

} else {
var statearr_30259_30280 = state_30250__$1;
(statearr_30259_30280[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30251 === (3))){
var inst_30248 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30250__$1,inst_30248);
} else {
if((state_val_30251 === (12))){
var state_30250__$1 = state_30250;
var statearr_30260_30281 = state_30250__$1;
(statearr_30260_30281[(2)] = null);

(statearr_30260_30281[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30251 === (2))){
var state_30250__$1 = state_30250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30250__$1,(4),ch);
} else {
if((state_val_30251 === (11))){
var inst_30227 = (state_30250[(7)]);
var inst_30237 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30250__$1,(8),inst_30237,inst_30227);
} else {
if((state_val_30251 === (9))){
var state_30250__$1 = state_30250;
var statearr_30261_30282 = state_30250__$1;
(statearr_30261_30282[(2)] = tc);

(statearr_30261_30282[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30251 === (5))){
var inst_30230 = cljs.core.async.close_BANG_(tc);
var inst_30231 = cljs.core.async.close_BANG_(fc);
var state_30250__$1 = (function (){var statearr_30262 = state_30250;
(statearr_30262[(8)] = inst_30230);

return statearr_30262;
})();
var statearr_30263_30283 = state_30250__$1;
(statearr_30263_30283[(2)] = inst_30231);

(statearr_30263_30283[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30251 === (14))){
var inst_30244 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
var statearr_30264_30284 = state_30250__$1;
(statearr_30264_30284[(2)] = inst_30244);

(statearr_30264_30284[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30251 === (10))){
var state_30250__$1 = state_30250;
var statearr_30265_30285 = state_30250__$1;
(statearr_30265_30285[(2)] = fc);

(statearr_30265_30285[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30251 === (8))){
var inst_30239 = (state_30250[(2)]);
var state_30250__$1 = state_30250;
if(cljs.core.truth_(inst_30239)){
var statearr_30266_30286 = state_30250__$1;
(statearr_30266_30286[(1)] = (12));

} else {
var statearr_30267_30287 = state_30250__$1;
(statearr_30267_30287[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29714__auto__ = null;
var cljs$core$async$state_machine__29714__auto____0 = (function (){
var statearr_30268 = [null,null,null,null,null,null,null,null,null];
(statearr_30268[(0)] = cljs$core$async$state_machine__29714__auto__);

(statearr_30268[(1)] = (1));

return statearr_30268;
});
var cljs$core$async$state_machine__29714__auto____1 = (function (state_30250){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_30250);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e30269){if((e30269 instanceof Object)){
var ex__29717__auto__ = e30269;
var statearr_30270_30288 = state_30250;
(statearr_30270_30288[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30250);

return cljs.core.cst$kw$recur;
} else {
throw e30269;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__30289 = state_30250;
state_30250 = G__30289;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$state_machine__29714__auto__ = function(state_30250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29714__auto____1.call(this,state_30250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29714__auto____0;
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29714__auto____1;
return cljs$core$async$state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_30271 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_30271[(6)] = c__29822__auto___30273);

return statearr_30271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29822__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_30310){
var state_val_30311 = (state_30310[(1)]);
if((state_val_30311 === (7))){
var inst_30306 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
var statearr_30312_30330 = state_30310__$1;
(statearr_30312_30330[(2)] = inst_30306);

(statearr_30312_30330[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30311 === (1))){
var inst_30290 = init;
var state_30310__$1 = (function (){var statearr_30313 = state_30310;
(statearr_30313[(7)] = inst_30290);

return statearr_30313;
})();
var statearr_30314_30331 = state_30310__$1;
(statearr_30314_30331[(2)] = null);

(statearr_30314_30331[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30311 === (4))){
var inst_30293 = (state_30310[(8)]);
var inst_30293__$1 = (state_30310[(2)]);
var inst_30294 = (inst_30293__$1 == null);
var state_30310__$1 = (function (){var statearr_30315 = state_30310;
(statearr_30315[(8)] = inst_30293__$1);

return statearr_30315;
})();
if(cljs.core.truth_(inst_30294)){
var statearr_30316_30332 = state_30310__$1;
(statearr_30316_30332[(1)] = (5));

} else {
var statearr_30317_30333 = state_30310__$1;
(statearr_30317_30333[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30311 === (6))){
var inst_30293 = (state_30310[(8)]);
var inst_30297 = (state_30310[(9)]);
var inst_30290 = (state_30310[(7)]);
var inst_30297__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30290,inst_30293) : f.call(null,inst_30290,inst_30293));
var inst_30298 = cljs.core.reduced_QMARK_(inst_30297__$1);
var state_30310__$1 = (function (){var statearr_30318 = state_30310;
(statearr_30318[(9)] = inst_30297__$1);

return statearr_30318;
})();
if(inst_30298){
var statearr_30319_30334 = state_30310__$1;
(statearr_30319_30334[(1)] = (8));

} else {
var statearr_30320_30335 = state_30310__$1;
(statearr_30320_30335[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30311 === (3))){
var inst_30308 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30310__$1,inst_30308);
} else {
if((state_val_30311 === (2))){
var state_30310__$1 = state_30310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30310__$1,(4),ch);
} else {
if((state_val_30311 === (9))){
var inst_30297 = (state_30310[(9)]);
var inst_30290 = inst_30297;
var state_30310__$1 = (function (){var statearr_30321 = state_30310;
(statearr_30321[(7)] = inst_30290);

return statearr_30321;
})();
var statearr_30322_30336 = state_30310__$1;
(statearr_30322_30336[(2)] = null);

(statearr_30322_30336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30311 === (5))){
var inst_30290 = (state_30310[(7)]);
var state_30310__$1 = state_30310;
var statearr_30323_30337 = state_30310__$1;
(statearr_30323_30337[(2)] = inst_30290);

(statearr_30323_30337[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30311 === (10))){
var inst_30304 = (state_30310[(2)]);
var state_30310__$1 = state_30310;
var statearr_30324_30338 = state_30310__$1;
(statearr_30324_30338[(2)] = inst_30304);

(statearr_30324_30338[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30311 === (8))){
var inst_30297 = (state_30310[(9)]);
var inst_30300 = cljs.core.deref(inst_30297);
var state_30310__$1 = state_30310;
var statearr_30325_30339 = state_30310__$1;
(statearr_30325_30339[(2)] = inst_30300);

(statearr_30325_30339[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29714__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29714__auto____0 = (function (){
var statearr_30326 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30326[(0)] = cljs$core$async$reduce_$_state_machine__29714__auto__);

(statearr_30326[(1)] = (1));

return statearr_30326;
});
var cljs$core$async$reduce_$_state_machine__29714__auto____1 = (function (state_30310){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_30310);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e30327){if((e30327 instanceof Object)){
var ex__29717__auto__ = e30327;
var statearr_30328_30340 = state_30310;
(statearr_30328_30340[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30310);

return cljs.core.cst$kw$recur;
} else {
throw e30327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__30341 = state_30310;
state_30310 = G__30341;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29714__auto__ = function(state_30310){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29714__auto____1.call(this,state_30310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29714__auto____0;
cljs$core$async$reduce_$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29714__auto____1;
return cljs$core$async$reduce_$_state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_30329 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_30329[(6)] = c__29822__auto__);

return statearr_30329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));

return c__29822__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29822__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_30347){
var state_val_30348 = (state_30347[(1)]);
if((state_val_30348 === (1))){
var inst_30342 = cljs.core.async.reduce(f__$1,init,ch);
var state_30347__$1 = state_30347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30347__$1,(2),inst_30342);
} else {
if((state_val_30348 === (2))){
var inst_30344 = (state_30347[(2)]);
var inst_30345 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30344) : f__$1.call(null,inst_30344));
var state_30347__$1 = state_30347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30347__$1,inst_30345);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29714__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29714__auto____0 = (function (){
var statearr_30349 = [null,null,null,null,null,null,null];
(statearr_30349[(0)] = cljs$core$async$transduce_$_state_machine__29714__auto__);

(statearr_30349[(1)] = (1));

return statearr_30349;
});
var cljs$core$async$transduce_$_state_machine__29714__auto____1 = (function (state_30347){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_30347);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e30350){if((e30350 instanceof Object)){
var ex__29717__auto__ = e30350;
var statearr_30351_30353 = state_30347;
(statearr_30351_30353[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30347);

return cljs.core.cst$kw$recur;
} else {
throw e30350;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__30354 = state_30347;
state_30347 = G__30354;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29714__auto__ = function(state_30347){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29714__auto____1.call(this,state_30347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29714__auto____0;
cljs$core$async$transduce_$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29714__auto____1;
return cljs$core$async$transduce_$_state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_30352 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_30352[(6)] = c__29822__auto__);

return statearr_30352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));

return c__29822__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30356 = arguments.length;
switch (G__30356) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29822__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_30381){
var state_val_30382 = (state_30381[(1)]);
if((state_val_30382 === (7))){
var inst_30363 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30383_30404 = state_30381__$1;
(statearr_30383_30404[(2)] = inst_30363);

(statearr_30383_30404[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (1))){
var inst_30357 = cljs.core.seq(coll);
var inst_30358 = inst_30357;
var state_30381__$1 = (function (){var statearr_30384 = state_30381;
(statearr_30384[(7)] = inst_30358);

return statearr_30384;
})();
var statearr_30385_30405 = state_30381__$1;
(statearr_30385_30405[(2)] = null);

(statearr_30385_30405[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (4))){
var inst_30358 = (state_30381[(7)]);
var inst_30361 = cljs.core.first(inst_30358);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30381__$1,(7),ch,inst_30361);
} else {
if((state_val_30382 === (13))){
var inst_30375 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30386_30406 = state_30381__$1;
(statearr_30386_30406[(2)] = inst_30375);

(statearr_30386_30406[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (6))){
var inst_30366 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
if(cljs.core.truth_(inst_30366)){
var statearr_30387_30407 = state_30381__$1;
(statearr_30387_30407[(1)] = (8));

} else {
var statearr_30388_30408 = state_30381__$1;
(statearr_30388_30408[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (3))){
var inst_30379 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30381__$1,inst_30379);
} else {
if((state_val_30382 === (12))){
var state_30381__$1 = state_30381;
var statearr_30389_30409 = state_30381__$1;
(statearr_30389_30409[(2)] = null);

(statearr_30389_30409[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (2))){
var inst_30358 = (state_30381[(7)]);
var state_30381__$1 = state_30381;
if(cljs.core.truth_(inst_30358)){
var statearr_30390_30410 = state_30381__$1;
(statearr_30390_30410[(1)] = (4));

} else {
var statearr_30391_30411 = state_30381__$1;
(statearr_30391_30411[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (11))){
var inst_30372 = cljs.core.async.close_BANG_(ch);
var state_30381__$1 = state_30381;
var statearr_30392_30412 = state_30381__$1;
(statearr_30392_30412[(2)] = inst_30372);

(statearr_30392_30412[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (9))){
var state_30381__$1 = state_30381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30393_30413 = state_30381__$1;
(statearr_30393_30413[(1)] = (11));

} else {
var statearr_30394_30414 = state_30381__$1;
(statearr_30394_30414[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (5))){
var inst_30358 = (state_30381[(7)]);
var state_30381__$1 = state_30381;
var statearr_30395_30415 = state_30381__$1;
(statearr_30395_30415[(2)] = inst_30358);

(statearr_30395_30415[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (10))){
var inst_30377 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30396_30416 = state_30381__$1;
(statearr_30396_30416[(2)] = inst_30377);

(statearr_30396_30416[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30382 === (8))){
var inst_30358 = (state_30381[(7)]);
var inst_30368 = cljs.core.next(inst_30358);
var inst_30358__$1 = inst_30368;
var state_30381__$1 = (function (){var statearr_30397 = state_30381;
(statearr_30397[(7)] = inst_30358__$1);

return statearr_30397;
})();
var statearr_30398_30417 = state_30381__$1;
(statearr_30398_30417[(2)] = null);

(statearr_30398_30417[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29714__auto__ = null;
var cljs$core$async$state_machine__29714__auto____0 = (function (){
var statearr_30399 = [null,null,null,null,null,null,null,null];
(statearr_30399[(0)] = cljs$core$async$state_machine__29714__auto__);

(statearr_30399[(1)] = (1));

return statearr_30399;
});
var cljs$core$async$state_machine__29714__auto____1 = (function (state_30381){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_30381);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e30400){if((e30400 instanceof Object)){
var ex__29717__auto__ = e30400;
var statearr_30401_30418 = state_30381;
(statearr_30401_30418[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30381);

return cljs.core.cst$kw$recur;
} else {
throw e30400;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__30419 = state_30381;
state_30381 = G__30419;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$state_machine__29714__auto__ = function(state_30381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29714__auto____1.call(this,state_30381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29714__auto____0;
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29714__auto____1;
return cljs$core$async$state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_30402 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_30402[(6)] = c__29822__auto__);

return statearr_30402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));

return c__29822__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_30420 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_30420(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_30421 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_30421(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_30422 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_30422(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_30423 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_30423(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30424 = (function (ch,cs,meta30425){
this.ch = ch;
this.cs = cs;
this.meta30425 = meta30425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30426,meta30425__$1){
var self__ = this;
var _30426__$1 = this;
return (new cljs.core.async.t_cljs$core$async30424(self__.ch,self__.cs,meta30425__$1));
}));

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30426){
var self__ = this;
var _30426__$1 = this;
return self__.meta30425;
}));

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30424.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta30425], null);
}));

(cljs.core.async.t_cljs$core$async30424.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30424");

(cljs.core.async.t_cljs$core$async30424.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async30424");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30424.
 */
cljs.core.async.__GT_t_cljs$core$async30424 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30424(ch__$1,cs__$1,meta30425){
return (new cljs.core.async.t_cljs$core$async30424(ch__$1,cs__$1,meta30425));
});

}

return (new cljs.core.async.t_cljs$core$async30424(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29822__auto___30646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_30561){
var state_val_30562 = (state_30561[(1)]);
if((state_val_30562 === (7))){
var inst_30557 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
var statearr_30563_30647 = state_30561__$1;
(statearr_30563_30647[(2)] = inst_30557);

(statearr_30563_30647[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (20))){
var inst_30460 = (state_30561[(7)]);
var inst_30472 = cljs.core.first(inst_30460);
var inst_30473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30472,(0),null);
var inst_30474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30472,(1),null);
var state_30561__$1 = (function (){var statearr_30564 = state_30561;
(statearr_30564[(8)] = inst_30473);

return statearr_30564;
})();
if(cljs.core.truth_(inst_30474)){
var statearr_30565_30648 = state_30561__$1;
(statearr_30565_30648[(1)] = (22));

} else {
var statearr_30566_30649 = state_30561__$1;
(statearr_30566_30649[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (27))){
var inst_30504 = (state_30561[(9)]);
var inst_30502 = (state_30561[(10)]);
var inst_30509 = (state_30561[(11)]);
var inst_30429 = (state_30561[(12)]);
var inst_30509__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30502,inst_30504);
var inst_30510 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30509__$1,inst_30429,done);
var state_30561__$1 = (function (){var statearr_30567 = state_30561;
(statearr_30567[(11)] = inst_30509__$1);

return statearr_30567;
})();
if(cljs.core.truth_(inst_30510)){
var statearr_30568_30650 = state_30561__$1;
(statearr_30568_30650[(1)] = (30));

} else {
var statearr_30569_30651 = state_30561__$1;
(statearr_30569_30651[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (1))){
var state_30561__$1 = state_30561;
var statearr_30570_30652 = state_30561__$1;
(statearr_30570_30652[(2)] = null);

(statearr_30570_30652[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (24))){
var inst_30460 = (state_30561[(7)]);
var inst_30479 = (state_30561[(2)]);
var inst_30480 = cljs.core.next(inst_30460);
var inst_30438 = inst_30480;
var inst_30439 = null;
var inst_30440 = (0);
var inst_30441 = (0);
var state_30561__$1 = (function (){var statearr_30571 = state_30561;
(statearr_30571[(13)] = inst_30479);

(statearr_30571[(14)] = inst_30441);

(statearr_30571[(15)] = inst_30438);

(statearr_30571[(16)] = inst_30440);

(statearr_30571[(17)] = inst_30439);

return statearr_30571;
})();
var statearr_30572_30653 = state_30561__$1;
(statearr_30572_30653[(2)] = null);

(statearr_30572_30653[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (39))){
var state_30561__$1 = state_30561;
var statearr_30576_30654 = state_30561__$1;
(statearr_30576_30654[(2)] = null);

(statearr_30576_30654[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (4))){
var inst_30429 = (state_30561[(12)]);
var inst_30429__$1 = (state_30561[(2)]);
var inst_30430 = (inst_30429__$1 == null);
var state_30561__$1 = (function (){var statearr_30577 = state_30561;
(statearr_30577[(12)] = inst_30429__$1);

return statearr_30577;
})();
if(cljs.core.truth_(inst_30430)){
var statearr_30578_30655 = state_30561__$1;
(statearr_30578_30655[(1)] = (5));

} else {
var statearr_30579_30656 = state_30561__$1;
(statearr_30579_30656[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (15))){
var inst_30441 = (state_30561[(14)]);
var inst_30438 = (state_30561[(15)]);
var inst_30440 = (state_30561[(16)]);
var inst_30439 = (state_30561[(17)]);
var inst_30456 = (state_30561[(2)]);
var inst_30457 = (inst_30441 + (1));
var tmp30573 = inst_30438;
var tmp30574 = inst_30440;
var tmp30575 = inst_30439;
var inst_30438__$1 = tmp30573;
var inst_30439__$1 = tmp30575;
var inst_30440__$1 = tmp30574;
var inst_30441__$1 = inst_30457;
var state_30561__$1 = (function (){var statearr_30580 = state_30561;
(statearr_30580[(14)] = inst_30441__$1);

(statearr_30580[(15)] = inst_30438__$1);

(statearr_30580[(16)] = inst_30440__$1);

(statearr_30580[(18)] = inst_30456);

(statearr_30580[(17)] = inst_30439__$1);

return statearr_30580;
})();
var statearr_30581_30657 = state_30561__$1;
(statearr_30581_30657[(2)] = null);

(statearr_30581_30657[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (21))){
var inst_30483 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
var statearr_30585_30658 = state_30561__$1;
(statearr_30585_30658[(2)] = inst_30483);

(statearr_30585_30658[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (31))){
var inst_30509 = (state_30561[(11)]);
var inst_30513 = done(null);
var inst_30514 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30509);
var state_30561__$1 = (function (){var statearr_30586 = state_30561;
(statearr_30586[(19)] = inst_30513);

return statearr_30586;
})();
var statearr_30587_30659 = state_30561__$1;
(statearr_30587_30659[(2)] = inst_30514);

(statearr_30587_30659[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (32))){
var inst_30503 = (state_30561[(20)]);
var inst_30504 = (state_30561[(9)]);
var inst_30502 = (state_30561[(10)]);
var inst_30501 = (state_30561[(21)]);
var inst_30516 = (state_30561[(2)]);
var inst_30517 = (inst_30504 + (1));
var tmp30582 = inst_30503;
var tmp30583 = inst_30502;
var tmp30584 = inst_30501;
var inst_30501__$1 = tmp30584;
var inst_30502__$1 = tmp30583;
var inst_30503__$1 = tmp30582;
var inst_30504__$1 = inst_30517;
var state_30561__$1 = (function (){var statearr_30588 = state_30561;
(statearr_30588[(20)] = inst_30503__$1);

(statearr_30588[(9)] = inst_30504__$1);

(statearr_30588[(22)] = inst_30516);

(statearr_30588[(10)] = inst_30502__$1);

(statearr_30588[(21)] = inst_30501__$1);

return statearr_30588;
})();
var statearr_30589_30660 = state_30561__$1;
(statearr_30589_30660[(2)] = null);

(statearr_30589_30660[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (40))){
var inst_30529 = (state_30561[(23)]);
var inst_30533 = done(null);
var inst_30534 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30529);
var state_30561__$1 = (function (){var statearr_30590 = state_30561;
(statearr_30590[(24)] = inst_30533);

return statearr_30590;
})();
var statearr_30591_30661 = state_30561__$1;
(statearr_30591_30661[(2)] = inst_30534);

(statearr_30591_30661[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (33))){
var inst_30520 = (state_30561[(25)]);
var inst_30522 = cljs.core.chunked_seq_QMARK_(inst_30520);
var state_30561__$1 = state_30561;
if(inst_30522){
var statearr_30592_30662 = state_30561__$1;
(statearr_30592_30662[(1)] = (36));

} else {
var statearr_30593_30663 = state_30561__$1;
(statearr_30593_30663[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (13))){
var inst_30450 = (state_30561[(26)]);
var inst_30453 = cljs.core.async.close_BANG_(inst_30450);
var state_30561__$1 = state_30561;
var statearr_30594_30664 = state_30561__$1;
(statearr_30594_30664[(2)] = inst_30453);

(statearr_30594_30664[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (22))){
var inst_30473 = (state_30561[(8)]);
var inst_30476 = cljs.core.async.close_BANG_(inst_30473);
var state_30561__$1 = state_30561;
var statearr_30595_30665 = state_30561__$1;
(statearr_30595_30665[(2)] = inst_30476);

(statearr_30595_30665[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (36))){
var inst_30520 = (state_30561[(25)]);
var inst_30524 = cljs.core.chunk_first(inst_30520);
var inst_30525 = cljs.core.chunk_rest(inst_30520);
var inst_30526 = cljs.core.count(inst_30524);
var inst_30501 = inst_30525;
var inst_30502 = inst_30524;
var inst_30503 = inst_30526;
var inst_30504 = (0);
var state_30561__$1 = (function (){var statearr_30596 = state_30561;
(statearr_30596[(20)] = inst_30503);

(statearr_30596[(9)] = inst_30504);

(statearr_30596[(10)] = inst_30502);

(statearr_30596[(21)] = inst_30501);

return statearr_30596;
})();
var statearr_30597_30666 = state_30561__$1;
(statearr_30597_30666[(2)] = null);

(statearr_30597_30666[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (41))){
var inst_30520 = (state_30561[(25)]);
var inst_30536 = (state_30561[(2)]);
var inst_30537 = cljs.core.next(inst_30520);
var inst_30501 = inst_30537;
var inst_30502 = null;
var inst_30503 = (0);
var inst_30504 = (0);
var state_30561__$1 = (function (){var statearr_30598 = state_30561;
(statearr_30598[(20)] = inst_30503);

(statearr_30598[(9)] = inst_30504);

(statearr_30598[(10)] = inst_30502);

(statearr_30598[(21)] = inst_30501);

(statearr_30598[(27)] = inst_30536);

return statearr_30598;
})();
var statearr_30599_30667 = state_30561__$1;
(statearr_30599_30667[(2)] = null);

(statearr_30599_30667[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (43))){
var state_30561__$1 = state_30561;
var statearr_30600_30668 = state_30561__$1;
(statearr_30600_30668[(2)] = null);

(statearr_30600_30668[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (29))){
var inst_30545 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
var statearr_30601_30669 = state_30561__$1;
(statearr_30601_30669[(2)] = inst_30545);

(statearr_30601_30669[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (44))){
var inst_30554 = (state_30561[(2)]);
var state_30561__$1 = (function (){var statearr_30602 = state_30561;
(statearr_30602[(28)] = inst_30554);

return statearr_30602;
})();
var statearr_30603_30670 = state_30561__$1;
(statearr_30603_30670[(2)] = null);

(statearr_30603_30670[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (6))){
var inst_30493 = (state_30561[(29)]);
var inst_30492 = cljs.core.deref(cs);
var inst_30493__$1 = cljs.core.keys(inst_30492);
var inst_30494 = cljs.core.count(inst_30493__$1);
var inst_30495 = cljs.core.reset_BANG_(dctr,inst_30494);
var inst_30500 = cljs.core.seq(inst_30493__$1);
var inst_30501 = inst_30500;
var inst_30502 = null;
var inst_30503 = (0);
var inst_30504 = (0);
var state_30561__$1 = (function (){var statearr_30604 = state_30561;
(statearr_30604[(20)] = inst_30503);

(statearr_30604[(9)] = inst_30504);

(statearr_30604[(30)] = inst_30495);

(statearr_30604[(10)] = inst_30502);

(statearr_30604[(21)] = inst_30501);

(statearr_30604[(29)] = inst_30493__$1);

return statearr_30604;
})();
var statearr_30605_30671 = state_30561__$1;
(statearr_30605_30671[(2)] = null);

(statearr_30605_30671[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (28))){
var inst_30520 = (state_30561[(25)]);
var inst_30501 = (state_30561[(21)]);
var inst_30520__$1 = cljs.core.seq(inst_30501);
var state_30561__$1 = (function (){var statearr_30606 = state_30561;
(statearr_30606[(25)] = inst_30520__$1);

return statearr_30606;
})();
if(inst_30520__$1){
var statearr_30607_30672 = state_30561__$1;
(statearr_30607_30672[(1)] = (33));

} else {
var statearr_30608_30673 = state_30561__$1;
(statearr_30608_30673[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (25))){
var inst_30503 = (state_30561[(20)]);
var inst_30504 = (state_30561[(9)]);
var inst_30506 = (inst_30504 < inst_30503);
var inst_30507 = inst_30506;
var state_30561__$1 = state_30561;
if(cljs.core.truth_(inst_30507)){
var statearr_30609_30674 = state_30561__$1;
(statearr_30609_30674[(1)] = (27));

} else {
var statearr_30610_30675 = state_30561__$1;
(statearr_30610_30675[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (34))){
var state_30561__$1 = state_30561;
var statearr_30611_30676 = state_30561__$1;
(statearr_30611_30676[(2)] = null);

(statearr_30611_30676[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (17))){
var state_30561__$1 = state_30561;
var statearr_30612_30677 = state_30561__$1;
(statearr_30612_30677[(2)] = null);

(statearr_30612_30677[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (3))){
var inst_30559 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30561__$1,inst_30559);
} else {
if((state_val_30562 === (12))){
var inst_30488 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
var statearr_30613_30678 = state_30561__$1;
(statearr_30613_30678[(2)] = inst_30488);

(statearr_30613_30678[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (2))){
var state_30561__$1 = state_30561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30561__$1,(4),ch);
} else {
if((state_val_30562 === (23))){
var state_30561__$1 = state_30561;
var statearr_30614_30679 = state_30561__$1;
(statearr_30614_30679[(2)] = null);

(statearr_30614_30679[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (35))){
var inst_30543 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
var statearr_30615_30680 = state_30561__$1;
(statearr_30615_30680[(2)] = inst_30543);

(statearr_30615_30680[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (19))){
var inst_30460 = (state_30561[(7)]);
var inst_30464 = cljs.core.chunk_first(inst_30460);
var inst_30465 = cljs.core.chunk_rest(inst_30460);
var inst_30466 = cljs.core.count(inst_30464);
var inst_30438 = inst_30465;
var inst_30439 = inst_30464;
var inst_30440 = inst_30466;
var inst_30441 = (0);
var state_30561__$1 = (function (){var statearr_30616 = state_30561;
(statearr_30616[(14)] = inst_30441);

(statearr_30616[(15)] = inst_30438);

(statearr_30616[(16)] = inst_30440);

(statearr_30616[(17)] = inst_30439);

return statearr_30616;
})();
var statearr_30617_30681 = state_30561__$1;
(statearr_30617_30681[(2)] = null);

(statearr_30617_30681[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (11))){
var inst_30460 = (state_30561[(7)]);
var inst_30438 = (state_30561[(15)]);
var inst_30460__$1 = cljs.core.seq(inst_30438);
var state_30561__$1 = (function (){var statearr_30618 = state_30561;
(statearr_30618[(7)] = inst_30460__$1);

return statearr_30618;
})();
if(inst_30460__$1){
var statearr_30619_30682 = state_30561__$1;
(statearr_30619_30682[(1)] = (16));

} else {
var statearr_30620_30683 = state_30561__$1;
(statearr_30620_30683[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (9))){
var inst_30490 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
var statearr_30621_30684 = state_30561__$1;
(statearr_30621_30684[(2)] = inst_30490);

(statearr_30621_30684[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (5))){
var inst_30436 = cljs.core.deref(cs);
var inst_30437 = cljs.core.seq(inst_30436);
var inst_30438 = inst_30437;
var inst_30439 = null;
var inst_30440 = (0);
var inst_30441 = (0);
var state_30561__$1 = (function (){var statearr_30622 = state_30561;
(statearr_30622[(14)] = inst_30441);

(statearr_30622[(15)] = inst_30438);

(statearr_30622[(16)] = inst_30440);

(statearr_30622[(17)] = inst_30439);

return statearr_30622;
})();
var statearr_30623_30685 = state_30561__$1;
(statearr_30623_30685[(2)] = null);

(statearr_30623_30685[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (14))){
var state_30561__$1 = state_30561;
var statearr_30624_30686 = state_30561__$1;
(statearr_30624_30686[(2)] = null);

(statearr_30624_30686[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (45))){
var inst_30551 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
var statearr_30625_30687 = state_30561__$1;
(statearr_30625_30687[(2)] = inst_30551);

(statearr_30625_30687[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (26))){
var inst_30493 = (state_30561[(29)]);
var inst_30547 = (state_30561[(2)]);
var inst_30548 = cljs.core.seq(inst_30493);
var state_30561__$1 = (function (){var statearr_30626 = state_30561;
(statearr_30626[(31)] = inst_30547);

return statearr_30626;
})();
if(inst_30548){
var statearr_30627_30688 = state_30561__$1;
(statearr_30627_30688[(1)] = (42));

} else {
var statearr_30628_30689 = state_30561__$1;
(statearr_30628_30689[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (16))){
var inst_30460 = (state_30561[(7)]);
var inst_30462 = cljs.core.chunked_seq_QMARK_(inst_30460);
var state_30561__$1 = state_30561;
if(inst_30462){
var statearr_30629_30690 = state_30561__$1;
(statearr_30629_30690[(1)] = (19));

} else {
var statearr_30630_30691 = state_30561__$1;
(statearr_30630_30691[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (38))){
var inst_30540 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
var statearr_30631_30692 = state_30561__$1;
(statearr_30631_30692[(2)] = inst_30540);

(statearr_30631_30692[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (30))){
var state_30561__$1 = state_30561;
var statearr_30632_30693 = state_30561__$1;
(statearr_30632_30693[(2)] = null);

(statearr_30632_30693[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (10))){
var inst_30441 = (state_30561[(14)]);
var inst_30439 = (state_30561[(17)]);
var inst_30449 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30439,inst_30441);
var inst_30450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30449,(0),null);
var inst_30451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30449,(1),null);
var state_30561__$1 = (function (){var statearr_30633 = state_30561;
(statearr_30633[(26)] = inst_30450);

return statearr_30633;
})();
if(cljs.core.truth_(inst_30451)){
var statearr_30634_30694 = state_30561__$1;
(statearr_30634_30694[(1)] = (13));

} else {
var statearr_30635_30695 = state_30561__$1;
(statearr_30635_30695[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (18))){
var inst_30486 = (state_30561[(2)]);
var state_30561__$1 = state_30561;
var statearr_30636_30696 = state_30561__$1;
(statearr_30636_30696[(2)] = inst_30486);

(statearr_30636_30696[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (42))){
var state_30561__$1 = state_30561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30561__$1,(45),dchan);
} else {
if((state_val_30562 === (37))){
var inst_30529 = (state_30561[(23)]);
var inst_30520 = (state_30561[(25)]);
var inst_30429 = (state_30561[(12)]);
var inst_30529__$1 = cljs.core.first(inst_30520);
var inst_30530 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30529__$1,inst_30429,done);
var state_30561__$1 = (function (){var statearr_30637 = state_30561;
(statearr_30637[(23)] = inst_30529__$1);

return statearr_30637;
})();
if(cljs.core.truth_(inst_30530)){
var statearr_30638_30697 = state_30561__$1;
(statearr_30638_30697[(1)] = (39));

} else {
var statearr_30639_30698 = state_30561__$1;
(statearr_30639_30698[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30562 === (8))){
var inst_30441 = (state_30561[(14)]);
var inst_30440 = (state_30561[(16)]);
var inst_30443 = (inst_30441 < inst_30440);
var inst_30444 = inst_30443;
var state_30561__$1 = state_30561;
if(cljs.core.truth_(inst_30444)){
var statearr_30640_30699 = state_30561__$1;
(statearr_30640_30699[(1)] = (10));

} else {
var statearr_30641_30700 = state_30561__$1;
(statearr_30641_30700[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29714__auto__ = null;
var cljs$core$async$mult_$_state_machine__29714__auto____0 = (function (){
var statearr_30642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30642[(0)] = cljs$core$async$mult_$_state_machine__29714__auto__);

(statearr_30642[(1)] = (1));

return statearr_30642;
});
var cljs$core$async$mult_$_state_machine__29714__auto____1 = (function (state_30561){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_30561);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e30643){if((e30643 instanceof Object)){
var ex__29717__auto__ = e30643;
var statearr_30644_30701 = state_30561;
(statearr_30644_30701[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30561);

return cljs.core.cst$kw$recur;
} else {
throw e30643;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__30702 = state_30561;
state_30561 = G__30702;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29714__auto__ = function(state_30561){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29714__auto____1.call(this,state_30561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29714__auto____0;
cljs$core$async$mult_$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29714__auto____1;
return cljs$core$async$mult_$_state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_30645 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_30645[(6)] = c__29822__auto___30646);

return statearr_30645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30704 = arguments.length;
switch (G__30704) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_30706 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_30706(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_30707 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_30707(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_30708 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_30708(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_30709 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_30709(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_30710 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_30710(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30720 = arguments.length;
var i__5767__auto___30721 = (0);
while(true){
if((i__5767__auto___30721 < len__5766__auto___30720)){
args__5772__auto__.push((arguments[i__5767__auto___30721]));

var G__30722 = (i__5767__auto___30721 + (1));
i__5767__auto___30721 = G__30722;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30715){
var map__30716 = p__30715;
var map__30716__$1 = cljs.core.__destructure_map(map__30716);
var opts = map__30716__$1;
var statearr_30717_30723 = state;
(statearr_30717_30723[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30718_30724 = state;
(statearr_30718_30724[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_30719_30725 = state;
(statearr_30719_30725[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30711){
var G__30712 = cljs.core.first(seq30711);
var seq30711__$1 = cljs.core.next(seq30711);
var G__30713 = cljs.core.first(seq30711__$1);
var seq30711__$2 = cljs.core.next(seq30711__$1);
var G__30714 = cljs.core.first(seq30711__$2);
var seq30711__$3 = cljs.core.next(seq30711__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30712,G__30713,G__30714,seq30711__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30726 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30727){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30727 = meta30727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30728,meta30727__$1){
var self__ = this;
var _30728__$1 = this;
return (new cljs.core.async.t_cljs$core$async30726(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30727__$1));
}));

(cljs.core.async.t_cljs$core$async30726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30728){
var self__ = this;
var _30728__$1 = this;
return self__.meta30727;
}));

(cljs.core.async.t_cljs$core$async30726.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30726.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30726.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30726.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30726.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30726.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30726.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta30727], null);
}));

(cljs.core.async.t_cljs$core$async30726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30726");

(cljs.core.async.t_cljs$core$async30726.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async30726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30726.
 */
cljs.core.async.__GT_t_cljs$core$async30726 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30726(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30727){
return (new cljs.core.async.t_cljs$core$async30726(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30727));
});

}

return (new cljs.core.async.t_cljs$core$async30726(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29822__auto___30840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_30796){
var state_val_30797 = (state_30796[(1)]);
if((state_val_30797 === (7))){
var inst_30756 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
if(cljs.core.truth_(inst_30756)){
var statearr_30798_30841 = state_30796__$1;
(statearr_30798_30841[(1)] = (8));

} else {
var statearr_30799_30842 = state_30796__$1;
(statearr_30799_30842[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (20))){
var inst_30749 = (state_30796[(7)]);
var state_30796__$1 = state_30796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30796__$1,(23),out,inst_30749);
} else {
if((state_val_30797 === (1))){
var inst_30732 = calc_state();
var inst_30733 = cljs.core.__destructure_map(inst_30732);
var inst_30734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30733,cljs.core.cst$kw$solos);
var inst_30735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30733,cljs.core.cst$kw$mutes);
var inst_30736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30733,cljs.core.cst$kw$reads);
var inst_30737 = inst_30732;
var state_30796__$1 = (function (){var statearr_30800 = state_30796;
(statearr_30800[(8)] = inst_30734);

(statearr_30800[(9)] = inst_30735);

(statearr_30800[(10)] = inst_30737);

(statearr_30800[(11)] = inst_30736);

return statearr_30800;
})();
var statearr_30801_30843 = state_30796__$1;
(statearr_30801_30843[(2)] = null);

(statearr_30801_30843[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (24))){
var inst_30740 = (state_30796[(12)]);
var inst_30737 = inst_30740;
var state_30796__$1 = (function (){var statearr_30802 = state_30796;
(statearr_30802[(10)] = inst_30737);

return statearr_30802;
})();
var statearr_30803_30844 = state_30796__$1;
(statearr_30803_30844[(2)] = null);

(statearr_30803_30844[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (4))){
var inst_30751 = (state_30796[(13)]);
var inst_30749 = (state_30796[(7)]);
var inst_30748 = (state_30796[(2)]);
var inst_30749__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30748,(0),null);
var inst_30750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30748,(1),null);
var inst_30751__$1 = (inst_30749__$1 == null);
var state_30796__$1 = (function (){var statearr_30804 = state_30796;
(statearr_30804[(13)] = inst_30751__$1);

(statearr_30804[(14)] = inst_30750);

(statearr_30804[(7)] = inst_30749__$1);

return statearr_30804;
})();
if(cljs.core.truth_(inst_30751__$1)){
var statearr_30805_30845 = state_30796__$1;
(statearr_30805_30845[(1)] = (5));

} else {
var statearr_30806_30846 = state_30796__$1;
(statearr_30806_30846[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (15))){
var inst_30770 = (state_30796[(15)]);
var inst_30741 = (state_30796[(16)]);
var inst_30770__$1 = cljs.core.empty_QMARK_(inst_30741);
var state_30796__$1 = (function (){var statearr_30807 = state_30796;
(statearr_30807[(15)] = inst_30770__$1);

return statearr_30807;
})();
if(inst_30770__$1){
var statearr_30808_30847 = state_30796__$1;
(statearr_30808_30847[(1)] = (17));

} else {
var statearr_30809_30848 = state_30796__$1;
(statearr_30809_30848[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (21))){
var inst_30740 = (state_30796[(12)]);
var inst_30737 = inst_30740;
var state_30796__$1 = (function (){var statearr_30810 = state_30796;
(statearr_30810[(10)] = inst_30737);

return statearr_30810;
})();
var statearr_30811_30849 = state_30796__$1;
(statearr_30811_30849[(2)] = null);

(statearr_30811_30849[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (13))){
var inst_30763 = (state_30796[(2)]);
var inst_30764 = calc_state();
var inst_30737 = inst_30764;
var state_30796__$1 = (function (){var statearr_30812 = state_30796;
(statearr_30812[(10)] = inst_30737);

(statearr_30812[(17)] = inst_30763);

return statearr_30812;
})();
var statearr_30813_30850 = state_30796__$1;
(statearr_30813_30850[(2)] = null);

(statearr_30813_30850[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (22))){
var inst_30790 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
var statearr_30814_30851 = state_30796__$1;
(statearr_30814_30851[(2)] = inst_30790);

(statearr_30814_30851[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (6))){
var inst_30750 = (state_30796[(14)]);
var inst_30754 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30750,change);
var state_30796__$1 = state_30796;
var statearr_30815_30852 = state_30796__$1;
(statearr_30815_30852[(2)] = inst_30754);

(statearr_30815_30852[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (25))){
var state_30796__$1 = state_30796;
var statearr_30816_30853 = state_30796__$1;
(statearr_30816_30853[(2)] = null);

(statearr_30816_30853[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (17))){
var inst_30742 = (state_30796[(18)]);
var inst_30750 = (state_30796[(14)]);
var inst_30772 = (inst_30742.cljs$core$IFn$_invoke$arity$1 ? inst_30742.cljs$core$IFn$_invoke$arity$1(inst_30750) : inst_30742.call(null,inst_30750));
var inst_30773 = cljs.core.not(inst_30772);
var state_30796__$1 = state_30796;
var statearr_30817_30854 = state_30796__$1;
(statearr_30817_30854[(2)] = inst_30773);

(statearr_30817_30854[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (3))){
var inst_30794 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30796__$1,inst_30794);
} else {
if((state_val_30797 === (12))){
var state_30796__$1 = state_30796;
var statearr_30818_30855 = state_30796__$1;
(statearr_30818_30855[(2)] = null);

(statearr_30818_30855[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (2))){
var inst_30740 = (state_30796[(12)]);
var inst_30737 = (state_30796[(10)]);
var inst_30740__$1 = cljs.core.__destructure_map(inst_30737);
var inst_30741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30740__$1,cljs.core.cst$kw$solos);
var inst_30742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30740__$1,cljs.core.cst$kw$mutes);
var inst_30743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30740__$1,cljs.core.cst$kw$reads);
var state_30796__$1 = (function (){var statearr_30819 = state_30796;
(statearr_30819[(18)] = inst_30742);

(statearr_30819[(12)] = inst_30740__$1);

(statearr_30819[(16)] = inst_30741);

return statearr_30819;
})();
return cljs.core.async.ioc_alts_BANG_(state_30796__$1,(4),inst_30743);
} else {
if((state_val_30797 === (23))){
var inst_30781 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
if(cljs.core.truth_(inst_30781)){
var statearr_30820_30856 = state_30796__$1;
(statearr_30820_30856[(1)] = (24));

} else {
var statearr_30821_30857 = state_30796__$1;
(statearr_30821_30857[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (19))){
var inst_30776 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
var statearr_30822_30858 = state_30796__$1;
(statearr_30822_30858[(2)] = inst_30776);

(statearr_30822_30858[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (11))){
var inst_30750 = (state_30796[(14)]);
var inst_30760 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30750);
var state_30796__$1 = state_30796;
var statearr_30823_30859 = state_30796__$1;
(statearr_30823_30859[(2)] = inst_30760);

(statearr_30823_30859[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (9))){
var inst_30767 = (state_30796[(19)]);
var inst_30750 = (state_30796[(14)]);
var inst_30741 = (state_30796[(16)]);
var inst_30767__$1 = (inst_30741.cljs$core$IFn$_invoke$arity$1 ? inst_30741.cljs$core$IFn$_invoke$arity$1(inst_30750) : inst_30741.call(null,inst_30750));
var state_30796__$1 = (function (){var statearr_30824 = state_30796;
(statearr_30824[(19)] = inst_30767__$1);

return statearr_30824;
})();
if(cljs.core.truth_(inst_30767__$1)){
var statearr_30825_30860 = state_30796__$1;
(statearr_30825_30860[(1)] = (14));

} else {
var statearr_30826_30861 = state_30796__$1;
(statearr_30826_30861[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (5))){
var inst_30751 = (state_30796[(13)]);
var state_30796__$1 = state_30796;
var statearr_30827_30862 = state_30796__$1;
(statearr_30827_30862[(2)] = inst_30751);

(statearr_30827_30862[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (14))){
var inst_30767 = (state_30796[(19)]);
var state_30796__$1 = state_30796;
var statearr_30828_30863 = state_30796__$1;
(statearr_30828_30863[(2)] = inst_30767);

(statearr_30828_30863[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (26))){
var inst_30786 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
var statearr_30829_30864 = state_30796__$1;
(statearr_30829_30864[(2)] = inst_30786);

(statearr_30829_30864[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (16))){
var inst_30778 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
if(cljs.core.truth_(inst_30778)){
var statearr_30830_30865 = state_30796__$1;
(statearr_30830_30865[(1)] = (20));

} else {
var statearr_30831_30866 = state_30796__$1;
(statearr_30831_30866[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (10))){
var inst_30792 = (state_30796[(2)]);
var state_30796__$1 = state_30796;
var statearr_30832_30867 = state_30796__$1;
(statearr_30832_30867[(2)] = inst_30792);

(statearr_30832_30867[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (18))){
var inst_30770 = (state_30796[(15)]);
var state_30796__$1 = state_30796;
var statearr_30833_30868 = state_30796__$1;
(statearr_30833_30868[(2)] = inst_30770);

(statearr_30833_30868[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30797 === (8))){
var inst_30749 = (state_30796[(7)]);
var inst_30758 = (inst_30749 == null);
var state_30796__$1 = state_30796;
if(cljs.core.truth_(inst_30758)){
var statearr_30834_30869 = state_30796__$1;
(statearr_30834_30869[(1)] = (11));

} else {
var statearr_30835_30870 = state_30796__$1;
(statearr_30835_30870[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29714__auto__ = null;
var cljs$core$async$mix_$_state_machine__29714__auto____0 = (function (){
var statearr_30836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30836[(0)] = cljs$core$async$mix_$_state_machine__29714__auto__);

(statearr_30836[(1)] = (1));

return statearr_30836;
});
var cljs$core$async$mix_$_state_machine__29714__auto____1 = (function (state_30796){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_30796);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e30837){if((e30837 instanceof Object)){
var ex__29717__auto__ = e30837;
var statearr_30838_30871 = state_30796;
(statearr_30838_30871[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30796);

return cljs.core.cst$kw$recur;
} else {
throw e30837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__30872 = state_30796;
state_30796 = G__30872;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29714__auto__ = function(state_30796){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29714__auto____1.call(this,state_30796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29714__auto____0;
cljs$core$async$mix_$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29714__auto____1;
return cljs$core$async$mix_$_state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_30839 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_30839[(6)] = c__29822__auto___30840);

return statearr_30839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_30875 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_30875(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_30876 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_30876(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_30877 = (function() {
var G__30878 = null;
var G__30878__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__30878__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__30878 = function(p,v){
switch(arguments.length){
case 1:
return G__30878__1.call(this,p);
case 2:
return G__30878__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30878.cljs$core$IFn$_invoke$arity$1 = G__30878__1;
G__30878.cljs$core$IFn$_invoke$arity$2 = G__30878__2;
return G__30878;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30874 = arguments.length;
switch (G__30874) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30877.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30877.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30882 = arguments.length;
switch (G__30882) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30880_SHARP_){
if(cljs.core.truth_((p1__30880_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30880_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30880_SHARP_.call(null,topic)))){
return p1__30880_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30880_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30883 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30883 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30884){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30884 = meta30884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30885,meta30884__$1){
var self__ = this;
var _30885__$1 = this;
return (new cljs.core.async.t_cljs$core$async30883(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30884__$1));
}));

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30885){
var self__ = this;
var _30885__$1 = this;
return self__.meta30884;
}));

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta30884], null);
}));

(cljs.core.async.t_cljs$core$async30883.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30883");

(cljs.core.async.t_cljs$core$async30883.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async30883");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30883.
 */
cljs.core.async.__GT_t_cljs$core$async30883 = (function cljs$core$async$__GT_t_cljs$core$async30883(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30884){
return (new cljs.core.async.t_cljs$core$async30883(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30884));
});

}

return (new cljs.core.async.t_cljs$core$async30883(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29822__auto___31003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_30957){
var state_val_30958 = (state_30957[(1)]);
if((state_val_30958 === (7))){
var inst_30953 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30959_31004 = state_30957__$1;
(statearr_30959_31004[(2)] = inst_30953);

(statearr_30959_31004[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (20))){
var state_30957__$1 = state_30957;
var statearr_30960_31005 = state_30957__$1;
(statearr_30960_31005[(2)] = null);

(statearr_30960_31005[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (1))){
var state_30957__$1 = state_30957;
var statearr_30961_31006 = state_30957__$1;
(statearr_30961_31006[(2)] = null);

(statearr_30961_31006[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (24))){
var inst_30936 = (state_30957[(7)]);
var inst_30945 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30936);
var state_30957__$1 = state_30957;
var statearr_30962_31007 = state_30957__$1;
(statearr_30962_31007[(2)] = inst_30945);

(statearr_30962_31007[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (4))){
var inst_30888 = (state_30957[(8)]);
var inst_30888__$1 = (state_30957[(2)]);
var inst_30889 = (inst_30888__$1 == null);
var state_30957__$1 = (function (){var statearr_30963 = state_30957;
(statearr_30963[(8)] = inst_30888__$1);

return statearr_30963;
})();
if(cljs.core.truth_(inst_30889)){
var statearr_30964_31008 = state_30957__$1;
(statearr_30964_31008[(1)] = (5));

} else {
var statearr_30965_31009 = state_30957__$1;
(statearr_30965_31009[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (15))){
var inst_30930 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30966_31010 = state_30957__$1;
(statearr_30966_31010[(2)] = inst_30930);

(statearr_30966_31010[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (21))){
var inst_30950 = (state_30957[(2)]);
var state_30957__$1 = (function (){var statearr_30967 = state_30957;
(statearr_30967[(9)] = inst_30950);

return statearr_30967;
})();
var statearr_30968_31011 = state_30957__$1;
(statearr_30968_31011[(2)] = null);

(statearr_30968_31011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (13))){
var inst_30912 = (state_30957[(10)]);
var inst_30914 = cljs.core.chunked_seq_QMARK_(inst_30912);
var state_30957__$1 = state_30957;
if(inst_30914){
var statearr_30969_31012 = state_30957__$1;
(statearr_30969_31012[(1)] = (16));

} else {
var statearr_30970_31013 = state_30957__$1;
(statearr_30970_31013[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (22))){
var inst_30942 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
if(cljs.core.truth_(inst_30942)){
var statearr_30971_31014 = state_30957__$1;
(statearr_30971_31014[(1)] = (23));

} else {
var statearr_30972_31015 = state_30957__$1;
(statearr_30972_31015[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (6))){
var inst_30888 = (state_30957[(8)]);
var inst_30938 = (state_30957[(11)]);
var inst_30936 = (state_30957[(7)]);
var inst_30936__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30888) : topic_fn.call(null,inst_30888));
var inst_30937 = cljs.core.deref(mults);
var inst_30938__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30937,inst_30936__$1);
var state_30957__$1 = (function (){var statearr_30973 = state_30957;
(statearr_30973[(11)] = inst_30938__$1);

(statearr_30973[(7)] = inst_30936__$1);

return statearr_30973;
})();
if(cljs.core.truth_(inst_30938__$1)){
var statearr_30974_31016 = state_30957__$1;
(statearr_30974_31016[(1)] = (19));

} else {
var statearr_30975_31017 = state_30957__$1;
(statearr_30975_31017[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (25))){
var inst_30947 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30976_31018 = state_30957__$1;
(statearr_30976_31018[(2)] = inst_30947);

(statearr_30976_31018[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (17))){
var inst_30912 = (state_30957[(10)]);
var inst_30921 = cljs.core.first(inst_30912);
var inst_30922 = cljs.core.async.muxch_STAR_(inst_30921);
var inst_30923 = cljs.core.async.close_BANG_(inst_30922);
var inst_30924 = cljs.core.next(inst_30912);
var inst_30898 = inst_30924;
var inst_30899 = null;
var inst_30900 = (0);
var inst_30901 = (0);
var state_30957__$1 = (function (){var statearr_30977 = state_30957;
(statearr_30977[(12)] = inst_30900);

(statearr_30977[(13)] = inst_30898);

(statearr_30977[(14)] = inst_30899);

(statearr_30977[(15)] = inst_30901);

(statearr_30977[(16)] = inst_30923);

return statearr_30977;
})();
var statearr_30978_31019 = state_30957__$1;
(statearr_30978_31019[(2)] = null);

(statearr_30978_31019[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (3))){
var inst_30955 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30957__$1,inst_30955);
} else {
if((state_val_30958 === (12))){
var inst_30932 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30979_31020 = state_30957__$1;
(statearr_30979_31020[(2)] = inst_30932);

(statearr_30979_31020[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (2))){
var state_30957__$1 = state_30957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30957__$1,(4),ch);
} else {
if((state_val_30958 === (23))){
var state_30957__$1 = state_30957;
var statearr_30980_31021 = state_30957__$1;
(statearr_30980_31021[(2)] = null);

(statearr_30980_31021[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (19))){
var inst_30888 = (state_30957[(8)]);
var inst_30938 = (state_30957[(11)]);
var inst_30940 = cljs.core.async.muxch_STAR_(inst_30938);
var state_30957__$1 = state_30957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30957__$1,(22),inst_30940,inst_30888);
} else {
if((state_val_30958 === (11))){
var inst_30898 = (state_30957[(13)]);
var inst_30912 = (state_30957[(10)]);
var inst_30912__$1 = cljs.core.seq(inst_30898);
var state_30957__$1 = (function (){var statearr_30981 = state_30957;
(statearr_30981[(10)] = inst_30912__$1);

return statearr_30981;
})();
if(inst_30912__$1){
var statearr_30982_31022 = state_30957__$1;
(statearr_30982_31022[(1)] = (13));

} else {
var statearr_30983_31023 = state_30957__$1;
(statearr_30983_31023[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (9))){
var inst_30934 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30984_31024 = state_30957__$1;
(statearr_30984_31024[(2)] = inst_30934);

(statearr_30984_31024[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (5))){
var inst_30895 = cljs.core.deref(mults);
var inst_30896 = cljs.core.vals(inst_30895);
var inst_30897 = cljs.core.seq(inst_30896);
var inst_30898 = inst_30897;
var inst_30899 = null;
var inst_30900 = (0);
var inst_30901 = (0);
var state_30957__$1 = (function (){var statearr_30985 = state_30957;
(statearr_30985[(12)] = inst_30900);

(statearr_30985[(13)] = inst_30898);

(statearr_30985[(14)] = inst_30899);

(statearr_30985[(15)] = inst_30901);

return statearr_30985;
})();
var statearr_30986_31025 = state_30957__$1;
(statearr_30986_31025[(2)] = null);

(statearr_30986_31025[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (14))){
var state_30957__$1 = state_30957;
var statearr_30990_31026 = state_30957__$1;
(statearr_30990_31026[(2)] = null);

(statearr_30990_31026[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (16))){
var inst_30912 = (state_30957[(10)]);
var inst_30916 = cljs.core.chunk_first(inst_30912);
var inst_30917 = cljs.core.chunk_rest(inst_30912);
var inst_30918 = cljs.core.count(inst_30916);
var inst_30898 = inst_30917;
var inst_30899 = inst_30916;
var inst_30900 = inst_30918;
var inst_30901 = (0);
var state_30957__$1 = (function (){var statearr_30991 = state_30957;
(statearr_30991[(12)] = inst_30900);

(statearr_30991[(13)] = inst_30898);

(statearr_30991[(14)] = inst_30899);

(statearr_30991[(15)] = inst_30901);

return statearr_30991;
})();
var statearr_30992_31027 = state_30957__$1;
(statearr_30992_31027[(2)] = null);

(statearr_30992_31027[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (10))){
var inst_30900 = (state_30957[(12)]);
var inst_30898 = (state_30957[(13)]);
var inst_30899 = (state_30957[(14)]);
var inst_30901 = (state_30957[(15)]);
var inst_30906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30899,inst_30901);
var inst_30907 = cljs.core.async.muxch_STAR_(inst_30906);
var inst_30908 = cljs.core.async.close_BANG_(inst_30907);
var inst_30909 = (inst_30901 + (1));
var tmp30987 = inst_30900;
var tmp30988 = inst_30898;
var tmp30989 = inst_30899;
var inst_30898__$1 = tmp30988;
var inst_30899__$1 = tmp30989;
var inst_30900__$1 = tmp30987;
var inst_30901__$1 = inst_30909;
var state_30957__$1 = (function (){var statearr_30993 = state_30957;
(statearr_30993[(12)] = inst_30900__$1);

(statearr_30993[(17)] = inst_30908);

(statearr_30993[(13)] = inst_30898__$1);

(statearr_30993[(14)] = inst_30899__$1);

(statearr_30993[(15)] = inst_30901__$1);

return statearr_30993;
})();
var statearr_30994_31028 = state_30957__$1;
(statearr_30994_31028[(2)] = null);

(statearr_30994_31028[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (18))){
var inst_30927 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30995_31029 = state_30957__$1;
(statearr_30995_31029[(2)] = inst_30927);

(statearr_30995_31029[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30958 === (8))){
var inst_30900 = (state_30957[(12)]);
var inst_30901 = (state_30957[(15)]);
var inst_30903 = (inst_30901 < inst_30900);
var inst_30904 = inst_30903;
var state_30957__$1 = state_30957;
if(cljs.core.truth_(inst_30904)){
var statearr_30996_31030 = state_30957__$1;
(statearr_30996_31030[(1)] = (10));

} else {
var statearr_30997_31031 = state_30957__$1;
(statearr_30997_31031[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29714__auto__ = null;
var cljs$core$async$state_machine__29714__auto____0 = (function (){
var statearr_30998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30998[(0)] = cljs$core$async$state_machine__29714__auto__);

(statearr_30998[(1)] = (1));

return statearr_30998;
});
var cljs$core$async$state_machine__29714__auto____1 = (function (state_30957){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_30957);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e30999){if((e30999 instanceof Object)){
var ex__29717__auto__ = e30999;
var statearr_31000_31032 = state_30957;
(statearr_31000_31032[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30957);

return cljs.core.cst$kw$recur;
} else {
throw e30999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__31033 = state_30957;
state_30957 = G__31033;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$state_machine__29714__auto__ = function(state_30957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29714__auto____1.call(this,state_30957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29714__auto____0;
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29714__auto____1;
return cljs$core$async$state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_31001 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_31001[(6)] = c__29822__auto___31003);

return statearr_31001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31035 = arguments.length;
switch (G__31035) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31038 = arguments.length;
switch (G__31038) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31041 = arguments.length;
switch (G__31041) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29822__auto___31108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_31080){
var state_val_31081 = (state_31080[(1)]);
if((state_val_31081 === (7))){
var state_31080__$1 = state_31080;
var statearr_31082_31109 = state_31080__$1;
(statearr_31082_31109[(2)] = null);

(statearr_31082_31109[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (1))){
var state_31080__$1 = state_31080;
var statearr_31083_31110 = state_31080__$1;
(statearr_31083_31110[(2)] = null);

(statearr_31083_31110[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (4))){
var inst_31044 = (state_31080[(7)]);
var inst_31046 = (inst_31044 < cnt);
var state_31080__$1 = state_31080;
if(cljs.core.truth_(inst_31046)){
var statearr_31084_31111 = state_31080__$1;
(statearr_31084_31111[(1)] = (6));

} else {
var statearr_31085_31112 = state_31080__$1;
(statearr_31085_31112[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (15))){
var inst_31076 = (state_31080[(2)]);
var state_31080__$1 = state_31080;
var statearr_31086_31113 = state_31080__$1;
(statearr_31086_31113[(2)] = inst_31076);

(statearr_31086_31113[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (13))){
var inst_31069 = cljs.core.async.close_BANG_(out);
var state_31080__$1 = state_31080;
var statearr_31087_31114 = state_31080__$1;
(statearr_31087_31114[(2)] = inst_31069);

(statearr_31087_31114[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (6))){
var state_31080__$1 = state_31080;
var statearr_31088_31115 = state_31080__$1;
(statearr_31088_31115[(2)] = null);

(statearr_31088_31115[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (3))){
var inst_31078 = (state_31080[(2)]);
var state_31080__$1 = state_31080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31080__$1,inst_31078);
} else {
if((state_val_31081 === (12))){
var inst_31066 = (state_31080[(8)]);
var inst_31066__$1 = (state_31080[(2)]);
var inst_31067 = cljs.core.some(cljs.core.nil_QMARK_,inst_31066__$1);
var state_31080__$1 = (function (){var statearr_31089 = state_31080;
(statearr_31089[(8)] = inst_31066__$1);

return statearr_31089;
})();
if(cljs.core.truth_(inst_31067)){
var statearr_31090_31116 = state_31080__$1;
(statearr_31090_31116[(1)] = (13));

} else {
var statearr_31091_31117 = state_31080__$1;
(statearr_31091_31117[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (2))){
var inst_31043 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31044 = (0);
var state_31080__$1 = (function (){var statearr_31092 = state_31080;
(statearr_31092[(7)] = inst_31044);

(statearr_31092[(9)] = inst_31043);

return statearr_31092;
})();
var statearr_31093_31118 = state_31080__$1;
(statearr_31093_31118[(2)] = null);

(statearr_31093_31118[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (11))){
var inst_31044 = (state_31080[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31080,(10),Object,null,(9));
var inst_31053 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31044) : chs__$1.call(null,inst_31044));
var inst_31054 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31044) : done.call(null,inst_31044));
var inst_31055 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31053,inst_31054);
var state_31080__$1 = state_31080;
var statearr_31094_31119 = state_31080__$1;
(statearr_31094_31119[(2)] = inst_31055);


cljs.core.async.impl.ioc_helpers.process_exception(state_31080__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (9))){
var inst_31044 = (state_31080[(7)]);
var inst_31057 = (state_31080[(2)]);
var inst_31058 = (inst_31044 + (1));
var inst_31044__$1 = inst_31058;
var state_31080__$1 = (function (){var statearr_31095 = state_31080;
(statearr_31095[(7)] = inst_31044__$1);

(statearr_31095[(10)] = inst_31057);

return statearr_31095;
})();
var statearr_31096_31120 = state_31080__$1;
(statearr_31096_31120[(2)] = null);

(statearr_31096_31120[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (5))){
var inst_31064 = (state_31080[(2)]);
var state_31080__$1 = (function (){var statearr_31097 = state_31080;
(statearr_31097[(11)] = inst_31064);

return statearr_31097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31080__$1,(12),dchan);
} else {
if((state_val_31081 === (14))){
var inst_31066 = (state_31080[(8)]);
var inst_31071 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31066);
var state_31080__$1 = state_31080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31080__$1,(16),out,inst_31071);
} else {
if((state_val_31081 === (16))){
var inst_31073 = (state_31080[(2)]);
var state_31080__$1 = (function (){var statearr_31098 = state_31080;
(statearr_31098[(12)] = inst_31073);

return statearr_31098;
})();
var statearr_31099_31121 = state_31080__$1;
(statearr_31099_31121[(2)] = null);

(statearr_31099_31121[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (10))){
var inst_31048 = (state_31080[(2)]);
var inst_31049 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31080__$1 = (function (){var statearr_31100 = state_31080;
(statearr_31100[(13)] = inst_31048);

return statearr_31100;
})();
var statearr_31101_31122 = state_31080__$1;
(statearr_31101_31122[(2)] = inst_31049);


cljs.core.async.impl.ioc_helpers.process_exception(state_31080__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_31081 === (8))){
var inst_31062 = (state_31080[(2)]);
var state_31080__$1 = state_31080;
var statearr_31102_31123 = state_31080__$1;
(statearr_31102_31123[(2)] = inst_31062);

(statearr_31102_31123[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29714__auto__ = null;
var cljs$core$async$state_machine__29714__auto____0 = (function (){
var statearr_31103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31103[(0)] = cljs$core$async$state_machine__29714__auto__);

(statearr_31103[(1)] = (1));

return statearr_31103;
});
var cljs$core$async$state_machine__29714__auto____1 = (function (state_31080){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_31080);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e31104){if((e31104 instanceof Object)){
var ex__29717__auto__ = e31104;
var statearr_31105_31124 = state_31080;
(statearr_31105_31124[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31080);

return cljs.core.cst$kw$recur;
} else {
throw e31104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__31125 = state_31080;
state_31080 = G__31125;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$state_machine__29714__auto__ = function(state_31080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29714__auto____1.call(this,state_31080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29714__auto____0;
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29714__auto____1;
return cljs$core$async$state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_31106 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_31106[(6)] = c__29822__auto___31108);

return statearr_31106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31128 = arguments.length;
switch (G__31128) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29822__auto___31182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_31160){
var state_val_31161 = (state_31160[(1)]);
if((state_val_31161 === (7))){
var inst_31140 = (state_31160[(7)]);
var inst_31139 = (state_31160[(8)]);
var inst_31139__$1 = (state_31160[(2)]);
var inst_31140__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31139__$1,(0),null);
var inst_31141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31139__$1,(1),null);
var inst_31142 = (inst_31140__$1 == null);
var state_31160__$1 = (function (){var statearr_31162 = state_31160;
(statearr_31162[(7)] = inst_31140__$1);

(statearr_31162[(8)] = inst_31139__$1);

(statearr_31162[(9)] = inst_31141);

return statearr_31162;
})();
if(cljs.core.truth_(inst_31142)){
var statearr_31163_31183 = state_31160__$1;
(statearr_31163_31183[(1)] = (8));

} else {
var statearr_31164_31184 = state_31160__$1;
(statearr_31164_31184[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31161 === (1))){
var inst_31129 = cljs.core.vec(chs);
var inst_31130 = inst_31129;
var state_31160__$1 = (function (){var statearr_31165 = state_31160;
(statearr_31165[(10)] = inst_31130);

return statearr_31165;
})();
var statearr_31166_31185 = state_31160__$1;
(statearr_31166_31185[(2)] = null);

(statearr_31166_31185[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31161 === (4))){
var inst_31130 = (state_31160[(10)]);
var state_31160__$1 = state_31160;
return cljs.core.async.ioc_alts_BANG_(state_31160__$1,(7),inst_31130);
} else {
if((state_val_31161 === (6))){
var inst_31156 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31167_31186 = state_31160__$1;
(statearr_31167_31186[(2)] = inst_31156);

(statearr_31167_31186[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31161 === (3))){
var inst_31158 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31160__$1,inst_31158);
} else {
if((state_val_31161 === (2))){
var inst_31130 = (state_31160[(10)]);
var inst_31132 = cljs.core.count(inst_31130);
var inst_31133 = (inst_31132 > (0));
var state_31160__$1 = state_31160;
if(cljs.core.truth_(inst_31133)){
var statearr_31169_31187 = state_31160__$1;
(statearr_31169_31187[(1)] = (4));

} else {
var statearr_31170_31188 = state_31160__$1;
(statearr_31170_31188[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31161 === (11))){
var inst_31130 = (state_31160[(10)]);
var inst_31149 = (state_31160[(2)]);
var tmp31168 = inst_31130;
var inst_31130__$1 = tmp31168;
var state_31160__$1 = (function (){var statearr_31171 = state_31160;
(statearr_31171[(10)] = inst_31130__$1);

(statearr_31171[(11)] = inst_31149);

return statearr_31171;
})();
var statearr_31172_31189 = state_31160__$1;
(statearr_31172_31189[(2)] = null);

(statearr_31172_31189[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31161 === (9))){
var inst_31140 = (state_31160[(7)]);
var state_31160__$1 = state_31160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31160__$1,(11),out,inst_31140);
} else {
if((state_val_31161 === (5))){
var inst_31154 = cljs.core.async.close_BANG_(out);
var state_31160__$1 = state_31160;
var statearr_31173_31190 = state_31160__$1;
(statearr_31173_31190[(2)] = inst_31154);

(statearr_31173_31190[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31161 === (10))){
var inst_31152 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31174_31191 = state_31160__$1;
(statearr_31174_31191[(2)] = inst_31152);

(statearr_31174_31191[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31161 === (8))){
var inst_31140 = (state_31160[(7)]);
var inst_31139 = (state_31160[(8)]);
var inst_31130 = (state_31160[(10)]);
var inst_31141 = (state_31160[(9)]);
var inst_31144 = (function (){var cs = inst_31130;
var vec__31135 = inst_31139;
var v = inst_31140;
var c = inst_31141;
return (function (p1__31126_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31126_SHARP_);
});
})();
var inst_31145 = cljs.core.filterv(inst_31144,inst_31130);
var inst_31130__$1 = inst_31145;
var state_31160__$1 = (function (){var statearr_31175 = state_31160;
(statearr_31175[(10)] = inst_31130__$1);

return statearr_31175;
})();
var statearr_31176_31192 = state_31160__$1;
(statearr_31176_31192[(2)] = null);

(statearr_31176_31192[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29714__auto__ = null;
var cljs$core$async$state_machine__29714__auto____0 = (function (){
var statearr_31177 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31177[(0)] = cljs$core$async$state_machine__29714__auto__);

(statearr_31177[(1)] = (1));

return statearr_31177;
});
var cljs$core$async$state_machine__29714__auto____1 = (function (state_31160){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_31160);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e31178){if((e31178 instanceof Object)){
var ex__29717__auto__ = e31178;
var statearr_31179_31193 = state_31160;
(statearr_31179_31193[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31160);

return cljs.core.cst$kw$recur;
} else {
throw e31178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__31194 = state_31160;
state_31160 = G__31194;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$state_machine__29714__auto__ = function(state_31160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29714__auto____1.call(this,state_31160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29714__auto____0;
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29714__auto____1;
return cljs$core$async$state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_31180 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_31180[(6)] = c__29822__auto___31182);

return statearr_31180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31196 = arguments.length;
switch (G__31196) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29822__auto___31241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_31220){
var state_val_31221 = (state_31220[(1)]);
if((state_val_31221 === (7))){
var inst_31202 = (state_31220[(7)]);
var inst_31202__$1 = (state_31220[(2)]);
var inst_31203 = (inst_31202__$1 == null);
var inst_31204 = cljs.core.not(inst_31203);
var state_31220__$1 = (function (){var statearr_31222 = state_31220;
(statearr_31222[(7)] = inst_31202__$1);

return statearr_31222;
})();
if(inst_31204){
var statearr_31223_31242 = state_31220__$1;
(statearr_31223_31242[(1)] = (8));

} else {
var statearr_31224_31243 = state_31220__$1;
(statearr_31224_31243[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31221 === (1))){
var inst_31197 = (0);
var state_31220__$1 = (function (){var statearr_31225 = state_31220;
(statearr_31225[(8)] = inst_31197);

return statearr_31225;
})();
var statearr_31226_31244 = state_31220__$1;
(statearr_31226_31244[(2)] = null);

(statearr_31226_31244[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31221 === (4))){
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31220__$1,(7),ch);
} else {
if((state_val_31221 === (6))){
var inst_31215 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31227_31245 = state_31220__$1;
(statearr_31227_31245[(2)] = inst_31215);

(statearr_31227_31245[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31221 === (3))){
var inst_31217 = (state_31220[(2)]);
var inst_31218 = cljs.core.async.close_BANG_(out);
var state_31220__$1 = (function (){var statearr_31228 = state_31220;
(statearr_31228[(9)] = inst_31217);

return statearr_31228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31220__$1,inst_31218);
} else {
if((state_val_31221 === (2))){
var inst_31197 = (state_31220[(8)]);
var inst_31199 = (inst_31197 < n);
var state_31220__$1 = state_31220;
if(cljs.core.truth_(inst_31199)){
var statearr_31229_31246 = state_31220__$1;
(statearr_31229_31246[(1)] = (4));

} else {
var statearr_31230_31247 = state_31220__$1;
(statearr_31230_31247[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31221 === (11))){
var inst_31197 = (state_31220[(8)]);
var inst_31207 = (state_31220[(2)]);
var inst_31208 = (inst_31197 + (1));
var inst_31197__$1 = inst_31208;
var state_31220__$1 = (function (){var statearr_31231 = state_31220;
(statearr_31231[(10)] = inst_31207);

(statearr_31231[(8)] = inst_31197__$1);

return statearr_31231;
})();
var statearr_31232_31248 = state_31220__$1;
(statearr_31232_31248[(2)] = null);

(statearr_31232_31248[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31221 === (9))){
var state_31220__$1 = state_31220;
var statearr_31233_31249 = state_31220__$1;
(statearr_31233_31249[(2)] = null);

(statearr_31233_31249[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31221 === (5))){
var state_31220__$1 = state_31220;
var statearr_31234_31250 = state_31220__$1;
(statearr_31234_31250[(2)] = null);

(statearr_31234_31250[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31221 === (10))){
var inst_31212 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31235_31251 = state_31220__$1;
(statearr_31235_31251[(2)] = inst_31212);

(statearr_31235_31251[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31221 === (8))){
var inst_31202 = (state_31220[(7)]);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31220__$1,(11),out,inst_31202);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29714__auto__ = null;
var cljs$core$async$state_machine__29714__auto____0 = (function (){
var statearr_31236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31236[(0)] = cljs$core$async$state_machine__29714__auto__);

(statearr_31236[(1)] = (1));

return statearr_31236;
});
var cljs$core$async$state_machine__29714__auto____1 = (function (state_31220){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_31220);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e31237){if((e31237 instanceof Object)){
var ex__29717__auto__ = e31237;
var statearr_31238_31252 = state_31220;
(statearr_31238_31252[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31220);

return cljs.core.cst$kw$recur;
} else {
throw e31237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__31253 = state_31220;
state_31220 = G__31253;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$state_machine__29714__auto__ = function(state_31220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29714__auto____1.call(this,state_31220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29714__auto____0;
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29714__auto____1;
return cljs$core$async$state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_31239 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_31239[(6)] = c__29822__auto___31241);

return statearr_31239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31255 = (function (f,ch,meta31256){
this.f = f;
this.ch = ch;
this.meta31256 = meta31256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31257,meta31256__$1){
var self__ = this;
var _31257__$1 = this;
return (new cljs.core.async.t_cljs$core$async31255(self__.f,self__.ch,meta31256__$1));
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31257){
var self__ = this;
var _31257__$1 = this;
return self__.meta31256;
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31258 = (function (f,ch,meta31256,_,fn1,meta31259){
this.f = f;
this.ch = ch;
this.meta31256 = meta31256;
this._ = _;
this.fn1 = fn1;
this.meta31259 = meta31259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31260,meta31259__$1){
var self__ = this;
var _31260__$1 = this;
return (new cljs.core.async.t_cljs$core$async31258(self__.f,self__.ch,self__.meta31256,self__._,self__.fn1,meta31259__$1));
}));

(cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31260){
var self__ = this;
var _31260__$1 = this;
return self__.meta31259;
}));

(cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31254_SHARP_){
var G__31261 = (((p1__31254_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31254_SHARP_) : self__.f.call(null,p1__31254_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31261) : f1.call(null,G__31261));
});
}));

(cljs.core.async.t_cljs$core$async31258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31256,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async31255], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta31259], null);
}));

(cljs.core.async.t_cljs$core$async31258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31258");

(cljs.core.async.t_cljs$core$async31258.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async31258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31258.
 */
cljs.core.async.__GT_t_cljs$core$async31258 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31258(f__$1,ch__$1,meta31256__$1,___$2,fn1__$1,meta31259){
return (new cljs.core.async.t_cljs$core$async31258(f__$1,ch__$1,meta31256__$1,___$2,fn1__$1,meta31259));
});

}

return (new cljs.core.async.t_cljs$core$async31258(self__.f,self__.ch,self__.meta31256,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31262 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31262) : self__.f.call(null,G__31262));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31256], null);
}));

(cljs.core.async.t_cljs$core$async31255.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31255");

(cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async31255");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31255.
 */
cljs.core.async.__GT_t_cljs$core$async31255 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31255(f__$1,ch__$1,meta31256){
return (new cljs.core.async.t_cljs$core$async31255(f__$1,ch__$1,meta31256));
});

}

return (new cljs.core.async.t_cljs$core$async31255(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31263 = (function (f,ch,meta31264){
this.f = f;
this.ch = ch;
this.meta31264 = meta31264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31265,meta31264__$1){
var self__ = this;
var _31265__$1 = this;
return (new cljs.core.async.t_cljs$core$async31263(self__.f,self__.ch,meta31264__$1));
}));

(cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31265){
var self__ = this;
var _31265__$1 = this;
return self__.meta31264;
}));

(cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31264], null);
}));

(cljs.core.async.t_cljs$core$async31263.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31263");

(cljs.core.async.t_cljs$core$async31263.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async31263");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31263.
 */
cljs.core.async.__GT_t_cljs$core$async31263 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31263(f__$1,ch__$1,meta31264){
return (new cljs.core.async.t_cljs$core$async31263(f__$1,ch__$1,meta31264));
});

}

return (new cljs.core.async.t_cljs$core$async31263(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31266 = (function (p,ch,meta31267){
this.p = p;
this.ch = ch;
this.meta31267 = meta31267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31268,meta31267__$1){
var self__ = this;
var _31268__$1 = this;
return (new cljs.core.async.t_cljs$core$async31266(self__.p,self__.ch,meta31267__$1));
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31268){
var self__ = this;
var _31268__$1 = this;
return self__.meta31267;
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31267], null);
}));

(cljs.core.async.t_cljs$core$async31266.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31266");

(cljs.core.async.t_cljs$core$async31266.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async31266");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31266.
 */
cljs.core.async.__GT_t_cljs$core$async31266 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31266(p__$1,ch__$1,meta31267){
return (new cljs.core.async.t_cljs$core$async31266(p__$1,ch__$1,meta31267));
});

}

return (new cljs.core.async.t_cljs$core$async31266(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31270 = arguments.length;
switch (G__31270) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29822__auto___31310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_31291){
var state_val_31292 = (state_31291[(1)]);
if((state_val_31292 === (7))){
var inst_31287 = (state_31291[(2)]);
var state_31291__$1 = state_31291;
var statearr_31293_31311 = state_31291__$1;
(statearr_31293_31311[(2)] = inst_31287);

(statearr_31293_31311[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31292 === (1))){
var state_31291__$1 = state_31291;
var statearr_31294_31312 = state_31291__$1;
(statearr_31294_31312[(2)] = null);

(statearr_31294_31312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31292 === (4))){
var inst_31273 = (state_31291[(7)]);
var inst_31273__$1 = (state_31291[(2)]);
var inst_31274 = (inst_31273__$1 == null);
var state_31291__$1 = (function (){var statearr_31295 = state_31291;
(statearr_31295[(7)] = inst_31273__$1);

return statearr_31295;
})();
if(cljs.core.truth_(inst_31274)){
var statearr_31296_31313 = state_31291__$1;
(statearr_31296_31313[(1)] = (5));

} else {
var statearr_31297_31314 = state_31291__$1;
(statearr_31297_31314[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31292 === (6))){
var inst_31273 = (state_31291[(7)]);
var inst_31278 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31273) : p.call(null,inst_31273));
var state_31291__$1 = state_31291;
if(cljs.core.truth_(inst_31278)){
var statearr_31298_31315 = state_31291__$1;
(statearr_31298_31315[(1)] = (8));

} else {
var statearr_31299_31316 = state_31291__$1;
(statearr_31299_31316[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31292 === (3))){
var inst_31289 = (state_31291[(2)]);
var state_31291__$1 = state_31291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31291__$1,inst_31289);
} else {
if((state_val_31292 === (2))){
var state_31291__$1 = state_31291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31291__$1,(4),ch);
} else {
if((state_val_31292 === (11))){
var inst_31281 = (state_31291[(2)]);
var state_31291__$1 = state_31291;
var statearr_31300_31317 = state_31291__$1;
(statearr_31300_31317[(2)] = inst_31281);

(statearr_31300_31317[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31292 === (9))){
var state_31291__$1 = state_31291;
var statearr_31301_31318 = state_31291__$1;
(statearr_31301_31318[(2)] = null);

(statearr_31301_31318[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31292 === (5))){
var inst_31276 = cljs.core.async.close_BANG_(out);
var state_31291__$1 = state_31291;
var statearr_31302_31319 = state_31291__$1;
(statearr_31302_31319[(2)] = inst_31276);

(statearr_31302_31319[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31292 === (10))){
var inst_31284 = (state_31291[(2)]);
var state_31291__$1 = (function (){var statearr_31303 = state_31291;
(statearr_31303[(8)] = inst_31284);

return statearr_31303;
})();
var statearr_31304_31320 = state_31291__$1;
(statearr_31304_31320[(2)] = null);

(statearr_31304_31320[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31292 === (8))){
var inst_31273 = (state_31291[(7)]);
var state_31291__$1 = state_31291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31291__$1,(11),out,inst_31273);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29714__auto__ = null;
var cljs$core$async$state_machine__29714__auto____0 = (function (){
var statearr_31305 = [null,null,null,null,null,null,null,null,null];
(statearr_31305[(0)] = cljs$core$async$state_machine__29714__auto__);

(statearr_31305[(1)] = (1));

return statearr_31305;
});
var cljs$core$async$state_machine__29714__auto____1 = (function (state_31291){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_31291);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e31306){if((e31306 instanceof Object)){
var ex__29717__auto__ = e31306;
var statearr_31307_31321 = state_31291;
(statearr_31307_31321[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31291);

return cljs.core.cst$kw$recur;
} else {
throw e31306;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__31322 = state_31291;
state_31291 = G__31322;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$state_machine__29714__auto__ = function(state_31291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29714__auto____1.call(this,state_31291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29714__auto____0;
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29714__auto____1;
return cljs$core$async$state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_31308 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_31308[(6)] = c__29822__auto___31310);

return statearr_31308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31324 = arguments.length;
switch (G__31324) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29822__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_31387){
var state_val_31388 = (state_31387[(1)]);
if((state_val_31388 === (7))){
var inst_31383 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31389_31427 = state_31387__$1;
(statearr_31389_31427[(2)] = inst_31383);

(statearr_31389_31427[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (20))){
var inst_31353 = (state_31387[(7)]);
var inst_31364 = (state_31387[(2)]);
var inst_31365 = cljs.core.next(inst_31353);
var inst_31339 = inst_31365;
var inst_31340 = null;
var inst_31341 = (0);
var inst_31342 = (0);
var state_31387__$1 = (function (){var statearr_31390 = state_31387;
(statearr_31390[(8)] = inst_31339);

(statearr_31390[(9)] = inst_31364);

(statearr_31390[(10)] = inst_31341);

(statearr_31390[(11)] = inst_31340);

(statearr_31390[(12)] = inst_31342);

return statearr_31390;
})();
var statearr_31391_31428 = state_31387__$1;
(statearr_31391_31428[(2)] = null);

(statearr_31391_31428[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (1))){
var state_31387__$1 = state_31387;
var statearr_31392_31429 = state_31387__$1;
(statearr_31392_31429[(2)] = null);

(statearr_31392_31429[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (4))){
var inst_31328 = (state_31387[(13)]);
var inst_31328__$1 = (state_31387[(2)]);
var inst_31329 = (inst_31328__$1 == null);
var state_31387__$1 = (function (){var statearr_31393 = state_31387;
(statearr_31393[(13)] = inst_31328__$1);

return statearr_31393;
})();
if(cljs.core.truth_(inst_31329)){
var statearr_31394_31430 = state_31387__$1;
(statearr_31394_31430[(1)] = (5));

} else {
var statearr_31395_31431 = state_31387__$1;
(statearr_31395_31431[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (15))){
var state_31387__$1 = state_31387;
var statearr_31399_31432 = state_31387__$1;
(statearr_31399_31432[(2)] = null);

(statearr_31399_31432[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (21))){
var state_31387__$1 = state_31387;
var statearr_31400_31433 = state_31387__$1;
(statearr_31400_31433[(2)] = null);

(statearr_31400_31433[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (13))){
var inst_31339 = (state_31387[(8)]);
var inst_31341 = (state_31387[(10)]);
var inst_31340 = (state_31387[(11)]);
var inst_31342 = (state_31387[(12)]);
var inst_31349 = (state_31387[(2)]);
var inst_31350 = (inst_31342 + (1));
var tmp31396 = inst_31339;
var tmp31397 = inst_31341;
var tmp31398 = inst_31340;
var inst_31339__$1 = tmp31396;
var inst_31340__$1 = tmp31398;
var inst_31341__$1 = tmp31397;
var inst_31342__$1 = inst_31350;
var state_31387__$1 = (function (){var statearr_31401 = state_31387;
(statearr_31401[(8)] = inst_31339__$1);

(statearr_31401[(10)] = inst_31341__$1);

(statearr_31401[(11)] = inst_31340__$1);

(statearr_31401[(12)] = inst_31342__$1);

(statearr_31401[(14)] = inst_31349);

return statearr_31401;
})();
var statearr_31402_31434 = state_31387__$1;
(statearr_31402_31434[(2)] = null);

(statearr_31402_31434[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (22))){
var state_31387__$1 = state_31387;
var statearr_31403_31435 = state_31387__$1;
(statearr_31403_31435[(2)] = null);

(statearr_31403_31435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (6))){
var inst_31328 = (state_31387[(13)]);
var inst_31337 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31328) : f.call(null,inst_31328));
var inst_31338 = cljs.core.seq(inst_31337);
var inst_31339 = inst_31338;
var inst_31340 = null;
var inst_31341 = (0);
var inst_31342 = (0);
var state_31387__$1 = (function (){var statearr_31404 = state_31387;
(statearr_31404[(8)] = inst_31339);

(statearr_31404[(10)] = inst_31341);

(statearr_31404[(11)] = inst_31340);

(statearr_31404[(12)] = inst_31342);

return statearr_31404;
})();
var statearr_31405_31436 = state_31387__$1;
(statearr_31405_31436[(2)] = null);

(statearr_31405_31436[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (17))){
var inst_31353 = (state_31387[(7)]);
var inst_31357 = cljs.core.chunk_first(inst_31353);
var inst_31358 = cljs.core.chunk_rest(inst_31353);
var inst_31359 = cljs.core.count(inst_31357);
var inst_31339 = inst_31358;
var inst_31340 = inst_31357;
var inst_31341 = inst_31359;
var inst_31342 = (0);
var state_31387__$1 = (function (){var statearr_31406 = state_31387;
(statearr_31406[(8)] = inst_31339);

(statearr_31406[(10)] = inst_31341);

(statearr_31406[(11)] = inst_31340);

(statearr_31406[(12)] = inst_31342);

return statearr_31406;
})();
var statearr_31407_31437 = state_31387__$1;
(statearr_31407_31437[(2)] = null);

(statearr_31407_31437[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (3))){
var inst_31385 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31387__$1,inst_31385);
} else {
if((state_val_31388 === (12))){
var inst_31373 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31408_31438 = state_31387__$1;
(statearr_31408_31438[(2)] = inst_31373);

(statearr_31408_31438[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (2))){
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31387__$1,(4),in$);
} else {
if((state_val_31388 === (23))){
var inst_31381 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31409_31439 = state_31387__$1;
(statearr_31409_31439[(2)] = inst_31381);

(statearr_31409_31439[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (19))){
var inst_31368 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31410_31440 = state_31387__$1;
(statearr_31410_31440[(2)] = inst_31368);

(statearr_31410_31440[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (11))){
var inst_31353 = (state_31387[(7)]);
var inst_31339 = (state_31387[(8)]);
var inst_31353__$1 = cljs.core.seq(inst_31339);
var state_31387__$1 = (function (){var statearr_31411 = state_31387;
(statearr_31411[(7)] = inst_31353__$1);

return statearr_31411;
})();
if(inst_31353__$1){
var statearr_31412_31441 = state_31387__$1;
(statearr_31412_31441[(1)] = (14));

} else {
var statearr_31413_31442 = state_31387__$1;
(statearr_31413_31442[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (9))){
var inst_31375 = (state_31387[(2)]);
var inst_31376 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31387__$1 = (function (){var statearr_31414 = state_31387;
(statearr_31414[(15)] = inst_31375);

return statearr_31414;
})();
if(cljs.core.truth_(inst_31376)){
var statearr_31415_31443 = state_31387__$1;
(statearr_31415_31443[(1)] = (21));

} else {
var statearr_31416_31444 = state_31387__$1;
(statearr_31416_31444[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (5))){
var inst_31331 = cljs.core.async.close_BANG_(out);
var state_31387__$1 = state_31387;
var statearr_31417_31445 = state_31387__$1;
(statearr_31417_31445[(2)] = inst_31331);

(statearr_31417_31445[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (14))){
var inst_31353 = (state_31387[(7)]);
var inst_31355 = cljs.core.chunked_seq_QMARK_(inst_31353);
var state_31387__$1 = state_31387;
if(inst_31355){
var statearr_31418_31446 = state_31387__$1;
(statearr_31418_31446[(1)] = (17));

} else {
var statearr_31419_31447 = state_31387__$1;
(statearr_31419_31447[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (16))){
var inst_31371 = (state_31387[(2)]);
var state_31387__$1 = state_31387;
var statearr_31420_31448 = state_31387__$1;
(statearr_31420_31448[(2)] = inst_31371);

(statearr_31420_31448[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31388 === (10))){
var inst_31340 = (state_31387[(11)]);
var inst_31342 = (state_31387[(12)]);
var inst_31347 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31340,inst_31342);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31387__$1,(13),out,inst_31347);
} else {
if((state_val_31388 === (18))){
var inst_31353 = (state_31387[(7)]);
var inst_31362 = cljs.core.first(inst_31353);
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31387__$1,(20),out,inst_31362);
} else {
if((state_val_31388 === (8))){
var inst_31341 = (state_31387[(10)]);
var inst_31342 = (state_31387[(12)]);
var inst_31344 = (inst_31342 < inst_31341);
var inst_31345 = inst_31344;
var state_31387__$1 = state_31387;
if(cljs.core.truth_(inst_31345)){
var statearr_31421_31449 = state_31387__$1;
(statearr_31421_31449[(1)] = (10));

} else {
var statearr_31422_31450 = state_31387__$1;
(statearr_31422_31450[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29714__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29714__auto____0 = (function (){
var statearr_31423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31423[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29714__auto__);

(statearr_31423[(1)] = (1));

return statearr_31423;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29714__auto____1 = (function (state_31387){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_31387);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e31424){if((e31424 instanceof Object)){
var ex__29717__auto__ = e31424;
var statearr_31425_31451 = state_31387;
(statearr_31425_31451[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31387);

return cljs.core.cst$kw$recur;
} else {
throw e31424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__31452 = state_31387;
state_31387 = G__31452;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29714__auto__ = function(state_31387){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29714__auto____1.call(this,state_31387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29714__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29714__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_31426 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_31426[(6)] = c__29822__auto__);

return statearr_31426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));

return c__29822__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31454 = arguments.length;
switch (G__31454) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31457 = arguments.length;
switch (G__31457) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31460 = arguments.length;
switch (G__31460) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29822__auto___31507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_31484){
var state_val_31485 = (state_31484[(1)]);
if((state_val_31485 === (7))){
var inst_31479 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
var statearr_31486_31508 = state_31484__$1;
(statearr_31486_31508[(2)] = inst_31479);

(statearr_31486_31508[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31485 === (1))){
var inst_31461 = null;
var state_31484__$1 = (function (){var statearr_31487 = state_31484;
(statearr_31487[(7)] = inst_31461);

return statearr_31487;
})();
var statearr_31488_31509 = state_31484__$1;
(statearr_31488_31509[(2)] = null);

(statearr_31488_31509[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31485 === (4))){
var inst_31464 = (state_31484[(8)]);
var inst_31464__$1 = (state_31484[(2)]);
var inst_31465 = (inst_31464__$1 == null);
var inst_31466 = cljs.core.not(inst_31465);
var state_31484__$1 = (function (){var statearr_31489 = state_31484;
(statearr_31489[(8)] = inst_31464__$1);

return statearr_31489;
})();
if(inst_31466){
var statearr_31490_31510 = state_31484__$1;
(statearr_31490_31510[(1)] = (5));

} else {
var statearr_31491_31511 = state_31484__$1;
(statearr_31491_31511[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31485 === (6))){
var state_31484__$1 = state_31484;
var statearr_31492_31512 = state_31484__$1;
(statearr_31492_31512[(2)] = null);

(statearr_31492_31512[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31485 === (3))){
var inst_31481 = (state_31484[(2)]);
var inst_31482 = cljs.core.async.close_BANG_(out);
var state_31484__$1 = (function (){var statearr_31493 = state_31484;
(statearr_31493[(9)] = inst_31481);

return statearr_31493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31484__$1,inst_31482);
} else {
if((state_val_31485 === (2))){
var state_31484__$1 = state_31484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31484__$1,(4),ch);
} else {
if((state_val_31485 === (11))){
var inst_31464 = (state_31484[(8)]);
var inst_31473 = (state_31484[(2)]);
var inst_31461 = inst_31464;
var state_31484__$1 = (function (){var statearr_31494 = state_31484;
(statearr_31494[(7)] = inst_31461);

(statearr_31494[(10)] = inst_31473);

return statearr_31494;
})();
var statearr_31495_31513 = state_31484__$1;
(statearr_31495_31513[(2)] = null);

(statearr_31495_31513[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31485 === (9))){
var inst_31464 = (state_31484[(8)]);
var state_31484__$1 = state_31484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31484__$1,(11),out,inst_31464);
} else {
if((state_val_31485 === (5))){
var inst_31461 = (state_31484[(7)]);
var inst_31464 = (state_31484[(8)]);
var inst_31468 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31464,inst_31461);
var state_31484__$1 = state_31484;
if(inst_31468){
var statearr_31497_31514 = state_31484__$1;
(statearr_31497_31514[(1)] = (8));

} else {
var statearr_31498_31515 = state_31484__$1;
(statearr_31498_31515[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31485 === (10))){
var inst_31476 = (state_31484[(2)]);
var state_31484__$1 = state_31484;
var statearr_31499_31516 = state_31484__$1;
(statearr_31499_31516[(2)] = inst_31476);

(statearr_31499_31516[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31485 === (8))){
var inst_31461 = (state_31484[(7)]);
var tmp31496 = inst_31461;
var inst_31461__$1 = tmp31496;
var state_31484__$1 = (function (){var statearr_31500 = state_31484;
(statearr_31500[(7)] = inst_31461__$1);

return statearr_31500;
})();
var statearr_31501_31517 = state_31484__$1;
(statearr_31501_31517[(2)] = null);

(statearr_31501_31517[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29714__auto__ = null;
var cljs$core$async$state_machine__29714__auto____0 = (function (){
var statearr_31502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31502[(0)] = cljs$core$async$state_machine__29714__auto__);

(statearr_31502[(1)] = (1));

return statearr_31502;
});
var cljs$core$async$state_machine__29714__auto____1 = (function (state_31484){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_31484);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e31503){if((e31503 instanceof Object)){
var ex__29717__auto__ = e31503;
var statearr_31504_31518 = state_31484;
(statearr_31504_31518[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31484);

return cljs.core.cst$kw$recur;
} else {
throw e31503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__31519 = state_31484;
state_31484 = G__31519;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$state_machine__29714__auto__ = function(state_31484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29714__auto____1.call(this,state_31484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29714__auto____0;
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29714__auto____1;
return cljs$core$async$state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_31505 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_31505[(6)] = c__29822__auto___31507);

return statearr_31505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31521 = arguments.length;
switch (G__31521) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29822__auto___31587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_31559){
var state_val_31560 = (state_31559[(1)]);
if((state_val_31560 === (7))){
var inst_31555 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31561_31588 = state_31559__$1;
(statearr_31561_31588[(2)] = inst_31555);

(statearr_31561_31588[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31560 === (1))){
var inst_31522 = (new Array(n));
var inst_31523 = inst_31522;
var inst_31524 = (0);
var state_31559__$1 = (function (){var statearr_31562 = state_31559;
(statearr_31562[(7)] = inst_31523);

(statearr_31562[(8)] = inst_31524);

return statearr_31562;
})();
var statearr_31563_31589 = state_31559__$1;
(statearr_31563_31589[(2)] = null);

(statearr_31563_31589[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31560 === (4))){
var inst_31527 = (state_31559[(9)]);
var inst_31527__$1 = (state_31559[(2)]);
var inst_31528 = (inst_31527__$1 == null);
var inst_31529 = cljs.core.not(inst_31528);
var state_31559__$1 = (function (){var statearr_31564 = state_31559;
(statearr_31564[(9)] = inst_31527__$1);

return statearr_31564;
})();
if(inst_31529){
var statearr_31565_31590 = state_31559__$1;
(statearr_31565_31590[(1)] = (5));

} else {
var statearr_31566_31591 = state_31559__$1;
(statearr_31566_31591[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31560 === (15))){
var inst_31549 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31567_31592 = state_31559__$1;
(statearr_31567_31592[(2)] = inst_31549);

(statearr_31567_31592[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31560 === (13))){
var state_31559__$1 = state_31559;
var statearr_31568_31593 = state_31559__$1;
(statearr_31568_31593[(2)] = null);

(statearr_31568_31593[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31560 === (6))){
var inst_31524 = (state_31559[(8)]);
var inst_31545 = (inst_31524 > (0));
var state_31559__$1 = state_31559;
if(cljs.core.truth_(inst_31545)){
var statearr_31569_31594 = state_31559__$1;
(statearr_31569_31594[(1)] = (12));

} else {
var statearr_31570_31595 = state_31559__$1;
(statearr_31570_31595[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31560 === (3))){
var inst_31557 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31559__$1,inst_31557);
} else {
if((state_val_31560 === (12))){
var inst_31523 = (state_31559[(7)]);
var inst_31547 = cljs.core.vec(inst_31523);
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31559__$1,(15),out,inst_31547);
} else {
if((state_val_31560 === (2))){
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31559__$1,(4),ch);
} else {
if((state_val_31560 === (11))){
var inst_31539 = (state_31559[(2)]);
var inst_31540 = (new Array(n));
var inst_31523 = inst_31540;
var inst_31524 = (0);
var state_31559__$1 = (function (){var statearr_31571 = state_31559;
(statearr_31571[(7)] = inst_31523);

(statearr_31571[(8)] = inst_31524);

(statearr_31571[(10)] = inst_31539);

return statearr_31571;
})();
var statearr_31572_31596 = state_31559__$1;
(statearr_31572_31596[(2)] = null);

(statearr_31572_31596[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31560 === (9))){
var inst_31523 = (state_31559[(7)]);
var inst_31537 = cljs.core.vec(inst_31523);
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31559__$1,(11),out,inst_31537);
} else {
if((state_val_31560 === (5))){
var inst_31523 = (state_31559[(7)]);
var inst_31524 = (state_31559[(8)]);
var inst_31532 = (state_31559[(11)]);
var inst_31527 = (state_31559[(9)]);
var inst_31531 = (inst_31523[inst_31524] = inst_31527);
var inst_31532__$1 = (inst_31524 + (1));
var inst_31533 = (inst_31532__$1 < n);
var state_31559__$1 = (function (){var statearr_31573 = state_31559;
(statearr_31573[(11)] = inst_31532__$1);

(statearr_31573[(12)] = inst_31531);

return statearr_31573;
})();
if(cljs.core.truth_(inst_31533)){
var statearr_31574_31597 = state_31559__$1;
(statearr_31574_31597[(1)] = (8));

} else {
var statearr_31575_31598 = state_31559__$1;
(statearr_31575_31598[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31560 === (14))){
var inst_31552 = (state_31559[(2)]);
var inst_31553 = cljs.core.async.close_BANG_(out);
var state_31559__$1 = (function (){var statearr_31577 = state_31559;
(statearr_31577[(13)] = inst_31552);

return statearr_31577;
})();
var statearr_31578_31599 = state_31559__$1;
(statearr_31578_31599[(2)] = inst_31553);

(statearr_31578_31599[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31560 === (10))){
var inst_31543 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31579_31600 = state_31559__$1;
(statearr_31579_31600[(2)] = inst_31543);

(statearr_31579_31600[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31560 === (8))){
var inst_31523 = (state_31559[(7)]);
var inst_31532 = (state_31559[(11)]);
var tmp31576 = inst_31523;
var inst_31523__$1 = tmp31576;
var inst_31524 = inst_31532;
var state_31559__$1 = (function (){var statearr_31580 = state_31559;
(statearr_31580[(7)] = inst_31523__$1);

(statearr_31580[(8)] = inst_31524);

return statearr_31580;
})();
var statearr_31581_31601 = state_31559__$1;
(statearr_31581_31601[(2)] = null);

(statearr_31581_31601[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29714__auto__ = null;
var cljs$core$async$state_machine__29714__auto____0 = (function (){
var statearr_31582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31582[(0)] = cljs$core$async$state_machine__29714__auto__);

(statearr_31582[(1)] = (1));

return statearr_31582;
});
var cljs$core$async$state_machine__29714__auto____1 = (function (state_31559){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_31559);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e31583){if((e31583 instanceof Object)){
var ex__29717__auto__ = e31583;
var statearr_31584_31602 = state_31559;
(statearr_31584_31602[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31559);

return cljs.core.cst$kw$recur;
} else {
throw e31583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__31603 = state_31559;
state_31559 = G__31603;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$state_machine__29714__auto__ = function(state_31559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29714__auto____1.call(this,state_31559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29714__auto____0;
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29714__auto____1;
return cljs$core$async$state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_31585 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_31585[(6)] = c__29822__auto___31587);

return statearr_31585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31605 = arguments.length;
switch (G__31605) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29822__auto___31682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29823__auto__ = (function (){var switch__29713__auto__ = (function (state_31650){
var state_val_31651 = (state_31650[(1)]);
if((state_val_31651 === (7))){
var inst_31646 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31652_31683 = state_31650__$1;
(statearr_31652_31683[(2)] = inst_31646);

(statearr_31652_31683[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (1))){
var inst_31606 = [];
var inst_31607 = inst_31606;
var inst_31608 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_31650__$1 = (function (){var statearr_31653 = state_31650;
(statearr_31653[(7)] = inst_31607);

(statearr_31653[(8)] = inst_31608);

return statearr_31653;
})();
var statearr_31654_31684 = state_31650__$1;
(statearr_31654_31684[(2)] = null);

(statearr_31654_31684[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (4))){
var inst_31611 = (state_31650[(9)]);
var inst_31611__$1 = (state_31650[(2)]);
var inst_31612 = (inst_31611__$1 == null);
var inst_31613 = cljs.core.not(inst_31612);
var state_31650__$1 = (function (){var statearr_31655 = state_31650;
(statearr_31655[(9)] = inst_31611__$1);

return statearr_31655;
})();
if(inst_31613){
var statearr_31656_31685 = state_31650__$1;
(statearr_31656_31685[(1)] = (5));

} else {
var statearr_31657_31686 = state_31650__$1;
(statearr_31657_31686[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (15))){
var inst_31607 = (state_31650[(7)]);
var inst_31638 = cljs.core.vec(inst_31607);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31650__$1,(18),out,inst_31638);
} else {
if((state_val_31651 === (13))){
var inst_31633 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31658_31687 = state_31650__$1;
(statearr_31658_31687[(2)] = inst_31633);

(statearr_31658_31687[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (6))){
var inst_31607 = (state_31650[(7)]);
var inst_31635 = inst_31607.length;
var inst_31636 = (inst_31635 > (0));
var state_31650__$1 = state_31650;
if(cljs.core.truth_(inst_31636)){
var statearr_31659_31688 = state_31650__$1;
(statearr_31659_31688[(1)] = (15));

} else {
var statearr_31660_31689 = state_31650__$1;
(statearr_31660_31689[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (17))){
var inst_31643 = (state_31650[(2)]);
var inst_31644 = cljs.core.async.close_BANG_(out);
var state_31650__$1 = (function (){var statearr_31661 = state_31650;
(statearr_31661[(10)] = inst_31643);

return statearr_31661;
})();
var statearr_31662_31690 = state_31650__$1;
(statearr_31662_31690[(2)] = inst_31644);

(statearr_31662_31690[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (3))){
var inst_31648 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31650__$1,inst_31648);
} else {
if((state_val_31651 === (12))){
var inst_31607 = (state_31650[(7)]);
var inst_31626 = cljs.core.vec(inst_31607);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31650__$1,(14),out,inst_31626);
} else {
if((state_val_31651 === (2))){
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31650__$1,(4),ch);
} else {
if((state_val_31651 === (11))){
var inst_31607 = (state_31650[(7)]);
var inst_31611 = (state_31650[(9)]);
var inst_31615 = (state_31650[(11)]);
var inst_31623 = inst_31607.push(inst_31611);
var tmp31663 = inst_31607;
var inst_31607__$1 = tmp31663;
var inst_31608 = inst_31615;
var state_31650__$1 = (function (){var statearr_31664 = state_31650;
(statearr_31664[(12)] = inst_31623);

(statearr_31664[(7)] = inst_31607__$1);

(statearr_31664[(8)] = inst_31608);

return statearr_31664;
})();
var statearr_31665_31691 = state_31650__$1;
(statearr_31665_31691[(2)] = null);

(statearr_31665_31691[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (9))){
var inst_31608 = (state_31650[(8)]);
var inst_31619 = cljs.core.keyword_identical_QMARK_(inst_31608,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var state_31650__$1 = state_31650;
var statearr_31666_31692 = state_31650__$1;
(statearr_31666_31692[(2)] = inst_31619);

(statearr_31666_31692[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (5))){
var inst_31611 = (state_31650[(9)]);
var inst_31615 = (state_31650[(11)]);
var inst_31616 = (state_31650[(13)]);
var inst_31608 = (state_31650[(8)]);
var inst_31615__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31611) : f.call(null,inst_31611));
var inst_31616__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31615__$1,inst_31608);
var state_31650__$1 = (function (){var statearr_31667 = state_31650;
(statearr_31667[(11)] = inst_31615__$1);

(statearr_31667[(13)] = inst_31616__$1);

return statearr_31667;
})();
if(inst_31616__$1){
var statearr_31668_31693 = state_31650__$1;
(statearr_31668_31693[(1)] = (8));

} else {
var statearr_31669_31694 = state_31650__$1;
(statearr_31669_31694[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (14))){
var inst_31611 = (state_31650[(9)]);
var inst_31615 = (state_31650[(11)]);
var inst_31628 = (state_31650[(2)]);
var inst_31629 = [];
var inst_31630 = inst_31629.push(inst_31611);
var inst_31607 = inst_31629;
var inst_31608 = inst_31615;
var state_31650__$1 = (function (){var statearr_31670 = state_31650;
(statearr_31670[(14)] = inst_31628);

(statearr_31670[(7)] = inst_31607);

(statearr_31670[(15)] = inst_31630);

(statearr_31670[(8)] = inst_31608);

return statearr_31670;
})();
var statearr_31671_31695 = state_31650__$1;
(statearr_31671_31695[(2)] = null);

(statearr_31671_31695[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (16))){
var state_31650__$1 = state_31650;
var statearr_31672_31696 = state_31650__$1;
(statearr_31672_31696[(2)] = null);

(statearr_31672_31696[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (10))){
var inst_31621 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
if(cljs.core.truth_(inst_31621)){
var statearr_31673_31697 = state_31650__$1;
(statearr_31673_31697[(1)] = (11));

} else {
var statearr_31674_31698 = state_31650__$1;
(statearr_31674_31698[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (18))){
var inst_31640 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31675_31699 = state_31650__$1;
(statearr_31675_31699[(2)] = inst_31640);

(statearr_31675_31699[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31651 === (8))){
var inst_31616 = (state_31650[(13)]);
var state_31650__$1 = state_31650;
var statearr_31676_31700 = state_31650__$1;
(statearr_31676_31700[(2)] = inst_31616);

(statearr_31676_31700[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29714__auto__ = null;
var cljs$core$async$state_machine__29714__auto____0 = (function (){
var statearr_31677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31677[(0)] = cljs$core$async$state_machine__29714__auto__);

(statearr_31677[(1)] = (1));

return statearr_31677;
});
var cljs$core$async$state_machine__29714__auto____1 = (function (state_31650){
while(true){
var ret_value__29715__auto__ = (function (){try{while(true){
var result__29716__auto__ = switch__29713__auto__(state_31650);
if(cljs.core.keyword_identical_QMARK_(result__29716__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29716__auto__;
}
break;
}
}catch (e31678){if((e31678 instanceof Object)){
var ex__29717__auto__ = e31678;
var statearr_31679_31701 = state_31650;
(statearr_31679_31701[(5)] = ex__29717__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31650);

return cljs.core.cst$kw$recur;
} else {
throw e31678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29715__auto__,cljs.core.cst$kw$recur)){
var G__31702 = state_31650;
state_31650 = G__31702;
continue;
} else {
return ret_value__29715__auto__;
}
break;
}
});
cljs$core$async$state_machine__29714__auto__ = function(state_31650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29714__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29714__auto____1.call(this,state_31650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29714__auto____0;
cljs$core$async$state_machine__29714__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29714__auto____1;
return cljs$core$async$state_machine__29714__auto__;
})()
})();
var state__29824__auto__ = (function (){var statearr_31680 = (f__29823__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29823__auto__.cljs$core$IFn$_invoke$arity$0() : f__29823__auto__.call(null));
(statearr_31680[(6)] = c__29822__auto___31682);

return statearr_31680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29824__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

