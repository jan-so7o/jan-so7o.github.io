!function(){"use strict";const e=1598813916781,t="cache"+e,s=["client/client.830d6d13.js","client/posts.3f742b1c.js","client/index.928f9101.js","client/index.489dab98.js","client/[slug].088a8496.js","client/about.c31a9c46.js","client/[permalink].ed930c8f.js","client/client.ca3ed9ad.js"].concat(["service-worker-index.html","CNAME","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json","successkid.jpg"]),n=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();
