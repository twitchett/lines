// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30083__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30083__auto__){
return or__30083__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30083__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
var or__30083__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30083__auto____$1)){
return or__30083__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37632_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37632_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37633 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37634 = null;
var count__37635 = (0);
var i__37636 = (0);
while(true){
if((i__37636 < count__37635)){
var n = cljs.core._nth.call(null,chunk__37634,i__37636);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37637 = seq__37633;
var G__37638 = chunk__37634;
var G__37639 = count__37635;
var G__37640 = (i__37636 + (1));
seq__37633 = G__37637;
chunk__37634 = G__37638;
count__37635 = G__37639;
i__37636 = G__37640;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37633);
if(temp__5457__auto__){
var seq__37633__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37633__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__37633__$1);
var G__37641 = cljs.core.chunk_rest.call(null,seq__37633__$1);
var G__37642 = c__31014__auto__;
var G__37643 = cljs.core.count.call(null,c__31014__auto__);
var G__37644 = (0);
seq__37633 = G__37641;
chunk__37634 = G__37642;
count__37635 = G__37643;
i__37636 = G__37644;
continue;
} else {
var n = cljs.core.first.call(null,seq__37633__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37645 = cljs.core.next.call(null,seq__37633__$1);
var G__37646 = null;
var G__37647 = (0);
var G__37648 = (0);
seq__37633 = G__37645;
chunk__37634 = G__37646;
count__37635 = G__37647;
i__37636 = G__37648;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37649){
var vec__37650 = p__37649;
var _ = cljs.core.nth.call(null,vec__37650,(0),null);
var v = cljs.core.nth.call(null,vec__37650,(1),null);
var and__30071__auto__ = v;
if(cljs.core.truth_(and__30071__auto__)){
return v.call(null,dep);
} else {
return and__30071__auto__;
}
}),cljs.core.filter.call(null,(function (p__37653){
var vec__37654 = p__37653;
var k = cljs.core.nth.call(null,vec__37654,(0),null);
var v = cljs.core.nth.call(null,vec__37654,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37666_37674 = cljs.core.seq.call(null,deps);
var chunk__37667_37675 = null;
var count__37668_37676 = (0);
var i__37669_37677 = (0);
while(true){
if((i__37669_37677 < count__37668_37676)){
var dep_37678 = cljs.core._nth.call(null,chunk__37667_37675,i__37669_37677);
if(cljs.core.truth_((function (){var and__30071__auto__ = dep_37678;
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37678));
} else {
return and__30071__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37678,(depth + (1)),state);
} else {
}

var G__37679 = seq__37666_37674;
var G__37680 = chunk__37667_37675;
var G__37681 = count__37668_37676;
var G__37682 = (i__37669_37677 + (1));
seq__37666_37674 = G__37679;
chunk__37667_37675 = G__37680;
count__37668_37676 = G__37681;
i__37669_37677 = G__37682;
continue;
} else {
var temp__5457__auto___37683 = cljs.core.seq.call(null,seq__37666_37674);
if(temp__5457__auto___37683){
var seq__37666_37684__$1 = temp__5457__auto___37683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37666_37684__$1)){
var c__31014__auto___37685 = cljs.core.chunk_first.call(null,seq__37666_37684__$1);
var G__37686 = cljs.core.chunk_rest.call(null,seq__37666_37684__$1);
var G__37687 = c__31014__auto___37685;
var G__37688 = cljs.core.count.call(null,c__31014__auto___37685);
var G__37689 = (0);
seq__37666_37674 = G__37686;
chunk__37667_37675 = G__37687;
count__37668_37676 = G__37688;
i__37669_37677 = G__37689;
continue;
} else {
var dep_37690 = cljs.core.first.call(null,seq__37666_37684__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = dep_37690;
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37690));
} else {
return and__30071__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37690,(depth + (1)),state);
} else {
}

var G__37691 = cljs.core.next.call(null,seq__37666_37684__$1);
var G__37692 = null;
var G__37693 = (0);
var G__37694 = (0);
seq__37666_37674 = G__37691;
chunk__37667_37675 = G__37692;
count__37668_37676 = G__37693;
i__37669_37677 = G__37694;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37670){
var vec__37671 = p__37670;
var seq__37672 = cljs.core.seq.call(null,vec__37671);
var first__37673 = cljs.core.first.call(null,seq__37672);
var seq__37672__$1 = cljs.core.next.call(null,seq__37672);
var x = first__37673;
var xs = seq__37672__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37671,seq__37672,first__37673,seq__37672__$1,x,xs,get_deps__$1){
return (function (p1__37657_SHARP_){
return clojure.set.difference.call(null,p1__37657_SHARP_,x);
});})(vec__37671,seq__37672,first__37673,seq__37672__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37695 = cljs.core.seq.call(null,provides);
var chunk__37696 = null;
var count__37697 = (0);
var i__37698 = (0);
while(true){
if((i__37698 < count__37697)){
var prov = cljs.core._nth.call(null,chunk__37696,i__37698);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37699_37707 = cljs.core.seq.call(null,requires);
var chunk__37700_37708 = null;
var count__37701_37709 = (0);
var i__37702_37710 = (0);
while(true){
if((i__37702_37710 < count__37701_37709)){
var req_37711 = cljs.core._nth.call(null,chunk__37700_37708,i__37702_37710);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37711,prov);

var G__37712 = seq__37699_37707;
var G__37713 = chunk__37700_37708;
var G__37714 = count__37701_37709;
var G__37715 = (i__37702_37710 + (1));
seq__37699_37707 = G__37712;
chunk__37700_37708 = G__37713;
count__37701_37709 = G__37714;
i__37702_37710 = G__37715;
continue;
} else {
var temp__5457__auto___37716 = cljs.core.seq.call(null,seq__37699_37707);
if(temp__5457__auto___37716){
var seq__37699_37717__$1 = temp__5457__auto___37716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37699_37717__$1)){
var c__31014__auto___37718 = cljs.core.chunk_first.call(null,seq__37699_37717__$1);
var G__37719 = cljs.core.chunk_rest.call(null,seq__37699_37717__$1);
var G__37720 = c__31014__auto___37718;
var G__37721 = cljs.core.count.call(null,c__31014__auto___37718);
var G__37722 = (0);
seq__37699_37707 = G__37719;
chunk__37700_37708 = G__37720;
count__37701_37709 = G__37721;
i__37702_37710 = G__37722;
continue;
} else {
var req_37723 = cljs.core.first.call(null,seq__37699_37717__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37723,prov);

var G__37724 = cljs.core.next.call(null,seq__37699_37717__$1);
var G__37725 = null;
var G__37726 = (0);
var G__37727 = (0);
seq__37699_37707 = G__37724;
chunk__37700_37708 = G__37725;
count__37701_37709 = G__37726;
i__37702_37710 = G__37727;
continue;
}
} else {
}
}
break;
}

var G__37728 = seq__37695;
var G__37729 = chunk__37696;
var G__37730 = count__37697;
var G__37731 = (i__37698 + (1));
seq__37695 = G__37728;
chunk__37696 = G__37729;
count__37697 = G__37730;
i__37698 = G__37731;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37695);
if(temp__5457__auto__){
var seq__37695__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37695__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__37695__$1);
var G__37732 = cljs.core.chunk_rest.call(null,seq__37695__$1);
var G__37733 = c__31014__auto__;
var G__37734 = cljs.core.count.call(null,c__31014__auto__);
var G__37735 = (0);
seq__37695 = G__37732;
chunk__37696 = G__37733;
count__37697 = G__37734;
i__37698 = G__37735;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37695__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37703_37736 = cljs.core.seq.call(null,requires);
var chunk__37704_37737 = null;
var count__37705_37738 = (0);
var i__37706_37739 = (0);
while(true){
if((i__37706_37739 < count__37705_37738)){
var req_37740 = cljs.core._nth.call(null,chunk__37704_37737,i__37706_37739);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37740,prov);

var G__37741 = seq__37703_37736;
var G__37742 = chunk__37704_37737;
var G__37743 = count__37705_37738;
var G__37744 = (i__37706_37739 + (1));
seq__37703_37736 = G__37741;
chunk__37704_37737 = G__37742;
count__37705_37738 = G__37743;
i__37706_37739 = G__37744;
continue;
} else {
var temp__5457__auto___37745__$1 = cljs.core.seq.call(null,seq__37703_37736);
if(temp__5457__auto___37745__$1){
var seq__37703_37746__$1 = temp__5457__auto___37745__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37703_37746__$1)){
var c__31014__auto___37747 = cljs.core.chunk_first.call(null,seq__37703_37746__$1);
var G__37748 = cljs.core.chunk_rest.call(null,seq__37703_37746__$1);
var G__37749 = c__31014__auto___37747;
var G__37750 = cljs.core.count.call(null,c__31014__auto___37747);
var G__37751 = (0);
seq__37703_37736 = G__37748;
chunk__37704_37737 = G__37749;
count__37705_37738 = G__37750;
i__37706_37739 = G__37751;
continue;
} else {
var req_37752 = cljs.core.first.call(null,seq__37703_37746__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37752,prov);

var G__37753 = cljs.core.next.call(null,seq__37703_37746__$1);
var G__37754 = null;
var G__37755 = (0);
var G__37756 = (0);
seq__37703_37736 = G__37753;
chunk__37704_37737 = G__37754;
count__37705_37738 = G__37755;
i__37706_37739 = G__37756;
continue;
}
} else {
}
}
break;
}

var G__37757 = cljs.core.next.call(null,seq__37695__$1);
var G__37758 = null;
var G__37759 = (0);
var G__37760 = (0);
seq__37695 = G__37757;
chunk__37696 = G__37758;
count__37697 = G__37759;
i__37698 = G__37760;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37761_37765 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37762_37766 = null;
var count__37763_37767 = (0);
var i__37764_37768 = (0);
while(true){
if((i__37764_37768 < count__37763_37767)){
var ns_37769 = cljs.core._nth.call(null,chunk__37762_37766,i__37764_37768);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37769);

var G__37770 = seq__37761_37765;
var G__37771 = chunk__37762_37766;
var G__37772 = count__37763_37767;
var G__37773 = (i__37764_37768 + (1));
seq__37761_37765 = G__37770;
chunk__37762_37766 = G__37771;
count__37763_37767 = G__37772;
i__37764_37768 = G__37773;
continue;
} else {
var temp__5457__auto___37774 = cljs.core.seq.call(null,seq__37761_37765);
if(temp__5457__auto___37774){
var seq__37761_37775__$1 = temp__5457__auto___37774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37761_37775__$1)){
var c__31014__auto___37776 = cljs.core.chunk_first.call(null,seq__37761_37775__$1);
var G__37777 = cljs.core.chunk_rest.call(null,seq__37761_37775__$1);
var G__37778 = c__31014__auto___37776;
var G__37779 = cljs.core.count.call(null,c__31014__auto___37776);
var G__37780 = (0);
seq__37761_37765 = G__37777;
chunk__37762_37766 = G__37778;
count__37763_37767 = G__37779;
i__37764_37768 = G__37780;
continue;
} else {
var ns_37781 = cljs.core.first.call(null,seq__37761_37775__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37781);

var G__37782 = cljs.core.next.call(null,seq__37761_37775__$1);
var G__37783 = null;
var G__37784 = (0);
var G__37785 = (0);
seq__37761_37765 = G__37782;
chunk__37762_37766 = G__37783;
count__37763_37767 = G__37784;
i__37764_37768 = G__37785;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30083__auto__ = goog.require__;
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37786__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37787__i = 0, G__37787__a = new Array(arguments.length -  0);
while (G__37787__i < G__37787__a.length) {G__37787__a[G__37787__i] = arguments[G__37787__i + 0]; ++G__37787__i;}
  args = new cljs.core.IndexedSeq(G__37787__a,0,null);
} 
return G__37786__delegate.call(this,args);};
G__37786.cljs$lang$maxFixedArity = 0;
G__37786.cljs$lang$applyTo = (function (arglist__37788){
var args = cljs.core.seq(arglist__37788);
return G__37786__delegate(args);
});
G__37786.cljs$core$IFn$_invoke$arity$variadic = G__37786__delegate;
return G__37786;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37789_SHARP_,p2__37790_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37789_SHARP_)].join('')),p2__37790_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37791_SHARP_,p2__37792_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37791_SHARP_)].join(''),p2__37792_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37793 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37793.addCallback(((function (G__37793){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37793))
);

G__37793.addErrback(((function (G__37793){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37793))
);

return G__37793;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37794){if((e37794 instanceof Error)){
var e = e37794;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37794;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37795){if((e37795 instanceof Error)){
var e = e37795;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37795;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37796 = cljs.core._EQ_;
var expr__37797 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37796.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37797))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37796.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37797))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37796.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37797))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37796,expr__37797){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37796,expr__37797))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37799,callback){
var map__37800 = p__37799;
var map__37800__$1 = ((((!((map__37800 == null)))?((((map__37800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37800):map__37800);
var file_msg = map__37800__$1;
var request_url = cljs.core.get.call(null,map__37800__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30083__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37800,map__37800__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37800,map__37800__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__35489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto__){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto__){
return (function (state_37840){
var state_val_37841 = (state_37840[(1)]);
if((state_val_37841 === (7))){
var inst_37836 = (state_37840[(2)]);
var state_37840__$1 = state_37840;
var statearr_37842_37869 = state_37840__$1;
(statearr_37842_37869[(2)] = inst_37836);

(statearr_37842_37869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (1))){
var state_37840__$1 = state_37840;
var statearr_37843_37870 = state_37840__$1;
(statearr_37843_37870[(2)] = null);

(statearr_37843_37870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (4))){
var inst_37804 = (state_37840[(7)]);
var inst_37804__$1 = (state_37840[(2)]);
var state_37840__$1 = (function (){var statearr_37844 = state_37840;
(statearr_37844[(7)] = inst_37804__$1);

return statearr_37844;
})();
if(cljs.core.truth_(inst_37804__$1)){
var statearr_37845_37871 = state_37840__$1;
(statearr_37845_37871[(1)] = (5));

} else {
var statearr_37846_37872 = state_37840__$1;
(statearr_37846_37872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (15))){
var inst_37818 = (state_37840[(8)]);
var inst_37821 = (state_37840[(9)]);
var inst_37823 = inst_37821.call(null,inst_37818);
var state_37840__$1 = state_37840;
var statearr_37847_37873 = state_37840__$1;
(statearr_37847_37873[(2)] = inst_37823);

(statearr_37847_37873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (13))){
var inst_37830 = (state_37840[(2)]);
var state_37840__$1 = state_37840;
var statearr_37848_37874 = state_37840__$1;
(statearr_37848_37874[(2)] = inst_37830);

(statearr_37848_37874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (6))){
var state_37840__$1 = state_37840;
var statearr_37849_37875 = state_37840__$1;
(statearr_37849_37875[(2)] = null);

(statearr_37849_37875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (17))){
var inst_37827 = (state_37840[(2)]);
var state_37840__$1 = state_37840;
var statearr_37850_37876 = state_37840__$1;
(statearr_37850_37876[(2)] = inst_37827);

(statearr_37850_37876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (3))){
var inst_37838 = (state_37840[(2)]);
var state_37840__$1 = state_37840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37840__$1,inst_37838);
} else {
if((state_val_37841 === (12))){
var state_37840__$1 = state_37840;
var statearr_37851_37877 = state_37840__$1;
(statearr_37851_37877[(2)] = null);

(statearr_37851_37877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (2))){
var state_37840__$1 = state_37840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37840__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37841 === (11))){
var inst_37809 = (state_37840[(10)]);
var inst_37816 = figwheel.client.file_reloading.blocking_load.call(null,inst_37809);
var state_37840__$1 = state_37840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37840__$1,(14),inst_37816);
} else {
if((state_val_37841 === (9))){
var inst_37809 = (state_37840[(10)]);
var state_37840__$1 = state_37840;
if(cljs.core.truth_(inst_37809)){
var statearr_37852_37878 = state_37840__$1;
(statearr_37852_37878[(1)] = (11));

} else {
var statearr_37853_37879 = state_37840__$1;
(statearr_37853_37879[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (5))){
var inst_37810 = (state_37840[(11)]);
var inst_37804 = (state_37840[(7)]);
var inst_37809 = cljs.core.nth.call(null,inst_37804,(0),null);
var inst_37810__$1 = cljs.core.nth.call(null,inst_37804,(1),null);
var state_37840__$1 = (function (){var statearr_37854 = state_37840;
(statearr_37854[(10)] = inst_37809);

(statearr_37854[(11)] = inst_37810__$1);

return statearr_37854;
})();
if(cljs.core.truth_(inst_37810__$1)){
var statearr_37855_37880 = state_37840__$1;
(statearr_37855_37880[(1)] = (8));

} else {
var statearr_37856_37881 = state_37840__$1;
(statearr_37856_37881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (14))){
var inst_37809 = (state_37840[(10)]);
var inst_37821 = (state_37840[(9)]);
var inst_37818 = (state_37840[(2)]);
var inst_37819 = console.log("Loading!",inst_37809);
var inst_37820 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37821__$1 = cljs.core.get.call(null,inst_37820,inst_37809);
var state_37840__$1 = (function (){var statearr_37857 = state_37840;
(statearr_37857[(12)] = inst_37819);

(statearr_37857[(8)] = inst_37818);

(statearr_37857[(9)] = inst_37821__$1);

return statearr_37857;
})();
if(cljs.core.truth_(inst_37821__$1)){
var statearr_37858_37882 = state_37840__$1;
(statearr_37858_37882[(1)] = (15));

} else {
var statearr_37859_37883 = state_37840__$1;
(statearr_37859_37883[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (16))){
var inst_37818 = (state_37840[(8)]);
var inst_37825 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37818);
var state_37840__$1 = state_37840;
var statearr_37860_37884 = state_37840__$1;
(statearr_37860_37884[(2)] = inst_37825);

(statearr_37860_37884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (10))){
var inst_37832 = (state_37840[(2)]);
var state_37840__$1 = (function (){var statearr_37861 = state_37840;
(statearr_37861[(13)] = inst_37832);

return statearr_37861;
})();
var statearr_37862_37885 = state_37840__$1;
(statearr_37862_37885[(2)] = null);

(statearr_37862_37885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37841 === (8))){
var inst_37810 = (state_37840[(11)]);
var inst_37812 = console.log("Evaling!",inst_37810);
var inst_37813 = eval(inst_37810);
var state_37840__$1 = (function (){var statearr_37863 = state_37840;
(statearr_37863[(14)] = inst_37812);

return statearr_37863;
})();
var statearr_37864_37886 = state_37840__$1;
(statearr_37864_37886[(2)] = inst_37813);

(statearr_37864_37886[(1)] = (10));


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
});})(c__35489__auto__))
;
return ((function (switch__35399__auto__,c__35489__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35400__auto__ = null;
var figwheel$client$file_reloading$state_machine__35400__auto____0 = (function (){
var statearr_37865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37865[(0)] = figwheel$client$file_reloading$state_machine__35400__auto__);

(statearr_37865[(1)] = (1));

return statearr_37865;
});
var figwheel$client$file_reloading$state_machine__35400__auto____1 = (function (state_37840){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_37840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e37866){if((e37866 instanceof Object)){
var ex__35403__auto__ = e37866;
var statearr_37867_37887 = state_37840;
(statearr_37867_37887[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37888 = state_37840;
state_37840 = G__37888;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35400__auto__ = function(state_37840){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35400__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35400__auto____1.call(this,state_37840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35400__auto____0;
figwheel$client$file_reloading$state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35400__auto____1;
return figwheel$client$file_reloading$state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto__))
})();
var state__35491__auto__ = (function (){var statearr_37868 = f__35490__auto__.call(null);
(statearr_37868[(6)] = c__35489__auto__);

return statearr_37868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto__))
);

return c__35489__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37890 = arguments.length;
switch (G__37890) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37892,callback){
var map__37893 = p__37892;
var map__37893__$1 = ((((!((map__37893 == null)))?((((map__37893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37893):map__37893);
var file_msg = map__37893__$1;
var namespace = cljs.core.get.call(null,map__37893__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37893,map__37893__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37893,map__37893__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37895){
var map__37896 = p__37895;
var map__37896__$1 = ((((!((map__37896 == null)))?((((map__37896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37896):map__37896);
var file_msg = map__37896__$1;
var namespace = cljs.core.get.call(null,map__37896__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37898){
var map__37899 = p__37898;
var map__37899__$1 = ((((!((map__37899 == null)))?((((map__37899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37899):map__37899);
var file_msg = map__37899__$1;
var namespace = cljs.core.get.call(null,map__37899__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30071__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30071__auto__){
var or__30083__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
var or__30083__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30083__auto____$1)){
return or__30083__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30071__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37901,callback){
var map__37902 = p__37901;
var map__37902__$1 = ((((!((map__37902 == null)))?((((map__37902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37902):map__37902);
var file_msg = map__37902__$1;
var request_url = cljs.core.get.call(null,map__37902__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37902__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35489__auto___37952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto___37952,out){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto___37952,out){
return (function (state_37937){
var state_val_37938 = (state_37937[(1)]);
if((state_val_37938 === (1))){
var inst_37911 = cljs.core.seq.call(null,files);
var inst_37912 = cljs.core.first.call(null,inst_37911);
var inst_37913 = cljs.core.next.call(null,inst_37911);
var inst_37914 = files;
var state_37937__$1 = (function (){var statearr_37939 = state_37937;
(statearr_37939[(7)] = inst_37912);

(statearr_37939[(8)] = inst_37913);

(statearr_37939[(9)] = inst_37914);

return statearr_37939;
})();
var statearr_37940_37953 = state_37937__$1;
(statearr_37940_37953[(2)] = null);

(statearr_37940_37953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37938 === (2))){
var inst_37920 = (state_37937[(10)]);
var inst_37914 = (state_37937[(9)]);
var inst_37919 = cljs.core.seq.call(null,inst_37914);
var inst_37920__$1 = cljs.core.first.call(null,inst_37919);
var inst_37921 = cljs.core.next.call(null,inst_37919);
var inst_37922 = (inst_37920__$1 == null);
var inst_37923 = cljs.core.not.call(null,inst_37922);
var state_37937__$1 = (function (){var statearr_37941 = state_37937;
(statearr_37941[(10)] = inst_37920__$1);

(statearr_37941[(11)] = inst_37921);

return statearr_37941;
})();
if(inst_37923){
var statearr_37942_37954 = state_37937__$1;
(statearr_37942_37954[(1)] = (4));

} else {
var statearr_37943_37955 = state_37937__$1;
(statearr_37943_37955[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37938 === (3))){
var inst_37935 = (state_37937[(2)]);
var state_37937__$1 = state_37937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37937__$1,inst_37935);
} else {
if((state_val_37938 === (4))){
var inst_37920 = (state_37937[(10)]);
var inst_37925 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37920);
var state_37937__$1 = state_37937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37937__$1,(7),inst_37925);
} else {
if((state_val_37938 === (5))){
var inst_37931 = cljs.core.async.close_BANG_.call(null,out);
var state_37937__$1 = state_37937;
var statearr_37944_37956 = state_37937__$1;
(statearr_37944_37956[(2)] = inst_37931);

(statearr_37944_37956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37938 === (6))){
var inst_37933 = (state_37937[(2)]);
var state_37937__$1 = state_37937;
var statearr_37945_37957 = state_37937__$1;
(statearr_37945_37957[(2)] = inst_37933);

(statearr_37945_37957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37938 === (7))){
var inst_37921 = (state_37937[(11)]);
var inst_37927 = (state_37937[(2)]);
var inst_37928 = cljs.core.async.put_BANG_.call(null,out,inst_37927);
var inst_37914 = inst_37921;
var state_37937__$1 = (function (){var statearr_37946 = state_37937;
(statearr_37946[(12)] = inst_37928);

(statearr_37946[(9)] = inst_37914);

return statearr_37946;
})();
var statearr_37947_37958 = state_37937__$1;
(statearr_37947_37958[(2)] = null);

(statearr_37947_37958[(1)] = (2));


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
});})(c__35489__auto___37952,out))
;
return ((function (switch__35399__auto__,c__35489__auto___37952,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto____0 = (function (){
var statearr_37948 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37948[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto__);

(statearr_37948[(1)] = (1));

return statearr_37948;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto____1 = (function (state_37937){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_37937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e37949){if((e37949 instanceof Object)){
var ex__35403__auto__ = e37949;
var statearr_37950_37959 = state_37937;
(statearr_37950_37959[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37960 = state_37937;
state_37937 = G__37960;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto__ = function(state_37937){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto____1.call(this,state_37937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto___37952,out))
})();
var state__35491__auto__ = (function (){var statearr_37951 = f__35490__auto__.call(null);
(statearr_37951[(6)] = c__35489__auto___37952);

return statearr_37951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto___37952,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37961,opts){
var map__37962 = p__37961;
var map__37962__$1 = ((((!((map__37962 == null)))?((((map__37962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37962):map__37962);
var eval_body = cljs.core.get.call(null,map__37962__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30071__auto__ = eval_body;
if(cljs.core.truth_(and__30071__auto__)){
return typeof eval_body === 'string';
} else {
return and__30071__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37964){var e = e37964;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37965_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37965_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37966){
var vec__37967 = p__37966;
var k = cljs.core.nth.call(null,vec__37967,(0),null);
var v = cljs.core.nth.call(null,vec__37967,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37970){
var vec__37971 = p__37970;
var k = cljs.core.nth.call(null,vec__37971,(0),null);
var v = cljs.core.nth.call(null,vec__37971,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37977,p__37978){
var map__37979 = p__37977;
var map__37979__$1 = ((((!((map__37979 == null)))?((((map__37979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37979):map__37979);
var opts = map__37979__$1;
var before_jsload = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37980 = p__37978;
var map__37980__$1 = ((((!((map__37980 == null)))?((((map__37980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37980):map__37980);
var msg = map__37980__$1;
var files = cljs.core.get.call(null,map__37980__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37980__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37980__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35490__auto__ = (function (){var switch__35399__auto__ = ((function (c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38134){
var state_val_38135 = (state_38134[(1)]);
if((state_val_38135 === (7))){
var inst_37997 = (state_38134[(7)]);
var inst_37995 = (state_38134[(8)]);
var inst_37996 = (state_38134[(9)]);
var inst_37994 = (state_38134[(10)]);
var inst_38002 = cljs.core._nth.call(null,inst_37995,inst_37997);
var inst_38003 = figwheel.client.file_reloading.eval_body.call(null,inst_38002,opts);
var inst_38004 = (inst_37997 + (1));
var tmp38136 = inst_37995;
var tmp38137 = inst_37996;
var tmp38138 = inst_37994;
var inst_37994__$1 = tmp38138;
var inst_37995__$1 = tmp38136;
var inst_37996__$1 = tmp38137;
var inst_37997__$1 = inst_38004;
var state_38134__$1 = (function (){var statearr_38139 = state_38134;
(statearr_38139[(7)] = inst_37997__$1);

(statearr_38139[(8)] = inst_37995__$1);

(statearr_38139[(9)] = inst_37996__$1);

(statearr_38139[(11)] = inst_38003);

(statearr_38139[(10)] = inst_37994__$1);

return statearr_38139;
})();
var statearr_38140_38223 = state_38134__$1;
(statearr_38140_38223[(2)] = null);

(statearr_38140_38223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (20))){
var inst_38037 = (state_38134[(12)]);
var inst_38045 = figwheel.client.file_reloading.sort_files.call(null,inst_38037);
var state_38134__$1 = state_38134;
var statearr_38141_38224 = state_38134__$1;
(statearr_38141_38224[(2)] = inst_38045);

(statearr_38141_38224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (27))){
var state_38134__$1 = state_38134;
var statearr_38142_38225 = state_38134__$1;
(statearr_38142_38225[(2)] = null);

(statearr_38142_38225[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (1))){
var inst_37986 = (state_38134[(13)]);
var inst_37983 = before_jsload.call(null,files);
var inst_37984 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37985 = (function (){return ((function (inst_37986,inst_37983,inst_37984,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37974_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37974_SHARP_);
});
;})(inst_37986,inst_37983,inst_37984,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37986__$1 = cljs.core.filter.call(null,inst_37985,files);
var inst_37987 = cljs.core.not_empty.call(null,inst_37986__$1);
var state_38134__$1 = (function (){var statearr_38143 = state_38134;
(statearr_38143[(13)] = inst_37986__$1);

(statearr_38143[(14)] = inst_37983);

(statearr_38143[(15)] = inst_37984);

return statearr_38143;
})();
if(cljs.core.truth_(inst_37987)){
var statearr_38144_38226 = state_38134__$1;
(statearr_38144_38226[(1)] = (2));

} else {
var statearr_38145_38227 = state_38134__$1;
(statearr_38145_38227[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (24))){
var state_38134__$1 = state_38134;
var statearr_38146_38228 = state_38134__$1;
(statearr_38146_38228[(2)] = null);

(statearr_38146_38228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (39))){
var inst_38087 = (state_38134[(16)]);
var state_38134__$1 = state_38134;
var statearr_38147_38229 = state_38134__$1;
(statearr_38147_38229[(2)] = inst_38087);

(statearr_38147_38229[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (46))){
var inst_38129 = (state_38134[(2)]);
var state_38134__$1 = state_38134;
var statearr_38148_38230 = state_38134__$1;
(statearr_38148_38230[(2)] = inst_38129);

(statearr_38148_38230[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (4))){
var inst_38031 = (state_38134[(2)]);
var inst_38032 = cljs.core.List.EMPTY;
var inst_38033 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38032);
var inst_38034 = (function (){return ((function (inst_38031,inst_38032,inst_38033,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37975_SHARP_){
var and__30071__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37975_SHARP_);
if(cljs.core.truth_(and__30071__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37975_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37975_SHARP_)));
} else {
return and__30071__auto__;
}
});
;})(inst_38031,inst_38032,inst_38033,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38035 = cljs.core.filter.call(null,inst_38034,files);
var inst_38036 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38037 = cljs.core.concat.call(null,inst_38035,inst_38036);
var state_38134__$1 = (function (){var statearr_38149 = state_38134;
(statearr_38149[(12)] = inst_38037);

(statearr_38149[(17)] = inst_38033);

(statearr_38149[(18)] = inst_38031);

return statearr_38149;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38150_38231 = state_38134__$1;
(statearr_38150_38231[(1)] = (16));

} else {
var statearr_38151_38232 = state_38134__$1;
(statearr_38151_38232[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (15))){
var inst_38021 = (state_38134[(2)]);
var state_38134__$1 = state_38134;
var statearr_38152_38233 = state_38134__$1;
(statearr_38152_38233[(2)] = inst_38021);

(statearr_38152_38233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (21))){
var inst_38047 = (state_38134[(19)]);
var inst_38047__$1 = (state_38134[(2)]);
var inst_38048 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38047__$1);
var state_38134__$1 = (function (){var statearr_38153 = state_38134;
(statearr_38153[(19)] = inst_38047__$1);

return statearr_38153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38134__$1,(22),inst_38048);
} else {
if((state_val_38135 === (31))){
var inst_38132 = (state_38134[(2)]);
var state_38134__$1 = state_38134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38134__$1,inst_38132);
} else {
if((state_val_38135 === (32))){
var inst_38087 = (state_38134[(16)]);
var inst_38092 = inst_38087.cljs$lang$protocol_mask$partition0$;
var inst_38093 = (inst_38092 & (64));
var inst_38094 = inst_38087.cljs$core$ISeq$;
var inst_38095 = (cljs.core.PROTOCOL_SENTINEL === inst_38094);
var inst_38096 = (inst_38093) || (inst_38095);
var state_38134__$1 = state_38134;
if(cljs.core.truth_(inst_38096)){
var statearr_38154_38234 = state_38134__$1;
(statearr_38154_38234[(1)] = (35));

} else {
var statearr_38155_38235 = state_38134__$1;
(statearr_38155_38235[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (40))){
var inst_38109 = (state_38134[(20)]);
var inst_38108 = (state_38134[(2)]);
var inst_38109__$1 = cljs.core.get.call(null,inst_38108,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38110 = cljs.core.get.call(null,inst_38108,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38111 = cljs.core.not_empty.call(null,inst_38109__$1);
var state_38134__$1 = (function (){var statearr_38156 = state_38134;
(statearr_38156[(21)] = inst_38110);

(statearr_38156[(20)] = inst_38109__$1);

return statearr_38156;
})();
if(cljs.core.truth_(inst_38111)){
var statearr_38157_38236 = state_38134__$1;
(statearr_38157_38236[(1)] = (41));

} else {
var statearr_38158_38237 = state_38134__$1;
(statearr_38158_38237[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (33))){
var state_38134__$1 = state_38134;
var statearr_38159_38238 = state_38134__$1;
(statearr_38159_38238[(2)] = false);

(statearr_38159_38238[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (13))){
var inst_38007 = (state_38134[(22)]);
var inst_38011 = cljs.core.chunk_first.call(null,inst_38007);
var inst_38012 = cljs.core.chunk_rest.call(null,inst_38007);
var inst_38013 = cljs.core.count.call(null,inst_38011);
var inst_37994 = inst_38012;
var inst_37995 = inst_38011;
var inst_37996 = inst_38013;
var inst_37997 = (0);
var state_38134__$1 = (function (){var statearr_38160 = state_38134;
(statearr_38160[(7)] = inst_37997);

(statearr_38160[(8)] = inst_37995);

(statearr_38160[(9)] = inst_37996);

(statearr_38160[(10)] = inst_37994);

return statearr_38160;
})();
var statearr_38161_38239 = state_38134__$1;
(statearr_38161_38239[(2)] = null);

(statearr_38161_38239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (22))){
var inst_38047 = (state_38134[(19)]);
var inst_38050 = (state_38134[(23)]);
var inst_38051 = (state_38134[(24)]);
var inst_38055 = (state_38134[(25)]);
var inst_38050__$1 = (state_38134[(2)]);
var inst_38051__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38050__$1);
var inst_38052 = (function (){var all_files = inst_38047;
var res_SINGLEQUOTE_ = inst_38050__$1;
var res = inst_38051__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38047,inst_38050,inst_38051,inst_38055,inst_38050__$1,inst_38051__$1,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37976_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37976_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38047,inst_38050,inst_38051,inst_38055,inst_38050__$1,inst_38051__$1,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38053 = cljs.core.filter.call(null,inst_38052,inst_38050__$1);
var inst_38054 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38055__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38054);
var inst_38056 = cljs.core.not_empty.call(null,inst_38055__$1);
var state_38134__$1 = (function (){var statearr_38162 = state_38134;
(statearr_38162[(23)] = inst_38050__$1);

(statearr_38162[(24)] = inst_38051__$1);

(statearr_38162[(26)] = inst_38053);

(statearr_38162[(25)] = inst_38055__$1);

return statearr_38162;
})();
if(cljs.core.truth_(inst_38056)){
var statearr_38163_38240 = state_38134__$1;
(statearr_38163_38240[(1)] = (23));

} else {
var statearr_38164_38241 = state_38134__$1;
(statearr_38164_38241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (36))){
var state_38134__$1 = state_38134;
var statearr_38165_38242 = state_38134__$1;
(statearr_38165_38242[(2)] = false);

(statearr_38165_38242[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (41))){
var inst_38109 = (state_38134[(20)]);
var inst_38113 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38114 = cljs.core.map.call(null,inst_38113,inst_38109);
var inst_38115 = cljs.core.pr_str.call(null,inst_38114);
var inst_38116 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38115)].join('');
var inst_38117 = figwheel.client.utils.log.call(null,inst_38116);
var state_38134__$1 = state_38134;
var statearr_38166_38243 = state_38134__$1;
(statearr_38166_38243[(2)] = inst_38117);

(statearr_38166_38243[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (43))){
var inst_38110 = (state_38134[(21)]);
var inst_38120 = (state_38134[(2)]);
var inst_38121 = cljs.core.not_empty.call(null,inst_38110);
var state_38134__$1 = (function (){var statearr_38167 = state_38134;
(statearr_38167[(27)] = inst_38120);

return statearr_38167;
})();
if(cljs.core.truth_(inst_38121)){
var statearr_38168_38244 = state_38134__$1;
(statearr_38168_38244[(1)] = (44));

} else {
var statearr_38169_38245 = state_38134__$1;
(statearr_38169_38245[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (29))){
var inst_38087 = (state_38134[(16)]);
var inst_38047 = (state_38134[(19)]);
var inst_38050 = (state_38134[(23)]);
var inst_38051 = (state_38134[(24)]);
var inst_38053 = (state_38134[(26)]);
var inst_38055 = (state_38134[(25)]);
var inst_38083 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38086 = (function (){var all_files = inst_38047;
var res_SINGLEQUOTE_ = inst_38050;
var res = inst_38051;
var files_not_loaded = inst_38053;
var dependencies_that_loaded = inst_38055;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38087,inst_38047,inst_38050,inst_38051,inst_38053,inst_38055,inst_38083,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38085){
var map__38170 = p__38085;
var map__38170__$1 = ((((!((map__38170 == null)))?((((map__38170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38170):map__38170);
var namespace = cljs.core.get.call(null,map__38170__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38087,inst_38047,inst_38050,inst_38051,inst_38053,inst_38055,inst_38083,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38087__$1 = cljs.core.group_by.call(null,inst_38086,inst_38053);
var inst_38089 = (inst_38087__$1 == null);
var inst_38090 = cljs.core.not.call(null,inst_38089);
var state_38134__$1 = (function (){var statearr_38172 = state_38134;
(statearr_38172[(16)] = inst_38087__$1);

(statearr_38172[(28)] = inst_38083);

return statearr_38172;
})();
if(inst_38090){
var statearr_38173_38246 = state_38134__$1;
(statearr_38173_38246[(1)] = (32));

} else {
var statearr_38174_38247 = state_38134__$1;
(statearr_38174_38247[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (44))){
var inst_38110 = (state_38134[(21)]);
var inst_38123 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38110);
var inst_38124 = cljs.core.pr_str.call(null,inst_38123);
var inst_38125 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38124)].join('');
var inst_38126 = figwheel.client.utils.log.call(null,inst_38125);
var state_38134__$1 = state_38134;
var statearr_38175_38248 = state_38134__$1;
(statearr_38175_38248[(2)] = inst_38126);

(statearr_38175_38248[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (6))){
var inst_38028 = (state_38134[(2)]);
var state_38134__$1 = state_38134;
var statearr_38176_38249 = state_38134__$1;
(statearr_38176_38249[(2)] = inst_38028);

(statearr_38176_38249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (28))){
var inst_38053 = (state_38134[(26)]);
var inst_38080 = (state_38134[(2)]);
var inst_38081 = cljs.core.not_empty.call(null,inst_38053);
var state_38134__$1 = (function (){var statearr_38177 = state_38134;
(statearr_38177[(29)] = inst_38080);

return statearr_38177;
})();
if(cljs.core.truth_(inst_38081)){
var statearr_38178_38250 = state_38134__$1;
(statearr_38178_38250[(1)] = (29));

} else {
var statearr_38179_38251 = state_38134__$1;
(statearr_38179_38251[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (25))){
var inst_38051 = (state_38134[(24)]);
var inst_38067 = (state_38134[(2)]);
var inst_38068 = cljs.core.not_empty.call(null,inst_38051);
var state_38134__$1 = (function (){var statearr_38180 = state_38134;
(statearr_38180[(30)] = inst_38067);

return statearr_38180;
})();
if(cljs.core.truth_(inst_38068)){
var statearr_38181_38252 = state_38134__$1;
(statearr_38181_38252[(1)] = (26));

} else {
var statearr_38182_38253 = state_38134__$1;
(statearr_38182_38253[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (34))){
var inst_38103 = (state_38134[(2)]);
var state_38134__$1 = state_38134;
if(cljs.core.truth_(inst_38103)){
var statearr_38183_38254 = state_38134__$1;
(statearr_38183_38254[(1)] = (38));

} else {
var statearr_38184_38255 = state_38134__$1;
(statearr_38184_38255[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (17))){
var state_38134__$1 = state_38134;
var statearr_38185_38256 = state_38134__$1;
(statearr_38185_38256[(2)] = recompile_dependents);

(statearr_38185_38256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (3))){
var state_38134__$1 = state_38134;
var statearr_38186_38257 = state_38134__$1;
(statearr_38186_38257[(2)] = null);

(statearr_38186_38257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (12))){
var inst_38024 = (state_38134[(2)]);
var state_38134__$1 = state_38134;
var statearr_38187_38258 = state_38134__$1;
(statearr_38187_38258[(2)] = inst_38024);

(statearr_38187_38258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (2))){
var inst_37986 = (state_38134[(13)]);
var inst_37993 = cljs.core.seq.call(null,inst_37986);
var inst_37994 = inst_37993;
var inst_37995 = null;
var inst_37996 = (0);
var inst_37997 = (0);
var state_38134__$1 = (function (){var statearr_38188 = state_38134;
(statearr_38188[(7)] = inst_37997);

(statearr_38188[(8)] = inst_37995);

(statearr_38188[(9)] = inst_37996);

(statearr_38188[(10)] = inst_37994);

return statearr_38188;
})();
var statearr_38189_38259 = state_38134__$1;
(statearr_38189_38259[(2)] = null);

(statearr_38189_38259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (23))){
var inst_38047 = (state_38134[(19)]);
var inst_38050 = (state_38134[(23)]);
var inst_38051 = (state_38134[(24)]);
var inst_38053 = (state_38134[(26)]);
var inst_38055 = (state_38134[(25)]);
var inst_38058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38060 = (function (){var all_files = inst_38047;
var res_SINGLEQUOTE_ = inst_38050;
var res = inst_38051;
var files_not_loaded = inst_38053;
var dependencies_that_loaded = inst_38055;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38047,inst_38050,inst_38051,inst_38053,inst_38055,inst_38058,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38059){
var map__38190 = p__38059;
var map__38190__$1 = ((((!((map__38190 == null)))?((((map__38190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38190):map__38190);
var request_url = cljs.core.get.call(null,map__38190__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38047,inst_38050,inst_38051,inst_38053,inst_38055,inst_38058,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38061 = cljs.core.reverse.call(null,inst_38055);
var inst_38062 = cljs.core.map.call(null,inst_38060,inst_38061);
var inst_38063 = cljs.core.pr_str.call(null,inst_38062);
var inst_38064 = figwheel.client.utils.log.call(null,inst_38063);
var state_38134__$1 = (function (){var statearr_38192 = state_38134;
(statearr_38192[(31)] = inst_38058);

return statearr_38192;
})();
var statearr_38193_38260 = state_38134__$1;
(statearr_38193_38260[(2)] = inst_38064);

(statearr_38193_38260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (35))){
var state_38134__$1 = state_38134;
var statearr_38194_38261 = state_38134__$1;
(statearr_38194_38261[(2)] = true);

(statearr_38194_38261[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (19))){
var inst_38037 = (state_38134[(12)]);
var inst_38043 = figwheel.client.file_reloading.expand_files.call(null,inst_38037);
var state_38134__$1 = state_38134;
var statearr_38195_38262 = state_38134__$1;
(statearr_38195_38262[(2)] = inst_38043);

(statearr_38195_38262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (11))){
var state_38134__$1 = state_38134;
var statearr_38196_38263 = state_38134__$1;
(statearr_38196_38263[(2)] = null);

(statearr_38196_38263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (9))){
var inst_38026 = (state_38134[(2)]);
var state_38134__$1 = state_38134;
var statearr_38197_38264 = state_38134__$1;
(statearr_38197_38264[(2)] = inst_38026);

(statearr_38197_38264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (5))){
var inst_37997 = (state_38134[(7)]);
var inst_37996 = (state_38134[(9)]);
var inst_37999 = (inst_37997 < inst_37996);
var inst_38000 = inst_37999;
var state_38134__$1 = state_38134;
if(cljs.core.truth_(inst_38000)){
var statearr_38198_38265 = state_38134__$1;
(statearr_38198_38265[(1)] = (7));

} else {
var statearr_38199_38266 = state_38134__$1;
(statearr_38199_38266[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (14))){
var inst_38007 = (state_38134[(22)]);
var inst_38016 = cljs.core.first.call(null,inst_38007);
var inst_38017 = figwheel.client.file_reloading.eval_body.call(null,inst_38016,opts);
var inst_38018 = cljs.core.next.call(null,inst_38007);
var inst_37994 = inst_38018;
var inst_37995 = null;
var inst_37996 = (0);
var inst_37997 = (0);
var state_38134__$1 = (function (){var statearr_38200 = state_38134;
(statearr_38200[(32)] = inst_38017);

(statearr_38200[(7)] = inst_37997);

(statearr_38200[(8)] = inst_37995);

(statearr_38200[(9)] = inst_37996);

(statearr_38200[(10)] = inst_37994);

return statearr_38200;
})();
var statearr_38201_38267 = state_38134__$1;
(statearr_38201_38267[(2)] = null);

(statearr_38201_38267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (45))){
var state_38134__$1 = state_38134;
var statearr_38202_38268 = state_38134__$1;
(statearr_38202_38268[(2)] = null);

(statearr_38202_38268[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (26))){
var inst_38047 = (state_38134[(19)]);
var inst_38050 = (state_38134[(23)]);
var inst_38051 = (state_38134[(24)]);
var inst_38053 = (state_38134[(26)]);
var inst_38055 = (state_38134[(25)]);
var inst_38070 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38072 = (function (){var all_files = inst_38047;
var res_SINGLEQUOTE_ = inst_38050;
var res = inst_38051;
var files_not_loaded = inst_38053;
var dependencies_that_loaded = inst_38055;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38047,inst_38050,inst_38051,inst_38053,inst_38055,inst_38070,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38071){
var map__38203 = p__38071;
var map__38203__$1 = ((((!((map__38203 == null)))?((((map__38203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38203):map__38203);
var namespace = cljs.core.get.call(null,map__38203__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38203__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38047,inst_38050,inst_38051,inst_38053,inst_38055,inst_38070,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38073 = cljs.core.map.call(null,inst_38072,inst_38051);
var inst_38074 = cljs.core.pr_str.call(null,inst_38073);
var inst_38075 = figwheel.client.utils.log.call(null,inst_38074);
var inst_38076 = (function (){var all_files = inst_38047;
var res_SINGLEQUOTE_ = inst_38050;
var res = inst_38051;
var files_not_loaded = inst_38053;
var dependencies_that_loaded = inst_38055;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38047,inst_38050,inst_38051,inst_38053,inst_38055,inst_38070,inst_38072,inst_38073,inst_38074,inst_38075,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38047,inst_38050,inst_38051,inst_38053,inst_38055,inst_38070,inst_38072,inst_38073,inst_38074,inst_38075,state_val_38135,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38077 = setTimeout(inst_38076,(10));
var state_38134__$1 = (function (){var statearr_38205 = state_38134;
(statearr_38205[(33)] = inst_38070);

(statearr_38205[(34)] = inst_38075);

return statearr_38205;
})();
var statearr_38206_38269 = state_38134__$1;
(statearr_38206_38269[(2)] = inst_38077);

(statearr_38206_38269[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (16))){
var state_38134__$1 = state_38134;
var statearr_38207_38270 = state_38134__$1;
(statearr_38207_38270[(2)] = reload_dependents);

(statearr_38207_38270[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (38))){
var inst_38087 = (state_38134[(16)]);
var inst_38105 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38087);
var state_38134__$1 = state_38134;
var statearr_38208_38271 = state_38134__$1;
(statearr_38208_38271[(2)] = inst_38105);

(statearr_38208_38271[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (30))){
var state_38134__$1 = state_38134;
var statearr_38209_38272 = state_38134__$1;
(statearr_38209_38272[(2)] = null);

(statearr_38209_38272[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (10))){
var inst_38007 = (state_38134[(22)]);
var inst_38009 = cljs.core.chunked_seq_QMARK_.call(null,inst_38007);
var state_38134__$1 = state_38134;
if(inst_38009){
var statearr_38210_38273 = state_38134__$1;
(statearr_38210_38273[(1)] = (13));

} else {
var statearr_38211_38274 = state_38134__$1;
(statearr_38211_38274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (18))){
var inst_38041 = (state_38134[(2)]);
var state_38134__$1 = state_38134;
if(cljs.core.truth_(inst_38041)){
var statearr_38212_38275 = state_38134__$1;
(statearr_38212_38275[(1)] = (19));

} else {
var statearr_38213_38276 = state_38134__$1;
(statearr_38213_38276[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (42))){
var state_38134__$1 = state_38134;
var statearr_38214_38277 = state_38134__$1;
(statearr_38214_38277[(2)] = null);

(statearr_38214_38277[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (37))){
var inst_38100 = (state_38134[(2)]);
var state_38134__$1 = state_38134;
var statearr_38215_38278 = state_38134__$1;
(statearr_38215_38278[(2)] = inst_38100);

(statearr_38215_38278[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (8))){
var inst_37994 = (state_38134[(10)]);
var inst_38007 = (state_38134[(22)]);
var inst_38007__$1 = cljs.core.seq.call(null,inst_37994);
var state_38134__$1 = (function (){var statearr_38216 = state_38134;
(statearr_38216[(22)] = inst_38007__$1);

return statearr_38216;
})();
if(inst_38007__$1){
var statearr_38217_38279 = state_38134__$1;
(statearr_38217_38279[(1)] = (10));

} else {
var statearr_38218_38280 = state_38134__$1;
(statearr_38218_38280[(1)] = (11));

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
});})(c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35399__auto__,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto____0 = (function (){
var statearr_38219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38219[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto__);

(statearr_38219[(1)] = (1));

return statearr_38219;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto____1 = (function (state_38134){
while(true){
var ret_value__35401__auto__ = (function (){try{while(true){
var result__35402__auto__ = switch__35399__auto__.call(null,state_38134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35402__auto__;
}
break;
}
}catch (e38220){if((e38220 instanceof Object)){
var ex__35403__auto__ = e38220;
var statearr_38221_38281 = state_38134;
(statearr_38221_38281[(5)] = ex__35403__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38282 = state_38134;
state_38134 = G__38282;
continue;
} else {
return ret_value__35401__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto__ = function(state_38134){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto____1.call(this,state_38134);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35400__auto__;
})()
;})(switch__35399__auto__,c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35491__auto__ = (function (){var statearr_38222 = f__35490__auto__.call(null);
(statearr_38222[(6)] = c__35489__auto__);

return statearr_38222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35491__auto__);
});})(c__35489__auto__,map__37979,map__37979__$1,opts,before_jsload,on_jsload,reload_dependents,map__37980,map__37980__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35489__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38285,link){
var map__38286 = p__38285;
var map__38286__$1 = ((((!((map__38286 == null)))?((((map__38286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38286):map__38286);
var file = cljs.core.get.call(null,map__38286__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__38286,map__38286__$1,file){
return (function (p1__38283_SHARP_,p2__38284_SHARP_){
if(cljs.core._EQ_.call(null,p1__38283_SHARP_,p2__38284_SHARP_)){
return p1__38283_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__38286,map__38286__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38289){
var map__38290 = p__38289;
var map__38290__$1 = ((((!((map__38290 == null)))?((((map__38290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38290):map__38290);
var match_length = cljs.core.get.call(null,map__38290__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38290__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38288_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38288_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38292_SHARP_,p2__38293_SHARP_){
return cljs.core.assoc.call(null,p1__38292_SHARP_,cljs.core.get.call(null,p2__38293_SHARP_,key),p2__38293_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38294 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38294);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38294);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38295,p__38296){
var map__38297 = p__38295;
var map__38297__$1 = ((((!((map__38297 == null)))?((((map__38297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38297):map__38297);
var on_cssload = cljs.core.get.call(null,map__38297__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38298 = p__38296;
var map__38298__$1 = ((((!((map__38298 == null)))?((((map__38298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38298):map__38298);
var files_msg = map__38298__$1;
var files = cljs.core.get.call(null,map__38298__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521406488897
