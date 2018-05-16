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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37825_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37825_SHARP_));
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
var seq__37826 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37827 = null;
var count__37828 = (0);
var i__37829 = (0);
while(true){
if((i__37829 < count__37828)){
var n = cljs.core._nth.call(null,chunk__37827,i__37829);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37830 = seq__37826;
var G__37831 = chunk__37827;
var G__37832 = count__37828;
var G__37833 = (i__37829 + (1));
seq__37826 = G__37830;
chunk__37827 = G__37831;
count__37828 = G__37832;
i__37829 = G__37833;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37826);
if(temp__5457__auto__){
var seq__37826__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37826__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__37826__$1);
var G__37834 = cljs.core.chunk_rest.call(null,seq__37826__$1);
var G__37835 = c__31014__auto__;
var G__37836 = cljs.core.count.call(null,c__31014__auto__);
var G__37837 = (0);
seq__37826 = G__37834;
chunk__37827 = G__37835;
count__37828 = G__37836;
i__37829 = G__37837;
continue;
} else {
var n = cljs.core.first.call(null,seq__37826__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37838 = cljs.core.next.call(null,seq__37826__$1);
var G__37839 = null;
var G__37840 = (0);
var G__37841 = (0);
seq__37826 = G__37838;
chunk__37827 = G__37839;
count__37828 = G__37840;
i__37829 = G__37841;
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
return cljs.core.some.call(null,(function (p__37842){
var vec__37843 = p__37842;
var _ = cljs.core.nth.call(null,vec__37843,(0),null);
var v = cljs.core.nth.call(null,vec__37843,(1),null);
var and__30071__auto__ = v;
if(cljs.core.truth_(and__30071__auto__)){
return v.call(null,dep);
} else {
return and__30071__auto__;
}
}),cljs.core.filter.call(null,(function (p__37846){
var vec__37847 = p__37846;
var k = cljs.core.nth.call(null,vec__37847,(0),null);
var v = cljs.core.nth.call(null,vec__37847,(1),null);
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

var seq__37859_37867 = cljs.core.seq.call(null,deps);
var chunk__37860_37868 = null;
var count__37861_37869 = (0);
var i__37862_37870 = (0);
while(true){
if((i__37862_37870 < count__37861_37869)){
var dep_37871 = cljs.core._nth.call(null,chunk__37860_37868,i__37862_37870);
if(cljs.core.truth_((function (){var and__30071__auto__ = dep_37871;
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37871));
} else {
return and__30071__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37871,(depth + (1)),state);
} else {
}

var G__37872 = seq__37859_37867;
var G__37873 = chunk__37860_37868;
var G__37874 = count__37861_37869;
var G__37875 = (i__37862_37870 + (1));
seq__37859_37867 = G__37872;
chunk__37860_37868 = G__37873;
count__37861_37869 = G__37874;
i__37862_37870 = G__37875;
continue;
} else {
var temp__5457__auto___37876 = cljs.core.seq.call(null,seq__37859_37867);
if(temp__5457__auto___37876){
var seq__37859_37877__$1 = temp__5457__auto___37876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37859_37877__$1)){
var c__31014__auto___37878 = cljs.core.chunk_first.call(null,seq__37859_37877__$1);
var G__37879 = cljs.core.chunk_rest.call(null,seq__37859_37877__$1);
var G__37880 = c__31014__auto___37878;
var G__37881 = cljs.core.count.call(null,c__31014__auto___37878);
var G__37882 = (0);
seq__37859_37867 = G__37879;
chunk__37860_37868 = G__37880;
count__37861_37869 = G__37881;
i__37862_37870 = G__37882;
continue;
} else {
var dep_37883 = cljs.core.first.call(null,seq__37859_37877__$1);
if(cljs.core.truth_((function (){var and__30071__auto__ = dep_37883;
if(cljs.core.truth_(and__30071__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37883));
} else {
return and__30071__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37883,(depth + (1)),state);
} else {
}

var G__37884 = cljs.core.next.call(null,seq__37859_37877__$1);
var G__37885 = null;
var G__37886 = (0);
var G__37887 = (0);
seq__37859_37867 = G__37884;
chunk__37860_37868 = G__37885;
count__37861_37869 = G__37886;
i__37862_37870 = G__37887;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37863){
var vec__37864 = p__37863;
var seq__37865 = cljs.core.seq.call(null,vec__37864);
var first__37866 = cljs.core.first.call(null,seq__37865);
var seq__37865__$1 = cljs.core.next.call(null,seq__37865);
var x = first__37866;
var xs = seq__37865__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37864,seq__37865,first__37866,seq__37865__$1,x,xs,get_deps__$1){
return (function (p1__37850_SHARP_){
return clojure.set.difference.call(null,p1__37850_SHARP_,x);
});})(vec__37864,seq__37865,first__37866,seq__37865__$1,x,xs,get_deps__$1))
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
var seq__37888 = cljs.core.seq.call(null,provides);
var chunk__37889 = null;
var count__37890 = (0);
var i__37891 = (0);
while(true){
if((i__37891 < count__37890)){
var prov = cljs.core._nth.call(null,chunk__37889,i__37891);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37892_37900 = cljs.core.seq.call(null,requires);
var chunk__37893_37901 = null;
var count__37894_37902 = (0);
var i__37895_37903 = (0);
while(true){
if((i__37895_37903 < count__37894_37902)){
var req_37904 = cljs.core._nth.call(null,chunk__37893_37901,i__37895_37903);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37904,prov);

var G__37905 = seq__37892_37900;
var G__37906 = chunk__37893_37901;
var G__37907 = count__37894_37902;
var G__37908 = (i__37895_37903 + (1));
seq__37892_37900 = G__37905;
chunk__37893_37901 = G__37906;
count__37894_37902 = G__37907;
i__37895_37903 = G__37908;
continue;
} else {
var temp__5457__auto___37909 = cljs.core.seq.call(null,seq__37892_37900);
if(temp__5457__auto___37909){
var seq__37892_37910__$1 = temp__5457__auto___37909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37892_37910__$1)){
var c__31014__auto___37911 = cljs.core.chunk_first.call(null,seq__37892_37910__$1);
var G__37912 = cljs.core.chunk_rest.call(null,seq__37892_37910__$1);
var G__37913 = c__31014__auto___37911;
var G__37914 = cljs.core.count.call(null,c__31014__auto___37911);
var G__37915 = (0);
seq__37892_37900 = G__37912;
chunk__37893_37901 = G__37913;
count__37894_37902 = G__37914;
i__37895_37903 = G__37915;
continue;
} else {
var req_37916 = cljs.core.first.call(null,seq__37892_37910__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37916,prov);

var G__37917 = cljs.core.next.call(null,seq__37892_37910__$1);
var G__37918 = null;
var G__37919 = (0);
var G__37920 = (0);
seq__37892_37900 = G__37917;
chunk__37893_37901 = G__37918;
count__37894_37902 = G__37919;
i__37895_37903 = G__37920;
continue;
}
} else {
}
}
break;
}

var G__37921 = seq__37888;
var G__37922 = chunk__37889;
var G__37923 = count__37890;
var G__37924 = (i__37891 + (1));
seq__37888 = G__37921;
chunk__37889 = G__37922;
count__37890 = G__37923;
i__37891 = G__37924;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37888);
if(temp__5457__auto__){
var seq__37888__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37888__$1)){
var c__31014__auto__ = cljs.core.chunk_first.call(null,seq__37888__$1);
var G__37925 = cljs.core.chunk_rest.call(null,seq__37888__$1);
var G__37926 = c__31014__auto__;
var G__37927 = cljs.core.count.call(null,c__31014__auto__);
var G__37928 = (0);
seq__37888 = G__37925;
chunk__37889 = G__37926;
count__37890 = G__37927;
i__37891 = G__37928;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37888__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37896_37929 = cljs.core.seq.call(null,requires);
var chunk__37897_37930 = null;
var count__37898_37931 = (0);
var i__37899_37932 = (0);
while(true){
if((i__37899_37932 < count__37898_37931)){
var req_37933 = cljs.core._nth.call(null,chunk__37897_37930,i__37899_37932);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37933,prov);

var G__37934 = seq__37896_37929;
var G__37935 = chunk__37897_37930;
var G__37936 = count__37898_37931;
var G__37937 = (i__37899_37932 + (1));
seq__37896_37929 = G__37934;
chunk__37897_37930 = G__37935;
count__37898_37931 = G__37936;
i__37899_37932 = G__37937;
continue;
} else {
var temp__5457__auto___37938__$1 = cljs.core.seq.call(null,seq__37896_37929);
if(temp__5457__auto___37938__$1){
var seq__37896_37939__$1 = temp__5457__auto___37938__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37896_37939__$1)){
var c__31014__auto___37940 = cljs.core.chunk_first.call(null,seq__37896_37939__$1);
var G__37941 = cljs.core.chunk_rest.call(null,seq__37896_37939__$1);
var G__37942 = c__31014__auto___37940;
var G__37943 = cljs.core.count.call(null,c__31014__auto___37940);
var G__37944 = (0);
seq__37896_37929 = G__37941;
chunk__37897_37930 = G__37942;
count__37898_37931 = G__37943;
i__37899_37932 = G__37944;
continue;
} else {
var req_37945 = cljs.core.first.call(null,seq__37896_37939__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37945,prov);

var G__37946 = cljs.core.next.call(null,seq__37896_37939__$1);
var G__37947 = null;
var G__37948 = (0);
var G__37949 = (0);
seq__37896_37929 = G__37946;
chunk__37897_37930 = G__37947;
count__37898_37931 = G__37948;
i__37899_37932 = G__37949;
continue;
}
} else {
}
}
break;
}

var G__37950 = cljs.core.next.call(null,seq__37888__$1);
var G__37951 = null;
var G__37952 = (0);
var G__37953 = (0);
seq__37888 = G__37950;
chunk__37889 = G__37951;
count__37890 = G__37952;
i__37891 = G__37953;
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
var seq__37954_37958 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37955_37959 = null;
var count__37956_37960 = (0);
var i__37957_37961 = (0);
while(true){
if((i__37957_37961 < count__37956_37960)){
var ns_37962 = cljs.core._nth.call(null,chunk__37955_37959,i__37957_37961);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37962);

var G__37963 = seq__37954_37958;
var G__37964 = chunk__37955_37959;
var G__37965 = count__37956_37960;
var G__37966 = (i__37957_37961 + (1));
seq__37954_37958 = G__37963;
chunk__37955_37959 = G__37964;
count__37956_37960 = G__37965;
i__37957_37961 = G__37966;
continue;
} else {
var temp__5457__auto___37967 = cljs.core.seq.call(null,seq__37954_37958);
if(temp__5457__auto___37967){
var seq__37954_37968__$1 = temp__5457__auto___37967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37954_37968__$1)){
var c__31014__auto___37969 = cljs.core.chunk_first.call(null,seq__37954_37968__$1);
var G__37970 = cljs.core.chunk_rest.call(null,seq__37954_37968__$1);
var G__37971 = c__31014__auto___37969;
var G__37972 = cljs.core.count.call(null,c__31014__auto___37969);
var G__37973 = (0);
seq__37954_37958 = G__37970;
chunk__37955_37959 = G__37971;
count__37956_37960 = G__37972;
i__37957_37961 = G__37973;
continue;
} else {
var ns_37974 = cljs.core.first.call(null,seq__37954_37968__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37974);

var G__37975 = cljs.core.next.call(null,seq__37954_37968__$1);
var G__37976 = null;
var G__37977 = (0);
var G__37978 = (0);
seq__37954_37958 = G__37975;
chunk__37955_37959 = G__37976;
count__37956_37960 = G__37977;
i__37957_37961 = G__37978;
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
var G__37979__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37980__i = 0, G__37980__a = new Array(arguments.length -  0);
while (G__37980__i < G__37980__a.length) {G__37980__a[G__37980__i] = arguments[G__37980__i + 0]; ++G__37980__i;}
  args = new cljs.core.IndexedSeq(G__37980__a,0,null);
} 
return G__37979__delegate.call(this,args);};
G__37979.cljs$lang$maxFixedArity = 0;
G__37979.cljs$lang$applyTo = (function (arglist__37981){
var args = cljs.core.seq(arglist__37981);
return G__37979__delegate(args);
});
G__37979.cljs$core$IFn$_invoke$arity$variadic = G__37979__delegate;
return G__37979;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37982_SHARP_,p2__37983_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37982_SHARP_)].join('')),p2__37983_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37984_SHARP_,p2__37985_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37984_SHARP_)].join(''),p2__37985_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37986 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37986.addCallback(((function (G__37986){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37986))
);

G__37986.addErrback(((function (G__37986){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37986))
);

return G__37986;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37987){if((e37987 instanceof Error)){
var e = e37987;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37987;

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
}catch (e37988){if((e37988 instanceof Error)){
var e = e37988;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37988;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37989 = cljs.core._EQ_;
var expr__37990 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37989.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37990))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37989.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37990))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37989.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37990))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37989,expr__37990){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37989,expr__37990))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37992,callback){
var map__37993 = p__37992;
var map__37993__$1 = ((((!((map__37993 == null)))?((((map__37993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37993):map__37993);
var file_msg = map__37993__$1;
var request_url = cljs.core.get.call(null,map__37993__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30083__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30083__auto__)){
return or__30083__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37993,map__37993__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37993,map__37993__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto__){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto__){
return (function (state_38033){
var state_val_38034 = (state_38033[(1)]);
if((state_val_38034 === (7))){
var inst_38029 = (state_38033[(2)]);
var state_38033__$1 = state_38033;
var statearr_38035_38062 = state_38033__$1;
(statearr_38035_38062[(2)] = inst_38029);

(statearr_38035_38062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (1))){
var state_38033__$1 = state_38033;
var statearr_38036_38063 = state_38033__$1;
(statearr_38036_38063[(2)] = null);

(statearr_38036_38063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (4))){
var inst_37997 = (state_38033[(7)]);
var inst_37997__$1 = (state_38033[(2)]);
var state_38033__$1 = (function (){var statearr_38037 = state_38033;
(statearr_38037[(7)] = inst_37997__$1);

return statearr_38037;
})();
if(cljs.core.truth_(inst_37997__$1)){
var statearr_38038_38064 = state_38033__$1;
(statearr_38038_38064[(1)] = (5));

} else {
var statearr_38039_38065 = state_38033__$1;
(statearr_38039_38065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (15))){
var inst_38011 = (state_38033[(8)]);
var inst_38014 = (state_38033[(9)]);
var inst_38016 = inst_38014.call(null,inst_38011);
var state_38033__$1 = state_38033;
var statearr_38040_38066 = state_38033__$1;
(statearr_38040_38066[(2)] = inst_38016);

(statearr_38040_38066[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (13))){
var inst_38023 = (state_38033[(2)]);
var state_38033__$1 = state_38033;
var statearr_38041_38067 = state_38033__$1;
(statearr_38041_38067[(2)] = inst_38023);

(statearr_38041_38067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (6))){
var state_38033__$1 = state_38033;
var statearr_38042_38068 = state_38033__$1;
(statearr_38042_38068[(2)] = null);

(statearr_38042_38068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (17))){
var inst_38020 = (state_38033[(2)]);
var state_38033__$1 = state_38033;
var statearr_38043_38069 = state_38033__$1;
(statearr_38043_38069[(2)] = inst_38020);

(statearr_38043_38069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (3))){
var inst_38031 = (state_38033[(2)]);
var state_38033__$1 = state_38033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38033__$1,inst_38031);
} else {
if((state_val_38034 === (12))){
var state_38033__$1 = state_38033;
var statearr_38044_38070 = state_38033__$1;
(statearr_38044_38070[(2)] = null);

(statearr_38044_38070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (2))){
var state_38033__$1 = state_38033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38033__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38034 === (11))){
var inst_38002 = (state_38033[(10)]);
var inst_38009 = figwheel.client.file_reloading.blocking_load.call(null,inst_38002);
var state_38033__$1 = state_38033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38033__$1,(14),inst_38009);
} else {
if((state_val_38034 === (9))){
var inst_38002 = (state_38033[(10)]);
var state_38033__$1 = state_38033;
if(cljs.core.truth_(inst_38002)){
var statearr_38045_38071 = state_38033__$1;
(statearr_38045_38071[(1)] = (11));

} else {
var statearr_38046_38072 = state_38033__$1;
(statearr_38046_38072[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (5))){
var inst_37997 = (state_38033[(7)]);
var inst_38003 = (state_38033[(11)]);
var inst_38002 = cljs.core.nth.call(null,inst_37997,(0),null);
var inst_38003__$1 = cljs.core.nth.call(null,inst_37997,(1),null);
var state_38033__$1 = (function (){var statearr_38047 = state_38033;
(statearr_38047[(10)] = inst_38002);

(statearr_38047[(11)] = inst_38003__$1);

return statearr_38047;
})();
if(cljs.core.truth_(inst_38003__$1)){
var statearr_38048_38073 = state_38033__$1;
(statearr_38048_38073[(1)] = (8));

} else {
var statearr_38049_38074 = state_38033__$1;
(statearr_38049_38074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (14))){
var inst_38002 = (state_38033[(10)]);
var inst_38014 = (state_38033[(9)]);
var inst_38011 = (state_38033[(2)]);
var inst_38012 = console.log("Loading!",inst_38002);
var inst_38013 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38014__$1 = cljs.core.get.call(null,inst_38013,inst_38002);
var state_38033__$1 = (function (){var statearr_38050 = state_38033;
(statearr_38050[(8)] = inst_38011);

(statearr_38050[(12)] = inst_38012);

(statearr_38050[(9)] = inst_38014__$1);

return statearr_38050;
})();
if(cljs.core.truth_(inst_38014__$1)){
var statearr_38051_38075 = state_38033__$1;
(statearr_38051_38075[(1)] = (15));

} else {
var statearr_38052_38076 = state_38033__$1;
(statearr_38052_38076[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (16))){
var inst_38011 = (state_38033[(8)]);
var inst_38018 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38011);
var state_38033__$1 = state_38033;
var statearr_38053_38077 = state_38033__$1;
(statearr_38053_38077[(2)] = inst_38018);

(statearr_38053_38077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (10))){
var inst_38025 = (state_38033[(2)]);
var state_38033__$1 = (function (){var statearr_38054 = state_38033;
(statearr_38054[(13)] = inst_38025);

return statearr_38054;
})();
var statearr_38055_38078 = state_38033__$1;
(statearr_38055_38078[(2)] = null);

(statearr_38055_38078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (8))){
var inst_38003 = (state_38033[(11)]);
var inst_38005 = console.log("Evaling!",inst_38003);
var inst_38006 = eval(inst_38003);
var state_38033__$1 = (function (){var statearr_38056 = state_38033;
(statearr_38056[(14)] = inst_38005);

return statearr_38056;
})();
var statearr_38057_38079 = state_38033__$1;
(statearr_38057_38079[(2)] = inst_38006);

(statearr_38057_38079[(1)] = (10));


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
});})(c__34577__auto__))
;
return ((function (switch__34487__auto__,c__34577__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34488__auto__ = null;
var figwheel$client$file_reloading$state_machine__34488__auto____0 = (function (){
var statearr_38058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38058[(0)] = figwheel$client$file_reloading$state_machine__34488__auto__);

(statearr_38058[(1)] = (1));

return statearr_38058;
});
var figwheel$client$file_reloading$state_machine__34488__auto____1 = (function (state_38033){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_38033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e38059){if((e38059 instanceof Object)){
var ex__34491__auto__ = e38059;
var statearr_38060_38080 = state_38033;
(statearr_38060_38080[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38081 = state_38033;
state_38033 = G__38081;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34488__auto__ = function(state_38033){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34488__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34488__auto____1.call(this,state_38033);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34488__auto____0;
figwheel$client$file_reloading$state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34488__auto____1;
return figwheel$client$file_reloading$state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto__))
})();
var state__34579__auto__ = (function (){var statearr_38061 = f__34578__auto__.call(null);
(statearr_38061[(6)] = c__34577__auto__);

return statearr_38061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto__))
);

return c__34577__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__38083 = arguments.length;
switch (G__38083) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38085,callback){
var map__38086 = p__38085;
var map__38086__$1 = ((((!((map__38086 == null)))?((((map__38086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38086):map__38086);
var file_msg = map__38086__$1;
var namespace = cljs.core.get.call(null,map__38086__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38086,map__38086__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38086,map__38086__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__38088){
var map__38089 = p__38088;
var map__38089__$1 = ((((!((map__38089 == null)))?((((map__38089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38089):map__38089);
var file_msg = map__38089__$1;
var namespace = cljs.core.get.call(null,map__38089__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38091){
var map__38092 = p__38091;
var map__38092__$1 = ((((!((map__38092 == null)))?((((map__38092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38092):map__38092);
var file_msg = map__38092__$1;
var namespace = cljs.core.get.call(null,map__38092__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38094,callback){
var map__38095 = p__38094;
var map__38095__$1 = ((((!((map__38095 == null)))?((((map__38095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38095):map__38095);
var file_msg = map__38095__$1;
var request_url = cljs.core.get.call(null,map__38095__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38095__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34577__auto___38145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto___38145,out){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto___38145,out){
return (function (state_38130){
var state_val_38131 = (state_38130[(1)]);
if((state_val_38131 === (1))){
var inst_38104 = cljs.core.seq.call(null,files);
var inst_38105 = cljs.core.first.call(null,inst_38104);
var inst_38106 = cljs.core.next.call(null,inst_38104);
var inst_38107 = files;
var state_38130__$1 = (function (){var statearr_38132 = state_38130;
(statearr_38132[(7)] = inst_38106);

(statearr_38132[(8)] = inst_38105);

(statearr_38132[(9)] = inst_38107);

return statearr_38132;
})();
var statearr_38133_38146 = state_38130__$1;
(statearr_38133_38146[(2)] = null);

(statearr_38133_38146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38131 === (2))){
var inst_38113 = (state_38130[(10)]);
var inst_38107 = (state_38130[(9)]);
var inst_38112 = cljs.core.seq.call(null,inst_38107);
var inst_38113__$1 = cljs.core.first.call(null,inst_38112);
var inst_38114 = cljs.core.next.call(null,inst_38112);
var inst_38115 = (inst_38113__$1 == null);
var inst_38116 = cljs.core.not.call(null,inst_38115);
var state_38130__$1 = (function (){var statearr_38134 = state_38130;
(statearr_38134[(10)] = inst_38113__$1);

(statearr_38134[(11)] = inst_38114);

return statearr_38134;
})();
if(inst_38116){
var statearr_38135_38147 = state_38130__$1;
(statearr_38135_38147[(1)] = (4));

} else {
var statearr_38136_38148 = state_38130__$1;
(statearr_38136_38148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38131 === (3))){
var inst_38128 = (state_38130[(2)]);
var state_38130__$1 = state_38130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38130__$1,inst_38128);
} else {
if((state_val_38131 === (4))){
var inst_38113 = (state_38130[(10)]);
var inst_38118 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38113);
var state_38130__$1 = state_38130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38130__$1,(7),inst_38118);
} else {
if((state_val_38131 === (5))){
var inst_38124 = cljs.core.async.close_BANG_.call(null,out);
var state_38130__$1 = state_38130;
var statearr_38137_38149 = state_38130__$1;
(statearr_38137_38149[(2)] = inst_38124);

(statearr_38137_38149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38131 === (6))){
var inst_38126 = (state_38130[(2)]);
var state_38130__$1 = state_38130;
var statearr_38138_38150 = state_38130__$1;
(statearr_38138_38150[(2)] = inst_38126);

(statearr_38138_38150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38131 === (7))){
var inst_38114 = (state_38130[(11)]);
var inst_38120 = (state_38130[(2)]);
var inst_38121 = cljs.core.async.put_BANG_.call(null,out,inst_38120);
var inst_38107 = inst_38114;
var state_38130__$1 = (function (){var statearr_38139 = state_38130;
(statearr_38139[(12)] = inst_38121);

(statearr_38139[(9)] = inst_38107);

return statearr_38139;
})();
var statearr_38140_38151 = state_38130__$1;
(statearr_38140_38151[(2)] = null);

(statearr_38140_38151[(1)] = (2));


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
});})(c__34577__auto___38145,out))
;
return ((function (switch__34487__auto__,c__34577__auto___38145,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto____0 = (function (){
var statearr_38141 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38141[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto__);

(statearr_38141[(1)] = (1));

return statearr_38141;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto____1 = (function (state_38130){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_38130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e38142){if((e38142 instanceof Object)){
var ex__34491__auto__ = e38142;
var statearr_38143_38152 = state_38130;
(statearr_38143_38152[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38153 = state_38130;
state_38130 = G__38153;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto__ = function(state_38130){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto____1.call(this,state_38130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto___38145,out))
})();
var state__34579__auto__ = (function (){var statearr_38144 = f__34578__auto__.call(null);
(statearr_38144[(6)] = c__34577__auto___38145);

return statearr_38144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto___38145,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38154,opts){
var map__38155 = p__38154;
var map__38155__$1 = ((((!((map__38155 == null)))?((((map__38155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38155):map__38155);
var eval_body = cljs.core.get.call(null,map__38155__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38155__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e38157){var e = e38157;
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
return (function (p1__38158_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38158_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38159){
var vec__38160 = p__38159;
var k = cljs.core.nth.call(null,vec__38160,(0),null);
var v = cljs.core.nth.call(null,vec__38160,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38163){
var vec__38164 = p__38163;
var k = cljs.core.nth.call(null,vec__38164,(0),null);
var v = cljs.core.nth.call(null,vec__38164,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38170,p__38171){
var map__38172 = p__38170;
var map__38172__$1 = ((((!((map__38172 == null)))?((((map__38172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38172):map__38172);
var opts = map__38172__$1;
var before_jsload = cljs.core.get.call(null,map__38172__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38172__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38172__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38173 = p__38171;
var map__38173__$1 = ((((!((map__38173 == null)))?((((map__38173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38173):map__38173);
var msg = map__38173__$1;
var files = cljs.core.get.call(null,map__38173__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38173__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38173__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34578__auto__ = (function (){var switch__34487__auto__ = ((function (c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38327){
var state_val_38328 = (state_38327[(1)]);
if((state_val_38328 === (7))){
var inst_38190 = (state_38327[(7)]);
var inst_38188 = (state_38327[(8)]);
var inst_38187 = (state_38327[(9)]);
var inst_38189 = (state_38327[(10)]);
var inst_38195 = cljs.core._nth.call(null,inst_38188,inst_38190);
var inst_38196 = figwheel.client.file_reloading.eval_body.call(null,inst_38195,opts);
var inst_38197 = (inst_38190 + (1));
var tmp38329 = inst_38188;
var tmp38330 = inst_38187;
var tmp38331 = inst_38189;
var inst_38187__$1 = tmp38330;
var inst_38188__$1 = tmp38329;
var inst_38189__$1 = tmp38331;
var inst_38190__$1 = inst_38197;
var state_38327__$1 = (function (){var statearr_38332 = state_38327;
(statearr_38332[(7)] = inst_38190__$1);

(statearr_38332[(11)] = inst_38196);

(statearr_38332[(8)] = inst_38188__$1);

(statearr_38332[(9)] = inst_38187__$1);

(statearr_38332[(10)] = inst_38189__$1);

return statearr_38332;
})();
var statearr_38333_38416 = state_38327__$1;
(statearr_38333_38416[(2)] = null);

(statearr_38333_38416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (20))){
var inst_38230 = (state_38327[(12)]);
var inst_38238 = figwheel.client.file_reloading.sort_files.call(null,inst_38230);
var state_38327__$1 = state_38327;
var statearr_38334_38417 = state_38327__$1;
(statearr_38334_38417[(2)] = inst_38238);

(statearr_38334_38417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (27))){
var state_38327__$1 = state_38327;
var statearr_38335_38418 = state_38327__$1;
(statearr_38335_38418[(2)] = null);

(statearr_38335_38418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (1))){
var inst_38179 = (state_38327[(13)]);
var inst_38176 = before_jsload.call(null,files);
var inst_38177 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38178 = (function (){return ((function (inst_38179,inst_38176,inst_38177,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38167_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38167_SHARP_);
});
;})(inst_38179,inst_38176,inst_38177,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38179__$1 = cljs.core.filter.call(null,inst_38178,files);
var inst_38180 = cljs.core.not_empty.call(null,inst_38179__$1);
var state_38327__$1 = (function (){var statearr_38336 = state_38327;
(statearr_38336[(14)] = inst_38176);

(statearr_38336[(13)] = inst_38179__$1);

(statearr_38336[(15)] = inst_38177);

return statearr_38336;
})();
if(cljs.core.truth_(inst_38180)){
var statearr_38337_38419 = state_38327__$1;
(statearr_38337_38419[(1)] = (2));

} else {
var statearr_38338_38420 = state_38327__$1;
(statearr_38338_38420[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (24))){
var state_38327__$1 = state_38327;
var statearr_38339_38421 = state_38327__$1;
(statearr_38339_38421[(2)] = null);

(statearr_38339_38421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (39))){
var inst_38280 = (state_38327[(16)]);
var state_38327__$1 = state_38327;
var statearr_38340_38422 = state_38327__$1;
(statearr_38340_38422[(2)] = inst_38280);

(statearr_38340_38422[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (46))){
var inst_38322 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
var statearr_38341_38423 = state_38327__$1;
(statearr_38341_38423[(2)] = inst_38322);

(statearr_38341_38423[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (4))){
var inst_38224 = (state_38327[(2)]);
var inst_38225 = cljs.core.List.EMPTY;
var inst_38226 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38225);
var inst_38227 = (function (){return ((function (inst_38224,inst_38225,inst_38226,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38168_SHARP_){
var and__30071__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38168_SHARP_);
if(cljs.core.truth_(and__30071__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38168_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38168_SHARP_)));
} else {
return and__30071__auto__;
}
});
;})(inst_38224,inst_38225,inst_38226,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38228 = cljs.core.filter.call(null,inst_38227,files);
var inst_38229 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38230 = cljs.core.concat.call(null,inst_38228,inst_38229);
var state_38327__$1 = (function (){var statearr_38342 = state_38327;
(statearr_38342[(17)] = inst_38226);

(statearr_38342[(12)] = inst_38230);

(statearr_38342[(18)] = inst_38224);

return statearr_38342;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38343_38424 = state_38327__$1;
(statearr_38343_38424[(1)] = (16));

} else {
var statearr_38344_38425 = state_38327__$1;
(statearr_38344_38425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (15))){
var inst_38214 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
var statearr_38345_38426 = state_38327__$1;
(statearr_38345_38426[(2)] = inst_38214);

(statearr_38345_38426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (21))){
var inst_38240 = (state_38327[(19)]);
var inst_38240__$1 = (state_38327[(2)]);
var inst_38241 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38240__$1);
var state_38327__$1 = (function (){var statearr_38346 = state_38327;
(statearr_38346[(19)] = inst_38240__$1);

return statearr_38346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38327__$1,(22),inst_38241);
} else {
if((state_val_38328 === (31))){
var inst_38325 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38327__$1,inst_38325);
} else {
if((state_val_38328 === (32))){
var inst_38280 = (state_38327[(16)]);
var inst_38285 = inst_38280.cljs$lang$protocol_mask$partition0$;
var inst_38286 = (inst_38285 & (64));
var inst_38287 = inst_38280.cljs$core$ISeq$;
var inst_38288 = (cljs.core.PROTOCOL_SENTINEL === inst_38287);
var inst_38289 = (inst_38286) || (inst_38288);
var state_38327__$1 = state_38327;
if(cljs.core.truth_(inst_38289)){
var statearr_38347_38427 = state_38327__$1;
(statearr_38347_38427[(1)] = (35));

} else {
var statearr_38348_38428 = state_38327__$1;
(statearr_38348_38428[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (40))){
var inst_38302 = (state_38327[(20)]);
var inst_38301 = (state_38327[(2)]);
var inst_38302__$1 = cljs.core.get.call(null,inst_38301,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38303 = cljs.core.get.call(null,inst_38301,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38304 = cljs.core.not_empty.call(null,inst_38302__$1);
var state_38327__$1 = (function (){var statearr_38349 = state_38327;
(statearr_38349[(20)] = inst_38302__$1);

(statearr_38349[(21)] = inst_38303);

return statearr_38349;
})();
if(cljs.core.truth_(inst_38304)){
var statearr_38350_38429 = state_38327__$1;
(statearr_38350_38429[(1)] = (41));

} else {
var statearr_38351_38430 = state_38327__$1;
(statearr_38351_38430[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (33))){
var state_38327__$1 = state_38327;
var statearr_38352_38431 = state_38327__$1;
(statearr_38352_38431[(2)] = false);

(statearr_38352_38431[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (13))){
var inst_38200 = (state_38327[(22)]);
var inst_38204 = cljs.core.chunk_first.call(null,inst_38200);
var inst_38205 = cljs.core.chunk_rest.call(null,inst_38200);
var inst_38206 = cljs.core.count.call(null,inst_38204);
var inst_38187 = inst_38205;
var inst_38188 = inst_38204;
var inst_38189 = inst_38206;
var inst_38190 = (0);
var state_38327__$1 = (function (){var statearr_38353 = state_38327;
(statearr_38353[(7)] = inst_38190);

(statearr_38353[(8)] = inst_38188);

(statearr_38353[(9)] = inst_38187);

(statearr_38353[(10)] = inst_38189);

return statearr_38353;
})();
var statearr_38354_38432 = state_38327__$1;
(statearr_38354_38432[(2)] = null);

(statearr_38354_38432[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (22))){
var inst_38244 = (state_38327[(23)]);
var inst_38240 = (state_38327[(19)]);
var inst_38243 = (state_38327[(24)]);
var inst_38248 = (state_38327[(25)]);
var inst_38243__$1 = (state_38327[(2)]);
var inst_38244__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38243__$1);
var inst_38245 = (function (){var all_files = inst_38240;
var res_SINGLEQUOTE_ = inst_38243__$1;
var res = inst_38244__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38244,inst_38240,inst_38243,inst_38248,inst_38243__$1,inst_38244__$1,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38169_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38169_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38244,inst_38240,inst_38243,inst_38248,inst_38243__$1,inst_38244__$1,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38246 = cljs.core.filter.call(null,inst_38245,inst_38243__$1);
var inst_38247 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38248__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38247);
var inst_38249 = cljs.core.not_empty.call(null,inst_38248__$1);
var state_38327__$1 = (function (){var statearr_38355 = state_38327;
(statearr_38355[(23)] = inst_38244__$1);

(statearr_38355[(24)] = inst_38243__$1);

(statearr_38355[(25)] = inst_38248__$1);

(statearr_38355[(26)] = inst_38246);

return statearr_38355;
})();
if(cljs.core.truth_(inst_38249)){
var statearr_38356_38433 = state_38327__$1;
(statearr_38356_38433[(1)] = (23));

} else {
var statearr_38357_38434 = state_38327__$1;
(statearr_38357_38434[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (36))){
var state_38327__$1 = state_38327;
var statearr_38358_38435 = state_38327__$1;
(statearr_38358_38435[(2)] = false);

(statearr_38358_38435[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (41))){
var inst_38302 = (state_38327[(20)]);
var inst_38306 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38307 = cljs.core.map.call(null,inst_38306,inst_38302);
var inst_38308 = cljs.core.pr_str.call(null,inst_38307);
var inst_38309 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38308)].join('');
var inst_38310 = figwheel.client.utils.log.call(null,inst_38309);
var state_38327__$1 = state_38327;
var statearr_38359_38436 = state_38327__$1;
(statearr_38359_38436[(2)] = inst_38310);

(statearr_38359_38436[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (43))){
var inst_38303 = (state_38327[(21)]);
var inst_38313 = (state_38327[(2)]);
var inst_38314 = cljs.core.not_empty.call(null,inst_38303);
var state_38327__$1 = (function (){var statearr_38360 = state_38327;
(statearr_38360[(27)] = inst_38313);

return statearr_38360;
})();
if(cljs.core.truth_(inst_38314)){
var statearr_38361_38437 = state_38327__$1;
(statearr_38361_38437[(1)] = (44));

} else {
var statearr_38362_38438 = state_38327__$1;
(statearr_38362_38438[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (29))){
var inst_38244 = (state_38327[(23)]);
var inst_38280 = (state_38327[(16)]);
var inst_38240 = (state_38327[(19)]);
var inst_38243 = (state_38327[(24)]);
var inst_38248 = (state_38327[(25)]);
var inst_38246 = (state_38327[(26)]);
var inst_38276 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38279 = (function (){var all_files = inst_38240;
var res_SINGLEQUOTE_ = inst_38243;
var res = inst_38244;
var files_not_loaded = inst_38246;
var dependencies_that_loaded = inst_38248;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38244,inst_38280,inst_38240,inst_38243,inst_38248,inst_38246,inst_38276,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38278){
var map__38363 = p__38278;
var map__38363__$1 = ((((!((map__38363 == null)))?((((map__38363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38363):map__38363);
var namespace = cljs.core.get.call(null,map__38363__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38244,inst_38280,inst_38240,inst_38243,inst_38248,inst_38246,inst_38276,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38280__$1 = cljs.core.group_by.call(null,inst_38279,inst_38246);
var inst_38282 = (inst_38280__$1 == null);
var inst_38283 = cljs.core.not.call(null,inst_38282);
var state_38327__$1 = (function (){var statearr_38365 = state_38327;
(statearr_38365[(28)] = inst_38276);

(statearr_38365[(16)] = inst_38280__$1);

return statearr_38365;
})();
if(inst_38283){
var statearr_38366_38439 = state_38327__$1;
(statearr_38366_38439[(1)] = (32));

} else {
var statearr_38367_38440 = state_38327__$1;
(statearr_38367_38440[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (44))){
var inst_38303 = (state_38327[(21)]);
var inst_38316 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38303);
var inst_38317 = cljs.core.pr_str.call(null,inst_38316);
var inst_38318 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38317)].join('');
var inst_38319 = figwheel.client.utils.log.call(null,inst_38318);
var state_38327__$1 = state_38327;
var statearr_38368_38441 = state_38327__$1;
(statearr_38368_38441[(2)] = inst_38319);

(statearr_38368_38441[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (6))){
var inst_38221 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
var statearr_38369_38442 = state_38327__$1;
(statearr_38369_38442[(2)] = inst_38221);

(statearr_38369_38442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (28))){
var inst_38246 = (state_38327[(26)]);
var inst_38273 = (state_38327[(2)]);
var inst_38274 = cljs.core.not_empty.call(null,inst_38246);
var state_38327__$1 = (function (){var statearr_38370 = state_38327;
(statearr_38370[(29)] = inst_38273);

return statearr_38370;
})();
if(cljs.core.truth_(inst_38274)){
var statearr_38371_38443 = state_38327__$1;
(statearr_38371_38443[(1)] = (29));

} else {
var statearr_38372_38444 = state_38327__$1;
(statearr_38372_38444[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (25))){
var inst_38244 = (state_38327[(23)]);
var inst_38260 = (state_38327[(2)]);
var inst_38261 = cljs.core.not_empty.call(null,inst_38244);
var state_38327__$1 = (function (){var statearr_38373 = state_38327;
(statearr_38373[(30)] = inst_38260);

return statearr_38373;
})();
if(cljs.core.truth_(inst_38261)){
var statearr_38374_38445 = state_38327__$1;
(statearr_38374_38445[(1)] = (26));

} else {
var statearr_38375_38446 = state_38327__$1;
(statearr_38375_38446[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (34))){
var inst_38296 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
if(cljs.core.truth_(inst_38296)){
var statearr_38376_38447 = state_38327__$1;
(statearr_38376_38447[(1)] = (38));

} else {
var statearr_38377_38448 = state_38327__$1;
(statearr_38377_38448[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (17))){
var state_38327__$1 = state_38327;
var statearr_38378_38449 = state_38327__$1;
(statearr_38378_38449[(2)] = recompile_dependents);

(statearr_38378_38449[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (3))){
var state_38327__$1 = state_38327;
var statearr_38379_38450 = state_38327__$1;
(statearr_38379_38450[(2)] = null);

(statearr_38379_38450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (12))){
var inst_38217 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
var statearr_38380_38451 = state_38327__$1;
(statearr_38380_38451[(2)] = inst_38217);

(statearr_38380_38451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (2))){
var inst_38179 = (state_38327[(13)]);
var inst_38186 = cljs.core.seq.call(null,inst_38179);
var inst_38187 = inst_38186;
var inst_38188 = null;
var inst_38189 = (0);
var inst_38190 = (0);
var state_38327__$1 = (function (){var statearr_38381 = state_38327;
(statearr_38381[(7)] = inst_38190);

(statearr_38381[(8)] = inst_38188);

(statearr_38381[(9)] = inst_38187);

(statearr_38381[(10)] = inst_38189);

return statearr_38381;
})();
var statearr_38382_38452 = state_38327__$1;
(statearr_38382_38452[(2)] = null);

(statearr_38382_38452[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (23))){
var inst_38244 = (state_38327[(23)]);
var inst_38240 = (state_38327[(19)]);
var inst_38243 = (state_38327[(24)]);
var inst_38248 = (state_38327[(25)]);
var inst_38246 = (state_38327[(26)]);
var inst_38251 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38253 = (function (){var all_files = inst_38240;
var res_SINGLEQUOTE_ = inst_38243;
var res = inst_38244;
var files_not_loaded = inst_38246;
var dependencies_that_loaded = inst_38248;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38244,inst_38240,inst_38243,inst_38248,inst_38246,inst_38251,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38252){
var map__38383 = p__38252;
var map__38383__$1 = ((((!((map__38383 == null)))?((((map__38383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38383):map__38383);
var request_url = cljs.core.get.call(null,map__38383__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38244,inst_38240,inst_38243,inst_38248,inst_38246,inst_38251,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38254 = cljs.core.reverse.call(null,inst_38248);
var inst_38255 = cljs.core.map.call(null,inst_38253,inst_38254);
var inst_38256 = cljs.core.pr_str.call(null,inst_38255);
var inst_38257 = figwheel.client.utils.log.call(null,inst_38256);
var state_38327__$1 = (function (){var statearr_38385 = state_38327;
(statearr_38385[(31)] = inst_38251);

return statearr_38385;
})();
var statearr_38386_38453 = state_38327__$1;
(statearr_38386_38453[(2)] = inst_38257);

(statearr_38386_38453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (35))){
var state_38327__$1 = state_38327;
var statearr_38387_38454 = state_38327__$1;
(statearr_38387_38454[(2)] = true);

(statearr_38387_38454[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (19))){
var inst_38230 = (state_38327[(12)]);
var inst_38236 = figwheel.client.file_reloading.expand_files.call(null,inst_38230);
var state_38327__$1 = state_38327;
var statearr_38388_38455 = state_38327__$1;
(statearr_38388_38455[(2)] = inst_38236);

(statearr_38388_38455[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (11))){
var state_38327__$1 = state_38327;
var statearr_38389_38456 = state_38327__$1;
(statearr_38389_38456[(2)] = null);

(statearr_38389_38456[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (9))){
var inst_38219 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
var statearr_38390_38457 = state_38327__$1;
(statearr_38390_38457[(2)] = inst_38219);

(statearr_38390_38457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (5))){
var inst_38190 = (state_38327[(7)]);
var inst_38189 = (state_38327[(10)]);
var inst_38192 = (inst_38190 < inst_38189);
var inst_38193 = inst_38192;
var state_38327__$1 = state_38327;
if(cljs.core.truth_(inst_38193)){
var statearr_38391_38458 = state_38327__$1;
(statearr_38391_38458[(1)] = (7));

} else {
var statearr_38392_38459 = state_38327__$1;
(statearr_38392_38459[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (14))){
var inst_38200 = (state_38327[(22)]);
var inst_38209 = cljs.core.first.call(null,inst_38200);
var inst_38210 = figwheel.client.file_reloading.eval_body.call(null,inst_38209,opts);
var inst_38211 = cljs.core.next.call(null,inst_38200);
var inst_38187 = inst_38211;
var inst_38188 = null;
var inst_38189 = (0);
var inst_38190 = (0);
var state_38327__$1 = (function (){var statearr_38393 = state_38327;
(statearr_38393[(7)] = inst_38190);

(statearr_38393[(8)] = inst_38188);

(statearr_38393[(9)] = inst_38187);

(statearr_38393[(10)] = inst_38189);

(statearr_38393[(32)] = inst_38210);

return statearr_38393;
})();
var statearr_38394_38460 = state_38327__$1;
(statearr_38394_38460[(2)] = null);

(statearr_38394_38460[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (45))){
var state_38327__$1 = state_38327;
var statearr_38395_38461 = state_38327__$1;
(statearr_38395_38461[(2)] = null);

(statearr_38395_38461[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (26))){
var inst_38244 = (state_38327[(23)]);
var inst_38240 = (state_38327[(19)]);
var inst_38243 = (state_38327[(24)]);
var inst_38248 = (state_38327[(25)]);
var inst_38246 = (state_38327[(26)]);
var inst_38263 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38265 = (function (){var all_files = inst_38240;
var res_SINGLEQUOTE_ = inst_38243;
var res = inst_38244;
var files_not_loaded = inst_38246;
var dependencies_that_loaded = inst_38248;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38244,inst_38240,inst_38243,inst_38248,inst_38246,inst_38263,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38264){
var map__38396 = p__38264;
var map__38396__$1 = ((((!((map__38396 == null)))?((((map__38396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38396):map__38396);
var namespace = cljs.core.get.call(null,map__38396__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38396__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38244,inst_38240,inst_38243,inst_38248,inst_38246,inst_38263,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38266 = cljs.core.map.call(null,inst_38265,inst_38244);
var inst_38267 = cljs.core.pr_str.call(null,inst_38266);
var inst_38268 = figwheel.client.utils.log.call(null,inst_38267);
var inst_38269 = (function (){var all_files = inst_38240;
var res_SINGLEQUOTE_ = inst_38243;
var res = inst_38244;
var files_not_loaded = inst_38246;
var dependencies_that_loaded = inst_38248;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38244,inst_38240,inst_38243,inst_38248,inst_38246,inst_38263,inst_38265,inst_38266,inst_38267,inst_38268,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38244,inst_38240,inst_38243,inst_38248,inst_38246,inst_38263,inst_38265,inst_38266,inst_38267,inst_38268,state_val_38328,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38270 = setTimeout(inst_38269,(10));
var state_38327__$1 = (function (){var statearr_38398 = state_38327;
(statearr_38398[(33)] = inst_38263);

(statearr_38398[(34)] = inst_38268);

return statearr_38398;
})();
var statearr_38399_38462 = state_38327__$1;
(statearr_38399_38462[(2)] = inst_38270);

(statearr_38399_38462[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (16))){
var state_38327__$1 = state_38327;
var statearr_38400_38463 = state_38327__$1;
(statearr_38400_38463[(2)] = reload_dependents);

(statearr_38400_38463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (38))){
var inst_38280 = (state_38327[(16)]);
var inst_38298 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38280);
var state_38327__$1 = state_38327;
var statearr_38401_38464 = state_38327__$1;
(statearr_38401_38464[(2)] = inst_38298);

(statearr_38401_38464[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (30))){
var state_38327__$1 = state_38327;
var statearr_38402_38465 = state_38327__$1;
(statearr_38402_38465[(2)] = null);

(statearr_38402_38465[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (10))){
var inst_38200 = (state_38327[(22)]);
var inst_38202 = cljs.core.chunked_seq_QMARK_.call(null,inst_38200);
var state_38327__$1 = state_38327;
if(inst_38202){
var statearr_38403_38466 = state_38327__$1;
(statearr_38403_38466[(1)] = (13));

} else {
var statearr_38404_38467 = state_38327__$1;
(statearr_38404_38467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (18))){
var inst_38234 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
if(cljs.core.truth_(inst_38234)){
var statearr_38405_38468 = state_38327__$1;
(statearr_38405_38468[(1)] = (19));

} else {
var statearr_38406_38469 = state_38327__$1;
(statearr_38406_38469[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (42))){
var state_38327__$1 = state_38327;
var statearr_38407_38470 = state_38327__$1;
(statearr_38407_38470[(2)] = null);

(statearr_38407_38470[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (37))){
var inst_38293 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
var statearr_38408_38471 = state_38327__$1;
(statearr_38408_38471[(2)] = inst_38293);

(statearr_38408_38471[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (8))){
var inst_38187 = (state_38327[(9)]);
var inst_38200 = (state_38327[(22)]);
var inst_38200__$1 = cljs.core.seq.call(null,inst_38187);
var state_38327__$1 = (function (){var statearr_38409 = state_38327;
(statearr_38409[(22)] = inst_38200__$1);

return statearr_38409;
})();
if(inst_38200__$1){
var statearr_38410_38472 = state_38327__$1;
(statearr_38410_38472[(1)] = (10));

} else {
var statearr_38411_38473 = state_38327__$1;
(statearr_38411_38473[(1)] = (11));

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
});})(c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34487__auto__,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto____0 = (function (){
var statearr_38412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38412[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto__);

(statearr_38412[(1)] = (1));

return statearr_38412;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto____1 = (function (state_38327){
while(true){
var ret_value__34489__auto__ = (function (){try{while(true){
var result__34490__auto__ = switch__34487__auto__.call(null,state_38327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34490__auto__;
}
break;
}
}catch (e38413){if((e38413 instanceof Object)){
var ex__34491__auto__ = e38413;
var statearr_38414_38474 = state_38327;
(statearr_38414_38474[(5)] = ex__34491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38475 = state_38327;
state_38327 = G__38475;
continue;
} else {
return ret_value__34489__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto__ = function(state_38327){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto____1.call(this,state_38327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34488__auto__;
})()
;})(switch__34487__auto__,c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34579__auto__ = (function (){var statearr_38415 = f__34578__auto__.call(null);
(statearr_38415[(6)] = c__34577__auto__);

return statearr_38415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34579__auto__);
});})(c__34577__auto__,map__38172,map__38172__$1,opts,before_jsload,on_jsload,reload_dependents,map__38173,map__38173__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34577__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38478,link){
var map__38479 = p__38478;
var map__38479__$1 = ((((!((map__38479 == null)))?((((map__38479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38479):map__38479);
var file = cljs.core.get.call(null,map__38479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__38479,map__38479__$1,file){
return (function (p1__38476_SHARP_,p2__38477_SHARP_){
if(cljs.core._EQ_.call(null,p1__38476_SHARP_,p2__38477_SHARP_)){
return p1__38476_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__38479,map__38479__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38482){
var map__38483 = p__38482;
var map__38483__$1 = ((((!((map__38483 == null)))?((((map__38483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38483):map__38483);
var match_length = cljs.core.get.call(null,map__38483__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38483__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38481_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38481_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38485_SHARP_,p2__38486_SHARP_){
return cljs.core.assoc.call(null,p1__38485_SHARP_,cljs.core.get.call(null,p2__38486_SHARP_,key),p2__38486_SHARP_);
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
var loaded_f_datas_38487 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38487);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38487);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38488,p__38489){
var map__38490 = p__38488;
var map__38490__$1 = ((((!((map__38490 == null)))?((((map__38490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38490):map__38490);
var on_cssload = cljs.core.get.call(null,map__38490__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38491 = p__38489;
var map__38491__$1 = ((((!((map__38491 == null)))?((((map__38491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38491):map__38491);
var files_msg = map__38491__$1;
var files = cljs.core.get.call(null,map__38491__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1526331145263
