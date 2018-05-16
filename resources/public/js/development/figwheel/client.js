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
}catch (e39590){if((e39590 instanceof Error)){
var e = e39590;
return "Error: Unable to stringify";
} else {
throw e39590;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39593 = arguments.length;
switch (G__39593) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39591_SHARP_){
if(typeof p1__39591_SHARP_ === 'string'){
return p1__39591_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39591_SHARP_);
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
var len__31362__auto___39596 = arguments.length;
var i__31363__auto___39597 = (0);
while(true){
if((i__31363__auto___39597 < len__31362__auto___39596)){
args__31369__auto__.push((arguments[i__31363__auto___39597]));

var G__39598 = (i__31363__auto___39597 + (1));
i__31363__auto___39597 = G__39598;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39595){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39595));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31369__auto__ = [];
var len__31362__auto___39600 = arguments.length;
var i__31363__auto___39601 = (0);
while(true){
if((i__31363__auto___39601 < len__31362__auto___39600)){
args__31369__auto__.push((arguments[i__31363__auto___39601]));

var G__39602 = (i__31363__auto___39601 + (1));
i__31363__auto___39601 = G__39602;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39599){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39599));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39603){
var map__39604 = p__39603;
var map__39604__$1 = ((((!((map__39604 == null)))?((((map__39604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39604):map__39604);
var message = cljs.core.get.call(null,map__39604__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39604__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__34577__auto___39683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___39683,ch){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___39683,ch){
return (function (state_39655){
var state_val_39656 = (state_39655[(1)]);
if((state_val_39656 === (7))){
var inst_39651 = (state_39655[(2)]);
var state_39655__$1 = state_39655;
var statearr_39657_39684 = state_39655__$1;
(statearr_39657_39684[(2)] = inst_39651);

(statearr_39657_39684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (1))){
var state_39655__$1 = state_39655;
var statearr_39658_39685 = state_39655__$1;
(statearr_39658_39685[(2)] = null);

(statearr_39658_39685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (4))){
var inst_39608 = (state_39655[(7)]);
var inst_39608__$1 = (state_39655[(2)]);
var state_39655__$1 = (function (){var statearr_39659 = state_39655;
(statearr_39659[(7)] = inst_39608__$1);

return statearr_39659;
})();
if(cljs.core.truth_(inst_39608__$1)){
var statearr_39660_39686 = state_39655__$1;
(statearr_39660_39686[(1)] = (5));

} else {
var statearr_39661_39687 = state_39655__$1;
(statearr_39661_39687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (15))){
var inst_39615 = (state_39655[(8)]);
var inst_39630 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39615);
var inst_39631 = cljs.core.first.call(null,inst_39630);
var inst_39632 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39631);
var inst_39633 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39632)].join('');
var inst_39634 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39633);
var state_39655__$1 = state_39655;
var statearr_39662_39688 = state_39655__$1;
(statearr_39662_39688[(2)] = inst_39634);

(statearr_39662_39688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (13))){
var inst_39639 = (state_39655[(2)]);
var state_39655__$1 = state_39655;
var statearr_39663_39689 = state_39655__$1;
(statearr_39663_39689[(2)] = inst_39639);

(statearr_39663_39689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (6))){
var state_39655__$1 = state_39655;
var statearr_39664_39690 = state_39655__$1;
(statearr_39664_39690[(2)] = null);

(statearr_39664_39690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (17))){
var inst_39637 = (state_39655[(2)]);
var state_39655__$1 = state_39655;
var statearr_39665_39691 = state_39655__$1;
(statearr_39665_39691[(2)] = inst_39637);

(statearr_39665_39691[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (3))){
var inst_39653 = (state_39655[(2)]);
var state_39655__$1 = state_39655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39655__$1,inst_39653);
} else {
if((state_val_39656 === (12))){
var inst_39614 = (state_39655[(9)]);
var inst_39628 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39614,opts);
var state_39655__$1 = state_39655;
if(cljs.core.truth_(inst_39628)){
var statearr_39666_39692 = state_39655__$1;
(statearr_39666_39692[(1)] = (15));

} else {
var statearr_39667_39693 = state_39655__$1;
(statearr_39667_39693[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (2))){
var state_39655__$1 = state_39655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39655__$1,(4),ch);
} else {
if((state_val_39656 === (11))){
var inst_39615 = (state_39655[(8)]);
var inst_39620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39621 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39615);
var inst_39622 = cljs.core.async.timeout.call(null,(1000));
var inst_39623 = [inst_39621,inst_39622];
var inst_39624 = (new cljs.core.PersistentVector(null,2,(5),inst_39620,inst_39623,null));
var state_39655__$1 = state_39655;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39655__$1,(14),inst_39624);
} else {
if((state_val_39656 === (9))){
var inst_39615 = (state_39655[(8)]);
var inst_39641 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39642 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39615);
var inst_39643 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39642);
var inst_39644 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39643)].join('');
var inst_39645 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39644);
var state_39655__$1 = (function (){var statearr_39668 = state_39655;
(statearr_39668[(10)] = inst_39641);

return statearr_39668;
})();
var statearr_39669_39694 = state_39655__$1;
(statearr_39669_39694[(2)] = inst_39645);

(statearr_39669_39694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (5))){
var inst_39608 = (state_39655[(7)]);
var inst_39610 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39611 = (new cljs.core.PersistentArrayMap(null,2,inst_39610,null));
var inst_39612 = (new cljs.core.PersistentHashSet(null,inst_39611,null));
var inst_39613 = figwheel.client.focus_msgs.call(null,inst_39612,inst_39608);
var inst_39614 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39613);
var inst_39615 = cljs.core.first.call(null,inst_39613);
var inst_39616 = figwheel.client.autoload_QMARK_.call(null);
var state_39655__$1 = (function (){var statearr_39670 = state_39655;
(statearr_39670[(8)] = inst_39615);

(statearr_39670[(9)] = inst_39614);

return statearr_39670;
})();
if(cljs.core.truth_(inst_39616)){
var statearr_39671_39695 = state_39655__$1;
(statearr_39671_39695[(1)] = (8));

} else {
var statearr_39672_39696 = state_39655__$1;
(statearr_39672_39696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (14))){
var inst_39626 = (state_39655[(2)]);
var state_39655__$1 = state_39655;
var statearr_39673_39697 = state_39655__$1;
(statearr_39673_39697[(2)] = inst_39626);

(statearr_39673_39697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (16))){
var state_39655__$1 = state_39655;
var statearr_39674_39698 = state_39655__$1;
(statearr_39674_39698[(2)] = null);

(statearr_39674_39698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (10))){
var inst_39647 = (state_39655[(2)]);
var state_39655__$1 = (function (){var statearr_39675 = state_39655;
(statearr_39675[(11)] = inst_39647);

return statearr_39675;
})();
var statearr_39676_39699 = state_39655__$1;
(statearr_39676_39699[(2)] = null);

(statearr_39676_39699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39656 === (8))){
var inst_39614 = (state_39655[(9)]);
var inst_39618 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39614,opts);
var state_39655__$1 = state_39655;
if(cljs.core.truth_(inst_39618)){
var statearr_39677_39700 = state_39655__$1;
(statearr_39677_39700[(1)] = (11));

} else {
var statearr_39678_39701 = state_39655__$1;
(statearr_39678_39701[(1)] = (12));

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
});})(c__34577__auto___39683,ch))
;
return ((function (switch__34487__auto__,c__34577__auto___39683,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34488__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34488__auto____0 = (function (){
var statearr_39679 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39679[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34488__auto__);

(statearr_39679[(1)] = (1));

return statearr_39679;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34488__auto____1 = (function (state_39655){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_39655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e39680){if((e39680 instanceof Object)){
var ex__34491__auto__ = e39680;
var statearr_39681_39702 = state_39655;
(statearr_39681_39702[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39703 = state_39655;
state_39655 = G__39703;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34488__auto__ = function(state_39655){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34488__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34488__auto____1.call(this,state_39655);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34488__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34488__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___39683,ch))
})();
var state__34579__auto__ = (function (){var statearr_39682 = f__34578__auto__.call(null);
(statearr_39682[(6)] = c__34577__auto___39683);

return statearr_39682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___39683,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39704_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39704_SHARP_));
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
var base_path_39706 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39706){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39705){if((e39705 instanceof Error)){
var e = e39705;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39706], null));
} else {
var e = e39705;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39706))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39707){
var map__39708 = p__39707;
var map__39708__$1 = ((((!((map__39708 == null)))?((((map__39708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39708):map__39708);
var opts = map__39708__$1;
var build_id = cljs.core.get.call(null,map__39708__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39708,map__39708__$1,opts,build_id){
return (function (p__39710){
var vec__39711 = p__39710;
var seq__39712 = cljs.core.seq.call(null,vec__39711);
var first__39713 = cljs.core.first.call(null,seq__39712);
var seq__39712__$1 = cljs.core.next.call(null,seq__39712);
var map__39714 = first__39713;
var map__39714__$1 = ((((!((map__39714 == null)))?((((map__39714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39714):map__39714);
var msg = map__39714__$1;
var msg_name = cljs.core.get.call(null,map__39714__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39712__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39711,seq__39712,first__39713,seq__39712__$1,map__39714,map__39714__$1,msg,msg_name,_,map__39708,map__39708__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39711,seq__39712,first__39713,seq__39712__$1,map__39714,map__39714__$1,msg,msg_name,_,map__39708,map__39708__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39708,map__39708__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39716){
var vec__39717 = p__39716;
var seq__39718 = cljs.core.seq.call(null,vec__39717);
var first__39719 = cljs.core.first.call(null,seq__39718);
var seq__39718__$1 = cljs.core.next.call(null,seq__39718);
var map__39720 = first__39719;
var map__39720__$1 = ((((!((map__39720 == null)))?((((map__39720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39720):map__39720);
var msg = map__39720__$1;
var msg_name = cljs.core.get.call(null,map__39720__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39718__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39722){
var map__39723 = p__39722;
var map__39723__$1 = ((((!((map__39723 == null)))?((((map__39723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39723):map__39723);
var on_compile_warning = cljs.core.get.call(null,map__39723__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39723__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39723,map__39723__$1,on_compile_warning,on_compile_fail){
return (function (p__39725){
var vec__39726 = p__39725;
var seq__39727 = cljs.core.seq.call(null,vec__39726);
var first__39728 = cljs.core.first.call(null,seq__39727);
var seq__39727__$1 = cljs.core.next.call(null,seq__39727);
var map__39729 = first__39728;
var map__39729__$1 = ((((!((map__39729 == null)))?((((map__39729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39729):map__39729);
var msg = map__39729__$1;
var msg_name = cljs.core.get.call(null,map__39729__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39727__$1;
var pred__39731 = cljs.core._EQ_;
var expr__39732 = msg_name;
if(cljs.core.truth_(pred__39731.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39732))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39731.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39732))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39723,map__39723__$1,on_compile_warning,on_compile_fail))
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
var c__34577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto__,msg_hist,msg_names,msg){
return (function (state_39821){
var state_val_39822 = (state_39821[(1)]);
if((state_val_39822 === (7))){
var inst_39741 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
if(cljs.core.truth_(inst_39741)){
var statearr_39823_39870 = state_39821__$1;
(statearr_39823_39870[(1)] = (8));

} else {
var statearr_39824_39871 = state_39821__$1;
(statearr_39824_39871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (20))){
var inst_39815 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
var statearr_39825_39872 = state_39821__$1;
(statearr_39825_39872[(2)] = inst_39815);

(statearr_39825_39872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (27))){
var inst_39811 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
var statearr_39826_39873 = state_39821__$1;
(statearr_39826_39873[(2)] = inst_39811);

(statearr_39826_39873[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (1))){
var inst_39734 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39821__$1 = state_39821;
if(cljs.core.truth_(inst_39734)){
var statearr_39827_39874 = state_39821__$1;
(statearr_39827_39874[(1)] = (2));

} else {
var statearr_39828_39875 = state_39821__$1;
(statearr_39828_39875[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (24))){
var inst_39813 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
var statearr_39829_39876 = state_39821__$1;
(statearr_39829_39876[(2)] = inst_39813);

(statearr_39829_39876[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (4))){
var inst_39819 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39821__$1,inst_39819);
} else {
if((state_val_39822 === (15))){
var inst_39817 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
var statearr_39830_39877 = state_39821__$1;
(statearr_39830_39877[(2)] = inst_39817);

(statearr_39830_39877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (21))){
var inst_39770 = (state_39821[(2)]);
var inst_39771 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39772 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39771);
var state_39821__$1 = (function (){var statearr_39831 = state_39821;
(statearr_39831[(7)] = inst_39770);

return statearr_39831;
})();
var statearr_39832_39878 = state_39821__$1;
(statearr_39832_39878[(2)] = inst_39772);

(statearr_39832_39878[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (31))){
var inst_39800 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39821__$1 = state_39821;
if(cljs.core.truth_(inst_39800)){
var statearr_39833_39879 = state_39821__$1;
(statearr_39833_39879[(1)] = (34));

} else {
var statearr_39834_39880 = state_39821__$1;
(statearr_39834_39880[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (32))){
var inst_39809 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
var statearr_39835_39881 = state_39821__$1;
(statearr_39835_39881[(2)] = inst_39809);

(statearr_39835_39881[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (33))){
var inst_39796 = (state_39821[(2)]);
var inst_39797 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39798 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39797);
var state_39821__$1 = (function (){var statearr_39836 = state_39821;
(statearr_39836[(8)] = inst_39796);

return statearr_39836;
})();
var statearr_39837_39882 = state_39821__$1;
(statearr_39837_39882[(2)] = inst_39798);

(statearr_39837_39882[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (13))){
var inst_39755 = figwheel.client.heads_up.clear.call(null);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(16),inst_39755);
} else {
if((state_val_39822 === (22))){
var inst_39776 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39777 = figwheel.client.heads_up.append_warning_message.call(null,inst_39776);
var state_39821__$1 = state_39821;
var statearr_39838_39883 = state_39821__$1;
(statearr_39838_39883[(2)] = inst_39777);

(statearr_39838_39883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (36))){
var inst_39807 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
var statearr_39839_39884 = state_39821__$1;
(statearr_39839_39884[(2)] = inst_39807);

(statearr_39839_39884[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (29))){
var inst_39787 = (state_39821[(2)]);
var inst_39788 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39789 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39788);
var state_39821__$1 = (function (){var statearr_39840 = state_39821;
(statearr_39840[(9)] = inst_39787);

return statearr_39840;
})();
var statearr_39841_39885 = state_39821__$1;
(statearr_39841_39885[(2)] = inst_39789);

(statearr_39841_39885[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (6))){
var inst_39736 = (state_39821[(10)]);
var state_39821__$1 = state_39821;
var statearr_39842_39886 = state_39821__$1;
(statearr_39842_39886[(2)] = inst_39736);

(statearr_39842_39886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (28))){
var inst_39783 = (state_39821[(2)]);
var inst_39784 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39785 = figwheel.client.heads_up.display_warning.call(null,inst_39784);
var state_39821__$1 = (function (){var statearr_39843 = state_39821;
(statearr_39843[(11)] = inst_39783);

return statearr_39843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(29),inst_39785);
} else {
if((state_val_39822 === (25))){
var inst_39781 = figwheel.client.heads_up.clear.call(null);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(28),inst_39781);
} else {
if((state_val_39822 === (34))){
var inst_39802 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(37),inst_39802);
} else {
if((state_val_39822 === (17))){
var inst_39761 = (state_39821[(2)]);
var inst_39762 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39763 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39762);
var state_39821__$1 = (function (){var statearr_39844 = state_39821;
(statearr_39844[(12)] = inst_39761);

return statearr_39844;
})();
var statearr_39845_39887 = state_39821__$1;
(statearr_39845_39887[(2)] = inst_39763);

(statearr_39845_39887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (3))){
var inst_39753 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39821__$1 = state_39821;
if(cljs.core.truth_(inst_39753)){
var statearr_39846_39888 = state_39821__$1;
(statearr_39846_39888[(1)] = (13));

} else {
var statearr_39847_39889 = state_39821__$1;
(statearr_39847_39889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (12))){
var inst_39749 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
var statearr_39848_39890 = state_39821__$1;
(statearr_39848_39890[(2)] = inst_39749);

(statearr_39848_39890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (2))){
var inst_39736 = (state_39821[(10)]);
var inst_39736__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39821__$1 = (function (){var statearr_39849 = state_39821;
(statearr_39849[(10)] = inst_39736__$1);

return statearr_39849;
})();
if(cljs.core.truth_(inst_39736__$1)){
var statearr_39850_39891 = state_39821__$1;
(statearr_39850_39891[(1)] = (5));

} else {
var statearr_39851_39892 = state_39821__$1;
(statearr_39851_39892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (23))){
var inst_39779 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39821__$1 = state_39821;
if(cljs.core.truth_(inst_39779)){
var statearr_39852_39893 = state_39821__$1;
(statearr_39852_39893[(1)] = (25));

} else {
var statearr_39853_39894 = state_39821__$1;
(statearr_39853_39894[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (35))){
var state_39821__$1 = state_39821;
var statearr_39854_39895 = state_39821__$1;
(statearr_39854_39895[(2)] = null);

(statearr_39854_39895[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (19))){
var inst_39774 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39821__$1 = state_39821;
if(cljs.core.truth_(inst_39774)){
var statearr_39855_39896 = state_39821__$1;
(statearr_39855_39896[(1)] = (22));

} else {
var statearr_39856_39897 = state_39821__$1;
(statearr_39856_39897[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (11))){
var inst_39745 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
var statearr_39857_39898 = state_39821__$1;
(statearr_39857_39898[(2)] = inst_39745);

(statearr_39857_39898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (9))){
var inst_39747 = figwheel.client.heads_up.clear.call(null);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(12),inst_39747);
} else {
if((state_val_39822 === (5))){
var inst_39738 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39821__$1 = state_39821;
var statearr_39858_39899 = state_39821__$1;
(statearr_39858_39899[(2)] = inst_39738);

(statearr_39858_39899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (14))){
var inst_39765 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39821__$1 = state_39821;
if(cljs.core.truth_(inst_39765)){
var statearr_39859_39900 = state_39821__$1;
(statearr_39859_39900[(1)] = (18));

} else {
var statearr_39860_39901 = state_39821__$1;
(statearr_39860_39901[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (26))){
var inst_39791 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39821__$1 = state_39821;
if(cljs.core.truth_(inst_39791)){
var statearr_39861_39902 = state_39821__$1;
(statearr_39861_39902[(1)] = (30));

} else {
var statearr_39862_39903 = state_39821__$1;
(statearr_39862_39903[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (16))){
var inst_39757 = (state_39821[(2)]);
var inst_39758 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39759 = figwheel.client.heads_up.display_exception.call(null,inst_39758);
var state_39821__$1 = (function (){var statearr_39863 = state_39821;
(statearr_39863[(13)] = inst_39757);

return statearr_39863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(17),inst_39759);
} else {
if((state_val_39822 === (30))){
var inst_39793 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39794 = figwheel.client.heads_up.display_warning.call(null,inst_39793);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(33),inst_39794);
} else {
if((state_val_39822 === (10))){
var inst_39751 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
var statearr_39864_39904 = state_39821__$1;
(statearr_39864_39904[(2)] = inst_39751);

(statearr_39864_39904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (18))){
var inst_39767 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39768 = figwheel.client.heads_up.display_exception.call(null,inst_39767);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(21),inst_39768);
} else {
if((state_val_39822 === (37))){
var inst_39804 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
var statearr_39865_39905 = state_39821__$1;
(statearr_39865_39905[(2)] = inst_39804);

(statearr_39865_39905[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (8))){
var inst_39743 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(11),inst_39743);
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
});})(c__34577__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34487__auto__,c__34577__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto____0 = (function (){
var statearr_39866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39866[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto__);

(statearr_39866[(1)] = (1));

return statearr_39866;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto____1 = (function (state_39821){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_39821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e39867){if((e39867 instanceof Object)){
var ex__34491__auto__ = e39867;
var statearr_39868_39906 = state_39821;
(statearr_39868_39906[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39907 = state_39821;
state_39821 = G__39907;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto__ = function(state_39821){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto____1.call(this,state_39821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto__,msg_hist,msg_names,msg))
})();
var state__34579__auto__ = (function (){var statearr_39869 = f__34578__auto__.call(null);
(statearr_39869[(6)] = c__34577__auto__);

return statearr_39869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto__,msg_hist,msg_names,msg))
);

return c__34577__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34577__auto___39936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___39936,ch){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___39936,ch){
return (function (state_39922){
var state_val_39923 = (state_39922[(1)]);
if((state_val_39923 === (1))){
var state_39922__$1 = state_39922;
var statearr_39924_39937 = state_39922__$1;
(statearr_39924_39937[(2)] = null);

(statearr_39924_39937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39923 === (2))){
var state_39922__$1 = state_39922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39922__$1,(4),ch);
} else {
if((state_val_39923 === (3))){
var inst_39920 = (state_39922[(2)]);
var state_39922__$1 = state_39922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39922__$1,inst_39920);
} else {
if((state_val_39923 === (4))){
var inst_39910 = (state_39922[(7)]);
var inst_39910__$1 = (state_39922[(2)]);
var state_39922__$1 = (function (){var statearr_39925 = state_39922;
(statearr_39925[(7)] = inst_39910__$1);

return statearr_39925;
})();
if(cljs.core.truth_(inst_39910__$1)){
var statearr_39926_39938 = state_39922__$1;
(statearr_39926_39938[(1)] = (5));

} else {
var statearr_39927_39939 = state_39922__$1;
(statearr_39927_39939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39923 === (5))){
var inst_39910 = (state_39922[(7)]);
var inst_39912 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39910);
var state_39922__$1 = state_39922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39922__$1,(8),inst_39912);
} else {
if((state_val_39923 === (6))){
var state_39922__$1 = state_39922;
var statearr_39928_39940 = state_39922__$1;
(statearr_39928_39940[(2)] = null);

(statearr_39928_39940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39923 === (7))){
var inst_39918 = (state_39922[(2)]);
var state_39922__$1 = state_39922;
var statearr_39929_39941 = state_39922__$1;
(statearr_39929_39941[(2)] = inst_39918);

(statearr_39929_39941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39923 === (8))){
var inst_39914 = (state_39922[(2)]);
var state_39922__$1 = (function (){var statearr_39930 = state_39922;
(statearr_39930[(8)] = inst_39914);

return statearr_39930;
})();
var statearr_39931_39942 = state_39922__$1;
(statearr_39931_39942[(2)] = null);

(statearr_39931_39942[(1)] = (2));


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
});})(c__34577__auto___39936,ch))
;
return ((function (switch__34487__auto__,c__34577__auto___39936,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34488__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34488__auto____0 = (function (){
var statearr_39932 = [null,null,null,null,null,null,null,null,null];
(statearr_39932[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34488__auto__);

(statearr_39932[(1)] = (1));

return statearr_39932;
});
var figwheel$client$heads_up_plugin_$_state_machine__34488__auto____1 = (function (state_39922){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_39922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e39933){if((e39933 instanceof Object)){
var ex__34491__auto__ = e39933;
var statearr_39934_39943 = state_39922;
(statearr_39934_39943[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39944 = state_39922;
state_39922 = G__39944;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34488__auto__ = function(state_39922){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34488__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34488__auto____1.call(this,state_39922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34488__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34488__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___39936,ch))
})();
var state__34579__auto__ = (function (){var statearr_39935 = f__34578__auto__.call(null);
(statearr_39935[(6)] = c__34577__auto___39936);

return statearr_39935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___39936,ch))
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
var c__34577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto__){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto__){
return (function (state_39950){
var state_val_39951 = (state_39950[(1)]);
if((state_val_39951 === (1))){
var inst_39945 = cljs.core.async.timeout.call(null,(3000));
var state_39950__$1 = state_39950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39950__$1,(2),inst_39945);
} else {
if((state_val_39951 === (2))){
var inst_39947 = (state_39950[(2)]);
var inst_39948 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39950__$1 = (function (){var statearr_39952 = state_39950;
(statearr_39952[(7)] = inst_39947);

return statearr_39952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39950__$1,inst_39948);
} else {
return null;
}
}
});})(c__34577__auto__))
;
return ((function (switch__34487__auto__,c__34577__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34488__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34488__auto____0 = (function (){
var statearr_39953 = [null,null,null,null,null,null,null,null];
(statearr_39953[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34488__auto__);

(statearr_39953[(1)] = (1));

return statearr_39953;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34488__auto____1 = (function (state_39950){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_39950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e39954){if((e39954 instanceof Object)){
var ex__34491__auto__ = e39954;
var statearr_39955_39957 = state_39950;
(statearr_39955_39957[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39958 = state_39950;
state_39950 = G__39958;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34488__auto__ = function(state_39950){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34488__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34488__auto____1.call(this,state_39950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34488__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34488__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto__))
})();
var state__34579__auto__ = (function (){var statearr_39956 = f__34578__auto__.call(null);
(statearr_39956[(6)] = c__34577__auto__);

return statearr_39956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto__))
);

return c__34577__auto__;
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
var c__34577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39965){
var state_val_39966 = (state_39965[(1)]);
if((state_val_39966 === (1))){
var inst_39959 = cljs.core.async.timeout.call(null,(2000));
var state_39965__$1 = state_39965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39965__$1,(2),inst_39959);
} else {
if((state_val_39966 === (2))){
var inst_39961 = (state_39965[(2)]);
var inst_39962 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39963 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39962);
var state_39965__$1 = (function (){var statearr_39967 = state_39965;
(statearr_39967[(7)] = inst_39961);

return statearr_39967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39965__$1,inst_39963);
} else {
return null;
}
}
});})(c__34577__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__34487__auto__,c__34577__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto____0 = (function (){
var statearr_39968 = [null,null,null,null,null,null,null,null];
(statearr_39968[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto__);

(statearr_39968[(1)] = (1));

return statearr_39968;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto____1 = (function (state_39965){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_39965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e39969){if((e39969 instanceof Object)){
var ex__34491__auto__ = e39969;
var statearr_39970_39972 = state_39965;
(statearr_39970_39972[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39973 = state_39965;
state_39965 = G__39973;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto__ = function(state_39965){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto____1.call(this,state_39965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34579__auto__ = (function (){var statearr_39971 = f__34578__auto__.call(null);
(statearr_39971[(6)] = c__34577__auto__);

return statearr_39971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto__,figwheel_version,temp__5457__auto__))
);

return c__34577__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39974){
var map__39975 = p__39974;
var map__39975__$1 = ((((!((map__39975 == null)))?((((map__39975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39975):map__39975);
var file = cljs.core.get.call(null,map__39975__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39975__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39975__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39977 = "";
var G__39977__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39977),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39977);
var G__39977__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39977__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39977__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = line;
if(cljs.core.truth_(and__30071__auto__)){
return column;
} else {
return and__30071__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39977__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39977__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39978){
var map__39979 = p__39978;
var map__39979__$1 = ((((!((map__39979 == null)))?((((map__39979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39979):map__39979);
var ed = map__39979__$1;
var formatted_exception = cljs.core.get.call(null,map__39979__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39979__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39979__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39981_39985 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39982_39986 = null;
var count__39983_39987 = (0);
var i__39984_39988 = (0);
while(true){
if((i__39984_39988 < count__39983_39987)){
var msg_39989 = cljs.core._nth.call(null,chunk__39982_39986,i__39984_39988);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39989);

var G__39990 = seq__39981_39985;
var G__39991 = chunk__39982_39986;
var G__39992 = count__39983_39987;
var G__39993 = (i__39984_39988 + (1));
seq__39981_39985 = G__39990;
chunk__39982_39986 = G__39991;
count__39983_39987 = G__39992;
i__39984_39988 = G__39993;
continue;
} else {
var temp__5457__auto___39994 = cljs.core.seq.call(null,seq__39981_39985);
if(temp__5457__auto___39994){
var seq__39981_39995__$1 = temp__5457__auto___39994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39981_39995__$1)){
var c__31014__auto___39996 = cljs.core.chunk_first.call(null,seq__39981_39995__$1);
var G__39997 = cljs.core.chunk_rest.call(null,seq__39981_39995__$1);
var G__39998 = c__31014__auto___39996;
var G__39999 = cljs.core.count.call(null,c__31014__auto___39996);
var G__40000 = (0);
seq__39981_39985 = G__39997;
chunk__39982_39986 = G__39998;
count__39983_39987 = G__39999;
i__39984_39988 = G__40000;
continue;
} else {
var msg_40001 = cljs.core.first.call(null,seq__39981_39995__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40001);

var G__40002 = cljs.core.next.call(null,seq__39981_39995__$1);
var G__40003 = null;
var G__40004 = (0);
var G__40005 = (0);
seq__39981_39985 = G__40002;
chunk__39982_39986 = G__40003;
count__39983_39987 = G__40004;
i__39984_39988 = G__40005;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40006){
var map__40007 = p__40006;
var map__40007__$1 = ((((!((map__40007 == null)))?((((map__40007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40007):map__40007);
var w = map__40007__$1;
var message = cljs.core.get.call(null,map__40007__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__40009 = cljs.core.seq.call(null,plugins);
var chunk__40010 = null;
var count__40011 = (0);
var i__40012 = (0);
while(true){
if((i__40012 < count__40011)){
var vec__40013 = cljs.core._nth.call(null,chunk__40010,i__40012);
var k = cljs.core.nth.call(null,vec__40013,(0),null);
var plugin = cljs.core.nth.call(null,vec__40013,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40019 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40009,chunk__40010,count__40011,i__40012,pl_40019,vec__40013,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40019.call(null,msg_hist);
});})(seq__40009,chunk__40010,count__40011,i__40012,pl_40019,vec__40013,k,plugin))
);
} else {
}

var G__40020 = seq__40009;
var G__40021 = chunk__40010;
var G__40022 = count__40011;
var G__40023 = (i__40012 + (1));
seq__40009 = G__40020;
chunk__40010 = G__40021;
count__40011 = G__40022;
i__40012 = G__40023;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40009);
if(temp__5457__auto__){
var seq__40009__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40009__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__40009__$1);
var G__40024 = cljs.core.chunk_rest.call(null,seq__40009__$1);
var G__40025 = c__31014__auto__;
var G__40026 = cljs.core.count.call(null,c__31014__auto__);
var G__40027 = (0);
seq__40009 = G__40024;
chunk__40010 = G__40025;
count__40011 = G__40026;
i__40012 = G__40027;
continue;
} else {
var vec__40016 = cljs.core.first.call(null,seq__40009__$1);
var k = cljs.core.nth.call(null,vec__40016,(0),null);
var plugin = cljs.core.nth.call(null,vec__40016,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40028 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40009,chunk__40010,count__40011,i__40012,pl_40028,vec__40016,k,plugin,seq__40009__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40028.call(null,msg_hist);
});})(seq__40009,chunk__40010,count__40011,i__40012,pl_40028,vec__40016,k,plugin,seq__40009__$1,temp__5457__auto__))
);
} else {
}

var G__40029 = cljs.core.next.call(null,seq__40009__$1);
var G__40030 = null;
var G__40031 = (0);
var G__40032 = (0);
seq__40009 = G__40029;
chunk__40010 = G__40030;
count__40011 = G__40031;
i__40012 = G__40032;
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
var G__40034 = arguments.length;
switch (G__40034) {
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

var seq__40035_40040 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40036_40041 = null;
var count__40037_40042 = (0);
var i__40038_40043 = (0);
while(true){
if((i__40038_40043 < count__40037_40042)){
var msg_40044 = cljs.core._nth.call(null,chunk__40036_40041,i__40038_40043);
figwheel.client.socket.handle_incoming_message.call(null,msg_40044);

var G__40045 = seq__40035_40040;
var G__40046 = chunk__40036_40041;
var G__40047 = count__40037_40042;
var G__40048 = (i__40038_40043 + (1));
seq__40035_40040 = G__40045;
chunk__40036_40041 = G__40046;
count__40037_40042 = G__40047;
i__40038_40043 = G__40048;
continue;
} else {
var temp__5457__auto___40049 = cljs.core.seq.call(null,seq__40035_40040);
if(temp__5457__auto___40049){
var seq__40035_40050__$1 = temp__5457__auto___40049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40035_40050__$1)){
var c__31014__auto___40051 = cljs.core.chunk_first.call(null,seq__40035_40050__$1);
var G__40052 = cljs.core.chunk_rest.call(null,seq__40035_40050__$1);
var G__40053 = c__31014__auto___40051;
var G__40054 = cljs.core.count.call(null,c__31014__auto___40051);
var G__40055 = (0);
seq__40035_40040 = G__40052;
chunk__40036_40041 = G__40053;
count__40037_40042 = G__40054;
i__40038_40043 = G__40055;
continue;
} else {
var msg_40056 = cljs.core.first.call(null,seq__40035_40050__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40056);

var G__40057 = cljs.core.next.call(null,seq__40035_40050__$1);
var G__40058 = null;
var G__40059 = (0);
var G__40060 = (0);
seq__40035_40040 = G__40057;
chunk__40036_40041 = G__40058;
count__40037_40042 = G__40059;
i__40038_40043 = G__40060;
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
var len__31362__auto___40065 = arguments.length;
var i__31363__auto___40066 = (0);
while(true){
if((i__31363__auto___40066 < len__31362__auto___40065)){
args__31369__auto__.push((arguments[i__31363__auto___40066]));

var G__40067 = (i__31363__auto___40066 + (1));
i__31363__auto___40066 = G__40067;
continue;
} else {
}
break;
}

var argseq__31370__auto__ = ((((0) < args__31369__auto__.length))?(new cljs.core.IndexedSeq(args__31369__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31370__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40062){
var map__40063 = p__40062;
var map__40063__$1 = ((((!((map__40063 == null)))?((((map__40063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40063):map__40063);
var opts = map__40063__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40061){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40061));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40068){if((e40068 instanceof Error)){
var e = e40068;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40068;

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
return (function (p__40069){
var map__40070 = p__40069;
var map__40070__$1 = ((((!((map__40070 == null)))?((((map__40070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40070):map__40070);
var msg_name = cljs.core.get.call(null,map__40070__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1526331146926
