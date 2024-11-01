import{j as e}from"./extends-CwFRzn3r.js";import{r as A}from"./index-BwDkhjyp.js";import{u as Q}from"./index-ZFP3ngUa.js";import{u as js}from"./index-DAOPkzwd.js";import{p as ws,Y as Is,a9 as vs,f as ke,e as _s,h as we,d as ls,X as Ps,a as zs,c as pe,b as me,q as ks,w as hn,a5 as Es,ac as Ts,A as As}from"./factory-CBW6YcbY.js";import{m as Ds}from"./use-var-BcRMoVLh.js";import{a as cs}from"./icon-CQ7oKYSm.js";import{I as Ls}from"./icon-button-X9qwghDn.js";import{f as ce}from"./forward-ref-BWI-Phbn.js";import{a as Ns}from"./use-component-style-Givb0biW.js";import{o as Os}from"./theme-provider-B8NHi_rL.js";import{P as Ms}from"./progress-CjR-FGRy.js";import{A as Fn}from"./arrow-left-CYUVQ0Aq.js";import{A as Bn}from"./arrow-right-DmCVCyQF.js";import{C as c}from"./center-CfmrFwEl.js";import{C as Ee,a as Te,b as Ae,c as De}from"./card-CTNW2W0-.js";import{I as Le}from"./image-6ENe9JPd.js";import{H as Ne}from"./heading-CZhPJe9d.js";import{T as Oe}from"./text-DSnzXlBX.js";import{B as Me}from"./button-BtgxkHkM.js";import{G as us}from"./ghost-DMQW7tmz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DP81e-8u.js";import"./index-Du-PXOJx.js";import"./index-CoJrGj-T.js";import"./index-qHjnnOt4.js";import"./number-CcP_arM8.js";import"./lucide-icon-4Wt4_XDL.js";import"./use-image-UAMWVfre.js";import"./use-ripple-BqSD0U-m.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-B6ZnNkK9.js";import"./loading-DZQf4R8P.js";function Fs(n){return Object.prototype.toString.call(n)==="[object Object]"}function Hn(n){return Fs(n)||Array.isArray(n)}function Bs(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function yn(n,r){const s=Object.keys(n),t=Object.keys(r);if(s.length!==t.length)return!1;const o=JSON.stringify(Object.keys(n.breakpoints||{})),l=JSON.stringify(Object.keys(r.breakpoints||{}));return o!==l?!1:s.every(a=>{const d=n[a],u=r[a];return typeof d=="function"?`${d}`==`${u}`:!Hn(d)||!Hn(u)?d===u:yn(d,u)})}function Gn(n){return n.concat().sort((r,s)=>r.name>s.name?1:-1).map(r=>r.options)}function Hs(n,r){if(n.length!==r.length)return!1;const s=Gn(n),t=Gn(r);return s.every((o,l)=>{const a=t[l];return yn(o,a)})}function jn(n){return typeof n=="number"}function bn(n){return typeof n=="string"}function un(n){return typeof n=="boolean"}function Vn(n){return Object.prototype.toString.call(n)==="[object Object]"}function F(n){return Math.abs(n)}function wn(n){return Math.sign(n)}function je(n,r){return F(n-r)}function Gs(n,r){if(n===0||r===0||F(n)<=F(r))return 0;const s=je(F(n),F(r));return F(s/n)}function Ie(n){return ve(n).map(Number)}function te(n){return n[Pe(n)]}function Pe(n){return Math.max(0,n.length-1)}function In(n,r){return r===Pe(n)}function Rn(n,r=0){return Array.from(Array(n),(s,t)=>r+t)}function ve(n){return Object.keys(n)}function ds(n,r){return[n,r].reduce((s,t)=>(ve(t).forEach(o=>{const l=s[o],a=t[o],d=Vn(l)&&Vn(a);s[o]=d?ds(l,a):a}),s),{})}function xn(n,r){return typeof r.MouseEvent<"u"&&n instanceof r.MouseEvent}function Vs(n,r){const s={start:t,center:o,end:l};function t(){return 0}function o(u){return l(u)/2}function l(u){return r-u}function a(u,f){return bn(n)?s[n](u):n(r,u,f)}return{measure:a}}function _e(){let n=[];function r(o,l,a,d={passive:!0}){let u;if("addEventListener"in o)o.addEventListener(l,a,d),u=()=>o.removeEventListener(l,a,d);else{const f=o;f.addListener(a),u=()=>f.removeListener(a)}return n.push(u),t}function s(){n=n.filter(o=>o())}const t={add:r,clear:s};return t}function Rs(n,r,s,t){const o=_e(),l=1e3/60;let a=null,d=0,u=0;function f(){o.add(n,"visibilitychange",()=>{n.hidden&&C()})}function x(){h(),o.clear()}function p(b){if(!u)return;a||(a=b);const m=b-a;for(a=b,d+=m;d>=l;)s(l),d-=l;const y=d/l;t(y),u&&r.requestAnimationFrame(p)}function g(){u||(u=r.requestAnimationFrame(p))}function h(){r.cancelAnimationFrame(u),a=null,d=0,u=0}function C(){a=null,d=0}return{init:f,destroy:x,start:g,stop:h,update:()=>s(l),render:t}}function $s(n,r){const s=r==="rtl",t=n==="y",o=t?"y":"x",l=t?"x":"y",a=!t&&s?-1:1,d=x(),u=p();function f(C){const{height:S,width:b}=C;return t?S:b}function x(){return t?"top":s?"right":"left"}function p(){return t?"bottom":s?"left":"right"}function g(C){return C*a}return{scroll:o,cross:l,startEdge:d,endEdge:u,measureSize:f,direction:g}}function Ce(n=0,r=0){const s=F(n-r);function t(f){return f<n}function o(f){return f>r}function l(f){return t(f)||o(f)}function a(f){return l(f)?t(f)?n:r:f}function d(f){return s?f-s*Math.ceil((f-r)/s):f}return{length:s,max:r,min:n,constrain:a,reachedAny:l,reachedMax:o,reachedMin:t,removeOffset:d}}function fs(n,r,s){const{constrain:t}=Ce(0,n),o=n+1;let l=a(r);function a(g){return s?F((o+g)%o):t(g)}function d(){return l}function u(g){return l=a(g),p}function f(g){return x().set(d()+g)}function x(){return fs(n,d(),s)}const p={get:d,set:u,add:f,clone:x};return p}function Qs(n,r,s,t,o,l,a,d,u,f,x,p,g,h,C,S,b,m,y){const{cross:w,direction:E}=n,D=["INPUT","SELECT","TEXTAREA"],T={passive:!1},I=_e(),v=_e(),k=Ce(50,225).constrain(h.measure(20)),L={mouse:300,touch:400},z={mouse:500,touch:600},G=C?43:25;let X=!1,U=0,$=0,se=!1,ee=!1,W=!1,J=!1;function Y(j){if(!y)return;function O(K){(un(y)||y(j,K))&&oe(K)}const H=r;I.add(H,"dragstart",K=>K.preventDefault(),T).add(H,"touchmove",()=>{},T).add(H,"touchend",()=>{}).add(H,"touchstart",O).add(H,"mousedown",O).add(H,"touchcancel",V).add(H,"contextmenu",V).add(H,"click",M,!0)}function Z(){I.clear(),v.clear()}function q(){const j=J?s:r;v.add(j,"touchmove",R,T).add(j,"touchend",V).add(j,"mousemove",R,T).add(j,"mouseup",V)}function _(j){const O=j.nodeName||"";return D.includes(O)}function ne(){return(C?z:L)[J?"mouse":"touch"]}function re(j,O){const H=p.add(wn(j)*-1),K=x.byDistance(j,!C).distance;return C||F(j)<k?K:b&&O?K*.5:x.byIndex(H.get(),0).distance}function oe(j){const O=xn(j,t);J=O,W=C&&O&&!j.buttons&&X,X=je(o.get(),a.get())>=2,!(O&&j.button!==0)&&(_(j.target)||(se=!0,l.pointerDown(j),f.useFriction(0).useDuration(0),o.set(a),q(),U=l.readPoint(j),$=l.readPoint(j,w),g.emit("pointerDown")))}function R(j){if(!xn(j,t)&&j.touches.length>=2)return V(j);const H=l.readPoint(j),K=l.readPoint(j,w),ae=je(H,U),le=je(K,$);if(!ee&&!J&&(!j.cancelable||(ee=ae>le,!ee)))return V(j);const ue=l.pointerMove(j);ae>S&&(W=!0),f.useFriction(.3).useDuration(.75),d.start(),o.add(E(ue)),j.preventDefault()}function V(j){const H=x.byDistance(0,!1).index!==p.get(),K=l.pointerUp(j)*ne(),ae=re(E(K),H),le=Gs(K,ae),ue=G-10*le,de=m+le/50;ee=!1,se=!1,v.clear(),f.useDuration(ue).useFriction(de),u.distance(ae,!C),J=!1,g.emit("pointerUp")}function M(j){W&&(j.stopPropagation(),j.preventDefault(),W=!1)}function B(){return se}return{init:Y,destroy:Z,pointerDown:B}}function Xs(n,r){let t,o;function l(p){return p.timeStamp}function a(p,g){const C=`client${(g||n.scroll)==="x"?"X":"Y"}`;return(xn(p,r)?p:p.touches[0])[C]}function d(p){return t=p,o=p,a(p)}function u(p){const g=a(p)-a(o),h=l(p)-l(t)>170;return o=p,h&&(t=p),g}function f(p){if(!t||!o)return 0;const g=a(o)-a(t),h=l(p)-l(t),C=l(p)-l(o)>170,S=g/h;return h&&!C&&F(S)>.1?S:0}return{pointerDown:d,pointerMove:u,pointerUp:f,readPoint:a}}function Us(){function n(s){const{offsetTop:t,offsetLeft:o,offsetWidth:l,offsetHeight:a}=s;return{top:t,right:o+l,bottom:t+a,left:o,width:l,height:a}}return{measure:n}}function qs(n){function r(t){return n*(t/100)}return{measure:r}}function Ks(n,r,s,t,o,l,a){const d=[n].concat(t);let u,f,x=[],p=!1;function g(b){return o.measureSize(a.measure(b))}function h(b){if(!l)return;f=g(n),x=t.map(g);function m(y){for(const w of y){if(p)return;const E=w.target===n,D=t.indexOf(w.target),T=E?f:x[D],I=g(E?n:t[D]);if(F(I-T)>=.5){b.reInit(),r.emit("resize");break}}}u=new ResizeObserver(y=>{(un(l)||l(b,y))&&m(y)}),s.requestAnimationFrame(()=>{d.forEach(y=>u.observe(y))})}function C(){p=!0,u&&u.disconnect()}return{init:h,destroy:C}}function Ws(n,r,s,t,o,l){let a=0,d=0,u=o,f=l,x=n.get(),p=0;function g(T){const I=T/1e3,v=u*I,k=t.get()-n.get(),L=!u;let z=0;return L?(a=0,s.set(t),n.set(t),z=k):(s.set(n),a+=k/v,a*=f,x+=a,n.add(a*I),z=x-p),d=wn(z),p=x,D}function h(){const T=t.get()-r.get();return F(T)<.001}function C(){return u}function S(){return d}function b(){return a}function m(){return w(o)}function y(){return E(l)}function w(T){return u=T,D}function E(T){return f=T,D}const D={direction:S,duration:C,velocity:b,seek:g,settled:h,useBaseFriction:y,useBaseDuration:m,useFriction:E,useDuration:w};return D}function Js(n,r,s,t,o){const l=o.measure(10),a=o.measure(50),d=Ce(.1,.99);let u=!1;function f(){return!(u||!n.reachedAny(s.get())||!n.reachedAny(r.get()))}function x(h){if(!f())return;const C=n.reachedMin(r.get())?"min":"max",S=F(n[C]-r.get()),b=s.get()-r.get(),m=d.constrain(S/a);s.subtract(b*m),!h&&F(b)<l&&(s.set(n.constrain(s.get())),t.useDuration(25).useBaseFriction())}function p(h){u=!h}return{shouldConstrain:f,constrain:x,toggleActive:p}}function Ys(n,r,s,t,o){const l=Ce(-r+n,0),a=p(),d=x(),u=g();function f(C,S){return je(C,S)<1}function x(){const C=a[0],S=te(a),b=a.lastIndexOf(C),m=a.indexOf(S)+1;return Ce(b,m)}function p(){return s.map((C,S)=>{const{min:b,max:m}=l,y=l.constrain(C),w=!S,E=In(s,S);return w?m:E||f(b,y)?b:f(m,y)?m:y}).map(C=>parseFloat(C.toFixed(3)))}function g(){if(r<=n+o)return[l.max];if(t==="keepSnaps")return a;const{min:C,max:S}=d;return a.slice(C,S)}return{snapsContained:u,scrollContainLimit:d}}function Zs(n,r,s){const t=r[0],o=s?t-n:te(r);return{limit:Ce(o,t)}}function et(n,r,s,t){const l=r.min+.1,a=r.max+.1,{reachedMin:d,reachedMax:u}=Ce(l,a);function f(g){return g===1?u(s.get()):g===-1?d(s.get()):!1}function x(g){if(!f(g))return;const h=n*(g*-1);t.forEach(C=>C.add(h))}return{loop:x}}function nt(n){const{max:r,length:s}=n;function t(l){const a=l-r;return s?a/-s:0}return{get:t}}function rt(n,r,s,t,o){const{startEdge:l,endEdge:a}=n,{groupSlides:d}=o,u=p().map(r.measure),f=g(),x=h();function p(){return d(t).map(S=>te(S)[a]-S[0][l]).map(F)}function g(){return t.map(S=>s[l]-S[l]).map(S=>-F(S))}function h(){return d(f).map(S=>S[0]).map((S,b)=>S+u[b])}return{snaps:f,snapsAligned:x}}function st(n,r,s,t,o,l){const{groupSlides:a}=o,{min:d,max:u}=t,f=x();function x(){const g=a(l),h=!n||r==="keepSnaps";return s.length===1?[l]:h?g:g.slice(d,u).map((C,S,b)=>{const m=!S,y=In(b,S);if(m){const w=te(b[0])+1;return Rn(w)}if(y){const w=Pe(l)-te(b)[0]+1;return Rn(w,te(b)[0])}return C})}return{slideRegistry:f}}function tt(n,r,s,t,o){const{reachedAny:l,removeOffset:a,constrain:d}=t;function u(C){return C.concat().sort((S,b)=>F(S)-F(b))[0]}function f(C){const S=n?a(C):d(C),b=r.map((y,w)=>({diff:x(y-S,0),index:w})).sort((y,w)=>F(y.diff)-F(w.diff)),{index:m}=b[0];return{index:m,distance:S}}function x(C,S){const b=[C,C+s,C-s];if(!n)return C;if(!S)return u(b);const m=b.filter(y=>wn(y)===S);return m.length?u(m):te(b)-s}function p(C,S){const b=r[C]-o.get(),m=x(b,S);return{index:C,distance:m}}function g(C,S){const b=o.get()+C,{index:m,distance:y}=f(b),w=!n&&l(b);if(!S||w)return{index:m,distance:C};const E=r[m]-y,D=C+x(E,0);return{index:m,distance:D}}return{byDistance:g,byIndex:p,shortcut:x}}function ot(n,r,s,t,o,l,a){function d(p){const g=p.distance,h=p.index!==r.get();l.add(g),g&&(t.duration()?n.start():(n.update(),n.render(1),n.update())),h&&(s.set(r.get()),r.set(p.index),a.emit("select"))}function u(p,g){const h=o.byDistance(p,g);d(h)}function f(p,g){const h=r.clone().set(p),C=o.byIndex(h.get(),g);d(C)}return{distance:u,index:f}}function at(n,r,s,t,o,l,a,d){const u={passive:!0,capture:!0};let f=0;function x(h){if(!d)return;function C(S){if(new Date().getTime()-f>10)return;a.emit("slideFocusStart"),n.scrollLeft=0;const y=s.findIndex(w=>w.includes(S));jn(y)&&(o.useDuration(0),t.index(y,0),a.emit("slideFocus"))}l.add(document,"keydown",p,!1),r.forEach((S,b)=>{l.add(S,"focus",m=>{(un(d)||d(h,m))&&C(b)},u)})}function p(h){h.code==="Tab"&&(f=new Date().getTime())}return{init:x}}function ye(n){let r=n;function s(){return r}function t(u){r=a(u)}function o(u){r+=a(u)}function l(u){r-=a(u)}function a(u){return jn(u)?u:u.get()}return{get:s,set:t,add:o,subtract:l}}function gs(n,r){const s=n.scroll==="x"?l:a,t=r.style;let o=!1;function l(p){return`translate3d(${p}px,0px,0px)`}function a(p){return`translate3d(0px,${p}px,0px)`}function d(p){o||(t.transform=s(n.direction(p)))}function u(p){o=!p}function f(){o||(t.transform="",r.getAttribute("style")||r.removeAttribute("style"))}return{clear:f,to:d,toggleActive:u}}function it(n,r,s,t,o,l,a,d,u){const x=Ie(o),p=Ie(o).reverse(),g=m().concat(y());function h(I,v){return I.reduce((k,L)=>k-o[L],v)}function C(I,v){return I.reduce((k,L)=>h(k,v)>0?k.concat([L]):k,[])}function S(I){return l.map((v,k)=>({start:v-t[k]+.5+I,end:v+r-.5+I}))}function b(I,v,k){const L=S(v);return I.map(z=>{const G=k?0:-s,X=k?s:0,U=k?"end":"start",$=L[z][U];return{index:z,loopPoint:$,slideLocation:ye(-1),translate:gs(n,u[z]),target:()=>d.get()>$?G:X}})}function m(){const I=a[0],v=C(p,I);return b(v,s,!1)}function y(){const I=r-a[0]-1,v=C(x,I);return b(v,-s,!0)}function w(){return g.every(({index:I})=>{const v=x.filter(k=>k!==I);return h(v,r)<=.1})}function E(){g.forEach(I=>{const{target:v,translate:k,slideLocation:L}=I,z=v();z!==L.get()&&(k.to(z),L.set(z))})}function D(){g.forEach(I=>I.translate.clear())}return{canLoop:w,clear:D,loop:E,loopPoints:g}}function lt(n,r,s){let t,o=!1;function l(u){if(!s)return;function f(x){for(const p of x)if(p.type==="childList"){u.reInit(),r.emit("slidesChanged");break}}t=new MutationObserver(x=>{o||(un(s)||s(u,x))&&f(x)}),t.observe(n,{childList:!0})}function a(){t&&t.disconnect(),o=!0}return{init:l,destroy:a}}function ct(n,r,s,t){const o={};let l=null,a=null,d,u=!1;function f(){d=new IntersectionObserver(C=>{u||(C.forEach(S=>{const b=r.indexOf(S.target);o[b]=S}),l=null,a=null,s.emit("slidesInView"))},{root:n.parentElement,threshold:t}),r.forEach(C=>d.observe(C))}function x(){d&&d.disconnect(),u=!0}function p(C){return ve(o).reduce((S,b)=>{const m=parseInt(b),{isIntersecting:y}=o[m];return(C&&y||!C&&!y)&&S.push(m),S},[])}function g(C=!0){if(C&&l)return l;if(!C&&a)return a;const S=p(C);return C&&(l=S),C||(a=S),S}return{init:f,destroy:x,get:g}}function ut(n,r,s,t,o,l){const{measureSize:a,startEdge:d,endEdge:u}=n,f=s[0]&&o,x=C(),p=S(),g=s.map(a),h=b();function C(){if(!f)return 0;const y=s[0];return F(r[d]-y[d])}function S(){if(!f)return 0;const y=l.getComputedStyle(te(t));return parseFloat(y.getPropertyValue(`margin-${u}`))}function b(){return s.map((y,w,E)=>{const D=!w,T=In(E,w);return D?g[w]+x:T?g[w]+p:E[w+1][d]-y[d]}).map(F)}return{slideSizes:g,slideSizesWithGaps:h,startGap:x,endGap:p}}function dt(n,r,s,t,o,l,a,d,u){const{startEdge:f,endEdge:x,direction:p}=n,g=jn(s);function h(m,y){return Ie(m).filter(w=>w%y===0).map(w=>m.slice(w,w+y))}function C(m){return m.length?Ie(m).reduce((y,w,E)=>{const D=te(y)||0,T=D===0,I=w===Pe(m),v=o[f]-l[D][f],k=o[f]-l[w][x],L=!t&&T?p(a):0,z=!t&&I?p(d):0,G=F(k-z-(v+L));return E&&G>r+u&&y.push(w),I&&y.push(m.length),y},[]).map((y,w,E)=>{const D=Math.max(E[w-1]||0);return m.slice(D,y)}):[]}function S(m){return g?h(m,s):C(m)}return{groupSlides:S}}function ft(n,r,s,t,o,l,a){const{align:d,axis:u,direction:f,startIndex:x,loop:p,duration:g,dragFree:h,dragThreshold:C,inViewThreshold:S,slidesToScroll:b,skipSnaps:m,containScroll:y,watchResize:w,watchSlides:E,watchDrag:D,watchFocus:T}=l,I=2,v=Us(),k=v.measure(r),L=s.map(v.measure),z=$s(u,f),G=z.measureSize(k),X=qs(G),U=Vs(d,G),$=!p&&!!y,se=p||!!y,{slideSizes:ee,slideSizesWithGaps:W,startGap:J,endGap:Y}=ut(z,k,L,s,se,o),Z=dt(z,G,b,p,k,L,J,Y,I),{snaps:q,snapsAligned:_}=rt(z,U,k,L,Z),ne=-te(q)+te(W),{snapsContained:re,scrollContainLimit:oe}=Ys(G,ne,_,y,I),R=$?re:_,{limit:V}=Zs(ne,R,p),M=fs(Pe(R),x,p),B=M.clone(),N=Ie(s),j=({dragHandler:fe,scrollBody:pn,scrollBounds:mn,options:{loop:ze}},Sn)=>{ze||mn.constrain(fe.pointerDown()),pn.seek(Sn)},O=({scrollBody:fe,translate:pn,location:mn,offsetLocation:ze,scrollLooper:Sn,slideLooper:ms,dragHandler:Ss,animation:hs,eventHandler:Dn,scrollBounds:bs,options:{loop:Ln}},Nn)=>{const On=fe.settled(),xs=!bs.shouldConstrain(),Mn=Ln?On:On&&xs;Mn&&!Ss.pointerDown()&&(hs.stop(),Dn.emit("settle")),Mn||Dn.emit("scroll");const ys=mn.get()*Nn+ue.get()*(1-Nn);ze.set(ys),Ln&&(Sn.loop(fe.direction()),ms.loop()),pn.to(ze.get())},H=Rs(t,o,fe=>j(Cn,fe),fe=>O(Cn,fe)),K=.68,ae=R[M.get()],le=ye(ae),ue=ye(ae),de=ye(ae),ge=ye(ae),xe=Ws(le,de,ue,ge,g,K),fn=tt(p,R,ne,V,ge),gn=ot(H,M,B,xe,fn,ge,a),En=nt(V),Tn=_e(),Cs=ct(r,s,a,S),{slideRegistry:An}=st($,y,R,oe,Z,N),ps=at(n,s,An,gn,xe,Tn,a,T),Cn={ownerDocument:t,ownerWindow:o,eventHandler:a,containerRect:k,slideRects:L,animation:H,axis:z,dragHandler:Qs(z,n,t,o,ge,Xs(z,o),le,H,gn,xe,fn,M,a,X,h,C,m,K,D),eventStore:Tn,percentOfView:X,index:M,indexPrevious:B,limit:V,location:le,offsetLocation:de,previousLocation:ue,options:l,resizeHandler:Ks(r,a,o,s,z,w,v),scrollBody:xe,scrollBounds:Js(V,de,ge,xe,X),scrollLooper:et(ne,V,de,[le,de,ue,ge]),scrollProgress:En,scrollSnapList:R.map(En.get),scrollSnaps:R,scrollTarget:fn,scrollTo:gn,slideLooper:it(z,G,ne,ee,W,q,R,de,s),slideFocus:ps,slidesHandler:lt(r,a,E),slidesInView:Cs,slideIndexes:N,slideRegistry:An,slidesToScroll:Z,target:ge,translate:gs(z,r)};return Cn}function gt(){let n={},r;function s(f){r=f}function t(f){return n[f]||[]}function o(f){return t(f).forEach(x=>x(r,f)),u}function l(f,x){return n[f]=t(f).concat([x]),u}function a(f,x){return n[f]=t(f).filter(p=>p!==x),u}function d(){n={}}const u={init:s,emit:o,off:a,on:l,clear:d};return u}const Ct={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function pt(n){function r(l,a){return ds(l,a||{})}function s(l){const a=l.breakpoints||{},d=ve(a).filter(u=>n.matchMedia(u).matches).map(u=>a[u]).reduce((u,f)=>r(u,f),{});return r(l,d)}function t(l){return l.map(a=>ve(a.breakpoints||{})).reduce((a,d)=>a.concat(d),[]).map(n.matchMedia)}return{mergeOptions:r,optionsAtMedia:s,optionsMediaQueries:t}}function mt(n){let r=[];function s(l,a){return r=a.filter(({options:d})=>n.optionsAtMedia(d).active!==!1),r.forEach(d=>d.init(l,n)),a.reduce((d,u)=>Object.assign(d,{[u.name]:u}),{})}function t(){r=r.filter(l=>l.destroy())}return{init:s,destroy:t}}function cn(n,r,s){const t=n.ownerDocument,o=t.defaultView,l=pt(o),a=mt(l),d=_e(),u=gt(),{mergeOptions:f,optionsAtMedia:x,optionsMediaQueries:p}=l,{on:g,off:h,emit:C}=u,S=z;let b=!1,m,y=f(Ct,cn.globalOptions),w=f(y),E=[],D,T,I;function v(){const{container:N,slides:j}=w;T=(bn(N)?n.querySelector(N):N)||n.children[0];const H=bn(j)?T.querySelectorAll(j):j;I=[].slice.call(H||T.children)}function k(N){const j=ft(n,T,I,t,o,N,u);if(N.loop&&!j.slideLooper.canLoop()){const O=Object.assign({},N,{loop:!1});return k(O)}return j}function L(N,j){b||(y=f(y,N),w=x(y),E=j||E,v(),m=k(w),p([y,...E.map(({options:O})=>O)]).forEach(O=>d.add(O,"change",z)),w.active&&(m.translate.to(m.location.get()),m.animation.init(),m.slidesInView.init(),m.slideFocus.init(B),m.eventHandler.init(B),m.resizeHandler.init(B),m.slidesHandler.init(B),m.options.loop&&m.slideLooper.loop(),T.offsetParent&&I.length&&m.dragHandler.init(B),D=a.init(B,E)))}function z(N,j){const O=Z();G(),L(f({startIndex:O},N),j),u.emit("reInit")}function G(){m.dragHandler.destroy(),m.eventStore.clear(),m.translate.clear(),m.slideLooper.clear(),m.resizeHandler.destroy(),m.slidesHandler.destroy(),m.slidesInView.destroy(),m.animation.destroy(),a.destroy(),d.clear()}function X(){b||(b=!0,d.clear(),G(),u.emit("destroy"),u.clear())}function U(N,j,O){!w.active||b||(m.scrollBody.useBaseFriction().useDuration(j===!0?0:w.duration),m.scrollTo.index(N,O||0))}function $(N){const j=m.index.add(1).get();U(j,N,-1)}function se(N){const j=m.index.add(-1).get();U(j,N,1)}function ee(){return m.index.add(1).get()!==Z()}function W(){return m.index.add(-1).get()!==Z()}function J(){return m.scrollSnapList}function Y(){return m.scrollProgress.get(m.location.get())}function Z(){return m.index.get()}function q(){return m.indexPrevious.get()}function _(){return m.slidesInView.get()}function ne(){return m.slidesInView.get(!1)}function re(){return D}function oe(){return m}function R(){return n}function V(){return T}function M(){return I}const B={canScrollNext:ee,canScrollPrev:W,containerNode:V,internalEngine:oe,destroy:X,off:h,on:g,emit:C,plugins:re,previousScrollSnap:q,reInit:S,rootNode:R,scrollNext:$,scrollPrev:se,scrollProgress:Y,scrollSnapList:J,scrollTo:U,selectedScrollSnap:Z,slideNodes:M,slidesInView:_,slidesNotInView:ne};return L(r,s),setTimeout(()=>u.emit("init"),0),B}cn.globalOptions=void 0;function vn(n={},r=[]){const s=A.useRef(n),t=A.useRef(r),[o,l]=A.useState(),[a,d]=A.useState(),u=A.useCallback(()=>{o&&o.reInit(s.current,t.current)},[o]);return A.useEffect(()=>{yn(s.current,n)||(s.current=n,u())},[n,u]),A.useEffect(()=>{Hs(t.current,r)||(t.current=r,u())},[r,u]),A.useEffect(()=>{if(Bs()&&a){cn.globalOptions=vn.globalOptions;const f=cn(a,s.current,t.current);return l(f),()=>f.destroy()}else l(void 0)},[a,l]),[d,o]}vn.globalOptions=void 0;const[St,ie]=ws({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),ht=({id:n,align:r="center",autoplay:s=!1,children:t,containScroll:o=!1,controlRef:l,defaultIndex:a=0,delay:d=4e3,dragFree:u=!1,draggable:f=!0,duration:x=25,includeGapInSize:p=!0,index:g,inViewThreshold:h=0,loop:C=!0,orientation:S="horizontal",skipSnaps:b=!1,slideSize:m="100%",slidesToScroll:y=1,stopMouseEnterAutoplay:w=!0,watchDrag:E=f,watchResize:D=!0,watchSlides:T=!0,onChange:I,onScrollProgress:v,...k})=>{const[{gap:L="fallback(4, 1rem)",...z},{vars:G,...X}]=Is(k,vs),[U,$]=js({defaultValue:a,value:g,onChange:I}),[se,ee]=A.useState([]),[W,J]=A.useState(!1),Y=A.useRef(void 0),Z=S==="vertical",[q,_]=vn({align:r,axis:Z?"y":"x",containScroll:o,dragFree:u,duration:x,inViewThreshold:h,loop:C,skipSnaps:b,slidesToScroll:y,startIndex:a,watchDrag:E,watchResize:D,watchSlides:T},[]),ne=A.useId();n??(n=ne);const re=A.useCallback(()=>{if(!_)return;const M=Math.round(Math.max(0,Math.min(1,_.scrollProgress()))*100);v==null||v(M)},[_,v]),oe=A.useCallback(()=>{if(!_)return;const M=_.selectedScrollSnap();$(M)},[_,$]);A.useEffect(()=>{const M=W&&w,B=!(_!=null&&_.canScrollNext());return _&&s&&!M&&!B?Y.current=setInterval(()=>{_.scrollNext()},d):(Y.current&&clearInterval(Y.current),Y.current=void 0),()=>{Y.current&&clearInterval(Y.current)}},[s,d,w,_,W,C,U]),ke(()=>{if(!_)return;_.reInit();const B=_.scrollSnapList().map((N,j)=>j);ee(B)},[A.Children.toArray(t).length,r,S,C,x,L,y,f,u,h,b,o,m,p]),ke(()=>{if(!_)return;const B=_.scrollSnapList().map((N,j)=>j);ee(B)},[_]),ke(()=>{if(_)return _.on("select",oe),_.on("scroll",re),re(),()=>{_.off("select",oe),_.off("scroll",re)}},[_,re]),ke(()=>{_&&g!==void 0&&_.scrollTo(g)},[g]),_s(l,_);const R=A.useCallback((M={},B=null)=>({"aria-roledescription":"carousel",...z,...M,ref:B,vars:Ds(G,[{name:"gap",token:"spaces",value:L},{name:"slideSize",token:"sizes",value:m}]),onMouseEnter:we(M.onMouseEnter,()=>{J(!0)}),onMouseLeave:we(M.onMouseLeave,()=>{J(!1)})}),[z,L,m,G]),V=A.useCallback((M={})=>({id:n,"aria-live":s?"off":"polite",...X,...M,ref:q}),[X,n,q,s]);return{id:n,carousel:_,children:t,includeGapInSize:p,indexes:se,orientation:S,selectedIndex:U,slidesToScroll:y,getContainerProps:R,getSlidesProps:V}},bt=({index:n})=>{const{id:r,indexes:s,selectedIndex:t,slidesToScroll:o}=ie();n=Math.floor((n??0)/o);const l=s.length,a=n===t;return{getSlideProps:A.useCallback((u={})=>({id:`${r}-${n+1}`,"aria-label":`${n+1} of ${l}`,"aria-roledescription":"slide","data-index":n,"data-selected":ls(a),role:"tabpanel",...u}),[r,n,a,l])}},xt=({operation:n,...r})=>{const{id:s,carousel:t}=ie(),o=n==="prev",l=r.disabled??r.isDisabled??(o?!(t!=null&&t.canScrollPrev()):!(t!=null&&t.canScrollNext())),a=A.useCallback(()=>{t&&(o?t.scrollPrev():t.scrollNext())},[t,o]);return{getControlProps:A.useCallback((u={},f=null)=>({"aria-controls":s,"aria-label":`Go to ${o?"previous":"next"} slide`,...u,ref:f,disabled:l,onClick:we(u.onClick,a)}),[l,s,a,o])}},yt=()=>{const{id:n,carousel:r,indexes:s,orientation:t,selectedIndex:o}=ie(),l=A.useRef(new Map),a=t==="vertical",d=A.useCallback(g=>{var C;const h=l.current.get(g);(C=h==null?void 0:h.current)==null||C.focus(),r==null||r.scrollTo(g)},[r]),u=A.useCallback(g=>h=>{h.stopPropagation(),r==null||r.scrollTo(g)},[r]),f=A.useCallback(g=>h=>{const C=s.length-1,b={ArrowDown:()=>{a&&(g===C?g=0:g+=1,d(g))},ArrowLeft:()=>{a||(g===0?g=C:g-=1,d(g))},ArrowRight:()=>{a||(g===C?g=0:g+=1,d(g))},ArrowUp:()=>{a&&(g===0?g=C:g-=1,d(g))},End:()=>d(C),Home:()=>d(0)}[h.key];b&&(h.preventDefault(),b(h))},[s,d,a]);Ps(()=>{l.current.clear()});const x=A.useCallback((g={},h=null)=>({"aria-label":"Sliders","aria-orientation":t,role:"tablist",...g,ref:h}),[t]),p=A.useCallback(({index:g,...h},C)=>{const S=g===o,b=A.createRef();return l.current.set(g,b),{ref:zs(C,b),"aria-controls":`${n}-${g+1}`,"aria-label":`Go to ${g+1} slide`,"aria-selected":S,"data-index":g,"data-selected":ls(S),role:"tab",tabIndex:S?0:-1,...h,key:g,onClick:we(h.onClick,u(g)),onKeyDown:we(h.onKeyDown,f(g))}},[u,f,o,n]);return{indexes:s,getIndicatorProps:p,getIndicatorsProps:x}},Se=ce(({className:n,...r},s)=>{const{orientation:t}=ie();return e.jsx(dn,{ref:s,className:pe("ui-carousel__control--prev",n),icon:e.jsx(cs,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),operation:"prev",...r})});Se.displayName="CarouselControlPrev";Se.__ui__="CarouselControlPrev";const he=ce(({className:n,...r},s)=>{const{orientation:t}=ie();return e.jsx(dn,{ref:s,className:pe("ui-carousel__control--next",n),icon:e.jsx(cs,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),operation:"next",...r})});he.displayName="CarouselControlNext";he.__ui__="CarouselControlNext";const dn=ce(({className:n,operation:r,...s},t)=>{const{styles:o}=ie(),{getControlProps:l}=xt({operation:r}),a={position:"absolute",zIndex:"fallback(kurillin, 9)",...o.control,...o[r]};return e.jsx(Ls,{className:pe("ui-carousel__control",n),colorScheme:["whiteAlpha","blackAlpha"],isRounded:!0,__css:a,...l(s,t)})});dn.displayName="CarouselControl";dn.__ui__="CarouselControl";const be=ce(({className:n,component:r,...s},t)=>{const{orientation:o,selectedIndex:l,styles:a}=ie(),{indexes:d,getIndicatorProps:u,getIndicatorsProps:f}=yt(),x={display:"flex",justifyContent:"center",position:"absolute",zIndex:"fallback(kurillin, 9)",...a.indicators,...o==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(me.div,{className:pe("ui-carousel__indicators",n),...f(s,t),__css:x,...s,children:d.map(p=>{const g=p===l;if(typeof r=="function"){const h=r({index:p,isSelected:g});if(!h)return null;const C=u({...h.props,index:p});return A.cloneElement(h,C)}else{const{key:h,...C}=u({index:p});return e.jsx(_n,{...C},h)}})})});be.displayName="CarouselIndicators";be.__ui__="CarouselIndicators";const _n=ce(({className:n,...r},s)=>{const{styles:t}=ie(),o={...t.indicator};return e.jsx(me.button,{ref:s,type:"button",className:pe("ui-carousel__indicators__indicator",n),__css:o,...r})});_n.displayName="CarouselIndicator";_n.__ui__="CarouselIndicator";const i=ce(({className:n,size:r,...s},t)=>{const{includeGapInSize:o,orientation:l}=ie(),{getSlideProps:a}=bt(s);r??(r="$slideSize");const d={flex:`0 0 ${r}`,position:"relative",...o?{[l==="vertical"?"pb":"pr"]:"$gap"}:{[l==="vertical"?"mb":"mr"]:"$gap"}};return e.jsx(me.div,{className:pe("ui-carousel__slide",n),__css:d,...a({}),children:e.jsx(Pn,{ref:t,...s})})});i.displayName="CarouselSlide";i.__ui__="CarouselSlide";const Pn=ce(({...n},r)=>e.jsx(me.div,{ref:r,className:"ui-carousel__slide__inner",boxSize:"100%",...n}));Pn.displayName="CarouselSlideInner";Pn.__ui__="CarouselSlideInner";const P=ce(({h:n,height:r,minH:s,minHeight:t,...o},l)=>{const a=Q(o.orientation),d=Q(o.align),u=Q(o.autoplay),f=Q(o.stopMouseEnterAutoplay),x=Q(o.loop),p=Q(o.duration),g=Q(o.delay),h=Q(o.slidesToScroll),C=Q(o.draggable),S=Q(o.dragFree),b=Q(o.inViewThreshold),m=Q(o.skipSnaps),y=Q(o.containScroll),w=Q(o.includeGapInSize),[E,D]=Ns("Carousel",{...o,align:d,autoplay:u,containScroll:y,delay:g,dragFree:S,draggable:C,duration:p,includeGapInSize:w,inViewThreshold:b,loop:x,orientation:a,skipSnaps:m,slidesToScroll:h,stopMouseEnterAutoplay:f}),{className:T,withControls:I=!0,withIndicators:v=!0,controlNextProps:k,controlPrevProps:L,controlProps:z,indicatorsProps:G,innerProps:X,...U}=Os(D),$=Q(I),se=Q(v),{id:ee,children:W,getContainerProps:J,getSlidesProps:Y,...Z}=ht({...U}),q=ks(W),_=hn(q,Se),ne=hn(q,he),re=hn(q,be),oe=Es(q,i),R=Ts(q,Se,he,be,i),V=oe.map((B,N)=>A.cloneElement(B,{index:N})),M={h:"fit-content",position:"relative",...E.container};return n??(n=r),s??(s=t),e.jsx(St,{value:{id:ee,styles:E,...Z},children:e.jsxs(me.section,{className:pe("ui-carousel",T),__css:M,...J({},l),children:[_??($?e.jsx(Se,{...z,...L}):null),ne??($?e.jsx(he,{...z,...k}):null),e.jsx(zn,{...Y({...As({h:n,minH:s}),...X}),children:V}),re??(se?e.jsx(be,{...G}):null),R]})})});P.displayName="Carousel";P.__ui__="Carousel";const zn=ce(({...n},r)=>{const s={h:"fit-content",overflow:"hidden",w:"100%"};return e.jsx(me.div,{ref:r,className:"ui-carousel__sliders",__css:s,children:e.jsx(kn,{...n})})});zn.displayName="CarouselSlides";zn.__ui__="CarouselSlides";const kn=({...n})=>{const{includeGapInSize:r,orientation:s,styles:t}=ie(),o={display:"flex",flexDirection:s==="vertical"?"column":"row",...t.inner,...r?{[s==="vertical"?"mb":"mr"]:"calc($gap * -1)"}:{}};return e.jsx(me.div,{className:"ui-carousel__sliders__inner",__css:o,...n})};kn.displayName="CarouselSlidesInner";kn.__ui__="CarouselSlidesInner";const ro={component:P,title:"Components / Data Display / Carousel"},Fe=()=>e.jsxs(P,{children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Be=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{size:"sm",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"md",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"lg",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"xl",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),He=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{orientation:"horizontal",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{orientation:"vertical",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),Ge=()=>e.jsxs(P,{defaultIndex:1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Ve=()=>e.jsxs(P,{gap:0,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(P,{duration:60,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),$e=()=>e.jsxs(P,{slideSize:"50%",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,size:"100%",bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Qe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{align:"center",slideSize:"50%",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{align:"start",slideSize:"50%",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{align:"end",slideSize:"50%",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),Xe=()=>e.jsxs(P,{loop:!1,slideSize:"33.3%",slidesToScroll:3,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"}),e.jsx(i,{as:c,bg:"primary",children:"5"}),e.jsx(i,{as:c,bg:"secondary",children:"6"}),e.jsx(i,{as:c,bg:"danger",children:"7"}),e.jsx(i,{as:c,bg:"primary",children:"8"}),e.jsx(i,{as:c,bg:"secondary",children:"9"})]}),Ue=()=>e.jsxs(P,{align:"start",h:"auto",slideSize:"50%",slidesToScroll:2,children:[e.jsxs(i,{as:Ee,variant:"outline",children:[e.jsx(Te,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(i,{as:Ee,variant:"outline",children:[e.jsx(Te,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(i,{as:Ee,variant:"outline",children:[e.jsx(Te,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(i,{as:Ee,variant:"outline",children:[e.jsx(Te,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]})]}),qe=()=>e.jsxs(P,{autoplay:!0,loop:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Ke=()=>e.jsxs(P,{autoplay:!0,delay:1e3,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),We=()=>e.jsxs(P,{dragFree:!0,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Je=()=>{const[n,r]=A.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{dragFree:!0,loop:!1,onScrollProgress:r,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsx(Ms,{colorScheme:"gray",value:n})]})},Ye=()=>e.jsxs(P,{includeGapInSize:!1,slideSize:"50%",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Ze=()=>e.jsxs(P,{loop:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),en=()=>e.jsxs(P,{draggable:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),nn=()=>e.jsxs(P,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),rn=()=>e.jsxs(P,{withControls:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),sn=()=>e.jsxs(P,{withIndicators:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),tn=()=>e.jsxs(P,{watchDrag:(n,r)=>(console.log("drag",n,r),!0),watchResize:(n,r)=>(console.log("resized",n,r),!0),watchSlides:(n,r)=>(console.log("slides updated",n,r),!0),children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),on=()=>{const[n,r]=A.useState(0);return e.jsxs(P,{draggable:!1,index:n,onChange:r,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})},an=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{controlProps:{icon:e.jsx(us,{})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{controlPrevProps:{icon:e.jsx(Fn,{})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{controlNextProps:{icon:e.jsx(Bn,{})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{children:[e.jsx(Se,{icon:e.jsx(Fn,{})}),e.jsx(he,{icon:e.jsx(Bn,{})}),e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),ln=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{indicatorsProps:{bottom:"8",component:({isSelected:n})=>e.jsx(us,{color:n?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer",fontSize:"2xl"})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"}),e.jsx(be,{sx:{"& > *":{transitionDuration:"slower",transitionProperty:"width",w:"4",_selected:{w:"12"}}}})]})]});var $n,Qn,Xn;Fe.parameters={...Fe.parameters,docs:{...($n=Fe.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
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
}`,...(Xn=(Qn=Fe.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};var Un,qn,Kn;Be.parameters={...Be.parameters,docs:{...(Un=Be.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
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
}`,...(Kn=(qn=Be.parameters)==null?void 0:qn.docs)==null?void 0:Kn.source}}};var Wn,Jn,Yn;He.parameters={...He.parameters,docs:{...(Wn=He.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Jn=He.parameters)==null?void 0:Jn.docs)==null?void 0:Yn.source}}};var Zn,er,nr;Ge.parameters={...Ge.parameters,docs:{...(Zn=Ge.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
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
}`,...(nr=(er=Ge.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,sr,tr;Ve.parameters={...Ve.parameters,docs:{...(rr=Ve.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
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
}`,...(tr=(sr=Ve.parameters)==null?void 0:sr.docs)==null?void 0:tr.source}}};var or,ar,ir;Re.parameters={...Re.parameters,docs:{...(or=Re.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
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
}`,...(ir=(ar=Re.parameters)==null?void 0:ar.docs)==null?void 0:ir.source}}};var lr,cr,ur;$e.parameters={...$e.parameters,docs:{...(lr=$e.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  return <Carousel slideSize="50%">
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} size="100%" bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(ur=(cr=$e.parameters)==null?void 0:cr.docs)==null?void 0:ur.source}}};var dr,fr,gr;Qe.parameters={...Qe.parameters,docs:{...(dr=Qe.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
  return <>
      <Carousel align="center" slideSize="50%">
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

      <Carousel align="start" slideSize="50%">
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

      <Carousel align="end" slideSize="50%">
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
}`,...(gr=(fr=Qe.parameters)==null?void 0:fr.docs)==null?void 0:gr.source}}};var Cr,pr,mr;Xe.parameters={...Xe.parameters,docs:{...(Cr=Xe.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  return <Carousel loop={false} slideSize="33.3%" slidesToScroll={3}>
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
}`,...(mr=(pr=Xe.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var Sr,hr,br;Ue.parameters={...Ue.parameters,docs:{...(Sr=Ue.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  return <Carousel align="start" h="auto" slideSize="50%" slidesToScroll={2}>
      <CarouselSlide as={Card} variant="outline">
        <CardHeader justifyContent="center">
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" alt="いちご100%" rounded="md" w="full" />
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
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" alt="いちご100%" rounded="md" w="full" />
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
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" alt="いちご100%" rounded="md" w="full" />
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
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" alt="いちご100%" rounded="md" w="full" />
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
}`,...(br=(hr=Ue.parameters)==null?void 0:hr.docs)==null?void 0:br.source}}};var xr,yr,jr;qe.parameters={...qe.parameters,docs:{...(xr=qe.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
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
}`,...(jr=(yr=qe.parameters)==null?void 0:yr.docs)==null?void 0:jr.source}}};var wr,Ir,vr;Ke.parameters={...Ke.parameters,docs:{...(wr=Ke.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
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
}`,...(vr=(Ir=Ke.parameters)==null?void 0:Ir.docs)==null?void 0:vr.source}}};var _r,Pr,zr;We.parameters={...We.parameters,docs:{...(_r=We.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
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
}`,...(zr=(Pr=We.parameters)==null?void 0:Pr.docs)==null?void 0:zr.source}}};var kr,Er,Tr;Je.parameters={...Je.parameters,docs:{...(kr=Je.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  const [value, onScrollProgress] = useState<number>(0);
  return <>
      <Carousel dragFree loop={false} onScrollProgress={onScrollProgress}>
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

      <Progress colorScheme="gray" value={value} />
    </>;
}`,...(Tr=(Er=Je.parameters)==null?void 0:Er.docs)==null?void 0:Tr.source}}};var Ar,Dr,Lr;Ye.parameters={...Ye.parameters,docs:{...(Ar=Ye.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  return <Carousel includeGapInSize={false} slideSize="50%">
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
}`,...(Lr=(Dr=Ye.parameters)==null?void 0:Dr.docs)==null?void 0:Lr.source}}};var Nr,Or,Mr;Ze.parameters={...Ze.parameters,docs:{...(Nr=Ze.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
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
}`,...(Mr=(Or=Ze.parameters)==null?void 0:Or.docs)==null?void 0:Mr.source}}};var Fr,Br,Hr;en.parameters={...en.parameters,docs:{...(Fr=en.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
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
}`,...(Hr=(Br=en.parameters)==null?void 0:Br.docs)==null?void 0:Hr.source}}};var Gr,Vr,Rr;nn.parameters={...nn.parameters,docs:{...(Gr=nn.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
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
}`,...(Rr=(Vr=nn.parameters)==null?void 0:Vr.docs)==null?void 0:Rr.source}}};var $r,Qr,Xr;rn.parameters={...rn.parameters,docs:{...($r=rn.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
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
}`,...(Xr=(Qr=rn.parameters)==null?void 0:Qr.docs)==null?void 0:Xr.source}}};var Ur,qr,Kr;sn.parameters={...sn.parameters,docs:{...(Ur=sn.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
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
}`,...(Kr=(qr=sn.parameters)==null?void 0:qr.docs)==null?void 0:Kr.source}}};var Wr,Jr,Yr;tn.parameters={...tn.parameters,docs:{...(Wr=tn.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
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
}`,...(Yr=(Jr=tn.parameters)==null?void 0:Jr.docs)==null?void 0:Yr.source}}};var Zr,es,ns;on.parameters={...on.parameters,docs:{...(Zr=on.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
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
}`,...(ns=(es=on.parameters)==null?void 0:es.docs)==null?void 0:ns.source}}};var rs,ss,ts;an.parameters={...an.parameters,docs:{...(rs=an.parameters)==null?void 0:rs.docs,source:{originalSource:`() => {
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
}`,...(ts=(ss=an.parameters)==null?void 0:ss.docs)==null?void 0:ts.source}}};var os,as,is;ln.parameters={...ln.parameters,docs:{...(os=ln.parameters)==null?void 0:os.docs,source:{originalSource:`() => {
  return <>
      <Carousel indicatorsProps={{
      bottom: "8",
      component: ({
        isSelected
      }) => <Ghost color={isSelected ? "whiteAlpha.700" : "whiteAlpha.400"} cursor="pointer" fontSize="2xl" />
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
          transitionDuration: "slower",
          transitionProperty: "width",
          w: "4",
          _selected: {
            w: "12"
          }
        }
      }} />
      </Carousel>
    </>;
}`,...(is=(as=ln.parameters)==null?void 0:as.docs)==null?void 0:is.source}}};const so=["basic","withSize","withOrientation","withDefaultIndex","withGap","withDuration","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","useMethods","customControl","customControlButton","customIndicators"];export{so as __namedExportsOrder,Fe as basic,on as customControl,an as customControlButton,ln as customIndicators,ro as default,rn as disabledControlButton,en as disabledDraggable,Ye as disabledIncludeGapInSize,sn as disabledIndicators,Ze as disabledLoop,nn as disabledStopMouseEnterAutoplay,tn as useMethods,Qe as withAlign,qe as withAutoplay,Ue as withCard,Ge as withDefaultIndex,Ke as withDelay,We as withDragFree,Re as withDuration,Ve as withGap,He as withOrientation,Je as withScrollProgress,Be as withSize,$e as withSlideSize,Xe as withSlidesToScroll};
