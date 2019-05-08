/*!
 * QuillComponent: Core, es2017
 * Built with http://stenciljs.com
 */
function e(e,t){let n,o,i=null,l=!1,r=!1,s=arguments.length;for(;s-- >2;)m.push(arguments[s]);for(;m.length>0;){let t=m.pop();if(t&&void 0!==t.pop)for(s=t.length;s--;)m.push(t[s]);else"boolean"==typeof t&&(t=null),(r="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(r=!1)),r&&l?i[i.length-1].vtext+=t:null===i?i=[r?{vtext:t}:t]:i.push(r?{vtext:t}:t),l=r}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(s in t.class)t.class[s]&&m.push(s);t.class=m.join(" "),m.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],y):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,t:void 0,o:!1}}function t(e,t,o={}){let i=Array.isArray(t)?t:[t];const l=e.document,r=o.hydratedCssClass||"hydrated",a=o.exclude;a&&(i=i.filter(e=>-1===a.indexOf(e[0])));const c=i.map(e=>e[0]);if(c.length>0){const e=l.createElement("style");e.innerHTML=c.join()+"{visibility:hidden}."+r+"{visibility:inherit}",e.setAttribute("data-styles",""),l.head.insertBefore(e,l.head.firstChild)}const f=o.namespace||"QuillComponent";return P||(P=!0,function u(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push(t),n.componentOnReady||(n.componentOnReady=function t(){function n(t){if(o.nodeName.indexOf("-")>0){for(var n=e["s-apps"],i=0,l=0;l<n.length;l++)if(e[n[l]].componentOnReady){if(e[n[l]].componentOnReady(o,t))return;i++}if(i<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([o,t])}t(null)}var o=this;return e.Promise?new e.Promise(n):{then:n}})}(e,f,e.HTMLElement.prototype)),applyPolyfills(e).then(()=>{if(!x[f]){const t={},s=o.resourcesUrl||"./";n(f,t,e,l,s,r),x[f]=N(f,t,e,l,s,r,i)}(function t(){i.forEach(t=>{let n;!function o(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}(e.customElements.define)?(n=function(t){return e.HTMLElement.call(this,t)}).prototype=Object.create(e.HTMLElement.prototype,{constructor:{value:n,configurable:!0}}):n=new Function("w","return class extends w.HTMLElement{}")(e),x[f].i(function i(e){const t=h(e),n=t.l,o=s(e[0]);return t.l=(({mode:e,scoped:t})=>{return function i(e,t,n){return import(`./build/${e}${t?".sc":""}.entry.js`).then(e=>e[n])}("string"==typeof n?n:n[e],t,o)}),t}(t),n)})})()})}var n=function(){};function applyPolyfills(){return Promise.resolve()}const o={},i={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=e=>null!=e,r=e=>e.toLowerCase(),s=e=>r(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),a="http://www.w3.org/1999/xlink",c=(e,t,n,o,i,l)=>{if("class"!==n||l)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!l&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.s(t);o&&o.u&&o.u[n]?u(t,n,i):"ref"!==n&&(u(t,n,null==i?"":i),null!=i&&!1!==i||e.v.p(t,n))}else null!=i&&"key"!==n?((e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS(a,r(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS(a,r(t),n):e.setAttribute(t,n))})(t,n,i):(l||e.v.m(t,n)&&(null==i||!1===i))&&e.v.p(t,n);else n=r(n)in t?r(n.substring(2)):r(n[2])+n.substring(3),i?i!==o&&e.v.M(t,n,i,0):e.v.g(t,n,0);else if(o!==i){const e=f(o),n=f(i),l=e.filter(e=>!n.includes(e)),r=f(t.className).filter(e=>!l.includes(e)),s=n.filter(t=>!e.includes(t)&&!r.includes(t));r.push(...s),t.className=r.join(" ")}},f=e=>null==e||""===e?[]:e.trim().split(/\s+/),u=(e,t,n)=>{try{e[t]=n}catch(e){}},p=(e,t,n,i,l)=>{const r=11===n.t.nodeType&&n.t.host?n.t.host:n.t,s=t&&t.vattrs||o,a=n.vattrs||o;for(l in s)a&&null!=a[l]||null==s[l]||c(e,r,l,s[l],void 0,i,n.o);for(l in a)l in s&&a[l]===("value"===l||"checked"===l?r[l]:s[l])||c(e,r,l,s[l],a[l],i,n.o)};let d=!1;const b=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.t),e.vchildren&&e.vchildren.forEach(e=>{b(e,t)}))},v=(e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),l=!1!==e.asyncQueue,r=Promise.resolve(),s=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(b))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},b=()=>{n++,p(a);const t=l?i()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(b):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){s.push(e),1===s.length&&r.then(()=>p(s))},read:u(a),write:u(c)}}},m=[],y={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},h=(e,t,n)=>{const[o,i,,l,r,s]=e,a={color:{k:"color"}};if(l)for(t=0;t<l.length;t++)a[(n=l[t])[0]]={C:n[1],j:!!n[2],k:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,A:n[4]};return{_:o,l:i,u:Object.assign({},a),O:r,S:s?s.map(w):void 0}},w=e=>({W:e[0],N:e[1],P:!!e[2],R:!!e[3],L:!!e[4]}),M=(e,t)=>{return l(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t},g=(e,t,n)=>{e.T.add(t),e.D.has(t)||(e.D.set(t,!0),e.H?e.queue.write(()=>$(e,t,n)):e.queue.tick(()=>$(e,t,n)))},$=async(t,n,o,i,l,r)=>{if(t.D.delete(n),!t.q.has(n)){if(!(l=t.B.get(n))){if((r=t.F.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{$(t,n,o)});l=_(t,n,t.I.get(n),o)}((t,n,o,i)=>{try{const l=n.U.host,r=n.U.encapsulation,s=!1;let a,c=o;if(i.render||i.hostData||l||a){t.Y=!0;const n=i.render&&i.render();let l;t.Y=!1;const a=e(null,l,n),f=t.Z.get(o)||{};f.t=c,t.Z.set(o,t.render(o,f,a,s,r))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(e=>e()),o["s-rc"]=null)}catch(e){t.Y=!1,t.G(e,8,o,!0)}})(t,t.s(n),n,l),n["s-init"]()}},k=(e,t,n,o,i,r,s,a,c)=>{if(t.type){const f=e.J.get(n);!t.attr||void 0!==f[i]&&""!==f[i]||(a=r&&r.K)&&l(c=a[t.attr])&&(f[i]=M(t.type,c)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=M(t.type,n[i])),"mode"!==i&&delete n[i]),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),t.watchCallbacks&&(f[A+i]=t.watchCallbacks.slice()),j(o,i,function f(t){return(t=e.J.get(e.V.get(this)))&&t[i]},function u(n,o){(o=e.V.get(this))&&t.mutable&&C(e,o,i,n,s)})}else t.elementRef&&E(o,i,n)},C=(e,t,n,o,i,l,r)=>{(r=e.J.get(t))||e.J.set(t,r={});const s=r[n];if(o!==s&&(r[n]=o,l=e.B.get(t))){{const e=r[A+n];if(e)for(let t=0;t<e.length;t++)try{l[e[t]].call(l,o,s,n)}catch(e){console.error(e)}}!e.Y&&t["s-rn"]&&g(e,t,i)}},E=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},j=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},A="wc-",_=(e,t,n,o,i,l)=>{try{i=new(l=e.s(t).U),((e,t,n,o,i,l)=>{e.V.set(o,n),e.J.has(n)||e.J.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,r])=>{k(e,r,n,o,t,i,l)})})(e,l,t,i,n,o),function r(e,t,n){if(t){const o=e.V.get(n);t.forEach(t=>{n[t.method]={emit:n=>e.X(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:n})}})}}(e,l.events,i)}catch(n){i={},e.G(n,7,t,!0)}return e.B.set(t,i),i},O=(e,t,n,o,i,l)=>{if(e.T.delete(t),(i=e.F.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.F.delete(t)),e.ee.length&&!e.T.size)for(;l=e.ee.shift();)l()},S=(e,t,n,o)=>{t.forEach(([t,i])=>{3&i.C&&j(n,t,function n(){return(e.J.get(this)||{})[t]},function n(l){C(e,this,t,M(i.A,l),o)})})},W=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.q.delete(n),e.te.has(n)||(e.ne=!0,e.T.add(n),e.te.set(n,!0),((e,t,n)=>{for(n=t;n=e.v.oe(n);)if(e.ie(n)){e.le.has(t)||(e.F.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.I.set(n,((e,t,n,o,i)=>{if(n.mode||(n.mode=e.re(n)),n["s-cr"]||e.se(n,"ssrv")||e.ae&&1===t.O||(n["s-cr"]=e.ce(""),n["s-cr"]["s-cn"]=!0,e.fe(n,n["s-cr"],e.ue(n)[0])),!e.ae&&1===t.O)try{!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(n.shadowRoot=n)}catch(e){}return o={K:{}},t.u&&Object.keys(t.u).forEach(l=>{(i=t.u[l].k)&&(o.K[i]=e.se(n,i))}),o})(e.v,t,n)),e.pe(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{if(!e.de&&((e,t)=>{for(;t;){if(!e.be(t))return 9!==e.ve(t);t=e.be(t)}})(e.v,t)){e.q.set(t,!0),O(e,t),b(e.Z.get(t),!0);{const n=e.B.get(t);n&&n.componentDidUnload&&n.componentDidUnload()}e.v.g(t),e.me.delete(t),[e.F,e.ye,e.I].forEach(e=>e.delete(t))}})(e,this)},n["s-init"]=function(){((e,t,n,o,i,l,r)=>{if((i=e.B.get(t))&&!e.q.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.le.set(t,!0),(r=e.he.has(t))||(e.he.set(t,!0),t["s-ld"]=void 0,e.v.we(t,n));try{b(e.Z.get(t)),(l=e.ye.get(t))&&(l.forEach(e=>e(t)),e.ye.delete(t)),!r&&i.componentDidLoad&&i.componentDidLoad()}catch(n){e.G(n,4,t)}O(e,t)}})(e,this,o)},n.forceUpdate=function(){g(e,this,i)},t.u){const o=Object.entries(t.u);{let e={};o.forEach(([t,{k:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[r(n)];i&&(t[i]=(null!==o||"boolean"!=typeof t[i])&&o)})(e,this,t,o)}}S(e,o,n,i)}},N=(t,n,o,s,a,c)=>{const f=o.performance,u={html:{}},b=o[t]=o[t]||{},m=((e,t,n)=>{const o=new WeakMap,l={Me:n,ae:!!n.documentElement.attachShadow,ge:!1,ve:e=>e.nodeType,$e:e=>n.createElement(e),ke:(e,t)=>n.createElementNS(e,t),ce:e=>n.createTextNode(e),Ce:e=>n.createComment(e),fe:(e,t,n)=>e.insertBefore(t,n),Ee:e=>e.remove(),je:(e,t)=>e.appendChild(t),we:(e,t)=>{e.classList.add(t)},ue:e=>e.childNodes,be:e=>e.parentNode,Ae:e=>e.nextSibling,_e:e=>e.previousSibling,Oe:e=>r(e.nodeName),Se:e=>e.textContent,We:(e,t)=>e.textContent=t,se:(e,t)=>e.getAttribute(t),Ne:(e,t,n)=>e.setAttribute(t,n),p:(e,t)=>e.removeAttribute(t),m:(e,t)=>e.hasAttribute(t),re:t=>t.getAttribute("mode")||(e.Context||{}).mode,xe:(e,o)=>{return"child"===o?e.firstElementChild:"parent"===o?l.oe(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e},M:(t,n,r,s,a,c,f,u,p,d)=>{let b=t,v=r,m=o.get(t);d=n+s,m&&m[d]&&m[d](),"string"==typeof f?b=l.xe(t,f):"object"==typeof f?b=f:(p=n.split(":")).length>1&&(b=l.xe(t,p[0]),n=p[1]),b&&((p=n.split(".")).length>1&&(n=p[0],v=(e=>{e.keyCode===i[p[1]]&&r(e)})),u=l.ge?{capture:!!a,passive:!!c}:!!a,e.ael(b,n,v,u),m||o.set(t,m={}),m[d]=(()=>{b&&e.rel(b,n,v,u),m[d]=null}))},g:(e,t,n,i)=>{(i=o.get(e))&&(t?i[t+n]&&i[t+n]():Object.keys(i).forEach(e=>{i[e]&&i[e]()}))},Pe:(e,n,o,i)=>{return i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i},oe:(e,t)=>(t=l.be(e))&&11===l.ve(t)?t.host:t,Re:(e,t,n,o)=>e.setAttributeNS(t,n,o)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>l.ge=!0}))}catch(e){}return l})(b,o,s),y=m.Me.documentElement,h=o["s-defined"]=o["s-defined"]||{},w={v:m,i:(e,t)=>{o.customElements.get(e._)||(W(w,u[e._]=e,t.prototype,c,f),t.observedAttributes=Object.values(e.u).map(e=>e.k).filter(e=>!!e),o.customElements.define(e._,t))},s:e=>u[m.Oe(e)],Le:e=>n[e],isClient:!0,ie:e=>!(!h[m.Oe(e)]&&!w.s(e)),G:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:n.queue=v(b,o),pe:(e,t)=>{{const n=!1,o={mode:t.mode,scoped:n};e.l(o).then(n=>{try{e.U=n}catch(t){console.error(t),e.U=class{}}g(w,t,f)})}},Y:!1,H:!1,de:!1,Te:void 0,F:new WeakMap,De:new WeakMap,te:new WeakMap,me:new WeakMap,he:new WeakMap,le:new WeakMap,V:new WeakMap,I:new WeakMap,B:new WeakMap,q:new WeakMap,D:new WeakMap,ye:new WeakMap,He:new WeakMap,Z:new WeakMap,J:new WeakMap,T:new Set,ee:[]};return n.isServer=n.isPrerender=!(n.isClient=!0),n.window=o,n.location=o.location,n.document=s,n.resourcesUrl=n.publicPath=a,w.X=n.emit=((e,t,o)=>m.Pe(e,n.eventNameFn?n.eventNameFn(t):t,o)),b.h=e,b.Context=n,b.onReady=(()=>new Promise(e=>w.queue.write(()=>w.T.size?w.ee.push(e):e()))),w.render=((e,t)=>{let n,o,i,r,s,a,c;const f=(i,b,v,m,y,h,w,M,g)=>{if(M=b.vchildren[v],n||(r=!0,"slot"===M.vtag&&(o&&t.we(m,o+"-s"),M.vchildren?M.qe=!0:M.Be=!0)),l(M.vtext))M.t=t.ce(M.vtext);else if(M.Be)M.t=t.ce("");else{if(h=M.t=d||"svg"===M.vtag?t.ke("http://www.w3.org/2000/svg",M.vtag):t.$e(M.qe?"slot-fb":M.vtag),e.ie(h)&&e.le.delete(c),d="svg"===M.vtag||"foreignObject"!==M.vtag&&d,p(e,null,M,d),l(o)&&h["s-si"]!==o&&t.we(h,h["s-si"]=o),M.vchildren)for(y=0;y<M.vchildren.length;++y)(w=f(i,M,y,h))&&t.je(h,w);"svg"===M.vtag&&(d=!1)}return M.t["s-hn"]=a,(M.qe||M.Be)&&(M.t["s-sr"]=!0,M.t["s-cr"]=s,M.t["s-sn"]=M.vname||"",(g=i&&i.vchildren&&i.vchildren[v])&&g.vtag===M.vtag&&i.t&&u(i.t)),M.t},u=(n,o,i,l)=>{e.de=!0;const s=t.ue(n);for(i=s.length-1;i>=0;i--)(l=s[i])["s-hn"]!==a&&l["s-ol"]&&(t.Ee(l),t.fe(h(l),l,y(l)),t.Ee(l["s-ol"]),l["s-ol"]=null,r=!0),o&&u(l,o);e.de=!1},b=(e,n,o,i,r,s,c,u)=>{const p=e["s-cr"];for((c=p&&t.be(p)||e).shadowRoot&&t.Oe(c)===a&&(c=c.shadowRoot);r<=s;++r)i[r]&&(u=l(i[r].vtext)?t.ce(i[r].vtext):f(null,o,r,e))&&(i[r].t=u,t.fe(c,u,y(n)))},v=(e,n,o,r)=>{for(;n<=o;++n)l(e[n])&&(r=e[n].t,i=!0,r["s-ol"]?t.Ee(r["s-ol"]):u(r,!0),t.Ee(r))},m=(e,t)=>{return e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname)},y=e=>{return e&&e["s-ol"]?e["s-ol"]:e},h=e=>{return t.be(e["s-ol"]?e["s-ol"]:e)},w=(n,o,i)=>{const r=o.t=n.t,s=n.vchildren,a=o.vchildren;d=o.t&&l(t.oe(o.t))&&void 0!==o.t.ownerSVGElement,d="svg"===o.vtag||"foreignObject"!==o.vtag&&d,l(o.vtext)?(i=r["s-cr"])?t.We(t.be(i),o.vtext):n.vtext!==o.vtext&&t.We(r,o.vtext):("slot"!==o.vtag&&p(e,n,o,d),l(s)&&l(a)?((e,n,o,i,r,s,a,c)=>{let p=0,d=0,M=n.length-1,g=n[0],$=n[M],k=i.length-1,C=i[0],E=i[k];for(;p<=M&&d<=k;)if(null==g)g=n[++p];else if(null==$)$=n[--M];else if(null==C)C=i[++d];else if(null==E)E=i[--k];else if(m(g,C))w(g,C),g=n[++p],C=i[++d];else if(m($,E))w($,E),$=n[--M],E=i[--k];else if(m(g,E))"slot"!==g.vtag&&"slot"!==E.vtag||u(t.be(g.t)),w(g,E),t.fe(e,g.t,t.Ae($.t)),g=n[++p],E=i[--k];else if(m($,C))"slot"!==g.vtag&&"slot"!==E.vtag||u(t.be($.t)),w($,C),t.fe(e,$.t,g.t),$=n[--M],C=i[++d];else{for(r=null,s=p;s<=M;++s)if(n[s]&&l(n[s].vkey)&&n[s].vkey===C.vkey){r=s;break}l(r)?((c=n[r]).vtag!==C.vtag?a=f(n&&n[d],o,r,e):(w(c,C),n[r]=void 0,a=c.t),C=i[++d]):(a=f(n&&n[d],o,d,e),C=i[++d]),a&&t.fe(h(g.t),a,y(g.t))}p>M?b(e,null==i[k+1]?null:i[k+1].t,o,i,d,k):d>k&&v(n,p,M)})(r,s,o,a):l(a)?(l(n.vtext)&&t.We(r,""),b(r,null,o,a,0,a.length-1)):l(s)&&v(s,0,s.length-1)),d&&"svg"===o.vtag&&(d=!1)},M=(e,n,o,i,l,r,s,a)=>{for(i=0,l=(o=t.ue(e)).length;i<l;i++)if(n=o[i],1===t.ve(n)){if(n["s-sr"])for(s=n["s-sn"],n.hidden=!1,r=0;r<l;r++)if(o[r]["s-hn"]!==n["s-hn"])if(a=t.ve(o[r]),""!==s){if(1===a&&s===t.se(o[r],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Se(o[r]).trim()){n.hidden=!0;break}M(n)}},g=[],$=(e,n,o,l,r,s,a,c,f,u)=>{for(r=0,s=(n=t.ue(e)).length;r<s;r++){if((o=n[r])["s-sr"]&&(l=o["s-cr"]))for(c=t.ue(t.be(l)),f=o["s-sn"],a=c.length-1;a>=0;a--)(l=c[a])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.ve(l))||8===u)&&""===f||1===u&&null===t.se(l,"slot")&&""===f||1===u&&t.se(l,"slot")===f)&&(g.some(e=>e.Fe===l)||(i=!0,l["s-sn"]=f,g.push({Ie:o,Fe:l})));1===t.ve(o)&&$(o)}};return(l,f,u,p,d,b,v,m,y,h,k,C)=>{if(c=l,a=t.Oe(c),s=c["s-cr"],n=p,o=c["s-sc"],r=i=!1,w(f,u),r){for($(u.t),v=0;v<g.length;v++)(m=g[v]).Fe["s-ol"]||((y=t.ce(""))["s-nr"]=m.Fe,t.fe(t.be(m.Fe),m.Fe["s-ol"]=y,m.Fe));for(e.de=!0,v=0;v<g.length;v++){for(m=g[v],k=t.be(m.Ie),C=t.Ae(m.Ie),y=m.Fe["s-ol"];y=t._e(y);)if((h=y["s-nr"])&&h&&h["s-sn"]===m.Fe["s-sn"]&&k===t.be(h)&&(h=t.Ae(h))&&h&&!h["s-nr"]){C=h;break}(!C&&k!==t.be(m.Fe)||t.Ae(m.Fe)!==C)&&m.Fe!==C&&(t.Ee(m.Fe),t.fe(k,m.Fe,C))}e.de=!1}return i&&M(u.t),g.length=0,u}})(w,m),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=(()=>{w.le.set(y,b.loaded=w.H=!0),m.Pe(o,"appload",{detail:{namespace:t}})}),((e,t,n,o,i,l)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.s(t);if(o)if(e.le.has(t))n(t);else{const o=e.ye.get(t)||[];o.push(n),e.ye.set(t,o)}return!!o}),i){for(l=i.length-1;l>=0;l--)t.componentOnReady(i[l][0],i[l][1])&&i.splice(l,1);for(l=0;l<o.length;l++)if(!n[o[l]].componentOnReady)return;for(l=0;l<i.length;l++)i[l][1](null);i.length=0}})(w,b,o,o["s-apps"],o["s-cr"]),b.initialized=!0,w},x={};let P=!1;export{t as defineCustomElement,e as h};