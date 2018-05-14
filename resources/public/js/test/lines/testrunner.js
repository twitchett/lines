// Compiled by ClojureScript 1.9.946 {}
goog.provide('lines.testrunner');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('lines.coretest');
cljs.core.enable_console_print_BANG_.call(null);
doo.runner.set_entry_point_BANG_.call(null,(cljs.core.truth_(doo.runner.karma_QMARK_.call(null))?(function (tc__11437__auto__){
jx.reporter.karma.start.call(null,tc__11437__auto__,3);

return cljs.test.run_block.call(null,(function (){var env11445 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary11446 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11445,summary11446){
return (function (){
cljs.test.set_env_BANG_.call(null,env11445);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11445,summary11446){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11445,summary11446))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return lines.coretest.rtest;},new cljs.core.Symbol("lines.coretest","rtest","lines.coretest/rtest",1267294510,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"rtest","rtest",-615037970,null),"src/lines/coretest.cljs",15,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.rtest)?lines.coretest.rtest.cljs$lang$test:null)])),new cljs.core.Var(function(){return lines.coretest.fmt;},new cljs.core.Symbol("lines.coretest","fmt","lines.coretest/fmt",-462083221,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"fmt","fmt",1972832299,null),"src/lines/coretest.cljs",13,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.fmt)?lines.coretest.fmt.cljs$lang$test:null)])),new cljs.core.Var(function(){return lines.coretest.abs;},new cljs.core.Symbol("lines.coretest","abs","lines.coretest/abs",598776474,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),"src/lines/coretest.cljs",13,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.abs)?lines.coretest.abs.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11445,summary11446){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11445,summary11446))
], null));
})());
});})(env11445,summary11446))
,((function (env11445,summary11446){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11445,summary11446))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11445,summary11446){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11446,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11446),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11445,summary11446))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11445,summary11446){
return (function (){
cljs.test.set_env_BANG_.call(null,env11445);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary11446));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary11446),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env11445,summary11446))
], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env11447 = cljs.test.empty_env.call(null);
var summary11448 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11447,summary11448){
return (function (){
cljs.test.set_env_BANG_.call(null,env11447);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11447,summary11448){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11447,summary11448))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return lines.coretest.rtest;},new cljs.core.Symbol("lines.coretest","rtest","lines.coretest/rtest",1267294510,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"rtest","rtest",-615037970,null),"src/lines/coretest.cljs",15,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.rtest)?lines.coretest.rtest.cljs$lang$test:null)])),new cljs.core.Var(function(){return lines.coretest.fmt;},new cljs.core.Symbol("lines.coretest","fmt","lines.coretest/fmt",-462083221,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"fmt","fmt",1972832299,null),"src/lines/coretest.cljs",13,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.fmt)?lines.coretest.fmt.cljs$lang$test:null)])),new cljs.core.Var(function(){return lines.coretest.abs;},new cljs.core.Symbol("lines.coretest","abs","lines.coretest/abs",598776474,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),"src/lines/coretest.cljs",13,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.abs)?lines.coretest.abs.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11447,summary11448){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11447,summary11448))
], null));
})());
});})(env11447,summary11448))
,((function (env11447,summary11448){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11447,summary11448))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11447,summary11448){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11448,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11448),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11447,summary11448))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11447,summary11448){
return (function (){
cljs.test.set_env_BANG_.call(null,env11447);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary11448));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary11448),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env11447,summary11448))
], null));
})());
})));

//# sourceMappingURL=testrunner.js.map
