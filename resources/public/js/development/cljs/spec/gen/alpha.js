// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30754__auto__,writer__30755__auto__,opt__30756__auto__){
return cljs.core._write.call(null,writer__30755__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38314 = arguments.length;
var i__31363__auto___38315 = (0);
while(true){
if((i__31363__auto___38315 < len__31362__auto___38314)){
args__31369__auto__.push((arguments[i__31363__auto___38315]));

var G__38316 = (i__31363__auto___38315 + (1));
i__31363__auto___38315 = G__38316;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq38313){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38313));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38318 = arguments.length;
var i__31363__auto___38319 = (0);
while(true){
if((i__31363__auto___38319 < len__31362__auto___38318)){
args__31369__auto__.push((arguments[i__31363__auto___38319]));

var G__38320 = (i__31363__auto___38319 + (1));
i__31363__auto___38319 = G__38320;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq38317){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38317));
});

var g_QMARK__38321 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_38322 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38321){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__38321))
,null));
var mkg_38323 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38321,g_38322){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__38321,g_38322))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__38321,g_38322,mkg_38323){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__38321).call(null,x);
});})(g_QMARK__38321,g_38322,mkg_38323))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__38321,g_38322,mkg_38323){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_38323).call(null,gfn);
});})(g_QMARK__38321,g_38322,mkg_38323))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__38321,g_38322,mkg_38323){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_38322).call(null,generator);
});})(g_QMARK__38321,g_38322,mkg_38323))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31465__auto___38343 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31465__auto___38343){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38344 = arguments.length;
var i__31363__auto___38345 = (0);
while(true){
if((i__31363__auto___38345 < len__31362__auto___38344)){
args__31369__auto__.push((arguments[i__31363__auto___38345]));

var G__38346 = (i__31363__auto___38345 + (1));
i__31363__auto___38345 = G__38346;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38343))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38343){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38343),args);
});})(g__31465__auto___38343))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31465__auto___38343){
return (function (seq38324){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38324));
});})(g__31465__auto___38343))
;


var g__31465__auto___38347 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31465__auto___38347){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38348 = arguments.length;
var i__31363__auto___38349 = (0);
while(true){
if((i__31363__auto___38349 < len__31362__auto___38348)){
args__31369__auto__.push((arguments[i__31363__auto___38349]));

var G__38350 = (i__31363__auto___38349 + (1));
i__31363__auto___38349 = G__38350;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38347))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38347){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38347),args);
});})(g__31465__auto___38347))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31465__auto___38347){
return (function (seq38325){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38325));
});})(g__31465__auto___38347))
;


var g__31465__auto___38351 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31465__auto___38351){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38352 = arguments.length;
var i__31363__auto___38353 = (0);
while(true){
if((i__31363__auto___38353 < len__31362__auto___38352)){
args__31369__auto__.push((arguments[i__31363__auto___38353]));

var G__38354 = (i__31363__auto___38353 + (1));
i__31363__auto___38353 = G__38354;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38351))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38351){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38351),args);
});})(g__31465__auto___38351))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31465__auto___38351){
return (function (seq38326){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38326));
});})(g__31465__auto___38351))
;


var g__31465__auto___38355 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31465__auto___38355){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38356 = arguments.length;
var i__31363__auto___38357 = (0);
while(true){
if((i__31363__auto___38357 < len__31362__auto___38356)){
args__31369__auto__.push((arguments[i__31363__auto___38357]));

var G__38358 = (i__31363__auto___38357 + (1));
i__31363__auto___38357 = G__38358;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38355))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38355){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38355),args);
});})(g__31465__auto___38355))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31465__auto___38355){
return (function (seq38327){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38327));
});})(g__31465__auto___38355))
;


var g__31465__auto___38359 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31465__auto___38359){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38360 = arguments.length;
var i__31363__auto___38361 = (0);
while(true){
if((i__31363__auto___38361 < len__31362__auto___38360)){
args__31369__auto__.push((arguments[i__31363__auto___38361]));

var G__38362 = (i__31363__auto___38361 + (1));
i__31363__auto___38361 = G__38362;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38359))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38359){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38359),args);
});})(g__31465__auto___38359))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31465__auto___38359){
return (function (seq38328){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38328));
});})(g__31465__auto___38359))
;


var g__31465__auto___38363 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31465__auto___38363){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38364 = arguments.length;
var i__31363__auto___38365 = (0);
while(true){
if((i__31363__auto___38365 < len__31362__auto___38364)){
args__31369__auto__.push((arguments[i__31363__auto___38365]));

var G__38366 = (i__31363__auto___38365 + (1));
i__31363__auto___38365 = G__38366;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38363))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38363){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38363),args);
});})(g__31465__auto___38363))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31465__auto___38363){
return (function (seq38329){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38329));
});})(g__31465__auto___38363))
;


var g__31465__auto___38367 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31465__auto___38367){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38368 = arguments.length;
var i__31363__auto___38369 = (0);
while(true){
if((i__31363__auto___38369 < len__31362__auto___38368)){
args__31369__auto__.push((arguments[i__31363__auto___38369]));

var G__38370 = (i__31363__auto___38369 + (1));
i__31363__auto___38369 = G__38370;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38367))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38367){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38367),args);
});})(g__31465__auto___38367))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31465__auto___38367){
return (function (seq38330){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38330));
});})(g__31465__auto___38367))
;


var g__31465__auto___38371 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31465__auto___38371){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38372 = arguments.length;
var i__31363__auto___38373 = (0);
while(true){
if((i__31363__auto___38373 < len__31362__auto___38372)){
args__31369__auto__.push((arguments[i__31363__auto___38373]));

var G__38374 = (i__31363__auto___38373 + (1));
i__31363__auto___38373 = G__38374;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38371))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38371){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38371),args);
});})(g__31465__auto___38371))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31465__auto___38371){
return (function (seq38331){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38331));
});})(g__31465__auto___38371))
;


var g__31465__auto___38375 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31465__auto___38375){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38376 = arguments.length;
var i__31363__auto___38377 = (0);
while(true){
if((i__31363__auto___38377 < len__31362__auto___38376)){
args__31369__auto__.push((arguments[i__31363__auto___38377]));

var G__38378 = (i__31363__auto___38377 + (1));
i__31363__auto___38377 = G__38378;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38375))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38375){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38375),args);
});})(g__31465__auto___38375))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31465__auto___38375){
return (function (seq38332){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38332));
});})(g__31465__auto___38375))
;


var g__31465__auto___38379 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31465__auto___38379){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38380 = arguments.length;
var i__31363__auto___38381 = (0);
while(true){
if((i__31363__auto___38381 < len__31362__auto___38380)){
args__31369__auto__.push((arguments[i__31363__auto___38381]));

var G__38382 = (i__31363__auto___38381 + (1));
i__31363__auto___38381 = G__38382;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38379))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38379){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38379),args);
});})(g__31465__auto___38379))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31465__auto___38379){
return (function (seq38333){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38333));
});})(g__31465__auto___38379))
;


var g__31465__auto___38383 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31465__auto___38383){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38384 = arguments.length;
var i__31363__auto___38385 = (0);
while(true){
if((i__31363__auto___38385 < len__31362__auto___38384)){
args__31369__auto__.push((arguments[i__31363__auto___38385]));

var G__38386 = (i__31363__auto___38385 + (1));
i__31363__auto___38385 = G__38386;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38383))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38383){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38383),args);
});})(g__31465__auto___38383))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31465__auto___38383){
return (function (seq38334){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38334));
});})(g__31465__auto___38383))
;


var g__31465__auto___38387 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31465__auto___38387){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38388 = arguments.length;
var i__31363__auto___38389 = (0);
while(true){
if((i__31363__auto___38389 < len__31362__auto___38388)){
args__31369__auto__.push((arguments[i__31363__auto___38389]));

var G__38390 = (i__31363__auto___38389 + (1));
i__31363__auto___38389 = G__38390;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38387))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38387){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38387),args);
});})(g__31465__auto___38387))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31465__auto___38387){
return (function (seq38335){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38335));
});})(g__31465__auto___38387))
;


var g__31465__auto___38391 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31465__auto___38391){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38392 = arguments.length;
var i__31363__auto___38393 = (0);
while(true){
if((i__31363__auto___38393 < len__31362__auto___38392)){
args__31369__auto__.push((arguments[i__31363__auto___38393]));

var G__38394 = (i__31363__auto___38393 + (1));
i__31363__auto___38393 = G__38394;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38391))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38391){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38391),args);
});})(g__31465__auto___38391))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31465__auto___38391){
return (function (seq38336){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38336));
});})(g__31465__auto___38391))
;


var g__31465__auto___38395 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31465__auto___38395){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38396 = arguments.length;
var i__31363__auto___38397 = (0);
while(true){
if((i__31363__auto___38397 < len__31362__auto___38396)){
args__31369__auto__.push((arguments[i__31363__auto___38397]));

var G__38398 = (i__31363__auto___38397 + (1));
i__31363__auto___38397 = G__38398;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38395))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38395){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38395),args);
});})(g__31465__auto___38395))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31465__auto___38395){
return (function (seq38337){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38337));
});})(g__31465__auto___38395))
;


var g__31465__auto___38399 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31465__auto___38399){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38400 = arguments.length;
var i__31363__auto___38401 = (0);
while(true){
if((i__31363__auto___38401 < len__31362__auto___38400)){
args__31369__auto__.push((arguments[i__31363__auto___38401]));

var G__38402 = (i__31363__auto___38401 + (1));
i__31363__auto___38401 = G__38402;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38399))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38399){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38399),args);
});})(g__31465__auto___38399))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31465__auto___38399){
return (function (seq38338){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38338));
});})(g__31465__auto___38399))
;


var g__31465__auto___38403 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31465__auto___38403){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38404 = arguments.length;
var i__31363__auto___38405 = (0);
while(true){
if((i__31363__auto___38405 < len__31362__auto___38404)){
args__31369__auto__.push((arguments[i__31363__auto___38405]));

var G__38406 = (i__31363__auto___38405 + (1));
i__31363__auto___38405 = G__38406;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38403))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38403){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38403),args);
});})(g__31465__auto___38403))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31465__auto___38403){
return (function (seq38339){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38339));
});})(g__31465__auto___38403))
;


var g__31465__auto___38407 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31465__auto___38407){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38408 = arguments.length;
var i__31363__auto___38409 = (0);
while(true){
if((i__31363__auto___38409 < len__31362__auto___38408)){
args__31369__auto__.push((arguments[i__31363__auto___38409]));

var G__38410 = (i__31363__auto___38409 + (1));
i__31363__auto___38409 = G__38410;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38407))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38407){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38407),args);
});})(g__31465__auto___38407))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31465__auto___38407){
return (function (seq38340){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38340));
});})(g__31465__auto___38407))
;


var g__31465__auto___38411 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31465__auto___38411){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38412 = arguments.length;
var i__31363__auto___38413 = (0);
while(true){
if((i__31363__auto___38413 < len__31362__auto___38412)){
args__31369__auto__.push((arguments[i__31363__auto___38413]));

var G__38414 = (i__31363__auto___38413 + (1));
i__31363__auto___38413 = G__38414;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38411))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38411){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38411),args);
});})(g__31465__auto___38411))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31465__auto___38411){
return (function (seq38341){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38341));
});})(g__31465__auto___38411))
;


var g__31465__auto___38415 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31465__auto___38415){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38416 = arguments.length;
var i__31363__auto___38417 = (0);
while(true){
if((i__31363__auto___38417 < len__31362__auto___38416)){
args__31369__auto__.push((arguments[i__31363__auto___38417]));

var G__38418 = (i__31363__auto___38417 + (1));
i__31363__auto___38417 = G__38418;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31465__auto___38415))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31465__auto___38415){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31465__auto___38415),args);
});})(g__31465__auto___38415))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31465__auto___38415){
return (function (seq38342){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38342));
});})(g__31465__auto___38415))
;

var g__31478__auto___38440 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31478__auto___38440){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38441 = arguments.length;
var i__31363__auto___38442 = (0);
while(true){
if((i__31363__auto___38442 < len__31362__auto___38441)){
args__31369__auto__.push((arguments[i__31363__auto___38442]));

var G__38443 = (i__31363__auto___38442 + (1));
i__31363__auto___38442 = G__38443;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38440))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38440){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38440);
});})(g__31478__auto___38440))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31478__auto___38440){
return (function (seq38419){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38419));
});})(g__31478__auto___38440))
;


var g__31478__auto___38444 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31478__auto___38444){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38445 = arguments.length;
var i__31363__auto___38446 = (0);
while(true){
if((i__31363__auto___38446 < len__31362__auto___38445)){
args__31369__auto__.push((arguments[i__31363__auto___38446]));

var G__38447 = (i__31363__auto___38446 + (1));
i__31363__auto___38446 = G__38447;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38444))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38444){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38444);
});})(g__31478__auto___38444))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31478__auto___38444){
return (function (seq38420){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38420));
});})(g__31478__auto___38444))
;


var g__31478__auto___38448 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31478__auto___38448){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38449 = arguments.length;
var i__31363__auto___38450 = (0);
while(true){
if((i__31363__auto___38450 < len__31362__auto___38449)){
args__31369__auto__.push((arguments[i__31363__auto___38450]));

var G__38451 = (i__31363__auto___38450 + (1));
i__31363__auto___38450 = G__38451;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38448))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38448){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38448);
});})(g__31478__auto___38448))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31478__auto___38448){
return (function (seq38421){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38421));
});})(g__31478__auto___38448))
;


var g__31478__auto___38452 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31478__auto___38452){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38453 = arguments.length;
var i__31363__auto___38454 = (0);
while(true){
if((i__31363__auto___38454 < len__31362__auto___38453)){
args__31369__auto__.push((arguments[i__31363__auto___38454]));

var G__38455 = (i__31363__auto___38454 + (1));
i__31363__auto___38454 = G__38455;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38452))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38452){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38452);
});})(g__31478__auto___38452))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31478__auto___38452){
return (function (seq38422){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38422));
});})(g__31478__auto___38452))
;


var g__31478__auto___38456 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31478__auto___38456){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38457 = arguments.length;
var i__31363__auto___38458 = (0);
while(true){
if((i__31363__auto___38458 < len__31362__auto___38457)){
args__31369__auto__.push((arguments[i__31363__auto___38458]));

var G__38459 = (i__31363__auto___38458 + (1));
i__31363__auto___38458 = G__38459;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38456))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38456){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38456);
});})(g__31478__auto___38456))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31478__auto___38456){
return (function (seq38423){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38423));
});})(g__31478__auto___38456))
;


var g__31478__auto___38460 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31478__auto___38460){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38461 = arguments.length;
var i__31363__auto___38462 = (0);
while(true){
if((i__31363__auto___38462 < len__31362__auto___38461)){
args__31369__auto__.push((arguments[i__31363__auto___38462]));

var G__38463 = (i__31363__auto___38462 + (1));
i__31363__auto___38462 = G__38463;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38460))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38460){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38460);
});})(g__31478__auto___38460))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31478__auto___38460){
return (function (seq38424){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38424));
});})(g__31478__auto___38460))
;


var g__31478__auto___38464 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31478__auto___38464){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38465 = arguments.length;
var i__31363__auto___38466 = (0);
while(true){
if((i__31363__auto___38466 < len__31362__auto___38465)){
args__31369__auto__.push((arguments[i__31363__auto___38466]));

var G__38467 = (i__31363__auto___38466 + (1));
i__31363__auto___38466 = G__38467;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38464))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38464){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38464);
});})(g__31478__auto___38464))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31478__auto___38464){
return (function (seq38425){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38425));
});})(g__31478__auto___38464))
;


var g__31478__auto___38468 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31478__auto___38468){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38469 = arguments.length;
var i__31363__auto___38470 = (0);
while(true){
if((i__31363__auto___38470 < len__31362__auto___38469)){
args__31369__auto__.push((arguments[i__31363__auto___38470]));

var G__38471 = (i__31363__auto___38470 + (1));
i__31363__auto___38470 = G__38471;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38468))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38468){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38468);
});})(g__31478__auto___38468))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31478__auto___38468){
return (function (seq38426){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38426));
});})(g__31478__auto___38468))
;


var g__31478__auto___38472 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31478__auto___38472){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38473 = arguments.length;
var i__31363__auto___38474 = (0);
while(true){
if((i__31363__auto___38474 < len__31362__auto___38473)){
args__31369__auto__.push((arguments[i__31363__auto___38474]));

var G__38475 = (i__31363__auto___38474 + (1));
i__31363__auto___38474 = G__38475;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38472))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38472){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38472);
});})(g__31478__auto___38472))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31478__auto___38472){
return (function (seq38427){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38427));
});})(g__31478__auto___38472))
;


var g__31478__auto___38476 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31478__auto___38476){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38477 = arguments.length;
var i__31363__auto___38478 = (0);
while(true){
if((i__31363__auto___38478 < len__31362__auto___38477)){
args__31369__auto__.push((arguments[i__31363__auto___38478]));

var G__38479 = (i__31363__auto___38478 + (1));
i__31363__auto___38478 = G__38479;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38476))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38476){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38476);
});})(g__31478__auto___38476))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31478__auto___38476){
return (function (seq38428){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38428));
});})(g__31478__auto___38476))
;


var g__31478__auto___38480 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31478__auto___38480){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38481 = arguments.length;
var i__31363__auto___38482 = (0);
while(true){
if((i__31363__auto___38482 < len__31362__auto___38481)){
args__31369__auto__.push((arguments[i__31363__auto___38482]));

var G__38483 = (i__31363__auto___38482 + (1));
i__31363__auto___38482 = G__38483;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38480))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38480){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38480);
});})(g__31478__auto___38480))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31478__auto___38480){
return (function (seq38429){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38429));
});})(g__31478__auto___38480))
;


var g__31478__auto___38484 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31478__auto___38484){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38485 = arguments.length;
var i__31363__auto___38486 = (0);
while(true){
if((i__31363__auto___38486 < len__31362__auto___38485)){
args__31369__auto__.push((arguments[i__31363__auto___38486]));

var G__38487 = (i__31363__auto___38486 + (1));
i__31363__auto___38486 = G__38487;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38484))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38484){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38484);
});})(g__31478__auto___38484))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31478__auto___38484){
return (function (seq38430){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38430));
});})(g__31478__auto___38484))
;


var g__31478__auto___38488 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31478__auto___38488){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38489 = arguments.length;
var i__31363__auto___38490 = (0);
while(true){
if((i__31363__auto___38490 < len__31362__auto___38489)){
args__31369__auto__.push((arguments[i__31363__auto___38490]));

var G__38491 = (i__31363__auto___38490 + (1));
i__31363__auto___38490 = G__38491;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38488))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38488){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38488);
});})(g__31478__auto___38488))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31478__auto___38488){
return (function (seq38431){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38431));
});})(g__31478__auto___38488))
;


var g__31478__auto___38492 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31478__auto___38492){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38493 = arguments.length;
var i__31363__auto___38494 = (0);
while(true){
if((i__31363__auto___38494 < len__31362__auto___38493)){
args__31369__auto__.push((arguments[i__31363__auto___38494]));

var G__38495 = (i__31363__auto___38494 + (1));
i__31363__auto___38494 = G__38495;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38492))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38492){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38492);
});})(g__31478__auto___38492))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31478__auto___38492){
return (function (seq38432){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38432));
});})(g__31478__auto___38492))
;


var g__31478__auto___38496 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31478__auto___38496){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38497 = arguments.length;
var i__31363__auto___38498 = (0);
while(true){
if((i__31363__auto___38498 < len__31362__auto___38497)){
args__31369__auto__.push((arguments[i__31363__auto___38498]));

var G__38499 = (i__31363__auto___38498 + (1));
i__31363__auto___38498 = G__38499;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38496))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38496){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38496);
});})(g__31478__auto___38496))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31478__auto___38496){
return (function (seq38433){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38433));
});})(g__31478__auto___38496))
;


var g__31478__auto___38500 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31478__auto___38500){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38501 = arguments.length;
var i__31363__auto___38502 = (0);
while(true){
if((i__31363__auto___38502 < len__31362__auto___38501)){
args__31369__auto__.push((arguments[i__31363__auto___38502]));

var G__38503 = (i__31363__auto___38502 + (1));
i__31363__auto___38502 = G__38503;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38500))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38500){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38500);
});})(g__31478__auto___38500))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31478__auto___38500){
return (function (seq38434){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38434));
});})(g__31478__auto___38500))
;


var g__31478__auto___38504 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31478__auto___38504){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38505 = arguments.length;
var i__31363__auto___38506 = (0);
while(true){
if((i__31363__auto___38506 < len__31362__auto___38505)){
args__31369__auto__.push((arguments[i__31363__auto___38506]));

var G__38507 = (i__31363__auto___38506 + (1));
i__31363__auto___38506 = G__38507;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38504))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38504){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38504);
});})(g__31478__auto___38504))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31478__auto___38504){
return (function (seq38435){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38435));
});})(g__31478__auto___38504))
;


var g__31478__auto___38508 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31478__auto___38508){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38509 = arguments.length;
var i__31363__auto___38510 = (0);
while(true){
if((i__31363__auto___38510 < len__31362__auto___38509)){
args__31369__auto__.push((arguments[i__31363__auto___38510]));

var G__38511 = (i__31363__auto___38510 + (1));
i__31363__auto___38510 = G__38511;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38508))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38508){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38508);
});})(g__31478__auto___38508))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31478__auto___38508){
return (function (seq38436){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38436));
});})(g__31478__auto___38508))
;


var g__31478__auto___38512 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31478__auto___38512){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38513 = arguments.length;
var i__31363__auto___38514 = (0);
while(true){
if((i__31363__auto___38514 < len__31362__auto___38513)){
args__31369__auto__.push((arguments[i__31363__auto___38514]));

var G__38515 = (i__31363__auto___38514 + (1));
i__31363__auto___38514 = G__38515;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38512))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38512){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38512);
});})(g__31478__auto___38512))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31478__auto___38512){
return (function (seq38437){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38437));
});})(g__31478__auto___38512))
;


var g__31478__auto___38516 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31478__auto___38516){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38517 = arguments.length;
var i__31363__auto___38518 = (0);
while(true){
if((i__31363__auto___38518 < len__31362__auto___38517)){
args__31369__auto__.push((arguments[i__31363__auto___38518]));

var G__38519 = (i__31363__auto___38518 + (1));
i__31363__auto___38518 = G__38519;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38516))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38516){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38516);
});})(g__31478__auto___38516))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31478__auto___38516){
return (function (seq38438){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38438));
});})(g__31478__auto___38516))
;


var g__31478__auto___38520 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31478__auto___38520){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38521 = arguments.length;
var i__31363__auto___38522 = (0);
while(true){
if((i__31363__auto___38522 < len__31362__auto___38521)){
args__31369__auto__.push((arguments[i__31363__auto___38522]));

var G__38523 = (i__31363__auto___38522 + (1));
i__31363__auto___38522 = G__38523;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});})(g__31478__auto___38520))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31478__auto___38520){
return (function (args){
return cljs.core.deref.call(null,g__31478__auto___38520);
});})(g__31478__auto___38520))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31478__auto___38520){
return (function (seq38439){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38439));
});})(g__31478__auto___38520))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31369__auto__ = [];
var len__31362__auto___38526 = arguments.length;
var i__31363__auto___38527 = (0);
while(true){
if((i__31363__auto___38527 < len__31362__auto___38526)){
args__31369__auto__.push((arguments[i__31363__auto___38527]));

var G__38528 = (i__31363__auto___38527 + (1));
i__31363__auto___38527 = G__38528;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__38524_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38524_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq38525){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38525));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__38529_SHARP_){
return (new Date(p1__38529_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1521406489226
