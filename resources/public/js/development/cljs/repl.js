// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39302){
var map__39303 = p__39302;
var map__39303__$1 = ((((!((map__39303 == null)))?((((map__39303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39303):map__39303);
var m = map__39303__$1;
var n = cljs.core.get.call(null,map__39303__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39303__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39305_39327 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39306_39328 = null;
var count__39307_39329 = (0);
var i__39308_39330 = (0);
while(true){
if((i__39308_39330 < count__39307_39329)){
var f_39331 = cljs.core._nth.call(null,chunk__39306_39328,i__39308_39330);
cljs.core.println.call(null,"  ",f_39331);

var G__39332 = seq__39305_39327;
var G__39333 = chunk__39306_39328;
var G__39334 = count__39307_39329;
var G__39335 = (i__39308_39330 + (1));
seq__39305_39327 = G__39332;
chunk__39306_39328 = G__39333;
count__39307_39329 = G__39334;
i__39308_39330 = G__39335;
continue;
} else {
var temp__5457__auto___39336 = cljs.core.seq.call(null,seq__39305_39327);
if(temp__5457__auto___39336){
var seq__39305_39337__$1 = temp__5457__auto___39336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39305_39337__$1)){
var c__31014__auto___39338 = cljs.core.chunk_first.call(null,seq__39305_39337__$1);
var G__39339 = cljs.core.chunk_rest.call(null,seq__39305_39337__$1);
var G__39340 = c__31014__auto___39338;
var G__39341 = cljs.core.count.call(null,c__31014__auto___39338);
var G__39342 = (0);
seq__39305_39327 = G__39339;
chunk__39306_39328 = G__39340;
count__39307_39329 = G__39341;
i__39308_39330 = G__39342;
continue;
} else {
var f_39343 = cljs.core.first.call(null,seq__39305_39337__$1);
cljs.core.println.call(null,"  ",f_39343);

var G__39344 = cljs.core.next.call(null,seq__39305_39337__$1);
var G__39345 = null;
var G__39346 = (0);
var G__39347 = (0);
seq__39305_39327 = G__39344;
chunk__39306_39328 = G__39345;
count__39307_39329 = G__39346;
i__39308_39330 = G__39347;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39348 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30083__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39348);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39348)))?cljs.core.second.call(null,arglists_39348):arglists_39348));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39309_39349 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39310_39350 = null;
var count__39311_39351 = (0);
var i__39312_39352 = (0);
while(true){
if((i__39312_39352 < count__39311_39351)){
var vec__39313_39353 = cljs.core._nth.call(null,chunk__39310_39350,i__39312_39352);
var name_39354 = cljs.core.nth.call(null,vec__39313_39353,(0),null);
var map__39316_39355 = cljs.core.nth.call(null,vec__39313_39353,(1),null);
var map__39316_39356__$1 = ((((!((map__39316_39355 == null)))?((((map__39316_39355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39316_39355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39316_39355):map__39316_39355);
var doc_39357 = cljs.core.get.call(null,map__39316_39356__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39358 = cljs.core.get.call(null,map__39316_39356__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39354);

cljs.core.println.call(null," ",arglists_39358);

if(cljs.core.truth_(doc_39357)){
cljs.core.println.call(null," ",doc_39357);
} else {
}

var G__39359 = seq__39309_39349;
var G__39360 = chunk__39310_39350;
var G__39361 = count__39311_39351;
var G__39362 = (i__39312_39352 + (1));
seq__39309_39349 = G__39359;
chunk__39310_39350 = G__39360;
count__39311_39351 = G__39361;
i__39312_39352 = G__39362;
continue;
} else {
var temp__5457__auto___39363 = cljs.core.seq.call(null,seq__39309_39349);
if(temp__5457__auto___39363){
var seq__39309_39364__$1 = temp__5457__auto___39363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39309_39364__$1)){
var c__31014__auto___39365 = cljs.core.chunk_first.call(null,seq__39309_39364__$1);
var G__39366 = cljs.core.chunk_rest.call(null,seq__39309_39364__$1);
var G__39367 = c__31014__auto___39365;
var G__39368 = cljs.core.count.call(null,c__31014__auto___39365);
var G__39369 = (0);
seq__39309_39349 = G__39366;
chunk__39310_39350 = G__39367;
count__39311_39351 = G__39368;
i__39312_39352 = G__39369;
continue;
} else {
var vec__39318_39370 = cljs.core.first.call(null,seq__39309_39364__$1);
var name_39371 = cljs.core.nth.call(null,vec__39318_39370,(0),null);
var map__39321_39372 = cljs.core.nth.call(null,vec__39318_39370,(1),null);
var map__39321_39373__$1 = ((((!((map__39321_39372 == null)))?((((map__39321_39372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39321_39372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39321_39372):map__39321_39372);
var doc_39374 = cljs.core.get.call(null,map__39321_39373__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39375 = cljs.core.get.call(null,map__39321_39373__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39371);

cljs.core.println.call(null," ",arglists_39375);

if(cljs.core.truth_(doc_39374)){
cljs.core.println.call(null," ",doc_39374);
} else {
}

var G__39376 = cljs.core.next.call(null,seq__39309_39364__$1);
var G__39377 = null;
var G__39378 = (0);
var G__39379 = (0);
seq__39309_39349 = G__39376;
chunk__39310_39350 = G__39377;
count__39311_39351 = G__39378;
i__39312_39352 = G__39379;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__39323 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39324 = null;
var count__39325 = (0);
var i__39326 = (0);
while(true){
if((i__39326 < count__39325)){
var role = cljs.core._nth.call(null,chunk__39324,i__39326);
var temp__5457__auto___39380__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39380__$1)){
var spec_39381 = temp__5457__auto___39380__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39381));
} else {
}

var G__39382 = seq__39323;
var G__39383 = chunk__39324;
var G__39384 = count__39325;
var G__39385 = (i__39326 + (1));
seq__39323 = G__39382;
chunk__39324 = G__39383;
count__39325 = G__39384;
i__39326 = G__39385;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__39323);
if(temp__5457__auto____$1){
var seq__39323__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39323__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__39323__$1);
var G__39386 = cljs.core.chunk_rest.call(null,seq__39323__$1);
var G__39387 = c__31014__auto__;
var G__39388 = cljs.core.count.call(null,c__31014__auto__);
var G__39389 = (0);
seq__39323 = G__39386;
chunk__39324 = G__39387;
count__39325 = G__39388;
i__39326 = G__39389;
continue;
} else {
var role = cljs.core.first.call(null,seq__39323__$1);
var temp__5457__auto___39390__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39390__$2)){
var spec_39391 = temp__5457__auto___39390__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39391));
} else {
}

var G__39392 = cljs.core.next.call(null,seq__39323__$1);
var G__39393 = null;
var G__39394 = (0);
var G__39395 = (0);
seq__39323 = G__39392;
chunk__39324 = G__39393;
count__39325 = G__39394;
i__39326 = G__39395;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1526331146486
