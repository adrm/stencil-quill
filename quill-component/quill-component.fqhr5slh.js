/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='quill-component']"));
function e(e,t){let n,o,l=null,i=!1,s=!1,r=arguments.length;for(;r-- >2;)y.push(arguments[r]);for(;y.length>0;){let t=y.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)y.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&i?l[l.length-1].vtext+=t:null===l?l=[s?{vtext:t}:t]:l.push(s?{vtext:t}:t),i=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&y.push(r);t.class=y.join(" "),y.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],M):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,t:void 0,o:!1}}const t={},o={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=e=>null!=e,i=e=>e.toLowerCase(),s="http://www.w3.org/1999/xlink",a=(e,t,n,o,l,r)=>{if("class"!==n||r)if("style"===n){for(const e in o)l&&null!=l[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!r&&(n in t||-1!==["object","function"].indexOf(typeof l)&&null!==l)){const o=e.l(t);o&&o.i&&o.i[n]?u(t,n,l):"ref"!==n&&(u(t,n,null==l?"":l),null!=l&&!1!==l||e.u.s(t,n))}else null!=l&&"key"!==n?((e,t,n,o="boolean"==typeof n,l)=>{l=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?l?e.removeAttributeNS(s,i(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),l?e.setAttributeNS(s,i(t),n):e.setAttribute(t,n))})(t,n,l):(r||e.u.p(t,n)&&(null==l||!1===l))&&e.u.s(t,n);else n=i(n)in t?i(n.substring(2)):i(n[2])+n.substring(3),l?l!==o&&e.u.m(t,n,l,0):e.u.v(t,n,0);else if(o!==l){const e=f(o),n=f(l),i=e.filter(e=>!n.includes(e)),s=f(t.className).filter(e=>!i.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},f=e=>null==e||""===e?[]:e.trim().split(/\s+/),u=(e,t,n)=>{try{e[t]=n}catch(e){}},p=(e,n,o,l,i)=>{const s=11===o.t.nodeType&&o.t.host?o.t.host:o.t,r=n&&n.vattrs||t,c=o.vattrs||t;for(i in r)c&&null!=c[i]||null==r[i]||a(e,s,i,r[i],void 0,l,o.o);for(i in c)i in r&&c[i]===("value"===i||"checked"===i?s[i]:r[i])||a(e,s,i,r[i],c[i],l,o.o)};let b=!1;const m=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.t),e.vchildren&&e.vchildren.forEach(e=>{m(e,t)}))},v=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),i=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(b))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},b=()=>{n++,p(a);const t=i?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(b):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(c)}}},y=[],M={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},g=(e,t,n)=>{const[o,l,,i,s,r]=e,a={color:{M:"color"}};if(i)for(t=0;t<i.length;t++)a[(n=i[t])[0]]={g:n[1],k:!!n[2],M:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,j:n[4]};return{C:o,W:l,i:Object.assign({},a),N:s,O:r?r.map($):void 0}},$=e=>({S:e[0],A:e[1],T:!!e[2],R:!!e[3],L:!!e[4]}),k=(e,t)=>l(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,j=(e,t,n)=>{e.D.add(t),e.q.has(t)||(e.q.set(t,!0),e.B?e.queue.write(()=>C(e,t,n)):e.queue.tick(()=>C(e,t,n)))},C=async(t,n,o,l,i,s)=>{if(t.q.delete(n),!t.I.has(n)){if(!(i=t.P.get(n))){if((s=t.F.get(n))&&!s["s-rn"])return void(s["s-rc"]=s["s-rc"]||[]).push(()=>{C(t,n,o)});i=A(t,n,t.H.get(n),o)}((t,n,o,l)=>{try{const i=n.U.host,s=n.U.encapsulation,r=!1;let a,c=o;if(l.render||l.hostData||i||a){t.Z=!0;const n=l.render&&l.render();let i;t.Z=!1;const a=e(null,i,n),f=t.G.get(o)||{};f.t=c,t.G.set(o,t.render(o,f,a,r,s))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(e=>e()),o["s-rc"]=null)}catch(e){t.Z=!1,t.J(e,8,o,!0)}})(t,t.l(n),n,i),n["s-init"]()}},W=(e,t,n,o,i,s,r,a,c)=>{if(t.type){const f=e.K.get(n);!t.attr||void 0!==f[i]&&""!==f[i]||(a=s&&s.V)&&l(c=a[t.attr])&&(f[i]=k(t.type,c)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=k(t.type,n[i])),"mode"!==i&&delete n[i]),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),t.watchCallbacks&&(f[S+i]=t.watchCallbacks.slice()),E(o,i,function f(t){return(t=e.K.get(e.X.get(this)))&&t[i]},function u(n,o){(o=e.X.get(this))&&t.mutable&&N(e,o,i,n,r)})}else t.elementRef&&O(o,i,n)},N=(e,t,n,o,l,i,s)=>{(s=e.K.get(t))||e.K.set(t,s={});const r=s[n];if(o!==r&&(s[n]=o,i=e.P.get(t))){{const e=s[S+n];if(e)for(let t=0;t<e.length;t++)try{i[e[t]].call(i,o,r,n)}catch(e){console.error(e)}}!e.Z&&t["s-rn"]&&j(e,t,l)}},O=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},E=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},S="wc-",A=(e,t,n,o,l,i)=>{try{l=new(i=e.l(t).U),((e,t,n,o,l,i)=>{e.X.set(o,n),e.K.has(n)||e.K.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{W(e,s,n,o,t,l,i)})})(e,i,t,l,n,o),function s(e,t,n){if(t){const o=e.X.get(n);t.forEach(t=>{n[t.method]={emit:n=>e.Y(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:n})}})}}(e,i.events,l)}catch(n){l={},e.J(n,7,t,!0)}return e.P.set(t,l),l},T=(e,t,n,o,l,i)=>{if(e.D.delete(t),(l=e.F.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.F.delete(t)),e._.length&&!e.D.size)for(;i=e._.shift();)i()},R=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.g&&E(n,t,function n(){return(e.K.get(this)||{})[t]},function n(i){N(e,this,t,k(l.j,i),o)})})},L=(e,t,n,o,l)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.I.delete(n),e.ee.has(n)||(e.te=!0,e.D.add(n),e.ee.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.ne(n);)if(e.oe(n)){e.le.has(t)||(e.F.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.H.set(n,((e,t,n,o,l)=>{if(n.mode||(n.mode=e.ie(n)),n["s-cr"]||e.se(n,"ssrv")||e.re&&1===t.N||(n["s-cr"]=e.ae(""),n["s-cr"]["s-cn"]=!0,e.ce(n,n["s-cr"],e.fe(n)[0])),!e.re&&1===t.N)try{!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(n.shadowRoot=n)}catch(e){}return o={V:{}},t.i&&Object.keys(t.i).forEach(i=>{(l=t.i[i].M)&&(o.V[l]=e.se(n,l))}),o})(e.u,t,n)),e.ue(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{if(!e.pe&&((e,t)=>{for(;t;){if(!e.de(t))return 9!==e.be(t);t=e.de(t)}})(e.u,t)){e.I.set(t,!0),T(e,t),m(e.G.get(t),!0);{const n=e.P.get(t);n&&n.componentDidUnload&&n.componentDidUnload()}e.u.v(t),e.me.delete(t),[e.F,e.ve,e.H].forEach(e=>e.delete(t))}})(e,this)},n["s-init"]=function(){((e,t,n,o,l,i,s)=>{if((l=e.P.get(t))&&!e.I.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.le.set(t,!0),(s=e.he.has(t))||(e.he.set(t,!0),t["s-ld"]=void 0,e.u.ye(t,n));try{m(e.G.get(t)),(i=e.ve.get(t))&&(i.forEach(e=>e(t)),e.ve.delete(t)),!s&&l.componentDidLoad&&l.componentDidLoad()}catch(n){e.J(n,4,t)}T(e,t)}})(e,this,o)},n.forceUpdate=function(){j(e,this,l)},t.i){const o=Object.entries(t.i);{let e={};o.forEach(([t,{M:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function l(e,t,n,o){const l=e[i(n)];l&&(t[l]=(null!==o||"boolean"!=typeof t[l])&&o)})(e,this,t,o)}}R(e,o,n,l)}};((t,n,s,r,a,c,f)=>{const u=s.performance,d={html:{}},m=s[t]=s[t]||{},h=((e,t,n)=>{const l=new WeakMap,s={we:n,re:!!n.documentElement.attachShadow,Me:!1,be:e=>e.nodeType,ge:e=>n.createElement(e),$e:(e,t)=>n.createElementNS(e,t),ae:e=>n.createTextNode(e),ke:e=>n.createComment(e),ce:(e,t,n)=>e.insertBefore(t,n),je:e=>e.remove(),Ce:(e,t)=>e.appendChild(t),ye:(e,t)=>{e.classList.add(t)},fe:e=>e.childNodes,de:e=>e.parentNode,We:e=>e.nextSibling,Ne:e=>e.previousSibling,Oe:e=>i(e.nodeName),Ee:e=>e.textContent,Se:(e,t)=>e.textContent=t,se:(e,t)=>e.getAttribute(t),xe:(e,t,n)=>e.setAttribute(t,n),s:(e,t)=>e.removeAttribute(t),p:(e,t)=>e.hasAttribute(t),ie:t=>t.getAttribute("mode")||(e.Context||{}).mode,Ae:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?s.ne(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,m:(t,n,i,r,a,c,f,u,p,d)=>{let b=t,m=i,v=l.get(t);d=n+r,v&&v[d]&&v[d](),"string"==typeof f?b=s.Ae(t,f):"object"==typeof f?b=f:(p=n.split(":")).length>1&&(b=s.Ae(t,p[0]),n=p[1]),b&&((p=n.split(".")).length>1&&(n=p[0],m=(e=>{e.keyCode===o[p[1]]&&i(e)})),u=s.Me?{capture:!!a,passive:!!c}:!!a,e.ael(b,n,m,u),v||l.set(t,v={}),v[d]=(()=>{b&&e.rel(b,n,m,u),v[d]=null}))},v:(e,t,n,o)=>{(o=l.get(e))&&(t?o[t+n]&&o[t+n]():Object.keys(o).forEach(e=>{o[e]&&o[e]()}))},Te:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),ne:(e,t)=>(t=s.de(e))&&11===s.be(t)?t.host:t,Re:(e,t,n,o)=>e.setAttributeNS(t,n,o)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>s.Me=!0}))}catch(e){}return s})(m,s,r),y=h.we.documentElement,w=s["s-defined"]=s["s-defined"]||{},M=(e,t)=>{s.customElements.get(e.C)||(L($,d[e.C]=e,t.prototype,c,u),t.observedAttributes=Object.values(e.i).map(e=>e.M).filter(e=>!!e),s.customElements.define(e.C,t))},$={u:h,Le:M,l:e=>d[h.Oe(e)],De:e=>n[e],isClient:!0,oe:e=>!(!w[h.Oe(e)]&&!$.l(e)),J:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:n.queue=v(m,s),ue:(e,t)=>{{const n=e.W;let o=a+n+".entry.js";import(o).then(n=>{try{e.U=n[(e=>i(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.C)],j($,t,u)}catch(t){console.error(t),e.U=class{}}},e=>console.error(e,o))}},Z:!1,B:!1,pe:!1,qe:void 0,F:new WeakMap,Be:new WeakMap,ee:new WeakMap,me:new WeakMap,he:new WeakMap,le:new WeakMap,X:new WeakMap,H:new WeakMap,P:new WeakMap,I:new WeakMap,q:new WeakMap,ve:new WeakMap,Ie:new WeakMap,G:new WeakMap,K:new WeakMap,D:new Set,_:[]};return n.isServer=n.isPrerender=!(n.isClient=!0),n.window=s,n.location=s.location,n.document=r,n.resourcesUrl=n.publicPath=a,$.Y=n.emit=((e,t,o)=>h.Te(e,n.eventNameFn?n.eventNameFn(t):t,o)),m.h=e,m.Context=n,m.onReady=(()=>new Promise(e=>$.queue.write(()=>$.D.size?$._.push(e):e()))),$.render=((e,t)=>{let n,o,i,s,r,a,c;const f=(i,d,m,v,h,y,w,M,g)=>{if(M=d.vchildren[m],n||(s=!0,"slot"===M.vtag&&(o&&t.ye(v,o+"-s"),M.vchildren?M.Pe=!0:M.Fe=!0)),l(M.vtext))M.t=t.ae(M.vtext);else if(M.Fe)M.t=t.ae("");else{if(y=M.t=b||"svg"===M.vtag?t.$e("http://www.w3.org/2000/svg",M.vtag):t.ge(M.Pe?"slot-fb":M.vtag),e.oe(y)&&e.le.delete(c),b="svg"===M.vtag||"foreignObject"!==M.vtag&&b,p(e,null,M,b),l(o)&&y["s-si"]!==o&&t.ye(y,y["s-si"]=o),M.vchildren)for(h=0;h<M.vchildren.length;++h)(w=f(i,M,h,y))&&t.Ce(y,w);"svg"===M.vtag&&(b=!1)}return M.t["s-hn"]=a,(M.Pe||M.Fe)&&(M.t["s-sr"]=!0,M.t["s-cr"]=r,M.t["s-sn"]=M.vname||"",(g=i&&i.vchildren&&i.vchildren[m])&&g.vtag===M.vtag&&i.t&&u(i.t)),M.t},u=(n,o,l,i)=>{e.pe=!0;const r=t.fe(n);for(l=r.length-1;l>=0;l--)(i=r[l])["s-hn"]!==a&&i["s-ol"]&&(t.je(i),t.ce(y(i),i,h(i)),t.je(i["s-ol"]),i["s-ol"]=null,s=!0),o&&u(i,o);e.pe=!1},d=(e,n,o,i,s,r,c,u)=>{const p=e["s-cr"];for((c=p&&t.de(p)||e).shadowRoot&&t.Oe(c)===a&&(c=c.shadowRoot);s<=r;++s)i[s]&&(u=l(i[s].vtext)?t.ae(i[s].vtext):f(null,o,s,e))&&(i[s].t=u,t.ce(c,u,h(n)))},m=(e,n,o,s)=>{for(;n<=o;++n)l(e[n])&&(s=e[n].t,i=!0,s["s-ol"]?t.je(s["s-ol"]):u(s,!0),t.je(s))},v=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),h=e=>e&&e["s-ol"]?e["s-ol"]:e,y=e=>t.de(e["s-ol"]?e["s-ol"]:e),w=(n,o,i)=>{const s=o.t=n.t,r=n.vchildren,a=o.vchildren;b=o.t&&l(t.ne(o.t))&&void 0!==o.t.ownerSVGElement,b="svg"===o.vtag||"foreignObject"!==o.vtag&&b,l(o.vtext)?(i=s["s-cr"])?t.Se(t.de(i),o.vtext):n.vtext!==o.vtext&&t.Se(s,o.vtext):("slot"!==o.vtag&&p(e,n,o,b),l(r)&&l(a)?((e,n,o,i,s,r,a,c)=>{let p=0,b=0,M=n.length-1,g=n[0],$=n[M],k=i.length-1,j=i[0],C=i[k];for(;p<=M&&b<=k;)if(null==g)g=n[++p];else if(null==$)$=n[--M];else if(null==j)j=i[++b];else if(null==C)C=i[--k];else if(v(g,j))w(g,j),g=n[++p],j=i[++b];else if(v($,C))w($,C),$=n[--M],C=i[--k];else if(v(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||u(t.de(g.t)),w(g,C),t.ce(e,g.t,t.We($.t)),g=n[++p],C=i[--k];else if(v($,j))"slot"!==g.vtag&&"slot"!==C.vtag||u(t.de($.t)),w($,j),t.ce(e,$.t,g.t),$=n[--M],j=i[++b];else{for(s=null,r=p;r<=M;++r)if(n[r]&&l(n[r].vkey)&&n[r].vkey===j.vkey){s=r;break}l(s)?((c=n[s]).vtag!==j.vtag?a=f(n&&n[b],o,s,e):(w(c,j),n[s]=void 0,a=c.t),j=i[++b]):(a=f(n&&n[b],o,b,e),j=i[++b]),a&&t.ce(y(g.t),a,h(g.t))}p>M?d(e,null==i[k+1]?null:i[k+1].t,o,i,b,k):b>k&&m(n,p,M)})(s,r,o,a):l(a)?(l(n.vtext)&&t.Se(s,""),d(s,null,o,a,0,a.length-1)):l(r)&&m(r,0,r.length-1)),b&&"svg"===o.vtag&&(b=!1)},M=(e,n,o,l,i,s,r,a)=>{for(l=0,i=(o=t.fe(e)).length;l<i;l++)if(n=o[l],1===t.be(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<i;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.be(o[s]),""!==r){if(1===a&&r===t.se(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Ee(o[s]).trim()){n.hidden=!0;break}M(n)}},g=[],$=(e,n,o,l,s,r,a,c,f,u)=>{for(s=0,r=(n=t.fe(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(c=t.fe(t.de(l)),f=o["s-sn"],a=c.length-1;a>=0;a--)(l=c[a])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.be(l))||8===u)&&""===f||1===u&&null===t.se(l,"slot")&&""===f||1===u&&t.se(l,"slot")===f)&&(g.some(e=>e.He===l)||(i=!0,l["s-sn"]=f,g.push({Qe:o,He:l})));1===t.be(o)&&$(o)}};return(l,f,u,p,d,b,m,v,h,y,k,j)=>{if(c=l,a=t.Oe(c),r=c["s-cr"],n=p,o=c["s-sc"],s=i=!1,w(f,u),s){for($(u.t),m=0;m<g.length;m++)(v=g[m]).He["s-ol"]||((h=t.ae(""))["s-nr"]=v.He,t.ce(t.de(v.He),v.He["s-ol"]=h,v.He));for(e.pe=!0,m=0;m<g.length;m++){for(v=g[m],k=t.de(v.Qe),j=t.We(v.Qe),h=v.He["s-ol"];h=t.Ne(h);)if((y=h["s-nr"])&&y&&y["s-sn"]===v.He["s-sn"]&&k===t.de(y)&&(y=t.We(y))&&y&&!y["s-nr"]){j=y;break}(!j&&k!==t.de(v.He)||t.We(v.He)!==j)&&v.He!==j&&(t.je(v.He),t.ce(k,v.He,j))}e.pe=!1}return i&&M(u.t),g.length=0,u}})($,h),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=(()=>{$.le.set(y,m.loaded=$.B=!0),h.Te(s,"appload",{detail:{namespace:t}})}),f.map(g).forEach(e=>M(e,class extends HTMLElement{})),$.te||y["s-init"](),((e,t,n,o,l,i)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.l(t);if(o)if(e.le.has(t))n(t);else{const o=e.ve.get(t)||[];o.push(n),e.ve.set(t,o)}return!!o}),l){for(i=l.length-1;i>=0;i--)t.componentOnReady(l[i][0],l[i][1])&&l.splice(i,1);for(i=0;i<o.length;i++)if(!n[o[i]].componentOnReady)return;for(i=0;i<l.length;i++)l[i][1](null);l.length=0}})($,m,s,s["s-apps"],s["s-cr"]),m.initialized=!0,$})(n,x,w,d,r,h,c);
})(window,document,{},"QuillComponent","hydrated",[["quill-component","pgg1pqap",0,[["bounds",1,0,1,2],["content",1,0,1,2],["customToolbarPosition",1,0,"custom-toolbar-position",2],["debug",1,0,1,2],["format",1,0,1,2],["formats",1],["modules",1],["placeholder",1,0,1,2],["preserveWhitespace",1,0,"preserve-whitespace",4],["readOnly",1,0,"read-only",4],["scrollingContainer",1,0,"scrolling-container",2],["strict",1,0,1,4],["styles",1,0,1,1],["theme",1,0,1,2],["wrapperElement",64]],2]]);