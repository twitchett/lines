// Compiled by ClojureScript 1.9.946 {}
goog.provide('lines.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('goog.string');
goog.require('goog.string.format');
lines.core.width = (500);
lines.core.height = (500);
lines.core.frame_rate = (300);
lines.core.t_step = 0.005;
lines.core.abs = (function lines$core$abs(n){
var x__9134__auto__ = n;
var y__9135__auto__ = (- n);
return ((x__9134__auto__ > y__9135__auto__) ? x__9134__auto__ : y__9135__auto__);
});
lines.core.fmt = (function lines$core$fmt(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%.3f",s))].join('');
});
lines.core.c_distance = (function lines$core$c_distance(c1,c2){
if((c1 < c2)){
return (c2 - c1);
} else {
return ((255) - (c1 - c2));
}
});
lines.core.rtest = (function lines$core$rtest(){
return quil.core.random.call(null,(100));
});
lines.core.new_state = (function lines$core$new_state(s){
var x_start = (function (){var or__8782__auto__ = new cljs.core.Keyword(null,"x-start","x-start",1183238797).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return quil.core.random.call(null,lines.core.width);
}
})();
var y_start = (function (){var or__8782__auto__ = new cljs.core.Keyword(null,"y-start","y-start",1249752071).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return quil.core.random.call(null,lines.core.width);
}
})();
var c_start = (function (){var or__8782__auto__ = new cljs.core.Keyword(null,"c-start","c-start",1940521799).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return quil.core.random.call(null,(225));
}
})();
var c_end = (function (){var or__8782__auto__ = new cljs.core.Keyword(null,"c-end","c-end",-1886950848).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return quil.core.random.call(null,(225));
}
})();
var c_dist = lines.core.c_distance.call(null,c_start,c_end);
var c_step = (c_dist * lines.core.t_step);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"by2","by2",-99793728),new cljs.core.Keyword(null,"bx2","bx2",878348224),new cljs.core.Keyword(null,"c-dist","c-dist",-1204897596),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"c2","c2",-1561880371),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"c1","c1",1132530803),new cljs.core.Keyword(null,"bx1","bx1",-1641024586),new cljs.core.Keyword(null,"by1","by1",1572139768),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"c-step","c-step",-2077841349),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[y_start,(function (){var or__8782__auto__ = new cljs.core.Keyword(null,"by2","by2",-99793728).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return quil.core.random.call(null,lines.core.height);
}
})(),(function (){var or__8782__auto__ = new cljs.core.Keyword(null,"bx2","bx2",878348224).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return quil.core.random.call(null,lines.core.width);
}
})(),c_dist,(function (){var or__8782__auto__ = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return (0);
}
})(),y_start,c_end,c_start,c_start,(function (){var or__8782__auto__ = new cljs.core.Keyword(null,"bx1","bx1",-1641024586).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return quil.core.random.call(null,lines.core.width);
}
})(),(function (){var or__8782__auto__ = new cljs.core.Keyword(null,"by1","by1",1572139768).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return quil.core.random.call(null,lines.core.height);
}
})(),(function (){var or__8782__auto__ = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return (0);
}
})(),x_start,x_start,(function (){var or__8782__auto__ = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return quil.core.random.call(null,lines.core.height);
}
})(),c_step,(function (){var or__8782__auto__ = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__8782__auto__)){
return or__8782__auto__;
} else {
return quil.core.random.call(null,lines.core.width);
}
})()]);
});
lines.core.setup = (function lines$core$setup(){
cljs.core.println.call(null,"-- setup");

quil.core.frame_rate.call(null,lines.core.frame_rate);

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return lines.core.new_state.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
lines.core.increase_hue = (function lines$core$increase_hue(c,step){
var hue = (c + step);
if((hue < (255))){
return hue;
} else {
return lines.core.abs.call(null,(hue - (255)));
}
});
lines.core.update_state = (function lines$core$update_state(p__11417){
var map__11418 = p__11417;
var map__11418__$1 = ((((!((map__11418 == null)))?((((map__11418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11418):map__11418);
var state = map__11418__$1;
var x1 = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var t = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var x = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var c_step = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"c-step","c-step",-2077841349));
var x2 = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var bx2 = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"bx2","bx2",878348224));
var y = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var by2 = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"by2","by2",-99793728));
var n = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"n","n",562130025));
var y1 = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var c2 = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"c2","c2",-1561880371));
var c = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var c1 = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"c1","c1",1132530803));
var bx1 = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"bx1","bx1",-1641024586));
var by1 = cljs.core.get.call(null,map__11418__$1,new cljs.core.Keyword(null,"by1","by1",1572139768));
if((t < 1.0)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"n","n",562130025),(n + (1)),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.bezier_point.call(null,x1,bx1,bx2,x2,(t + lines.core.t_step)),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.bezier_point.call(null,y1,by1,by2,y2,(t + lines.core.t_step)),new cljs.core.Keyword(null,"c","c",-1763192079),lines.core.increase_hue.call(null,c,c_step),new cljs.core.Keyword(null,"t","t",-1397832519),(t + lines.core.t_step));
} else {
return lines.core.new_state.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x-start","x-start",1183238797),x2,new cljs.core.Keyword(null,"y-start","y-start",1249752071),y2,new cljs.core.Keyword(null,"c-start","c-start",1940521799),c2], null));
}
});
lines.core.draw_state = (function lines$core$draw_state(p__11420){
var map__11421 = p__11420;
var map__11421__$1 = ((((!((map__11421 == null)))?((((map__11421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11421):map__11421);
var state = map__11421__$1;
var x1 = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var x = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var bx2 = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"bx2","bx2",878348224));
var y = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var by2 = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"by2","by2",-99793728));
var y1 = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var c = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var bx1 = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"bx1","bx1",-1641024586));
var by1 = cljs.core.get.call(null,map__11421__$1,new cljs.core.Keyword(null,"by1","by1",1572139768));
quil.core.fill.call(null,(0),(10),(255),(5));

quil.core.rect.call(null,(0),(0),lines.core.width,lines.core.height);

quil.core.fill.call(null,c,(100),(100));

quil.core.stroke.call(null,(70),(40),(40));

return quil.core.ellipse.call(null,x,y,(20),(20));
});
lines.core.run_sketch = (function lines$core$run_sketch(){
lines.core.lines = (function lines$core$run_sketch_$_lines(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"lines",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,lines.core.update_state))?(function() { 
var G__11423__delegate = function (args){
return cljs.core.apply.call(null,lines.core.update_state,args);
};
var G__11423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11424__i = 0, G__11424__a = new Array(arguments.length -  0);
while (G__11424__i < G__11424__a.length) {G__11424__a[G__11424__i] = arguments[G__11424__i + 0]; ++G__11424__i;}
  args = new cljs.core.IndexedSeq(G__11424__a,0,null);
} 
return G__11423__delegate.call(this,args);};
G__11423.cljs$lang$maxFixedArity = 0;
G__11423.cljs$lang$applyTo = (function (arglist__11425){
var args = cljs.core.seq(arglist__11425);
return G__11423__delegate(args);
});
G__11423.cljs$core$IFn$_invoke$arity$variadic = G__11423__delegate;
return G__11423;
})()
:lines.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lines.core.width,lines.core.height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,lines.core.setup))?(function() { 
var G__11426__delegate = function (args){
return cljs.core.apply.call(null,lines.core.setup,args);
};
var G__11426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11427__i = 0, G__11427__a = new Array(arguments.length -  0);
while (G__11427__i < G__11427__a.length) {G__11427__a[G__11427__i] = arguments[G__11427__i + 0]; ++G__11427__i;}
  args = new cljs.core.IndexedSeq(G__11427__a,0,null);
} 
return G__11426__delegate.call(this,args);};
G__11426.cljs$lang$maxFixedArity = 0;
G__11426.cljs$lang$applyTo = (function (arglist__11428){
var args = cljs.core.seq(arglist__11428);
return G__11426__delegate(args);
});
G__11426.cljs$core$IFn$_invoke$arity$variadic = G__11426__delegate;
return G__11426;
})()
:lines.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,lines.core.draw_state))?(function() { 
var G__11429__delegate = function (args){
return cljs.core.apply.call(null,lines.core.draw_state,args);
};
var G__11429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11430__i = 0, G__11430__a = new Array(arguments.length -  0);
while (G__11430__i < G__11430__a.length) {G__11430__a[G__11430__i] = arguments[G__11430__i + 0]; ++G__11430__i;}
  args = new cljs.core.IndexedSeq(G__11430__a,0,null);
} 
return G__11429__delegate.call(this,args);};
G__11429.cljs$lang$maxFixedArity = 0;
G__11429.cljs$lang$applyTo = (function (arglist__11431){
var args = cljs.core.seq(arglist__11431);
return G__11429__delegate(args);
});
G__11429.cljs$core$IFn$_invoke$arity$variadic = G__11429__delegate;
return G__11429;
})()
:lines.core.draw_state));
});
goog.exportSymbol('lines.core.lines', lines.core.lines);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10541__10542__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__10541__10542__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),lines.core.lines,new cljs.core.Keyword(null,"host-id","host-id",742376279),"lines"], null));
}
});
goog.exportSymbol('lines.core.run_sketch', lines.core.run_sketch);

//# sourceMappingURL=core.js.map
