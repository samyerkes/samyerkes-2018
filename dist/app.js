!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){o(1),e.exports=o(2)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i=function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)},d=(function(e){var t=["IMG"],o=[27,81],n=function(e){return t.includes(e.tagName)},d=function(e){return e.naturalWidth!==e.width};e.exports=function(e){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=a.margin,s=void 0===c?0:c,l=a.background,m=void 0===l?"#fff":l,u=a.scrollOffset,f=void 0===u?48:u,p=a.metaClick,v=function(){if(x.template)if(x.template.dispatchEvent(new Event("show")),H=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A=!0,x.zoomed=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,r=t.width,i=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+c+"px",d.style.width=r+"px",d.style.height=i+"px",d.style.transform="",d}(x.template),document.body.appendChild(C),document.body.appendChild(x.zoomed),requestAnimationFrame(function(){document.body.classList.add("medium-zoom--open")}),x.template.style.visibility="hidden",x.zoomed.classList.add("medium-zoom-image--open"),x.zoomed.addEventListener("click",g),x.zoomed.addEventListener("transitionend",z),x.template.getAttribute("data-zoom-target")){x.zoomedHd=x.zoomed.cloneNode(),x.zoomedHd.src=x.zoomed.getAttribute("data-zoom-target"),x.zoomedHd.onerror=function(){clearInterval(e),console.error("Unable to reach the zoom image target "+x.zoomedHd.src),x.zoomedHd=null,L()};var e=setInterval(function(){x.zoomedHd.naturalWidth&&(clearInterval(e),x.zoomedHd.classList.add("medium-zoom-image--open"),x.zoomedHd.addEventListener("click",g),document.body.appendChild(x.zoomedHd),L())},10)}else L()},g=function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,o=function(){A||!x.template||(x.template.dispatchEvent(new Event("hide")),A=!0,document.body.classList.remove("medium-zoom--open"),x.zoomed.style.transform="",x.zoomedHd&&(x.zoomedHd.style.transform="",x.zoomedHd.removeEventListener("click",e)),x.zoomed.removeEventListener("click",e),x.zoomed.addEventListener("transitionend",w))};0<t?setTimeout(o,t):o()},y=function(e){x.template?g():(x.template=e?e.target:O[0],v())},h=function(e){return(e.metaKey||e.ctrlKey)&&k.metaClick?window.open(e.target.getAttribute("data-original")||e.target.parentNode.href||e.target.src,"_blank"):(e.preventDefault(),void y(e))},z=function e(){A=!1,x.zoomed.removeEventListener("transitionend",e),x.template.dispatchEvent(new Event("shown"))},w=function e(){x.template&&(x.template.style.visibility="",document.body.removeChild(x.zoomed),x.zoomedHd&&document.body.removeChild(x.zoomedHd),document.body.removeChild(C),x.zoomed.classList.remove("medium-zoom-image--open"),A=!1,x.zoomed.removeEventListener("transitionend",e),x.template.dispatchEvent(new Event("hidden")),x.template=null,x.zoomed=null,x.zoomedHd=null)},E=function(){if(!A&&x.template){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(H-e)>k.scrollOffset&&g(150)}},b=function(e){o.includes(e.keyCode||e.which)&&g()},L=function(){var e=Math.min;if(x.template){var t=window.innerWidth,o=window.innerHeight,n=t-2*k.margin,r=o-2*k.margin,i=x.zoomedHd||x.template,d=i.naturalWidth,a=void 0===d?n:d,c=i.naturalHeight,s=void 0===c?r:c,l=i.getBoundingClientRect(),m=l.top,u=l.left,f=l.width,p=l.height,v=e(e(a,n)/f,e(s,r)/p)||1,g="scale("+v+") translate3d("+((n-f)/2-u+k.margin)/v+"px, "+((r-p)/2-m+k.margin)/v+"px, 0)";x.zoomed.style.transform=g,x.zoomedHd&&(x.zoomedHd.style.transform=g)}},k={margin:s,background:m,scrollOffset:f,metaClick:void 0===p||p};e instanceof Object&&r(k,e);var O=function(e){try{return Array.isArray(e)?e.filter(n):function(e){return NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e)}(e)?[].concat(i(e)).filter(n):function(e){return e&&1===e.nodeType}(e)?[e].filter(n):"string"==typeof e?[].concat(i(document.querySelectorAll(e))).filter(n):[].concat(i(document.querySelectorAll(t.map(function(e){return e.toLowerCase()}).join(",")))).filter(d)}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList, an HTMLCollection or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}}(e),C=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.backgroundColor=e,t}(k.background),x={template:null,zoomed:null,zoomedHd:null},H=0,A=!1;return O.forEach(function(e){e.classList.add("medium-zoom-image"),e.addEventListener("click",h)}),C.addEventListener("click",g),document.addEventListener("scroll",E),document.addEventListener("keyup",b),window.addEventListener("resize",g),{show:y,hide:g,toggle:y,update:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e.background&&(C.style.backgroundColor=e.background),r(k,e)},addEventListeners:function(e,t){O.forEach(function(o){o.addEventListener(e,t)})},detach:function(){var e=function e(){var t=new Event("detach");O.forEach(function(e){e.classList.remove("medium-zoom-image"),e.removeEventListener("click",h),e.dispatchEvent(t)}),O.splice(0,O.length),C.removeEventListener("click",g),document.removeEventListener("scroll",E),document.removeEventListener("keyup",b),window.removeEventListener("resize",g),x.zoomed&&x.zoomed.removeEventListener("transitionend",e)};x.zoomed?(g(),x.zoomed.addEventListener("transitionend",requestAnimationFrame(e))):e()},images:O,options:k}}}(n={exports:{}},n.exports),n.exports);!function(e,t){if("undefined"==typeof document)return t;e=e||"";var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--open .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s}.medium-zoom-image--open{position:relative;z-index:1;cursor:pointer;cursor:zoom-out;will-change:transform}",void 0),d(document.querySelectorAll('[data-action="zoom"]'),{margin:40}),document.addEventListener("DOMContentLoaded",function(){console.log(),"serviceWorker"in navigator?(console.log("CLIENT: service worker registration in progress."),navigator.serviceWorker.register("offline.js").then(function(){console.log("CLIENT: service worker registration complete.")},function(){console.log("CLIENT: service worker registration failure.")})):console.log("CLIENT: service worker is not supported."),function(){var e="IntersectionObserver"in window&&window.IntersectionObserver.toString().indexOf("[native code]")>-1;"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&!("isIntersecting"in IntersectionObserverEntry.prototype)&&Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});var t=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(document.querySelectorAll(".lazyload")));if(e){var o=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&(e.target.classList.add("visible"),e.target.src=e.target.dataset.src,o.unobserve(e.target))})},{threshold:[.25]});window.addEventListener("load",function(){t.forEach(function(e){o.observe(e)})},!1)}else t.forEach(function(e){e.classList.add("visible"),e.src=e.dataset.src})}()})},function(e,t){}]);