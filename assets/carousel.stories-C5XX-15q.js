import{n as sr,o as lr,I as ir,d as ar,r as S,c as cr,G as ur,a0 as pr,a1 as gr,a as hr,a2 as dr,N as vt,h as ye,m as it,b as ke,g as wr,j as r,s as jr,U as ct,Z as $o,C as fr,V as ut,W as mr,Q as pe,T as kt}from"./iframe-BIJNUwA0.js";import{P as ot}from"./props-table-lmXFHSBz.js";import{I as G}from"./image-D2b4Db37.js";import{P as br}from"./progress-D9r6BbAs.js";import{A as xr}from"./arrow-left-icon-BO274L4N.js";import{u as yr}from"./index-CfMfaZt0.js";import{u as Cr}from"./index-CH90kZaX.js";import{C as Sr}from"./chevron-left-icon-DFzGlPuD.js";import{C as Ir}from"./chevron-right-icon-CnYRLxEF.js";import{A as vr}from"./arrow-right-icon-C4ofDbRs.js";import{B as at}from"./button-group-ggAKX6X5.js";import"./preload-helper-C1FmrZbK.js";import"./grid-ZAyucFZG.js";import"./grid-item-DOf84ZDr.js";import"./for-Cpsr9B86.js";import"./flex-KEdsfNWm.js";import"./heading-Bz9uY6e0.js";import"./use-progress-0VXBKwhv.js";import"./number-CcP_arM8.js";import"./group-VmPLRg4N.js";import"./index-0kQpDINk.js";import"./use-breakpoint-Des1U5dl.js";import"./use-breakpoint-value-Ci56feJn.js";import"./use-color-mode-value-DllOdTyO.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Tr=sr("circle",kr),zr=lr(ir)({as:Tr}),Lr=ar({base:{indicator:{bg:"colorScheme.solid/40",cursor:"pointer",rounded:"full",transitionDuration:"moderate",transitionProperty:"common",_horizontal:{w:"10"},_vertical:{h:"10"},_hover:{_notSelected:{bg:"colorScheme.solid/70"}},_selected:{bg:"colorScheme.solid"},_disabled:{layerStyle:"disabled"}},indicators:{display:"flex",gap:"2",justifyContent:"center",position:"absolute",zIndex:"yamcha",_horizontal:{bottom:"4",flexDirection:"row",h:"2",left:"50%",px:"4",transform:"translateX(-50%)",w:"full"},_vertical:{flexDirection:"column",h:"full",py:"4",right:"4",top:"50%",transform:"translateY(-50%)",w:"2"}},item:{"&:not([data-include-gap-in-size])":{_horizontal:{mr:"{slide-gap}"},_vertical:{mb:"{slide-gap}"}},"&[data-include-gap-in-size]":{_horizontal:{pr:"{slide-gap}"},_vertical:{pb:"{slide-gap}"}},boxSize:"full",flex:"0 0 {slide-size}",position:"relative"},list:{"&[data-include-gap-in-size]":{_horizontal:{mr:"calc({slide-gap} * -1)"},_vertical:{mb:"calc({slide-gap} * -1)"}},display:"flex",h:"full",_horizontal:{flexDirection:"row"},_vertical:{flexDirection:"column"}},next:{_horizontal:{right:"4"},_vertical:{bottom:"4"}},prev:{_horizontal:{left:"4"},_vertical:{top:"4"}},root:{"--slide-gap":"spaces.4","--slide-size":"sizes.full",overflow:"hidden",position:"relative",w:"full"},trigger:{position:"absolute",zIndex:"kurillin",_horizontal:{top:"50%",transform:"translateY(-50%)"},_vertical:{left:"50%",transform:"translateX(-50%) rotate(90deg)"}}},sizes:{sm:{root:{h:"sm"}},md:{root:{h:"md"}},lg:{root:{h:"lg"}}},defaultProps:{size:"md"}});function Mr(e){return Object.prototype.toString.call(e)==="[object Object]"}function Tt(e){return Mr(e)||Array.isArray(e)}function Rr(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ht(e,o){const t=Object.keys(e),s=Object.keys(o);if(t.length!==s.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),n=JSON.stringify(Object.keys(o.breakpoints||{}));return i!==n?!1:t.every(l=>{const u=e[l],a=o[l];return typeof u=="function"?`${u}`==`${a}`:!Tt(u)||!Tt(a)?u===a:ht(u,a)})}function zt(e){return e.concat().sort((o,t)=>o.name>t.name?1:-1).map(o=>o.options)}function Pr(e,o){if(e.length!==o.length)return!1;const t=zt(e),s=zt(o);return t.every((i,n)=>{const l=s[n];return ht(i,l)})}function dt(e){return typeof e=="number"}function pt(e){return typeof e=="string"}function rt(e){return typeof e=="boolean"}function Lt(e){return Object.prototype.toString.call(e)==="[object Object]"}function B(e){return Math.abs(e)}function wt(e){return Math.sign(e)}function ve(e,o){return B(e-o)}function Fr(e,o){if(e===0||o===0||B(e)<=B(o))return 0;const t=ve(B(e),B(o));return B(t/e)}function Er(e){return Math.round(e*100)/100}function Te(e){return ze(e).map(Number)}function ce(e){return e[Me(e)]}function Me(e){return Math.max(0,e.length-1)}function jt(e,o){return o===Me(e)}function Mt(e,o=0){return Array.from(Array(e),(t,s)=>o+s)}function ze(e){return Object.keys(e)}function Uo(e,o){return[e,o].reduce((t,s)=>(ze(s).forEach(i=>{const n=t[i],l=s[i],u=Lt(n)&&Lt(l);t[i]=u?Uo(n,l):l}),t),{})}function gt(e,o){return typeof o.MouseEvent<"u"&&e instanceof o.MouseEvent}function Ar(e,o){const t={start:s,center:i,end:n};function s(){return 0}function i(a){return n(a)/2}function n(a){return o-a}function l(a,c){return pt(e)?t[e](a):e(o,a,c)}return{measure:l}}function Le(){let e=[];function o(i,n,l,u={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(n,l,u),a=()=>i.removeEventListener(n,l,u);else{const c=i;c.addListener(l),a=()=>c.removeListener(l)}return e.push(a),s}function t(){e=e.filter(i=>i())}const s={add:o,clear:t};return s}function Dr(e,o,t,s){const i=Le(),n=1e3/60;let l=null,u=0,a=0;function c(){i.add(e,"visibilitychange",()=>{e.hidden&&g()})}function j(){f(),i.clear()}function h(m){if(!a)return;l||(l=m,t(),t());const p=m-l;for(l=m,u+=p;u>=n;)t(),u-=n;const b=u/n;s(b),a&&(a=o.requestAnimationFrame(h))}function d(){a||(a=o.requestAnimationFrame(h))}function f(){o.cancelAnimationFrame(a),l=null,u=0,a=0}function g(){l=null,u=0}return{init:c,destroy:j,start:d,stop:f,update:t,render:s}}function Nr(e,o){const t=o==="rtl",s=e==="y",i=s?"y":"x",n=s?"x":"y",l=!s&&t?-1:1,u=j(),a=h();function c(g){const{height:w,width:m}=g;return s?w:m}function j(){return s?"top":t?"right":"left"}function h(){return s?"bottom":t?"left":"right"}function d(g){return g*l}return{scroll:i,cross:n,startEdge:u,endEdge:a,measureSize:c,direction:d}}function be(e=0,o=0){const t=B(e-o);function s(c){return c<e}function i(c){return c>o}function n(c){return s(c)||i(c)}function l(c){return n(c)?s(c)?e:o:c}function u(c){return t?c-t*Math.ceil((c-o)/t):c}return{length:t,max:o,min:e,constrain:l,reachedAny:n,reachedMax:i,reachedMin:s,removeOffset:u}}function Ko(e,o,t){const{constrain:s}=be(0,e),i=e+1;let n=l(o);function l(d){return t?B((i+d)%i):s(d)}function u(){return n}function a(d){return n=l(d),h}function c(d){return j().set(u()+d)}function j(){return Ko(e,u(),t)}const h={get:u,set:a,add:c,clone:j};return h}function Br(e,o,t,s,i,n,l,u,a,c,j,h,d,f,g,w,m,p,b){const{cross:I,direction:M}=e,E=["INPUT","SELECT","TEXTAREA"],T={passive:!1},k=Le(),v=Le(),z=be(50,225).constrain(f.measure(20)),D={mouse:300,touch:400},P={mouse:500,touch:600},A=g?43:25;let ee=!1,te=0,oe=0,J=!1,le=!1,re=!1,X=!1;function we(y){if(!b)return;function F(Q){(rt(b)||b(y,Q))&&je(Q)}const V=o;k.add(V,"dragstart",Q=>Q.preventDefault(),T).add(V,"touchmove",()=>{},T).add(V,"touchend",()=>{}).add(V,"touchstart",F).add(V,"mousedown",F).add(V,"touchcancel",K).add(V,"contextmenu",K).add(V,"click",W,!0)}function Z(){k.clear(),v.clear()}function ge(){const y=X?t:o;v.add(y,"touchmove",x,T).add(y,"touchend",K).add(y,"mousemove",x,T).add(y,"mouseup",K)}function ie(y){const F=y.nodeName||"";return E.includes(F)}function ne(){return(g?P:D)[X?"mouse":"touch"]}function me(y,F){const V=h.add(wt(y)*-1),Q=j.byDistance(y,!g).distance;return g||B(y)<z?Q:m&&F?Q*.5:j.byIndex(V.get(),0).distance}function je(y){const F=gt(y,s);X=F,re=g&&F&&!y.buttons&&ee,ee=ve(i.get(),l.get())>=2,!(F&&y.button!==0)&&(ie(y.target)||(J=!0,n.pointerDown(y),c.useFriction(0).useDuration(0),i.set(l),ge(),te=n.readPoint(y),oe=n.readPoint(y,I),d.emit("pointerDown")))}function x(y){if(!gt(y,s)&&y.touches.length>=2)return K(y);const V=n.readPoint(y),Q=n.readPoint(y,I),se=ve(V,te),ae=ve(Q,oe);if(!le&&!X&&(!y.cancelable||(le=se>ae,!le)))return K(y);const he=n.pointerMove(y);se>w&&(re=!0),c.useFriction(.3).useDuration(.75),u.start(),i.add(M(he)),y.preventDefault()}function K(y){const V=j.byDistance(0,!1).index!==h.get(),Q=n.pointerUp(y)*ne(),se=me(M(Q),V),ae=Fr(Q,se),he=A-10*ae,ue=p+ae/50;le=!1,J=!1,v.clear(),c.useDuration(he).useFriction(ue),a.distance(se,!g),X=!1,d.emit("pointerUp")}function W(y){re&&(y.stopPropagation(),y.preventDefault(),re=!1)}function Y(){return J}return{init:we,destroy:Z,pointerDown:Y}}function Gr(e,o){let s,i;function n(h){return h.timeStamp}function l(h,d){const g=`client${(d||e.scroll)==="x"?"X":"Y"}`;return(gt(h,o)?h:h.touches[0])[g]}function u(h){return s=h,i=h,l(h)}function a(h){const d=l(h)-l(i),f=n(h)-n(s)>170;return i=h,f&&(s=h),d}function c(h){if(!s||!i)return 0;const d=l(i)-l(s),f=n(h)-n(s),g=n(h)-n(i)>170,w=d/f;return f&&!g&&B(w)>.1?w:0}return{pointerDown:u,pointerMove:a,pointerUp:c,readPoint:l}}function Or(){function e(t){const{offsetTop:s,offsetLeft:i,offsetWidth:n,offsetHeight:l}=t;return{top:s,right:i+n,bottom:s+l,left:i,width:n,height:l}}return{measure:e}}function _r(e){function o(s){return e*(s/100)}return{measure:o}}function Vr(e,o,t,s,i,n,l){const u=[e].concat(s);let a,c,j=[],h=!1;function d(m){return i.measureSize(l.measure(m))}function f(m){if(!n)return;c=d(e),j=s.map(d);function p(b){for(const I of b){if(h)return;const M=I.target===e,E=s.indexOf(I.target),T=M?c:j[E],k=d(M?e:s[E]);if(B(k-T)>=.5){m.reInit(),o.emit("resize");break}}}a=new ResizeObserver(b=>{(rt(n)||n(m,b))&&p(b)}),t.requestAnimationFrame(()=>{u.forEach(b=>a.observe(b))})}function g(){h=!0,a&&a.disconnect()}return{init:f,destroy:g}}function Hr(e,o,t,s,i,n){let l=0,u=0,a=i,c=n,j=e.get(),h=0;function d(){const T=s.get()-e.get(),k=!a;let v=0;return k?(l=0,t.set(s),e.set(s),v=T):(t.set(e),l+=T/a,l*=c,j+=l,e.add(l),v=j-h),u=wt(v),h=j,E}function f(){const T=s.get()-o.get();return B(T)<.001}function g(){return a}function w(){return u}function m(){return l}function p(){return I(i)}function b(){return M(n)}function I(T){return a=T,E}function M(T){return c=T,E}const E={direction:w,duration:g,velocity:m,seek:d,settled:f,useBaseFriction:b,useBaseDuration:p,useFriction:M,useDuration:I};return E}function $r(e,o,t,s,i){const n=i.measure(10),l=i.measure(50),u=be(.1,.99);let a=!1;function c(){return!(a||!e.reachedAny(t.get())||!e.reachedAny(o.get()))}function j(f){if(!c())return;const g=e.reachedMin(o.get())?"min":"max",w=B(e[g]-o.get()),m=t.get()-o.get(),p=u.constrain(w/l);t.subtract(m*p),!f&&B(m)<n&&(t.set(e.constrain(t.get())),s.useDuration(25).useBaseFriction())}function h(f){a=!f}return{shouldConstrain:c,constrain:j,toggleActive:h}}function Ur(e,o,t,s,i){const n=be(-o+e,0),l=h(),u=j(),a=d();function c(g,w){return ve(g,w)<=1}function j(){const g=l[0],w=ce(l),m=l.lastIndexOf(g),p=l.indexOf(w)+1;return be(m,p)}function h(){return t.map((g,w)=>{const{min:m,max:p}=n,b=n.constrain(g),I=!w,M=jt(t,w);return I?p:M||c(m,b)?m:c(p,b)?p:b}).map(g=>parseFloat(g.toFixed(3)))}function d(){if(o<=e+i)return[n.max];if(s==="keepSnaps")return l;const{min:g,max:w}=u;return l.slice(g,w)}return{snapsContained:a,scrollContainLimit:u}}function Kr(e,o,t){const s=o[0],i=t?s-e:ce(o);return{limit:be(i,s)}}function qr(e,o,t,s){const n=o.min+.1,l=o.max+.1,{reachedMin:u,reachedMax:a}=be(n,l);function c(d){return d===1?a(t.get()):d===-1?u(t.get()):!1}function j(d){if(!c(d))return;const f=e*(d*-1);s.forEach(g=>g.add(f))}return{loop:j}}function Qr(e){const{max:o,length:t}=e;function s(n){const l=n-o;return t?l/-t:0}return{get:s}}function Xr(e,o,t,s,i){const{startEdge:n,endEdge:l}=e,{groupSlides:u}=i,a=h().map(o.measure),c=d(),j=f();function h(){return u(s).map(w=>ce(w)[l]-w[0][n]).map(B)}function d(){return s.map(w=>t[n]-w[n]).map(w=>-B(w))}function f(){return u(c).map(w=>w[0]).map((w,m)=>w+a[m])}return{snaps:c,snapsAligned:j}}function Yr(e,o,t,s,i,n){const{groupSlides:l}=i,{min:u,max:a}=s,c=j();function j(){const d=l(n),f=!e||o==="keepSnaps";return t.length===1?[n]:f?d:d.slice(u,a).map((g,w,m)=>{const p=!w,b=jt(m,w);if(p){const I=ce(m[0])+1;return Mt(I)}if(b){const I=Me(n)-ce(m)[0]+1;return Mt(I,ce(m)[0])}return g})}return{slideRegistry:c}}function Jr(e,o,t,s,i){const{reachedAny:n,removeOffset:l,constrain:u}=s;function a(g){return g.concat().sort((w,m)=>B(w)-B(m))[0]}function c(g){const w=e?l(g):u(g),m=o.map((b,I)=>({diff:j(b-w,0),index:I})).sort((b,I)=>B(b.diff)-B(I.diff)),{index:p}=m[0];return{index:p,distance:w}}function j(g,w){const m=[g,g+t,g-t];if(!e)return g;if(!w)return a(m);const p=m.filter(b=>wt(b)===w);return p.length?a(p):ce(m)-t}function h(g,w){const m=o[g]-i.get(),p=j(m,w);return{index:g,distance:p}}function d(g,w){const m=i.get()+g,{index:p,distance:b}=c(m),I=!e&&n(m);if(!w||I)return{index:p,distance:g};const M=o[p]-b,E=g+j(M,0);return{index:p,distance:E}}return{byDistance:d,byIndex:h,shortcut:j}}function Zr(e,o,t,s,i,n,l){function u(h){const d=h.distance,f=h.index!==o.get();n.add(d),d&&(s.duration()?e.start():(e.update(),e.render(1),e.update())),f&&(t.set(o.get()),o.set(h.index),l.emit("select"))}function a(h,d){const f=i.byDistance(h,d);u(f)}function c(h,d){const f=o.clone().set(h),g=i.byIndex(f.get(),d);u(g)}return{distance:a,index:c}}function Wr(e,o,t,s,i,n,l,u){const a={passive:!0,capture:!0};let c=0;function j(f){if(!u)return;function g(w){if(new Date().getTime()-c>10)return;l.emit("slideFocusStart"),e.scrollLeft=0;const b=t.findIndex(I=>I.includes(w));dt(b)&&(i.useDuration(0),s.index(b,0),l.emit("slideFocus"))}n.add(document,"keydown",h,!1),o.forEach((w,m)=>{n.add(w,"focus",p=>{(rt(u)||u(f,p))&&g(m)},a)})}function h(f){f.code==="Tab"&&(c=new Date().getTime())}return{init:j}}function Ie(e){let o=e;function t(){return o}function s(a){o=l(a)}function i(a){o+=l(a)}function n(a){o-=l(a)}function l(a){return dt(a)?a:a.get()}return{get:t,set:s,add:i,subtract:n}}function qo(e,o){const t=e.scroll==="x"?l:u,s=o.style;let i=null,n=!1;function l(d){return`translate3d(${d}px,0px,0px)`}function u(d){return`translate3d(0px,${d}px,0px)`}function a(d){if(n)return;const f=Er(e.direction(d));f!==i&&(s.transform=t(f),i=f)}function c(d){n=!d}function j(){n||(s.transform="",o.getAttribute("style")||o.removeAttribute("style"))}return{clear:j,to:a,toggleActive:c}}function en(e,o,t,s,i,n,l,u,a){const j=Te(i),h=Te(i).reverse(),d=p().concat(b());function f(k,v){return k.reduce((z,D)=>z-i[D],v)}function g(k,v){return k.reduce((z,D)=>f(z,v)>0?z.concat([D]):z,[])}function w(k){return n.map((v,z)=>({start:v-s[z]+.5+k,end:v+o-.5+k}))}function m(k,v,z){const D=w(v);return k.map(P=>{const A=z?0:-t,ee=z?t:0,te=z?"end":"start",oe=D[P][te];return{index:P,loopPoint:oe,slideLocation:Ie(-1),translate:qo(e,a[P]),target:()=>u.get()>oe?A:ee}})}function p(){const k=l[0],v=g(h,k);return m(v,t,!1)}function b(){const k=o-l[0]-1,v=g(j,k);return m(v,-t,!0)}function I(){return d.every(({index:k})=>{const v=j.filter(z=>z!==k);return f(v,o)<=.1})}function M(){d.forEach(k=>{const{target:v,translate:z,slideLocation:D}=k,P=v();P!==D.get()&&(z.to(P),D.set(P))})}function E(){d.forEach(k=>k.translate.clear())}return{canLoop:I,clear:E,loop:M,loopPoints:d}}function tn(e,o,t){let s,i=!1;function n(a){if(!t)return;function c(j){for(const h of j)if(h.type==="childList"){a.reInit(),o.emit("slidesChanged");break}}s=new MutationObserver(j=>{i||(rt(t)||t(a,j))&&c(j)}),s.observe(e,{childList:!0})}function l(){s&&s.disconnect(),i=!0}return{init:n,destroy:l}}function on(e,o,t,s){const i={};let n=null,l=null,u,a=!1;function c(){u=new IntersectionObserver(g=>{a||(g.forEach(w=>{const m=o.indexOf(w.target);i[m]=w}),n=null,l=null,t.emit("slidesInView"))},{root:e.parentElement,threshold:s}),o.forEach(g=>u.observe(g))}function j(){u&&u.disconnect(),a=!0}function h(g){return ze(i).reduce((w,m)=>{const p=parseInt(m),{isIntersecting:b}=i[p];return(g&&b||!g&&!b)&&w.push(p),w},[])}function d(g=!0){if(g&&n)return n;if(!g&&l)return l;const w=h(g);return g&&(n=w),g||(l=w),w}return{init:c,destroy:j,get:d}}function rn(e,o,t,s,i,n){const{measureSize:l,startEdge:u,endEdge:a}=e,c=t[0]&&i,j=g(),h=w(),d=t.map(l),f=m();function g(){if(!c)return 0;const b=t[0];return B(o[u]-b[u])}function w(){if(!c)return 0;const b=n.getComputedStyle(ce(s));return parseFloat(b.getPropertyValue(`margin-${a}`))}function m(){return t.map((b,I,M)=>{const E=!I,T=jt(M,I);return E?d[I]+j:T?d[I]+h:M[I+1][u]-b[u]}).map(B)}return{slideSizes:d,slideSizesWithGaps:f,startGap:j,endGap:h}}function nn(e,o,t,s,i,n,l,u,a){const{startEdge:c,endEdge:j,direction:h}=e,d=dt(t);function f(p,b){return Te(p).filter(I=>I%b===0).map(I=>p.slice(I,I+b))}function g(p){return p.length?Te(p).reduce((b,I,M)=>{const E=ce(b)||0,T=E===0,k=I===Me(p),v=i[c]-n[E][c],z=i[c]-n[I][j],D=!s&&T?h(l):0,P=!s&&k?h(u):0,A=B(z-P-(v+D));return M&&A>o+a&&b.push(I),k&&b.push(p.length),b},[]).map((b,I,M)=>{const E=Math.max(M[I-1]||0);return p.slice(E,b)}):[]}function w(p){return d?f(p,t):g(p)}return{groupSlides:w}}function sn(e,o,t,s,i,n,l){const{align:u,axis:a,direction:c,startIndex:j,loop:h,duration:d,dragFree:f,dragThreshold:g,inViewThreshold:w,slidesToScroll:m,skipSnaps:p,containScroll:b,watchResize:I,watchSlides:M,watchDrag:E,watchFocus:T}=n,k=2,v=Or(),z=v.measure(o),D=t.map(v.measure),P=Nr(a,c),A=P.measureSize(z),ee=_r(A),te=Ar(u,A),oe=!h&&!!b,J=h||!!b,{slideSizes:le,slideSizesWithGaps:re,startGap:X,endGap:we}=rn(P,z,D,t,J,i),Z=nn(P,A,m,h,z,D,X,we,k),{snaps:ge,snapsAligned:ie}=Xr(P,te,z,D,Z),ne=-ce(ge)+ce(re),{snapsContained:me,scrollContainLimit:je}=Ur(A,ne,ie,b,k),x=oe?me:ie,{limit:K}=Kr(ne,x,h),W=Ko(Me(x),j,h),Y=W.clone(),R=Te(t),y=({dragHandler:xe,scrollBody:st,scrollBounds:lt,options:{loop:Pe}})=>{Pe||lt.constrain(xe.pointerDown()),st.seek()},F=({scrollBody:xe,translate:st,location:lt,offsetLocation:Pe,previousLocation:Jo,scrollLooper:Zo,slideLooper:Wo,dragHandler:er,animation:tr,eventHandler:bt,scrollBounds:or,options:{loop:xt}},yt)=>{const Ct=xe.settled(),rr=!or.shouldConstrain(),St=xt?Ct:Ct&&rr,It=St&&!er.pointerDown();It&&tr.stop();const nr=lt.get()*yt+Jo.get()*(1-yt);Pe.set(nr),xt&&(Zo.loop(xe.direction()),Wo.loop()),st.to(Pe.get()),It&&bt.emit("settle"),St||bt.emit("scroll")},V=Dr(s,i,()=>y(nt),xe=>F(nt,xe)),Q=.68,se=x[W.get()],ae=Ie(se),he=Ie(se),ue=Ie(se),C=Ie(se),L=Hr(ae,ue,he,C,d,Q),q=Jr(h,x,ne,K,C),de=Zr(V,W,Y,L,q,C,l),fe=Qr(K),Re=Le(),Xo=on(o,t,l,w),{slideRegistry:mt}=Yr(oe,b,x,je,Z,R),Yo=Wr(e,t,mt,de,L,Re,l,T),nt={ownerDocument:s,ownerWindow:i,eventHandler:l,containerRect:z,slideRects:D,animation:V,axis:P,dragHandler:Br(P,e,s,i,C,Gr(P,i),ae,V,de,L,q,W,l,ee,f,g,p,Q,E),eventStore:Re,percentOfView:ee,index:W,indexPrevious:Y,limit:K,location:ae,offsetLocation:ue,previousLocation:he,options:n,resizeHandler:Vr(o,l,i,t,P,I,v),scrollBody:L,scrollBounds:$r(K,ue,C,L,ee),scrollLooper:qr(ne,K,ue,[ae,ue,he,C]),scrollProgress:fe,scrollSnapList:x.map(fe.get),scrollSnaps:x,scrollTarget:q,scrollTo:de,slideLooper:en(P,A,ne,le,re,ge,x,ue,t),slideFocus:Yo,slidesHandler:tn(o,l,M),slidesInView:Xo,slideIndexes:R,slideRegistry:mt,slidesToScroll:Z,target:C,translate:qo(P,o)};return nt}function ln(){let e={},o;function t(c){o=c}function s(c){return e[c]||[]}function i(c){return s(c).forEach(j=>j(o,c)),a}function n(c,j){return e[c]=s(c).concat([j]),a}function l(c,j){return e[c]=s(c).filter(h=>h!==j),a}function u(){e={}}const a={init:t,emit:i,off:l,on:n,clear:u};return a}const an={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function cn(e){function o(n,l){return Uo(n,l||{})}function t(n){const l=n.breakpoints||{},u=ze(l).filter(a=>e.matchMedia(a).matches).map(a=>l[a]).reduce((a,c)=>o(a,c),{});return o(n,u)}function s(n){return n.map(l=>ze(l.breakpoints||{})).reduce((l,u)=>l.concat(u),[]).map(e.matchMedia)}return{mergeOptions:o,optionsAtMedia:t,optionsMediaQueries:s}}function un(e){let o=[];function t(n,l){return o=l.filter(({options:u})=>e.optionsAtMedia(u).active!==!1),o.forEach(u=>u.init(n,e)),l.reduce((u,a)=>Object.assign(u,{[a.name]:a}),{})}function s(){o=o.filter(n=>n.destroy())}return{init:t,destroy:s}}function tt(e,o,t){const s=e.ownerDocument,i=s.defaultView,n=cn(i),l=un(n),u=Le(),a=ln(),{mergeOptions:c,optionsAtMedia:j,optionsMediaQueries:h}=n,{on:d,off:f,emit:g}=a,w=P;let m=!1,p,b=c(an,tt.globalOptions),I=c(b),M=[],E,T,k;function v(){const{container:R,slides:y}=I;T=(pt(R)?e.querySelector(R):R)||e.children[0];const V=pt(y)?T.querySelectorAll(y):y;k=[].slice.call(V||T.children)}function z(R){const y=sn(e,T,k,s,i,R,a);if(R.loop&&!y.slideLooper.canLoop()){const F=Object.assign({},R,{loop:!1});return z(F)}return y}function D(R,y){m||(b=c(b,R),I=j(b),M=y||M,v(),p=z(I),h([b,...M.map(({options:F})=>F)]).forEach(F=>u.add(F,"change",P)),I.active&&(p.translate.to(p.location.get()),p.animation.init(),p.slidesInView.init(),p.slideFocus.init(Y),p.eventHandler.init(Y),p.resizeHandler.init(Y),p.slidesHandler.init(Y),p.options.loop&&p.slideLooper.loop(),T.offsetParent&&k.length&&p.dragHandler.init(Y),E=l.init(Y,M)))}function P(R,y){const F=Z();A(),D(c({startIndex:F},R),y),a.emit("reInit")}function A(){p.dragHandler.destroy(),p.eventStore.clear(),p.translate.clear(),p.slideLooper.clear(),p.resizeHandler.destroy(),p.slidesHandler.destroy(),p.slidesInView.destroy(),p.animation.destroy(),l.destroy(),u.clear()}function ee(){m||(m=!0,u.clear(),A(),a.emit("destroy"),a.clear())}function te(R,y,F){!I.active||m||(p.scrollBody.useBaseFriction().useDuration(y===!0?0:I.duration),p.scrollTo.index(R,F||0))}function oe(R){const y=p.index.add(1).get();te(y,R,-1)}function J(R){const y=p.index.add(-1).get();te(y,R,1)}function le(){return p.index.add(1).get()!==Z()}function re(){return p.index.add(-1).get()!==Z()}function X(){return p.scrollSnapList}function we(){return p.scrollProgress.get(p.offsetLocation.get())}function Z(){return p.index.get()}function ge(){return p.indexPrevious.get()}function ie(){return p.slidesInView.get()}function ne(){return p.slidesInView.get(!1)}function me(){return E}function je(){return p}function x(){return e}function K(){return T}function W(){return k}const Y={canScrollNext:le,canScrollPrev:re,containerNode:K,internalEngine:je,destroy:ee,off:f,on:d,emit:g,plugins:me,previousScrollSnap:ge,reInit:w,rootNode:x,scrollNext:oe,scrollPrev:J,scrollProgress:we,scrollSnapList:X,scrollTo:te,selectedScrollSnap:Z,slideNodes:W,slidesInView:ie,slidesNotInView:ne};return D(o,t),setTimeout(()=>a.emit("init"),0),Y}tt.globalOptions=void 0;function ft(e={},o=[]){const t=S.useRef(e),s=S.useRef(o),[i,n]=S.useState(),[l,u]=S.useState(),a=S.useCallback(()=>{i&&i.reInit(t.current,s.current)},[i]);return S.useEffect(()=>{ht(t.current,e)||(t.current=e,a())},[e,a]),S.useEffect(()=>{Pr(s.current,o)||(s.current=o,a())},[o,a]),S.useEffect(()=>{if(Rr()&&l){tt.globalOptions=ft.globalOptions;const c=tt(l,t.current,s.current);return n(c),()=>c.destroy()}else n(void 0)},[l,n]),[u,i]}ft.globalOptions=void 0;const[pn,Ce]=cr({name:"CarouselContext"}),gn=({id:e,align:o="center",autoplay:t=!1,containScroll:s=!1,controlRef:i,defaultIndex:n=0,delay:l=4e3,dragFree:u=!1,draggable:a=!0,duration:c=25,index:j,inViewThreshold:h=0,loop:d=!0,orientation:f="horizontal",plugins:g=[],skipSnaps:w=!1,slidesToScroll:m=1,stopMouseEnterAutoplay:p=!0,watchDrag:b=a,watchResize:I=!0,watchSlides:M=!0,onChange:E,onScrollProgress:T,...k}={})=>{const{t:v}=ur("carousel"),[z,D]=Cr({defaultValue:n,value:j,onChange:E}),[P,A]=pr(),[ee,{off:te,on:oe}]=yr(),J=S.useRef(null),le=S.useRef(new Map),re=S.useRef(null),X=f==="horizontal",we=X?"x":"y",[Z,ge]=S.useState(0),[ie,ne]=S.useState(0),me=S.useCallback((C,L)=>{const q=gr(I)?I(C,L):!0,de=C.scrollSnapList().length,fe=C.slideNodes().length;return ge(de),ne(fe),q},[I]),[je,x]=ft({align:o,axis:we,container:re.current,containScroll:s,dragFree:u,duration:c,inViewThreshold:h,loop:d,skipSnaps:w,slidesToScroll:m,startIndex:n,watchDrag:b,watchResize:me,watchSlides:M},g);e??(e=P);const K=S.useCallback(C=>{const L=C.scrollSnapList().length,q=C.slideNodes().length;ge(L),ne(q)},[]),W=S.useCallback(()=>{if(!x)return;const C=Math.round(Math.max(0,Math.min(1,x.scrollProgress()))*100);T==null||T(C)},[x,T]),Y=S.useCallback(()=>{if(!x)return;const C=x.selectedScrollSnap();D(C)},[x,D]),R=S.useCallback(C=>{const L=le.current.get(C);L==null||L.focus(),x==null||x.scrollTo(C)},[x]),y=S.useCallback(C=>L=>{const q=Z-1;hr(L,{ArrowDown:()=>{X||(C=C===q?0:C+1,R(C))},ArrowLeft:()=>{X&&(C=C===0?q:C-1,R(C))},ArrowRight:()=>{X&&(C=C===q?0:C+1,R(C))},ArrowUp:()=>{X||(C=C===0?q:C-1,R(C))},End:()=>{R(q)},Home:()=>{R(0)}})},[Z,X,R]);dr(i,x),S.useEffect(()=>{if(x)return x.on("reInit",K),x.on("select",Y),x.on("scroll",W),W(),()=>{x.off("reInit",K),x.off("select",Y),x.off("scroll",W)}},[x,K,W,Y]),S.useEffect(()=>{const C=ee&&p,L=!(x!=null&&x.canScrollNext());return x&&t&&!C&&!L?J.current=setInterval(()=>{x.scrollNext()},l):(J.current&&clearInterval(J.current),J.current=null),()=>{J.current&&clearInterval(J.current)}},[t,x,l,ee,p]),vt(()=>{x&&j!==void 0&&x.scrollTo(j)},[j]),vt(()=>{x&&x.reInit()},[x,ie,o,we,s,u,c,h,d,w,m]);const F=S.useCallback(({ref:C,...L}={})=>({id:e,"aria-roledescription":"carousel","data-orientation":f,...k,...L,ref:it(C,k.ref,je),onMouseEnter:ye(L.onMouseEnter,oe),onMouseLeave:ye(L.onMouseLeave,te)}),[e,oe,te,k,je,f]),V=S.useCallback(({ref:C,...L}={})=>({id:A,"aria-live":t?"off":"polite","data-orientation":f,...L,ref:it(C,re)}),[t,A,f]),Q=S.useCallback(({index:C,...L})=>{const q=C+1,de=z===C;return{id:`${A}-${C}`,"aria-label":v("{page} of {total}",{page:q,total:ie}),"aria-roledescription":"slide","data-index":C.toString(),"data-orientation":f,"data-selected":ke(de),role:"tabpanel",...L}},[z,A,ie,f,v]),se=S.useCallback((C={})=>({"aria-controls":A,"aria-label":v("Go to previous slide"),"data-orientation":f,disabled:!(x!=null&&x.canScrollPrev()),...C,onClick:ye(C.onClick,()=>x==null?void 0:x.scrollPrev())}),[x,A,f,v]),ae=S.useCallback((C={})=>({"aria-controls":A,"aria-label":v("Go to next slide"),"data-orientation":f,disabled:!(x!=null&&x.canScrollNext()),...C,onClick:ye(C.onClick,()=>x==null?void 0:x.scrollNext())}),[x,A,f,v]),he=S.useCallback((C={})=>({"aria-label":v("Slides"),"aria-orientation":f,role:"tablist",...C}),[f,v]),ue=S.useCallback(({ref:C,index:L,...q})=>{const de=L+1,fe=z===L;return{type:"button","aria-controls":`${A}-${L}`,"aria-label":v("Go to {page} slide",{page:de}),"aria-selected":fe,"data-index":L.toString(),"data-orientation":f,"data-selected":ke(fe),role:"tab",tabIndex:fe?0:-1,...q,ref:it(C,Re=>{le.current.set(L,Re)}),onClick:ye(q.onClick,()=>x==null?void 0:x.scrollTo(L)),onKeyDown:ye(q.onKeyDown,y(L))}},[z,A,v,f,y,x]);return{carousel:x,index:z,setIndex:D,snapCount:Z,total:ie,getIndicatorProps:ue,getIndicatorsProps:he,getItemProps:Q,getListProps:V,getNextTriggerProps:ae,getPrevTriggerProps:se,getRootProps:F}},{ComponentContext:hn,useComponentContext:Qo,withContext:Se,withProvider:dn}=wr("carousel",Lr),N=dn(({includeGapInSize:e=!0,...o})=>{const{carousel:t,index:s,setIndex:i,snapCount:n,total:l,getIndicatorProps:u,getIndicatorsProps:a,getItemProps:c,getListProps:j,getNextTriggerProps:h,getPrevTriggerProps:d,getRootProps:f}=gn(o),g=S.useMemo(()=>({includeGapInSize:e}),[e]),w=S.useMemo(()=>({carousel:t,index:s,setIndex:i,snapCount:n,total:l,getIndicatorProps:u,getIndicatorsProps:a,getItemProps:c,getListProps:j,getNextTriggerProps:h,getPrevTriggerProps:d}),[t,l,s,i,n,u,a,c,j,h,d]);return r.jsx(pn,{value:w,children:r.jsx(hn,{value:g,children:r.jsx(jr.section,{...f()})})})},"root")(void 0,({gap:e,slideSize:o,...t})=>({...t,"--slide-gap":ct(e,"spaces"),"--slide-size":ct(o,"sizes")})),O=Se("div","list")(void 0,e=>{const{includeGapInSize:o}=Qo(),{getListProps:t}=Ce();return{"data-include-gap-in-size":ke(o),...t(e)}}),_=Se("div","item")(void 0,({slideSize:e,...o})=>{const{includeGapInSize:t}=Qo(),{getItemProps:s}=Ce();return{"data-include-gap-in-size":ke(t),"--slide-size":ct(e,"sizes"),...s(o)}}),H=Se($o,{name:"PrevTrigger",slot:["trigger","prev"]})(void 0,e=>{const{getPrevTriggerProps:o}=Ce();return{fullRounded:!0,icon:r.jsx(Sr,{}),...o(e)}}),$=Se($o,{name:"NextTrigger",slot:["trigger","next"]})(void 0,e=>{const{getNextTriggerProps:o}=Ce();return{fullRounded:!0,icon:r.jsx(Ir,{}),...o(e)}}),U=Se("div","indicators")(void 0,({children:e,render:o,...t})=>{const{index:s,snapCount:i,getIndicatorProps:n,getIndicatorsProps:l}=Ce();return{children:S.useMemo(()=>e||Array.from({length:i},(a,c)=>{if(o){const j=o({index:c,selected:c===s});return S.isValidElement(j)?S.cloneElement(j,{...n({key:c,index:c})}):j}else return r.jsx(wn,{index:c},c)}),[e,n,o,s,i]),...l(t)}}),wn=Se("button","indicator")(void 0,e=>{const{getIndicatorProps:o}=Ce();return o(e)}),On={component:N,title:"Components / Carousel"},Fe=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},Ee=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:["sm","md","lg"],children:(o,t,s)=>r.jsxs(N,{size:t,children:[r.jsx(O,{children:e.map((i,n)=>r.jsx(_,{index:n,children:r.jsx(G,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},n))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]},s)})},Ae=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:fr,children:(o,t,s)=>r.jsxs(N,{colorScheme:t,children:[r.jsx(O,{children:e.map((i,n)=>r.jsx(_,{index:n,children:r.jsx(G,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},n))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]},s)})},De=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{defaultIndex:1,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},Ne=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:["horizontal","vertical"],children:(o,t,s)=>r.jsxs(N,{orientation:t,children:[r.jsx(O,{children:e.map((i,n)=>r.jsx(_,{index:n,children:r.jsx(G,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},n))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]},s)})},Be=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:["center","start","end"],children:(o,t,s)=>r.jsxs(N,{align:t,children:[r.jsx(O,{children:e.map((i,n)=>r.jsx(_,{index:n,children:r.jsx(G,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},n))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]},s)})},Ge=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{gap:0,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},Oe=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{duration:60,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},_e=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{slideSize:"50%",children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,slideSize:t===1?"100%":void 0,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},Ve=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{slideSize:`${100/3}%`,slidesToScroll:3,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},He=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{dragFree:!0,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},$e=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{autoplay:!0,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},Ue=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{autoplay:!0,delay:1e3,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},Ke=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},qe=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{loop:!1,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},Qe=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{draggable:!1,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},Xe=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{includeGapInSize:!1,slideSize:"50%",children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},Ye=()=>{const[e,o]=S.useState(0),t=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(r.Fragment,{children:[r.jsxs(N,{dragFree:!0,loop:!1,onScrollProgress:o,children:[r.jsx(O,{children:t.map((s,i)=>r.jsx(_,{index:i,children:r.jsx(G,{src:s,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]}),r.jsx(br,{value:e})]})},Je=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{watchDrag:(o,t)=>(console.log("drag",o,t),!0),watchResize:(o,t)=>(console.log("resized",o,t),!0),watchSlides:(o,t)=>(console.log("slides updated",o,t),!0),children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]})},Ze=()=>{const[e,o]=S.useState(0),t=S.useMemo(()=>Array.from({length:50},(s,i)=>`https://www.ghibli.jp/gallery/baron0${(i+1).toString().padStart(2,"0")}.jpg`),[]);return r.jsxs(ut,{children:[r.jsx(N,{index:e,onChange:o,children:r.jsx(O,{children:t.map((s,i)=>r.jsx(_,{index:i,children:r.jsx(G,{src:s,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))})}),r.jsx(N,{containScroll:"keepSnaps",dragFree:!0,h:"5xs",index:e,slideSize:"20%",children:r.jsx(O,{children:t.map((s,i)=>r.jsx(_,{cursor:"pointer",index:i,opacity:"0.4",_selected:{opacity:1},onClick:()=>o(i),children:r.jsx(G,{src:s,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))})})]})},We=()=>{const e=S.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx(H,{bottom:"4",icon:r.jsx(xr,{}),top:"unset",transform:"unset"}),r.jsx($,{bottom:"4",icon:r.jsx(vr,{}),top:"unset",transform:"unset"}),r.jsx(U,{h:"6",render:({selected:o})=>r.jsx(mr,{as:"button",cursor:"pointer",children:r.jsx(zr,{"data-selected":ke(o),color:"transparent",fill:"colorScheme.solid/40",fontSize:"2xl",_hover:{_notSelected:{fill:"colorScheme.solid/70"}},_selected:{fill:"colorScheme.solid"}})})})]})},et=()=>{const e=S.useRef(null),[o,t]=S.useState(0),[s,i]=S.useState(["https://www.ghibli.jp/gallery/baron001.jpg","https://www.ghibli.jp/gallery/baron002.jpg","https://www.ghibli.jp/gallery/baron003.jpg","https://www.ghibli.jp/gallery/baron004.jpg","https://www.ghibli.jp/gallery/baron005.jpg"]);return r.jsxs(r.Fragment,{children:[r.jsxs(N,{controlRef:e,index:o,onChange:t,children:[r.jsx(O,{children:s.map((n,l)=>r.jsx(_,{index:l,children:r.jsx(G,{src:n,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},l))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(U,{})]}),r.jsxs(at,{children:[r.jsx(pe,{disabled:s.length===50,onClick:()=>{const n=(s.length+1).toString().padStart(2,"0"),l=[...s,`https://www.ghibli.jp/gallery/baron0${n}.jpg`];i(l),t(l.length-1)},children:"Add"}),r.jsx(pe,{disabled:s.length===1,onClick:()=>{o===s.length-1&&t(n=>n-1),i(s.slice(0,-1))},children:"Remove"})]}),r.jsxs(ut,{gap:"sm",children:[r.jsx(kt,{children:"State"}),r.jsxs(at,{children:[r.jsx(pe,{onClick:()=>t(0),children:"Home"}),r.jsx(pe,{onClick:()=>t(n=>n===0?s.length-1:n-1),children:"Prev"}),r.jsx(pe,{onClick:()=>t(n=>n===s.length-1?0:n+1),children:"Next"}),r.jsx(pe,{onClick:()=>t(s.length-1),children:"End"})]})]}),r.jsxs(ut,{gap:"sm",children:[r.jsx(kt,{children:"Ref"}),r.jsxs(at,{children:[r.jsx(pe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.scrollTo(0)},children:"Home"}),r.jsx(pe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.scrollPrev()},children:"Prev"}),r.jsx(pe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.scrollNext()},children:"Next"}),r.jsx(pe,{onClick:()=>{var n;return(n=e.current)==null?void 0:n.scrollTo(s.length-1)},children:"End"})]})]})]})};var Rt,Pt,Ft;Fe.parameters={...Fe.parameters,docs:{...(Rt=Fe.parameters)==null?void 0:Rt.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(Ft=(Pt=Fe.parameters)==null?void 0:Pt.docs)==null?void 0:Ft.source}}};var Et,At,Dt;Ee.parameters={...Ee.parameters,docs:{...(Et=Ee.parameters)==null?void 0:Et.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => <Carousel.Root key={key} size={row}>
          <Carousel.List>
            {sources.map((src, index) => <Carousel.Item key={index} index={index}>
                <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
              </Carousel.Item>)}
          </Carousel.List>

          <Carousel.PrevTrigger />
          <Carousel.NextTrigger />

          <Carousel.Indicators />
        </Carousel.Root>}
    </PropsTable>;
}`,...(Dt=(At=Ee.parameters)==null?void 0:At.docs)==null?void 0:Dt.source}}};var Nt,Bt,Gt;Ae.parameters={...Ae.parameters,docs:{...(Nt=Ae.parameters)==null?void 0:Nt.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <Carousel.Root key={key} colorScheme={row}>
          <Carousel.List>
            {sources.map((src, index) => <Carousel.Item key={index} index={index}>
                <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
              </Carousel.Item>)}
          </Carousel.List>

          <Carousel.PrevTrigger />
          <Carousel.NextTrigger />

          <Carousel.Indicators />
        </Carousel.Root>}
    </PropsTable>;
}`,...(Gt=(Bt=Ae.parameters)==null?void 0:Bt.docs)==null?void 0:Gt.source}}};var Ot,_t,Vt;De.parameters={...De.parameters,docs:{...(Ot=De.parameters)==null?void 0:Ot.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root defaultIndex={1}>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(Vt=(_t=De.parameters)==null?void 0:_t.docs)==null?void 0:Vt.source}}};var Ht,$t,Ut;Ne.parameters={...Ne.parameters,docs:{...(Ht=Ne.parameters)==null?void 0:Ht.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <PropsTable variant="stack" rows={["horizontal", "vertical"]}>
      {(_, row, key) => <Carousel.Root key={key} orientation={row}>
          <Carousel.List>
            {sources.map((src, index) => <Carousel.Item key={index} index={index}>
                <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
              </Carousel.Item>)}
          </Carousel.List>

          <Carousel.PrevTrigger />
          <Carousel.NextTrigger />

          <Carousel.Indicators />
        </Carousel.Root>}
    </PropsTable>;
}`,...(Ut=($t=Ne.parameters)==null?void 0:$t.docs)==null?void 0:Ut.source}}};var Kt,qt,Qt;Be.parameters={...Be.parameters,docs:{...(Kt=Be.parameters)==null?void 0:Kt.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <PropsTable variant="stack" rows={["center", "start", "end"]}>
      {(_, row, key) => <Carousel.Root key={key} align={row}>
          <Carousel.List>
            {sources.map((src, index) => <Carousel.Item key={index} index={index}>
                <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
              </Carousel.Item>)}
          </Carousel.List>

          <Carousel.PrevTrigger />
          <Carousel.NextTrigger />

          <Carousel.Indicators />
        </Carousel.Root>}
    </PropsTable>;
}`,...(Qt=(qt=Be.parameters)==null?void 0:qt.docs)==null?void 0:Qt.source}}};var Xt,Yt,Jt;Ge.parameters={...Ge.parameters,docs:{...(Xt=Ge.parameters)==null?void 0:Xt.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root gap={0}>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(Jt=(Yt=Ge.parameters)==null?void 0:Yt.docs)==null?void 0:Jt.source}}};var Zt,Wt,eo;Oe.parameters={...Oe.parameters,docs:{...(Zt=Oe.parameters)==null?void 0:Zt.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root duration={60}>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(eo=(Wt=Oe.parameters)==null?void 0:Wt.docs)==null?void 0:eo.source}}};var to,oo,ro;_e.parameters={..._e.parameters,docs:{...(to=_e.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root slideSize="50%">
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index} slideSize={index === 1 ? "100%" : undefined}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(ro=(oo=_e.parameters)==null?void 0:oo.docs)==null?void 0:ro.source}}};var no,so,lo;Ve.parameters={...Ve.parameters,docs:{...(no=Ve.parameters)==null?void 0:no.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root slideSize={\`\${100 / 3}%\`} slidesToScroll={3}>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(lo=(so=Ve.parameters)==null?void 0:so.docs)==null?void 0:lo.source}}};var io,ao,co;He.parameters={...He.parameters,docs:{...(io=He.parameters)==null?void 0:io.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root dragFree>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(co=(ao=He.parameters)==null?void 0:ao.docs)==null?void 0:co.source}}};var uo,po,go;$e.parameters={...$e.parameters,docs:{...(uo=$e.parameters)==null?void 0:uo.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root autoplay>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(go=(po=$e.parameters)==null?void 0:po.docs)==null?void 0:go.source}}};var ho,wo,jo;Ue.parameters={...Ue.parameters,docs:{...(ho=Ue.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root autoplay delay={1000}>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(jo=(wo=Ue.parameters)==null?void 0:wo.docs)==null?void 0:jo.source}}};var fo,mo,bo;Ke.parameters={...Ke.parameters,docs:{...(fo=Ke.parameters)==null?void 0:fo.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root autoplay stopMouseEnterAutoplay={false}>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(bo=(mo=Ke.parameters)==null?void 0:mo.docs)==null?void 0:bo.source}}};var xo,yo,Co;qe.parameters={...qe.parameters,docs:{...(xo=qe.parameters)==null?void 0:xo.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root loop={false}>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(Co=(yo=qe.parameters)==null?void 0:yo.docs)==null?void 0:Co.source}}};var So,Io,vo;Qe.parameters={...Qe.parameters,docs:{...(So=Qe.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root draggable={false}>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(vo=(Io=Qe.parameters)==null?void 0:Io.docs)==null?void 0:vo.source}}};var ko,To,zo;Xe.parameters={...Xe.parameters,docs:{...(ko=Xe.parameters)==null?void 0:ko.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root includeGapInSize={false} slideSize="50%">
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(zo=(To=Xe.parameters)==null?void 0:To.docs)==null?void 0:zo.source}}};var Lo,Mo,Ro;Ye.parameters={...Ye.parameters,docs:{...(Lo=Ye.parameters)==null?void 0:Lo.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <>
      <Carousel.Root dragFree loop={false} onScrollProgress={setProgress}>
        <Carousel.List>
          {sources.map((src, index) => <Carousel.Item key={index} index={index}>
              <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
            </Carousel.Item>)}
        </Carousel.List>

        <Carousel.PrevTrigger />
        <Carousel.NextTrigger />

        <Carousel.Indicators />
      </Carousel.Root>

      <Progress value={progress} />
    </>;
}`,...(Ro=(Mo=Ye.parameters)==null?void 0:Mo.docs)==null?void 0:Ro.source}}};var Po,Fo,Eo;Je.parameters={...Je.parameters,docs:{...(Po=Je.parameters)==null?void 0:Po.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root watchDrag={(methods, ev) => {
    console.log("drag", methods, ev);
    return true;
  }} watchResize={(methods, entries) => {
    console.log("resized", methods, entries);
    return true;
  }} watchSlides={(methods, mutations) => {
    console.log("slides updated", methods, mutations);
    return true;
  }}>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>;
}`,...(Eo=(Fo=Je.parameters)==null?void 0:Fo.docs)==null?void 0:Eo.source}}};var Ao,Do,No;Ze.parameters={...Ze.parameters,docs:{...(Ao=Ze.parameters)==null?void 0:Ao.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const sources = useMemo(() => Array.from({
    length: 50
  }, (_, index) => {
    const num = (index + 1).toString().padStart(2, "0");
    return \`https://www.ghibli.jp/gallery/baron0\${num}.jpg\`;
  }), []);
  return <VStack>
      <Carousel.Root index={index} onChange={setIndex}>
        <Carousel.List>
          {sources.map((src, index) => <Carousel.Item key={index} index={index}>
              <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
            </Carousel.Item>)}
        </Carousel.List>
      </Carousel.Root>

      <Carousel.Root containScroll="keepSnaps" dragFree h="5xs" index={index} slideSize="20%">
        <Carousel.List>
          {sources.map((src, index) => <Carousel.Item key={index} cursor="pointer" index={index} opacity="0.4" _selected={{
          opacity: 1
        }} onClick={() => setIndex(index)}>
              <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
            </Carousel.Item>)}
        </Carousel.List>
      </Carousel.Root>
    </VStack>;
}`,...(No=(Do=Ze.parameters)==null?void 0:Do.docs)==null?void 0:No.source}}};var Bo,Go,Oo;We.parameters={...We.parameters,docs:{...(Bo=We.parameters)==null?void 0:Bo.docs,source:{originalSource:`() => {
  const sources = useMemo(() => ["https://www.ghibli.jp/gallery/chihiro015.jpg", "https://www.ghibli.jp/gallery/howl049.jpg", "https://www.ghibli.jp/gallery/totoro036.jpg", "https://www.ghibli.jp/gallery/mononoke033.jpg", "https://www.ghibli.jp/gallery/laputa047.jpg", "https://www.ghibli.jp/gallery/porco025.jpg"], []);
  return <Carousel.Root>
      <Carousel.List>
        {sources.map((src, index) => <Carousel.Item key={index} index={index}>
            <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
          </Carousel.Item>)}
      </Carousel.List>

      <Carousel.PrevTrigger bottom="4" icon={<ArrowLeftIcon />} top="unset" transform="unset" />
      <Carousel.NextTrigger bottom="4" icon={<ArrowRightIcon />} top="unset" transform="unset" />

      <Carousel.Indicators h="6" render={({
      selected
    }) => <Center as="button" cursor="pointer">
            <CircleIcon data-selected={dataAttr(selected)} color="transparent" fill="colorScheme.solid/40" fontSize="2xl" _hover={{
        _notSelected: {
          fill: "colorScheme.solid/70"
        }
      }} _selected={{
        fill: "colorScheme.solid"
      }} />
          </Center>} />
    </Carousel.Root>;
}`,...(Oo=(Go=We.parameters)==null?void 0:Go.docs)==null?void 0:Oo.source}}};var _o,Vo,Ho;et.parameters={...et.parameters,docs:{...(_o=et.parameters)==null?void 0:_o.docs,source:{originalSource:`() => {
  const controlRef = useRef<Carousel.Control>(null);
  const [index, setIndex] = useState(0);
  const [sources, setSources] = useState(["https://www.ghibli.jp/gallery/baron001.jpg", "https://www.ghibli.jp/gallery/baron002.jpg", "https://www.ghibli.jp/gallery/baron003.jpg", "https://www.ghibli.jp/gallery/baron004.jpg", "https://www.ghibli.jp/gallery/baron005.jpg"]);
  return <>
      <Carousel.Root controlRef={controlRef} index={index} onChange={setIndex}>
        <Carousel.List>
          {sources.map((src, index) => <Carousel.Item key={index} index={index}>
              <Image src={src} alt="スタジオジブリ作品静止画" boxSize="full" objectFit="cover" />
            </Carousel.Item>)}
        </Carousel.List>

        <Carousel.PrevTrigger />
        <Carousel.NextTrigger />

        <Carousel.Indicators />
      </Carousel.Root>

      <ButtonGroup.Root>
        <ButtonGroup.Item disabled={sources.length === 50} onClick={() => {
        const num = (sources.length + 1).toString().padStart(2, "0");
        const nextSources = [...sources, \`https://www.ghibli.jp/gallery/baron0\${num}.jpg\`];
        setSources(nextSources);
        setIndex(nextSources.length - 1);
      }}>
          Add
        </ButtonGroup.Item>
        <ButtonGroup.Item disabled={sources.length === 1} onClick={() => {
        if (index === sources.length - 1) setIndex(prev => prev - 1);
        setSources(sources.slice(0, -1));
      }}>
          Remove
        </ButtonGroup.Item>
      </ButtonGroup.Root>

      <VStack gap="sm">
        <Text>State</Text>
        <ButtonGroup.Root>
          <ButtonGroup.Item onClick={() => setIndex(0)}>Home</ButtonGroup.Item>
          <ButtonGroup.Item onClick={() => setIndex(prev => prev === 0 ? sources.length - 1 : prev - 1)}>
            Prev
          </ButtonGroup.Item>
          <ButtonGroup.Item onClick={() => setIndex(prev => prev === sources.length - 1 ? 0 : prev + 1)}>
            Next
          </ButtonGroup.Item>
          <ButtonGroup.Item onClick={() => setIndex(sources.length - 1)}>
            End
          </ButtonGroup.Item>
        </ButtonGroup.Root>
      </VStack>

      <VStack gap="sm">
        <Text>Ref</Text>
        <ButtonGroup.Root>
          <ButtonGroup.Item onClick={() => controlRef.current?.scrollTo(0)}>
            Home
          </ButtonGroup.Item>
          <ButtonGroup.Item onClick={() => controlRef.current?.scrollPrev()}>
            Prev
          </ButtonGroup.Item>
          <ButtonGroup.Item onClick={() => controlRef.current?.scrollNext()}>
            Next
          </ButtonGroup.Item>
          <ButtonGroup.Item onClick={() => controlRef.current?.scrollTo(sources.length - 1)}>
            End
          </ButtonGroup.Item>
        </ButtonGroup.Root>
      </VStack>
    </>;
}`,...(Ho=(Vo=et.parameters)==null?void 0:Vo.docs)==null?void 0:Ho.source}}};const _n=["Basic","Size","ColorScheme","DefaultIndex","Orientation","Align","Gap","Duration","SlideSize","SlidesToScroll","DragFree","Autoplay","Delay","DisabledStopMouseEnterAutoplay","DisabledLoop","DisabledDraggable","DisabledIncludeGapInSize","ScrollProgress","Methods","Thumbnails","CustomComponent","CustomControl"];export{Be as Align,$e as Autoplay,Fe as Basic,Ae as ColorScheme,We as CustomComponent,et as CustomControl,De as DefaultIndex,Ue as Delay,Qe as DisabledDraggable,Xe as DisabledIncludeGapInSize,qe as DisabledLoop,Ke as DisabledStopMouseEnterAutoplay,He as DragFree,Oe as Duration,Ge as Gap,Je as Methods,Ne as Orientation,Ye as ScrollProgress,Ee as Size,_e as SlideSize,Ve as SlidesToScroll,Ze as Thumbnails,_n as __namedExportsOrder,On as default};
