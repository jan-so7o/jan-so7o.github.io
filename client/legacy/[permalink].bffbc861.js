import{_ as t,a as n,b as r,c as a,i as s,s as o,d as e,S as c,e as f,t as i,f as u,g as l,h as p,j as h,k as v,l as g,m,n as d,o as y,p as $,q as R,r as j,u as E,y as q,z as w,A as D,B as A,C as b,D as k}from"./client.1bb9dfa4.js";import{f as x}from"./posts.638dba07.js";function H(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=n(t);if(a){var e=n(this).constructor;s=Reflect.construct(o,arguments,e)}else s=o.apply(this,arguments);return r(this,s)}}function L(t,n,r){var a=t.slice();return a[1]=n[r],a}function P(t){var n,r,a,s,o=t[1]+"";return{c:function(){n=f("a"),r=i(o),this.h()},l:function(t){n=u(t,"A",{class:!0,href:!0});var a=l(n);r=p(a,o),a.forEach(h),this.h()},h:function(){v(n,"class",a="post-category post-category-"+t[1]+" svelte-aoq1jw"),v(n,"href",s="/tags/".concat(t[1]))},m:function(t,a){g(t,n,a),m(n,r)},p:function(t,e){1&e&&o!==(o=t[1]+"")&&d(r,o),1&e&&a!==(a="post-category post-category-"+t[1]+" svelte-aoq1jw")&&v(n,"class",a),1&e&&s!==(s="/tags/".concat(t[1]))&&v(n,"href",s)},d:function(t){t&&h(n)}}}function S(t){for(var n,r,a,s,o,e,c,q,w,D,A,b,k=t[0].title+"",x=t[0].datestr+"",H=t[0].html+"",S=t[0].tags,T=[],C=0;C<S.length;C+=1)T[C]=P(L(t,S,C));return{c:function(){n=f("article"),r=f("header"),a=f("h2"),s=f("a"),o=i(k),c=y(),q=f("p"),w=i(x),D=y();for(var t=0;t<T.length;t+=1)T[t].c();A=y(),b=f("div"),this.h()},l:function(t){n=u(t,"ARTICLE",{class:!0});var e=l(n);r=u(e,"HEADER",{class:!0});var f=l(r);a=u(f,"H2",{class:!0});var i=l(a);s=u(i,"A",{href:!0,class:!0});var v=l(s);o=p(v,k),v.forEach(h),i.forEach(h),c=$(f),q=u(f,"P",{class:!0});var g=l(q);w=p(g,x),D=$(g);for(var m=0;m<T.length;m+=1)T[m].l(g);g.forEach(h),f.forEach(h),A=$(e),b=u(e,"DIV",{class:!0}),l(b).forEach(h),e.forEach(h),this.h()},h:function(){v(s,"href",e="/posts/".concat(t[0].permalink)),v(s,"class","svelte-aoq1jw"),v(a,"class","post-title svelte-aoq1jw"),v(q,"class","post-meta svelte-aoq1jw"),v(r,"class","post-header"),v(b,"class","post-description svelte-aoq1jw"),v(n,"class","post svelte-aoq1jw")},m:function(t,e){g(t,n,e),m(n,r),m(r,a),m(a,s),m(s,o),m(r,c),m(r,q),m(q,w),m(q,D);for(var f=0;f<T.length;f+=1)T[f].m(q,null);m(n,A),m(n,b),b.innerHTML=H},p:function(t,n){var r=R(n,1)[0];if(1&r&&k!==(k=t[0].title+"")&&d(o,k),1&r&&e!==(e="/posts/".concat(t[0].permalink))&&v(s,"href",e),1&r&&x!==(x=t[0].datestr+"")&&d(w,x),1&r){var a;for(S=t[0].tags,a=0;a<S.length;a+=1){var c=L(t,S,a);T[a]?T[a].p(c,r):(T[a]=P(c),T[a].c(),T[a].m(q,null))}for(;a<T.length;a+=1)T[a].d(1);T.length=S.length}1&r&&H!==(H=t[0].html+"")&&(b.innerHTML=H)},i:j,o:j,d:function(t){t&&h(n),E(T,t)}}}function T(t,n,r){var a=n.post;return t.$$set=function(t){"post"in t&&r(0,a=t.post)},[a]}var C=function(n){t(f,c);var r=H(f);function f(t){var n;return a(this,f),n=r.call(this),s(e(n),t,T,S,o,{post:0}),n}return f}();function I(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=n(t);if(a){var e=n(this).constructor;s=Reflect.construct(o,arguments,e)}else s=o.apply(this,arguments);return r(this,s)}}function M(t){var n,r;return n=new C({props:{post:t[0]}}),{c:function(){q(n.$$.fragment)},l:function(t){w(n.$$.fragment,t)},m:function(t,a){D(n,t,a),r=!0},p:function(t,r){var a={};1&R(r,1)[0]&&(a.post=t[0]),n.$set(a)},i:function(t){r||(A(n.$$.fragment,t),r=!0)},o:function(t){b(n.$$.fragment,t),r=!1},d:function(t){k(n,t)}}}function z(t){return{post:x(t.params.permalink)}}function B(t,n,r){var a=n.post;return t.$$set=function(t){"post"in t&&r(0,a=t.post)},[a]}var V=function(n){t(f,c);var r=I(f);function f(t){var n;return a(this,f),n=r.call(this),s(e(n),t,B,M,o,{post:0}),n}return f}();export default V;export{z as preload};
