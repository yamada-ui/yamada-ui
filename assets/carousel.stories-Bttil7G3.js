import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as A}from"./index-BwPxMuoB.js";import{u as Q}from"./index-Boyzt1qu.js";import{u as ws}from"./index-DCT-NtcY.js";import{B as Is,M as vs,ae as _s,o as Ee,n as Ps,h as we,a2 as zs,d as is,a as Es,c as Ce,b as pe,g as Ts,C as Sn,ac as ks,a7 as As,H as Ds}from"./factory-DbNU74ts.js";import{m as Ls}from"./use-var-DlbRU9j0.js";import{c as ls}from"./icon-Dk5VwDTI.js";import{I as Ns}from"./icon-button-DA6sAAAm.js";import{f as ce}from"./forward-ref-Ukjd1cIW.js";import{a as Os}from"./use-component-style-CpB_lyT3.js";import{o as Ms}from"./theme-provider-ChqdwXGn.js";import{P as Bs}from"./progress-D4Lwcdok.js";import{A as Mn}from"./arrow-left-B0KS7rGX.js";import{A as Bn}from"./arrow-right-By4V7bBN.js";import{C as c}from"./center-B3pLLn64.js";import{C as Te,a as ke,b as Ae,c as De}from"./card-BGLzdo4X.js";import{I as Le}from"./image-AsrGZXBk.js";import{H as Ne}from"./heading-DsYXOt72.js";import{T as Oe}from"./text-DKjBQKmK.js";import{B as Me}from"./button-CqSjNDtY.js";import{G as cs}from"./ghost-CVmvGRFY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CssvN-gw.js";import"./index-MIa0NvBw.js";import"./index-qZwaV1-B.js";import"./index-ZCRYeFYt.js";import"./number-CcP_arM8.js";import"./createLucideIcon-D0BTS2fX.js";import"./use-image-D0o6TYRh.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";function Fs(n){return Object.prototype.toString.call(n)==="[object Object]"}function Fn(n){return Fs(n)||Array.isArray(n)}function Hs(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function xn(n,r){const t=Object.keys(n),i=Object.keys(r);if(t.length!==i.length)return!1;const s=JSON.stringify(Object.keys(n.breakpoints||{})),l=JSON.stringify(Object.keys(r.breakpoints||{}));return s!==l?!1:t.every(o=>{const d=n[o],u=r[o];return typeof d=="function"?`${d}`==`${u}`:!Fn(d)||!Fn(u)?d===u:xn(d,u)})}function Hn(n){return n.concat().sort((r,t)=>r.name>t.name?1:-1).map(r=>r.options)}function Gs(n,r){if(n.length!==r.length)return!1;const t=Hn(n),i=Hn(r);return t.every((s,l)=>{const o=i[l];return xn(s,o)})}function yn(n){return typeof n=="number"}function hn(n){return typeof n=="string"}function un(n){return typeof n=="boolean"}function Gn(n){return Object.prototype.toString.call(n)==="[object Object]"}function B(n){return Math.abs(n)}function jn(n){return Math.sign(n)}function je(n,r){return B(n-r)}function Rs(n,r){if(n===0||r===0||B(n)<=B(r))return 0;const t=je(B(n),B(r));return B(t/n)}function Vs(n){return Math.round(n*100)/100}function Ie(n){return ve(n).map(Number)}function te(n){return n[Pe(n)]}function Pe(n){return Math.max(0,n.length-1)}function wn(n,r){return r===Pe(n)}function Rn(n,r=0){return Array.from(Array(n),(t,i)=>r+i)}function ve(n){return Object.keys(n)}function us(n,r){return[n,r].reduce((t,i)=>(ve(i).forEach(s=>{const l=t[s],o=i[s],d=Gn(l)&&Gn(o);t[s]=d?us(l,o):o}),t),{})}function bn(n,r){return typeof r.MouseEvent<"u"&&n instanceof r.MouseEvent}function $s(n,r){const t={start:i,center:s,end:l};function i(){return 0}function s(u){return l(u)/2}function l(u){return r-u}function o(u,f){return hn(n)?t[n](u):n(r,u,f)}return{measure:o}}function _e(){let n=[];function r(s,l,o,d={passive:!0}){let u;if("addEventListener"in s)s.addEventListener(l,o,d),u=()=>s.removeEventListener(l,o,d);else{const f=s;f.addListener(o),u=()=>f.removeListener(o)}return n.push(u),i}function t(){n=n.filter(s=>s())}const i={add:r,clear:t};return i}function Qs(n,r,t,i){const s=_e(),l=1e3/60;let o=null,d=0,u=0;function f(){s.add(n,"visibilitychange",()=>{n.hidden&&C()})}function x(){h(),s.clear()}function m(b){if(!u)return;o||(o=b,t(),t());const p=b-o;for(o=b,d+=p;d>=l;)t(),d-=l;const y=d/l;i(y),u&&(u=r.requestAnimationFrame(m))}function g(){u||(u=r.requestAnimationFrame(m))}function h(){r.cancelAnimationFrame(u),o=null,d=0,u=0}function C(){o=null,d=0}return{init:f,destroy:x,start:g,stop:h,update:t,render:i}}function Us(n,r){const t=r==="rtl",i=n==="y",s=i?"y":"x",l=i?"x":"y",o=!i&&t?-1:1,d=x(),u=m();function f(C){const{height:S,width:b}=C;return i?S:b}function x(){return i?"top":t?"right":"left"}function m(){return i?"bottom":t?"left":"right"}function g(C){return C*o}return{scroll:s,cross:l,startEdge:d,endEdge:u,measureSize:f,direction:g}}function fe(n=0,r=0){const t=B(n-r);function i(f){return f<n}function s(f){return f>r}function l(f){return i(f)||s(f)}function o(f){return l(f)?i(f)?n:r:f}function d(f){return t?f-t*Math.ceil((f-r)/t):f}return{length:t,max:r,min:n,constrain:o,reachedAny:l,reachedMax:s,reachedMin:i,removeOffset:d}}function ds(n,r,t){const{constrain:i}=fe(0,n),s=n+1;let l=o(r);function o(g){return t?B((s+g)%s):i(g)}function d(){return l}function u(g){return l=o(g),m}function f(g){return x().set(d()+g)}function x(){return ds(n,d(),t)}const m={get:d,set:u,add:f,clone:x};return m}function Xs(n,r,t,i,s,l,o,d,u,f,x,m,g,h,C,S,b,p,y){const{cross:w,direction:z}=n,D=["INPUT","SELECT","TEXTAREA"],E={passive:!1},I=_e(),v=_e(),T=fe(50,225).constrain(h.measure(20)),N={mouse:300,touch:400},k={mouse:500,touch:600},G=C?43:25;let U=!1,X=0,$=0,se=!1,ee=!1,W=!1,J=!1;function Y(j){if(!y)return;function O(K){(un(y)||y(j,K))&&oe(K)}const H=r;I.add(H,"dragstart",K=>K.preventDefault(),E).add(H,"touchmove",()=>{},E).add(H,"touchend",()=>{}).add(H,"touchstart",O).add(H,"mousedown",O).add(H,"touchcancel",R).add(H,"contextmenu",R).add(H,"click",M,!0)}function Z(){I.clear(),v.clear()}function q(){const j=J?t:r;v.add(j,"touchmove",V,E).add(j,"touchend",R).add(j,"mousemove",V,E).add(j,"mouseup",R)}function _(j){const O=j.nodeName||"";return D.includes(O)}function ne(){return(C?k:N)[J?"mouse":"touch"]}function re(j,O){const H=m.add(jn(j)*-1),K=x.byDistance(j,!C).distance;return C||B(j)<T?K:b&&O?K*.5:x.byIndex(H.get(),0).distance}function oe(j){const O=bn(j,i);J=O,W=C&&O&&!j.buttons&&U,U=je(s.get(),o.get())>=2,!(O&&j.button!==0)&&(_(j.target)||(se=!0,l.pointerDown(j),f.useFriction(0).useDuration(0),s.set(o),q(),X=l.readPoint(j),$=l.readPoint(j,w),g.emit("pointerDown")))}function V(j){if(!bn(j,i)&&j.touches.length>=2)return R(j);const H=l.readPoint(j),K=l.readPoint(j,w),ae=je(H,X),le=je(K,$);if(!ee&&!J&&(!j.cancelable||(ee=ae>le,!ee)))return R(j);const de=l.pointerMove(j);ae>S&&(W=!0),f.useFriction(.3).useDuration(.75),d.start(),s.add(z(de)),j.preventDefault()}function R(j){const H=x.byDistance(0,!1).index!==m.get(),K=l.pointerUp(j)*ne(),ae=re(z(K),H),le=Rs(K,ae),de=G-10*le,ue=p+le/50;ee=!1,se=!1,v.clear(),f.useDuration(de).useFriction(ue),u.distance(ae,!C),J=!1,g.emit("pointerUp")}function M(j){W&&(j.stopPropagation(),j.preventDefault(),W=!1)}function F(){return se}return{init:Y,destroy:Z,pointerDown:F}}function qs(n,r){let i,s;function l(m){return m.timeStamp}function o(m,g){const C=`client${(g||n.scroll)==="x"?"X":"Y"}`;return(bn(m,r)?m:m.touches[0])[C]}function d(m){return i=m,s=m,o(m)}function u(m){const g=o(m)-o(s),h=l(m)-l(i)>170;return s=m,h&&(i=m),g}function f(m){if(!i||!s)return 0;const g=o(s)-o(i),h=l(m)-l(i),C=l(m)-l(s)>170,S=g/h;return h&&!C&&B(S)>.1?S:0}return{pointerDown:d,pointerMove:u,pointerUp:f,readPoint:o}}function Ks(){function n(t){const{offsetTop:i,offsetLeft:s,offsetWidth:l,offsetHeight:o}=t;return{top:i,right:s+l,bottom:i+o,left:s,width:l,height:o}}return{measure:n}}function Ws(n){function r(i){return n*(i/100)}return{measure:r}}function Js(n,r,t,i,s,l,o){const d=[n].concat(i);let u,f,x=[],m=!1;function g(b){return s.measureSize(o.measure(b))}function h(b){if(!l)return;f=g(n),x=i.map(g);function p(y){for(const w of y){if(m)return;const z=w.target===n,D=i.indexOf(w.target),E=z?f:x[D],I=g(z?n:i[D]);if(B(I-E)>=.5){b.reInit(),r.emit("resize");break}}}u=new ResizeObserver(y=>{(un(l)||l(b,y))&&p(y)}),t.requestAnimationFrame(()=>{d.forEach(y=>u.observe(y))})}function C(){m=!0,u&&u.disconnect()}return{init:h,destroy:C}}function Ys(n,r,t,i,s,l){let o=0,d=0,u=s,f=l,x=n.get(),m=0;function g(){const E=i.get()-n.get(),I=!u;let v=0;return I?(o=0,t.set(i),n.set(i),v=E):(t.set(n),o+=E/u,o*=f,x+=o,n.add(o),v=x-m),d=jn(v),m=x,D}function h(){const E=i.get()-r.get();return B(E)<.001}function C(){return u}function S(){return d}function b(){return o}function p(){return w(s)}function y(){return z(l)}function w(E){return u=E,D}function z(E){return f=E,D}const D={direction:S,duration:C,velocity:b,seek:g,settled:h,useBaseFriction:y,useBaseDuration:p,useFriction:z,useDuration:w};return D}function Zs(n,r,t,i,s){const l=s.measure(10),o=s.measure(50),d=fe(.1,.99);let u=!1;function f(){return!(u||!n.reachedAny(t.get())||!n.reachedAny(r.get()))}function x(h){if(!f())return;const C=n.reachedMin(r.get())?"min":"max",S=B(n[C]-r.get()),b=t.get()-r.get(),p=d.constrain(S/o);t.subtract(b*p),!h&&B(b)<l&&(t.set(n.constrain(t.get())),i.useDuration(25).useBaseFriction())}function m(h){u=!h}return{shouldConstrain:f,constrain:x,toggleActive:m}}function et(n,r,t,i,s){const l=fe(-r+n,0),o=m(),d=x(),u=g();function f(C,S){return je(C,S)<=1}function x(){const C=o[0],S=te(o),b=o.lastIndexOf(C),p=o.indexOf(S)+1;return fe(b,p)}function m(){return t.map((C,S)=>{const{min:b,max:p}=l,y=l.constrain(C),w=!S,z=wn(t,S);return w?p:z||f(b,y)?b:f(p,y)?p:y}).map(C=>parseFloat(C.toFixed(3)))}function g(){if(r<=n+s)return[l.max];if(i==="keepSnaps")return o;const{min:C,max:S}=d;return o.slice(C,S)}return{snapsContained:u,scrollContainLimit:d}}function nt(n,r,t){const i=r[0],s=t?i-n:te(r);return{limit:fe(s,i)}}function rt(n,r,t,i){const l=r.min+.1,o=r.max+.1,{reachedMin:d,reachedMax:u}=fe(l,o);function f(g){return g===1?u(t.get()):g===-1?d(t.get()):!1}function x(g){if(!f(g))return;const h=n*(g*-1);i.forEach(C=>C.add(h))}return{loop:x}}function st(n){const{max:r,length:t}=n;function i(l){const o=l-r;return t?o/-t:0}return{get:i}}function tt(n,r,t,i,s){const{startEdge:l,endEdge:o}=n,{groupSlides:d}=s,u=m().map(r.measure),f=g(),x=h();function m(){return d(i).map(S=>te(S)[o]-S[0][l]).map(B)}function g(){return i.map(S=>t[l]-S[l]).map(S=>-B(S))}function h(){return d(f).map(S=>S[0]).map((S,b)=>S+u[b])}return{snaps:f,snapsAligned:x}}function ot(n,r,t,i,s,l){const{groupSlides:o}=s,{min:d,max:u}=i,f=x();function x(){const g=o(l),h=!n||r==="keepSnaps";return t.length===1?[l]:h?g:g.slice(d,u).map((C,S,b)=>{const p=!S,y=wn(b,S);if(p){const w=te(b[0])+1;return Rn(w)}if(y){const w=Pe(l)-te(b)[0]+1;return Rn(w,te(b)[0])}return C})}return{slideRegistry:f}}function at(n,r,t,i,s){const{reachedAny:l,removeOffset:o,constrain:d}=i;function u(C){return C.concat().sort((S,b)=>B(S)-B(b))[0]}function f(C){const S=n?o(C):d(C),b=r.map((y,w)=>({diff:x(y-S,0),index:w})).sort((y,w)=>B(y.diff)-B(w.diff)),{index:p}=b[0];return{index:p,distance:S}}function x(C,S){const b=[C,C+t,C-t];if(!n)return C;if(!S)return u(b);const p=b.filter(y=>jn(y)===S);return p.length?u(p):te(b)-t}function m(C,S){const b=r[C]-s.get(),p=x(b,S);return{index:C,distance:p}}function g(C,S){const b=s.get()+C,{index:p,distance:y}=f(b),w=!n&&l(b);if(!S||w)return{index:p,distance:C};const z=r[p]-y,D=C+x(z,0);return{index:p,distance:D}}return{byDistance:g,byIndex:m,shortcut:x}}function it(n,r,t,i,s,l,o){function d(m){const g=m.distance,h=m.index!==r.get();l.add(g),g&&(i.duration()?n.start():(n.update(),n.render(1),n.update())),h&&(t.set(r.get()),r.set(m.index),o.emit("select"))}function u(m,g){const h=s.byDistance(m,g);d(h)}function f(m,g){const h=r.clone().set(m),C=s.byIndex(h.get(),g);d(C)}return{distance:u,index:f}}function lt(n,r,t,i,s,l,o,d){const u={passive:!0,capture:!0};let f=0;function x(h){if(!d)return;function C(S){if(new Date().getTime()-f>10)return;o.emit("slideFocusStart"),n.scrollLeft=0;const y=t.findIndex(w=>w.includes(S));yn(y)&&(s.useDuration(0),i.index(y,0),o.emit("slideFocus"))}l.add(document,"keydown",m,!1),r.forEach((S,b)=>{l.add(S,"focus",p=>{(un(d)||d(h,p))&&C(b)},u)})}function m(h){h.code==="Tab"&&(f=new Date().getTime())}return{init:x}}function ye(n){let r=n;function t(){return r}function i(u){r=o(u)}function s(u){r+=o(u)}function l(u){r-=o(u)}function o(u){return yn(u)?u:u.get()}return{get:t,set:i,add:s,subtract:l}}function gs(n,r){const t=n.scroll==="x"?o:d,i=r.style;let s=null,l=!1;function o(g){return`translate3d(${g}px,0px,0px)`}function d(g){return`translate3d(0px,${g}px,0px)`}function u(g){if(l)return;const h=Vs(n.direction(g));h!==s&&(i.transform=t(h),s=h)}function f(g){l=!g}function x(){l||(i.transform="",r.getAttribute("style")||r.removeAttribute("style"))}return{clear:x,to:u,toggleActive:f}}function ct(n,r,t,i,s,l,o,d,u){const x=Ie(s),m=Ie(s).reverse(),g=p().concat(y());function h(I,v){return I.reduce((T,N)=>T-s[N],v)}function C(I,v){return I.reduce((T,N)=>h(T,v)>0?T.concat([N]):T,[])}function S(I){return l.map((v,T)=>({start:v-i[T]+.5+I,end:v+r-.5+I}))}function b(I,v,T){const N=S(v);return I.map(k=>{const G=T?0:-t,U=T?t:0,X=T?"end":"start",$=N[k][X];return{index:k,loopPoint:$,slideLocation:ye(-1),translate:gs(n,u[k]),target:()=>d.get()>$?G:U}})}function p(){const I=o[0],v=C(m,I);return b(v,t,!1)}function y(){const I=r-o[0]-1,v=C(x,I);return b(v,-t,!0)}function w(){return g.every(({index:I})=>{const v=x.filter(T=>T!==I);return h(v,r)<=.1})}function z(){g.forEach(I=>{const{target:v,translate:T,slideLocation:N}=I,k=v();k!==N.get()&&(T.to(k),N.set(k))})}function D(){g.forEach(I=>I.translate.clear())}return{canLoop:w,clear:D,loop:z,loopPoints:g}}function ut(n,r,t){let i,s=!1;function l(u){if(!t)return;function f(x){for(const m of x)if(m.type==="childList"){u.reInit(),r.emit("slidesChanged");break}}i=new MutationObserver(x=>{s||(un(t)||t(u,x))&&f(x)}),i.observe(n,{childList:!0})}function o(){i&&i.disconnect(),s=!0}return{init:l,destroy:o}}function dt(n,r,t,i){const s={};let l=null,o=null,d,u=!1;function f(){d=new IntersectionObserver(C=>{u||(C.forEach(S=>{const b=r.indexOf(S.target);s[b]=S}),l=null,o=null,t.emit("slidesInView"))},{root:n.parentElement,threshold:i}),r.forEach(C=>d.observe(C))}function x(){d&&d.disconnect(),u=!0}function m(C){return ve(s).reduce((S,b)=>{const p=parseInt(b),{isIntersecting:y}=s[p];return(C&&y||!C&&!y)&&S.push(p),S},[])}function g(C=!0){if(C&&l)return l;if(!C&&o)return o;const S=m(C);return C&&(l=S),C||(o=S),S}return{init:f,destroy:x,get:g}}function gt(n,r,t,i,s,l){const{measureSize:o,startEdge:d,endEdge:u}=n,f=t[0]&&s,x=C(),m=S(),g=t.map(o),h=b();function C(){if(!f)return 0;const y=t[0];return B(r[d]-y[d])}function S(){if(!f)return 0;const y=l.getComputedStyle(te(i));return parseFloat(y.getPropertyValue(`margin-${u}`))}function b(){return t.map((y,w,z)=>{const D=!w,E=wn(z,w);return D?g[w]+x:E?g[w]+m:z[w+1][d]-y[d]}).map(B)}return{slideSizes:g,slideSizesWithGaps:h,startGap:x,endGap:m}}function ft(n,r,t,i,s,l,o,d,u){const{startEdge:f,endEdge:x,direction:m}=n,g=yn(t);function h(p,y){return Ie(p).filter(w=>w%y===0).map(w=>p.slice(w,w+y))}function C(p){return p.length?Ie(p).reduce((y,w,z)=>{const D=te(y)||0,E=D===0,I=w===Pe(p),v=s[f]-l[D][f],T=s[f]-l[w][x],N=!i&&E?m(o):0,k=!i&&I?m(d):0,G=B(T-k-(v+N));return z&&G>r+u&&y.push(w),I&&y.push(p.length),y},[]).map((y,w,z)=>{const D=Math.max(z[w-1]||0);return p.slice(D,y)}):[]}function S(p){return g?h(p,t):C(p)}return{groupSlides:S}}function Ct(n,r,t,i,s,l,o){const{align:d,axis:u,direction:f,startIndex:x,loop:m,duration:g,dragFree:h,dragThreshold:C,inViewThreshold:S,slidesToScroll:b,skipSnaps:p,containScroll:y,watchResize:w,watchSlides:z,watchDrag:D,watchFocus:E}=l,I=2,v=Ks(),T=v.measure(r),N=t.map(v.measure),k=Us(u,f),G=k.measureSize(T),U=Ws(G),X=$s(d,G),$=!m&&!!y,se=m||!!y,{slideSizes:ee,slideSizesWithGaps:W,startGap:J,endGap:Y}=gt(k,T,N,t,se,s),Z=ft(k,G,b,m,T,N,J,Y,I),{snaps:q,snapsAligned:_}=tt(k,X,T,N,Z),ne=-te(q)+te(W),{snapsContained:re,scrollContainLimit:oe}=et(G,ne,_,y,I),V=$?re:_,{limit:R}=nt(ne,V,m),M=ds(Pe(V),x,m),F=M.clone(),L=Ie(t),j=({dragHandler:me,scrollBody:pn,scrollBounds:mn,options:{loop:ze}})=>{ze||mn.constrain(me.pointerDown()),pn.seek()},O=({scrollBody:me,translate:pn,location:mn,offsetLocation:ze,previousLocation:ps,scrollLooper:ms,slideLooper:Ss,dragHandler:hs,animation:bs,eventHandler:An,scrollBounds:xs,options:{loop:Dn}},Ln)=>{const Nn=me.settled(),ys=!xs.shouldConstrain(),On=Dn?Nn:Nn&&ys;On&&!hs.pointerDown()&&(bs.stop(),An.emit("settle")),On||An.emit("scroll");const js=mn.get()*Ln+ps.get()*(1-Ln);ze.set(js),Dn&&(ms.loop(me.direction()),Ss.loop()),pn.to(ze.get())},H=Qs(i,s,()=>j(Cn),me=>O(Cn,me)),K=.68,ae=V[M.get()],le=ye(ae),de=ye(ae),ue=ye(ae),ge=ye(ae),xe=Ys(le,ue,de,ge,g,K),gn=at(m,V,ne,R,ge),fn=it(H,M,F,xe,gn,ge,o),En=st(R),Tn=_e(),fs=dt(r,t,o,S),{slideRegistry:kn}=ot($,y,V,oe,Z,L),Cs=lt(n,t,kn,fn,xe,Tn,o,E),Cn={ownerDocument:i,ownerWindow:s,eventHandler:o,containerRect:T,slideRects:N,animation:H,axis:k,dragHandler:Xs(k,n,i,s,ge,qs(k,s),le,H,fn,xe,gn,M,o,U,h,C,p,K,D),eventStore:Tn,percentOfView:U,index:M,indexPrevious:F,limit:R,location:le,offsetLocation:ue,previousLocation:de,options:l,resizeHandler:Js(r,o,s,t,k,w,v),scrollBody:xe,scrollBounds:Zs(R,ue,ge,xe,U),scrollLooper:rt(ne,R,ue,[le,ue,de,ge]),scrollProgress:En,scrollSnapList:V.map(En.get),scrollSnaps:V,scrollTarget:gn,scrollTo:fn,slideLooper:ct(k,G,ne,ee,W,q,V,ue,t),slideFocus:Cs,slidesHandler:ut(r,o,z),slidesInView:fs,slideIndexes:L,slideRegistry:kn,slidesToScroll:Z,target:ge,translate:gs(k,r)};return Cn}function pt(){let n={},r;function t(f){r=f}function i(f){return n[f]||[]}function s(f){return i(f).forEach(x=>x(r,f)),u}function l(f,x){return n[f]=i(f).concat([x]),u}function o(f,x){return n[f]=i(f).filter(m=>m!==x),u}function d(){n={}}const u={init:t,emit:s,off:o,on:l,clear:d};return u}const mt={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function St(n){function r(l,o){return us(l,o||{})}function t(l){const o=l.breakpoints||{},d=ve(o).filter(u=>n.matchMedia(u).matches).map(u=>o[u]).reduce((u,f)=>r(u,f),{});return r(l,d)}function i(l){return l.map(o=>ve(o.breakpoints||{})).reduce((o,d)=>o.concat(d),[]).map(n.matchMedia)}return{mergeOptions:r,optionsAtMedia:t,optionsMediaQueries:i}}function ht(n){let r=[];function t(l,o){return r=o.filter(({options:d})=>n.optionsAtMedia(d).active!==!1),r.forEach(d=>d.init(l,n)),o.reduce((d,u)=>Object.assign(d,{[u.name]:u}),{})}function i(){r=r.filter(l=>l.destroy())}return{init:t,destroy:i}}function cn(n,r,t){const i=n.ownerDocument,s=i.defaultView,l=St(s),o=ht(l),d=_e(),u=pt(),{mergeOptions:f,optionsAtMedia:x,optionsMediaQueries:m}=l,{on:g,off:h,emit:C}=u,S=k;let b=!1,p,y=f(mt,cn.globalOptions),w=f(y),z=[],D,E,I;function v(){const{container:L,slides:j}=w;E=(hn(L)?n.querySelector(L):L)||n.children[0];const H=hn(j)?E.querySelectorAll(j):j;I=[].slice.call(H||E.children)}function T(L){const j=Ct(n,E,I,i,s,L,u);if(L.loop&&!j.slideLooper.canLoop()){const O=Object.assign({},L,{loop:!1});return T(O)}return j}function N(L,j){b||(y=f(y,L),w=x(y),z=j||z,v(),p=T(w),m([y,...z.map(({options:O})=>O)]).forEach(O=>d.add(O,"change",k)),w.active&&(p.translate.to(p.location.get()),p.animation.init(),p.slidesInView.init(),p.slideFocus.init(F),p.eventHandler.init(F),p.resizeHandler.init(F),p.slidesHandler.init(F),p.options.loop&&p.slideLooper.loop(),E.offsetParent&&I.length&&p.dragHandler.init(F),D=o.init(F,z)))}function k(L,j){const O=Z();G(),N(f({startIndex:O},L),j),u.emit("reInit")}function G(){p.dragHandler.destroy(),p.eventStore.clear(),p.translate.clear(),p.slideLooper.clear(),p.resizeHandler.destroy(),p.slidesHandler.destroy(),p.slidesInView.destroy(),p.animation.destroy(),o.destroy(),d.clear()}function U(){b||(b=!0,d.clear(),G(),u.emit("destroy"),u.clear())}function X(L,j,O){!w.active||b||(p.scrollBody.useBaseFriction().useDuration(j===!0?0:w.duration),p.scrollTo.index(L,O||0))}function $(L){const j=p.index.add(1).get();X(j,L,-1)}function se(L){const j=p.index.add(-1).get();X(j,L,1)}function ee(){return p.index.add(1).get()!==Z()}function W(){return p.index.add(-1).get()!==Z()}function J(){return p.scrollSnapList}function Y(){return p.scrollProgress.get(p.location.get())}function Z(){return p.index.get()}function q(){return p.indexPrevious.get()}function _(){return p.slidesInView.get()}function ne(){return p.slidesInView.get(!1)}function re(){return D}function oe(){return p}function V(){return n}function R(){return E}function M(){return I}const F={canScrollNext:ee,canScrollPrev:W,containerNode:R,internalEngine:oe,destroy:U,off:h,on:g,emit:C,plugins:re,previousScrollSnap:q,reInit:S,rootNode:V,scrollNext:$,scrollPrev:se,scrollProgress:Y,scrollSnapList:J,scrollTo:X,selectedScrollSnap:Z,slideNodes:M,slidesInView:_,slidesNotInView:ne};return N(r,t),setTimeout(()=>u.emit("init"),0),F}cn.globalOptions=void 0;function In(n={},r=[]){const t=A.useRef(n),i=A.useRef(r),[s,l]=A.useState(),[o,d]=A.useState(),u=A.useCallback(()=>{s&&s.reInit(t.current,i.current)},[s]);return A.useEffect(()=>{xn(t.current,n)||(t.current=n,u())},[n,u]),A.useEffect(()=>{Gs(i.current,r)||(i.current=r,u())},[r,u]),A.useEffect(()=>{if(Hs()&&o){cn.globalOptions=In.globalOptions;const f=cn(o,t.current,i.current);return l(f),()=>f.destroy()}else l(void 0)},[o,l]),[d,s]}In.globalOptions=void 0;const[bt,ie]=Is({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),xt=({id:n,align:r="center",autoplay:t=!1,children:i,containScroll:s=!1,controlRef:l,defaultIndex:o=0,delay:d=4e3,dragFree:u=!1,draggable:f=!0,duration:x=25,includeGapInSize:m=!0,index:g,inViewThreshold:h=0,loop:C=!0,orientation:S="horizontal",skipSnaps:b=!1,slideSize:p="100%",slidesToScroll:y=1,stopMouseEnterAutoplay:w=!0,watchDrag:z=f,watchResize:D=!0,watchSlides:E=!0,onChange:I,onScrollProgress:v,...T})=>{const[{gap:N="fallback(4, 1rem)",...k},{vars:G,...U}]=vs(T,_s),[X,$]=ws({defaultValue:o,value:g,onChange:I}),[se,ee]=A.useState([]),[W,J]=A.useState(!1),Y=A.useRef(void 0),Z=S==="vertical",[q,_]=In({align:r,axis:Z?"y":"x",containScroll:s,dragFree:u,duration:x,inViewThreshold:h,loop:C,skipSnaps:b,slidesToScroll:y,startIndex:o,watchDrag:z,watchResize:D,watchSlides:E},[]),ne=A.useId();n??(n=ne);const re=A.useCallback(()=>{if(!_)return;const M=Math.round(Math.max(0,Math.min(1,_.scrollProgress()))*100);v==null||v(M)},[_,v]),oe=A.useCallback(()=>{if(!_)return;const M=_.selectedScrollSnap();$(M)},[_,$]);A.useEffect(()=>{const M=W&&w,F=!(_!=null&&_.canScrollNext());return _&&t&&!M&&!F?Y.current=setInterval(()=>{_.scrollNext()},d):(Y.current&&clearInterval(Y.current),Y.current=void 0),()=>{Y.current&&clearInterval(Y.current)}},[t,d,w,_,W,C,X]),Ee(()=>{if(!_)return;_.reInit();const F=_.scrollSnapList().map((L,j)=>j);ee(F)},[A.Children.toArray(i).length,r,S,C,x,N,y,f,u,h,b,s,p,m]),Ee(()=>{if(!_)return;const F=_.scrollSnapList().map((L,j)=>j);ee(F)},[_]),Ee(()=>{if(_)return _.on("select",oe),_.on("scroll",re),re(),()=>{_.off("select",oe),_.off("scroll",re)}},[_,re]),Ee(()=>{_&&g!==void 0&&_.scrollTo(g)},[g]),Ps(l,_);const V=A.useCallback((M={},F=null)=>({"aria-roledescription":"carousel",...k,...M,ref:F,vars:Ls(G,[{name:"gap",token:"spaces",value:N},{name:"slideSize",token:"sizes",value:p}]),onMouseEnter:we(M.onMouseEnter,()=>{J(!0)}),onMouseLeave:we(M.onMouseLeave,()=>{J(!1)})}),[k,N,p,G]),R=A.useCallback((M={})=>({id:n,"aria-live":t?"off":"polite",...U,...M,ref:q}),[U,n,q,t]);return{id:n,carousel:_,children:i,includeGapInSize:m,indexes:se,orientation:S,selectedIndex:X,slidesToScroll:y,getContainerProps:V,getSlidesProps:R}},yt=({index:n})=>{const{id:r,indexes:t,selectedIndex:i,slidesToScroll:s}=ie();n=Math.floor((n??0)/s);const l=t.length,o=n===i;return{getSlideProps:A.useCallback((u={})=>({id:`${r}-${n+1}`,"aria-label":`${n+1} of ${l}`,"aria-roledescription":"slide","data-index":n,"data-selected":is(o),role:"tabpanel",...u}),[r,n,o,l])}},jt=({isDisabled:n,disabled:r=n,operation:t})=>{const{id:i,carousel:s}=ie(),l=t==="prev",o=r??(l?!(s!=null&&s.canScrollPrev()):!(s!=null&&s.canScrollNext())),d=A.useCallback(()=>{s&&(l?s.scrollPrev():s.scrollNext())},[s,l]);return{getControlProps:A.useCallback((f={},x=null)=>({"aria-controls":i,"aria-label":`Go to ${l?"previous":"next"} slide`,...f,ref:x,disabled:o,onClick:we(f.onClick,d)}),[o,i,d,l])}},wt=()=>{const{id:n,carousel:r,indexes:t,orientation:i,selectedIndex:s}=ie(),l=A.useRef(new Map),o=i==="vertical",d=A.useCallback(g=>{var C;const h=l.current.get(g);(C=h==null?void 0:h.current)==null||C.focus(),r==null||r.scrollTo(g)},[r]),u=A.useCallback(g=>h=>{h.stopPropagation(),r==null||r.scrollTo(g)},[r]),f=A.useCallback(g=>h=>{const C=t.length-1,b={ArrowDown:()=>{o&&(g===C?g=0:g+=1,d(g))},ArrowLeft:()=>{o||(g===0?g=C:g-=1,d(g))},ArrowRight:()=>{o||(g===C?g=0:g+=1,d(g))},ArrowUp:()=>{o&&(g===0?g=C:g-=1,d(g))},End:()=>d(C),Home:()=>d(0)}[h.key];b&&(h.preventDefault(),b(h))},[t,d,o]);zs(()=>{l.current.clear()});const x=A.useCallback((g={},h=null)=>({"aria-label":"Sliders","aria-orientation":i,role:"tablist",...g,ref:h}),[i]),m=A.useCallback(({index:g,...h},C)=>{const S=g===s,b=A.createRef();return l.current.set(g,b),{ref:Es(C,b),"aria-controls":`${n}-${g+1}`,"aria-label":`Go to ${g+1} slide`,"aria-selected":S,"data-index":g,"data-selected":is(S),role:"tab",tabIndex:S?0:-1,...h,key:g,onClick:we(h.onClick,u(g)),onKeyDown:we(h.onKeyDown,f(g))}},[u,f,s,n]);return{indexes:t,getIndicatorProps:m,getIndicatorsProps:x}},Se=ce(({className:n,...r},t)=>{const{orientation:i}=ie();return e.jsx(dn,{ref:t,className:Ce("ui-carousel__control--prev",n),icon:e.jsx(ls,{__css:{fontSize:"1.5em",transform:i==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),operation:"prev",...r})});Se.displayName="CarouselControlPrev";Se.__ui__="CarouselControlPrev";const he=ce(({className:n,...r},t)=>{const{orientation:i}=ie();return e.jsx(dn,{ref:t,className:Ce("ui-carousel__control--next",n),icon:e.jsx(ls,{__css:{fontSize:"1.5em",transform:i==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),operation:"next",...r})});he.displayName="CarouselControlNext";he.__ui__="CarouselControlNext";const dn=ce(({className:n,operation:r,...t},i)=>{const{styles:s}=ie(),{getControlProps:l}=jt({operation:r}),o={position:"absolute",zIndex:"fallback(kurillin, 9)",...s.control,...s[r]};return e.jsx(Ns,{className:Ce("ui-carousel__control",n),colorScheme:["whiteAlpha","blackAlpha"],fullRounded:!0,__css:o,...l(t,i)})});dn.displayName="CarouselControl";dn.__ui__="CarouselControl";const be=ce(({className:n,component:r,...t},i)=>{const{orientation:s,selectedIndex:l,styles:o}=ie(),{indexes:d,getIndicatorProps:u,getIndicatorsProps:f}=wt(),x={display:"flex",justifyContent:"center",position:"absolute",zIndex:"fallback(kurillin, 9)",...o.indicators,...s==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(pe.div,{className:Ce("ui-carousel__indicators",n),...f(t,i),__css:x,...t,children:d.map(m=>{const g=m===l;if(typeof r=="function"){const h=r({index:m,selected:g});if(!h)return null;const C=u({...h.props,index:m});return A.cloneElement(h,C)}else{const{key:h,...C}=u({index:m});return e.jsx(vn,{...C},h)}})})});be.displayName="CarouselIndicators";be.__ui__="CarouselIndicators";const vn=ce(({className:n,...r},t)=>{const{styles:i}=ie(),s={...i.indicator};return e.jsx(pe.button,{ref:t,type:"button",className:Ce("ui-carousel__indicators__indicator",n),__css:s,...r})});vn.displayName="CarouselIndicator";vn.__ui__="CarouselIndicator";const a=ce(({className:n,size:r="$slideSize",...t},i)=>{const{includeGapInSize:s,orientation:l}=ie(),{getSlideProps:o}=yt(t),d={flex:`0 0 ${r}`,position:"relative",...s?{[l==="vertical"?"pb":"pr"]:"$gap"}:{[l==="vertical"?"mb":"mr"]:"$gap"}};return e.jsx(pe.div,{className:Ce("ui-carousel__slide",n),__css:d,...o({}),children:e.jsx(_n,{ref:i,...t})})});a.displayName="CarouselSlide";a.__ui__="CarouselSlide";const _n=ce(({...n},r)=>e.jsx(pe.div,{ref:r,className:"ui-carousel__slide__inner",boxSize:"100%",...n}));_n.displayName="CarouselSlideInner";_n.__ui__="CarouselSlideInner";const P=ce(({h:n,height:r=n,minH:t,minHeight:i=t,...s},l)=>{const o=Q(s.orientation),d=Q(s.align),u=Q(s.autoplay),f=Q(s.stopMouseEnterAutoplay),x=Q(s.loop),m=Q(s.duration),g=Q(s.delay),h=Q(s.slidesToScroll),C=Q(s.draggable),S=Q(s.dragFree),b=Q(s.inViewThreshold),p=Q(s.skipSnaps),y=Q(s.containScroll),w=Q(s.includeGapInSize),[z,D]=Os("Carousel",{...s,align:d,autoplay:u,containScroll:y,delay:g,dragFree:S,draggable:C,duration:m,includeGapInSize:w,inViewThreshold:b,loop:x,orientation:o,skipSnaps:p,slidesToScroll:h,stopMouseEnterAutoplay:f}),{className:E,withControls:I=!0,withIndicators:v=!0,controlNextProps:T,controlPrevProps:N,controlProps:k,indicatorsProps:G,innerProps:U,...X}=Ms(D),$=Q(I),se=Q(v),{id:ee,children:W,getContainerProps:J,getSlidesProps:Y,...Z}=xt({...X}),q=Ts(W),_=Sn(q,Se),ne=Sn(q,he),re=Sn(q,be),oe=ks(q,a),V=As(q,Se,he,be,a),R=oe.map((F,L)=>A.cloneElement(F,{index:L})),M={h:"fit-content",position:"relative",...z.container};return e.jsx(bt,{value:{id:ee,styles:z,...Z},children:e.jsxs(pe.section,{className:Ce("ui-carousel",E),__css:M,...J({},l),children:[_??($?e.jsx(Se,{...k,...N}):null),ne??($?e.jsx(he,{...k,...T}):null),e.jsx(Pn,{...Y({...Ds({height:r,minHeight:i}),...U}),children:R}),re??(se?e.jsx(be,{...G}):null),V]})})});P.displayName="Carousel";P.__ui__="Carousel";const Pn=ce(({...n},r)=>{const t={h:"fit-content",overflow:"hidden",w:"100%"};return e.jsx(pe.div,{ref:r,className:"ui-carousel__sliders",__css:t,children:e.jsx(zn,{...n})})});Pn.displayName="CarouselSlides";Pn.__ui__="CarouselSlides";const zn=({...n})=>{const{includeGapInSize:r,orientation:t,styles:i}=ie(),s={display:"flex",flexDirection:t==="vertical"?"column":"row",...i.inner,...r?{[t==="vertical"?"mb":"mr"]:"calc($gap * -1)"}:{}};return e.jsx(pe.div,{className:"ui-carousel__sliders__inner",__css:s,...n})};zn.displayName="CarouselSlidesInner";zn.__ui__="CarouselSlidesInner";const to={component:P,title:"Components / Data Display / Carousel"},Be=()=>e.jsxs(P,{children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{size:"sm",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"md",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"lg",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"xl",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),He=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{orientation:"horizontal",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{orientation:"vertical",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),Ge=()=>e.jsxs(P,{defaultIndex:1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(P,{gap:0,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ve=()=>e.jsxs(P,{duration:60,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),$e=()=>e.jsxs(P,{slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,size:"100%",bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Qe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{align:"center",slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{align:"start",slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{align:"end",slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),Ue=()=>e.jsxs(P,{loop:!1,slideSize:"33.3%",slidesToScroll:3,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"}),e.jsx(a,{as:c,bg:"primary",children:"5"}),e.jsx(a,{as:c,bg:"secondary",children:"6"}),e.jsx(a,{as:c,bg:"danger",children:"7"}),e.jsx(a,{as:c,bg:"primary",children:"8"}),e.jsx(a,{as:c,bg:"secondary",children:"9"})]}),Xe=()=>e.jsxs(P,{align:"start",h:"auto",slideSize:"50%",slidesToScroll:2,children:[e.jsxs(a,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(a,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(a,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(a,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]})]}),qe=()=>e.jsxs(P,{autoplay:!0,loop:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ke=()=>e.jsxs(P,{autoplay:!0,delay:1e3,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),We=()=>e.jsxs(P,{dragFree:!0,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Je=()=>{const[n,r]=A.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{dragFree:!0,loop:!1,onScrollProgress:r,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsx(Bs,{colorScheme:"gray",value:n})]})},Ye=()=>e.jsxs(P,{includeGapInSize:!1,slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ze=()=>e.jsxs(P,{loop:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),en=()=>e.jsxs(P,{draggable:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),nn=()=>e.jsxs(P,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),rn=()=>e.jsxs(P,{withControls:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),sn=()=>e.jsxs(P,{withIndicators:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),tn=()=>e.jsxs(P,{watchDrag:(n,r)=>(console.log("drag",n,r),!0),watchResize:(n,r)=>(console.log("resized",n,r),!0),watchSlides:(n,r)=>(console.log("slides updated",n,r),!0),children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),on=()=>{const[n,r]=A.useState(0);return e.jsxs(P,{draggable:!1,index:n,onChange:r,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})},an=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{controlProps:{icon:e.jsx(cs,{})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{controlPrevProps:{icon:e.jsx(Mn,{})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{controlNextProps:{icon:e.jsx(Bn,{})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{children:[e.jsx(Se,{icon:e.jsx(Mn,{})}),e.jsx(he,{icon:e.jsx(Bn,{})}),e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),ln=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{indicatorsProps:{bottom:"8",component:({selected:n})=>e.jsx(cs,{color:n?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer",fontSize:"2xl"})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"}),e.jsx(be,{sx:{"& > *":{transitionDuration:"slower",transitionProperty:"width",w:"4",_selected:{w:"12"}}}})]})]});var Vn,$n,Qn;Be.parameters={...Be.parameters,docs:{...(Vn=Be.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
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
}`,...(Qn=($n=Be.parameters)==null?void 0:$n.docs)==null?void 0:Qn.source}}};var Un,Xn,qn;Fe.parameters={...Fe.parameters,docs:{...(Un=Fe.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
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
}`,...(qn=(Xn=Fe.parameters)==null?void 0:Xn.docs)==null?void 0:qn.source}}};var Kn,Wn,Jn;He.parameters={...He.parameters,docs:{...(Kn=He.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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
}`,...(Jn=(Wn=He.parameters)==null?void 0:Wn.docs)==null?void 0:Jn.source}}};var Yn,Zn,er;Ge.parameters={...Ge.parameters,docs:{...(Yn=Ge.parameters)==null?void 0:Yn.docs,source:{originalSource:`() => {
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
}`,...(er=(Zn=Ge.parameters)==null?void 0:Zn.docs)==null?void 0:er.source}}};var nr,rr,sr;Re.parameters={...Re.parameters,docs:{...(nr=Re.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
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
}`,...(sr=(rr=Re.parameters)==null?void 0:rr.docs)==null?void 0:sr.source}}};var tr,or,ar;Ve.parameters={...Ve.parameters,docs:{...(tr=Ve.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
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
}`,...(ar=(or=Ve.parameters)==null?void 0:or.docs)==null?void 0:ar.source}}};var ir,lr,cr;$e.parameters={...$e.parameters,docs:{...(ir=$e.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
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
}`,...(cr=(lr=$e.parameters)==null?void 0:lr.docs)==null?void 0:cr.source}}};var ur,dr,gr;Qe.parameters={...Qe.parameters,docs:{...(ur=Qe.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
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
}`,...(gr=(dr=Qe.parameters)==null?void 0:dr.docs)==null?void 0:gr.source}}};var fr,Cr,pr;Ue.parameters={...Ue.parameters,docs:{...(fr=Ue.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
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
}`,...(pr=(Cr=Ue.parameters)==null?void 0:Cr.docs)==null?void 0:pr.source}}};var mr,Sr,hr;Xe.parameters={...Xe.parameters,docs:{...(mr=Xe.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
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
}`,...(hr=(Sr=Xe.parameters)==null?void 0:Sr.docs)==null?void 0:hr.source}}};var br,xr,yr;qe.parameters={...qe.parameters,docs:{...(br=qe.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
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
}`,...(yr=(xr=qe.parameters)==null?void 0:xr.docs)==null?void 0:yr.source}}};var jr,wr,Ir;Ke.parameters={...Ke.parameters,docs:{...(jr=Ke.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
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
}`,...(Ir=(wr=Ke.parameters)==null?void 0:wr.docs)==null?void 0:Ir.source}}};var vr,_r,Pr;We.parameters={...We.parameters,docs:{...(vr=We.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
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
}`,...(Pr=(_r=We.parameters)==null?void 0:_r.docs)==null?void 0:Pr.source}}};var zr,Er,Tr;Je.parameters={...Je.parameters,docs:{...(zr=Je.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
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
}`,...(Tr=(Er=Je.parameters)==null?void 0:Er.docs)==null?void 0:Tr.source}}};var kr,Ar,Dr;Ye.parameters={...Ye.parameters,docs:{...(kr=Ye.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
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
}`,...(Dr=(Ar=Ye.parameters)==null?void 0:Ar.docs)==null?void 0:Dr.source}}};var Lr,Nr,Or;Ze.parameters={...Ze.parameters,docs:{...(Lr=Ze.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
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
}`,...(Or=(Nr=Ze.parameters)==null?void 0:Nr.docs)==null?void 0:Or.source}}};var Mr,Br,Fr;en.parameters={...en.parameters,docs:{...(Mr=en.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
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
}`,...(Fr=(Br=en.parameters)==null?void 0:Br.docs)==null?void 0:Fr.source}}};var Hr,Gr,Rr;nn.parameters={...nn.parameters,docs:{...(Hr=nn.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
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
}`,...(Rr=(Gr=nn.parameters)==null?void 0:Gr.docs)==null?void 0:Rr.source}}};var Vr,$r,Qr;rn.parameters={...rn.parameters,docs:{...(Vr=rn.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
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
}`,...(Qr=($r=rn.parameters)==null?void 0:$r.docs)==null?void 0:Qr.source}}};var Ur,Xr,qr;sn.parameters={...sn.parameters,docs:{...(Ur=sn.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
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
}`,...(qr=(Xr=sn.parameters)==null?void 0:Xr.docs)==null?void 0:qr.source}}};var Kr,Wr,Jr;tn.parameters={...tn.parameters,docs:{...(Kr=tn.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
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
}`,...(Jr=(Wr=tn.parameters)==null?void 0:Wr.docs)==null?void 0:Jr.source}}};var Yr,Zr,es;on.parameters={...on.parameters,docs:{...(Yr=on.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
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
}`,...(es=(Zr=on.parameters)==null?void 0:Zr.docs)==null?void 0:es.source}}};var ns,rs,ss;an.parameters={...an.parameters,docs:{...(ns=an.parameters)==null?void 0:ns.docs,source:{originalSource:`() => {
  return <>
      <Carousel controlProps={{
      icon: <GhostIcon />
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
      icon: <ArrowLeftIcon />
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
      icon: <ArrowRightIcon />
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
        <CarouselControlPrev icon={<ArrowLeftIcon />} />
        <CarouselControlNext icon={<ArrowRightIcon />} />

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
}`,...(ss=(rs=an.parameters)==null?void 0:rs.docs)==null?void 0:ss.source}}};var ts,os,as;ln.parameters={...ln.parameters,docs:{...(ts=ln.parameters)==null?void 0:ts.docs,source:{originalSource:`() => {
  return <>
      <Carousel indicatorsProps={{
      bottom: "8",
      component: ({
        selected
      }) => <GhostIcon color={selected ? "whiteAlpha.700" : "whiteAlpha.400"} cursor="pointer" fontSize="2xl" />
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
}`,...(as=(os=ln.parameters)==null?void 0:os.docs)==null?void 0:as.source}}};const oo=["basic","withSize","withOrientation","withDefaultIndex","withGap","withDuration","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","useMethods","customControl","customControlButton","customIndicators"];export{oo as __namedExportsOrder,Be as basic,on as customControl,an as customControlButton,ln as customIndicators,to as default,rn as disabledControlButton,en as disabledDraggable,Ye as disabledIncludeGapInSize,sn as disabledIndicators,Ze as disabledLoop,nn as disabledStopMouseEnterAutoplay,tn as useMethods,Qe as withAlign,qe as withAutoplay,Xe as withCard,Ge as withDefaultIndex,Ke as withDelay,We as withDragFree,Ve as withDuration,Re as withGap,He as withOrientation,Je as withScrollProgress,Fe as withSize,$e as withSlideSize,Ue as withSlidesToScroll};
