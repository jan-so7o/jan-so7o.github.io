import{S as t,i as s,s as e,e as r,t as a,c as l,a as n,b as o,d as h,f as c,g as f,h as p,j as i,k as u,x as g,l as d,n as m,m as v}from"./client.48e3afaf.js";function E(t,s,e){const r=t.slice();return r[1]=s[e],r}function j(t){let s,e,u,g,d=t[1].title+"";return{c(){s=r("li"),e=r("a"),u=a(d),this.h()},l(t){s=l(t,"LI",{});var r=n(s);e=l(r,"A",{rel:!0,href:!0});var a=n(e);u=o(a,d),a.forEach(h),r.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="sapper/"+t[1].slug)},m(t,r){f(t,s,r),p(s,e),p(e,u)},p(t,s){1&s&&d!==(d=t[1].title+"")&&i(u,d),1&s&&g!==(g="sapper/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function x(t){let s,e,i,x,L,R=t[0],$=[];for(let s=0;s<R.length;s+=1)$[s]=j(E(t,R,s));return{c(){s=u(),e=r("h1"),i=a("Recent posts"),x=u(),L=r("ul");for(let t=0;t<$.length;t+=1)$[t].c();this.h()},l(t){g('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=l(t,"H1",{});var r=n(e);i=o(r,"Recent posts"),r.forEach(h),x=d(t),L=l(t,"UL",{class:!0});var a=n(L);for(let t=0;t<$.length;t+=1)$[t].l(a);a.forEach(h),this.h()},h(){document.title="Blog",c(L,"class","svelte-1frg2tf")},m(t,r){f(t,s,r),f(t,e,r),p(e,i),f(t,x,r),f(t,L,r);for(let t=0;t<$.length;t+=1)$[t].m(L,null)},p(t,[s]){if(1&s){let e;for(R=t[0],e=0;e<R.length;e+=1){const r=E(t,R,e);$[e]?$[e].p(r,s):($[e]=j(r),$[e].c(),$[e].m(L,null))}for(;e<$.length;e+=1)$[e].d(1);$.length=R.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(x),t&&h(L),v($,t)}}}function L({params:t,query:s}){return this.fetch("sapper.json").then(t=>t.json()).then(t=>({posts:t}))}function R(t,s,e){let{posts:r}=s;return t.$$set=t=>{"posts"in t&&e(0,r=t.posts)},[r]}export default class extends t{constructor(t){super(),s(this,t,R,x,e,{posts:0})}}export{L as preload};
