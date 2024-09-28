import{j as e}from"./extends-CwFRzn3r.js";import{r as N}from"./index-BwDkhjyp.js";import{u as Fn}from"./index-Bv9EtTZD.js";import{u as Q}from"./index-eyuXmfUh.js";import{u as Is}from"./index-tU9OGY6h.js";import{o as vs,U as _s,a6 as zs,e as Ps,f as Sn,h as an,d as cs,c as pe,Z as Es,b as me,p as ks,q as hn,a2 as Ts,a9 as Ls,y as As}from"./factory-CYpx3TMG.js";import{c as ds}from"./icon-FPUxZQsz.js";import{I as Ds}from"./icon-button-Dcr2DVaV.js";import{f as ge}from"./forward-ref-BWI-Phbn.js";import{a as Ns}from"./use-component-style-CfUS8Ki1.js";import{o as Os}from"./theme-provider-BZKkW4ID.js";import{P as Ms}from"./progress-C-AVRyAX.js";import{A as Bn}from"./arrow-left-Dl6XcBwj.js";import{A as Hn}from"./arrow-right-Bvp7NAmr.js";import{C as c}from"./center-pYBjMgrp.js";import{C as Pe,a as Ee,b as ke,c as Te}from"./card-GUyMjT9V.js";import{I as Le}from"./image-DCw8BMuS.js";import{H as Ae}from"./heading-C9--xclW.js";import{T as De}from"./text-DR0EVEsm.js";import{B as Ne}from"./button-Bx26J9Y6.js";import{G as us}from"./ghost-C8YtfOT4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CDflVp_n.js";import"./use-var-B0r_2U-t.js";import"./index-B8YQiu_Q.js";import"./index-Du0-7Fls.js";import"./index-DEy_TXYI.js";import"./number-CcP_arM8.js";import"./lucide-icon-cfLZgeB_.js";import"./use-image-a7fX0qgV.js";import"./use-ripple-ug6Wud9C.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./loading-DndL1UZp.js";function Fs(n){return Object.prototype.toString.call(n)==="[object Object]"}function Gn(n){return Fs(n)||Array.isArray(n)}function Bs(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function yn(n,r){const s=Object.keys(n),a=Object.keys(r);if(s.length!==a.length)return!1;const t=JSON.stringify(Object.keys(n.breakpoints||{})),i=JSON.stringify(Object.keys(r.breakpoints||{}));return t!==i?!1:s.every(l=>{const u=n[l],d=r[l];return typeof u=="function"?`${u}`==`${d}`:!Gn(u)||!Gn(d)?u===d:yn(u,d)})}function Vn(n){return n.concat().sort((r,s)=>r.name>s.name?1:-1).map(r=>r.options)}function Hs(n,r){if(n.length!==r.length)return!1;const s=Vn(n),a=Vn(r);return s.every((t,i)=>{const l=a[i];return yn(t,l)})}function jn(n){return typeof n=="number"}function bn(n){return typeof n=="string"}function cn(n){return typeof n=="boolean"}function Rn(n){return Object.prototype.toString.call(n)==="[object Object]"}function F(n){return Math.abs(n)}function wn(n){return Math.sign(n)}function je(n,r){return F(n-r)}function Gs(n,r){if(n===0||r===0||F(n)<=F(r))return 0;const s=je(F(n),F(r));return F(s/n)}function we(n){return Ie(n).map(Number)}function te(n){return n[_e(n)]}function _e(n){return Math.max(0,n.length-1)}function In(n,r){return r===_e(n)}function Qn(n,r=0){return Array.from(Array(n),(s,a)=>r+a)}function Ie(n){return Object.keys(n)}function gs(n,r){return[n,r].reduce((s,a)=>(Ie(a).forEach(t=>{const i=s[t],l=a[t],u=Rn(i)&&Rn(l);s[t]=u?gs(i,l):l}),s),{})}function xn(n,r){return typeof r.MouseEvent<"u"&&n instanceof r.MouseEvent}function Vs(n,r){const s={start:a,center:t,end:i};function a(){return 0}function t(d){return i(d)/2}function i(d){return r-d}function l(d,g){return bn(n)?s[n](d):n(r,d,g)}return{measure:l}}function ve(){let n=[];function r(t,i,l,u={passive:!0}){let d;if("addEventListener"in t)t.addEventListener(i,l,u),d=()=>t.removeEventListener(i,l,u);else{const g=t;g.addListener(l),d=()=>g.removeListener(l)}return n.push(d),a}function s(){n=n.filter(t=>t())}const a={add:r,clear:s};return a}function Rs(n,r,s,a){const t=ve(),i=1e3/60;let l=null,u=0,d=0;function g(){t.add(n,"visibilitychange",()=>{n.hidden&&p()})}function h(){y(),t.clear()}function f(x){if(!d)return;l||(l=x);const C=x-l;for(l=x,u+=C;u>=i;)s(i),u-=i;const b=u/i;a(b),d&&r.requestAnimationFrame(f)}function m(){d||(d=r.requestAnimationFrame(f))}function y(){r.cancelAnimationFrame(d),l=null,u=0,d=0}function p(){l=null,u=0}return{init:g,destroy:h,start:m,stop:y,update:()=>s(i),render:a}}function Qs(n,r){const s=r==="rtl",a=n==="y",t=a?"y":"x",i=a?"x":"y",l=!a&&s?-1:1,u=h(),d=f();function g(p){const{height:S,width:x}=p;return a?S:x}function h(){return a?"top":s?"right":"left"}function f(){return a?"bottom":s?"left":"right"}function m(p){return p*l}return{scroll:t,cross:i,startEdge:u,endEdge:d,measureSize:g,direction:m}}function Ce(n=0,r=0){const s=F(n-r);function a(g){return g<n}function t(g){return g>r}function i(g){return a(g)||t(g)}function l(g){return i(g)?a(g)?n:r:g}function u(g){return s?g-s*Math.ceil((g-r)/s):g}return{length:s,max:r,min:n,constrain:l,reachedAny:i,reachedMax:t,reachedMin:a,removeOffset:u}}function fs(n,r,s){const{constrain:a}=Ce(0,n),t=n+1;let i=l(r);function l(m){return s?F((t+m)%t):a(m)}function u(){return i}function d(m){return i=l(m),f}function g(m){return h().set(u()+m)}function h(){return fs(n,u(),s)}const f={get:u,set:d,add:g,clone:h};return f}function Xs(n,r,s,a,t,i,l,u,d,g,h,f,m,y,p,S,x,C,b){const{cross:w,direction:k}=n,L=["INPUT","SELECT","TEXTAREA"],T={passive:!1},I=ve(),_=ve(),z=Ce(50,225).constrain(y.measure(20)),D={mouse:300,touch:400},E={mouse:500,touch:600},G=p?43:25;let X=!1,W=0,$=0,P=!1,re=!1,J=!1,U=!1;function oe(j){if(!b)return;function A(K){(cn(b)||b(j,K))&&B(K)}const H=r;I.add(H,"dragstart",K=>K.preventDefault(),T).add(H,"touchmove",()=>{},T).add(H,"touchend",()=>{}).add(H,"touchstart",A).add(H,"mousedown",A).add(H,"touchcancel",R).add(H,"contextmenu",R).add(H,"click",q,!0)}function V(){I.clear(),_.clear()}function Z(){const j=U?s:r;_.add(j,"touchmove",M,T).add(j,"touchend",R).add(j,"mousemove",M,T).add(j,"mouseup",R)}function se(j){const A=j.nodeName||"";return L.includes(A)}function ee(){return(p?E:D)[U?"mouse":"touch"]}function ne(j,A){const H=f.add(wn(j)*-1),K=h.byDistance(j,!p).distance;return p||F(j)<z?K:x&&A?K*.5:h.byIndex(H.get(),0).distance}function B(j){const A=xn(j,a);U=A,J=p&&A&&!j.buttons&&X,X=je(t.get(),l.get())>=2,!(A&&j.button!==0)&&(se(j.target)||(P=!0,i.pointerDown(j),g.useFriction(0).useDuration(0),t.set(l),Z(),W=i.readPoint(j),$=i.readPoint(j,w),m.emit("pointerDown")))}function M(j){if(!xn(j,a)&&j.touches.length>=2)return R(j);const H=i.readPoint(j),K=i.readPoint(j,w),ae=je(H,W),le=je(K,$);if(!re&&!U&&(!j.cancelable||(re=ae>le,!re)))return R(j);const ce=i.pointerMove(j);ae>S&&(J=!0),g.useFriction(.3).useDuration(.75),u.start(),t.add(k(ce)),j.preventDefault()}function R(j){const H=h.byDistance(0,!1).index!==f.get(),K=i.pointerUp(j)*ee(),ae=ne(k(K),H),le=Gs(K,ae),ce=G-10*le,de=C+le/50;re=!1,P=!1,_.clear(),g.useDuration(ce).useFriction(de),d.distance(ae,!p),U=!1,m.emit("pointerUp")}function q(j){J&&(j.stopPropagation(),j.preventDefault(),J=!1)}function Y(){return P}return{init:oe,destroy:V,pointerDown:Y}}function $s(n,r){let a,t;function i(f){return f.timeStamp}function l(f,m){const p=`client${(m||n.scroll)==="x"?"X":"Y"}`;return(xn(f,r)?f:f.touches[0])[p]}function u(f){return a=f,t=f,l(f)}function d(f){const m=l(f)-l(t),y=i(f)-i(a)>170;return t=f,y&&(a=f),m}function g(f){if(!a||!t)return 0;const m=l(t)-l(a),y=i(f)-i(a),p=i(f)-i(t)>170,S=m/y;return y&&!p&&F(S)>.1?S:0}return{pointerDown:u,pointerMove:d,pointerUp:g,readPoint:l}}function Us(){function n(s){const{offsetTop:a,offsetLeft:t,offsetWidth:i,offsetHeight:l}=s;return{top:a,right:t+i,bottom:a+l,left:t,width:i,height:l}}return{measure:n}}function qs(n){function r(a){return n*(a/100)}return{measure:r}}function Ks(n,r,s,a,t,i,l){const u=[n].concat(a);let d,g,h=[],f=!1;function m(x){return t.measureSize(l.measure(x))}function y(x){if(!i)return;g=m(n),h=a.map(m);function C(b){for(const w of b){if(f)return;const k=w.target===n,L=a.indexOf(w.target),T=k?g:h[L],I=m(k?n:a[L]);if(F(I-T)>=.5){x.reInit(),r.emit("resize");break}}}d=new ResizeObserver(b=>{(cn(i)||i(x,b))&&C(b)}),s.requestAnimationFrame(()=>{u.forEach(b=>d.observe(b))})}function p(){f=!0,d&&d.disconnect()}return{init:y,destroy:p}}function Ws(n,r,s,a,t,i){let l=0,u=0,d=t,g=i,h=n.get(),f=0;function m(T){const I=T/1e3,_=d*I,z=a.get()-n.get(),D=!d;let E=0;return D?(l=0,s.set(a),n.set(a),E=z):(s.set(n),l+=z/_,l*=g,h+=l,n.add(l*I),E=h-f),u=wn(E),f=h,L}function y(){const T=a.get()-r.get();return F(T)<.001}function p(){return d}function S(){return u}function x(){return l}function C(){return w(t)}function b(){return k(i)}function w(T){return d=T,L}function k(T){return g=T,L}const L={direction:S,duration:p,velocity:x,seek:m,settled:y,useBaseFriction:b,useBaseDuration:C,useFriction:k,useDuration:w};return L}function Js(n,r,s,a,t){const i=t.measure(10),l=t.measure(50),u=Ce(.1,.99);let d=!1;function g(){return!(d||!n.reachedAny(s.get())||!n.reachedAny(r.get()))}function h(y){if(!g())return;const p=n.reachedMin(r.get())?"min":"max",S=F(n[p]-r.get()),x=s.get()-r.get(),C=u.constrain(S/l);s.subtract(x*C),!y&&F(x)<i&&(s.set(n.constrain(s.get())),a.useDuration(25).useBaseFriction())}function f(y){d=!y}return{shouldConstrain:g,constrain:h,toggleActive:f}}function Ys(n,r,s,a,t){const i=Ce(-r+n,0),l=f(),u=h(),d=m();function g(p,S){return je(p,S)<1}function h(){const p=l[0],S=te(l),x=l.lastIndexOf(p),C=l.indexOf(S)+1;return Ce(x,C)}function f(){return s.map((p,S)=>{const{min:x,max:C}=i,b=i.constrain(p),w=!S,k=In(s,S);return w?C:k||g(x,b)?x:g(C,b)?C:b}).map(p=>parseFloat(p.toFixed(3)))}function m(){if(r<=n+t)return[i.max];if(a==="keepSnaps")return l;const{min:p,max:S}=u;return l.slice(p,S)}return{snapsContained:d,scrollContainLimit:u}}function Zs(n,r,s){const a=r[0],t=s?a-n:te(r);return{limit:Ce(t,a)}}function et(n,r,s,a){const i=r.min+.1,l=r.max+.1,{reachedMin:u,reachedMax:d}=Ce(i,l);function g(m){return m===1?d(s.get()):m===-1?u(s.get()):!1}function h(m){if(!g(m))return;const y=n*(m*-1);a.forEach(p=>p.add(y))}return{loop:h}}function nt(n){const{max:r,length:s}=n;function a(i){const l=i-r;return s?l/-s:0}return{get:a}}function rt(n,r,s,a,t){const{startEdge:i,endEdge:l}=n,{groupSlides:u}=t,d=f().map(r.measure),g=m(),h=y();function f(){return u(a).map(S=>te(S)[l]-S[0][i]).map(F)}function m(){return a.map(S=>s[i]-S[i]).map(S=>-F(S))}function y(){return u(g).map(S=>S[0]).map((S,x)=>S+d[x])}return{snaps:g,snapsAligned:h}}function st(n,r,s,a,t,i){const{groupSlides:l}=t,{min:u,max:d}=a,g=h();function h(){const m=l(i),y=!n||r==="keepSnaps";return s.length===1?[i]:y?m:m.slice(u,d).map((p,S,x)=>{const C=!S,b=In(x,S);if(C){const w=te(x[0])+1;return Qn(w)}if(b){const w=_e(i)-te(x)[0]+1;return Qn(w,te(x)[0])}return p})}return{slideRegistry:g}}function tt(n,r,s,a,t){const{reachedAny:i,removeOffset:l,constrain:u}=a;function d(p){return p.concat().sort((S,x)=>F(S)-F(x))[0]}function g(p){const S=n?l(p):u(p),x=r.map((b,w)=>({diff:h(b-S,0),index:w})).sort((b,w)=>F(b.diff)-F(w.diff)),{index:C}=x[0];return{index:C,distance:S}}function h(p,S){const x=[p,p+s,p-s];if(!n)return p;if(!S)return d(x);const C=x.filter(b=>wn(b)===S);return C.length?d(C):te(x)-s}function f(p,S){const x=r[p]-t.get(),C=h(x,S);return{index:p,distance:C}}function m(p,S){const x=t.get()+p,{index:C,distance:b}=g(x),w=!n&&i(x);if(!S||w)return{index:C,distance:p};const k=r[C]-b,L=p+h(k,0);return{index:C,distance:L}}return{byDistance:m,byIndex:f,shortcut:h}}function ot(n,r,s,a,t,i,l){function u(f){const m=f.distance,y=f.index!==r.get();i.add(m),m&&(a.duration()?n.start():(n.update(),n.render(1),n.update())),y&&(s.set(r.get()),r.set(f.index),l.emit("select"))}function d(f,m){const y=t.byDistance(f,m);u(y)}function g(f,m){const y=r.clone().set(f),p=t.byIndex(y.get(),m);u(p)}return{distance:d,index:g}}function at(n,r,s,a,t,i,l,u){const d={passive:!0,capture:!0};let g=0;function h(y){if(!u)return;function p(S){if(new Date().getTime()-g>10)return;l.emit("slideFocusStart"),n.scrollLeft=0;const b=s.findIndex(w=>w.includes(S));jn(b)&&(t.useDuration(0),a.index(b,0),l.emit("slideFocus"))}i.add(document,"keydown",f,!1),r.forEach((S,x)=>{i.add(S,"focus",C=>{(cn(u)||u(y,C))&&p(x)},d)})}function f(y){y.code==="Tab"&&(g=new Date().getTime())}return{init:h}}function ye(n){let r=n;function s(){return r}function a(d){r=l(d)}function t(d){r+=l(d)}function i(d){r-=l(d)}function l(d){return jn(d)?d:d.get()}return{get:s,set:a,add:t,subtract:i}}function Cs(n,r){const s=n.scroll==="x"?i:l,a=r.style;let t=!1;function i(f){return`translate3d(${f}px,0px,0px)`}function l(f){return`translate3d(0px,${f}px,0px)`}function u(f){t||(a.transform=s(n.direction(f)))}function d(f){t=!f}function g(){t||(a.transform="",r.getAttribute("style")||r.removeAttribute("style"))}return{clear:g,to:u,toggleActive:d}}function it(n,r,s,a,t,i,l,u,d){const h=we(t),f=we(t).reverse(),m=C().concat(b());function y(I,_){return I.reduce((z,D)=>z-t[D],_)}function p(I,_){return I.reduce((z,D)=>y(z,_)>0?z.concat([D]):z,[])}function S(I){return i.map((_,z)=>({start:_-a[z]+.5+I,end:_+r-.5+I}))}function x(I,_,z){const D=S(_);return I.map(E=>{const G=z?0:-s,X=z?s:0,W=z?"end":"start",$=D[E][W];return{index:E,loopPoint:$,slideLocation:ye(-1),translate:Cs(n,d[E]),target:()=>u.get()>$?G:X}})}function C(){const I=l[0],_=p(f,I);return x(_,s,!1)}function b(){const I=r-l[0]-1,_=p(h,I);return x(_,-s,!0)}function w(){return m.every(({index:I})=>{const _=h.filter(z=>z!==I);return y(_,r)<=.1})}function k(){m.forEach(I=>{const{target:_,translate:z,slideLocation:D}=I,E=_();E!==D.get()&&(z.to(E),D.set(E))})}function L(){m.forEach(I=>I.translate.clear())}return{canLoop:w,clear:L,loop:k,loopPoints:m}}function lt(n,r,s){let a,t=!1;function i(d){if(!s)return;function g(h){for(const f of h)if(f.type==="childList"){d.reInit(),r.emit("slidesChanged");break}}a=new MutationObserver(h=>{t||(cn(s)||s(d,h))&&g(h)}),a.observe(n,{childList:!0})}function l(){a&&a.disconnect(),t=!0}return{init:i,destroy:l}}function ct(n,r,s,a){const t={};let i=null,l=null,u,d=!1;function g(){u=new IntersectionObserver(p=>{d||(p.forEach(S=>{const x=r.indexOf(S.target);t[x]=S}),i=null,l=null,s.emit("slidesInView"))},{root:n.parentElement,threshold:a}),r.forEach(p=>u.observe(p))}function h(){u&&u.disconnect(),d=!0}function f(p){return Ie(t).reduce((S,x)=>{const C=parseInt(x),{isIntersecting:b}=t[C];return(p&&b||!p&&!b)&&S.push(C),S},[])}function m(p=!0){if(p&&i)return i;if(!p&&l)return l;const S=f(p);return p&&(i=S),p||(l=S),S}return{init:g,destroy:h,get:m}}function dt(n,r,s,a,t,i){const{measureSize:l,startEdge:u,endEdge:d}=n,g=s[0]&&t,h=p(),f=S(),m=s.map(l),y=x();function p(){if(!g)return 0;const b=s[0];return F(r[u]-b[u])}function S(){if(!g)return 0;const b=i.getComputedStyle(te(a));return parseFloat(b.getPropertyValue(`margin-${d}`))}function x(){return s.map((b,w,k)=>{const L=!w,T=In(k,w);return L?m[w]+h:T?m[w]+f:k[w+1][u]-b[u]}).map(F)}return{slideSizes:m,slideSizesWithGaps:y,startGap:h,endGap:f}}function ut(n,r,s,a,t,i,l,u,d){const{startEdge:g,endEdge:h,direction:f}=n,m=jn(s);function y(C,b){return we(C).filter(w=>w%b===0).map(w=>C.slice(w,w+b))}function p(C){return C.length?we(C).reduce((b,w,k)=>{const L=te(b)||0,T=L===0,I=w===_e(C),_=t[g]-i[L][g],z=t[g]-i[w][h],D=!a&&T?f(l):0,E=!a&&I?f(u):0,G=F(z-E-(_+D));return k&&G>r+d&&b.push(w),I&&b.push(C.length),b},[]).map((b,w,k)=>{const L=Math.max(k[w-1]||0);return C.slice(L,b)}):[]}function S(C){return m?y(C,s):p(C)}return{groupSlides:S}}function gt(n,r,s,a,t,i,l){const{align:u,axis:d,direction:g,startIndex:h,loop:f,duration:m,dragFree:y,dragThreshold:p,inViewThreshold:S,slidesToScroll:x,skipSnaps:C,containScroll:b,watchResize:w,watchSlides:k,watchDrag:L,watchFocus:T}=i,I=2,_=Us(),z=_.measure(r),D=s.map(_.measure),E=Qs(d,g),G=E.measureSize(z),X=qs(G),W=Vs(u,G),$=!f&&!!b,P=f||!!b,{slideSizes:re,slideSizesWithGaps:J,startGap:U,endGap:oe}=dt(E,z,D,s,P,t),V=ut(E,G,x,f,z,D,U,oe,I),{snaps:Z,snapsAligned:se}=rt(E,W,z,D,V),ee=-te(Z)+te(J),{snapsContained:ne,scrollContainLimit:B}=Ys(G,ee,se,b,I),M=$?ne:se,{limit:R}=Zs(ee,M,f),q=fs(_e(M),h,f),Y=q.clone(),O=we(s),j=({dragHandler:ue,scrollBody:Cn,scrollBounds:pn,options:{loop:ze}},mn)=>{ze||pn.constrain(ue.pointerDown()),Cn.seek(mn)},A=({scrollBody:ue,translate:Cn,location:pn,offsetLocation:ze,scrollLooper:mn,slideLooper:hs,dragHandler:bs,animation:xs,eventHandler:An,scrollBounds:ys,options:{loop:Dn}},Nn)=>{const On=ue.settled(),js=!ys.shouldConstrain(),Mn=Dn?On:On&&js;Mn&&!bs.pointerDown()&&(xs.stop(),An.emit("settle")),Mn||An.emit("scroll");const ws=pn.get()*Nn+ce.get()*(1-Nn);ze.set(ws),Dn&&(mn.loop(ue.direction()),hs.loop()),Cn.to(ze.get())},H=Rs(a,t,ue=>j(fn,ue),ue=>A(fn,ue)),K=.68,ae=M[q.get()],le=ye(ae),ce=ye(ae),de=ye(ae),fe=ye(ae),xe=Ws(le,de,ce,fe,m,K),un=tt(f,M,ee,R,fe),gn=ot(H,q,Y,xe,un,fe,l),kn=nt(R),Tn=ve(),ms=ct(r,s,l,S),{slideRegistry:Ln}=st($,b,M,B,V,O),Ss=at(n,s,Ln,gn,xe,Tn,l,T),fn={ownerDocument:a,ownerWindow:t,eventHandler:l,containerRect:z,slideRects:D,animation:H,axis:E,dragHandler:Xs(E,n,a,t,fe,$s(E,t),le,H,gn,xe,un,q,l,X,y,p,C,K,L),eventStore:Tn,percentOfView:X,index:q,indexPrevious:Y,limit:R,location:le,offsetLocation:de,previousLocation:ce,options:i,resizeHandler:Ks(r,l,t,s,E,w,_),scrollBody:xe,scrollBounds:Js(R,de,fe,xe,X),scrollLooper:et(ee,R,de,[le,de,ce,fe]),scrollProgress:kn,scrollSnapList:M.map(kn.get),scrollSnaps:M,scrollTarget:un,scrollTo:gn,slideLooper:it(E,G,ee,re,J,Z,M,de,s),slideFocus:Ss,slidesHandler:lt(r,l,k),slidesInView:ms,slideIndexes:O,slideRegistry:Ln,slidesToScroll:V,target:fe,translate:Cs(E,r)};return fn}function ft(){let n={},r;function s(g){r=g}function a(g){return n[g]||[]}function t(g){return a(g).forEach(h=>h(r,g)),d}function i(g,h){return n[g]=a(g).concat([h]),d}function l(g,h){return n[g]=a(g).filter(f=>f!==h),d}function u(){n={}}const d={init:s,emit:t,off:l,on:i,clear:u};return d}const Ct={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function pt(n){function r(i,l){return gs(i,l||{})}function s(i){const l=i.breakpoints||{},u=Ie(l).filter(d=>n.matchMedia(d).matches).map(d=>l[d]).reduce((d,g)=>r(d,g),{});return r(i,u)}function a(i){return i.map(l=>Ie(l.breakpoints||{})).reduce((l,u)=>l.concat(u),[]).map(n.matchMedia)}return{mergeOptions:r,optionsAtMedia:s,optionsMediaQueries:a}}function mt(n){let r=[];function s(i,l){return r=l.filter(({options:u})=>n.optionsAtMedia(u).active!==!1),r.forEach(u=>u.init(i,n)),l.reduce((u,d)=>Object.assign(u,{[d.name]:d}),{})}function a(){r=r.filter(i=>i.destroy())}return{init:s,destroy:a}}function ln(n,r,s){const a=n.ownerDocument,t=a.defaultView,i=pt(t),l=mt(i),u=ve(),d=ft(),{mergeOptions:g,optionsAtMedia:h,optionsMediaQueries:f}=i,{on:m,off:y,emit:p}=d,S=E;let x=!1,C,b=g(Ct,ln.globalOptions),w=g(b),k=[],L,T,I;function _(){const{container:O,slides:j}=w;T=(bn(O)?n.querySelector(O):O)||n.children[0];const H=bn(j)?T.querySelectorAll(j):j;I=[].slice.call(H||T.children)}function z(O){const j=gt(n,T,I,a,t,O,d);if(O.loop&&!j.slideLooper.canLoop()){const A=Object.assign({},O,{loop:!1});return z(A)}return j}function D(O,j){x||(b=g(b,O),w=h(b),k=j||k,_(),C=z(w),f([b,...k.map(({options:A})=>A)]).forEach(A=>u.add(A,"change",E)),w.active&&(C.translate.to(C.location.get()),C.animation.init(),C.slidesInView.init(),C.slideFocus.init(Y),C.eventHandler.init(Y),C.resizeHandler.init(Y),C.slidesHandler.init(Y),C.options.loop&&C.slideLooper.loop(),T.offsetParent&&I.length&&C.dragHandler.init(Y),L=l.init(Y,k)))}function E(O,j){const A=V();G(),D(g({startIndex:A},O),j),d.emit("reInit")}function G(){C.dragHandler.destroy(),C.eventStore.clear(),C.translate.clear(),C.slideLooper.clear(),C.resizeHandler.destroy(),C.slidesHandler.destroy(),C.slidesInView.destroy(),C.animation.destroy(),l.destroy(),u.clear()}function X(){x||(x=!0,u.clear(),G(),d.emit("destroy"),d.clear())}function W(O,j,A){!w.active||x||(C.scrollBody.useBaseFriction().useDuration(j===!0?0:w.duration),C.scrollTo.index(O,A||0))}function $(O){const j=C.index.add(1).get();W(j,O,-1)}function P(O){const j=C.index.add(-1).get();W(j,O,1)}function re(){return C.index.add(1).get()!==V()}function J(){return C.index.add(-1).get()!==V()}function U(){return C.scrollSnapList}function oe(){return C.scrollProgress.get(C.location.get())}function V(){return C.index.get()}function Z(){return C.indexPrevious.get()}function se(){return C.slidesInView.get()}function ee(){return C.slidesInView.get(!1)}function ne(){return L}function B(){return C}function M(){return n}function R(){return T}function q(){return I}const Y={canScrollNext:re,canScrollPrev:J,containerNode:R,internalEngine:B,destroy:X,off:y,on:m,emit:p,plugins:ne,previousScrollSnap:Z,reInit:S,rootNode:M,scrollNext:$,scrollPrev:P,scrollProgress:oe,scrollSnapList:U,scrollTo:W,selectedScrollSnap:V,slideNodes:q,slidesInView:se,slidesNotInView:ee};return D(r,s),setTimeout(()=>d.emit("init"),0),Y}ln.globalOptions=void 0;function vn(n={},r=[]){const s=N.useRef(n),a=N.useRef(r),[t,i]=N.useState(),[l,u]=N.useState(),d=N.useCallback(()=>{t&&t.reInit(s.current,a.current)},[t]);return N.useEffect(()=>{yn(s.current,n)||(s.current=n,d())},[n,d]),N.useEffect(()=>{Hs(a.current,r)||(a.current=r,d())},[r,d]),N.useEffect(()=>{if(Bs()&&l){ln.globalOptions=vn.globalOptions;const g=ln(l,s.current,a.current);return i(g),()=>g.destroy()}else i(void 0)},[l,i]),[u,t]}vn.globalOptions=void 0;const[St,ie]=vs({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),ht=({index:n,defaultIndex:r=0,onChange:s,align:a="center",orientation:t="horizontal",autoplay:i=!1,stopMouseEnterAutoplay:l=!0,loop:u=!0,duration:d=25,delay:g=4e3,slidesToScroll:h=1,draggable:f=!0,dragFree:m=!1,inViewThreshold:y=0,skipSnaps:p=!1,containScroll:S=!1,slideSize:x="100%",includeGapInSize:C=!0,onScrollProgress:b,watchDrag:w=f,watchResize:k=!0,watchSlides:L=!0,controlRef:T,children:I,..._})=>{const[{gap:z="fallback(4, 1rem)",...D},E]=_s(_,zs),[G,X]=Is({value:n,defaultValue:r,onChange:s}),W=t==="vertical",[$,P]=vn({axis:W?"y":"x",startIndex:r,loop:u,align:a,slidesToScroll:h,duration:d,dragFree:m,inViewThreshold:y,skipSnaps:p,containScroll:S,watchDrag:w,watchResize:k,watchSlides:L},[]);Ps(T,P);const[re,J]=N.useState([]),[U,oe]=N.useState(!1),V=N.useRef(void 0),Z=N.useCallback(()=>{if(!P)return;const B=Math.round(Math.max(0,Math.min(1,P.scrollProgress()))*100);b==null||b(B)},[P,b]),se=N.useCallback(()=>{if(!P)return;const B=P.selectedScrollSnap();X(B)},[P,X]);N.useEffect(()=>{const B=U&&l,M=!(P!=null&&P.canScrollNext());return P&&i&&!B&&!M?V.current=setInterval(()=>{P.scrollNext()},g):(V.current&&clearInterval(V.current),V.current=void 0),()=>{V.current&&clearInterval(V.current)}},[i,g,l,P,U,u,G]),Sn(()=>{if(!P)return;P.reInit();const M=P.scrollSnapList().map((R,q)=>q);J(M)},[N.Children.toArray(I).length,a,t,u,d,z,h,f,m,y,p,S,x,C]),Sn(()=>{if(!P)return;const M=P.scrollSnapList().map((R,q)=>q);J(M)},[P]),Sn(()=>{if(P)return P.on("select",se),P.on("scroll",Z),Z(),()=>{P.off("select",se),P.off("scroll",Z)}},[P,Z]);const ee=N.useCallback((B={},M=null)=>({...D,...B,ref:M,onMouseEnter:an(B.onMouseEnter,()=>{oe(!0)}),onMouseLeave:an(B.onMouseLeave,()=>{oe(!1)})}),[D]),ne=N.useCallback((B={})=>({...E,...B,ref:$}),[E,$]);return{carousel:P,children:I,indexes:re,selectedIndex:G,orientation:t,slideSize:x,gap:z,slidesToScroll:h,includeGapInSize:C,getContainerProps:ee,getSlidesProps:ne}},bt=({index:n})=>{const{selectedIndex:r,slidesToScroll:s}=ie();n=Math.floor((n??0)/(s??1));const a=n===r;return{getSlideProps:N.useCallback((i={})=>({...i,"data-index":n,"data-selected":cs(a)}),[a,n])}},ps=({operation:n,...r})=>{const{carousel:s}=ie(),a=n==="prev",t=r.disabled??r.isDisabled??(a?!(s!=null&&s.canScrollPrev()):!(s!=null&&s.canScrollNext())),i=N.useCallback(()=>{s&&(a?s.scrollPrev():s.scrollNext())},[s,a]);return{getControlProps:N.useCallback((u={},d=null)=>({...u,ref:d,disabled:t,onClick:an(u.onClick,i)}),[t,i])}},xt=()=>{const{selectedIndex:n,carousel:r,indexes:s}=ie(),a=N.useCallback((i,l)=>{r&&(i.stopPropagation(),r.scrollTo(l))},[r]),t=N.useCallback(({index:i,...l})=>{const u=i===n;return{"aria-label":`Go to ${i+1} slide`,...l,key:i,"data-index":i,"data-selected":cs(u),onClick:an(l.onClick,d=>a(d,i))}},[a,n]);return{indexes:s,getIndicatorProps:t}},Se=ge(({className:n,...r},s)=>{const{orientation:a}=ie(),{getControlProps:t}=ps({operation:"prev"});return e.jsx(dn,{operation:"prev",className:pe("ui-carousel__control--prev",n),"aria-label":"Go to previous slide",icon:e.jsx(ds,{__css:{fontSize:"1.5em",transform:a==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),...t(r,s)})});Se.displayName="CarouselControlPrev";Se.__ui__="CarouselControlPrev";const he=ge(({className:n,...r},s)=>{const{orientation:a}=ie(),{getControlProps:t}=ps({operation:"next"});return e.jsx(dn,{operation:"next",className:pe("ui-carousel__control--next",n),"aria-label":"Go to next slide",icon:e.jsx(ds,{__css:{fontSize:"1.5em",transform:a==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),...t(r,s)})});he.displayName="CarouselControlNext";he.__ui__="CarouselControlNext";const dn=ge(({className:n,operation:r,...s},a)=>{const{styles:t}=ie(),i=Es("whiteAlpha","blackAlpha"),l={position:"absolute",zIndex:"fallback(kurillin, 9)",...t.control,...t[r]};return e.jsx(Ds,{ref:a,className:pe("ui-carousel__control",n),colorScheme:i,isRounded:!0,__css:l,...s})});dn.displayName="CarouselControl";dn.__ui__="CarouselControl";const be=ge(({className:n,component:r,...s},a)=>{const{selectedIndex:t,orientation:i,styles:l}=ie(),{indexes:u,getIndicatorProps:d}=xt(),g={position:"absolute",zIndex:"fallback(kurillin, 9)",display:"flex",justifyContent:"center",...l.indicators,...i==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(me.div,{ref:a,className:pe("ui-carousel__indicators",n),__css:g,...s,children:u.map(h=>{const f=h===t;if(typeof r=="function"){const m=r({index:h,isSelected:f});if(!m)return null;const y=d({...m.props,index:h});return N.cloneElement(m,y)}else{const{key:m,...y}=d({index:h});return e.jsx(_n,{...y},m)}})})});be.displayName="CarouselIndicators";be.__ui__="CarouselIndicators";const _n=({className:n,...r})=>{const{styles:s}=ie(),a={...s.indicator};return e.jsx(me.button,{type:"button",tabIndex:-1,className:pe("ui-carousel__indicators__indicator",n),__css:a,...r})};_n.displayName="CarouselIndicator";_n.__ui__="CarouselIndicator";const o=ge(({className:n,size:r,...s},a)=>{const{slideSize:t,includeGapInSize:i,orientation:l,gap:u}=ie(),{getSlideProps:d}=bt(s);r??(r=t);const g={position:"relative",flex:`0 0 ${r}`,...i?{[l==="vertical"?"pb":"pr"]:u}:{[l==="vertical"?"mb":"mr"]:u}};return e.jsx(me.div,{className:pe("ui-carousel__slide",n),__css:g,...d({}),children:e.jsx(zn,{ref:a,...s})})});o.displayName="CarouselSlide";o.__ui__="CarouselSlide";const zn=ge(({...n},r)=>e.jsx(me.div,{ref:r,className:"ui-carousel__slide__inner",w:"100%",h:"100%",...n}));zn.displayName="CarouselSlideInner";zn.__ui__="CarouselSlideInner";const v=ge(({h:n,height:r,minH:s,minHeight:a,...t},i)=>{const l=Q(t.orientation),u=Q(t.align),d=Q(t.autoplay),g=Q(t.stopMouseEnterAutoplay),h=Q(t.loop),f=Q(t.duration),m=Q(t.delay),y=Q(t.slidesToScroll),p=Q(t.draggable),S=Q(t.dragFree),x=Q(t.inViewThreshold),C=Q(t.skipSnaps),b=Q(t.containScroll),w=Q(t.includeGapInSize),k=Q(t.gap),L=Fn("spaces",k)??k,T=Q(t.slideSize),I=Fn("sizes",T)??T,[_,z]=Ns("Carousel",{...t,orientation:l,align:u,autoplay:d,stopMouseEnterAutoplay:g,loop:h,duration:f,delay:m,slidesToScroll:y,draggable:p,dragFree:S,inViewThreshold:x,skipSnaps:C,containScroll:b,includeGapInSize:w,gap:L,slideSize:I}),{className:D,innerProps:E,withControls:G=!0,controlProps:X,controlPrevProps:W,controlNextProps:$,withIndicators:P=!0,indicatorsProps:re,...J}=Os(z),U=Q(G),oe=Q(P),{getContainerProps:V,getSlidesProps:Z,children:se,...ee}=ht({...J}),ne=ks(se),B=hn(ne,Se),M=hn(ne,he),R=hn(ne,be),q=Ts(ne,o),Y=Ls(ne,Se,he,be,o),O=q.map((j,A)=>N.cloneElement(j,{index:A}));return n??(n=r),s??(s=a),e.jsx(St,{value:{styles:_,...ee},children:e.jsxs(me.div,{className:pe("ui-carousel",D),__css:{position:"relative",h:"fit-content",..._.container},...V({},i),children:[B??(U?e.jsx(Se,{...X,...W}):null),M??(U?e.jsx(he,{...X,...$}):null),e.jsx(Pn,{...Z({...As({h:n,minH:s}),...E}),children:O}),R??(oe?e.jsx(be,{...re}):null),Y]})})});v.displayName="Carousel";v.__ui__="Carousel";const Pn=ge(({...n},r)=>{const s={w:"100%",h:"fit-content",overflow:"hidden"};return e.jsx(me.div,{ref:r,className:"ui-carousel__sliders",__css:s,children:e.jsx(En,{...n})})});Pn.displayName="CarouselSlides";Pn.__ui__="CarouselSlides";const En=({...n})=>{const{orientation:r,includeGapInSize:s,gap:a,styles:t}=ie(),i={display:"flex",flexDirection:r==="vertical"?"column":"row",...t.inner,...s?{vars:[{name:"gap",token:"spaces",value:a}],[r==="vertical"?"mb":"mr"]:"calc($gap * -1)"}:{}};return e.jsx(me.div,{className:"ui-carousel__sliders__inner",__css:i,...n})};En.displayName="CarouselSlidesInner";En.__ui__="CarouselSlidesInner";const no={title:"Components / Data Display / Carousel",component:v},Oe=()=>e.jsxs(v,{children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Me=()=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{size:"sm",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{size:"md",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{size:"lg",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{size:"xl",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]})]}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{orientation:"horizontal",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{orientation:"vertical",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]})]}),Be=()=>e.jsxs(v,{defaultIndex:1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),He=()=>e.jsxs(v,{gap:0,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ge=()=>e.jsxs(v,{duration:60,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ve=()=>e.jsxs(v,{slideSize:"50%",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",size:"100%",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{slideSize:"50%",align:"center",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{slideSize:"50%",align:"start",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{slideSize:"50%",align:"end",children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]})]}),Qe=()=>e.jsxs(v,{slideSize:"33.3%",slidesToScroll:3,loop:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"}),e.jsx(o,{as:c,bg:"primary",children:"5"}),e.jsx(o,{as:c,bg:"secondary",children:"6"}),e.jsx(o,{as:c,bg:"danger",children:"7"}),e.jsx(o,{as:c,bg:"primary",children:"8"}),e.jsx(o,{as:c,bg:"secondary",children:"9"})]}),Xe=()=>e.jsxs(v,{slideSize:"50%",align:"start",slidesToScroll:2,h:"auto",children:[e.jsxs(o,{as:Pe,variant:"outline",children:[e.jsx(Ee,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ke,{children:[e.jsx(Ae,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(De,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Te,{children:e.jsx(Ne,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:Pe,variant:"outline",children:[e.jsx(Ee,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ke,{children:[e.jsx(Ae,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(De,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Te,{children:e.jsx(Ne,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:Pe,variant:"outline",children:[e.jsx(Ee,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ke,{children:[e.jsx(Ae,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(De,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Te,{children:e.jsx(Ne,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:Pe,variant:"outline",children:[e.jsx(Ee,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ke,{children:[e.jsx(Ae,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(De,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Te,{children:e.jsx(Ne,{colorScheme:"primary",children:"Wikipedia"})})]})]}),$e=()=>e.jsxs(v,{autoplay:!0,loop:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ue=()=>e.jsxs(v,{autoplay:!0,delay:1e3,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),qe=()=>e.jsxs(v,{dragFree:!0,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ke=()=>{const[n,r]=N.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(v,{loop:!1,dragFree:!0,onScrollProgress:r,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsx(Ms,{value:n,colorScheme:"gray"})]})},We=()=>e.jsxs(v,{slideSize:"50%",includeGapInSize:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Je=()=>e.jsxs(v,{loop:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ye=()=>e.jsxs(v,{draggable:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),Ze=()=>e.jsxs(v,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),en=()=>e.jsxs(v,{withControls:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),nn=()=>e.jsxs(v,{withIndicators:!1,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),rn=()=>e.jsxs(v,{watchDrag:(n,r)=>(console.log("drag",n,r),!0),watchResize:(n,r)=>(console.log("resized",n,r),!0),watchSlides:(n,r)=>(console.log("slides updated",n,r),!0),children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),sn=()=>{const[n,r]=N.useState(0);return e.jsxs(v,{draggable:!1,index:n,onChange:r,children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]})},tn=()=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{controlProps:{icon:e.jsx(us,{})},children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{controlPrevProps:{icon:e.jsx(Bn,{})},children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{controlNextProps:{icon:e.jsx(Hn,{})},children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{children:[e.jsx(Se,{icon:e.jsx(Bn,{})}),e.jsx(he,{icon:e.jsx(Hn,{})}),e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]})]}),on=()=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{indicatorsProps:{bottom:"8",component:({isSelected:n})=>e.jsx(us,{fontSize:"2xl",color:n?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer"})},children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{children:[e.jsx(o,{as:c,bg:"primary",children:"1"}),e.jsx(o,{as:c,bg:"secondary",children:"2"}),e.jsx(o,{as:c,bg:"warning",children:"3"}),e.jsx(o,{as:c,bg:"danger",children:"4"}),e.jsx(be,{sx:{"& > *":{w:"4",_selected:{w:"12"},transitionProperty:"width",transitionDuration:"slower"}}})]})]});var Xn,$n,Un;Oe.parameters={...Oe.parameters,docs:{...(Xn=Oe.parameters)==null?void 0:Xn.docs,source:{originalSource:`() => {
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
}`,...(Un=($n=Oe.parameters)==null?void 0:$n.docs)==null?void 0:Un.source}}};var qn,Kn,Wn;Me.parameters={...Me.parameters,docs:{...(qn=Me.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
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
}`,...(Wn=(Kn=Me.parameters)==null?void 0:Kn.docs)==null?void 0:Wn.source}}};var Jn,Yn,Zn;Fe.parameters={...Fe.parameters,docs:{...(Jn=Fe.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(Zn=(Yn=Fe.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var er,nr,rr;Be.parameters={...Be.parameters,docs:{...(er=Be.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
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
}`,...(rr=(nr=Be.parameters)==null?void 0:nr.docs)==null?void 0:rr.source}}};var sr,tr,or;He.parameters={...He.parameters,docs:{...(sr=He.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
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
}`,...(or=(tr=He.parameters)==null?void 0:tr.docs)==null?void 0:or.source}}};var ar,ir,lr;Ge.parameters={...Ge.parameters,docs:{...(ar=Ge.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
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
}`,...(lr=(ir=Ge.parameters)==null?void 0:ir.docs)==null?void 0:lr.source}}};var cr,dr,ur;Ve.parameters={...Ve.parameters,docs:{...(cr=Ve.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
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
}`,...(ur=(dr=Ve.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var gr,fr,Cr;Re.parameters={...Re.parameters,docs:{...(gr=Re.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
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
}`,...(Cr=(fr=Re.parameters)==null?void 0:fr.docs)==null?void 0:Cr.source}}};var pr,mr,Sr;Qe.parameters={...Qe.parameters,docs:{...(pr=Qe.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
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
}`,...(Sr=(mr=Qe.parameters)==null?void 0:mr.docs)==null?void 0:Sr.source}}};var hr,br,xr;Xe.parameters={...Xe.parameters,docs:{...(hr=Xe.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
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
}`,...(xr=(br=Xe.parameters)==null?void 0:br.docs)==null?void 0:xr.source}}};var yr,jr,wr;$e.parameters={...$e.parameters,docs:{...(yr=$e.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
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
}`,...(wr=(jr=$e.parameters)==null?void 0:jr.docs)==null?void 0:wr.source}}};var Ir,vr,_r;Ue.parameters={...Ue.parameters,docs:{...(Ir=Ue.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
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
}`,...(_r=(vr=Ue.parameters)==null?void 0:vr.docs)==null?void 0:_r.source}}};var zr,Pr,Er;qe.parameters={...qe.parameters,docs:{...(zr=qe.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
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
}`,...(Er=(Pr=qe.parameters)==null?void 0:Pr.docs)==null?void 0:Er.source}}};var kr,Tr,Lr;Ke.parameters={...Ke.parameters,docs:{...(kr=Ke.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
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
}`,...(Lr=(Tr=Ke.parameters)==null?void 0:Tr.docs)==null?void 0:Lr.source}}};var Ar,Dr,Nr;We.parameters={...We.parameters,docs:{...(Ar=We.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
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
}`,...(Nr=(Dr=We.parameters)==null?void 0:Dr.docs)==null?void 0:Nr.source}}};var Or,Mr,Fr;Je.parameters={...Je.parameters,docs:{...(Or=Je.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
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
}`,...(Fr=(Mr=Je.parameters)==null?void 0:Mr.docs)==null?void 0:Fr.source}}};var Br,Hr,Gr;Ye.parameters={...Ye.parameters,docs:{...(Br=Ye.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
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
}`,...(Gr=(Hr=Ye.parameters)==null?void 0:Hr.docs)==null?void 0:Gr.source}}};var Vr,Rr,Qr;Ze.parameters={...Ze.parameters,docs:{...(Vr=Ze.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
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
}`,...(Qr=(Rr=Ze.parameters)==null?void 0:Rr.docs)==null?void 0:Qr.source}}};var Xr,$r,Ur;en.parameters={...en.parameters,docs:{...(Xr=en.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...(Ur=($r=en.parameters)==null?void 0:$r.docs)==null?void 0:Ur.source}}};var qr,Kr,Wr;nn.parameters={...nn.parameters,docs:{...(qr=nn.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
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
}`,...(Wr=(Kr=nn.parameters)==null?void 0:Kr.docs)==null?void 0:Wr.source}}};var Jr,Yr,Zr;rn.parameters={...rn.parameters,docs:{...(Jr=rn.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
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
}`,...(Zr=(Yr=rn.parameters)==null?void 0:Yr.docs)==null?void 0:Zr.source}}};var es,ns,rs;sn.parameters={...sn.parameters,docs:{...(es=sn.parameters)==null?void 0:es.docs,source:{originalSource:`() => {
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
}`,...(rs=(ns=sn.parameters)==null?void 0:ns.docs)==null?void 0:rs.source}}};var ss,ts,os;tn.parameters={...tn.parameters,docs:{...(ss=tn.parameters)==null?void 0:ss.docs,source:{originalSource:`() => {
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
}`,...(os=(ts=tn.parameters)==null?void 0:ts.docs)==null?void 0:os.source}}};var as,is,ls;on.parameters={...on.parameters,docs:{...(as=on.parameters)==null?void 0:as.docs,source:{originalSource:`() => {
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
}`,...(ls=(is=on.parameters)==null?void 0:is.docs)==null?void 0:ls.source}}};const ro=["basic","withSize","withOrientation","withDefaultIndex","withGap","withDuration","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","useMethods","customControl","customControlButton","customIndicators"];export{ro as __namedExportsOrder,Oe as basic,sn as customControl,tn as customControlButton,on as customIndicators,no as default,en as disabledControlButton,Ye as disabledDraggable,We as disabledIncludeGapInSize,nn as disabledIndicators,Je as disabledLoop,Ze as disabledStopMouseEnterAutoplay,rn as useMethods,Re as withAlign,$e as withAutoplay,Xe as withCard,Be as withDefaultIndex,Ue as withDelay,qe as withDragFree,Ge as withDuration,He as withGap,Fe as withOrientation,Ke as withScrollProgress,Me as withSize,Ve as withSlideSize,Qe as withSlidesToScroll};
