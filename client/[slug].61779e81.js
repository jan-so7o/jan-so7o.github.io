import{S as t,i as s,s as a,k as e,e as n,t as o,x as i,d as r,l as c,c as l,a as u,b as h,f as p,g as f,h as d,j as m,n as v}from"./client.5078c40b.js";function x(t){let s,a,x,g,j,y,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),x=n("h1"),g=o(E),j=e(),y=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),x=l(t,"H1",{});var s=u(x);g=h(s,E),s.forEach(r),j=c(t),y=l(t,"DIV",{class:!0}),u(y).forEach(r),this.h()},h(){p(y,"class","content svelte-gnxal1")},m(t,s){f(t,a,s),f(t,x,s),d(x,g),f(t,j,s),f(t,y,s),y.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&m(g,E),1&a&&H!==(H=t[0].html+"")&&(y.innerHTML=H)},i:v,o:v,d(t){t&&r(a),t&&r(x),t&&r(j),t&&r(y)}}}async function g({params:t,query:s}){const a=await this.fetch(`sapper/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,x,a,{post:0})}}export{g as preload};
