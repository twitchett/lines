// Compiled by ClojureScript 1.9.946 {}
goog.provide('lines.karmarunner');
goog.require('cljs.core');
goog.require('jx.reporter.karma');
goog.require('lines.coretest');
cljs.core.enable_console_print_BANG_.call(null);
lines.karmarunner.run_all = (function lines$karmarunner$run_all(karma){
if((karma == null)){
return cljs.test.run_block.call(null,(function (){var env11451 = cljs.test.empty_env.call(null);
var summary11452 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.util","quil.util",-757045409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Utility fns"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.util","quil.util",-757045409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Utility fns"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.fun-mode","quil.middlewares.fun-mode",-1556358755,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.fun-mode","quil.middlewares.fun-mode",-1556358755,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.walk","clojure.walk",1625897340,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Sierra",new cljs.core.Keyword(null,"doc","doc",1913296891),"This file defines a generic tree walker for Clojure data\nstructures.  It takes any data structure (list, vector, map, set,\nseq), calls a function on every element, and uses the return value\nof the function in place of the original.  This makes it fairly\neasy to write recursive search-and-replace functions, as shown in\nthe examples.\n\nNote: \"walk\" supports all Clojure data structures EXCEPT maps\ncreated with sorted-map-by.  There is no (obvious) way to retrieve\nthe sorting function."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.walk","clojure.walk",1625897340,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Sierra",new cljs.core.Keyword(null,"doc","doc",1913296891),"This file defines a generic tree walker for Clojure data\nstructures.  It takes any data structure (list, vector, map, set,\nseq), calls a function on every element, and uses the return value\nof the function in place of the original.  This makes it fairly\neasy to write recursive search-and-replace functions, as shown in\nthe examples.\n\nNote: \"walk\" supports all Clojure data structures EXCEPT maps\ncreated with sorted-map-by.  There is no (obvious) way to retrieve\nthe sorting function."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",-2083828516,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",1913296891),"Non-core data functions."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",-2083828516,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",1913296891),"Non-core data functions."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.nodes","clojure.core.rrb-vector.nodes",-1723556804,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.nodes","clojure.core.rrb-vector.nodes",-1723556804,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.transients","clojure.core.rrb-vector.transients",1281641467,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.transients","clojure.core.rrb-vector.transients",1281641467,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.trees","clojure.core.rrb-vector.trees",1420144023,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.trees","clojure.core.rrb-vector.trees",1420144023,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.karmarunner","lines.karmarunner",-729794122,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.karmarunner","lines.karmarunner",-729794122,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.edn","fipp.edn",1593562901,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.edn","fipp.edn",1593562901,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return lines.coretest.rtest;},new cljs.core.Symbol("lines.coretest","rtest","lines.coretest/rtest",1267294510,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"rtest","rtest",-615037970,null),"src/lines/coretest.cljs",15,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.rtest)?lines.coretest.rtest.cljs$lang$test:null)])),new cljs.core.Var(function(){return lines.coretest.fmt;},new cljs.core.Symbol("lines.coretest","fmt","lines.coretest/fmt",-462083221,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"fmt","fmt",1972832299,null),"src/lines/coretest.cljs",13,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.fmt)?lines.coretest.fmt.cljs$lang$test:null)])),new cljs.core.Var(function(){return lines.coretest.abs;},new cljs.core.Symbol("lines.coretest","abs","lines.coretest/abs",598776474,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),"src/lines/coretest.cljs",13,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.abs)?lines.coretest.abs.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.navigation-2d","quil.middlewares.navigation-2d",161667924,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.navigation-2d","quil.middlewares.navigation-2d",161667924,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.middleware","quil.middleware",-361218028,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Quil middleware."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.middleware","quil.middleware",-361218028,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Quil middleware."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.clojure","fipp.clojure",-1626567693,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.clojure","fipp.clojure",-1626567693,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.core","quil.core",1790300883,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrappers and extensions around the core Processing.org API."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.core","quil.core",1790300883,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrappers and extensions around the core Processing.org API."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.rrbt","clojure.core.rrb-vector.rrbt",1108920338,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.rrbt","clojure.core.rrb-vector.rrbt",1108920338,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"jx.reporter.karma","jx.reporter.karma",-314342735,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"jx.reporter.karma","jx.reporter.karma",-314342735,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.set","clojure.set",-630955632,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Set operations such as union/intersection.",new cljs.core.Keyword(null,"author","author",2111686192),"Rich Hickey"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.set","clojure.set",-630955632,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Set operations such as union/intersection.",new cljs.core.Keyword(null,"author","author",2111686192),"Rich Hickey"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.ednize","fipp.ednize",-1744400241,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.ednize","fipp.ednize",-1744400241,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.navigation-3d","quil.middlewares.navigation-3d",831923150,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.navigation-3d","quil.middlewares.navigation-3d",831923150,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.interop","clojure.core.rrb-vector.interop",1752227054,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.interop","clojure.core.rrb-vector.interop",1752227054,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.testrunner","lines.testrunner",281154476,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.testrunner","lines.testrunner",281154476,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.deprecated-options","quil.middlewares.deprecated-options",-1217244660,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.deprecated-options","quil.middlewares.deprecated-options",-1217244660,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.deque","fipp.deque",162107275,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.deque","fipp.deque",162107275,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Sierra, with contributions and suggestions by \n  Chas Emerick, Allen Rohner, Stuart Halloway, David Nolen, and\n  Leon Grapenthin",new cljs.core.Keyword(null,"doc","doc",1913296891),"A unit testing framework.\n\n   ASSERTIONS\n\n   The core of the library is the \"is\" macro, which lets you make\n   assertions of any arbitrary expression:\n\n   (is (= 4 (+ 2 2)))\n   (is (instance? Integer 256))\n   (is (.startsWith \"abcde\" \"ab\"))\n\n   You can type an \"is\" expression directly at the REPL, which will\n   print a message if it fails.\n\n       user> (is (= 5 (+ 2 2)))\n\n       FAIL in  (:1)\n       expected: (= 5 (+ 2 2))\n         actual: (not (= 5 4))\n       false\n\n   The \"expected:\" line shows you the original expression, and the\n   \"actual:\" shows you what actually happened.  In this case, it\n   shows that (+ 2 2) returned 4, which is not = to 5.  Finally, the\n   \"false\" on the last line is the value returned from the\n   expression.  The \"is\" macro always returns the result of the\n   inner expression.\n\n   There are two special assertions for testing exceptions.  The\n   \"(is (thrown? c ...))\" form tests if an exception of class c is\n   thrown:\n\n   (is (thrown? ArithmeticException (/ 1 0))) \n\n   \"(is (thrown-with-msg? c re ...))\" does the same thing and also\n   tests that the message on the exception matches the regular\n   expression re:\n\n   (is (thrown-with-msg? ArithmeticException #\"Divide by zero\"\n                         (/ 1 0)))\n\n   DOCUMENTING TESTS\n\n   \"is\" takes an optional second argument, a string describing the\n   assertion.  This message will be included in the error report.\n\n   (is (= 5 (+ 2 2)) \"Crazy arithmetic\")\n\n   In addition, you can document groups of assertions with the\n   \"testing\" macro, which takes a string followed by any number of\n   assertions.  The string will be included in failure reports.\n   Calls to \"testing\" may be nested, and all of the strings will be\n   joined together with spaces in the final report, in a style\n   similar to RSpec <http://rspec.info/>\n\n   (testing \"Arithmetic\"\n     (testing \"with positive integers\"\n       (is (= 4 (+ 2 2)))\n       (is (= 7 (+ 3 4))))\n     (testing \"with negative integers\"\n       (is (= -4 (+ -2 -2)))\n       (is (= -1 (+ 3 -4)))))\n\n   Note that, unlike RSpec, the \"testing\" macro may only be used\n   INSIDE a \"deftest\" form (see below).\n\n\n   DEFINING TESTS\n\n   (deftest addition\n     (is (= 4 (+ 2 2)))\n     (is (= 7 (+ 3 4))))\n\n   (deftest subtraction\n     (is (= 1 (- 4 3)))\n     (is (= 3 (- 7 4))))\n\n   This creates functions named \"addition\" and \"subtraction\", which\n   can be called like any other function.  Therefore, tests can be\n   grouped and composed, in a style similar to the test framework in\n   Peter Seibel's \"Practical Common Lisp\"\n   <http://www.gigamonkeys.com/book/practical-building-a-unit-test-framework.html>\n\n   (deftest arithmetic\n     (addition)\n     (subtraction))\n\n   The names of the nested tests will be joined in a list, like\n   \"(arithmetic addition)\", in failure reports.  You can use nested\n   tests to set up a context shared by several tests.\n\n   DEFINING ASYNC TESTS\n\n   (deftest addition\n     (async done\n       (is (= 4 (+ 2 2)))\n       (is (= 7 (+ 3 4)))\n       (done)))\n\n   Async tests are constructed with the async macro. The first argument to\n   the macro is the test completion callback. The body of the async macro may\n   be any series of expressions. The completion callback must be invoked when\n   all assertions have run. There is no support for asynchronous coordination -\n   core.async is recommended for this. Note the body of the async test must be\n   truly asynchronous to avoid stack overflow.\n\n   RUNNING TESTS\n\n   Run tests with the function \"(run-tests namespaces...)\":\n\n   (run-tests 'your.namespace 'some.other.namespace)\n\n   If you don't specify any namespaces, the current namespace is\n   used.  To run all tests in all namespaces, use \"(run-all-tests)\".\n\n   By default, these functions will search for all tests defined in\n   a namespace and run them in an undefined order.  However, if you\n   are composing tests, as in the \"arithmetic\" example above, you\n   probably do not want the \"addition\" and \"subtraction\" tests run\n   separately.  In that case, you must define a special function\n   named \"test-ns-hook\" that runs your tests in the correct order:\n\n   (defn test-ns-hook []\n     (arithmetic))\n\n   \"run-tests\" also optionally takes a testing enviroment. A default\n   one is supplied for you by invoking \"empty-env\".  The test\n   environment contains everything needed to run tests including the\n   report results map. Fixtures must be present here if you want them\n   to run. Note that code that relies on \"test-ns\" will\n   automatically be supplied the appropriate defined fixtures.  For\n   example, this is done for you if you use \"run-tests\".\n\n   Note: test-ns-hook prevents execution of fixtures (see below).\n\n\n   OMITTING TESTS FROM PRODUCTION CODE\n\n   You can set the ClojureScript compiler build option\n   \":load-tests\" to false when loading or compiling code in\n   production.  This will prevent any tests from being created by\n   or \"deftest\".\n\n\n   FIXTURES\n\n   Fixtures allow you to run code before and after tests, to set up\n   the context in which tests should be run.\n\n   A fixture is a map of one or two functions that run code before and\n   after tests.  It looks like this:\n\n   {:before (fn []\n              Perform setup, establish bindings, whatever.\n              )\n    :after (fn []\n             Tear-down / clean-up code here.\n             )}\n\n   Both are optional and can be left out.\n\n   Fixtures are attached to namespaces in one of two ways.  \"each\"\n   fixtures are run repeatedly, once for each test function created\n   with \"deftest\".  \"each\" fixtures are useful for\n   establishing a consistent before/after state for each test, like\n   clearing out database tables.\n\n   \"each\" fixtures can be attached to the current namespace like this:\n   (use-fixtures :each fixture1 fixture2 ...)\n   The fixture1, fixture2 are just maps like the example above.\n   They can also be passed directly, like this:\n   (use-fixtures :each\n     {:before (fn [] setup...), :after (fn [] cleanup...)})\n\n   The other kind of fixture, a \"once\" fixture, is only run once,\n   around ALL the tests in the namespace.  \"once\" fixtures are useful\n   for tasks that only need to be performed once, like establishing\n   database connections, or for time-consuming tasks.\n\n   Attach \"once\" fixtures to the current namespace like this:\n   (use-fixtures :once fixture1 fixture2 ...)\n\n   Note: Fixtures and test-ns-hook are mutually incompatible.  If you\n   are using test-ns-hook, fixture functions will *never* be run.\n\n\n   WRAPPING FIXTURES\n\n   Instead of a map, a fixture can be specified like this:\n\n   (defn my-fixture [f]\n      Perform setup, establish bindings, whatever.\n     (f)  Then call the function we were passed.\n      Tear-down / clean-up code here.\n    )\n\n   This style is incompatible with async tests. If an async test is\n   encountered, testing will be aborted. It can't be mixed with\n   fixtures specified as maps.\n\n\n   EXTENDING TEST-IS (ADVANCED)\n\n   You can extend the behavior of the \"is\" macro by defining new\n   methods for the \"assert-expr\" multimethod.  These methods are\n   called during expansion of the \"is\" macro, so they should return\n   quoted forms to be evaluated.\n\n   You can plug in your own test-reporting framework by specifying a\n   :reporter key in the test environment. It is normally set to\n   :cljs.test/default. Set this to the desired key and supply custom\n   implementations of the \"report\" multimethod.\n\n   The 'event' argument is a map.  It will always have a :type key,\n   whose value will be a keyword signaling the type of event being\n   reported.  Standard events with :type value of :pass, :fail, and\n   :error are called when an assertion passes, fails, and throws an\n   exception, respectively.  In that case, the event will also have\n   the following keys:\n\n     :expected   The form that was expected to be true\n     :actual     A form representing what actually occurred\n     :message    The string message given as an argument to 'is'\n\n   The \"testing\" strings will be a list in the :testing-contexts\n   property of the test environment, and the vars being tested will be\n   a list in the :testing-vars property of the test environment.\n\n   For additional event types, see the examples in the code.\n"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Sierra, with contributions and suggestions by \n  Chas Emerick, Allen Rohner, Stuart Halloway, David Nolen, and\n  Leon Grapenthin",new cljs.core.Keyword(null,"doc","doc",1913296891),"A unit testing framework.\n\n   ASSERTIONS\n\n   The core of the library is the \"is\" macro, which lets you make\n   assertions of any arbitrary expression:\n\n   (is (= 4 (+ 2 2)))\n   (is (instance? Integer 256))\n   (is (.startsWith \"abcde\" \"ab\"))\n\n   You can type an \"is\" expression directly at the REPL, which will\n   print a message if it fails.\n\n       user> (is (= 5 (+ 2 2)))\n\n       FAIL in  (:1)\n       expected: (= 5 (+ 2 2))\n         actual: (not (= 5 4))\n       false\n\n   The \"expected:\" line shows you the original expression, and the\n   \"actual:\" shows you what actually happened.  In this case, it\n   shows that (+ 2 2) returned 4, which is not = to 5.  Finally, the\n   \"false\" on the last line is the value returned from the\n   expression.  The \"is\" macro always returns the result of the\n   inner expression.\n\n   There are two special assertions for testing exceptions.  The\n   \"(is (thrown? c ...))\" form tests if an exception of class c is\n   thrown:\n\n   (is (thrown? ArithmeticException (/ 1 0))) \n\n   \"(is (thrown-with-msg? c re ...))\" does the same thing and also\n   tests that the message on the exception matches the regular\n   expression re:\n\n   (is (thrown-with-msg? ArithmeticException #\"Divide by zero\"\n                         (/ 1 0)))\n\n   DOCUMENTING TESTS\n\n   \"is\" takes an optional second argument, a string describing the\n   assertion.  This message will be included in the error report.\n\n   (is (= 5 (+ 2 2)) \"Crazy arithmetic\")\n\n   In addition, you can document groups of assertions with the\n   \"testing\" macro, which takes a string followed by any number of\n   assertions.  The string will be included in failure reports.\n   Calls to \"testing\" may be nested, and all of the strings will be\n   joined together with spaces in the final report, in a style\n   similar to RSpec <http://rspec.info/>\n\n   (testing \"Arithmetic\"\n     (testing \"with positive integers\"\n       (is (= 4 (+ 2 2)))\n       (is (= 7 (+ 3 4))))\n     (testing \"with negative integers\"\n       (is (= -4 (+ -2 -2)))\n       (is (= -1 (+ 3 -4)))))\n\n   Note that, unlike RSpec, the \"testing\" macro may only be used\n   INSIDE a \"deftest\" form (see below).\n\n\n   DEFINING TESTS\n\n   (deftest addition\n     (is (= 4 (+ 2 2)))\n     (is (= 7 (+ 3 4))))\n\n   (deftest subtraction\n     (is (= 1 (- 4 3)))\n     (is (= 3 (- 7 4))))\n\n   This creates functions named \"addition\" and \"subtraction\", which\n   can be called like any other function.  Therefore, tests can be\n   grouped and composed, in a style similar to the test framework in\n   Peter Seibel's \"Practical Common Lisp\"\n   <http://www.gigamonkeys.com/book/practical-building-a-unit-test-framework.html>\n\n   (deftest arithmetic\n     (addition)\n     (subtraction))\n\n   The names of the nested tests will be joined in a list, like\n   \"(arithmetic addition)\", in failure reports.  You can use nested\n   tests to set up a context shared by several tests.\n\n   DEFINING ASYNC TESTS\n\n   (deftest addition\n     (async done\n       (is (= 4 (+ 2 2)))\n       (is (= 7 (+ 3 4)))\n       (done)))\n\n   Async tests are constructed with the async macro. The first argument to\n   the macro is the test completion callback. The body of the async macro may\n   be any series of expressions. The completion callback must be invoked when\n   all assertions have run. There is no support for asynchronous coordination -\n   core.async is recommended for this. Note the body of the async test must be\n   truly asynchronous to avoid stack overflow.\n\n   RUNNING TESTS\n\n   Run tests with the function \"(run-tests namespaces...)\":\n\n   (run-tests 'your.namespace 'some.other.namespace)\n\n   If you don't specify any namespaces, the current namespace is\n   used.  To run all tests in all namespaces, use \"(run-all-tests)\".\n\n   By default, these functions will search for all tests defined in\n   a namespace and run them in an undefined order.  However, if you\n   are composing tests, as in the \"arithmetic\" example above, you\n   probably do not want the \"addition\" and \"subtraction\" tests run\n   separately.  In that case, you must define a special function\n   named \"test-ns-hook\" that runs your tests in the correct order:\n\n   (defn test-ns-hook []\n     (arithmetic))\n\n   \"run-tests\" also optionally takes a testing enviroment. A default\n   one is supplied for you by invoking \"empty-env\".  The test\n   environment contains everything needed to run tests including the\n   report results map. Fixtures must be present here if you want them\n   to run. Note that code that relies on \"test-ns\" will\n   automatically be supplied the appropriate defined fixtures.  For\n   example, this is done for you if you use \"run-tests\".\n\n   Note: test-ns-hook prevents execution of fixtures (see below).\n\n\n   OMITTING TESTS FROM PRODUCTION CODE\n\n   You can set the ClojureScript compiler build option\n   \":load-tests\" to false when loading or compiling code in\n   production.  This will prevent any tests from being created by\n   or \"deftest\".\n\n\n   FIXTURES\n\n   Fixtures allow you to run code before and after tests, to set up\n   the context in which tests should be run.\n\n   A fixture is a map of one or two functions that run code before and\n   after tests.  It looks like this:\n\n   {:before (fn []\n              Perform setup, establish bindings, whatever.\n              )\n    :after (fn []\n             Tear-down / clean-up code here.\n             )}\n\n   Both are optional and can be left out.\n\n   Fixtures are attached to namespaces in one of two ways.  \"each\"\n   fixtures are run repeatedly, once for each test function created\n   with \"deftest\".  \"each\" fixtures are useful for\n   establishing a consistent before/after state for each test, like\n   clearing out database tables.\n\n   \"each\" fixtures can be attached to the current namespace like this:\n   (use-fixtures :each fixture1 fixture2 ...)\n   The fixture1, fixture2 are just maps like the example above.\n   They can also be passed directly, like this:\n   (use-fixtures :each\n     {:before (fn [] setup...), :after (fn [] cleanup...)})\n\n   The other kind of fixture, a \"once\" fixture, is only run once,\n   around ALL the tests in the namespace.  \"once\" fixtures are useful\n   for tasks that only need to be performed once, like establishing\n   database connections, or for time-consuming tasks.\n\n   Attach \"once\" fixtures to the current namespace like this:\n   (use-fixtures :once fixture1 fixture2 ...)\n\n   Note: Fixtures and test-ns-hook are mutually incompatible.  If you\n   are using test-ns-hook, fixture functions will *never* be run.\n\n\n   WRAPPING FIXTURES\n\n   Instead of a map, a fixture can be specified like this:\n\n   (defn my-fixture [f]\n      Perform setup, establish bindings, whatever.\n     (f)  Then call the function we were passed.\n      Tear-down / clean-up code here.\n    )\n\n   This style is incompatible with async tests. If an async test is\n   encountered, testing will be aborted. It can't be mixed with\n   fixtures specified as maps.\n\n\n   EXTENDING TEST-IS (ADVANCED)\n\n   You can extend the behavior of the \"is\" macro by defining new\n   methods for the \"assert-expr\" multimethod.  These methods are\n   called during expansion of the \"is\" macro, so they should return\n   quoted forms to be evaluated.\n\n   You can plug in your own test-reporting framework by specifying a\n   :reporter key in the test environment. It is normally set to\n   :cljs.test/default. Set this to the desired key and supply custom\n   implementations of the \"report\" multimethod.\n\n   The 'event' argument is a map.  It will always have a :type key,\n   whose value will be a keyword signaling the type of event being\n   reported.  Standard events with :type value of :pass, :fail, and\n   :error are called when an assertion passes, fails, and throws an\n   exception, respectively.  In that case, the event will also have\n   the following keys:\n\n     :expected   The form that was expected to be true\n     :actual     A form representing what actually occurred\n     :message    The string message given as an argument to 'is'\n\n   The \"testing\" strings will be a list in the :testing-contexts\n   property of the test environment, and the vars being tested will be\n   a list in the :testing-vars property of the test environment.\n\n   For additional event types, see the examples in the code.\n"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.macros","clojure.core.rrb-vector.macros",-1262364501,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.macros","clojure.core.rrb-vector.macros",-1262364501,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.core","lines.core",422875082,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.core","lines.core",422875082,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.sketch","quil.sketch",1112053512,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.sketch","quil.sketch",1112053512,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.engine","fipp.engine",104802855,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.engine","fipp.engine",104802855,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.protocols","clojure.core.rrb-vector.protocols",1645101092,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.protocols","clojure.core.rrb-vector.protocols",1645101092,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.visit","fipp.visit",-938866813,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.visit","fipp.visit",-938866813,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"doo.runner","doo.runner",1295594049,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"doo.runner","doo.runner",1295594049,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.rrb-vector","clojure.core.rrb-vector",-1155220319,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",2111686192),"Micha\u0142 Marczyk"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11451,summary11452))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11451,summary11452){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11451,summary11452))
], null));
})());
});})(env11451,summary11452))
,((function (env11451,summary11452){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.rrb-vector","clojure.core.rrb-vector",-1155220319,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",2111686192),"Micha\u0142 Marczyk"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11451,summary11452))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11452,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11452),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11451,summary11452))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11451,summary11452){
return (function (){
cljs.test.set_env_BANG_.call(null,env11451);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary11452));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary11452),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env11451,summary11452))
], null));
})());
} else {
jx.reporter.karma.start.call(null,karma,((((((((((((((((((((((((((((((((((((0 + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 3) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0) + 0));

return cljs.test.run_block.call(null,(function (){var env11453 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary11454 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.util","quil.util",-757045409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Utility fns"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.util","quil.util",-757045409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Utility fns"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.fun-mode","quil.middlewares.fun-mode",-1556358755,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.fun-mode","quil.middlewares.fun-mode",-1556358755,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.walk","clojure.walk",1625897340,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Sierra",new cljs.core.Keyword(null,"doc","doc",1913296891),"This file defines a generic tree walker for Clojure data\nstructures.  It takes any data structure (list, vector, map, set,\nseq), calls a function on every element, and uses the return value\nof the function in place of the original.  This makes it fairly\neasy to write recursive search-and-replace functions, as shown in\nthe examples.\n\nNote: \"walk\" supports all Clojure data structures EXCEPT maps\ncreated with sorted-map-by.  There is no (obvious) way to retrieve\nthe sorting function."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.walk","clojure.walk",1625897340,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Sierra",new cljs.core.Keyword(null,"doc","doc",1913296891),"This file defines a generic tree walker for Clojure data\nstructures.  It takes any data structure (list, vector, map, set,\nseq), calls a function on every element, and uses the return value\nof the function in place of the original.  This makes it fairly\neasy to write recursive search-and-replace functions, as shown in\nthe examples.\n\nNote: \"walk\" supports all Clojure data structures EXCEPT maps\ncreated with sorted-map-by.  There is no (obvious) way to retrieve\nthe sorting function."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",-2083828516,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",1913296891),"Non-core data functions."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.data","clojure.data",-2083828516,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Halloway",new cljs.core.Keyword(null,"doc","doc",1913296891),"Non-core data functions."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.nodes","clojure.core.rrb-vector.nodes",-1723556804,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.nodes","clojure.core.rrb-vector.nodes",-1723556804,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.transients","clojure.core.rrb-vector.transients",1281641467,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.transients","clojure.core.rrb-vector.transients",1281641467,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.trees","clojure.core.rrb-vector.trees",1420144023,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.trees","clojure.core.rrb-vector.trees",1420144023,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.karmarunner","lines.karmarunner",-729794122,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.karmarunner","lines.karmarunner",-729794122,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.edn","fipp.edn",1593562901,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.edn","fipp.edn",1593562901,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return lines.coretest.rtest;},new cljs.core.Symbol("lines.coretest","rtest","lines.coretest/rtest",1267294510,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"rtest","rtest",-615037970,null),"src/lines/coretest.cljs",15,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.rtest)?lines.coretest.rtest.cljs$lang$test:null)])),new cljs.core.Var(function(){return lines.coretest.fmt;},new cljs.core.Symbol("lines.coretest","fmt","lines.coretest/fmt",-462083221,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"fmt","fmt",1972832299,null),"src/lines/coretest.cljs",13,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.fmt)?lines.coretest.fmt.cljs$lang$test:null)])),new cljs.core.Var(function(){return lines.coretest.abs;},new cljs.core.Symbol("lines.coretest","abs","lines.coretest/abs",598776474,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Symbol(null,"abs","abs",1394505050,null),"src/lines/coretest.cljs",13,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(lines.coretest.abs)?lines.coretest.abs.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.coretest","lines.coretest",1793745973,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.navigation-2d","quil.middlewares.navigation-2d",161667924,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.navigation-2d","quil.middlewares.navigation-2d",161667924,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.middleware","quil.middleware",-361218028,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Quil middleware."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.middleware","quil.middleware",-361218028,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Quil middleware."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.clojure","fipp.clojure",-1626567693,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.clojure","fipp.clojure",-1626567693,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.core","quil.core",1790300883,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrappers and extensions around the core Processing.org API."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"quil.core","quil.core",1790300883,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wrappers and extensions around the core Processing.org API."], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.rrbt","clojure.core.rrb-vector.rrbt",1108920338,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.rrbt","clojure.core.rrb-vector.rrbt",1108920338,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"jx.reporter.karma","jx.reporter.karma",-314342735,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"jx.reporter.karma","jx.reporter.karma",-314342735,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.set","clojure.set",-630955632,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Set operations such as union/intersection.",new cljs.core.Keyword(null,"author","author",2111686192),"Rich Hickey"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.set","clojure.set",-630955632,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Set operations such as union/intersection.",new cljs.core.Keyword(null,"author","author",2111686192),"Rich Hickey"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.ednize","fipp.ednize",-1744400241,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.ednize","fipp.ednize",-1744400241,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.navigation-3d","quil.middlewares.navigation-3d",831923150,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.navigation-3d","quil.middlewares.navigation-3d",831923150,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.interop","clojure.core.rrb-vector.interop",1752227054,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.interop","clojure.core.rrb-vector.interop",1752227054,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.testrunner","lines.testrunner",281154476,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.testrunner","lines.testrunner",281154476,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.deprecated-options","quil.middlewares.deprecated-options",-1217244660,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.middlewares.deprecated-options","quil.middlewares.deprecated-options",-1217244660,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.deque","fipp.deque",162107275,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.deque","fipp.deque",162107275,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Sierra, with contributions and suggestions by \n  Chas Emerick, Allen Rohner, Stuart Halloway, David Nolen, and\n  Leon Grapenthin",new cljs.core.Keyword(null,"doc","doc",1913296891),"A unit testing framework.\n\n   ASSERTIONS\n\n   The core of the library is the \"is\" macro, which lets you make\n   assertions of any arbitrary expression:\n\n   (is (= 4 (+ 2 2)))\n   (is (instance? Integer 256))\n   (is (.startsWith \"abcde\" \"ab\"))\n\n   You can type an \"is\" expression directly at the REPL, which will\n   print a message if it fails.\n\n       user> (is (= 5 (+ 2 2)))\n\n       FAIL in  (:1)\n       expected: (= 5 (+ 2 2))\n         actual: (not (= 5 4))\n       false\n\n   The \"expected:\" line shows you the original expression, and the\n   \"actual:\" shows you what actually happened.  In this case, it\n   shows that (+ 2 2) returned 4, which is not = to 5.  Finally, the\n   \"false\" on the last line is the value returned from the\n   expression.  The \"is\" macro always returns the result of the\n   inner expression.\n\n   There are two special assertions for testing exceptions.  The\n   \"(is (thrown? c ...))\" form tests if an exception of class c is\n   thrown:\n\n   (is (thrown? ArithmeticException (/ 1 0))) \n\n   \"(is (thrown-with-msg? c re ...))\" does the same thing and also\n   tests that the message on the exception matches the regular\n   expression re:\n\n   (is (thrown-with-msg? ArithmeticException #\"Divide by zero\"\n                         (/ 1 0)))\n\n   DOCUMENTING TESTS\n\n   \"is\" takes an optional second argument, a string describing the\n   assertion.  This message will be included in the error report.\n\n   (is (= 5 (+ 2 2)) \"Crazy arithmetic\")\n\n   In addition, you can document groups of assertions with the\n   \"testing\" macro, which takes a string followed by any number of\n   assertions.  The string will be included in failure reports.\n   Calls to \"testing\" may be nested, and all of the strings will be\n   joined together with spaces in the final report, in a style\n   similar to RSpec <http://rspec.info/>\n\n   (testing \"Arithmetic\"\n     (testing \"with positive integers\"\n       (is (= 4 (+ 2 2)))\n       (is (= 7 (+ 3 4))))\n     (testing \"with negative integers\"\n       (is (= -4 (+ -2 -2)))\n       (is (= -1 (+ 3 -4)))))\n\n   Note that, unlike RSpec, the \"testing\" macro may only be used\n   INSIDE a \"deftest\" form (see below).\n\n\n   DEFINING TESTS\n\n   (deftest addition\n     (is (= 4 (+ 2 2)))\n     (is (= 7 (+ 3 4))))\n\n   (deftest subtraction\n     (is (= 1 (- 4 3)))\n     (is (= 3 (- 7 4))))\n\n   This creates functions named \"addition\" and \"subtraction\", which\n   can be called like any other function.  Therefore, tests can be\n   grouped and composed, in a style similar to the test framework in\n   Peter Seibel's \"Practical Common Lisp\"\n   <http://www.gigamonkeys.com/book/practical-building-a-unit-test-framework.html>\n\n   (deftest arithmetic\n     (addition)\n     (subtraction))\n\n   The names of the nested tests will be joined in a list, like\n   \"(arithmetic addition)\", in failure reports.  You can use nested\n   tests to set up a context shared by several tests.\n\n   DEFINING ASYNC TESTS\n\n   (deftest addition\n     (async done\n       (is (= 4 (+ 2 2)))\n       (is (= 7 (+ 3 4)))\n       (done)))\n\n   Async tests are constructed with the async macro. The first argument to\n   the macro is the test completion callback. The body of the async macro may\n   be any series of expressions. The completion callback must be invoked when\n   all assertions have run. There is no support for asynchronous coordination -\n   core.async is recommended for this. Note the body of the async test must be\n   truly asynchronous to avoid stack overflow.\n\n   RUNNING TESTS\n\n   Run tests with the function \"(run-tests namespaces...)\":\n\n   (run-tests 'your.namespace 'some.other.namespace)\n\n   If you don't specify any namespaces, the current namespace is\n   used.  To run all tests in all namespaces, use \"(run-all-tests)\".\n\n   By default, these functions will search for all tests defined in\n   a namespace and run them in an undefined order.  However, if you\n   are composing tests, as in the \"arithmetic\" example above, you\n   probably do not want the \"addition\" and \"subtraction\" tests run\n   separately.  In that case, you must define a special function\n   named \"test-ns-hook\" that runs your tests in the correct order:\n\n   (defn test-ns-hook []\n     (arithmetic))\n\n   \"run-tests\" also optionally takes a testing enviroment. A default\n   one is supplied for you by invoking \"empty-env\".  The test\n   environment contains everything needed to run tests including the\n   report results map. Fixtures must be present here if you want them\n   to run. Note that code that relies on \"test-ns\" will\n   automatically be supplied the appropriate defined fixtures.  For\n   example, this is done for you if you use \"run-tests\".\n\n   Note: test-ns-hook prevents execution of fixtures (see below).\n\n\n   OMITTING TESTS FROM PRODUCTION CODE\n\n   You can set the ClojureScript compiler build option\n   \":load-tests\" to false when loading or compiling code in\n   production.  This will prevent any tests from being created by\n   or \"deftest\".\n\n\n   FIXTURES\n\n   Fixtures allow you to run code before and after tests, to set up\n   the context in which tests should be run.\n\n   A fixture is a map of one or two functions that run code before and\n   after tests.  It looks like this:\n\n   {:before (fn []\n              Perform setup, establish bindings, whatever.\n              )\n    :after (fn []\n             Tear-down / clean-up code here.\n             )}\n\n   Both are optional and can be left out.\n\n   Fixtures are attached to namespaces in one of two ways.  \"each\"\n   fixtures are run repeatedly, once for each test function created\n   with \"deftest\".  \"each\" fixtures are useful for\n   establishing a consistent before/after state for each test, like\n   clearing out database tables.\n\n   \"each\" fixtures can be attached to the current namespace like this:\n   (use-fixtures :each fixture1 fixture2 ...)\n   The fixture1, fixture2 are just maps like the example above.\n   They can also be passed directly, like this:\n   (use-fixtures :each\n     {:before (fn [] setup...), :after (fn [] cleanup...)})\n\n   The other kind of fixture, a \"once\" fixture, is only run once,\n   around ALL the tests in the namespace.  \"once\" fixtures are useful\n   for tasks that only need to be performed once, like establishing\n   database connections, or for time-consuming tasks.\n\n   Attach \"once\" fixtures to the current namespace like this:\n   (use-fixtures :once fixture1 fixture2 ...)\n\n   Note: Fixtures and test-ns-hook are mutually incompatible.  If you\n   are using test-ns-hook, fixture functions will *never* be run.\n\n\n   WRAPPING FIXTURES\n\n   Instead of a map, a fixture can be specified like this:\n\n   (defn my-fixture [f]\n      Perform setup, establish bindings, whatever.\n     (f)  Then call the function we were passed.\n      Tear-down / clean-up code here.\n    )\n\n   This style is incompatible with async tests. If an async test is\n   encountered, testing will be aborted. It can't be mixed with\n   fixtures specified as maps.\n\n\n   EXTENDING TEST-IS (ADVANCED)\n\n   You can extend the behavior of the \"is\" macro by defining new\n   methods for the \"assert-expr\" multimethod.  These methods are\n   called during expansion of the \"is\" macro, so they should return\n   quoted forms to be evaluated.\n\n   You can plug in your own test-reporting framework by specifying a\n   :reporter key in the test environment. It is normally set to\n   :cljs.test/default. Set this to the desired key and supply custom\n   implementations of the \"report\" multimethod.\n\n   The 'event' argument is a map.  It will always have a :type key,\n   whose value will be a keyword signaling the type of event being\n   reported.  Standard events with :type value of :pass, :fail, and\n   :error are called when an assertion passes, fails, and throws an\n   exception, respectively.  In that case, the event will also have\n   the following keys:\n\n     :expected   The form that was expected to be true\n     :actual     A form representing what actually occurred\n     :message    The string message given as an argument to 'is'\n\n   The \"testing\" strings will be a list in the :testing-contexts\n   property of the test environment, and the vars being tested will be\n   a list in the :testing-vars property of the test environment.\n\n   For additional event types, see the examples in the code.\n"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"Stuart Sierra, with contributions and suggestions by \n  Chas Emerick, Allen Rohner, Stuart Halloway, David Nolen, and\n  Leon Grapenthin",new cljs.core.Keyword(null,"doc","doc",1913296891),"A unit testing framework.\n\n   ASSERTIONS\n\n   The core of the library is the \"is\" macro, which lets you make\n   assertions of any arbitrary expression:\n\n   (is (= 4 (+ 2 2)))\n   (is (instance? Integer 256))\n   (is (.startsWith \"abcde\" \"ab\"))\n\n   You can type an \"is\" expression directly at the REPL, which will\n   print a message if it fails.\n\n       user> (is (= 5 (+ 2 2)))\n\n       FAIL in  (:1)\n       expected: (= 5 (+ 2 2))\n         actual: (not (= 5 4))\n       false\n\n   The \"expected:\" line shows you the original expression, and the\n   \"actual:\" shows you what actually happened.  In this case, it\n   shows that (+ 2 2) returned 4, which is not = to 5.  Finally, the\n   \"false\" on the last line is the value returned from the\n   expression.  The \"is\" macro always returns the result of the\n   inner expression.\n\n   There are two special assertions for testing exceptions.  The\n   \"(is (thrown? c ...))\" form tests if an exception of class c is\n   thrown:\n\n   (is (thrown? ArithmeticException (/ 1 0))) \n\n   \"(is (thrown-with-msg? c re ...))\" does the same thing and also\n   tests that the message on the exception matches the regular\n   expression re:\n\n   (is (thrown-with-msg? ArithmeticException #\"Divide by zero\"\n                         (/ 1 0)))\n\n   DOCUMENTING TESTS\n\n   \"is\" takes an optional second argument, a string describing the\n   assertion.  This message will be included in the error report.\n\n   (is (= 5 (+ 2 2)) \"Crazy arithmetic\")\n\n   In addition, you can document groups of assertions with the\n   \"testing\" macro, which takes a string followed by any number of\n   assertions.  The string will be included in failure reports.\n   Calls to \"testing\" may be nested, and all of the strings will be\n   joined together with spaces in the final report, in a style\n   similar to RSpec <http://rspec.info/>\n\n   (testing \"Arithmetic\"\n     (testing \"with positive integers\"\n       (is (= 4 (+ 2 2)))\n       (is (= 7 (+ 3 4))))\n     (testing \"with negative integers\"\n       (is (= -4 (+ -2 -2)))\n       (is (= -1 (+ 3 -4)))))\n\n   Note that, unlike RSpec, the \"testing\" macro may only be used\n   INSIDE a \"deftest\" form (see below).\n\n\n   DEFINING TESTS\n\n   (deftest addition\n     (is (= 4 (+ 2 2)))\n     (is (= 7 (+ 3 4))))\n\n   (deftest subtraction\n     (is (= 1 (- 4 3)))\n     (is (= 3 (- 7 4))))\n\n   This creates functions named \"addition\" and \"subtraction\", which\n   can be called like any other function.  Therefore, tests can be\n   grouped and composed, in a style similar to the test framework in\n   Peter Seibel's \"Practical Common Lisp\"\n   <http://www.gigamonkeys.com/book/practical-building-a-unit-test-framework.html>\n\n   (deftest arithmetic\n     (addition)\n     (subtraction))\n\n   The names of the nested tests will be joined in a list, like\n   \"(arithmetic addition)\", in failure reports.  You can use nested\n   tests to set up a context shared by several tests.\n\n   DEFINING ASYNC TESTS\n\n   (deftest addition\n     (async done\n       (is (= 4 (+ 2 2)))\n       (is (= 7 (+ 3 4)))\n       (done)))\n\n   Async tests are constructed with the async macro. The first argument to\n   the macro is the test completion callback. The body of the async macro may\n   be any series of expressions. The completion callback must be invoked when\n   all assertions have run. There is no support for asynchronous coordination -\n   core.async is recommended for this. Note the body of the async test must be\n   truly asynchronous to avoid stack overflow.\n\n   RUNNING TESTS\n\n   Run tests with the function \"(run-tests namespaces...)\":\n\n   (run-tests 'your.namespace 'some.other.namespace)\n\n   If you don't specify any namespaces, the current namespace is\n   used.  To run all tests in all namespaces, use \"(run-all-tests)\".\n\n   By default, these functions will search for all tests defined in\n   a namespace and run them in an undefined order.  However, if you\n   are composing tests, as in the \"arithmetic\" example above, you\n   probably do not want the \"addition\" and \"subtraction\" tests run\n   separately.  In that case, you must define a special function\n   named \"test-ns-hook\" that runs your tests in the correct order:\n\n   (defn test-ns-hook []\n     (arithmetic))\n\n   \"run-tests\" also optionally takes a testing enviroment. A default\n   one is supplied for you by invoking \"empty-env\".  The test\n   environment contains everything needed to run tests including the\n   report results map. Fixtures must be present here if you want them\n   to run. Note that code that relies on \"test-ns\" will\n   automatically be supplied the appropriate defined fixtures.  For\n   example, this is done for you if you use \"run-tests\".\n\n   Note: test-ns-hook prevents execution of fixtures (see below).\n\n\n   OMITTING TESTS FROM PRODUCTION CODE\n\n   You can set the ClojureScript compiler build option\n   \":load-tests\" to false when loading or compiling code in\n   production.  This will prevent any tests from being created by\n   or \"deftest\".\n\n\n   FIXTURES\n\n   Fixtures allow you to run code before and after tests, to set up\n   the context in which tests should be run.\n\n   A fixture is a map of one or two functions that run code before and\n   after tests.  It looks like this:\n\n   {:before (fn []\n              Perform setup, establish bindings, whatever.\n              )\n    :after (fn []\n             Tear-down / clean-up code here.\n             )}\n\n   Both are optional and can be left out.\n\n   Fixtures are attached to namespaces in one of two ways.  \"each\"\n   fixtures are run repeatedly, once for each test function created\n   with \"deftest\".  \"each\" fixtures are useful for\n   establishing a consistent before/after state for each test, like\n   clearing out database tables.\n\n   \"each\" fixtures can be attached to the current namespace like this:\n   (use-fixtures :each fixture1 fixture2 ...)\n   The fixture1, fixture2 are just maps like the example above.\n   They can also be passed directly, like this:\n   (use-fixtures :each\n     {:before (fn [] setup...), :after (fn [] cleanup...)})\n\n   The other kind of fixture, a \"once\" fixture, is only run once,\n   around ALL the tests in the namespace.  \"once\" fixtures are useful\n   for tasks that only need to be performed once, like establishing\n   database connections, or for time-consuming tasks.\n\n   Attach \"once\" fixtures to the current namespace like this:\n   (use-fixtures :once fixture1 fixture2 ...)\n\n   Note: Fixtures and test-ns-hook are mutually incompatible.  If you\n   are using test-ns-hook, fixture functions will *never* be run.\n\n\n   WRAPPING FIXTURES\n\n   Instead of a map, a fixture can be specified like this:\n\n   (defn my-fixture [f]\n      Perform setup, establish bindings, whatever.\n     (f)  Then call the function we were passed.\n      Tear-down / clean-up code here.\n    )\n\n   This style is incompatible with async tests. If an async test is\n   encountered, testing will be aborted. It can't be mixed with\n   fixtures specified as maps.\n\n\n   EXTENDING TEST-IS (ADVANCED)\n\n   You can extend the behavior of the \"is\" macro by defining new\n   methods for the \"assert-expr\" multimethod.  These methods are\n   called during expansion of the \"is\" macro, so they should return\n   quoted forms to be evaluated.\n\n   You can plug in your own test-reporting framework by specifying a\n   :reporter key in the test environment. It is normally set to\n   :cljs.test/default. Set this to the desired key and supply custom\n   implementations of the \"report\" multimethod.\n\n   The 'event' argument is a map.  It will always have a :type key,\n   whose value will be a keyword signaling the type of event being\n   reported.  Standard events with :type value of :pass, :fail, and\n   :error are called when an assertion passes, fails, and throws an\n   exception, respectively.  In that case, the event will also have\n   the following keys:\n\n     :expected   The form that was expected to be true\n     :actual     A form representing what actually occurred\n     :message    The string message given as an argument to 'is'\n\n   The \"testing\" strings will be a list in the :testing-contexts\n   property of the test environment, and the vars being tested will be\n   a list in the :testing-vars property of the test environment.\n\n   For additional event types, see the examples in the code.\n"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.macros","clojure.core.rrb-vector.macros",-1262364501,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.macros","clojure.core.rrb-vector.macros",-1262364501,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.core","lines.core",422875082,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lines.core","lines.core",422875082,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.sketch","quil.sketch",1112053512,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"quil.sketch","quil.sketch",1112053512,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.engine","fipp.engine",104802855,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.engine","fipp.engine",104802855,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.protocols","clojure.core.rrb-vector.protocols",1645101092,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.core.rrb-vector.protocols","clojure.core.rrb-vector.protocols",1645101092,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.visit","fipp.visit",-938866813,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fipp.visit","fipp.visit",-938866813,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"doo.runner","doo.runner",1295594049,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"doo.runner","doo.runner",1295594049,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.rrb-vector","clojure.core.rrb-vector",-1155220319,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",2111686192),"Micha\u0142 Marczyk"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10724__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10724__auto__,env11453,summary11454))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10724__auto__,env11453,summary11454){
return (function (){
if((env__10724__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10724__auto__,env11453,summary11454))
], null));
})());
});})(env11453,summary11454))
,((function (env11453,summary11454){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"clojure.core.rrb-vector","clojure.core.rrb-vector",-1155220319,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",2111686192),"Micha\u0142 Marczyk"], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env11453,summary11454))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary11454,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary11454),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env11453,summary11454))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env11453,summary11454){
return (function (){
cljs.test.set_env_BANG_.call(null,env11453);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary11454));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary11454),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env11453,summary11454))
], null));
})());
}
});
goog.exportSymbol('lines.karmarunner.run_all', lines.karmarunner.run_all);

//# sourceMappingURL=karmarunner.js.map
