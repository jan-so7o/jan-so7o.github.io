import{_ as t,a as n,b as r,c as o,i as a,s as e,d as f,S as c,y as s,z as i,A as u,r as l,B as h,C as v,D as p,o as m,E as g,F as d,j as $,p as y,l as R,q as b,G as j,u as A,H as D}from"./client.1bb9dfa4.js";import{A as E}from"./ArticlePost.654ff9f1.js";import{p as S}from"./posts.638dba07.js";function q(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,e=n(t);if(o){var f=n(this).constructor;a=Reflect.construct(e,arguments,f)}else a=e.apply(this,arguments);return r(this,a)}}function x(t,n,r){var o=t.slice();return o[0]=n[r],o}function B(t){var n,r;return n=new E({props:{post:t[0]}}),{c:function(){s(n.$$.fragment)},l:function(t){i(n.$$.fragment,t)},m:function(t,o){u(n,t,o),r=!0},p:l,i:function(t){r||(h(n.$$.fragment,t),r=!0)},o:function(t){v(n.$$.fragment,t),r=!1},d:function(t){p(n,t)}}}function P(t){for(var n,r,o,a=S,e=[],f=0;f<a.length;f+=1)e[f]=B(x(t,a,f));var c=function(t){return v(e[t],1,1,(function(){e[t]=null}))};return{c:function(){n=m();for(var t=0;t<e.length;t+=1)e[t].c();r=g(),this.h()},l:function(t){d('[data-svelte="svelte-8qevcv"]',document.head).forEach($),n=y(t);for(var o=0;o<e.length;o+=1)e[o].l(t);r=g(),this.h()},h:function(){document.title="#ITME Jan Solo!"},m:function(t,a){R(t,n,a);for(var f=0;f<e.length;f+=1)e[f].m(t,a);R(t,r,a),o=!0},p:function(t,n){var o=b(n,1)[0];if(0&o){var f;for(a=S,f=0;f<a.length;f+=1){var s=x(t,a,f);e[f]?(e[f].p(s,o),h(e[f],1)):(e[f]=B(s),e[f].c(),h(e[f],1),e[f].m(r.parentNode,r))}for(D(),f=a.length;f<e.length;f+=1)c(f);j()}},i:function(t){if(!o){for(var n=0;n<a.length;n+=1)h(e[n]);o=!0}},o:function(t){e=e.filter(Boolean);for(var n=0;n<e.length;n+=1)v(e[n]);o=!1},d:function(t){t&&$(n),A(e,t),t&&$(r)}}}var w=function(n){t(s,c);var r=q(s);function s(t){var n;return o(this,s),n=r.call(this),a(f(n),t,null,P,e,{}),n}return s}();export default w;