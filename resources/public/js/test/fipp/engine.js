// Compiled by ClojureScript 1.9.946 {}
goog.provide('fipp.engine');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fipp.deque');
if(typeof fipp.engine.serialize_node !== 'undefined'){
} else {
fipp.engine.serialize_node = (function (){var method_table__9837__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9841__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9841__auto__,method_table__9837__auto__,prefer_table__9838__auto__,method_cache__9839__auto__,cached_hierarchy__9840__auto__));
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
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__10845){
var vec__10846 = p__10845;
var seq__10847 = cljs.core.seq.call(null,vec__10846);
var first__10848 = cljs.core.first.call(null,seq__10847);
var seq__10847__$1 = cljs.core.next.call(null,seq__10847);
var _ = first__10848;
var text = seq__10847__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__10849){
var vec__10850 = p__10849;
var seq__10851 = cljs.core.seq.call(null,vec__10850);
var first__10852 = cljs.core.first.call(null,seq__10851);
var seq__10851__$1 = cljs.core.next.call(null,seq__10851);
var _ = first__10852;
var text = seq__10851__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__10853){
var vec__10854 = p__10853;
var _ = cljs.core.nth.call(null,vec__10854,(0),null);
var text = cljs.core.nth.call(null,vec__10854,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__10857){
var vec__10858 = p__10857;
var seq__10859 = cljs.core.seq.call(null,vec__10858);
var first__10860 = cljs.core.first.call(null,seq__10859);
var seq__10859__$1 = cljs.core.next.call(null,seq__10859);
var _ = first__10860;
var children = seq__10859__$1;
return fipp.engine.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__10861){
var vec__10862 = p__10861;
var _ = cljs.core.nth.call(null,vec__10862,(0),null);
var inline = cljs.core.nth.call(null,vec__10862,(1),null);
var terminate = cljs.core.nth.call(null,vec__10862,(2),null);
var inline__$1 = (function (){var or__8782__auto__ = inline;
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__8782__auto__ = terminate;
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
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
var G__10865__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__10865 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__10866__i = 0, G__10866__a = new Array(arguments.length -  0);
while (G__10866__i < G__10866__a.length) {G__10866__a[G__10866__i] = arguments[G__10866__i + 0]; ++G__10866__i;}
  _ = new cljs.core.IndexedSeq(G__10866__a,0,null);
} 
return G__10865__delegate.call(this,_);};
G__10865.cljs$lang$maxFixedArity = 0;
G__10865.cljs$lang$applyTo = (function (arglist__10867){
var _ = cljs.core.seq(arglist__10867);
return G__10865__delegate(_);
});
G__10865.cljs$core$IFn$_invoke$arity$variadic = G__10865__delegate;
return G__10865;
})()
);
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__10868){
var vec__10869 = p__10868;
var seq__10870 = cljs.core.seq.call(null,vec__10869);
var first__10871 = cljs.core.first.call(null,seq__10870);
var seq__10870__$1 = cljs.core.next.call(null,seq__10870);
var _ = first__10871;
var children = seq__10870__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__10872){
var vec__10873 = p__10872;
var seq__10874 = cljs.core.seq.call(null,vec__10873);
var first__10875 = cljs.core.first.call(null,seq__10874);
var seq__10874__$1 = cljs.core.next.call(null,seq__10874);
var _ = first__10875;
var args = seq__10874__$1;
var vec__10876 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(2),args));
var seq__10877 = cljs.core.seq.call(null,vec__10876);
var first__10878 = cljs.core.first.call(null,seq__10877);
var seq__10877__$1 = cljs.core.next.call(null,seq__10877);
var offset = first__10878;
var children = seq__10877__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__10879){
var vec__10880 = p__10879;
var seq__10881 = cljs.core.seq.call(null,vec__10880);
var first__10882 = cljs.core.first.call(null,seq__10881);
var seq__10881__$1 = cljs.core.next.call(null,seq__10881);
var _ = first__10882;
var args = seq__10881__$1;
var vec__10883 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var seq__10884 = cljs.core.seq.call(null,vec__10883);
var first__10885 = cljs.core.first.call(null,seq__10884);
var seq__10884__$1 = cljs.core.next.call(null,seq__10884);
var offset = first__10885;
var children = seq__10884__$1;
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
var G__10887 = null;
var G__10887__0 = (function (){
return rf.call(null);
});
var G__10887__1 = (function (res){
return rf.call(null,res);
});
var G__10887__2 = (function (res,node){
var delta = (function (){var G__10886 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__10886__$1 = (((G__10886 instanceof cljs.core.Keyword))?G__10886.fqn:null);
switch (G__10886__$1) {
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
G__10887 = function(res,node){
switch(arguments.length){
case 0:
return G__10887__0.call(this);
case 1:
return G__10887__1.call(this,res);
case 2:
return G__10887__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10887.cljs$core$IFn$_invoke$arity$0 = G__10887__0;
G__10887.cljs$core$IFn$_invoke$arity$1 = G__10887__1;
G__10887.cljs$core$IFn$_invoke$arity$2 = G__10887__2;
return G__10887;
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__10068__auto__ = [];
var len__10061__auto___10892 = arguments.length;
var i__10062__auto___10893 = (0);
while(true){
if((i__10062__auto___10893 < len__10061__auto___10892)){
args__10068__auto__.push((arguments[i__10062__auto___10893]));

var G__10894 = (i__10062__auto___10893 + (1));
i__10062__auto___10893 = G__10894;
continue;
} else {
}
break;
}

var argseq__10069__auto__ = ((((2) < args__10068__auto__.length))?(new cljs.core.IndexedSeq(args__10068__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10069__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

fipp.engine.update_right.cljs$lang$applyTo = (function (seq10889){
var G__10890 = cljs.core.first.call(null,seq10889);
var seq10889__$1 = cljs.core.next.call(null,seq10889);
var G__10891 = cljs.core.first.call(null,seq10889__$1);
var seq10889__$2 = cljs.core.next.call(null,seq10889__$1);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic(G__10890,G__10891,seq10889__$2);
});

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__10895){
var map__10896 = p__10895;
var map__10896__$1 = ((((!((map__10896 == null)))?((((map__10896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10896):map__10896);
var options = map__10896__$1;
var width = cljs.core.get.call(null,map__10896__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__10896,map__10896__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
var bufs = cljs.core.volatile_BANG_.call(null,fipp.deque.empty);
return ((function (pos,bufs,map__10896,map__10896__$1,options,width){
return (function() {
var G__10901 = null;
var G__10901__0 = (function (){
return rf.call(null);
});
var G__10901__1 = (function (res){
return rf.call(null,res);
});
var G__10901__2 = (function (res,p__10898){
var map__10899 = p__10898;
var map__10899__$1 = ((((!((map__10899 == null)))?((((map__10899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10899):map__10899);
var node = map__10899__$1;
var op = cljs.core.get.call(null,map__10899__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__10899__$1,new cljs.core.Keyword(null,"right","right",-452581833));
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

var G__10902 = buffers_STAR__STAR_;
var G__10903 = res_STAR___$1;
buffers_STAR_ = G__10902;
res__$1 = G__10903;
continue;
}
}
break;
}
}
}
});
G__10901 = function(res,p__10898){
switch(arguments.length){
case 0:
return G__10901__0.call(this);
case 1:
return G__10901__1.call(this,res);
case 2:
return G__10901__2.call(this,res,p__10898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10901.cljs$core$IFn$_invoke$arity$0 = G__10901__0;
G__10901.cljs$core$IFn$_invoke$arity$1 = G__10901__1;
G__10901.cljs$core$IFn$_invoke$arity$2 = G__10901__2;
return G__10901;
})()
;})(pos,bufs,map__10896,map__10896__$1,options,width))
});
;})(map__10896,map__10896__$1,options,width))
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__10904){
var map__10905 = p__10904;
var map__10905__$1 = ((((!((map__10905 == null)))?((((map__10905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10905):map__10905);
var options = map__10905__$1;
var width = cljs.core.get.call(null,map__10905__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__10905,map__10905__$1,options,width){
return (function (rf){
var fits = cljs.core.volatile_BANG_.call(null,(0));
var length = cljs.core.volatile_BANG_.call(null,width);
var tab_stops = cljs.core.volatile_BANG_.call(null,cljs.core.list((0)));
var column = cljs.core.volatile_BANG_.call(null,(0));
return ((function (fits,length,tab_stops,column,map__10905,map__10905__$1,options,width){
return (function() {
var G__10911 = null;
var G__10911__0 = (function (){
return rf.call(null);
});
var G__10911__1 = (function (res){
return rf.call(null,res);
});
var G__10911__2 = (function (res,p__10907){
var map__10908 = p__10907;
var map__10908__$1 = ((((!((map__10908 == null)))?((((map__10908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10908):map__10908);
var node = map__10908__$1;
var op = cljs.core.get.call(null,map__10908__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__10908__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek.call(null,cljs.core.deref.call(null,tab_stops));
var G__10910 = op;
var G__10910__$1 = (((G__10910 instanceof cljs.core.Keyword))?G__10910.fqn:null);
switch (G__10910__$1) {
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
cljs.core.vreset_BANG_.call(null,fits,(function (){var x__9134__auto__ = (0);
var y__9135__auto__ = (cljs.core.deref.call(null,fits) - (1));
return ((x__9134__auto__ > y__9135__auto__) ? x__9134__auto__ : y__9135__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.call(null,"Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__10911 = function(res,p__10907){
switch(arguments.length){
case 0:
return G__10911__0.call(this);
case 1:
return G__10911__1.call(this,res);
case 2:
return G__10911__2.call(this,res,p__10907);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__10911.cljs$core$IFn$_invoke$arity$0 = G__10911__0;
G__10911.cljs$core$IFn$_invoke$arity$1 = G__10911__1;
G__10911.cljs$core$IFn$_invoke$arity$2 = G__10911__2;
return G__10911;
})()
;})(fits,length,tab_stops,column,map__10905,map__10905__$1,options,width))
});
;})(map__10905,map__10905__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(document,options){
var options_10913__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options);
cljs.core.run_BANG_.call(null,cljs.core.print,cljs.core.eduction.call(null,fipp.engine.annotate_rights,fipp.engine.annotate_begins.call(null,options_10913__$1),fipp.engine.format_nodes.call(null,options_10913__$1),fipp.engine.serialize.call(null,document)));

return cljs.core.println.call(null);
});

//# sourceMappingURL=engine.js.map
