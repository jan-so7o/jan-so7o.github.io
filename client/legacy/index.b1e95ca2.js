import{_ as t,a as n,b as r,c as e,i as o,d as s,S as c,s as a,e as f,t as u,g as i,h as l,j as h,k as p,m as v,n as g,o as d,z as m,f as y,q as R,l as E,r as b,p as j,u as x}from"./client.f7e4884e.js";function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,s=n(t);if(e){var c=n(this).constructor;o=Reflect.construct(s,arguments,c)}else o=s.apply(this,arguments);return r(this,o)}}function D(t,n,r){var e=t.slice();return e[1]=n[r],e}function L(t){var n,r,e,o,s=t[1].title+"";return{c:function(){n=f("li"),r=f("a"),e=u(s),this.h()},l:function(t){n=i(t,"LI",{});var o=l(n);r=i(o,"A",{rel:!0,href:!0});var c=l(r);e=h(c,s),c.forEach(p),o.forEach(p),this.h()},h:function(){v(r,"rel","prefetch"),v(r,"href",o="blog/"+t[1].slug)},m:function(t,o){g(t,n,o),d(n,r),d(r,e)},p:function(t,n){1&n&&s!==(s=t[1].title+"")&&m(e,s),1&n&&o!==(o="blog/"+t[1].slug)&&v(r,"href",o)},d:function(t){t&&p(n)}}}function S(t){for(var n,r,e,o,s,c=t[0],a=[],m=0;m<c.length;m+=1)a[m]=L(D(t,c,m));return{c:function(){n=y(),r=f("h1"),e=u("Recent posts"),o=y(),s=f("ul");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){R('[data-svelte="svelte-hfp9t8"]',document.head).forEach(p),n=E(t),r=i(t,"H1",{});var c=l(r);e=h(c,"Recent posts"),c.forEach(p),o=E(t),s=i(t,"UL",{class:!0});for(var f=l(s),u=0;u<a.length;u+=1)a[u].l(f);f.forEach(p),this.h()},h:function(){document.title="Blog",v(s,"class","svelte-1frg2tf")},m:function(t,c){g(t,n,c),g(t,r,c),d(r,e),g(t,o,c),g(t,s,c);for(var f=0;f<a.length;f+=1)a[f].m(s,null)},p:function(t,n){var r=b(n,1)[0];if(1&r){var e;for(c=t[0],e=0;e<c.length;e+=1){var o=D(t,c,e);a[e]?a[e].p(o,r):(a[e]=L(o),a[e].c(),a[e].m(s,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=c.length}},i:j,o:j,d:function(t){t&&p(n),t&&p(r),t&&p(o),t&&p(s),x(a,t)}}}function $(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function k(t,n,r){var e=n.posts;return t.$$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var z=function(n){t(f,c);var r=q(f);function f(t){var n;return e(this,f),n=r.call(this),o(s(n),t,k,S,a,{posts:0}),n}return f}();export default z;export{$ as preload};
