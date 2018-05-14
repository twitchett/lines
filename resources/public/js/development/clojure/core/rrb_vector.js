// Compiled by ClojureScript 1.9.946 {}
goog.provide('clojure.core.rrb_vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.rrbt');
goog.require('clojure.core.rrb_vector.interop');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(var_args){
var G__32057 = arguments.length;
switch (G__32057) {
case 0:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__31385__auto__ = [];
var len__31362__auto___32059 = arguments.length;
var i__31363__auto___32060 = (0);
while(true){
if((i__31363__auto___32060 < len__31362__auto___32059)){
args_arr__31385__auto__.push((arguments[i__31363__auto___32060]));

var G__32061 = (i__31363__auto___32060 + (1));
i__31363__auto___32060 = G__32061;
continue;
} else {
}
break;
}

var argseq__31386__auto__ = (new cljs.core.IndexedSeq(args_arr__31385__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__31386__auto__);

}
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1 = (function (v1){
return v1;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3 = (function (v1,v2,v3){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),v3);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4 = (function (v1,v2,v3,v4){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4));
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,v3,v4,vn){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4)),cljs.core.apply.call(null,clojure.core.rrb_vector.catvec,vn));
});

clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq32052){
var G__32053 = cljs.core.first.call(null,seq32052);
var seq32052__$1 = cljs.core.next.call(null,seq32052);
var G__32054 = cljs.core.first.call(null,seq32052__$1);
var seq32052__$2 = cljs.core.next.call(null,seq32052__$1);
var G__32055 = cljs.core.first.call(null,seq32052__$2);
var seq32052__$3 = cljs.core.next.call(null,seq32052__$2);
var G__32056 = cljs.core.first.call(null,seq32052__$3);
var seq32052__$4 = cljs.core.next.call(null,seq32052__$3);
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic(G__32053,G__32054,G__32055,G__32056,seq32052__$4);
});

clojure.core.rrb_vector.catvec.cljs$lang$maxFixedArity = (4);

/**
 * Returns a new vector containing the elements of the given vector v
 *   lying between the start (inclusive) and end (exclusive) indices in
 *   logarithmic time. end defaults to end of vector. The resulting
 *   vector shares structure with the original, but does not hold on to
 *   any elements of the original vector lying outside the given index
 *   range.
 */
clojure.core.rrb_vector.subvec = (function clojure$core$rrb_vector$subvec(var_args){
var G__32063 = arguments.length;
switch (G__32063) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,cljs.core.count.call(null,v));
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,end);
});

clojure.core.rrb_vector.subvec.cljs$lang$maxFixedArity = 3;

/**
 * Creates a new vector containing the args.
 */
clojure.core.rrb_vector.vector = (function clojure$core$rrb_vector$vector(var_args){
var G__32071 = arguments.length;
switch (G__32071) {
case 0:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__31385__auto__ = [];
var len__31362__auto___32078 = arguments.length;
var i__31363__auto___32079 = (0);
while(true){
if((i__31363__auto___32079 < len__31362__auto___32078)){
args_arr__31385__auto__.push((arguments[i__31363__auto___32079]));

var G__32080 = (i__31363__auto___32079 + (1));
i__31363__auto___32079 = G__32080;
continue;
} else {
}
break;
}

var argseq__31386__auto__ = (new cljs.core.IndexedSeq(args_arr__31385__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__31386__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__32072 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32072,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__32073 = [null];
(arr__32073[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32073,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__32074 = [null,null];
(arr__32074[(0)] = x1);

(arr__32074[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32074,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__32075 = [null,null,null];
(arr__32075[(0)] = x1);

(arr__32075[(1)] = x2);

(arr__32075[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32075,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__32076 = [null,null,null,null];
(arr__32076[(0)] = x1);

(arr__32076[(1)] = x2);

(arr__32076[(2)] = x3);

(arr__32076[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__32076,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.call(null,clojure.core.rrb_vector.vector.call(null,x1,x2,x3,x4),xn);
});

clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq32066){
var G__32067 = cljs.core.first.call(null,seq32066);
var seq32066__$1 = cljs.core.next.call(null,seq32066);
var G__32068 = cljs.core.first.call(null,seq32066__$1);
var seq32066__$2 = cljs.core.next.call(null,seq32066__$1);
var G__32069 = cljs.core.first.call(null,seq32066__$2);
var seq32066__$3 = cljs.core.next.call(null,seq32066__$2);
var G__32070 = cljs.core.first.call(null,seq32066__$3);
var seq32066__$4 = cljs.core.next.call(null,seq32066__$3);
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic(G__32067,G__32068,G__32069,G__32070,seq32066__$4);
});

clojure.core.rrb_vector.vector.cljs$lang$maxFixedArity = (4);

/**
 * Returns a vector containing the contents of coll.
 * 
 *   If coll is a vector, returns an RRB vector using the internal tree
 *   of coll.
 */
clojure.core.rrb_vector.vec = (function clojure$core$rrb_vector$vec(coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return clojure.core.rrb_vector.rrbt._as_rrbt.call(null,coll);
} else {
return cljs.core.apply.call(null,clojure.core.rrb_vector.vector,coll);
}
});

//# sourceMappingURL=rrb_vector.js.map?rel=1526321581085
