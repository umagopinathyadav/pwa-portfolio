if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const c=e=>t(e,n),o={module:{uri:n},exports:a,require:c};s[n]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(r(...e),a)))}}define(["./workbox-b3f8ee23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/camera-on.png",revision:"b00eaa31050a727bbee47578bffadd75"},{url:"assets/images/capture.png",revision:"9abee581510e16036797e9a34199d7fe"},{url:"assets/images/Start.png",revision:"6dd21ac0cfc5cf060c8565df6c056e29"},{url:"assets/js/app.js",revision:"20702b4c7ab3aca139ba47459ad2db64"},{url:"assets/js/constants.js",revision:"f09df056c480949f09d5ff7027f73b0a"},{url:"index.html",revision:"59407a873bff4396cce3a3c0601f0fce"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map