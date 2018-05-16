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
var G__34637 = arguments.length;
switch (G__34637) {
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
if(typeof cljs.core.async.t_cljs$core$async34638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34638 = (function (f,blockable,meta34639){
this.f = f;
this.blockable = blockable;
this.meta34639 = meta34639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34640,meta34639__$1){
var self__ = this;
var _34640__$1 = this;
return (new cljs.core.async.t_cljs$core$async34638(self__.f,self__.blockable,meta34639__$1));
});

cljs.core.async.t_cljs$core$async34638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34640){
var self__ = this;
var _34640__$1 = this;
return self__.meta34639;
});

cljs.core.async.t_cljs$core$async34638.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34639","meta34639",-1498283480,null)], null);
});

cljs.core.async.t_cljs$core$async34638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34638";

cljs.core.async.t_cljs$core$async34638.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async34638");
});

cljs.core.async.__GT_t_cljs$core$async34638 = (function cljs$core$async$__GT_t_cljs$core$async34638(f__$1,blockable__$1,meta34639){
return (new cljs.core.async.t_cljs$core$async34638(f__$1,blockable__$1,meta34639));
});

}

return (new cljs.core.async.t_cljs$core$async34638(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34644 = arguments.length;
switch (G__34644) {
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
var G__34647 = arguments.length;
switch (G__34647) {
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
var G__34650 = arguments.length;
switch (G__34650) {
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
var val_34652 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34652);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34652,ret){
return (function (){
return fn1.call(null,val_34652);
});})(val_34652,ret))
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
var G__34654 = arguments.length;
switch (G__34654) {
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
var n__31128__auto___34656 = n;
var x_34657 = (0);
while(true){
if((x_34657 < n__31128__auto___34656)){
(a[x_34657] = (0));

var G__34658 = (x_34657 + (1));
x_34657 = G__34658;
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

var G__34659 = (i + (1));
i = G__34659;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34660 = (function (flag,meta34661){
this.flag = flag;
this.meta34661 = meta34661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34662,meta34661__$1){
var self__ = this;
var _34662__$1 = this;
return (new cljs.core.async.t_cljs$core$async34660(self__.flag,meta34661__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34662){
var self__ = this;
var _34662__$1 = this;
return self__.meta34661;
});})(flag))
;

cljs.core.async.t_cljs$core$async34660.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34660.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34661","meta34661",74781924,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34660";

cljs.core.async.t_cljs$core$async34660.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async34660");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34660 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34660(flag__$1,meta34661){
return (new cljs.core.async.t_cljs$core$async34660(flag__$1,meta34661));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34660(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34663 = (function (flag,cb,meta34664){
this.flag = flag;
this.cb = cb;
this.meta34664 = meta34664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34665,meta34664__$1){
var self__ = this;
var _34665__$1 = this;
return (new cljs.core.async.t_cljs$core$async34663(self__.flag,self__.cb,meta34664__$1));
});

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34665){
var self__ = this;
var _34665__$1 = this;
return self__.meta34664;
});

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34664","meta34664",2005834754,null)], null);
});

cljs.core.async.t_cljs$core$async34663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34663";

cljs.core.async.t_cljs$core$async34663.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async34663");
});

cljs.core.async.__GT_t_cljs$core$async34663 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34663(flag__$1,cb__$1,meta34664){
return (new cljs.core.async.t_cljs$core$async34663(flag__$1,cb__$1,meta34664));
});

}

return (new cljs.core.async.t_cljs$core$async34663(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34666_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34666_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34667_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34667_SHARP_,port], null));
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
var G__34668 = (i + (1));
i = G__34668;
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
var len__31362__auto___34674 = arguments.length;
var i__31363__auto___34675 = (0);
while(true){
if((i__31363__auto___34675 < len__31362__auto___34674)){
args__31369__auto__.push((arguments[i__31363__auto___34675]));

var G__34676 = (i__31363__auto___34675 + (1));
i__31363__auto___34675 = G__34676;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((1) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31370__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34671){
var map__34672 = p__34671;
var map__34672__$1 = ((((!((map__34672 == null)))?((((map__34672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34672):map__34672);
var opts = map__34672__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34669){
var G__34670 = cljs.core.first.call(null,seq34669);
var seq34669__$1 = cljs.core.next.call(null,seq34669);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34670,seq34669__$1);
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
var G__34678 = arguments.length;
switch (G__34678) {
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
var c__34577__auto___34724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___34724){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___34724){
return (function (state_34702){
var state_val_34703 = (state_34702[(1)]);
if((state_val_34703 === (7))){
var inst_34698 = (state_34702[(2)]);
var state_34702__$1 = state_34702;
var statearr_34704_34725 = state_34702__$1;
(statearr_34704_34725[(2)] = inst_34698);

(statearr_34704_34725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (1))){
var state_34702__$1 = state_34702;
var statearr_34705_34726 = state_34702__$1;
(statearr_34705_34726[(2)] = null);

(statearr_34705_34726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (4))){
var inst_34681 = (state_34702[(7)]);
var inst_34681__$1 = (state_34702[(2)]);
var inst_34682 = (inst_34681__$1 == null);
var state_34702__$1 = (function (){var statearr_34706 = state_34702;
(statearr_34706[(7)] = inst_34681__$1);

return statearr_34706;
})();
if(cljs.core.truth_(inst_34682)){
var statearr_34707_34727 = state_34702__$1;
(statearr_34707_34727[(1)] = (5));

} else {
var statearr_34708_34728 = state_34702__$1;
(statearr_34708_34728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (13))){
var state_34702__$1 = state_34702;
var statearr_34709_34729 = state_34702__$1;
(statearr_34709_34729[(2)] = null);

(statearr_34709_34729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (6))){
var inst_34681 = (state_34702[(7)]);
var state_34702__$1 = state_34702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34702__$1,(11),to,inst_34681);
} else {
if((state_val_34703 === (3))){
var inst_34700 = (state_34702[(2)]);
var state_34702__$1 = state_34702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34702__$1,inst_34700);
} else {
if((state_val_34703 === (12))){
var state_34702__$1 = state_34702;
var statearr_34710_34730 = state_34702__$1;
(statearr_34710_34730[(2)] = null);

(statearr_34710_34730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (2))){
var state_34702__$1 = state_34702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34702__$1,(4),from);
} else {
if((state_val_34703 === (11))){
var inst_34691 = (state_34702[(2)]);
var state_34702__$1 = state_34702;
if(cljs.core.truth_(inst_34691)){
var statearr_34711_34731 = state_34702__$1;
(statearr_34711_34731[(1)] = (12));

} else {
var statearr_34712_34732 = state_34702__$1;
(statearr_34712_34732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (9))){
var state_34702__$1 = state_34702;
var statearr_34713_34733 = state_34702__$1;
(statearr_34713_34733[(2)] = null);

(statearr_34713_34733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (5))){
var state_34702__$1 = state_34702;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34714_34734 = state_34702__$1;
(statearr_34714_34734[(1)] = (8));

} else {
var statearr_34715_34735 = state_34702__$1;
(statearr_34715_34735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (14))){
var inst_34696 = (state_34702[(2)]);
var state_34702__$1 = state_34702;
var statearr_34716_34736 = state_34702__$1;
(statearr_34716_34736[(2)] = inst_34696);

(statearr_34716_34736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (10))){
var inst_34688 = (state_34702[(2)]);
var state_34702__$1 = state_34702;
var statearr_34717_34737 = state_34702__$1;
(statearr_34717_34737[(2)] = inst_34688);

(statearr_34717_34737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34703 === (8))){
var inst_34685 = cljs.core.async.close_BANG_.call(null,to);
var state_34702__$1 = state_34702;
var statearr_34718_34738 = state_34702__$1;
(statearr_34718_34738[(2)] = inst_34685);

(statearr_34718_34738[(1)] = (10));


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
});})(c__34577__auto___34724))
;
return ((function (switch__34487__auto__,c__34577__auto___34724){
return (function() {
var cljs$core$async$state_machine__34488__auto__ = null;
var cljs$core$async$state_machine__34488__auto____0 = (function (){
var statearr_34719 = [null,null,null,null,null,null,null,null];
(statearr_34719[(0)] = cljs$core$async$state_machine__34488__auto__);

(statearr_34719[(1)] = (1));

return statearr_34719;
});
var cljs$core$async$state_machine__34488__auto____1 = (function (state_34702){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_34702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e34720){if((e34720 instanceof Object)){
var ex__34491__auto__ = e34720;
var statearr_34721_34739 = state_34702;
(statearr_34721_34739[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34740 = state_34702;
state_34702 = G__34740;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$state_machine__34488__auto__ = function(state_34702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34488__auto____1.call(this,state_34702);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34488__auto____0;
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34488__auto____1;
return cljs$core$async$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___34724))
})();
var state__34579__auto__ = (function (){var statearr_34722 = f__34578__auto__.call(null);
(statearr_34722[(6)] = c__34577__auto___34724);

return statearr_34722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___34724))
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
return (function (p__34741){
var vec__34742 = p__34741;
var v = cljs.core.nth.call(null,vec__34742,(0),null);
var p = cljs.core.nth.call(null,vec__34742,(1),null);
var job = vec__34742;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34577__auto___34913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___34913,res,vec__34742,v,p,job,jobs,results){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___34913,res,vec__34742,v,p,job,jobs,results){
return (function (state_34749){
var state_val_34750 = (state_34749[(1)]);
if((state_val_34750 === (1))){
var state_34749__$1 = state_34749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34749__$1,(2),res,v);
} else {
if((state_val_34750 === (2))){
var inst_34746 = (state_34749[(2)]);
var inst_34747 = cljs.core.async.close_BANG_.call(null,res);
var state_34749__$1 = (function (){var statearr_34751 = state_34749;
(statearr_34751[(7)] = inst_34746);

return statearr_34751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34749__$1,inst_34747);
} else {
return null;
}
}
});})(c__34577__auto___34913,res,vec__34742,v,p,job,jobs,results))
;
return ((function (switch__34487__auto__,c__34577__auto___34913,res,vec__34742,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0 = (function (){
var statearr_34752 = [null,null,null,null,null,null,null,null];
(statearr_34752[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__);

(statearr_34752[(1)] = (1));

return statearr_34752;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1 = (function (state_34749){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_34749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e34753){if((e34753 instanceof Object)){
var ex__34491__auto__ = e34753;
var statearr_34754_34914 = state_34749;
(statearr_34754_34914[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34915 = state_34749;
state_34749 = G__34915;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__ = function(state_34749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1.call(this,state_34749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___34913,res,vec__34742,v,p,job,jobs,results))
})();
var state__34579__auto__ = (function (){var statearr_34755 = f__34578__auto__.call(null);
(statearr_34755[(6)] = c__34577__auto___34913);

return statearr_34755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___34913,res,vec__34742,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34756){
var vec__34757 = p__34756;
var v = cljs.core.nth.call(null,vec__34757,(0),null);
var p = cljs.core.nth.call(null,vec__34757,(1),null);
var job = vec__34757;
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
var n__31128__auto___34916 = n;
var __34917 = (0);
while(true){
if((__34917 < n__31128__auto___34916)){
var G__34760_34918 = type;
var G__34760_34919__$1 = (((G__34760_34918 instanceof cljs.core.Keyword))?G__34760_34918.fqn:null);
switch (G__34760_34919__$1) {
case "compute":
var c__34577__auto___34921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34917,c__34577__auto___34921,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (__34917,c__34577__auto___34921,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async){
return (function (state_34773){
var state_val_34774 = (state_34773[(1)]);
if((state_val_34774 === (1))){
var state_34773__$1 = state_34773;
var statearr_34775_34922 = state_34773__$1;
(statearr_34775_34922[(2)] = null);

(statearr_34775_34922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (2))){
var state_34773__$1 = state_34773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34773__$1,(4),jobs);
} else {
if((state_val_34774 === (3))){
var inst_34771 = (state_34773[(2)]);
var state_34773__$1 = state_34773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34773__$1,inst_34771);
} else {
if((state_val_34774 === (4))){
var inst_34763 = (state_34773[(2)]);
var inst_34764 = process.call(null,inst_34763);
var state_34773__$1 = state_34773;
if(cljs.core.truth_(inst_34764)){
var statearr_34776_34923 = state_34773__$1;
(statearr_34776_34923[(1)] = (5));

} else {
var statearr_34777_34924 = state_34773__$1;
(statearr_34777_34924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (5))){
var state_34773__$1 = state_34773;
var statearr_34778_34925 = state_34773__$1;
(statearr_34778_34925[(2)] = null);

(statearr_34778_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (6))){
var state_34773__$1 = state_34773;
var statearr_34779_34926 = state_34773__$1;
(statearr_34779_34926[(2)] = null);

(statearr_34779_34926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (7))){
var inst_34769 = (state_34773[(2)]);
var state_34773__$1 = state_34773;
var statearr_34780_34927 = state_34773__$1;
(statearr_34780_34927[(2)] = inst_34769);

(statearr_34780_34927[(1)] = (3));


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
});})(__34917,c__34577__auto___34921,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async))
;
return ((function (__34917,switch__34487__auto__,c__34577__auto___34921,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0 = (function (){
var statearr_34781 = [null,null,null,null,null,null,null];
(statearr_34781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__);

(statearr_34781[(1)] = (1));

return statearr_34781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1 = (function (state_34773){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_34773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e34782){if((e34782 instanceof Object)){
var ex__34491__auto__ = e34782;
var statearr_34783_34928 = state_34773;
(statearr_34783_34928[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34929 = state_34773;
state_34773 = G__34929;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__ = function(state_34773){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1.call(this,state_34773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__;
})()
;})(__34917,switch__34487__auto__,c__34577__auto___34921,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async))
})();
var state__34579__auto__ = (function (){var statearr_34784 = f__34578__auto__.call(null);
(statearr_34784[(6)] = c__34577__auto___34921);

return statearr_34784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(__34917,c__34577__auto___34921,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async))
);


break;
case "async":
var c__34577__auto___34930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34917,c__34577__auto___34930,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (__34917,c__34577__auto___34930,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async){
return (function (state_34797){
var state_val_34798 = (state_34797[(1)]);
if((state_val_34798 === (1))){
var state_34797__$1 = state_34797;
var statearr_34799_34931 = state_34797__$1;
(statearr_34799_34931[(2)] = null);

(statearr_34799_34931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (2))){
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34797__$1,(4),jobs);
} else {
if((state_val_34798 === (3))){
var inst_34795 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34797__$1,inst_34795);
} else {
if((state_val_34798 === (4))){
var inst_34787 = (state_34797[(2)]);
var inst_34788 = async.call(null,inst_34787);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34788)){
var statearr_34800_34932 = state_34797__$1;
(statearr_34800_34932[(1)] = (5));

} else {
var statearr_34801_34933 = state_34797__$1;
(statearr_34801_34933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (5))){
var state_34797__$1 = state_34797;
var statearr_34802_34934 = state_34797__$1;
(statearr_34802_34934[(2)] = null);

(statearr_34802_34934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (6))){
var state_34797__$1 = state_34797;
var statearr_34803_34935 = state_34797__$1;
(statearr_34803_34935[(2)] = null);

(statearr_34803_34935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (7))){
var inst_34793 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34804_34936 = state_34797__$1;
(statearr_34804_34936[(2)] = inst_34793);

(statearr_34804_34936[(1)] = (3));


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
});})(__34917,c__34577__auto___34930,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async))
;
return ((function (__34917,switch__34487__auto__,c__34577__auto___34930,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0 = (function (){
var statearr_34805 = [null,null,null,null,null,null,null];
(statearr_34805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__);

(statearr_34805[(1)] = (1));

return statearr_34805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1 = (function (state_34797){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_34797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e34806){if((e34806 instanceof Object)){
var ex__34491__auto__ = e34806;
var statearr_34807_34937 = state_34797;
(statearr_34807_34937[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34938 = state_34797;
state_34797 = G__34938;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__ = function(state_34797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1.call(this,state_34797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__;
})()
;})(__34917,switch__34487__auto__,c__34577__auto___34930,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async))
})();
var state__34579__auto__ = (function (){var statearr_34808 = f__34578__auto__.call(null);
(statearr_34808[(6)] = c__34577__auto___34930);

return statearr_34808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(__34917,c__34577__auto___34930,G__34760_34918,G__34760_34919__$1,n__31128__auto___34916,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34760_34919__$1)].join('')));

}

var G__34939 = (__34917 + (1));
__34917 = G__34939;
continue;
} else {
}
break;
}

var c__34577__auto___34940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___34940,jobs,results,process,async){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___34940,jobs,results,process,async){
return (function (state_34830){
var state_val_34831 = (state_34830[(1)]);
if((state_val_34831 === (1))){
var state_34830__$1 = state_34830;
var statearr_34832_34941 = state_34830__$1;
(statearr_34832_34941[(2)] = null);

(statearr_34832_34941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (2))){
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34830__$1,(4),from);
} else {
if((state_val_34831 === (3))){
var inst_34828 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34830__$1,inst_34828);
} else {
if((state_val_34831 === (4))){
var inst_34811 = (state_34830[(7)]);
var inst_34811__$1 = (state_34830[(2)]);
var inst_34812 = (inst_34811__$1 == null);
var state_34830__$1 = (function (){var statearr_34833 = state_34830;
(statearr_34833[(7)] = inst_34811__$1);

return statearr_34833;
})();
if(cljs.core.truth_(inst_34812)){
var statearr_34834_34942 = state_34830__$1;
(statearr_34834_34942[(1)] = (5));

} else {
var statearr_34835_34943 = state_34830__$1;
(statearr_34835_34943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (5))){
var inst_34814 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34830__$1 = state_34830;
var statearr_34836_34944 = state_34830__$1;
(statearr_34836_34944[(2)] = inst_34814);

(statearr_34836_34944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (6))){
var inst_34811 = (state_34830[(7)]);
var inst_34816 = (state_34830[(8)]);
var inst_34816__$1 = cljs.core.async.chan.call(null,(1));
var inst_34817 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34818 = [inst_34811,inst_34816__$1];
var inst_34819 = (new cljs.core.PersistentVector(null,2,(5),inst_34817,inst_34818,null));
var state_34830__$1 = (function (){var statearr_34837 = state_34830;
(statearr_34837[(8)] = inst_34816__$1);

return statearr_34837;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34830__$1,(8),jobs,inst_34819);
} else {
if((state_val_34831 === (7))){
var inst_34826 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34838_34945 = state_34830__$1;
(statearr_34838_34945[(2)] = inst_34826);

(statearr_34838_34945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (8))){
var inst_34816 = (state_34830[(8)]);
var inst_34821 = (state_34830[(2)]);
var state_34830__$1 = (function (){var statearr_34839 = state_34830;
(statearr_34839[(9)] = inst_34821);

return statearr_34839;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34830__$1,(9),results,inst_34816);
} else {
if((state_val_34831 === (9))){
var inst_34823 = (state_34830[(2)]);
var state_34830__$1 = (function (){var statearr_34840 = state_34830;
(statearr_34840[(10)] = inst_34823);

return statearr_34840;
})();
var statearr_34841_34946 = state_34830__$1;
(statearr_34841_34946[(2)] = null);

(statearr_34841_34946[(1)] = (2));


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
});})(c__34577__auto___34940,jobs,results,process,async))
;
return ((function (switch__34487__auto__,c__34577__auto___34940,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0 = (function (){
var statearr_34842 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34842[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__);

(statearr_34842[(1)] = (1));

return statearr_34842;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1 = (function (state_34830){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_34830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e34843){if((e34843 instanceof Object)){
var ex__34491__auto__ = e34843;
var statearr_34844_34947 = state_34830;
(statearr_34844_34947[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34948 = state_34830;
state_34830 = G__34948;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__ = function(state_34830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1.call(this,state_34830);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___34940,jobs,results,process,async))
})();
var state__34579__auto__ = (function (){var statearr_34845 = f__34578__auto__.call(null);
(statearr_34845[(6)] = c__34577__auto___34940);

return statearr_34845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___34940,jobs,results,process,async))
);


var c__34577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto__,jobs,results,process,async){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto__,jobs,results,process,async){
return (function (state_34883){
var state_val_34884 = (state_34883[(1)]);
if((state_val_34884 === (7))){
var inst_34879 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
var statearr_34885_34949 = state_34883__$1;
(statearr_34885_34949[(2)] = inst_34879);

(statearr_34885_34949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (20))){
var state_34883__$1 = state_34883;
var statearr_34886_34950 = state_34883__$1;
(statearr_34886_34950[(2)] = null);

(statearr_34886_34950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (1))){
var state_34883__$1 = state_34883;
var statearr_34887_34951 = state_34883__$1;
(statearr_34887_34951[(2)] = null);

(statearr_34887_34951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (4))){
var inst_34848 = (state_34883[(7)]);
var inst_34848__$1 = (state_34883[(2)]);
var inst_34849 = (inst_34848__$1 == null);
var state_34883__$1 = (function (){var statearr_34888 = state_34883;
(statearr_34888[(7)] = inst_34848__$1);

return statearr_34888;
})();
if(cljs.core.truth_(inst_34849)){
var statearr_34889_34952 = state_34883__$1;
(statearr_34889_34952[(1)] = (5));

} else {
var statearr_34890_34953 = state_34883__$1;
(statearr_34890_34953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (15))){
var inst_34861 = (state_34883[(8)]);
var state_34883__$1 = state_34883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34883__$1,(18),to,inst_34861);
} else {
if((state_val_34884 === (21))){
var inst_34874 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
var statearr_34891_34954 = state_34883__$1;
(statearr_34891_34954[(2)] = inst_34874);

(statearr_34891_34954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (13))){
var inst_34876 = (state_34883[(2)]);
var state_34883__$1 = (function (){var statearr_34892 = state_34883;
(statearr_34892[(9)] = inst_34876);

return statearr_34892;
})();
var statearr_34893_34955 = state_34883__$1;
(statearr_34893_34955[(2)] = null);

(statearr_34893_34955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (6))){
var inst_34848 = (state_34883[(7)]);
var state_34883__$1 = state_34883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34883__$1,(11),inst_34848);
} else {
if((state_val_34884 === (17))){
var inst_34869 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
if(cljs.core.truth_(inst_34869)){
var statearr_34894_34956 = state_34883__$1;
(statearr_34894_34956[(1)] = (19));

} else {
var statearr_34895_34957 = state_34883__$1;
(statearr_34895_34957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (3))){
var inst_34881 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34883__$1,inst_34881);
} else {
if((state_val_34884 === (12))){
var inst_34858 = (state_34883[(10)]);
var state_34883__$1 = state_34883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34883__$1,(14),inst_34858);
} else {
if((state_val_34884 === (2))){
var state_34883__$1 = state_34883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34883__$1,(4),results);
} else {
if((state_val_34884 === (19))){
var state_34883__$1 = state_34883;
var statearr_34896_34958 = state_34883__$1;
(statearr_34896_34958[(2)] = null);

(statearr_34896_34958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (11))){
var inst_34858 = (state_34883[(2)]);
var state_34883__$1 = (function (){var statearr_34897 = state_34883;
(statearr_34897[(10)] = inst_34858);

return statearr_34897;
})();
var statearr_34898_34959 = state_34883__$1;
(statearr_34898_34959[(2)] = null);

(statearr_34898_34959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (9))){
var state_34883__$1 = state_34883;
var statearr_34899_34960 = state_34883__$1;
(statearr_34899_34960[(2)] = null);

(statearr_34899_34960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (5))){
var state_34883__$1 = state_34883;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34900_34961 = state_34883__$1;
(statearr_34900_34961[(1)] = (8));

} else {
var statearr_34901_34962 = state_34883__$1;
(statearr_34901_34962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (14))){
var inst_34863 = (state_34883[(11)]);
var inst_34861 = (state_34883[(8)]);
var inst_34861__$1 = (state_34883[(2)]);
var inst_34862 = (inst_34861__$1 == null);
var inst_34863__$1 = cljs.core.not.call(null,inst_34862);
var state_34883__$1 = (function (){var statearr_34902 = state_34883;
(statearr_34902[(11)] = inst_34863__$1);

(statearr_34902[(8)] = inst_34861__$1);

return statearr_34902;
})();
if(inst_34863__$1){
var statearr_34903_34963 = state_34883__$1;
(statearr_34903_34963[(1)] = (15));

} else {
var statearr_34904_34964 = state_34883__$1;
(statearr_34904_34964[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (16))){
var inst_34863 = (state_34883[(11)]);
var state_34883__$1 = state_34883;
var statearr_34905_34965 = state_34883__$1;
(statearr_34905_34965[(2)] = inst_34863);

(statearr_34905_34965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (10))){
var inst_34855 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
var statearr_34906_34966 = state_34883__$1;
(statearr_34906_34966[(2)] = inst_34855);

(statearr_34906_34966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (18))){
var inst_34866 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
var statearr_34907_34967 = state_34883__$1;
(statearr_34907_34967[(2)] = inst_34866);

(statearr_34907_34967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (8))){
var inst_34852 = cljs.core.async.close_BANG_.call(null,to);
var state_34883__$1 = state_34883;
var statearr_34908_34968 = state_34883__$1;
(statearr_34908_34968[(2)] = inst_34852);

(statearr_34908_34968[(1)] = (10));


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
});})(c__34577__auto__,jobs,results,process,async))
;
return ((function (switch__34487__auto__,c__34577__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0 = (function (){
var statearr_34909 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__);

(statearr_34909[(1)] = (1));

return statearr_34909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1 = (function (state_34883){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_34883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e34910){if((e34910 instanceof Object)){
var ex__34491__auto__ = e34910;
var statearr_34911_34969 = state_34883;
(statearr_34911_34969[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34970 = state_34883;
state_34883 = G__34970;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__ = function(state_34883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1.call(this,state_34883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto__,jobs,results,process,async))
})();
var state__34579__auto__ = (function (){var statearr_34912 = f__34578__auto__.call(null);
(statearr_34912[(6)] = c__34577__auto__);

return statearr_34912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto__,jobs,results,process,async))
);

return c__34577__auto__;
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
var G__34972 = arguments.length;
switch (G__34972) {
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
var G__34975 = arguments.length;
switch (G__34975) {
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
var G__34978 = arguments.length;
switch (G__34978) {
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
var c__34577__auto___35027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___35027,tc,fc){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___35027,tc,fc){
return (function (state_35004){
var state_val_35005 = (state_35004[(1)]);
if((state_val_35005 === (7))){
var inst_35000 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35006_35028 = state_35004__$1;
(statearr_35006_35028[(2)] = inst_35000);

(statearr_35006_35028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (1))){
var state_35004__$1 = state_35004;
var statearr_35007_35029 = state_35004__$1;
(statearr_35007_35029[(2)] = null);

(statearr_35007_35029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (4))){
var inst_34981 = (state_35004[(7)]);
var inst_34981__$1 = (state_35004[(2)]);
var inst_34982 = (inst_34981__$1 == null);
var state_35004__$1 = (function (){var statearr_35008 = state_35004;
(statearr_35008[(7)] = inst_34981__$1);

return statearr_35008;
})();
if(cljs.core.truth_(inst_34982)){
var statearr_35009_35030 = state_35004__$1;
(statearr_35009_35030[(1)] = (5));

} else {
var statearr_35010_35031 = state_35004__$1;
(statearr_35010_35031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (13))){
var state_35004__$1 = state_35004;
var statearr_35011_35032 = state_35004__$1;
(statearr_35011_35032[(2)] = null);

(statearr_35011_35032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (6))){
var inst_34981 = (state_35004[(7)]);
var inst_34987 = p.call(null,inst_34981);
var state_35004__$1 = state_35004;
if(cljs.core.truth_(inst_34987)){
var statearr_35012_35033 = state_35004__$1;
(statearr_35012_35033[(1)] = (9));

} else {
var statearr_35013_35034 = state_35004__$1;
(statearr_35013_35034[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (3))){
var inst_35002 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35004__$1,inst_35002);
} else {
if((state_val_35005 === (12))){
var state_35004__$1 = state_35004;
var statearr_35014_35035 = state_35004__$1;
(statearr_35014_35035[(2)] = null);

(statearr_35014_35035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (2))){
var state_35004__$1 = state_35004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35004__$1,(4),ch);
} else {
if((state_val_35005 === (11))){
var inst_34981 = (state_35004[(7)]);
var inst_34991 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35004__$1,(8),inst_34991,inst_34981);
} else {
if((state_val_35005 === (9))){
var state_35004__$1 = state_35004;
var statearr_35015_35036 = state_35004__$1;
(statearr_35015_35036[(2)] = tc);

(statearr_35015_35036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (5))){
var inst_34984 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34985 = cljs.core.async.close_BANG_.call(null,fc);
var state_35004__$1 = (function (){var statearr_35016 = state_35004;
(statearr_35016[(8)] = inst_34984);

return statearr_35016;
})();
var statearr_35017_35037 = state_35004__$1;
(statearr_35017_35037[(2)] = inst_34985);

(statearr_35017_35037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (14))){
var inst_34998 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
var statearr_35018_35038 = state_35004__$1;
(statearr_35018_35038[(2)] = inst_34998);

(statearr_35018_35038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (10))){
var state_35004__$1 = state_35004;
var statearr_35019_35039 = state_35004__$1;
(statearr_35019_35039[(2)] = fc);

(statearr_35019_35039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35005 === (8))){
var inst_34993 = (state_35004[(2)]);
var state_35004__$1 = state_35004;
if(cljs.core.truth_(inst_34993)){
var statearr_35020_35040 = state_35004__$1;
(statearr_35020_35040[(1)] = (12));

} else {
var statearr_35021_35041 = state_35004__$1;
(statearr_35021_35041[(1)] = (13));

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
});})(c__34577__auto___35027,tc,fc))
;
return ((function (switch__34487__auto__,c__34577__auto___35027,tc,fc){
return (function() {
var cljs$core$async$state_machine__34488__auto__ = null;
var cljs$core$async$state_machine__34488__auto____0 = (function (){
var statearr_35022 = [null,null,null,null,null,null,null,null,null];
(statearr_35022[(0)] = cljs$core$async$state_machine__34488__auto__);

(statearr_35022[(1)] = (1));

return statearr_35022;
});
var cljs$core$async$state_machine__34488__auto____1 = (function (state_35004){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_35004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e35023){if((e35023 instanceof Object)){
var ex__34491__auto__ = e35023;
var statearr_35024_35042 = state_35004;
(statearr_35024_35042[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35043 = state_35004;
state_35004 = G__35043;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$state_machine__34488__auto__ = function(state_35004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34488__auto____1.call(this,state_35004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34488__auto____0;
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34488__auto____1;
return cljs$core$async$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___35027,tc,fc))
})();
var state__34579__auto__ = (function (){var statearr_35025 = f__34578__auto__.call(null);
(statearr_35025[(6)] = c__34577__auto___35027);

return statearr_35025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___35027,tc,fc))
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
var c__34577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto__){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto__){
return (function (state_35064){
var state_val_35065 = (state_35064[(1)]);
if((state_val_35065 === (7))){
var inst_35060 = (state_35064[(2)]);
var state_35064__$1 = state_35064;
var statearr_35066_35084 = state_35064__$1;
(statearr_35066_35084[(2)] = inst_35060);

(statearr_35066_35084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (1))){
var inst_35044 = init;
var state_35064__$1 = (function (){var statearr_35067 = state_35064;
(statearr_35067[(7)] = inst_35044);

return statearr_35067;
})();
var statearr_35068_35085 = state_35064__$1;
(statearr_35068_35085[(2)] = null);

(statearr_35068_35085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (4))){
var inst_35047 = (state_35064[(8)]);
var inst_35047__$1 = (state_35064[(2)]);
var inst_35048 = (inst_35047__$1 == null);
var state_35064__$1 = (function (){var statearr_35069 = state_35064;
(statearr_35069[(8)] = inst_35047__$1);

return statearr_35069;
})();
if(cljs.core.truth_(inst_35048)){
var statearr_35070_35086 = state_35064__$1;
(statearr_35070_35086[(1)] = (5));

} else {
var statearr_35071_35087 = state_35064__$1;
(statearr_35071_35087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (6))){
var inst_35047 = (state_35064[(8)]);
var inst_35044 = (state_35064[(7)]);
var inst_35051 = (state_35064[(9)]);
var inst_35051__$1 = f.call(null,inst_35044,inst_35047);
var inst_35052 = cljs.core.reduced_QMARK_.call(null,inst_35051__$1);
var state_35064__$1 = (function (){var statearr_35072 = state_35064;
(statearr_35072[(9)] = inst_35051__$1);

return statearr_35072;
})();
if(inst_35052){
var statearr_35073_35088 = state_35064__$1;
(statearr_35073_35088[(1)] = (8));

} else {
var statearr_35074_35089 = state_35064__$1;
(statearr_35074_35089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (3))){
var inst_35062 = (state_35064[(2)]);
var state_35064__$1 = state_35064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35064__$1,inst_35062);
} else {
if((state_val_35065 === (2))){
var state_35064__$1 = state_35064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35064__$1,(4),ch);
} else {
if((state_val_35065 === (9))){
var inst_35051 = (state_35064[(9)]);
var inst_35044 = inst_35051;
var state_35064__$1 = (function (){var statearr_35075 = state_35064;
(statearr_35075[(7)] = inst_35044);

return statearr_35075;
})();
var statearr_35076_35090 = state_35064__$1;
(statearr_35076_35090[(2)] = null);

(statearr_35076_35090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (5))){
var inst_35044 = (state_35064[(7)]);
var state_35064__$1 = state_35064;
var statearr_35077_35091 = state_35064__$1;
(statearr_35077_35091[(2)] = inst_35044);

(statearr_35077_35091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (10))){
var inst_35058 = (state_35064[(2)]);
var state_35064__$1 = state_35064;
var statearr_35078_35092 = state_35064__$1;
(statearr_35078_35092[(2)] = inst_35058);

(statearr_35078_35092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (8))){
var inst_35051 = (state_35064[(9)]);
var inst_35054 = cljs.core.deref.call(null,inst_35051);
var state_35064__$1 = state_35064;
var statearr_35079_35093 = state_35064__$1;
(statearr_35079_35093[(2)] = inst_35054);

(statearr_35079_35093[(1)] = (10));


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
});})(c__34577__auto__))
;
return ((function (switch__34487__auto__,c__34577__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34488__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34488__auto____0 = (function (){
var statearr_35080 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35080[(0)] = cljs$core$async$reduce_$_state_machine__34488__auto__);

(statearr_35080[(1)] = (1));

return statearr_35080;
});
var cljs$core$async$reduce_$_state_machine__34488__auto____1 = (function (state_35064){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_35064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e35081){if((e35081 instanceof Object)){
var ex__34491__auto__ = e35081;
var statearr_35082_35094 = state_35064;
(statearr_35082_35094[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35095 = state_35064;
state_35064 = G__35095;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34488__auto__ = function(state_35064){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34488__auto____1.call(this,state_35064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34488__auto____0;
cljs$core$async$reduce_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34488__auto____1;
return cljs$core$async$reduce_$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto__))
})();
var state__34579__auto__ = (function (){var statearr_35083 = f__34578__auto__.call(null);
(statearr_35083[(6)] = c__34577__auto__);

return statearr_35083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto__))
);

return c__34577__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto__,f__$1){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto__,f__$1){
return (function (state_35101){
var state_val_35102 = (state_35101[(1)]);
if((state_val_35102 === (1))){
var inst_35096 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35101__$1 = state_35101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35101__$1,(2),inst_35096);
} else {
if((state_val_35102 === (2))){
var inst_35098 = (state_35101[(2)]);
var inst_35099 = f__$1.call(null,inst_35098);
var state_35101__$1 = state_35101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35101__$1,inst_35099);
} else {
return null;
}
}
});})(c__34577__auto__,f__$1))
;
return ((function (switch__34487__auto__,c__34577__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34488__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34488__auto____0 = (function (){
var statearr_35103 = [null,null,null,null,null,null,null];
(statearr_35103[(0)] = cljs$core$async$transduce_$_state_machine__34488__auto__);

(statearr_35103[(1)] = (1));

return statearr_35103;
});
var cljs$core$async$transduce_$_state_machine__34488__auto____1 = (function (state_35101){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_35101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e35104){if((e35104 instanceof Object)){
var ex__34491__auto__ = e35104;
var statearr_35105_35107 = state_35101;
(statearr_35105_35107[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35108 = state_35101;
state_35101 = G__35108;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34488__auto__ = function(state_35101){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34488__auto____1.call(this,state_35101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34488__auto____0;
cljs$core$async$transduce_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34488__auto____1;
return cljs$core$async$transduce_$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto__,f__$1))
})();
var state__34579__auto__ = (function (){var statearr_35106 = f__34578__auto__.call(null);
(statearr_35106[(6)] = c__34577__auto__);

return statearr_35106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto__,f__$1))
);

return c__34577__auto__;
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
var G__35110 = arguments.length;
switch (G__35110) {
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
var c__34577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto__){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto__){
return (function (state_35135){
var state_val_35136 = (state_35135[(1)]);
if((state_val_35136 === (7))){
var inst_35117 = (state_35135[(2)]);
var state_35135__$1 = state_35135;
var statearr_35137_35158 = state_35135__$1;
(statearr_35137_35158[(2)] = inst_35117);

(statearr_35137_35158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35136 === (1))){
var inst_35111 = cljs.core.seq.call(null,coll);
var inst_35112 = inst_35111;
var state_35135__$1 = (function (){var statearr_35138 = state_35135;
(statearr_35138[(7)] = inst_35112);

return statearr_35138;
})();
var statearr_35139_35159 = state_35135__$1;
(statearr_35139_35159[(2)] = null);

(statearr_35139_35159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35136 === (4))){
var inst_35112 = (state_35135[(7)]);
var inst_35115 = cljs.core.first.call(null,inst_35112);
var state_35135__$1 = state_35135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35135__$1,(7),ch,inst_35115);
} else {
if((state_val_35136 === (13))){
var inst_35129 = (state_35135[(2)]);
var state_35135__$1 = state_35135;
var statearr_35140_35160 = state_35135__$1;
(statearr_35140_35160[(2)] = inst_35129);

(statearr_35140_35160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35136 === (6))){
var inst_35120 = (state_35135[(2)]);
var state_35135__$1 = state_35135;
if(cljs.core.truth_(inst_35120)){
var statearr_35141_35161 = state_35135__$1;
(statearr_35141_35161[(1)] = (8));

} else {
var statearr_35142_35162 = state_35135__$1;
(statearr_35142_35162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35136 === (3))){
var inst_35133 = (state_35135[(2)]);
var state_35135__$1 = state_35135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35135__$1,inst_35133);
} else {
if((state_val_35136 === (12))){
var state_35135__$1 = state_35135;
var statearr_35143_35163 = state_35135__$1;
(statearr_35143_35163[(2)] = null);

(statearr_35143_35163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35136 === (2))){
var inst_35112 = (state_35135[(7)]);
var state_35135__$1 = state_35135;
if(cljs.core.truth_(inst_35112)){
var statearr_35144_35164 = state_35135__$1;
(statearr_35144_35164[(1)] = (4));

} else {
var statearr_35145_35165 = state_35135__$1;
(statearr_35145_35165[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35136 === (11))){
var inst_35126 = cljs.core.async.close_BANG_.call(null,ch);
var state_35135__$1 = state_35135;
var statearr_35146_35166 = state_35135__$1;
(statearr_35146_35166[(2)] = inst_35126);

(statearr_35146_35166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35136 === (9))){
var state_35135__$1 = state_35135;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35147_35167 = state_35135__$1;
(statearr_35147_35167[(1)] = (11));

} else {
var statearr_35148_35168 = state_35135__$1;
(statearr_35148_35168[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35136 === (5))){
var inst_35112 = (state_35135[(7)]);
var state_35135__$1 = state_35135;
var statearr_35149_35169 = state_35135__$1;
(statearr_35149_35169[(2)] = inst_35112);

(statearr_35149_35169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35136 === (10))){
var inst_35131 = (state_35135[(2)]);
var state_35135__$1 = state_35135;
var statearr_35150_35170 = state_35135__$1;
(statearr_35150_35170[(2)] = inst_35131);

(statearr_35150_35170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35136 === (8))){
var inst_35112 = (state_35135[(7)]);
var inst_35122 = cljs.core.next.call(null,inst_35112);
var inst_35112__$1 = inst_35122;
var state_35135__$1 = (function (){var statearr_35151 = state_35135;
(statearr_35151[(7)] = inst_35112__$1);

return statearr_35151;
})();
var statearr_35152_35171 = state_35135__$1;
(statearr_35152_35171[(2)] = null);

(statearr_35152_35171[(1)] = (2));


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
});})(c__34577__auto__))
;
return ((function (switch__34487__auto__,c__34577__auto__){
return (function() {
var cljs$core$async$state_machine__34488__auto__ = null;
var cljs$core$async$state_machine__34488__auto____0 = (function (){
var statearr_35153 = [null,null,null,null,null,null,null,null];
(statearr_35153[(0)] = cljs$core$async$state_machine__34488__auto__);

(statearr_35153[(1)] = (1));

return statearr_35153;
});
var cljs$core$async$state_machine__34488__auto____1 = (function (state_35135){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_35135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e35154){if((e35154 instanceof Object)){
var ex__34491__auto__ = e35154;
var statearr_35155_35172 = state_35135;
(statearr_35155_35172[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35173 = state_35135;
state_35135 = G__35173;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$state_machine__34488__auto__ = function(state_35135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34488__auto____1.call(this,state_35135);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34488__auto____0;
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34488__auto____1;
return cljs$core$async$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto__))
})();
var state__34579__auto__ = (function (){var statearr_35156 = f__34578__auto__.call(null);
(statearr_35156[(6)] = c__34577__auto__);

return statearr_35156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto__))
);

return c__34577__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async35174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35174 = (function (ch,cs,meta35175){
this.ch = ch;
this.cs = cs;
this.meta35175 = meta35175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35176,meta35175__$1){
var self__ = this;
var _35176__$1 = this;
return (new cljs.core.async.t_cljs$core$async35174(self__.ch,self__.cs,meta35175__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35176){
var self__ = this;
var _35176__$1 = this;
return self__.meta35175;
});})(cs))
;

cljs.core.async.t_cljs$core$async35174.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35174.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35174.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35174.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35174.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35174.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35174.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35175","meta35175",1942454418,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35174";

cljs.core.async.t_cljs$core$async35174.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async35174");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35174 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35174(ch__$1,cs__$1,meta35175){
return (new cljs.core.async.t_cljs$core$async35174(ch__$1,cs__$1,meta35175));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35174(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34577__auto___35396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___35396,cs,m,dchan,dctr,done){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___35396,cs,m,dchan,dctr,done){
return (function (state_35311){
var state_val_35312 = (state_35311[(1)]);
if((state_val_35312 === (7))){
var inst_35307 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
var statearr_35313_35397 = state_35311__$1;
(statearr_35313_35397[(2)] = inst_35307);

(statearr_35313_35397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (20))){
var inst_35210 = (state_35311[(7)]);
var inst_35222 = cljs.core.first.call(null,inst_35210);
var inst_35223 = cljs.core.nth.call(null,inst_35222,(0),null);
var inst_35224 = cljs.core.nth.call(null,inst_35222,(1),null);
var state_35311__$1 = (function (){var statearr_35314 = state_35311;
(statearr_35314[(8)] = inst_35223);

return statearr_35314;
})();
if(cljs.core.truth_(inst_35224)){
var statearr_35315_35398 = state_35311__$1;
(statearr_35315_35398[(1)] = (22));

} else {
var statearr_35316_35399 = state_35311__$1;
(statearr_35316_35399[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (27))){
var inst_35252 = (state_35311[(9)]);
var inst_35179 = (state_35311[(10)]);
var inst_35254 = (state_35311[(11)]);
var inst_35259 = (state_35311[(12)]);
var inst_35259__$1 = cljs.core._nth.call(null,inst_35252,inst_35254);
var inst_35260 = cljs.core.async.put_BANG_.call(null,inst_35259__$1,inst_35179,done);
var state_35311__$1 = (function (){var statearr_35317 = state_35311;
(statearr_35317[(12)] = inst_35259__$1);

return statearr_35317;
})();
if(cljs.core.truth_(inst_35260)){
var statearr_35318_35400 = state_35311__$1;
(statearr_35318_35400[(1)] = (30));

} else {
var statearr_35319_35401 = state_35311__$1;
(statearr_35319_35401[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (1))){
var state_35311__$1 = state_35311;
var statearr_35320_35402 = state_35311__$1;
(statearr_35320_35402[(2)] = null);

(statearr_35320_35402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (24))){
var inst_35210 = (state_35311[(7)]);
var inst_35229 = (state_35311[(2)]);
var inst_35230 = cljs.core.next.call(null,inst_35210);
var inst_35188 = inst_35230;
var inst_35189 = null;
var inst_35190 = (0);
var inst_35191 = (0);
var state_35311__$1 = (function (){var statearr_35321 = state_35311;
(statearr_35321[(13)] = inst_35188);

(statearr_35321[(14)] = inst_35189);

(statearr_35321[(15)] = inst_35190);

(statearr_35321[(16)] = inst_35191);

(statearr_35321[(17)] = inst_35229);

return statearr_35321;
})();
var statearr_35322_35403 = state_35311__$1;
(statearr_35322_35403[(2)] = null);

(statearr_35322_35403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (39))){
var state_35311__$1 = state_35311;
var statearr_35326_35404 = state_35311__$1;
(statearr_35326_35404[(2)] = null);

(statearr_35326_35404[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (4))){
var inst_35179 = (state_35311[(10)]);
var inst_35179__$1 = (state_35311[(2)]);
var inst_35180 = (inst_35179__$1 == null);
var state_35311__$1 = (function (){var statearr_35327 = state_35311;
(statearr_35327[(10)] = inst_35179__$1);

return statearr_35327;
})();
if(cljs.core.truth_(inst_35180)){
var statearr_35328_35405 = state_35311__$1;
(statearr_35328_35405[(1)] = (5));

} else {
var statearr_35329_35406 = state_35311__$1;
(statearr_35329_35406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (15))){
var inst_35188 = (state_35311[(13)]);
var inst_35189 = (state_35311[(14)]);
var inst_35190 = (state_35311[(15)]);
var inst_35191 = (state_35311[(16)]);
var inst_35206 = (state_35311[(2)]);
var inst_35207 = (inst_35191 + (1));
var tmp35323 = inst_35188;
var tmp35324 = inst_35189;
var tmp35325 = inst_35190;
var inst_35188__$1 = tmp35323;
var inst_35189__$1 = tmp35324;
var inst_35190__$1 = tmp35325;
var inst_35191__$1 = inst_35207;
var state_35311__$1 = (function (){var statearr_35330 = state_35311;
(statearr_35330[(13)] = inst_35188__$1);

(statearr_35330[(14)] = inst_35189__$1);

(statearr_35330[(15)] = inst_35190__$1);

(statearr_35330[(16)] = inst_35191__$1);

(statearr_35330[(18)] = inst_35206);

return statearr_35330;
})();
var statearr_35331_35407 = state_35311__$1;
(statearr_35331_35407[(2)] = null);

(statearr_35331_35407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (21))){
var inst_35233 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
var statearr_35335_35408 = state_35311__$1;
(statearr_35335_35408[(2)] = inst_35233);

(statearr_35335_35408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (31))){
var inst_35259 = (state_35311[(12)]);
var inst_35263 = done.call(null,null);
var inst_35264 = cljs.core.async.untap_STAR_.call(null,m,inst_35259);
var state_35311__$1 = (function (){var statearr_35336 = state_35311;
(statearr_35336[(19)] = inst_35263);

return statearr_35336;
})();
var statearr_35337_35409 = state_35311__$1;
(statearr_35337_35409[(2)] = inst_35264);

(statearr_35337_35409[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (32))){
var inst_35252 = (state_35311[(9)]);
var inst_35251 = (state_35311[(20)]);
var inst_35253 = (state_35311[(21)]);
var inst_35254 = (state_35311[(11)]);
var inst_35266 = (state_35311[(2)]);
var inst_35267 = (inst_35254 + (1));
var tmp35332 = inst_35252;
var tmp35333 = inst_35251;
var tmp35334 = inst_35253;
var inst_35251__$1 = tmp35333;
var inst_35252__$1 = tmp35332;
var inst_35253__$1 = tmp35334;
var inst_35254__$1 = inst_35267;
var state_35311__$1 = (function (){var statearr_35338 = state_35311;
(statearr_35338[(9)] = inst_35252__$1);

(statearr_35338[(20)] = inst_35251__$1);

(statearr_35338[(22)] = inst_35266);

(statearr_35338[(21)] = inst_35253__$1);

(statearr_35338[(11)] = inst_35254__$1);

return statearr_35338;
})();
var statearr_35339_35410 = state_35311__$1;
(statearr_35339_35410[(2)] = null);

(statearr_35339_35410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (40))){
var inst_35279 = (state_35311[(23)]);
var inst_35283 = done.call(null,null);
var inst_35284 = cljs.core.async.untap_STAR_.call(null,m,inst_35279);
var state_35311__$1 = (function (){var statearr_35340 = state_35311;
(statearr_35340[(24)] = inst_35283);

return statearr_35340;
})();
var statearr_35341_35411 = state_35311__$1;
(statearr_35341_35411[(2)] = inst_35284);

(statearr_35341_35411[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (33))){
var inst_35270 = (state_35311[(25)]);
var inst_35272 = cljs.core.chunked_seq_QMARK_.call(null,inst_35270);
var state_35311__$1 = state_35311;
if(inst_35272){
var statearr_35342_35412 = state_35311__$1;
(statearr_35342_35412[(1)] = (36));

} else {
var statearr_35343_35413 = state_35311__$1;
(statearr_35343_35413[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (13))){
var inst_35200 = (state_35311[(26)]);
var inst_35203 = cljs.core.async.close_BANG_.call(null,inst_35200);
var state_35311__$1 = state_35311;
var statearr_35344_35414 = state_35311__$1;
(statearr_35344_35414[(2)] = inst_35203);

(statearr_35344_35414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (22))){
var inst_35223 = (state_35311[(8)]);
var inst_35226 = cljs.core.async.close_BANG_.call(null,inst_35223);
var state_35311__$1 = state_35311;
var statearr_35345_35415 = state_35311__$1;
(statearr_35345_35415[(2)] = inst_35226);

(statearr_35345_35415[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (36))){
var inst_35270 = (state_35311[(25)]);
var inst_35274 = cljs.core.chunk_first.call(null,inst_35270);
var inst_35275 = cljs.core.chunk_rest.call(null,inst_35270);
var inst_35276 = cljs.core.count.call(null,inst_35274);
var inst_35251 = inst_35275;
var inst_35252 = inst_35274;
var inst_35253 = inst_35276;
var inst_35254 = (0);
var state_35311__$1 = (function (){var statearr_35346 = state_35311;
(statearr_35346[(9)] = inst_35252);

(statearr_35346[(20)] = inst_35251);

(statearr_35346[(21)] = inst_35253);

(statearr_35346[(11)] = inst_35254);

return statearr_35346;
})();
var statearr_35347_35416 = state_35311__$1;
(statearr_35347_35416[(2)] = null);

(statearr_35347_35416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (41))){
var inst_35270 = (state_35311[(25)]);
var inst_35286 = (state_35311[(2)]);
var inst_35287 = cljs.core.next.call(null,inst_35270);
var inst_35251 = inst_35287;
var inst_35252 = null;
var inst_35253 = (0);
var inst_35254 = (0);
var state_35311__$1 = (function (){var statearr_35348 = state_35311;
(statearr_35348[(9)] = inst_35252);

(statearr_35348[(27)] = inst_35286);

(statearr_35348[(20)] = inst_35251);

(statearr_35348[(21)] = inst_35253);

(statearr_35348[(11)] = inst_35254);

return statearr_35348;
})();
var statearr_35349_35417 = state_35311__$1;
(statearr_35349_35417[(2)] = null);

(statearr_35349_35417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (43))){
var state_35311__$1 = state_35311;
var statearr_35350_35418 = state_35311__$1;
(statearr_35350_35418[(2)] = null);

(statearr_35350_35418[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (29))){
var inst_35295 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
var statearr_35351_35419 = state_35311__$1;
(statearr_35351_35419[(2)] = inst_35295);

(statearr_35351_35419[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (44))){
var inst_35304 = (state_35311[(2)]);
var state_35311__$1 = (function (){var statearr_35352 = state_35311;
(statearr_35352[(28)] = inst_35304);

return statearr_35352;
})();
var statearr_35353_35420 = state_35311__$1;
(statearr_35353_35420[(2)] = null);

(statearr_35353_35420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (6))){
var inst_35243 = (state_35311[(29)]);
var inst_35242 = cljs.core.deref.call(null,cs);
var inst_35243__$1 = cljs.core.keys.call(null,inst_35242);
var inst_35244 = cljs.core.count.call(null,inst_35243__$1);
var inst_35245 = cljs.core.reset_BANG_.call(null,dctr,inst_35244);
var inst_35250 = cljs.core.seq.call(null,inst_35243__$1);
var inst_35251 = inst_35250;
var inst_35252 = null;
var inst_35253 = (0);
var inst_35254 = (0);
var state_35311__$1 = (function (){var statearr_35354 = state_35311;
(statearr_35354[(9)] = inst_35252);

(statearr_35354[(20)] = inst_35251);

(statearr_35354[(30)] = inst_35245);

(statearr_35354[(29)] = inst_35243__$1);

(statearr_35354[(21)] = inst_35253);

(statearr_35354[(11)] = inst_35254);

return statearr_35354;
})();
var statearr_35355_35421 = state_35311__$1;
(statearr_35355_35421[(2)] = null);

(statearr_35355_35421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (28))){
var inst_35251 = (state_35311[(20)]);
var inst_35270 = (state_35311[(25)]);
var inst_35270__$1 = cljs.core.seq.call(null,inst_35251);
var state_35311__$1 = (function (){var statearr_35356 = state_35311;
(statearr_35356[(25)] = inst_35270__$1);

return statearr_35356;
})();
if(inst_35270__$1){
var statearr_35357_35422 = state_35311__$1;
(statearr_35357_35422[(1)] = (33));

} else {
var statearr_35358_35423 = state_35311__$1;
(statearr_35358_35423[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (25))){
var inst_35253 = (state_35311[(21)]);
var inst_35254 = (state_35311[(11)]);
var inst_35256 = (inst_35254 < inst_35253);
var inst_35257 = inst_35256;
var state_35311__$1 = state_35311;
if(cljs.core.truth_(inst_35257)){
var statearr_35359_35424 = state_35311__$1;
(statearr_35359_35424[(1)] = (27));

} else {
var statearr_35360_35425 = state_35311__$1;
(statearr_35360_35425[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (34))){
var state_35311__$1 = state_35311;
var statearr_35361_35426 = state_35311__$1;
(statearr_35361_35426[(2)] = null);

(statearr_35361_35426[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (17))){
var state_35311__$1 = state_35311;
var statearr_35362_35427 = state_35311__$1;
(statearr_35362_35427[(2)] = null);

(statearr_35362_35427[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (3))){
var inst_35309 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35311__$1,inst_35309);
} else {
if((state_val_35312 === (12))){
var inst_35238 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
var statearr_35363_35428 = state_35311__$1;
(statearr_35363_35428[(2)] = inst_35238);

(statearr_35363_35428[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (2))){
var state_35311__$1 = state_35311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35311__$1,(4),ch);
} else {
if((state_val_35312 === (23))){
var state_35311__$1 = state_35311;
var statearr_35364_35429 = state_35311__$1;
(statearr_35364_35429[(2)] = null);

(statearr_35364_35429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (35))){
var inst_35293 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
var statearr_35365_35430 = state_35311__$1;
(statearr_35365_35430[(2)] = inst_35293);

(statearr_35365_35430[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (19))){
var inst_35210 = (state_35311[(7)]);
var inst_35214 = cljs.core.chunk_first.call(null,inst_35210);
var inst_35215 = cljs.core.chunk_rest.call(null,inst_35210);
var inst_35216 = cljs.core.count.call(null,inst_35214);
var inst_35188 = inst_35215;
var inst_35189 = inst_35214;
var inst_35190 = inst_35216;
var inst_35191 = (0);
var state_35311__$1 = (function (){var statearr_35366 = state_35311;
(statearr_35366[(13)] = inst_35188);

(statearr_35366[(14)] = inst_35189);

(statearr_35366[(15)] = inst_35190);

(statearr_35366[(16)] = inst_35191);

return statearr_35366;
})();
var statearr_35367_35431 = state_35311__$1;
(statearr_35367_35431[(2)] = null);

(statearr_35367_35431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (11))){
var inst_35188 = (state_35311[(13)]);
var inst_35210 = (state_35311[(7)]);
var inst_35210__$1 = cljs.core.seq.call(null,inst_35188);
var state_35311__$1 = (function (){var statearr_35368 = state_35311;
(statearr_35368[(7)] = inst_35210__$1);

return statearr_35368;
})();
if(inst_35210__$1){
var statearr_35369_35432 = state_35311__$1;
(statearr_35369_35432[(1)] = (16));

} else {
var statearr_35370_35433 = state_35311__$1;
(statearr_35370_35433[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (9))){
var inst_35240 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
var statearr_35371_35434 = state_35311__$1;
(statearr_35371_35434[(2)] = inst_35240);

(statearr_35371_35434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (5))){
var inst_35186 = cljs.core.deref.call(null,cs);
var inst_35187 = cljs.core.seq.call(null,inst_35186);
var inst_35188 = inst_35187;
var inst_35189 = null;
var inst_35190 = (0);
var inst_35191 = (0);
var state_35311__$1 = (function (){var statearr_35372 = state_35311;
(statearr_35372[(13)] = inst_35188);

(statearr_35372[(14)] = inst_35189);

(statearr_35372[(15)] = inst_35190);

(statearr_35372[(16)] = inst_35191);

return statearr_35372;
})();
var statearr_35373_35435 = state_35311__$1;
(statearr_35373_35435[(2)] = null);

(statearr_35373_35435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (14))){
var state_35311__$1 = state_35311;
var statearr_35374_35436 = state_35311__$1;
(statearr_35374_35436[(2)] = null);

(statearr_35374_35436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (45))){
var inst_35301 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
var statearr_35375_35437 = state_35311__$1;
(statearr_35375_35437[(2)] = inst_35301);

(statearr_35375_35437[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (26))){
var inst_35243 = (state_35311[(29)]);
var inst_35297 = (state_35311[(2)]);
var inst_35298 = cljs.core.seq.call(null,inst_35243);
var state_35311__$1 = (function (){var statearr_35376 = state_35311;
(statearr_35376[(31)] = inst_35297);

return statearr_35376;
})();
if(inst_35298){
var statearr_35377_35438 = state_35311__$1;
(statearr_35377_35438[(1)] = (42));

} else {
var statearr_35378_35439 = state_35311__$1;
(statearr_35378_35439[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (16))){
var inst_35210 = (state_35311[(7)]);
var inst_35212 = cljs.core.chunked_seq_QMARK_.call(null,inst_35210);
var state_35311__$1 = state_35311;
if(inst_35212){
var statearr_35379_35440 = state_35311__$1;
(statearr_35379_35440[(1)] = (19));

} else {
var statearr_35380_35441 = state_35311__$1;
(statearr_35380_35441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (38))){
var inst_35290 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
var statearr_35381_35442 = state_35311__$1;
(statearr_35381_35442[(2)] = inst_35290);

(statearr_35381_35442[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (30))){
var state_35311__$1 = state_35311;
var statearr_35382_35443 = state_35311__$1;
(statearr_35382_35443[(2)] = null);

(statearr_35382_35443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (10))){
var inst_35189 = (state_35311[(14)]);
var inst_35191 = (state_35311[(16)]);
var inst_35199 = cljs.core._nth.call(null,inst_35189,inst_35191);
var inst_35200 = cljs.core.nth.call(null,inst_35199,(0),null);
var inst_35201 = cljs.core.nth.call(null,inst_35199,(1),null);
var state_35311__$1 = (function (){var statearr_35383 = state_35311;
(statearr_35383[(26)] = inst_35200);

return statearr_35383;
})();
if(cljs.core.truth_(inst_35201)){
var statearr_35384_35444 = state_35311__$1;
(statearr_35384_35444[(1)] = (13));

} else {
var statearr_35385_35445 = state_35311__$1;
(statearr_35385_35445[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (18))){
var inst_35236 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
var statearr_35386_35446 = state_35311__$1;
(statearr_35386_35446[(2)] = inst_35236);

(statearr_35386_35446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (42))){
var state_35311__$1 = state_35311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35311__$1,(45),dchan);
} else {
if((state_val_35312 === (37))){
var inst_35270 = (state_35311[(25)]);
var inst_35179 = (state_35311[(10)]);
var inst_35279 = (state_35311[(23)]);
var inst_35279__$1 = cljs.core.first.call(null,inst_35270);
var inst_35280 = cljs.core.async.put_BANG_.call(null,inst_35279__$1,inst_35179,done);
var state_35311__$1 = (function (){var statearr_35387 = state_35311;
(statearr_35387[(23)] = inst_35279__$1);

return statearr_35387;
})();
if(cljs.core.truth_(inst_35280)){
var statearr_35388_35447 = state_35311__$1;
(statearr_35388_35447[(1)] = (39));

} else {
var statearr_35389_35448 = state_35311__$1;
(statearr_35389_35448[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (8))){
var inst_35190 = (state_35311[(15)]);
var inst_35191 = (state_35311[(16)]);
var inst_35193 = (inst_35191 < inst_35190);
var inst_35194 = inst_35193;
var state_35311__$1 = state_35311;
if(cljs.core.truth_(inst_35194)){
var statearr_35390_35449 = state_35311__$1;
(statearr_35390_35449[(1)] = (10));

} else {
var statearr_35391_35450 = state_35311__$1;
(statearr_35391_35450[(1)] = (11));

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
});})(c__34577__auto___35396,cs,m,dchan,dctr,done))
;
return ((function (switch__34487__auto__,c__34577__auto___35396,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34488__auto__ = null;
var cljs$core$async$mult_$_state_machine__34488__auto____0 = (function (){
var statearr_35392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35392[(0)] = cljs$core$async$mult_$_state_machine__34488__auto__);

(statearr_35392[(1)] = (1));

return statearr_35392;
});
var cljs$core$async$mult_$_state_machine__34488__auto____1 = (function (state_35311){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_35311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e35393){if((e35393 instanceof Object)){
var ex__34491__auto__ = e35393;
var statearr_35394_35451 = state_35311;
(statearr_35394_35451[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35452 = state_35311;
state_35311 = G__35452;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34488__auto__ = function(state_35311){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34488__auto____1.call(this,state_35311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34488__auto____0;
cljs$core$async$mult_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34488__auto____1;
return cljs$core$async$mult_$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___35396,cs,m,dchan,dctr,done))
})();
var state__34579__auto__ = (function (){var statearr_35395 = f__34578__auto__.call(null);
(statearr_35395[(6)] = c__34577__auto___35396);

return statearr_35395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___35396,cs,m,dchan,dctr,done))
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
var G__35454 = arguments.length;
switch (G__35454) {
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
var len__31362__auto___35466 = arguments.length;
var i__31363__auto___35467 = (0);
while(true){
if((i__31363__auto___35467 < len__31362__auto___35466)){
args__31369__auto__.push((arguments[i__31363__auto___35467]));

var G__35468 = (i__31363__auto___35467 + (1));
i__31363__auto___35467 = G__35468;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((3) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31370__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35460){
var map__35461 = p__35460;
var map__35461__$1 = ((((!((map__35461 == null)))?((((map__35461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35461):map__35461);
var opts = map__35461__$1;
var statearr_35463_35469 = state;
(statearr_35463_35469[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35461,map__35461__$1,opts){
return (function (val){
var statearr_35464_35470 = state;
(statearr_35464_35470[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35461,map__35461__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35465_35471 = state;
(statearr_35465_35471[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35456){
var G__35457 = cljs.core.first.call(null,seq35456);
var seq35456__$1 = cljs.core.next.call(null,seq35456);
var G__35458 = cljs.core.first.call(null,seq35456__$1);
var seq35456__$2 = cljs.core.next.call(null,seq35456__$1);
var G__35459 = cljs.core.first.call(null,seq35456__$2);
var seq35456__$3 = cljs.core.next.call(null,seq35456__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35457,G__35458,G__35459,seq35456__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35472 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35473){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35473 = meta35473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35474,meta35473__$1){
var self__ = this;
var _35474__$1 = this;
return (new cljs.core.async.t_cljs$core$async35472(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35473__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35474){
var self__ = this;
var _35474__$1 = this;
return self__.meta35473;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35472.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35472.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35472.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35472.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35472.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35472.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35472.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35472.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35472.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35473","meta35473",-1305865679,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35472";

cljs.core.async.t_cljs$core$async35472.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async35472");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35472 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35472(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35473){
return (new cljs.core.async.t_cljs$core$async35472(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35473));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35472(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34577__auto___35636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___35636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___35636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35576){
var state_val_35577 = (state_35576[(1)]);
if((state_val_35577 === (7))){
var inst_35491 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
var statearr_35578_35637 = state_35576__$1;
(statearr_35578_35637[(2)] = inst_35491);

(statearr_35578_35637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (20))){
var inst_35503 = (state_35576[(7)]);
var state_35576__$1 = state_35576;
var statearr_35579_35638 = state_35576__$1;
(statearr_35579_35638[(2)] = inst_35503);

(statearr_35579_35638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (27))){
var state_35576__$1 = state_35576;
var statearr_35580_35639 = state_35576__$1;
(statearr_35580_35639[(2)] = null);

(statearr_35580_35639[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (1))){
var inst_35478 = (state_35576[(8)]);
var inst_35478__$1 = calc_state.call(null);
var inst_35480 = (inst_35478__$1 == null);
var inst_35481 = cljs.core.not.call(null,inst_35480);
var state_35576__$1 = (function (){var statearr_35581 = state_35576;
(statearr_35581[(8)] = inst_35478__$1);

return statearr_35581;
})();
if(inst_35481){
var statearr_35582_35640 = state_35576__$1;
(statearr_35582_35640[(1)] = (2));

} else {
var statearr_35583_35641 = state_35576__$1;
(statearr_35583_35641[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (24))){
var inst_35536 = (state_35576[(9)]);
var inst_35527 = (state_35576[(10)]);
var inst_35550 = (state_35576[(11)]);
var inst_35550__$1 = inst_35527.call(null,inst_35536);
var state_35576__$1 = (function (){var statearr_35584 = state_35576;
(statearr_35584[(11)] = inst_35550__$1);

return statearr_35584;
})();
if(cljs.core.truth_(inst_35550__$1)){
var statearr_35585_35642 = state_35576__$1;
(statearr_35585_35642[(1)] = (29));

} else {
var statearr_35586_35643 = state_35576__$1;
(statearr_35586_35643[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (4))){
var inst_35494 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
if(cljs.core.truth_(inst_35494)){
var statearr_35587_35644 = state_35576__$1;
(statearr_35587_35644[(1)] = (8));

} else {
var statearr_35588_35645 = state_35576__$1;
(statearr_35588_35645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (15))){
var inst_35521 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
if(cljs.core.truth_(inst_35521)){
var statearr_35589_35646 = state_35576__$1;
(statearr_35589_35646[(1)] = (19));

} else {
var statearr_35590_35647 = state_35576__$1;
(statearr_35590_35647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (21))){
var inst_35526 = (state_35576[(12)]);
var inst_35526__$1 = (state_35576[(2)]);
var inst_35527 = cljs.core.get.call(null,inst_35526__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35528 = cljs.core.get.call(null,inst_35526__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35529 = cljs.core.get.call(null,inst_35526__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35576__$1 = (function (){var statearr_35591 = state_35576;
(statearr_35591[(12)] = inst_35526__$1);

(statearr_35591[(13)] = inst_35528);

(statearr_35591[(10)] = inst_35527);

return statearr_35591;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35576__$1,(22),inst_35529);
} else {
if((state_val_35577 === (31))){
var inst_35558 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
if(cljs.core.truth_(inst_35558)){
var statearr_35592_35648 = state_35576__$1;
(statearr_35592_35648[(1)] = (32));

} else {
var statearr_35593_35649 = state_35576__$1;
(statearr_35593_35649[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (32))){
var inst_35535 = (state_35576[(14)]);
var state_35576__$1 = state_35576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35576__$1,(35),out,inst_35535);
} else {
if((state_val_35577 === (33))){
var inst_35526 = (state_35576[(12)]);
var inst_35503 = inst_35526;
var state_35576__$1 = (function (){var statearr_35594 = state_35576;
(statearr_35594[(7)] = inst_35503);

return statearr_35594;
})();
var statearr_35595_35650 = state_35576__$1;
(statearr_35595_35650[(2)] = null);

(statearr_35595_35650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (13))){
var inst_35503 = (state_35576[(7)]);
var inst_35510 = inst_35503.cljs$lang$protocol_mask$partition0$;
var inst_35511 = (inst_35510 & (64));
var inst_35512 = inst_35503.cljs$core$ISeq$;
var inst_35513 = (cljs.core.PROTOCOL_SENTINEL === inst_35512);
var inst_35514 = (inst_35511) || (inst_35513);
var state_35576__$1 = state_35576;
if(cljs.core.truth_(inst_35514)){
var statearr_35596_35651 = state_35576__$1;
(statearr_35596_35651[(1)] = (16));

} else {
var statearr_35597_35652 = state_35576__$1;
(statearr_35597_35652[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (22))){
var inst_35536 = (state_35576[(9)]);
var inst_35535 = (state_35576[(14)]);
var inst_35534 = (state_35576[(2)]);
var inst_35535__$1 = cljs.core.nth.call(null,inst_35534,(0),null);
var inst_35536__$1 = cljs.core.nth.call(null,inst_35534,(1),null);
var inst_35537 = (inst_35535__$1 == null);
var inst_35538 = cljs.core._EQ_.call(null,inst_35536__$1,change);
var inst_35539 = (inst_35537) || (inst_35538);
var state_35576__$1 = (function (){var statearr_35598 = state_35576;
(statearr_35598[(9)] = inst_35536__$1);

(statearr_35598[(14)] = inst_35535__$1);

return statearr_35598;
})();
if(cljs.core.truth_(inst_35539)){
var statearr_35599_35653 = state_35576__$1;
(statearr_35599_35653[(1)] = (23));

} else {
var statearr_35600_35654 = state_35576__$1;
(statearr_35600_35654[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (36))){
var inst_35526 = (state_35576[(12)]);
var inst_35503 = inst_35526;
var state_35576__$1 = (function (){var statearr_35601 = state_35576;
(statearr_35601[(7)] = inst_35503);

return statearr_35601;
})();
var statearr_35602_35655 = state_35576__$1;
(statearr_35602_35655[(2)] = null);

(statearr_35602_35655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (29))){
var inst_35550 = (state_35576[(11)]);
var state_35576__$1 = state_35576;
var statearr_35603_35656 = state_35576__$1;
(statearr_35603_35656[(2)] = inst_35550);

(statearr_35603_35656[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (6))){
var state_35576__$1 = state_35576;
var statearr_35604_35657 = state_35576__$1;
(statearr_35604_35657[(2)] = false);

(statearr_35604_35657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (28))){
var inst_35546 = (state_35576[(2)]);
var inst_35547 = calc_state.call(null);
var inst_35503 = inst_35547;
var state_35576__$1 = (function (){var statearr_35605 = state_35576;
(statearr_35605[(7)] = inst_35503);

(statearr_35605[(15)] = inst_35546);

return statearr_35605;
})();
var statearr_35606_35658 = state_35576__$1;
(statearr_35606_35658[(2)] = null);

(statearr_35606_35658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (25))){
var inst_35572 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
var statearr_35607_35659 = state_35576__$1;
(statearr_35607_35659[(2)] = inst_35572);

(statearr_35607_35659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (34))){
var inst_35570 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
var statearr_35608_35660 = state_35576__$1;
(statearr_35608_35660[(2)] = inst_35570);

(statearr_35608_35660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (17))){
var state_35576__$1 = state_35576;
var statearr_35609_35661 = state_35576__$1;
(statearr_35609_35661[(2)] = false);

(statearr_35609_35661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (3))){
var state_35576__$1 = state_35576;
var statearr_35610_35662 = state_35576__$1;
(statearr_35610_35662[(2)] = false);

(statearr_35610_35662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (12))){
var inst_35574 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35576__$1,inst_35574);
} else {
if((state_val_35577 === (2))){
var inst_35478 = (state_35576[(8)]);
var inst_35483 = inst_35478.cljs$lang$protocol_mask$partition0$;
var inst_35484 = (inst_35483 & (64));
var inst_35485 = inst_35478.cljs$core$ISeq$;
var inst_35486 = (cljs.core.PROTOCOL_SENTINEL === inst_35485);
var inst_35487 = (inst_35484) || (inst_35486);
var state_35576__$1 = state_35576;
if(cljs.core.truth_(inst_35487)){
var statearr_35611_35663 = state_35576__$1;
(statearr_35611_35663[(1)] = (5));

} else {
var statearr_35612_35664 = state_35576__$1;
(statearr_35612_35664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (23))){
var inst_35535 = (state_35576[(14)]);
var inst_35541 = (inst_35535 == null);
var state_35576__$1 = state_35576;
if(cljs.core.truth_(inst_35541)){
var statearr_35613_35665 = state_35576__$1;
(statearr_35613_35665[(1)] = (26));

} else {
var statearr_35614_35666 = state_35576__$1;
(statearr_35614_35666[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (35))){
var inst_35561 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
if(cljs.core.truth_(inst_35561)){
var statearr_35615_35667 = state_35576__$1;
(statearr_35615_35667[(1)] = (36));

} else {
var statearr_35616_35668 = state_35576__$1;
(statearr_35616_35668[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (19))){
var inst_35503 = (state_35576[(7)]);
var inst_35523 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35503);
var state_35576__$1 = state_35576;
var statearr_35617_35669 = state_35576__$1;
(statearr_35617_35669[(2)] = inst_35523);

(statearr_35617_35669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (11))){
var inst_35503 = (state_35576[(7)]);
var inst_35507 = (inst_35503 == null);
var inst_35508 = cljs.core.not.call(null,inst_35507);
var state_35576__$1 = state_35576;
if(inst_35508){
var statearr_35618_35670 = state_35576__$1;
(statearr_35618_35670[(1)] = (13));

} else {
var statearr_35619_35671 = state_35576__$1;
(statearr_35619_35671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (9))){
var inst_35478 = (state_35576[(8)]);
var state_35576__$1 = state_35576;
var statearr_35620_35672 = state_35576__$1;
(statearr_35620_35672[(2)] = inst_35478);

(statearr_35620_35672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (5))){
var state_35576__$1 = state_35576;
var statearr_35621_35673 = state_35576__$1;
(statearr_35621_35673[(2)] = true);

(statearr_35621_35673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (14))){
var state_35576__$1 = state_35576;
var statearr_35622_35674 = state_35576__$1;
(statearr_35622_35674[(2)] = false);

(statearr_35622_35674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (26))){
var inst_35536 = (state_35576[(9)]);
var inst_35543 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35536);
var state_35576__$1 = state_35576;
var statearr_35623_35675 = state_35576__$1;
(statearr_35623_35675[(2)] = inst_35543);

(statearr_35623_35675[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (16))){
var state_35576__$1 = state_35576;
var statearr_35624_35676 = state_35576__$1;
(statearr_35624_35676[(2)] = true);

(statearr_35624_35676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (38))){
var inst_35566 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
var statearr_35625_35677 = state_35576__$1;
(statearr_35625_35677[(2)] = inst_35566);

(statearr_35625_35677[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (30))){
var inst_35536 = (state_35576[(9)]);
var inst_35528 = (state_35576[(13)]);
var inst_35527 = (state_35576[(10)]);
var inst_35553 = cljs.core.empty_QMARK_.call(null,inst_35527);
var inst_35554 = inst_35528.call(null,inst_35536);
var inst_35555 = cljs.core.not.call(null,inst_35554);
var inst_35556 = (inst_35553) && (inst_35555);
var state_35576__$1 = state_35576;
var statearr_35626_35678 = state_35576__$1;
(statearr_35626_35678[(2)] = inst_35556);

(statearr_35626_35678[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (10))){
var inst_35478 = (state_35576[(8)]);
var inst_35499 = (state_35576[(2)]);
var inst_35500 = cljs.core.get.call(null,inst_35499,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35501 = cljs.core.get.call(null,inst_35499,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35502 = cljs.core.get.call(null,inst_35499,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35503 = inst_35478;
var state_35576__$1 = (function (){var statearr_35627 = state_35576;
(statearr_35627[(7)] = inst_35503);

(statearr_35627[(16)] = inst_35500);

(statearr_35627[(17)] = inst_35501);

(statearr_35627[(18)] = inst_35502);

return statearr_35627;
})();
var statearr_35628_35679 = state_35576__$1;
(statearr_35628_35679[(2)] = null);

(statearr_35628_35679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (18))){
var inst_35518 = (state_35576[(2)]);
var state_35576__$1 = state_35576;
var statearr_35629_35680 = state_35576__$1;
(statearr_35629_35680[(2)] = inst_35518);

(statearr_35629_35680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (37))){
var state_35576__$1 = state_35576;
var statearr_35630_35681 = state_35576__$1;
(statearr_35630_35681[(2)] = null);

(statearr_35630_35681[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35577 === (8))){
var inst_35478 = (state_35576[(8)]);
var inst_35496 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35478);
var state_35576__$1 = state_35576;
var statearr_35631_35682 = state_35576__$1;
(statearr_35631_35682[(2)] = inst_35496);

(statearr_35631_35682[(1)] = (10));


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
});})(c__34577__auto___35636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34487__auto__,c__34577__auto___35636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34488__auto__ = null;
var cljs$core$async$mix_$_state_machine__34488__auto____0 = (function (){
var statearr_35632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35632[(0)] = cljs$core$async$mix_$_state_machine__34488__auto__);

(statearr_35632[(1)] = (1));

return statearr_35632;
});
var cljs$core$async$mix_$_state_machine__34488__auto____1 = (function (state_35576){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_35576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e35633){if((e35633 instanceof Object)){
var ex__34491__auto__ = e35633;
var statearr_35634_35683 = state_35576;
(statearr_35634_35683[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35684 = state_35576;
state_35576 = G__35684;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34488__auto__ = function(state_35576){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34488__auto____1.call(this,state_35576);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34488__auto____0;
cljs$core$async$mix_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34488__auto____1;
return cljs$core$async$mix_$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___35636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34579__auto__ = (function (){var statearr_35635 = f__34578__auto__.call(null);
(statearr_35635[(6)] = c__34577__auto___35636);

return statearr_35635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___35636,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35686 = arguments.length;
switch (G__35686) {
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
var G__35690 = arguments.length;
switch (G__35690) {
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
return (function (p1__35688_SHARP_){
if(cljs.core.truth_(p1__35688_SHARP_.call(null,topic))){
return p1__35688_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35688_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30083__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35691 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35691 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35692){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35692 = meta35692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35693,meta35692__$1){
var self__ = this;
var _35693__$1 = this;
return (new cljs.core.async.t_cljs$core$async35691(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35692__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35693){
var self__ = this;
var _35693__$1 = this;
return self__.meta35692;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35691.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35691.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35691.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35691.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35691.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35691.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35691.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35691.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35692","meta35692",-15714286,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35691";

cljs.core.async.t_cljs$core$async35691.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async35691");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35691 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35691(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35692){
return (new cljs.core.async.t_cljs$core$async35691(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35692));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35691(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34577__auto___35811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___35811,mults,ensure_mult,p){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___35811,mults,ensure_mult,p){
return (function (state_35765){
var state_val_35766 = (state_35765[(1)]);
if((state_val_35766 === (7))){
var inst_35761 = (state_35765[(2)]);
var state_35765__$1 = state_35765;
var statearr_35767_35812 = state_35765__$1;
(statearr_35767_35812[(2)] = inst_35761);

(statearr_35767_35812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (20))){
var state_35765__$1 = state_35765;
var statearr_35768_35813 = state_35765__$1;
(statearr_35768_35813[(2)] = null);

(statearr_35768_35813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (1))){
var state_35765__$1 = state_35765;
var statearr_35769_35814 = state_35765__$1;
(statearr_35769_35814[(2)] = null);

(statearr_35769_35814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (24))){
var inst_35744 = (state_35765[(7)]);
var inst_35753 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35744);
var state_35765__$1 = state_35765;
var statearr_35770_35815 = state_35765__$1;
(statearr_35770_35815[(2)] = inst_35753);

(statearr_35770_35815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (4))){
var inst_35696 = (state_35765[(8)]);
var inst_35696__$1 = (state_35765[(2)]);
var inst_35697 = (inst_35696__$1 == null);
var state_35765__$1 = (function (){var statearr_35771 = state_35765;
(statearr_35771[(8)] = inst_35696__$1);

return statearr_35771;
})();
if(cljs.core.truth_(inst_35697)){
var statearr_35772_35816 = state_35765__$1;
(statearr_35772_35816[(1)] = (5));

} else {
var statearr_35773_35817 = state_35765__$1;
(statearr_35773_35817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (15))){
var inst_35738 = (state_35765[(2)]);
var state_35765__$1 = state_35765;
var statearr_35774_35818 = state_35765__$1;
(statearr_35774_35818[(2)] = inst_35738);

(statearr_35774_35818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (21))){
var inst_35758 = (state_35765[(2)]);
var state_35765__$1 = (function (){var statearr_35775 = state_35765;
(statearr_35775[(9)] = inst_35758);

return statearr_35775;
})();
var statearr_35776_35819 = state_35765__$1;
(statearr_35776_35819[(2)] = null);

(statearr_35776_35819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (13))){
var inst_35720 = (state_35765[(10)]);
var inst_35722 = cljs.core.chunked_seq_QMARK_.call(null,inst_35720);
var state_35765__$1 = state_35765;
if(inst_35722){
var statearr_35777_35820 = state_35765__$1;
(statearr_35777_35820[(1)] = (16));

} else {
var statearr_35778_35821 = state_35765__$1;
(statearr_35778_35821[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (22))){
var inst_35750 = (state_35765[(2)]);
var state_35765__$1 = state_35765;
if(cljs.core.truth_(inst_35750)){
var statearr_35779_35822 = state_35765__$1;
(statearr_35779_35822[(1)] = (23));

} else {
var statearr_35780_35823 = state_35765__$1;
(statearr_35780_35823[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (6))){
var inst_35744 = (state_35765[(7)]);
var inst_35696 = (state_35765[(8)]);
var inst_35746 = (state_35765[(11)]);
var inst_35744__$1 = topic_fn.call(null,inst_35696);
var inst_35745 = cljs.core.deref.call(null,mults);
var inst_35746__$1 = cljs.core.get.call(null,inst_35745,inst_35744__$1);
var state_35765__$1 = (function (){var statearr_35781 = state_35765;
(statearr_35781[(7)] = inst_35744__$1);

(statearr_35781[(11)] = inst_35746__$1);

return statearr_35781;
})();
if(cljs.core.truth_(inst_35746__$1)){
var statearr_35782_35824 = state_35765__$1;
(statearr_35782_35824[(1)] = (19));

} else {
var statearr_35783_35825 = state_35765__$1;
(statearr_35783_35825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (25))){
var inst_35755 = (state_35765[(2)]);
var state_35765__$1 = state_35765;
var statearr_35784_35826 = state_35765__$1;
(statearr_35784_35826[(2)] = inst_35755);

(statearr_35784_35826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (17))){
var inst_35720 = (state_35765[(10)]);
var inst_35729 = cljs.core.first.call(null,inst_35720);
var inst_35730 = cljs.core.async.muxch_STAR_.call(null,inst_35729);
var inst_35731 = cljs.core.async.close_BANG_.call(null,inst_35730);
var inst_35732 = cljs.core.next.call(null,inst_35720);
var inst_35706 = inst_35732;
var inst_35707 = null;
var inst_35708 = (0);
var inst_35709 = (0);
var state_35765__$1 = (function (){var statearr_35785 = state_35765;
(statearr_35785[(12)] = inst_35706);

(statearr_35785[(13)] = inst_35707);

(statearr_35785[(14)] = inst_35731);

(statearr_35785[(15)] = inst_35709);

(statearr_35785[(16)] = inst_35708);

return statearr_35785;
})();
var statearr_35786_35827 = state_35765__$1;
(statearr_35786_35827[(2)] = null);

(statearr_35786_35827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (3))){
var inst_35763 = (state_35765[(2)]);
var state_35765__$1 = state_35765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35765__$1,inst_35763);
} else {
if((state_val_35766 === (12))){
var inst_35740 = (state_35765[(2)]);
var state_35765__$1 = state_35765;
var statearr_35787_35828 = state_35765__$1;
(statearr_35787_35828[(2)] = inst_35740);

(statearr_35787_35828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (2))){
var state_35765__$1 = state_35765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35765__$1,(4),ch);
} else {
if((state_val_35766 === (23))){
var state_35765__$1 = state_35765;
var statearr_35788_35829 = state_35765__$1;
(statearr_35788_35829[(2)] = null);

(statearr_35788_35829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (19))){
var inst_35696 = (state_35765[(8)]);
var inst_35746 = (state_35765[(11)]);
var inst_35748 = cljs.core.async.muxch_STAR_.call(null,inst_35746);
var state_35765__$1 = state_35765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35765__$1,(22),inst_35748,inst_35696);
} else {
if((state_val_35766 === (11))){
var inst_35706 = (state_35765[(12)]);
var inst_35720 = (state_35765[(10)]);
var inst_35720__$1 = cljs.core.seq.call(null,inst_35706);
var state_35765__$1 = (function (){var statearr_35789 = state_35765;
(statearr_35789[(10)] = inst_35720__$1);

return statearr_35789;
})();
if(inst_35720__$1){
var statearr_35790_35830 = state_35765__$1;
(statearr_35790_35830[(1)] = (13));

} else {
var statearr_35791_35831 = state_35765__$1;
(statearr_35791_35831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (9))){
var inst_35742 = (state_35765[(2)]);
var state_35765__$1 = state_35765;
var statearr_35792_35832 = state_35765__$1;
(statearr_35792_35832[(2)] = inst_35742);

(statearr_35792_35832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (5))){
var inst_35703 = cljs.core.deref.call(null,mults);
var inst_35704 = cljs.core.vals.call(null,inst_35703);
var inst_35705 = cljs.core.seq.call(null,inst_35704);
var inst_35706 = inst_35705;
var inst_35707 = null;
var inst_35708 = (0);
var inst_35709 = (0);
var state_35765__$1 = (function (){var statearr_35793 = state_35765;
(statearr_35793[(12)] = inst_35706);

(statearr_35793[(13)] = inst_35707);

(statearr_35793[(15)] = inst_35709);

(statearr_35793[(16)] = inst_35708);

return statearr_35793;
})();
var statearr_35794_35833 = state_35765__$1;
(statearr_35794_35833[(2)] = null);

(statearr_35794_35833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (14))){
var state_35765__$1 = state_35765;
var statearr_35798_35834 = state_35765__$1;
(statearr_35798_35834[(2)] = null);

(statearr_35798_35834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (16))){
var inst_35720 = (state_35765[(10)]);
var inst_35724 = cljs.core.chunk_first.call(null,inst_35720);
var inst_35725 = cljs.core.chunk_rest.call(null,inst_35720);
var inst_35726 = cljs.core.count.call(null,inst_35724);
var inst_35706 = inst_35725;
var inst_35707 = inst_35724;
var inst_35708 = inst_35726;
var inst_35709 = (0);
var state_35765__$1 = (function (){var statearr_35799 = state_35765;
(statearr_35799[(12)] = inst_35706);

(statearr_35799[(13)] = inst_35707);

(statearr_35799[(15)] = inst_35709);

(statearr_35799[(16)] = inst_35708);

return statearr_35799;
})();
var statearr_35800_35835 = state_35765__$1;
(statearr_35800_35835[(2)] = null);

(statearr_35800_35835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (10))){
var inst_35706 = (state_35765[(12)]);
var inst_35707 = (state_35765[(13)]);
var inst_35709 = (state_35765[(15)]);
var inst_35708 = (state_35765[(16)]);
var inst_35714 = cljs.core._nth.call(null,inst_35707,inst_35709);
var inst_35715 = cljs.core.async.muxch_STAR_.call(null,inst_35714);
var inst_35716 = cljs.core.async.close_BANG_.call(null,inst_35715);
var inst_35717 = (inst_35709 + (1));
var tmp35795 = inst_35706;
var tmp35796 = inst_35707;
var tmp35797 = inst_35708;
var inst_35706__$1 = tmp35795;
var inst_35707__$1 = tmp35796;
var inst_35708__$1 = tmp35797;
var inst_35709__$1 = inst_35717;
var state_35765__$1 = (function (){var statearr_35801 = state_35765;
(statearr_35801[(12)] = inst_35706__$1);

(statearr_35801[(13)] = inst_35707__$1);

(statearr_35801[(17)] = inst_35716);

(statearr_35801[(15)] = inst_35709__$1);

(statearr_35801[(16)] = inst_35708__$1);

return statearr_35801;
})();
var statearr_35802_35836 = state_35765__$1;
(statearr_35802_35836[(2)] = null);

(statearr_35802_35836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (18))){
var inst_35735 = (state_35765[(2)]);
var state_35765__$1 = state_35765;
var statearr_35803_35837 = state_35765__$1;
(statearr_35803_35837[(2)] = inst_35735);

(statearr_35803_35837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35766 === (8))){
var inst_35709 = (state_35765[(15)]);
var inst_35708 = (state_35765[(16)]);
var inst_35711 = (inst_35709 < inst_35708);
var inst_35712 = inst_35711;
var state_35765__$1 = state_35765;
if(cljs.core.truth_(inst_35712)){
var statearr_35804_35838 = state_35765__$1;
(statearr_35804_35838[(1)] = (10));

} else {
var statearr_35805_35839 = state_35765__$1;
(statearr_35805_35839[(1)] = (11));

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
});})(c__34577__auto___35811,mults,ensure_mult,p))
;
return ((function (switch__34487__auto__,c__34577__auto___35811,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34488__auto__ = null;
var cljs$core$async$state_machine__34488__auto____0 = (function (){
var statearr_35806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35806[(0)] = cljs$core$async$state_machine__34488__auto__);

(statearr_35806[(1)] = (1));

return statearr_35806;
});
var cljs$core$async$state_machine__34488__auto____1 = (function (state_35765){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_35765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e35807){if((e35807 instanceof Object)){
var ex__34491__auto__ = e35807;
var statearr_35808_35840 = state_35765;
(statearr_35808_35840[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35841 = state_35765;
state_35765 = G__35841;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$state_machine__34488__auto__ = function(state_35765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34488__auto____1.call(this,state_35765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34488__auto____0;
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34488__auto____1;
return cljs$core$async$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___35811,mults,ensure_mult,p))
})();
var state__34579__auto__ = (function (){var statearr_35809 = f__34578__auto__.call(null);
(statearr_35809[(6)] = c__34577__auto___35811);

return statearr_35809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___35811,mults,ensure_mult,p))
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
var G__35843 = arguments.length;
switch (G__35843) {
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
var G__35846 = arguments.length;
switch (G__35846) {
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
var G__35849 = arguments.length;
switch (G__35849) {
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
var c__34577__auto___35916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___35916,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___35916,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35888){
var state_val_35889 = (state_35888[(1)]);
if((state_val_35889 === (7))){
var state_35888__$1 = state_35888;
var statearr_35890_35917 = state_35888__$1;
(statearr_35890_35917[(2)] = null);

(statearr_35890_35917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (1))){
var state_35888__$1 = state_35888;
var statearr_35891_35918 = state_35888__$1;
(statearr_35891_35918[(2)] = null);

(statearr_35891_35918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (4))){
var inst_35852 = (state_35888[(7)]);
var inst_35854 = (inst_35852 < cnt);
var state_35888__$1 = state_35888;
if(cljs.core.truth_(inst_35854)){
var statearr_35892_35919 = state_35888__$1;
(statearr_35892_35919[(1)] = (6));

} else {
var statearr_35893_35920 = state_35888__$1;
(statearr_35893_35920[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (15))){
var inst_35884 = (state_35888[(2)]);
var state_35888__$1 = state_35888;
var statearr_35894_35921 = state_35888__$1;
(statearr_35894_35921[(2)] = inst_35884);

(statearr_35894_35921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (13))){
var inst_35877 = cljs.core.async.close_BANG_.call(null,out);
var state_35888__$1 = state_35888;
var statearr_35895_35922 = state_35888__$1;
(statearr_35895_35922[(2)] = inst_35877);

(statearr_35895_35922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (6))){
var state_35888__$1 = state_35888;
var statearr_35896_35923 = state_35888__$1;
(statearr_35896_35923[(2)] = null);

(statearr_35896_35923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (3))){
var inst_35886 = (state_35888[(2)]);
var state_35888__$1 = state_35888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35888__$1,inst_35886);
} else {
if((state_val_35889 === (12))){
var inst_35874 = (state_35888[(8)]);
var inst_35874__$1 = (state_35888[(2)]);
var inst_35875 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35874__$1);
var state_35888__$1 = (function (){var statearr_35897 = state_35888;
(statearr_35897[(8)] = inst_35874__$1);

return statearr_35897;
})();
if(cljs.core.truth_(inst_35875)){
var statearr_35898_35924 = state_35888__$1;
(statearr_35898_35924[(1)] = (13));

} else {
var statearr_35899_35925 = state_35888__$1;
(statearr_35899_35925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (2))){
var inst_35851 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35852 = (0);
var state_35888__$1 = (function (){var statearr_35900 = state_35888;
(statearr_35900[(9)] = inst_35851);

(statearr_35900[(7)] = inst_35852);

return statearr_35900;
})();
var statearr_35901_35926 = state_35888__$1;
(statearr_35901_35926[(2)] = null);

(statearr_35901_35926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (11))){
var inst_35852 = (state_35888[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35888,(10),Object,null,(9));
var inst_35861 = chs__$1.call(null,inst_35852);
var inst_35862 = done.call(null,inst_35852);
var inst_35863 = cljs.core.async.take_BANG_.call(null,inst_35861,inst_35862);
var state_35888__$1 = state_35888;
var statearr_35902_35927 = state_35888__$1;
(statearr_35902_35927[(2)] = inst_35863);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35888__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (9))){
var inst_35852 = (state_35888[(7)]);
var inst_35865 = (state_35888[(2)]);
var inst_35866 = (inst_35852 + (1));
var inst_35852__$1 = inst_35866;
var state_35888__$1 = (function (){var statearr_35903 = state_35888;
(statearr_35903[(10)] = inst_35865);

(statearr_35903[(7)] = inst_35852__$1);

return statearr_35903;
})();
var statearr_35904_35928 = state_35888__$1;
(statearr_35904_35928[(2)] = null);

(statearr_35904_35928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (5))){
var inst_35872 = (state_35888[(2)]);
var state_35888__$1 = (function (){var statearr_35905 = state_35888;
(statearr_35905[(11)] = inst_35872);

return statearr_35905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35888__$1,(12),dchan);
} else {
if((state_val_35889 === (14))){
var inst_35874 = (state_35888[(8)]);
var inst_35879 = cljs.core.apply.call(null,f,inst_35874);
var state_35888__$1 = state_35888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35888__$1,(16),out,inst_35879);
} else {
if((state_val_35889 === (16))){
var inst_35881 = (state_35888[(2)]);
var state_35888__$1 = (function (){var statearr_35906 = state_35888;
(statearr_35906[(12)] = inst_35881);

return statearr_35906;
})();
var statearr_35907_35929 = state_35888__$1;
(statearr_35907_35929[(2)] = null);

(statearr_35907_35929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (10))){
var inst_35856 = (state_35888[(2)]);
var inst_35857 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35888__$1 = (function (){var statearr_35908 = state_35888;
(statearr_35908[(13)] = inst_35856);

return statearr_35908;
})();
var statearr_35909_35930 = state_35888__$1;
(statearr_35909_35930[(2)] = inst_35857);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35888__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (8))){
var inst_35870 = (state_35888[(2)]);
var state_35888__$1 = state_35888;
var statearr_35910_35931 = state_35888__$1;
(statearr_35910_35931[(2)] = inst_35870);

(statearr_35910_35931[(1)] = (5));


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
});})(c__34577__auto___35916,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34487__auto__,c__34577__auto___35916,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34488__auto__ = null;
var cljs$core$async$state_machine__34488__auto____0 = (function (){
var statearr_35911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35911[(0)] = cljs$core$async$state_machine__34488__auto__);

(statearr_35911[(1)] = (1));

return statearr_35911;
});
var cljs$core$async$state_machine__34488__auto____1 = (function (state_35888){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_35888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e35912){if((e35912 instanceof Object)){
var ex__34491__auto__ = e35912;
var statearr_35913_35932 = state_35888;
(statearr_35913_35932[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35933 = state_35888;
state_35888 = G__35933;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$state_machine__34488__auto__ = function(state_35888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34488__auto____1.call(this,state_35888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34488__auto____0;
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34488__auto____1;
return cljs$core$async$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___35916,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34579__auto__ = (function (){var statearr_35914 = f__34578__auto__.call(null);
(statearr_35914[(6)] = c__34577__auto___35916);

return statearr_35914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___35916,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35936 = arguments.length;
switch (G__35936) {
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
var c__34577__auto___35990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___35990,out){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___35990,out){
return (function (state_35968){
var state_val_35969 = (state_35968[(1)]);
if((state_val_35969 === (7))){
var inst_35948 = (state_35968[(7)]);
var inst_35947 = (state_35968[(8)]);
var inst_35947__$1 = (state_35968[(2)]);
var inst_35948__$1 = cljs.core.nth.call(null,inst_35947__$1,(0),null);
var inst_35949 = cljs.core.nth.call(null,inst_35947__$1,(1),null);
var inst_35950 = (inst_35948__$1 == null);
var state_35968__$1 = (function (){var statearr_35970 = state_35968;
(statearr_35970[(7)] = inst_35948__$1);

(statearr_35970[(8)] = inst_35947__$1);

(statearr_35970[(9)] = inst_35949);

return statearr_35970;
})();
if(cljs.core.truth_(inst_35950)){
var statearr_35971_35991 = state_35968__$1;
(statearr_35971_35991[(1)] = (8));

} else {
var statearr_35972_35992 = state_35968__$1;
(statearr_35972_35992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (1))){
var inst_35937 = cljs.core.vec.call(null,chs);
var inst_35938 = inst_35937;
var state_35968__$1 = (function (){var statearr_35973 = state_35968;
(statearr_35973[(10)] = inst_35938);

return statearr_35973;
})();
var statearr_35974_35993 = state_35968__$1;
(statearr_35974_35993[(2)] = null);

(statearr_35974_35993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (4))){
var inst_35938 = (state_35968[(10)]);
var state_35968__$1 = state_35968;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35968__$1,(7),inst_35938);
} else {
if((state_val_35969 === (6))){
var inst_35964 = (state_35968[(2)]);
var state_35968__$1 = state_35968;
var statearr_35975_35994 = state_35968__$1;
(statearr_35975_35994[(2)] = inst_35964);

(statearr_35975_35994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (3))){
var inst_35966 = (state_35968[(2)]);
var state_35968__$1 = state_35968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35968__$1,inst_35966);
} else {
if((state_val_35969 === (2))){
var inst_35938 = (state_35968[(10)]);
var inst_35940 = cljs.core.count.call(null,inst_35938);
var inst_35941 = (inst_35940 > (0));
var state_35968__$1 = state_35968;
if(cljs.core.truth_(inst_35941)){
var statearr_35977_35995 = state_35968__$1;
(statearr_35977_35995[(1)] = (4));

} else {
var statearr_35978_35996 = state_35968__$1;
(statearr_35978_35996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (11))){
var inst_35938 = (state_35968[(10)]);
var inst_35957 = (state_35968[(2)]);
var tmp35976 = inst_35938;
var inst_35938__$1 = tmp35976;
var state_35968__$1 = (function (){var statearr_35979 = state_35968;
(statearr_35979[(10)] = inst_35938__$1);

(statearr_35979[(11)] = inst_35957);

return statearr_35979;
})();
var statearr_35980_35997 = state_35968__$1;
(statearr_35980_35997[(2)] = null);

(statearr_35980_35997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (9))){
var inst_35948 = (state_35968[(7)]);
var state_35968__$1 = state_35968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35968__$1,(11),out,inst_35948);
} else {
if((state_val_35969 === (5))){
var inst_35962 = cljs.core.async.close_BANG_.call(null,out);
var state_35968__$1 = state_35968;
var statearr_35981_35998 = state_35968__$1;
(statearr_35981_35998[(2)] = inst_35962);

(statearr_35981_35998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (10))){
var inst_35960 = (state_35968[(2)]);
var state_35968__$1 = state_35968;
var statearr_35982_35999 = state_35968__$1;
(statearr_35982_35999[(2)] = inst_35960);

(statearr_35982_35999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (8))){
var inst_35948 = (state_35968[(7)]);
var inst_35938 = (state_35968[(10)]);
var inst_35947 = (state_35968[(8)]);
var inst_35949 = (state_35968[(9)]);
var inst_35952 = (function (){var cs = inst_35938;
var vec__35943 = inst_35947;
var v = inst_35948;
var c = inst_35949;
return ((function (cs,vec__35943,v,c,inst_35948,inst_35938,inst_35947,inst_35949,state_val_35969,c__34577__auto___35990,out){
return (function (p1__35934_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35934_SHARP_);
});
;})(cs,vec__35943,v,c,inst_35948,inst_35938,inst_35947,inst_35949,state_val_35969,c__34577__auto___35990,out))
})();
var inst_35953 = cljs.core.filterv.call(null,inst_35952,inst_35938);
var inst_35938__$1 = inst_35953;
var state_35968__$1 = (function (){var statearr_35983 = state_35968;
(statearr_35983[(10)] = inst_35938__$1);

return statearr_35983;
})();
var statearr_35984_36000 = state_35968__$1;
(statearr_35984_36000[(2)] = null);

(statearr_35984_36000[(1)] = (2));


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
});})(c__34577__auto___35990,out))
;
return ((function (switch__34487__auto__,c__34577__auto___35990,out){
return (function() {
var cljs$core$async$state_machine__34488__auto__ = null;
var cljs$core$async$state_machine__34488__auto____0 = (function (){
var statearr_35985 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35985[(0)] = cljs$core$async$state_machine__34488__auto__);

(statearr_35985[(1)] = (1));

return statearr_35985;
});
var cljs$core$async$state_machine__34488__auto____1 = (function (state_35968){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_35968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e35986){if((e35986 instanceof Object)){
var ex__34491__auto__ = e35986;
var statearr_35987_36001 = state_35968;
(statearr_35987_36001[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36002 = state_35968;
state_35968 = G__36002;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$state_machine__34488__auto__ = function(state_35968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34488__auto____1.call(this,state_35968);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34488__auto____0;
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34488__auto____1;
return cljs$core$async$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___35990,out))
})();
var state__34579__auto__ = (function (){var statearr_35988 = f__34578__auto__.call(null);
(statearr_35988[(6)] = c__34577__auto___35990);

return statearr_35988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___35990,out))
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
var G__36004 = arguments.length;
switch (G__36004) {
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
var c__34577__auto___36049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___36049,out){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___36049,out){
return (function (state_36028){
var state_val_36029 = (state_36028[(1)]);
if((state_val_36029 === (7))){
var inst_36010 = (state_36028[(7)]);
var inst_36010__$1 = (state_36028[(2)]);
var inst_36011 = (inst_36010__$1 == null);
var inst_36012 = cljs.core.not.call(null,inst_36011);
var state_36028__$1 = (function (){var statearr_36030 = state_36028;
(statearr_36030[(7)] = inst_36010__$1);

return statearr_36030;
})();
if(inst_36012){
var statearr_36031_36050 = state_36028__$1;
(statearr_36031_36050[(1)] = (8));

} else {
var statearr_36032_36051 = state_36028__$1;
(statearr_36032_36051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (1))){
var inst_36005 = (0);
var state_36028__$1 = (function (){var statearr_36033 = state_36028;
(statearr_36033[(8)] = inst_36005);

return statearr_36033;
})();
var statearr_36034_36052 = state_36028__$1;
(statearr_36034_36052[(2)] = null);

(statearr_36034_36052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (4))){
var state_36028__$1 = state_36028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36028__$1,(7),ch);
} else {
if((state_val_36029 === (6))){
var inst_36023 = (state_36028[(2)]);
var state_36028__$1 = state_36028;
var statearr_36035_36053 = state_36028__$1;
(statearr_36035_36053[(2)] = inst_36023);

(statearr_36035_36053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (3))){
var inst_36025 = (state_36028[(2)]);
var inst_36026 = cljs.core.async.close_BANG_.call(null,out);
var state_36028__$1 = (function (){var statearr_36036 = state_36028;
(statearr_36036[(9)] = inst_36025);

return statearr_36036;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36028__$1,inst_36026);
} else {
if((state_val_36029 === (2))){
var inst_36005 = (state_36028[(8)]);
var inst_36007 = (inst_36005 < n);
var state_36028__$1 = state_36028;
if(cljs.core.truth_(inst_36007)){
var statearr_36037_36054 = state_36028__$1;
(statearr_36037_36054[(1)] = (4));

} else {
var statearr_36038_36055 = state_36028__$1;
(statearr_36038_36055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (11))){
var inst_36005 = (state_36028[(8)]);
var inst_36015 = (state_36028[(2)]);
var inst_36016 = (inst_36005 + (1));
var inst_36005__$1 = inst_36016;
var state_36028__$1 = (function (){var statearr_36039 = state_36028;
(statearr_36039[(8)] = inst_36005__$1);

(statearr_36039[(10)] = inst_36015);

return statearr_36039;
})();
var statearr_36040_36056 = state_36028__$1;
(statearr_36040_36056[(2)] = null);

(statearr_36040_36056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (9))){
var state_36028__$1 = state_36028;
var statearr_36041_36057 = state_36028__$1;
(statearr_36041_36057[(2)] = null);

(statearr_36041_36057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (5))){
var state_36028__$1 = state_36028;
var statearr_36042_36058 = state_36028__$1;
(statearr_36042_36058[(2)] = null);

(statearr_36042_36058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (10))){
var inst_36020 = (state_36028[(2)]);
var state_36028__$1 = state_36028;
var statearr_36043_36059 = state_36028__$1;
(statearr_36043_36059[(2)] = inst_36020);

(statearr_36043_36059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (8))){
var inst_36010 = (state_36028[(7)]);
var state_36028__$1 = state_36028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36028__$1,(11),out,inst_36010);
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
});})(c__34577__auto___36049,out))
;
return ((function (switch__34487__auto__,c__34577__auto___36049,out){
return (function() {
var cljs$core$async$state_machine__34488__auto__ = null;
var cljs$core$async$state_machine__34488__auto____0 = (function (){
var statearr_36044 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36044[(0)] = cljs$core$async$state_machine__34488__auto__);

(statearr_36044[(1)] = (1));

return statearr_36044;
});
var cljs$core$async$state_machine__34488__auto____1 = (function (state_36028){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_36028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e36045){if((e36045 instanceof Object)){
var ex__34491__auto__ = e36045;
var statearr_36046_36060 = state_36028;
(statearr_36046_36060[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36061 = state_36028;
state_36028 = G__36061;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$state_machine__34488__auto__ = function(state_36028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34488__auto____1.call(this,state_36028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34488__auto____0;
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34488__auto____1;
return cljs$core$async$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___36049,out))
})();
var state__34579__auto__ = (function (){var statearr_36047 = f__34578__auto__.call(null);
(statearr_36047[(6)] = c__34577__auto___36049);

return statearr_36047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___36049,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36063 = (function (f,ch,meta36064){
this.f = f;
this.ch = ch;
this.meta36064 = meta36064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36065,meta36064__$1){
var self__ = this;
var _36065__$1 = this;
return (new cljs.core.async.t_cljs$core$async36063(self__.f,self__.ch,meta36064__$1));
});

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36065){
var self__ = this;
var _36065__$1 = this;
return self__.meta36064;
});

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36066 = (function (f,ch,meta36064,_,fn1,meta36067){
this.f = f;
this.ch = ch;
this.meta36064 = meta36064;
this._ = _;
this.fn1 = fn1;
this.meta36067 = meta36067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36068,meta36067__$1){
var self__ = this;
var _36068__$1 = this;
return (new cljs.core.async.t_cljs$core$async36066(self__.f,self__.ch,self__.meta36064,self__._,self__.fn1,meta36067__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36068){
var self__ = this;
var _36068__$1 = this;
return self__.meta36067;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36062_SHARP_){
return f1.call(null,(((p1__36062_SHARP_ == null))?null:self__.f.call(null,p1__36062_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36066.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36064","meta36064",-943054672,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36063","cljs.core.async/t_cljs$core$async36063",2011021225,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36067","meta36067",-2067796835,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36066";

cljs.core.async.t_cljs$core$async36066.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36066");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36066 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36066(f__$1,ch__$1,meta36064__$1,___$2,fn1__$1,meta36067){
return (new cljs.core.async.t_cljs$core$async36066(f__$1,ch__$1,meta36064__$1,___$2,fn1__$1,meta36067));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36066(self__.f,self__.ch,self__.meta36064,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36064","meta36064",-943054672,null)], null);
});

cljs.core.async.t_cljs$core$async36063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36063";

cljs.core.async.t_cljs$core$async36063.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36063");
});

cljs.core.async.__GT_t_cljs$core$async36063 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36063(f__$1,ch__$1,meta36064){
return (new cljs.core.async.t_cljs$core$async36063(f__$1,ch__$1,meta36064));
});

}

return (new cljs.core.async.t_cljs$core$async36063(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36069 = (function (f,ch,meta36070){
this.f = f;
this.ch = ch;
this.meta36070 = meta36070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36071,meta36070__$1){
var self__ = this;
var _36071__$1 = this;
return (new cljs.core.async.t_cljs$core$async36069(self__.f,self__.ch,meta36070__$1));
});

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36071){
var self__ = this;
var _36071__$1 = this;
return self__.meta36070;
});

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36069.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36070","meta36070",-938625775,null)], null);
});

cljs.core.async.t_cljs$core$async36069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36069";

cljs.core.async.t_cljs$core$async36069.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36069");
});

cljs.core.async.__GT_t_cljs$core$async36069 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36069(f__$1,ch__$1,meta36070){
return (new cljs.core.async.t_cljs$core$async36069(f__$1,ch__$1,meta36070));
});

}

return (new cljs.core.async.t_cljs$core$async36069(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36072 = (function (p,ch,meta36073){
this.p = p;
this.ch = ch;
this.meta36073 = meta36073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36074,meta36073__$1){
var self__ = this;
var _36074__$1 = this;
return (new cljs.core.async.t_cljs$core$async36072(self__.p,self__.ch,meta36073__$1));
});

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36074){
var self__ = this;
var _36074__$1 = this;
return self__.meta36073;
});

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36073","meta36073",-1455320673,null)], null);
});

cljs.core.async.t_cljs$core$async36072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36072";

cljs.core.async.t_cljs$core$async36072.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.core.async/t_cljs$core$async36072");
});

cljs.core.async.__GT_t_cljs$core$async36072 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36072(p__$1,ch__$1,meta36073){
return (new cljs.core.async.t_cljs$core$async36072(p__$1,ch__$1,meta36073));
});

}

return (new cljs.core.async.t_cljs$core$async36072(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36076 = arguments.length;
switch (G__36076) {
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
var c__34577__auto___36116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___36116,out){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___36116,out){
return (function (state_36097){
var state_val_36098 = (state_36097[(1)]);
if((state_val_36098 === (7))){
var inst_36093 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
var statearr_36099_36117 = state_36097__$1;
(statearr_36099_36117[(2)] = inst_36093);

(statearr_36099_36117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (1))){
var state_36097__$1 = state_36097;
var statearr_36100_36118 = state_36097__$1;
(statearr_36100_36118[(2)] = null);

(statearr_36100_36118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (4))){
var inst_36079 = (state_36097[(7)]);
var inst_36079__$1 = (state_36097[(2)]);
var inst_36080 = (inst_36079__$1 == null);
var state_36097__$1 = (function (){var statearr_36101 = state_36097;
(statearr_36101[(7)] = inst_36079__$1);

return statearr_36101;
})();
if(cljs.core.truth_(inst_36080)){
var statearr_36102_36119 = state_36097__$1;
(statearr_36102_36119[(1)] = (5));

} else {
var statearr_36103_36120 = state_36097__$1;
(statearr_36103_36120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (6))){
var inst_36079 = (state_36097[(7)]);
var inst_36084 = p.call(null,inst_36079);
var state_36097__$1 = state_36097;
if(cljs.core.truth_(inst_36084)){
var statearr_36104_36121 = state_36097__$1;
(statearr_36104_36121[(1)] = (8));

} else {
var statearr_36105_36122 = state_36097__$1;
(statearr_36105_36122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (3))){
var inst_36095 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36097__$1,inst_36095);
} else {
if((state_val_36098 === (2))){
var state_36097__$1 = state_36097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36097__$1,(4),ch);
} else {
if((state_val_36098 === (11))){
var inst_36087 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
var statearr_36106_36123 = state_36097__$1;
(statearr_36106_36123[(2)] = inst_36087);

(statearr_36106_36123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (9))){
var state_36097__$1 = state_36097;
var statearr_36107_36124 = state_36097__$1;
(statearr_36107_36124[(2)] = null);

(statearr_36107_36124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (5))){
var inst_36082 = cljs.core.async.close_BANG_.call(null,out);
var state_36097__$1 = state_36097;
var statearr_36108_36125 = state_36097__$1;
(statearr_36108_36125[(2)] = inst_36082);

(statearr_36108_36125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (10))){
var inst_36090 = (state_36097[(2)]);
var state_36097__$1 = (function (){var statearr_36109 = state_36097;
(statearr_36109[(8)] = inst_36090);

return statearr_36109;
})();
var statearr_36110_36126 = state_36097__$1;
(statearr_36110_36126[(2)] = null);

(statearr_36110_36126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (8))){
var inst_36079 = (state_36097[(7)]);
var state_36097__$1 = state_36097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36097__$1,(11),out,inst_36079);
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
});})(c__34577__auto___36116,out))
;
return ((function (switch__34487__auto__,c__34577__auto___36116,out){
return (function() {
var cljs$core$async$state_machine__34488__auto__ = null;
var cljs$core$async$state_machine__34488__auto____0 = (function (){
var statearr_36111 = [null,null,null,null,null,null,null,null,null];
(statearr_36111[(0)] = cljs$core$async$state_machine__34488__auto__);

(statearr_36111[(1)] = (1));

return statearr_36111;
});
var cljs$core$async$state_machine__34488__auto____1 = (function (state_36097){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_36097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e36112){if((e36112 instanceof Object)){
var ex__34491__auto__ = e36112;
var statearr_36113_36127 = state_36097;
(statearr_36113_36127[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36128 = state_36097;
state_36097 = G__36128;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$state_machine__34488__auto__ = function(state_36097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34488__auto____1.call(this,state_36097);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34488__auto____0;
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34488__auto____1;
return cljs$core$async$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___36116,out))
})();
var state__34579__auto__ = (function (){var statearr_36114 = f__34578__auto__.call(null);
(statearr_36114[(6)] = c__34577__auto___36116);

return statearr_36114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___36116,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36130 = arguments.length;
switch (G__36130) {
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
var c__34577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto__){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto__){
return (function (state_36193){
var state_val_36194 = (state_36193[(1)]);
if((state_val_36194 === (7))){
var inst_36189 = (state_36193[(2)]);
var state_36193__$1 = state_36193;
var statearr_36195_36233 = state_36193__$1;
(statearr_36195_36233[(2)] = inst_36189);

(statearr_36195_36233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (20))){
var inst_36159 = (state_36193[(7)]);
var inst_36170 = (state_36193[(2)]);
var inst_36171 = cljs.core.next.call(null,inst_36159);
var inst_36145 = inst_36171;
var inst_36146 = null;
var inst_36147 = (0);
var inst_36148 = (0);
var state_36193__$1 = (function (){var statearr_36196 = state_36193;
(statearr_36196[(8)] = inst_36147);

(statearr_36196[(9)] = inst_36146);

(statearr_36196[(10)] = inst_36148);

(statearr_36196[(11)] = inst_36145);

(statearr_36196[(12)] = inst_36170);

return statearr_36196;
})();
var statearr_36197_36234 = state_36193__$1;
(statearr_36197_36234[(2)] = null);

(statearr_36197_36234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (1))){
var state_36193__$1 = state_36193;
var statearr_36198_36235 = state_36193__$1;
(statearr_36198_36235[(2)] = null);

(statearr_36198_36235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (4))){
var inst_36134 = (state_36193[(13)]);
var inst_36134__$1 = (state_36193[(2)]);
var inst_36135 = (inst_36134__$1 == null);
var state_36193__$1 = (function (){var statearr_36199 = state_36193;
(statearr_36199[(13)] = inst_36134__$1);

return statearr_36199;
})();
if(cljs.core.truth_(inst_36135)){
var statearr_36200_36236 = state_36193__$1;
(statearr_36200_36236[(1)] = (5));

} else {
var statearr_36201_36237 = state_36193__$1;
(statearr_36201_36237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (15))){
var state_36193__$1 = state_36193;
var statearr_36205_36238 = state_36193__$1;
(statearr_36205_36238[(2)] = null);

(statearr_36205_36238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (21))){
var state_36193__$1 = state_36193;
var statearr_36206_36239 = state_36193__$1;
(statearr_36206_36239[(2)] = null);

(statearr_36206_36239[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (13))){
var inst_36147 = (state_36193[(8)]);
var inst_36146 = (state_36193[(9)]);
var inst_36148 = (state_36193[(10)]);
var inst_36145 = (state_36193[(11)]);
var inst_36155 = (state_36193[(2)]);
var inst_36156 = (inst_36148 + (1));
var tmp36202 = inst_36147;
var tmp36203 = inst_36146;
var tmp36204 = inst_36145;
var inst_36145__$1 = tmp36204;
var inst_36146__$1 = tmp36203;
var inst_36147__$1 = tmp36202;
var inst_36148__$1 = inst_36156;
var state_36193__$1 = (function (){var statearr_36207 = state_36193;
(statearr_36207[(8)] = inst_36147__$1);

(statearr_36207[(9)] = inst_36146__$1);

(statearr_36207[(10)] = inst_36148__$1);

(statearr_36207[(14)] = inst_36155);

(statearr_36207[(11)] = inst_36145__$1);

return statearr_36207;
})();
var statearr_36208_36240 = state_36193__$1;
(statearr_36208_36240[(2)] = null);

(statearr_36208_36240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (22))){
var state_36193__$1 = state_36193;
var statearr_36209_36241 = state_36193__$1;
(statearr_36209_36241[(2)] = null);

(statearr_36209_36241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (6))){
var inst_36134 = (state_36193[(13)]);
var inst_36143 = f.call(null,inst_36134);
var inst_36144 = cljs.core.seq.call(null,inst_36143);
var inst_36145 = inst_36144;
var inst_36146 = null;
var inst_36147 = (0);
var inst_36148 = (0);
var state_36193__$1 = (function (){var statearr_36210 = state_36193;
(statearr_36210[(8)] = inst_36147);

(statearr_36210[(9)] = inst_36146);

(statearr_36210[(10)] = inst_36148);

(statearr_36210[(11)] = inst_36145);

return statearr_36210;
})();
var statearr_36211_36242 = state_36193__$1;
(statearr_36211_36242[(2)] = null);

(statearr_36211_36242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (17))){
var inst_36159 = (state_36193[(7)]);
var inst_36163 = cljs.core.chunk_first.call(null,inst_36159);
var inst_36164 = cljs.core.chunk_rest.call(null,inst_36159);
var inst_36165 = cljs.core.count.call(null,inst_36163);
var inst_36145 = inst_36164;
var inst_36146 = inst_36163;
var inst_36147 = inst_36165;
var inst_36148 = (0);
var state_36193__$1 = (function (){var statearr_36212 = state_36193;
(statearr_36212[(8)] = inst_36147);

(statearr_36212[(9)] = inst_36146);

(statearr_36212[(10)] = inst_36148);

(statearr_36212[(11)] = inst_36145);

return statearr_36212;
})();
var statearr_36213_36243 = state_36193__$1;
(statearr_36213_36243[(2)] = null);

(statearr_36213_36243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (3))){
var inst_36191 = (state_36193[(2)]);
var state_36193__$1 = state_36193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36193__$1,inst_36191);
} else {
if((state_val_36194 === (12))){
var inst_36179 = (state_36193[(2)]);
var state_36193__$1 = state_36193;
var statearr_36214_36244 = state_36193__$1;
(statearr_36214_36244[(2)] = inst_36179);

(statearr_36214_36244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (2))){
var state_36193__$1 = state_36193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36193__$1,(4),in$);
} else {
if((state_val_36194 === (23))){
var inst_36187 = (state_36193[(2)]);
var state_36193__$1 = state_36193;
var statearr_36215_36245 = state_36193__$1;
(statearr_36215_36245[(2)] = inst_36187);

(statearr_36215_36245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (19))){
var inst_36174 = (state_36193[(2)]);
var state_36193__$1 = state_36193;
var statearr_36216_36246 = state_36193__$1;
(statearr_36216_36246[(2)] = inst_36174);

(statearr_36216_36246[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (11))){
var inst_36145 = (state_36193[(11)]);
var inst_36159 = (state_36193[(7)]);
var inst_36159__$1 = cljs.core.seq.call(null,inst_36145);
var state_36193__$1 = (function (){var statearr_36217 = state_36193;
(statearr_36217[(7)] = inst_36159__$1);

return statearr_36217;
})();
if(inst_36159__$1){
var statearr_36218_36247 = state_36193__$1;
(statearr_36218_36247[(1)] = (14));

} else {
var statearr_36219_36248 = state_36193__$1;
(statearr_36219_36248[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (9))){
var inst_36181 = (state_36193[(2)]);
var inst_36182 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36193__$1 = (function (){var statearr_36220 = state_36193;
(statearr_36220[(15)] = inst_36181);

return statearr_36220;
})();
if(cljs.core.truth_(inst_36182)){
var statearr_36221_36249 = state_36193__$1;
(statearr_36221_36249[(1)] = (21));

} else {
var statearr_36222_36250 = state_36193__$1;
(statearr_36222_36250[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (5))){
var inst_36137 = cljs.core.async.close_BANG_.call(null,out);
var state_36193__$1 = state_36193;
var statearr_36223_36251 = state_36193__$1;
(statearr_36223_36251[(2)] = inst_36137);

(statearr_36223_36251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (14))){
var inst_36159 = (state_36193[(7)]);
var inst_36161 = cljs.core.chunked_seq_QMARK_.call(null,inst_36159);
var state_36193__$1 = state_36193;
if(inst_36161){
var statearr_36224_36252 = state_36193__$1;
(statearr_36224_36252[(1)] = (17));

} else {
var statearr_36225_36253 = state_36193__$1;
(statearr_36225_36253[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (16))){
var inst_36177 = (state_36193[(2)]);
var state_36193__$1 = state_36193;
var statearr_36226_36254 = state_36193__$1;
(statearr_36226_36254[(2)] = inst_36177);

(statearr_36226_36254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36194 === (10))){
var inst_36146 = (state_36193[(9)]);
var inst_36148 = (state_36193[(10)]);
var inst_36153 = cljs.core._nth.call(null,inst_36146,inst_36148);
var state_36193__$1 = state_36193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36193__$1,(13),out,inst_36153);
} else {
if((state_val_36194 === (18))){
var inst_36159 = (state_36193[(7)]);
var inst_36168 = cljs.core.first.call(null,inst_36159);
var state_36193__$1 = state_36193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36193__$1,(20),out,inst_36168);
} else {
if((state_val_36194 === (8))){
var inst_36147 = (state_36193[(8)]);
var inst_36148 = (state_36193[(10)]);
var inst_36150 = (inst_36148 < inst_36147);
var inst_36151 = inst_36150;
var state_36193__$1 = state_36193;
if(cljs.core.truth_(inst_36151)){
var statearr_36227_36255 = state_36193__$1;
(statearr_36227_36255[(1)] = (10));

} else {
var statearr_36228_36256 = state_36193__$1;
(statearr_36228_36256[(1)] = (11));

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
});})(c__34577__auto__))
;
return ((function (switch__34487__auto__,c__34577__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34488__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34488__auto____0 = (function (){
var statearr_36229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36229[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34488__auto__);

(statearr_36229[(1)] = (1));

return statearr_36229;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34488__auto____1 = (function (state_36193){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_36193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e36230){if((e36230 instanceof Object)){
var ex__34491__auto__ = e36230;
var statearr_36231_36257 = state_36193;
(statearr_36231_36257[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36258 = state_36193;
state_36193 = G__36258;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34488__auto__ = function(state_36193){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34488__auto____1.call(this,state_36193);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34488__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34488__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto__))
})();
var state__34579__auto__ = (function (){var statearr_36232 = f__34578__auto__.call(null);
(statearr_36232[(6)] = c__34577__auto__);

return statearr_36232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto__))
);

return c__34577__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36260 = arguments.length;
switch (G__36260) {
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
var G__36263 = arguments.length;
switch (G__36263) {
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
var G__36266 = arguments.length;
switch (G__36266) {
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
var c__34577__auto___36313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___36313,out){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___36313,out){
return (function (state_36290){
var state_val_36291 = (state_36290[(1)]);
if((state_val_36291 === (7))){
var inst_36285 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36292_36314 = state_36290__$1;
(statearr_36292_36314[(2)] = inst_36285);

(statearr_36292_36314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (1))){
var inst_36267 = null;
var state_36290__$1 = (function (){var statearr_36293 = state_36290;
(statearr_36293[(7)] = inst_36267);

return statearr_36293;
})();
var statearr_36294_36315 = state_36290__$1;
(statearr_36294_36315[(2)] = null);

(statearr_36294_36315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (4))){
var inst_36270 = (state_36290[(8)]);
var inst_36270__$1 = (state_36290[(2)]);
var inst_36271 = (inst_36270__$1 == null);
var inst_36272 = cljs.core.not.call(null,inst_36271);
var state_36290__$1 = (function (){var statearr_36295 = state_36290;
(statearr_36295[(8)] = inst_36270__$1);

return statearr_36295;
})();
if(inst_36272){
var statearr_36296_36316 = state_36290__$1;
(statearr_36296_36316[(1)] = (5));

} else {
var statearr_36297_36317 = state_36290__$1;
(statearr_36297_36317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (6))){
var state_36290__$1 = state_36290;
var statearr_36298_36318 = state_36290__$1;
(statearr_36298_36318[(2)] = null);

(statearr_36298_36318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (3))){
var inst_36287 = (state_36290[(2)]);
var inst_36288 = cljs.core.async.close_BANG_.call(null,out);
var state_36290__$1 = (function (){var statearr_36299 = state_36290;
(statearr_36299[(9)] = inst_36287);

return statearr_36299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36290__$1,inst_36288);
} else {
if((state_val_36291 === (2))){
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36290__$1,(4),ch);
} else {
if((state_val_36291 === (11))){
var inst_36270 = (state_36290[(8)]);
var inst_36279 = (state_36290[(2)]);
var inst_36267 = inst_36270;
var state_36290__$1 = (function (){var statearr_36300 = state_36290;
(statearr_36300[(10)] = inst_36279);

(statearr_36300[(7)] = inst_36267);

return statearr_36300;
})();
var statearr_36301_36319 = state_36290__$1;
(statearr_36301_36319[(2)] = null);

(statearr_36301_36319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (9))){
var inst_36270 = (state_36290[(8)]);
var state_36290__$1 = state_36290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36290__$1,(11),out,inst_36270);
} else {
if((state_val_36291 === (5))){
var inst_36267 = (state_36290[(7)]);
var inst_36270 = (state_36290[(8)]);
var inst_36274 = cljs.core._EQ_.call(null,inst_36270,inst_36267);
var state_36290__$1 = state_36290;
if(inst_36274){
var statearr_36303_36320 = state_36290__$1;
(statearr_36303_36320[(1)] = (8));

} else {
var statearr_36304_36321 = state_36290__$1;
(statearr_36304_36321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (10))){
var inst_36282 = (state_36290[(2)]);
var state_36290__$1 = state_36290;
var statearr_36305_36322 = state_36290__$1;
(statearr_36305_36322[(2)] = inst_36282);

(statearr_36305_36322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36291 === (8))){
var inst_36267 = (state_36290[(7)]);
var tmp36302 = inst_36267;
var inst_36267__$1 = tmp36302;
var state_36290__$1 = (function (){var statearr_36306 = state_36290;
(statearr_36306[(7)] = inst_36267__$1);

return statearr_36306;
})();
var statearr_36307_36323 = state_36290__$1;
(statearr_36307_36323[(2)] = null);

(statearr_36307_36323[(1)] = (2));


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
});})(c__34577__auto___36313,out))
;
return ((function (switch__34487__auto__,c__34577__auto___36313,out){
return (function() {
var cljs$core$async$state_machine__34488__auto__ = null;
var cljs$core$async$state_machine__34488__auto____0 = (function (){
var statearr_36308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36308[(0)] = cljs$core$async$state_machine__34488__auto__);

(statearr_36308[(1)] = (1));

return statearr_36308;
});
var cljs$core$async$state_machine__34488__auto____1 = (function (state_36290){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_36290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e36309){if((e36309 instanceof Object)){
var ex__34491__auto__ = e36309;
var statearr_36310_36324 = state_36290;
(statearr_36310_36324[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36325 = state_36290;
state_36290 = G__36325;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$state_machine__34488__auto__ = function(state_36290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34488__auto____1.call(this,state_36290);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34488__auto____0;
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34488__auto____1;
return cljs$core$async$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___36313,out))
})();
var state__34579__auto__ = (function (){var statearr_36311 = f__34578__auto__.call(null);
(statearr_36311[(6)] = c__34577__auto___36313);

return statearr_36311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___36313,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36327 = arguments.length;
switch (G__36327) {
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
var c__34577__auto___36393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___36393,out){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___36393,out){
return (function (state_36365){
var state_val_36366 = (state_36365[(1)]);
if((state_val_36366 === (7))){
var inst_36361 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
var statearr_36367_36394 = state_36365__$1;
(statearr_36367_36394[(2)] = inst_36361);

(statearr_36367_36394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (1))){
var inst_36328 = (new Array(n));
var inst_36329 = inst_36328;
var inst_36330 = (0);
var state_36365__$1 = (function (){var statearr_36368 = state_36365;
(statearr_36368[(7)] = inst_36329);

(statearr_36368[(8)] = inst_36330);

return statearr_36368;
})();
var statearr_36369_36395 = state_36365__$1;
(statearr_36369_36395[(2)] = null);

(statearr_36369_36395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (4))){
var inst_36333 = (state_36365[(9)]);
var inst_36333__$1 = (state_36365[(2)]);
var inst_36334 = (inst_36333__$1 == null);
var inst_36335 = cljs.core.not.call(null,inst_36334);
var state_36365__$1 = (function (){var statearr_36370 = state_36365;
(statearr_36370[(9)] = inst_36333__$1);

return statearr_36370;
})();
if(inst_36335){
var statearr_36371_36396 = state_36365__$1;
(statearr_36371_36396[(1)] = (5));

} else {
var statearr_36372_36397 = state_36365__$1;
(statearr_36372_36397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (15))){
var inst_36355 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
var statearr_36373_36398 = state_36365__$1;
(statearr_36373_36398[(2)] = inst_36355);

(statearr_36373_36398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (13))){
var state_36365__$1 = state_36365;
var statearr_36374_36399 = state_36365__$1;
(statearr_36374_36399[(2)] = null);

(statearr_36374_36399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (6))){
var inst_36330 = (state_36365[(8)]);
var inst_36351 = (inst_36330 > (0));
var state_36365__$1 = state_36365;
if(cljs.core.truth_(inst_36351)){
var statearr_36375_36400 = state_36365__$1;
(statearr_36375_36400[(1)] = (12));

} else {
var statearr_36376_36401 = state_36365__$1;
(statearr_36376_36401[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (3))){
var inst_36363 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36365__$1,inst_36363);
} else {
if((state_val_36366 === (12))){
var inst_36329 = (state_36365[(7)]);
var inst_36353 = cljs.core.vec.call(null,inst_36329);
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36365__$1,(15),out,inst_36353);
} else {
if((state_val_36366 === (2))){
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36365__$1,(4),ch);
} else {
if((state_val_36366 === (11))){
var inst_36345 = (state_36365[(2)]);
var inst_36346 = (new Array(n));
var inst_36329 = inst_36346;
var inst_36330 = (0);
var state_36365__$1 = (function (){var statearr_36377 = state_36365;
(statearr_36377[(10)] = inst_36345);

(statearr_36377[(7)] = inst_36329);

(statearr_36377[(8)] = inst_36330);

return statearr_36377;
})();
var statearr_36378_36402 = state_36365__$1;
(statearr_36378_36402[(2)] = null);

(statearr_36378_36402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (9))){
var inst_36329 = (state_36365[(7)]);
var inst_36343 = cljs.core.vec.call(null,inst_36329);
var state_36365__$1 = state_36365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36365__$1,(11),out,inst_36343);
} else {
if((state_val_36366 === (5))){
var inst_36329 = (state_36365[(7)]);
var inst_36338 = (state_36365[(11)]);
var inst_36330 = (state_36365[(8)]);
var inst_36333 = (state_36365[(9)]);
var inst_36337 = (inst_36329[inst_36330] = inst_36333);
var inst_36338__$1 = (inst_36330 + (1));
var inst_36339 = (inst_36338__$1 < n);
var state_36365__$1 = (function (){var statearr_36379 = state_36365;
(statearr_36379[(12)] = inst_36337);

(statearr_36379[(11)] = inst_36338__$1);

return statearr_36379;
})();
if(cljs.core.truth_(inst_36339)){
var statearr_36380_36403 = state_36365__$1;
(statearr_36380_36403[(1)] = (8));

} else {
var statearr_36381_36404 = state_36365__$1;
(statearr_36381_36404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (14))){
var inst_36358 = (state_36365[(2)]);
var inst_36359 = cljs.core.async.close_BANG_.call(null,out);
var state_36365__$1 = (function (){var statearr_36383 = state_36365;
(statearr_36383[(13)] = inst_36358);

return statearr_36383;
})();
var statearr_36384_36405 = state_36365__$1;
(statearr_36384_36405[(2)] = inst_36359);

(statearr_36384_36405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (10))){
var inst_36349 = (state_36365[(2)]);
var state_36365__$1 = state_36365;
var statearr_36385_36406 = state_36365__$1;
(statearr_36385_36406[(2)] = inst_36349);

(statearr_36385_36406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36366 === (8))){
var inst_36329 = (state_36365[(7)]);
var inst_36338 = (state_36365[(11)]);
var tmp36382 = inst_36329;
var inst_36329__$1 = tmp36382;
var inst_36330 = inst_36338;
var state_36365__$1 = (function (){var statearr_36386 = state_36365;
(statearr_36386[(7)] = inst_36329__$1);

(statearr_36386[(8)] = inst_36330);

return statearr_36386;
})();
var statearr_36387_36407 = state_36365__$1;
(statearr_36387_36407[(2)] = null);

(statearr_36387_36407[(1)] = (2));


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
});})(c__34577__auto___36393,out))
;
return ((function (switch__34487__auto__,c__34577__auto___36393,out){
return (function() {
var cljs$core$async$state_machine__34488__auto__ = null;
var cljs$core$async$state_machine__34488__auto____0 = (function (){
var statearr_36388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36388[(0)] = cljs$core$async$state_machine__34488__auto__);

(statearr_36388[(1)] = (1));

return statearr_36388;
});
var cljs$core$async$state_machine__34488__auto____1 = (function (state_36365){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_36365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e36389){if((e36389 instanceof Object)){
var ex__34491__auto__ = e36389;
var statearr_36390_36408 = state_36365;
(statearr_36390_36408[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36409 = state_36365;
state_36365 = G__36409;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$state_machine__34488__auto__ = function(state_36365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34488__auto____1.call(this,state_36365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34488__auto____0;
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34488__auto____1;
return cljs$core$async$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___36393,out))
})();
var state__34579__auto__ = (function (){var statearr_36391 = f__34578__auto__.call(null);
(statearr_36391[(6)] = c__34577__auto___36393);

return statearr_36391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___36393,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36411 = arguments.length;
switch (G__36411) {
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
var c__34577__auto___36481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___36481,out){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___36481,out){
return (function (state_36453){
var state_val_36454 = (state_36453[(1)]);
if((state_val_36454 === (7))){
var inst_36449 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36455_36482 = state_36453__$1;
(statearr_36455_36482[(2)] = inst_36449);

(statearr_36455_36482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (1))){
var inst_36412 = [];
var inst_36413 = inst_36412;
var inst_36414 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36453__$1 = (function (){var statearr_36456 = state_36453;
(statearr_36456[(7)] = inst_36413);

(statearr_36456[(8)] = inst_36414);

return statearr_36456;
})();
var statearr_36457_36483 = state_36453__$1;
(statearr_36457_36483[(2)] = null);

(statearr_36457_36483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (4))){
var inst_36417 = (state_36453[(9)]);
var inst_36417__$1 = (state_36453[(2)]);
var inst_36418 = (inst_36417__$1 == null);
var inst_36419 = cljs.core.not.call(null,inst_36418);
var state_36453__$1 = (function (){var statearr_36458 = state_36453;
(statearr_36458[(9)] = inst_36417__$1);

return statearr_36458;
})();
if(inst_36419){
var statearr_36459_36484 = state_36453__$1;
(statearr_36459_36484[(1)] = (5));

} else {
var statearr_36460_36485 = state_36453__$1;
(statearr_36460_36485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (15))){
var inst_36443 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36461_36486 = state_36453__$1;
(statearr_36461_36486[(2)] = inst_36443);

(statearr_36461_36486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (13))){
var state_36453__$1 = state_36453;
var statearr_36462_36487 = state_36453__$1;
(statearr_36462_36487[(2)] = null);

(statearr_36462_36487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (6))){
var inst_36413 = (state_36453[(7)]);
var inst_36438 = inst_36413.length;
var inst_36439 = (inst_36438 > (0));
var state_36453__$1 = state_36453;
if(cljs.core.truth_(inst_36439)){
var statearr_36463_36488 = state_36453__$1;
(statearr_36463_36488[(1)] = (12));

} else {
var statearr_36464_36489 = state_36453__$1;
(statearr_36464_36489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (3))){
var inst_36451 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36453__$1,inst_36451);
} else {
if((state_val_36454 === (12))){
var inst_36413 = (state_36453[(7)]);
var inst_36441 = cljs.core.vec.call(null,inst_36413);
var state_36453__$1 = state_36453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36453__$1,(15),out,inst_36441);
} else {
if((state_val_36454 === (2))){
var state_36453__$1 = state_36453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36453__$1,(4),ch);
} else {
if((state_val_36454 === (11))){
var inst_36421 = (state_36453[(10)]);
var inst_36417 = (state_36453[(9)]);
var inst_36431 = (state_36453[(2)]);
var inst_36432 = [];
var inst_36433 = inst_36432.push(inst_36417);
var inst_36413 = inst_36432;
var inst_36414 = inst_36421;
var state_36453__$1 = (function (){var statearr_36465 = state_36453;
(statearr_36465[(7)] = inst_36413);

(statearr_36465[(11)] = inst_36433);

(statearr_36465[(12)] = inst_36431);

(statearr_36465[(8)] = inst_36414);

return statearr_36465;
})();
var statearr_36466_36490 = state_36453__$1;
(statearr_36466_36490[(2)] = null);

(statearr_36466_36490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (9))){
var inst_36413 = (state_36453[(7)]);
var inst_36429 = cljs.core.vec.call(null,inst_36413);
var state_36453__$1 = state_36453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36453__$1,(11),out,inst_36429);
} else {
if((state_val_36454 === (5))){
var inst_36421 = (state_36453[(10)]);
var inst_36414 = (state_36453[(8)]);
var inst_36417 = (state_36453[(9)]);
var inst_36421__$1 = f.call(null,inst_36417);
var inst_36422 = cljs.core._EQ_.call(null,inst_36421__$1,inst_36414);
var inst_36423 = cljs.core.keyword_identical_QMARK_.call(null,inst_36414,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36424 = (inst_36422) || (inst_36423);
var state_36453__$1 = (function (){var statearr_36467 = state_36453;
(statearr_36467[(10)] = inst_36421__$1);

return statearr_36467;
})();
if(cljs.core.truth_(inst_36424)){
var statearr_36468_36491 = state_36453__$1;
(statearr_36468_36491[(1)] = (8));

} else {
var statearr_36469_36492 = state_36453__$1;
(statearr_36469_36492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (14))){
var inst_36446 = (state_36453[(2)]);
var inst_36447 = cljs.core.async.close_BANG_.call(null,out);
var state_36453__$1 = (function (){var statearr_36471 = state_36453;
(statearr_36471[(13)] = inst_36446);

return statearr_36471;
})();
var statearr_36472_36493 = state_36453__$1;
(statearr_36472_36493[(2)] = inst_36447);

(statearr_36472_36493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (10))){
var inst_36436 = (state_36453[(2)]);
var state_36453__$1 = state_36453;
var statearr_36473_36494 = state_36453__$1;
(statearr_36473_36494[(2)] = inst_36436);

(statearr_36473_36494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36454 === (8))){
var inst_36413 = (state_36453[(7)]);
var inst_36421 = (state_36453[(10)]);
var inst_36417 = (state_36453[(9)]);
var inst_36426 = inst_36413.push(inst_36417);
var tmp36470 = inst_36413;
var inst_36413__$1 = tmp36470;
var inst_36414 = inst_36421;
var state_36453__$1 = (function (){var statearr_36474 = state_36453;
(statearr_36474[(7)] = inst_36413__$1);

(statearr_36474[(14)] = inst_36426);

(statearr_36474[(8)] = inst_36414);

return statearr_36474;
})();
var statearr_36475_36495 = state_36453__$1;
(statearr_36475_36495[(2)] = null);

(statearr_36475_36495[(1)] = (2));


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
});})(c__34577__auto___36481,out))
;
return ((function (switch__34487__auto__,c__34577__auto___36481,out){
return (function() {
var cljs$core$async$state_machine__34488__auto__ = null;
var cljs$core$async$state_machine__34488__auto____0 = (function (){
var statearr_36476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36476[(0)] = cljs$core$async$state_machine__34488__auto__);

(statearr_36476[(1)] = (1));

return statearr_36476;
});
var cljs$core$async$state_machine__34488__auto____1 = (function (state_36453){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_36453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e36477){if((e36477 instanceof Object)){
var ex__34491__auto__ = e36477;
var statearr_36478_36496 = state_36453;
(statearr_36478_36496[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36497 = state_36453;
state_36453 = G__36497;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
cljs$core$async$state_machine__34488__auto__ = function(state_36453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34488__auto____1.call(this,state_36453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34488__auto____0;
cljs$core$async$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34488__auto____1;
return cljs$core$async$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___36481,out))
})();
var state__34579__auto__ = (function (){var statearr_36479 = f__34578__auto__.call(null);
(statearr_36479[(6)] = c__34577__auto___36481);

return statearr_36479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___36481,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1526331143225
