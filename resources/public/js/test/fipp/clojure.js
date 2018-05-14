// Compiled by ClojureScript 1.9.946 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__10068__auto__ = [];
var len__10061__auto___10967 = arguments.length;
var i__10062__auto___10968 = (0);
while(true){
if((i__10062__auto___10968 < len__10061__auto___10967)){
args__10068__auto__.push((arguments[i__10062__auto___10968]));

var G__10969 = (i__10062__auto___10968 + (1));
i__10062__auto___10968 = G__10969;
continue;
} else {
}
break;
}

var argseq__10069__auto__ = ((((0) < args__10068__auto__.length))?(new cljs.core.IndexedSeq(args__10068__auto__.slice((0)),(0),null)):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__10069__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

fipp.clojure.list_group.cljs$lang$applyTo = (function (seq10966){
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10966));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__10970){
var vec__10971 = p__10970;
var test = cljs.core.nth.call(null,vec__10971,(0),null);
var result = cljs.core.nth.call(null,vec__10971,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__10975){
var vec__10976 = p__10975;
var seq__10977 = cljs.core.seq.call(null,vec__10976);
var first__10978 = cljs.core.first.call(null,seq__10977);
var seq__10977__$1 = cljs.core.next.call(null,seq__10977);
var head = first__10978;
var first__10978__$1 = cljs.core.first.call(null,seq__10977__$1);
var seq__10977__$2 = cljs.core.next.call(null,seq__10977__$1);
var expr = first__10978__$1;
var more = seq__10977__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__10976,seq__10977,first__10978,seq__10977__$1,head,first__10978__$1,seq__10977__$2,expr,more){
return (function (p1__10974_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__10974_SHARP_);
});})(clauses,default$,vec__10976,seq__10977,first__10978,seq__10977__$1,head,first__10978__$1,seq__10977__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__10980){
var vec__10981 = p__10980;
var seq__10982 = cljs.core.seq.call(null,vec__10981);
var first__10983 = cljs.core.first.call(null,seq__10982);
var seq__10982__$1 = cljs.core.next.call(null,seq__10982);
var head = first__10983;
var more = seq__10982__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__10981,seq__10982,first__10983,seq__10982__$1,head,more){
return (function (p1__10979_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__10979_SHARP_);
});})(clauses,vec__10981,seq__10982,first__10983,seq__10982__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__10985){
var vec__10986 = p__10985;
var seq__10987 = cljs.core.seq.call(null,vec__10986);
var first__10988 = cljs.core.first.call(null,seq__10987);
var seq__10987__$1 = cljs.core.next.call(null,seq__10987);
var head = first__10988;
var first__10988__$1 = cljs.core.first.call(null,seq__10987__$1);
var seq__10987__$2 = cljs.core.next.call(null,seq__10987__$1);
var pred = first__10988__$1;
var first__10988__$2 = cljs.core.first.call(null,seq__10987__$2);
var seq__10987__$3 = cljs.core.next.call(null,seq__10987__$2);
var expr = first__10988__$2;
var more = seq__10987__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__10986,seq__10987,first__10988,seq__10987__$1,head,first__10988__$1,seq__10987__$2,pred,first__10988__$2,seq__10987__$3,expr,more){
return (function (p1__10984_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__10984_SHARP_);
});})(clauses,default$,vec__10986,seq__10987,first__10988,seq__10987__$1,head,first__10988__$1,seq__10987__$2,pred,first__10988__$2,seq__10987__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__10990){
var vec__10991 = p__10990;
var seq__10992 = cljs.core.seq.call(null,vec__10991);
var first__10993 = cljs.core.first.call(null,seq__10992);
var seq__10992__$1 = cljs.core.next.call(null,seq__10992);
var head = first__10993;
var stmts = seq__10992__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__10991,seq__10992,first__10993,seq__10992__$1,head,stmts){
return (function (p1__10989_SHARP_){
return fipp.visit.visit.call(null,p,p1__10989_SHARP_);
});})(vec__10991,seq__10992,first__10993,seq__10992__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__10995){
var vec__10996 = p__10995;
var seq__10997 = cljs.core.seq.call(null,vec__10996);
var first__10998 = cljs.core.first.call(null,seq__10997);
var seq__10997__$1 = cljs.core.next.call(null,seq__10997);
var head = first__10998;
var first__10998__$1 = cljs.core.first.call(null,seq__10997__$1);
var seq__10997__$2 = cljs.core.next.call(null,seq__10997__$1);
var test = first__10998__$1;
var more = seq__10997__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__10996,seq__10997,first__10998,seq__10997__$1,head,first__10998__$1,seq__10997__$2,test,more){
return (function (p1__10994_SHARP_){
return fipp.visit.visit.call(null,p,p1__10994_SHARP_);
});})(vec__10996,seq__10997,first__10998,seq__10997__$1,head,first__10998__$1,seq__10997__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__11000){
var vec__11001 = p__11000;
var seq__11002 = cljs.core.seq.call(null,vec__11001);
var first__11003 = cljs.core.first.call(null,seq__11002);
var seq__11002__$1 = cljs.core.next.call(null,seq__11002);
var params = first__11003;
var body = seq__11002__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__11001,seq__11002,first__11003,seq__11002__$1,params,body){
return (function (p1__10999_SHARP_){
return fipp.visit.visit.call(null,p,p1__10999_SHARP_);
});})(vec__11001,seq__11002,first__11003,seq__11002__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__11006){
var vec__11007 = p__11006;
var seq__11008 = cljs.core.seq.call(null,vec__11007);
var first__11009 = cljs.core.first.call(null,seq__11008);
var seq__11008__$1 = cljs.core.next.call(null,seq__11008);
var head = first__11009;
var first__11009__$1 = cljs.core.first.call(null,seq__11008__$1);
var seq__11008__$2 = cljs.core.next.call(null,seq__11008__$1);
var fn_name = first__11009__$1;
var more = seq__11008__$2;
var vec__11010 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__11010,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__11010,(1),null);
var vec__11013 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__11013,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__11013,(1),null);
var vec__11016 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__11016,(0),null);
var body = cljs.core.nth.call(null,vec__11016,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__8770__auto__ = params;
if(cljs.core.truth_(and__8770__auto__)){
return ((docstring == null)) && ((attr_map == null));
} else {
return and__8770__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__8770__auto__ = params;
if(cljs.core.truth_(and__8770__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__8770__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__11010,docstring,more__$1,vec__11013,attr_map,more__$2,vec__11016,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11007,seq__11008,first__11009,seq__11008__$1,head,first__11009__$1,seq__11008__$2,fn_name,more){
return (function (p1__11004_SHARP_){
return fipp.visit.visit.call(null,p,p1__11004_SHARP_);
});})(vec__11010,docstring,more__$1,vec__11013,attr_map,more__$2,vec__11016,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11007,seq__11008,first__11009,seq__11008__$1,head,first__11009__$1,seq__11008__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__11010,docstring,more__$1,vec__11013,attr_map,more__$2,vec__11016,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11007,seq__11008,first__11009,seq__11008__$1,head,first__11009__$1,seq__11008__$2,fn_name,more){
return (function (p1__11005_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__11005_SHARP_);
});})(vec__11010,docstring,more__$1,vec__11013,attr_map,more__$2,vec__11016,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11007,seq__11008,first__11009,seq__11008__$1,head,first__11009__$1,seq__11008__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__11021){
var vec__11022 = p__11021;
var seq__11023 = cljs.core.seq.call(null,vec__11022);
var first__11024 = cljs.core.first.call(null,seq__11023);
var seq__11023__$1 = cljs.core.next.call(null,seq__11023);
var head = first__11024;
var more = seq__11023__$1;
var vec__11025 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__11025,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__11025,(1),null);
var vec__11028 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__11028,(0),null);
var body = cljs.core.nth.call(null,vec__11028,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__11025,fn_name,more__$1,vec__11028,params,body,vec__11022,seq__11023,first__11024,seq__11023__$1,head,more){
return (function (p1__11019_SHARP_){
return fipp.visit.visit.call(null,p,p1__11019_SHARP_);
});})(vec__11025,fn_name,more__$1,vec__11028,params,body,vec__11022,seq__11023,first__11024,seq__11023__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__11025,fn_name,more__$1,vec__11028,params,body,vec__11022,seq__11023,first__11024,seq__11023__$1,head,more){
return (function (p1__11020_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__11020_SHARP_);
});})(vec__11025,fn_name,more__$1,vec__11028,params,body,vec__11022,seq__11023,first__11024,seq__11023__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__11034){
var vec__11035 = p__11034;
var _ = cljs.core.nth.call(null,vec__11035,(0),null);
var params = cljs.core.nth.call(null,vec__11035,(1),null);
var body = cljs.core.nth.call(null,vec__11035,(2),null);
var form = vec__11035;
if((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body))){
var vec__11038 = cljs.core.split_with.call(null,((function (vec__11035,_,params,body,form){
return (function (p1__11031_SHARP_){
return cljs.core.not_EQ_.call(null,p1__11031_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__11035,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__11038,(0),null);
var rests = cljs.core.nth.call(null,vec__11038,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__11038,inits,rests,vec__11035,_,params,body,form){
return (function (p1__11032_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__11032_SHARP_ + (1)))].join(''));
});})(vec__11038,inits,rests,vec__11035,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__11038,inits,rests,params_STAR_,body_STAR_,vec__11035,_,params,body,form){
return (function (p1__11033_SHARP_){
return fipp.visit.visit.call(null,p,p1__11033_SHARP_);
});})(vec__11038,inits,rests,params_STAR_,body_STAR_,vec__11035,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__11042){
var vec__11043 = p__11042;
var seq__11044 = cljs.core.seq.call(null,vec__11043);
var first__11045 = cljs.core.first.call(null,seq__11044);
var seq__11044__$1 = cljs.core.next.call(null,seq__11044);
var head = first__11045;
var clauses = seq__11044__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__11043,seq__11044,first__11045,seq__11044__$1,head,clauses){
return (function (p1__11041_SHARP_){
return fipp.visit.visit.call(null,p,p1__11041_SHARP_);
});})(vec__11043,seq__11044,first__11045,seq__11044__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__11047){
var vec__11048 = p__11047;
var seq__11049 = cljs.core.seq.call(null,vec__11048);
var first__11050 = cljs.core.first.call(null,seq__11049);
var seq__11049__$1 = cljs.core.next.call(null,seq__11049);
var head = first__11050;
var first__11050__$1 = cljs.core.first.call(null,seq__11049__$1);
var seq__11049__$2 = cljs.core.next.call(null,seq__11049__$1);
var ns_sym = first__11050__$1;
var more = seq__11049__$2;
var vec__11051 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__11051,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__11051,(1),null);
var vec__11054 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__11054,(0),null);
var specs = cljs.core.nth.call(null,vec__11054,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__11051,docstring,more__$1,vec__11054,attr_map,specs,vec__11048,seq__11049,first__11050,seq__11049__$1,head,first__11050__$1,seq__11049__$2,ns_sym,more){
return (function (p1__11046_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__11046_SHARP_);
});})(vec__11051,docstring,more__$1,vec__11054,attr_map,specs,vec__11048,seq__11049,first__11050,seq__11049__$1,head,first__11050__$1,seq__11049__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__11057){
var vec__11058 = p__11057;
var macro = cljs.core.nth.call(null,vec__11058,(0),null);
var arg = cljs.core.nth.call(null,vec__11058,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__11061 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__11061__$1 = (((G__11061 instanceof cljs.core.Keyword))?G__11061.fqn:null);
switch (G__11061__$1) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11061__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__9664__auto__ = (function fipp$clojure$pretty_bindings_$_iter__11063(s__11064){
return (new cljs.core.LazySeq(null,(function (){
var s__11064__$1 = s__11064;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__11064__$1);
if(temp__5457__auto__){
var s__11064__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11064__$2)){
var c__9662__auto__ = cljs.core.chunk_first.call(null,s__11064__$2);
var size__9663__auto__ = cljs.core.count.call(null,c__9662__auto__);
var b__11066 = cljs.core.chunk_buffer.call(null,size__9663__auto__);
if((function (){var i__11065 = (0);
while(true){
if((i__11065 < size__9663__auto__)){
var vec__11067 = cljs.core._nth.call(null,c__9662__auto__,i__11065);
var k = cljs.core.nth.call(null,vec__11067,(0),null);
var v = cljs.core.nth.call(null,vec__11067,(1),null);
cljs.core.chunk_append.call(null,b__11066,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__11073 = (i__11065 + (1));
i__11065 = G__11073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11066),fipp$clojure$pretty_bindings_$_iter__11063.call(null,cljs.core.chunk_rest.call(null,s__11064__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11066),null);
}
} else {
var vec__11070 = cljs.core.first.call(null,s__11064__$2);
var k = cljs.core.nth.call(null,vec__11070,(0),null);
var v = cljs.core.nth.call(null,vec__11070,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__11063.call(null,cljs.core.rest.call(null,s__11064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9664__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__11075){
var vec__11076 = p__11075;
var seq__11077 = cljs.core.seq.call(null,vec__11076);
var first__11078 = cljs.core.first.call(null,seq__11077);
var seq__11077__$1 = cljs.core.next.call(null,seq__11077);
var head = first__11078;
var first__11078__$1 = cljs.core.first.call(null,seq__11077__$1);
var seq__11077__$2 = cljs.core.next.call(null,seq__11077__$1);
var bvec = first__11078__$1;
var body = seq__11077__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__11076,seq__11077,first__11078,seq__11077__$1,head,first__11078__$1,seq__11077__$2,bvec,body){
return (function (p1__11074_SHARP_){
return fipp.visit.visit.call(null,p,p1__11074_SHARP_);
});})(vec__11076,seq__11077,first__11078,seq__11077__$1,head,first__11078__$1,seq__11077__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__11079_SHARP_){
return fipp.visit.visit.call(null,p,p1__11079_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__11080){
var vec__11081 = p__11080;
var seq__11082 = cljs.core.seq.call(null,vec__11081);
var first__11083 = cljs.core.first.call(null,seq__11082);
var seq__11082__$1 = cljs.core.next.call(null,seq__11082);
var head = first__11083;
var first__11083__$1 = cljs.core.first.call(null,seq__11082__$1);
var seq__11082__$2 = cljs.core.next.call(null,seq__11082__$1);
var fields = first__11083__$1;
var opts_PLUS_specs = seq__11082__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__11084){
var vec__11085 = p__11084;
var seq__11086 = cljs.core.seq.call(null,vec__11085);
var first__11087 = cljs.core.first.call(null,seq__11086);
var seq__11086__$1 = cljs.core.next.call(null,seq__11086);
var head = first__11087;
var opts_PLUS_specs = seq__11086__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9664__auto__ = (function fipp$clojure$build_symbol_map_$_iter__11088(s__11089){
return (new cljs.core.LazySeq(null,(function (){
var s__11089__$1 = s__11089;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__11089__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__11096 = cljs.core.first.call(null,xs__6012__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__11096,(0),null);
var syms = cljs.core.nth.call(null,vec__11096,(1),null);
var iterys__9660__auto__ = ((function (s__11089__$1,vec__11096,pretty_fn,syms,xs__6012__auto__,temp__5457__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__11088_$_iter__11090(s__11091){
return (new cljs.core.LazySeq(null,((function (s__11089__$1,vec__11096,pretty_fn,syms,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__11091__$1 = s__11091;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__11091__$1);
if(temp__5457__auto____$1){
var xs__6012__auto____$1 = temp__5457__auto____$1;
var sym = cljs.core.first.call(null,xs__6012__auto____$1);
var iterys__9660__auto__ = ((function (s__11091__$1,s__11089__$1,sym,xs__6012__auto____$1,temp__5457__auto____$1,vec__11096,pretty_fn,syms,xs__6012__auto__,temp__5457__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__11088_$_iter__11090_$_iter__11092(s__11093){
return (new cljs.core.LazySeq(null,((function (s__11091__$1,s__11089__$1,sym,xs__6012__auto____$1,temp__5457__auto____$1,vec__11096,pretty_fn,syms,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__11093__$1 = s__11093;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__11093__$1);
if(temp__5457__auto____$2){
var s__11093__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11093__$2)){
var c__9662__auto__ = cljs.core.chunk_first.call(null,s__11093__$2);
var size__9663__auto__ = cljs.core.count.call(null,c__9662__auto__);
var b__11095 = cljs.core.chunk_buffer.call(null,size__9663__auto__);
if((function (){var i__11094 = (0);
while(true){
if((i__11094 < size__9663__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__9662__auto__,i__11094);
cljs.core.chunk_append.call(null,b__11095,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__11099 = (i__11094 + (1));
i__11094 = G__11099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11095),fipp$clojure$build_symbol_map_$_iter__11088_$_iter__11090_$_iter__11092.call(null,cljs.core.chunk_rest.call(null,s__11093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11095),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__11093__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__11088_$_iter__11090_$_iter__11092.call(null,cljs.core.rest.call(null,s__11093__$2)));
}
} else {
return null;
}
break;
}
});})(s__11091__$1,s__11089__$1,sym,xs__6012__auto____$1,temp__5457__auto____$1,vec__11096,pretty_fn,syms,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__11091__$1,s__11089__$1,sym,xs__6012__auto____$1,temp__5457__auto____$1,vec__11096,pretty_fn,syms,xs__6012__auto__,temp__5457__auto__))
;
var fs__9661__auto__ = cljs.core.seq.call(null,iterys__9660__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__9661__auto__){
return cljs.core.concat.call(null,fs__9661__auto__,fipp$clojure$build_symbol_map_$_iter__11088_$_iter__11090.call(null,cljs.core.rest.call(null,s__11091__$1)));
} else {
var G__11100 = cljs.core.rest.call(null,s__11091__$1);
s__11091__$1 = G__11100;
continue;
}
} else {
return null;
}
break;
}
});})(s__11089__$1,vec__11096,pretty_fn,syms,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__11089__$1,vec__11096,pretty_fn,syms,xs__6012__auto__,temp__5457__auto__))
;
var fs__9661__auto__ = cljs.core.seq.call(null,iterys__9660__auto__.call(null,syms));
if(fs__9661__auto__){
return cljs.core.concat.call(null,fs__9661__auto__,fipp$clojure$build_symbol_map_$_iter__11088.call(null,cljs.core.rest.call(null,s__11089__$1)));
} else {
var G__11101 = cljs.core.rest.call(null,s__11089__$1);
s__11089__$1 = G__11101;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9664__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var G__11103 = arguments.length;
switch (G__11103) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=clojure.js.map
