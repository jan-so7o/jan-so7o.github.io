import{S as s,i as t,s as a,e,t as r,c as o,a as l,b as n,d as c,f as p,g as h,h as f,j as i,k as u,l as g,n as m,m as d,o as v,p as $,q as j,r as E,u as q,v as w}from"./client.2fa3da7f.js";import{f as k}from"./posts.e9bd2537.js";function x(s,t,a){const e=s.slice();return e[1]=t[a],e}function y(s){let t,a,u,g,m=s[1]+"";return{c(){t=e("a"),a=r(m),this.h()},l(s){t=o(s,"A",{class:!0,href:!0});var e=l(t);a=n(e,m),e.forEach(c),this.h()},h(){p(t,"class",u="post-category post-category-"+s[1]+" svelte-aoq1jw"),p(t,"href",g="/tags/"+s[1])},m(s,e){h(s,t,e),f(t,a)},p(s,e){1&e&&m!==(m=s[1]+"")&&i(a,m),1&e&&u!==(u="post-category post-category-"+s[1]+" svelte-aoq1jw")&&p(t,"class",u),1&e&&g!==(g="/tags/"+s[1])&&p(t,"href",g)},d(s){s&&c(t)}}}function A(s){let t,a,v,$,j,E,q,w,k,A,H,L,T=s[0].title+"",b=s[0].datestr+"",D=s[0].html+"",I=s[0].tags,M=[];for(let t=0;t<I.length;t+=1)M[t]=y(x(s,I,t));return{c(){t=e("article"),a=e("header"),v=e("h2"),$=e("a"),j=r(T),q=u(),w=e("p"),k=r(b),A=u();for(let s=0;s<M.length;s+=1)M[s].c();H=u(),L=e("div"),this.h()},l(s){t=o(s,"ARTICLE",{class:!0});var e=l(t);a=o(e,"HEADER",{class:!0});var r=l(a);v=o(r,"H2",{class:!0});var p=l(v);$=o(p,"A",{href:!0,class:!0});var h=l($);j=n(h,T),h.forEach(c),p.forEach(c),q=g(r),w=o(r,"P",{class:!0});var f=l(w);k=n(f,b),A=g(f);for(let s=0;s<M.length;s+=1)M[s].l(f);f.forEach(c),r.forEach(c),H=g(e),L=o(e,"DIV",{class:!0}),l(L).forEach(c),e.forEach(c),this.h()},h(){p($,"href",E="/posts/"+s[0].permalink),p($,"class","svelte-aoq1jw"),p(v,"class","post-title svelte-aoq1jw"),p(w,"class","post-meta svelte-aoq1jw"),p(a,"class","post-header"),p(L,"class","post-description svelte-aoq1jw"),p(t,"class","post svelte-aoq1jw")},m(s,e){h(s,t,e),f(t,a),f(a,v),f(v,$),f($,j),f(a,q),f(a,w),f(w,k),f(w,A);for(let s=0;s<M.length;s+=1)M[s].m(w,null);f(t,H),f(t,L),L.innerHTML=D},p(s,[t]){if(1&t&&T!==(T=s[0].title+"")&&i(j,T),1&t&&E!==(E="/posts/"+s[0].permalink)&&p($,"href",E),1&t&&b!==(b=s[0].datestr+"")&&i(k,b),1&t){let a;for(I=s[0].tags,a=0;a<I.length;a+=1){const e=x(s,I,a);M[a]?M[a].p(e,t):(M[a]=y(e),M[a].c(),M[a].m(w,null))}for(;a<M.length;a+=1)M[a].d(1);M.length=I.length}1&t&&D!==(D=s[0].html+"")&&(L.innerHTML=D)},i:m,o:m,d(s){s&&c(t),d(M,s)}}}function H(s,t,a){let{post:e}=t;return s.$$set=s=>{"post"in s&&a(0,e=s.post)},[e]}class L extends s{constructor(s){super(),t(this,s,H,A,a,{post:0})}}function T(s){let t,a;return t=new L({props:{post:s[0]}}),{c(){v(t.$$.fragment)},l(s){$(t.$$.fragment,s)},m(s,e){j(t,s,e),a=!0},p(s,[a]){const e={};1&a&&(e.post=s[0]),t.$set(e)},i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){q(t.$$.fragment,s),a=!1},d(s){w(t,s)}}}function b(s){return{post:k(s.params.permalink)}}function D(s,t,a){let{post:e}=t;return s.$$set=s=>{"post"in s&&a(0,e=s.post)},[e]}export default class extends s{constructor(s){super(),t(this,s,D,T,a,{post:0})}}export{b as preload};