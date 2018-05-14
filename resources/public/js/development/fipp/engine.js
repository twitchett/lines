// Compiled by ClojureScript 1.9.946 {}
goog.provide('fipp.engine');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fipp.deque');
if(typeof fipp.engine.serialize_node !== 'undefined'){
} else {
fipp.engine.serialize_node = (function (){var method_table__31138__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__31139__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__31140__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__31141__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__31142__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__31142__auto__,method_table__31138__auto__,prefer_table__31139__auto__,method_cache__31140__auto__,cached_hierarchy__31141__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_.call(null,doc)){
return cljs.core.mapcat.call(null,fipp.engine.serialize,doc);
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
return fipp.engine.serialize_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null));
} else {
if(cljs.core.vector_QMARK_.call(null,doc)){
return fipp.engine.serialize_node.call(null,doc);
} else {
throw cljs.core.ex_info.call(null,"Unexpected class for doc node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),doc], null));

}
}
}
}
}
});
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__32087){
var vec__32088 = p__32087;
var seq__32089 = cljs.core.seq.call(null,vec__32088);
var first__32090 = cljs.core.first.call(null,seq__32089);
var seq__32089__$1 = cljs.core.next.call(null,seq__32089);
var _ = first__32090;
var text = seq__32089__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__32091){
var vec__32092 = p__32091;
var seq__32093 = cljs.core.seq.call(null,vec__32092);
var first__32094 = cljs.core.first.call(null,seq__32093);
var seq__32093__$1 = cljs.core.next.call(null,seq__32093);
var _ = first__32094;
var text = seq__32093__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__32095){
var vec__32096 = p__32095;
var _ = cljs.core.nth.call(null,vec__32096,(0),null);
var text = cljs.core.nth.call(null,vec__32096,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__32099){
var vec__32100 = p__32099;
var seq__32101 = cljs.core.seq.call(null,vec__32100);
var first__32102 = cljs.core.first.call(null,seq__32101);
var seq__32101__$1 = cljs.core.next.call(null,seq__32101);
var _ = first__32102;
var children = seq__32101__$1;
return fipp.engine.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__32103){
var vec__32104 = p__32103;
var _ = cljs.core.nth.call(null,vec__32104,(0),null);
var inline = cljs.core.nth.call(null,vec__32104,(1),null);
var terminate = cljs.core.nth.call(null,vec__32104,(2),null);
var inline__$1 = (function (){var or__30083__auto__ = inline;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__30083__auto__ = terminate;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return "";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? inline)"));
}

if(typeof terminate__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? terminate)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1,new cljs.core.Keyword(null,"terminate","terminate",1256003496),terminate__$1], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"break","break",126570225),(function() { 
var G__32107__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__32107 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__32108__i = 0, G__32108__a = new Array(arguments.length -  0);
while (G__32108__i < G__32108__a.length) {G__32108__a[G__32108__i] = arguments[G__32108__i + 0]; ++G__32108__i;}
  _ = new cljs.core.IndexedSeq(G__32108__a,0,null);
} 
return G__32107__delegate.call(this,_);};
G__32107.cljs$lang$maxFixedArity = 0;
G__32107.cljs$lang$applyTo = (function (arglist__32109){
var _ = cljs.core.seq(arglist__32109);
return G__32107__delegate(_);
});
G__32107.cljs$core$IFn$_invoke$arity$variadic = G__32107__delegate;
return G__32107;
})()
);
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__32110){
var vec__32111 = p__32110;
var seq__32112 = cljs.core.seq.call(null,vec__32111);
var first__32113 = cljs.core.first.call(null,seq__32112);
var seq__32112__$1 = cljs.core.next.call(null,seq__32112);
var _ = first__32113;
var children = seq__32112__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__32114){
var vec__32115 = p__32114;
var seq__32116 = cljs.core.seq.call(null,vec__32115);
var first__32117 = cljs.core.first.call(null,seq__32116);
var seq__32116__$1 = cljs.core.next.call(null,seq__32116);
var _ = first__32117;
var args = seq__32116__$1;
var vec__32118 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(2),args));
var seq__32119 = cljs.core.seq.call(null,vec__32118);
var first__32120 = cljs.core.first.call(null,seq__32119);
var seq__32119__$1 = cljs.core.next.call(null,seq__32119);
var offset = first__32120;
var children = seq__32119__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__32121){
var vec__32122 = p__32121;
var seq__32123 = cljs.core.seq.call(null,vec__32122);
var first__32124 = cljs.core.first.call(null,seq__32123);
var seq__32123__$1 = cljs.core.next.call(null,seq__32123);
var _ = first__32124;
var args = seq__32123__$1;
var vec__32125 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var seq__32126 = cljs.core.seq.call(null,vec__32125);
var first__32127 = cljs.core.first.call(null,seq__32126);
var seq__32126__$1 = cljs.core.next.call(null,seq__32126);
var offset = first__32127;
var children = seq__32126__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 *   hypothetical single-line formatting of the document. Groups and indentation
 *   directives are temporarily assumed to be zero-width. These values are used
 *   by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
return ((function (pos){
return (function() {
var G__32129 = null;
var G__32129__0 = (function (){
return rf.call(null);
});
var G__32129__1 = (function (res){
return rf.call(null,res);
});
var G__32129__2 = (function (res,node){
var delta = (function (){var G__32128 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__32128__$1 = (((G__32128 instanceof cljs.core.Keyword))?G__32128.fqn:null);
switch (G__32128__$1) {
case "text":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node));

break;
case "escaped":
return (1);

break;
default:
return (0);

}
})();
var p = cljs.core._vreset_BANG_.call(null,pos,(cljs.core._deref.call(null,pos) + delta));
return rf.call(null,res,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),p));
});
G__32129 = function(res,node){
switch(arguments.length){
case 0:
return G__32129__0.call(this);
case 1:
return G__32129__1.call(this,res);
case 2:
return G__32129__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32129.cljs$core$IFn$_invoke$arity$0 = G__32129__0;
G__32129.cljs$core$IFn$_invoke$arity$1 = G__32129__1;
G__32129.cljs$core$IFn$_invoke$arity$2 = G__32129__2;
return G__32129;
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__31369__auto__ = [];
var len__31362__auto___32134 = arguments.length;
var i__31363__auto___32135 = (0);
while(true){
if((i__31363__auto___32135 < len__31362__auto___32134)){
args__31369__auto__.push((arguments[i__31363__auto___32135]));

var G__32136 = (i__31363__auto___32135 + (1));
i__31363__auto___32135 = G__32136;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((2) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31370__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

fipp.engine.update_right.cljs$lang$applyTo = (function (seq32131){
var G__32132 = cljs.core.first.call(null,seq32131);
var seq32131__$1 = cljs.core.next.call(null,seq32131);
var G__32133 = cljs.core.first.call(null,seq32131__$1);
var seq32131__$2 = cljs.core.next.call(null,seq32131__$1);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic(G__32132,G__32133,seq32131__$2);
});

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__32137){
var map__32138 = p__32137;
var map__32138__$1 = ((((!((map__32138 == null)))?((((map__32138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32138):map__32138);
var options = map__32138__$1;
var width = cljs.core.get.call(null,map__32138__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__32138,map__32138__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
var bufs = cljs.core.volatile_BANG_.call(null,fipp.deque.empty);
return ((function (pos,bufs,map__32138,map__32138__$1,options,width){
return (function() {
var G__32143 = null;
var G__32143__0 = (function (){
return rf.call(null);
});
var G__32143__1 = (function (res){
return rf.call(null,res);
});
var G__32143__2 = (function (res,p__32140){
var map__32141 = p__32140;
var map__32141__$1 = ((((!((map__32141 == null)))?((((map__32141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32141):map__32141);
var node = map__32141__$1;
var op = cljs.core.get.call(null,map__32141__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__32141__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var buffers = cljs.core.deref.call(null,bufs);
if(cljs.core.empty_QMARK_.call(null,buffers)){
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319))){
var position_STAR_ = (right + width);
var buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null);
cljs.core.vreset_BANG_.call(null,pos,position_STAR_);

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.create.call(null,buffer));

return res;
} else {
return rf.call(null,res,node);
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"end","end",-268185958))){
var buffer = cljs.core.peek.call(null,buffers);
var buffers_STAR_ = cljs.core.pop.call(null,buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),right], null);
var nodes = fipp.deque.conjlr.call(null,begin,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_.call(null,buffers_STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return cljs.core.reduce.call(null,rf,res,nodes);
} else {
if(cljs.core.vector_QMARK_.call(null,buffers_STAR_)){
} else {
throw (new Error("Assert failed: (vector? buffers*)"));
}

if(cljs.core.vector_QMARK_.call(null,nodes)){
} else {
throw (new Error("Assert failed: (vector? nodes)"));
}

cljs.core.vreset_BANG_.call(null,bufs,fipp.engine.update_right.call(null,buffers_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.concat,nodes));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.deque.conjr.call(null,buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null)):fipp.engine.update_right.call(null,buffers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.conjr,node));
var res__$1 = res;
while(true){
if(((right <= cljs.core.deref.call(null,pos))) && ((cljs.core.count.call(null,buffers_STAR_) <= width))){
cljs.core.vreset_BANG_.call(null,bufs,buffers_STAR_);

return res__$1;
} else {
var buffer = cljs.core.first.call(null,buffers_STAR_);
var buffers_STAR__STAR_ = fipp.deque.popl.call(null,buffers_STAR_);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"too-far","too-far",85800617)], null);
var res_STAR_ = rf.call(null,res__$1,begin);
var res_STAR___$1 = cljs.core.reduce.call(null,rf,res_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_.call(null,buffers_STAR__STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return res_STAR___$1;
} else {
cljs.core.vreset_BANG_.call(null,pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,buffers_STAR__STAR_)));

var G__32144 = buffers_STAR__STAR_;
var G__32145 = res_STAR___$1;
buffers_STAR_ = G__32144;
res__$1 = G__32145;
continue;
}
}
break;
}
}
}
});
G__32143 = function(res,p__32140){
switch(arguments.length){
case 0:
return G__32143__0.call(this);
case 1:
return G__32143__1.call(this,res);
case 2:
return G__32143__2.call(this,res,p__32140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32143.cljs$core$IFn$_invoke$arity$0 = G__32143__0;
G__32143.cljs$core$IFn$_invoke$arity$1 = G__32143__1;
G__32143.cljs$core$IFn$_invoke$arity$2 = G__32143__2;
return G__32143;
})()
;})(pos,bufs,map__32138,map__32138__$1,options,width))
});
;})(map__32138,map__32138__$1,options,width))
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__32146){
var map__32147 = p__32146;
var map__32147__$1 = ((((!((map__32147 == null)))?((((map__32147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32147):map__32147);
var options = map__32147__$1;
var width = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__32147,map__32147__$1,options,width){
return (function (rf){
var fits = cljs.core.volatile_BANG_.call(null,(0));
var length = cljs.core.volatile_BANG_.call(null,width);
var tab_stops = cljs.core.volatile_BANG_.call(null,cljs.core.list((0)));
var column = cljs.core.volatile_BANG_.call(null,(0));
return ((function (fits,length,tab_stops,column,map__32147,map__32147__$1,options,width){
return (function() {
var G__32153 = null;
var G__32153__0 = (function (){
return rf.call(null);
});
var G__32153__1 = (function (res){
return rf.call(null,res);
});
var G__32153__2 = (function (res,p__32149){
var map__32150 = p__32149;
var map__32150__$1 = ((((!((map__32150 == null)))?((((map__32150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32150):map__32150);
var node = map__32150__$1;
var op = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek.call(null,cljs.core.deref.call(null,tab_stops));
var G__32152 = op;
var G__32152__$1 = (((G__32152 instanceof cljs.core.Keyword))?G__32152.fqn:null);
switch (G__32152__$1) {
case "text":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,text)));

return rf.call(null,res_STAR_,text);

break;
case "escaped":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + (1)));

return rf.call(null,res_STAR_,text);

break;
case "pass":
return rf.call(null,res,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
if((cljs.core.deref.call(null,fits) === (0))){
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),"\n"].join(''));
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,inline)));

return rf.call(null,res,inline);
}

break;
case "break":
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,"\n");

break;
case "nest":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(indent + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "align":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(cljs.core.deref.call(null,column) + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "outdent":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.pop.call(null,cljs.core._deref.call(null,tab_stops)));

return res;

break;
case "begin":
cljs.core.vreset_BANG_.call(null,fits,(((cljs.core.deref.call(null,fits) > (0)))?(cljs.core.deref.call(null,fits) + (1)):((cljs.core._EQ_.call(null,right,new cljs.core.Keyword(null,"too-far","too-far",85800617)))?(0):(((right <= cljs.core.deref.call(null,length)))?(1):(0)
))));

return res;

break;
case "end":
cljs.core.vreset_BANG_.call(null,fits,(function (){var x__30435__auto__ = (0);
var y__30436__auto__ = (cljs.core.deref.call(null,fits) - (1));
return ((x__30435__auto__ > y__30436__auto__) ? x__30435__auto__ : y__30436__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.call(null,"Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__32153 = function(res,p__32149){
switch(arguments.length){
case 0:
return G__32153__0.call(this);
case 1:
return G__32153__1.call(this,res);
case 2:
return G__32153__2.call(this,res,p__32149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32153.cljs$core$IFn$_invoke$arity$0 = G__32153__0;
G__32153.cljs$core$IFn$_invoke$arity$1 = G__32153__1;
G__32153.cljs$core$IFn$_invoke$arity$2 = G__32153__2;
return G__32153;
})()
;})(fits,length,tab_stops,column,map__32147,map__32147__$1,options,width))
});
;})(map__32147,map__32147__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(document,options){
var options_32155__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options);
cljs.core.run_BANG_.call(null,cljs.core.print,cljs.core.eduction.call(null,fipp.engine.annotate_rights,fipp.engine.annotate_begins.call(null,options_32155__$1),fipp.engine.format_nodes.call(null,options_32155__$1),fipp.engine.serialize.call(null,document)));

return cljs.core.println.call(null);
});

//# sourceMappingURL=engine.js.map?rel=1526321581344
