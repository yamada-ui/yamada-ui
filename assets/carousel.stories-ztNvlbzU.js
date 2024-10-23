import{j as e}from"./extends-CwFRzn3r.js";import{r as O}from"./index-BwDkhjyp.js";import{u as $}from"./index-BukEwq1c.js";import{u as ws}from"./index-CsH8woeS.js";import{p as Is,X as vs,a8 as _s,e as Ps,f as ze,h as ln,d as ls,c as pe,b as me,q as zs,t as hn,a4 as Es,ab as ks,z as Ts}from"./factory-DBrfn43w.js";import{m as Ls}from"./use-var-DcJHaFAf.js";import{c as cs}from"./icon-CVPWgGuL.js";import{I as As}from"./icon-button-esGqFFIV.js";import{f as ge}from"./forward-ref-BWI-Phbn.js";import{a as Ds}from"./use-component-style-DhRiPQIp.js";import{o as Ns}from"./theme-provider-Cr3m0r8P.js";import{P as Os}from"./progress-Dyz6r8Yy.js";import{A as Fn}from"./arrow-left-DuM_Qxnr.js";import{A as Bn}from"./arrow-right-ebykxZbO.js";import{C as c}from"./center-DkfaJL4L.js";import{C as Ee,a as ke,b as Te,c as Le}from"./card-Dhkw7IgW.js";import{I as Ae}from"./image-r73_M9IV.js";import{H as De}from"./heading-B-6akxoC.js";import{T as Ne}from"./text-LaTineB_.js";import{B as Oe}from"./button-HzRyJIss.js";import{G as us}from"./ghost-DYqh4o_R.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C_z-NEqe.js";import"./index-DX5CNJFl.js";import"./index-CoJrGj-T.js";import"./index-C9q_kkfb.js";import"./number-CcP_arM8.js";import"./lucide-icon-CsDBQyHf.js";import"./use-image-B2-TjMYC.js";import"./use-ripple-C_jFl7Io.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-CWrzRNZL.js";import"./loading-iPLDeGho.js";function Ms(n){return Object.prototype.toString.call(n)==="[object Object]"}function Hn(n){return Ms(n)||Array.isArray(n)}function Fs(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function yn(n,r){const s=Object.keys(n),a=Object.keys(r);if(s.length!==a.length)return!1;const t=JSON.stringify(Object.keys(n.breakpoints||{})),i=JSON.stringify(Object.keys(r.breakpoints||{}));return t!==i?!1:s.every(l=>{const d=n[l],u=r[l];return typeof d=="function"?`${d}`==`${u}`:!Hn(d)||!Hn(u)?d===u:yn(d,u)})}function Gn(n){return n.concat().sort((r,s)=>r.name>s.name?1:-1).map(r=>r.options)}function Bs(n,r){if(n.length!==r.length)return!1;const s=Gn(n),a=Gn(r);return s.every((t,i)=>{const l=a[i];return yn(t,l)})}function jn(n){return typeof n=="number"}function bn(n){return typeof n=="string"}function un(n){return typeof n=="boolean"}function Vn(n){return Object.prototype.toString.call(n)==="[object Object]"}function B(n){return Math.abs(n)}function wn(n){return Math.sign(n)}function je(n,r){return B(n-r)}function Hs(n,r){if(n===0||r===0||B(n)<=B(r))return 0;const s=je(B(n),B(r));return B(s/n)}function we(n){return Ie(n).map(Number)}function re(n){return n[_e(n)]}function _e(n){return Math.max(0,n.length-1)}function In(n,r){return r===_e(n)}function Rn(n,r=0){return Array.from(Array(n),(s,a)=>r+a)}function Ie(n){return Object.keys(n)}function ds(n,r){return[n,r].reduce((s,a)=>(Ie(a).forEach(t=>{const i=s[t],l=a[t],d=Vn(i)&&Vn(l);s[t]=d?ds(i,l):l}),s),{})}function xn(n,r){return typeof r.MouseEvent<"u"&&n instanceof r.MouseEvent}function Gs(n,r){const s={start:a,center:t,end:i};function a(){return 0}function t(u){return i(u)/2}function i(u){return r-u}function l(u,g){return bn(n)?s[n](u):n(r,u,g)}return{measure:l}}function ve(){let n=[];function r(t,i,l,d={passive:!0}){let u;if("addEventListener"in t)t.addEventListener(i,l,d),u=()=>t.removeEventListener(i,l,d);else{const g=t;g.addListener(l),u=()=>g.removeListener(l)}return n.push(u),a}function s(){n=n.filter(t=>t())}const a={add:r,clear:s};return a}function Vs(n,r,s,a){const t=ve(),i=1e3/60;let l=null,d=0,u=0;function g(){t.add(n,"visibilitychange",()=>{n.hidden&&p()})}function h(){y(),t.clear()}function f(b){if(!u)return;l||(l=b);const C=b-l;for(l=b,d+=C;d>=i;)s(i),d-=i;const x=d/i;a(x),u&&r.requestAnimationFrame(f)}function m(){u||(u=r.requestAnimationFrame(f))}function y(){r.cancelAnimationFrame(u),l=null,d=0,u=0}function p(){l=null,d=0}return{init:g,destroy:h,start:m,stop:y,update:()=>s(i),render:a}}function Rs(n,r){const s=r==="rtl",a=n==="y",t=a?"y":"x",i=a?"x":"y",l=!a&&s?-1:1,d=h(),u=f();function g(p){const{height:S,width:b}=p;return a?S:b}function h(){return a?"top":s?"right":"left"}function f(){return a?"bottom":s?"left":"right"}function m(p){return p*l}return{scroll:t,cross:i,startEdge:d,endEdge:u,measureSize:g,direction:m}}function Ce(n=0,r=0){const s=B(n-r);function a(g){return g<n}function t(g){return g>r}function i(g){return a(g)||t(g)}function l(g){return i(g)?a(g)?n:r:g}function d(g){return s?g-s*Math.ceil((g-r)/s):g}return{length:s,max:r,min:n,constrain:l,reachedAny:i,reachedMax:t,reachedMin:a,removeOffset:d}}function gs(n,r,s){const{constrain:a}=Ce(0,n),t=n+1;let i=l(r);function l(m){return s?B((t+m)%t):a(m)}function d(){return i}function u(m){return i=l(m),f}function g(m){return h().set(d()+m)}function h(){return gs(n,d(),s)}const f={get:d,set:u,add:g,clone:h};return f}function $s(n,r,s,a,t,i,l,d,u,g,h,f,m,y,p,S,b,C,x){const{cross:w,direction:k}=n,L=["INPUT","SELECT","TEXTAREA"],T={passive:!1},I=ve(),E=ve(),_=Ce(50,225).constrain(y.measure(20)),D={mouse:300,touch:400},z={mouse:500,touch:600},G=p?43:25;let Q=!1,X=0,q=0,ne=!1,v=!1,Y=!1,W=!1;function se(j){if(!x)return;function N(K){(un(x)||x(j,K))&&ie(K)}const H=r;I.add(H,"dragstart",K=>K.preventDefault(),T).add(H,"touchmove",()=>{},T).add(H,"touchend",()=>{}).add(H,"touchstart",N).add(H,"mousedown",N).add(H,"touchcancel",M).add(H,"contextmenu",M).add(H,"click",ee,!0)}function V(){I.clear(),E.clear()}function U(){const j=W?s:r;E.add(j,"touchmove",A,T).add(j,"touchend",M).add(j,"mousemove",A,T).add(j,"mouseup",M)}function Z(j){const N=j.nodeName||"";return L.includes(N)}function J(){return(p?z:D)[W?"mouse":"touch"]}function ae(j,N){const H=f.add(wn(j)*-1),K=h.byDistance(j,!p).distance;return p||B(j)<_?K:b&&N?K*.5:h.byIndex(H.get(),0).distance}function ie(j){const N=xn(j,a);W=N,Y=p&&N&&!j.buttons&&Q,Q=je(t.get(),l.get())>=2,!(N&&j.button!==0)&&(Z(j.target)||(ne=!0,i.pointerDown(j),g.useFriction(0).useDuration(0),t.set(l),U(),X=i.readPoint(j),q=i.readPoint(j,w),m.emit("pointerDown")))}function A(j){if(!xn(j,a)&&j.touches.length>=2)return M(j);const H=i.readPoint(j),K=i.readPoint(j,w),te=je(H,X),le=je(K,q);if(!v&&!W&&(!j.cancelable||(v=te>le,!v)))return M(j);const ce=i.pointerMove(j);te>S&&(Y=!0),g.useFriction(.3).useDuration(.75),d.start(),t.add(k(ce)),j.preventDefault()}function M(j){const H=h.byDistance(0,!1).index!==f.get(),K=i.pointerUp(j)*J(),te=ae(k(K),H),le=Hs(K,te),ce=G-10*le,ue=C+le/50;v=!1,ne=!1,E.clear(),g.useDuration(ce).useFriction(ue),u.distance(te,!p),W=!1,m.emit("pointerUp")}function ee(j){Y&&(j.stopPropagation(),j.preventDefault(),Y=!1)}function R(){return ne}return{init:se,destroy:V,pointerDown:R}}function Qs(n,r){let a,t;function i(f){return f.timeStamp}function l(f,m){const p=`client${(m||n.scroll)==="x"?"X":"Y"}`;return(xn(f,r)?f:f.touches[0])[p]}function d(f){return a=f,t=f,l(f)}function u(f){const m=l(f)-l(t),y=i(f)-i(a)>170;return t=f,y&&(a=f),m}function g(f){if(!a||!t)return 0;const m=l(t)-l(a),y=i(f)-i(a),p=i(f)-i(t)>170,S=m/y;return y&&!p&&B(S)>.1?S:0}return{pointerDown:d,pointerMove:u,pointerUp:g,readPoint:l}}function Xs(){function n(s){const{offsetTop:a,offsetLeft:t,offsetWidth:i,offsetHeight:l}=s;return{top:a,right:t+i,bottom:a+l,left:t,width:i,height:l}}return{measure:n}}function qs(n){function r(a){return n*(a/100)}return{measure:r}}function Us(n,r,s,a,t,i,l){const d=[n].concat(a);let u,g,h=[],f=!1;function m(b){return t.measureSize(l.measure(b))}function y(b){if(!i)return;g=m(n),h=a.map(m);function C(x){for(const w of x){if(f)return;const k=w.target===n,L=a.indexOf(w.target),T=k?g:h[L],I=m(k?n:a[L]);if(B(I-T)>=.5){b.reInit(),r.emit("resize");break}}}u=new ResizeObserver(x=>{(un(i)||i(b,x))&&C(x)}),s.requestAnimationFrame(()=>{d.forEach(x=>u.observe(x))})}function p(){f=!0,u&&u.disconnect()}return{init:y,destroy:p}}function Ks(n,r,s,a,t,i){let l=0,d=0,u=t,g=i,h=n.get(),f=0;function m(T){const I=T/1e3,E=u*I,_=a.get()-n.get(),D=!u;let z=0;return D?(l=0,s.set(a),n.set(a),z=_):(s.set(n),l+=_/E,l*=g,h+=l,n.add(l*I),z=h-f),d=wn(z),f=h,L}function y(){const T=a.get()-r.get();return B(T)<.001}function p(){return u}function S(){return d}function b(){return l}function C(){return w(t)}function x(){return k(i)}function w(T){return u=T,L}function k(T){return g=T,L}const L={direction:S,duration:p,velocity:b,seek:m,settled:y,useBaseFriction:x,useBaseDuration:C,useFriction:k,useDuration:w};return L}function Ws(n,r,s,a,t){const i=t.measure(10),l=t.measure(50),d=Ce(.1,.99);let u=!1;function g(){return!(u||!n.reachedAny(s.get())||!n.reachedAny(r.get()))}function h(y){if(!g())return;const p=n.reachedMin(r.get())?"min":"max",S=B(n[p]-r.get()),b=s.get()-r.get(),C=d.constrain(S/l);s.subtract(b*C),!y&&B(b)<i&&(s.set(n.constrain(s.get())),a.useDuration(25).useBaseFriction())}function f(y){u=!y}return{shouldConstrain:g,constrain:h,toggleActive:f}}function Js(n,r,s,a,t){const i=Ce(-r+n,0),l=f(),d=h(),u=m();function g(p,S){return je(p,S)<1}function h(){const p=l[0],S=re(l),b=l.lastIndexOf(p),C=l.indexOf(S)+1;return Ce(b,C)}function f(){return s.map((p,S)=>{const{min:b,max:C}=i,x=i.constrain(p),w=!S,k=In(s,S);return w?C:k||g(b,x)?b:g(C,x)?C:x}).map(p=>parseFloat(p.toFixed(3)))}function m(){if(r<=n+t)return[i.max];if(a==="keepSnaps")return l;const{min:p,max:S}=d;return l.slice(p,S)}return{snapsContained:u,scrollContainLimit:d}}function Ys(n,r,s){const a=r[0],t=s?a-n:re(r);return{limit:Ce(t,a)}}function Zs(n,r,s,a){const i=r.min+.1,l=r.max+.1,{reachedMin:d,reachedMax:u}=Ce(i,l);function g(m){return m===1?u(s.get()):m===-1?d(s.get()):!1}function h(m){if(!g(m))return;const y=n*(m*-1);a.forEach(p=>p.add(y))}return{loop:h}}function et(n){const{max:r,length:s}=n;function a(i){const l=i-r;return s?l/-s:0}return{get:a}}function nt(n,r,s,a,t){const{startEdge:i,endEdge:l}=n,{groupSlides:d}=t,u=f().map(r.measure),g=m(),h=y();function f(){return d(a).map(S=>re(S)[l]-S[0][i]).map(B)}function m(){return a.map(S=>s[i]-S[i]).map(S=>-B(S))}function y(){return d(g).map(S=>S[0]).map((S,b)=>S+u[b])}return{snaps:g,snapsAligned:h}}function rt(n,r,s,a,t,i){const{groupSlides:l}=t,{min:d,max:u}=a,g=h();function h(){const m=l(i),y=!n||r==="keepSnaps";return s.length===1?[i]:y?m:m.slice(d,u).map((p,S,b)=>{const C=!S,x=In(b,S);if(C){const w=re(b[0])+1;return Rn(w)}if(x){const w=_e(i)-re(b)[0]+1;return Rn(w,re(b)[0])}return p})}return{slideRegistry:g}}function st(n,r,s,a,t){const{reachedAny:i,removeOffset:l,constrain:d}=a;function u(p){return p.concat().sort((S,b)=>B(S)-B(b))[0]}function g(p){const S=n?l(p):d(p),b=r.map((x,w)=>({diff:h(x-S,0),index:w})).sort((x,w)=>B(x.diff)-B(w.diff)),{index:C}=b[0];return{index:C,distance:S}}function h(p,S){const b=[p,p+s,p-s];if(!n)return p;if(!S)return u(b);const C=b.filter(x=>wn(x)===S);return C.length?u(C):re(b)-s}function f(p,S){const b=r[p]-t.get(),C=h(b,S);return{index:p,distance:C}}function m(p,S){const b=t.get()+p,{index:C,distance:x}=g(b),w=!n&&i(b);if(!S||w)return{index:C,distance:p};const k=r[C]-x,L=p+h(k,0);return{index:C,distance:L}}return{byDistance:m,byIndex:f,shortcut:h}}function tt(n,r,s,a,t,i,l){function d(f){const m=f.distance,y=f.index!==r.get();i.add(m),m&&(a.duration()?n.start():(n.update(),n.render(1),n.update())),y&&(s.set(r.get()),r.set(f.index),l.emit("select"))}function u(f,m){const y=t.byDistance(f,m);d(y)}function g(f,m){const y=r.clone().set(f),p=t.byIndex(y.get(),m);d(p)}return{distance:u,index:g}}function ot(n,r,s,a,t,i,l,d){const u={passive:!0,capture:!0};let g=0;function h(y){if(!d)return;function p(S){if(new Date().getTime()-g>10)return;l.emit("slideFocusStart"),n.scrollLeft=0;const x=s.findIndex(w=>w.includes(S));jn(x)&&(t.useDuration(0),a.index(x,0),l.emit("slideFocus"))}i.add(document,"keydown",f,!1),r.forEach((S,b)=>{i.add(S,"focus",C=>{(un(d)||d(y,C))&&p(b)},u)})}function f(y){y.code==="Tab"&&(g=new Date().getTime())}return{init:h}}function ye(n){let r=n;function s(){return r}function a(u){r=l(u)}function t(u){r+=l(u)}function i(u){r-=l(u)}function l(u){return jn(u)?u:u.get()}return{get:s,set:a,add:t,subtract:i}}function fs(n,r){const s=n.scroll==="x"?i:l,a=r.style;let t=!1;function i(f){return`translate3d(${f}px,0px,0px)`}function l(f){return`translate3d(0px,${f}px,0px)`}function d(f){t||(a.transform=s(n.direction(f)))}function u(f){t=!f}function g(){t||(a.transform="",r.getAttribute("style")||r.removeAttribute("style"))}return{clear:g,to:d,toggleActive:u}}function at(n,r,s,a,t,i,l,d,u){const h=we(t),f=we(t).reverse(),m=C().concat(x());function y(I,E){return I.reduce((_,D)=>_-t[D],E)}function p(I,E){return I.reduce((_,D)=>y(_,E)>0?_.concat([D]):_,[])}function S(I){return i.map((E,_)=>({start:E-a[_]+.5+I,end:E+r-.5+I}))}function b(I,E,_){const D=S(E);return I.map(z=>{const G=_?0:-s,Q=_?s:0,X=_?"end":"start",q=D[z][X];return{index:z,loopPoint:q,slideLocation:ye(-1),translate:fs(n,u[z]),target:()=>d.get()>q?G:Q}})}function C(){const I=l[0],E=p(f,I);return b(E,s,!1)}function x(){const I=r-l[0]-1,E=p(h,I);return b(E,-s,!0)}function w(){return m.every(({index:I})=>{const E=h.filter(_=>_!==I);return y(E,r)<=.1})}function k(){m.forEach(I=>{const{target:E,translate:_,slideLocation:D}=I,z=E();z!==D.get()&&(_.to(z),D.set(z))})}function L(){m.forEach(I=>I.translate.clear())}return{canLoop:w,clear:L,loop:k,loopPoints:m}}function it(n,r,s){let a,t=!1;function i(u){if(!s)return;function g(h){for(const f of h)if(f.type==="childList"){u.reInit(),r.emit("slidesChanged");break}}a=new MutationObserver(h=>{t||(un(s)||s(u,h))&&g(h)}),a.observe(n,{childList:!0})}function l(){a&&a.disconnect(),t=!0}return{init:i,destroy:l}}function lt(n,r,s,a){const t={};let i=null,l=null,d,u=!1;function g(){d=new IntersectionObserver(p=>{u||(p.forEach(S=>{const b=r.indexOf(S.target);t[b]=S}),i=null,l=null,s.emit("slidesInView"))},{root:n.parentElement,threshold:a}),r.forEach(p=>d.observe(p))}function h(){d&&d.disconnect(),u=!0}function f(p){return Ie(t).reduce((S,b)=>{const C=parseInt(b),{isIntersecting:x}=t[C];return(p&&x||!p&&!x)&&S.push(C),S},[])}function m(p=!0){if(p&&i)return i;if(!p&&l)return l;const S=f(p);return p&&(i=S),p||(l=S),S}return{init:g,destroy:h,get:m}}function ct(n,r,s,a,t,i){const{measureSize:l,startEdge:d,endEdge:u}=n,g=s[0]&&t,h=p(),f=S(),m=s.map(l),y=b();function p(){if(!g)return 0;const x=s[0];return B(r[d]-x[d])}function S(){if(!g)return 0;const x=i.getComputedStyle(re(a));return parseFloat(x.getPropertyValue(`margin-${u}`))}function b(){return s.map((x,w,k)=>{const L=!w,T=In(k,w);return L?m[w]+h:T?m[w]+f:k[w+1][d]-x[d]}).map(B)}return{slideSizes:m,slideSizesWithGaps:y,startGap:h,endGap:f}}function ut(n,r,s,a,t,i,l,d,u){const{startEdge:g,endEdge:h,direction:f}=n,m=jn(s);function y(C,x){return we(C).filter(w=>w%x===0).map(w=>C.slice(w,w+x))}function p(C){return C.length?we(C).reduce((x,w,k)=>{const L=re(x)||0,T=L===0,I=w===_e(C),E=t[g]-i[L][g],_=t[g]-i[w][h],D=!a&&T?f(l):0,z=!a&&I?f(d):0,G=B(_-z-(E+D));return k&&G>r+u&&x.push(w),I&&x.push(C.length),x},[]).map((x,w,k)=>{const L=Math.max(k[w-1]||0);return C.slice(L,x)}):[]}function S(C){return m?y(C,s):p(C)}return{groupSlides:S}}function dt(n,r,s,a,t,i,l){const{align:d,axis:u,direction:g,startIndex:h,loop:f,duration:m,dragFree:y,dragThreshold:p,inViewThreshold:S,slidesToScroll:b,skipSnaps:C,containScroll:x,watchResize:w,watchSlides:k,watchDrag:L,watchFocus:T}=i,I=2,E=Xs(),_=E.measure(r),D=s.map(E.measure),z=Rs(u,g),G=z.measureSize(_),Q=qs(G),X=Gs(d,G),q=!f&&!!x,ne=f||!!x,{slideSizes:v,slideSizesWithGaps:Y,startGap:W,endGap:se}=ct(z,_,D,s,ne,t),V=ut(z,G,b,f,_,D,W,se,I),{snaps:U,snapsAligned:Z}=nt(z,X,_,D,V),J=-re(U)+re(Y),{snapsContained:ae,scrollContainLimit:ie}=Js(G,J,Z,x,I),A=q?ae:Z,{limit:M}=Ys(J,A,f),ee=gs(_e(A),h,f),R=ee.clone(),F=we(s),j=({dragHandler:de,scrollBody:pn,scrollBounds:mn,options:{loop:Pe}},Sn)=>{Pe||mn.constrain(de.pointerDown()),pn.seek(Sn)},N=({scrollBody:de,translate:pn,location:mn,offsetLocation:Pe,scrollLooper:Sn,slideLooper:Ss,dragHandler:hs,animation:bs,eventHandler:An,scrollBounds:xs,options:{loop:Dn}},Nn)=>{const On=de.settled(),ys=!xs.shouldConstrain(),Mn=Dn?On:On&&ys;Mn&&!hs.pointerDown()&&(bs.stop(),An.emit("settle")),Mn||An.emit("scroll");const js=mn.get()*Nn+ce.get()*(1-Nn);Pe.set(js),Dn&&(Sn.loop(de.direction()),Ss.loop()),pn.to(Pe.get())},H=Vs(a,t,de=>j(Cn,de),de=>N(Cn,de)),K=.68,te=A[ee.get()],le=ye(te),ce=ye(te),ue=ye(te),fe=ye(te),xe=Ks(le,ue,ce,fe,m,K),gn=st(f,A,J,M,fe),fn=tt(H,ee,R,xe,gn,fe,l),kn=et(M),Tn=ve(),ps=lt(r,s,l,S),{slideRegistry:Ln}=rt(q,x,A,ie,V,F),ms=ot(n,s,Ln,fn,xe,Tn,l,T),Cn={ownerDocument:a,ownerWindow:t,eventHandler:l,containerRect:_,slideRects:D,animation:H,axis:z,dragHandler:$s(z,n,a,t,fe,Qs(z,t),le,H,fn,xe,gn,ee,l,Q,y,p,C,K,L),eventStore:Tn,percentOfView:Q,index:ee,indexPrevious:R,limit:M,location:le,offsetLocation:ue,previousLocation:ce,options:i,resizeHandler:Us(r,l,t,s,z,w,E),scrollBody:xe,scrollBounds:Ws(M,ue,fe,xe,Q),scrollLooper:Zs(J,M,ue,[le,ue,ce,fe]),scrollProgress:kn,scrollSnapList:A.map(kn.get),scrollSnaps:A,scrollTarget:gn,scrollTo:fn,slideLooper:at(z,G,J,v,Y,U,A,ue,s),slideFocus:ms,slidesHandler:it(r,l,k),slidesInView:ps,slideIndexes:F,slideRegistry:Ln,slidesToScroll:V,target:fe,translate:fs(z,r)};return Cn}function gt(){let n={},r;function s(g){r=g}function a(g){return n[g]||[]}function t(g){return a(g).forEach(h=>h(r,g)),u}function i(g,h){return n[g]=a(g).concat([h]),u}function l(g,h){return n[g]=a(g).filter(f=>f!==h),u}function d(){n={}}const u={init:s,emit:t,off:l,on:i,clear:d};return u}const ft={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Ct(n){function r(i,l){return ds(i,l||{})}function s(i){const l=i.breakpoints||{},d=Ie(l).filter(u=>n.matchMedia(u).matches).map(u=>l[u]).reduce((u,g)=>r(u,g),{});return r(i,d)}function a(i){return i.map(l=>Ie(l.breakpoints||{})).reduce((l,d)=>l.concat(d),[]).map(n.matchMedia)}return{mergeOptions:r,optionsAtMedia:s,optionsMediaQueries:a}}function pt(n){let r=[];function s(i,l){return r=l.filter(({options:d})=>n.optionsAtMedia(d).active!==!1),r.forEach(d=>d.init(i,n)),l.reduce((d,u)=>Object.assign(d,{[u.name]:u}),{})}function a(){r=r.filter(i=>i.destroy())}return{init:s,destroy:a}}function cn(n,r,s){const a=n.ownerDocument,t=a.defaultView,i=Ct(t),l=pt(i),d=ve(),u=gt(),{mergeOptions:g,optionsAtMedia:h,optionsMediaQueries:f}=i,{on:m,off:y,emit:p}=u,S=z;let b=!1,C,x=g(ft,cn.globalOptions),w=g(x),k=[],L,T,I;function E(){const{container:F,slides:j}=w;T=(bn(F)?n.querySelector(F):F)||n.children[0];const H=bn(j)?T.querySelectorAll(j):j;I=[].slice.call(H||T.children)}function _(F){const j=dt(n,T,I,a,t,F,u);if(F.loop&&!j.slideLooper.canLoop()){const N=Object.assign({},F,{loop:!1});return _(N)}return j}function D(F,j){b||(x=g(x,F),w=h(x),k=j||k,E(),C=_(w),f([x,...k.map(({options:N})=>N)]).forEach(N=>d.add(N,"change",z)),w.active&&(C.translate.to(C.location.get()),C.animation.init(),C.slidesInView.init(),C.slideFocus.init(R),C.eventHandler.init(R),C.resizeHandler.init(R),C.slidesHandler.init(R),C.options.loop&&C.slideLooper.loop(),T.offsetParent&&I.length&&C.dragHandler.init(R),L=l.init(R,k)))}function z(F,j){const N=V();G(),D(g({startIndex:N},F),j),u.emit("reInit")}function G(){C.dragHandler.destroy(),C.eventStore.clear(),C.translate.clear(),C.slideLooper.clear(),C.resizeHandler.destroy(),C.slidesHandler.destroy(),C.slidesInView.destroy(),C.animation.destroy(),l.destroy(),d.clear()}function Q(){b||(b=!0,d.clear(),G(),u.emit("destroy"),u.clear())}function X(F,j,N){!w.active||b||(C.scrollBody.useBaseFriction().useDuration(j===!0?0:w.duration),C.scrollTo.index(F,N||0))}function q(F){const j=C.index.add(1).get();X(j,F,-1)}function ne(F){const j=C.index.add(-1).get();X(j,F,1)}function v(){return C.index.add(1).get()!==V()}function Y(){return C.index.add(-1).get()!==V()}function W(){return C.scrollSnapList}function se(){return C.scrollProgress.get(C.location.get())}function V(){return C.index.get()}function U(){return C.indexPrevious.get()}function Z(){return C.slidesInView.get()}function J(){return C.slidesInView.get(!1)}function ae(){return L}function ie(){return C}function A(){return n}function M(){return T}function ee(){return I}const R={canScrollNext:v,canScrollPrev:Y,containerNode:M,internalEngine:ie,destroy:Q,off:y,on:m,emit:p,plugins:ae,previousScrollSnap:U,reInit:S,rootNode:A,scrollNext:q,scrollPrev:ne,scrollProgress:se,scrollSnapList:W,scrollTo:X,selectedScrollSnap:V,slideNodes:ee,slidesInView:Z,slidesNotInView:J};return D(r,s),setTimeout(()=>u.emit("init"),0),R}cn.globalOptions=void 0;function vn(n={},r=[]){const s=O.useRef(n),a=O.useRef(r),[t,i]=O.useState(),[l,d]=O.useState(),u=O.useCallback(()=>{t&&t.reInit(s.current,a.current)},[t]);return O.useEffect(()=>{yn(s.current,n)||(s.current=n,u())},[n,u]),O.useEffect(()=>{Bs(a.current,r)||(a.current=r,u())},[r,u]),O.useEffect(()=>{if(Fs()&&l){cn.globalOptions=vn.globalOptions;const g=cn(l,s.current,a.current);return i(g),()=>g.destroy()}else i(void 0)},[l,i]),[d,t]}vn.globalOptions=void 0;const[mt,oe]=Is({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),St=({align:n="center",autoplay:r=!1,children:s,containScroll:a=!1,controlRef:t,defaultIndex:i=0,delay:l=4e3,dragFree:d=!1,draggable:u=!0,duration:g=25,includeGapInSize:h=!0,index:f,inViewThreshold:m=0,loop:y=!0,orientation:p="horizontal",skipSnaps:S=!1,slideSize:b="100%",slidesToScroll:C=1,stopMouseEnterAutoplay:x=!0,watchDrag:w=u,watchResize:k=!0,watchSlides:L=!0,onChange:T,onScrollProgress:I,...E})=>{const[{gap:_="fallback(4, 1rem)",...D},{vars:z,...G}]=vs(E,_s),[Q,X]=ws({defaultValue:i,value:f,onChange:T}),q=p==="vertical",[ne,v]=vn({align:n,axis:q?"y":"x",containScroll:a,dragFree:d,duration:g,inViewThreshold:m,loop:y,skipSnaps:S,slidesToScroll:C,startIndex:i,watchDrag:w,watchResize:k,watchSlides:L},[]);Ps(t,v);const[Y,W]=O.useState([]),[se,V]=O.useState(!1),U=O.useRef(void 0),Z=O.useCallback(()=>{if(!v)return;const A=Math.round(Math.max(0,Math.min(1,v.scrollProgress()))*100);I==null||I(A)},[v,I]),J=O.useCallback(()=>{if(!v)return;const A=v.selectedScrollSnap();X(A)},[v,X]);O.useEffect(()=>{const A=se&&x,M=!(v!=null&&v.canScrollNext());return v&&r&&!A&&!M?U.current=setInterval(()=>{v.scrollNext()},l):(U.current&&clearInterval(U.current),U.current=void 0),()=>{U.current&&clearInterval(U.current)}},[r,l,x,v,se,y,Q]),ze(()=>{if(!v)return;v.reInit();const M=v.scrollSnapList().map((ee,R)=>R);W(M)},[O.Children.toArray(s).length,n,p,y,g,_,C,u,d,m,S,a,b,h]),ze(()=>{if(!v)return;const M=v.scrollSnapList().map((ee,R)=>R);W(M)},[v]),ze(()=>{if(v)return v.on("select",J),v.on("scroll",Z),Z(),()=>{v.off("select",J),v.off("scroll",Z)}},[v,Z]),ze(()=>{v&&f!==void 0&&v.scrollTo(f)},[f]);const ae=O.useCallback((A={},M=null)=>({...D,...A,ref:M,vars:Ls(z,[{name:"gap",token:"spaces",value:_},{name:"slideSize",token:"sizes",value:b}]),onMouseEnter:ln(A.onMouseEnter,()=>{V(!0)}),onMouseLeave:ln(A.onMouseLeave,()=>{V(!1)})}),[D,_,b,z]),ie=O.useCallback((A={})=>({...G,...A,ref:ne}),[G,ne]);return{carousel:v,children:s,includeGapInSize:h,indexes:Y,orientation:p,selectedIndex:Q,slidesToScroll:C,getContainerProps:ae,getSlidesProps:ie}},ht=({index:n})=>{const{selectedIndex:r,slidesToScroll:s}=oe();n=Math.floor((n??0)/s);const a=n===r;return{getSlideProps:O.useCallback((i={})=>({...i,"data-index":n,"data-selected":ls(a)}),[a,n])}},Cs=({operation:n,...r})=>{const{carousel:s}=oe(),a=n==="prev",t=r.disabled??r.isDisabled??(a?!(s!=null&&s.canScrollPrev()):!(s!=null&&s.canScrollNext())),i=O.useCallback(()=>{s&&(a?s.scrollPrev():s.scrollNext())},[s,a]);return{getControlProps:O.useCallback((d={},u=null)=>({...d,ref:u,disabled:t,onClick:ln(d.onClick,i)}),[t,i])}},bt=()=>{const{carousel:n,indexes:r,selectedIndex:s}=oe(),a=O.useCallback((i,l)=>{n&&(i.stopPropagation(),n.scrollTo(l))},[n]),t=O.useCallback(({index:i,...l})=>{const d=i===s;return{"aria-label":`Go to ${i+1} slide`,...l,key:i,"data-index":i,"data-selected":ls(d),onClick:ln(l.onClick,u=>a(u,i))}},[a,s]);return{indexes:r,getIndicatorProps:t}},Se=ge(({className:n,...r},s)=>{const{orientation:a}=oe(),{getControlProps:t}=Cs({operation:"prev"});return e.jsx(dn,{className:pe("ui-carousel__control--prev",n),"aria-label":"Go to previous slide",icon:e.jsx(cs,{__css:{fontSize:"1.5em",transform:a==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),operation:"prev",...t(r,s)})});Se.displayName="CarouselControlPrev";Se.__ui__="CarouselControlPrev";const he=ge(({className:n,...r},s)=>{const{orientation:a}=oe(),{getControlProps:t}=Cs({operation:"next"});return e.jsx(dn,{className:pe("ui-carousel__control--next",n),"aria-label":"Go to next slide",icon:e.jsx(cs,{__css:{fontSize:"1.5em",transform:a==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),operation:"next",...t(r,s)})});he.displayName="CarouselControlNext";he.__ui__="CarouselControlNext";const dn=ge(({className:n,operation:r,...s},a)=>{const{styles:t}=oe(),i={position:"absolute",zIndex:"fallback(kurillin, 9)",...t.control,...t[r]};return e.jsx(As,{ref:a,className:pe("ui-carousel__control",n),colorScheme:["whiteAlpha","blackAlpha"],isRounded:!0,__css:i,...s})});dn.displayName="CarouselControl";dn.__ui__="CarouselControl";const be=ge(({className:n,component:r,...s},a)=>{const{orientation:t,selectedIndex:i,styles:l}=oe(),{indexes:d,getIndicatorProps:u}=bt(),g={display:"flex",justifyContent:"center",position:"absolute",zIndex:"fallback(kurillin, 9)",...l.indicators,...t==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(me.div,{ref:a,className:pe("ui-carousel__indicators",n),__css:g,...s,children:d.map(h=>{const f=h===i;if(typeof r=="function"){const m=r({index:h,isSelected:f});if(!m)return null;const y=u({...m.props,index:h});return O.cloneElement(m,y)}else{const{key:m,...y}=u({index:h});return e.jsx(_n,{...y},m)}})})});be.displayName="CarouselIndicators";be.__ui__="CarouselIndicators";const _n=({className:n,...r})=>{const{styles:s}=oe(),a={...s.indicator};return e.jsx(me.button,{type:"button",className:pe("ui-carousel__indicators__indicator",n),tabIndex:-1,__css:a,...r})};_n.displayName="CarouselIndicator";_n.__ui__="CarouselIndicator";const o=ge(({className:n,size:r,...s},a)=>{const{includeGapInSize:t,orientation:i}=oe(),{getSlideProps:l}=ht(s);r??(r="$slideSize");const d={flex:`0 0 ${r}`,position:"relative",...t?{[i==="vertical"?"pb":"pr"]:"$gap"}:{[i==="vertical"?"mb":"mr"]:"$gap"}};return e.jsx(me.div,{className:pe("ui-carousel__slide",n),__css:d,...l({}),children:e.jsx(Pn,{ref:a,...s})})});o.displayName="CarouselSlide";o.__ui__="CarouselSlide";const Pn=ge(({...n},r)=>e.jsx(me.div,{ref:r,className:"ui-carousel__slide__inner",boxSize:"100%",...n}));Pn.displayName="CarouselSlideInner";Pn.__ui__="CarouselSlideInner";const P=ge(({h:n,height:r,minH:s,minHeight:a,...t},i)=>{const l=$(t.orientation),d=$(t.align),u=$(t.autoplay),g=$(t.stopMouseEnterAutoplay),h=$(t.loop),f=$(t.duration),m=$(t.delay),y=$(t.slidesToScroll),p=$(t.draggable),S=$(t.dragFree),b=$(t.inViewThreshold),C=$(t.skipSnaps),x=$(t.containScroll),w=$(t.includeGapInSize),[k,L]=Ds("Carousel",{...t,align:d,autoplay:u,containScroll:x,delay:m,dragFree:S,draggable:p,duration:f,includeGapInSize:w,inViewThreshold:b,loop:h,orientation:l,skipSnaps:C,slidesToScroll:y,stopMouseEnterAutoplay:g}),{className:T,withControls:I=!0,withIndicators:E=!0,controlNextProps:_,controlPrevProps:D,controlProps:z,indicatorsProps:G,innerProps:Q,...X}=Ns(L),q=$(I),ne=$(E),{children:v,getContainerProps:Y,getSlidesProps:W,...se}=St({...X}),V=zs(v),U=hn(V,Se),Z=hn(V,he),J=hn(V,be),ae=Es(V,o),ie=ks(V,Se,he,be,o),A=ae.map((ee,R)=>O.cloneElement(ee,{index:R})),M={h:"fit-content",position:"relative",...k.container};return n??(n=r),s??(s=a),e.jsx(mt,{value:{styles:k,...se},children:e.jsxs(me.div,{className:pe("ui-carousel",T),__css:M,...Y({},i),children:[U??(q?e.jsx(Se,{...z,...D}):null),Z??(q?e.jsx(he,{...z,..._}):null),e.jsx(zn,{...W({...Ts({h:n,minH:s}),...Q}),children:A}),J??(ne?e.jsx(be,{...G}):null),ie]})})});P.displayName="Carousel";P.__ui__="Carousel";const zn=ge(({...n},r)=>{const s={h:"fit-content",overflow:"hidden",w:"100%"};return e.jsx(me.div,{ref:r,className:"ui-carousel__sliders",__css:s,children:e.jsx(En,{...n})})});zn.displayName="CarouselSlides";zn.__ui__="CarouselSlides";const En=({...n})=>{const{includeGapInSize:r,orientation:s,styles:a}=oe(),t={display:"flex",flexDirection:s==="vertical"?"column":"row",...a.inner,...r?{[s==="vertical"?"mb":"mr"]:"calc($gap * -1)"}:{}};return e.jsx(me.div,{className:"ui-carousel__sliders__inner",__css:t,...n})};En.displayName="CarouselSlidesInner";En.__ui__="CarouselSlidesInner";const eo={component:P,title:"Components / Data Display / Carousel"},Me=()=>e.jsxs(P,{children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{size:"sm",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"md",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"lg",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"xl",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]})]}),Be=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{orientation:"horizontal",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{orientation:"vertical",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]})]}),He=()=>e.jsxs(P,{defaultIndex:1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ge=()=>e.jsxs(P,{gap:0,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ve=()=>e.jsxs(P,{duration:60,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(P,{slideSize:"50%",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,size:"100%",bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),$e=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{align:"center",slideSize:"50%",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{align:"start",slideSize:"50%",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{align:"end",slideSize:"50%",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]})]}),Qe=()=>e.jsxs(P,{loop:!1,slideSize:"33.3%",slidesToScroll:3,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"}),e.jsx(o,{as:c,bg:"primary",children:"5"}),e.jsx(o,{as:c,bg:"secondary",children:"6"}),e.jsx(o,{as:c,bg:"danger",children:"7"}),e.jsx(o,{as:c,bg:"primary",children:"8"}),e.jsx(o,{as:c,bg:"secondary",children:"9"})]}),Xe=()=>e.jsxs(P,{align:"start",h:"auto",slideSize:"50%",slidesToScroll:2,children:[e.jsxs(o,{as:Ee,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Ae,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Te,{children:[e.jsx(De,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Ne,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Le,{children:e.jsx(Oe,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:Ee,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Ae,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Te,{children:[e.jsx(De,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Ne,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Le,{children:e.jsx(Oe,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:Ee,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Ae,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Te,{children:[e.jsx(De,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Ne,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Le,{children:e.jsx(Oe,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:Ee,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Ae,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Te,{children:[e.jsx(De,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Ne,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Le,{children:e.jsx(Oe,{colorScheme:"primary",children:"Wikipedia"})})]})]}),qe=()=>e.jsxs(P,{autoplay:!0,loop:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ue=()=>e.jsxs(P,{autoplay:!0,delay:1e3,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ke=()=>e.jsxs(P,{dragFree:!0,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),We=()=>{const[n,r]=O.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{dragFree:!0,loop:!1,onScrollProgress:r,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsx(Os,{colorScheme:"gray",value:n})]})},Je=()=>e.jsxs(P,{includeGapInSize:!1,slideSize:"50%",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ye=()=>e.jsxs(P,{loop:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ze=()=>e.jsxs(P,{draggable:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),en=()=>e.jsxs(P,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),nn=()=>e.jsxs(P,{withControls:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),rn=()=>e.jsxs(P,{withIndicators:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),sn=()=>e.jsxs(P,{watchDrag:(n,r)=>(console.log("drag",n,r),!0),watchResize:(n,r)=>(console.log("resized",n,r),!0),watchSlides:(n,r)=>(console.log("slides updated",n,r),!0),children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),tn=()=>{const[n,r]=O.useState(0);return e.jsxs(P,{draggable:!1,index:n,onChange:r,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]})},on=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{controlProps:{icon:e.jsx(us,{})},children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{controlPrevProps:{icon:e.jsx(Fn,{})},children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{controlNextProps:{icon:e.jsx(Bn,{})},children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{children:[e.jsx(Se,{icon:e.jsx(Fn,{})}),e.jsx(he,{icon:e.jsx(Bn,{})}),e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]})]}),an=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{indicatorsProps:{bottom:"8",component:({isSelected:n})=>e.jsx(us,{color:n?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer",fontSize:"2xl"})},children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"}),e.jsx(be,{sx:{"& > *":{transitionDuration:"slower",transitionProperty:"width",w:"4",_selected:{w:"12"}}}})]})]});var $n,Qn,Xn;Me.parameters={...Me.parameters,docs:{...($n=Me.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
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
}`,...(Xn=(Qn=Me.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};var qn,Un,Kn;Fe.parameters={...Fe.parameters,docs:{...(qn=Fe.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
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
}`,...(Kn=(Un=Fe.parameters)==null?void 0:Un.docs)==null?void 0:Kn.source}}};var Wn,Jn,Yn;Be.parameters={...Be.parameters,docs:{...(Wn=Be.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Jn=Be.parameters)==null?void 0:Jn.docs)==null?void 0:Yn.source}}};var Zn,er,nr;He.parameters={...He.parameters,docs:{...(Zn=He.parameters)==null?void 0:Zn.docs,source:{originalSource:`() => {
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
}`,...(nr=(er=He.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,sr,tr;Ge.parameters={...Ge.parameters,docs:{...(rr=Ge.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
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
}`,...(tr=(sr=Ge.parameters)==null?void 0:sr.docs)==null?void 0:tr.source}}};var or,ar,ir;Ve.parameters={...Ve.parameters,docs:{...(or=Ve.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
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
}`,...(ir=(ar=Ve.parameters)==null?void 0:ar.docs)==null?void 0:ir.source}}};var lr,cr,ur;Re.parameters={...Re.parameters,docs:{...(lr=Re.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
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
}`,...(ur=(cr=Re.parameters)==null?void 0:cr.docs)==null?void 0:ur.source}}};var dr,gr,fr;$e.parameters={...$e.parameters,docs:{...(dr=$e.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
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
}`,...(fr=(gr=$e.parameters)==null?void 0:gr.docs)==null?void 0:fr.source}}};var Cr,pr,mr;Qe.parameters={...Qe.parameters,docs:{...(Cr=Qe.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
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
}`,...(mr=(pr=Qe.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var Sr,hr,br;Xe.parameters={...Xe.parameters,docs:{...(Sr=Xe.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
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
}`,...(br=(hr=Xe.parameters)==null?void 0:hr.docs)==null?void 0:br.source}}};var xr,yr,jr;qe.parameters={...qe.parameters,docs:{...(xr=qe.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
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
}`,...(jr=(yr=qe.parameters)==null?void 0:yr.docs)==null?void 0:jr.source}}};var wr,Ir,vr;Ue.parameters={...Ue.parameters,docs:{...(wr=Ue.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
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
}`,...(vr=(Ir=Ue.parameters)==null?void 0:Ir.docs)==null?void 0:vr.source}}};var _r,Pr,zr;Ke.parameters={...Ke.parameters,docs:{...(_r=Ke.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
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
}`,...(zr=(Pr=Ke.parameters)==null?void 0:Pr.docs)==null?void 0:zr.source}}};var Er,kr,Tr;We.parameters={...We.parameters,docs:{...(Er=We.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
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
}`,...(Tr=(kr=We.parameters)==null?void 0:kr.docs)==null?void 0:Tr.source}}};var Lr,Ar,Dr;Je.parameters={...Je.parameters,docs:{...(Lr=Je.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
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
}`,...(Dr=(Ar=Je.parameters)==null?void 0:Ar.docs)==null?void 0:Dr.source}}};var Nr,Or,Mr;Ye.parameters={...Ye.parameters,docs:{...(Nr=Ye.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
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
}`,...(Mr=(Or=Ye.parameters)==null?void 0:Or.docs)==null?void 0:Mr.source}}};var Fr,Br,Hr;Ze.parameters={...Ze.parameters,docs:{...(Fr=Ze.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
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
}`,...(Hr=(Br=Ze.parameters)==null?void 0:Br.docs)==null?void 0:Hr.source}}};var Gr,Vr,Rr;en.parameters={...en.parameters,docs:{...(Gr=en.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
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
}`,...(Rr=(Vr=en.parameters)==null?void 0:Vr.docs)==null?void 0:Rr.source}}};var $r,Qr,Xr;nn.parameters={...nn.parameters,docs:{...($r=nn.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
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
}`,...(Xr=(Qr=nn.parameters)==null?void 0:Qr.docs)==null?void 0:Xr.source}}};var qr,Ur,Kr;rn.parameters={...rn.parameters,docs:{...(qr=rn.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
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
}`,...(Kr=(Ur=rn.parameters)==null?void 0:Ur.docs)==null?void 0:Kr.source}}};var Wr,Jr,Yr;sn.parameters={...sn.parameters,docs:{...(Wr=sn.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
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
}`,...(Yr=(Jr=sn.parameters)==null?void 0:Jr.docs)==null?void 0:Yr.source}}};var Zr,es,ns;tn.parameters={...tn.parameters,docs:{...(Zr=tn.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
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
}`,...(ns=(es=tn.parameters)==null?void 0:es.docs)==null?void 0:ns.source}}};var rs,ss,ts;on.parameters={...on.parameters,docs:{...(rs=on.parameters)==null?void 0:rs.docs,source:{originalSource:`() => {
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
}`,...(ts=(ss=on.parameters)==null?void 0:ss.docs)==null?void 0:ts.source}}};var os,as,is;an.parameters={...an.parameters,docs:{...(os=an.parameters)==null?void 0:os.docs,source:{originalSource:`() => {
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
}`,...(is=(as=an.parameters)==null?void 0:as.docs)==null?void 0:is.source}}};const no=["basic","withSize","withOrientation","withDefaultIndex","withGap","withDuration","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","useMethods","customControl","customControlButton","customIndicators"];export{no as __namedExportsOrder,Me as basic,tn as customControl,on as customControlButton,an as customIndicators,eo as default,nn as disabledControlButton,Ze as disabledDraggable,Je as disabledIncludeGapInSize,rn as disabledIndicators,Ye as disabledLoop,en as disabledStopMouseEnterAutoplay,sn as useMethods,$e as withAlign,qe as withAutoplay,Xe as withCard,He as withDefaultIndex,Ue as withDelay,Ke as withDragFree,Ve as withDuration,Ge as withGap,Be as withOrientation,We as withScrollProgress,Fe as withSize,Re as withSlideSize,Qe as withSlidesToScroll};
