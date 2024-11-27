import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as A}from"./index-ClcD9ViR.js";import{u as Q}from"./index-ByME5iZS.js";import{u as ws}from"./index-CSLw8Az-.js";import{p as Is,Z as vs,a9 as _s,f as Ee,e as Ps,h as we,d as is,Y as zs,a as Es,c as Ce,b as pe,q as Ts,w as Sn,a5 as ks,ac as As,A as Ds}from"./factory-CehSyZ2b.js";import{m as Ls}from"./use-var-C7Dt5UAR.js";import{c as ls}from"./icon-Tcjn8UpA.js";import{I as Ns}from"./icon-button-DGg3J3ON.js";import{f as ce}from"./forward-ref-D13m8o2p.js";import{a as Os}from"./use-component-style-PhZ538dD.js";import{o as Ms}from"./theme-provider-BOnS9RWG.js";import{P as Bs}from"./progress-4Wp2NPUb.js";import{A as Mn}from"./arrow-left-Vrxm6j99.js";import{A as Bn}from"./arrow-right-BKPo6Dus.js";import{C as c}from"./center-De5p2Ael.js";import{C as Te,a as ke,b as Ae,c as De}from"./card-D9Y_Bh_Y.js";import{I as Le}from"./image-yVNsbuR9.js";import{H as Ne}from"./heading-IeSrr5lO.js";import{T as Oe}from"./text-DxpipBZv.js";import{B as Me}from"./button-CN2eQqjg.js";import{G as cs}from"./ghost-CdBOiyEi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DTdOA4MV.js";import"./index-u-n2PdDt.js";import"./index-gGKStiao.js";import"./index-DxxoX3c-.js";import"./number-CcP_arM8.js";import"./createLucideIcon-DHJHrKis.js";import"./use-image-C9hD9ID-.js";import"./use-ripple-lPfPkpPL.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-C8sDf1Q7.js";import"./loading-J7FyZR17.js";function Fs(n){return Object.prototype.toString.call(n)==="[object Object]"}function Fn(n){return Fs(n)||Array.isArray(n)}function Hs(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function xn(n,r){const s=Object.keys(n),t=Object.keys(r);if(s.length!==t.length)return!1;const o=JSON.stringify(Object.keys(n.breakpoints||{})),l=JSON.stringify(Object.keys(r.breakpoints||{}));return o!==l?!1:s.every(a=>{const g=n[a],u=r[a];return typeof g=="function"?`${g}`==`${u}`:!Fn(g)||!Fn(u)?g===u:xn(g,u)})}function Hn(n){return n.concat().sort((r,s)=>r.name>s.name?1:-1).map(r=>r.options)}function Gs(n,r){if(n.length!==r.length)return!1;const s=Hn(n),t=Hn(r);return s.every((o,l)=>{const a=t[l];return xn(o,a)})}function yn(n){return typeof n=="number"}function hn(n){return typeof n=="string"}function un(n){return typeof n=="boolean"}function Gn(n){return Object.prototype.toString.call(n)==="[object Object]"}function B(n){return Math.abs(n)}function jn(n){return Math.sign(n)}function je(n,r){return B(n-r)}function Vs(n,r){if(n===0||r===0||B(n)<=B(r))return 0;const s=je(B(n),B(r));return B(s/n)}function Rs(n){return Math.round(n*100)/100}function Ie(n){return ve(n).map(Number)}function te(n){return n[Pe(n)]}function Pe(n){return Math.max(0,n.length-1)}function wn(n,r){return r===Pe(n)}function Vn(n,r=0){return Array.from(Array(n),(s,t)=>r+t)}function ve(n){return Object.keys(n)}function us(n,r){return[n,r].reduce((s,t)=>(ve(t).forEach(o=>{const l=s[o],a=t[o],g=Gn(l)&&Gn(a);s[o]=g?us(l,a):a}),s),{})}function bn(n,r){return typeof r.MouseEvent<"u"&&n instanceof r.MouseEvent}function $s(n,r){const s={start:t,center:o,end:l};function t(){return 0}function o(u){return l(u)/2}function l(u){return r-u}function a(u,f){return hn(n)?s[n](u):n(r,u,f)}return{measure:a}}function _e(){let n=[];function r(o,l,a,g={passive:!0}){let u;if("addEventListener"in o)o.addEventListener(l,a,g),u=()=>o.removeEventListener(l,a,g);else{const f=o;f.addListener(a),u=()=>f.removeListener(a)}return n.push(u),t}function s(){n=n.filter(o=>o())}const t={add:r,clear:s};return t}function Qs(n,r,s,t){const o=_e(),l=1e3/60;let a=null,g=0,u=0;function f(){o.add(n,"visibilitychange",()=>{n.hidden&&C()})}function x(){h(),o.clear()}function m(b){if(!u)return;a||(a=b);const p=b-a;for(a=b,g+=p;g>=l;)s(),g-=l;const y=g/l;t(y),u&&(u=r.requestAnimationFrame(m))}function d(){u||(u=r.requestAnimationFrame(m))}function h(){r.cancelAnimationFrame(u),a=null,g=0,u=0}function C(){a=null,g=0}return{init:f,destroy:x,start:d,stop:h,update:s,render:t}}function Us(n,r){const s=r==="rtl",t=n==="y",o=t?"y":"x",l=t?"x":"y",a=!t&&s?-1:1,g=x(),u=m();function f(C){const{height:S,width:b}=C;return t?S:b}function x(){return t?"top":s?"right":"left"}function m(){return t?"bottom":s?"left":"right"}function d(C){return C*a}return{scroll:o,cross:l,startEdge:g,endEdge:u,measureSize:f,direction:d}}function fe(n=0,r=0){const s=B(n-r);function t(f){return f<n}function o(f){return f>r}function l(f){return t(f)||o(f)}function a(f){return l(f)?t(f)?n:r:f}function g(f){return s?f-s*Math.ceil((f-r)/s):f}return{length:s,max:r,min:n,constrain:a,reachedAny:l,reachedMax:o,reachedMin:t,removeOffset:g}}function ds(n,r,s){const{constrain:t}=fe(0,n),o=n+1;let l=a(r);function a(d){return s?B((o+d)%o):t(d)}function g(){return l}function u(d){return l=a(d),m}function f(d){return x().set(g()+d)}function x(){return ds(n,g(),s)}const m={get:g,set:u,add:f,clone:x};return m}function Xs(n,r,s,t,o,l,a,g,u,f,x,m,d,h,C,S,b,p,y){const{cross:w,direction:z}=n,D=["INPUT","SELECT","TEXTAREA"],E={passive:!1},I=_e(),v=_e(),T=fe(50,225).constrain(h.measure(20)),N={mouse:300,touch:400},k={mouse:500,touch:600},G=C?43:25;let U=!1,X=0,$=0,se=!1,ee=!1,W=!1,J=!1;function Y(j){if(!y)return;function O(K){(un(y)||y(j,K))&&oe(K)}const H=r;I.add(H,"dragstart",K=>K.preventDefault(),E).add(H,"touchmove",()=>{},E).add(H,"touchend",()=>{}).add(H,"touchstart",O).add(H,"mousedown",O).add(H,"touchcancel",V).add(H,"contextmenu",V).add(H,"click",M,!0)}function Z(){I.clear(),v.clear()}function q(){const j=J?s:r;v.add(j,"touchmove",R,E).add(j,"touchend",V).add(j,"mousemove",R,E).add(j,"mouseup",V)}function _(j){const O=j.nodeName||"";return D.includes(O)}function ne(){return(C?k:N)[J?"mouse":"touch"]}function re(j,O){const H=m.add(jn(j)*-1),K=x.byDistance(j,!C).distance;return C||B(j)<T?K:b&&O?K*.5:x.byIndex(H.get(),0).distance}function oe(j){const O=bn(j,t);J=O,W=C&&O&&!j.buttons&&U,U=je(o.get(),a.get())>=2,!(O&&j.button!==0)&&(_(j.target)||(se=!0,l.pointerDown(j),f.useFriction(0).useDuration(0),o.set(a),q(),X=l.readPoint(j),$=l.readPoint(j,w),d.emit("pointerDown")))}function R(j){if(!bn(j,t)&&j.touches.length>=2)return V(j);const H=l.readPoint(j),K=l.readPoint(j,w),ae=je(H,X),le=je(K,$);if(!ee&&!J&&(!j.cancelable||(ee=ae>le,!ee)))return V(j);const de=l.pointerMove(j);ae>S&&(W=!0),f.useFriction(.3).useDuration(.75),g.start(),o.add(z(de)),j.preventDefault()}function V(j){const H=x.byDistance(0,!1).index!==m.get(),K=l.pointerUp(j)*ne(),ae=re(z(K),H),le=Vs(K,ae),de=G-10*le,ue=p+le/50;ee=!1,se=!1,v.clear(),f.useDuration(de).useFriction(ue),u.distance(ae,!C),J=!1,d.emit("pointerUp")}function M(j){W&&(j.stopPropagation(),j.preventDefault(),W=!1)}function F(){return se}return{init:Y,destroy:Z,pointerDown:F}}function qs(n,r){let t,o;function l(m){return m.timeStamp}function a(m,d){const C=`client${(d||n.scroll)==="x"?"X":"Y"}`;return(bn(m,r)?m:m.touches[0])[C]}function g(m){return t=m,o=m,a(m)}function u(m){const d=a(m)-a(o),h=l(m)-l(t)>170;return o=m,h&&(t=m),d}function f(m){if(!t||!o)return 0;const d=a(o)-a(t),h=l(m)-l(t),C=l(m)-l(o)>170,S=d/h;return h&&!C&&B(S)>.1?S:0}return{pointerDown:g,pointerMove:u,pointerUp:f,readPoint:a}}function Ks(){function n(s){const{offsetTop:t,offsetLeft:o,offsetWidth:l,offsetHeight:a}=s;return{top:t,right:o+l,bottom:t+a,left:o,width:l,height:a}}return{measure:n}}function Ws(n){function r(t){return n*(t/100)}return{measure:r}}function Js(n,r,s,t,o,l,a){const g=[n].concat(t);let u,f,x=[],m=!1;function d(b){return o.measureSize(a.measure(b))}function h(b){if(!l)return;f=d(n),x=t.map(d);function p(y){for(const w of y){if(m)return;const z=w.target===n,D=t.indexOf(w.target),E=z?f:x[D],I=d(z?n:t[D]);if(B(I-E)>=.5){b.reInit(),r.emit("resize");break}}}u=new ResizeObserver(y=>{(un(l)||l(b,y))&&p(y)}),s.requestAnimationFrame(()=>{g.forEach(y=>u.observe(y))})}function C(){m=!0,u&&u.disconnect()}return{init:h,destroy:C}}function Ys(n,r,s,t,o,l){let a=0,g=0,u=o,f=l,x=n.get(),m=0;function d(){const E=t.get()-n.get(),I=!u;let v=0;return I?(a=0,s.set(t),n.set(t),v=E):(s.set(n),a+=E/u,a*=f,x+=a,n.add(a),v=x-m),g=jn(v),m=x,D}function h(){const E=t.get()-r.get();return B(E)<.001}function C(){return u}function S(){return g}function b(){return a}function p(){return w(o)}function y(){return z(l)}function w(E){return u=E,D}function z(E){return f=E,D}const D={direction:S,duration:C,velocity:b,seek:d,settled:h,useBaseFriction:y,useBaseDuration:p,useFriction:z,useDuration:w};return D}function Zs(n,r,s,t,o){const l=o.measure(10),a=o.measure(50),g=fe(.1,.99);let u=!1;function f(){return!(u||!n.reachedAny(s.get())||!n.reachedAny(r.get()))}function x(h){if(!f())return;const C=n.reachedMin(r.get())?"min":"max",S=B(n[C]-r.get()),b=s.get()-r.get(),p=g.constrain(S/a);s.subtract(b*p),!h&&B(b)<l&&(s.set(n.constrain(s.get())),t.useDuration(25).useBaseFriction())}function m(h){u=!h}return{shouldConstrain:f,constrain:x,toggleActive:m}}function et(n,r,s,t,o){const l=fe(-r+n,0),a=m(),g=x(),u=d();function f(C,S){return je(C,S)<1}function x(){const C=a[0],S=te(a),b=a.lastIndexOf(C),p=a.indexOf(S)+1;return fe(b,p)}function m(){return s.map((C,S)=>{const{min:b,max:p}=l,y=l.constrain(C),w=!S,z=wn(s,S);return w?p:z||f(b,y)?b:f(p,y)?p:y}).map(C=>parseFloat(C.toFixed(3)))}function d(){if(r<=n+o)return[l.max];if(t==="keepSnaps")return a;const{min:C,max:S}=g;return a.slice(C,S)}return{snapsContained:u,scrollContainLimit:g}}function nt(n,r,s){const t=r[0],o=s?t-n:te(r);return{limit:fe(o,t)}}function rt(n,r,s,t){const l=r.min+.1,a=r.max+.1,{reachedMin:g,reachedMax:u}=fe(l,a);function f(d){return d===1?u(s.get()):d===-1?g(s.get()):!1}function x(d){if(!f(d))return;const h=n*(d*-1);t.forEach(C=>C.add(h))}return{loop:x}}function st(n){const{max:r,length:s}=n;function t(l){const a=l-r;return s?a/-s:0}return{get:t}}function tt(n,r,s,t,o){const{startEdge:l,endEdge:a}=n,{groupSlides:g}=o,u=m().map(r.measure),f=d(),x=h();function m(){return g(t).map(S=>te(S)[a]-S[0][l]).map(B)}function d(){return t.map(S=>s[l]-S[l]).map(S=>-B(S))}function h(){return g(f).map(S=>S[0]).map((S,b)=>S+u[b])}return{snaps:f,snapsAligned:x}}function ot(n,r,s,t,o,l){const{groupSlides:a}=o,{min:g,max:u}=t,f=x();function x(){const d=a(l),h=!n||r==="keepSnaps";return s.length===1?[l]:h?d:d.slice(g,u).map((C,S,b)=>{const p=!S,y=wn(b,S);if(p){const w=te(b[0])+1;return Vn(w)}if(y){const w=Pe(l)-te(b)[0]+1;return Vn(w,te(b)[0])}return C})}return{slideRegistry:f}}function at(n,r,s,t,o){const{reachedAny:l,removeOffset:a,constrain:g}=t;function u(C){return C.concat().sort((S,b)=>B(S)-B(b))[0]}function f(C){const S=n?a(C):g(C),b=r.map((y,w)=>({diff:x(y-S,0),index:w})).sort((y,w)=>B(y.diff)-B(w.diff)),{index:p}=b[0];return{index:p,distance:S}}function x(C,S){const b=[C,C+s,C-s];if(!n)return C;if(!S)return u(b);const p=b.filter(y=>jn(y)===S);return p.length?u(p):te(b)-s}function m(C,S){const b=r[C]-o.get(),p=x(b,S);return{index:C,distance:p}}function d(C,S){const b=o.get()+C,{index:p,distance:y}=f(b),w=!n&&l(b);if(!S||w)return{index:p,distance:C};const z=r[p]-y,D=C+x(z,0);return{index:p,distance:D}}return{byDistance:d,byIndex:m,shortcut:x}}function it(n,r,s,t,o,l,a){function g(m){const d=m.distance,h=m.index!==r.get();l.add(d),d&&(t.duration()?n.start():(n.update(),n.render(1),n.update())),h&&(s.set(r.get()),r.set(m.index),a.emit("select"))}function u(m,d){const h=o.byDistance(m,d);g(h)}function f(m,d){const h=r.clone().set(m),C=o.byIndex(h.get(),d);g(C)}return{distance:u,index:f}}function lt(n,r,s,t,o,l,a,g){const u={passive:!0,capture:!0};let f=0;function x(h){if(!g)return;function C(S){if(new Date().getTime()-f>10)return;a.emit("slideFocusStart"),n.scrollLeft=0;const y=s.findIndex(w=>w.includes(S));yn(y)&&(o.useDuration(0),t.index(y,0),a.emit("slideFocus"))}l.add(document,"keydown",m,!1),r.forEach((S,b)=>{l.add(S,"focus",p=>{(un(g)||g(h,p))&&C(b)},u)})}function m(h){h.code==="Tab"&&(f=new Date().getTime())}return{init:x}}function ye(n){let r=n;function s(){return r}function t(u){r=a(u)}function o(u){r+=a(u)}function l(u){r-=a(u)}function a(u){return yn(u)?u:u.get()}return{get:s,set:t,add:o,subtract:l}}function gs(n,r){const s=n.scroll==="x"?a:g,t=r.style;let o=null,l=!1;function a(d){return`translate3d(${d}px,0px,0px)`}function g(d){return`translate3d(0px,${d}px,0px)`}function u(d){if(l)return;const h=Rs(n.direction(d));h!==o&&(t.transform=s(h),o=h)}function f(d){l=!d}function x(){l||(t.transform="",r.getAttribute("style")||r.removeAttribute("style"))}return{clear:x,to:u,toggleActive:f}}function ct(n,r,s,t,o,l,a,g,u){const x=Ie(o),m=Ie(o).reverse(),d=p().concat(y());function h(I,v){return I.reduce((T,N)=>T-o[N],v)}function C(I,v){return I.reduce((T,N)=>h(T,v)>0?T.concat([N]):T,[])}function S(I){return l.map((v,T)=>({start:v-t[T]+.5+I,end:v+r-.5+I}))}function b(I,v,T){const N=S(v);return I.map(k=>{const G=T?0:-s,U=T?s:0,X=T?"end":"start",$=N[k][X];return{index:k,loopPoint:$,slideLocation:ye(-1),translate:gs(n,u[k]),target:()=>g.get()>$?G:U}})}function p(){const I=a[0],v=C(m,I);return b(v,s,!1)}function y(){const I=r-a[0]-1,v=C(x,I);return b(v,-s,!0)}function w(){return d.every(({index:I})=>{const v=x.filter(T=>T!==I);return h(v,r)<=.1})}function z(){d.forEach(I=>{const{target:v,translate:T,slideLocation:N}=I,k=v();k!==N.get()&&(T.to(k),N.set(k))})}function D(){d.forEach(I=>I.translate.clear())}return{canLoop:w,clear:D,loop:z,loopPoints:d}}function ut(n,r,s){let t,o=!1;function l(u){if(!s)return;function f(x){for(const m of x)if(m.type==="childList"){u.reInit(),r.emit("slidesChanged");break}}t=new MutationObserver(x=>{o||(un(s)||s(u,x))&&f(x)}),t.observe(n,{childList:!0})}function a(){t&&t.disconnect(),o=!0}return{init:l,destroy:a}}function dt(n,r,s,t){const o={};let l=null,a=null,g,u=!1;function f(){g=new IntersectionObserver(C=>{u||(C.forEach(S=>{const b=r.indexOf(S.target);o[b]=S}),l=null,a=null,s.emit("slidesInView"))},{root:n.parentElement,threshold:t}),r.forEach(C=>g.observe(C))}function x(){g&&g.disconnect(),u=!0}function m(C){return ve(o).reduce((S,b)=>{const p=parseInt(b),{isIntersecting:y}=o[p];return(C&&y||!C&&!y)&&S.push(p),S},[])}function d(C=!0){if(C&&l)return l;if(!C&&a)return a;const S=m(C);return C&&(l=S),C||(a=S),S}return{init:f,destroy:x,get:d}}function gt(n,r,s,t,o,l){const{measureSize:a,startEdge:g,endEdge:u}=n,f=s[0]&&o,x=C(),m=S(),d=s.map(a),h=b();function C(){if(!f)return 0;const y=s[0];return B(r[g]-y[g])}function S(){if(!f)return 0;const y=l.getComputedStyle(te(t));return parseFloat(y.getPropertyValue(`margin-${u}`))}function b(){return s.map((y,w,z)=>{const D=!w,E=wn(z,w);return D?d[w]+x:E?d[w]+m:z[w+1][g]-y[g]}).map(B)}return{slideSizes:d,slideSizesWithGaps:h,startGap:x,endGap:m}}function ft(n,r,s,t,o,l,a,g,u){const{startEdge:f,endEdge:x,direction:m}=n,d=yn(s);function h(p,y){return Ie(p).filter(w=>w%y===0).map(w=>p.slice(w,w+y))}function C(p){return p.length?Ie(p).reduce((y,w,z)=>{const D=te(y)||0,E=D===0,I=w===Pe(p),v=o[f]-l[D][f],T=o[f]-l[w][x],N=!t&&E?m(a):0,k=!t&&I?m(g):0,G=B(T-k-(v+N));return z&&G>r+u&&y.push(w),I&&y.push(p.length),y},[]).map((y,w,z)=>{const D=Math.max(z[w-1]||0);return p.slice(D,y)}):[]}function S(p){return d?h(p,s):C(p)}return{groupSlides:S}}function Ct(n,r,s,t,o,l,a){const{align:g,axis:u,direction:f,startIndex:x,loop:m,duration:d,dragFree:h,dragThreshold:C,inViewThreshold:S,slidesToScroll:b,skipSnaps:p,containScroll:y,watchResize:w,watchSlides:z,watchDrag:D,watchFocus:E}=l,I=2,v=Ks(),T=v.measure(r),N=s.map(v.measure),k=Us(u,f),G=k.measureSize(T),U=Ws(G),X=$s(g,G),$=!m&&!!y,se=m||!!y,{slideSizes:ee,slideSizesWithGaps:W,startGap:J,endGap:Y}=gt(k,T,N,s,se,o),Z=ft(k,G,b,m,T,N,J,Y,I),{snaps:q,snapsAligned:_}=tt(k,X,T,N,Z),ne=-te(q)+te(W),{snapsContained:re,scrollContainLimit:oe}=et(G,ne,_,y,I),R=$?re:_,{limit:V}=nt(ne,R,m),M=ds(Pe(R),x,m),F=M.clone(),L=Ie(s),j=({dragHandler:me,scrollBody:pn,scrollBounds:mn,options:{loop:ze}})=>{ze||mn.constrain(me.pointerDown()),pn.seek()},O=({scrollBody:me,translate:pn,location:mn,offsetLocation:ze,previousLocation:ps,scrollLooper:ms,slideLooper:Ss,dragHandler:hs,animation:bs,eventHandler:An,scrollBounds:xs,options:{loop:Dn}},Ln)=>{const Nn=me.settled(),ys=!xs.shouldConstrain(),On=Dn?Nn:Nn&&ys;On&&!hs.pointerDown()&&(bs.stop(),An.emit("settle")),On||An.emit("scroll");const js=mn.get()*Ln+ps.get()*(1-Ln);ze.set(js),Dn&&(ms.loop(me.direction()),Ss.loop()),pn.to(ze.get())},H=Qs(t,o,()=>j(Cn),me=>O(Cn,me)),K=.68,ae=R[M.get()],le=ye(ae),de=ye(ae),ue=ye(ae),ge=ye(ae),xe=Ys(le,ue,de,ge,d,K),gn=at(m,R,ne,V,ge),fn=it(H,M,F,xe,gn,ge,a),En=st(V),Tn=_e(),fs=dt(r,s,a,S),{slideRegistry:kn}=ot($,y,R,oe,Z,L),Cs=lt(n,s,kn,fn,xe,Tn,a,E),Cn={ownerDocument:t,ownerWindow:o,eventHandler:a,containerRect:T,slideRects:N,animation:H,axis:k,dragHandler:Xs(k,n,t,o,ge,qs(k,o),le,H,fn,xe,gn,M,a,U,h,C,p,K,D),eventStore:Tn,percentOfView:U,index:M,indexPrevious:F,limit:V,location:le,offsetLocation:ue,previousLocation:de,options:l,resizeHandler:Js(r,a,o,s,k,w,v),scrollBody:xe,scrollBounds:Zs(V,ue,ge,xe,U),scrollLooper:rt(ne,V,ue,[le,ue,de,ge]),scrollProgress:En,scrollSnapList:R.map(En.get),scrollSnaps:R,scrollTarget:gn,scrollTo:fn,slideLooper:ct(k,G,ne,ee,W,q,R,ue,s),slideFocus:Cs,slidesHandler:ut(r,a,z),slidesInView:fs,slideIndexes:L,slideRegistry:kn,slidesToScroll:Z,target:ge,translate:gs(k,r)};return Cn}function pt(){let n={},r;function s(f){r=f}function t(f){return n[f]||[]}function o(f){return t(f).forEach(x=>x(r,f)),u}function l(f,x){return n[f]=t(f).concat([x]),u}function a(f,x){return n[f]=t(f).filter(m=>m!==x),u}function g(){n={}}const u={init:s,emit:o,off:a,on:l,clear:g};return u}const mt={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function St(n){function r(l,a){return us(l,a||{})}function s(l){const a=l.breakpoints||{},g=ve(a).filter(u=>n.matchMedia(u).matches).map(u=>a[u]).reduce((u,f)=>r(u,f),{});return r(l,g)}function t(l){return l.map(a=>ve(a.breakpoints||{})).reduce((a,g)=>a.concat(g),[]).map(n.matchMedia)}return{mergeOptions:r,optionsAtMedia:s,optionsMediaQueries:t}}function ht(n){let r=[];function s(l,a){return r=a.filter(({options:g})=>n.optionsAtMedia(g).active!==!1),r.forEach(g=>g.init(l,n)),a.reduce((g,u)=>Object.assign(g,{[u.name]:u}),{})}function t(){r=r.filter(l=>l.destroy())}return{init:s,destroy:t}}function cn(n,r,s){const t=n.ownerDocument,o=t.defaultView,l=St(o),a=ht(l),g=_e(),u=pt(),{mergeOptions:f,optionsAtMedia:x,optionsMediaQueries:m}=l,{on:d,off:h,emit:C}=u,S=k;let b=!1,p,y=f(mt,cn.globalOptions),w=f(y),z=[],D,E,I;function v(){const{container:L,slides:j}=w;E=(hn(L)?n.querySelector(L):L)||n.children[0];const H=hn(j)?E.querySelectorAll(j):j;I=[].slice.call(H||E.children)}function T(L){const j=Ct(n,E,I,t,o,L,u);if(L.loop&&!j.slideLooper.canLoop()){const O=Object.assign({},L,{loop:!1});return T(O)}return j}function N(L,j){b||(y=f(y,L),w=x(y),z=j||z,v(),p=T(w),m([y,...z.map(({options:O})=>O)]).forEach(O=>g.add(O,"change",k)),w.active&&(p.translate.to(p.location.get()),p.animation.init(),p.slidesInView.init(),p.slideFocus.init(F),p.eventHandler.init(F),p.resizeHandler.init(F),p.slidesHandler.init(F),p.options.loop&&p.slideLooper.loop(),E.offsetParent&&I.length&&p.dragHandler.init(F),D=a.init(F,z)))}function k(L,j){const O=Z();G(),N(f({startIndex:O},L),j),u.emit("reInit")}function G(){p.dragHandler.destroy(),p.eventStore.clear(),p.translate.clear(),p.slideLooper.clear(),p.resizeHandler.destroy(),p.slidesHandler.destroy(),p.slidesInView.destroy(),p.animation.destroy(),a.destroy(),g.clear()}function U(){b||(b=!0,g.clear(),G(),u.emit("destroy"),u.clear())}function X(L,j,O){!w.active||b||(p.scrollBody.useBaseFriction().useDuration(j===!0?0:w.duration),p.scrollTo.index(L,O||0))}function $(L){const j=p.index.add(1).get();X(j,L,-1)}function se(L){const j=p.index.add(-1).get();X(j,L,1)}function ee(){return p.index.add(1).get()!==Z()}function W(){return p.index.add(-1).get()!==Z()}function J(){return p.scrollSnapList}function Y(){return p.scrollProgress.get(p.location.get())}function Z(){return p.index.get()}function q(){return p.indexPrevious.get()}function _(){return p.slidesInView.get()}function ne(){return p.slidesInView.get(!1)}function re(){return D}function oe(){return p}function R(){return n}function V(){return E}function M(){return I}const F={canScrollNext:ee,canScrollPrev:W,containerNode:V,internalEngine:oe,destroy:U,off:h,on:d,emit:C,plugins:re,previousScrollSnap:q,reInit:S,rootNode:R,scrollNext:$,scrollPrev:se,scrollProgress:Y,scrollSnapList:J,scrollTo:X,selectedScrollSnap:Z,slideNodes:M,slidesInView:_,slidesNotInView:ne};return N(r,s),setTimeout(()=>u.emit("init"),0),F}cn.globalOptions=void 0;function In(n={},r=[]){const s=A.useRef(n),t=A.useRef(r),[o,l]=A.useState(),[a,g]=A.useState(),u=A.useCallback(()=>{o&&o.reInit(s.current,t.current)},[o]);return A.useEffect(()=>{xn(s.current,n)||(s.current=n,u())},[n,u]),A.useEffect(()=>{Gs(t.current,r)||(t.current=r,u())},[r,u]),A.useEffect(()=>{if(Hs()&&a){cn.globalOptions=In.globalOptions;const f=cn(a,s.current,t.current);return l(f),()=>f.destroy()}else l(void 0)},[a,l]),[g,o]}In.globalOptions=void 0;const[bt,ie]=Is({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),xt=({id:n,align:r="center",autoplay:s=!1,children:t,containScroll:o=!1,controlRef:l,defaultIndex:a=0,delay:g=4e3,dragFree:u=!1,draggable:f=!0,duration:x=25,includeGapInSize:m=!0,index:d,inViewThreshold:h=0,loop:C=!0,orientation:S="horizontal",skipSnaps:b=!1,slideSize:p="100%",slidesToScroll:y=1,stopMouseEnterAutoplay:w=!0,watchDrag:z=f,watchResize:D=!0,watchSlides:E=!0,onChange:I,onScrollProgress:v,...T})=>{const[{gap:N="fallback(4, 1rem)",...k},{vars:G,...U}]=vs(T,_s),[X,$]=ws({defaultValue:a,value:d,onChange:I}),[se,ee]=A.useState([]),[W,J]=A.useState(!1),Y=A.useRef(void 0),Z=S==="vertical",[q,_]=In({align:r,axis:Z?"y":"x",containScroll:o,dragFree:u,duration:x,inViewThreshold:h,loop:C,skipSnaps:b,slidesToScroll:y,startIndex:a,watchDrag:z,watchResize:D,watchSlides:E},[]),ne=A.useId();n??(n=ne);const re=A.useCallback(()=>{if(!_)return;const M=Math.round(Math.max(0,Math.min(1,_.scrollProgress()))*100);v==null||v(M)},[_,v]),oe=A.useCallback(()=>{if(!_)return;const M=_.selectedScrollSnap();$(M)},[_,$]);A.useEffect(()=>{const M=W&&w,F=!(_!=null&&_.canScrollNext());return _&&s&&!M&&!F?Y.current=setInterval(()=>{_.scrollNext()},g):(Y.current&&clearInterval(Y.current),Y.current=void 0),()=>{Y.current&&clearInterval(Y.current)}},[s,g,w,_,W,C,X]),Ee(()=>{if(!_)return;_.reInit();const F=_.scrollSnapList().map((L,j)=>j);ee(F)},[A.Children.toArray(t).length,r,S,C,x,N,y,f,u,h,b,o,p,m]),Ee(()=>{if(!_)return;const F=_.scrollSnapList().map((L,j)=>j);ee(F)},[_]),Ee(()=>{if(_)return _.on("select",oe),_.on("scroll",re),re(),()=>{_.off("select",oe),_.off("scroll",re)}},[_,re]),Ee(()=>{_&&d!==void 0&&_.scrollTo(d)},[d]),Ps(l,_);const R=A.useCallback((M={},F=null)=>({"aria-roledescription":"carousel",...k,...M,ref:F,vars:Ls(G,[{name:"gap",token:"spaces",value:N},{name:"slideSize",token:"sizes",value:p}]),onMouseEnter:we(M.onMouseEnter,()=>{J(!0)}),onMouseLeave:we(M.onMouseLeave,()=>{J(!1)})}),[k,N,p,G]),V=A.useCallback((M={})=>({id:n,"aria-live":s?"off":"polite",...U,...M,ref:q}),[U,n,q,s]);return{id:n,carousel:_,children:t,includeGapInSize:m,indexes:se,orientation:S,selectedIndex:X,slidesToScroll:y,getContainerProps:R,getSlidesProps:V}},yt=({index:n})=>{const{id:r,indexes:s,selectedIndex:t,slidesToScroll:o}=ie();n=Math.floor((n??0)/o);const l=s.length,a=n===t;return{getSlideProps:A.useCallback((u={})=>({id:`${r}-${n+1}`,"aria-label":`${n+1} of ${l}`,"aria-roledescription":"slide","data-index":n,"data-selected":is(a),role:"tabpanel",...u}),[r,n,a,l])}},jt=({operation:n,...r})=>{const{id:s,carousel:t}=ie(),o=n==="prev",l=r.disabled??r.isDisabled??(o?!(t!=null&&t.canScrollPrev()):!(t!=null&&t.canScrollNext())),a=A.useCallback(()=>{t&&(o?t.scrollPrev():t.scrollNext())},[t,o]);return{getControlProps:A.useCallback((u={},f=null)=>({"aria-controls":s,"aria-label":`Go to ${o?"previous":"next"} slide`,...u,ref:f,disabled:l,onClick:we(u.onClick,a)}),[l,s,a,o])}},wt=()=>{const{id:n,carousel:r,indexes:s,orientation:t,selectedIndex:o}=ie(),l=A.useRef(new Map),a=t==="vertical",g=A.useCallback(d=>{var C;const h=l.current.get(d);(C=h==null?void 0:h.current)==null||C.focus(),r==null||r.scrollTo(d)},[r]),u=A.useCallback(d=>h=>{h.stopPropagation(),r==null||r.scrollTo(d)},[r]),f=A.useCallback(d=>h=>{const C=s.length-1,b={ArrowDown:()=>{a&&(d===C?d=0:d+=1,g(d))},ArrowLeft:()=>{a||(d===0?d=C:d-=1,g(d))},ArrowRight:()=>{a||(d===C?d=0:d+=1,g(d))},ArrowUp:()=>{a&&(d===0?d=C:d-=1,g(d))},End:()=>g(C),Home:()=>g(0)}[h.key];b&&(h.preventDefault(),b(h))},[s,g,a]);zs(()=>{l.current.clear()});const x=A.useCallback((d={},h=null)=>({"aria-label":"Sliders","aria-orientation":t,role:"tablist",...d,ref:h}),[t]),m=A.useCallback(({index:d,...h},C)=>{const S=d===o,b=A.createRef();return l.current.set(d,b),{ref:Es(C,b),"aria-controls":`${n}-${d+1}`,"aria-label":`Go to ${d+1} slide`,"aria-selected":S,"data-index":d,"data-selected":is(S),role:"tab",tabIndex:S?0:-1,...h,key:d,onClick:we(h.onClick,u(d)),onKeyDown:we(h.onKeyDown,f(d))}},[u,f,o,n]);return{indexes:s,getIndicatorProps:m,getIndicatorsProps:x}},Se=ce(({className:n,...r},s)=>{const{orientation:t}=ie();return e.jsx(dn,{ref:s,className:Ce("ui-carousel__control--prev",n),icon:e.jsx(ls,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),operation:"prev",...r})});Se.displayName="CarouselControlPrev";Se.__ui__="CarouselControlPrev";const he=ce(({className:n,...r},s)=>{const{orientation:t}=ie();return e.jsx(dn,{ref:s,className:Ce("ui-carousel__control--next",n),icon:e.jsx(ls,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),operation:"next",...r})});he.displayName="CarouselControlNext";he.__ui__="CarouselControlNext";const dn=ce(({className:n,operation:r,...s},t)=>{const{styles:o}=ie(),{getControlProps:l}=jt({operation:r}),a={position:"absolute",zIndex:"fallback(kurillin, 9)",...o.control,...o[r]};return e.jsx(Ns,{className:Ce("ui-carousel__control",n),colorScheme:["whiteAlpha","blackAlpha"],isRounded:!0,__css:a,...l(s,t)})});dn.displayName="CarouselControl";dn.__ui__="CarouselControl";const be=ce(({className:n,component:r,...s},t)=>{const{orientation:o,selectedIndex:l,styles:a}=ie(),{indexes:g,getIndicatorProps:u,getIndicatorsProps:f}=wt(),x={display:"flex",justifyContent:"center",position:"absolute",zIndex:"fallback(kurillin, 9)",...a.indicators,...o==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(pe.div,{className:Ce("ui-carousel__indicators",n),...f(s,t),__css:x,...s,children:g.map(m=>{const d=m===l;if(typeof r=="function"){const h=r({index:m,isSelected:d});if(!h)return null;const C=u({...h.props,index:m});return A.cloneElement(h,C)}else{const{key:h,...C}=u({index:m});return e.jsx(vn,{...C},h)}})})});be.displayName="CarouselIndicators";be.__ui__="CarouselIndicators";const vn=ce(({className:n,...r},s)=>{const{styles:t}=ie(),o={...t.indicator};return e.jsx(pe.button,{ref:s,type:"button",className:Ce("ui-carousel__indicators__indicator",n),__css:o,...r})});vn.displayName="CarouselIndicator";vn.__ui__="CarouselIndicator";const i=ce(({className:n,size:r,...s},t)=>{const{includeGapInSize:o,orientation:l}=ie(),{getSlideProps:a}=yt(s);r??(r="$slideSize");const g={flex:`0 0 ${r}`,position:"relative",...o?{[l==="vertical"?"pb":"pr"]:"$gap"}:{[l==="vertical"?"mb":"mr"]:"$gap"}};return e.jsx(pe.div,{className:Ce("ui-carousel__slide",n),__css:g,...a({}),children:e.jsx(_n,{ref:t,...s})})});i.displayName="CarouselSlide";i.__ui__="CarouselSlide";const _n=ce(({...n},r)=>e.jsx(pe.div,{ref:r,className:"ui-carousel__slide__inner",boxSize:"100%",...n}));_n.displayName="CarouselSlideInner";_n.__ui__="CarouselSlideInner";const P=ce(({h:n,height:r,minH:s,minHeight:t,...o},l)=>{const a=Q(o.orientation),g=Q(o.align),u=Q(o.autoplay),f=Q(o.stopMouseEnterAutoplay),x=Q(o.loop),m=Q(o.duration),d=Q(o.delay),h=Q(o.slidesToScroll),C=Q(o.draggable),S=Q(o.dragFree),b=Q(o.inViewThreshold),p=Q(o.skipSnaps),y=Q(o.containScroll),w=Q(o.includeGapInSize),[z,D]=Os("Carousel",{...o,align:g,autoplay:u,containScroll:y,delay:d,dragFree:S,draggable:C,duration:m,includeGapInSize:w,inViewThreshold:b,loop:x,orientation:a,skipSnaps:p,slidesToScroll:h,stopMouseEnterAutoplay:f}),{className:E,withControls:I=!0,withIndicators:v=!0,controlNextProps:T,controlPrevProps:N,controlProps:k,indicatorsProps:G,innerProps:U,...X}=Ms(D),$=Q(I),se=Q(v),{id:ee,children:W,getContainerProps:J,getSlidesProps:Y,...Z}=xt({...X}),q=Ts(W),_=Sn(q,Se),ne=Sn(q,he),re=Sn(q,be),oe=ks(q,i),R=As(q,Se,he,be,i),V=oe.map((F,L)=>A.cloneElement(F,{index:L})),M={h:"fit-content",position:"relative",...z.container};return n??(n=r),s??(s=t),e.jsx(bt,{value:{id:ee,styles:z,...Z},children:e.jsxs(pe.section,{className:Ce("ui-carousel",E),__css:M,...J({},l),children:[_??($?e.jsx(Se,{...k,...N}):null),ne??($?e.jsx(he,{...k,...T}):null),e.jsx(Pn,{...Y({...Ds({h:n,minH:s}),...U}),children:V}),re??(se?e.jsx(be,{...G}):null),R]})})});P.displayName="Carousel";P.__ui__="Carousel";const Pn=ce(({...n},r)=>{const s={h:"fit-content",overflow:"hidden",w:"100%"};return e.jsx(pe.div,{ref:r,className:"ui-carousel__sliders",__css:s,children:e.jsx(zn,{...n})})});Pn.displayName="CarouselSlides";Pn.__ui__="CarouselSlides";const zn=({...n})=>{const{includeGapInSize:r,orientation:s,styles:t}=ie(),o={display:"flex",flexDirection:s==="vertical"?"column":"row",...t.inner,...r?{[s==="vertical"?"mb":"mr"]:"calc($gap * -1)"}:{}};return e.jsx(pe.div,{className:"ui-carousel__sliders__inner",__css:o,...n})};zn.displayName="CarouselSlidesInner";zn.__ui__="CarouselSlidesInner";const to={component:P,title:"Components / Data Display / Carousel"},Be=()=>e.jsxs(P,{children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{size:"sm",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"md",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"lg",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{size:"xl",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),He=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{orientation:"horizontal",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{orientation:"vertical",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),Ge=()=>e.jsxs(P,{defaultIndex:1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Ve=()=>e.jsxs(P,{gap:0,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(P,{duration:60,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),$e=()=>e.jsxs(P,{slideSize:"50%",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,size:"100%",bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Qe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{align:"center",slideSize:"50%",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{align:"start",slideSize:"50%",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{align:"end",slideSize:"50%",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),Ue=()=>e.jsxs(P,{loop:!1,slideSize:"33.3%",slidesToScroll:3,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"}),e.jsx(i,{as:c,bg:"primary",children:"5"}),e.jsx(i,{as:c,bg:"secondary",children:"6"}),e.jsx(i,{as:c,bg:"danger",children:"7"}),e.jsx(i,{as:c,bg:"primary",children:"8"}),e.jsx(i,{as:c,bg:"secondary",children:"9"})]}),Xe=()=>e.jsxs(P,{align:"start",h:"auto",slideSize:"50%",slidesToScroll:2,children:[e.jsxs(i,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(i,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(i,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(i,{as:Te,variant:"outline",children:[e.jsx(ke,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(Ae,{children:[e.jsx(Ne,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(Oe,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(De,{children:e.jsx(Me,{colorScheme:"primary",children:"Wikipedia"})})]})]}),qe=()=>e.jsxs(P,{autoplay:!0,loop:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Ke=()=>e.jsxs(P,{autoplay:!0,delay:1e3,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),We=()=>e.jsxs(P,{dragFree:!0,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Je=()=>{const[n,r]=A.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{dragFree:!0,loop:!1,onScrollProgress:r,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsx(Bs,{colorScheme:"gray",value:n})]})},Ye=()=>e.jsxs(P,{includeGapInSize:!1,slideSize:"50%",children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),Ze=()=>e.jsxs(P,{loop:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),en=()=>e.jsxs(P,{draggable:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),nn=()=>e.jsxs(P,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),rn=()=>e.jsxs(P,{withControls:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),sn=()=>e.jsxs(P,{withIndicators:!1,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),tn=()=>e.jsxs(P,{watchDrag:(n,r)=>(console.log("drag",n,r),!0),watchResize:(n,r)=>(console.log("resized",n,r),!0),watchSlides:(n,r)=>(console.log("slides updated",n,r),!0),children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),on=()=>{const[n,r]=A.useState(0);return e.jsxs(P,{draggable:!1,index:n,onChange:r,children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})},an=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{controlProps:{icon:e.jsx(cs,{})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{controlPrevProps:{icon:e.jsx(Mn,{})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{controlNextProps:{icon:e.jsx(Bn,{})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{children:[e.jsx(Se,{icon:e.jsx(Mn,{})}),e.jsx(he,{icon:e.jsx(Bn,{})}),e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]})]}),ln=()=>e.jsxs(e.Fragment,{children:[e.jsxs(P,{indicatorsProps:{bottom:"8",component:({isSelected:n})=>e.jsx(cs,{color:n?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer",fontSize:"2xl"})},children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"})]}),e.jsxs(P,{children:[e.jsx(i,{as:c,bg:"primary",children:"1"}),e.jsx(i,{as:c,bg:"secondary",children:"2"}),e.jsx(i,{as:c,bg:"warning",children:"3"}),e.jsx(i,{as:c,bg:"danger",children:"4"}),e.jsx(be,{sx:{"& > *":{transitionDuration:"slower",transitionProperty:"width",w:"4",_selected:{w:"12"}}}})]})]});var Rn,$n,Qn;Be.parameters={...Be.parameters,docs:{...(Rn=Be.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
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
}`,...(er=(Zn=Ge.parameters)==null?void 0:Zn.docs)==null?void 0:er.source}}};var nr,rr,sr;Ve.parameters={...Ve.parameters,docs:{...(nr=Ve.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
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
}`,...(sr=(rr=Ve.parameters)==null?void 0:rr.docs)==null?void 0:sr.source}}};var tr,or,ar;Re.parameters={...Re.parameters,docs:{...(tr=Re.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
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
}`,...(ar=(or=Re.parameters)==null?void 0:or.docs)==null?void 0:ar.source}}};var ir,lr,cr;$e.parameters={...$e.parameters,docs:{...(ir=$e.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
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
}`,...(Fr=(Br=en.parameters)==null?void 0:Br.docs)==null?void 0:Fr.source}}};var Hr,Gr,Vr;nn.parameters={...nn.parameters,docs:{...(Hr=nn.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
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
}`,...(Vr=(Gr=nn.parameters)==null?void 0:Gr.docs)==null?void 0:Vr.source}}};var Rr,$r,Qr;rn.parameters={...rn.parameters,docs:{...(Rr=rn.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
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
        isSelected
      }) => <GhostIcon color={isSelected ? "whiteAlpha.700" : "whiteAlpha.400"} cursor="pointer" fontSize="2xl" />
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
}`,...(as=(os=ln.parameters)==null?void 0:os.docs)==null?void 0:as.source}}};const oo=["basic","withSize","withOrientation","withDefaultIndex","withGap","withDuration","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","useMethods","customControl","customControlButton","customIndicators"];export{oo as __namedExportsOrder,Be as basic,on as customControl,an as customControlButton,ln as customIndicators,to as default,rn as disabledControlButton,en as disabledDraggable,Ye as disabledIncludeGapInSize,sn as disabledIndicators,Ze as disabledLoop,nn as disabledStopMouseEnterAutoplay,tn as useMethods,Qe as withAlign,qe as withAutoplay,Xe as withCard,Ge as withDefaultIndex,Ke as withDelay,We as withDragFree,Re as withDuration,Ve as withGap,He as withOrientation,Je as withScrollProgress,Fe as withSize,$e as withSlideSize,Ue as withSlidesToScroll};
