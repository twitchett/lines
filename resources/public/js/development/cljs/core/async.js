// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35549 = arguments.length;
switch (G__35549) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35550 = (function (f,blockable,meta35551){
this.f = f;
this.blockable = blockable;
this.meta35551 = meta35551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35552,meta35551__$1){
var self__ = this;
var _35552__$1 = this;
return (new cljs.core.async.t_cljs$core$async35550(self__.f,self__.blockable,meta35551__$1));
});

cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35552){
var self__ = this;
var _35552__$1 = this;
return self__.meta35551;
});

cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35551","meta35551",759219168,null)], null);
});

cljs.core.async.t_cljs$core$async35550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35550";

cljs.core.async.t_cljs$core$async35550.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async35550");
});

cljs.core.async.__GT_t_cljs$core$async35550 = (function cljs$core$async$__GT_t_cljs$core$async35550(f__$1,blockable__$1,meta35551){
return (new cljs.core.async.t_cljs$core$async35550(f__$1,blockable__$1,meta35551));
});

}

return (new cljs.core.async.t_cljs$core$async35550(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__35556 = arguments.length;
switch (G__35556) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__35559 = arguments.length;
switch (G__35559) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__35562 = arguments.length;
switch (G__35562) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35564 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35564);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35564,ret){
return (function (){
return fn1.call(null,val_35564);
});})(val_35564,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__35566 = arguments.length;
switch (G__35566) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31128__auto___35568 = n;
var x_35569 = (0);
while(true){
if((x_35569 < n__31128__auto___35568)){
(a[x_35569] = (0));

var G__35570 = (x_35569 + (1));
x_35569 = G__35570;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35571 = (i + (1));
i = G__35571;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35572 = (function (flag,meta35573){
this.flag = flag;
this.meta35573 = meta35573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35574,meta35573__$1){
var self__ = this;
var _35574__$1 = this;
return (new cljs.core.async.t_cljs$core$async35572(self__.flag,meta35573__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35574){
var self__ = this;
var _35574__$1 = this;
return self__.meta35573;
});})(flag))
;

cljs.core.async.t_cljs$core$async35572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35572.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35573","meta35573",-662563314,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35572";

cljs.core.async.t_cljs$core$async35572.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async35572");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35572 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35572(flag__$1,meta35573){
return (new cljs.core.async.t_cljs$core$async35572(flag__$1,meta35573));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35572(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35575 = (function (flag,cb,meta35576){
this.flag = flag;
this.cb = cb;
this.meta35576 = meta35576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35577,meta35576__$1){
var self__ = this;
var _35577__$1 = this;
return (new cljs.core.async.t_cljs$core$async35575(self__.flag,self__.cb,meta35576__$1));
});

cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35577){
var self__ = this;
var _35577__$1 = this;
return self__.meta35576;
});

cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35576","meta35576",454693793,null)], null);
});

cljs.core.async.t_cljs$core$async35575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35575";

cljs.core.async.t_cljs$core$async35575.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async35575");
});

cljs.core.async.__GT_t_cljs$core$async35575 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35575(flag__$1,cb__$1,meta35576){
return (new cljs.core.async.t_cljs$core$async35575(flag__$1,cb__$1,meta35576));
});

}

return (new cljs.core.async.t_cljs$core$async35575(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35578_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35578_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35579_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35579_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30083__auto__ = wport;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35580 = (i + (1));
i = G__35580;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30083__auto__ = ret;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30071__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30071__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__31369__auto__ = [];
var len__31362__auto___35586 = arguments.length;
var i__31363__auto___35587 = (0);
while(true){
if((i__31363__auto___35587 < len__31362__auto___35586)){
args__31369__auto__.push((arguments[i__31363__auto___35587]));

var G__35588 = (i__31363__auto___35587 + (1));
i__31363__auto___35587 = G__35588;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((1) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31370__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35583){
var map__35584 = p__35583;
var map__35584__$1 = ((((!((map__35584 == null)))?((((map__35584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35584):map__35584);
var opts = map__35584__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35581){
var G__35582 = cljs.core.first.call(null,seq35581);
var seq35581__$1 = cljs.core.next.call(null,seq35581);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35582,seq35581__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__35590 = arguments.length;
switch (G__35590) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35489__auto___35636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___35636){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___35636){
return (function (state_35614){
var state_val_35615 = (state_35614[(1)]);
if((state_val_35615 === (7))){
var inst_35610 = (state_35614[(2)]);
var state_35614__$1 = state_35614;
var statearr_35616_35637 = state_35614__$1;
(statearr_35616_35637[(2)] = inst_35610);

(statearr_35616_35637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (1))){
var state_35614__$1 = state_35614;
var statearr_35617_35638 = state_35614__$1;
(statearr_35617_35638[(2)] = null);

(statearr_35617_35638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (4))){
var inst_35593 = (state_35614[(7)]);
var inst_35593__$1 = (state_35614[(2)]);
var inst_35594 = (inst_35593__$1 == null);
var state_35614__$1 = (function (){var statearr_35618 = state_35614;
(statearr_35618[(7)] = inst_35593__$1);

return statearr_35618;
})();
if(cljs.core.truth_(inst_35594)){
var statearr_35619_35639 = state_35614__$1;
(statearr_35619_35639[(1)] = (5));

} else {
var statearr_35620_35640 = state_35614__$1;
(statearr_35620_35640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (13))){
var state_35614__$1 = state_35614;
var statearr_35621_35641 = state_35614__$1;
(statearr_35621_35641[(2)] = null);

(statearr_35621_35641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (6))){
var inst_35593 = (state_35614[(7)]);
var state_35614__$1 = state_35614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35614__$1,(11),to,inst_35593);
} else {
if((state_val_35615 === (3))){
var inst_35612 = (state_35614[(2)]);
var state_35614__$1 = state_35614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35614__$1,inst_35612);
} else {
if((state_val_35615 === (12))){
var state_35614__$1 = state_35614;
var statearr_35622_35642 = state_35614__$1;
(statearr_35622_35642[(2)] = null);

(statearr_35622_35642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (2))){
var state_35614__$1 = state_35614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35614__$1,(4),from);
} else {
if((state_val_35615 === (11))){
var inst_35603 = (state_35614[(2)]);
var state_35614__$1 = state_35614;
if(cljs.core.truth_(inst_35603)){
var statearr_35623_35643 = state_35614__$1;
(statearr_35623_35643[(1)] = (12));

} else {
var statearr_35624_35644 = state_35614__$1;
(statearr_35624_35644[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (9))){
var state_35614__$1 = state_35614;
var statearr_35625_35645 = state_35614__$1;
(statearr_35625_35645[(2)] = null);

(statearr_35625_35645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (5))){
var state_35614__$1 = state_35614;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35626_35646 = state_35614__$1;
(statearr_35626_35646[(1)] = (8));

} else {
var statearr_35627_35647 = state_35614__$1;
(statearr_35627_35647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (14))){
var inst_35608 = (state_35614[(2)]);
var state_35614__$1 = state_35614;
var statearr_35628_35648 = state_35614__$1;
(statearr_35628_35648[(2)] = inst_35608);

(statearr_35628_35648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (10))){
var inst_35600 = (state_35614[(2)]);
var state_35614__$1 = state_35614;
var statearr_35629_35649 = state_35614__$1;
(statearr_35629_35649[(2)] = inst_35600);

(statearr_35629_35649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35615 === (8))){
var inst_35597 = cljs.core.async.close_BANG_.call(null,to);
var state_35614__$1 = state_35614;
var statearr_35630_35650 = state_35614__$1;
(statearr_35630_35650[(2)] = inst_35597);

(statearr_35630_35650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto___35636))
;
return ((function (switch__35399__auto__,c__35489__auto___35636){
return (function() {
var cljs$core$async$state_machine__35400__auto__ = null;
var cljs$core$async$state_machine__35400__auto____0 = (function (){
var statearr_35631 = [null,null,null,null,null,null,null,null];
(statearr_35631[(0)] = cljs$core$async$state_machine__35400__auto__);

(statearr_35631[(1)] = (1));

return statearr_35631;
});
var cljs$core$async$state_machine__35400__auto____1 = (function (state_35614){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_35614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e35632){if((e35632 instanceof Object)){
var ex__35403__auto__ = e35632;
var statearr_35633_35651 = state_35614;
(statearr_35633_35651[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35652 = state_35614;
state_35614 = G__35652;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$state_machine__35400__auto__ = function(state_35614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35400__auto____1.call(this,state_35614);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35400__auto____0;
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35400__auto____1;
return cljs$core$async$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___35636))
})();
var state__35491__auto__ = (function (){var statearr_35634 = f__35490__auto__.call(null);
(statearr_35634[(6)] = c__35489__auto___35636);

return statearr_35634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___35636))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35653){
var vec__35654 = p__35653;
var v = cljs.core.nth.call(null,vec__35654,(0),null);
var p = cljs.core.nth.call(null,vec__35654,(1),null);
var job = vec__35654;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35489__auto___35825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___35825,res,vec__35654,v,p,job,jobs,results){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___35825,res,vec__35654,v,p,job,jobs,results){
return (function (state_35661){
var state_val_35662 = (state_35661[(1)]);
if((state_val_35662 === (1))){
var state_35661__$1 = state_35661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35661__$1,(2),res,v);
} else {
if((state_val_35662 === (2))){
var inst_35658 = (state_35661[(2)]);
var inst_35659 = cljs.core.async.close_BANG_.call(null,res);
var state_35661__$1 = (function (){var statearr_35663 = state_35661;
(statearr_35663[(7)] = inst_35658);

return statearr_35663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35661__$1,inst_35659);
} else {
return null;
}
}
});})(c__35489__auto___35825,res,vec__35654,v,p,job,jobs,results))
;
return ((function (switch__35399__auto__,c__35489__auto___35825,res,vec__35654,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0 = (function (){
var statearr_35664 = [null,null,null,null,null,null,null,null];
(statearr_35664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__);

(statearr_35664[(1)] = (1));

return statearr_35664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1 = (function (state_35661){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_35661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e35665){if((e35665 instanceof Object)){
var ex__35403__auto__ = e35665;
var statearr_35666_35826 = state_35661;
(statearr_35666_35826[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35827 = state_35661;
state_35661 = G__35827;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__ = function(state_35661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1.call(this,state_35661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___35825,res,vec__35654,v,p,job,jobs,results))
})();
var state__35491__auto__ = (function (){var statearr_35667 = f__35490__auto__.call(null);
(statearr_35667[(6)] = c__35489__auto___35825);

return statearr_35667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___35825,res,vec__35654,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35668){
var vec__35669 = p__35668;
var v = cljs.core.nth.call(null,vec__35669,(0),null);
var p = cljs.core.nth.call(null,vec__35669,(1),null);
var job = vec__35669;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31128__auto___35828 = n;
var __35829 = (0);
while(true){
if((__35829 < n__31128__auto___35828)){
var G__35672_35830 = type;
var G__35672_35831__$1 = (((G__35672_35830 instanceof cljs.core.Keyword))?G__35672_35830.fqn:null);
switch (G__35672_35831__$1) {
case "compute":
var c__35489__auto___35833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35829,c__35489__auto___35833,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (__35829,c__35489__auto___35833,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async){
return (function (state_35685){
var state_val_35686 = (state_35685[(1)]);
if((state_val_35686 === (1))){
var state_35685__$1 = state_35685;
var statearr_35687_35834 = state_35685__$1;
(statearr_35687_35834[(2)] = null);

(statearr_35687_35834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (2))){
var state_35685__$1 = state_35685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35685__$1,(4),jobs);
} else {
if((state_val_35686 === (3))){
var inst_35683 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35685__$1,inst_35683);
} else {
if((state_val_35686 === (4))){
var inst_35675 = (state_35685[(2)]);
var inst_35676 = process.call(null,inst_35675);
var state_35685__$1 = state_35685;
if(cljs.core.truth_(inst_35676)){
var statearr_35688_35835 = state_35685__$1;
(statearr_35688_35835[(1)] = (5));

} else {
var statearr_35689_35836 = state_35685__$1;
(statearr_35689_35836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (5))){
var state_35685__$1 = state_35685;
var statearr_35690_35837 = state_35685__$1;
(statearr_35690_35837[(2)] = null);

(statearr_35690_35837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (6))){
var state_35685__$1 = state_35685;
var statearr_35691_35838 = state_35685__$1;
(statearr_35691_35838[(2)] = null);

(statearr_35691_35838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (7))){
var inst_35681 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
var statearr_35692_35839 = state_35685__$1;
(statearr_35692_35839[(2)] = inst_35681);

(statearr_35692_35839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35829,c__35489__auto___35833,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async))
;
return ((function (__35829,switch__35399__auto__,c__35489__auto___35833,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0 = (function (){
var statearr_35693 = [null,null,null,null,null,null,null];
(statearr_35693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__);

(statearr_35693[(1)] = (1));

return statearr_35693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1 = (function (state_35685){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_35685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e35694){if((e35694 instanceof Object)){
var ex__35403__auto__ = e35694;
var statearr_35695_35840 = state_35685;
(statearr_35695_35840[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35841 = state_35685;
state_35685 = G__35841;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__ = function(state_35685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1.call(this,state_35685);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__;
})()
;})(__35829,switch__35399__auto__,c__35489__auto___35833,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async))
})();
var state__35491__auto__ = (function (){var statearr_35696 = f__35490__auto__.call(null);
(statearr_35696[(6)] = c__35489__auto___35833);

return statearr_35696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(__35829,c__35489__auto___35833,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async))
);


break;
case "async":
var c__35489__auto___35842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35829,c__35489__auto___35842,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (__35829,c__35489__auto___35842,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async){
return (function (state_35709){
var state_val_35710 = (state_35709[(1)]);
if((state_val_35710 === (1))){
var state_35709__$1 = state_35709;
var statearr_35711_35843 = state_35709__$1;
(statearr_35711_35843[(2)] = null);

(statearr_35711_35843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35710 === (2))){
var state_35709__$1 = state_35709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35709__$1,(4),jobs);
} else {
if((state_val_35710 === (3))){
var inst_35707 = (state_35709[(2)]);
var state_35709__$1 = state_35709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35709__$1,inst_35707);
} else {
if((state_val_35710 === (4))){
var inst_35699 = (state_35709[(2)]);
var inst_35700 = async.call(null,inst_35699);
var state_35709__$1 = state_35709;
if(cljs.core.truth_(inst_35700)){
var statearr_35712_35844 = state_35709__$1;
(statearr_35712_35844[(1)] = (5));

} else {
var statearr_35713_35845 = state_35709__$1;
(statearr_35713_35845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35710 === (5))){
var state_35709__$1 = state_35709;
var statearr_35714_35846 = state_35709__$1;
(statearr_35714_35846[(2)] = null);

(statearr_35714_35846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35710 === (6))){
var state_35709__$1 = state_35709;
var statearr_35715_35847 = state_35709__$1;
(statearr_35715_35847[(2)] = null);

(statearr_35715_35847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35710 === (7))){
var inst_35705 = (state_35709[(2)]);
var state_35709__$1 = state_35709;
var statearr_35716_35848 = state_35709__$1;
(statearr_35716_35848[(2)] = inst_35705);

(statearr_35716_35848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35829,c__35489__auto___35842,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async))
;
return ((function (__35829,switch__35399__auto__,c__35489__auto___35842,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0 = (function (){
var statearr_35717 = [null,null,null,null,null,null,null];
(statearr_35717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__);

(statearr_35717[(1)] = (1));

return statearr_35717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1 = (function (state_35709){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_35709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e35718){if((e35718 instanceof Object)){
var ex__35403__auto__ = e35718;
var statearr_35719_35849 = state_35709;
(statearr_35719_35849[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35850 = state_35709;
state_35709 = G__35850;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__ = function(state_35709){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1.call(this,state_35709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__;
})()
;})(__35829,switch__35399__auto__,c__35489__auto___35842,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async))
})();
var state__35491__auto__ = (function (){var statearr_35720 = f__35490__auto__.call(null);
(statearr_35720[(6)] = c__35489__auto___35842);

return statearr_35720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(__35829,c__35489__auto___35842,G__35672_35830,G__35672_35831__$1,n__31128__auto___35828,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35672_35831__$1)].join('')));

}

var G__35851 = (__35829 + (1));
__35829 = G__35851;
continue;
} else {
}
break;
}

var c__35489__auto___35852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___35852,jobs,results,process,async){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___35852,jobs,results,process,async){
return (function (state_35742){
var state_val_35743 = (state_35742[(1)]);
if((state_val_35743 === (1))){
var state_35742__$1 = state_35742;
var statearr_35744_35853 = state_35742__$1;
(statearr_35744_35853[(2)] = null);

(statearr_35744_35853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (2))){
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35742__$1,(4),from);
} else {
if((state_val_35743 === (3))){
var inst_35740 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35742__$1,inst_35740);
} else {
if((state_val_35743 === (4))){
var inst_35723 = (state_35742[(7)]);
var inst_35723__$1 = (state_35742[(2)]);
var inst_35724 = (inst_35723__$1 == null);
var state_35742__$1 = (function (){var statearr_35745 = state_35742;
(statearr_35745[(7)] = inst_35723__$1);

return statearr_35745;
})();
if(cljs.core.truth_(inst_35724)){
var statearr_35746_35854 = state_35742__$1;
(statearr_35746_35854[(1)] = (5));

} else {
var statearr_35747_35855 = state_35742__$1;
(statearr_35747_35855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (5))){
var inst_35726 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35742__$1 = state_35742;
var statearr_35748_35856 = state_35742__$1;
(statearr_35748_35856[(2)] = inst_35726);

(statearr_35748_35856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (6))){
var inst_35728 = (state_35742[(8)]);
var inst_35723 = (state_35742[(7)]);
var inst_35728__$1 = cljs.core.async.chan.call(null,(1));
var inst_35729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35730 = [inst_35723,inst_35728__$1];
var inst_35731 = (new cljs.core.PersistentVector(null,2,(5),inst_35729,inst_35730,null));
var state_35742__$1 = (function (){var statearr_35749 = state_35742;
(statearr_35749[(8)] = inst_35728__$1);

return statearr_35749;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35742__$1,(8),jobs,inst_35731);
} else {
if((state_val_35743 === (7))){
var inst_35738 = (state_35742[(2)]);
var state_35742__$1 = state_35742;
var statearr_35750_35857 = state_35742__$1;
(statearr_35750_35857[(2)] = inst_35738);

(statearr_35750_35857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35743 === (8))){
var inst_35728 = (state_35742[(8)]);
var inst_35733 = (state_35742[(2)]);
var state_35742__$1 = (function (){var statearr_35751 = state_35742;
(statearr_35751[(9)] = inst_35733);

return statearr_35751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35742__$1,(9),results,inst_35728);
} else {
if((state_val_35743 === (9))){
var inst_35735 = (state_35742[(2)]);
var state_35742__$1 = (function (){var statearr_35752 = state_35742;
(statearr_35752[(10)] = inst_35735);

return statearr_35752;
})();
var statearr_35753_35858 = state_35742__$1;
(statearr_35753_35858[(2)] = null);

(statearr_35753_35858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto___35852,jobs,results,process,async))
;
return ((function (switch__35399__auto__,c__35489__auto___35852,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0 = (function (){
var statearr_35754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__);

(statearr_35754[(1)] = (1));

return statearr_35754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1 = (function (state_35742){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_35742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e35755){if((e35755 instanceof Object)){
var ex__35403__auto__ = e35755;
var statearr_35756_35859 = state_35742;
(statearr_35756_35859[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35860 = state_35742;
state_35742 = G__35860;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__ = function(state_35742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1.call(this,state_35742);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___35852,jobs,results,process,async))
})();
var state__35491__auto__ = (function (){var statearr_35757 = f__35490__auto__.call(null);
(statearr_35757[(6)] = c__35489__auto___35852);

return statearr_35757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___35852,jobs,results,process,async))
);


var c__35489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto__,jobs,results,process,async){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto__,jobs,results,process,async){
return (function (state_35795){
var state_val_35796 = (state_35795[(1)]);
if((state_val_35796 === (7))){
var inst_35791 = (state_35795[(2)]);
var state_35795__$1 = state_35795;
var statearr_35797_35861 = state_35795__$1;
(statearr_35797_35861[(2)] = inst_35791);

(statearr_35797_35861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (20))){
var state_35795__$1 = state_35795;
var statearr_35798_35862 = state_35795__$1;
(statearr_35798_35862[(2)] = null);

(statearr_35798_35862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (1))){
var state_35795__$1 = state_35795;
var statearr_35799_35863 = state_35795__$1;
(statearr_35799_35863[(2)] = null);

(statearr_35799_35863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (4))){
var inst_35760 = (state_35795[(7)]);
var inst_35760__$1 = (state_35795[(2)]);
var inst_35761 = (inst_35760__$1 == null);
var state_35795__$1 = (function (){var statearr_35800 = state_35795;
(statearr_35800[(7)] = inst_35760__$1);

return statearr_35800;
})();
if(cljs.core.truth_(inst_35761)){
var statearr_35801_35864 = state_35795__$1;
(statearr_35801_35864[(1)] = (5));

} else {
var statearr_35802_35865 = state_35795__$1;
(statearr_35802_35865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (15))){
var inst_35773 = (state_35795[(8)]);
var state_35795__$1 = state_35795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35795__$1,(18),to,inst_35773);
} else {
if((state_val_35796 === (21))){
var inst_35786 = (state_35795[(2)]);
var state_35795__$1 = state_35795;
var statearr_35803_35866 = state_35795__$1;
(statearr_35803_35866[(2)] = inst_35786);

(statearr_35803_35866[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (13))){
var inst_35788 = (state_35795[(2)]);
var state_35795__$1 = (function (){var statearr_35804 = state_35795;
(statearr_35804[(9)] = inst_35788);

return statearr_35804;
})();
var statearr_35805_35867 = state_35795__$1;
(statearr_35805_35867[(2)] = null);

(statearr_35805_35867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (6))){
var inst_35760 = (state_35795[(7)]);
var state_35795__$1 = state_35795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35795__$1,(11),inst_35760);
} else {
if((state_val_35796 === (17))){
var inst_35781 = (state_35795[(2)]);
var state_35795__$1 = state_35795;
if(cljs.core.truth_(inst_35781)){
var statearr_35806_35868 = state_35795__$1;
(statearr_35806_35868[(1)] = (19));

} else {
var statearr_35807_35869 = state_35795__$1;
(statearr_35807_35869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (3))){
var inst_35793 = (state_35795[(2)]);
var state_35795__$1 = state_35795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35795__$1,inst_35793);
} else {
if((state_val_35796 === (12))){
var inst_35770 = (state_35795[(10)]);
var state_35795__$1 = state_35795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35795__$1,(14),inst_35770);
} else {
if((state_val_35796 === (2))){
var state_35795__$1 = state_35795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35795__$1,(4),results);
} else {
if((state_val_35796 === (19))){
var state_35795__$1 = state_35795;
var statearr_35808_35870 = state_35795__$1;
(statearr_35808_35870[(2)] = null);

(statearr_35808_35870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (11))){
var inst_35770 = (state_35795[(2)]);
var state_35795__$1 = (function (){var statearr_35809 = state_35795;
(statearr_35809[(10)] = inst_35770);

return statearr_35809;
})();
var statearr_35810_35871 = state_35795__$1;
(statearr_35810_35871[(2)] = null);

(statearr_35810_35871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (9))){
var state_35795__$1 = state_35795;
var statearr_35811_35872 = state_35795__$1;
(statearr_35811_35872[(2)] = null);

(statearr_35811_35872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (5))){
var state_35795__$1 = state_35795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35812_35873 = state_35795__$1;
(statearr_35812_35873[(1)] = (8));

} else {
var statearr_35813_35874 = state_35795__$1;
(statearr_35813_35874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (14))){
var inst_35775 = (state_35795[(11)]);
var inst_35773 = (state_35795[(8)]);
var inst_35773__$1 = (state_35795[(2)]);
var inst_35774 = (inst_35773__$1 == null);
var inst_35775__$1 = cljs.core.not.call(null,inst_35774);
var state_35795__$1 = (function (){var statearr_35814 = state_35795;
(statearr_35814[(11)] = inst_35775__$1);

(statearr_35814[(8)] = inst_35773__$1);

return statearr_35814;
})();
if(inst_35775__$1){
var statearr_35815_35875 = state_35795__$1;
(statearr_35815_35875[(1)] = (15));

} else {
var statearr_35816_35876 = state_35795__$1;
(statearr_35816_35876[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (16))){
var inst_35775 = (state_35795[(11)]);
var state_35795__$1 = state_35795;
var statearr_35817_35877 = state_35795__$1;
(statearr_35817_35877[(2)] = inst_35775);

(statearr_35817_35877[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (10))){
var inst_35767 = (state_35795[(2)]);
var state_35795__$1 = state_35795;
var statearr_35818_35878 = state_35795__$1;
(statearr_35818_35878[(2)] = inst_35767);

(statearr_35818_35878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (18))){
var inst_35778 = (state_35795[(2)]);
var state_35795__$1 = state_35795;
var statearr_35819_35879 = state_35795__$1;
(statearr_35819_35879[(2)] = inst_35778);

(statearr_35819_35879[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35796 === (8))){
var inst_35764 = cljs.core.async.close_BANG_.call(null,to);
var state_35795__$1 = state_35795;
var statearr_35820_35880 = state_35795__$1;
(statearr_35820_35880[(2)] = inst_35764);

(statearr_35820_35880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto__,jobs,results,process,async))
;
return ((function (switch__35399__auto__,c__35489__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0 = (function (){
var statearr_35821 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__);

(statearr_35821[(1)] = (1));

return statearr_35821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1 = (function (state_35795){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_35795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e35822){if((e35822 instanceof Object)){
var ex__35403__auto__ = e35822;
var statearr_35823_35881 = state_35795;
(statearr_35823_35881[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35882 = state_35795;
state_35795 = G__35882;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__ = function(state_35795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1.call(this,state_35795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto__,jobs,results,process,async))
})();
var state__35491__auto__ = (function (){var statearr_35824 = f__35490__auto__.call(null);
(statearr_35824[(6)] = c__35489__auto__);

return statearr_35824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto__,jobs,results,process,async))
);

return c__35489__auto__;
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
var G__35884 = arguments.length;
switch (G__35884) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__35887 = arguments.length;
switch (G__35887) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__35890 = arguments.length;
switch (G__35890) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35489__auto___35939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___35939,tc,fc){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___35939,tc,fc){
return (function (state_35916){
var state_val_35917 = (state_35916[(1)]);
if((state_val_35917 === (7))){
var inst_35912 = (state_35916[(2)]);
var state_35916__$1 = state_35916;
var statearr_35918_35940 = state_35916__$1;
(statearr_35918_35940[(2)] = inst_35912);

(statearr_35918_35940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (1))){
var state_35916__$1 = state_35916;
var statearr_35919_35941 = state_35916__$1;
(statearr_35919_35941[(2)] = null);

(statearr_35919_35941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (4))){
var inst_35893 = (state_35916[(7)]);
var inst_35893__$1 = (state_35916[(2)]);
var inst_35894 = (inst_35893__$1 == null);
var state_35916__$1 = (function (){var statearr_35920 = state_35916;
(statearr_35920[(7)] = inst_35893__$1);

return statearr_35920;
})();
if(cljs.core.truth_(inst_35894)){
var statearr_35921_35942 = state_35916__$1;
(statearr_35921_35942[(1)] = (5));

} else {
var statearr_35922_35943 = state_35916__$1;
(statearr_35922_35943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (13))){
var state_35916__$1 = state_35916;
var statearr_35923_35944 = state_35916__$1;
(statearr_35923_35944[(2)] = null);

(statearr_35923_35944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (6))){
var inst_35893 = (state_35916[(7)]);
var inst_35899 = p.call(null,inst_35893);
var state_35916__$1 = state_35916;
if(cljs.core.truth_(inst_35899)){
var statearr_35924_35945 = state_35916__$1;
(statearr_35924_35945[(1)] = (9));

} else {
var statearr_35925_35946 = state_35916__$1;
(statearr_35925_35946[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (3))){
var inst_35914 = (state_35916[(2)]);
var state_35916__$1 = state_35916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35916__$1,inst_35914);
} else {
if((state_val_35917 === (12))){
var state_35916__$1 = state_35916;
var statearr_35926_35947 = state_35916__$1;
(statearr_35926_35947[(2)] = null);

(statearr_35926_35947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (2))){
var state_35916__$1 = state_35916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35916__$1,(4),ch);
} else {
if((state_val_35917 === (11))){
var inst_35893 = (state_35916[(7)]);
var inst_35903 = (state_35916[(2)]);
var state_35916__$1 = state_35916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35916__$1,(8),inst_35903,inst_35893);
} else {
if((state_val_35917 === (9))){
var state_35916__$1 = state_35916;
var statearr_35927_35948 = state_35916__$1;
(statearr_35927_35948[(2)] = tc);

(statearr_35927_35948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (5))){
var inst_35896 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35897 = cljs.core.async.close_BANG_.call(null,fc);
var state_35916__$1 = (function (){var statearr_35928 = state_35916;
(statearr_35928[(8)] = inst_35896);

return statearr_35928;
})();
var statearr_35929_35949 = state_35916__$1;
(statearr_35929_35949[(2)] = inst_35897);

(statearr_35929_35949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (14))){
var inst_35910 = (state_35916[(2)]);
var state_35916__$1 = state_35916;
var statearr_35930_35950 = state_35916__$1;
(statearr_35930_35950[(2)] = inst_35910);

(statearr_35930_35950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (10))){
var state_35916__$1 = state_35916;
var statearr_35931_35951 = state_35916__$1;
(statearr_35931_35951[(2)] = fc);

(statearr_35931_35951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (8))){
var inst_35905 = (state_35916[(2)]);
var state_35916__$1 = state_35916;
if(cljs.core.truth_(inst_35905)){
var statearr_35932_35952 = state_35916__$1;
(statearr_35932_35952[(1)] = (12));

} else {
var statearr_35933_35953 = state_35916__$1;
(statearr_35933_35953[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto___35939,tc,fc))
;
return ((function (switch__35399__auto__,c__35489__auto___35939,tc,fc){
return (function() {
var cljs$core$async$state_machine__35400__auto__ = null;
var cljs$core$async$state_machine__35400__auto____0 = (function (){
var statearr_35934 = [null,null,null,null,null,null,null,null,null];
(statearr_35934[(0)] = cljs$core$async$state_machine__35400__auto__);

(statearr_35934[(1)] = (1));

return statearr_35934;
});
var cljs$core$async$state_machine__35400__auto____1 = (function (state_35916){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_35916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e35935){if((e35935 instanceof Object)){
var ex__35403__auto__ = e35935;
var statearr_35936_35954 = state_35916;
(statearr_35936_35954[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35955 = state_35916;
state_35916 = G__35955;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$state_machine__35400__auto__ = function(state_35916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35400__auto____1.call(this,state_35916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35400__auto____0;
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35400__auto____1;
return cljs$core$async$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___35939,tc,fc))
})();
var state__35491__auto__ = (function (){var statearr_35937 = f__35490__auto__.call(null);
(statearr_35937[(6)] = c__35489__auto___35939);

return statearr_35937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___35939,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto__){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto__){
return (function (state_35976){
var state_val_35977 = (state_35976[(1)]);
if((state_val_35977 === (7))){
var inst_35972 = (state_35976[(2)]);
var state_35976__$1 = state_35976;
var statearr_35978_35996 = state_35976__$1;
(statearr_35978_35996[(2)] = inst_35972);

(statearr_35978_35996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (1))){
var inst_35956 = init;
var state_35976__$1 = (function (){var statearr_35979 = state_35976;
(statearr_35979[(7)] = inst_35956);

return statearr_35979;
})();
var statearr_35980_35997 = state_35976__$1;
(statearr_35980_35997[(2)] = null);

(statearr_35980_35997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (4))){
var inst_35959 = (state_35976[(8)]);
var inst_35959__$1 = (state_35976[(2)]);
var inst_35960 = (inst_35959__$1 == null);
var state_35976__$1 = (function (){var statearr_35981 = state_35976;
(statearr_35981[(8)] = inst_35959__$1);

return statearr_35981;
})();
if(cljs.core.truth_(inst_35960)){
var statearr_35982_35998 = state_35976__$1;
(statearr_35982_35998[(1)] = (5));

} else {
var statearr_35983_35999 = state_35976__$1;
(statearr_35983_35999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (6))){
var inst_35956 = (state_35976[(7)]);
var inst_35963 = (state_35976[(9)]);
var inst_35959 = (state_35976[(8)]);
var inst_35963__$1 = f.call(null,inst_35956,inst_35959);
var inst_35964 = cljs.core.reduced_QMARK_.call(null,inst_35963__$1);
var state_35976__$1 = (function (){var statearr_35984 = state_35976;
(statearr_35984[(9)] = inst_35963__$1);

return statearr_35984;
})();
if(inst_35964){
var statearr_35985_36000 = state_35976__$1;
(statearr_35985_36000[(1)] = (8));

} else {
var statearr_35986_36001 = state_35976__$1;
(statearr_35986_36001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (3))){
var inst_35974 = (state_35976[(2)]);
var state_35976__$1 = state_35976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35976__$1,inst_35974);
} else {
if((state_val_35977 === (2))){
var state_35976__$1 = state_35976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35976__$1,(4),ch);
} else {
if((state_val_35977 === (9))){
var inst_35963 = (state_35976[(9)]);
var inst_35956 = inst_35963;
var state_35976__$1 = (function (){var statearr_35987 = state_35976;
(statearr_35987[(7)] = inst_35956);

return statearr_35987;
})();
var statearr_35988_36002 = state_35976__$1;
(statearr_35988_36002[(2)] = null);

(statearr_35988_36002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (5))){
var inst_35956 = (state_35976[(7)]);
var state_35976__$1 = state_35976;
var statearr_35989_36003 = state_35976__$1;
(statearr_35989_36003[(2)] = inst_35956);

(statearr_35989_36003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (10))){
var inst_35970 = (state_35976[(2)]);
var state_35976__$1 = state_35976;
var statearr_35990_36004 = state_35976__$1;
(statearr_35990_36004[(2)] = inst_35970);

(statearr_35990_36004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35977 === (8))){
var inst_35963 = (state_35976[(9)]);
var inst_35966 = cljs.core.deref.call(null,inst_35963);
var state_35976__$1 = state_35976;
var statearr_35991_36005 = state_35976__$1;
(statearr_35991_36005[(2)] = inst_35966);

(statearr_35991_36005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto__))
;
return ((function (switch__35399__auto__,c__35489__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35400__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35400__auto____0 = (function (){
var statearr_35992 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35992[(0)] = cljs$core$async$reduce_$_state_machine__35400__auto__);

(statearr_35992[(1)] = (1));

return statearr_35992;
});
var cljs$core$async$reduce_$_state_machine__35400__auto____1 = (function (state_35976){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_35976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e35993){if((e35993 instanceof Object)){
var ex__35403__auto__ = e35993;
var statearr_35994_36006 = state_35976;
(statearr_35994_36006[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36007 = state_35976;
state_35976 = G__36007;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35400__auto__ = function(state_35976){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35400__auto____1.call(this,state_35976);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35400__auto____0;
cljs$core$async$reduce_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35400__auto____1;
return cljs$core$async$reduce_$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto__))
})();
var state__35491__auto__ = (function (){var statearr_35995 = f__35490__auto__.call(null);
(statearr_35995[(6)] = c__35489__auto__);

return statearr_35995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto__))
);

return c__35489__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto__,f__$1){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto__,f__$1){
return (function (state_36013){
var state_val_36014 = (state_36013[(1)]);
if((state_val_36014 === (1))){
var inst_36008 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36013__$1 = state_36013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36013__$1,(2),inst_36008);
} else {
if((state_val_36014 === (2))){
var inst_36010 = (state_36013[(2)]);
var inst_36011 = f__$1.call(null,inst_36010);
var state_36013__$1 = state_36013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36013__$1,inst_36011);
} else {
return null;
}
}
});})(c__35489__auto__,f__$1))
;
return ((function (switch__35399__auto__,c__35489__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35400__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35400__auto____0 = (function (){
var statearr_36015 = [null,null,null,null,null,null,null];
(statearr_36015[(0)] = cljs$core$async$transduce_$_state_machine__35400__auto__);

(statearr_36015[(1)] = (1));

return statearr_36015;
});
var cljs$core$async$transduce_$_state_machine__35400__auto____1 = (function (state_36013){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_36013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e36016){if((e36016 instanceof Object)){
var ex__35403__auto__ = e36016;
var statearr_36017_36019 = state_36013;
(statearr_36017_36019[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36020 = state_36013;
state_36013 = G__36020;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35400__auto__ = function(state_36013){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35400__auto____1.call(this,state_36013);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35400__auto____0;
cljs$core$async$transduce_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35400__auto____1;
return cljs$core$async$transduce_$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto__,f__$1))
})();
var state__35491__auto__ = (function (){var statearr_36018 = f__35490__auto__.call(null);
(statearr_36018[(6)] = c__35489__auto__);

return statearr_36018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto__,f__$1))
);

return c__35489__auto__;
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
var G__36022 = arguments.length;
switch (G__36022) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto__){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto__){
return (function (state_36047){
var state_val_36048 = (state_36047[(1)]);
if((state_val_36048 === (7))){
var inst_36029 = (state_36047[(2)]);
var state_36047__$1 = state_36047;
var statearr_36049_36070 = state_36047__$1;
(statearr_36049_36070[(2)] = inst_36029);

(statearr_36049_36070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (1))){
var inst_36023 = cljs.core.seq.call(null,coll);
var inst_36024 = inst_36023;
var state_36047__$1 = (function (){var statearr_36050 = state_36047;
(statearr_36050[(7)] = inst_36024);

return statearr_36050;
})();
var statearr_36051_36071 = state_36047__$1;
(statearr_36051_36071[(2)] = null);

(statearr_36051_36071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (4))){
var inst_36024 = (state_36047[(7)]);
var inst_36027 = cljs.core.first.call(null,inst_36024);
var state_36047__$1 = state_36047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36047__$1,(7),ch,inst_36027);
} else {
if((state_val_36048 === (13))){
var inst_36041 = (state_36047[(2)]);
var state_36047__$1 = state_36047;
var statearr_36052_36072 = state_36047__$1;
(statearr_36052_36072[(2)] = inst_36041);

(statearr_36052_36072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (6))){
var inst_36032 = (state_36047[(2)]);
var state_36047__$1 = state_36047;
if(cljs.core.truth_(inst_36032)){
var statearr_36053_36073 = state_36047__$1;
(statearr_36053_36073[(1)] = (8));

} else {
var statearr_36054_36074 = state_36047__$1;
(statearr_36054_36074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (3))){
var inst_36045 = (state_36047[(2)]);
var state_36047__$1 = state_36047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36047__$1,inst_36045);
} else {
if((state_val_36048 === (12))){
var state_36047__$1 = state_36047;
var statearr_36055_36075 = state_36047__$1;
(statearr_36055_36075[(2)] = null);

(statearr_36055_36075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (2))){
var inst_36024 = (state_36047[(7)]);
var state_36047__$1 = state_36047;
if(cljs.core.truth_(inst_36024)){
var statearr_36056_36076 = state_36047__$1;
(statearr_36056_36076[(1)] = (4));

} else {
var statearr_36057_36077 = state_36047__$1;
(statearr_36057_36077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (11))){
var inst_36038 = cljs.core.async.close_BANG_.call(null,ch);
var state_36047__$1 = state_36047;
var statearr_36058_36078 = state_36047__$1;
(statearr_36058_36078[(2)] = inst_36038);

(statearr_36058_36078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (9))){
var state_36047__$1 = state_36047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36059_36079 = state_36047__$1;
(statearr_36059_36079[(1)] = (11));

} else {
var statearr_36060_36080 = state_36047__$1;
(statearr_36060_36080[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (5))){
var inst_36024 = (state_36047[(7)]);
var state_36047__$1 = state_36047;
var statearr_36061_36081 = state_36047__$1;
(statearr_36061_36081[(2)] = inst_36024);

(statearr_36061_36081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (10))){
var inst_36043 = (state_36047[(2)]);
var state_36047__$1 = state_36047;
var statearr_36062_36082 = state_36047__$1;
(statearr_36062_36082[(2)] = inst_36043);

(statearr_36062_36082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36048 === (8))){
var inst_36024 = (state_36047[(7)]);
var inst_36034 = cljs.core.next.call(null,inst_36024);
var inst_36024__$1 = inst_36034;
var state_36047__$1 = (function (){var statearr_36063 = state_36047;
(statearr_36063[(7)] = inst_36024__$1);

return statearr_36063;
})();
var statearr_36064_36083 = state_36047__$1;
(statearr_36064_36083[(2)] = null);

(statearr_36064_36083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto__))
;
return ((function (switch__35399__auto__,c__35489__auto__){
return (function() {
var cljs$core$async$state_machine__35400__auto__ = null;
var cljs$core$async$state_machine__35400__auto____0 = (function (){
var statearr_36065 = [null,null,null,null,null,null,null,null];
(statearr_36065[(0)] = cljs$core$async$state_machine__35400__auto__);

(statearr_36065[(1)] = (1));

return statearr_36065;
});
var cljs$core$async$state_machine__35400__auto____1 = (function (state_36047){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_36047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e36066){if((e36066 instanceof Object)){
var ex__35403__auto__ = e36066;
var statearr_36067_36084 = state_36047;
(statearr_36067_36084[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36085 = state_36047;
state_36047 = G__36085;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$state_machine__35400__auto__ = function(state_36047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35400__auto____1.call(this,state_36047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35400__auto____0;
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35400__auto____1;
return cljs$core$async$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto__))
})();
var state__35491__auto__ = (function (){var statearr_36068 = f__35490__auto__.call(null);
(statearr_36068[(6)] = c__35489__auto__);

return statearr_36068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto__))
);

return c__35489__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30816__auto__ = (((_ == null))?null:_);
var m__30817__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,_);
} else {
var m__30817__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30817__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m);
} else {
var m__30817__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36086 = (function (ch,cs,meta36087){
this.ch = ch;
this.cs = cs;
this.meta36087 = meta36087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36088,meta36087__$1){
var self__ = this;
var _36088__$1 = this;
return (new cljs.core.async.t_cljs$core$async36086(self__.ch,self__.cs,meta36087__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36088){
var self__ = this;
var _36088__$1 = this;
return self__.meta36087;
});})(cs))
;

cljs.core.async.t_cljs$core$async36086.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36086.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36086.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36086.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36086.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36086.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36087","meta36087",587288277,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36086";

cljs.core.async.t_cljs$core$async36086.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36086");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36086 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36086(ch__$1,cs__$1,meta36087){
return (new cljs.core.async.t_cljs$core$async36086(ch__$1,cs__$1,meta36087));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36086(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__35489__auto___36308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___36308,cs,m,dchan,dctr,done){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___36308,cs,m,dchan,dctr,done){
return (function (state_36223){
var state_val_36224 = (state_36223[(1)]);
if((state_val_36224 === (7))){
var inst_36219 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36225_36309 = state_36223__$1;
(statearr_36225_36309[(2)] = inst_36219);

(statearr_36225_36309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (20))){
var inst_36122 = (state_36223[(7)]);
var inst_36134 = cljs.core.first.call(null,inst_36122);
var inst_36135 = cljs.core.nth.call(null,inst_36134,(0),null);
var inst_36136 = cljs.core.nth.call(null,inst_36134,(1),null);
var state_36223__$1 = (function (){var statearr_36226 = state_36223;
(statearr_36226[(8)] = inst_36135);

return statearr_36226;
})();
if(cljs.core.truth_(inst_36136)){
var statearr_36227_36310 = state_36223__$1;
(statearr_36227_36310[(1)] = (22));

} else {
var statearr_36228_36311 = state_36223__$1;
(statearr_36228_36311[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (27))){
var inst_36091 = (state_36223[(9)]);
var inst_36166 = (state_36223[(10)]);
var inst_36171 = (state_36223[(11)]);
var inst_36164 = (state_36223[(12)]);
var inst_36171__$1 = cljs.core._nth.call(null,inst_36164,inst_36166);
var inst_36172 = cljs.core.async.put_BANG_.call(null,inst_36171__$1,inst_36091,done);
var state_36223__$1 = (function (){var statearr_36229 = state_36223;
(statearr_36229[(11)] = inst_36171__$1);

return statearr_36229;
})();
if(cljs.core.truth_(inst_36172)){
var statearr_36230_36312 = state_36223__$1;
(statearr_36230_36312[(1)] = (30));

} else {
var statearr_36231_36313 = state_36223__$1;
(statearr_36231_36313[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (1))){
var state_36223__$1 = state_36223;
var statearr_36232_36314 = state_36223__$1;
(statearr_36232_36314[(2)] = null);

(statearr_36232_36314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (24))){
var inst_36122 = (state_36223[(7)]);
var inst_36141 = (state_36223[(2)]);
var inst_36142 = cljs.core.next.call(null,inst_36122);
var inst_36100 = inst_36142;
var inst_36101 = null;
var inst_36102 = (0);
var inst_36103 = (0);
var state_36223__$1 = (function (){var statearr_36233 = state_36223;
(statearr_36233[(13)] = inst_36101);

(statearr_36233[(14)] = inst_36103);

(statearr_36233[(15)] = inst_36141);

(statearr_36233[(16)] = inst_36100);

(statearr_36233[(17)] = inst_36102);

return statearr_36233;
})();
var statearr_36234_36315 = state_36223__$1;
(statearr_36234_36315[(2)] = null);

(statearr_36234_36315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (39))){
var state_36223__$1 = state_36223;
var statearr_36238_36316 = state_36223__$1;
(statearr_36238_36316[(2)] = null);

(statearr_36238_36316[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (4))){
var inst_36091 = (state_36223[(9)]);
var inst_36091__$1 = (state_36223[(2)]);
var inst_36092 = (inst_36091__$1 == null);
var state_36223__$1 = (function (){var statearr_36239 = state_36223;
(statearr_36239[(9)] = inst_36091__$1);

return statearr_36239;
})();
if(cljs.core.truth_(inst_36092)){
var statearr_36240_36317 = state_36223__$1;
(statearr_36240_36317[(1)] = (5));

} else {
var statearr_36241_36318 = state_36223__$1;
(statearr_36241_36318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (15))){
var inst_36101 = (state_36223[(13)]);
var inst_36103 = (state_36223[(14)]);
var inst_36100 = (state_36223[(16)]);
var inst_36102 = (state_36223[(17)]);
var inst_36118 = (state_36223[(2)]);
var inst_36119 = (inst_36103 + (1));
var tmp36235 = inst_36101;
var tmp36236 = inst_36100;
var tmp36237 = inst_36102;
var inst_36100__$1 = tmp36236;
var inst_36101__$1 = tmp36235;
var inst_36102__$1 = tmp36237;
var inst_36103__$1 = inst_36119;
var state_36223__$1 = (function (){var statearr_36242 = state_36223;
(statearr_36242[(13)] = inst_36101__$1);

(statearr_36242[(14)] = inst_36103__$1);

(statearr_36242[(16)] = inst_36100__$1);

(statearr_36242[(17)] = inst_36102__$1);

(statearr_36242[(18)] = inst_36118);

return statearr_36242;
})();
var statearr_36243_36319 = state_36223__$1;
(statearr_36243_36319[(2)] = null);

(statearr_36243_36319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (21))){
var inst_36145 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36247_36320 = state_36223__$1;
(statearr_36247_36320[(2)] = inst_36145);

(statearr_36247_36320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (31))){
var inst_36171 = (state_36223[(11)]);
var inst_36175 = done.call(null,null);
var inst_36176 = cljs.core.async.untap_STAR_.call(null,m,inst_36171);
var state_36223__$1 = (function (){var statearr_36248 = state_36223;
(statearr_36248[(19)] = inst_36175);

return statearr_36248;
})();
var statearr_36249_36321 = state_36223__$1;
(statearr_36249_36321[(2)] = inst_36176);

(statearr_36249_36321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (32))){
var inst_36166 = (state_36223[(10)]);
var inst_36165 = (state_36223[(20)]);
var inst_36164 = (state_36223[(12)]);
var inst_36163 = (state_36223[(21)]);
var inst_36178 = (state_36223[(2)]);
var inst_36179 = (inst_36166 + (1));
var tmp36244 = inst_36165;
var tmp36245 = inst_36164;
var tmp36246 = inst_36163;
var inst_36163__$1 = tmp36246;
var inst_36164__$1 = tmp36245;
var inst_36165__$1 = tmp36244;
var inst_36166__$1 = inst_36179;
var state_36223__$1 = (function (){var statearr_36250 = state_36223;
(statearr_36250[(10)] = inst_36166__$1);

(statearr_36250[(20)] = inst_36165__$1);

(statearr_36250[(12)] = inst_36164__$1);

(statearr_36250[(21)] = inst_36163__$1);

(statearr_36250[(22)] = inst_36178);

return statearr_36250;
})();
var statearr_36251_36322 = state_36223__$1;
(statearr_36251_36322[(2)] = null);

(statearr_36251_36322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (40))){
var inst_36191 = (state_36223[(23)]);
var inst_36195 = done.call(null,null);
var inst_36196 = cljs.core.async.untap_STAR_.call(null,m,inst_36191);
var state_36223__$1 = (function (){var statearr_36252 = state_36223;
(statearr_36252[(24)] = inst_36195);

return statearr_36252;
})();
var statearr_36253_36323 = state_36223__$1;
(statearr_36253_36323[(2)] = inst_36196);

(statearr_36253_36323[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (33))){
var inst_36182 = (state_36223[(25)]);
var inst_36184 = cljs.core.chunked_seq_QMARK_.call(null,inst_36182);
var state_36223__$1 = state_36223;
if(inst_36184){
var statearr_36254_36324 = state_36223__$1;
(statearr_36254_36324[(1)] = (36));

} else {
var statearr_36255_36325 = state_36223__$1;
(statearr_36255_36325[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (13))){
var inst_36112 = (state_36223[(26)]);
var inst_36115 = cljs.core.async.close_BANG_.call(null,inst_36112);
var state_36223__$1 = state_36223;
var statearr_36256_36326 = state_36223__$1;
(statearr_36256_36326[(2)] = inst_36115);

(statearr_36256_36326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (22))){
var inst_36135 = (state_36223[(8)]);
var inst_36138 = cljs.core.async.close_BANG_.call(null,inst_36135);
var state_36223__$1 = state_36223;
var statearr_36257_36327 = state_36223__$1;
(statearr_36257_36327[(2)] = inst_36138);

(statearr_36257_36327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (36))){
var inst_36182 = (state_36223[(25)]);
var inst_36186 = cljs.core.chunk_first.call(null,inst_36182);
var inst_36187 = cljs.core.chunk_rest.call(null,inst_36182);
var inst_36188 = cljs.core.count.call(null,inst_36186);
var inst_36163 = inst_36187;
var inst_36164 = inst_36186;
var inst_36165 = inst_36188;
var inst_36166 = (0);
var state_36223__$1 = (function (){var statearr_36258 = state_36223;
(statearr_36258[(10)] = inst_36166);

(statearr_36258[(20)] = inst_36165);

(statearr_36258[(12)] = inst_36164);

(statearr_36258[(21)] = inst_36163);

return statearr_36258;
})();
var statearr_36259_36328 = state_36223__$1;
(statearr_36259_36328[(2)] = null);

(statearr_36259_36328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (41))){
var inst_36182 = (state_36223[(25)]);
var inst_36198 = (state_36223[(2)]);
var inst_36199 = cljs.core.next.call(null,inst_36182);
var inst_36163 = inst_36199;
var inst_36164 = null;
var inst_36165 = (0);
var inst_36166 = (0);
var state_36223__$1 = (function (){var statearr_36260 = state_36223;
(statearr_36260[(10)] = inst_36166);

(statearr_36260[(20)] = inst_36165);

(statearr_36260[(12)] = inst_36164);

(statearr_36260[(21)] = inst_36163);

(statearr_36260[(27)] = inst_36198);

return statearr_36260;
})();
var statearr_36261_36329 = state_36223__$1;
(statearr_36261_36329[(2)] = null);

(statearr_36261_36329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (43))){
var state_36223__$1 = state_36223;
var statearr_36262_36330 = state_36223__$1;
(statearr_36262_36330[(2)] = null);

(statearr_36262_36330[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (29))){
var inst_36207 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36263_36331 = state_36223__$1;
(statearr_36263_36331[(2)] = inst_36207);

(statearr_36263_36331[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (44))){
var inst_36216 = (state_36223[(2)]);
var state_36223__$1 = (function (){var statearr_36264 = state_36223;
(statearr_36264[(28)] = inst_36216);

return statearr_36264;
})();
var statearr_36265_36332 = state_36223__$1;
(statearr_36265_36332[(2)] = null);

(statearr_36265_36332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (6))){
var inst_36155 = (state_36223[(29)]);
var inst_36154 = cljs.core.deref.call(null,cs);
var inst_36155__$1 = cljs.core.keys.call(null,inst_36154);
var inst_36156 = cljs.core.count.call(null,inst_36155__$1);
var inst_36157 = cljs.core.reset_BANG_.call(null,dctr,inst_36156);
var inst_36162 = cljs.core.seq.call(null,inst_36155__$1);
var inst_36163 = inst_36162;
var inst_36164 = null;
var inst_36165 = (0);
var inst_36166 = (0);
var state_36223__$1 = (function (){var statearr_36266 = state_36223;
(statearr_36266[(10)] = inst_36166);

(statearr_36266[(20)] = inst_36165);

(statearr_36266[(29)] = inst_36155__$1);

(statearr_36266[(12)] = inst_36164);

(statearr_36266[(21)] = inst_36163);

(statearr_36266[(30)] = inst_36157);

return statearr_36266;
})();
var statearr_36267_36333 = state_36223__$1;
(statearr_36267_36333[(2)] = null);

(statearr_36267_36333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (28))){
var inst_36182 = (state_36223[(25)]);
var inst_36163 = (state_36223[(21)]);
var inst_36182__$1 = cljs.core.seq.call(null,inst_36163);
var state_36223__$1 = (function (){var statearr_36268 = state_36223;
(statearr_36268[(25)] = inst_36182__$1);

return statearr_36268;
})();
if(inst_36182__$1){
var statearr_36269_36334 = state_36223__$1;
(statearr_36269_36334[(1)] = (33));

} else {
var statearr_36270_36335 = state_36223__$1;
(statearr_36270_36335[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (25))){
var inst_36166 = (state_36223[(10)]);
var inst_36165 = (state_36223[(20)]);
var inst_36168 = (inst_36166 < inst_36165);
var inst_36169 = inst_36168;
var state_36223__$1 = state_36223;
if(cljs.core.truth_(inst_36169)){
var statearr_36271_36336 = state_36223__$1;
(statearr_36271_36336[(1)] = (27));

} else {
var statearr_36272_36337 = state_36223__$1;
(statearr_36272_36337[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (34))){
var state_36223__$1 = state_36223;
var statearr_36273_36338 = state_36223__$1;
(statearr_36273_36338[(2)] = null);

(statearr_36273_36338[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (17))){
var state_36223__$1 = state_36223;
var statearr_36274_36339 = state_36223__$1;
(statearr_36274_36339[(2)] = null);

(statearr_36274_36339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (3))){
var inst_36221 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36223__$1,inst_36221);
} else {
if((state_val_36224 === (12))){
var inst_36150 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36275_36340 = state_36223__$1;
(statearr_36275_36340[(2)] = inst_36150);

(statearr_36275_36340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (2))){
var state_36223__$1 = state_36223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36223__$1,(4),ch);
} else {
if((state_val_36224 === (23))){
var state_36223__$1 = state_36223;
var statearr_36276_36341 = state_36223__$1;
(statearr_36276_36341[(2)] = null);

(statearr_36276_36341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (35))){
var inst_36205 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36277_36342 = state_36223__$1;
(statearr_36277_36342[(2)] = inst_36205);

(statearr_36277_36342[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (19))){
var inst_36122 = (state_36223[(7)]);
var inst_36126 = cljs.core.chunk_first.call(null,inst_36122);
var inst_36127 = cljs.core.chunk_rest.call(null,inst_36122);
var inst_36128 = cljs.core.count.call(null,inst_36126);
var inst_36100 = inst_36127;
var inst_36101 = inst_36126;
var inst_36102 = inst_36128;
var inst_36103 = (0);
var state_36223__$1 = (function (){var statearr_36278 = state_36223;
(statearr_36278[(13)] = inst_36101);

(statearr_36278[(14)] = inst_36103);

(statearr_36278[(16)] = inst_36100);

(statearr_36278[(17)] = inst_36102);

return statearr_36278;
})();
var statearr_36279_36343 = state_36223__$1;
(statearr_36279_36343[(2)] = null);

(statearr_36279_36343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (11))){
var inst_36122 = (state_36223[(7)]);
var inst_36100 = (state_36223[(16)]);
var inst_36122__$1 = cljs.core.seq.call(null,inst_36100);
var state_36223__$1 = (function (){var statearr_36280 = state_36223;
(statearr_36280[(7)] = inst_36122__$1);

return statearr_36280;
})();
if(inst_36122__$1){
var statearr_36281_36344 = state_36223__$1;
(statearr_36281_36344[(1)] = (16));

} else {
var statearr_36282_36345 = state_36223__$1;
(statearr_36282_36345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (9))){
var inst_36152 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36283_36346 = state_36223__$1;
(statearr_36283_36346[(2)] = inst_36152);

(statearr_36283_36346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (5))){
var inst_36098 = cljs.core.deref.call(null,cs);
var inst_36099 = cljs.core.seq.call(null,inst_36098);
var inst_36100 = inst_36099;
var inst_36101 = null;
var inst_36102 = (0);
var inst_36103 = (0);
var state_36223__$1 = (function (){var statearr_36284 = state_36223;
(statearr_36284[(13)] = inst_36101);

(statearr_36284[(14)] = inst_36103);

(statearr_36284[(16)] = inst_36100);

(statearr_36284[(17)] = inst_36102);

return statearr_36284;
})();
var statearr_36285_36347 = state_36223__$1;
(statearr_36285_36347[(2)] = null);

(statearr_36285_36347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (14))){
var state_36223__$1 = state_36223;
var statearr_36286_36348 = state_36223__$1;
(statearr_36286_36348[(2)] = null);

(statearr_36286_36348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (45))){
var inst_36213 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36287_36349 = state_36223__$1;
(statearr_36287_36349[(2)] = inst_36213);

(statearr_36287_36349[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (26))){
var inst_36155 = (state_36223[(29)]);
var inst_36209 = (state_36223[(2)]);
var inst_36210 = cljs.core.seq.call(null,inst_36155);
var state_36223__$1 = (function (){var statearr_36288 = state_36223;
(statearr_36288[(31)] = inst_36209);

return statearr_36288;
})();
if(inst_36210){
var statearr_36289_36350 = state_36223__$1;
(statearr_36289_36350[(1)] = (42));

} else {
var statearr_36290_36351 = state_36223__$1;
(statearr_36290_36351[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (16))){
var inst_36122 = (state_36223[(7)]);
var inst_36124 = cljs.core.chunked_seq_QMARK_.call(null,inst_36122);
var state_36223__$1 = state_36223;
if(inst_36124){
var statearr_36291_36352 = state_36223__$1;
(statearr_36291_36352[(1)] = (19));

} else {
var statearr_36292_36353 = state_36223__$1;
(statearr_36292_36353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (38))){
var inst_36202 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36293_36354 = state_36223__$1;
(statearr_36293_36354[(2)] = inst_36202);

(statearr_36293_36354[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (30))){
var state_36223__$1 = state_36223;
var statearr_36294_36355 = state_36223__$1;
(statearr_36294_36355[(2)] = null);

(statearr_36294_36355[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (10))){
var inst_36101 = (state_36223[(13)]);
var inst_36103 = (state_36223[(14)]);
var inst_36111 = cljs.core._nth.call(null,inst_36101,inst_36103);
var inst_36112 = cljs.core.nth.call(null,inst_36111,(0),null);
var inst_36113 = cljs.core.nth.call(null,inst_36111,(1),null);
var state_36223__$1 = (function (){var statearr_36295 = state_36223;
(statearr_36295[(26)] = inst_36112);

return statearr_36295;
})();
if(cljs.core.truth_(inst_36113)){
var statearr_36296_36356 = state_36223__$1;
(statearr_36296_36356[(1)] = (13));

} else {
var statearr_36297_36357 = state_36223__$1;
(statearr_36297_36357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (18))){
var inst_36148 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36298_36358 = state_36223__$1;
(statearr_36298_36358[(2)] = inst_36148);

(statearr_36298_36358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (42))){
var state_36223__$1 = state_36223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36223__$1,(45),dchan);
} else {
if((state_val_36224 === (37))){
var inst_36182 = (state_36223[(25)]);
var inst_36091 = (state_36223[(9)]);
var inst_36191 = (state_36223[(23)]);
var inst_36191__$1 = cljs.core.first.call(null,inst_36182);
var inst_36192 = cljs.core.async.put_BANG_.call(null,inst_36191__$1,inst_36091,done);
var state_36223__$1 = (function (){var statearr_36299 = state_36223;
(statearr_36299[(23)] = inst_36191__$1);

return statearr_36299;
})();
if(cljs.core.truth_(inst_36192)){
var statearr_36300_36359 = state_36223__$1;
(statearr_36300_36359[(1)] = (39));

} else {
var statearr_36301_36360 = state_36223__$1;
(statearr_36301_36360[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (8))){
var inst_36103 = (state_36223[(14)]);
var inst_36102 = (state_36223[(17)]);
var inst_36105 = (inst_36103 < inst_36102);
var inst_36106 = inst_36105;
var state_36223__$1 = state_36223;
if(cljs.core.truth_(inst_36106)){
var statearr_36302_36361 = state_36223__$1;
(statearr_36302_36361[(1)] = (10));

} else {
var statearr_36303_36362 = state_36223__$1;
(statearr_36303_36362[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto___36308,cs,m,dchan,dctr,done))
;
return ((function (switch__35399__auto__,c__35489__auto___36308,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35400__auto__ = null;
var cljs$core$async$mult_$_state_machine__35400__auto____0 = (function (){
var statearr_36304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36304[(0)] = cljs$core$async$mult_$_state_machine__35400__auto__);

(statearr_36304[(1)] = (1));

return statearr_36304;
});
var cljs$core$async$mult_$_state_machine__35400__auto____1 = (function (state_36223){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_36223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e36305){if((e36305 instanceof Object)){
var ex__35403__auto__ = e36305;
var statearr_36306_36363 = state_36223;
(statearr_36306_36363[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36364 = state_36223;
state_36223 = G__36364;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35400__auto__ = function(state_36223){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35400__auto____1.call(this,state_36223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35400__auto____0;
cljs$core$async$mult_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35400__auto____1;
return cljs$core$async$mult_$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___36308,cs,m,dchan,dctr,done))
})();
var state__35491__auto__ = (function (){var statearr_36307 = f__35490__auto__.call(null);
(statearr_36307[(6)] = c__35489__auto___36308);

return statearr_36307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___36308,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36366 = arguments.length;
switch (G__36366) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m);
} else {
var m__30817__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,state_map);
} else {
var m__30817__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30816__auto__ = (((m == null))?null:m);
var m__30817__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,m,mode);
} else {
var m__30817__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___36378 = arguments.length;
var i__31363__auto___36379 = (0);
while(true){
if((i__31363__auto___36379 < len__31362__auto___36378)){
args__31369__auto__.push((arguments[i__31363__auto___36379]));

var G__36380 = (i__31363__auto___36379 + (1));
i__31363__auto___36379 = G__36380;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((3) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31370__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36372){
var map__36373 = p__36372;
var map__36373__$1 = ((((!((map__36373 == null)))?((((map__36373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36373):map__36373);
var opts = map__36373__$1;
var statearr_36375_36381 = state;
(statearr_36375_36381[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__36373,map__36373__$1,opts){
return (function (val){
var statearr_36376_36382 = state;
(statearr_36376_36382[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36373,map__36373__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_36377_36383 = state;
(statearr_36377_36383[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36368){
var G__36369 = cljs.core.first.call(null,seq36368);
var seq36368__$1 = cljs.core.next.call(null,seq36368);
var G__36370 = cljs.core.first.call(null,seq36368__$1);
var seq36368__$2 = cljs.core.next.call(null,seq36368__$1);
var G__36371 = cljs.core.first.call(null,seq36368__$2);
var seq36368__$3 = cljs.core.next.call(null,seq36368__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36369,G__36370,G__36371,seq36368__$3);
});

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36384 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta36385){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta36385 = meta36385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36386,meta36385__$1){
var self__ = this;
var _36386__$1 = this;
return (new cljs.core.async.t_cljs$core$async36384(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta36385__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36386){
var self__ = this;
var _36386__$1 = this;
return self__.meta36385;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36384.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36384.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta36385","meta36385",-1915993510,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36384";

cljs.core.async.t_cljs$core$async36384.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36384");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36384 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36384(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36385){
return (new cljs.core.async.t_cljs$core$async36384(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36385));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36384(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35489__auto___36548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___36548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___36548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36488){
var state_val_36489 = (state_36488[(1)]);
if((state_val_36489 === (7))){
var inst_36403 = (state_36488[(2)]);
var state_36488__$1 = state_36488;
var statearr_36490_36549 = state_36488__$1;
(statearr_36490_36549[(2)] = inst_36403);

(statearr_36490_36549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (20))){
var inst_36415 = (state_36488[(7)]);
var state_36488__$1 = state_36488;
var statearr_36491_36550 = state_36488__$1;
(statearr_36491_36550[(2)] = inst_36415);

(statearr_36491_36550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (27))){
var state_36488__$1 = state_36488;
var statearr_36492_36551 = state_36488__$1;
(statearr_36492_36551[(2)] = null);

(statearr_36492_36551[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (1))){
var inst_36390 = (state_36488[(8)]);
var inst_36390__$1 = calc_state.call(null);
var inst_36392 = (inst_36390__$1 == null);
var inst_36393 = cljs.core.not.call(null,inst_36392);
var state_36488__$1 = (function (){var statearr_36493 = state_36488;
(statearr_36493[(8)] = inst_36390__$1);

return statearr_36493;
})();
if(inst_36393){
var statearr_36494_36552 = state_36488__$1;
(statearr_36494_36552[(1)] = (2));

} else {
var statearr_36495_36553 = state_36488__$1;
(statearr_36495_36553[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (24))){
var inst_36448 = (state_36488[(9)]);
var inst_36439 = (state_36488[(10)]);
var inst_36462 = (state_36488[(11)]);
var inst_36462__$1 = inst_36439.call(null,inst_36448);
var state_36488__$1 = (function (){var statearr_36496 = state_36488;
(statearr_36496[(11)] = inst_36462__$1);

return statearr_36496;
})();
if(cljs.core.truth_(inst_36462__$1)){
var statearr_36497_36554 = state_36488__$1;
(statearr_36497_36554[(1)] = (29));

} else {
var statearr_36498_36555 = state_36488__$1;
(statearr_36498_36555[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (4))){
var inst_36406 = (state_36488[(2)]);
var state_36488__$1 = state_36488;
if(cljs.core.truth_(inst_36406)){
var statearr_36499_36556 = state_36488__$1;
(statearr_36499_36556[(1)] = (8));

} else {
var statearr_36500_36557 = state_36488__$1;
(statearr_36500_36557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (15))){
var inst_36433 = (state_36488[(2)]);
var state_36488__$1 = state_36488;
if(cljs.core.truth_(inst_36433)){
var statearr_36501_36558 = state_36488__$1;
(statearr_36501_36558[(1)] = (19));

} else {
var statearr_36502_36559 = state_36488__$1;
(statearr_36502_36559[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (21))){
var inst_36438 = (state_36488[(12)]);
var inst_36438__$1 = (state_36488[(2)]);
var inst_36439 = cljs.core.get.call(null,inst_36438__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36440 = cljs.core.get.call(null,inst_36438__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36441 = cljs.core.get.call(null,inst_36438__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36488__$1 = (function (){var statearr_36503 = state_36488;
(statearr_36503[(13)] = inst_36440);

(statearr_36503[(12)] = inst_36438__$1);

(statearr_36503[(10)] = inst_36439);

return statearr_36503;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36488__$1,(22),inst_36441);
} else {
if((state_val_36489 === (31))){
var inst_36470 = (state_36488[(2)]);
var state_36488__$1 = state_36488;
if(cljs.core.truth_(inst_36470)){
var statearr_36504_36560 = state_36488__$1;
(statearr_36504_36560[(1)] = (32));

} else {
var statearr_36505_36561 = state_36488__$1;
(statearr_36505_36561[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (32))){
var inst_36447 = (state_36488[(14)]);
var state_36488__$1 = state_36488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36488__$1,(35),out,inst_36447);
} else {
if((state_val_36489 === (33))){
var inst_36438 = (state_36488[(12)]);
var inst_36415 = inst_36438;
var state_36488__$1 = (function (){var statearr_36506 = state_36488;
(statearr_36506[(7)] = inst_36415);

return statearr_36506;
})();
var statearr_36507_36562 = state_36488__$1;
(statearr_36507_36562[(2)] = null);

(statearr_36507_36562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (13))){
var inst_36415 = (state_36488[(7)]);
var inst_36422 = inst_36415.cljs$lang$protocol_mask$partition0$;
var inst_36423 = (inst_36422 & (64));
var inst_36424 = inst_36415.cljs$core$ISeq$;
var inst_36425 = (cljs.core.PROTOCOL_SENTINEL === inst_36424);
var inst_36426 = (inst_36423) || (inst_36425);
var state_36488__$1 = state_36488;
if(cljs.core.truth_(inst_36426)){
var statearr_36508_36563 = state_36488__$1;
(statearr_36508_36563[(1)] = (16));

} else {
var statearr_36509_36564 = state_36488__$1;
(statearr_36509_36564[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (22))){
var inst_36447 = (state_36488[(14)]);
var inst_36448 = (state_36488[(9)]);
var inst_36446 = (state_36488[(2)]);
var inst_36447__$1 = cljs.core.nth.call(null,inst_36446,(0),null);
var inst_36448__$1 = cljs.core.nth.call(null,inst_36446,(1),null);
var inst_36449 = (inst_36447__$1 == null);
var inst_36450 = cljs.core._EQ_.call(null,inst_36448__$1,change);
var inst_36451 = (inst_36449) || (inst_36450);
var state_36488__$1 = (function (){var statearr_36510 = state_36488;
(statearr_36510[(14)] = inst_36447__$1);

(statearr_36510[(9)] = inst_36448__$1);

return statearr_36510;
})();
if(cljs.core.truth_(inst_36451)){
var statearr_36511_36565 = state_36488__$1;
(statearr_36511_36565[(1)] = (23));

} else {
var statearr_36512_36566 = state_36488__$1;
(statearr_36512_36566[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (36))){
var inst_36438 = (state_36488[(12)]);
var inst_36415 = inst_36438;
var state_36488__$1 = (function (){var statearr_36513 = state_36488;
(statearr_36513[(7)] = inst_36415);

return statearr_36513;
})();
var statearr_36514_36567 = state_36488__$1;
(statearr_36514_36567[(2)] = null);

(statearr_36514_36567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (29))){
var inst_36462 = (state_36488[(11)]);
var state_36488__$1 = state_36488;
var statearr_36515_36568 = state_36488__$1;
(statearr_36515_36568[(2)] = inst_36462);

(statearr_36515_36568[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (6))){
var state_36488__$1 = state_36488;
var statearr_36516_36569 = state_36488__$1;
(statearr_36516_36569[(2)] = false);

(statearr_36516_36569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (28))){
var inst_36458 = (state_36488[(2)]);
var inst_36459 = calc_state.call(null);
var inst_36415 = inst_36459;
var state_36488__$1 = (function (){var statearr_36517 = state_36488;
(statearr_36517[(7)] = inst_36415);

(statearr_36517[(15)] = inst_36458);

return statearr_36517;
})();
var statearr_36518_36570 = state_36488__$1;
(statearr_36518_36570[(2)] = null);

(statearr_36518_36570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (25))){
var inst_36484 = (state_36488[(2)]);
var state_36488__$1 = state_36488;
var statearr_36519_36571 = state_36488__$1;
(statearr_36519_36571[(2)] = inst_36484);

(statearr_36519_36571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (34))){
var inst_36482 = (state_36488[(2)]);
var state_36488__$1 = state_36488;
var statearr_36520_36572 = state_36488__$1;
(statearr_36520_36572[(2)] = inst_36482);

(statearr_36520_36572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (17))){
var state_36488__$1 = state_36488;
var statearr_36521_36573 = state_36488__$1;
(statearr_36521_36573[(2)] = false);

(statearr_36521_36573[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (3))){
var state_36488__$1 = state_36488;
var statearr_36522_36574 = state_36488__$1;
(statearr_36522_36574[(2)] = false);

(statearr_36522_36574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (12))){
var inst_36486 = (state_36488[(2)]);
var state_36488__$1 = state_36488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36488__$1,inst_36486);
} else {
if((state_val_36489 === (2))){
var inst_36390 = (state_36488[(8)]);
var inst_36395 = inst_36390.cljs$lang$protocol_mask$partition0$;
var inst_36396 = (inst_36395 & (64));
var inst_36397 = inst_36390.cljs$core$ISeq$;
var inst_36398 = (cljs.core.PROTOCOL_SENTINEL === inst_36397);
var inst_36399 = (inst_36396) || (inst_36398);
var state_36488__$1 = state_36488;
if(cljs.core.truth_(inst_36399)){
var statearr_36523_36575 = state_36488__$1;
(statearr_36523_36575[(1)] = (5));

} else {
var statearr_36524_36576 = state_36488__$1;
(statearr_36524_36576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (23))){
var inst_36447 = (state_36488[(14)]);
var inst_36453 = (inst_36447 == null);
var state_36488__$1 = state_36488;
if(cljs.core.truth_(inst_36453)){
var statearr_36525_36577 = state_36488__$1;
(statearr_36525_36577[(1)] = (26));

} else {
var statearr_36526_36578 = state_36488__$1;
(statearr_36526_36578[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (35))){
var inst_36473 = (state_36488[(2)]);
var state_36488__$1 = state_36488;
if(cljs.core.truth_(inst_36473)){
var statearr_36527_36579 = state_36488__$1;
(statearr_36527_36579[(1)] = (36));

} else {
var statearr_36528_36580 = state_36488__$1;
(statearr_36528_36580[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (19))){
var inst_36415 = (state_36488[(7)]);
var inst_36435 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36415);
var state_36488__$1 = state_36488;
var statearr_36529_36581 = state_36488__$1;
(statearr_36529_36581[(2)] = inst_36435);

(statearr_36529_36581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (11))){
var inst_36415 = (state_36488[(7)]);
var inst_36419 = (inst_36415 == null);
var inst_36420 = cljs.core.not.call(null,inst_36419);
var state_36488__$1 = state_36488;
if(inst_36420){
var statearr_36530_36582 = state_36488__$1;
(statearr_36530_36582[(1)] = (13));

} else {
var statearr_36531_36583 = state_36488__$1;
(statearr_36531_36583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (9))){
var inst_36390 = (state_36488[(8)]);
var state_36488__$1 = state_36488;
var statearr_36532_36584 = state_36488__$1;
(statearr_36532_36584[(2)] = inst_36390);

(statearr_36532_36584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (5))){
var state_36488__$1 = state_36488;
var statearr_36533_36585 = state_36488__$1;
(statearr_36533_36585[(2)] = true);

(statearr_36533_36585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (14))){
var state_36488__$1 = state_36488;
var statearr_36534_36586 = state_36488__$1;
(statearr_36534_36586[(2)] = false);

(statearr_36534_36586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (26))){
var inst_36448 = (state_36488[(9)]);
var inst_36455 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36448);
var state_36488__$1 = state_36488;
var statearr_36535_36587 = state_36488__$1;
(statearr_36535_36587[(2)] = inst_36455);

(statearr_36535_36587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (16))){
var state_36488__$1 = state_36488;
var statearr_36536_36588 = state_36488__$1;
(statearr_36536_36588[(2)] = true);

(statearr_36536_36588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (38))){
var inst_36478 = (state_36488[(2)]);
var state_36488__$1 = state_36488;
var statearr_36537_36589 = state_36488__$1;
(statearr_36537_36589[(2)] = inst_36478);

(statearr_36537_36589[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (30))){
var inst_36440 = (state_36488[(13)]);
var inst_36448 = (state_36488[(9)]);
var inst_36439 = (state_36488[(10)]);
var inst_36465 = cljs.core.empty_QMARK_.call(null,inst_36439);
var inst_36466 = inst_36440.call(null,inst_36448);
var inst_36467 = cljs.core.not.call(null,inst_36466);
var inst_36468 = (inst_36465) && (inst_36467);
var state_36488__$1 = state_36488;
var statearr_36538_36590 = state_36488__$1;
(statearr_36538_36590[(2)] = inst_36468);

(statearr_36538_36590[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (10))){
var inst_36390 = (state_36488[(8)]);
var inst_36411 = (state_36488[(2)]);
var inst_36412 = cljs.core.get.call(null,inst_36411,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36413 = cljs.core.get.call(null,inst_36411,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36414 = cljs.core.get.call(null,inst_36411,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36415 = inst_36390;
var state_36488__$1 = (function (){var statearr_36539 = state_36488;
(statearr_36539[(16)] = inst_36413);

(statearr_36539[(17)] = inst_36412);

(statearr_36539[(7)] = inst_36415);

(statearr_36539[(18)] = inst_36414);

return statearr_36539;
})();
var statearr_36540_36591 = state_36488__$1;
(statearr_36540_36591[(2)] = null);

(statearr_36540_36591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (18))){
var inst_36430 = (state_36488[(2)]);
var state_36488__$1 = state_36488;
var statearr_36541_36592 = state_36488__$1;
(statearr_36541_36592[(2)] = inst_36430);

(statearr_36541_36592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (37))){
var state_36488__$1 = state_36488;
var statearr_36542_36593 = state_36488__$1;
(statearr_36542_36593[(2)] = null);

(statearr_36542_36593[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36489 === (8))){
var inst_36390 = (state_36488[(8)]);
var inst_36408 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36390);
var state_36488__$1 = state_36488;
var statearr_36543_36594 = state_36488__$1;
(statearr_36543_36594[(2)] = inst_36408);

(statearr_36543_36594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto___36548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35399__auto__,c__35489__auto___36548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35400__auto__ = null;
var cljs$core$async$mix_$_state_machine__35400__auto____0 = (function (){
var statearr_36544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36544[(0)] = cljs$core$async$mix_$_state_machine__35400__auto__);

(statearr_36544[(1)] = (1));

return statearr_36544;
});
var cljs$core$async$mix_$_state_machine__35400__auto____1 = (function (state_36488){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_36488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e36545){if((e36545 instanceof Object)){
var ex__35403__auto__ = e36545;
var statearr_36546_36595 = state_36488;
(statearr_36546_36595[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36596 = state_36488;
state_36488 = G__36596;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35400__auto__ = function(state_36488){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35400__auto____1.call(this,state_36488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35400__auto____0;
cljs$core$async$mix_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35400__auto____1;
return cljs$core$async$mix_$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___36548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35491__auto__ = (function (){var statearr_36547 = f__35490__auto__.call(null);
(statearr_36547[(6)] = c__35489__auto___36548);

return statearr_36547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___36548,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30817__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p,v,ch);
} else {
var m__30817__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36598 = arguments.length;
switch (G__36598) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p);
} else {
var m__30817__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30816__auto__ = (((p == null))?null:p);
var m__30817__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30816__auto__)]);
if(!((m__30817__auto__ == null))){
return m__30817__auto__.call(null,p,v);
} else {
var m__30817__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30817__auto____$1 == null))){
return m__30817__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__36602 = arguments.length;
switch (G__36602) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30083__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30083__auto__,mults){
return (function (p1__36600_SHARP_){
if(cljs.core.truth_(p1__36600_SHARP_.call(null,topic))){
return p1__36600_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36600_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30083__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36603 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36604){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36604 = meta36604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36605,meta36604__$1){
var self__ = this;
var _36605__$1 = this;
return (new cljs.core.async.t_cljs$core$async36603(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36604__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36605){
var self__ = this;
var _36605__$1 = this;
return self__.meta36604;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36603.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36603.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36603.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36603.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36603.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36603.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36603.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36603.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36604","meta36604",-343515964,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36603";

cljs.core.async.t_cljs$core$async36603.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36603");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36603 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36603(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36604){
return (new cljs.core.async.t_cljs$core$async36603(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36604));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36603(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35489__auto___36723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___36723,mults,ensure_mult,p){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___36723,mults,ensure_mult,p){
return (function (state_36677){
var state_val_36678 = (state_36677[(1)]);
if((state_val_36678 === (7))){
var inst_36673 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36679_36724 = state_36677__$1;
(statearr_36679_36724[(2)] = inst_36673);

(statearr_36679_36724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (20))){
var state_36677__$1 = state_36677;
var statearr_36680_36725 = state_36677__$1;
(statearr_36680_36725[(2)] = null);

(statearr_36680_36725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (1))){
var state_36677__$1 = state_36677;
var statearr_36681_36726 = state_36677__$1;
(statearr_36681_36726[(2)] = null);

(statearr_36681_36726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (24))){
var inst_36656 = (state_36677[(7)]);
var inst_36665 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36656);
var state_36677__$1 = state_36677;
var statearr_36682_36727 = state_36677__$1;
(statearr_36682_36727[(2)] = inst_36665);

(statearr_36682_36727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (4))){
var inst_36608 = (state_36677[(8)]);
var inst_36608__$1 = (state_36677[(2)]);
var inst_36609 = (inst_36608__$1 == null);
var state_36677__$1 = (function (){var statearr_36683 = state_36677;
(statearr_36683[(8)] = inst_36608__$1);

return statearr_36683;
})();
if(cljs.core.truth_(inst_36609)){
var statearr_36684_36728 = state_36677__$1;
(statearr_36684_36728[(1)] = (5));

} else {
var statearr_36685_36729 = state_36677__$1;
(statearr_36685_36729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (15))){
var inst_36650 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36686_36730 = state_36677__$1;
(statearr_36686_36730[(2)] = inst_36650);

(statearr_36686_36730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (21))){
var inst_36670 = (state_36677[(2)]);
var state_36677__$1 = (function (){var statearr_36687 = state_36677;
(statearr_36687[(9)] = inst_36670);

return statearr_36687;
})();
var statearr_36688_36731 = state_36677__$1;
(statearr_36688_36731[(2)] = null);

(statearr_36688_36731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (13))){
var inst_36632 = (state_36677[(10)]);
var inst_36634 = cljs.core.chunked_seq_QMARK_.call(null,inst_36632);
var state_36677__$1 = state_36677;
if(inst_36634){
var statearr_36689_36732 = state_36677__$1;
(statearr_36689_36732[(1)] = (16));

} else {
var statearr_36690_36733 = state_36677__$1;
(statearr_36690_36733[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (22))){
var inst_36662 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
if(cljs.core.truth_(inst_36662)){
var statearr_36691_36734 = state_36677__$1;
(statearr_36691_36734[(1)] = (23));

} else {
var statearr_36692_36735 = state_36677__$1;
(statearr_36692_36735[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (6))){
var inst_36656 = (state_36677[(7)]);
var inst_36608 = (state_36677[(8)]);
var inst_36658 = (state_36677[(11)]);
var inst_36656__$1 = topic_fn.call(null,inst_36608);
var inst_36657 = cljs.core.deref.call(null,mults);
var inst_36658__$1 = cljs.core.get.call(null,inst_36657,inst_36656__$1);
var state_36677__$1 = (function (){var statearr_36693 = state_36677;
(statearr_36693[(7)] = inst_36656__$1);

(statearr_36693[(11)] = inst_36658__$1);

return statearr_36693;
})();
if(cljs.core.truth_(inst_36658__$1)){
var statearr_36694_36736 = state_36677__$1;
(statearr_36694_36736[(1)] = (19));

} else {
var statearr_36695_36737 = state_36677__$1;
(statearr_36695_36737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (25))){
var inst_36667 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36696_36738 = state_36677__$1;
(statearr_36696_36738[(2)] = inst_36667);

(statearr_36696_36738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (17))){
var inst_36632 = (state_36677[(10)]);
var inst_36641 = cljs.core.first.call(null,inst_36632);
var inst_36642 = cljs.core.async.muxch_STAR_.call(null,inst_36641);
var inst_36643 = cljs.core.async.close_BANG_.call(null,inst_36642);
var inst_36644 = cljs.core.next.call(null,inst_36632);
var inst_36618 = inst_36644;
var inst_36619 = null;
var inst_36620 = (0);
var inst_36621 = (0);
var state_36677__$1 = (function (){var statearr_36697 = state_36677;
(statearr_36697[(12)] = inst_36643);

(statearr_36697[(13)] = inst_36619);

(statearr_36697[(14)] = inst_36621);

(statearr_36697[(15)] = inst_36620);

(statearr_36697[(16)] = inst_36618);

return statearr_36697;
})();
var statearr_36698_36739 = state_36677__$1;
(statearr_36698_36739[(2)] = null);

(statearr_36698_36739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (3))){
var inst_36675 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36677__$1,inst_36675);
} else {
if((state_val_36678 === (12))){
var inst_36652 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36699_36740 = state_36677__$1;
(statearr_36699_36740[(2)] = inst_36652);

(statearr_36699_36740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (2))){
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36677__$1,(4),ch);
} else {
if((state_val_36678 === (23))){
var state_36677__$1 = state_36677;
var statearr_36700_36741 = state_36677__$1;
(statearr_36700_36741[(2)] = null);

(statearr_36700_36741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (19))){
var inst_36608 = (state_36677[(8)]);
var inst_36658 = (state_36677[(11)]);
var inst_36660 = cljs.core.async.muxch_STAR_.call(null,inst_36658);
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36677__$1,(22),inst_36660,inst_36608);
} else {
if((state_val_36678 === (11))){
var inst_36632 = (state_36677[(10)]);
var inst_36618 = (state_36677[(16)]);
var inst_36632__$1 = cljs.core.seq.call(null,inst_36618);
var state_36677__$1 = (function (){var statearr_36701 = state_36677;
(statearr_36701[(10)] = inst_36632__$1);

return statearr_36701;
})();
if(inst_36632__$1){
var statearr_36702_36742 = state_36677__$1;
(statearr_36702_36742[(1)] = (13));

} else {
var statearr_36703_36743 = state_36677__$1;
(statearr_36703_36743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (9))){
var inst_36654 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36704_36744 = state_36677__$1;
(statearr_36704_36744[(2)] = inst_36654);

(statearr_36704_36744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (5))){
var inst_36615 = cljs.core.deref.call(null,mults);
var inst_36616 = cljs.core.vals.call(null,inst_36615);
var inst_36617 = cljs.core.seq.call(null,inst_36616);
var inst_36618 = inst_36617;
var inst_36619 = null;
var inst_36620 = (0);
var inst_36621 = (0);
var state_36677__$1 = (function (){var statearr_36705 = state_36677;
(statearr_36705[(13)] = inst_36619);

(statearr_36705[(14)] = inst_36621);

(statearr_36705[(15)] = inst_36620);

(statearr_36705[(16)] = inst_36618);

return statearr_36705;
})();
var statearr_36706_36745 = state_36677__$1;
(statearr_36706_36745[(2)] = null);

(statearr_36706_36745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (14))){
var state_36677__$1 = state_36677;
var statearr_36710_36746 = state_36677__$1;
(statearr_36710_36746[(2)] = null);

(statearr_36710_36746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (16))){
var inst_36632 = (state_36677[(10)]);
var inst_36636 = cljs.core.chunk_first.call(null,inst_36632);
var inst_36637 = cljs.core.chunk_rest.call(null,inst_36632);
var inst_36638 = cljs.core.count.call(null,inst_36636);
var inst_36618 = inst_36637;
var inst_36619 = inst_36636;
var inst_36620 = inst_36638;
var inst_36621 = (0);
var state_36677__$1 = (function (){var statearr_36711 = state_36677;
(statearr_36711[(13)] = inst_36619);

(statearr_36711[(14)] = inst_36621);

(statearr_36711[(15)] = inst_36620);

(statearr_36711[(16)] = inst_36618);

return statearr_36711;
})();
var statearr_36712_36747 = state_36677__$1;
(statearr_36712_36747[(2)] = null);

(statearr_36712_36747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (10))){
var inst_36619 = (state_36677[(13)]);
var inst_36621 = (state_36677[(14)]);
var inst_36620 = (state_36677[(15)]);
var inst_36618 = (state_36677[(16)]);
var inst_36626 = cljs.core._nth.call(null,inst_36619,inst_36621);
var inst_36627 = cljs.core.async.muxch_STAR_.call(null,inst_36626);
var inst_36628 = cljs.core.async.close_BANG_.call(null,inst_36627);
var inst_36629 = (inst_36621 + (1));
var tmp36707 = inst_36619;
var tmp36708 = inst_36620;
var tmp36709 = inst_36618;
var inst_36618__$1 = tmp36709;
var inst_36619__$1 = tmp36707;
var inst_36620__$1 = tmp36708;
var inst_36621__$1 = inst_36629;
var state_36677__$1 = (function (){var statearr_36713 = state_36677;
(statearr_36713[(17)] = inst_36628);

(statearr_36713[(13)] = inst_36619__$1);

(statearr_36713[(14)] = inst_36621__$1);

(statearr_36713[(15)] = inst_36620__$1);

(statearr_36713[(16)] = inst_36618__$1);

return statearr_36713;
})();
var statearr_36714_36748 = state_36677__$1;
(statearr_36714_36748[(2)] = null);

(statearr_36714_36748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (18))){
var inst_36647 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36715_36749 = state_36677__$1;
(statearr_36715_36749[(2)] = inst_36647);

(statearr_36715_36749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (8))){
var inst_36621 = (state_36677[(14)]);
var inst_36620 = (state_36677[(15)]);
var inst_36623 = (inst_36621 < inst_36620);
var inst_36624 = inst_36623;
var state_36677__$1 = state_36677;
if(cljs.core.truth_(inst_36624)){
var statearr_36716_36750 = state_36677__$1;
(statearr_36716_36750[(1)] = (10));

} else {
var statearr_36717_36751 = state_36677__$1;
(statearr_36717_36751[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto___36723,mults,ensure_mult,p))
;
return ((function (switch__35399__auto__,c__35489__auto___36723,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35400__auto__ = null;
var cljs$core$async$state_machine__35400__auto____0 = (function (){
var statearr_36718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36718[(0)] = cljs$core$async$state_machine__35400__auto__);

(statearr_36718[(1)] = (1));

return statearr_36718;
});
var cljs$core$async$state_machine__35400__auto____1 = (function (state_36677){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_36677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e36719){if((e36719 instanceof Object)){
var ex__35403__auto__ = e36719;
var statearr_36720_36752 = state_36677;
(statearr_36720_36752[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36753 = state_36677;
state_36677 = G__36753;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$state_machine__35400__auto__ = function(state_36677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35400__auto____1.call(this,state_36677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35400__auto____0;
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35400__auto____1;
return cljs$core$async$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___36723,mults,ensure_mult,p))
})();
var state__35491__auto__ = (function (){var statearr_36721 = f__35490__auto__.call(null);
(statearr_36721[(6)] = c__35489__auto___36723);

return statearr_36721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___36723,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36755 = arguments.length;
switch (G__36755) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36758 = arguments.length;
switch (G__36758) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__36761 = arguments.length;
switch (G__36761) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__35489__auto___36828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___36828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___36828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36800){
var state_val_36801 = (state_36800[(1)]);
if((state_val_36801 === (7))){
var state_36800__$1 = state_36800;
var statearr_36802_36829 = state_36800__$1;
(statearr_36802_36829[(2)] = null);

(statearr_36802_36829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (1))){
var state_36800__$1 = state_36800;
var statearr_36803_36830 = state_36800__$1;
(statearr_36803_36830[(2)] = null);

(statearr_36803_36830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (4))){
var inst_36764 = (state_36800[(7)]);
var inst_36766 = (inst_36764 < cnt);
var state_36800__$1 = state_36800;
if(cljs.core.truth_(inst_36766)){
var statearr_36804_36831 = state_36800__$1;
(statearr_36804_36831[(1)] = (6));

} else {
var statearr_36805_36832 = state_36800__$1;
(statearr_36805_36832[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (15))){
var inst_36796 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36806_36833 = state_36800__$1;
(statearr_36806_36833[(2)] = inst_36796);

(statearr_36806_36833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (13))){
var inst_36789 = cljs.core.async.close_BANG_.call(null,out);
var state_36800__$1 = state_36800;
var statearr_36807_36834 = state_36800__$1;
(statearr_36807_36834[(2)] = inst_36789);

(statearr_36807_36834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (6))){
var state_36800__$1 = state_36800;
var statearr_36808_36835 = state_36800__$1;
(statearr_36808_36835[(2)] = null);

(statearr_36808_36835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (3))){
var inst_36798 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36800__$1,inst_36798);
} else {
if((state_val_36801 === (12))){
var inst_36786 = (state_36800[(8)]);
var inst_36786__$1 = (state_36800[(2)]);
var inst_36787 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36786__$1);
var state_36800__$1 = (function (){var statearr_36809 = state_36800;
(statearr_36809[(8)] = inst_36786__$1);

return statearr_36809;
})();
if(cljs.core.truth_(inst_36787)){
var statearr_36810_36836 = state_36800__$1;
(statearr_36810_36836[(1)] = (13));

} else {
var statearr_36811_36837 = state_36800__$1;
(statearr_36811_36837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (2))){
var inst_36763 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36764 = (0);
var state_36800__$1 = (function (){var statearr_36812 = state_36800;
(statearr_36812[(7)] = inst_36764);

(statearr_36812[(9)] = inst_36763);

return statearr_36812;
})();
var statearr_36813_36838 = state_36800__$1;
(statearr_36813_36838[(2)] = null);

(statearr_36813_36838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (11))){
var inst_36764 = (state_36800[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36800,(10),Object,null,(9));
var inst_36773 = chs__$1.call(null,inst_36764);
var inst_36774 = done.call(null,inst_36764);
var inst_36775 = cljs.core.async.take_BANG_.call(null,inst_36773,inst_36774);
var state_36800__$1 = state_36800;
var statearr_36814_36839 = state_36800__$1;
(statearr_36814_36839[(2)] = inst_36775);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36800__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (9))){
var inst_36764 = (state_36800[(7)]);
var inst_36777 = (state_36800[(2)]);
var inst_36778 = (inst_36764 + (1));
var inst_36764__$1 = inst_36778;
var state_36800__$1 = (function (){var statearr_36815 = state_36800;
(statearr_36815[(7)] = inst_36764__$1);

(statearr_36815[(10)] = inst_36777);

return statearr_36815;
})();
var statearr_36816_36840 = state_36800__$1;
(statearr_36816_36840[(2)] = null);

(statearr_36816_36840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (5))){
var inst_36784 = (state_36800[(2)]);
var state_36800__$1 = (function (){var statearr_36817 = state_36800;
(statearr_36817[(11)] = inst_36784);

return statearr_36817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36800__$1,(12),dchan);
} else {
if((state_val_36801 === (14))){
var inst_36786 = (state_36800[(8)]);
var inst_36791 = cljs.core.apply.call(null,f,inst_36786);
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36800__$1,(16),out,inst_36791);
} else {
if((state_val_36801 === (16))){
var inst_36793 = (state_36800[(2)]);
var state_36800__$1 = (function (){var statearr_36818 = state_36800;
(statearr_36818[(12)] = inst_36793);

return statearr_36818;
})();
var statearr_36819_36841 = state_36800__$1;
(statearr_36819_36841[(2)] = null);

(statearr_36819_36841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (10))){
var inst_36768 = (state_36800[(2)]);
var inst_36769 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36800__$1 = (function (){var statearr_36820 = state_36800;
(statearr_36820[(13)] = inst_36768);

return statearr_36820;
})();
var statearr_36821_36842 = state_36800__$1;
(statearr_36821_36842[(2)] = inst_36769);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36800__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (8))){
var inst_36782 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36822_36843 = state_36800__$1;
(statearr_36822_36843[(2)] = inst_36782);

(statearr_36822_36843[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto___36828,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35399__auto__,c__35489__auto___36828,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35400__auto__ = null;
var cljs$core$async$state_machine__35400__auto____0 = (function (){
var statearr_36823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36823[(0)] = cljs$core$async$state_machine__35400__auto__);

(statearr_36823[(1)] = (1));

return statearr_36823;
});
var cljs$core$async$state_machine__35400__auto____1 = (function (state_36800){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_36800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e36824){if((e36824 instanceof Object)){
var ex__35403__auto__ = e36824;
var statearr_36825_36844 = state_36800;
(statearr_36825_36844[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36845 = state_36800;
state_36800 = G__36845;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$state_machine__35400__auto__ = function(state_36800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35400__auto____1.call(this,state_36800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35400__auto____0;
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35400__auto____1;
return cljs$core$async$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___36828,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35491__auto__ = (function (){var statearr_36826 = f__35490__auto__.call(null);
(statearr_36826[(6)] = c__35489__auto___36828);

return statearr_36826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___36828,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36848 = arguments.length;
switch (G__36848) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35489__auto___36902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___36902,out){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___36902,out){
return (function (state_36880){
var state_val_36881 = (state_36880[(1)]);
if((state_val_36881 === (7))){
var inst_36859 = (state_36880[(7)]);
var inst_36860 = (state_36880[(8)]);
var inst_36859__$1 = (state_36880[(2)]);
var inst_36860__$1 = cljs.core.nth.call(null,inst_36859__$1,(0),null);
var inst_36861 = cljs.core.nth.call(null,inst_36859__$1,(1),null);
var inst_36862 = (inst_36860__$1 == null);
var state_36880__$1 = (function (){var statearr_36882 = state_36880;
(statearr_36882[(9)] = inst_36861);

(statearr_36882[(7)] = inst_36859__$1);

(statearr_36882[(8)] = inst_36860__$1);

return statearr_36882;
})();
if(cljs.core.truth_(inst_36862)){
var statearr_36883_36903 = state_36880__$1;
(statearr_36883_36903[(1)] = (8));

} else {
var statearr_36884_36904 = state_36880__$1;
(statearr_36884_36904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (1))){
var inst_36849 = cljs.core.vec.call(null,chs);
var inst_36850 = inst_36849;
var state_36880__$1 = (function (){var statearr_36885 = state_36880;
(statearr_36885[(10)] = inst_36850);

return statearr_36885;
})();
var statearr_36886_36905 = state_36880__$1;
(statearr_36886_36905[(2)] = null);

(statearr_36886_36905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (4))){
var inst_36850 = (state_36880[(10)]);
var state_36880__$1 = state_36880;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36880__$1,(7),inst_36850);
} else {
if((state_val_36881 === (6))){
var inst_36876 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36887_36906 = state_36880__$1;
(statearr_36887_36906[(2)] = inst_36876);

(statearr_36887_36906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (3))){
var inst_36878 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36880__$1,inst_36878);
} else {
if((state_val_36881 === (2))){
var inst_36850 = (state_36880[(10)]);
var inst_36852 = cljs.core.count.call(null,inst_36850);
var inst_36853 = (inst_36852 > (0));
var state_36880__$1 = state_36880;
if(cljs.core.truth_(inst_36853)){
var statearr_36889_36907 = state_36880__$1;
(statearr_36889_36907[(1)] = (4));

} else {
var statearr_36890_36908 = state_36880__$1;
(statearr_36890_36908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (11))){
var inst_36850 = (state_36880[(10)]);
var inst_36869 = (state_36880[(2)]);
var tmp36888 = inst_36850;
var inst_36850__$1 = tmp36888;
var state_36880__$1 = (function (){var statearr_36891 = state_36880;
(statearr_36891[(11)] = inst_36869);

(statearr_36891[(10)] = inst_36850__$1);

return statearr_36891;
})();
var statearr_36892_36909 = state_36880__$1;
(statearr_36892_36909[(2)] = null);

(statearr_36892_36909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (9))){
var inst_36860 = (state_36880[(8)]);
var state_36880__$1 = state_36880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36880__$1,(11),out,inst_36860);
} else {
if((state_val_36881 === (5))){
var inst_36874 = cljs.core.async.close_BANG_.call(null,out);
var state_36880__$1 = state_36880;
var statearr_36893_36910 = state_36880__$1;
(statearr_36893_36910[(2)] = inst_36874);

(statearr_36893_36910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (10))){
var inst_36872 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36894_36911 = state_36880__$1;
(statearr_36894_36911[(2)] = inst_36872);

(statearr_36894_36911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (8))){
var inst_36861 = (state_36880[(9)]);
var inst_36850 = (state_36880[(10)]);
var inst_36859 = (state_36880[(7)]);
var inst_36860 = (state_36880[(8)]);
var inst_36864 = (function (){var cs = inst_36850;
var vec__36855 = inst_36859;
var v = inst_36860;
var c = inst_36861;
return ((function (cs,vec__36855,v,c,inst_36861,inst_36850,inst_36859,inst_36860,state_val_36881,c__35489__auto___36902,out){
return (function (p1__36846_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36846_SHARP_);
});
;})(cs,vec__36855,v,c,inst_36861,inst_36850,inst_36859,inst_36860,state_val_36881,c__35489__auto___36902,out))
})();
var inst_36865 = cljs.core.filterv.call(null,inst_36864,inst_36850);
var inst_36850__$1 = inst_36865;
var state_36880__$1 = (function (){var statearr_36895 = state_36880;
(statearr_36895[(10)] = inst_36850__$1);

return statearr_36895;
})();
var statearr_36896_36912 = state_36880__$1;
(statearr_36896_36912[(2)] = null);

(statearr_36896_36912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto___36902,out))
;
return ((function (switch__35399__auto__,c__35489__auto___36902,out){
return (function() {
var cljs$core$async$state_machine__35400__auto__ = null;
var cljs$core$async$state_machine__35400__auto____0 = (function (){
var statearr_36897 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36897[(0)] = cljs$core$async$state_machine__35400__auto__);

(statearr_36897[(1)] = (1));

return statearr_36897;
});
var cljs$core$async$state_machine__35400__auto____1 = (function (state_36880){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_36880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e36898){if((e36898 instanceof Object)){
var ex__35403__auto__ = e36898;
var statearr_36899_36913 = state_36880;
(statearr_36899_36913[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36914 = state_36880;
state_36880 = G__36914;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$state_machine__35400__auto__ = function(state_36880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35400__auto____1.call(this,state_36880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35400__auto____0;
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35400__auto____1;
return cljs$core$async$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___36902,out))
})();
var state__35491__auto__ = (function (){var statearr_36900 = f__35490__auto__.call(null);
(statearr_36900[(6)] = c__35489__auto___36902);

return statearr_36900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___36902,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36916 = arguments.length;
switch (G__36916) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35489__auto___36961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___36961,out){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___36961,out){
return (function (state_36940){
var state_val_36941 = (state_36940[(1)]);
if((state_val_36941 === (7))){
var inst_36922 = (state_36940[(7)]);
var inst_36922__$1 = (state_36940[(2)]);
var inst_36923 = (inst_36922__$1 == null);
var inst_36924 = cljs.core.not.call(null,inst_36923);
var state_36940__$1 = (function (){var statearr_36942 = state_36940;
(statearr_36942[(7)] = inst_36922__$1);

return statearr_36942;
})();
if(inst_36924){
var statearr_36943_36962 = state_36940__$1;
(statearr_36943_36962[(1)] = (8));

} else {
var statearr_36944_36963 = state_36940__$1;
(statearr_36944_36963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (1))){
var inst_36917 = (0);
var state_36940__$1 = (function (){var statearr_36945 = state_36940;
(statearr_36945[(8)] = inst_36917);

return statearr_36945;
})();
var statearr_36946_36964 = state_36940__$1;
(statearr_36946_36964[(2)] = null);

(statearr_36946_36964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (4))){
var state_36940__$1 = state_36940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36940__$1,(7),ch);
} else {
if((state_val_36941 === (6))){
var inst_36935 = (state_36940[(2)]);
var state_36940__$1 = state_36940;
var statearr_36947_36965 = state_36940__$1;
(statearr_36947_36965[(2)] = inst_36935);

(statearr_36947_36965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (3))){
var inst_36937 = (state_36940[(2)]);
var inst_36938 = cljs.core.async.close_BANG_.call(null,out);
var state_36940__$1 = (function (){var statearr_36948 = state_36940;
(statearr_36948[(9)] = inst_36937);

return statearr_36948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36940__$1,inst_36938);
} else {
if((state_val_36941 === (2))){
var inst_36917 = (state_36940[(8)]);
var inst_36919 = (inst_36917 < n);
var state_36940__$1 = state_36940;
if(cljs.core.truth_(inst_36919)){
var statearr_36949_36966 = state_36940__$1;
(statearr_36949_36966[(1)] = (4));

} else {
var statearr_36950_36967 = state_36940__$1;
(statearr_36950_36967[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (11))){
var inst_36917 = (state_36940[(8)]);
var inst_36927 = (state_36940[(2)]);
var inst_36928 = (inst_36917 + (1));
var inst_36917__$1 = inst_36928;
var state_36940__$1 = (function (){var statearr_36951 = state_36940;
(statearr_36951[(8)] = inst_36917__$1);

(statearr_36951[(10)] = inst_36927);

return statearr_36951;
})();
var statearr_36952_36968 = state_36940__$1;
(statearr_36952_36968[(2)] = null);

(statearr_36952_36968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (9))){
var state_36940__$1 = state_36940;
var statearr_36953_36969 = state_36940__$1;
(statearr_36953_36969[(2)] = null);

(statearr_36953_36969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (5))){
var state_36940__$1 = state_36940;
var statearr_36954_36970 = state_36940__$1;
(statearr_36954_36970[(2)] = null);

(statearr_36954_36970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (10))){
var inst_36932 = (state_36940[(2)]);
var state_36940__$1 = state_36940;
var statearr_36955_36971 = state_36940__$1;
(statearr_36955_36971[(2)] = inst_36932);

(statearr_36955_36971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36941 === (8))){
var inst_36922 = (state_36940[(7)]);
var state_36940__$1 = state_36940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36940__$1,(11),out,inst_36922);
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
});})(c__35489__auto___36961,out))
;
return ((function (switch__35399__auto__,c__35489__auto___36961,out){
return (function() {
var cljs$core$async$state_machine__35400__auto__ = null;
var cljs$core$async$state_machine__35400__auto____0 = (function (){
var statearr_36956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36956[(0)] = cljs$core$async$state_machine__35400__auto__);

(statearr_36956[(1)] = (1));

return statearr_36956;
});
var cljs$core$async$state_machine__35400__auto____1 = (function (state_36940){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_36940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e36957){if((e36957 instanceof Object)){
var ex__35403__auto__ = e36957;
var statearr_36958_36972 = state_36940;
(statearr_36958_36972[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36973 = state_36940;
state_36940 = G__36973;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$state_machine__35400__auto__ = function(state_36940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35400__auto____1.call(this,state_36940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35400__auto____0;
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35400__auto____1;
return cljs$core$async$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___36961,out))
})();
var state__35491__auto__ = (function (){var statearr_36959 = f__35490__auto__.call(null);
(statearr_36959[(6)] = c__35489__auto___36961);

return statearr_36959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___36961,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36975 = (function (f,ch,meta36976){
this.f = f;
this.ch = ch;
this.meta36976 = meta36976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36977,meta36976__$1){
var self__ = this;
var _36977__$1 = this;
return (new cljs.core.async.t_cljs$core$async36975(self__.f,self__.ch,meta36976__$1));
});

cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36977){
var self__ = this;
var _36977__$1 = this;
return self__.meta36976;
});

cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36978 = (function (f,ch,meta36976,_,fn1,meta36979){
this.f = f;
this.ch = ch;
this.meta36976 = meta36976;
this._ = _;
this.fn1 = fn1;
this.meta36979 = meta36979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36980,meta36979__$1){
var self__ = this;
var _36980__$1 = this;
return (new cljs.core.async.t_cljs$core$async36978(self__.f,self__.ch,self__.meta36976,self__._,self__.fn1,meta36979__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36980){
var self__ = this;
var _36980__$1 = this;
return self__.meta36979;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36978.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36974_SHARP_){
return f1.call(null,(((p1__36974_SHARP_ == null))?null:self__.f.call(null,p1__36974_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36978.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36976","meta36976",-642336755,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36975","cljs.core.async/t_cljs$core$async36975",915628403,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36979","meta36979",-1975010508,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36978";

cljs.core.async.t_cljs$core$async36978.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36978");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36978 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36978(f__$1,ch__$1,meta36976__$1,___$2,fn1__$1,meta36979){
return (new cljs.core.async.t_cljs$core$async36978(f__$1,ch__$1,meta36976__$1,___$2,fn1__$1,meta36979));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36978(self__.f,self__.ch,self__.meta36976,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30071__auto__ = ret;
if(cljs.core.truth_(and__30071__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30071__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36976","meta36976",-642336755,null)], null);
});

cljs.core.async.t_cljs$core$async36975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36975";

cljs.core.async.t_cljs$core$async36975.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36975");
});

cljs.core.async.__GT_t_cljs$core$async36975 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36975(f__$1,ch__$1,meta36976){
return (new cljs.core.async.t_cljs$core$async36975(f__$1,ch__$1,meta36976));
});

}

return (new cljs.core.async.t_cljs$core$async36975(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36981 = (function (f,ch,meta36982){
this.f = f;
this.ch = ch;
this.meta36982 = meta36982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36983,meta36982__$1){
var self__ = this;
var _36983__$1 = this;
return (new cljs.core.async.t_cljs$core$async36981(self__.f,self__.ch,meta36982__$1));
});

cljs.core.async.t_cljs$core$async36981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36983){
var self__ = this;
var _36983__$1 = this;
return self__.meta36982;
});

cljs.core.async.t_cljs$core$async36981.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36981.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36981.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36982","meta36982",20242218,null)], null);
});

cljs.core.async.t_cljs$core$async36981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36981";

cljs.core.async.t_cljs$core$async36981.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36981");
});

cljs.core.async.__GT_t_cljs$core$async36981 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36981(f__$1,ch__$1,meta36982){
return (new cljs.core.async.t_cljs$core$async36981(f__$1,ch__$1,meta36982));
});

}

return (new cljs.core.async.t_cljs$core$async36981(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36984 = (function (p,ch,meta36985){
this.p = p;
this.ch = ch;
this.meta36985 = meta36985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36986,meta36985__$1){
var self__ = this;
var _36986__$1 = this;
return (new cljs.core.async.t_cljs$core$async36984(self__.p,self__.ch,meta36985__$1));
});

cljs.core.async.t_cljs$core$async36984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36986){
var self__ = this;
var _36986__$1 = this;
return self__.meta36985;
});

cljs.core.async.t_cljs$core$async36984.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36984.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36984.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36984.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36985","meta36985",1955987639,null)], null);
});

cljs.core.async.t_cljs$core$async36984.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36984";

cljs.core.async.t_cljs$core$async36984.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36984");
});

cljs.core.async.__GT_t_cljs$core$async36984 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36984(p__$1,ch__$1,meta36985){
return (new cljs.core.async.t_cljs$core$async36984(p__$1,ch__$1,meta36985));
});

}

return (new cljs.core.async.t_cljs$core$async36984(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36988 = arguments.length;
switch (G__36988) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35489__auto___37028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___37028,out){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___37028,out){
return (function (state_37009){
var state_val_37010 = (state_37009[(1)]);
if((state_val_37010 === (7))){
var inst_37005 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
var statearr_37011_37029 = state_37009__$1;
(statearr_37011_37029[(2)] = inst_37005);

(statearr_37011_37029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (1))){
var state_37009__$1 = state_37009;
var statearr_37012_37030 = state_37009__$1;
(statearr_37012_37030[(2)] = null);

(statearr_37012_37030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (4))){
var inst_36991 = (state_37009[(7)]);
var inst_36991__$1 = (state_37009[(2)]);
var inst_36992 = (inst_36991__$1 == null);
var state_37009__$1 = (function (){var statearr_37013 = state_37009;
(statearr_37013[(7)] = inst_36991__$1);

return statearr_37013;
})();
if(cljs.core.truth_(inst_36992)){
var statearr_37014_37031 = state_37009__$1;
(statearr_37014_37031[(1)] = (5));

} else {
var statearr_37015_37032 = state_37009__$1;
(statearr_37015_37032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (6))){
var inst_36991 = (state_37009[(7)]);
var inst_36996 = p.call(null,inst_36991);
var state_37009__$1 = state_37009;
if(cljs.core.truth_(inst_36996)){
var statearr_37016_37033 = state_37009__$1;
(statearr_37016_37033[(1)] = (8));

} else {
var statearr_37017_37034 = state_37009__$1;
(statearr_37017_37034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (3))){
var inst_37007 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37009__$1,inst_37007);
} else {
if((state_val_37010 === (2))){
var state_37009__$1 = state_37009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37009__$1,(4),ch);
} else {
if((state_val_37010 === (11))){
var inst_36999 = (state_37009[(2)]);
var state_37009__$1 = state_37009;
var statearr_37018_37035 = state_37009__$1;
(statearr_37018_37035[(2)] = inst_36999);

(statearr_37018_37035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (9))){
var state_37009__$1 = state_37009;
var statearr_37019_37036 = state_37009__$1;
(statearr_37019_37036[(2)] = null);

(statearr_37019_37036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (5))){
var inst_36994 = cljs.core.async.close_BANG_.call(null,out);
var state_37009__$1 = state_37009;
var statearr_37020_37037 = state_37009__$1;
(statearr_37020_37037[(2)] = inst_36994);

(statearr_37020_37037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (10))){
var inst_37002 = (state_37009[(2)]);
var state_37009__$1 = (function (){var statearr_37021 = state_37009;
(statearr_37021[(8)] = inst_37002);

return statearr_37021;
})();
var statearr_37022_37038 = state_37009__$1;
(statearr_37022_37038[(2)] = null);

(statearr_37022_37038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37010 === (8))){
var inst_36991 = (state_37009[(7)]);
var state_37009__$1 = state_37009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37009__$1,(11),out,inst_36991);
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
});})(c__35489__auto___37028,out))
;
return ((function (switch__35399__auto__,c__35489__auto___37028,out){
return (function() {
var cljs$core$async$state_machine__35400__auto__ = null;
var cljs$core$async$state_machine__35400__auto____0 = (function (){
var statearr_37023 = [null,null,null,null,null,null,null,null,null];
(statearr_37023[(0)] = cljs$core$async$state_machine__35400__auto__);

(statearr_37023[(1)] = (1));

return statearr_37023;
});
var cljs$core$async$state_machine__35400__auto____1 = (function (state_37009){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_37009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e37024){if((e37024 instanceof Object)){
var ex__35403__auto__ = e37024;
var statearr_37025_37039 = state_37009;
(statearr_37025_37039[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37040 = state_37009;
state_37009 = G__37040;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$state_machine__35400__auto__ = function(state_37009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35400__auto____1.call(this,state_37009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35400__auto____0;
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35400__auto____1;
return cljs$core$async$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___37028,out))
})();
var state__35491__auto__ = (function (){var statearr_37026 = f__35490__auto__.call(null);
(statearr_37026[(6)] = c__35489__auto___37028);

return statearr_37026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___37028,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37042 = arguments.length;
switch (G__37042) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto__){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto__){
return (function (state_37105){
var state_val_37106 = (state_37105[(1)]);
if((state_val_37106 === (7))){
var inst_37101 = (state_37105[(2)]);
var state_37105__$1 = state_37105;
var statearr_37107_37145 = state_37105__$1;
(statearr_37107_37145[(2)] = inst_37101);

(statearr_37107_37145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (20))){
var inst_37071 = (state_37105[(7)]);
var inst_37082 = (state_37105[(2)]);
var inst_37083 = cljs.core.next.call(null,inst_37071);
var inst_37057 = inst_37083;
var inst_37058 = null;
var inst_37059 = (0);
var inst_37060 = (0);
var state_37105__$1 = (function (){var statearr_37108 = state_37105;
(statearr_37108[(8)] = inst_37059);

(statearr_37108[(9)] = inst_37082);

(statearr_37108[(10)] = inst_37057);

(statearr_37108[(11)] = inst_37060);

(statearr_37108[(12)] = inst_37058);

return statearr_37108;
})();
var statearr_37109_37146 = state_37105__$1;
(statearr_37109_37146[(2)] = null);

(statearr_37109_37146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (1))){
var state_37105__$1 = state_37105;
var statearr_37110_37147 = state_37105__$1;
(statearr_37110_37147[(2)] = null);

(statearr_37110_37147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (4))){
var inst_37046 = (state_37105[(13)]);
var inst_37046__$1 = (state_37105[(2)]);
var inst_37047 = (inst_37046__$1 == null);
var state_37105__$1 = (function (){var statearr_37111 = state_37105;
(statearr_37111[(13)] = inst_37046__$1);

return statearr_37111;
})();
if(cljs.core.truth_(inst_37047)){
var statearr_37112_37148 = state_37105__$1;
(statearr_37112_37148[(1)] = (5));

} else {
var statearr_37113_37149 = state_37105__$1;
(statearr_37113_37149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (15))){
var state_37105__$1 = state_37105;
var statearr_37117_37150 = state_37105__$1;
(statearr_37117_37150[(2)] = null);

(statearr_37117_37150[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (21))){
var state_37105__$1 = state_37105;
var statearr_37118_37151 = state_37105__$1;
(statearr_37118_37151[(2)] = null);

(statearr_37118_37151[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (13))){
var inst_37059 = (state_37105[(8)]);
var inst_37057 = (state_37105[(10)]);
var inst_37060 = (state_37105[(11)]);
var inst_37058 = (state_37105[(12)]);
var inst_37067 = (state_37105[(2)]);
var inst_37068 = (inst_37060 + (1));
var tmp37114 = inst_37059;
var tmp37115 = inst_37057;
var tmp37116 = inst_37058;
var inst_37057__$1 = tmp37115;
var inst_37058__$1 = tmp37116;
var inst_37059__$1 = tmp37114;
var inst_37060__$1 = inst_37068;
var state_37105__$1 = (function (){var statearr_37119 = state_37105;
(statearr_37119[(8)] = inst_37059__$1);

(statearr_37119[(10)] = inst_37057__$1);

(statearr_37119[(11)] = inst_37060__$1);

(statearr_37119[(12)] = inst_37058__$1);

(statearr_37119[(14)] = inst_37067);

return statearr_37119;
})();
var statearr_37120_37152 = state_37105__$1;
(statearr_37120_37152[(2)] = null);

(statearr_37120_37152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (22))){
var state_37105__$1 = state_37105;
var statearr_37121_37153 = state_37105__$1;
(statearr_37121_37153[(2)] = null);

(statearr_37121_37153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (6))){
var inst_37046 = (state_37105[(13)]);
var inst_37055 = f.call(null,inst_37046);
var inst_37056 = cljs.core.seq.call(null,inst_37055);
var inst_37057 = inst_37056;
var inst_37058 = null;
var inst_37059 = (0);
var inst_37060 = (0);
var state_37105__$1 = (function (){var statearr_37122 = state_37105;
(statearr_37122[(8)] = inst_37059);

(statearr_37122[(10)] = inst_37057);

(statearr_37122[(11)] = inst_37060);

(statearr_37122[(12)] = inst_37058);

return statearr_37122;
})();
var statearr_37123_37154 = state_37105__$1;
(statearr_37123_37154[(2)] = null);

(statearr_37123_37154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (17))){
var inst_37071 = (state_37105[(7)]);
var inst_37075 = cljs.core.chunk_first.call(null,inst_37071);
var inst_37076 = cljs.core.chunk_rest.call(null,inst_37071);
var inst_37077 = cljs.core.count.call(null,inst_37075);
var inst_37057 = inst_37076;
var inst_37058 = inst_37075;
var inst_37059 = inst_37077;
var inst_37060 = (0);
var state_37105__$1 = (function (){var statearr_37124 = state_37105;
(statearr_37124[(8)] = inst_37059);

(statearr_37124[(10)] = inst_37057);

(statearr_37124[(11)] = inst_37060);

(statearr_37124[(12)] = inst_37058);

return statearr_37124;
})();
var statearr_37125_37155 = state_37105__$1;
(statearr_37125_37155[(2)] = null);

(statearr_37125_37155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (3))){
var inst_37103 = (state_37105[(2)]);
var state_37105__$1 = state_37105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37105__$1,inst_37103);
} else {
if((state_val_37106 === (12))){
var inst_37091 = (state_37105[(2)]);
var state_37105__$1 = state_37105;
var statearr_37126_37156 = state_37105__$1;
(statearr_37126_37156[(2)] = inst_37091);

(statearr_37126_37156[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (2))){
var state_37105__$1 = state_37105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37105__$1,(4),in$);
} else {
if((state_val_37106 === (23))){
var inst_37099 = (state_37105[(2)]);
var state_37105__$1 = state_37105;
var statearr_37127_37157 = state_37105__$1;
(statearr_37127_37157[(2)] = inst_37099);

(statearr_37127_37157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (19))){
var inst_37086 = (state_37105[(2)]);
var state_37105__$1 = state_37105;
var statearr_37128_37158 = state_37105__$1;
(statearr_37128_37158[(2)] = inst_37086);

(statearr_37128_37158[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (11))){
var inst_37071 = (state_37105[(7)]);
var inst_37057 = (state_37105[(10)]);
var inst_37071__$1 = cljs.core.seq.call(null,inst_37057);
var state_37105__$1 = (function (){var statearr_37129 = state_37105;
(statearr_37129[(7)] = inst_37071__$1);

return statearr_37129;
})();
if(inst_37071__$1){
var statearr_37130_37159 = state_37105__$1;
(statearr_37130_37159[(1)] = (14));

} else {
var statearr_37131_37160 = state_37105__$1;
(statearr_37131_37160[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (9))){
var inst_37093 = (state_37105[(2)]);
var inst_37094 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37105__$1 = (function (){var statearr_37132 = state_37105;
(statearr_37132[(15)] = inst_37093);

return statearr_37132;
})();
if(cljs.core.truth_(inst_37094)){
var statearr_37133_37161 = state_37105__$1;
(statearr_37133_37161[(1)] = (21));

} else {
var statearr_37134_37162 = state_37105__$1;
(statearr_37134_37162[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (5))){
var inst_37049 = cljs.core.async.close_BANG_.call(null,out);
var state_37105__$1 = state_37105;
var statearr_37135_37163 = state_37105__$1;
(statearr_37135_37163[(2)] = inst_37049);

(statearr_37135_37163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (14))){
var inst_37071 = (state_37105[(7)]);
var inst_37073 = cljs.core.chunked_seq_QMARK_.call(null,inst_37071);
var state_37105__$1 = state_37105;
if(inst_37073){
var statearr_37136_37164 = state_37105__$1;
(statearr_37136_37164[(1)] = (17));

} else {
var statearr_37137_37165 = state_37105__$1;
(statearr_37137_37165[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (16))){
var inst_37089 = (state_37105[(2)]);
var state_37105__$1 = state_37105;
var statearr_37138_37166 = state_37105__$1;
(statearr_37138_37166[(2)] = inst_37089);

(statearr_37138_37166[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37106 === (10))){
var inst_37060 = (state_37105[(11)]);
var inst_37058 = (state_37105[(12)]);
var inst_37065 = cljs.core._nth.call(null,inst_37058,inst_37060);
var state_37105__$1 = state_37105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37105__$1,(13),out,inst_37065);
} else {
if((state_val_37106 === (18))){
var inst_37071 = (state_37105[(7)]);
var inst_37080 = cljs.core.first.call(null,inst_37071);
var state_37105__$1 = state_37105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37105__$1,(20),out,inst_37080);
} else {
if((state_val_37106 === (8))){
var inst_37059 = (state_37105[(8)]);
var inst_37060 = (state_37105[(11)]);
var inst_37062 = (inst_37060 < inst_37059);
var inst_37063 = inst_37062;
var state_37105__$1 = state_37105;
if(cljs.core.truth_(inst_37063)){
var statearr_37139_37167 = state_37105__$1;
(statearr_37139_37167[(1)] = (10));

} else {
var statearr_37140_37168 = state_37105__$1;
(statearr_37140_37168[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto__))
;
return ((function (switch__35399__auto__,c__35489__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35400__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35400__auto____0 = (function (){
var statearr_37141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37141[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35400__auto__);

(statearr_37141[(1)] = (1));

return statearr_37141;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35400__auto____1 = (function (state_37105){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_37105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e37142){if((e37142 instanceof Object)){
var ex__35403__auto__ = e37142;
var statearr_37143_37169 = state_37105;
(statearr_37143_37169[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37170 = state_37105;
state_37105 = G__37170;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35400__auto__ = function(state_37105){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35400__auto____1.call(this,state_37105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35400__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35400__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto__))
})();
var state__35491__auto__ = (function (){var statearr_37144 = f__35490__auto__.call(null);
(statearr_37144[(6)] = c__35489__auto__);

return statearr_37144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto__))
);

return c__35489__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37172 = arguments.length;
switch (G__37172) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37175 = arguments.length;
switch (G__37175) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37178 = arguments.length;
switch (G__37178) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35489__auto___37225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___37225,out){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___37225,out){
return (function (state_37202){
var state_val_37203 = (state_37202[(1)]);
if((state_val_37203 === (7))){
var inst_37197 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37204_37226 = state_37202__$1;
(statearr_37204_37226[(2)] = inst_37197);

(statearr_37204_37226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (1))){
var inst_37179 = null;
var state_37202__$1 = (function (){var statearr_37205 = state_37202;
(statearr_37205[(7)] = inst_37179);

return statearr_37205;
})();
var statearr_37206_37227 = state_37202__$1;
(statearr_37206_37227[(2)] = null);

(statearr_37206_37227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (4))){
var inst_37182 = (state_37202[(8)]);
var inst_37182__$1 = (state_37202[(2)]);
var inst_37183 = (inst_37182__$1 == null);
var inst_37184 = cljs.core.not.call(null,inst_37183);
var state_37202__$1 = (function (){var statearr_37207 = state_37202;
(statearr_37207[(8)] = inst_37182__$1);

return statearr_37207;
})();
if(inst_37184){
var statearr_37208_37228 = state_37202__$1;
(statearr_37208_37228[(1)] = (5));

} else {
var statearr_37209_37229 = state_37202__$1;
(statearr_37209_37229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (6))){
var state_37202__$1 = state_37202;
var statearr_37210_37230 = state_37202__$1;
(statearr_37210_37230[(2)] = null);

(statearr_37210_37230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (3))){
var inst_37199 = (state_37202[(2)]);
var inst_37200 = cljs.core.async.close_BANG_.call(null,out);
var state_37202__$1 = (function (){var statearr_37211 = state_37202;
(statearr_37211[(9)] = inst_37199);

return statearr_37211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37202__$1,inst_37200);
} else {
if((state_val_37203 === (2))){
var state_37202__$1 = state_37202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37202__$1,(4),ch);
} else {
if((state_val_37203 === (11))){
var inst_37182 = (state_37202[(8)]);
var inst_37191 = (state_37202[(2)]);
var inst_37179 = inst_37182;
var state_37202__$1 = (function (){var statearr_37212 = state_37202;
(statearr_37212[(7)] = inst_37179);

(statearr_37212[(10)] = inst_37191);

return statearr_37212;
})();
var statearr_37213_37231 = state_37202__$1;
(statearr_37213_37231[(2)] = null);

(statearr_37213_37231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (9))){
var inst_37182 = (state_37202[(8)]);
var state_37202__$1 = state_37202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37202__$1,(11),out,inst_37182);
} else {
if((state_val_37203 === (5))){
var inst_37179 = (state_37202[(7)]);
var inst_37182 = (state_37202[(8)]);
var inst_37186 = cljs.core._EQ_.call(null,inst_37182,inst_37179);
var state_37202__$1 = state_37202;
if(inst_37186){
var statearr_37215_37232 = state_37202__$1;
(statearr_37215_37232[(1)] = (8));

} else {
var statearr_37216_37233 = state_37202__$1;
(statearr_37216_37233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (10))){
var inst_37194 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37217_37234 = state_37202__$1;
(statearr_37217_37234[(2)] = inst_37194);

(statearr_37217_37234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (8))){
var inst_37179 = (state_37202[(7)]);
var tmp37214 = inst_37179;
var inst_37179__$1 = tmp37214;
var state_37202__$1 = (function (){var statearr_37218 = state_37202;
(statearr_37218[(7)] = inst_37179__$1);

return statearr_37218;
})();
var statearr_37219_37235 = state_37202__$1;
(statearr_37219_37235[(2)] = null);

(statearr_37219_37235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto___37225,out))
;
return ((function (switch__35399__auto__,c__35489__auto___37225,out){
return (function() {
var cljs$core$async$state_machine__35400__auto__ = null;
var cljs$core$async$state_machine__35400__auto____0 = (function (){
var statearr_37220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37220[(0)] = cljs$core$async$state_machine__35400__auto__);

(statearr_37220[(1)] = (1));

return statearr_37220;
});
var cljs$core$async$state_machine__35400__auto____1 = (function (state_37202){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_37202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e37221){if((e37221 instanceof Object)){
var ex__35403__auto__ = e37221;
var statearr_37222_37236 = state_37202;
(statearr_37222_37236[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37237 = state_37202;
state_37202 = G__37237;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$state_machine__35400__auto__ = function(state_37202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35400__auto____1.call(this,state_37202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35400__auto____0;
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35400__auto____1;
return cljs$core$async$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___37225,out))
})();
var state__35491__auto__ = (function (){var statearr_37223 = f__35490__auto__.call(null);
(statearr_37223[(6)] = c__35489__auto___37225);

return statearr_37223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___37225,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37239 = arguments.length;
switch (G__37239) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35489__auto___37305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___37305,out){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___37305,out){
return (function (state_37277){
var state_val_37278 = (state_37277[(1)]);
if((state_val_37278 === (7))){
var inst_37273 = (state_37277[(2)]);
var state_37277__$1 = state_37277;
var statearr_37279_37306 = state_37277__$1;
(statearr_37279_37306[(2)] = inst_37273);

(statearr_37279_37306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37278 === (1))){
var inst_37240 = (new Array(n));
var inst_37241 = inst_37240;
var inst_37242 = (0);
var state_37277__$1 = (function (){var statearr_37280 = state_37277;
(statearr_37280[(7)] = inst_37242);

(statearr_37280[(8)] = inst_37241);

return statearr_37280;
})();
var statearr_37281_37307 = state_37277__$1;
(statearr_37281_37307[(2)] = null);

(statearr_37281_37307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37278 === (4))){
var inst_37245 = (state_37277[(9)]);
var inst_37245__$1 = (state_37277[(2)]);
var inst_37246 = (inst_37245__$1 == null);
var inst_37247 = cljs.core.not.call(null,inst_37246);
var state_37277__$1 = (function (){var statearr_37282 = state_37277;
(statearr_37282[(9)] = inst_37245__$1);

return statearr_37282;
})();
if(inst_37247){
var statearr_37283_37308 = state_37277__$1;
(statearr_37283_37308[(1)] = (5));

} else {
var statearr_37284_37309 = state_37277__$1;
(statearr_37284_37309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37278 === (15))){
var inst_37267 = (state_37277[(2)]);
var state_37277__$1 = state_37277;
var statearr_37285_37310 = state_37277__$1;
(statearr_37285_37310[(2)] = inst_37267);

(statearr_37285_37310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37278 === (13))){
var state_37277__$1 = state_37277;
var statearr_37286_37311 = state_37277__$1;
(statearr_37286_37311[(2)] = null);

(statearr_37286_37311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37278 === (6))){
var inst_37242 = (state_37277[(7)]);
var inst_37263 = (inst_37242 > (0));
var state_37277__$1 = state_37277;
if(cljs.core.truth_(inst_37263)){
var statearr_37287_37312 = state_37277__$1;
(statearr_37287_37312[(1)] = (12));

} else {
var statearr_37288_37313 = state_37277__$1;
(statearr_37288_37313[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37278 === (3))){
var inst_37275 = (state_37277[(2)]);
var state_37277__$1 = state_37277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37277__$1,inst_37275);
} else {
if((state_val_37278 === (12))){
var inst_37241 = (state_37277[(8)]);
var inst_37265 = cljs.core.vec.call(null,inst_37241);
var state_37277__$1 = state_37277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37277__$1,(15),out,inst_37265);
} else {
if((state_val_37278 === (2))){
var state_37277__$1 = state_37277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37277__$1,(4),ch);
} else {
if((state_val_37278 === (11))){
var inst_37257 = (state_37277[(2)]);
var inst_37258 = (new Array(n));
var inst_37241 = inst_37258;
var inst_37242 = (0);
var state_37277__$1 = (function (){var statearr_37289 = state_37277;
(statearr_37289[(7)] = inst_37242);

(statearr_37289[(10)] = inst_37257);

(statearr_37289[(8)] = inst_37241);

return statearr_37289;
})();
var statearr_37290_37314 = state_37277__$1;
(statearr_37290_37314[(2)] = null);

(statearr_37290_37314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37278 === (9))){
var inst_37241 = (state_37277[(8)]);
var inst_37255 = cljs.core.vec.call(null,inst_37241);
var state_37277__$1 = state_37277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37277__$1,(11),out,inst_37255);
} else {
if((state_val_37278 === (5))){
var inst_37242 = (state_37277[(7)]);
var inst_37245 = (state_37277[(9)]);
var inst_37250 = (state_37277[(11)]);
var inst_37241 = (state_37277[(8)]);
var inst_37249 = (inst_37241[inst_37242] = inst_37245);
var inst_37250__$1 = (inst_37242 + (1));
var inst_37251 = (inst_37250__$1 < n);
var state_37277__$1 = (function (){var statearr_37291 = state_37277;
(statearr_37291[(12)] = inst_37249);

(statearr_37291[(11)] = inst_37250__$1);

return statearr_37291;
})();
if(cljs.core.truth_(inst_37251)){
var statearr_37292_37315 = state_37277__$1;
(statearr_37292_37315[(1)] = (8));

} else {
var statearr_37293_37316 = state_37277__$1;
(statearr_37293_37316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37278 === (14))){
var inst_37270 = (state_37277[(2)]);
var inst_37271 = cljs.core.async.close_BANG_.call(null,out);
var state_37277__$1 = (function (){var statearr_37295 = state_37277;
(statearr_37295[(13)] = inst_37270);

return statearr_37295;
})();
var statearr_37296_37317 = state_37277__$1;
(statearr_37296_37317[(2)] = inst_37271);

(statearr_37296_37317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37278 === (10))){
var inst_37261 = (state_37277[(2)]);
var state_37277__$1 = state_37277;
var statearr_37297_37318 = state_37277__$1;
(statearr_37297_37318[(2)] = inst_37261);

(statearr_37297_37318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37278 === (8))){
var inst_37250 = (state_37277[(11)]);
var inst_37241 = (state_37277[(8)]);
var tmp37294 = inst_37241;
var inst_37241__$1 = tmp37294;
var inst_37242 = inst_37250;
var state_37277__$1 = (function (){var statearr_37298 = state_37277;
(statearr_37298[(7)] = inst_37242);

(statearr_37298[(8)] = inst_37241__$1);

return statearr_37298;
})();
var statearr_37299_37319 = state_37277__$1;
(statearr_37299_37319[(2)] = null);

(statearr_37299_37319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto___37305,out))
;
return ((function (switch__35399__auto__,c__35489__auto___37305,out){
return (function() {
var cljs$core$async$state_machine__35400__auto__ = null;
var cljs$core$async$state_machine__35400__auto____0 = (function (){
var statearr_37300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37300[(0)] = cljs$core$async$state_machine__35400__auto__);

(statearr_37300[(1)] = (1));

return statearr_37300;
});
var cljs$core$async$state_machine__35400__auto____1 = (function (state_37277){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_37277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e37301){if((e37301 instanceof Object)){
var ex__35403__auto__ = e37301;
var statearr_37302_37320 = state_37277;
(statearr_37302_37320[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37321 = state_37277;
state_37277 = G__37321;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$state_machine__35400__auto__ = function(state_37277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35400__auto____1.call(this,state_37277);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35400__auto____0;
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35400__auto____1;
return cljs$core$async$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___37305,out))
})();
var state__35491__auto__ = (function (){var statearr_37303 = f__35490__auto__.call(null);
(statearr_37303[(6)] = c__35489__auto___37305);

return statearr_37303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___37305,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37323 = arguments.length;
switch (G__37323) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35489__auto___37393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___37393,out){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___37393,out){
return (function (state_37365){
var state_val_37366 = (state_37365[(1)]);
if((state_val_37366 === (7))){
var inst_37361 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37367_37394 = state_37365__$1;
(statearr_37367_37394[(2)] = inst_37361);

(statearr_37367_37394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (1))){
var inst_37324 = [];
var inst_37325 = inst_37324;
var inst_37326 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37365__$1 = (function (){var statearr_37368 = state_37365;
(statearr_37368[(7)] = inst_37325);

(statearr_37368[(8)] = inst_37326);

return statearr_37368;
})();
var statearr_37369_37395 = state_37365__$1;
(statearr_37369_37395[(2)] = null);

(statearr_37369_37395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (4))){
var inst_37329 = (state_37365[(9)]);
var inst_37329__$1 = (state_37365[(2)]);
var inst_37330 = (inst_37329__$1 == null);
var inst_37331 = cljs.core.not.call(null,inst_37330);
var state_37365__$1 = (function (){var statearr_37370 = state_37365;
(statearr_37370[(9)] = inst_37329__$1);

return statearr_37370;
})();
if(inst_37331){
var statearr_37371_37396 = state_37365__$1;
(statearr_37371_37396[(1)] = (5));

} else {
var statearr_37372_37397 = state_37365__$1;
(statearr_37372_37397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (15))){
var inst_37355 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37373_37398 = state_37365__$1;
(statearr_37373_37398[(2)] = inst_37355);

(statearr_37373_37398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (13))){
var state_37365__$1 = state_37365;
var statearr_37374_37399 = state_37365__$1;
(statearr_37374_37399[(2)] = null);

(statearr_37374_37399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (6))){
var inst_37325 = (state_37365[(7)]);
var inst_37350 = inst_37325.length;
var inst_37351 = (inst_37350 > (0));
var state_37365__$1 = state_37365;
if(cljs.core.truth_(inst_37351)){
var statearr_37375_37400 = state_37365__$1;
(statearr_37375_37400[(1)] = (12));

} else {
var statearr_37376_37401 = state_37365__$1;
(statearr_37376_37401[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (3))){
var inst_37363 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37365__$1,inst_37363);
} else {
if((state_val_37366 === (12))){
var inst_37325 = (state_37365[(7)]);
var inst_37353 = cljs.core.vec.call(null,inst_37325);
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37365__$1,(15),out,inst_37353);
} else {
if((state_val_37366 === (2))){
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37365__$1,(4),ch);
} else {
if((state_val_37366 === (11))){
var inst_37333 = (state_37365[(10)]);
var inst_37329 = (state_37365[(9)]);
var inst_37343 = (state_37365[(2)]);
var inst_37344 = [];
var inst_37345 = inst_37344.push(inst_37329);
var inst_37325 = inst_37344;
var inst_37326 = inst_37333;
var state_37365__$1 = (function (){var statearr_37377 = state_37365;
(statearr_37377[(7)] = inst_37325);

(statearr_37377[(11)] = inst_37345);

(statearr_37377[(8)] = inst_37326);

(statearr_37377[(12)] = inst_37343);

return statearr_37377;
})();
var statearr_37378_37402 = state_37365__$1;
(statearr_37378_37402[(2)] = null);

(statearr_37378_37402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (9))){
var inst_37325 = (state_37365[(7)]);
var inst_37341 = cljs.core.vec.call(null,inst_37325);
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37365__$1,(11),out,inst_37341);
} else {
if((state_val_37366 === (5))){
var inst_37326 = (state_37365[(8)]);
var inst_37333 = (state_37365[(10)]);
var inst_37329 = (state_37365[(9)]);
var inst_37333__$1 = f.call(null,inst_37329);
var inst_37334 = cljs.core._EQ_.call(null,inst_37333__$1,inst_37326);
var inst_37335 = cljs.core.keyword_identical_QMARK_.call(null,inst_37326,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37336 = (inst_37334) || (inst_37335);
var state_37365__$1 = (function (){var statearr_37379 = state_37365;
(statearr_37379[(10)] = inst_37333__$1);

return statearr_37379;
})();
if(cljs.core.truth_(inst_37336)){
var statearr_37380_37403 = state_37365__$1;
(statearr_37380_37403[(1)] = (8));

} else {
var statearr_37381_37404 = state_37365__$1;
(statearr_37381_37404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (14))){
var inst_37358 = (state_37365[(2)]);
var inst_37359 = cljs.core.async.close_BANG_.call(null,out);
var state_37365__$1 = (function (){var statearr_37383 = state_37365;
(statearr_37383[(13)] = inst_37358);

return statearr_37383;
})();
var statearr_37384_37405 = state_37365__$1;
(statearr_37384_37405[(2)] = inst_37359);

(statearr_37384_37405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (10))){
var inst_37348 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37385_37406 = state_37365__$1;
(statearr_37385_37406[(2)] = inst_37348);

(statearr_37385_37406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (8))){
var inst_37325 = (state_37365[(7)]);
var inst_37333 = (state_37365[(10)]);
var inst_37329 = (state_37365[(9)]);
var inst_37338 = inst_37325.push(inst_37329);
var tmp37382 = inst_37325;
var inst_37325__$1 = tmp37382;
var inst_37326 = inst_37333;
var state_37365__$1 = (function (){var statearr_37386 = state_37365;
(statearr_37386[(7)] = inst_37325__$1);

(statearr_37386[(8)] = inst_37326);

(statearr_37386[(14)] = inst_37338);

return statearr_37386;
})();
var statearr_37387_37407 = state_37365__$1;
(statearr_37387_37407[(2)] = null);

(statearr_37387_37407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35489__auto___37393,out))
;
return ((function (switch__35399__auto__,c__35489__auto___37393,out){
return (function() {
var cljs$core$async$state_machine__35400__auto__ = null;
var cljs$core$async$state_machine__35400__auto____0 = (function (){
var statearr_37388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37388[(0)] = cljs$core$async$state_machine__35400__auto__);

(statearr_37388[(1)] = (1));

return statearr_37388;
});
var cljs$core$async$state_machine__35400__auto____1 = (function (state_37365){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_37365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e37389){if((e37389 instanceof Object)){
var ex__35403__auto__ = e37389;
var statearr_37390_37408 = state_37365;
(statearr_37390_37408[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37409 = state_37365;
state_37365 = G__37409;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
cljs$core$async$state_machine__35400__auto__ = function(state_37365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35400__auto____1.call(this,state_37365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35400__auto____0;
cljs$core$async$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35400__auto____1;
return cljs$core$async$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___37393,out))
})();
var state__35491__auto__ = (function (){var statearr_37391 = f__35490__auto__.call(null);
(statearr_37391[(6)] = c__35489__auto___37393);

return statearr_37391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___37393,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1521406488231
