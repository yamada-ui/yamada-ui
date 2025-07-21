import{q as Ut,I as Xt,d as Jt,r as C,c as Qt,F as Yt,J as Zt,K as Wt,L as eo,M as to,N as kt,h as Ce,m as at,a as Te,f as oo,j as r,s as ro,D as ut,C as no,V as pt,E as so,T as Tt}from"./iframe-BbB59fLB.js";import{P as rt}from"./props-table-CLQ6uJWO.js";import{I as O}from"./image-BRk9lMNp.js";import{P as lo}from"./progress-DiG9GBNY.js";import{C as io,A as ao}from"./chevron-left-icon-BSrdxWfM.js";import{c as co}from"./createLucideIcon-BfIMf7K-.js";import{B as ct}from"./button-group-DVFqZ83Y.js";import{B as ge}from"./button-C7yiHaiH.js";import{u as re}from"./index-C-Jh1PQi.js";import{u as uo}from"./index-T2y2OLC7.js";import{u as po}from"./index-vFGel0G-.js";import{I as Rt}from"./icon-button-B48cT_t-.js";import{C as go}from"./chevron-right-icon-D8ssvb2r.js";import{A as ho}from"./arrow-right-icon-BoPQd1sD.js";import"./grid-W1UnxTpU.js";import"./grid-item-Dq6QrI7D.js";import"./for-JwY7aMwm.js";import"./flex-mIT1fSUh.js";import"./heading-DTYqldnT.js";import"./use-progress-DexnFJSb.js";import"./number-qjSr7RRG.js";import"./group-t6OMTp38.js";import"./use-ripple-DxxJnXZN.js";import"./rings-YRmwo_R-.js";import"./use-breakpoint-CIqEKCzG.js";import"./use-breakpoint-value-DwWi_T2I.js";import"./use-color-mode-value-DJWSrxpj.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],jo=co("circle",wo),fo=Ut(Xt)({as:jo}),mo=Jt({base:{indicator:{bg:"colorScheme.solid/40",cursor:"pointer",rounded:"full",transitionDuration:"moderate",transitionProperty:"common",_horizontal:{w:"10"},_selected:{bg:"colorScheme.solid"},_vertical:{h:"10"},_hover:{_notSelected:{bg:"colorScheme.solid/70"}},_disabled:{layerStyle:"disabled"}},indicators:{display:"flex",gap:"2",justifyContent:"center",position:"absolute",zIndex:"yamcha",_horizontal:{bottom:"4",flexDirection:"row",h:"2",left:"50%",px:"4",transform:"translateX(-50%)",w:"full"},_vertical:{flexDirection:"column",h:"full",py:"4",right:"4",top:"50%",transform:"translateY(-50%)",w:"2"}},item:{"&:not([data-include-gap-in-size])":{_horizontal:{mr:"{slide-gap}"},_vertical:{mb:"{slide-gap}"}},"&[data-include-gap-in-size]":{_horizontal:{pr:"{slide-gap}"},_vertical:{pb:"{slide-gap}"}},boxSize:"full",flex:"0 0 {slide-size}",position:"relative"},list:{"&[data-include-gap-in-size]":{_horizontal:{mr:"calc({slide-gap} * -1)"},_vertical:{mb:"calc({slide-gap} * -1)"}},display:"flex",h:"full",_horizontal:{flexDirection:"row"},_vertical:{flexDirection:"column"}},next:{_horizontal:{right:"4"},_vertical:{bottom:"4"}},prev:{_horizontal:{left:"4"},_vertical:{top:"4"}},root:{"--slide-gap":"spaces.4","--slide-size":"sizes.full",overflow:"hidden",position:"relative",w:"full"},trigger:{position:"absolute",zIndex:"kurillin",_horizontal:{top:"50%",transform:"translateY(-50%)"},_vertical:{left:"50%",transform:"translateX(-50%) rotate(90deg)"}}},sizes:{sm:{root:{h:"sm"}},md:{root:{h:"md"}},lg:{root:{h:"lg"}}},defaultProps:{size:"md"}});function bo(e){return Object.prototype.toString.call(e)==="[object Object]"}function zt(e){return bo(e)||Array.isArray(e)}function xo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function dt(e,t){const o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),s=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==s?!1:o.every(l=>{const u=e[l],a=t[l];return typeof u=="function"?`${u}`==`${a}`:!zt(u)||!zt(a)?u===a:dt(u,a)})}function Lt(e){return e.concat().sort((t,o)=>t.name>o.name?1:-1).map(t=>t.options)}function yo(e,t){if(e.length!==t.length)return!1;const o=Lt(e),n=Lt(t);return o.every((i,s)=>{const l=n[s];return dt(i,l)})}function wt(e){return typeof e=="number"}function gt(e){return typeof e=="string"}function nt(e){return typeof e=="boolean"}function Mt(e){return Object.prototype.toString.call(e)==="[object Object]"}function B(e){return Math.abs(e)}function jt(e){return Math.sign(e)}function ke(e,t){return B(e-t)}function Co(e,t){if(e===0||t===0||B(e)<=B(t))return 0;const o=ke(B(e),B(t));return B(o/e)}function So(e){return Math.round(e*100)/100}function ze(e){return Le(e).map(Number)}function ue(e){return e[Pe(e)]}function Pe(e){return Math.max(0,e.length-1)}function ft(e,t){return t===Pe(e)}function Pt(e,t=0){return Array.from(Array(e),(o,n)=>t+n)}function Le(e){return Object.keys(e)}function Ft(e,t){return[e,t].reduce((o,n)=>(Le(n).forEach(i=>{const s=o[i],l=n[i],u=Mt(s)&&Mt(l);o[i]=u?Ft(s,l):l}),o),{})}function ht(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function Io(e,t){const o={start:n,center:i,end:s};function n(){return 0}function i(a){return s(a)/2}function s(a){return t-a}function l(a,c){return gt(e)?o[e](a):e(t,a,c)}return{measure:l}}function Me(){let e=[];function t(i,s,l,u={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(s,l,u),a=()=>i.removeEventListener(s,l,u);else{const c=i;c.addListener(l),a=()=>c.removeListener(l)}return e.push(a),n}function o(){e=e.filter(i=>i())}const n={add:t,clear:o};return n}function vo(e,t,o,n){const i=Me(),s=1e3/60;let l=null,u=0,a=0;function c(){i.add(e,"visibilitychange",()=>{e.hidden&&g()})}function j(){f(),i.clear()}function h(m){if(!a)return;l||(l=m,o(),o());const p=m-l;for(l=m,u+=p;u>=s;)o(),u-=s;const b=u/s;n(b),a&&(a=t.requestAnimationFrame(h))}function d(){a||(a=t.requestAnimationFrame(h))}function f(){t.cancelAnimationFrame(a),l=null,u=0,a=0}function g(){l=null,u=0}return{init:c,destroy:j,start:d,stop:f,update:o,render:n}}function ko(e,t){const o=t==="rtl",n=e==="y",i=n?"y":"x",s=n?"x":"y",l=!n&&o?-1:1,u=j(),a=h();function c(g){const{height:w,width:m}=g;return n?w:m}function j(){return n?"top":o?"right":"left"}function h(){return n?"bottom":o?"left":"right"}function d(g){return g*l}return{scroll:i,cross:s,startEdge:u,endEdge:a,measureSize:c,direction:d}}function xe(e=0,t=0){const o=B(e-t);function n(c){return c<e}function i(c){return c>t}function s(c){return n(c)||i(c)}function l(c){return s(c)?n(c)?e:t:c}function u(c){return o?c-o*Math.ceil((c-t)/o):c}return{length:o,max:t,min:e,constrain:l,reachedAny:s,reachedMax:i,reachedMin:n,removeOffset:u}}function Et(e,t,o){const{constrain:n}=xe(0,e),i=e+1;let s=l(t);function l(d){return o?B((i+d)%i):n(d)}function u(){return s}function a(d){return s=l(d),h}function c(d){return j().set(u()+d)}function j(){return Et(e,u(),o)}const h={get:u,set:a,add:c,clone:j};return h}function To(e,t,o,n,i,s,l,u,a,c,j,h,d,f,g,w,m,p,b){const{cross:S,direction:L}=e,P=["INPUT","SELECT","TEXTAREA"],z={passive:!1},k=Me(),v=Me(),T=xe(50,225).constrain(f.measure(20)),D={mouse:300,touch:400},R={mouse:500,touch:600},A=g?43:25;let ee=!1,te=0,oe=0,Y=!1,ie=!1,ne=!1,J=!1;function je(x){if(!b)return;function E(X){(nt(b)||b(x,X))&&fe(X)}const G=t;k.add(G,"dragstart",X=>X.preventDefault(),z).add(G,"touchmove",()=>{},z).add(G,"touchend",()=>{}).add(G,"touchstart",E).add(G,"mousedown",E).add(G,"touchcancel",q).add(G,"contextmenu",q).add(G,"click",W,!0)}function Z(){k.clear(),v.clear()}function he(){const x=J?o:t;v.add(x,"touchmove",I,z).add(x,"touchend",q).add(x,"mousemove",I,z).add(x,"mouseup",q)}function ae(x){const E=x.nodeName||"";return P.includes(E)}function se(){return(g?R:D)[J?"mouse":"touch"]}function be(x,E){const G=h.add(jt(x)*-1),X=j.byDistance(x,!g).distance;return g||B(x)<T?X:m&&E?X*.5:j.byIndex(G.get(),0).distance}function fe(x){const E=ht(x,n);J=E,ne=g&&E&&!x.buttons&&ee,ee=ke(i.get(),l.get())>=2,!(E&&x.button!==0)&&(ae(x.target)||(Y=!0,s.pointerDown(x),c.useFriction(0).useDuration(0),i.set(l),he(),te=s.readPoint(x),oe=s.readPoint(x,S),d.emit("pointerDown")))}function I(x){if(!ht(x,n)&&x.touches.length>=2)return q(x);const G=s.readPoint(x),X=s.readPoint(x,S),le=ke(G,te),ce=ke(X,oe);if(!ie&&!J&&(!x.cancelable||(ie=le>ce,!ie)))return q(x);const de=s.pointerMove(x);le>w&&(ne=!0),c.useFriction(.3).useDuration(.75),u.start(),i.add(L(de)),x.preventDefault()}function q(x){const G=j.byDistance(0,!1).index!==h.get(),X=s.pointerUp(x)*se(),le=be(L(X),G),ce=Co(X,le),de=A-10*ce,pe=p+ce/50;ie=!1,Y=!1,v.clear(),c.useDuration(de).useFriction(pe),a.distance(le,!g),J=!1,d.emit("pointerUp")}function W(x){ne&&(x.stopPropagation(),x.preventDefault(),ne=!1)}function Q(){return Y}return{init:je,destroy:Z,pointerDown:Q}}function zo(e,t){let n,i;function s(h){return h.timeStamp}function l(h,d){const g=`client${(d||e.scroll)==="x"?"X":"Y"}`;return(ht(h,t)?h:h.touches[0])[g]}function u(h){return n=h,i=h,l(h)}function a(h){const d=l(h)-l(i),f=s(h)-s(n)>170;return i=h,f&&(n=h),d}function c(h){if(!n||!i)return 0;const d=l(i)-l(n),f=s(h)-s(n),g=s(h)-s(i)>170,w=d/f;return f&&!g&&B(w)>.1?w:0}return{pointerDown:u,pointerMove:a,pointerUp:c,readPoint:l}}function Lo(){function e(o){const{offsetTop:n,offsetLeft:i,offsetWidth:s,offsetHeight:l}=o;return{top:n,right:i+s,bottom:n+l,left:i,width:s,height:l}}return{measure:e}}function Mo(e){function t(n){return e*(n/100)}return{measure:t}}function Po(e,t,o,n,i,s,l){const u=[e].concat(n);let a,c,j=[],h=!1;function d(m){return i.measureSize(l.measure(m))}function f(m){if(!s)return;c=d(e),j=n.map(d);function p(b){for(const S of b){if(h)return;const L=S.target===e,P=n.indexOf(S.target),z=L?c:j[P],k=d(L?e:n[P]);if(B(k-z)>=.5){m.reInit(),t.emit("resize");break}}}a=new ResizeObserver(b=>{(nt(s)||s(m,b))&&p(b)}),o.requestAnimationFrame(()=>{u.forEach(b=>a.observe(b))})}function g(){h=!0,a&&a.disconnect()}return{init:f,destroy:g}}function Ro(e,t,o,n,i,s){let l=0,u=0,a=i,c=s,j=e.get(),h=0;function d(){const z=n.get()-e.get(),k=!a;let v=0;return k?(l=0,o.set(n),e.set(n),v=z):(o.set(e),l+=z/a,l*=c,j+=l,e.add(l),v=j-h),u=jt(v),h=j,P}function f(){const z=n.get()-t.get();return B(z)<.001}function g(){return a}function w(){return u}function m(){return l}function p(){return S(i)}function b(){return L(s)}function S(z){return a=z,P}function L(z){return c=z,P}const P={direction:w,duration:g,velocity:m,seek:d,settled:f,useBaseFriction:b,useBaseDuration:p,useFriction:L,useDuration:S};return P}function Fo(e,t,o,n,i){const s=i.measure(10),l=i.measure(50),u=xe(.1,.99);let a=!1;function c(){return!(a||!e.reachedAny(o.get())||!e.reachedAny(t.get()))}function j(f){if(!c())return;const g=e.reachedMin(t.get())?"min":"max",w=B(e[g]-t.get()),m=o.get()-t.get(),p=u.constrain(w/l);o.subtract(m*p),!f&&B(m)<s&&(o.set(e.constrain(o.get())),n.useDuration(25).useBaseFriction())}function h(f){a=!f}return{shouldConstrain:c,constrain:j,toggleActive:h}}function Eo(e,t,o,n,i){const s=xe(-t+e,0),l=h(),u=j(),a=d();function c(g,w){return ke(g,w)<=1}function j(){const g=l[0],w=ue(l),m=l.lastIndexOf(g),p=l.indexOf(w)+1;return xe(m,p)}function h(){return o.map((g,w)=>{const{min:m,max:p}=s,b=s.constrain(g),S=!w,L=ft(o,w);return S?p:L||c(m,b)?m:c(p,b)?p:b}).map(g=>parseFloat(g.toFixed(3)))}function d(){if(t<=e+i)return[s.max];if(n==="keepSnaps")return l;const{min:g,max:w}=u;return l.slice(g,w)}return{snapsContained:a,scrollContainLimit:u}}function Ao(e,t,o){const n=t[0],i=o?n-e:ue(t);return{limit:xe(i,n)}}function Do(e,t,o,n){const s=t.min+.1,l=t.max+.1,{reachedMin:u,reachedMax:a}=xe(s,l);function c(d){return d===1?a(o.get()):d===-1?u(o.get()):!1}function j(d){if(!c(d))return;const f=e*(d*-1);n.forEach(g=>g.add(f))}return{loop:j}}function No(e){const{max:t,length:o}=e;function n(s){const l=s-t;return o?l/-o:0}return{get:n}}function Bo(e,t,o,n,i){const{startEdge:s,endEdge:l}=e,{groupSlides:u}=i,a=h().map(t.measure),c=d(),j=f();function h(){return u(n).map(w=>ue(w)[l]-w[0][s]).map(B)}function d(){return n.map(w=>o[s]-w[s]).map(w=>-B(w))}function f(){return u(c).map(w=>w[0]).map((w,m)=>w+a[m])}return{snaps:c,snapsAligned:j}}function Oo(e,t,o,n,i,s){const{groupSlides:l}=i,{min:u,max:a}=n,c=j();function j(){const d=l(s),f=!e||t==="keepSnaps";return o.length===1?[s]:f?d:d.slice(u,a).map((g,w,m)=>{const p=!w,b=ft(m,w);if(p){const S=ue(m[0])+1;return Pt(S)}if(b){const S=Pe(s)-ue(m)[0]+1;return Pt(S,ue(m)[0])}return g})}return{slideRegistry:c}}function _o(e,t,o,n,i){const{reachedAny:s,removeOffset:l,constrain:u}=n;function a(g){return g.concat().sort((w,m)=>B(w)-B(m))[0]}function c(g){const w=e?l(g):u(g),m=t.map((b,S)=>({diff:j(b-w,0),index:S})).sort((b,S)=>B(b.diff)-B(S.diff)),{index:p}=m[0];return{index:p,distance:w}}function j(g,w){const m=[g,g+o,g-o];if(!e)return g;if(!w)return a(m);const p=m.filter(b=>jt(b)===w);return p.length?a(p):ue(m)-o}function h(g,w){const m=t[g]-i.get(),p=j(m,w);return{index:g,distance:p}}function d(g,w){const m=i.get()+g,{index:p,distance:b}=c(m),S=!e&&s(m);if(!w||S)return{index:p,distance:g};const L=t[p]-b,P=g+j(L,0);return{index:p,distance:P}}return{byDistance:d,byIndex:h,shortcut:j}}function Vo(e,t,o,n,i,s,l){function u(h){const d=h.distance,f=h.index!==t.get();s.add(d),d&&(n.duration()?e.start():(e.update(),e.render(1),e.update())),f&&(o.set(t.get()),t.set(h.index),l.emit("select"))}function a(h,d){const f=i.byDistance(h,d);u(f)}function c(h,d){const f=t.clone().set(h),g=i.byIndex(f.get(),d);u(g)}return{distance:a,index:c}}function Go(e,t,o,n,i,s,l,u){const a={passive:!0,capture:!0};let c=0;function j(f){if(!u)return;function g(w){if(new Date().getTime()-c>10)return;l.emit("slideFocusStart"),e.scrollLeft=0;const b=o.findIndex(S=>S.includes(w));wt(b)&&(i.useDuration(0),n.index(b,0),l.emit("slideFocus"))}s.add(document,"keydown",h,!1),t.forEach((w,m)=>{s.add(w,"focus",p=>{(nt(u)||u(f,p))&&g(m)},a)})}function h(f){f.code==="Tab"&&(c=new Date().getTime())}return{init:j}}function ve(e){let t=e;function o(){return t}function n(a){t=l(a)}function i(a){t+=l(a)}function s(a){t-=l(a)}function l(a){return wt(a)?a:a.get()}return{get:o,set:n,add:i,subtract:s}}function At(e,t){const o=e.scroll==="x"?l:u,n=t.style;let i=null,s=!1;function l(d){return`translate3d(${d}px,0px,0px)`}function u(d){return`translate3d(0px,${d}px,0px)`}function a(d){if(s)return;const f=So(e.direction(d));f!==i&&(n.transform=o(f),i=f)}function c(d){s=!d}function j(){s||(n.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:j,to:a,toggleActive:c}}function Ho(e,t,o,n,i,s,l,u,a){const j=ze(i),h=ze(i).reverse(),d=p().concat(b());function f(k,v){return k.reduce((T,D)=>T-i[D],v)}function g(k,v){return k.reduce((T,D)=>f(T,v)>0?T.concat([D]):T,[])}function w(k){return s.map((v,T)=>({start:v-n[T]+.5+k,end:v+t-.5+k}))}function m(k,v,T){const D=w(v);return k.map(R=>{const A=T?0:-o,ee=T?o:0,te=T?"end":"start",oe=D[R][te];return{index:R,loopPoint:oe,slideLocation:ve(-1),translate:At(e,a[R]),target:()=>u.get()>oe?A:ee}})}function p(){const k=l[0],v=g(h,k);return m(v,o,!1)}function b(){const k=t-l[0]-1,v=g(j,k);return m(v,-o,!0)}function S(){return d.every(({index:k})=>{const v=j.filter(T=>T!==k);return f(v,t)<=.1})}function L(){d.forEach(k=>{const{target:v,translate:T,slideLocation:D}=k,R=v();R!==D.get()&&(T.to(R),D.set(R))})}function P(){d.forEach(k=>k.translate.clear())}return{canLoop:S,clear:P,loop:L,loopPoints:d}}function $o(e,t,o){let n,i=!1;function s(a){if(!o)return;function c(j){for(const h of j)if(h.type==="childList"){a.reInit(),t.emit("slidesChanged");break}}n=new MutationObserver(j=>{i||(nt(o)||o(a,j))&&c(j)}),n.observe(e,{childList:!0})}function l(){n&&n.disconnect(),i=!0}return{init:s,destroy:l}}function Ko(e,t,o,n){const i={};let s=null,l=null,u,a=!1;function c(){u=new IntersectionObserver(g=>{a||(g.forEach(w=>{const m=t.indexOf(w.target);i[m]=w}),s=null,l=null,o.emit("slidesInView"))},{root:e.parentElement,threshold:n}),t.forEach(g=>u.observe(g))}function j(){u&&u.disconnect(),a=!0}function h(g){return Le(i).reduce((w,m)=>{const p=parseInt(m),{isIntersecting:b}=i[p];return(g&&b||!g&&!b)&&w.push(p),w},[])}function d(g=!0){if(g&&s)return s;if(!g&&l)return l;const w=h(g);return g&&(s=w),g||(l=w),w}return{init:c,destroy:j,get:d}}function qo(e,t,o,n,i,s){const{measureSize:l,startEdge:u,endEdge:a}=e,c=o[0]&&i,j=g(),h=w(),d=o.map(l),f=m();function g(){if(!c)return 0;const b=o[0];return B(t[u]-b[u])}function w(){if(!c)return 0;const b=s.getComputedStyle(ue(n));return parseFloat(b.getPropertyValue(`margin-${a}`))}function m(){return o.map((b,S,L)=>{const P=!S,z=ft(L,S);return P?d[S]+j:z?d[S]+h:L[S+1][u]-b[u]}).map(B)}return{slideSizes:d,slideSizesWithGaps:f,startGap:j,endGap:h}}function Uo(e,t,o,n,i,s,l,u,a){const{startEdge:c,endEdge:j,direction:h}=e,d=wt(o);function f(p,b){return ze(p).filter(S=>S%b===0).map(S=>p.slice(S,S+b))}function g(p){return p.length?ze(p).reduce((b,S,L)=>{const P=ue(b)||0,z=P===0,k=S===Pe(p),v=i[c]-s[P][c],T=i[c]-s[S][j],D=!n&&z?h(l):0,R=!n&&k?h(u):0,A=B(T-R-(v+D));return L&&A>t+a&&b.push(S),k&&b.push(p.length),b},[]).map((b,S,L)=>{const P=Math.max(L[S-1]||0);return p.slice(P,b)}):[]}function w(p){return d?f(p,o):g(p)}return{groupSlides:w}}function Xo(e,t,o,n,i,s,l){const{align:u,axis:a,direction:c,startIndex:j,loop:h,duration:d,dragFree:f,dragThreshold:g,inViewThreshold:w,slidesToScroll:m,skipSnaps:p,containScroll:b,watchResize:S,watchSlides:L,watchDrag:P,watchFocus:z}=s,k=2,v=Lo(),T=v.measure(t),D=o.map(v.measure),R=ko(a,c),A=R.measureSize(T),ee=Mo(A),te=Io(u,A),oe=!h&&!!b,Y=h||!!b,{slideSizes:ie,slideSizesWithGaps:ne,startGap:J,endGap:je}=qo(R,T,D,o,Y,i),Z=Uo(R,A,m,h,T,D,J,je,k),{snaps:he,snapsAligned:ae}=Bo(R,te,T,D,Z),se=-ue(he)+ue(ne),{snapsContained:be,scrollContainLimit:fe}=Eo(A,se,ae,b,k),I=oe?be:ae,{limit:q}=Ao(se,I,h),W=Et(Pe(I),j,h),Q=W.clone(),M=ze(o),x=({dragHandler:ye,scrollBody:lt,scrollBounds:it,options:{loop:Fe}})=>{Fe||it.constrain(ye.pointerDown()),lt.seek()},E=({scrollBody:ye,translate:lt,location:it,offsetLocation:Fe,previousLocation:Ot,scrollLooper:_t,slideLooper:Vt,dragHandler:Gt,animation:Ht,eventHandler:xt,scrollBounds:$t,options:{loop:yt}},Ct)=>{const St=ye.settled(),Kt=!$t.shouldConstrain(),It=yt?St:St&&Kt,vt=It&&!Gt.pointerDown();vt&&Ht.stop();const qt=it.get()*Ct+Ot.get()*(1-Ct);Fe.set(qt),yt&&(_t.loop(ye.direction()),Vt.loop()),lt.to(Fe.get()),vt&&xt.emit("settle"),It||xt.emit("scroll")},G=vo(n,i,()=>x(st),ye=>E(st,ye)),X=.68,le=I[W.get()],ce=ve(le),de=ve(le),pe=ve(le),y=ve(le),F=Ro(ce,pe,de,y,d,X),U=_o(h,I,se,q,y),we=Vo(G,W,Q,F,U,y,l),me=No(q),Re=Me(),Nt=Ko(t,o,l,w),{slideRegistry:bt}=Oo(oe,b,I,fe,Z,M),Bt=Go(e,o,bt,we,F,Re,l,z),st={ownerDocument:n,ownerWindow:i,eventHandler:l,containerRect:T,slideRects:D,animation:G,axis:R,dragHandler:To(R,e,n,i,y,zo(R,i),ce,G,we,F,U,W,l,ee,f,g,p,X,P),eventStore:Re,percentOfView:ee,index:W,indexPrevious:Q,limit:q,location:ce,offsetLocation:pe,previousLocation:de,options:s,resizeHandler:Po(t,l,i,o,R,S,v),scrollBody:F,scrollBounds:Fo(q,pe,y,F,ee),scrollLooper:Do(se,q,pe,[ce,pe,de,y]),scrollProgress:me,scrollSnapList:I.map(me.get),scrollSnaps:I,scrollTarget:U,scrollTo:we,slideLooper:Ho(R,A,se,ie,ne,he,I,pe,o),slideFocus:Bt,slidesHandler:$o(t,l,L),slidesInView:Nt,slideIndexes:M,slideRegistry:bt,slidesToScroll:Z,target:y,translate:At(R,t)};return st}function Jo(){let e={},t;function o(c){t=c}function n(c){return e[c]||[]}function i(c){return n(c).forEach(j=>j(t,c)),a}function s(c,j){return e[c]=n(c).concat([j]),a}function l(c,j){return e[c]=n(c).filter(h=>h!==j),a}function u(){e={}}const a={init:o,emit:i,off:l,on:s,clear:u};return a}const Qo={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Yo(e){function t(s,l){return Ft(s,l||{})}function o(s){const l=s.breakpoints||{},u=Le(l).filter(a=>e.matchMedia(a).matches).map(a=>l[a]).reduce((a,c)=>t(a,c),{});return t(s,u)}function n(s){return s.map(l=>Le(l.breakpoints||{})).reduce((l,u)=>l.concat(u),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:o,optionsMediaQueries:n}}function Zo(e){let t=[];function o(s,l){return t=l.filter(({options:u})=>e.optionsAtMedia(u).active!==!1),t.forEach(u=>u.init(s,e)),l.reduce((u,a)=>Object.assign(u,{[a.name]:a}),{})}function n(){t=t.filter(s=>s.destroy())}return{init:o,destroy:n}}function ot(e,t,o){const n=e.ownerDocument,i=n.defaultView,s=Yo(i),l=Zo(s),u=Me(),a=Jo(),{mergeOptions:c,optionsAtMedia:j,optionsMediaQueries:h}=s,{on:d,off:f,emit:g}=a,w=R;let m=!1,p,b=c(Qo,ot.globalOptions),S=c(b),L=[],P,z,k;function v(){const{container:M,slides:x}=S;z=(gt(M)?e.querySelector(M):M)||e.children[0];const G=gt(x)?z.querySelectorAll(x):x;k=[].slice.call(G||z.children)}function T(M){const x=Xo(e,z,k,n,i,M,a);if(M.loop&&!x.slideLooper.canLoop()){const E=Object.assign({},M,{loop:!1});return T(E)}return x}function D(M,x){m||(b=c(b,M),S=j(b),L=x||L,v(),p=T(S),h([b,...L.map(({options:E})=>E)]).forEach(E=>u.add(E,"change",R)),S.active&&(p.translate.to(p.location.get()),p.animation.init(),p.slidesInView.init(),p.slideFocus.init(Q),p.eventHandler.init(Q),p.resizeHandler.init(Q),p.slidesHandler.init(Q),p.options.loop&&p.slideLooper.loop(),z.offsetParent&&k.length&&p.dragHandler.init(Q),P=l.init(Q,L)))}function R(M,x){const E=Z();A(),D(c({startIndex:E},M),x),a.emit("reInit")}function A(){p.dragHandler.destroy(),p.eventStore.clear(),p.translate.clear(),p.slideLooper.clear(),p.resizeHandler.destroy(),p.slidesHandler.destroy(),p.slidesInView.destroy(),p.animation.destroy(),l.destroy(),u.clear()}function ee(){m||(m=!0,u.clear(),A(),a.emit("destroy"),a.clear())}function te(M,x,E){!S.active||m||(p.scrollBody.useBaseFriction().useDuration(x===!0?0:S.duration),p.scrollTo.index(M,E||0))}function oe(M){const x=p.index.add(1).get();te(x,M,-1)}function Y(M){const x=p.index.add(-1).get();te(x,M,1)}function ie(){return p.index.add(1).get()!==Z()}function ne(){return p.index.add(-1).get()!==Z()}function J(){return p.scrollSnapList}function je(){return p.scrollProgress.get(p.offsetLocation.get())}function Z(){return p.index.get()}function he(){return p.indexPrevious.get()}function ae(){return p.slidesInView.get()}function se(){return p.slidesInView.get(!1)}function be(){return P}function fe(){return p}function I(){return e}function q(){return z}function W(){return k}const Q={canScrollNext:ie,canScrollPrev:ne,containerNode:q,internalEngine:fe,destroy:ee,off:f,on:d,emit:g,plugins:be,previousScrollSnap:he,reInit:w,rootNode:I,scrollNext:oe,scrollPrev:Y,scrollProgress:je,scrollSnapList:J,scrollTo:te,selectedScrollSnap:Z,slideNodes:W,slidesInView:ae,slidesNotInView:se};return D(t,o),setTimeout(()=>a.emit("init"),0),Q}ot.globalOptions=void 0;function mt(e={},t=[]){const o=C.useRef(e),n=C.useRef(t),[i,s]=C.useState(),[l,u]=C.useState(),a=C.useCallback(()=>{i&&i.reInit(o.current,n.current)},[i]);return C.useEffect(()=>{dt(o.current,e)||(o.current=e,a())},[e,a]),C.useEffect(()=>{yo(n.current,t)||(n.current=t,a())},[t,a]),C.useEffect(()=>{if(xo()&&l){ot.globalOptions=mt.globalOptions;const c=ot(l,o.current,n.current);return s(c),()=>c.destroy()}else s(void 0)},[l,s]),[u,i]}mt.globalOptions=void 0;const[Wo,Se]=Qt({name:"CarouselContext"}),er=({id:e,align:t="center",autoplay:o=!1,containScroll:n=!1,controlRef:i,defaultIndex:s=0,delay:l=4e3,dragFree:u=!1,draggable:a=!0,duration:c=25,index:j,inViewThreshold:h=0,loop:d=!0,orientation:f="horizontal",plugins:g=[],skipSnaps:w=!1,slidesToScroll:m=1,stopMouseEnterAutoplay:p=!0,watchDrag:b=a,watchResize:S=!0,watchSlides:L=!0,onChange:P,onScrollProgress:z,...k}={})=>{const{t:v}=Yt("carousel"),[T,D]=po({defaultValue:s,value:j,onChange:P}),[R,A]=Zt(),[ee,{off:te,on:oe}]=uo(),Y=C.useRef(null),ie=C.useRef(new Map),ne=C.useRef(null),J=f==="horizontal",je=J?"x":"y",[Z,he]=C.useState(0),[ae,se]=C.useState(0),be=C.useCallback((y,F)=>{const U=Wt(S)?S(y,F):!0,we=y.scrollSnapList().length,me=y.slideNodes().length;return he(we),se(me),U},[S]),[fe,I]=mt({align:t,axis:je,container:ne.current,containScroll:n,dragFree:u,duration:c,inViewThreshold:h,loop:d,skipSnaps:w,slidesToScroll:m,startIndex:s,watchDrag:b,watchResize:be,watchSlides:L},g);e??=R;const q=C.useCallback(y=>{const F=y.scrollSnapList().length,U=y.slideNodes().length;he(F),se(U)},[]),W=C.useCallback(()=>{if(!I)return;const y=Math.round(Math.max(0,Math.min(1,I.scrollProgress()))*100);z?.(y)},[I,z]),Q=C.useCallback(()=>{if(!I)return;const y=I.selectedScrollSnap();D(y)},[I,D]),M=C.useCallback(y=>{ie.current.get(y)?.focus(),I?.scrollTo(y)},[I]),x=C.useCallback(y=>F=>{const U=Z-1;eo(F,{ArrowDown:()=>{J||(y=y===U?0:y+1,M(y))},ArrowLeft:()=>{J&&(y=y===0?U:y-1,M(y))},ArrowRight:()=>{J&&(y=y===U?0:y+1,M(y))},ArrowUp:()=>{J||(y=y===0?U:y-1,M(y))},End:()=>{M(U)},Home:()=>{M(0)}})},[Z,J,M]);to(i,I),C.useEffect(()=>{if(I)return I.on("reInit",q),I.on("select",Q),I.on("scroll",W),W(),()=>{I.off("reInit",q),I.off("select",Q),I.off("scroll",W)}},[I,q,W,Q]),C.useEffect(()=>{const y=ee&&p,F=!I?.canScrollNext();return I&&o&&!y&&!F?Y.current=setInterval(()=>{I.scrollNext()},l):(Y.current&&clearInterval(Y.current),Y.current=null),()=>{Y.current&&clearInterval(Y.current)}},[o,I,l,ee,p]),kt(()=>{I&&j!==void 0&&I.scrollTo(j)},[j]),kt(()=>{I&&I.reInit()},[I,ae,t,je,n,u,c,h,d,w,m]);const E=C.useCallback(({ref:y,...F}={})=>({id:e,"aria-roledescription":"carousel","data-orientation":f,...k,...F,ref:at(y,k.ref,fe),onMouseEnter:Ce(F.onMouseEnter,oe),onMouseLeave:Ce(F.onMouseLeave,te)}),[e,oe,te,k,fe,f]),G=C.useCallback(({ref:y,...F}={})=>({id:A,"aria-live":o?"off":"polite","data-orientation":f,...F,ref:at(y,ne)}),[o,A,f]),X=C.useCallback(({index:y,...F})=>{const U=y+1,we=T===y;return{id:`${A}-${y}`,"aria-label":v("{page} of {total}",{page:U,total:ae}),"aria-roledescription":"slide","data-index":y.toString(),"data-orientation":f,"data-selected":Te(we),role:"tabpanel",...F}},[T,A,ae,f,v]),le=C.useCallback((y={})=>({"aria-controls":A,"aria-label":v("Go to previous slide"),"data-orientation":f,disabled:!I?.canScrollPrev(),...y,onClick:Ce(y.onClick,()=>I?.scrollPrev())}),[I,A,f,v]),ce=C.useCallback((y={})=>({"aria-controls":A,"aria-label":v("Go to next slide"),"data-orientation":f,disabled:!I?.canScrollNext(),...y,onClick:Ce(y.onClick,()=>I?.scrollNext())}),[I,A,f,v]),de=C.useCallback((y={})=>({"aria-label":v("Slides"),"aria-orientation":f,role:"tablist",...y}),[f,v]),pe=C.useCallback(({ref:y,index:F,...U})=>{const we=F+1,me=T===F;return{type:"button","aria-controls":`${A}-${F}`,"aria-label":v("Go to {page} slide",{page:we}),"aria-selected":me,"data-index":F.toString(),"data-orientation":f,"data-selected":Te(me),role:"tab",tabIndex:me?0:-1,...U,ref:at(y,Re=>{ie.current.set(F,Re)}),onClick:Ce(U.onClick,()=>I?.scrollTo(F)),onKeyDown:Ce(U.onKeyDown,x(F))}},[T,A,v,f,x,I]);return{carousel:I,index:T,setIndex:D,snapCount:Z,total:ae,getIndicatorProps:pe,getIndicatorsProps:de,getItemProps:X,getListProps:G,getNextTriggerProps:ce,getPrevTriggerProps:le,getRootProps:E}},{ComponentContext:tr,useComponentContext:Dt,withContext:Ie,withProvider:or}=oo("carousel",mo),N=or(({includeGapInSize:e=!0,...t})=>{const o=re(t.align),n=re(t.autoplay),i=re(t.containScroll),s=re(t.delay),l=re(t.dragFree),u=re(t.draggable),a=re(t.duration),c=re(t.inViewThreshold),j=re(t.loop),h=re(t.orientation),d=re(t.skipSnaps),f=re(t.slidesToScroll),g=re(t.stopMouseEnterAutoplay),{carousel:w,index:m,setIndex:p,snapCount:b,total:S,getIndicatorProps:L,getIndicatorsProps:P,getItemProps:z,getListProps:k,getNextTriggerProps:v,getPrevTriggerProps:T,getRootProps:D}=er({...t,align:o,autoplay:n,containScroll:i,delay:s,dragFree:l,draggable:u,duration:a,inViewThreshold:c,loop:j,orientation:h,skipSnaps:d,slidesToScroll:f,stopMouseEnterAutoplay:g}),R=C.useMemo(()=>({includeGapInSize:e}),[e]),A=C.useMemo(()=>({carousel:w,index:m,setIndex:p,snapCount:b,total:S,getIndicatorProps:L,getIndicatorsProps:P,getItemProps:z,getListProps:k,getNextTriggerProps:v,getPrevTriggerProps:T}),[w,S,m,p,b,L,P,z,k,v,T]);return r.jsx(Wo,{value:A,children:r.jsx(tr,{value:R,children:r.jsx(ro.section,{...D()})})})},"root")(void 0,({gap:e,slideSize:t,...o})=>({...o,"--slide-gap":ut(e,"spaces"),"--slide-size":ut(t,"sizes")})),_=Ie("div","list")(void 0,e=>{const{includeGapInSize:t}=Dt(),{getListProps:o}=Se();return{"data-include-gap-in-size":Te(t),...o(e)}}),V=Ie("div","item")(void 0,({slideSize:e,...t})=>{const{includeGapInSize:o}=Dt(),{getItemProps:n}=Se();return{"data-include-gap-in-size":Te(o),"--slide-size":ut(e,"sizes"),...n(t)}}),H=Ie(Rt,{name:"PrevTrigger",slot:["trigger","prev"]})(void 0,e=>{const{getPrevTriggerProps:t}=Se();return{fullRounded:!0,icon:r.jsx(io,{}),...t(e)}}),$=Ie(Rt,{name:"NextTrigger",slot:["trigger","next"]})(void 0,e=>{const{getNextTriggerProps:t}=Se();return{fullRounded:!0,icon:r.jsx(go,{}),...t(e)}}),K=Ie("div","indicators")(void 0,({children:e,render:t,...o})=>{const{index:n,snapCount:i,getIndicatorProps:s,getIndicatorsProps:l}=Se();return{children:C.useMemo(()=>e||Array.from({length:i},(a,c)=>{if(t){const j=t({index:c,selected:c===n});return C.isValidElement(j)?C.cloneElement(j,{...s({key:c,index:c})}):j}else return r.jsx(rr,{index:c},c)}),[e,s,t,n,i]),...l(o)}}),rr=Ie("button","indicator")(void 0,e=>{const{getIndicatorProps:t}=Se();return t(e)}),Pr={component:N,title:"Components / Carousel"},Ee=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},Ae=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(rt,{variant:"stack",rows:["sm","md","lg"],children:(t,o,n)=>r.jsxs(N,{size:o,children:[r.jsx(_,{children:e.map((i,s)=>r.jsx(V,{index:s,children:r.jsx(O,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]},n)})},De=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(rt,{variant:"stack",rows:no,children:(t,o,n)=>r.jsxs(N,{colorScheme:o,children:[r.jsx(_,{children:e.map((i,s)=>r.jsx(V,{index:s,children:r.jsx(O,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]},n)})},Ne=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{defaultIndex:1,children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},Be=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(rt,{variant:"stack",rows:["horizontal","vertical"],children:(t,o,n)=>r.jsxs(N,{orientation:o,children:[r.jsx(_,{children:e.map((i,s)=>r.jsx(V,{index:s,children:r.jsx(O,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]},n)})},Oe=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsx(rt,{variant:"stack",rows:["center","start","end"],children:(t,o,n)=>r.jsxs(N,{align:o,children:[r.jsx(_,{children:e.map((i,s)=>r.jsx(V,{index:s,children:r.jsx(O,{src:i,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},s))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]},n)})},_e=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{gap:0,children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},Ve=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{duration:60,children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},Ge=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{slideSize:"50%",children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,slideSize:o===1?"100%":void 0,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},He=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{slideSize:`${100/3}%`,slidesToScroll:3,children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},$e=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{dragFree:!0,children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},Ke=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{autoplay:!0,children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},qe=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{autoplay:!0,delay:1e3,children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},Ue=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},Xe=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{loop:!1,children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},Je=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{draggable:!1,children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},Qe=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{includeGapInSize:!1,slideSize:"50%",children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},Ye=()=>{const[e,t]=C.useState(0),o=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(r.Fragment,{children:[r.jsxs(N,{dragFree:!0,loop:!1,onScrollProgress:t,children:[r.jsx(_,{children:o.map((n,i)=>r.jsx(V,{index:i,children:r.jsx(O,{src:n,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]}),r.jsx(lo,{value:e})]})},Ze=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{watchDrag:(t,o)=>(console.log("drag",t,o),!0),watchResize:(t,o)=>(console.log("resized",t,o),!0),watchSlides:(t,o)=>(console.log("slides updated",t,o),!0),children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]})},We=()=>{const[e,t]=C.useState(0),o=C.useMemo(()=>Array.from({length:50},(n,i)=>`https://www.ghibli.jp/gallery/baron0${(i+1).toString().padStart(2,"0")}.jpg`),[]);return r.jsxs(pt,{gap:"md",children:[r.jsx(N,{index:e,onChange:t,children:r.jsx(_,{children:o.map((n,i)=>r.jsx(V,{index:i,children:r.jsx(O,{src:n,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))})}),r.jsx(N,{containScroll:"keepSnaps",dragFree:!0,h:"5xs",index:e,slideSize:"20%",children:r.jsx(_,{children:o.map((n,i)=>r.jsx(V,{cursor:"pointer",index:i,opacity:"0.4",_selected:{opacity:1},onClick:()=>t(i),children:r.jsx(O,{src:n,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},i))})})]})},et=()=>{const e=C.useMemo(()=>["https://www.ghibli.jp/gallery/chihiro015.jpg","https://www.ghibli.jp/gallery/howl049.jpg","https://www.ghibli.jp/gallery/totoro036.jpg","https://www.ghibli.jp/gallery/mononoke033.jpg","https://www.ghibli.jp/gallery/laputa047.jpg","https://www.ghibli.jp/gallery/porco025.jpg"],[]);return r.jsxs(N,{children:[r.jsx(_,{children:e.map((t,o)=>r.jsx(V,{index:o,children:r.jsx(O,{src:t,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},o))}),r.jsx(H,{bottom:"4",icon:r.jsx(ao,{}),top:"unset",transform:"unset"}),r.jsx($,{bottom:"4",icon:r.jsx(ho,{}),top:"unset",transform:"unset"}),r.jsx(K,{h:"6",render:({selected:t})=>r.jsx(so,{as:"button",cursor:"pointer",children:r.jsx(fo,{"data-selected":Te(t),color:"transparent",fill:"colorScheme.solid/40",fontSize:"2xl",_selected:{fill:"colorScheme.solid"},_hover:{_notSelected:{fill:"colorScheme.solid/70"}}})})})]})},tt=()=>{const e=C.useRef(null),[t,o]=C.useState(0),[n,i]=C.useState(["https://www.ghibli.jp/gallery/baron001.jpg","https://www.ghibli.jp/gallery/baron002.jpg","https://www.ghibli.jp/gallery/baron003.jpg","https://www.ghibli.jp/gallery/baron004.jpg","https://www.ghibli.jp/gallery/baron005.jpg"]);return r.jsxs(r.Fragment,{children:[r.jsxs(N,{controlRef:e,index:t,onChange:o,children:[r.jsx(_,{children:n.map((s,l)=>r.jsx(V,{index:l,children:r.jsx(O,{src:s,alt:"スタジオジブリ作品静止画",boxSize:"full",objectFit:"cover"})},l))}),r.jsx(H,{}),r.jsx($,{}),r.jsx(K,{})]}),r.jsxs(ct,{children:[r.jsx(ge,{disabled:n.length===50,onClick:()=>{const s=(n.length+1).toString().padStart(2,"0"),l=[...n,`https://www.ghibli.jp/gallery/baron0${s}.jpg`];i(l),o(l.length-1)},children:"Add"}),r.jsx(ge,{disabled:n.length===1,onClick:()=>{t===n.length-1&&o(s=>s-1),i(n.slice(0,-1))},children:"Remove"})]}),r.jsxs(pt,{gap:"sm",children:[r.jsx(Tt,{children:"State"}),r.jsxs(ct,{children:[r.jsx(ge,{onClick:()=>o(0),children:"Home"}),r.jsx(ge,{onClick:()=>o(s=>s===0?n.length-1:s-1),children:"Prev"}),r.jsx(ge,{onClick:()=>o(s=>s===n.length-1?0:s+1),children:"Next"}),r.jsx(ge,{onClick:()=>o(n.length-1),children:"End"})]})]}),r.jsxs(pt,{gap:"sm",children:[r.jsx(Tt,{children:"Ref"}),r.jsxs(ct,{children:[r.jsx(ge,{onClick:()=>e.current?.scrollTo(0),children:"Home"}),r.jsx(ge,{onClick:()=>e.current?.scrollPrev(),children:"Prev"}),r.jsx(ge,{onClick:()=>e.current?.scrollNext(),children:"Next"}),r.jsx(ge,{onClick:()=>e.current?.scrollTo(n.length-1),children:"End"})]})]})]})};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ee.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ae.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`() => {
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
}`,...De.parameters?.docs?.source}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ne.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`() => {
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
}`,...Be.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Oe.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`() => {
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
}`,..._e.parameters?.docs?.source}}};Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ve.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ge.parameters?.docs?.source}}};He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`() => {
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
}`,...He.parameters?.docs?.source}}};$e.parameters={...$e.parameters,docs:{...$e.parameters?.docs,source:{originalSource:`() => {
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
}`,...$e.parameters?.docs?.source}}};Ke.parameters={...Ke.parameters,docs:{...Ke.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ke.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`() => {
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
}`,...qe.parameters?.docs?.source}}};Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ue.parameters?.docs?.source}}};Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Xe.parameters?.docs?.source}}};Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`() => {
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
}`,...Je.parameters?.docs?.source}}};Qe.parameters={...Qe.parameters,docs:{...Qe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Qe.parameters?.docs?.source}}};Ye.parameters={...Ye.parameters,docs:{...Ye.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ye.parameters?.docs?.source}}};Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ze.parameters?.docs?.source}}};We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`() => {
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
}`,...We.parameters?.docs?.source}}};et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`() => {
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
}`,...et.parameters?.docs?.source}}};tt.parameters={...tt.parameters,docs:{...tt.parameters?.docs,source:{originalSource:`() => {
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
}`,...tt.parameters?.docs?.source}}};const Rr=["Basic","Size","ColorScheme","DefaultIndex","Orientation","Align","Gap","Duration","SlideSize","SlidesToScroll","DragFree","Autoplay","Delay","DisabledStopMouseEnterAutoplay","DisabledLoop","DisabledDraggable","DisabledIncludeGapInSize","ScrollProgress","Methods","Thumbnails","CustomComponent","CustomControl"];export{Oe as Align,Ke as Autoplay,Ee as Basic,De as ColorScheme,et as CustomComponent,tt as CustomControl,Ne as DefaultIndex,qe as Delay,Je as DisabledDraggable,Qe as DisabledIncludeGapInSize,Xe as DisabledLoop,Ue as DisabledStopMouseEnterAutoplay,$e as DragFree,Ve as Duration,_e as Gap,Ze as Methods,Be as Orientation,Ye as ScrollProgress,Ae as Size,Ge as SlideSize,He as SlidesToScroll,We as Thumbnails,Rr as __namedExportsOrder,Pr as default};
