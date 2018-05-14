// Compiled by ClojureScript 1.9.946 {}
goog.provide('lines.coretest');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('lines.core');
lines.coretest.dstate = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"by2","by2",-99793728),new cljs.core.Keyword(null,"bx2","bx2",878348224),new cljs.core.Keyword(null,"y-start","y-start",1249752071),new cljs.core.Keyword(null,"c-start","c-start",1940521799),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"c2","c2",-1561880371),new cljs.core.Keyword(null,"x-start","x-start",1183238797),new cljs.core.Keyword(null,"bx1","bx1",-1641024586),new cljs.core.Keyword(null,"by1","by1",1572139768),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)]);
lines.coretest.rtest = (function lines$coretest$rtest(){
return cljs.test.test_var.call(null,lines.coretest.rtest.cljs$lang$var);
});
lines.coretest.rtest.cljs$lang$test = (function (){
try{var values__32262__auto__ = cljs.core._conj.call(null,(function (){var x__31037__auto__ = lines.core.rtest.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto__);
})(),(100));
var result__32263__auto__ = cljs.core.apply.call(null,cljs.core._LT_,values__32262__auto__);
if(cljs.core.truth_(result__32263__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),(100),cljs.core.list(new cljs.core.Symbol("l","rtest","l/rtest",-615038126,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._LT_,values__32262__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),(100),cljs.core.list(new cljs.core.Symbol("l","rtest","l/rtest",-615038126,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31037__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"<","<",993667236,null),values__32262__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32263__auto__;
}catch (e32981){var t__32307__auto__ = e32981;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),(100),cljs.core.list(new cljs.core.Symbol("l","rtest","l/rtest",-615038126,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__32307__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

lines.coretest.rtest.cljs$lang$var = new cljs.core.Var(function(){return lines.coretest.rtest;},new cljs.core.Symbol("lines.coretest","rtest","lines.coretest/rtest",1267294510,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"rtest","rtest",-615037970,null),"src/lines/coretest.cljs",15,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.rtest)?lines.coretest.rtest.cljs$lang$test:null)]));
lines.coretest.fmt = (function lines$coretest$fmt(){
return cljs.test.test_var.call(null,lines.coretest.fmt.cljs$lang$var);
});
lines.coretest.fmt.cljs$lang$test = (function (){
try{var values__32262__auto___32984 = cljs.core._conj.call(null,(function (){var x__31037__auto__ = lines.core.fmt.call(null,"3.1459");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto__);
})(),"3.146");
var result__32263__auto___32985 = cljs.core.apply.call(null,cljs.core._EQ_,values__32262__auto___32984);
if(cljs.core.truth_(result__32263__auto___32985)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"3.146",cljs.core.list(new cljs.core.Symbol("l","fmt","l/fmt",1972832663,null),"3.1459")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32262__auto___32984),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"3.146",cljs.core.list(new cljs.core.Symbol("l","fmt","l/fmt",1972832663,null),"3.1459")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31037__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32262__auto___32984);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e32982){var t__32307__auto___32986 = e32982;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"3.146",cljs.core.list(new cljs.core.Symbol("l","fmt","l/fmt",1972832663,null),"3.1459")),new cljs.core.Keyword(null,"actual","actual",107306363),t__32307__auto___32986,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__32262__auto__ = cljs.core._conj.call(null,(function (){var x__31037__auto__ = lines.core.fmt.call(null,"9876.1");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto__);
})(),"9876.100");
var result__32263__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__32262__auto__);
if(cljs.core.truth_(result__32263__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"9876.100",cljs.core.list(new cljs.core.Symbol("l","fmt","l/fmt",1972832663,null),"9876.1")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32262__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"9876.100",cljs.core.list(new cljs.core.Symbol("l","fmt","l/fmt",1972832663,null),"9876.1")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31037__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32262__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32263__auto__;
}catch (e32983){var t__32307__auto__ = e32983;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"9876.100",cljs.core.list(new cljs.core.Symbol("l","fmt","l/fmt",1972832663,null),"9876.1")),new cljs.core.Keyword(null,"actual","actual",107306363),t__32307__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

lines.coretest.fmt.cljs$lang$var = new cljs.core.Var(function(){return lines.coretest.fmt;},new cljs.core.Symbol("lines.coretest","fmt","lines.coretest/fmt",-462083221,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"fmt","fmt",1972832299,null),"src/lines/coretest.cljs",13,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.fmt)?lines.coretest.fmt.cljs$lang$test:null)]));
lines.coretest.abs = (function lines$coretest$abs(){
return cljs.test.test_var.call(null,lines.coretest.abs.cljs$lang$var);
});
lines.coretest.abs.cljs$lang$test = (function (){
try{var values__32262__auto___32989 = cljs.core._conj.call(null,(function (){var x__31037__auto__ = lines.core.abs.call(null,-15.01);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto__);
})(),15.01);
var result__32263__auto___32990 = cljs.core.apply.call(null,cljs.core._EQ_,values__32262__auto___32989);
if(cljs.core.truth_(result__32263__auto___32990)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),15.01,cljs.core.list(new cljs.core.Symbol("l","abs","l/abs",1394504910,null),-15.01)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32262__auto___32989),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),15.01,cljs.core.list(new cljs.core.Symbol("l","abs","l/abs",1394504910,null),-15.01)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31037__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32262__auto___32989);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e32987){var t__32307__auto___32991 = e32987;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),15.01,cljs.core.list(new cljs.core.Symbol("l","abs","l/abs",1394504910,null),-15.01)),new cljs.core.Keyword(null,"actual","actual",107306363),t__32307__auto___32991,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__32262__auto__ = cljs.core._conj.call(null,(function (){var x__31037__auto__ = lines.core.abs.call(null,(20));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto__);
})(),(20));
var result__32263__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__32262__auto__);
if(cljs.core.truth_(result__32263__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(20),cljs.core.list(new cljs.core.Symbol("l","abs","l/abs",1394504910,null),(20))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32262__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(20),cljs.core.list(new cljs.core.Symbol("l","abs","l/abs",1394504910,null),(20))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__31037__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32262__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__31037__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32263__auto__;
}catch (e32988){var t__32307__auto__ = e32988;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(20),cljs.core.list(new cljs.core.Symbol("l","abs","l/abs",1394504910,null),(20))),new cljs.core.Keyword(null,"actual","actual",107306363),t__32307__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

lines.coretest.abs.cljs$lang$var = new cljs.core.Var(function(){return lines.coretest.abs;},new cljs.core.Symbol("lines.coretest","abs","lines.coretest/abs",598776474,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),"src/lines/coretest.cljs",13,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.abs)?lines.coretest.abs.cljs$lang$test:null)]));

//# sourceMappingURL=coretest.js.map?rel=1526321582485
