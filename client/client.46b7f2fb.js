function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function i(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=c(e,n,r,a);t.p(s,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return b(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let x;function w(t){x=t}function j(){if(!x)throw new Error("Function called outside component initialization");return x}const A=[],P=[],R=[],L=[],C=Promise.resolve();let k=!1;function N(t){R.push(t)}let O=!1;const q=new Set;function D(){if(!O){O=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];w(e),I(e.$$)}for(A.length=0;P.length;)P.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];q.has(e)||(q.add(e),e())}R.length=0}while(A.length);for(;L.length;)L.pop()();k=!1,O=!1,q.clear()}}function I(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const U=new Set;let H;function V(){H={r:0,c:[],p:H}}function T(){H.r||s(H.c),H=H.p}function J(t,e){t&&t.i&&(U.delete(t),t.i(e))}function B(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),H.c.push(()=>{U.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function K(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function Y(t,e){t&&t.l(e)}function F(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),N(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(N)}function G(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(A.push(t),k||(k=!0,C.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,o,a,c,i,l=[-1]){const u=x;w(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=o?o(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),h&&W(e,t)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=v(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&J(e.$$.fragment),F(e,n.target,n.anchor),D()}w(u)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z=[];function tt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const et={},nt=()=>({});function rt(t){let e,n,r,s,o,a,p,g,E,S,x,w,j,A,P,R,L,C,k,N,O,q,D,I,U;const H=t[1].default,V=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(H,t,t[0],null);return{c(){e=d("div"),n=d("div"),r=d("div"),s=d("h1"),o=h("Jan Solo"),a=m(),p=d("h2"),g=h("Tech musings and tinkering."),E=m(),S=d("nav"),x=d("ul"),w=d("li"),j=d("a"),A=h("Home"),P=m(),R=d("li"),L=d("a"),C=h("About"),k=m(),N=d("div"),O=d("div"),q=d("main"),V&&V.c(),D=m(),I=d("div"),this.h()},l(t){e=y(t,"DIV",{id:!0,class:!0});var c=v(e);n=y(c,"DIV",{class:!0});var i=v(n);r=y(i,"DIV",{class:!0});var l=v(r);s=y(l,"H1",{class:!0});var u=v(s);o=b(u,"Jan Solo"),u.forEach(f),a=_(l),p=y(l,"H2",{class:!0});var d=v(p);g=b(d,"Tech musings and tinkering."),d.forEach(f),E=_(l),S=y(l,"NAV",{class:!0});var h=v(S);x=y(h,"UL",{class:!0});var m=v(x);w=y(m,"LI",{class:!0});var $=v(w);j=y($,"A",{class:!0,href:!0});var U=v(j);A=b(U,"Home"),U.forEach(f),$.forEach(f),P=_(m),R=y(m,"LI",{class:!0});var H=v(R);L=y(H,"A",{class:!0,href:!0});var T=v(L);C=b(T,"About"),T.forEach(f),H.forEach(f),m.forEach(f),h.forEach(f),l.forEach(f),i.forEach(f),k=_(c),N=y(c,"DIV",{class:!0});var J=v(N);O=y(J,"DIV",{style:!0,class:!0});var B=v(O);q=y(B,"MAIN",{class:!0});var K=v(q);V&&V.l(K),K.forEach(f),D=_(B),I=y(B,"DIV",{class:!0}),v(I).forEach(f),B.forEach(f),J.forEach(f),c.forEach(f),this.h()},h(){var t,o,a;$(s,"class","brand-title svelte-2d3nj7"),$(p,"class","brand-tagline svelte-2d3nj7"),$(j,"class","pure-button svelte-2d3nj7"),$(j,"href","/"),$(w,"class","nav-item svelte-2d3nj7"),$(L,"class","pure-button svelte-2d3nj7"),$(L,"href","/about"),$(R,"class","nav-item svelte-2d3nj7"),$(x,"class","nav-list svelte-2d3nj7"),$(S,"class","nav svelte-2d3nj7"),$(r,"class","header svelte-2d3nj7"),$(n,"class","sidebar pure-u-1 pure-u-md-1-4 svelte-2d3nj7"),$(q,"class","svelte-2d3nj7"),$(I,"class","footer svelte-2d3nj7"),t="max-width",o="720px",O.style.setProperty(t,o,a?"important":""),$(O,"class","svelte-2d3nj7"),$(N,"class","content pure-u-1 pure-u-md-3-4 svelte-2d3nj7"),$(e,"id","layout"),$(e,"class","pure-g svelte-2d3nj7")},m(t,c){u(t,e,c),l(e,n),l(n,r),l(r,s),l(s,o),l(r,a),l(r,p),l(p,g),l(r,E),l(r,S),l(S,x),l(x,w),l(w,j),l(j,A),l(x,P),l(x,R),l(R,L),l(L,C),l(e,k),l(e,N),l(N,O),l(O,q),V&&V.m(q,null),l(O,D),l(O,I),U=!0},p(t,[e]){V&&V.p&&1&e&&i(V,H,t,t[0],e,null,null)},i(t){U||(J(V,t),U=!0)},o(t){B(V,t),U=!1},d(t){t&&f(e),V&&V.d(t)}}}function st(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}class ot extends Q{constructor(t){super(),X(this,t,st,rt,a,{})}}function at(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=h(r)},l(t){e=y(t,"PRE",{});var s=v(e);n=b(s,r),s.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function ct(e){let n,r,s,o,a,c,i,p,x,w=e[1].message+"";document.title=n=e[0];let j=e[2]&&e[1].stack&&at(e);return{c(){r=m(),s=d("h1"),o=h(e[0]),a=m(),c=d("p"),i=h(w),p=m(),j&&j.c(),x=g(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),s=y(t,"H1",{class:!0});var n=v(s);o=b(n,e[0]),n.forEach(f),a=_(t),c=y(t,"P",{class:!0});var l=v(c);i=b(l,w),l.forEach(f),p=_(t),j&&j.l(t),x=g(),this.h()},h(){$(s,"class","svelte-8od9u6"),$(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,s,e),l(s,o),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),j&&j.m(t,e),u(t,x,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(o,t[0]),2&e&&w!==(w=t[1].message+"")&&E(i,w),t[2]&&t[1].stack?j?j.p(t,e):(j=at(t),j.c(),j.m(x.parentNode,x)):j&&(j.d(1),j=null)},i:t,o:t,d(t){t&&f(r),t&&f(s),t&&f(a),t&&f(c),t&&f(p),j&&j.d(t),t&&f(x)}}}function it(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class lt extends Q{constructor(t){super(),X(this,t,it,ct,a,{status:0,error:1})}}function ut(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&z(n.$$.fragment),r=g()},l(t){n&&Y(n.$$.fragment,t),r=g()},m(t,e){n&&F(n,t,e),u(t,r,e),s=!0},p(t,e){const s=16&e?K(o,[M(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){V();const t=n;B(t.$$.fragment,1,0,()=>{G(t,1)}),T()}a?(n=new a(c()),z(n.$$.fragment),J(n.$$.fragment,1),F(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&J(n.$$.fragment,t),s=!0)},o(t){n&&B(n.$$.fragment,t),s=!1},d(t){t&&f(r),n&&G(n,t)}}}function ft(t){let e,n;return e=new lt({props:{error:t[0],status:t[1]}}),{c(){z(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function pt(t){let e,n,r,s;const o=[ft,ut],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(V(),B(a[i],1,1,()=>{a[i]=null}),T(),n=a[e],n||(n=a[e]=o[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){s||(J(n),s=!0)},o(t){B(n),s=!1},d(t){a[e].d(t),t&&f(r)}}}function dt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[pt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new ot({props:o}),{c(){z(n.$$.fragment)},l(t){Y(n.$$.fragment,t)},m(t,e){F(n,t,e),r=!0},p(t,[e]){const r=12&e?K(s,[4&e&&{segment:t[2][0]},8&e&&M(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(J(n.$$.fragment,t),r=!0)},o(t){B(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function ht(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,j().$$.after_update.push(u),f=et,p=r,j().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,c,i,r,l]}class mt extends Q{constructor(t){super(),X(this,t,ht,dt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const gt=[/^\/sapper\.json$/,/^\/sapper\/([^\/]+?)\.json$/],$t=[{js:()=>import("./index.97ea2be0.js"),css:["client.46b7f2fb.css","ArticlePost.dac54576.css"]},{js:()=>import("./index.5dda68f5.js"),css:["index.5dda68f5.css","client.46b7f2fb.css"]},{js:()=>import("./[slug].1d5c31bb.js"),css:["[slug].1d5c31bb.css","client.46b7f2fb.css"]},{js:()=>import("./about.d8d8b821.js"),css:["about.d8d8b821.css","client.46b7f2fb.css"]},{js:()=>import("./[permalink].3b894b90.js"),css:["[permalink].3b894b90.css","client.46b7f2fb.css"]},{js:()=>import("./[tag].2e497210.js"),css:["[tag].2e497210.css","client.46b7f2fb.css","ArticlePost.dac54576.css"]}],vt=(yt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/sapper\/?$/,parts:[{i:1}]},{pattern:/^\/sapper\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:yt(t[1])})}]},{pattern:/^\/about\/?$/,parts:[{i:3}]},{pattern:/^\/posts\/([^\/]+?)\/?$/,parts:[null,{i:4,params:t=>({permalink:yt(t[1])})}]},{pattern:/^\/tags\/([^\/]+?)\/?$/,parts:[null,{i:5,params:t=>({tag:yt(t[1])})}]}]);var yt;const bt="undefined"!=typeof __SAPPER__&&__SAPPER__;let _t,Et,St,xt=!1,wt=[],jt="{}";const At={page:function(t){const e=tt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:tt(null),session:tt(bt&&bt.session)};let Pt,Rt;At.session.subscribe(async t=>{if(Pt=t,!xt)return;Rt=!0;const e=It(new URL(location.href)),n=Et={},{redirect:r,props:s,branch:o}=await Tt(e);n===Et&&await Vt(r,o,s,e.page)});let Lt,Ct=null;let kt,Nt=1;const Ot="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},qt={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function It(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(bt.baseUrl))return null;let e=t.pathname.slice(bt.baseUrl.length);if(""===e&&(e="/"),!gt.some(t=>t.test(e)))for(let n=0;n<vt.length;n+=1){const r=vt[n],s=r.pattern.exec(e);if(s){const n=Dt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Ut(){return{x:pageXOffset,y:pageYOffset}}async function Ht(t,e,n,r){if(e)kt=e;else{const t=Ut();qt[kt]=t,e=kt=++Nt,qt[kt]=n?t:{x:0,y:0}}kt=e,_t&&At.preloading.set(!0);const s=Ct&&Ct.href===t.href?Ct.promise:Tt(t);Ct=null;const o=Et={},{redirect:a,props:c,branch:i}=await s;if(o===Et&&(await Vt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=qt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}qt[kt]=t,t&&scrollTo(t.x,t.y)}}async function Vt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=It(new URL(t,document.baseURI));return n?(Ot[e.replaceState?"replaceState":"pushState"]({id:kt},"",t),Ht(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(At.page.set(r),At.preloading.set(!1),_t)_t.$set(n);else{n.stores={page:{subscribe:At.page.subscribe},preloading:{subscribe:At.preloading.subscribe},session:At.session},n.level0={props:await St},n.notify=At.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Bt(t.nextSibling);Bt(t),Bt(e)}_t=new mt({target:Lt,props:n,hydrate:!0})}wt=e,jt=JSON.stringify(r.query),xt=!0,Rt=!1}async function Tt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;St||(St=bt.preloaded[0]||nt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Pt));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==jt)return!0;const s=wt[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Rt&&!u&&wt[c]&&wt[c].part===e.i)return wt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Jt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}($t[e.i]);let m;return m=xt||!bt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Pt):{}:bt.preloaded[c+1],o["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Jt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Bt(t){t.parentNode.removeChild(t)}function Kt(t){const e=It(new URL(t,document.baseURI));if(e)return Ct&&t===Ct.href||function(t,e){Ct={href:t,promise:e}}(t,Tt(e)),Ct.promise}let Mt;function zt(t){clearTimeout(Mt),Mt=setTimeout(()=>{Yt(t)},20)}function Yt(t){const e=Gt(t.target);e&&"prefetch"===e.rel&&Kt(e.href)}function Ft(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Gt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=It(s);if(o){Ht(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Ot.pushState({id:kt},"",s.href)}}function Gt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Wt(t){if(qt[kt]=Ut(),t.state){const e=It(new URL(location.href));e?Ht(e,t.state.id):location.href=location.href}else Nt=Nt+1,function(t){kt=t}(Nt),Ot.replaceState({id:kt},"",location.href)}var Xt;Xt={target:document.querySelector("#sapper")},"scrollRestoration"in Ot&&(Ot.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ot.scrollRestoration="auto"}),addEventListener("load",()=>{Ot.scrollRestoration="manual"}),function(t){Lt=t}(Xt.target),addEventListener("click",Ft),addEventListener("popstate",Wt),addEventListener("touchstart",Yt),addEventListener("mousemove",zt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ot.replaceState({id:Nt},"",e);const n=new URL(location.href);if(bt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=bt;St||(St=o&&o[0]),Vt(null,[],{error:c,status:a,session:s,level0:{props:St},level1:{props:{status:a,error:c},component:lt},segments:o},{host:e,path:n,query:Dt(r),params:{}})}();const r=It(n);return r?Ht(r,Nt,!0,t):void 0});export{Q as S,v as a,b,y as c,f as d,d as e,$ as f,u as g,l as h,X as i,E as j,m as k,_ as l,p as m,t as n,z as o,Y as p,F as q,J as r,a as s,h as t,B as u,G as v,g as w,S as x,T as y,V as z};
