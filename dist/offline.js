!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([,,,function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";console.log("WORKER: executing.");var o="v1::",r=[""];self.addEventListener("install",function(e){console.log("WORKER: install event in progress."),e.waitUntil(caches.open(o+"fundamentals").then(function(e){return e.addAll(r)}).then(function(){console.log("WORKER: install completed")}))}),self.addEventListener("fetch",function(e){console.log("WORKER: fetch event in progress."),e.request.url.match(/wp-admin/)||e.request.url.match(/preview=true/)||("GET"===e.request.method?e.respondWith(caches.match(e.request).then(function(t){var n=fetch(e.request).then(function(t){var n=t.clone();return console.log("WORKER: fetch response from network.",e.request.url),caches.open(o+"pages").then(function(t){t.put(e.request,n)}).then(function(){console.log("WORKER: fetch response stored in cache.",e.request.url)}),t},r).catch(r);return console.log("WORKER: fetch event",t?"(cached)":"(network)",e.request.url),t||n;function r(){return console.log("WORKER: fetch request failed in both cache and network."),new Response("<h1>Service Unavailable</h1>",{status:503,statusText:"Service Unavailable",headers:new Headers({"Content-Type":"text/html"})})}})):console.log("WORKER: fetch event ignored.",e.request.method,e.request.url))}),self.addEventListener("activate",function(e){console.log("WORKER: activate event in progress."),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return!e.startsWith(o)}).map(function(e){return caches.delete(e)}))}).then(function(){console.log("WORKER: activate completed.")}))})}]);