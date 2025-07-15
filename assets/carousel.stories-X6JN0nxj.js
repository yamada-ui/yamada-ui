import{q as Ut,I as Xt,d as Jt,r as y,c as Qt,J as Yt,K as Zt,L as Wt,M as eo,N as kt,h as ye,m as it,a as ke,f as to,j as r,s as oo,D as ct,C as ro,V as ut,E as no,T as Tt}from"./iframe-6cyGxZR1.js";import{P as ot}from"./props-table-BStzGvE5.js";import{I as B}from"./image-CdaeIwnC.js";import{P as so}from"./progress-D_9FVR7z.js";import{C as lo,A as io}from"./chevron-left-icon-CTL8f7Kc.js";import{c as ao}from"./createLucideIcon-Teo9AeaP.js";import{B as at}from"./button-group-B4M5Ddef.js";import{B as ge}from"./button-G4XTmEMi.js";import{u as re}from"./index-6RqzWxmQ.js";import{u as co}from"./index-Bpe_Ryly.js";import{u as uo}from"./index-BB_UEjOi.js";import{I as Rt}from"./icon-button-B5j3FGrm.js";import{C as po}from"./chevron-right-icon-CE6n2mao.js";import{A as go}from"./arrow-right-icon-73fFA8Iv.js";import"./grid-DvbSqGCm.js";import"./grid-item-B0NR1lqj.js";import"./for-DFrhp0eJ.js";import"./flex-BPUJT_MQ.js";import"./heading--wmE1SdT.js";import"./use-progress-BQCBwUhI.js";import"./number-qjSr7RRG.js";import"./group-CRS-qM_O.js";import"./use-ripple-CX8fxYrT.js";import"./rings-Cf-feOW-.js";import"./use-breakpoint-C5fzzoKt.js";import"./use-breakpoint-value-4tu6pM9A.js";import"./use-color-mode-value-C3Jt17hH.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],wo=ao("circle",ho),jo=Ut(Xt)({as:wo}),fo=Jt({base:{indicator:{bg:"colorScheme.solid/40",cursor:"pointer",rounded:"full",transitionDuration:"moderate",transitionProperty:"common",_horizontal:{w:"10"},_selected:{bg:"colorScheme.solid"},_vertical:{h:"10"},_hover:{_notSelected:{bg:"colorScheme.solid/70"}},_disabled:{layerStyle:"disabled"}},indicators:{display:"flex",gap:"2",justifyContent:"center",position:"absolute",zIndex:"yamcha",_horizontal:{bottom:"4",flexDirection:"row",h:"2",left:"50%",px:"4",transform:"translateX(-50%)",w:"full"},_vertical:{flexDirection:"column",h:"full",py:"4",right:"4",top:"50%",transform:"translateY(-50%)",w:"2"}},item:{"&:not([data-include-gap-in-size])":{_horizontal:{mr:"{slide-gap}"},_vertical:{mb:"{slide-gap}"}},"&[data-include-gap-in-size]":{_horizontal:{pr:"{slide-gap}"},_vertical:{pb:"{slide-gap}"}},boxSize:"full",flex:"0 0 {slide-size}",position:"relative"},list:{"&[data-include-gap-in-size]":{_horizontal:{mr:"calc({slide-gap} * -1)"},_vertical:{mb:"calc({slide-gap} * -1)"}},display:"flex",h:"full",_horizontal:{flexDirection:"row"},_vertical:{flexDirection:"column"}},next:{_horizontal:{right:"4"},_vertical:{bottom:"4"}},prev:{_horizontal:{left:"4"},_vertical:{top:"4"}},root:{"--slide-gap":"spaces.4","--slide-size":"sizes.full",overflow:"hidden",position:"relative",w:"full"},trigger:{position:"absolute",zIndex:"kurillin",_horizontal:{top:"50%",transform:"translateY(-50%)"},_vertical:{left:"50%",transform:"translateX(-50%) rotate(90deg)"}}},sizes:{sm:{root:{h:"sm"}},md:{root:{h:"md"}},lg:{root:{h:"lg"}}},defaultProps:{size:"md"}});function mo(e){return Object.prototype.toString.call(e)==="[object Object]"}function zt(e){return mo(e)||Array.isArray(e)}function bo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ht(e,t){const o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),s=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==s?!1:o.every(l=>{const u=e[l],a=t[l];return typeof u=="function"?`${u}`==`${a}`:!zt(u)||!zt(a)?u===a:ht(u,a)})}function Lt(e){return e.concat().sort((t,o)=>t.name>o.name?1:-1).map(t=>t.options)}function xo(e,t){if(e.length!==t.length)return!1;const o=Lt(e),n=Lt(t);return o.every((i,s)=>{const l=n[s];return ht(i,l)})}function dt(e){return typeof e=="number"}function pt(e){return typeof e=="string"}function rt(e){return typeof e=="boolean"}function Mt(e){return Object.prototype.toString.call(e)==="[object Object]"}function N(e){return Math.abs(e)}function wt(e){return Math.sign(e)}function ve(e,t){return N(e-t)}function yo(e,t){if(e===0||t===0||N(e)<=N(t))return 0;const o=ve(N(e),N(t));return N(o/e)}function Co(e){return Math.round(e*100)/100}function Te(e){return ze(e).map(Number)}function ue(e){return e[Me(e)]}function Me(e){return Math.max(0,e.length-1)}function jt(e,t){return t===Me(e)}function Pt(e,t=0){return Array.from(Array(e),(o,n)=>t+n)}function ze(e){return Object.keys(e)}function Ft(e,t){return[e,t].reduce((o,n)=>(ze(n).forEach(i=>{const s=o[i],l=n[i],u=Mt(s)&&Mt(l);o[i]=u?Ft(s,l):l}),o),{})}function gt(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function So(e,t){const o={start:n,center:i,end:s};function n(){return 0}function i(a){return s(a)/2}function s(a){return t-a}function l(a,c){return pt(e)?o[e](a):e(t,a,c)}return{measure:l}}function Le(){let e=[];function t(i,s,l,u={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(s,l,u),a=()=>i.removeEventListener(s,l,u);else{const c=i;c.addListener(l),a=()=>c.removeListener(l)}return e.push(a),n}function o(){e=e.filter(i=>i())}const n={add:t,clear:o};return n}function Io(e,t,o,n){const i=Le(),s=1e3/60;let l=null,u=0,a=0;function c(){i.add(e,"visibilitychange",()=>{e.hidden&&g()})}function j(){f(),i.clear()}function h(m){if(!a)return;l||(l=m,o(),o());const p=m-l;for(l=m,u+=p;u>=s;)o(),u-=s;const b=u/s;n(b),a&&(a=t.requestAnimationFrame(h))}function d(){a||(a=t.requestAnimationFrame(h))}function f(){t.cancelAnimationFrame(a),l=null,u=0,a=0}function g(){l=null,u=0}return{init:c,destroy:j,start:d,stop:f,update:o,render:n}}function vo(e,t){const o=t==="rtl",n=e==="y",i=n?"y":"x",s=n?"x":"y",l=!n&&o?-1:1,u=j(),a=h();function c(g){const{height:w,width:m}=g;return n?w:m}function j(){return n?"top":o?"right":"left"}function h(){return n?"bottom":o?"left":"right"}function d(g){return g*l}return{scroll:i,cross:s,startEdge:u,endEdge:a,measureSize:c,direction:d}}function be(e=0,t=0){const o=N(e-t);function n(c){return c<e}function i(c){return c>t}function s(c){return n(c)||i(c)}function l(c){return s(c)?n(c)?e:t:c}function u(c){return o?c-o*Math.ceil((c-t)/o):c}return{length:o,max:t,min:e,constrain:l,reachedAny:s,reachedMax:i,reachedMin:n,removeOffset:u}}function Et(e,t,o){const{constrain:n}=be(0,e),i=e+1;let s=l(t);function l(d){return o?N((i+d)%i):n(d)}function u(){return s}function a(d){return s=l(d),h}function c(d){return j().set(u()+d)}function j(){return Et(e,u(),o)}const h={get:u,set:a,add:c,clone:j};return h}function ko(e,t,o,n,i,s,l,u,a,c,j,h,d,f,g,w,m,p,b){const{cross:C,direction:M}=e,R=["INPUT","SELECT","TEXTAREA"],z={passive:!1},I=Le(),v=Le(),L=be(50,225).constrain(f.measure(20)),A={mouse:300,touch:400},T={mouse:500,touch:600},X=g?43:25;let W=!1,ee=0,J=0,pe=!1,le=!1,Z=!1,ne=!1;function he(S){if(!b)return;function F(Y){(rt(b)||b(S,Y))&&k(Y)}const V=t;I.add(V,"dragstart",Y=>Y.preventDefault(),z).add(V,"touchmove",()=>{},z).add(V,"touchend",()=>{}).add(V,"touchstart",F).add(V,"mousedown",F).add(V,"touchcancel",q).add(V,"contextmenu",q).add(V,"click",oe,!0)}function te(){I.clear(),v.clear()}function ie(){const S=ne?o:t;v.add(S,"touchmove",Q,z).add(S,"touchend",q).add(S,"mousemove",Q,z).add(S,"mouseup",q)}function de(S){const F=S.nodeName||"";return R.includes(F)}function ae(){return(g?T:A)[ne?"mouse":"touch"]}function me(S,F){const V=h.add(wt(S)*-1),Y=j.byDistance(S,!g).distance;return g||N(S)<L?Y:m&&F?Y*.5:j.byIndex(V.get(),0).distance}function k(S){const F=gt(S,n);ne=F,Z=g&&F&&!S.buttons&&W,W=ve(i.get(),l.get())>=2,!(F&&S.button!==0)&&(de(S.target)||(pe=!0,s.pointerDown(S),c.useFriction(0).useDuration(0),i.set(l),ie(),ee=s.readPoint(S),J=s.readPoint(S,C),d.emit("pointerDown")))}function Q(S){if(!gt(S,n)&&S.touches.length>=2)return q(S);const V=s.readPoint(S),Y=s.readPoint(S,C),se=ve(V,ee),ce=ve(Y,J);if(!le&&!ne&&(!S.cancelable||(le=se>ce,!le)))return q(S);const we=s.pointerMove(S);se>w&&(Z=!0),c.useFriction(.3).useDuration(.75),u.start(),i.add(M(we)),S.preventDefault()}function q(S){const V=j.byDistance(0,!1).index!==h.get(),Y=s.pointerUp(S)*ae(),se=me(M(Y),V),ce=yo(Y,se),we=X-10*ce,x=p+ce/50;le=!1,pe=!1,v.clear(),c.useDuration(we).useFriction(x),a.distance(se,!g),ne=!1,d.emit("pointerUp")}function oe(S){Z&&(S.stopPropagation(),S.preventDefault(),Z=!1)}function U(){return pe}return{init:he,destroy:te,pointerDown:U}}function To(e,t){let n,i;function s(h){return h.timeStamp}function l(h,d){const g=`client${(d||e.scroll)==="x"?"X":"Y"}`;return(gt(h,t)?h:h.touches[0])[g]}function u(h){return n=h,i=h,l(h)}function a(h){const d=l(h)-l(i),f=s(h)-s(n)>170;return i=h,f&&(n=h),d}function c(h){if(!n||!i)return 0;const d=l(i)-l(n),f=s(h)-s(n),g=s(h)-s(i)>170,w=d/f;return f&&!g&&N(w)>.1?w:0}return{pointerDown:u,pointerMove:a,pointerUp:c,readPoint:l}}function zo(){function e(o){const{offsetTop:n,offsetLeft:i,offsetWidth:s,offsetHeight:l}=o;return{top:n,right:i+s,bottom:n+l,left:i,width:s,height:l}}return{measure:e}}function Lo(e){function t(n){return e*(n/100)}return{measure:t}}function Mo(e,t,o,n,i,s,l){const u=[e].concat(n);let a,c,j=[],h=!1;function d(m){return i.measureSize(l.measure(m))}function f(m){if(!s)return;c=d(e),j=n.map(d);function p(b){for(const C of b){if(h)return;const M=C.target===e,R=n.indexOf(C.target),z=M?c:j[R],I=d(M?e:n[R]);if(N(I-z)>=.5){m.reInit(),t.emit("resize");break}}}a=new ResizeObserver(b=>{(rt(s)||s(m,b))&&p(b)}),o.requestAnimationFrame(()=>{u.forEach(b=>a.observe(b))})}function g(){h=!0,a&&a.disconnect()}return{init:f,destroy:g}}function Po(e,t,o,n,i,s){let l=0,u=0,a=i,c=s,j=e.get(),h=0;function d(){const z=n.get()-e.get(),I=!a;let v=0;return I?(l=0,o.set(n),e.set(n),v=z):(o.set(e),l+=z/a,l*=c,j+=l,e.add(l),v=j-h),u=wt(v),h=j,R}function f(){const z=n.get()-t.get();return N(z)<.001}function g(){return a}function w(){return u}function m(){return l}function p(){return C(i)}function b(){return M(s)}function C(z){return a=z,R}function M(z){return c=z,R}const R={direction:w,duration:g,velocity:m,seek:d,settled:f,useBaseFriction:b,useBaseDuration:p,useFriction:M,useDuration:C};return R}function Ro(e,t,o,n,i){const s=i.measure(10),l=i.measure(50),u=be(.1,.99);let a=!1;function c(){return!(a||!e.reachedAny(o.get())||!e.reachedAny(t.get()))}function j(f){if(!c())return;const g=e.reachedMin(t.get())?"min":"max",w=N(e[g]-t.get()),m=o.get()-t.get(),p=u.constrain(w/l);o.subtract(m*p),!f&&N(m)<s&&(o.set(e.constrain(o.get())),n.useDuration(25).useBaseFriction())}function h(f){a=!f}return{shouldConstrain:c,constrain:j,toggleActive:h}}function Fo(e,t,o,n,i){const s=be(-t+e,0),l=h(),u=j(),a=d();function c(g,w){return ve(g,w)<=1}function j(){const g=l[0],w=ue(l),m=l.lastIndexOf(g),p=l.indexOf(w)+1;return be(m,p)}function h(){return o.map((g,w)=>{const{min:m,max:p}=s,b=s.constrain(g),C=!w,M=jt(o,w);return C?p:M||c(m,b)?m:c(p,b)?p:b}).map(g=>parseFloat(g.toFixed(3)))}function d(){if(t<=e+i)return[s.max];if(n==="keepSnaps")return l;const{min:g,max:w}=u;return l.slice(g,w)}return{snapsContained:a,scrollContainLimit:u}}function Eo(e,t,o){const n=t[0],i=o?n-e:ue(t);return{limit:be(i,n)}}function Ao(e,t,o,n){const s=t.min+.1,l=t.max+.1,{reachedMin:u,reachedMax:a}=be(s,l);function c(d){return d===1?a(o.get()):d===-1?u(o.get()):!1}function j(d){if(!c(d))return;const f=e*(d*-1);n.forEach(g=>g.add(f))}return{loop:j}}function Do(e){const{max:t,length:o}=e;function n(s){const l=s-t;return o?l/-o:0}return{get:n}}function No(e,t,o,n,i){const{startEdge:s,endEdge:l}=e,{groupSlides:u}=i,a=h().map(t.measure),c=d(),j=f();function h(){return u(n).map(w=>ue(w)[l]-w[0][s]).map(N)}function d(){return n.map(w=>o[s]-w[s]).map(w=>-N(w))}function f(){return u(c).map(w=>w[0]).map((w,m)=>w+a[m])}return{snaps:c,snapsAligned:j}}function Bo(e,t,o,n,i,s){const{groupSlides:l}=i,{min:u,max:a}=n,c=j();function j(){const d=l(s),f=!e||t==="keepSnaps";return o.length===1?[s]:f?d:d.slice(u,a).map((g,w,m)=>{const p=!w,b=jt(m,w);if(p){const C=ue(m[0])+1;return Pt(C)}if(b){const C=Me(s)-ue(m)[0]+1;return Pt(C,ue(m)[0])}return g})}return{slideRegistry:c}}function Oo(e,t,o,n,i){const{reachedAny:s,removeOffset:l,constrain:u}=n;function a(g){return g.concat().sort((w,m)=>N(w)-N(m))[0]}function c(g){const w=e?l(g):u(g),m=t.map((b,C)=>({diff:j(b-w,0),index:C})).sort((b,C)=>N(b.diff)-N(C.diff)),{index:p}=m[0];return{index:p,distance:w}}function j(g,w){const m=[g,g+o,g-o];if(!e)return g;if(!w)return a(m);const p=m.filter(b=>wt(b)===w);return p.length?a(p):ue(m)-o}function h(g,w){const m=t[g]-i.get(),p=j(m,w);return{index:g,distance:p}}function d(g,w){const m=i.get()+g,{index:p,distance:b}=c(m),C=!e&&s(m);if(!w||C)return{index:p,distance:g};const M=t[p]-b,R=g+j(M,0);return{index:p,distance:R}}return{byDistance:d,byIndex:h,shortcut:j}}function _o(e,t,o,n,i,s,l){function u(h){const d=h.distance,f=h.index!==t.get();s.add(d),d&&(n.duration()?e.start():(e.update(),e.render(1),e.update())),f&&(o.set(t.get()),t.set(h.index),l.emit("select"))}function a(h,d){const f=i.byDistance(h,d);u(f)}function c(h,d){const f=t.clone().set(h),g=i.byIndex(f.get(),d);u(g)}return{distance:a,index:c}}function Vo(e,t,o,n,i,s,l,u){const a={passive:!0,capture:!0};let c=0;function j(f){if(!u)return;function g(w){if(new Date().getTime()-c>10)return;l.emit("slideFocusStart"),e.scrollLeft=0;const b=o.findIndex(C=>C.includes(w));dt(b)&&(i.useDuration(0),n.index(b,0),l.emit("slideFocus"))}s.add(document,"keydown",h,!1),t.forEach((w,m)=>{s.add(w,"focus",p=>{(rt(u)||u(f,p))&&g(m)},a)})}function h(f){f.code==="Tab"&&(c=new Date().getTime())}return{init:j}}function Ie(e){let t=e;function o(){return t}function n(a){t=l(a)}function i(a){t+=l(a)}function s(a){t-=l(a)}function l(a){return dt(a)?a:a.get()}return{get:o,set:n,add:i,subtract:s}}function At(e,t){const o=e.scroll==="x"?l:u,n=t.style;let i=null,s=!1;function l(d){return`translate3d(${d}px,0px,0px)`}function u(d){return`translate3d(0px,${d}px,0px)`}function a(d){if(s)return;const f=Co(e.direction(d));f!==i&&(n.transform=o(f),i=f)}function c(d){s=!d}function j(){s||(n.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:j,to:a,toggleActive:c}}function Go(e,t,o,n,i,s,l,u,a){const j=Te(i),h=Te(i).reverse(),d=p().concat(b());function f(I,v){return I.reduce((L,A)=>L-i[A],v)}function g(I,v){return I.reduce((L,A)=>f(L,v)>0?L.concat([A]):L,[])}function w(I){return s.map((v,L)=>({start:v-n[L]+.5+I,end:v+t-.5+I}))}function m(I,v,L){const A=w(v);return I.map(T=>{const X=L?0:-o,W=L?o:0,ee=L?"end":"start",J=A[T][ee];return{index:T,loopPoint:J,slideLocation:Ie(-1),translate:At(e,a[T]),target:()=>u.get()>J?X:W}})}function p(){const I=l[0],v=g(h,I);return m(v,o,!1)}function b(){const I=t-l[0]-1,v=g(j,I);return m(v,-o,!0)}function C(){return d.every(({index:I})=>{const v=j.filter(L=>L!==I);return f(v,t)<=.1})}function M(){d.forEach(I=>{const{target:v,translate:L,slideLocation:A}=I,T=v();T!==A.get()&&(L.to(T),A.set(T))})}function R(){d.forEach(I=>I.translate.clear())}return{canLoop:C,clear:R,loop:M,loopPoints:d}}function $o(e,t,o){let n,i=!1;function s(a){if(!o)return;function c(j){for(const h of j)if(h.type==="childList"){a.reInit(),t.emit("slidesChanged");break}}n=new MutationObserver(j=>{i||(rt(o)||o(a,j))&&c(j)}),n.observe(e,{childList:!0})}function l(){n&&n.disconnect(),i=!0}return{init:s,destroy:l}}function Ho(e,t,o,n){const i={};let s=null,l=null,u,a=!1;function c(){u=new IntersectionObserver(g=>{a||(g.forEach(w=>{const m=t.indexOf(w.target);i[m]=w}),s=null,l=null,o.emit("slidesInView"))},{root:e.parentElement,threshold:n}),t.forEach(g=>u.observe(g))}function j(){u&&u.disconnect(),a=!0}function h(g){return ze(i).reduce((w,m)=>{const p=parseInt(m),{isIntersecting:b}=i[p];return(g&&b||!g&&!b)&&w.push(p),w},[])}function d(g=!0){if(g&&s)return s;if(!g&&l)return l;const w=h(g);return g&&(s=w),g||(l=w),w}return{init:c,destroy:j,get:d}}function Ko(e,t,o,n,i,s){const{measureSize:l,startEdge:u,endEdge:a}=e,c=o[0]&&i,j=g(),h=w(),d=o.map(l),f=m();function g(){if(!c)return 0;const b=o[0];return N(t[u]-b[u])}function w(){if(!c)return 0;const b=s.getComputedStyle(ue(n));return parseFloat(b.getPropertyValue(`margin-${a}`))}function m(){return o.map((b,C,M)=>{const R=!C,z=jt(M,C);return R?d[C]+j:z?d[C]+h:M[C+1][u]-b[u]}).map(N)}return{slideSizes:d,slideSizesWithGaps:f,startGap:j,endGap:h}}function qo(e,t,o,n,i,s,l,u,a){const{startEdge:c,endEdge:j,direction:h}=e,d=dt(o);function f(p,b){return Te(p).filter(C=>C%b===0).map(C=>p.slice(C,C+b))}function g(p){return p.length?Te(p).reduce((b,C,M)=>{const R=ue(b)||0,z=R===0,I=C===Me(p),v=i[c]-s[R][c],L=i[c]-s[C][j],A=!n&&z?h(l):0,T=!n&&I?h(u):0,X=N(L-T-(v+A));return M&&X>t+a&&b.push(C),I&&b.push(p.length),b},[]).map((b,C,M)=>{const R=Math.max(M[C-1]||0);return p.slice(R,b)}):[]}function w(p){return d?f(p,o):g(p)}return{groupSlides:w}}function Uo(e,t,o,n,i,s,l){const{align:u,axis:a,direction:c,startIndex:j,loop:h,duration:d,dragFree:f,dragThreshold:g,inViewThreshold:w,slidesToScroll:m,skipSnaps:p,containScroll:b,watchResize:C,watchSlides:M,watchDrag:R,watchFocus:z}=s,I=2,v=zo(),L=v.measure(t),A=o.map(v.measure),T=vo(a,c),X=T.measureSize(L),W=Lo(X),ee=So(u,X),J=!h&&!!b,pe=h||!!b,{slideSizes:le,slideSizesWithGaps:Z,startGap:ne,endGap:he}=Ko(T,L,A,o,pe,i),te=qo(T,X,m,h,L,A,ne,he,I),{snaps:ie,snapsAligned:de}=No(T,ee,L,A,te),ae=-ue(ie)+ue(Z),{snapsContained:me,scrollContainLimit:k}=Fo(X,ae,de,b,I),Q=J?me:de,{limit:q}=Eo(ae,Q,h),oe=Et(Me(Q),j,h),U=oe.clone(),E=Te(o),S=({dragHandler:xe,scrollBody:st,scrollBounds:lt,options:{loop:Re}})=>{Re||lt.constrain(xe.pointerDown()),st.seek()},F=({scrollBody:xe,translate:st,location:lt,offsetLocation:Re,previousLocation:Ot,scrollLooper:_t,slideLooper:Vt,dragHandler:Gt,animation:$t,eventHandler:xt,scrollBounds:Ht,options:{loop:yt}},Ct)=>{const St=xe.settled(),Kt=!Ht.shouldConstrain(),It=yt?St:St&&Kt,vt=It&&!Gt.pointerDown();vt&&$t.stop();const qt=lt.get()*Ct+Ot.get()*(1-Ct);Re.set(qt),yt&&(_t.loop(xe.direction()),Vt.loop()),st.to(Re.get()),vt&&xt.emit("settle"),It||xt.emit("scroll")},V=Io(n,i,()=>S(nt),xe=>F(nt,xe)),Y=.68,se=Q[oe.get()],ce=Ie(se),we=Ie(se),x=Ie(se),P=Ie(se),G=Po(ce,x,we,P,d,Y),je=Oo(h,Q,ae,q,P),fe=_o(V,oe,U,G,je,P,l),Pe=Do(q),mt=Le(),Nt=Ho(t,o,l,w),{slideRegistry:bt}=Bo(J,b,Q,k,te,E),Bt=Vo(e,o,bt,fe,G,mt,l,z),nt={ownerDocument:n,ownerWindow:i,eventHandler:l,containerRect:L,slideRects:A,animation:V,axis:T,dragHandler:ko(T,e,n,i,P,To(T,i),ce,V,fe,G,je,oe,l,W,f,g,p,Y,R),eventStore:mt,percentOfView:W,index:oe,indexPrevious:U,limit:q,location:ce,offsetLocation:x,previousLocation:we,options:s,resizeHandler:Mo(t,l,i,o,T,C,v),scrollBody:G,scrollBounds:Ro(q,x,P,G,W),scrollLooper:Ao(ae,q,x,[ce,x,we,P]),scrollProgress:Pe,scrollSnapList:Q.map(Pe.get),scrollSnaps:Q,scrollTarget:je,scrollTo:fe,slideLooper:Go(T,X,ae,le,Z,ie,Q,x,o),slideFocus:Bt,slidesHandler:$o(t,l,M),slidesInView:Nt,slideIndexes:E,slideRegistry:bt,slidesToScroll:te,target:P,translate:At(T,t)};return nt}function Xo(){let e={},t;function o(c){t=c}function n(c){return e[c]||[]}function i(c){return n(c).forEach(j=>j(t,c)),a}function s(c,j){return e[c]=n(c).concat([j]),a}function l(c,j){return e[c]=n(c).filter(h=>h!==j),a}function u(){e={}}const a={init:o,emit:i,off:l,on:s,clear:u};return a}const Jo={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Qo(e){function t(s,l){return Ft(s,l||{})}function o(s){const l=s.breakpoints||{},u=ze(l).filter(a=>e.matchMedia(a).matches).map(a=>l[a]).reduce((a,c)=>t(a,c),{});return t(s,u)}function n(s){return s.map(l=>ze(l.breakpoints||{})).reduce((l,u)=>l.concat(u),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:o,optionsMediaQueries:n}}function Yo(e){let t=[];function o(s,l){return t=l.filter(({options:u})=>e.optionsAtMedia(u).active!==!1),t.forEach(u=>u.init(s,e)),l.reduce((u,a)=>Object.assign(u,{[a.name]:a}),{})}function n(){t=t.filter(s=>s.destroy())}return{init:o,destroy:n}}function tt(e,t,o){const n=e.ownerDocument,i=n.defaultView,s=Qo(i),l=Yo(s),u=Le(),a=Xo(),{mergeOptions:c,optionsAtMedia:j,optionsMediaQueries:h}=s,{on:d,off:f,emit:g}=a,w=T;let m=!1,p,b=c(Jo,tt.globalOptions),C=c(b),M=[],R,z,I;function v(){const{container:E,slides:S}=C;z=(pt(E)?e.querySelector(E):E)||e.children[0];const V=pt(S)?z.querySelectorAll(S):S;I=[].slice.call(V||z.children)}function L(E){const S=Uo(e,z,I,n,i,E,a);if(E.loop&&!S.slideLooper.canLoop()){const F=Object.assign({},E,{loop:!1});return L(F)}return S}function A(E,S){m||(b=c(b,E),C=j(b),M=S||M,v(),p=L(C),h([b,...M.map(({options:F})=>F)]).forEach(F=>u.add(F,"change",T)),C.active&&(p.translate.to(p.location.get()),p.animation.init(),p.slidesInView.init(),p.slideFocus.init(U),p.eventHandler.init(U),p.resizeHandler.init(U),p.slidesHandler.init(U),p.options.loop&&p.slideLooper.loop(),z.offsetParent&&I.length&&p.dragHandler.init(U),R=l.init(U,M)))}function T(E,S){const F=te();X(),A(c({startIndex:F},E),S),a.emit("reInit")}function X(){p.dragHandler.destroy(),p.eventStore.clear(),p.translate.clear(),p.slideLooper.clear(),p.resizeHandler.destroy(),p.slidesHandler.destroy(),p.slidesInView.destroy(),p.animation.destroy(),l.destroy(),u.clear()}function W(){m||(m=!0,u.clear(),X(),a.emit("destroy"),a.clear())}function ee(E,S,F){!C.active||m||(p.scrollBody.useBaseFriction().useDuration(S===!0?0:C.duration),p.scrollTo.index(E,F||0))}function J(E){const S=p.index.add(1).get();ee(S,E,-1)}function pe(E){const S=p.index.add(-1).get();ee(S,E,1)}function le(){return p.index.add(1).get()!==te()}function Z(){return p.index.add(-1).get()!==te()}function ne(){return p.scrollSnapList}function he(){return p.scrollProgress.get(p.offsetLocation.get())}function te(){return p.index.get()}function ie(){return p.indexPrevious.get()}function de(){return p.slidesInView.get()}function ae(){return p.slidesInView.get(!1)}function me(){return R}function k(){return p}function Q(){return e}function q(){return z}function oe(){return I}const U={canScrollNext:le,canScrollPrev:Z,containerNode:q,internalEngine:k,destroy:W,off:f,on:d,emit:g,plugins:me,previousScrollSnap:ie,reInit:w,rootNode:Q,scrollNext:J,scrollPrev:pe,scrollProgress:he,scrollSnapList:ne,scrollTo:ee,selectedScrollSnap:te,slideNodes:oe,slidesInView:de,slidesNotInView:ae};return A(t,o),setTimeout(()=>a.emit("init"),0),U}tt.globalOptions=void 0;function ft(e={},t=[]){const o=y.useRef(e),n=y.useRef(t),[i,s]=y.useState(),[l,u]=y.useState(),a=y.useCallback(()=>{i&&i.reInit(o.current,n.current)},[i]);return y.useEffect(()=>{ht(o.current,e)||(o.current=e,a())},[e,a]),y.useEffect(()=>{xo(n.current,t)||(n.current=t,a())},[t,a]),y.useEffect(()=>{if(bo()&&l){tt.globalOptions=ft.globalOptions;const c=tt(l,o.current,n.current);return s(c),()=>c.destroy()}else s(void 0)},[l,s]),[u,i]}ft.globalOptions=void 0;const[Zo,Ce]=Qt({name:"CarouselContext"}),Wo=({id:e,align:t="center",autoplay:o=!1,containScroll:n=!1,controlRef:i,defaultIndex:s=0,delay:l=4e3,dragFree:u=!1,draggable:a=!0,duration:c=25,index:j,inViewThreshold:h=0,loop:d=!0,orientation:f="horizontal",plugins:g=[],skipSnaps:w=!1,slidesToScroll:m=1,stopMouseEnterAutoplay:p=!0,watchDrag:b=a,watchResize:C=!0,watchSlides:M=!0,onChange:R,onScrollProgress:z,...I}={})=>{const[v,L]=uo({defaultValue:s,value:j,onChange:R}),[A,T]=Yt(),[X,{off:W,on:ee}]=co(),J=y.useRef(null),pe=y.useRef(new Map),le=y.useRef(null),Z=f==="horizontal",ne=Z?"x":"y",[he,te]=y.useState(0),[ie,de]=y.useState(0),ae=y.useCallback((x,P)=>{const G=Zt(C)?C(x,P):!0,je=x.scrollSnapList().length,fe=x.slideNodes().length;return te(je),de(fe),G},[C]),[me,k]=ft({align:t,axis:ne,container:le.current,containScroll:n,dragFree:u,duration:c,inViewThreshold:h,loop:d,skipSnaps:w,slidesToScroll:m,startIndex:s,watchDrag:b,watchResize:ae,watchSlides:M},g);e??=A;const Q=y.useCallback(x=>{const P=x.scrollSnapList().length,G=x.slideNodes().length;te(P),de(G)},[]),q=y.useCallback(()=>{if(!k)return;const x=Math.round(Math.max(0,Math.min(1,k.scrollProgress()))*100);z?.(x)},[k,z]),oe=y.useCallback(()=>{if(!k)return;const x=k.selectedScrollSnap();L(x)},[k,L]),U=y.useCallback(x=>{pe.current.get(x)?.focus(),k?.scrollTo(x)},[k]),E=y.useCallback(x=>P=>{const G=he-1;Wt(P,{ArrowDown:()=>{Z||(x=x===G?0:x+1,U(x))},ArrowLeft:()=>{Z&&(x=x===0?G:x-1,U(x))},ArrowRight:()=>{Z&&(x=x===G?0:x+1,U(x))},ArrowUp:()=>{Z||(x=x===0?G:x-1,U(x))},End:()=>{U(G)},Home:()=>{U(0)}})},[he,Z,U]);eo(i,k),y.useEffect(()=>{if(k)return k.on("reInit",Q),k.on("select",oe),k.on("scroll",q),q(),()=>{k.off("reInit",Q),k.off("select",oe),k.off("scroll",q)}},[k,Q,q,oe]),y.useEffect(()=>{const x=X&&p,P=!k?.canScrollNext();return k&&o&&!x&&!P?J.current=setInterval(()=>{k.scrollNext()},l):(J.current&&clearInterval(J.current),J.current=null),()=>{J.current&&clearInterval(J.current)}},[o,k,l,X,p]),kt(()=>{k&&j!==void 0&&k.scrollTo(j)},[j]),kt(()=>{k&&k.reInit()},[k,ie,t,ne,n,u,c,h,d,w,m]);const S=y.useCallback(({ref:x,...P}={})=>({id:e,"aria-roledescription":"carousel","data-orientation":f,...I,...P,ref:it(x,I.ref,me),onMouseEnter:ye(P.onMouseEnter,ee),onMouseLeave:ye(P.onMouseLeave,W)}),[e,ee,W,I,me,f]),F=y.useCallback(({ref:x,...P}={})=>({id:T,"aria-live":o?"off":"polite","data-orientation":f,...P,ref:it(x,le)}),[o,T,f]),V=y.useCallback(({index:x,...P})=>{const G=x+1,je=v===x;return{id:`${T}-${x}`,"aria-label":`${G} of ${ie}`,"aria-roledescription":"slide","data-index":x.toString(),"data-orientation":f,"data-selected":ke(je),role:"tabpanel",...P}},[v,T,ie,f]),Y=y.useCallback((x={})=>({"aria-controls":T,"aria-label":"Go to previous slide","data-orientation":f,disabled:!k?.canScrollPrev(),...x,onClick:ye(x.onClick,()=>k?.scrollPrev())}),[k,T,f]),se=y.useCallback((x={})=>({"aria-controls":T,"aria-label":"Go to next slide","data-orientation":f,disabled:!k?.canScrollNext(),...x,onClick:ye(x.onClick,()=>k?.scrollNext())}),[k,T,f]),ce=y.useCallback((x={})=>({"aria-label":"Slides","aria-orientation":f,role:"tablist",...x}),[f]),we=y.useCallback(({ref:x,index:P,...G})=>{const je=P+1,fe=v===P;return{type:"button","aria-controls":`${T}-${P}`,"aria-label":`Go to ${je} slide`,"aria-selected":fe,"data-index":P.toString(),"data-orientation":f,"data-selected":ke(fe),role:"tab",tabIndex:fe?0:-1,...G,ref:it(x,Pe=>{pe.current.set(P,Pe)}),onClick:ye(G.onClick,()=>k?.scrollTo(P)),onKeyDown:ye(G.onKeyDown,E(P))}},[k,v,T,f,E]);return{carousel:k,count:ie,index:v,setIndex:L,snapCount:he,getIndicatorProps:we,getIndicatorsProps:ce,getItemProps:V,getListProps:F,getNextTriggerProps:se,getPrevTriggerProps:Y,getRootProps:S}},{ComponentContext:er,useComponentContext:Dt,withContext:Se,withProvider:tr}=to("carousel",fo),D=tr(({includeGapInSize:e=!0,...t})=>{const o=re(t.align),n=re(t.autoplay),i=re(t.containScroll),s=re(t.delay),l=re(t.dragFree),u=re(t.draggable),a=re(t.duration),c=re(t.inViewThreshold),j=re(t.loop),h=re(t.orientation),d=re(t.skipSnaps),f=re(t.slidesToScroll),g=re(t.stopMouseEnterAutoplay),{carousel:w,count:m,index:p,setIndex:b,snapCount:C,getIndicatorProps:M,getIndicatorsProps:R,getItemProps:z,getListProps:I,getNextTriggerProps:v,getPrevTriggerProps:L,getRootProps:A}=Wo({...t,align:o,autoplay:n,containScroll:i,delay:s,dragFree:l,draggable:u,duration:a,inViewThreshold:c,loop:j,orientation:h,skipSnaps:d,slidesToScroll:f,stopMouseEnterAutoplay:g}),T=y.useMemo(()=>({includeGapInSize:e}),[e]),X=y.useMemo(()=>({carousel:w,count:m,index:p,setIndex:b,snapCount:C,getIndicatorProps:M,getIndicatorsProps:R,getItemProps:z,getListProps:I,getNextTriggerProps:v,getPrevTriggerProps:L}),[w,m,p,b,C,M,R,z,I,v,L]);return r.jsx(Zo,{value:X,children:r.jsx(er,{value:T,children:r.jsx(oo.section,{...A()})})})},"root")(void 0,({gap:e,slideSize:t,...o})=>({...o,"--slide-gap":ct(e,"spaces"),"--slide-size":ct(t,"sizes")})),O=Se("div","list")(void 0,e=>{const{includeGapInSize:t}=Dt(),{getListProps:o}=Ce();return{"data-include-gap-in-size":ke(t),...o(e)}}),_=Se("div","item")(void 0,({slideSize:e,...t})=>{const{includeGapInSize:o}=Dt(),{getItemProps:n}=Ce();return{"data-include-gap-in-size":ke(o),"--slide-size":ct(e,"sizes"),...n(t)}}),$=Se(Rt,{name:"PrevTrigger",slot:["trigger","prev"]})(void 0,e=>{const{getPrevTriggerProps:t}=Ce();return{fullRounded:!0,icon:r.jsx(lo,{}),...t(e)}}),H=Se(Rt,{name:"NextTrigger",slot:["trigger","next"]})(void 0,e=>{const{getNextTriggerProps:t}=Ce();return{fullRounded:!0,icon:r.jsx(po,{}),...t(e)}}),K=Se("div","indicators")(void 0,({children:e,render:t,...o})=>{const{index:n,snapCount:i,getIndicatorProps:s,getIndicatorsProps:l}=Ce();return{children:y.useMemo(()=>e||Array.from({length:i},(a,c)=>{if(t){const j=t({index:c,selected:c===n});return y.isValidElement(j)?y.cloneElement(j,{...s({key:c,index:c})}):j}else return r.jsx(or,{index:c},c)}),[e,s,t,n,i]),...l(o)}}),or=Se("button","indicator")(void 0,e=>{const{getIndicatorProps:t}=Ce();return t(e)}),Mr={component:D,title:"Components / Carousel"},Fe=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ee=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:["sm","md","lg"],children:(t,o,n)=>r.jsxs(D,{size:o,children:[r.jsx(O,{children:e.map((i,s)=>r.jsx(_,{index:s,children:r.jsx(B,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]},n)})},Ae=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:ro,children:(t,o,n)=>r.jsxs(D,{colorScheme:o,children:[r.jsx(O,{children:e.map((i,s)=>r.jsx(_,{index:s,children:r.jsx(B,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]},n)})},De=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{defaultIndex:1,children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ne=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:["horizontal","vertical"],children:(t,o,n)=>r.jsxs(D,{orientation:o,children:[r.jsx(O,{children:e.map((i,s)=>r.jsx(_,{index:s,children:r.jsx(B,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]},n)})},Be=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:["center","start","end"],children:(t,o,n)=>r.jsxs(D,{align:o,children:[r.jsx(O,{children:e.map((i,s)=>r.jsx(_,{index:s,children:r.jsx(B,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]},n)})},Oe=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{gap:0,children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},_e=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{duration:60,children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ve=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{slideSize:"50%",children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,slideSize:o===1?"100%":void 0,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ge=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{slideSize:`${100/3}%`,slidesToScroll:3,children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},$e=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{dragFree:!0,children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},He=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{autoplay:!0,children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ke=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{autoplay:!0,delay:1e3,children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},qe=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ue=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{loop:!1,children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Xe=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{draggable:!1,children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Je=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{includeGapInSize:!1,slideSize:"50%",children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Qe=()=>{const[e,t]=y.useState(0),o=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(r.Fragment,{children:[r.jsxs(D,{dragFree:!0,loop:!1,onScrollProgress:t,children:[r.jsx(O,{children:o.map((n,i)=>r.jsx(_,{index:i,children:r.jsx(B,{src:n,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]}),r.jsx(so,{value:e})]})},Ye=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{watchDrag:(t,o)=>(console.log("drag",t,o),!0),watchResize:(t,o)=>(console.log("resized",t,o),!0),watchSlides:(t,o)=>(console.log("slides updated",t,o),!0),children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ze=()=>{const[e,t]=y.useState(0),o=y.useMemo(()=>Array.from({length:50},(n,i)=>`https://www.ghibli.jp/gallery/baron0${(i+1).toString().padStart(2,"0")}.jpg`),[]);return r.jsxs(ut,{gap:"md",children:[r.jsx(D,{index:e,onChange:t,children:r.jsx(O,{children:o.map((n,i)=>r.jsx(_,{index:i,children:r.jsx(B,{src:n,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))})}),r.jsx(D,{containScroll:"keepSnaps",dragFree:!0,h:"5xs",index:e,slideSize:"20%",children:r.jsx(O,{children:o.map((n,i)=>r.jsx(_,{cursor:"pointer",index:i,opacity:"0.4",_selected:{opacity:1},onClick:()=>t(i),children:r.jsx(B,{src:n,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))})})]})},We=()=>{const e=y.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(D,{children:[r.jsx(O,{children:e.map((t,o)=>r.jsx(_,{index:o,children:r.jsx(B,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx($,{bottom:"4",icon:r.jsx(io,{}),top:"unset",transform:"unset"}),r.jsx(H,{bottom:"4",icon:r.jsx(go,{}),top:"unset",transform:"unset"}),r.jsx(K,{h:"6",render:({selected:t})=>r.jsx(no,{as:"button",cursor:"pointer",children:r.jsx(jo,{"data-selected":ke(t),color:"transparent",fill:"colorScheme.solid/40",fontSize:"2xl",_selected:{fill:"colorScheme.solid"},_hover:{_notSelected:{fill:"colorScheme.solid/70"}}})})})]})},et=()=>{const e=y.useRef(null),[t,o]=y.useState(0),[n,i]=y.useState(["https://www.ghibli.jp/gallery/baron001.jpg","https://www.ghibli.jp/gallery/baron002.jpg","https://www.ghibli.jp/gallery/baron003.jpg","https://www.ghibli.jp/gallery/baron004.jpg","https://www.ghibli.jp/gallery/baron005.jpg"]);return r.jsxs(r.Fragment,{children:[r.jsxs(D,{controlRef:e,index:t,onChange:o,children:[r.jsx(O,{children:n.map((s,l)=>r.jsx(_,{index:l,children:r.jsx(B,{src:s,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},l))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]}),r.jsxs(at,{children:[r.jsx(ge,{disabled:n.length===50,onClick:()=>{const s=(n.length+1).toString().padStart(2,"0"),l=[...n,`https://www.ghibli.jp/gallery/baron0${s}.jpg`];i(l),o(l.length-1)},children:"Add"}),r.jsx(ge,{disabled:n.length===1,onClick:()=>{t===n.length-1&&o(s=>s-1),i(n.slice(0,-1))},children:"Remove"})]}),r.jsxs(ut,{gap:"sm",children:[r.jsx(Tt,{children:"State"}),r.jsxs(at,{children:[r.jsx(ge,{onClick:()=>o(0),children:"Home"}),r.jsx(ge,{onClick:()=>o(s=>s===0?n.length-1:s-1),children:"Prev"}),r.jsx(ge,{onClick:()=>o(s=>s===n.length-1?0:s+1),children:"Next"}),r.jsx(ge,{onClick:()=>o(n.length-1),children:"End"})]})]}),r.jsxs(ut,{gap:"sm",children:[r.jsx(Tt,{children:"Ref"}),r.jsxs(at,{children:[r.jsx(ge,{onClick:()=>e.current?.scrollTo(0),children:"Home"}),r.jsx(ge,{onClick:()=>e.current?.scrollPrev(),children:"Prev"}),r.jsx(ge,{onClick:()=>e.current?.scrollNext(),children:"Next"}),r.jsx(ge,{onClick:()=>e.current?.scrollTo(n.length-1),children:"End"})]})]})]})};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Fe.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ee.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ae.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`() => {
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
}`,...De.parameters?.docs?.source}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ne.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`() => {
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
}`,...Be.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Oe.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`() => {
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
}`,..._e.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ve.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ge.parameters?.docs?.source}}};$e.parameters={...$e.parameters,docs:{...$e.parameters?.docs,source:{originalSource:`() => {
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
}`,...$e.parameters?.docs?.source}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`() => {
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
}`,...He.parameters?.docs?.source}}};Ke.parameters={...Ke.parameters,docs:{...Ke.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ke.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`() => {
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
}`,...qe.parameters?.docs?.source}}};Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ue.parameters?.docs?.source}}};Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Xe.parameters?.docs?.source}}};Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`() => {
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
}`,...Je.parameters?.docs?.source}}};Qe.parameters={...Qe.parameters,docs:{...Qe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Qe.parameters?.docs?.source}}};Ye.parameters={...Ye.parameters,docs:{...Ye.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ye.parameters?.docs?.source}}};Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const sources = useMemo(() => Array.from({
    length: 50
  }, (_, index) => {
    const num = (index + 1).toString().padStart(2, "0");
    return \`https://www.ghibli.jp/gallery/baron0\${num}.jpg\`;
  }), []);
  return <VStack gap="md">
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
}`,...Ze.parameters?.docs?.source}}};We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`() => {
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
            <CircleIcon data-selected={dataAttr(selected)} color="transparent" fill="colorScheme.solid/40" fontSize="2xl" _selected={{
        fill: "colorScheme.solid"
      }} _hover={{
        _notSelected: {
          fill: "colorScheme.solid/70"
        }
      }} />
          </Center>} />
    </Carousel.Root>;
}`,...We.parameters?.docs?.source}}};et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`() => {
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

      <ButtonGroup>
        <Button disabled={sources.length === 50} onClick={() => {
        const num = (sources.length + 1).toString().padStart(2, "0");
        const nextSources = [...sources, \`https://www.ghibli.jp/gallery/baron0\${num}.jpg\`];
        setSources(nextSources);
        setIndex(nextSources.length - 1);
      }}>
          Add
        </Button>
        <Button disabled={sources.length === 1} onClick={() => {
        if (index === sources.length - 1) setIndex(prev => prev - 1);
        setSources(sources.slice(0, -1));
      }}>
          Remove
        </Button>
      </ButtonGroup>

      <VStack gap="sm">
        <Text>State</Text>
        <ButtonGroup>
          <Button onClick={() => setIndex(0)}>Home</Button>
          <Button onClick={() => setIndex(prev => prev === 0 ? sources.length - 1 : prev - 1)}>
            Prev
          </Button>
          <Button onClick={() => setIndex(prev => prev === sources.length - 1 ? 0 : prev + 1)}>
            Next
          </Button>
          <Button onClick={() => setIndex(sources.length - 1)}>End</Button>
        </ButtonGroup>
      </VStack>

      <VStack gap="sm">
        <Text>Ref</Text>
        <ButtonGroup>
          <Button onClick={() => controlRef.current?.scrollTo(0)}>Home</Button>
          <Button onClick={() => controlRef.current?.scrollPrev()}>Prev</Button>
          <Button onClick={() => controlRef.current?.scrollNext()}>Next</Button>
          <Button onClick={() => controlRef.current?.scrollTo(sources.length - 1)}>
            End
          </Button>
        </ButtonGroup>
      </VStack>
    </>;
}`,...et.parameters?.docs?.source}}};const Pr=["Basic","Size","ColorScheme","DefaultIndex","Orientation","Align","Gap","Duration","SlideSize","SlidesToScroll","DragFree","Autoplay","Delay","DisabledStopMouseEnterAutoplay","DisabledLoop","DisabledDraggable","DisabledIncludeGapInSize","ScrollProgress","Methods","Thumbnails","CustomComponent","CustomControl"];export{Be as Align,He as Autoplay,Fe as Basic,Ae as ColorScheme,We as CustomComponent,et as CustomControl,De as DefaultIndex,Ke as Delay,Xe as DisabledDraggable,Je as DisabledIncludeGapInSize,Ue as DisabledLoop,qe as DisabledStopMouseEnterAutoplay,$e as DragFree,_e as Duration,Oe as Gap,Ye as Methods,Ne as Orientation,Qe as ScrollProgress,Ee as Size,Ve as SlideSize,Ge as SlidesToScroll,Ze as Thumbnails,Pr as __namedExportsOrder,Mr as default};
