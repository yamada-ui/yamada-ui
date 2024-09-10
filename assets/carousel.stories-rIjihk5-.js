import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as _}from"./index-BwDkhjyp.js";import{u as Dn}from"./index-BpAeq05e.js";import{u as G}from"./index-_OHKpVK5.js";import{u as xs}from"./index-Drjw1BrQ.js";import{l as ys,S as js,a2 as ws,e as vs,f as mn,h as an,d as ts,t as Is,w as Sn,_ as zs,a5 as Ps,b as pe,c as me,A as Es,G as ks}from"./factory-DIvfNQLw.js";import{f as ge}from"./forward-ref-DKTvpK5d.js";import{c as os}from"./icon-Bon_IeHI.js";import{I as Ts}from"./icon-button-C-0RoSVT.js";import{a as Ls}from"./use-component-style-BLXFHnsW.js";import{o as As}from"./theme-provider-8-IaQrJV.js";import{P as Ds}from"./progress-e8nzn7vw.js";import{A as On}from"./arrow-left-UrgVJCHm.js";import{A as _n}from"./arrow-right-mtApXo7R.js";import{C as c}from"./center-Dr5vOzSJ.js";import{C as Ie,a as ze,b as Pe,c as Ee}from"./card-DQytmH_g.js";import{I as ke}from"./image-FVZ9ncrI.js";import{H as Te}from"./heading-DGU9zRXp.js";import{T as Le}from"./text-C5tpoCpM.js";import{B as Ae}from"./button-CaNlM53L.js";import{G as as}from"./ghost-CUFOvuGV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BLm21oHB.js";import"./extends-CF3RwP-h.js";import"./index-CVmSupn9.js";import"./index-Du0-7Fls.js";import"./index-b0IlQm1R.js";import"./number-49BHn0Cl.js";import"./lucide-icon-Dvdgi_la.js";import"./use-image-HQocbB5N.js";import"./use-ripple-sRmjwWlS.js";import"./factory-DY7K8SpK.js";import"./motion-Bd6WkMzw.js";import"./loading-_68QapUp.js";function Os(n){return Object.prototype.toString.call(n)==="[object Object]"}function Mn(n){return Os(n)||Array.isArray(n)}function _s(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function xn(n,r){const s=Object.keys(n),o=Object.keys(r);if(s.length!==o.length)return!1;const t=JSON.stringify(Object.keys(n.breakpoints||{})),a=JSON.stringify(Object.keys(r.breakpoints||{}));return t!==a?!1:s.every(i=>{const u=n[i],d=r[i];return typeof u=="function"?`${u}`==`${d}`:!Mn(u)||!Mn(d)?u===d:xn(u,d)})}function Fn(n){return n.concat().sort((r,s)=>r.name>s.name?1:-1).map(r=>r.options)}function Ms(n,r){if(n.length!==r.length)return!1;const s=Fn(n),o=Fn(r);return s.every((t,a)=>{const i=o[a];return xn(t,i)})}function yn(n){return typeof n=="number"}function hn(n){return typeof n=="string"}function cn(n){return typeof n=="boolean"}function Bn(n){return Object.prototype.toString.call(n)==="[object Object]"}function B(n){return Math.abs(n)}function jn(n){return Math.sign(n)}function be(n,r){return B(n-r)}function Fs(n,r){if(n===0||r===0||B(n)<=B(r))return 0;const s=be(B(n),B(r));return B(s/n)}function xe(n){return ye(n).map(Number)}function se(n){return n[we(n)]}function we(n){return Math.max(0,n.length-1)}function wn(n,r){return r===we(n)}function Nn(n,r=0){return Array.from(Array(n),(s,o)=>r+o)}function ye(n){return Object.keys(n)}function is(n,r){return[n,r].reduce((s,o)=>(ye(o).forEach(t=>{const a=s[t],i=o[t],u=Bn(a)&&Bn(i);s[t]=u?is(a,i):i}),s),{})}function bn(n,r){return typeof r.MouseEvent<"u"&&n instanceof r.MouseEvent}function Bs(n,r){const s={start:o,center:t,end:a};function o(){return 0}function t(d){return a(d)/2}function a(d){return r-d}function i(d,g){return hn(n)?s[n](d):n(r,d,g)}return{measure:i}}function je(){let n=[];function r(t,a,i,u={passive:!0}){let d;if("addEventListener"in t)t.addEventListener(a,i,u),d=()=>t.removeEventListener(a,i,u);else{const g=t;g.addListener(i),d=()=>g.removeListener(i)}return n.push(d),o}function s(){n=n.filter(t=>t())}const o={add:r,clear:s};return o}function Ns(n,r,s,o){const t=je(),a=1e3/60;let i=null,u=0,d=0;function g(){t.add(n,"visibilitychange",()=>{n.hidden&&p()})}function h(){y(),t.clear()}function f(x){if(!d)return;i||(i=x);const C=x-i;for(i=x,u+=C;u>=a;)s(a),u-=a;const b=u/a;o(b),d&&r.requestAnimationFrame(f)}function m(){d||(d=r.requestAnimationFrame(f))}function y(){r.cancelAnimationFrame(d),i=null,u=0,d=0}function p(){i=null,u=0}return{init:g,destroy:h,start:m,stop:y,update:()=>s(a),render:o}}function Hs(n,r){const s=r==="rtl",o=n==="y",t=o?"y":"x",a=o?"x":"y",i=!o&&s?-1:1,u=h(),d=f();function g(p){const{height:S,width:x}=p;return o?S:x}function h(){return o?"top":s?"right":"left"}function f(){return o?"bottom":s?"left":"right"}function m(p){return p*i}return{scroll:t,cross:a,startEdge:u,endEdge:d,measureSize:g,direction:m}}function Ce(n=0,r=0){const s=B(n-r);function o(g){return g<n}function t(g){return g>r}function a(g){return o(g)||t(g)}function i(g){return a(g)?o(g)?n:r:g}function u(g){return s?g-s*Math.ceil((g-r)/s):g}return{length:s,max:r,min:n,constrain:i,reachedAny:a,reachedMax:t,reachedMin:o,removeOffset:u}}function ls(n,r,s){const{constrain:o}=Ce(0,n),t=n+1;let a=i(r);function i(m){return s?B((t+m)%t):o(m)}function u(){return a}function d(m){return a=i(m),f}function g(m){return h().set(u()+m)}function h(){return ls(n,u(),s)}const f={get:u,set:d,add:g,clone:h};return f}function Gs(n,r,s,o,t,a,i,u,d,g,h,f,m,y,p,S,x,C,b){const{cross:w,direction:T}=n,A=["INPUT","SELECT","TEXTAREA"],L={passive:!1},v=je(),E=je(),I=Ce(50,225).constrain(y.measure(20)),D={mouse:300,touch:400},z={mouse:500,touch:600},V=p?43:25;let X=!1,W=0,$=0,P=!1,ee=!1,J=!1,Y=!1;function te(j){if(!b)return;function O(K){(cn(b)||b(j,K))&&N(K)}const H=r;v.add(H,"dragstart",K=>K.preventDefault(),L).add(H,"touchmove",()=>{},L).add(H,"touchend",()=>{}).add(H,"touchstart",O).add(H,"mousedown",O).add(H,"touchcancel",Q).add(H,"contextmenu",Q).add(H,"click",q,!0)}function R(){v.clear(),E.clear()}function ne(){const j=Y?s:r;E.add(j,"touchmove",F,L).add(j,"touchend",Q).add(j,"mousemove",F,L).add(j,"mouseup",Q)}function U(j){const O=j.nodeName||"";return A.includes(O)}function re(){return(p?z:D)[Y?"mouse":"touch"]}function ie(j,O){const H=f.add(jn(j)*-1),K=h.byDistance(j,!p).distance;return p||B(j)<I?K:x&&O?K*.5:h.byIndex(H.get(),0).distance}function N(j){const O=bn(j,o);Y=O,J=p&&O&&!j.buttons&&X,X=be(t.get(),i.get())>=2,!(O&&j.button!==0)&&(U(j.target)||(P=!0,a.pointerDown(j),g.useFriction(0).useDuration(0),t.set(i),ne(),W=a.readPoint(j),$=a.readPoint(j,w),m.emit("pointerDown")))}function F(j){if(!bn(j,o)&&j.touches.length>=2)return Q(j);const H=a.readPoint(j),K=a.readPoint(j,w),oe=be(H,W),le=be(K,$);if(!ee&&!Y&&(!j.cancelable||(ee=oe>le,!ee)))return Q(j);const ce=a.pointerMove(j);oe>S&&(J=!0),g.useFriction(.3).useDuration(.75),u.start(),t.add(T(ce)),j.preventDefault()}function Q(j){const H=h.byDistance(0,!1).index!==f.get(),K=a.pointerUp(j)*re(),oe=ie(T(K),H),le=Fs(K,oe),ce=V-10*le,de=C+le/50;ee=!1,P=!1,E.clear(),g.useDuration(ce).useFriction(de),d.distance(oe,!p),Y=!1,m.emit("pointerUp")}function q(j){J&&(j.stopPropagation(),j.preventDefault(),J=!1)}function Z(){return P}return{init:te,destroy:R,pointerDown:Z}}function Vs(n,r){let o,t;function a(f){return f.timeStamp}function i(f,m){const p=`client${(m||n.scroll)==="x"?"X":"Y"}`;return(bn(f,r)?f:f.touches[0])[p]}function u(f){return o=f,t=f,i(f)}function d(f){const m=i(f)-i(t),y=a(f)-a(o)>170;return t=f,y&&(o=f),m}function g(f){if(!o||!t)return 0;const m=i(t)-i(o),y=a(f)-a(o),p=a(f)-a(t)>170,S=m/y;return y&&!p&&B(S)>.1?S:0}return{pointerDown:u,pointerMove:d,pointerUp:g,readPoint:i}}function Rs(){function n(s){const{offsetTop:o,offsetLeft:t,offsetWidth:a,offsetHeight:i}=s;return{top:o,right:t+a,bottom:o+i,left:t,width:a,height:i}}return{measure:n}}function Qs(n){function r(o){return n*(o/100)}return{measure:r}}function Xs(n,r,s,o,t,a,i){const u=[n].concat(o);let d,g,h=[],f=!1;function m(x){return t.measureSize(i.measure(x))}function y(x){if(!a)return;g=m(n),h=o.map(m);function C(b){for(const w of b){if(f)return;const T=w.target===n,A=o.indexOf(w.target),L=T?g:h[A],v=m(T?n:o[A]);if(B(v-L)>=.5){x.reInit(),r.emit("resize");break}}}d=new ResizeObserver(b=>{(cn(a)||a(x,b))&&C(b)}),s.requestAnimationFrame(()=>{u.forEach(b=>d.observe(b))})}function p(){f=!0,d&&d.disconnect()}return{init:y,destroy:p}}function $s(n,r,s,o,t,a){let i=0,u=0,d=t,g=a,h=n.get(),f=0;function m(L){const v=L/1e3,E=d*v,I=o.get()-n.get(),D=!d;let z=0;return D?(i=0,s.set(o),n.set(o),z=I):(s.set(n),i+=I/E,i*=g,h+=i,n.add(i*v),z=h-f),u=jn(z),f=h,A}function y(){const L=o.get()-r.get();return B(L)<.001}function p(){return d}function S(){return u}function x(){return i}function C(){return w(t)}function b(){return T(a)}function w(L){return d=L,A}function T(L){return g=L,A}const A={direction:S,duration:p,velocity:x,seek:m,settled:y,useBaseFriction:b,useBaseDuration:C,useFriction:T,useDuration:w};return A}function Us(n,r,s,o,t){const a=t.measure(10),i=t.measure(50),u=Ce(.1,.99);let d=!1;function g(){return!(d||!n.reachedAny(s.get())||!n.reachedAny(r.get()))}function h(y){if(!g())return;const p=n.reachedMin(r.get())?"min":"max",S=B(n[p]-r.get()),x=s.get()-r.get(),C=u.constrain(S/i);s.subtract(x*C),!y&&B(x)<a&&(s.set(n.constrain(s.get())),o.useDuration(25).useBaseFriction())}function f(y){d=!y}return{shouldConstrain:g,constrain:h,toggleActive:f}}function qs(n,r,s,o,t){const a=Ce(-r+n,0),i=f(),u=h(),d=m();function g(p,S){return be(p,S)<1}function h(){const p=i[0],S=se(i),x=i.lastIndexOf(p),C=i.indexOf(S)+1;return Ce(x,C)}function f(){return s.map((p,S)=>{const{min:x,max:C}=a,b=a.constrain(p),w=!S,T=wn(s,S);return w?C:T||g(x,b)?x:g(C,b)?C:b}).map(p=>parseFloat(p.toFixed(3)))}function m(){if(r<=n+t)return[a.max];if(o==="keepSnaps")return i;const{min:p,max:S}=u;return i.slice(p,S)}return{snapsContained:d,scrollContainLimit:u}}function Ks(n,r,s){const o=r[0],t=s?o-n:se(r);return{limit:Ce(t,o)}}function Ws(n,r,s,o){const a=r.min+.1,i=r.max+.1,{reachedMin:u,reachedMax:d}=Ce(a,i);function g(m){return m===1?d(s.get()):m===-1?u(s.get()):!1}function h(m){if(!g(m))return;const y=n*(m*-1);o.forEach(p=>p.add(y))}return{loop:h}}function Js(n){const{max:r,length:s}=n;function o(a){const i=a-r;return s?i/-s:0}return{get:o}}function Ys(n,r,s,o,t){const{startEdge:a,endEdge:i}=n,{groupSlides:u}=t,d=f().map(r.measure),g=m(),h=y();function f(){return u(o).map(S=>se(S)[i]-S[0][a]).map(B)}function m(){return o.map(S=>s[a]-S[a]).map(S=>-B(S))}function y(){return u(g).map(S=>S[0]).map((S,x)=>S+d[x])}return{snaps:g,snapsAligned:h}}function Zs(n,r,s,o,t,a){const{groupSlides:i}=t,{min:u,max:d}=o,g=h();function h(){const m=i(a),y=!n||r==="keepSnaps";return s.length===1?[a]:y?m:m.slice(u,d).map((p,S,x)=>{const C=!S,b=wn(x,S);if(C){const w=se(x[0])+1;return Nn(w)}if(b){const w=we(a)-se(x)[0]+1;return Nn(w,se(x)[0])}return p})}return{slideRegistry:g}}function et(n,r,s,o,t){const{reachedAny:a,removeOffset:i,constrain:u}=o;function d(p){return p.concat().sort((S,x)=>B(S)-B(x))[0]}function g(p){const S=n?i(p):u(p),x=r.map((b,w)=>({diff:h(b-S,0),index:w})).sort((b,w)=>B(b.diff)-B(w.diff)),{index:C}=x[0];return{index:C,distance:S}}function h(p,S){const x=[p,p+s,p-s];if(!n)return p;if(!S)return d(x);const C=x.filter(b=>jn(b)===S);return C.length?d(C):se(x)-s}function f(p,S){const x=r[p]-t.get(),C=h(x,S);return{index:p,distance:C}}function m(p,S){const x=t.get()+p,{index:C,distance:b}=g(x),w=!n&&a(x);if(!S||w)return{index:C,distance:p};const T=r[C]-b,A=p+h(T,0);return{index:C,distance:A}}return{byDistance:m,byIndex:f,shortcut:h}}function nt(n,r,s,o,t,a,i){function u(f){const m=f.distance,y=f.index!==r.get();a.add(m),m&&(o.duration()?n.start():(n.update(),n.render(1),n.update())),y&&(s.set(r.get()),r.set(f.index),i.emit("select"))}function d(f,m){const y=t.byDistance(f,m);u(y)}function g(f,m){const y=r.clone().set(f),p=t.byIndex(y.get(),m);u(p)}return{distance:d,index:g}}function rt(n,r,s,o,t,a,i,u){const d={passive:!0,capture:!0};let g=0;function h(y){if(!u)return;function p(S){if(new Date().getTime()-g>10)return;i.emit("slideFocusStart"),n.scrollLeft=0;const b=s.findIndex(w=>w.includes(S));yn(b)&&(t.useDuration(0),o.index(b,0),i.emit("slideFocus"))}a.add(document,"keydown",f,!1),r.forEach((S,x)=>{a.add(S,"focus",C=>{(cn(u)||u(y,C))&&p(x)},d)})}function f(y){y.code==="Tab"&&(g=new Date().getTime())}return{init:h}}function he(n){let r=n;function s(){return r}function o(d){r=i(d)}function t(d){r+=i(d)}function a(d){r-=i(d)}function i(d){return yn(d)?d:d.get()}return{get:s,set:o,add:t,subtract:a}}function cs(n,r){const s=n.scroll==="x"?a:i,o=r.style;let t=!1;function a(f){return`translate3d(${f}px,0px,0px)`}function i(f){return`translate3d(0px,${f}px,0px)`}function u(f){t||(o.transform=s(n.direction(f)))}function d(f){t=!f}function g(){t||(o.transform="",r.getAttribute("style")||r.removeAttribute("style"))}return{clear:g,to:u,toggleActive:d}}function st(n,r,s,o,t,a,i,u,d){const h=xe(t),f=xe(t).reverse(),m=C().concat(b());function y(v,E){return v.reduce((I,D)=>I-t[D],E)}function p(v,E){return v.reduce((I,D)=>y(I,E)>0?I.concat([D]):I,[])}function S(v){return a.map((E,I)=>({start:E-o[I]+.5+v,end:E+r-.5+v}))}function x(v,E,I){const D=S(E);return v.map(z=>{const V=I?0:-s,X=I?s:0,W=I?"end":"start",$=D[z][W];return{index:z,loopPoint:$,slideLocation:he(-1),translate:cs(n,d[z]),target:()=>u.get()>$?V:X}})}function C(){const v=i[0],E=p(f,v);return x(E,s,!1)}function b(){const v=r-i[0]-1,E=p(h,v);return x(E,-s,!0)}function w(){return m.every(({index:v})=>{const E=h.filter(I=>I!==v);return y(E,r)<=.1})}function T(){m.forEach(v=>{const{target:E,translate:I,slideLocation:D}=v,z=E();z!==D.get()&&(I.to(z),D.set(z))})}function A(){m.forEach(v=>v.translate.clear())}return{canLoop:w,clear:A,loop:T,loopPoints:m}}function tt(n,r,s){let o,t=!1;function a(d){if(!s)return;function g(h){for(const f of h)if(f.type==="childList"){d.reInit(),r.emit("slidesChanged");break}}o=new MutationObserver(h=>{t||(cn(s)||s(d,h))&&g(h)}),o.observe(n,{childList:!0})}function i(){o&&o.disconnect(),t=!0}return{init:a,destroy:i}}function ot(n,r,s,o){const t={};let a=null,i=null,u,d=!1;function g(){u=new IntersectionObserver(p=>{d||(p.forEach(S=>{const x=r.indexOf(S.target);t[x]=S}),a=null,i=null,s.emit("slidesInView"))},{root:n.parentElement,threshold:o}),r.forEach(p=>u.observe(p))}function h(){u&&u.disconnect(),d=!0}function f(p){return ye(t).reduce((S,x)=>{const C=parseInt(x),{isIntersecting:b}=t[C];return(p&&b||!p&&!b)&&S.push(C),S},[])}function m(p=!0){if(p&&a)return a;if(!p&&i)return i;const S=f(p);return p&&(a=S),p||(i=S),S}return{init:g,destroy:h,get:m}}function at(n,r,s,o,t,a){const{measureSize:i,startEdge:u,endEdge:d}=n,g=s[0]&&t,h=p(),f=S(),m=s.map(i),y=x();function p(){if(!g)return 0;const b=s[0];return B(r[u]-b[u])}function S(){if(!g)return 0;const b=a.getComputedStyle(se(o));return parseFloat(b.getPropertyValue(`margin-${d}`))}function x(){return s.map((b,w,T)=>{const A=!w,L=wn(T,w);return A?m[w]+h:L?m[w]+f:T[w+1][u]-b[u]}).map(B)}return{slideSizes:m,slideSizesWithGaps:y,startGap:h,endGap:f}}function it(n,r,s,o,t,a,i,u,d){const{startEdge:g,endEdge:h,direction:f}=n,m=yn(s);function y(C,b){return xe(C).filter(w=>w%b===0).map(w=>C.slice(w,w+b))}function p(C){return C.length?xe(C).reduce((b,w,T)=>{const A=se(b)||0,L=A===0,v=w===we(C),E=t[g]-a[A][g],I=t[g]-a[w][h],D=!o&&L?f(i):0,z=!o&&v?f(u):0,V=B(I-z-(E+D));return T&&V>r+d&&b.push(w),v&&b.push(C.length),b},[]).map((b,w,T)=>{const A=Math.max(T[w-1]||0);return C.slice(A,b)}):[]}function S(C){return m?y(C,s):p(C)}return{groupSlides:S}}function lt(n,r,s,o,t,a,i){const{align:u,axis:d,direction:g,startIndex:h,loop:f,duration:m,dragFree:y,dragThreshold:p,inViewThreshold:S,slidesToScroll:x,skipSnaps:C,containScroll:b,watchResize:w,watchSlides:T,watchDrag:A,watchFocus:L}=a,v=2,E=Rs(),I=E.measure(r),D=s.map(E.measure),z=Hs(d,g),V=z.measureSize(I),X=Qs(V),W=Bs(u,V),$=!f&&!!b,P=f||!!b,{slideSizes:ee,slideSizesWithGaps:J,startGap:Y,endGap:te}=at(z,I,D,s,P,t),R=it(z,V,x,f,I,D,Y,te,v),{snaps:ne,snapsAligned:U}=Ys(z,W,I,D,R),re=-se(ne)+se(J),{snapsContained:ie,scrollContainLimit:N}=qs(V,re,U,b,v),F=$?ie:U,{limit:Q}=Ks(re,F,f),q=ls(we(F),h,f),Z=q.clone(),M=xe(s),j=({dragHandler:ue,scrollBody:fn,scrollBounds:Cn,options:{loop:ve}},pn)=>{ve||Cn.constrain(ue.pointerDown()),fn.seek(pn)},O=({scrollBody:ue,translate:fn,location:Cn,offsetLocation:ve,scrollLooper:pn,slideLooper:Cs,dragHandler:ps,animation:ms,eventHandler:En,scrollBounds:Ss,options:{loop:kn}},Tn)=>{const Ln=ue.settled(),hs=!Ss.shouldConstrain(),An=kn?Ln:Ln&&hs;An&&!ps.pointerDown()&&(ms.stop(),En.emit("settle")),An||En.emit("scroll");const bs=Cn.get()*Tn+ce.get()*(1-Tn);ve.set(bs),kn&&(pn.loop(ue.direction()),Cs.loop()),fn.to(ve.get())},H=Ns(o,t,ue=>j(gn,ue),ue=>O(gn,ue)),K=.68,oe=F[q.get()],le=he(oe),ce=he(oe),de=he(oe),fe=he(oe),Se=$s(le,de,ce,fe,m,K),dn=et(f,F,re,Q,fe),un=nt(H,q,Z,Se,dn,fe,i),In=Js(Q),zn=je(),gs=ot(r,s,i,S),{slideRegistry:Pn}=Zs($,b,F,N,R,M),fs=rt(n,s,Pn,un,Se,zn,i,L),gn={ownerDocument:o,ownerWindow:t,eventHandler:i,containerRect:I,slideRects:D,animation:H,axis:z,dragHandler:Gs(z,n,o,t,fe,Vs(z,t),le,H,un,Se,dn,q,i,X,y,p,C,K,A),eventStore:zn,percentOfView:X,index:q,indexPrevious:Z,limit:Q,location:le,offsetLocation:de,previousLocation:ce,options:a,resizeHandler:Xs(r,i,t,s,z,w,E),scrollBody:Se,scrollBounds:Us(Q,de,fe,Se,X),scrollLooper:Ws(re,Q,de,[le,de,ce,fe]),scrollProgress:In,scrollSnapList:F.map(In.get),scrollSnaps:F,scrollTarget:dn,scrollTo:un,slideLooper:st(z,V,re,ee,J,ne,F,de,s),slideFocus:fs,slidesHandler:tt(r,i,T),slidesInView:gs,slideIndexes:M,slideRegistry:Pn,slidesToScroll:R,target:fe,translate:cs(z,r)};return gn}function ct(){let n={},r;function s(g){r=g}function o(g){return n[g]||[]}function t(g){return o(g).forEach(h=>h(r,g)),d}function a(g,h){return n[g]=o(g).concat([h]),d}function i(g,h){return n[g]=o(g).filter(f=>f!==h),d}function u(){n={}}const d={init:s,emit:t,off:i,on:a,clear:u};return d}const dt={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function ut(n){function r(a,i){return is(a,i||{})}function s(a){const i=a.breakpoints||{},u=ye(i).filter(d=>n.matchMedia(d).matches).map(d=>i[d]).reduce((d,g)=>r(d,g),{});return r(a,u)}function o(a){return a.map(i=>ye(i.breakpoints||{})).reduce((i,u)=>i.concat(u),[]).map(n.matchMedia)}return{mergeOptions:r,optionsAtMedia:s,optionsMediaQueries:o}}function gt(n){let r=[];function s(a,i){return r=i.filter(({options:u})=>n.optionsAtMedia(u).active!==!1),r.forEach(u=>u.init(a,n)),i.reduce((u,d)=>Object.assign(u,{[d.name]:d}),{})}function o(){r=r.filter(a=>a.destroy())}return{init:s,destroy:o}}function ln(n,r,s){const o=n.ownerDocument,t=o.defaultView,a=ut(t),i=gt(a),u=je(),d=ct(),{mergeOptions:g,optionsAtMedia:h,optionsMediaQueries:f}=a,{on:m,off:y,emit:p}=d,S=z;let x=!1,C,b=g(dt,ln.globalOptions),w=g(b),T=[],A,L,v;function E(){const{container:M,slides:j}=w;L=(hn(M)?n.querySelector(M):M)||n.children[0];const H=hn(j)?L.querySelectorAll(j):j;v=[].slice.call(H||L.children)}function I(M){const j=lt(n,L,v,o,t,M,d);if(M.loop&&!j.slideLooper.canLoop()){const O=Object.assign({},M,{loop:!1});return I(O)}return j}function D(M,j){x||(b=g(b,M),w=h(b),T=j||T,E(),C=I(w),f([b,...T.map(({options:O})=>O)]).forEach(O=>u.add(O,"change",z)),w.active&&(C.translate.to(C.location.get()),C.animation.init(),C.slidesInView.init(),C.slideFocus.init(Z),C.eventHandler.init(Z),C.resizeHandler.init(Z),C.slidesHandler.init(Z),C.options.loop&&C.slideLooper.loop(),L.offsetParent&&v.length&&C.dragHandler.init(Z),A=i.init(Z,T)))}function z(M,j){const O=R();V(),D(g({startIndex:O},M),j),d.emit("reInit")}function V(){C.dragHandler.destroy(),C.eventStore.clear(),C.translate.clear(),C.slideLooper.clear(),C.resizeHandler.destroy(),C.slidesHandler.destroy(),C.slidesInView.destroy(),C.animation.destroy(),i.destroy(),u.clear()}function X(){x||(x=!0,u.clear(),V(),d.emit("destroy"),d.clear())}function W(M,j,O){!w.active||x||(C.scrollBody.useBaseFriction().useDuration(j===!0?0:w.duration),C.scrollTo.index(M,O||0))}function $(M){const j=C.index.add(1).get();W(j,M,-1)}function P(M){const j=C.index.add(-1).get();W(j,M,1)}function ee(){return C.index.add(1).get()!==R()}function J(){return C.index.add(-1).get()!==R()}function Y(){return C.scrollSnapList}function te(){return C.scrollProgress.get(C.location.get())}function R(){return C.index.get()}function ne(){return C.indexPrevious.get()}function U(){return C.slidesInView.get()}function re(){return C.slidesInView.get(!1)}function ie(){return A}function N(){return C}function F(){return n}function Q(){return L}function q(){return v}const Z={canScrollNext:ee,canScrollPrev:J,containerNode:Q,internalEngine:N,destroy:X,off:y,on:m,emit:p,plugins:ie,previousScrollSnap:ne,reInit:S,rootNode:F,scrollNext:$,scrollPrev:P,scrollProgress:te,scrollSnapList:Y,scrollTo:W,selectedScrollSnap:R,slideNodes:q,slidesInView:U,slidesNotInView:re};return D(r,s),setTimeout(()=>d.emit("init"),0),Z}ln.globalOptions=void 0;function vn(n={},r=[]){const s=_.useRef(n),o=_.useRef(r),[t,a]=_.useState(),[i,u]=_.useState(),d=_.useCallback(()=>{t&&t.reInit(s.current,o.current)},[t]);return _.useEffect(()=>{if(_s()&&i){ln.globalOptions=vn.globalOptions;const g=ln(i,s.current,o.current);return a(g),()=>g.destroy()}else a(void 0)},[i,a]),_.useEffect(()=>{xn(s.current,n)||(s.current=n,d())},[n,d]),_.useEffect(()=>{Ms(o.current,r)||(o.current=r,d())},[r,d]),[u,t]}vn.globalOptions=void 0;const[ft,ae]=ys({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),Ct=({index:n,defaultIndex:r=0,onChange:s,align:o="center",orientation:t="horizontal",autoplay:a=!1,stopMouseEnterAutoplay:i=!0,loop:u=!0,duration:d=25,delay:g=4e3,slidesToScroll:h=1,draggable:f=!0,dragFree:m=!1,inViewThreshold:y=0,skipSnaps:p=!1,containScroll:S=!1,slideSize:x="100%",includeGapInSize:C=!0,onScrollProgress:b,watchDrag:w=f,watchResize:T,watchSlides:A,controlRef:L,children:v,...E})=>{const[{gap:I="fallback(4, 1rem)",...D},z]=js(E,ws),[V,X]=xs({value:n,defaultValue:r,onChange:s}),W=t==="vertical",[$,P]=vn({axis:W?"y":"x",startIndex:r,loop:u,align:o,slidesToScroll:h,duration:d,dragFree:m,inViewThreshold:y,skipSnaps:p,containScroll:S,watchDrag:w,watchResize:T,watchSlides:A},[]);vs(L,P);const[ee,J]=_.useState([]),[Y,te]=_.useState(!1),R=_.useRef(void 0),ne=_.useCallback(()=>{if(!P)return;const N=Math.round(Math.max(0,Math.min(1,P.scrollProgress()))*100);b==null||b(N)},[P,b]),U=_.useCallback(()=>{if(!P)return;const N=P.selectedScrollSnap();X(N)},[P,X]);_.useEffect(()=>{const N=Y&&i,F=!(P!=null&&P.canScrollNext());return P&&a&&!N&&!F?R.current=setInterval(()=>{P.scrollNext()},g):(R.current&&clearInterval(R.current),R.current=void 0),()=>{R.current&&clearInterval(R.current)}},[a,g,i,P,Y,u,V]),mn(()=>{if(!P)return;P.reInit();const F=P.scrollSnapList().map((Q,q)=>q);J(F)},[_.Children.toArray(v).length,o,t,u,d,I,h,f,m,y,p,S,x,C]),mn(()=>{if(!P)return;const F=P.scrollSnapList().map((Q,q)=>q);J(F)},[P]),mn(()=>{if(P)return P.on("select",U),P.on("scroll",ne),ne(),()=>{P.off("select",U),P.off("scroll",ne)}},[P,ne]);const re=_.useCallback((N={},F=null)=>({...D,...N,ref:F,onMouseEnter:an(N.onMouseEnter,()=>{te(!0)}),onMouseLeave:an(N.onMouseLeave,()=>{te(!1)})}),[D]),ie=_.useCallback((N={})=>({...z,...N,ref:$}),[z,$]);return{carousel:P,children:v,indexes:ee,selectedIndex:V,orientation:t,slideSize:x,gap:I,slidesToScroll:h,includeGapInSize:C,getContainerProps:re,getSlidesProps:ie}},pt=({index:n})=>{const{selectedIndex:r,slidesToScroll:s}=ae();n=Math.floor((n??0)/(s??1));const o=n===r;return{getSlideProps:_.useCallback((a={})=>({...a,"data-index":n,"data-selected":ts(o)}),[o,n])}},ds=({operation:n,...r})=>{const{carousel:s}=ae(),o=n==="prev",t=r.disabled??r.isDisabled??(o?!(s!=null&&s.canScrollPrev()):!(s!=null&&s.canScrollNext())),a=_.useCallback(()=>{s&&(o?s.scrollPrev():s.scrollNext())},[s,o]);return{getControlProps:_.useCallback((u={},d=null)=>({...u,ref:d,disabled:t,onClick:an(u.onClick,a)}),[t,a])}},mt=()=>{const{selectedIndex:n,carousel:r,indexes:s}=ae(),o=_.useCallback((a,i)=>{r&&(a.stopPropagation(),r.scrollTo(i))},[r]),t=_.useCallback(({index:a,...i})=>{const u=a===n;return{"aria-label":`Go to ${a+1} slide`,...i,key:a,"data-index":a,"data-selected":ts(u),onClick:an(i.onClick,d=>o(d,a))}},[o,n]);return{indexes:s,getIndicatorProps:t}},k=ge(({h:n,height:r,minH:s,minHeight:o,...t},a)=>{const i=G(t.orientation),u=G(t.align),d=G(t.autoplay),g=G(t.stopMouseEnterAutoplay),h=G(t.loop),f=G(t.duration),m=G(t.delay),y=G(t.slidesToScroll),p=G(t.draggable),S=G(t.dragFree),x=G(t.inViewThreshold),C=G(t.skipSnaps),b=G(t.containScroll),w=G(t.includeGapInSize),T=Dn("spaces",G(t.gap))??G(t.gap),A=Dn("sizes",G(t.slideSize))??G(t.slideSize),[L,v]=Ls("Carousel",{...t,orientation:i,align:u,autoplay:d,stopMouseEnterAutoplay:g,loop:h,duration:f,delay:m,slidesToScroll:y,draggable:p,dragFree:S,inViewThreshold:x,skipSnaps:C,containScroll:b,includeGapInSize:w,gap:T,slideSize:A}),{className:E,innerProps:I,withControls:D=!0,controlProps:z,controlPrevProps:V,controlNextProps:X,withIndicators:W=!0,indicatorsProps:$,...P}=As(v),ee=G(D),J=G(W),{getContainerProps:Y,getSlidesProps:te,children:R,...ne}=Ct({...P}),U=Is(R),[re]=Sn(U,sn),[ie]=Sn(U,tn),[N]=Sn(U,on),F=zs(U,l),Q=Ps(U,sn,tn,on,l),q=F.map((Z,M)=>_.cloneElement(Z,{index:M}));return n??(n=r),s??(s=o),e.jsx(ft,{value:{styles:L,...ne},children:e.jsxs(pe.div,{className:me("ui-carousel",E),__css:{position:"relative",h:"fit-content",...L.container},...Y({},a),children:[re??(ee?e.jsx(sn,{...z,...V}):null),ie??(ee?e.jsx(tn,{...z,...X}):null),e.jsx(St,{...te({...Es({h:n,minH:s}),...I}),children:q}),N??(J?e.jsx(on,{...$}):null),Q]})})}),St=ge(({...n},r)=>{const s={w:"100%",h:"fit-content",overflow:"hidden"};return e.jsx(pe.div,{ref:r,className:"ui-carousel__sliders",__css:s,children:e.jsx(ht,{...n})})}),ht=({...n})=>{const{orientation:r,includeGapInSize:s,gap:o,styles:t}=ae(),a={display:"flex",flexDirection:r==="vertical"?"column":"row",...t.inner,...s?{vars:[{name:"gap",token:"spaces",value:o}],[r==="vertical"?"mb":"mr"]:"calc($gap * -1)"}:{}};return e.jsx(pe.div,{className:"ui-carousel__sliders__inner",__css:a,...n})},l=ge(({className:n,size:r,...s},o)=>{const{slideSize:t,includeGapInSize:a,orientation:i,gap:u}=ae(),{getSlideProps:d}=pt(s);r??(r=t);const g={position:"relative",flex:`0 0 ${r}`,...a?{[i==="vertical"?"pb":"pr"]:u}:{[i==="vertical"?"mb":"mr"]:u}};return e.jsx(pe.div,{className:me("ui-carousel__slide",n),__css:g,...d({}),children:e.jsx(bt,{ref:o,...s})})}),bt=ge(({...n},r)=>e.jsx(pe.div,{ref:r,className:"ui-carousel__slide__inner",w:"100%",h:"100%",...n})),sn=ge(({className:n,...r},s)=>{const{orientation:o}=ae(),{getControlProps:t}=ds({operation:"prev"});return e.jsx(us,{operation:"prev",className:me("ui-carousel__control--prev",n),"aria-label":"Go to previous slide",icon:e.jsx(os,{__css:{fontSize:"1.5em",transform:o==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),...t(r,s)})}),tn=ge(({className:n,...r},s)=>{const{orientation:o}=ae(),{getControlProps:t}=ds({operation:"next"});return e.jsx(us,{operation:"next",className:me("ui-carousel__control--next",n),"aria-label":"Go to next slide",icon:e.jsx(os,{__css:{fontSize:"1.5em",transform:o==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),...t(r,s)})}),us=ge(({className:n,operation:r,...s},o)=>{const{styles:t}=ae(),a=ks("whiteAlpha","blackAlpha"),i={position:"absolute",zIndex:"fallback(kurillin, 9)",...t.control,...t[r]};return e.jsx(Ts,{ref:o,className:me("ui-carousel__control",n),colorScheme:a,isRounded:!0,__css:i,...s})}),on=ge(({className:n,component:r,...s},o)=>{const{selectedIndex:t,orientation:a,styles:i}=ae(),{indexes:u,getIndicatorProps:d}=mt(),g={position:"absolute",zIndex:"fallback(kurillin, 9)",display:"flex",justifyContent:"center",...i.indicators,...a==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(pe.div,{ref:o,className:me("ui-carousel__indicators",n),__css:g,...s,children:u.map(h=>{const f=h===t;if(typeof r=="function"){const m=r({index:h,isSelected:f});if(!m)return null;const y=d({...m.props,index:h});return _.cloneElement(m,y)}else{const{key:m,...y}=d({index:h});return e.jsx(xt,{...y},m)}})})}),xt=({className:n,...r})=>{const{styles:s}=ae(),o={...s.indicator};return e.jsx(pe.button,{type:"button",tabIndex:-1,className:me("ui-carousel__indicators__indicator",n),__css:o,...r})},no={title:"Components / Data Display / Carousel",component:k},De=()=>e.jsxs(k,{children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(k,{size:"sm",children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),e.jsxs(k,{size:"md",children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),e.jsxs(k,{size:"lg",children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),e.jsxs(k,{size:"xl",children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]})]}),_e=()=>e.jsxs(e.Fragment,{children:[e.jsxs(k,{orientation:"horizontal",children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),e.jsxs(k,{orientation:"vertical",children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]})]}),Me=()=>e.jsxs(k,{defaultIndex:1,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),Fe=()=>e.jsxs(k,{gap:0,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),Be=()=>e.jsxs(k,{duration:60,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),Ne=()=>e.jsxs(k,{slideSize:"50%",children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",size:"100%",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),He=()=>e.jsxs(e.Fragment,{children:[e.jsxs(k,{slideSize:"50%",align:"center",children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),e.jsxs(k,{slideSize:"50%",align:"start",children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),e.jsxs(k,{slideSize:"50%",align:"end",children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]})]}),Ge=()=>e.jsxs(k,{slideSize:"33.3%",slidesToScroll:3,loop:!1,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"}),e.jsx(l,{as:c,bg:"primary",children:"5"}),e.jsx(l,{as:c,bg:"secondary",children:"6"}),e.jsx(l,{as:c,bg:"danger",children:"7"}),e.jsx(l,{as:c,bg:"primary",children:"8"}),e.jsx(l,{as:c,bg:"secondary",children:"9"})]}),Ve=()=>e.jsxs(k,{slideSize:"50%",align:"start",slidesToScroll:2,h:"auto",children:[e.jsxs(l,{as:Ie,variant:"outline",children:[e.jsx(ze,{justifyContent:"center",children:e.jsx(ke,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(Pe,{children:[e.jsx(Te,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Le,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Ee,{children:e.jsx(Ae,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(l,{as:Ie,variant:"outline",children:[e.jsx(ze,{justifyContent:"center",children:e.jsx(ke,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(Pe,{children:[e.jsx(Te,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Le,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Ee,{children:e.jsx(Ae,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(l,{as:Ie,variant:"outline",children:[e.jsx(ze,{justifyContent:"center",children:e.jsx(ke,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(Pe,{children:[e.jsx(Te,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Le,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Ee,{children:e.jsx(Ae,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(l,{as:Ie,variant:"outline",children:[e.jsx(ze,{justifyContent:"center",children:e.jsx(ke,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(Pe,{children:[e.jsx(Te,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Le,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Ee,{children:e.jsx(Ae,{colorScheme:"primary",children:"Wikipedia"})})]})]}),Re=()=>e.jsxs(k,{autoplay:!0,loop:!1,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),Qe=()=>e.jsxs(k,{autoplay:!0,delay:1e3,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),Xe=()=>e.jsxs(k,{dragFree:!0,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),$e=()=>{const[n,r]=_.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(k,{loop:!1,dragFree:!0,onScrollProgress:r,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),e.jsx(Ds,{value:n,colorScheme:"gray"})]})},Ue=()=>e.jsxs(k,{slideSize:"50%",includeGapInSize:!1,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),qe=()=>e.jsxs(k,{loop:!1,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),Ke=()=>e.jsxs(k,{draggable:!1,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),We=()=>e.jsxs(k,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),Je=()=>e.jsxs(k,{withControls:!1,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),Ye=()=>e.jsxs(k,{withIndicators:!1,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),Ze=()=>e.jsxs(k,{watchDrag:(n,r)=>(console.log("drag",n,r),!0),watchResize:(n,r)=>(console.log("resized",n,r),!0),watchSlides:(n,r)=>(console.log("slides updated",n,r),!0),children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),en=()=>{const[n,r]=_.useState(0);return e.jsxs(k,{draggable:!1,index:n,onChange:r,children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]})},nn=()=>e.jsxs(e.Fragment,{children:[e.jsxs(k,{controlProps:{icon:e.jsx(as,{})},children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),e.jsxs(k,{controlPrevProps:{icon:e.jsx(On,{})},children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),e.jsxs(k,{controlNextProps:{icon:e.jsx(_n,{})},children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),e.jsxs(k,{children:[e.jsx(sn,{icon:e.jsx(On,{})}),e.jsx(tn,{icon:e.jsx(_n,{})}),e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]})]}),rn=()=>e.jsxs(e.Fragment,{children:[e.jsxs(k,{indicatorsProps:{bottom:"8",component:({isSelected:n})=>e.jsx(as,{fontSize:"2xl",color:n?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer"})},children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"})]}),e.jsxs(k,{children:[e.jsx(l,{as:c,bg:"primary",children:"1"}),e.jsx(l,{as:c,bg:"secondary",children:"2"}),e.jsx(l,{as:c,bg:"warning",children:"3"}),e.jsx(l,{as:c,bg:"danger",children:"4"}),e.jsx(on,{sx:{"& > *":{w:"4",_selected:{w:"12"},transitionProperty:"width",transitionDuration:"slower"}}})]})]});var Hn,Gn,Vn;De.parameters={...De.parameters,docs:{...(Hn=De.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
  return <Carousel>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(Vn=(Gn=De.parameters)==null?void 0:Gn.docs)==null?void 0:Vn.source}}};var Rn,Qn,Xn;Oe.parameters={...Oe.parameters,docs:{...(Rn=Oe.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
  return <>
      <Carousel size="sm">
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>

      <Carousel size="md">
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>

      <Carousel size="lg">
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>

      <Carousel size="xl">
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>
    </>;
}`,...(Xn=(Qn=Oe.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};var $n,Un,qn;_e.parameters={..._e.parameters,docs:{...($n=_e.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
  return <>
      <Carousel orientation="horizontal">
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>

      <Carousel orientation="vertical">
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>
    </>;
}`,...(qn=(Un=_e.parameters)==null?void 0:Un.docs)==null?void 0:qn.source}}};var Kn,Wn,Jn;Me.parameters={...Me.parameters,docs:{...(Kn=Me.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
  return <Carousel defaultIndex={1}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(Jn=(Wn=Me.parameters)==null?void 0:Wn.docs)==null?void 0:Jn.source}}};var Yn,Zn,er;Fe.parameters={...Fe.parameters,docs:{...(Yn=Fe.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
  return <Carousel gap={0}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(er=(Zn=Fe.parameters)==null?void 0:Zn.docs)==null?void 0:er.source}}};var nr,rr,sr;Be.parameters={...Be.parameters,docs:{...(nr=Be.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  return <Carousel duration={60}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(sr=(rr=Be.parameters)==null?void 0:rr.docs)==null?void 0:sr.source}}};var tr,or,ar;Ne.parameters={...Ne.parameters,docs:{...(tr=Ne.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
  return <Carousel slideSize="50%">
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary" size="100%">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(ar=(or=Ne.parameters)==null?void 0:or.docs)==null?void 0:ar.source}}};var ir,lr,cr;He.parameters={...He.parameters,docs:{...(ir=He.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
  return <>
      <Carousel slideSize="50%" align="center">
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>

      <Carousel slideSize="50%" align="start">
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>

      <Carousel slideSize="50%" align="end">
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>
    </>;
}`,...(cr=(lr=He.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var dr,ur,gr;Ge.parameters={...Ge.parameters,docs:{...(dr=Ge.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <Carousel slideSize="33.3%" slidesToScroll={3} loop={false}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
      <CarouselSlide as={Center} bg="primary">
        5
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        6
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        7
      </CarouselSlide>
      <CarouselSlide as={Center} bg="primary">
        8
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        9
      </CarouselSlide>
    </Carousel>;
}`,...(gr=(ur=Ge.parameters)==null?void 0:ur.docs)==null?void 0:gr.source}}};var fr,Cr,pr;Ve.parameters={...Ve.parameters,docs:{...(fr=Ve.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
  return <Carousel slideSize="50%" align="start" slidesToScroll={2} h="auto">
      <CarouselSlide as={Card} variant="outline">
        <CardHeader justifyContent="center">
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" w="full" rounded="md" alt="いちご100%" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『いちご100%』（いちごひゃくパーセント）</Heading>

          <Text>
            『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="outline">
        <CardHeader justifyContent="center">
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" w="full" rounded="md" alt="いちご100%" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『いちご100%』（いちごひゃくパーセント）</Heading>

          <Text>
            『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="outline">
        <CardHeader justifyContent="center">
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" w="full" rounded="md" alt="いちご100%" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『いちご100%』（いちごひゃくパーセント）</Heading>

          <Text>
            『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="outline">
        <CardHeader justifyContent="center">
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" w="full" rounded="md" alt="いちご100%" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『いちご100%』（いちごひゃくパーセント）</Heading>

          <Text>
            『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>
    </Carousel>;
}`,...(pr=(Cr=Ve.parameters)==null?void 0:Cr.docs)==null?void 0:pr.source}}};var mr,Sr,hr;Re.parameters={...Re.parameters,docs:{...(mr=Re.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
  return <Carousel autoplay loop={false}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(hr=(Sr=Re.parameters)==null?void 0:Sr.docs)==null?void 0:hr.source}}};var br,xr,yr;Qe.parameters={...Qe.parameters,docs:{...(br=Qe.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <Carousel autoplay delay={1000}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(yr=(xr=Qe.parameters)==null?void 0:xr.docs)==null?void 0:yr.source}}};var jr,wr,vr;Xe.parameters={...Xe.parameters,docs:{...(jr=Xe.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
  return <Carousel dragFree>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(vr=(wr=Xe.parameters)==null?void 0:wr.docs)==null?void 0:vr.source}}};var Ir,zr,Pr;$e.parameters={...$e.parameters,docs:{...(Ir=$e.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  const [value, onScrollProgress] = useState<number>(0);
  return <>
      <Carousel loop={false} dragFree onScrollProgress={onScrollProgress}>
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>

      <Progress value={value} colorScheme="gray" />
    </>;
}`,...(Pr=(zr=$e.parameters)==null?void 0:zr.docs)==null?void 0:Pr.source}}};var Er,kr,Tr;Ue.parameters={...Ue.parameters,docs:{...(Er=Ue.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
  return <Carousel slideSize="50%" includeGapInSize={false}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(Tr=(kr=Ue.parameters)==null?void 0:kr.docs)==null?void 0:Tr.source}}};var Lr,Ar,Dr;qe.parameters={...qe.parameters,docs:{...(Lr=qe.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
  return <Carousel loop={false}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(Dr=(Ar=qe.parameters)==null?void 0:Ar.docs)==null?void 0:Dr.source}}};var Or,_r,Mr;Ke.parameters={...Ke.parameters,docs:{...(Or=Ke.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
  return <Carousel draggable={false}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(Mr=(_r=Ke.parameters)==null?void 0:_r.docs)==null?void 0:Mr.source}}};var Fr,Br,Nr;We.parameters={...We.parameters,docs:{...(Fr=We.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <Carousel autoplay stopMouseEnterAutoplay={false}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(Nr=(Br=We.parameters)==null?void 0:Br.docs)==null?void 0:Nr.source}}};var Hr,Gr,Vr;Je.parameters={...Je.parameters,docs:{...(Hr=Je.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  return <Carousel withControls={false}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(Vr=(Gr=Je.parameters)==null?void 0:Gr.docs)==null?void 0:Vr.source}}};var Rr,Qr,Xr;Ye.parameters={...Ye.parameters,docs:{...(Rr=Ye.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <Carousel withIndicators={false}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(Xr=(Qr=Ye.parameters)==null?void 0:Qr.docs)==null?void 0:Xr.source}}};var $r,Ur,qr;Ze.parameters={...Ze.parameters,docs:{...($r=Ze.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
  return <Carousel watchDrag={(methods, ev) => {
    console.log("drag", methods, ev);
    return true;
  }} watchResize={(methods, entries) => {
    console.log("resized", methods, entries);
    return true;
  }} watchSlides={(methods, mutations) => {
    console.log("slides updated", methods, mutations);
    return true;
  }}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(qr=(Ur=Ze.parameters)==null?void 0:Ur.docs)==null?void 0:qr.source}}};var Kr,Wr,Jr;en.parameters={...en.parameters,docs:{...(Kr=en.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  const [index, onChange] = useState<number>(0);
  return <Carousel draggable={false} index={index} onChange={onChange}>
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(Jr=(Wr=en.parameters)==null?void 0:Wr.docs)==null?void 0:Jr.source}}};var Yr,Zr,es;nn.parameters={...nn.parameters,docs:{...(Yr=nn.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
  return <>
      <Carousel controlProps={{
      icon: <Ghost />
    }}>
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>

      <Carousel controlPrevProps={{
      icon: <ArrowLeft />
    }}>
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>

      <Carousel controlNextProps={{
      icon: <ArrowRight />
    }}>
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>

      <Carousel>
        <CarouselControlPrev icon={<ArrowLeft />} />
        <CarouselControlNext icon={<ArrowRight />} />

        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>
    </>;
}`,...(es=(Zr=nn.parameters)==null?void 0:Zr.docs)==null?void 0:es.source}}};var ns,rs,ss;rn.parameters={...rn.parameters,docs:{...(ns=rn.parameters)==null?void 0:ns.docs,source:{originalSource:`() => {
  return <>
      <Carousel indicatorsProps={{
      bottom: "8",
      component: ({
        isSelected
      }) => <Ghost fontSize="2xl" color={isSelected ? "whiteAlpha.700" : "whiteAlpha.400"} cursor="pointer" />
    }}>
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>
      </Carousel>

      <Carousel>
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>

        <CarouselIndicators sx={{
        "& > *": {
          w: "4",
          _selected: {
            w: "12"
          },
          transitionProperty: "width",
          transitionDuration: "slower"
        }
      }} />
      </Carousel>
    </>;
}`,...(ss=(rs=rn.parameters)==null?void 0:rs.docs)==null?void 0:ss.source}}};const ro=["basic","withSize","withOrientation","withDefaultIndex","withGap","withDuration","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","useMethods","customControl","customControlButton","customIndicators"];export{ro as __namedExportsOrder,De as basic,en as customControl,nn as customControlButton,rn as customIndicators,no as default,Je as disabledControlButton,Ke as disabledDraggable,Ue as disabledIncludeGapInSize,Ye as disabledIndicators,qe as disabledLoop,We as disabledStopMouseEnterAutoplay,Ze as useMethods,He as withAlign,Re as withAutoplay,Ve as withCard,Me as withDefaultIndex,Qe as withDelay,Xe as withDragFree,Be as withDuration,Fe as withGap,_e as withOrientation,$e as withScrollProgress,Oe as withSize,Ne as withSlideSize,Ge as withSlidesToScroll};
