import{S as t,i as s,s as e,e as r,t as l,c as a,b as n,d as o,f as h,h as c,j as f,k as p,o as i,a as u,q as g,g as d,n as m,m as v}from"./client.95d6bff9.js";function E(t,s,e){const r=t.slice();return r[1]=s[e],r}function j(t){let s,e,u,g,d=t[1].title+"";return{c(){s=r("li"),e=r("a"),u=l(d),this.h()},l(t){s=a(t,"LI",{});var r=n(s);e=a(r,"A",{rel:!0,href:!0});var l=n(e);u=o(l,d),l.forEach(h),r.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="sapper/"+t[1].slug)},m(t,r){f(t,s,r),p(s,e),p(e,u)},p(t,s){1&s&&d!==(d=t[1].title+"")&&i(u,d),1&s&&g!==(g="sapper/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function x(t){let s,e,i,x,b,q=t[0],L=[];for(let s=0;s<q.length;s+=1)L[s]=j(E(t,q,s));return{c(){s=u(),e=r("h1"),i=l("Recent posts"),x=u(),b=r("ul");for(let t=0;t<L.length;t+=1)L[t].c();this.h()},l(t){g('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=a(t,"H1",{});var r=n(e);i=o(r,"Recent posts"),r.forEach(h),x=d(t),b=a(t,"UL",{class:!0});var l=n(b);for(let t=0;t<L.length;t+=1)L[t].l(l);l.forEach(h),this.h()},h(){document.title="Blog",c(b,"class","svelte-1frg2tf")},m(t,r){f(t,s,r),f(t,e,r),p(e,i),f(t,x,r),f(t,b,r);for(let t=0;t<L.length;t+=1)L[t].m(b,null)},p(t,[s]){if(1&s){let e;for(q=t[0],e=0;e<q.length;e+=1){const r=E(t,q,e);L[e]?L[e].p(r,s):(L[e]=j(r),L[e].c(),L[e].m(b,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=q.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(x),t&&h(b),v(L,t)}}}function b({params:t,query:s}){return this.fetch("sapper.json").then(t=>t.json()).then(t=>({posts:t}))}function q(t,s,e){let{posts:r}=s;return t.$$set=t=>{"posts"in t&&e(0,r=t.posts)},[r]}export default class extends t{constructor(t){super(),s(this,t,q,x,e,{posts:0})}}export{b as preload};
