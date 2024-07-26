import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as _}from"./index-BwDkhjyp.js";import{u as Ln}from"./index-D_rx36I2.js";import{u as G}from"./index-BKYuqN1t.js";import{u as bs}from"./index-DtwaELu4.js";import{l as xs,a0 as ys,a1 as js,e as ws,f as Cn,h as on,d as ss,t as vs,w as pn,Y as Is,a4 as zs,b as Ce,c as pe,A as Ps,G as Es}from"./factory-CSM9sPSx.js";import{f as ge}from"./forward-ref-BmTAT9U5.js";import{c as ts}from"./icon-BiToCgiA.js";import{I as ks}from"./icon-button-DnOWcLyz.js";import{a as Ts}from"./use-component-style-j75HgCyZ.js";import{o as As,e as Ls}from"./theme-provider-DvoMT5nL.js";import{P as Ds}from"./progress-if71kGYE.js";import{A as Dn}from"./arrow-left-eKcSFcJJ.js";import{A as On}from"./arrow-right-pWD50qUO.js";import{C as c}from"./center-CrIvuMIb.js";import{C as ve,a as Ie,b as ze,c as Pe}from"./card-BRBIJ2tv.js";import{I as Ee}from"./image--u2fTlWQ.js";import{H as ke}from"./heading-igyBZq5f.js";import{T as Te}from"./text-CBdZvdFv.js";import{B as Ae}from"./button-BNYY7Slw.js";import{G as os}from"./ghost-Dy0vjv9A.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ByQ-4Nbs.js";import"./extends-CF3RwP-h.js";import"./index-DCtBRtRG.js";import"./index-Du0-7Fls.js";import"./index-WMSiNdqI.js";import"./number-49BHn0Cl.js";import"./lucide-icon-X7txYP3r.js";import"./use-image-BN-ZX9Me.js";import"./use-ripple-D-GIaEzw.js";import"./index-CLw4Dysw.js";import"./motion-D_mik6Sq.js";import"./motion-DbFL6ada.js";import"./loading-tpmCqo-t.js";function Os(n){return Object.prototype.toString.call(n)==="[object Object]"}function _n(n){return Os(n)||Array.isArray(n)}function _s(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function hn(n,r){const s=Object.keys(n),o=Object.keys(r);if(s.length!==o.length)return!1;const t=JSON.stringify(Object.keys(n.breakpoints||{})),a=JSON.stringify(Object.keys(r.breakpoints||{}));return t!==a?!1:s.every(l=>{const u=n[l],d=r[l];return typeof u=="function"?`${u}`==`${d}`:!_n(u)||!_n(d)?u===d:hn(u,d)})}function Mn(n){return n.concat().sort((r,s)=>r.name>s.name?1:-1).map(r=>r.options)}function Ms(n,r){if(n.length!==r.length)return!1;const s=Mn(n),o=Mn(r);return s.every((t,a)=>{const l=o[a];return hn(t,l)})}function bn(n){return typeof n=="number"}function mn(n){return typeof n=="string"}function xn(n){return typeof n=="boolean"}function Fn(n){return Object.prototype.toString.call(n)==="[object Object]"}function F(n){return Math.abs(n)}function yn(n){return Math.sign(n)}function he(n,r){return F(n-r)}function Fs(n,r){if(n===0||r===0||F(n)<=F(r))return 0;const s=he(F(n),F(r));return F(s/n)}function be(n){return xe(n).map(Number)}function se(n){return n[je(n)]}function je(n){return Math.max(0,n.length-1)}function jn(n,r){return r===je(n)}function Bn(n,r=0){return Array.from(Array(n),(s,o)=>r+o)}function xe(n){return Object.keys(n)}function as(n,r){return[n,r].reduce((s,o)=>(xe(o).forEach(t=>{const a=s[t],l=o[t],u=Fn(a)&&Fn(l);s[t]=u?as(a,l):l}),s),{})}function Sn(n,r){return typeof r.MouseEvent<"u"&&n instanceof r.MouseEvent}function Bs(n,r){const s={start:o,center:t,end:a};function o(){return 0}function t(d){return a(d)/2}function a(d){return r-d}function l(d,g){return mn(n)?s[n](d):n(r,d,g)}return{measure:l}}function ye(){let n=[];function r(t,a,l,u={passive:!0}){let d;if("addEventListener"in t)t.addEventListener(a,l,u),d=()=>t.removeEventListener(a,l,u);else{const g=t;g.addListener(l),d=()=>g.removeListener(l)}return n.push(d),o}function s(){n=n.filter(t=>t())}const o={add:r,clear:s};return o}function Ns(n,r,s,o){const t=ye(),a=1e3/60;let l=null,u=0,d=0;function g(){t.add(n,"visibilitychange",()=>{n.hidden&&p()})}function h(){y(),t.clear()}function f(x){if(!d)return;l||(l=x);const C=x-l;for(l=x,u+=C;u>=a;)s(a),u-=a;const b=u/a;o(b),d&&r.requestAnimationFrame(f)}function m(){d||(d=r.requestAnimationFrame(f))}function y(){r.cancelAnimationFrame(d),l=null,u=0,d=0}function p(){l=null,u=0}return{init:g,destroy:h,start:m,stop:y,update:()=>s(a),render:o}}function Hs(n,r){const s=r==="rtl",o=n==="y",t=o?"y":"x",a=o?"x":"y",l=!o&&s?-1:1,u=h(),d=f();function g(p){const{height:S,width:x}=p;return o?S:x}function h(){return o?"top":s?"right":"left"}function f(){return o?"bottom":s?"left":"right"}function m(p){return p*l}return{scroll:t,cross:a,startEdge:u,endEdge:d,measureSize:g,direction:m}}function fe(n=0,r=0){const s=F(n-r);function o(g){return g<n}function t(g){return g>r}function a(g){return o(g)||t(g)}function l(g){return a(g)?o(g)?n:r:g}function u(g){return s?g-s*Math.ceil((g-r)/s):g}return{length:s,max:r,min:n,constrain:l,reachedAny:a,reachedMax:t,reachedMin:o,removeOffset:u}}function is(n,r,s){const{constrain:o}=fe(0,n),t=n+1;let a=l(r);function l(m){return s?F((t+m)%t):o(m)}function u(){return a}function d(m){return a=l(m),f}function g(m){return h().set(u()+m)}function h(){return is(n,u(),s)}const f={get:u,set:d,add:g,clone:h};return f}function Gs(n,r,s,o,t,a,l,u,d,g,h,f,m,y,p,S,x,C,b){const{cross:j,direction:A}=n,D=["INPUT","SELECT","TEXTAREA"],k={passive:!1},v=ye(),I=ye(),T=fe(50,225).constrain(y.measure(20)),P={mouse:300,touch:400},L={mouse:500,touch:600},R=p?43:25;let ee=!1,$=0,z=0,ne=!1,K=!1,Y=!1,W=!1;function U(w){if(!b)return;function O(X){(xn(b)||b(w,X))&&B(X)}const V=r;v.add(V,"dragstart",X=>X.preventDefault(),k).add(V,"touchmove",()=>{},k).add(V,"touchend",()=>{}).add(V,"touchstart",O).add(V,"mousedown",O).add(V,"touchcancel",H).add(V,"contextmenu",H).add(V,"click",de,!0)}function q(){v.clear(),I.clear()}function re(){const w=W?s:r;I.add(w,"touchmove",J,k).add(w,"touchend",H).add(w,"mousemove",J,k).add(w,"mouseup",H)}function Q(w){const O=w.nodeName||"";return D.includes(O)}function ie(){return(p?L:P)[W?"mouse":"touch"]}function N(w,O){const V=f.add(yn(w)*-1),X=h.byDistance(w,!p).distance;return p||F(w)<T?X:x&&O?X*.5:h.byIndex(V.get(),0).distance}function B(w){const O=Sn(w,o);W=O,Y=p&&O&&!w.buttons&&ee,ee=he(t.get(),l.get())>=2,!(O&&w.button!==0)&&(Q(w.target)||(ne=!0,a.pointerDown(w),g.useFriction(0).useDuration(0),t.set(l),re(),$=a.readPoint(w),z=a.readPoint(w,j),m.emit("pointerDown")))}function J(w){if(!Sn(w,o)&&w.touches.length>=2)return H(w);const V=a.readPoint(w),X=a.readPoint(w,j),te=he(V,$),le=he(X,z);if(!K&&!W&&(!w.cancelable||(K=te>le,!K)))return H(w);const oe=a.pointerMove(w);te>S&&(Y=!0),g.useFriction(.3).useDuration(.75),u.start(),t.add(A(oe)),w.preventDefault()}function H(w){const V=h.byDistance(0,!1).index!==f.get(),X=a.pointerUp(w)*ie(),te=N(A(X),V),le=Fs(X,te),oe=R-10*le,ce=C+le/50;K=!1,ne=!1,I.clear(),g.useDuration(oe).useFriction(ce),d.distance(te,!p),W=!1,m.emit("pointerUp")}function de(w){Y&&(w.stopPropagation(),w.preventDefault(),Y=!1)}function Z(){return ne}return{init:U,destroy:q,pointerDown:Z}}function Vs(n,r){let o,t;function a(f){return f.timeStamp}function l(f,m){const p=`client${(m||n.scroll)==="x"?"X":"Y"}`;return(Sn(f,r)?f:f.touches[0])[p]}function u(f){return o=f,t=f,l(f)}function d(f){const m=l(f)-l(t),y=a(f)-a(o)>170;return t=f,y&&(o=f),m}function g(f){if(!o||!t)return 0;const m=l(t)-l(o),y=a(f)-a(o),p=a(f)-a(t)>170,S=m/y;return y&&!p&&F(S)>.1?S:0}return{pointerDown:u,pointerMove:d,pointerUp:g,readPoint:l}}function Rs(){function n(s){const{offsetTop:o,offsetLeft:t,offsetWidth:a,offsetHeight:l}=s;return{top:o,right:t+a,bottom:o+l,left:t,width:a,height:l}}return{measure:n}}function Qs(n){function r(o){return n*(o/100)}return{measure:r}}function Xs(n,r,s,o,t,a,l){let u,d,g=[],h=!1;function f(S){return t.measureSize(l.measure(S))}function m(S){if(!a)return;d=f(n),g=o.map(f);function x(b){for(const j of b){const A=j.target===n,D=o.indexOf(j.target),k=A?d:g[D],v=f(A?n:o[D]);if(F(v-k)>=.5){s.requestAnimationFrame(()=>{S.reInit(),r.emit("resize")});break}}}u=new ResizeObserver(b=>{h||(xn(a)||a(S,b))&&x(b)}),[n].concat(o).forEach(b=>u.observe(b))}function y(){u&&u.disconnect(),h=!0}return{init:m,destroy:y}}function $s(n,r,s,o,t,a){let l=0,u=0,d=t,g=a,h=n.get(),f=0;function m(k){const v=k/1e3,I=d*v,T=o.get()-n.get(),P=!d;let L=0;return P?(l=0,s.set(o),n.set(o),L=T):(s.set(n),l+=T/I,l*=g,h+=l,n.add(l*v),L=h-f),u=yn(L),f=h,D}function y(){const k=o.get()-r.get();return F(k)<.001}function p(){return d}function S(){return u}function x(){return l}function C(){return j(t)}function b(){return A(a)}function j(k){return d=k,D}function A(k){return g=k,D}const D={direction:S,duration:p,velocity:x,seek:m,settled:y,useBaseFriction:b,useBaseDuration:C,useFriction:A,useDuration:j};return D}function Us(n,r,s,o,t){const a=t.measure(10),l=t.measure(50),u=fe(.1,.99);let d=!1;function g(){return!(d||!n.reachedAny(s.get())||!n.reachedAny(r.get()))}function h(y){if(!g())return;const p=n.reachedMin(r.get())?"min":"max",S=F(n[p]-r.get()),x=s.get()-r.get(),C=u.constrain(S/l);s.subtract(x*C),!y&&F(x)<a&&(s.set(n.constrain(s.get())),o.useDuration(25).useBaseFriction())}function f(y){d=!y}return{shouldConstrain:g,constrain:h,toggleActive:f}}function qs(n,r,s,o,t){const a=fe(-r+n,0),l=f(),u=h(),d=m();function g(p,S){return he(p,S)<1}function h(){const p=l[0],S=se(l),x=l.lastIndexOf(p),C=l.indexOf(S)+1;return fe(x,C)}function f(){return s.map((p,S)=>{const{min:x,max:C}=a,b=a.constrain(p),j=!S,A=jn(s,S);return j?C:A||g(x,b)?x:g(C,b)?C:b}).map(p=>parseFloat(p.toFixed(3)))}function m(){if(r<=n+t)return[a.max];if(o==="keepSnaps")return l;const{min:p,max:S}=u;return l.slice(p,S)}return{snapsContained:d,scrollContainLimit:u}}function Ks(n,r,s){const o=r[0],t=s?o-n:se(r);return{limit:fe(t,o)}}function Ws(n,r,s,o){const a=r.min+.1,l=r.max+.1,{reachedMin:u,reachedMax:d}=fe(a,l);function g(m){return m===1?d(s.get()):m===-1?u(s.get()):!1}function h(m){if(!g(m))return;const y=n*(m*-1);o.forEach(p=>p.add(y))}return{loop:h}}function Js(n){const{max:r,length:s}=n;function o(a){const l=a-r;return s?l/-s:0}return{get:o}}function Ys(n,r,s,o,t){const{startEdge:a,endEdge:l}=n,{groupSlides:u}=t,d=f().map(r.measure),g=m(),h=y();function f(){return u(o).map(S=>se(S)[l]-S[0][a]).map(F)}function m(){return o.map(S=>s[a]-S[a]).map(S=>-F(S))}function y(){return u(g).map(S=>S[0]).map((S,x)=>S+d[x])}return{snaps:g,snapsAligned:h}}function Zs(n,r,s,o,t,a){const{groupSlides:l}=t,{min:u,max:d}=o,g=h();function h(){const m=l(a),y=!n||r==="keepSnaps";return s.length===1?[a]:y?m:m.slice(u,d).map((p,S,x)=>{const C=!S,b=jn(x,S);if(C){const j=se(x[0])+1;return Bn(j)}if(b){const j=je(a)-se(x)[0]+1;return Bn(j,se(x)[0])}return p})}return{slideRegistry:g}}function et(n,r,s,o,t){const{reachedAny:a,removeOffset:l,constrain:u}=o;function d(p){return p.concat().sort((S,x)=>F(S)-F(x))[0]}function g(p){const S=n?l(p):u(p),x=r.map((b,j)=>({diff:h(b-S,0),index:j})).sort((b,j)=>F(b.diff)-F(j.diff)),{index:C}=x[0];return{index:C,distance:S}}function h(p,S){const x=[p,p+s,p-s];if(!n)return p;if(!S)return d(x);const C=x.filter(b=>yn(b)===S);return C.length?d(C):se(x)-s}function f(p,S){const x=r[p]-t.get(),C=h(x,S);return{index:p,distance:C}}function m(p,S){const x=t.get()+p,{index:C,distance:b}=g(x),j=!n&&a(x);if(!S||j)return{index:C,distance:p};const A=r[C]-b,D=p+h(A,0);return{index:C,distance:D}}return{byDistance:m,byIndex:f,shortcut:h}}function nt(n,r,s,o,t,a,l){function u(f){const m=f.distance,y=f.index!==r.get();a.add(m),m&&(o.duration()?n.start():(n.update(),n.render(1),n.update())),y&&(s.set(r.get()),r.set(f.index),l.emit("select"))}function d(f,m){const y=t.byDistance(f,m);u(y)}function g(f,m){const y=r.clone().set(f),p=t.byIndex(y.get(),m);u(p)}return{distance:d,index:g}}function rt(n,r,s,o,t,a,l){let u=0;function d(){a.add(document,"keydown",g,!1),r.forEach(h)}function g(m){m.code==="Tab"&&(u=new Date().getTime())}function h(m){const y=()=>{if(new Date().getTime()-u>10)return;n.scrollLeft=0;const x=r.indexOf(m),C=s.findIndex(b=>b.includes(x));bn(C)&&(t.useDuration(0),o.index(C,0),l.emit("slideFocus"))};a.add(m,"focus",y,{passive:!0,capture:!0})}return{init:d}}function Se(n){let r=n;function s(){return r}function o(d){r=l(d)}function t(d){r+=l(d)}function a(d){r-=l(d)}function l(d){return bn(d)?d:d.get()}return{get:s,set:o,add:t,subtract:a}}function ls(n,r){const s=n.scroll==="x"?a:l,o=r.style;let t=!1;function a(f){return`translate3d(${f}px,0px,0px)`}function l(f){return`translate3d(0px,${f}px,0px)`}function u(f){t||(o.transform=s(n.direction(f)))}function d(f){t=!f}function g(){t||(o.transform="",r.getAttribute("style")||r.removeAttribute("style"))}return{clear:g,to:u,toggleActive:d}}function st(n,r,s,o,t,a,l,u,d){const h=be(t),f=be(t).reverse(),m=C().concat(b());function y(v,I){return v.reduce((T,P)=>T-t[P],I)}function p(v,I){return v.reduce((T,P)=>y(T,I)>0?T.concat([P]):T,[])}function S(v){return a.map((I,T)=>({start:I-o[T]+.5+v,end:I+r-.5+v}))}function x(v,I,T){const P=S(I);return v.map(L=>{const R=T?0:-s,ee=T?s:0,$=T?"end":"start",z=P[L][$];return{index:L,loopPoint:z,slideLocation:Se(-1),translate:ls(n,d[L]),target:()=>u.get()>z?R:ee}})}function C(){const v=l[0],I=p(f,v);return x(I,s,!1)}function b(){const v=r-l[0]-1,I=p(h,v);return x(I,-s,!0)}function j(){return m.every(({index:v})=>{const I=h.filter(T=>T!==v);return y(I,r)<=.1})}function A(){m.forEach(v=>{const{target:I,translate:T,slideLocation:P}=v,L=I();L!==P.get()&&(T.to(L),P.set(L))})}function D(){m.forEach(v=>v.translate.clear())}return{canLoop:j,clear:D,loop:A,loopPoints:m}}function tt(n,r,s){let o,t=!1;function a(d){if(!s)return;function g(h){for(const f of h)if(f.type==="childList"){d.reInit(),r.emit("slidesChanged");break}}o=new MutationObserver(h=>{t||(xn(s)||s(d,h))&&g(h)}),o.observe(n,{childList:!0})}function l(){o&&o.disconnect(),t=!0}return{init:a,destroy:l}}function ot(n,r,s,o){const t={};let a=null,l=null,u,d=!1;function g(){u=new IntersectionObserver(p=>{d||(p.forEach(S=>{const x=r.indexOf(S.target);t[x]=S}),a=null,l=null,s.emit("slidesInView"))},{root:n.parentElement,threshold:o}),r.forEach(p=>u.observe(p))}function h(){u&&u.disconnect(),d=!0}function f(p){return xe(t).reduce((S,x)=>{const C=parseInt(x),{isIntersecting:b}=t[C];return(p&&b||!p&&!b)&&S.push(C),S},[])}function m(p=!0){if(p&&a)return a;if(!p&&l)return l;const S=f(p);return p&&(a=S),p||(l=S),S}return{init:g,destroy:h,get:m}}function at(n,r,s,o,t,a){const{measureSize:l,startEdge:u,endEdge:d}=n,g=s[0]&&t,h=p(),f=S(),m=s.map(l),y=x();function p(){if(!g)return 0;const b=s[0];return F(r[u]-b[u])}function S(){if(!g)return 0;const b=a.getComputedStyle(se(o));return parseFloat(b.getPropertyValue(`margin-${d}`))}function x(){return s.map((b,j,A)=>{const D=!j,k=jn(A,j);return D?m[j]+h:k?m[j]+f:A[j+1][u]-b[u]}).map(F)}return{slideSizes:m,slideSizesWithGaps:y,startGap:h,endGap:f}}function it(n,r,s,o,t,a,l,u,d){const{startEdge:g,endEdge:h,direction:f}=n,m=bn(s);function y(C,b){return be(C).filter(j=>j%b===0).map(j=>C.slice(j,j+b))}function p(C){return C.length?be(C).reduce((b,j,A)=>{const D=se(b)||0,k=D===0,v=j===je(C),I=t[g]-a[D][g],T=t[g]-a[j][h],P=!o&&k?f(l):0,L=!o&&v?f(u):0,R=F(T-L-(I+P));return A&&R>r+d&&b.push(j),v&&b.push(C.length),b},[]).map((b,j,A)=>{const D=Math.max(A[j-1]||0);return C.slice(D,b)}):[]}function S(C){return m?y(C,s):p(C)}return{groupSlides:S}}function lt(n,r,s,o,t,a,l){const{align:u,axis:d,direction:g,startIndex:h,loop:f,duration:m,dragFree:y,dragThreshold:p,inViewThreshold:S,slidesToScroll:x,skipSnaps:C,containScroll:b,watchResize:j,watchSlides:A,watchDrag:D}=a,k=2,v=Rs(),I=v.measure(r),T=s.map(v.measure),P=Hs(d,g),L=P.measureSize(I),R=Qs(L),ee=Bs(u,L),$=!f&&!!b,z=f||!!b,{slideSizes:ne,slideSizesWithGaps:K,startGap:Y,endGap:W}=at(P,I,T,s,z,t),U=it(P,L,x,f,I,T,Y,W,k),{snaps:q,snapsAligned:re}=Ys(P,ee,I,T,U),Q=-se(q)+se(K),{snapsContained:ie,scrollContainLimit:N}=qs(L,Q,re,b,k),B=$?ie:re,{limit:J}=Ks(Q,B,f),H=is(je(B),h,f),de=H.clone(),Z=be(s),M=({dragHandler:ue,scrollBody:un,scrollBounds:gn,options:{loop:we}},fn)=>{we||gn.constrain(ue.pointerDown()),un.seek(fn)},w=({scrollBody:ue,translate:un,location:gn,offsetLocation:we,scrollLooper:fn,slideLooper:fs,dragHandler:Cs,animation:ps,eventHandler:Pn,scrollBounds:ms,options:{loop:En}},kn)=>{const Tn=ue.settled(),Ss=!ms.shouldConstrain(),An=En?Tn:Tn&&Ss;An&&!Cs.pointerDown()&&(ps.stop(),Pn.emit("settle")),An||Pn.emit("scroll");const hs=gn.get()*kn+le.get()*(1-kn);we.set(hs),En&&(fn.loop(ue.direction()),fs.loop()),un.to(we.get())},O=Ns(o,t,ue=>M(dn,ue),ue=>w(dn,ue)),V=.68,X=B[H.get()],te=Se(X),le=Se(X),oe=Se(X),ce=Se(X),me=$s(te,oe,le,ce,m,V),ln=et(f,B,Q,J,ce),cn=nt(O,H,de,me,ln,ce,l),vn=Js(J),In=ye(),us=ot(r,s,l,S),{slideRegistry:zn}=Zs($,b,B,N,U,Z),gs=rt(n,s,zn,cn,me,In,l),dn={ownerDocument:o,ownerWindow:t,eventHandler:l,containerRect:I,slideRects:T,animation:O,axis:P,dragHandler:Gs(P,n,o,t,ce,Vs(P,t),te,O,cn,me,ln,H,l,R,y,p,C,V,D),eventStore:In,percentOfView:R,index:H,indexPrevious:de,limit:J,location:te,offsetLocation:oe,previousLocation:le,options:a,resizeHandler:Xs(r,l,t,s,P,j,v),scrollBody:me,scrollBounds:Us(J,oe,ce,me,R),scrollLooper:Ws(Q,J,oe,[te,oe,le,ce]),scrollProgress:vn,scrollSnapList:B.map(vn.get),scrollSnaps:B,scrollTarget:ln,scrollTo:cn,slideLooper:st(P,L,Q,ne,K,q,B,oe,s),slideFocus:gs,slidesHandler:tt(r,l,A),slidesInView:us,slideIndexes:Z,slideRegistry:zn,slidesToScroll:U,target:ce,translate:ls(P,r)};return dn}function ct(){let n={},r;function s(g){r=g}function o(g){return n[g]||[]}function t(g){return o(g).forEach(h=>h(r,g)),d}function a(g,h){return n[g]=o(g).concat([h]),d}function l(g,h){return n[g]=o(g).filter(f=>f!==h),d}function u(){n={}}const d={init:s,emit:t,off:l,on:a,clear:u};return d}const dt={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function ut(n){function r(a,l){return as(a,l||{})}function s(a){const l=a.breakpoints||{},u=xe(l).filter(d=>n.matchMedia(d).matches).map(d=>l[d]).reduce((d,g)=>r(d,g),{});return r(a,u)}function o(a){return a.map(l=>xe(l.breakpoints||{})).reduce((l,u)=>l.concat(u),[]).map(n.matchMedia)}return{mergeOptions:r,optionsAtMedia:s,optionsMediaQueries:o}}function gt(n){let r=[];function s(a,l){return r=l.filter(({options:u})=>n.optionsAtMedia(u).active!==!1),r.forEach(u=>u.init(a,n)),l.reduce((u,d)=>Object.assign(u,{[d.name]:d}),{})}function o(){r=r.filter(a=>a.destroy())}return{init:s,destroy:o}}function an(n,r,s){const o=n.ownerDocument,t=o.defaultView,a=ut(t),l=gt(a),u=ye(),d=ct(),{mergeOptions:g,optionsAtMedia:h,optionsMediaQueries:f}=a,{on:m,off:y,emit:p}=d,S=L;let x=!1,C,b=g(dt,an.globalOptions),j=g(b),A=[],D,k,v;function I(){const{container:M,slides:w}=j;k=(mn(M)?n.querySelector(M):M)||n.children[0];const V=mn(w)?k.querySelectorAll(w):w;v=[].slice.call(V||k.children)}function T(M){const w=lt(n,k,v,o,t,M,d);if(M.loop&&!w.slideLooper.canLoop()){const O=Object.assign({},M,{loop:!1});return T(O)}return w}function P(M,w){x||(b=g(b,M),j=h(b),A=w||A,I(),C=T(j),f([b,...A.map(({options:O})=>O)]).forEach(O=>u.add(O,"change",L)),j.active&&(C.translate.to(C.location.get()),C.animation.init(),C.slidesInView.init(),C.slideFocus.init(),C.eventHandler.init(Z),C.resizeHandler.init(Z),C.slidesHandler.init(Z),C.options.loop&&C.slideLooper.loop(),k.offsetParent&&v.length&&C.dragHandler.init(Z),D=l.init(Z,A)))}function L(M,w){const O=q();R(),P(g({startIndex:O},M),w),d.emit("reInit")}function R(){C.dragHandler.destroy(),C.eventStore.clear(),C.translate.clear(),C.slideLooper.clear(),C.resizeHandler.destroy(),C.slidesHandler.destroy(),C.slidesInView.destroy(),C.animation.destroy(),l.destroy(),u.clear()}function ee(){x||(x=!0,u.clear(),R(),d.emit("destroy"),d.clear())}function $(M,w,O){!j.active||x||(C.scrollBody.useBaseFriction().useDuration(w===!0?0:j.duration),C.scrollTo.index(M,O||0))}function z(M){const w=C.index.add(1).get();$(w,M,-1)}function ne(M){const w=C.index.add(-1).get();$(w,M,1)}function K(){return C.index.add(1).get()!==q()}function Y(){return C.index.add(-1).get()!==q()}function W(){return C.scrollSnapList}function U(){return C.scrollProgress.get(C.location.get())}function q(){return C.index.get()}function re(){return C.indexPrevious.get()}function Q(){return C.slidesInView.get()}function ie(){return C.slidesInView.get(!1)}function N(){return D}function B(){return C}function J(){return n}function H(){return k}function de(){return v}const Z={canScrollNext:K,canScrollPrev:Y,containerNode:H,internalEngine:B,destroy:ee,off:y,on:m,emit:p,plugins:N,previousScrollSnap:re,reInit:S,rootNode:J,scrollNext:z,scrollPrev:ne,scrollProgress:U,scrollSnapList:W,scrollTo:$,selectedScrollSnap:q,slideNodes:de,slidesInView:Q,slidesNotInView:ie};return P(r,s),setTimeout(()=>d.emit("init"),0),Z}an.globalOptions=void 0;function wn(n={},r=[]){const s=_.useRef(n),o=_.useRef(r),[t,a]=_.useState(),[l,u]=_.useState(),d=_.useCallback(()=>{t&&t.reInit(s.current,o.current)},[t]);return _.useEffect(()=>{if(_s()&&l){an.globalOptions=wn.globalOptions;const g=an(l,s.current,o.current);return a(g),()=>g.destroy()}else a(void 0)},[l,a]),_.useEffect(()=>{hn(s.current,n)||(s.current=n,d())},[n,d]),_.useEffect(()=>{Ms(o.current,r)||(o.current=r,d())},[r,d]),[u,t]}wn.globalOptions=void 0;const[ft,ae]=xs({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),Ct=({index:n,defaultIndex:r=0,onChange:s,align:o="center",orientation:t="horizontal",autoplay:a=!1,stopMouseEnterAutoplay:l=!0,loop:u=!0,duration:d=25,delay:g=4e3,gap:h="fallback(4, 1rem)",slidesToScroll:f=1,draggable:m=!0,dragFree:y=!1,inViewThreshold:p=0,skipSnaps:S=!1,containScroll:x=!1,slideSize:C="100%",includeGapInSize:b=!0,onScrollProgress:j,watchDrag:A=m,watchResize:D,watchSlides:k,controlRef:v,children:I,...T})=>{const P=ys(T,js),[L,R]=bs({value:n,defaultValue:r,onChange:s}),ee=t==="vertical",[$,z]=wn({axis:ee?"y":"x",startIndex:r,loop:u,align:o,slidesToScroll:f,duration:d,dragFree:y,inViewThreshold:p,skipSnaps:S,containScroll:x,watchDrag:A,watchResize:D,watchSlides:k},[]);ws(v,z);const[ne,K]=_.useState([]),[Y,W]=_.useState(!1),U=_.useRef(void 0),q=_.useCallback(()=>{if(!z)return;const N=Math.round(Math.max(0,Math.min(1,z.scrollProgress()))*100);j==null||j(N)},[z,j]),re=_.useCallback(()=>{if(!z)return;const N=z.selectedScrollSnap();R(N)},[z,R]);_.useEffect(()=>{const N=Y&&l,B=!(z!=null&&z.canScrollNext());return z&&a&&!N&&!B?U.current=setInterval(()=>{z.scrollNext()},g):(U.current&&clearInterval(U.current),U.current=void 0),()=>{U.current&&clearInterval(U.current)}},[a,g,l,z,Y,u,L]),Cn(()=>{if(!z)return;z.reInit();const B=z.scrollSnapList().map((J,H)=>H);K(B)},[_.Children.toArray(I).length,o,t,u,d,h,f,m,y,p,S,x,C,b]),Cn(()=>{if(!z)return;const B=z.scrollSnapList().map((J,H)=>H);K(B)},[z]),Cn(()=>{if(z)return z.on("select",re),z.on("scroll",q),q(),()=>{z.off("select",re),z.off("scroll",q)}},[z,q]);const Q=_.useCallback((N={},B=null)=>({...P[0],...N,ref:B,onMouseEnter:on(N.onMouseEnter,()=>{W(!0)}),onMouseLeave:on(N.onMouseLeave,()=>{W(!1)})}),[P]),ie=_.useCallback((N={})=>({...P[1],...N,ref:$}),[P,$]);return{carousel:z,children:I,indexes:ne,selectedIndex:L,orientation:t,slideSize:C,gap:h,slidesToScroll:f,includeGapInSize:b,getContainerProps:Q,getSlidesProps:ie}},pt=({index:n})=>{const{selectedIndex:r,slidesToScroll:s}=ae();n=Math.floor((n??0)/(s??1));const o=n===r;return{getSlideProps:_.useCallback((a={})=>({...a,"data-index":n,"data-selected":ss(o)}),[o,n])}},cs=({operation:n,...r})=>{const{carousel:s}=ae(),o=n==="prev",t=r.disabled??r.isDisabled??(o?!(s!=null&&s.canScrollPrev()):!(s!=null&&s.canScrollNext())),a=_.useCallback(()=>{s&&(o?s.scrollPrev():s.scrollNext())},[s,o]);return{getControlProps:_.useCallback((u={},d=null)=>({...u,ref:d,disabled:t,onClick:on(u.onClick,a)}),[t,a])}},mt=()=>{const{selectedIndex:n,carousel:r,indexes:s}=ae(),o=_.useCallback((a,l)=>{r&&(a.stopPropagation(),r.scrollTo(l))},[r]),t=_.useCallback(({index:a,...l})=>{const u=a===n;return{"aria-label":`Go to ${a+1} slide`,...l,key:a,"data-index":a,"data-selected":ss(u),onClick:on(l.onClick,d=>o(d,a))}},[o,n]);return{indexes:s,getIndicatorProps:t}},E=ge(({h:n,height:r,minH:s,minHeight:o,...t},a)=>{const l=G(t.orientation),u=G(t.align),d=G(t.autoplay),g=G(t.stopMouseEnterAutoplay),h=G(t.loop),f=G(t.duration),m=G(t.delay),y=G(t.slidesToScroll),p=G(t.draggable),S=G(t.dragFree),x=G(t.inViewThreshold),C=G(t.skipSnaps),b=G(t.containScroll),j=G(t.includeGapInSize),A=Ln("spaces",G(t.gap))??G(t.gap),D=Ln("sizes",G(t.slideSize))??G(t.slideSize),[k,v]=Ts("Carousel",{...t,orientation:l,align:u,autoplay:d,stopMouseEnterAutoplay:g,loop:h,duration:f,delay:m,slidesToScroll:y,draggable:p,dragFree:S,inViewThreshold:x,skipSnaps:C,containScroll:b,includeGapInSize:j,gap:A,slideSize:D}),{className:I,innerProps:T,withControls:P=!0,controlProps:L,controlPrevProps:R,controlNextProps:ee,withIndicators:$=!0,indicatorsProps:z,...ne}=As(v),K=G(P),Y=G($),{getContainerProps:W,getSlidesProps:U,children:q,...re}=Ct({...ne}),Q=vs(q),[ie]=pn(Q,rn),[N]=pn(Q,sn),[B]=pn(Q,tn),J=Is(Q,i),H=zs(Q,rn,sn,tn,i),de=J.map((Z,M)=>_.cloneElement(Z,{index:M}));return n??(n=r),s??(s=o),e.jsx(ft,{value:{styles:k,...re},children:e.jsxs(Ce.div,{className:pe("ui-carousel",I),__css:{position:"relative",h:"fit-content",...k.container},...W({},a),children:[ie??(K?e.jsx(rn,{...L,...R}):null),N??(K?e.jsx(sn,{...L,...ee}):null),e.jsx(St,{...U({...Ps({h:n,minH:s}),...T}),children:de}),B??(Y?e.jsx(tn,{...z}):null),H]})})}),St=ge(({...n},r)=>{const s={w:"100%",h:"fit-content",overflow:"hidden"};return e.jsx(Ce.div,{ref:r,className:"ui-carousel__sliders",__css:s,children:e.jsx(ht,{...n})})}),ht=({...n})=>{const{orientation:r,includeGapInSize:s,gap:o,styles:t}=ae(),a={display:"flex",flexDirection:r==="vertical"?"column":"row",...t.inner,...s?{var:[{__prefix:"ui",name:"gap",token:"spaces",value:o}],[r==="vertical"?"mb":"mr"]:Ls.negate("var(--ui-gap)")}:{}};return e.jsx(Ce.div,{className:"ui-carousel__sliders__inner",__css:a,...n})},i=ge(({className:n,size:r,...s},o)=>{const{slideSize:t,includeGapInSize:a,orientation:l,gap:u}=ae(),{getSlideProps:d}=pt(s);r??(r=t);const g={position:"relative",flex:`0 0 ${r}`,...a?{[l==="vertical"?"pb":"pr"]:u}:{[l==="vertical"?"mb":"mr"]:u}};return e.jsx(Ce.div,{className:pe("ui-carousel__slide",n),__css:g,...d({}),children:e.jsx(bt,{ref:o,...s})})}),bt=ge(({...n},r)=>e.jsx(Ce.div,{ref:r,className:"ui-carousel__slide__inner",w:"100%",h:"100%",...n})),rn=ge(({className:n,...r},s)=>{const{orientation:o}=ae(),{getControlProps:t}=cs({operation:"prev"});return e.jsx(ds,{operation:"prev",className:pe("ui-carousel__control--prev",n),"aria-label":"Go to previous slide",icon:e.jsx(ts,{__css:{fontSize:"1.5em",transform:o==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),...t(r,s)})}),sn=ge(({className:n,...r},s)=>{const{orientation:o}=ae(),{getControlProps:t}=cs({operation:"next"});return e.jsx(ds,{operation:"next",className:pe("ui-carousel__control--next",n),"aria-label":"Go to next slide",icon:e.jsx(ts,{__css:{fontSize:"1.5em",transform:o==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),...t(r,s)})}),ds=ge(({className:n,operation:r,...s},o)=>{const{styles:t}=ae(),a=Es("whiteAlpha","blackAlpha"),l={position:"absolute",zIndex:"fallback(kurillin, 9)",...t.control,...t[r]};return e.jsx(ks,{ref:o,className:pe("ui-carousel__control",n),colorScheme:a,isRounded:!0,__css:l,...s})}),tn=ge(({className:n,component:r,...s},o)=>{const{selectedIndex:t,orientation:a,styles:l}=ae(),{indexes:u,getIndicatorProps:d}=mt(),g={position:"absolute",zIndex:"fallback(kurillin, 9)",display:"flex",justifyContent:"center",...l.indicators,...a==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(Ce.div,{ref:o,className:pe("ui-carousel__indicators",n),__css:g,...s,children:u.map(h=>{const f=h===t;if(typeof r=="function"){const m=r({index:h,isSelected:f});if(!m)return null;const y=d({...m.props,index:h});return _.cloneElement(m,y)}else{const{key:m,...y}=d({index:h});return e.jsx(xt,{...y},m)}})})}),xt=({className:n,...r})=>{const{styles:s}=ae(),o={...s.indicator};return e.jsx(Ce.button,{type:"button",tabIndex:-1,className:pe("ui-carousel__indicators__indicator",n),__css:o,...r})},ro={title:"Components / Data Display / Carousel",component:E},Le=()=>e.jsxs(E,{children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),De=()=>e.jsxs(e.Fragment,{children:[e.jsxs(E,{size:"sm",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(E,{size:"md",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(E,{size:"lg",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(E,{size:"xl",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),Oe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(E,{orientation:"horizontal",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(E,{orientation:"vertical",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),_e=()=>e.jsxs(E,{defaultIndex:1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Me=()=>e.jsxs(E,{gap:0,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Fe=()=>e.jsxs(E,{duration:60,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Be=()=>e.jsxs(E,{slideSize:"50%",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",size:"100%",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Ne=()=>e.jsxs(e.Fragment,{children:[e.jsxs(E,{slideSize:"50%",align:"center",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(E,{slideSize:"50%",align:"start",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(E,{slideSize:"50%",align:"end",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),He=()=>e.jsxs(E,{slideSize:"33.3%",slidesToScroll:3,loop:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"}),e.jsx(i,{as:c,bg:"primary",children:"5"}),e.jsx(i,{as:c,bg:"secondary",children:"6"}),e.jsx(i,{as:c,bg:"danger",children:"7"}),e.jsx(i,{as:c,bg:"primary",children:"8"}),e.jsx(i,{as:c,bg:"secondary",children:"9"})]}),Ge=()=>e.jsxs(E,{slideSize:"50%",align:"start",slidesToScroll:2,h:"auto",children:[e.jsxs(i,{as:ve,variant:"outline",children:[e.jsx(Ie,{justifyContent:"center",children:e.jsx(Ee,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ze,{children:[e.jsx(ke,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Te,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Pe,{children:e.jsx(Ae,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(i,{as:ve,variant:"outline",children:[e.jsx(Ie,{justifyContent:"center",children:e.jsx(Ee,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ze,{children:[e.jsx(ke,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Te,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Pe,{children:e.jsx(Ae,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(i,{as:ve,variant:"outline",children:[e.jsx(Ie,{justifyContent:"center",children:e.jsx(Ee,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ze,{children:[e.jsx(ke,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Te,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Pe,{children:e.jsx(Ae,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(i,{as:ve,variant:"outline",children:[e.jsx(Ie,{justifyContent:"center",children:e.jsx(Ee,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ze,{children:[e.jsx(ke,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Te,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Pe,{children:e.jsx(Ae,{colorScheme:"primary",children:"Wikipedia"})})]})]}),Ve=()=>e.jsxs(E,{autoplay:!0,loop:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(E,{autoplay:!0,delay:1e3,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Qe=()=>e.jsxs(E,{dragFree:!0,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Xe=()=>{const[n,r]=_.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(E,{loop:!1,dragFree:!0,onScrollProgress:r,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsx(Ds,{value:n,colorScheme:"gray"})]})},$e=()=>e.jsxs(E,{slideSize:"50%",includeGapInSize:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Ue=()=>e.jsxs(E,{loop:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),qe=()=>e.jsxs(E,{draggable:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Ke=()=>e.jsxs(E,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),We=()=>e.jsxs(E,{withControls:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Je=()=>e.jsxs(E,{withIndicators:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Ye=()=>e.jsxs(E,{watchDrag:(n,r)=>(console.log("drag",n,r),!0),watchResize:(n,r)=>(console.log("resized",n,r),!0),watchSlides:(n,r)=>(console.log("slides updated",n,r),!0),children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Ze=()=>{const[n,r]=_.useState(0);return e.jsxs(E,{draggable:!1,index:n,onChange:r,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})},en=()=>e.jsxs(e.Fragment,{children:[e.jsxs(E,{controlProps:{icon:e.jsx(os,{})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(E,{controlPrevProps:{icon:e.jsx(Dn,{})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(E,{controlNextProps:{icon:e.jsx(On,{})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(E,{children:[e.jsx(rn,{icon:e.jsx(Dn,{})}),e.jsx(sn,{icon:e.jsx(On,{})}),e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),nn=()=>e.jsxs(e.Fragment,{children:[e.jsxs(E,{indicatorsProps:{bottom:"8",component:({isSelected:n})=>e.jsx(os,{fontSize:"2xl",color:n?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer"})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(E,{children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"}),e.jsx(tn,{sx:{"& > *":{w:"4",_selected:{w:"12"},transitionProperty:"width",transitionDuration:"slower"}}})]})]});var Nn,Hn,Gn;Le.parameters={...Le.parameters,docs:{...(Nn=Le.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
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
}`,...(Gn=(Hn=Le.parameters)==null?void 0:Hn.docs)==null?void 0:Gn.source}}};var Vn,Rn,Qn;De.parameters={...De.parameters,docs:{...(Vn=De.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
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
}`,...(Qn=(Rn=De.parameters)==null?void 0:Rn.docs)==null?void 0:Qn.source}}};var Xn,$n,Un;Oe.parameters={...Oe.parameters,docs:{...(Xn=Oe.parameters)==null?void 0:Xn.docs,source:{originalSource:`() => {
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
}`,...(Un=($n=Oe.parameters)==null?void 0:$n.docs)==null?void 0:Un.source}}};var qn,Kn,Wn;_e.parameters={..._e.parameters,docs:{...(qn=_e.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
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
}`,...(Wn=(Kn=_e.parameters)==null?void 0:Kn.docs)==null?void 0:Wn.source}}};var Jn,Yn,Zn;Me.parameters={...Me.parameters,docs:{...(Jn=Me.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(Zn=(Yn=Me.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var er,nr,rr;Fe.parameters={...Fe.parameters,docs:{...(er=Fe.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
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
}`,...(rr=(nr=Fe.parameters)==null?void 0:nr.docs)==null?void 0:rr.source}}};var sr,tr,or;Be.parameters={...Be.parameters,docs:{...(sr=Be.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
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
}`,...(or=(tr=Be.parameters)==null?void 0:tr.docs)==null?void 0:or.source}}};var ar,ir,lr;Ne.parameters={...Ne.parameters,docs:{...(ar=Ne.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
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
}`,...(lr=(ir=Ne.parameters)==null?void 0:ir.docs)==null?void 0:lr.source}}};var cr,dr,ur;He.parameters={...He.parameters,docs:{...(cr=He.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
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
}`,...(ur=(dr=He.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var gr,fr,Cr;Ge.parameters={...Ge.parameters,docs:{...(gr=Ge.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
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
}`,...(Cr=(fr=Ge.parameters)==null?void 0:fr.docs)==null?void 0:Cr.source}}};var pr,mr,Sr;Ve.parameters={...Ve.parameters,docs:{...(pr=Ve.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
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
}`,...(Sr=(mr=Ve.parameters)==null?void 0:mr.docs)==null?void 0:Sr.source}}};var hr,br,xr;Re.parameters={...Re.parameters,docs:{...(hr=Re.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
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
}`,...(xr=(br=Re.parameters)==null?void 0:br.docs)==null?void 0:xr.source}}};var yr,jr,wr;Qe.parameters={...Qe.parameters,docs:{...(yr=Qe.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
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
}`,...(wr=(jr=Qe.parameters)==null?void 0:jr.docs)==null?void 0:wr.source}}};var vr,Ir,zr;Xe.parameters={...Xe.parameters,docs:{...(vr=Xe.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
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
}`,...(zr=(Ir=Xe.parameters)==null?void 0:Ir.docs)==null?void 0:zr.source}}};var Pr,Er,kr;$e.parameters={...$e.parameters,docs:{...(Pr=$e.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
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
}`,...(kr=(Er=$e.parameters)==null?void 0:Er.docs)==null?void 0:kr.source}}};var Tr,Ar,Lr;Ue.parameters={...Ue.parameters,docs:{...(Tr=Ue.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
}`,...(Lr=(Ar=Ue.parameters)==null?void 0:Ar.docs)==null?void 0:Lr.source}}};var Dr,Or,_r;qe.parameters={...qe.parameters,docs:{...(Dr=qe.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
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
}`,...(_r=(Or=qe.parameters)==null?void 0:Or.docs)==null?void 0:_r.source}}};var Mr,Fr,Br;Ke.parameters={...Ke.parameters,docs:{...(Mr=Ke.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
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
}`,...(Br=(Fr=Ke.parameters)==null?void 0:Fr.docs)==null?void 0:Br.source}}};var Nr,Hr,Gr;We.parameters={...We.parameters,docs:{...(Nr=We.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
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
}`,...(Gr=(Hr=We.parameters)==null?void 0:Hr.docs)==null?void 0:Gr.source}}};var Vr,Rr,Qr;Je.parameters={...Je.parameters,docs:{...(Vr=Je.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
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
}`,...(Qr=(Rr=Je.parameters)==null?void 0:Rr.docs)==null?void 0:Qr.source}}};var Xr,$r,Ur;Ye.parameters={...Ye.parameters,docs:{...(Xr=Ye.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...(Ur=($r=Ye.parameters)==null?void 0:$r.docs)==null?void 0:Ur.source}}};var qr,Kr,Wr;Ze.parameters={...Ze.parameters,docs:{...(qr=Ze.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
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
}`,...(Wr=(Kr=Ze.parameters)==null?void 0:Kr.docs)==null?void 0:Wr.source}}};var Jr,Yr,Zr;en.parameters={...en.parameters,docs:{...(Jr=en.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
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
}`,...(Zr=(Yr=en.parameters)==null?void 0:Yr.docs)==null?void 0:Zr.source}}};var es,ns,rs;nn.parameters={...nn.parameters,docs:{...(es=nn.parameters)==null?void 0:es.docs,source:{originalSource:`() => {
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
}`,...(rs=(ns=nn.parameters)==null?void 0:ns.docs)==null?void 0:rs.source}}};const so=["basic","withSize","withOrientation","withDefaultIndex","withGap","withDuration","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","useMethods","customControl","customControlButton","customIndicators"];export{so as __namedExportsOrder,Le as basic,Ze as customControl,en as customControlButton,nn as customIndicators,ro as default,We as disabledControlButton,qe as disabledDraggable,$e as disabledIncludeGapInSize,Je as disabledIndicators,Ue as disabledLoop,Ke as disabledStopMouseEnterAutoplay,Ye as useMethods,Ne as withAlign,Ve as withAutoplay,Ge as withCard,_e as withDefaultIndex,Re as withDelay,Qe as withDragFree,Fe as withDuration,Me as withGap,Oe as withOrientation,Xe as withScrollProgress,De as withSize,Be as withSlideSize,He as withSlidesToScroll};
