/*!
 * QuillComponent: Core, es2017
 * Built with http://stenciljs.com
 */
function e(e,t){let n,o,i=null,l=!1,s=!1,r=arguments.length;for(;r-- >2;)v.push(arguments[r]);for(;v.length>0;){let t=v.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)v.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&l?i[i.length-1].vtext+=t:null===i?i=[s?{vtext:t}:t]:i.push(s?{vtext:t}:t),l=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&v.push(r);t.class=v.join(" "),v.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],m):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,t:void 0,o:!1}}function t(e,t,o={}){let i=Array.isArray(t)?t:[t];const l=e.document,s=o.hydratedCssClass||"hydrated",a=o.exclude;a&&(i=i.filter(e=>-1===a.indexOf(e[0])));const c=i.map(e=>e[0]);if(c.length>0){const e=l.createElement("style");e.innerHTML=c.join()+"{visibility:hidden}."+s+"{visibility:inherit}",e.setAttribute("data-styles",""),l.head.insertBefore(e,l.head.firstChild)}const f=o.namespace||"QuillComponent";return x||(x=!0,function u(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push(t),n.componentOnReady||(n.componentOnReady=function t(){function n(t){if(o.nodeName.indexOf("-")>0){for(var n=e["s-apps"],i=0,l=0;l<n.length;l++)if(e[n[l]].componentOnReady){if(e[n[l]].componentOnReady(o,t))return;i++}if(i<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([o,t])}t(null)}var o=this;return e.Promise?new e.Promise(n):{then:n}})}(e,f,e.HTMLElement.prototype)),applyPolyfills(e).then(()=>{if(!N[f]){const t={},r=o.resourcesUrl||"./";n(f,t,e,l,r,s),N[f]=W(f,t,e,l,r,s,i)}(function t(){i.forEach(t=>{let n;!function o(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}(e.customElements.define)?(n=function(t){return e.HTMLElement.call(this,t)}).prototype=Object.create(e.HTMLElement.prototype,{constructor:{value:n,configurable:!0}}):n=new Function("w","return class extends w.HTMLElement{}")(e),N[f].i(function i(e){const t=y(e),n=t.l,o=r(e[0]);return t.l=(({mode:e,scoped:t})=>(function i(e,t,n){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
`./build/${e}${t?".sc":""}.entry.js`).then(e=>e[n])})("string"==typeof n?n:n[e],t,o)),t}(t),n)})})()})}var n=function(){};function applyPolyfills(){return Promise.resolve()}const o={},i={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=e=>null!=e,s=e=>e.toLowerCase(),r=e=>s(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),a=(e,t,n,o,i,l)=>{if("class"!==n||l)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!l&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.s(t);o&&o.u&&o.u[n]?f(t,n,i):"ref"!==n&&(f(t,n,null==i?"":i),null!=i&&!1!==i||e.v.p(t,n))}else null!=i&&"key"!==n?((e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS("http://www.w3.org/1999/xlink",s(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS("http://www.w3.org/1999/xlink",s(t),n):e.setAttribute(t,n))})(t,n,i):(l||e.v.m(t,n)&&(null==i||!1===i))&&e.v.p(t,n);else n=s(n)in t?s(n.substring(2)):s(n[2])+n.substring(3),i?i!==o&&e.v.g(t,n,i):e.v.M(t,n);else if(o!==i){const e=c(o),n=c(i),l=e.filter(e=>!n.includes(e)),s=c(t.className).filter(e=>!l.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},c=e=>null==e||""===e?[]:e.trim().split(/\s+/),f=(e,t,n)=>{try{e[t]=n}catch(e){}},u=(e,t,n,i,l)=>{const s=11===n.t.nodeType&&n.t.host?n.t.host:n.t,r=t&&t.vattrs||o,c=n.vattrs||o;for(l in r)c&&null!=c[l]||null==r[l]||a(e,s,l,r[l],void 0,i,n.o);for(l in c)l in r&&c[l]===("value"===l||"checked"===l?s[l]:r[l])||a(e,s,l,r[l],c[l],i,n.o)};let p=!1;const d=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.t),e.vchildren&&e.vchildren.forEach(e=>{d(e,t)}))},b=(e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),l=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(b))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},b=()=>{n++,p(a);const t=l?i()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(b):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(c)}}},v=[],m={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},y=(e,t,n)=>{const[o,i,,l,s,r]=e,a={color:{k:"color"}};if(l)for(t=0;t<l.length;t++)a[(n=l[t])[0]]={C:n[1],j:!!n[2],k:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,A:n[4]};return{_:o,l:i,u:Object.assign({},a),O:s,S:r?r.map(h):void 0}},h=e=>({W:e[0],N:e[1],P:!!e[2],R:!!e[3],L:!!e[4]}),w=(e,t)=>l(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,g=(e,t,n)=>{e.T.add(t),e.D.has(t)||(e.D.set(t,!0),e.H?e.queue.write(()=>M(e,t,n)):e.queue.tick(()=>M(e,t,n)))},M=async(t,n,o,i,l,s)=>{if(t.D.delete(n),!t.q.has(n)){if(!(l=t.B.get(n))){if((s=t.F.get(n))&&!s["s-rn"])return void(s["s-rc"]=s["s-rc"]||[]).push(()=>{M(t,n,o)});l=A(t,n,t.I.get(n),o)}((t,n,o,i)=>{try{const l=n.U.host,s=n.U.encapsulation,r=!1;let a,c=o;if(i.render||i.hostData||l||a){t.Y=!0;const n=i.render&&i.render();let l;t.Y=!1;const a=e(null,l,n),f=t.Z.get(o)||{};f.t=c,t.Z.set(o,t.render(o,f,a,r,s))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(e=>e()),o["s-rc"]=null)}catch(e){t.Y=!1,t.G(e,8,o,!0)}})(t,t.s(n),n,l),n["s-init"]()}},$=(e,t,n,o,i,s,r,a,c)=>{if(t.type){const f=e.J.get(n);!t.attr||void 0!==f[i]&&""!==f[i]||(a=s&&s.K)&&l(c=a[t.attr])&&(f[i]=w(t.type,c)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=w(t.type,n[i])),"mode"!==i&&delete n[i]),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),t.watchCallbacks&&(f[j+i]=t.watchCallbacks.slice()),E(o,i,function f(t){return(t=e.J.get(e.V.get(this)))&&t[i]},function u(n,o){(o=e.V.get(this))&&t.mutable&&k(e,o,i,n,r)})}else t.elementRef&&C(o,i,n)},k=(e,t,n,o,i,l,s)=>{(s=e.J.get(t))||e.J.set(t,s={});const r=s[n];if(o!==r&&(s[n]=o,l=e.B.get(t))){{const e=s[j+n];if(e)for(let t=0;t<e.length;t++)try{l[e[t]].call(l,o,r,n)}catch(e){console.error(e)}}!e.Y&&t["s-rn"]&&g(e,t,i)}},C=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},E=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},j="wc-",A=(e,t,n,o,i,l)=>{try{i=new(l=e.s(t).U),((e,t,n,o,i,l)=>{e.V.set(o,n),e.J.has(n)||e.J.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{$(e,s,n,o,t,i,l)})})(e,l,t,i,n,o),function s(e,t,n){if(t){const o=e.V.get(n);t.forEach(t=>{n[t.method]={emit:n=>e.X(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:n})}})}}(e,l.events,i)}catch(n){i={},e.G(n,7,t,!0)}return e.B.set(t,i),i},_=(e,t,n,o,i,l)=>{if(e.T.delete(t),(i=e.F.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.F.delete(t)),e.ee.length&&!e.T.size)for(;l=e.ee.shift();)l()},O=(e,t,n,o)=>{t.forEach(([t,i])=>{3&i.C&&E(n,t,function n(){return(e.J.get(this)||{})[t]},function n(l){k(e,this,t,w(i.A,l),o)})})},S=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.q.delete(n),e.te.has(n)||(e.ne=!0,e.T.add(n),e.te.set(n,!0),((e,t,n)=>{for(n=t;n=e.v.oe(n);)if(e.ie(n)){e.le.has(t)||(e.F.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.I.set(n,((e,t,n,o,i)=>(n.mode||(n.mode=e.se(n)),n["s-cr"]||e.re(n,"ssrv")||e.ae&&1===t.O||(n["s-cr"]=e.ce(""),n["s-cr"]["s-cn"]=!0,e.fe(n,n["s-cr"],e.ue(n)[0])),e.ae||1!==t.O||!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(n.shadowRoot=n),o={K:{}},t.u&&Object.keys(t.u).forEach(l=>{(i=t.u[l].k)&&(o.K[i]=e.re(n,i))}),o))(e.v,t,n)),e.pe(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{if(!e.de&&((e,t)=>{for(;t;){if(!e.be(t))return 9!==e.ve(t);t=e.be(t)}})(e.v,t)){e.q.set(t,!0),_(e,t),d(e.Z.get(t),!0),e.v.M(t),e.me.delete(t);{const n=e.B.get(t);n&&n.componentDidUnload&&n.componentDidUnload()}[e.F,e.ye,e.I].forEach(e=>e.delete(t))}})(e,this)},n["s-init"]=function(){((e,t,n,o,i,l,s)=>{if((i=e.B.get(t))&&!e.q.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.le.set(t,!0),(s=e.he.has(t))||(e.he.set(t,!0),t["s-ld"]=void 0,e.v.we(t,n));try{d(e.Z.get(t)),(l=e.ye.get(t))&&(l.forEach(e=>e(t)),e.ye.delete(t)),!s&&i.componentDidLoad&&i.componentDidLoad()}catch(n){e.G(n,4,t)}_(e,t)}})(e,this,o)},n.forceUpdate=function(){g(e,this,i)},t.u){const o=Object.entries(t.u);{let e={};o.forEach(([t,{k:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[s(n)];i&&(t[i]=o)})(e,this,t,o)}}O(e,o,n,i)}},W=(t,n,o,r,a,c)=>{const f=o.performance,d={html:{}},v=o[t]=o[t]||{},m=((e,t,n)=>{const o=new WeakMap,l={ge:n,ae:!!n.documentElement.attachShadow,Me:!1,ve:e=>e.nodeType,$e:e=>n.createElement(e),ke:(e,t)=>n.createElementNS(e,t),ce:e=>n.createTextNode(e),Ce:e=>n.createComment(e),fe:(e,t,n)=>e.insertBefore(t,n),Ee:e=>e.remove(),je:(e,t)=>e.appendChild(t),we:(e,t)=>{e.classList.add(t)},ue:e=>e.childNodes,be:e=>e.parentNode,Ae:e=>e.nextSibling,_e:e=>e.previousSibling,Oe:e=>s(e.nodeName),Se:e=>e.textContent,We:(e,t)=>e.textContent=t,re:(e,t)=>e.getAttribute(t),Ne:(e,t,n)=>e.setAttribute(t,n),p:(e,t)=>e.removeAttribute(t),m:(e,t)=>e.hasAttribute(t),se:t=>t.getAttribute("mode")||(e.Context||{}).mode,xe:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?l.oe(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,g:(t,n,s,r,a,c,f,u,p)=>{let d=t,b=s,v=o.get(t);p=n,v&&v[p]&&v[p](),"string"==typeof c?d=l.xe(t,c):"object"==typeof c?d=c:(u=n.split(":")).length>1&&(d=l.xe(t,u[0]),n=u[1]),d&&((u=n.split(".")).length>1&&(n=u[0],b=(e=>{e.keyCode===i[u[1]]&&s(e)})),f=l.Me?{capture:!!r,passive:!!a}:!!r,e.ael(d,n,b,f),v||o.set(t,v={}),v[p]=(()=>{d&&e.rel(d,n,b,f),v[p]=null}))},M:(e,t,n)=>{(n=o.get(e))&&(t?n[t]&&n[t]():Object.keys(n).forEach(e=>{n[e]&&n[e]()}))},Pe:(e,n,o,i)=>(i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i),oe:(e,t)=>(t=l.be(e))&&11===l.ve(t)?t.host:t,Re:(e,t,n,o)=>e.setAttributeNS(t,n,o)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>l.Me=!0}))}catch(e){}return l})(v,o,r),y=m.ge.documentElement,h=o["s-defined"]=o["s-defined"]||{},w={v:m,i:(e,t)=>{o.customElements.get(e._)||(S(w,d[e._]=e,t.prototype,c,f),t.observedAttributes=Object.values(e.u).map(e=>e.k).filter(e=>!!e),o.customElements.define(e._,t))},s:e=>d[m.Oe(e)],Le:e=>n[e],isClient:!0,ie:e=>!(!h[m.Oe(e)]&&!w.s(e)),G:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:n.queue=b(v,o),pe:(e,t)=>{{const n=!1,o={mode:t.mode,scoped:n};e.l(o).then(n=>{try{e.U=n}catch(t){console.error(t),e.U=class{}}g(w,t,f)})}},Y:!1,H:!1,de:!1,Te:void 0,F:new WeakMap,De:new WeakMap,te:new WeakMap,me:new WeakMap,he:new WeakMap,le:new WeakMap,V:new WeakMap,I:new WeakMap,B:new WeakMap,q:new WeakMap,D:new WeakMap,ye:new WeakMap,He:new WeakMap,Z:new WeakMap,J:new WeakMap,T:new Set,ee:[]};return n.isServer=n.isPrerender=!(n.isClient=!0),n.window=o,n.location=o.location,n.document=r,n.resourcesUrl=n.publicPath=a,w.X=n.emit=((e,t,o)=>m.Pe(e,n.eventNameFn?n.eventNameFn(t):t,o)),v.h=e,v.Context=n,v.onReady=(()=>new Promise(e=>w.queue.write(()=>w.T.size?w.ee.push(e):e()))),w.render=((e,t)=>{let n,o,i,s,r,a,c;const f=(i,b,v,m,y,h,w,g,M)=>{if(g=b.vchildren[v],n||(s=!0,"slot"===g.vtag&&(o&&t.we(m,o+"-s"),g.vchildren?g.qe=!0:g.Be=!0)),l(g.vtext))g.t=t.ce(g.vtext);else if(g.Be)g.t=t.ce("");else{if(h=g.t=p||"svg"===g.vtag?t.ke("http://www.w3.org/2000/svg",g.vtag):t.$e(g.qe?"slot-fb":g.vtag),e.ie(h)&&e.le.delete(c),p="svg"===g.vtag||"foreignObject"!==g.vtag&&p,u(e,null,g,p),l(o)&&h["s-si"]!==o&&t.we(h,h["s-si"]=o),g.vchildren)for(y=0;y<g.vchildren.length;++y)(w=f(i,g,y,h))&&t.je(h,w);"svg"===g.vtag&&(p=!1)}return g.t["s-hn"]=a,(g.qe||g.Be)&&(g.t["s-sr"]=!0,g.t["s-cr"]=r,g.t["s-sn"]=g.vname||"",(M=i&&i.vchildren&&i.vchildren[v])&&M.vtag===g.vtag&&i.t&&d(i.t)),g.t},d=(n,o,i,l)=>{e.de=!0;const r=t.ue(n);for(i=r.length-1;i>=0;i--)(l=r[i])["s-hn"]!==a&&l["s-ol"]&&(t.Ee(l),t.fe(h(l),l,y(l)),t.Ee(l["s-ol"]),l["s-ol"]=null,s=!0),o&&d(l,o);e.de=!1},b=(e,n,o,i,s,r,c,u)=>{const p=e["s-cr"];for((c=p&&t.be(p)||e).shadowRoot&&t.Oe(c)===a&&(c=c.shadowRoot);s<=r;++s)i[s]&&(u=l(i[s].vtext)?t.ce(i[s].vtext):f(null,o,s,e))&&(i[s].t=u,t.fe(c,u,y(n)))},v=(e,n,o,s)=>{for(;n<=o;++n)l(e[n])&&(s=e[n].t,i=!0,s["s-ol"]?t.Ee(s["s-ol"]):d(s,!0),t.Ee(s))},m=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),y=e=>e&&e["s-ol"]?e["s-ol"]:e,h=e=>t.be(e["s-ol"]?e["s-ol"]:e),w=(n,o,i)=>{const s=o.t=n.t,r=n.vchildren,a=o.vchildren;p=o.t&&l(t.oe(o.t))&&void 0!==o.t.ownerSVGElement,p="svg"===o.vtag||"foreignObject"!==o.vtag&&p,l(o.vtext)?(i=s["s-cr"])?t.We(t.be(i),o.vtext):n.vtext!==o.vtext&&t.We(s,o.vtext):("slot"!==o.vtag&&u(e,n,o,p),l(r)&&l(a)?((e,n,o,i,s,r,a,c)=>{let u=0,p=0,g=n.length-1,M=n[0],$=n[g],k=i.length-1,C=i[0],E=i[k];for(;u<=g&&p<=k;)if(null==M)M=n[++u];else if(null==$)$=n[--g];else if(null==C)C=i[++p];else if(null==E)E=i[--k];else if(m(M,C))w(M,C),M=n[++u],C=i[++p];else if(m($,E))w($,E),$=n[--g],E=i[--k];else if(m(M,E))"slot"!==M.vtag&&"slot"!==E.vtag||d(t.be(M.t)),w(M,E),t.fe(e,M.t,t.Ae($.t)),M=n[++u],E=i[--k];else if(m($,C))"slot"!==M.vtag&&"slot"!==E.vtag||d(t.be($.t)),w($,C),t.fe(e,$.t,M.t),$=n[--g],C=i[++p];else{for(s=null,r=u;r<=g;++r)if(n[r]&&l(n[r].vkey)&&n[r].vkey===C.vkey){s=r;break}l(s)?((c=n[s]).vtag!==C.vtag?a=f(n&&n[p],o,s,e):(w(c,C),n[s]=void 0,a=c.t),C=i[++p]):(a=f(n&&n[p],o,p,e),C=i[++p]),a&&t.fe(h(M.t),a,y(M.t))}u>g?b(e,null==i[k+1]?null:i[k+1].t,o,i,p,k):p>k&&v(n,u,g)})(s,r,o,a):l(a)?(l(n.vtext)&&t.We(s,""),b(s,null,o,a,0,a.length-1)):l(r)&&v(r,0,r.length-1)),p&&"svg"===o.vtag&&(p=!1)},g=(e,n,o,i,l,s,r,a)=>{for(i=0,l=(o=t.ue(e)).length;i<l;i++)if(n=o[i],1===t.ve(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<l;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.ve(o[s]),""!==r){if(1===a&&r===t.re(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Se(o[s]).trim()){n.hidden=!0;break}g(n)}},M=[],$=(e,n,o,l,s,r,a,c,f,u)=>{for(s=0,r=(n=t.ue(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(c=t.ue(t.be(l)),f=o["s-sn"],a=c.length-1;a>=0;a--)(l=c[a])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.ve(l))||8===u)&&""===f||1===u&&null===t.re(l,"slot")&&""===f||1===u&&t.re(l,"slot")===f)&&(M.some(e=>e.Fe===l)||(i=!0,l["s-sn"]=f,M.push({Ie:o,Fe:l})));1===t.ve(o)&&$(o)}};return(l,f,u,p,d,b,v,m,y,h,k,C)=>{if(c=l,a=t.Oe(c),r=c["s-cr"],n=p,o=c["s-sc"],s=i=!1,w(f,u),s){for($(u.t),v=0;v<M.length;v++)(m=M[v]).Fe["s-ol"]||((y=t.ce(""))["s-nr"]=m.Fe,t.fe(t.be(m.Fe),m.Fe["s-ol"]=y,m.Fe));for(e.de=!0,v=0;v<M.length;v++){for(m=M[v],k=t.be(m.Ie),C=t.Ae(m.Ie),y=m.Fe["s-ol"];y=t._e(y);)if((h=y["s-nr"])&&h&&h["s-sn"]===m.Fe["s-sn"]&&k===t.be(h)&&(h=t.Ae(h))&&h&&!h["s-nr"]){C=h;break}(!C&&k!==t.be(m.Fe)||t.Ae(m.Fe)!==C)&&m.Fe!==C&&(t.Ee(m.Fe),t.fe(k,m.Fe,C))}e.de=!1}return i&&g(u.t),M.length=0,u}})(w,m),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=(()=>{w.le.set(y,v.loaded=w.H=!0),m.Pe(o,"appload",{detail:{namespace:t}})}),((e,t,n,o,i,l)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.s(t);if(o)if(e.le.has(t))n(t);else{const o=e.ye.get(t)||[];o.push(n),e.ye.set(t,o)}return!!o}),i){for(l=i.length-1;l>=0;l--)t.componentOnReady(i[l][0],i[l][1])&&i.splice(l,1);for(l=0;l<o.length;l++)if(!n[o[l]].componentOnReady)return;for(l=0;l<i.length;l++)i[l][1](null);i.length=0}})(w,v,o,o["s-apps"],o["s-cr"]),v.initialized=!0,w},N={};let x=!1;export{t as defineCustomElement,e as h};