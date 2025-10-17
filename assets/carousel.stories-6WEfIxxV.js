import{n as Ut,o as qt,I as Xt,d as Yt,r as C,c as Jt,J as Qt,a2 as Zt,a3 as Wt,a as eo,a4 as to,P as vt,h as ye,m as it,b as ke,g as oo,j as r,s as ro,Y as ct,$ as Rt,C as no,V as ut,Z as so,S as pe,T as kt}from"./iframe-BynoZ0Oq.js";import{P as ot}from"./props-table-fajrmhzO.js";import{I as G}from"./image-zpPSyvJL.js";import{P as lo}from"./progress-gJPGg4fR.js";import{A as io}from"./arrow-left-icon-DqUPNLay.js";import{u as ao}from"./index-Bu3mq-Bw.js";import{u as co}from"./index-DqVm0Cqq.js";import{C as uo}from"./chevron-left-icon-CA2hJosJ.js";import{C as po}from"./chevron-right-icon-3fD48bFY.js";import{A as go}from"./arrow-right-icon-DjJ1fY1O.js";import{B as at}from"./button-group-C8y6T7zD.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-MdBZoBbZ.js";import"./grid-item-DEfTZrVK.js";import"./for-BimcTw3e.js";import"./flex-zG46G6gY.js";import"./heading-Dpwm0c5v.js";import"./use-progress-CxuEbEsj.js";import"./number-CcP_arM8.js";import"./group-irclAYM3.js";import"./index-CZ4fKwKe.js";import"./use-breakpoint-QKtk9N9n.js";import"./use-breakpoint-value-CHMWBrQj.js";import"./use-color-mode-value-Tay-h-eC.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],wo=Ut("circle",ho),jo=qt(Xt)({as:wo}),fo=Yt({base:{indicator:{bg:"colorScheme.solid/40",cursor:"pointer",rounded:"full",transitionDuration:"moderate",transitionProperty:"common",_horizontal:{w:"10"},_vertical:{h:"10"},_hover:{_notSelected:{bg:"colorScheme.solid/70"}},_selected:{bg:"colorScheme.solid"},_disabled:{layerStyle:"disabled"}},indicators:{display:"flex",gap:"2",justifyContent:"center",position:"absolute",zIndex:"yamcha",_horizontal:{bottom:"4",flexDirection:"row",h:"2",left:"50%",px:"4",transform:"translateX(-50%)",w:"full"},_vertical:{flexDirection:"column",h:"full",py:"4",right:"4",top:"50%",transform:"translateY(-50%)",w:"2"}},item:{"&:not([data-include-gap-in-size])":{_horizontal:{mr:"{slide-gap}"},_vertical:{mb:"{slide-gap}"}},"&[data-include-gap-in-size]":{_horizontal:{pr:"{slide-gap}"},_vertical:{pb:"{slide-gap}"}},boxSize:"full",flex:"0 0 {slide-size}",position:"relative"},list:{"&[data-include-gap-in-size]":{_horizontal:{mr:"calc({slide-gap} * -1)"},_vertical:{mb:"calc({slide-gap} * -1)"}},display:"flex",h:"full",_horizontal:{flexDirection:"row"},_vertical:{flexDirection:"column"}},next:{_horizontal:{right:"4"},_vertical:{bottom:"4"}},prev:{_horizontal:{left:"4"},_vertical:{top:"4"}},root:{"--slide-gap":"spaces.4","--slide-size":"sizes.full",overflow:"hidden",position:"relative",w:"full"},trigger:{position:"absolute",zIndex:"kurillin",_horizontal:{top:"50%",transform:"translateY(-50%)"},_vertical:{left:"50%",transform:"translateX(-50%) rotate(90deg)"}}},sizes:{sm:{root:{h:"sm"}},md:{root:{h:"md"}},lg:{root:{h:"lg"}}},defaultProps:{size:"md"}});function mo(e){return Object.prototype.toString.call(e)==="[object Object]"}function Tt(e){return mo(e)||Array.isArray(e)}function bo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ht(e,o){const t=Object.keys(e),n=Object.keys(o);if(t.length!==n.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),s=JSON.stringify(Object.keys(o.breakpoints||{}));return i!==s?!1:t.every(l=>{const u=e[l],a=o[l];return typeof u=="function"?`${u}`==`${a}`:!Tt(u)||!Tt(a)?u===a:ht(u,a)})}function zt(e){return e.concat().sort((o,t)=>o.name>t.name?1:-1).map(o=>o.options)}function xo(e,o){if(e.length!==o.length)return!1;const t=zt(e),n=zt(o);return t.every((i,s)=>{const l=n[s];return ht(i,l)})}function dt(e){return typeof e=="number"}function pt(e){return typeof e=="string"}function rt(e){return typeof e=="boolean"}function Lt(e){return Object.prototype.toString.call(e)==="[object Object]"}function B(e){return Math.abs(e)}function wt(e){return Math.sign(e)}function ve(e,o){return B(e-o)}function yo(e,o){if(e===0||o===0||B(e)<=B(o))return 0;const t=ve(B(e),B(o));return B(t/e)}function Co(e){return Math.round(e*100)/100}function Te(e){return ze(e).map(Number)}function ce(e){return e[Me(e)]}function Me(e){return Math.max(0,e.length-1)}function jt(e,o){return o===Me(e)}function Mt(e,o=0){return Array.from(Array(e),(t,n)=>o+n)}function ze(e){return Object.keys(e)}function Pt(e,o){return[e,o].reduce((t,n)=>(ze(n).forEach(i=>{const s=t[i],l=n[i],u=Lt(s)&&Lt(l);t[i]=u?Pt(s,l):l}),t),{})}function gt(e,o){return typeof o.MouseEvent<"u"&&e instanceof o.MouseEvent}function So(e,o){const t={start:n,center:i,end:s};function n(){return 0}function i(a){return s(a)/2}function s(a){return o-a}function l(a,c){return pt(e)?t[e](a):e(o,a,c)}return{measure:l}}function Le(){let e=[];function o(i,s,l,u={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(s,l,u),a=()=>i.removeEventListener(s,l,u);else{const c=i;c.addListener(l),a=()=>c.removeListener(l)}return e.push(a),n}function t(){e=e.filter(i=>i())}const n={add:o,clear:t};return n}function Io(e,o,t,n){const i=Le(),s=1e3/60;let l=null,u=0,a=0;function c(){i.add(e,"visibilitychange",()=>{e.hidden&&g()})}function j(){f(),i.clear()}function h(m){if(!a)return;l||(l=m,t(),t());const p=m-l;for(l=m,u+=p;u>=s;)t(),u-=s;const b=u/s;n(b),a&&(a=o.requestAnimationFrame(h))}function d(){a||(a=o.requestAnimationFrame(h))}function f(){o.cancelAnimationFrame(a),l=null,u=0,a=0}function g(){l=null,u=0}return{init:c,destroy:j,start:d,stop:f,update:t,render:n}}function vo(e,o){const t=o==="rtl",n=e==="y",i=n?"y":"x",s=n?"x":"y",l=!n&&t?-1:1,u=j(),a=h();function c(g){const{height:w,width:m}=g;return n?w:m}function j(){return n?"top":t?"right":"left"}function h(){return n?"bottom":t?"left":"right"}function d(g){return g*l}return{scroll:i,cross:s,startEdge:u,endEdge:a,measureSize:c,direction:d}}function be(e=0,o=0){const t=B(e-o);function n(c){return c<e}function i(c){return c>o}function s(c){return n(c)||i(c)}function l(c){return s(c)?n(c)?e:o:c}function u(c){return t?c-t*Math.ceil((c-o)/t):c}return{length:t,max:o,min:e,constrain:l,reachedAny:s,reachedMax:i,reachedMin:n,removeOffset:u}}function Ft(e,o,t){const{constrain:n}=be(0,e),i=e+1;let s=l(o);function l(d){return t?B((i+d)%i):n(d)}function u(){return s}function a(d){return s=l(d),h}function c(d){return j().set(u()+d)}function j(){return Ft(e,u(),t)}const h={get:u,set:a,add:c,clone:j};return h}function ko(e,o,t,n,i,s,l,u,a,c,j,h,d,f,g,w,m,p,b){const{cross:S,direction:L}=e,E=["INPUT","SELECT","TEXTAREA"],z={passive:!1},k=Le(),v=Le(),T=be(50,225).constrain(f.measure(20)),D={mouse:300,touch:400},P={mouse:500,touch:600},A=g?43:25;let ee=!1,te=0,oe=0,Q=!1,le=!1,re=!1,Y=!1;function we(x){if(!b)return;function F(X){(rt(b)||b(x,X))&&je(X)}const V=o;k.add(V,"dragstart",X=>X.preventDefault(),z).add(V,"touchmove",()=>{},z).add(V,"touchend",()=>{}).add(V,"touchstart",F).add(V,"mousedown",F).add(V,"touchcancel",U).add(V,"contextmenu",U).add(V,"click",W,!0)}function Z(){k.clear(),v.clear()}function ge(){const x=Y?t:o;v.add(x,"touchmove",I,z).add(x,"touchend",U).add(x,"mousemove",I,z).add(x,"mouseup",U)}function ie(x){const F=x.nodeName||"";return E.includes(F)}function ne(){return(g?P:D)[Y?"mouse":"touch"]}function me(x,F){const V=h.add(wt(x)*-1),X=j.byDistance(x,!g).distance;return g||B(x)<T?X:m&&F?X*.5:j.byIndex(V.get(),0).distance}function je(x){const F=gt(x,n);Y=F,re=g&&F&&!x.buttons&&ee,ee=ve(i.get(),l.get())>=2,!(F&&x.button!==0)&&(ie(x.target)||(Q=!0,s.pointerDown(x),c.useFriction(0).useDuration(0),i.set(l),ge(),te=s.readPoint(x),oe=s.readPoint(x,S),d.emit("pointerDown")))}function I(x){if(!gt(x,n)&&x.touches.length>=2)return U(x);const V=s.readPoint(x),X=s.readPoint(x,S),se=ve(V,te),ae=ve(X,oe);if(!le&&!Y&&(!x.cancelable||(le=se>ae,!le)))return U(x);const he=s.pointerMove(x);se>w&&(re=!0),c.useFriction(.3).useDuration(.75),u.start(),i.add(L(he)),x.preventDefault()}function U(x){const V=j.byDistance(0,!1).index!==h.get(),X=s.pointerUp(x)*ne(),se=me(L(X),V),ae=yo(X,se),he=A-10*ae,ue=p+ae/50;le=!1,Q=!1,v.clear(),c.useDuration(he).useFriction(ue),a.distance(se,!g),Y=!1,d.emit("pointerUp")}function W(x){re&&(x.stopPropagation(),x.preventDefault(),re=!1)}function J(){return Q}return{init:we,destroy:Z,pointerDown:J}}function To(e,o){let n,i;function s(h){return h.timeStamp}function l(h,d){const g=`client${(d||e.scroll)==="x"?"X":"Y"}`;return(gt(h,o)?h:h.touches[0])[g]}function u(h){return n=h,i=h,l(h)}function a(h){const d=l(h)-l(i),f=s(h)-s(n)>170;return i=h,f&&(n=h),d}function c(h){if(!n||!i)return 0;const d=l(i)-l(n),f=s(h)-s(n),g=s(h)-s(i)>170,w=d/f;return f&&!g&&B(w)>.1?w:0}return{pointerDown:u,pointerMove:a,pointerUp:c,readPoint:l}}function zo(){function e(t){const{offsetTop:n,offsetLeft:i,offsetWidth:s,offsetHeight:l}=t;return{top:n,right:i+s,bottom:n+l,left:i,width:s,height:l}}return{measure:e}}function Lo(e){function o(n){return e*(n/100)}return{measure:o}}function Mo(e,o,t,n,i,s,l){const u=[e].concat(n);let a,c,j=[],h=!1;function d(m){return i.measureSize(l.measure(m))}function f(m){if(!s)return;c=d(e),j=n.map(d);function p(b){for(const S of b){if(h)return;const L=S.target===e,E=n.indexOf(S.target),z=L?c:j[E],k=d(L?e:n[E]);if(B(k-z)>=.5){m.reInit(),o.emit("resize");break}}}a=new ResizeObserver(b=>{(rt(s)||s(m,b))&&p(b)}),t.requestAnimationFrame(()=>{u.forEach(b=>a.observe(b))})}function g(){h=!0,a&&a.disconnect()}return{init:f,destroy:g}}function Ro(e,o,t,n,i,s){let l=0,u=0,a=i,c=s,j=e.get(),h=0;function d(){const z=n.get()-e.get(),k=!a;let v=0;return k?(l=0,t.set(n),e.set(n),v=z):(t.set(e),l+=z/a,l*=c,j+=l,e.add(l),v=j-h),u=wt(v),h=j,E}function f(){const z=n.get()-o.get();return B(z)<.001}function g(){return a}function w(){return u}function m(){return l}function p(){return S(i)}function b(){return L(s)}function S(z){return a=z,E}function L(z){return c=z,E}const E={direction:w,duration:g,velocity:m,seek:d,settled:f,useBaseFriction:b,useBaseDuration:p,useFriction:L,useDuration:S};return E}function Po(e,o,t,n,i){const s=i.measure(10),l=i.measure(50),u=be(.1,.99);let a=!1;function c(){return!(a||!e.reachedAny(t.get())||!e.reachedAny(o.get()))}function j(f){if(!c())return;const g=e.reachedMin(o.get())?"min":"max",w=B(e[g]-o.get()),m=t.get()-o.get(),p=u.constrain(w/l);t.subtract(m*p),!f&&B(m)<s&&(t.set(e.constrain(t.get())),n.useDuration(25).useBaseFriction())}function h(f){a=!f}return{shouldConstrain:c,constrain:j,toggleActive:h}}function Fo(e,o,t,n,i){const s=be(-o+e,0),l=h(),u=j(),a=d();function c(g,w){return ve(g,w)<=1}function j(){const g=l[0],w=ce(l),m=l.lastIndexOf(g),p=l.indexOf(w)+1;return be(m,p)}function h(){return t.map((g,w)=>{const{min:m,max:p}=s,b=s.constrain(g),S=!w,L=jt(t,w);return S?p:L||c(m,b)?m:c(p,b)?p:b}).map(g=>parseFloat(g.toFixed(3)))}function d(){if(o<=e+i)return[s.max];if(n==="keepSnaps")return l;const{min:g,max:w}=u;return l.slice(g,w)}return{snapsContained:a,scrollContainLimit:u}}function Eo(e,o,t){const n=o[0],i=t?n-e:ce(o);return{limit:be(i,n)}}function Ao(e,o,t,n){const s=o.min+.1,l=o.max+.1,{reachedMin:u,reachedMax:a}=be(s,l);function c(d){return d===1?a(t.get()):d===-1?u(t.get()):!1}function j(d){if(!c(d))return;const f=e*(d*-1);n.forEach(g=>g.add(f))}return{loop:j}}function Do(e){const{max:o,length:t}=e;function n(s){const l=s-o;return t?l/-t:0}return{get:n}}function No(e,o,t,n,i){const{startEdge:s,endEdge:l}=e,{groupSlides:u}=i,a=h().map(o.measure),c=d(),j=f();function h(){return u(n).map(w=>ce(w)[l]-w[0][s]).map(B)}function d(){return n.map(w=>t[s]-w[s]).map(w=>-B(w))}function f(){return u(c).map(w=>w[0]).map((w,m)=>w+a[m])}return{snaps:c,snapsAligned:j}}function Bo(e,o,t,n,i,s){const{groupSlides:l}=i,{min:u,max:a}=n,c=j();function j(){const d=l(s),f=!e||o==="keepSnaps";return t.length===1?[s]:f?d:d.slice(u,a).map((g,w,m)=>{const p=!w,b=jt(m,w);if(p){const S=ce(m[0])+1;return Mt(S)}if(b){const S=Me(s)-ce(m)[0]+1;return Mt(S,ce(m)[0])}return g})}return{slideRegistry:c}}function Go(e,o,t,n,i){const{reachedAny:s,removeOffset:l,constrain:u}=n;function a(g){return g.concat().sort((w,m)=>B(w)-B(m))[0]}function c(g){const w=e?l(g):u(g),m=o.map((b,S)=>({diff:j(b-w,0),index:S})).sort((b,S)=>B(b.diff)-B(S.diff)),{index:p}=m[0];return{index:p,distance:w}}function j(g,w){const m=[g,g+t,g-t];if(!e)return g;if(!w)return a(m);const p=m.filter(b=>wt(b)===w);return p.length?a(p):ce(m)-t}function h(g,w){const m=o[g]-i.get(),p=j(m,w);return{index:g,distance:p}}function d(g,w){const m=i.get()+g,{index:p,distance:b}=c(m),S=!e&&s(m);if(!w||S)return{index:p,distance:g};const L=o[p]-b,E=g+j(L,0);return{index:p,distance:E}}return{byDistance:d,byIndex:h,shortcut:j}}function Oo(e,o,t,n,i,s,l){function u(h){const d=h.distance,f=h.index!==o.get();s.add(d),d&&(n.duration()?e.start():(e.update(),e.render(1),e.update())),f&&(t.set(o.get()),o.set(h.index),l.emit("select"))}function a(h,d){const f=i.byDistance(h,d);u(f)}function c(h,d){const f=o.clone().set(h),g=i.byIndex(f.get(),d);u(g)}return{distance:a,index:c}}function _o(e,o,t,n,i,s,l,u){const a={passive:!0,capture:!0};let c=0;function j(f){if(!u)return;function g(w){if(new Date().getTime()-c>10)return;l.emit("slideFocusStart"),e.scrollLeft=0;const b=t.findIndex(S=>S.includes(w));dt(b)&&(i.useDuration(0),n.index(b,0),l.emit("slideFocus"))}s.add(document,"keydown",h,!1),o.forEach((w,m)=>{s.add(w,"focus",p=>{(rt(u)||u(f,p))&&g(m)},a)})}function h(f){f.code==="Tab"&&(c=new Date().getTime())}return{init:j}}function Ie(e){let o=e;function t(){return o}function n(a){o=l(a)}function i(a){o+=l(a)}function s(a){o-=l(a)}function l(a){return dt(a)?a:a.get()}return{get:t,set:n,add:i,subtract:s}}function Et(e,o){const t=e.scroll==="x"?l:u,n=o.style;let i=null,s=!1;function l(d){return`translate3d(${d}px,0px,0px)`}function u(d){return`translate3d(0px,${d}px,0px)`}function a(d){if(s)return;const f=Co(e.direction(d));f!==i&&(n.transform=t(f),i=f)}function c(d){s=!d}function j(){s||(n.transform="",o.getAttribute("style")||o.removeAttribute("style"))}return{clear:j,to:a,toggleActive:c}}function Vo(e,o,t,n,i,s,l,u,a){const j=Te(i),h=Te(i).reverse(),d=p().concat(b());function f(k,v){return k.reduce((T,D)=>T-i[D],v)}function g(k,v){return k.reduce((T,D)=>f(T,v)>0?T.concat([D]):T,[])}function w(k){return s.map((v,T)=>({start:v-n[T]+.5+k,end:v+o-.5+k}))}function m(k,v,T){const D=w(v);return k.map(P=>{const A=T?0:-t,ee=T?t:0,te=T?"end":"start",oe=D[P][te];return{index:P,loopPoint:oe,slideLocation:Ie(-1),translate:Et(e,a[P]),target:()=>u.get()>oe?A:ee}})}function p(){const k=l[0],v=g(h,k);return m(v,t,!1)}function b(){const k=o-l[0]-1,v=g(j,k);return m(v,-t,!0)}function S(){return d.every(({index:k})=>{const v=j.filter(T=>T!==k);return f(v,o)<=.1})}function L(){d.forEach(k=>{const{target:v,translate:T,slideLocation:D}=k,P=v();P!==D.get()&&(T.to(P),D.set(P))})}function E(){d.forEach(k=>k.translate.clear())}return{canLoop:S,clear:E,loop:L,loopPoints:d}}function $o(e,o,t){let n,i=!1;function s(a){if(!t)return;function c(j){for(const h of j)if(h.type==="childList"){a.reInit(),o.emit("slidesChanged");break}}n=new MutationObserver(j=>{i||(rt(t)||t(a,j))&&c(j)}),n.observe(e,{childList:!0})}function l(){n&&n.disconnect(),i=!0}return{init:s,destroy:l}}function Ho(e,o,t,n){const i={};let s=null,l=null,u,a=!1;function c(){u=new IntersectionObserver(g=>{a||(g.forEach(w=>{const m=o.indexOf(w.target);i[m]=w}),s=null,l=null,t.emit("slidesInView"))},{root:e.parentElement,threshold:n}),o.forEach(g=>u.observe(g))}function j(){u&&u.disconnect(),a=!0}function h(g){return ze(i).reduce((w,m)=>{const p=parseInt(m),{isIntersecting:b}=i[p];return(g&&b||!g&&!b)&&w.push(p),w},[])}function d(g=!0){if(g&&s)return s;if(!g&&l)return l;const w=h(g);return g&&(s=w),g||(l=w),w}return{init:c,destroy:j,get:d}}function Ko(e,o,t,n,i,s){const{measureSize:l,startEdge:u,endEdge:a}=e,c=t[0]&&i,j=g(),h=w(),d=t.map(l),f=m();function g(){if(!c)return 0;const b=t[0];return B(o[u]-b[u])}function w(){if(!c)return 0;const b=s.getComputedStyle(ce(n));return parseFloat(b.getPropertyValue(`margin-${a}`))}function m(){return t.map((b,S,L)=>{const E=!S,z=jt(L,S);return E?d[S]+j:z?d[S]+h:L[S+1][u]-b[u]}).map(B)}return{slideSizes:d,slideSizesWithGaps:f,startGap:j,endGap:h}}function Uo(e,o,t,n,i,s,l,u,a){const{startEdge:c,endEdge:j,direction:h}=e,d=dt(t);function f(p,b){return Te(p).filter(S=>S%b===0).map(S=>p.slice(S,S+b))}function g(p){return p.length?Te(p).reduce((b,S,L)=>{const E=ce(b)||0,z=E===0,k=S===Me(p),v=i[c]-s[E][c],T=i[c]-s[S][j],D=!n&&z?h(l):0,P=!n&&k?h(u):0,A=B(T-P-(v+D));return L&&A>o+a&&b.push(S),k&&b.push(p.length),b},[]).map((b,S,L)=>{const E=Math.max(L[S-1]||0);return p.slice(E,b)}):[]}function w(p){return d?f(p,t):g(p)}return{groupSlides:w}}function qo(e,o,t,n,i,s,l){const{align:u,axis:a,direction:c,startIndex:j,loop:h,duration:d,dragFree:f,dragThreshold:g,inViewThreshold:w,slidesToScroll:m,skipSnaps:p,containScroll:b,watchResize:S,watchSlides:L,watchDrag:E,watchFocus:z}=s,k=2,v=zo(),T=v.measure(o),D=t.map(v.measure),P=vo(a,c),A=P.measureSize(T),ee=Lo(A),te=So(u,A),oe=!h&&!!b,Q=h||!!b,{slideSizes:le,slideSizesWithGaps:re,startGap:Y,endGap:we}=Ko(P,T,D,t,Q,i),Z=Uo(P,A,m,h,T,D,Y,we,k),{snaps:ge,snapsAligned:ie}=No(P,te,T,D,Z),ne=-ce(ge)+ce(re),{snapsContained:me,scrollContainLimit:je}=Fo(A,ne,ie,b,k),I=oe?me:ie,{limit:U}=Eo(ne,I,h),W=Ft(Me(I),j,h),J=W.clone(),M=Te(t),x=({dragHandler:xe,scrollBody:st,scrollBounds:lt,options:{loop:Pe}})=>{Pe||lt.constrain(xe.pointerDown()),st.seek()},F=({scrollBody:xe,translate:st,location:lt,offsetLocation:Pe,previousLocation:Bt,scrollLooper:Gt,slideLooper:Ot,dragHandler:_t,animation:Vt,eventHandler:bt,scrollBounds:$t,options:{loop:xt}},yt)=>{const Ct=xe.settled(),Ht=!$t.shouldConstrain(),St=xt?Ct:Ct&&Ht,It=St&&!_t.pointerDown();It&&Vt.stop();const Kt=lt.get()*yt+Bt.get()*(1-yt);Pe.set(Kt),xt&&(Gt.loop(xe.direction()),Ot.loop()),st.to(Pe.get()),It&&bt.emit("settle"),St||bt.emit("scroll")},V=Io(n,i,()=>x(nt),xe=>F(nt,xe)),X=.68,se=I[W.get()],ae=Ie(se),he=Ie(se),ue=Ie(se),y=Ie(se),R=Ro(ae,ue,he,y,d,X),q=Go(h,I,ne,U,y),de=Oo(V,W,J,R,q,y,l),fe=Do(U),Re=Le(),Dt=Ho(o,t,l,w),{slideRegistry:mt}=Bo(oe,b,I,je,Z,M),Nt=_o(e,t,mt,de,R,Re,l,z),nt={ownerDocument:n,ownerWindow:i,eventHandler:l,containerRect:T,slideRects:D,animation:V,axis:P,dragHandler:ko(P,e,n,i,y,To(P,i),ae,V,de,R,q,W,l,ee,f,g,p,X,E),eventStore:Re,percentOfView:ee,index:W,indexPrevious:J,limit:U,location:ae,offsetLocation:ue,previousLocation:he,options:s,resizeHandler:Mo(o,l,i,t,P,S,v),scrollBody:R,scrollBounds:Po(U,ue,y,R,ee),scrollLooper:Ao(ne,U,ue,[ae,ue,he,y]),scrollProgress:fe,scrollSnapList:I.map(fe.get),scrollSnaps:I,scrollTarget:q,scrollTo:de,slideLooper:Vo(P,A,ne,le,re,ge,I,ue,t),slideFocus:Nt,slidesHandler:$o(o,l,L),slidesInView:Dt,slideIndexes:M,slideRegistry:mt,slidesToScroll:Z,target:y,translate:Et(P,o)};return nt}function Xo(){let e={},o;function t(c){o=c}function n(c){return e[c]||[]}function i(c){return n(c).forEach(j=>j(o,c)),a}function s(c,j){return e[c]=n(c).concat([j]),a}function l(c,j){return e[c]=n(c).filter(h=>h!==j),a}function u(){e={}}const a={init:t,emit:i,off:l,on:s,clear:u};return a}const Yo={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Jo(e){function o(s,l){return Pt(s,l||{})}function t(s){const l=s.breakpoints||{},u=ze(l).filter(a=>e.matchMedia(a).matches).map(a=>l[a]).reduce((a,c)=>o(a,c),{});return o(s,u)}function n(s){return s.map(l=>ze(l.breakpoints||{})).reduce((l,u)=>l.concat(u),[]).map(e.matchMedia)}return{mergeOptions:o,optionsAtMedia:t,optionsMediaQueries:n}}function Qo(e){let o=[];function t(s,l){return o=l.filter(({options:u})=>e.optionsAtMedia(u).active!==!1),o.forEach(u=>u.init(s,e)),l.reduce((u,a)=>Object.assign(u,{[a.name]:a}),{})}function n(){o=o.filter(s=>s.destroy())}return{init:t,destroy:n}}function tt(e,o,t){const n=e.ownerDocument,i=n.defaultView,s=Jo(i),l=Qo(s),u=Le(),a=Xo(),{mergeOptions:c,optionsAtMedia:j,optionsMediaQueries:h}=s,{on:d,off:f,emit:g}=a,w=P;let m=!1,p,b=c(Yo,tt.globalOptions),S=c(b),L=[],E,z,k;function v(){const{container:M,slides:x}=S;z=(pt(M)?e.querySelector(M):M)||e.children[0];const V=pt(x)?z.querySelectorAll(x):x;k=[].slice.call(V||z.children)}function T(M){const x=qo(e,z,k,n,i,M,a);if(M.loop&&!x.slideLooper.canLoop()){const F=Object.assign({},M,{loop:!1});return T(F)}return x}function D(M,x){m||(b=c(b,M),S=j(b),L=x||L,v(),p=T(S),h([b,...L.map(({options:F})=>F)]).forEach(F=>u.add(F,"change",P)),S.active&&(p.translate.to(p.location.get()),p.animation.init(),p.slidesInView.init(),p.slideFocus.init(J),p.eventHandler.init(J),p.resizeHandler.init(J),p.slidesHandler.init(J),p.options.loop&&p.slideLooper.loop(),z.offsetParent&&k.length&&p.dragHandler.init(J),E=l.init(J,L)))}function P(M,x){const F=Z();A(),D(c({startIndex:F},M),x),a.emit("reInit")}function A(){p.dragHandler.destroy(),p.eventStore.clear(),p.translate.clear(),p.slideLooper.clear(),p.resizeHandler.destroy(),p.slidesHandler.destroy(),p.slidesInView.destroy(),p.animation.destroy(),l.destroy(),u.clear()}function ee(){m||(m=!0,u.clear(),A(),a.emit("destroy"),a.clear())}function te(M,x,F){!S.active||m||(p.scrollBody.useBaseFriction().useDuration(x===!0?0:S.duration),p.scrollTo.index(M,F||0))}function oe(M){const x=p.index.add(1).get();te(x,M,-1)}function Q(M){const x=p.index.add(-1).get();te(x,M,1)}function le(){return p.index.add(1).get()!==Z()}function re(){return p.index.add(-1).get()!==Z()}function Y(){return p.scrollSnapList}function we(){return p.scrollProgress.get(p.offsetLocation.get())}function Z(){return p.index.get()}function ge(){return p.indexPrevious.get()}function ie(){return p.slidesInView.get()}function ne(){return p.slidesInView.get(!1)}function me(){return E}function je(){return p}function I(){return e}function U(){return z}function W(){return k}const J={canScrollNext:le,canScrollPrev:re,containerNode:U,internalEngine:je,destroy:ee,off:f,on:d,emit:g,plugins:me,previousScrollSnap:ge,reInit:w,rootNode:I,scrollNext:oe,scrollPrev:Q,scrollProgress:we,scrollSnapList:Y,scrollTo:te,selectedScrollSnap:Z,slideNodes:W,slidesInView:ie,slidesNotInView:ne};return D(o,t),setTimeout(()=>a.emit("init"),0),J}tt.globalOptions=void 0;function ft(e={},o=[]){const t=C.useRef(e),n=C.useRef(o),[i,s]=C.useState(),[l,u]=C.useState(),a=C.useCallback(()=>{i&&i.reInit(t.current,n.current)},[i]);return C.useEffect(()=>{ht(t.current,e)||(t.current=e,a())},[e,a]),C.useEffect(()=>{xo(n.current,o)||(n.current=o,a())},[o,a]),C.useEffect(()=>{if(bo()&&l){tt.globalOptions=ft.globalOptions;const c=tt(l,t.current,n.current);return s(c),()=>c.destroy()}else s(void 0)},[l,s]),[u,i]}ft.globalOptions=void 0;const[Zo,Ce]=Jt({name:"CarouselContext"}),Wo=({id:e,align:o="center",autoplay:t=!1,containScroll:n=!1,controlRef:i,defaultIndex:s=0,delay:l=4e3,dragFree:u=!1,draggable:a=!0,duration:c=25,index:j,inViewThreshold:h=0,loop:d=!0,orientation:f="horizontal",plugins:g=[],skipSnaps:w=!1,slidesToScroll:m=1,stopMouseEnterAutoplay:p=!0,watchDrag:b=a,watchResize:S=!0,watchSlides:L=!0,onChange:E,onScrollProgress:z,...k}={})=>{const{t:v}=Qt("carousel"),[T,D]=co({defaultValue:s,value:j,onChange:E}),[P,A]=Zt(),[ee,{off:te,on:oe}]=ao(),Q=C.useRef(null),le=C.useRef(new Map),re=C.useRef(null),Y=f==="horizontal",we=Y?"x":"y",[Z,ge]=C.useState(0),[ie,ne]=C.useState(0),me=C.useCallback((y,R)=>{const q=Wt(S)?S(y,R):!0,de=y.scrollSnapList().length,fe=y.slideNodes().length;return ge(de),ne(fe),q},[S]),[je,I]=ft({align:o,axis:we,container:re.current,containScroll:n,dragFree:u,duration:c,inViewThreshold:h,loop:d,skipSnaps:w,slidesToScroll:m,startIndex:s,watchDrag:b,watchResize:me,watchSlides:L},g);e??=P;const U=C.useCallback(y=>{const R=y.scrollSnapList().length,q=y.slideNodes().length;ge(R),ne(q)},[]),W=C.useCallback(()=>{if(!I)return;const y=Math.round(Math.max(0,Math.min(1,I.scrollProgress()))*100);z?.(y)},[I,z]),J=C.useCallback(()=>{if(!I)return;const y=I.selectedScrollSnap();D(y)},[I,D]),M=C.useCallback(y=>{le.current.get(y)?.focus(),I?.scrollTo(y)},[I]),x=C.useCallback(y=>R=>{const q=Z-1;eo(R,{ArrowDown:()=>{Y||(y=y===q?0:y+1,M(y))},ArrowLeft:()=>{Y&&(y=y===0?q:y-1,M(y))},ArrowRight:()=>{Y&&(y=y===q?0:y+1,M(y))},ArrowUp:()=>{Y||(y=y===0?q:y-1,M(y))},End:()=>{M(q)},Home:()=>{M(0)}})},[Z,Y,M]);to(i,I),C.useEffect(()=>{if(I)return I.on("reInit",U),I.on("select",J),I.on("scroll",W),W(),()=>{I.off("reInit",U),I.off("select",J),I.off("scroll",W)}},[I,U,W,J]),C.useEffect(()=>{const y=ee&&p,R=!I?.canScrollNext();return I&&t&&!y&&!R?Q.current=setInterval(()=>{I.scrollNext()},l):(Q.current&&clearInterval(Q.current),Q.current=null),()=>{Q.current&&clearInterval(Q.current)}},[t,I,l,ee,p]),vt(()=>{I&&j!==void 0&&I.scrollTo(j)},[j]),vt(()=>{I&&I.reInit()},[I,ie,o,we,n,u,c,h,d,w,m]);const F=C.useCallback(({ref:y,...R}={})=>({id:e,"aria-roledescription":"carousel","data-orientation":f,...k,...R,ref:it(y,k.ref,je),onMouseEnter:ye(R.onMouseEnter,oe),onMouseLeave:ye(R.onMouseLeave,te)}),[e,oe,te,k,je,f]),V=C.useCallback(({ref:y,...R}={})=>({id:A,"aria-live":t?"off":"polite","data-orientation":f,...R,ref:it(y,re)}),[t,A,f]),X=C.useCallback(({index:y,...R})=>{const q=y+1,de=T===y;return{id:`${A}-${y}`,"aria-label":v("{page} of {total}",{page:q,total:ie}),"aria-roledescription":"slide","data-index":y.toString(),"data-orientation":f,"data-selected":ke(de),role:"tabpanel",...R}},[T,A,ie,f,v]),se=C.useCallback((y={})=>({"aria-controls":A,"aria-label":v("Go to previous slide"),"data-orientation":f,disabled:!I?.canScrollPrev(),...y,onClick:ye(y.onClick,()=>I?.scrollPrev())}),[I,A,f,v]),ae=C.useCallback((y={})=>({"aria-controls":A,"aria-label":v("Go to next slide"),"data-orientation":f,disabled:!I?.canScrollNext(),...y,onClick:ye(y.onClick,()=>I?.scrollNext())}),[I,A,f,v]),he=C.useCallback((y={})=>({"aria-label":v("Slides"),"aria-orientation":f,role:"tablist",...y}),[f,v]),ue=C.useCallback(({ref:y,index:R,...q})=>{const de=R+1,fe=T===R;return{type:"button","aria-controls":`${A}-${R}`,"aria-label":v("Go to {page} slide",{page:de}),"aria-selected":fe,"data-index":R.toString(),"data-orientation":f,"data-selected":ke(fe),role:"tab",tabIndex:fe?0:-1,...q,ref:it(y,Re=>{le.current.set(R,Re)}),onClick:ye(q.onClick,()=>I?.scrollTo(R)),onKeyDown:ye(q.onKeyDown,x(R))}},[T,A,v,f,x,I]);return{carousel:I,index:T,setIndex:D,snapCount:Z,total:ie,getIndicatorProps:ue,getIndicatorsProps:he,getItemProps:X,getListProps:V,getNextTriggerProps:ae,getPrevTriggerProps:se,getRootProps:F}},{ComponentContext:er,useComponentContext:At,withContext:Se,withProvider:tr}=oo("carousel",fo),N=tr(({includeGapInSize:e=!0,...o})=>{const{carousel:t,index:n,setIndex:i,snapCount:s,total:l,getIndicatorProps:u,getIndicatorsProps:a,getItemProps:c,getListProps:j,getNextTriggerProps:h,getPrevTriggerProps:d,getRootProps:f}=Wo(o),g=C.useMemo(()=>({includeGapInSize:e}),[e]),w=C.useMemo(()=>({carousel:t,index:n,setIndex:i,snapCount:s,total:l,getIndicatorProps:u,getIndicatorsProps:a,getItemProps:c,getListProps:j,getNextTriggerProps:h,getPrevTriggerProps:d}),[t,l,n,i,s,u,a,c,j,h,d]);return r.jsx(Zo,{value:w,children:r.jsx(er,{value:g,children:r.jsx(ro.section,{...f()})})})},"root")(void 0,({gap:e,slideSize:o,...t})=>({...t,"--slide-gap":ct(e,"spaces"),"--slide-size":ct(o,"sizes")})),O=Se("div","list")(void 0,e=>{const{includeGapInSize:o}=At(),{getListProps:t}=Ce();return{"data-include-gap-in-size":ke(o),...t(e)}}),_=Se("div","item")(void 0,({slideSize:e,...o})=>{const{includeGapInSize:t}=At(),{getItemProps:n}=Ce();return{"data-include-gap-in-size":ke(t),"--slide-size":ct(e,"sizes"),...n(o)}}),$=Se(Rt,{name:"PrevTrigger",slot:["trigger","prev"]})(void 0,e=>{const{getPrevTriggerProps:o}=Ce();return{fullRounded:!0,icon:r.jsx(uo,{}),...o(e)}}),H=Se(Rt,{name:"NextTrigger",slot:["trigger","next"]})(void 0,e=>{const{getNextTriggerProps:o}=Ce();return{fullRounded:!0,icon:r.jsx(po,{}),...o(e)}}),K=Se("div","indicators")(void 0,({children:e,render:o,...t})=>{const{index:n,snapCount:i,getIndicatorProps:s,getIndicatorsProps:l}=Ce();return{children:C.useMemo(()=>e||Array.from({length:i},(a,c)=>{if(o){const j=o({index:c,selected:c===n});return C.isValidElement(j)?C.cloneElement(j,{...s({key:c,index:c})}):j}else return r.jsx(or,{index:c},c)}),[e,s,o,n,i]),...l(t)}}),or=Se("button","indicator")(void 0,e=>{const{getIndicatorProps:o}=Ce();return o(e)}),Tr={component:N,title:"Components / Carousel"},Fe=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ee=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:["sm","md","lg"],children:(o,t,n)=>r.jsxs(N,{size:t,children:[r.jsx(O,{children:e.map((i,s)=>r.jsx(_,{index:s,children:r.jsx(G,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]},n)})},Ae=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:no,children:(o,t,n)=>r.jsxs(N,{colorScheme:t,children:[r.jsx(O,{children:e.map((i,s)=>r.jsx(_,{index:s,children:r.jsx(G,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]},n)})},De=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{defaultIndex:1,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ne=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:["horizontal","vertical"],children:(o,t,n)=>r.jsxs(N,{orientation:t,children:[r.jsx(O,{children:e.map((i,s)=>r.jsx(_,{index:s,children:r.jsx(G,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]},n)})},Be=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(ot,{variant:"stack",rows:["center","start","end"],children:(o,t,n)=>r.jsxs(N,{align:t,children:[r.jsx(O,{children:e.map((i,s)=>r.jsx(_,{index:s,children:r.jsx(G,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]},n)})},Ge=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{gap:0,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Oe=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{duration:60,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},_e=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{slideSize:"50%",children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,slideSize:t===1?"100%":void 0,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ve=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{slideSize:`${100/3}%`,slidesToScroll:3,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},$e=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{dragFree:!0,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},He=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{autoplay:!0,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ke=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{autoplay:!0,delay:1e3,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ue=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},qe=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{loop:!1,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Xe=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{draggable:!1,children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ye=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{includeGapInSize:!1,slideSize:"50%",children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Je=()=>{const[e,o]=C.useState(0),t=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(r.Fragment,{children:[r.jsxs(N,{dragFree:!0,loop:!1,onScrollProgress:o,children:[r.jsx(O,{children:t.map((n,i)=>r.jsx(_,{index:i,children:r.jsx(G,{src:n,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]}),r.jsx(lo,{value:e})]})},Qe=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{watchDrag:(o,t)=>(console.log("drag",o,t),!0),watchResize:(o,t)=>(console.log("resized",o,t),!0),watchSlides:(o,t)=>(console.log("slides updated",o,t),!0),children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]})},Ze=()=>{const[e,o]=C.useState(0),t=C.useMemo(()=>Array.from({length:50},(n,i)=>`https://www.ghibli.jp/gallery/baron0${(i+1).toString().padStart(2,"0")}.jpg`),[]);return r.jsxs(ut,{children:[r.jsx(N,{index:e,onChange:o,children:r.jsx(O,{children:t.map((n,i)=>r.jsx(_,{index:i,children:r.jsx(G,{src:n,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))})}),r.jsx(N,{containScroll:"keepSnaps",dragFree:!0,h:"5xs",index:e,slideSize:"20%",children:r.jsx(O,{children:t.map((n,i)=>r.jsx(_,{cursor:"pointer",index:i,opacity:"0.4",_selected:{opacity:1},onClick:()=>o(i),children:r.jsx(G,{src:n,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))})})]})},We=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{children:[r.jsx(O,{children:e.map((o,t)=>r.jsx(_,{index:t,children:r.jsx(G,{src:o,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},t))}),r.jsx($,{bottom:"4",icon:r.jsx(io,{}),top:"unset",transform:"unset"}),r.jsx(H,{bottom:"4",icon:r.jsx(go,{}),top:"unset",transform:"unset"}),r.jsx(K,{h:"6",render:({selected:o})=>r.jsx(so,{as:"button",cursor:"pointer",children:r.jsx(jo,{"data-selected":ke(o),color:"transparent",fill:"colorScheme.solid/40",fontSize:"2xl",_hover:{_notSelected:{fill:"colorScheme.solid/70"}},_selected:{fill:"colorScheme.solid"}})})})]})},et=()=>{const e=C.useRef(null),[o,t]=C.useState(0),[n,i]=C.useState(["https://www.ghibli.jp/gallery/baron001.jpg","https://www.ghibli.jp/gallery/baron002.jpg","https://www.ghibli.jp/gallery/baron003.jpg","https://www.ghibli.jp/gallery/baron004.jpg","https://www.ghibli.jp/gallery/baron005.jpg"]);return r.jsxs(r.Fragment,{children:[r.jsxs(N,{controlRef:e,index:o,onChange:t,children:[r.jsx(O,{children:n.map((s,l)=>r.jsx(_,{index:l,children:r.jsx(G,{src:s,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},l))}),r.jsx($,{}),r.jsx(H,{}),r.jsx(K,{})]}),r.jsxs(at,{children:[r.jsx(pe,{disabled:n.length===50,onClick:()=>{const s=(n.length+1).toString().padStart(2,"0"),l=[...n,`https://www.ghibli.jp/gallery/baron0${s}.jpg`];i(l),t(l.length-1)},children:"Add"}),r.jsx(pe,{disabled:n.length===1,onClick:()=>{o===n.length-1&&t(s=>s-1),i(n.slice(0,-1))},children:"Remove"})]}),r.jsxs(ut,{gap:"sm",children:[r.jsx(kt,{children:"State"}),r.jsxs(at,{children:[r.jsx(pe,{onClick:()=>t(0),children:"Home"}),r.jsx(pe,{onClick:()=>t(s=>s===0?n.length-1:s-1),children:"Prev"}),r.jsx(pe,{onClick:()=>t(s=>s===n.length-1?0:s+1),children:"Next"}),r.jsx(pe,{onClick:()=>t(n.length-1),children:"End"})]})]}),r.jsxs(ut,{gap:"sm",children:[r.jsx(kt,{children:"Ref"}),r.jsxs(at,{children:[r.jsx(pe,{onClick:()=>e.current?.scrollTo(0),children:"Home"}),r.jsx(pe,{onClick:()=>e.current?.scrollPrev(),children:"Prev"}),r.jsx(pe,{onClick:()=>e.current?.scrollNext(),children:"Next"}),r.jsx(pe,{onClick:()=>e.current?.scrollTo(n.length-1),children:"End"})]})]})]})};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Be.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ge.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Oe.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`() => {
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
}`,..._e.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ve.parameters?.docs?.source}}};$e.parameters={...$e.parameters,docs:{...$e.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ke.parameters?.docs?.source}}};Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ue.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`() => {
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
}`,...qe.parameters?.docs?.source}}};Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Xe.parameters?.docs?.source}}};Ye.parameters={...Ye.parameters,docs:{...Ye.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ye.parameters?.docs?.source}}};Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`() => {
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
}`,...Je.parameters?.docs?.source}}};Qe.parameters={...Qe.parameters,docs:{...Qe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Qe.parameters?.docs?.source}}};Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`() => {
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
            <CircleIcon data-selected={dataAttr(selected)} color="transparent" fill="colorScheme.solid/40" fontSize="2xl" _hover={{
        _notSelected: {
          fill: "colorScheme.solid/70"
        }
      }} _selected={{
        fill: "colorScheme.solid"
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
}`,...et.parameters?.docs?.source}}};const zr=["Basic","Size","ColorScheme","DefaultIndex","Orientation","Align","Gap","Duration","SlideSize","SlidesToScroll","DragFree","Autoplay","Delay","DisabledStopMouseEnterAutoplay","DisabledLoop","DisabledDraggable","DisabledIncludeGapInSize","ScrollProgress","Methods","Thumbnails","CustomComponent","CustomControl"];export{Be as Align,He as Autoplay,Fe as Basic,Ae as ColorScheme,We as CustomComponent,et as CustomControl,De as DefaultIndex,Ke as Delay,Xe as DisabledDraggable,Ye as DisabledIncludeGapInSize,qe as DisabledLoop,Ue as DisabledStopMouseEnterAutoplay,$e as DragFree,Oe as Duration,Ge as Gap,Qe as Methods,Ne as Orientation,Je as ScrollProgress,Ee as Size,_e as SlideSize,Ve as SlidesToScroll,Ze as Thumbnails,zr as __namedExportsOrder,Tr as default};
