import{S as t,i as s,s as a,o as e,p as o,q as n,r,u as l,v as f,e as c,t as i,k as p,w as g,c as h,a as m,b as u,d as $,l as d,f as j,g as b,h as v,j as x,y as w,m as A,z as k}from"./client.2fa3da7f.js";import{A as q}from"./ArticlePost.63cb5a09.js";import{a as y}from"./posts.e9bd2537.js";function z(t,s,a){const e=t.slice();return e[2]=s[a],e}function B(t){let s,a;return s=new q({props:{post:t[2]}}),{c(){e(s.$$.fragment)},l(t){o(s.$$.fragment,t)},m(t,e){n(s,t,e),a=!0},p(t,a){const e={};1&a&&(e.post=t[2]),s.$set(e)},i(t){a||(r(s.$$.fragment,t),a=!0)},o(t){l(s.$$.fragment,t),a=!1},d(t){f(s,t)}}}function E(t){let s,a,e,o,n,f,q=t[0],y=[];for(let s=0;s<q.length;s+=1)y[s]=B(z(t,q,s));const E=t=>l(y[t],1,1,()=>{y[t]=null});return{c(){s=c("h1"),a=i("#"),e=i(t[1]),o=p();for(let t=0;t<y.length;t+=1)y[t].c();n=g(),this.h()},l(r){s=h(r,"H1",{class:!0});var l=m(s);a=u(l,"#"),e=u(l,t[1]),l.forEach($),o=d(r);for(let t=0;t<y.length;t+=1)y[t].l(r);n=g(),this.h()},h(){j(s,"class","svelte-3sctc")},m(t,r){b(t,s,r),v(s,a),v(s,e),b(t,o,r);for(let s=0;s<y.length;s+=1)y[s].m(t,r);b(t,n,r),f=!0},p(t,[s]){if((!f||2&s)&&x(e,t[1]),1&s){let a;for(q=t[0],a=0;a<q.length;a+=1){const e=z(t,q,a);y[a]?(y[a].p(e,s),r(y[a],1)):(y[a]=B(e),y[a].c(),r(y[a],1),y[a].m(n.parentNode,n))}for(k(),a=q.length;a<y.length;a+=1)E(a);w()}},i(t){if(!f){for(let t=0;t<q.length;t+=1)r(y[t]);f=!0}},o(t){y=y.filter(Boolean);for(let t=0;t<y.length;t+=1)l(y[t]);f=!1},d(t){t&&$(s),t&&$(o),A(y,t),t&&$(n)}}}function H(t){const s=t.params.tag;return{posts:y(s),tag:s}}function N(t,s,a){let{posts:e}=s,{tag:o}=s;return t.$$set=t=>{"posts"in t&&a(0,e=t.posts),"tag"in t&&a(1,o=t.tag)},[e,o]}export default class extends t{constructor(t){super(),s(this,t,N,E,a,{posts:0,tag:1})}}export{H as preload};