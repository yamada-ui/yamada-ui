import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as A}from"./index-Bv9Y92EF.js";import{u as Q}from"./index-BY3xloYI.js";import{u as Is}from"./index-D3uVnNfI.js";import{B as vs,M as _s,ae as Ps,o as Ee,n as zs,h as we,a2 as Es,d as ls,a as Ts,c as Ce,b as pe,g as ks,C as Sn,ac as As,a7 as Ds,H as Ls}from"./factory-7Z88KRtK.js";import{m as Ns}from"./use-var-Bz9rJ8_M.js";import{c as cs}from"./icon-DKuqv-9Z.js";import{I as Os}from"./icon-button-2YXvAmDN.js";import{f as ce}from"./forward-ref-DH6f5tnY.js";import{a as Ms}from"./use-component-style-DHLtMqa5.js";import{o as Bs}from"./theme-provider-DsbwOWxu.js";import{P as Fs}from"./progress-Dz6rKr-r.js";import{A as Bn}from"./arrow-left-CWKmvUhj.js";import{A as Fn}from"./arrow-right-Bu-d7AV-.js";import{C as c}from"./center-D6SfTFGO.js";import{C as Te,a as ke,b as Ae,c as De}from"./card-DDHlif2n.js";import{I as Le}from"./image-Bd3jL6l6.js";import{H as Ne}from"./heading-DiAnMbcf.js";import{T as Oe}from"./text-KN7rBBtq.js";import{B as Me}from"./button-nZ2ZqBRb.js";import{G as us}from"./ghost-8C0wGJyp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BU1StM4P.js";import"./index-M_HQDTPf.js";import"./index-YFprnXPi.js";import"./index-BhIdR6KT.js";import"./number-CcP_arM8.js";import"./createLucideIcon-Bq8XVWwL.js";import"./use-image-CgpcQJeK.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./loading-DVofVDF_.js";function Hs(n){return Object.prototype.toString.call(n)==="[object Object]"}function Hn(n){return Hs(n)||Array.isArray(n)}function Gs(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function xn(n,r){const t=Object.keys(n),i=Object.keys(r);if(t.length!==i.length)return!1;const s=JSON.stringify(Object.keys(n.breakpoints||{})),l=JSON.stringify(Object.keys(r.breakpoints||{}));return s!==l?!1:t.every(o=>{const d=n[o],u=r[o];return typeof d=="function"?`${d}`==`${u}`:!Hn(d)||!Hn(u)?d===u:xn(d,u)})}function Gn(n){return n.concat().sort((r,t)=>r.name>t.name?1:-1).map(r=>r.options)}function Rs(n,r){if(n.length!==r.length)return!1;const t=Gn(n),i=Gn(r);return t.every((s,l)=>{const o=i[l];return xn(s,o)})}function yn(n){return typeof n=="number"}function hn(n){return typeof n=="string"}function un(n){return typeof n=="boolean"}function Rn(n){return Object.prototype.toString.call(n)==="[object Object]"}function B(n){return Math.abs(n)}function jn(n){return Math.sign(n)}function je(n,r){return B(n-r)}function Vs(n,r){if(n===0||r===0||B(n)<=B(r))return 0;const t=je(B(n),B(r));return B(t/n)}function $s(n){return Math.round(n*100)/100}function Ie(n){return ve(n).map(Number)}function te(n){return n[Pe(n)]}function Pe(n){return Math.max(0,n.length-1)}function wn(n,r){return r===Pe(n)}function Vn(n,r=0){return Array.from(Array(n),(t,i)=>r+i)}function ve(n){return Object.keys(n)}function ds(n,r){return[n,r].reduce((t,i)=>(ve(i).forEach(s=>{const l=t[s],o=i[s],d=Rn(l)&&Rn(o);t[s]=d?ds(l,o):o}),t),{})}function bn(n,r){return typeof r.MouseEvent<"u"&&n instanceof r.MouseEvent}function Qs(n,r){const t={start:i,center:s,end:l};function i(){return 0}function s(u){return l(u)/2}function l(u){return r-u}function o(u,g){return hn(n)?t[n](u):n(r,u,g)}return{measure:o}}function _e(){let n=[];function r(s,l,o,d={passive:!0}){let u;if("addEventListener"in s)s.addEventListener(l,o,d),u=()=>s.removeEventListener(l,o,d);else{const g=s;g.addListener(o),u=()=>g.removeListener(o)}return n.push(u),i}function t(){n=n.filter(s=>s())}const i={add:r,clear:t};return i}function Us(n,r,t,i){const s=_e(),l=1e3/60;let o=null,d=0,u=0;function g(){s.add(n,"visibilitychange",()=>{n.hidden&&C()})}function x(){h(),s.clear()}function m(b){if(!u)return;o||(o=b,t(),t());const p=b-o;for(o=b,d+=p;d>=l;)t(),d-=l;const y=d/l;i(y),u&&(u=r.requestAnimationFrame(m))}function f(){u||(u=r.requestAnimationFrame(m))}function h(){r.cancelAnimationFrame(u),o=null,d=0,u=0}function C(){o=null,d=0}return{init:g,destroy:x,start:f,stop:h,update:t,render:i}}function Xs(n,r){const t=r==="rtl",i=n==="y",s=i?"y":"x",l=i?"x":"y",o=!i&&t?-1:1,d=x(),u=m();function g(C){const{height:S,width:b}=C;return i?S:b}function x(){return i?"top":t?"right":"left"}function m(){return i?"bottom":t?"left":"right"}function f(C){return C*o}return{scroll:s,cross:l,startEdge:d,endEdge:u,measureSize:g,direction:f}}function ge(n=0,r=0){const t=B(n-r);function i(g){return g<n}function s(g){return g>r}function l(g){return i(g)||s(g)}function o(g){return l(g)?i(g)?n:r:g}function d(g){return t?g-t*Math.ceil((g-r)/t):g}return{length:t,max:r,min:n,constrain:o,reachedAny:l,reachedMax:s,reachedMin:i,removeOffset:d}}function fs(n,r,t){const{constrain:i}=ge(0,n),s=n+1;let l=o(r);function o(f){return t?B((s+f)%s):i(f)}function d(){return l}function u(f){return l=o(f),m}function g(f){return x().set(d()+f)}function x(){return fs(n,d(),t)}const m={get:d,set:u,add:g,clone:x};return m}function qs(n,r,t,i,s,l,o,d,u,g,x,m,f,h,C,S,b,p,y){const{cross:w,direction:z}=n,D=["INPUT","SELECT","TEXTAREA"],E={passive:!1},I=_e(),v=_e(),T=ge(50,225).constrain(h.measure(20)),N={mouse:300,touch:400},k={mouse:500,touch:600},G=C?43:25;let U=!1,X=0,$=0,se=!1,ee=!1,W=!1,J=!1;function Y(j){if(!y)return;function O(K){(un(y)||y(j,K))&&oe(K)}const H=r;I.add(H,"dragstart",K=>K.preventDefault(),E).add(H,"touchmove",()=>{},E).add(H,"touchend",()=>{}).add(H,"touchstart",O).add(H,"mousedown",O).add(H,"touchcancel",R).add(H,"contextmenu",R).add(H,"click",M,!0)}function Z(){I.clear(),v.clear()}function q(){const j=J?t:r;v.add(j,"touchmove",V,E).add(j,"touchend",R).add(j,"mousemove",V,E).add(j,"mouseup",R)}function _(j){const O=j.nodeName||"";return D.includes(O)}function ne(){return(C?k:N)[J?"mouse":"touch"]}function re(j,O){const H=m.add(jn(j)*-1),K=x.byDistance(j,!C).distance;return C||B(j)<T?K:b&&O?K*.5:x.byIndex(H.get(),0).distance}function oe(j){const O=bn(j,i);J=O,W=C&&O&&!j.buttons&&U,U=je(s.get(),o.get())>=2,!(O&&j.button!==0)&&(_(j.target)||(se=!0,l.pointerDown(j),g.useFriction(0).useDuration(0),s.set(o),q(),X=l.readPoint(j),$=l.readPoint(j,w),f.emit("pointerDown")))}function V(j){if(!bn(j,i)&&j.touches.length>=2)return R(j);const H=l.readPoint(j),K=l.readPoint(j,w),ae=je(H,X),le=je(K,$);if(!ee&&!J&&(!j.cancelable||(ee=ae>le,!ee)))return R(j);const de=l.pointerMove(j);ae>S&&(W=!0),g.useFriction(.3).useDuration(.75),d.start(),s.add(z(de)),j.preventDefault()}function R(j){const H=x.byDistance(0,!1).index!==m.get(),K=l.pointerUp(j)*ne(),ae=re(z(K),H),le=Vs(K,ae),de=G-10*le,ue=p+le/50;ee=!1,se=!1,v.clear(),g.useDuration(de).useFriction(ue),u.distance(ae,!C),J=!1,f.emit("pointerUp")}function M(j){W&&(j.stopPropagation(),j.preventDefault(),W=!1)}function F(){return se}return{init:Y,destroy:Z,pointerDown:F}}function Ks(n,r){let i,s;function l(m){return m.timeStamp}function o(m,f){const C=`client${(f||n.scroll)==="x"?"X":"Y"}`;return(bn(m,r)?m:m.touches[0])[C]}function d(m){return i=m,s=m,o(m)}function u(m){const f=o(m)-o(s),h=l(m)-l(i)>170;return s=m,h&&(i=m),f}function g(m){if(!i||!s)return 0;const f=o(s)-o(i),h=l(m)-l(i),C=l(m)-l(s)>170,S=f/h;return h&&!C&&B(S)>.1?S:0}return{pointerDown:d,pointerMove:u,pointerUp:g,readPoint:o}}function Ws(){function n(t){const{offsetTop:i,offsetLeft:s,offsetWidth:l,offsetHeight:o}=t;return{top:i,right:s+l,bottom:i+o,left:s,width:l,height:o}}return{measure:n}}function Js(n){function r(i){return n*(i/100)}return{measure:r}}function Ys(n,r,t,i,s,l,o){const d=[n].concat(i);let u,g,x=[],m=!1;function f(b){return s.measureSize(o.measure(b))}function h(b){if(!l)return;g=f(n),x=i.map(f);function p(y){for(const w of y){if(m)return;const z=w.target===n,D=i.indexOf(w.target),E=z?g:x[D],I=f(z?n:i[D]);if(B(I-E)>=.5){b.reInit(),r.emit("resize");break}}}u=new ResizeObserver(y=>{(un(l)||l(b,y))&&p(y)}),t.requestAnimationFrame(()=>{d.forEach(y=>u.observe(y))})}function C(){m=!0,u&&u.disconnect()}return{init:h,destroy:C}}function Zs(n,r,t,i,s,l){let o=0,d=0,u=s,g=l,x=n.get(),m=0;function f(){const E=i.get()-n.get(),I=!u;let v=0;return I?(o=0,t.set(i),n.set(i),v=E):(t.set(n),o+=E/u,o*=g,x+=o,n.add(o),v=x-m),d=jn(v),m=x,D}function h(){const E=i.get()-r.get();return B(E)<.001}function C(){return u}function S(){return d}function b(){return o}function p(){return w(s)}function y(){return z(l)}function w(E){return u=E,D}function z(E){return g=E,D}const D={direction:S,duration:C,velocity:b,seek:f,settled:h,useBaseFriction:y,useBaseDuration:p,useFriction:z,useDuration:w};return D}function et(n,r,t,i,s){const l=s.measure(10),o=s.measure(50),d=ge(.1,.99);let u=!1;function g(){return!(u||!n.reachedAny(t.get())||!n.reachedAny(r.get()))}function x(h){if(!g())return;const C=n.reachedMin(r.get())?"min":"max",S=B(n[C]-r.get()),b=t.get()-r.get(),p=d.constrain(S/o);t.subtract(b*p),!h&&B(b)<l&&(t.set(n.constrain(t.get())),i.useDuration(25).useBaseFriction())}function m(h){u=!h}return{shouldConstrain:g,constrain:x,toggleActive:m}}function nt(n,r,t,i,s){const l=ge(-r+n,0),o=m(),d=x(),u=f();function g(C,S){return je(C,S)<=1}function x(){const C=o[0],S=te(o),b=o.lastIndexOf(C),p=o.indexOf(S)+1;return ge(b,p)}function m(){return t.map((C,S)=>{const{min:b,max:p}=l,y=l.constrain(C),w=!S,z=wn(t,S);return w?p:z||g(b,y)?b:g(p,y)?p:y}).map(C=>parseFloat(C.toFixed(3)))}function f(){if(r<=n+s)return[l.max];if(i==="keepSnaps")return o;const{min:C,max:S}=d;return o.slice(C,S)}return{snapsContained:u,scrollContainLimit:d}}function rt(n,r,t){const i=r[0],s=t?i-n:te(r);return{limit:ge(s,i)}}function st(n,r,t,i){const l=r.min+.1,o=r.max+.1,{reachedMin:d,reachedMax:u}=ge(l,o);function g(f){return f===1?u(t.get()):f===-1?d(t.get()):!1}function x(f){if(!g(f))return;const h=n*(f*-1);i.forEach(C=>C.add(h))}return{loop:x}}function tt(n){const{max:r,length:t}=n;function i(l){const o=l-r;return t?o/-t:0}return{get:i}}function ot(n,r,t,i,s){const{startEdge:l,endEdge:o}=n,{groupSlides:d}=s,u=m().map(r.measure),g=f(),x=h();function m(){return d(i).map(S=>te(S)[o]-S[0][l]).map(B)}function f(){return i.map(S=>t[l]-S[l]).map(S=>-B(S))}function h(){return d(g).map(S=>S[0]).map((S,b)=>S+u[b])}return{snaps:g,snapsAligned:x}}function at(n,r,t,i,s,l){const{groupSlides:o}=s,{min:d,max:u}=i,g=x();function x(){const f=o(l),h=!n||r==="keepSnaps";return t.length===1?[l]:h?f:f.slice(d,u).map((C,S,b)=>{const p=!S,y=wn(b,S);if(p){const w=te(b[0])+1;return Vn(w)}if(y){const w=Pe(l)-te(b)[0]+1;return Vn(w,te(b)[0])}return C})}return{slideRegistry:g}}function it(n,r,t,i,s){const{reachedAny:l,removeOffset:o,constrain:d}=i;function u(C){return C.concat().sort((S,b)=>B(S)-B(b))[0]}function g(C){const S=n?o(C):d(C),b=r.map((y,w)=>({diff:x(y-S,0),index:w})).sort((y,w)=>B(y.diff)-B(w.diff)),{index:p}=b[0];return{index:p,distance:S}}function x(C,S){const b=[C,C+t,C-t];if(!n)return C;if(!S)return u(b);const p=b.filter(y=>jn(y)===S);return p.length?u(p):te(b)-t}function m(C,S){const b=r[C]-s.get(),p=x(b,S);return{index:C,distance:p}}function f(C,S){const b=s.get()+C,{index:p,distance:y}=g(b),w=!n&&l(b);if(!S||w)return{index:p,distance:C};const z=r[p]-y,D=C+x(z,0);return{index:p,distance:D}}return{byDistance:f,byIndex:m,shortcut:x}}function lt(n,r,t,i,s,l,o){function d(m){const f=m.distance,h=m.index!==r.get();l.add(f),f&&(i.duration()?n.start():(n.update(),n.render(1),n.update())),h&&(t.set(r.get()),r.set(m.index),o.emit("select"))}function u(m,f){const h=s.byDistance(m,f);d(h)}function g(m,f){const h=r.clone().set(m),C=s.byIndex(h.get(),f);d(C)}return{distance:u,index:g}}function ct(n,r,t,i,s,l,o,d){const u={passive:!0,capture:!0};let g=0;function x(h){if(!d)return;function C(S){if(new Date().getTime()-g>10)return;o.emit("slideFocusStart"),n.scrollLeft=0;const y=t.findIndex(w=>w.includes(S));yn(y)&&(s.useDuration(0),i.index(y,0),o.emit("slideFocus"))}l.add(document,"keydown",m,!1),r.forEach((S,b)=>{l.add(S,"focus",p=>{(un(d)||d(h,p))&&C(b)},u)})}function m(h){h.code==="Tab"&&(g=new Date().getTime())}return{init:x}}function ye(n){let r=n;function t(){return r}function i(u){r=o(u)}function s(u){r+=o(u)}function l(u){r-=o(u)}function o(u){return yn(u)?u:u.get()}return{get:t,set:i,add:s,subtract:l}}function gs(n,r){const t=n.scroll==="x"?o:d,i=r.style;let s=null,l=!1;function o(f){return`translate3d(${f}px,0px,0px)`}function d(f){return`translate3d(0px,${f}px,0px)`}function u(f){if(l)return;const h=$s(n.direction(f));h!==s&&(i.transform=t(h),s=h)}function g(f){l=!f}function x(){l||(i.transform="",r.getAttribute("style")||r.removeAttribute("style"))}return{clear:x,to:u,toggleActive:g}}function ut(n,r,t,i,s,l,o,d,u){const x=Ie(s),m=Ie(s).reverse(),f=p().concat(y());function h(I,v){return I.reduce((T,N)=>T-s[N],v)}function C(I,v){return I.reduce((T,N)=>h(T,v)>0?T.concat([N]):T,[])}function S(I){return l.map((v,T)=>({start:v-i[T]+.5+I,end:v+r-.5+I}))}function b(I,v,T){const N=S(v);return I.map(k=>{const G=T?0:-t,U=T?t:0,X=T?"end":"start",$=N[k][X];return{index:k,loopPoint:$,slideLocation:ye(-1),translate:gs(n,u[k]),target:()=>d.get()>$?G:U}})}function p(){const I=o[0],v=C(m,I);return b(v,t,!1)}function y(){const I=r-o[0]-1,v=C(x,I);return b(v,-t,!0)}function w(){return f.every(({index:I})=>{const v=x.filter(T=>T!==I);return h(v,r)<=.1})}function z(){f.forEach(I=>{const{target:v,translate:T,slideLocation:N}=I,k=v();k!==N.get()&&(T.to(k),N.set(k))})}function D(){f.forEach(I=>I.translate.clear())}return{canLoop:w,clear:D,loop:z,loopPoints:f}}function dt(n,r,t){let i,s=!1;function l(u){if(!t)return;function g(x){for(const m of x)if(m.type==="childList"){u.reInit(),r.emit("slidesChanged");break}}i=new MutationObserver(x=>{s||(un(t)||t(u,x))&&g(x)}),i.observe(n,{childList:!0})}function o(){i&&i.disconnect(),s=!0}return{init:l,destroy:o}}function ft(n,r,t,i){const s={};let l=null,o=null,d,u=!1;function g(){d=new IntersectionObserver(C=>{u||(C.forEach(S=>{const b=r.indexOf(S.target);s[b]=S}),l=null,o=null,t.emit("slidesInView"))},{root:n.parentElement,threshold:i}),r.forEach(C=>d.observe(C))}function x(){d&&d.disconnect(),u=!0}function m(C){return ve(s).reduce((S,b)=>{const p=parseInt(b),{isIntersecting:y}=s[p];return(C&&y||!C&&!y)&&S.push(p),S},[])}function f(C=!0){if(C&&l)return l;if(!C&&o)return o;const S=m(C);return C&&(l=S),C||(o=S),S}return{init:g,destroy:x,get:f}}function gt(n,r,t,i,s,l){const{measureSize:o,startEdge:d,endEdge:u}=n,g=t[0]&&s,x=C(),m=S(),f=t.map(o),h=b();function C(){if(!g)return 0;const y=t[0];return B(r[d]-y[d])}function S(){if(!g)return 0;const y=l.getComputedStyle(te(i));return parseFloat(y.getPropertyValue(`margin-${u}`))}function b(){return t.map((y,w,z)=>{const D=!w,E=wn(z,w);return D?f[w]+x:E?f[w]+m:z[w+1][d]-y[d]}).map(B)}return{slideSizes:f,slideSizesWithGaps:h,startGap:x,endGap:m}}function Ct(n,r,t,i,s,l,o,d,u){const{startEdge:g,endEdge:x,direction:m}=n,f=yn(t);function h(p,y){return Ie(p).filter(w=>w%y===0).map(w=>p.slice(w,w+y))}function C(p){return p.length?Ie(p).reduce((y,w,z)=>{const D=te(y)||0,E=D===0,I=w===Pe(p),v=s[g]-l[D][g],T=s[g]-l[w][x],N=!i&&E?m(o):0,k=!i&&I?m(d):0,G=B(T-k-(v+N));return z&&G>r+u&&y.push(w),I&&y.push(p.length),y},[]).map((y,w,z)=>{const D=Math.max(z[w-1]||0);return p.slice(D,y)}):[]}function S(p){return f?h(p,t):C(p)}return{groupSlides:S}}function pt(n,r,t,i,s,l,o){const{align:d,axis:u,direction:g,startIndex:x,loop:m,duration:f,dragFree:h,dragThreshold:C,inViewThreshold:S,slidesToScroll:b,skipSnaps:p,containScroll:y,watchResize:w,watchSlides:z,watchDrag:D,watchFocus:E}=l,I=2,v=Ws(),T=v.measure(r),N=t.map(v.measure),k=Xs(u,g),G=k.measureSize(T),U=Js(G),X=Qs(d,G),$=!m&&!!y,se=m||!!y,{slideSizes:ee,slideSizesWithGaps:W,startGap:J,endGap:Y}=gt(k,T,N,t,se,s),Z=Ct(k,G,b,m,T,N,J,Y,I),{snaps:q,snapsAligned:_}=ot(k,X,T,N,Z),ne=-te(q)+te(W),{snapsContained:re,scrollContainLimit:oe}=nt(G,ne,_,y,I),V=$?re:_,{limit:R}=rt(ne,V,m),M=fs(Pe(V),x,m),F=M.clone(),L=Ie(t),j=({dragHandler:me,scrollBody:pn,scrollBounds:mn,options:{loop:ze}})=>{ze||mn.constrain(me.pointerDown()),pn.seek()},O=({scrollBody:me,translate:pn,location:mn,offsetLocation:ze,previousLocation:ms,scrollLooper:Ss,slideLooper:hs,dragHandler:bs,animation:xs,eventHandler:An,scrollBounds:ys,options:{loop:Dn}},Ln)=>{const Nn=me.settled(),js=!ys.shouldConstrain(),On=Dn?Nn:Nn&&js,Mn=On&&!bs.pointerDown();Mn&&xs.stop();const ws=mn.get()*Ln+ms.get()*(1-Ln);ze.set(ws),Dn&&(Ss.loop(me.direction()),hs.loop()),pn.to(ze.get()),Mn&&An.emit("settle"),On||An.emit("scroll")},H=Us(i,s,()=>j(Cn),me=>O(Cn,me)),K=.68,ae=V[M.get()],le=ye(ae),de=ye(ae),ue=ye(ae),fe=ye(ae),xe=Zs(le,ue,de,fe,f,K),fn=it(m,V,ne,R,fe),gn=lt(H,M,F,xe,fn,fe,o),En=tt(R),Tn=_e(),Cs=ft(r,t,o,S),{slideRegistry:kn}=at($,y,V,oe,Z,L),ps=ct(n,t,kn,gn,xe,Tn,o,E),Cn={ownerDocument:i,ownerWindow:s,eventHandler:o,containerRect:T,slideRects:N,animation:H,axis:k,dragHandler:qs(k,n,i,s,fe,Ks(k,s),le,H,gn,xe,fn,M,o,U,h,C,p,K,D),eventStore:Tn,percentOfView:U,index:M,indexPrevious:F,limit:R,location:le,offsetLocation:ue,previousLocation:de,options:l,resizeHandler:Ys(r,o,s,t,k,w,v),scrollBody:xe,scrollBounds:et(R,ue,fe,xe,U),scrollLooper:st(ne,R,ue,[le,ue,de,fe]),scrollProgress:En,scrollSnapList:V.map(En.get),scrollSnaps:V,scrollTarget:fn,scrollTo:gn,slideLooper:ut(k,G,ne,ee,W,q,V,ue,t),slideFocus:ps,slidesHandler:dt(r,o,z),slidesInView:Cs,slideIndexes:L,slideRegistry:kn,slidesToScroll:Z,target:fe,translate:gs(k,r)};return Cn}function mt(){let n={},r;function t(g){r=g}function i(g){return n[g]||[]}function s(g){return i(g).forEach(x=>x(r,g)),u}function l(g,x){return n[g]=i(g).concat([x]),u}function o(g,x){return n[g]=i(g).filter(m=>m!==x),u}function d(){n={}}const u={init:t,emit:s,off:o,on:l,clear:d};return u}const St={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function ht(n){function r(l,o){return ds(l,o||{})}function t(l){const o=l.breakpoints||{},d=ve(o).filter(u=>n.matchMedia(u).matches).map(u=>o[u]).reduce((u,g)=>r(u,g),{});return r(l,d)}function i(l){return l.map(o=>ve(o.breakpoints||{})).reduce((o,d)=>o.concat(d),[]).map(n.matchMedia)}return{mergeOptions:r,optionsAtMedia:t,optionsMediaQueries:i}}function bt(n){let r=[];function t(l,o){return r=o.filter(({options:d})=>n.optionsAtMedia(d).active!==!1),r.forEach(d=>d.init(l,n)),o.reduce((d,u)=>Object.assign(d,{[u.name]:u}),{})}function i(){r=r.filter(l=>l.destroy())}return{init:t,destroy:i}}function cn(n,r,t){const i=n.ownerDocument,s=i.defaultView,l=ht(s),o=bt(l),d=_e(),u=mt(),{mergeOptions:g,optionsAtMedia:x,optionsMediaQueries:m}=l,{on:f,off:h,emit:C}=u,S=k;let b=!1,p,y=g(St,cn.globalOptions),w=g(y),z=[],D,E,I;function v(){const{container:L,slides:j}=w;E=(hn(L)?n.querySelector(L):L)||n.children[0];const H=hn(j)?E.querySelectorAll(j):j;I=[].slice.call(H||E.children)}function T(L){const j=pt(n,E,I,i,s,L,u);if(L.loop&&!j.slideLooper.canLoop()){const O=Object.assign({},L,{loop:!1});return T(O)}return j}function N(L,j){b||(y=g(y,L),w=x(y),z=j||z,v(),p=T(w),m([y,...z.map(({options:O})=>O)]).forEach(O=>d.add(O,"change",k)),w.active&&(p.translate.to(p.location.get()),p.animation.init(),p.slidesInView.init(),p.slideFocus.init(F),p.eventHandler.init(F),p.resizeHandler.init(F),p.slidesHandler.init(F),p.options.loop&&p.slideLooper.loop(),E.offsetParent&&I.length&&p.dragHandler.init(F),D=o.init(F,z)))}function k(L,j){const O=Z();G(),N(g({startIndex:O},L),j),u.emit("reInit")}function G(){p.dragHandler.destroy(),p.eventStore.clear(),p.translate.clear(),p.slideLooper.clear(),p.resizeHandler.destroy(),p.slidesHandler.destroy(),p.slidesInView.destroy(),p.animation.destroy(),o.destroy(),d.clear()}function U(){b||(b=!0,d.clear(),G(),u.emit("destroy"),u.clear())}function X(L,j,O){!w.active||b||(p.scrollBody.useBaseFriction().useDuration(j===!0?0:w.duration),p.scrollTo.index(L,O||0))}function $(L){const j=p.index.add(1).get();X(j,L,-1)}function se(L){const j=p.index.add(-1).get();X(j,L,1)}function ee(){return p.index.add(1).get()!==Z()}function W(){return p.index.add(-1).get()!==Z()}function J(){return p.scrollSnapList}function Y(){return p.scrollProgress.get(p.offsetLocation.get())}function Z(){return p.index.get()}function q(){return p.indexPrevious.get()}function _(){return p.slidesInView.get()}function ne(){return p.slidesInView.get(!1)}function re(){return D}function oe(){return p}function V(){return n}function R(){return E}function M(){return I}const F={canScrollNext:ee,canScrollPrev:W,containerNode:R,internalEngine:oe,destroy:U,off:h,on:f,emit:C,plugins:re,previousScrollSnap:q,reInit:S,rootNode:V,scrollNext:$,scrollPrev:se,scrollProgress:Y,scrollSnapList:J,scrollTo:X,selectedScrollSnap:Z,slideNodes:M,slidesInView:_,slidesNotInView:ne};return N(r,t),setTimeout(()=>u.emit("init"),0),F}cn.globalOptions=void 0;function In(n={},r=[]){const t=A.useRef(n),i=A.useRef(r),[s,l]=A.useState(),[o,d]=A.useState(),u=A.useCallback(()=>{s&&s.reInit(t.current,i.current)},[s]);return A.useEffect(()=>{xn(t.current,n)||(t.current=n,u())},[n,u]),A.useEffect(()=>{Rs(i.current,r)||(i.current=r,u())},[r,u]),A.useEffect(()=>{if(Gs()&&o){cn.globalOptions=In.globalOptions;const g=cn(o,t.current,i.current);return l(g),()=>g.destroy()}else l(void 0)},[o,l]),[d,s]}In.globalOptions=void 0;const[xt,ie]=vs({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),yt=({id:n,align:r="center",autoplay:t=!1,children:i,containScroll:s=!1,controlRef:l,defaultIndex:o=0,delay:d=4e3,dragFree:u=!1,draggable:g=!0,duration:x=25,includeGapInSize:m=!0,index:f,inViewThreshold:h=0,loop:C=!0,orientation:S="horizontal",skipSnaps:b=!1,slideSize:p="100%",slidesToScroll:y=1,stopMouseEnterAutoplay:w=!0,watchDrag:z=g,watchResize:D=!0,watchSlides:E=!0,onChange:I,onScrollProgress:v,...T})=>{const[{gap:N="fallback(4, 1rem)",...k},{vars:G,...U}]=_s(T,Ps),[X,$]=Is({defaultValue:o,value:f,onChange:I}),[se,ee]=A.useState([]),[W,J]=A.useState(!1),Y=A.useRef(void 0),Z=S==="vertical",[q,_]=In({align:r,axis:Z?"y":"x",containScroll:s,dragFree:u,duration:x,inViewThreshold:h,loop:C,skipSnaps:b,slidesToScroll:y,startIndex:o,watchDrag:z,watchResize:D,watchSlides:E},[]),ne=A.useId();n??(n=ne);const re=A.useCallback(()=>{if(!_)return;const M=Math.round(Math.max(0,Math.min(1,_.scrollProgress()))*100);v==null||v(M)},[_,v]),oe=A.useCallback(()=>{if(!_)return;const M=_.selectedScrollSnap();$(M)},[_,$]);A.useEffect(()=>{const M=W&&w,F=!(_!=null&&_.canScrollNext());return _&&t&&!M&&!F?Y.current=setInterval(()=>{_.scrollNext()},d):(Y.current&&clearInterval(Y.current),Y.current=void 0),()=>{Y.current&&clearInterval(Y.current)}},[t,d,w,_,W,C,X]),Ee(()=>{if(!_)return;_.reInit();const F=_.scrollSnapList().map((L,j)=>j);ee(F)},[A.Children.toArray(i).length,r,S,C,x,N,y,g,u,h,b,s,p,m]),Ee(()=>{if(!_)return;const F=_.scrollSnapList().map((L,j)=>j);ee(F)},[_]),Ee(()=>{if(_)return _.on("select",oe),_.on("scroll",re),re(),()=>{_.off("select",oe),_.off("scroll",re)}},[_,re]),Ee(()=>{_&&f!==void 0&&_.scrollTo(f)},[f]),zs(l,_);const V=A.useCallback((M={},F=null)=>({"aria-roledescription":"carousel",...k,...M,ref:F,vars:Ns(G,[{name:"gap",token:"spaces",value:N},{name:"slideSize",token:"sizes",value:p}]),onMouseEnter:we(M.onMouseEnter,()=>{J(!0)}),onMouseLeave:we(M.onMouseLeave,()=>{J(!1)})}),[k,N,p,G]),R=A.useCallback((M={})=>({id:n,"aria-live":t?"off":"polite",...U,...M,ref:q}),[U,n,q,t]);return{id:n,carousel:_,children:i,includeGapInSize:m,indexes:se,orientation:S,selectedIndex:X,slidesToScroll:y,getContainerProps:V,getSlidesProps:R}},jt=({index:n})=>{const{id:r,indexes:t,selectedIndex:i,slidesToScroll:s}=ie();n=Math.floor((n??0)/s);const l=t.length,o=n===i;return{getSlideProps:A.useCallback((u={})=>({id:`${r}-${n+1}`,"aria-label":`${n+1} of ${l}`,"aria-roledescription":"slide","data-index":n,"data-selected":ls(o),role:"tabpanel",...u}),[r,n,o,l])}},wt=({isDisabled:n,disabled:r=n,operation:t})=>{const{id:i,carousel:s}=ie(),l=t==="prev",o=r??(l?!(s!=null&&s.canScrollPrev()):!(s!=null&&s.canScrollNext())),d=A.useCallback(()=>{s&&(l?s.scrollPrev():s.scrollNext())},[s,l]);return{getControlProps:A.useCallback((g={},x=null)=>({"aria-controls":i,"aria-label":`Go to ${l?"previous":"next"} slide`,...g,ref:x,disabled:o,onClick:we(g.onClick,d)}),[o,i,d,l])}},It=()=>{const{id:n,carousel:r,indexes:t,orientation:i,selectedIndex:s}=ie(),l=A.useRef(new Map),o=i==="vertical",d=A.useCallback(f=>{var C;const h=l.current.get(f);(C=h==null?void 0:h.current)==null||C.focus(),r==null||r.scrollTo(f)},[r]),u=A.useCallback(f=>h=>{h.stopPropagation(),r==null||r.scrollTo(f)},[r]),g=A.useCallback(f=>h=>{const C=t.length-1,b={ArrowDown:()=>{o&&(f===C?f=0:f+=1,d(f))},ArrowLeft:()=>{o||(f===0?f=C:f-=1,d(f))},ArrowRight:()=>{o||(f===C?f=0:f+=1,d(f))},ArrowUp:()=>{o&&(f===0?f=C:f-=1,d(f))},End:()=>d(C),Home:()=>d(0)}[h.key];b&&(h.preventDefault(),b(h))},[t,d,o]);Es(()=>{l.current.clear()});const x=A.useCallback((f={},h=null)=>({"aria-label":"Sliders","aria-orientation":i,role:"tablist",...f,ref:h}),[i]),m=A.useCallback(({index:f,...h},C)=>{const S=f===s,b=A.createRef();return l.current.set(f,b),{ref:Ts(C,b),"aria-controls":`${n}-${f+1}`,"aria-label":`Go to ${f+1} slide`,"aria-selected":S,"data-index":f,"data-selected":ls(S),role:"tab",tabIndex:S?0:-1,...h,key:f,onClick:we(h.onClick,u(f)),onKeyDown:we(h.onKeyDown,g(f))}},[u,g,s,n]);return{indexes:t,getIndicatorProps:m,getIndicatorsProps:x}},Se=ce(({className:n,...r},t)=>{const{orientation:i}=ie();return e.jsx(dn,{ref:t,className:Ce("ui-carousel__control--prev",n),icon:e.jsx(cs,{__css:{fontSize:"1.5em",transform:i==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),operation:"prev",...r})});Se.displayName="CarouselControlPrev";Se.__ui__="CarouselControlPrev";const he=ce(({className:n,...r},t)=>{const{orientation:i}=ie();return e.jsx(dn,{ref:t,className:Ce("ui-carousel__control--next",n),icon:e.jsx(cs,{__css:{fontSize:"1.5em",transform:i==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),operation:"next",...r})});he.displayName="CarouselControlNext";he.__ui__="CarouselControlNext";const dn=ce(({className:n,operation:r,...t},i)=>{const{styles:s}=ie(),{getControlProps:l}=wt({operation:r}),o={position:"absolute",zIndex:"fallback(kurillin, 9)",...s.control,...s[r]};return e.jsx(Os,{className:Ce("ui-carousel__control",n),colorScheme:["whiteAlpha","blackAlpha"],fullRounded:!0,__css:o,...l(t,i)})});dn.displayName="CarouselControl";dn.__ui__="CarouselControl";const be=ce(({className:n,component:r,...t},i)=>{const{orientation:s,selectedIndex:l,styles:o}=ie(),{indexes:d,getIndicatorProps:u,getIndicatorsProps:g}=It(),x={display:"flex",justifyContent:"center",position:"absolute",zIndex:"fallback(kurillin, 9)",...o.indicators,...s==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(pe.div,{className:Ce("ui-carousel__indicators",n),...g(t,i),__css:x,...t,children:d.map(m=>{const f=m===l;if(typeof r=="function"){const h=r({index:m,selected:f});if(!h)return null;const C=u({...h.props,index:m});return A.cloneElement(h,C)}else{const{key:h,...C}=u({index:m});return e.jsx(vn,{...C},h)}})})});be.displayName="CarouselIndicators";be.__ui__="CarouselIndicators";const vn=ce(({className:n,...r},t)=>{const{styles:i}=ie(),s={...i.indicator};return e.jsx(pe.button,{ref:t,type:"button",className:Ce("ui-carousel__indicators__indicator",n),__css:s,...r})});vn.displayName="CarouselIndicator";vn.__ui__="CarouselIndicator";const a=ce(({className:n,size:r="$slideSize",...t},i)=>{const{includeGapInSize:s,orientation:l}=ie(),{getSlideProps:o}=jt(t),d={flex:`0 0 ${r}`,position:"relative",...s?{[l==="vertical"?"pb":"pr"]:"$gap"}:{[l==="vertical"?"mb":"mr"]:"$gap"}};return e.jsx(pe.div,{className:Ce("ui-carousel__slide",n),__css:d,...o({}),children:e.jsx(_n,{ref:i,...t})})});a.displayName="CarouselSlide";a.__ui__="CarouselSlide";const _n=ce(({...n},r)=>e.jsx(pe.div,{ref:r,className:"ui-carousel__slide__inner",boxSize:"100%",...n}));_n.displayName="CarouselSlideInner";_n.__ui__="CarouselSlideInner";const P=ce(({h:n,height:r=n,minH:t,minHeight:i=t,...s},l)=>{const o=Q(s.orientation),d=Q(s.align),u=Q(s.autoplay),g=Q(s.stopMouseEnterAutoplay),x=Q(s.loop),m=Q(s.duration),f=Q(s.delay),h=Q(s.slidesToScroll),C=Q(s.draggable),S=Q(s.dragFree),b=Q(s.inViewThreshold),p=Q(s.skipSnaps),y=Q(s.containScroll),w=Q(s.includeGapInSize),[z,D]=Ms("Carousel",{...s,align:d,autoplay:u,containScroll:y,delay:f,dragFree:S,draggable:C,duration:m,includeGapInSize:w,inViewThreshold:b,loop:x,orientation:o,skipSnaps:p,slidesToScroll:h,stopMouseEnterAutoplay:g}),{className:E,withControls:I=!0,withIndicators:v=!0,controlNextProps:T,controlPrevProps:N,controlProps:k,indicatorsProps:G,innerProps:U,...X}=Bs(D),$=Q(I),se=Q(v),{id:ee,children:W,getContainerProps:J,getSlidesProps:Y,...Z}=yt({...X}),q=ks(W),_=Sn(q,Se),ne=Sn(q,he),re=Sn(q,be),oe=As(q,a),V=Ds(q,Se,he,be,a),R=oe.map((F,L)=>A.cloneElement(F,{index:L})),M={h:"fit-content",position:"relative",...z.container};return e.jsx(xt,{value:{id:ee,styles:z,...Z},children:e.jsxs(pe.section,{className:Ce("ui-carousel",E),__css:M,...J({},l),children:[_??($?e.jsx(Se,{...k,...N}):null),ne??($?e.jsx(he,{...k,...T}):null),e.jsx(Pn,{...Y({...Ls({height:r,minHeight:i}),...U}),children:R}),re??(se?e.jsx(be,{...G}):null),V]})})});P.displayName="Carousel";P.__ui__="Carousel";const Pn=ce(({...n},r)=>{const t={h:"fit-content",overflow:"hidden",w:"100%"};return e.jsx(pe.div,{ref:r,className:"ui-carousel__sliders",__css:t,children:e.jsx(zn,{...n})})});Pn.displayName="CarouselSlides";Pn.__ui__="CarouselSlides";const zn=({...n})=>{const{includeGapInSize:r,orientation:t,styles:i}=ie(),s={display:"flex",flexDirection:t==="vertical"?"column":"row",...i.inner,...r?{[t==="vertical"?"mb":"mr"]:"calc($gap * -1)"}:{}};return e.jsx(pe.div,{className:"ui-carousel__sliders__inner",__css:s,...n})};zn.displayName="CarouselSlidesInner";zn.__ui__="CarouselSlidesInner";const oo={component:P,title:"Components / Data Display / Carousel"},Be=()=>e.jsxs(P,{children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{size:"sm",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"md",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"lg",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"xl",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),He=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{orientation:"horizontal",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{orientation:"vertical",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),Ge=()=>e.jsxs(P,{defaultIndex:1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(P,{gap:0,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ve=()=>e.jsxs(P,{duration:60,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),$e=()=>e.jsxs(P,{slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,size:"100%",bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Qe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{align:"center",slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{align:"start",slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{align:"end",slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),Ue=()=>e.jsxs(P,{loop:!1,slideSize:"33.3%",slidesToScroll:3,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"}),e.jsx(a,{as:c,bg:"primary",children:"5"}),e.jsx(a,{as:c,bg:"secondary",children:"6"}),e.jsx(a,{as:c,bg:"danger",children:"7"}),e.jsx(a,{as:c,bg:"primary",children:"8"}),e.jsx(a,{as:c,bg:"secondary",children:"9"})]}),Xe=()=>e.jsxs(P,{align:"start",h:"auto",slideSize:"50%",slidesToScroll:2,children:[e.jsxs(a,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(a,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(a,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(a,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]})]}),qe=()=>e.jsxs(P,{autoplay:!0,loop:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ke=()=>e.jsxs(P,{autoplay:!0,delay:1e3,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),We=()=>e.jsxs(P,{dragFree:!0,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Je=()=>{const[n,r]=A.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{dragFree:!0,loop:!1,onScrollProgress:r,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsx(Fs,{colorScheme:"gray",value:n})]})},Ye=()=>e.jsxs(P,{includeGapInSize:!1,slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ze=()=>e.jsxs(P,{loop:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),en=()=>e.jsxs(P,{draggable:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),nn=()=>e.jsxs(P,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),rn=()=>e.jsxs(P,{withControls:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),sn=()=>e.jsxs(P,{withIndicators:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),tn=()=>e.jsxs(P,{watchDrag:(n,r)=>(console.log("drag",n,r),!0),watchResize:(n,r)=>(console.log("resized",n,r),!0),watchSlides:(n,r)=>(console.log("slides updated",n,r),!0),children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),on=()=>{const[n,r]=A.useState(0);return e.jsxs(P,{draggable:!1,index:n,onChange:r,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})},an=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{controlProps:{icon:e.jsx(us,{})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{controlPrevProps:{icon:e.jsx(Bn,{})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{controlNextProps:{icon:e.jsx(Fn,{})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{children:[e.jsx(Se,{icon:e.jsx(Bn,{})}),e.jsx(he,{icon:e.jsx(Fn,{})}),e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),ln=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{indicatorsProps:{bottom:"8",component:({selected:n})=>e.jsx(us,{color:n?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer",fontSize:"2xl"})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"}),e.jsx(be,{sx:{"& > *":{transitionDuration:"slower",transitionProperty:"width",w:"4",_selected:{w:"12"}}}})]})]});var $n,Qn,Un;Be.parameters={...Be.parameters,docs:{...($n=Be.parameters)==null?void 0:$n.docs,source:{originalSource:`() => {
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
}`,...(Un=(Qn=Be.parameters)==null?void 0:Qn.docs)==null?void 0:Un.source}}};var Xn,qn,Kn;Fe.parameters={...Fe.parameters,docs:{...(Xn=Fe.parameters)==null?void 0:Xn.docs,source:{originalSource:`() => {
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
}`,...(Kn=(qn=Fe.parameters)==null?void 0:qn.docs)==null?void 0:Kn.source}}};var Wn,Jn,Yn;He.parameters={...He.parameters,docs:{...(Wn=He.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(nr=(er=Ge.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var rr,sr,tr;Re.parameters={...Re.parameters,docs:{...(rr=Re.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
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
}`,...(tr=(sr=Re.parameters)==null?void 0:sr.docs)==null?void 0:tr.source}}};var or,ar,ir;Ve.parameters={...Ve.parameters,docs:{...(or=Ve.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
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
}`,...(ir=(ar=Ve.parameters)==null?void 0:ar.docs)==null?void 0:ir.source}}};var lr,cr,ur;$e.parameters={...$e.parameters,docs:{...(lr=$e.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
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
}`,...(gr=(fr=Qe.parameters)==null?void 0:fr.docs)==null?void 0:gr.source}}};var Cr,pr,mr;Ue.parameters={...Ue.parameters,docs:{...(Cr=Ue.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
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
}`,...(mr=(pr=Ue.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var Sr,hr,br;Xe.parameters={...Xe.parameters,docs:{...(Sr=Xe.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
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
}`,...(zr=(Pr=We.parameters)==null?void 0:Pr.docs)==null?void 0:zr.source}}};var Er,Tr,kr;Je.parameters={...Je.parameters,docs:{...(Er=Je.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
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
}`,...(kr=(Tr=Je.parameters)==null?void 0:Tr.docs)==null?void 0:kr.source}}};var Ar,Dr,Lr;Ye.parameters={...Ye.parameters,docs:{...(Ar=Ye.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
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
}`,...(Mr=(Or=Ze.parameters)==null?void 0:Or.docs)==null?void 0:Mr.source}}};var Br,Fr,Hr;en.parameters={...en.parameters,docs:{...(Br=en.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
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
}`,...(Hr=(Fr=en.parameters)==null?void 0:Fr.docs)==null?void 0:Hr.source}}};var Gr,Rr,Vr;nn.parameters={...nn.parameters,docs:{...(Gr=nn.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
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
}`,...(Vr=(Rr=nn.parameters)==null?void 0:Rr.docs)==null?void 0:Vr.source}}};var $r,Qr,Ur;rn.parameters={...rn.parameters,docs:{...($r=rn.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
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
}`,...(Ur=(Qr=rn.parameters)==null?void 0:Qr.docs)==null?void 0:Ur.source}}};var Xr,qr,Kr;sn.parameters={...sn.parameters,docs:{...(Xr=sn.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...(ts=(ss=an.parameters)==null?void 0:ss.docs)==null?void 0:ts.source}}};var os,as,is;ln.parameters={...ln.parameters,docs:{...(os=ln.parameters)==null?void 0:os.docs,source:{originalSource:`() => {
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
}`,...(is=(as=ln.parameters)==null?void 0:as.docs)==null?void 0:is.source}}};const ao=["basic","withSize","withOrientation","withDefaultIndex","withGap","withDuration","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","useMethods","customControl","customControlButton","customIndicators"];export{ao as __namedExportsOrder,Be as basic,on as customControl,an as customControlButton,ln as customIndicators,oo as default,rn as disabledControlButton,en as disabledDraggable,Ye as disabledIncludeGapInSize,sn as disabledIndicators,Ze as disabledLoop,nn as disabledStopMouseEnterAutoplay,tn as useMethods,Qe as withAlign,qe as withAutoplay,Xe as withCard,Ge as withDefaultIndex,Ke as withDelay,We as withDragFree,Ve as withDuration,Re as withGap,He as withOrientation,Je as withScrollProgress,Fe as withSize,$e as withSlideSize,Ue as withSlidesToScroll};
