import{b as t,d as n,e as r,f as s,i as a,s as o,g as e,S as c,h as i,t as u,j as f,v as l,k as p,l as h,m,n as v,o as d,H as y,q as R,r as x,x as b,z as j,u as g}from"./client.280b298b.js";import{f as k}from"./posts.4707ac57.js";function D(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(s){var e=n(this).constructor;a=Reflect.construct(o,arguments,e)}else a=o.apply(this,arguments);return r(this,a)}}function H(t){var n,r,s,a,o,e=t[0].title+"",c=t[0].html+"";return{c:function(){n=i("h1"),r=u(e),s=f(),o=l(),this.h()},l:function(t){n=p(t,"H1",{});var a=h(n);r=m(a,e),a.forEach(v),s=d(t),o=l(),this.h()},h:function(){a=new y(o)},m:function(t,e){R(t,n,e),x(n,r),R(t,s,e),a.m(c,t,e),R(t,o,e)},p:function(t,n){var s=b(n,1)[0];1&s&&e!==(e=t[0].title+"")&&j(r,e),1&s&&c!==(c=t[0].html+"")&&a.p(c)},i:g,o:g,d:function(t){t&&v(n),t&&v(s),t&&v(o),t&&a.d()}}}function S(t){return{post:k(t.params.permalink)}}function $(t,n,r){var s=n.post;return t.$$set=function(t){"post"in t&&r(0,s=t.post)},[s]}var q=function(n){t(i,c);var r=D(i);function i(t){var n;return s(this,i),n=r.call(this),a(e(n),t,$,H,o,{post:0}),n}return i}();export default q;export{S as preload};
