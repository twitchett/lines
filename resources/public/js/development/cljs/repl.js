// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39109){
var map__39110 = p__39109;
var map__39110__$1 = ((((!((map__39110 == null)))?((((map__39110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39110):map__39110);
var m = map__39110__$1;
var n = cljs.core.get.call(null,map__39110__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39110__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39112_39134 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39113_39135 = null;
var count__39114_39136 = (0);
var i__39115_39137 = (0);
while(true){
if((i__39115_39137 < count__39114_39136)){
var f_39138 = cljs.core._nth.call(null,chunk__39113_39135,i__39115_39137);
cljs.core.println.call(null,"  ",f_39138);

var G__39139 = seq__39112_39134;
var G__39140 = chunk__39113_39135;
var G__39141 = count__39114_39136;
var G__39142 = (i__39115_39137 + (1));
seq__39112_39134 = G__39139;
chunk__39113_39135 = G__39140;
count__39114_39136 = G__39141;
i__39115_39137 = G__39142;
continue;
} else {
var temp__5457__auto___39143 = cljs.core.seq.call(null,seq__39112_39134);
if(temp__5457__auto___39143){
var seq__39112_39144__$1 = temp__5457__auto___39143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39112_39144__$1)){
var c__31014__auto___39145 = cljs.core.chunk_first.call(null,seq__39112_39144__$1);
var G__39146 = cljs.core.chunk_rest.call(null,seq__39112_39144__$1);
var G__39147 = c__31014__auto___39145;
var G__39148 = cljs.core.count.call(null,c__31014__auto___39145);
var G__39149 = (0);
seq__39112_39134 = G__39146;
chunk__39113_39135 = G__39147;
count__39114_39136 = G__39148;
i__39115_39137 = G__39149;
continue;
} else {
var f_39150 = cljs.core.first.call(null,seq__39112_39144__$1);
cljs.core.println.call(null,"  ",f_39150);

var G__39151 = cljs.core.next.call(null,seq__39112_39144__$1);
var G__39152 = null;
var G__39153 = (0);
var G__39154 = (0);
seq__39112_39134 = G__39151;
chunk__39113_39135 = G__39152;
count__39114_39136 = G__39153;
i__39115_39137 = G__39154;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39155 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30083__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39155);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39155)))?cljs.core.second.call(null,arglists_39155):arglists_39155));
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
var seq__39116_39156 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39117_39157 = null;
var count__39118_39158 = (0);
var i__39119_39159 = (0);
while(true){
if((i__39119_39159 < count__39118_39158)){
var vec__39120_39160 = cljs.core._nth.call(null,chunk__39117_39157,i__39119_39159);
var name_39161 = cljs.core.nth.call(null,vec__39120_39160,(0),null);
var map__39123_39162 = cljs.core.nth.call(null,vec__39120_39160,(1),null);
var map__39123_39163__$1 = ((((!((map__39123_39162 == null)))?((((map__39123_39162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39123_39162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39123_39162):map__39123_39162);
var doc_39164 = cljs.core.get.call(null,map__39123_39163__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39165 = cljs.core.get.call(null,map__39123_39163__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39161);

cljs.core.println.call(null," ",arglists_39165);

if(cljs.core.truth_(doc_39164)){
cljs.core.println.call(null," ",doc_39164);
} else {
}

var G__39166 = seq__39116_39156;
var G__39167 = chunk__39117_39157;
var G__39168 = count__39118_39158;
var G__39169 = (i__39119_39159 + (1));
seq__39116_39156 = G__39166;
chunk__39117_39157 = G__39167;
count__39118_39158 = G__39168;
i__39119_39159 = G__39169;
continue;
} else {
var temp__5457__auto___39170 = cljs.core.seq.call(null,seq__39116_39156);
if(temp__5457__auto___39170){
var seq__39116_39171__$1 = temp__5457__auto___39170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39116_39171__$1)){
var c__31014__auto___39172 = cljs.core.chunk_first.call(null,seq__39116_39171__$1);
var G__39173 = cljs.core.chunk_rest.call(null,seq__39116_39171__$1);
var G__39174 = c__31014__auto___39172;
var G__39175 = cljs.core.count.call(null,c__31014__auto___39172);
var G__39176 = (0);
seq__39116_39156 = G__39173;
chunk__39117_39157 = G__39174;
count__39118_39158 = G__39175;
i__39119_39159 = G__39176;
continue;
} else {
var vec__39125_39177 = cljs.core.first.call(null,seq__39116_39171__$1);
var name_39178 = cljs.core.nth.call(null,vec__39125_39177,(0),null);
var map__39128_39179 = cljs.core.nth.call(null,vec__39125_39177,(1),null);
var map__39128_39180__$1 = ((((!((map__39128_39179 == null)))?((((map__39128_39179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39128_39179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39128_39179):map__39128_39179);
var doc_39181 = cljs.core.get.call(null,map__39128_39180__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39182 = cljs.core.get.call(null,map__39128_39180__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39178);

cljs.core.println.call(null," ",arglists_39182);

if(cljs.core.truth_(doc_39181)){
cljs.core.println.call(null," ",doc_39181);
} else {
}

var G__39183 = cljs.core.next.call(null,seq__39116_39171__$1);
var G__39184 = null;
var G__39185 = (0);
var G__39186 = (0);
seq__39116_39156 = G__39183;
chunk__39117_39157 = G__39184;
count__39118_39158 = G__39185;
i__39119_39159 = G__39186;
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

var seq__39130 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39131 = null;
var count__39132 = (0);
var i__39133 = (0);
while(true){
if((i__39133 < count__39132)){
var role = cljs.core._nth.call(null,chunk__39131,i__39133);
var temp__5457__auto___39187__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39187__$1)){
var spec_39188 = temp__5457__auto___39187__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39188));
} else {
}

var G__39189 = seq__39130;
var G__39190 = chunk__39131;
var G__39191 = count__39132;
var G__39192 = (i__39133 + (1));
seq__39130 = G__39189;
chunk__39131 = G__39190;
count__39132 = G__39191;
i__39133 = G__39192;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__39130);
if(temp__5457__auto____$1){
var seq__39130__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39130__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__39130__$1);
var G__39193 = cljs.core.chunk_rest.call(null,seq__39130__$1);
var G__39194 = c__31014__auto__;
var G__39195 = cljs.core.count.call(null,c__31014__auto__);
var G__39196 = (0);
seq__39130 = G__39193;
chunk__39131 = G__39194;
count__39132 = G__39195;
i__39133 = G__39196;
continue;
} else {
var role = cljs.core.first.call(null,seq__39130__$1);
var temp__5457__auto___39197__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39197__$2)){
var spec_39198 = temp__5457__auto___39197__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39198));
} else {
}

var G__39199 = cljs.core.next.call(null,seq__39130__$1);
var G__39200 = null;
var G__39201 = (0);
var G__39202 = (0);
seq__39130 = G__39199;
chunk__39131 = G__39200;
count__39132 = G__39201;
i__39133 = G__39202;
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

//# sourceMappingURL=repl.js.map?rel=1521406490388
