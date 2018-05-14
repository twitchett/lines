// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39397){if((e39397 instanceof Error)){
var e = e39397;
return "Error: Unable to stringify";
} else {
throw e39397;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39400 = arguments.length;
switch (G__39400) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39398_SHARP_){
if(typeof p1__39398_SHARP_ === 'string'){
return p1__39398_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39398_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31369__auto__ = [];
var len__31362__auto___39403 = arguments.length;
var i__31363__auto___39404 = (0);
while(true){
if((i__31363__auto___39404 < len__31362__auto___39403)){
args__31369__auto__.push((arguments[i__31363__auto___39404]));

var G__39405 = (i__31363__auto___39404 + (1));
i__31363__auto___39404 = G__39405;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39402){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39402));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31369__auto__ = [];
var len__31362__auto___39407 = arguments.length;
var i__31363__auto___39408 = (0);
while(true){
if((i__31363__auto___39408 < len__31362__auto___39407)){
args__31369__auto__.push((arguments[i__31363__auto___39408]));

var G__39409 = (i__31363__auto___39408 + (1));
i__31363__auto___39408 = G__39409;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39406){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39406));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39410){
var map__39411 = p__39410;
var map__39411__$1 = ((((!((map__39411 == null)))?((((map__39411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39411):map__39411);
var message = cljs.core.get.call(null,map__39411__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39411__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30083__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30071__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30071__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30071__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35489__auto___39490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___39490,ch){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___39490,ch){
return (function (state_39462){
var state_val_39463 = (state_39462[(1)]);
if((state_val_39463 === (7))){
var inst_39458 = (state_39462[(2)]);
var state_39462__$1 = state_39462;
var statearr_39464_39491 = state_39462__$1;
(statearr_39464_39491[(2)] = inst_39458);

(statearr_39464_39491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (1))){
var state_39462__$1 = state_39462;
var statearr_39465_39492 = state_39462__$1;
(statearr_39465_39492[(2)] = null);

(statearr_39465_39492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (4))){
var inst_39415 = (state_39462[(7)]);
var inst_39415__$1 = (state_39462[(2)]);
var state_39462__$1 = (function (){var statearr_39466 = state_39462;
(statearr_39466[(7)] = inst_39415__$1);

return statearr_39466;
})();
if(cljs.core.truth_(inst_39415__$1)){
var statearr_39467_39493 = state_39462__$1;
(statearr_39467_39493[(1)] = (5));

} else {
var statearr_39468_39494 = state_39462__$1;
(statearr_39468_39494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (15))){
var inst_39422 = (state_39462[(8)]);
var inst_39437 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39422);
var inst_39438 = cljs.core.first.call(null,inst_39437);
var inst_39439 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39438);
var inst_39440 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39439)].join('');
var inst_39441 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39440);
var state_39462__$1 = state_39462;
var statearr_39469_39495 = state_39462__$1;
(statearr_39469_39495[(2)] = inst_39441);

(statearr_39469_39495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (13))){
var inst_39446 = (state_39462[(2)]);
var state_39462__$1 = state_39462;
var statearr_39470_39496 = state_39462__$1;
(statearr_39470_39496[(2)] = inst_39446);

(statearr_39470_39496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (6))){
var state_39462__$1 = state_39462;
var statearr_39471_39497 = state_39462__$1;
(statearr_39471_39497[(2)] = null);

(statearr_39471_39497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (17))){
var inst_39444 = (state_39462[(2)]);
var state_39462__$1 = state_39462;
var statearr_39472_39498 = state_39462__$1;
(statearr_39472_39498[(2)] = inst_39444);

(statearr_39472_39498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (3))){
var inst_39460 = (state_39462[(2)]);
var state_39462__$1 = state_39462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39462__$1,inst_39460);
} else {
if((state_val_39463 === (12))){
var inst_39421 = (state_39462[(9)]);
var inst_39435 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39421,opts);
var state_39462__$1 = state_39462;
if(cljs.core.truth_(inst_39435)){
var statearr_39473_39499 = state_39462__$1;
(statearr_39473_39499[(1)] = (15));

} else {
var statearr_39474_39500 = state_39462__$1;
(statearr_39474_39500[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (2))){
var state_39462__$1 = state_39462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39462__$1,(4),ch);
} else {
if((state_val_39463 === (11))){
var inst_39422 = (state_39462[(8)]);
var inst_39427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39428 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39422);
var inst_39429 = cljs.core.async.timeout.call(null,(1000));
var inst_39430 = [inst_39428,inst_39429];
var inst_39431 = (new cljs.core.PersistentVector(null,2,(5),inst_39427,inst_39430,null));
var state_39462__$1 = state_39462;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39462__$1,(14),inst_39431);
} else {
if((state_val_39463 === (9))){
var inst_39422 = (state_39462[(8)]);
var inst_39448 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39449 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39422);
var inst_39450 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39449);
var inst_39451 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39450)].join('');
var inst_39452 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39451);
var state_39462__$1 = (function (){var statearr_39475 = state_39462;
(statearr_39475[(10)] = inst_39448);

return statearr_39475;
})();
var statearr_39476_39501 = state_39462__$1;
(statearr_39476_39501[(2)] = inst_39452);

(statearr_39476_39501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (5))){
var inst_39415 = (state_39462[(7)]);
var inst_39417 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39418 = (new cljs.core.PersistentArrayMap(null,2,inst_39417,null));
var inst_39419 = (new cljs.core.PersistentHashSet(null,inst_39418,null));
var inst_39420 = figwheel.client.focus_msgs.call(null,inst_39419,inst_39415);
var inst_39421 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39420);
var inst_39422 = cljs.core.first.call(null,inst_39420);
var inst_39423 = figwheel.client.autoload_QMARK_.call(null);
var state_39462__$1 = (function (){var statearr_39477 = state_39462;
(statearr_39477[(8)] = inst_39422);

(statearr_39477[(9)] = inst_39421);

return statearr_39477;
})();
if(cljs.core.truth_(inst_39423)){
var statearr_39478_39502 = state_39462__$1;
(statearr_39478_39502[(1)] = (8));

} else {
var statearr_39479_39503 = state_39462__$1;
(statearr_39479_39503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (14))){
var inst_39433 = (state_39462[(2)]);
var state_39462__$1 = state_39462;
var statearr_39480_39504 = state_39462__$1;
(statearr_39480_39504[(2)] = inst_39433);

(statearr_39480_39504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (16))){
var state_39462__$1 = state_39462;
var statearr_39481_39505 = state_39462__$1;
(statearr_39481_39505[(2)] = null);

(statearr_39481_39505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (10))){
var inst_39454 = (state_39462[(2)]);
var state_39462__$1 = (function (){var statearr_39482 = state_39462;
(statearr_39482[(11)] = inst_39454);

return statearr_39482;
})();
var statearr_39483_39506 = state_39462__$1;
(statearr_39483_39506[(2)] = null);

(statearr_39483_39506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39463 === (8))){
var inst_39421 = (state_39462[(9)]);
var inst_39425 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39421,opts);
var state_39462__$1 = state_39462;
if(cljs.core.truth_(inst_39425)){
var statearr_39484_39507 = state_39462__$1;
(statearr_39484_39507[(1)] = (11));

} else {
var statearr_39485_39508 = state_39462__$1;
(statearr_39485_39508[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35489__auto___39490,ch))
;
return ((function (switch__35399__auto__,c__35489__auto___39490,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35400__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35400__auto____0 = (function (){
var statearr_39486 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39486[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35400__auto__);

(statearr_39486[(1)] = (1));

return statearr_39486;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35400__auto____1 = (function (state_39462){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_39462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e39487){if((e39487 instanceof Object)){
var ex__35403__auto__ = e39487;
var statearr_39488_39509 = state_39462;
(statearr_39488_39509[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39510 = state_39462;
state_39462 = G__39510;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35400__auto__ = function(state_39462){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35400__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35400__auto____1.call(this,state_39462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35400__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35400__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___39490,ch))
})();
var state__35491__auto__ = (function (){var statearr_39489 = f__35490__auto__.call(null);
(statearr_39489[(6)] = c__35489__auto___39490);

return statearr_39489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___39490,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39511_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39511_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39513 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39513){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39512){if((e39512 instanceof Error)){
var e = e39512;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39513], null));
} else {
var e = e39512;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39513))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39514){
var map__39515 = p__39514;
var map__39515__$1 = ((((!((map__39515 == null)))?((((map__39515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39515):map__39515);
var opts = map__39515__$1;
var build_id = cljs.core.get.call(null,map__39515__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39515,map__39515__$1,opts,build_id){
return (function (p__39517){
var vec__39518 = p__39517;
var seq__39519 = cljs.core.seq.call(null,vec__39518);
var first__39520 = cljs.core.first.call(null,seq__39519);
var seq__39519__$1 = cljs.core.next.call(null,seq__39519);
var map__39521 = first__39520;
var map__39521__$1 = ((((!((map__39521 == null)))?((((map__39521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39521):map__39521);
var msg = map__39521__$1;
var msg_name = cljs.core.get.call(null,map__39521__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39519__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39518,seq__39519,first__39520,seq__39519__$1,map__39521,map__39521__$1,msg,msg_name,_,map__39515,map__39515__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39518,seq__39519,first__39520,seq__39519__$1,map__39521,map__39521__$1,msg,msg_name,_,map__39515,map__39515__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39515,map__39515__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39523){
var vec__39524 = p__39523;
var seq__39525 = cljs.core.seq.call(null,vec__39524);
var first__39526 = cljs.core.first.call(null,seq__39525);
var seq__39525__$1 = cljs.core.next.call(null,seq__39525);
var map__39527 = first__39526;
var map__39527__$1 = ((((!((map__39527 == null)))?((((map__39527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39527):map__39527);
var msg = map__39527__$1;
var msg_name = cljs.core.get.call(null,map__39527__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39525__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39529){
var map__39530 = p__39529;
var map__39530__$1 = ((((!((map__39530 == null)))?((((map__39530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39530):map__39530);
var on_compile_warning = cljs.core.get.call(null,map__39530__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39530__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39530,map__39530__$1,on_compile_warning,on_compile_fail){
return (function (p__39532){
var vec__39533 = p__39532;
var seq__39534 = cljs.core.seq.call(null,vec__39533);
var first__39535 = cljs.core.first.call(null,seq__39534);
var seq__39534__$1 = cljs.core.next.call(null,seq__39534);
var map__39536 = first__39535;
var map__39536__$1 = ((((!((map__39536 == null)))?((((map__39536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39536):map__39536);
var msg = map__39536__$1;
var msg_name = cljs.core.get.call(null,map__39536__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39534__$1;
var pred__39538 = cljs.core._EQ_;
var expr__39539 = msg_name;
if(cljs.core.truth_(pred__39538.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39539))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39538.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39539))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39530,map__39530__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto__,msg_hist,msg_names,msg){
return (function (state_39628){
var state_val_39629 = (state_39628[(1)]);
if((state_val_39629 === (7))){
var inst_39548 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
if(cljs.core.truth_(inst_39548)){
var statearr_39630_39677 = state_39628__$1;
(statearr_39630_39677[(1)] = (8));

} else {
var statearr_39631_39678 = state_39628__$1;
(statearr_39631_39678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (20))){
var inst_39622 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
var statearr_39632_39679 = state_39628__$1;
(statearr_39632_39679[(2)] = inst_39622);

(statearr_39632_39679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (27))){
var inst_39618 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
var statearr_39633_39680 = state_39628__$1;
(statearr_39633_39680[(2)] = inst_39618);

(statearr_39633_39680[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (1))){
var inst_39541 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39628__$1 = state_39628;
if(cljs.core.truth_(inst_39541)){
var statearr_39634_39681 = state_39628__$1;
(statearr_39634_39681[(1)] = (2));

} else {
var statearr_39635_39682 = state_39628__$1;
(statearr_39635_39682[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (24))){
var inst_39620 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
var statearr_39636_39683 = state_39628__$1;
(statearr_39636_39683[(2)] = inst_39620);

(statearr_39636_39683[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (4))){
var inst_39626 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39628__$1,inst_39626);
} else {
if((state_val_39629 === (15))){
var inst_39624 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
var statearr_39637_39684 = state_39628__$1;
(statearr_39637_39684[(2)] = inst_39624);

(statearr_39637_39684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (21))){
var inst_39577 = (state_39628[(2)]);
var inst_39578 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39579 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39578);
var state_39628__$1 = (function (){var statearr_39638 = state_39628;
(statearr_39638[(7)] = inst_39577);

return statearr_39638;
})();
var statearr_39639_39685 = state_39628__$1;
(statearr_39639_39685[(2)] = inst_39579);

(statearr_39639_39685[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (31))){
var inst_39607 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39628__$1 = state_39628;
if(cljs.core.truth_(inst_39607)){
var statearr_39640_39686 = state_39628__$1;
(statearr_39640_39686[(1)] = (34));

} else {
var statearr_39641_39687 = state_39628__$1;
(statearr_39641_39687[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (32))){
var inst_39616 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
var statearr_39642_39688 = state_39628__$1;
(statearr_39642_39688[(2)] = inst_39616);

(statearr_39642_39688[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (33))){
var inst_39603 = (state_39628[(2)]);
var inst_39604 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39605 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39604);
var state_39628__$1 = (function (){var statearr_39643 = state_39628;
(statearr_39643[(8)] = inst_39603);

return statearr_39643;
})();
var statearr_39644_39689 = state_39628__$1;
(statearr_39644_39689[(2)] = inst_39605);

(statearr_39644_39689[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (13))){
var inst_39562 = figwheel.client.heads_up.clear.call(null);
var state_39628__$1 = state_39628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39628__$1,(16),inst_39562);
} else {
if((state_val_39629 === (22))){
var inst_39583 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39584 = figwheel.client.heads_up.append_warning_message.call(null,inst_39583);
var state_39628__$1 = state_39628;
var statearr_39645_39690 = state_39628__$1;
(statearr_39645_39690[(2)] = inst_39584);

(statearr_39645_39690[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (36))){
var inst_39614 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
var statearr_39646_39691 = state_39628__$1;
(statearr_39646_39691[(2)] = inst_39614);

(statearr_39646_39691[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (29))){
var inst_39594 = (state_39628[(2)]);
var inst_39595 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39596 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39595);
var state_39628__$1 = (function (){var statearr_39647 = state_39628;
(statearr_39647[(9)] = inst_39594);

return statearr_39647;
})();
var statearr_39648_39692 = state_39628__$1;
(statearr_39648_39692[(2)] = inst_39596);

(statearr_39648_39692[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (6))){
var inst_39543 = (state_39628[(10)]);
var state_39628__$1 = state_39628;
var statearr_39649_39693 = state_39628__$1;
(statearr_39649_39693[(2)] = inst_39543);

(statearr_39649_39693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (28))){
var inst_39590 = (state_39628[(2)]);
var inst_39591 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39592 = figwheel.client.heads_up.display_warning.call(null,inst_39591);
var state_39628__$1 = (function (){var statearr_39650 = state_39628;
(statearr_39650[(11)] = inst_39590);

return statearr_39650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39628__$1,(29),inst_39592);
} else {
if((state_val_39629 === (25))){
var inst_39588 = figwheel.client.heads_up.clear.call(null);
var state_39628__$1 = state_39628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39628__$1,(28),inst_39588);
} else {
if((state_val_39629 === (34))){
var inst_39609 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39628__$1 = state_39628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39628__$1,(37),inst_39609);
} else {
if((state_val_39629 === (17))){
var inst_39568 = (state_39628[(2)]);
var inst_39569 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39570 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39569);
var state_39628__$1 = (function (){var statearr_39651 = state_39628;
(statearr_39651[(12)] = inst_39568);

return statearr_39651;
})();
var statearr_39652_39694 = state_39628__$1;
(statearr_39652_39694[(2)] = inst_39570);

(statearr_39652_39694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (3))){
var inst_39560 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39628__$1 = state_39628;
if(cljs.core.truth_(inst_39560)){
var statearr_39653_39695 = state_39628__$1;
(statearr_39653_39695[(1)] = (13));

} else {
var statearr_39654_39696 = state_39628__$1;
(statearr_39654_39696[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (12))){
var inst_39556 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
var statearr_39655_39697 = state_39628__$1;
(statearr_39655_39697[(2)] = inst_39556);

(statearr_39655_39697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (2))){
var inst_39543 = (state_39628[(10)]);
var inst_39543__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39628__$1 = (function (){var statearr_39656 = state_39628;
(statearr_39656[(10)] = inst_39543__$1);

return statearr_39656;
})();
if(cljs.core.truth_(inst_39543__$1)){
var statearr_39657_39698 = state_39628__$1;
(statearr_39657_39698[(1)] = (5));

} else {
var statearr_39658_39699 = state_39628__$1;
(statearr_39658_39699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (23))){
var inst_39586 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39628__$1 = state_39628;
if(cljs.core.truth_(inst_39586)){
var statearr_39659_39700 = state_39628__$1;
(statearr_39659_39700[(1)] = (25));

} else {
var statearr_39660_39701 = state_39628__$1;
(statearr_39660_39701[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (35))){
var state_39628__$1 = state_39628;
var statearr_39661_39702 = state_39628__$1;
(statearr_39661_39702[(2)] = null);

(statearr_39661_39702[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (19))){
var inst_39581 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39628__$1 = state_39628;
if(cljs.core.truth_(inst_39581)){
var statearr_39662_39703 = state_39628__$1;
(statearr_39662_39703[(1)] = (22));

} else {
var statearr_39663_39704 = state_39628__$1;
(statearr_39663_39704[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (11))){
var inst_39552 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
var statearr_39664_39705 = state_39628__$1;
(statearr_39664_39705[(2)] = inst_39552);

(statearr_39664_39705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (9))){
var inst_39554 = figwheel.client.heads_up.clear.call(null);
var state_39628__$1 = state_39628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39628__$1,(12),inst_39554);
} else {
if((state_val_39629 === (5))){
var inst_39545 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39628__$1 = state_39628;
var statearr_39665_39706 = state_39628__$1;
(statearr_39665_39706[(2)] = inst_39545);

(statearr_39665_39706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (14))){
var inst_39572 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39628__$1 = state_39628;
if(cljs.core.truth_(inst_39572)){
var statearr_39666_39707 = state_39628__$1;
(statearr_39666_39707[(1)] = (18));

} else {
var statearr_39667_39708 = state_39628__$1;
(statearr_39667_39708[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (26))){
var inst_39598 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39628__$1 = state_39628;
if(cljs.core.truth_(inst_39598)){
var statearr_39668_39709 = state_39628__$1;
(statearr_39668_39709[(1)] = (30));

} else {
var statearr_39669_39710 = state_39628__$1;
(statearr_39669_39710[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (16))){
var inst_39564 = (state_39628[(2)]);
var inst_39565 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39566 = figwheel.client.heads_up.display_exception.call(null,inst_39565);
var state_39628__$1 = (function (){var statearr_39670 = state_39628;
(statearr_39670[(13)] = inst_39564);

return statearr_39670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39628__$1,(17),inst_39566);
} else {
if((state_val_39629 === (30))){
var inst_39600 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39601 = figwheel.client.heads_up.display_warning.call(null,inst_39600);
var state_39628__$1 = state_39628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39628__$1,(33),inst_39601);
} else {
if((state_val_39629 === (10))){
var inst_39558 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
var statearr_39671_39711 = state_39628__$1;
(statearr_39671_39711[(2)] = inst_39558);

(statearr_39671_39711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (18))){
var inst_39574 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39575 = figwheel.client.heads_up.display_exception.call(null,inst_39574);
var state_39628__$1 = state_39628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39628__$1,(21),inst_39575);
} else {
if((state_val_39629 === (37))){
var inst_39611 = (state_39628[(2)]);
var state_39628__$1 = state_39628;
var statearr_39672_39712 = state_39628__$1;
(statearr_39672_39712[(2)] = inst_39611);

(statearr_39672_39712[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39629 === (8))){
var inst_39550 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39628__$1 = state_39628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39628__$1,(11),inst_39550);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35489__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35399__auto__,c__35489__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto____0 = (function (){
var statearr_39673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39673[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto__);

(statearr_39673[(1)] = (1));

return statearr_39673;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto____1 = (function (state_39628){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_39628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e39674){if((e39674 instanceof Object)){
var ex__35403__auto__ = e39674;
var statearr_39675_39713 = state_39628;
(statearr_39675_39713[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39714 = state_39628;
state_39628 = G__39714;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto__ = function(state_39628){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto____1.call(this,state_39628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto__,msg_hist,msg_names,msg))
})();
var state__35491__auto__ = (function (){var statearr_39676 = f__35490__auto__.call(null);
(statearr_39676[(6)] = c__35489__auto__);

return statearr_39676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto__,msg_hist,msg_names,msg))
);

return c__35489__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35489__auto___39743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___39743,ch){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___39743,ch){
return (function (state_39729){
var state_val_39730 = (state_39729[(1)]);
if((state_val_39730 === (1))){
var state_39729__$1 = state_39729;
var statearr_39731_39744 = state_39729__$1;
(statearr_39731_39744[(2)] = null);

(statearr_39731_39744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (2))){
var state_39729__$1 = state_39729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39729__$1,(4),ch);
} else {
if((state_val_39730 === (3))){
var inst_39727 = (state_39729[(2)]);
var state_39729__$1 = state_39729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39729__$1,inst_39727);
} else {
if((state_val_39730 === (4))){
var inst_39717 = (state_39729[(7)]);
var inst_39717__$1 = (state_39729[(2)]);
var state_39729__$1 = (function (){var statearr_39732 = state_39729;
(statearr_39732[(7)] = inst_39717__$1);

return statearr_39732;
})();
if(cljs.core.truth_(inst_39717__$1)){
var statearr_39733_39745 = state_39729__$1;
(statearr_39733_39745[(1)] = (5));

} else {
var statearr_39734_39746 = state_39729__$1;
(statearr_39734_39746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (5))){
var inst_39717 = (state_39729[(7)]);
var inst_39719 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39717);
var state_39729__$1 = state_39729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39729__$1,(8),inst_39719);
} else {
if((state_val_39730 === (6))){
var state_39729__$1 = state_39729;
var statearr_39735_39747 = state_39729__$1;
(statearr_39735_39747[(2)] = null);

(statearr_39735_39747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (7))){
var inst_39725 = (state_39729[(2)]);
var state_39729__$1 = state_39729;
var statearr_39736_39748 = state_39729__$1;
(statearr_39736_39748[(2)] = inst_39725);

(statearr_39736_39748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (8))){
var inst_39721 = (state_39729[(2)]);
var state_39729__$1 = (function (){var statearr_39737 = state_39729;
(statearr_39737[(8)] = inst_39721);

return statearr_39737;
})();
var statearr_39738_39749 = state_39729__$1;
(statearr_39738_39749[(2)] = null);

(statearr_39738_39749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__35489__auto___39743,ch))
;
return ((function (switch__35399__auto__,c__35489__auto___39743,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35400__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35400__auto____0 = (function (){
var statearr_39739 = [null,null,null,null,null,null,null,null,null];
(statearr_39739[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35400__auto__);

(statearr_39739[(1)] = (1));

return statearr_39739;
});
var figwheel$client$heads_up_plugin_$_state_machine__35400__auto____1 = (function (state_39729){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_39729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e39740){if((e39740 instanceof Object)){
var ex__35403__auto__ = e39740;
var statearr_39741_39750 = state_39729;
(statearr_39741_39750[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39751 = state_39729;
state_39729 = G__39751;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35400__auto__ = function(state_39729){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35400__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35400__auto____1.call(this,state_39729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35400__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35400__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___39743,ch))
})();
var state__35491__auto__ = (function (){var statearr_39742 = f__35490__auto__.call(null);
(statearr_39742[(6)] = c__35489__auto___39743);

return statearr_39742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___39743,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto__){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto__){
return (function (state_39757){
var state_val_39758 = (state_39757[(1)]);
if((state_val_39758 === (1))){
var inst_39752 = cljs.core.async.timeout.call(null,(3000));
var state_39757__$1 = state_39757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39757__$1,(2),inst_39752);
} else {
if((state_val_39758 === (2))){
var inst_39754 = (state_39757[(2)]);
var inst_39755 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39757__$1 = (function (){var statearr_39759 = state_39757;
(statearr_39759[(7)] = inst_39754);

return statearr_39759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39757__$1,inst_39755);
} else {
return null;
}
}
});})(c__35489__auto__))
;
return ((function (switch__35399__auto__,c__35489__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35400__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35400__auto____0 = (function (){
var statearr_39760 = [null,null,null,null,null,null,null,null];
(statearr_39760[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35400__auto__);

(statearr_39760[(1)] = (1));

return statearr_39760;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35400__auto____1 = (function (state_39757){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_39757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e39761){if((e39761 instanceof Object)){
var ex__35403__auto__ = e39761;
var statearr_39762_39764 = state_39757;
(statearr_39762_39764[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39765 = state_39757;
state_39757 = G__39765;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35400__auto__ = function(state_39757){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35400__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35400__auto____1.call(this,state_39757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35400__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35400__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto__))
})();
var state__35491__auto__ = (function (){var statearr_39763 = f__35490__auto__.call(null);
(statearr_39763[(6)] = c__35489__auto__);

return statearr_39763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto__))
);

return c__35489__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39772){
var state_val_39773 = (state_39772[(1)]);
if((state_val_39773 === (1))){
var inst_39766 = cljs.core.async.timeout.call(null,(2000));
var state_39772__$1 = state_39772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39772__$1,(2),inst_39766);
} else {
if((state_val_39773 === (2))){
var inst_39768 = (state_39772[(2)]);
var inst_39769 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39770 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39769);
var state_39772__$1 = (function (){var statearr_39774 = state_39772;
(statearr_39774[(7)] = inst_39768);

return statearr_39774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39772__$1,inst_39770);
} else {
return null;
}
}
});})(c__35489__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__35399__auto__,c__35489__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto____0 = (function (){
var statearr_39775 = [null,null,null,null,null,null,null,null];
(statearr_39775[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto__);

(statearr_39775[(1)] = (1));

return statearr_39775;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto____1 = (function (state_39772){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_39772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e39776){if((e39776 instanceof Object)){
var ex__35403__auto__ = e39776;
var statearr_39777_39779 = state_39772;
(statearr_39777_39779[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39780 = state_39772;
state_39772 = G__39780;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto__ = function(state_39772){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto____1.call(this,state_39772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto__,figwheel_version,temp__5457__auto__))
})();
var state__35491__auto__ = (function (){var statearr_39778 = f__35490__auto__.call(null);
(statearr_39778[(6)] = c__35489__auto__);

return statearr_39778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto__,figwheel_version,temp__5457__auto__))
);

return c__35489__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39781){
var map__39782 = p__39781;
var map__39782__$1 = ((((!((map__39782 == null)))?((((map__39782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39782):map__39782);
var file = cljs.core.get.call(null,map__39782__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39782__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39782__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39784 = "";
var G__39784__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39784),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39784);
var G__39784__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39784__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39784__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = line;
if(cljs.core.truth_(and__30071__auto__)){
return column;
} else {
return and__30071__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39784__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39784__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39785){
var map__39786 = p__39785;
var map__39786__$1 = ((((!((map__39786 == null)))?((((map__39786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39786):map__39786);
var ed = map__39786__$1;
var formatted_exception = cljs.core.get.call(null,map__39786__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39786__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39786__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39788_39792 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39789_39793 = null;
var count__39790_39794 = (0);
var i__39791_39795 = (0);
while(true){
if((i__39791_39795 < count__39790_39794)){
var msg_39796 = cljs.core._nth.call(null,chunk__39789_39793,i__39791_39795);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39796);

var G__39797 = seq__39788_39792;
var G__39798 = chunk__39789_39793;
var G__39799 = count__39790_39794;
var G__39800 = (i__39791_39795 + (1));
seq__39788_39792 = G__39797;
chunk__39789_39793 = G__39798;
count__39790_39794 = G__39799;
i__39791_39795 = G__39800;
continue;
} else {
var temp__5457__auto___39801 = cljs.core.seq.call(null,seq__39788_39792);
if(temp__5457__auto___39801){
var seq__39788_39802__$1 = temp__5457__auto___39801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39788_39802__$1)){
var c__31014__auto___39803 = cljs.core.chunk_first.call(null,seq__39788_39802__$1);
var G__39804 = cljs.core.chunk_rest.call(null,seq__39788_39802__$1);
var G__39805 = c__31014__auto___39803;
var G__39806 = cljs.core.count.call(null,c__31014__auto___39803);
var G__39807 = (0);
seq__39788_39792 = G__39804;
chunk__39789_39793 = G__39805;
count__39790_39794 = G__39806;
i__39791_39795 = G__39807;
continue;
} else {
var msg_39808 = cljs.core.first.call(null,seq__39788_39802__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39808);

var G__39809 = cljs.core.next.call(null,seq__39788_39802__$1);
var G__39810 = null;
var G__39811 = (0);
var G__39812 = (0);
seq__39788_39792 = G__39809;
chunk__39789_39793 = G__39810;
count__39790_39794 = G__39811;
i__39791_39795 = G__39812;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39813){
var map__39814 = p__39813;
var map__39814__$1 = ((((!((map__39814 == null)))?((((map__39814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39814):map__39814);
var w = map__39814__$1;
var message = cljs.core.get.call(null,map__39814__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30071__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30071__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39816 = cljs.core.seq.call(null,plugins);
var chunk__39817 = null;
var count__39818 = (0);
var i__39819 = (0);
while(true){
if((i__39819 < count__39818)){
var vec__39820 = cljs.core._nth.call(null,chunk__39817,i__39819);
var k = cljs.core.nth.call(null,vec__39820,(0),null);
var plugin = cljs.core.nth.call(null,vec__39820,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39826 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39816,chunk__39817,count__39818,i__39819,pl_39826,vec__39820,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39826.call(null,msg_hist);
});})(seq__39816,chunk__39817,count__39818,i__39819,pl_39826,vec__39820,k,plugin))
);
} else {
}

var G__39827 = seq__39816;
var G__39828 = chunk__39817;
var G__39829 = count__39818;
var G__39830 = (i__39819 + (1));
seq__39816 = G__39827;
chunk__39817 = G__39828;
count__39818 = G__39829;
i__39819 = G__39830;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39816);
if(temp__5457__auto__){
var seq__39816__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39816__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__39816__$1);
var G__39831 = cljs.core.chunk_rest.call(null,seq__39816__$1);
var G__39832 = c__31014__auto__;
var G__39833 = cljs.core.count.call(null,c__31014__auto__);
var G__39834 = (0);
seq__39816 = G__39831;
chunk__39817 = G__39832;
count__39818 = G__39833;
i__39819 = G__39834;
continue;
} else {
var vec__39823 = cljs.core.first.call(null,seq__39816__$1);
var k = cljs.core.nth.call(null,vec__39823,(0),null);
var plugin = cljs.core.nth.call(null,vec__39823,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39835 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39816,chunk__39817,count__39818,i__39819,pl_39835,vec__39823,k,plugin,seq__39816__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39835.call(null,msg_hist);
});})(seq__39816,chunk__39817,count__39818,i__39819,pl_39835,vec__39823,k,plugin,seq__39816__$1,temp__5457__auto__))
);
} else {
}

var G__39836 = cljs.core.next.call(null,seq__39816__$1);
var G__39837 = null;
var G__39838 = (0);
var G__39839 = (0);
seq__39816 = G__39836;
chunk__39817 = G__39837;
count__39818 = G__39838;
i__39819 = G__39839;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39841 = arguments.length;
switch (G__39841) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39842_39847 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39843_39848 = null;
var count__39844_39849 = (0);
var i__39845_39850 = (0);
while(true){
if((i__39845_39850 < count__39844_39849)){
var msg_39851 = cljs.core._nth.call(null,chunk__39843_39848,i__39845_39850);
figwheel.client.socket.handle_incoming_message.call(null,msg_39851);

var G__39852 = seq__39842_39847;
var G__39853 = chunk__39843_39848;
var G__39854 = count__39844_39849;
var G__39855 = (i__39845_39850 + (1));
seq__39842_39847 = G__39852;
chunk__39843_39848 = G__39853;
count__39844_39849 = G__39854;
i__39845_39850 = G__39855;
continue;
} else {
var temp__5457__auto___39856 = cljs.core.seq.call(null,seq__39842_39847);
if(temp__5457__auto___39856){
var seq__39842_39857__$1 = temp__5457__auto___39856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39842_39857__$1)){
var c__31014__auto___39858 = cljs.core.chunk_first.call(null,seq__39842_39857__$1);
var G__39859 = cljs.core.chunk_rest.call(null,seq__39842_39857__$1);
var G__39860 = c__31014__auto___39858;
var G__39861 = cljs.core.count.call(null,c__31014__auto___39858);
var G__39862 = (0);
seq__39842_39847 = G__39859;
chunk__39843_39848 = G__39860;
count__39844_39849 = G__39861;
i__39845_39850 = G__39862;
continue;
} else {
var msg_39863 = cljs.core.first.call(null,seq__39842_39857__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39863);

var G__39864 = cljs.core.next.call(null,seq__39842_39857__$1);
var G__39865 = null;
var G__39866 = (0);
var G__39867 = (0);
seq__39842_39847 = G__39864;
chunk__39843_39848 = G__39865;
count__39844_39849 = G__39866;
i__39845_39850 = G__39867;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31369__auto__ = [];
var len__31362__auto___39872 = arguments.length;
var i__31363__auto___39873 = (0);
while(true){
if((i__31363__auto___39873 < len__31362__auto___39872)){
args__31369__auto__.push((arguments[i__31363__auto___39873]));

var G__39874 = (i__31363__auto___39873 + (1));
i__31363__auto___39873 = G__39874;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39869){
var map__39870 = p__39869;
var map__39870__$1 = ((((!((map__39870 == null)))?((((map__39870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39870):map__39870);
var opts = map__39870__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39868){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39868));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39875){if((e39875 instanceof Error)){
var e = e39875;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39875;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39876){
var map__39877 = p__39876;
var map__39877__$1 = ((((!((map__39877 == null)))?((((map__39877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39877):map__39877);
var msg_name = cljs.core.get.call(null,map__39877__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1521406490870
