import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Dn as n,En as r,F as i,Kt as a,N as o,ft as s,ht as c,i as l,jn as u,lt as d,o as f,pt as p,st as m,tn as h,tr as g,zn as _}from"./props-DZ_NCL29.js";import{i as v,r as y}from"./i18n-provider-D2DtSsuv.js";import{t as b}from"./jsx-runtime-BB9-612F.js";import{E as x,T as S,d as C,f as w}from"./utils-op0kJ2Xc.js";import{i as ee,t as T}from"./effect-BX-3lD32.js";import{d as te,i as E,n as ne,r as re}from"./create-component-Ct2AiAAx.js";import{n as ie,r as ae,t as D}from"./icon-7-lOAC1T.js";import{n as O,t as k}from"./createLucideIcon-CjKfYf7_.js";import{n as oe,t as A}from"./arrow-left-icon-CVctUjPU.js";import{n as j,t as se}from"./arrow-right-icon-B1-eGxru.js";import{n as ce,t as M}from"./chevron-left-icon-DQSPjcJD.js";import{n as le,t as N}from"./chevron-right-icon-l08u69UV.js";import{r as P,t as F}from"./use-controllable-state-ChQCKZfr.js";import{n as I,t as ue}from"./text-BcgvdG46.js";import{r as de,t as L}from"./button-BfYhzfkR.js";import{n as fe,t as pe}from"./center-CmU84f4L.js";import{r as me,t as R}from"./icon-button-Bu3CYoaZ.js";import{n as z,t as B}from"./button-group-g_ajJD1a.js";import{n as he,t as ge}from"./use-boolean-D_o9gF-o.js";import{n as V,t as _e}from"./progress-h6ADZtsA.js";import{n as ve,t as H}from"./image-7fn-Bz0a.js";import{n as ye,t as be}from"./v-stack-zknlTZhK.js";import{n as xe,t as Se}from"./props-table-CU-k6wL6.js";var Ce,we;function Te(){return(Te=e((()=>{O(),Ce={name:`circle`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]},Ce.node,we=k(Ce)})))()}var Ee;function De(){return(De=e((()=>{Te(),ae(),Ee=ie(D)({as:we})})))()}var Oe;function ke(){return(ke=e((()=>{te(),Oe=E({base:{indicator:{bg:`colorScheme.solid/40`,cursor:`pointer`,rounded:`full`,transitionDuration:`moderate`,transitionProperty:`common`,_horizontal:{w:`10`},_vertical:{h:`10`},_hover:{_notSelected:{bg:`colorScheme.solid/70`}},_selected:{bg:`colorScheme.solid`},_disabled:{layerStyle:`disabled`}},indicators:{display:`flex`,gap:`2`,justifyContent:`center`,position:`absolute`,zIndex:`yamcha`,_horizontal:{bottom:`4`,flexDirection:`row`,h:`2`,left:`50%`,px:`4`,transform:`translateX(-50%)`,w:`full`},_vertical:{flexDirection:`column`,h:`full`,py:`4`,right:`4`,top:`50%`,transform:`translateY(-50%)`,w:`2`}},item:{"&:not([data-include-gap-in-size])":{_horizontal:{mr:`{slide-gap}`},_vertical:{mb:`{slide-gap}`}},"&[data-include-gap-in-size]":{_horizontal:{pr:`{slide-gap}`},_vertical:{pb:`{slide-gap}`}},boxSize:`full`,flex:`0 0 {slide-size}`,position:`relative`},list:{"&[data-include-gap-in-size]":{_horizontal:{mr:`calc({slide-gap} * -1)`},_vertical:{mb:`calc({slide-gap} * -1)`}},display:`flex`,h:`full`,_horizontal:{flexDirection:`row`},_vertical:{flexDirection:`column`}},next:{_horizontal:{right:`4`},_vertical:{bottom:`4`}},prev:{_horizontal:{left:`4`},_vertical:{top:`4`}},root:{"--slide-gap":`spaces.4`,"--slide-size":`sizes.full`,overflow:`hidden`,position:`relative`,w:`full`},trigger:{position:`absolute`,zIndex:`kurillin`,_horizontal:{top:`50%`,transform:`translateY(-50%)`},_vertical:{left:`50%`,transform:`translateX(-50%) rotate(90deg)`}}},sizes:{sm:{root:{h:`sm`}},md:{root:{h:`md`}},lg:{root:{h:`lg`}}},defaultProps:{size:`md`}})})))()}function Ae(e){return Object.prototype.toString.call(e)===`[object Object]`}function je(e){return Ae(e)||Array.isArray(e)}function Me(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}function Ne(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length!==r.length||JSON.stringify(Object.keys(e.breakpoints||{}))!==JSON.stringify(Object.keys(t.breakpoints||{}))?!1:n.every(n=>{let r=e[n],i=t[n];return typeof r==`function`?`${r}`==`${i}`:!je(r)||!je(i)?r===i:Ne(r,i)})}function Pe(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function Fe(e,t){if(e.length!==t.length)return!1;let n=Pe(e),r=Pe(t);return n.every((e,t)=>{let n=r[t];return Ne(e,n)})}function Ie(e){return typeof e==`number`}function Le(e){return typeof e==`string`}function Re(e){return typeof e==`boolean`}function ze(e){return Object.prototype.toString.call(e)===`[object Object]`}function U(e){return Math.abs(e)}function Be(e){return Math.sign(e)}function Ve(e,t){return U(e-t)}function He(e,t){return e===0||t===0||U(e)<=U(t)?0:U(Ve(U(e),U(t))/e)}function Ue(e){return Math.round(e*100)/100}function We(e){return Je(e).map(Number)}function W(e){return e[Ge(e)]}function Ge(e){return Math.max(0,e.length-1)}function Ke(e,t){return t===Ge(e)}function qe(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function Je(e){return Object.keys(e)}function Ye(e,t){return[e,t].reduce((e,t)=>(Je(t).forEach(n=>{let r=e[n],i=t[n];e[n]=ze(r)&&ze(i)?Ye(r,i):i}),e),{})}function Xe(e,t){return t.MouseEvent!==void 0&&e instanceof t.MouseEvent}function Ze(e,t){let n={start:r,center:i,end:a};function r(){return 0}function i(e){return a(e)/2}function a(e){return t-e}function o(r,i){return Le(e)?n[e](r):e(t,r,i)}return{measure:o}}function Qe(){let e=[];function t(t,n,i,a={passive:!0}){let o;if(`addEventListener`in t)t.addEventListener(n,i,a),o=()=>t.removeEventListener(n,i,a);else{let e=t;e.addListener(i),o=()=>e.removeListener(i)}return e.push(o),r}function n(){e=e.filter(e=>e())}let r={add:t,clear:n};return r}function $e(e,t,n,r){let i=Qe(),a=1e3/60,o=null,s=0,c=0;function l(){i.add(e,`visibilitychange`,()=>{e.hidden&&m()})}function u(){p(),i.clear()}function d(e){if(!c)return;o||(o=e,n(),n());let i=e-o;for(o=e,s+=i;s>=a;)n(),s-=a;r(s/a),c&&=t.requestAnimationFrame(d)}function f(){c||=t.requestAnimationFrame(d)}function p(){t.cancelAnimationFrame(c),o=null,s=0,c=0}function m(){o=null,s=0}return{init:l,destroy:u,start:f,stop:p,update:n,render:r}}function et(e,t){let n=t===`rtl`,r=e===`y`,i=r?`y`:`x`,a=r?`x`:`y`,o=!r&&n?-1:1,s=u(),c=d();function l(e){let{height:t,width:n}=e;return r?t:n}function u(){return r?`top`:n?`right`:`left`}function d(){return r?`bottom`:n?`left`:`right`}function f(e){return e*o}return{scroll:i,cross:a,startEdge:s,endEdge:c,measureSize:l,direction:f}}function tt(e=0,t=0){let n=U(e-t);function r(t){return t<e}function i(e){return e>t}function a(e){return r(e)||i(e)}function o(n){return a(n)?r(n)?e:t:n}function s(e){return n?e-n*Math.ceil((e-t)/n):e}return{length:n,max:t,min:e,constrain:o,reachedAny:a,reachedMax:i,reachedMin:r,removeOffset:s}}function nt(e,t,n){let{constrain:r}=tt(0,e),i=e+1,a=o(t);function o(e){return n?U((i+e)%i):r(e)}function s(){return a}function c(e){return a=o(e),d}function l(e){return u().set(s()+e)}function u(){return nt(e,s(),n)}let d={get:s,set:c,add:l,clone:u};return d}function rt(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){let{cross:y,direction:b}=e,x=[`INPUT`,`SELECT`,`TEXTAREA`],S={passive:!1},C=Qe(),w=Qe(),ee=tt(50,225).constrain(p.measure(20)),T={mouse:300,touch:400},te={mouse:500,touch:600},E=m?43:25,ne=!1,re=0,ie=0,ae=!1,D=!1,O=!1,k=!1;function oe(e){if(!v)return;function n(t){(Re(v)||v(e,t))&&le(t)}let r=t;C.add(r,`dragstart`,e=>e.preventDefault(),S).add(r,`touchmove`,()=>void 0,S).add(r,`touchend`,()=>void 0).add(r,`touchstart`,n).add(r,`mousedown`,n).add(r,`touchcancel`,P).add(r,`contextmenu`,P).add(r,`click`,F,!0)}function A(){C.clear(),w.clear()}function j(){let e=k?n:t;w.add(e,`touchmove`,N,S).add(e,`touchend`,P).add(e,`mousemove`,N,S).add(e,`mouseup`,P)}function se(e){let t=e.nodeName||``;return x.includes(t)}function ce(){return(m?te:T)[k?`mouse`:`touch`]}function M(e,t){let n=d.add(Be(e)*-1),r=u.byDistance(e,!m).distance;return m||U(e)<ee?r:g&&t?r*.5:u.byIndex(n.get(),0).distance}function le(e){let t=Xe(e,r);k=t,O=m&&t&&!e.buttons&&ne,ne=Ve(i.get(),o.get())>=2,t&&e.button!==0||se(e.target)||(ae=!0,a.pointerDown(e),l.useFriction(0).useDuration(0),i.set(o),j(),re=a.readPoint(e),ie=a.readPoint(e,y),f.emit(`pointerDown`))}function N(e){if(!Xe(e,r)&&e.touches.length>=2)return P(e);let t=a.readPoint(e),n=a.readPoint(e,y),o=Ve(t,re),c=Ve(n,ie);if(!D&&!k&&(!e.cancelable||(D=o>c,!D)))return P(e);let u=a.pointerMove(e);o>h&&(O=!0),l.useFriction(.3).useDuration(.75),s.start(),i.add(b(u)),e.preventDefault()}function P(e){let t=u.byDistance(0,!1).index!==d.get(),n=a.pointerUp(e)*ce(),r=M(b(n),t),i=He(n,r),o=E-10*i,s=_+i/50;D=!1,ae=!1,w.clear(),l.useDuration(o).useFriction(s),c.distance(r,!m),k=!1,f.emit(`pointerUp`)}function F(e){O&&=(e.stopPropagation(),e.preventDefault(),!1)}function I(){return ae}return{init:oe,destroy:A,pointerDown:I}}function it(e,t){let n,r;function i(e){return e.timeStamp}function a(n,r){let i=`client${(r||e.scroll)===`x`?`X`:`Y`}`;return(Xe(n,t)?n:n.touches[0])[i]}function o(e){return n=e,r=e,a(e)}function s(e){let t=a(e)-a(r),o=i(e)-i(n)>170;return r=e,o&&(n=e),t}function c(e){if(!n||!r)return 0;let t=a(r)-a(n),o=i(e)-i(n),s=i(e)-i(r)>170,c=t/o;return o&&!s&&U(c)>.1?c:0}return{pointerDown:o,pointerMove:s,pointerUp:c,readPoint:a}}function at(){function e(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}return{measure:e}}function ot(e){function t(t){return t/100*e}return{measure:t}}function st(e,t,n,r,i,a,o){let s=[e].concat(r),c,l,u=[],d=!1;function f(e){return i.measureSize(o.measure(e))}function p(i){if(!a)return;l=f(e),u=r.map(f);function o(n){for(let a of n){if(d)return;let n=a.target===e,o=r.indexOf(a.target),s=n?l:u[o];if(U(f(n?e:r[o])-s)>=.5){i.reInit(),t.emit(`resize`);break}}}c=new ResizeObserver(e=>{(Re(a)||a(i,e))&&o(e)}),n.requestAnimationFrame(()=>{s.forEach(e=>c.observe(e))})}function m(){d=!0,c&&c.disconnect()}return{init:p,destroy:m}}function ct(e,t,n,r,i,a){let o=0,s=0,c=i,l=a,u=e.get(),d=0;function f(){let t=r.get()-e.get(),i=!c,a=0;return i?(o=0,n.set(r),e.set(r),a=t):(n.set(e),o+=t/c,o*=l,u+=o,e.add(o),a=u-d),s=Be(a),d=u,x}function p(){return U(r.get()-t.get())<.001}function m(){return c}function h(){return s}function g(){return o}function _(){return y(i)}function v(){return b(a)}function y(e){return c=e,x}function b(e){return l=e,x}let x={direction:h,duration:m,velocity:g,seek:f,settled:p,useBaseFriction:v,useBaseDuration:_,useFriction:b,useDuration:y};return x}function lt(e,t,n,r,i){let a=i.measure(10),o=i.measure(50),s=tt(.1,.99),c=!1;function l(){return!(c||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function u(i){if(!l())return;let c=U(e[e.reachedMin(t.get())?`min`:`max`]-t.get()),u=n.get()-t.get(),d=s.constrain(c/o);n.subtract(u*d),!i&&U(u)<a&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(e){c=!e}return{shouldConstrain:l,constrain:u,toggleActive:d}}function ut(e,t,n,r,i){let a=tt(-t+e,0),o=d(),s=u(),c=f();function l(e,t){return Ve(e,t)<=1}function u(){let e=o[0],t=W(o);return tt(o.lastIndexOf(e),o.indexOf(t)+1)}function d(){return n.map((e,t)=>{let{min:r,max:i}=a,o=a.constrain(e),s=!t,c=Ke(n,t);return s?i:c||l(r,o)?r:l(i,o)?i:o}).map(e=>parseFloat(e.toFixed(3)))}function f(){if(t<=e+i)return[a.max];if(r===`keepSnaps`)return o;let{min:n,max:c}=s;return o.slice(n,c)}return{snapsContained:c,scrollContainLimit:s}}function dt(e,t,n){let r=t[0];return{limit:tt(n?r-e:W(t),r)}}function ft(e,t,n,r){let i=.1,{reachedMin:a,reachedMax:o}=tt(t.min+i,t.max+i);function s(e){return e===1?o(n.get()):e===-1&&a(n.get())}function c(t){if(!s(t))return;let n=t*-1*e;r.forEach(e=>e.add(n))}return{loop:c}}function pt(e){let{max:t,length:n}=e;function r(e){let r=e-t;return n?r/-n:0}return{get:r}}function mt(e,t,n,r,i){let{startEdge:a,endEdge:o}=e,{groupSlides:s}=i,c=d().map(t.measure),l=f(),u=p();function d(){return s(r).map(e=>W(e)[o]-e[0][a]).map(U)}function f(){return r.map(e=>n[a]-e[a]).map(e=>-U(e))}function p(){return s(l).map(e=>e[0]).map((e,t)=>e+c[t])}return{snaps:l,snapsAligned:u}}function ht(e,t,n,r,i,a){let{groupSlides:o}=i,{min:s,max:c}=r,l=u();function u(){let r=o(a),i=!e||t===`keepSnaps`;return n.length===1?[a]:i?r:r.slice(s,c).map((e,t,n)=>{let r=!t,i=Ke(n,t);return r?qe(W(n[0])+1):i?qe(Ge(a)-W(n)[0]+1,W(n)[0]):e})}return{slideRegistry:l}}function gt(e,t,n,r,i){let{reachedAny:a,removeOffset:o,constrain:s}=r;function c(e){return e.concat().sort((e,t)=>U(e)-U(t))[0]}function l(n){let r=e?o(n):s(n),{index:i}=t.map((e,t)=>({diff:u(e-r,0),index:t})).sort((e,t)=>U(e.diff)-U(t.diff))[0];return{index:i,distance:r}}function u(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return c(i);let a=i.filter(e=>Be(e)===r);return a.length?c(a):W(i)-n}function d(e,n){return{index:e,distance:u(t[e]-i.get(),n)}}function f(n,r){let o=i.get()+n,{index:s,distance:c}=l(o),d=!e&&a(o);return!r||d?{index:s,distance:n}:{index:s,distance:n+u(t[s]-c,0)}}return{byDistance:f,byIndex:d,shortcut:u}}function _t(e,t,n,r,i,a,o){function s(i){let s=i.distance,c=i.index!==t.get();a.add(s),s&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(i.index),o.emit(`select`))}function c(e,t){s(i.byDistance(e,t))}function l(e,n){let r=t.clone().set(e);s(i.byIndex(r.get(),n))}return{distance:c,index:l}}function vt(e,t,n,r,i,a,o,s){let c={passive:!0,capture:!0},l=0;function u(u){if(!s)return;function f(t){if(new Date().getTime()-l>10)return;o.emit(`slideFocusStart`),e.scrollLeft=0;let a=n.findIndex(e=>e.includes(t));Ie(a)&&(i.useDuration(0),r.index(a,0),o.emit(`slideFocus`))}a.add(document,`keydown`,d,!1),t.forEach((e,t)=>{a.add(e,`focus`,e=>{(Re(s)||s(u,e))&&f(t)},c)})}function d(e){e.code===`Tab`&&(l=new Date().getTime())}return{init:u}}function yt(e){let t=e;function n(){return t}function r(e){t=o(e)}function i(e){t+=o(e)}function a(e){t-=o(e)}function o(e){return Ie(e)?e:e.get()}return{get:n,set:r,add:i,subtract:a}}function bt(e,t){let n=e.scroll===`x`?o:s,r=t.style,i=null,a=!1;function o(e){return`translate3d(${e}px,0px,0px)`}function s(e){return`translate3d(0px,${e}px,0px)`}function c(t){if(a)return;let o=Ue(e.direction(t));o!==i&&(r.transform=n(o),i=o)}function l(e){a=!e}function u(){a||(r.transform=``,t.getAttribute(`style`)||t.removeAttribute(`style`))}return{clear:u,to:c,toggleActive:l}}function xt(e,t,n,r,i,a,o,s,c){let l=.5,u=We(i),d=We(i).reverse(),f=_().concat(v());function p(e,t){return e.reduce((e,t)=>e-i[t],t)}function m(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function h(e){return a.map((n,i)=>({start:n-r[i]+l+e,end:n+t-l+e}))}function g(t,r,i){let a=h(r);return t.map(t=>{let r=i?0:-n,o=i?n:0,l=i?`end`:`start`,u=a[t][l];return{index:t,loopPoint:u,slideLocation:yt(-1),translate:bt(e,c[t]),target:()=>s.get()>u?r:o}})}function _(){let e=o[0];return g(m(d,e),n,!1)}function v(){let e=t-o[0]-1;return g(m(u,e),-n,!0)}function y(){return f.every(({index:e})=>p(u.filter(t=>t!==e),t)<=.1)}function b(){f.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})}function x(){f.forEach(e=>e.translate.clear())}return{canLoop:y,clear:x,loop:b,loopPoints:f}}function St(e,t,n){let r,i=!1;function a(a){if(!n)return;function o(e){for(let n of e)if(n.type===`childList`){a.reInit(),t.emit(`slidesChanged`);break}}r=new MutationObserver(e=>{i||(Re(n)||n(a,e))&&o(e)}),r.observe(e,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:a,destroy:o}}function Ct(e,t,n,r){let i={},a=null,o=null,s,c=!1;function l(){s=new IntersectionObserver(e=>{c||(e.forEach(e=>{let n=t.indexOf(e.target);i[n]=e}),a=null,o=null,n.emit(`slidesInView`))},{root:e.parentElement,threshold:r}),t.forEach(e=>s.observe(e))}function u(){s&&s.disconnect(),c=!0}function d(e){return Je(i).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:a}=i[r];return(e&&a||!e&&!a)&&t.push(r),t},[])}function f(e=!0){if(e&&a)return a;if(!e&&o)return o;let t=d(e);return e&&(a=t),e||(o=t),t}return{init:l,destroy:u,get:f}}function wt(e,t,n,r,i,a){let{measureSize:o,startEdge:s,endEdge:c}=e,l=n[0]&&i,u=m(),d=h(),f=n.map(o),p=g();function m(){if(!l)return 0;let e=n[0];return U(t[s]-e[s])}function h(){if(!l)return 0;let e=a.getComputedStyle(W(r));return parseFloat(e.getPropertyValue(`margin-${c}`))}function g(){return n.map((e,t,n)=>{let r=!t,i=Ke(n,t);return r?f[t]+u:i?f[t]+d:n[t+1][s]-e[s]}).map(U)}return{slideSizes:f,slideSizesWithGaps:p,startGap:u,endGap:d}}function Tt(e,t,n,r,i,a,o,s,c){let{startEdge:l,endEdge:u,direction:d}=e,f=Ie(n);function p(e,t){return We(e).filter(e=>e%t===0).map(n=>e.slice(n,n+t))}function m(e){return e.length?We(e).reduce((n,f,p)=>{let m=W(n)||0,h=m===0,g=f===Ge(e),_=i[l]-a[m][l],v=i[l]-a[f][u],y=!r&&h?d(o):0,b=U(v-(!r&&g?d(s):0)-(_+y));return p&&b>t+c&&n.push(f),g&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}function h(e){return f?p(e,n):m(e)}return{groupSlides:h}}function Et(e,t,n,r,i,a,o){let{align:s,axis:c,direction:l,startIndex:u,loop:d,duration:f,dragFree:p,dragThreshold:m,inViewThreshold:h,slidesToScroll:g,skipSnaps:_,containScroll:v,watchResize:y,watchSlides:b,watchDrag:x,watchFocus:S}=a,C=at(),w=C.measure(t),ee=n.map(C.measure),T=et(c,l),te=T.measureSize(w),E=ot(te),ne=Ze(s,te),re=!d&&!!v,{slideSizes:ie,slideSizesWithGaps:ae,startGap:D,endGap:O}=wt(T,w,ee,n,d||!!v,i),k=Tt(T,te,g,d,w,ee,D,O,2),{snaps:oe,snapsAligned:A}=mt(T,ne,w,ee,k),j=-W(oe)+W(ae),{snapsContained:se,scrollContainLimit:ce}=ut(te,j,A,v,2),M=re?se:A,{limit:le}=dt(j,M,d),N=nt(Ge(M),u,d),P=N.clone(),F=We(n),I=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},ue=({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:i,scrollLooper:a,slideLooper:o,dragHandler:s,animation:c,eventHandler:l,scrollBounds:u,options:{loop:d}},f)=>{let p=e.settled(),m=!u.shouldConstrain(),h=d?p:p&&m,g=h&&!s.pointerDown();g&&c.stop();let _=n.get()*f+i.get()*(1-f);r.set(_),d&&(a.loop(e.direction()),o.loop()),t.to(r.get()),g&&l.emit(`settle`),h||l.emit(`scroll`)},de=$e(r,i,()=>I(be),e=>ue(be,e)),L=.68,fe=M[N.get()],pe=yt(fe),me=yt(fe),R=yt(fe),z=yt(fe),B=ct(pe,R,me,z,f,L),he=gt(d,M,j,le,z),ge=_t(de,N,P,B,he,z,o),V=pt(le),_e=Qe(),ve=Ct(t,n,o,h),{slideRegistry:H}=ht(re,v,M,ce,k,F),ye=vt(e,n,H,ge,B,_e,o,S),be={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:w,slideRects:ee,animation:de,axis:T,dragHandler:rt(T,e,r,i,z,it(T,i),pe,de,ge,B,he,N,o,E,p,m,_,L,x),eventStore:_e,percentOfView:E,index:N,indexPrevious:P,limit:le,location:pe,offsetLocation:R,previousLocation:me,options:a,resizeHandler:st(t,o,i,n,T,y,C),scrollBody:B,scrollBounds:lt(le,R,z,B,E),scrollLooper:ft(j,le,R,[pe,R,me,z]),scrollProgress:V,scrollSnapList:M.map(V.get),scrollSnaps:M,scrollTarget:he,scrollTo:ge,slideLooper:xt(T,te,j,ie,ae,oe,M,R,n),slideFocus:ye,slidesHandler:St(t,o,b),slidesInView:ve,slideIndexes:F,slideRegistry:H,slidesToScroll:k,target:z,translate:bt(T,t)};return be}function Dt(){let e={},t;function n(e){t=e}function r(t){return e[t]||[]}function i(e){return r(e).forEach(n=>n(t,e)),c}function a(t,n){return e[t]=r(t).concat([n]),c}function o(t,n){return e[t]=r(t).filter(e=>e!==n),c}function s(){e={}}let c={init:n,emit:i,off:o,on:a,clear:s};return c}function Ot(e){function t(e,t){return Ye(e,t||{})}function n(n){let r=n.breakpoints||{};return t(n,Je(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{}))}function r(t){return t.map(e=>Je(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:r}}function kt(e){let t=[];function n(n,r){return t=r.filter(({options:t})=>e.optionsAtMedia(t).active!==!1),t.forEach(t=>t.init(n,e)),r.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})}function r(){t=t.filter(e=>e.destroy())}return{init:n,destroy:r}}function At(e,t,n){let r=e.ownerDocument,i=r.defaultView,a=Ot(i),o=kt(a),s=Qe(),c=Dt(),{mergeOptions:l,optionsAtMedia:u,optionsMediaQueries:d}=a,{on:f,off:p,emit:m}=c,h=te,g=!1,_,v=l(jt,At.globalOptions),y=l(v),b=[],x,S,C;function w(){let{container:t,slides:n}=y;S=(Le(t)?e.querySelector(t):t)||e.children[0];let r=Le(n)?S.querySelectorAll(n):n;C=[].slice.call(r||S.children)}function ee(t){let n=Et(e,S,C,r,i,t,c);return t.loop&&!n.slideLooper.canLoop()?ee(Object.assign({},t,{loop:!1})):n}function T(e,t){g||(v=l(v,e),y=u(v),b=t||b,w(),_=ee(y),d([v,...b.map(({options:e})=>e)]).forEach(e=>s.add(e,`change`,te)),y.active&&(_.translate.to(_.location.get()),_.animation.init(),_.slidesInView.init(),_.slideFocus.init(I),_.eventHandler.init(I),_.resizeHandler.init(I),_.slidesHandler.init(I),_.options.loop&&_.slideLooper.loop(),S.offsetParent&&C.length&&_.dragHandler.init(I),x=o.init(I,b)))}function te(e,t){let n=A();E(),T(l({startIndex:n},e),t),c.emit(`reInit`)}function E(){_.dragHandler.destroy(),_.eventStore.clear(),_.translate.clear(),_.slideLooper.clear(),_.resizeHandler.destroy(),_.slidesHandler.destroy(),_.slidesInView.destroy(),_.animation.destroy(),o.destroy(),s.clear()}function ne(){g||(g=!0,s.clear(),E(),c.emit(`destroy`),c.clear())}function re(e,t,n){y.active&&!g&&(_.scrollBody.useBaseFriction().useDuration(t===!0?0:y.duration),_.scrollTo.index(e,n||0))}function ie(e){re(_.index.add(1).get(),e,-1)}function ae(e){re(_.index.add(-1).get(),e,1)}function D(){return _.index.add(1).get()!==A()}function O(){return _.index.add(-1).get()!==A()}function k(){return _.scrollSnapList}function oe(){return _.scrollProgress.get(_.offsetLocation.get())}function A(){return _.index.get()}function j(){return _.indexPrevious.get()}function se(){return _.slidesInView.get()}function ce(){return _.slidesInView.get(!1)}function M(){return x}function le(){return _}function N(){return e}function P(){return S}function F(){return C}let I={canScrollNext:D,canScrollPrev:O,containerNode:P,internalEngine:le,destroy:ne,off:p,on:f,emit:m,plugins:M,previousScrollSnap:j,reInit:h,rootNode:N,scrollNext:ie,scrollPrev:ae,scrollProgress:oe,scrollSnapList:k,scrollTo:re,selectedScrollSnap:A,slideNodes:F,slidesInView:se,slidesNotInView:ce};return T(t,n),setTimeout(()=>c.emit(`init`),0),I}var jt;function Mt(){return(Mt=e((()=>{jt={align:`center`,axis:`x`,container:null,slides:null,containScroll:`trimSnaps`,direction:`ltr`,slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0},At.globalOptions=void 0})))()}function Nt(e={},t=[]){let n=(0,Pt.useRef)(e),r=(0,Pt.useRef)(t),[i,a]=(0,Pt.useState)(),[o,s]=(0,Pt.useState)(),c=(0,Pt.useCallback)(()=>{i&&i.reInit(n.current,r.current)},[i]);return(0,Pt.useEffect)(()=>{Ne(n.current,e)||(n.current=e,c())},[e,c]),(0,Pt.useEffect)(()=>{Fe(r.current,t)||(r.current=t,c())},[t,c]),(0,Pt.useEffect)(()=>{if(Me()&&o){At.globalOptions=Nt.globalOptions;let e=At(o,n.current,r.current);return a(e),()=>e.destroy()}a(void 0)},[o,a]),[s,i]}var Pt;function Ft(){return(Ft=e((()=>{Pt=t(),Mt(),Nt.globalOptions=void 0})))()}var G,It,Lt,Rt;function zt(){return(zt=e((()=>{Ft(),G=t(),l(),ge(),F(),y(),x(),h(),n(),m(),s(),T(),[It,Lt]=S({name:`CarouselContext`}),Rt=({id:e,align:t=`center`,autoplay:n=!1,containScroll:i=!1,controlRef:o,defaultIndex:s=0,delay:l=4e3,dragFree:u=!1,draggable:m=!0,duration:h=25,index:_,inViewThreshold:y=0,loop:b=!0,orientation:x=`horizontal`,plugins:S=[],skipSnaps:C=!1,slidesToScroll:w=1,stopMouseEnterAutoplay:T=!0,watchDrag:te=m,watchResize:E=!0,watchSlides:ne=!0,onChange:re,onScrollProgress:ie,...ae}={})=>{let{t:D}=v(`carousel`),[O,k]=P({defaultValue:s,value:_,onChange:re}),[oe,A]=c(),[j,{off:se,on:ce}]=he(),M=(0,G.useRef)(null),le=(0,G.useRef)(new Map),N=(0,G.useRef)(null),F=x===`horizontal`,I=F?`x`:`y`,[ue,de]=(0,G.useState)(0),[L,fe]=(0,G.useState)(0),pe=(0,G.useCallback)((e,t)=>{let n=!g(E)||E(e,t),r=e.scrollSnapList().length,i=e.slideNodes().length;return de(r),fe(i),n},[E]),[me,R]=Nt({align:t,axis:I,container:N.current,containScroll:i,dragFree:u,duration:h,inViewThreshold:y,loop:b,skipSnaps:C,slidesToScroll:w,startIndex:s,watchDrag:te,watchResize:pe,watchSlides:ne},S);e??=oe;let z=(0,G.useCallback)(e=>{let t=e.scrollSnapList().length,n=e.slideNodes().length;de(t),fe(n)},[]),B=(0,G.useCallback)(()=>{if(!R)return;let e=Math.round(Math.max(0,Math.min(1,R.scrollProgress()))*100);ie?.(e)},[R,ie]),ge=(0,G.useCallback)(()=>{if(!R)return;let e=R.selectedScrollSnap();k(e)},[R,k]),V=(0,G.useCallback)(e=>{le.current.get(e)?.focus(),R?.scrollTo(e)},[R]),_e=(0,G.useCallback)(e=>t=>{let n=ue-1;p(t,{ArrowDown:()=>{F||(e=e===n?0:e+1,V(e))},ArrowLeft:()=>{F&&(e=e===0?n:e-1,V(e))},ArrowRight:()=>{F&&(e=e===n?0:e+1,V(e))},ArrowUp:()=>{F||(e=e===0?n:e-1,V(e))},End:()=>{V(n)},Home:()=>{V(0)}})},[ue,F,V]);(0,G.useImperativeHandle)(o,()=>R??null,[R]),(0,G.useEffect)(()=>{if(R)return R.on(`reInit`,z),R.on(`select`,ge),R.on(`scroll`,B),B(),()=>{R.off(`reInit`,z),R.off(`select`,ge),R.off(`scroll`,B)}},[R,z,B,ge]),(0,G.useEffect)(()=>{let e=j&&T,t=!R?.canScrollNext();return R&&n&&!e&&!t?M.current=setInterval(()=>{R.scrollNext()},l):(M.current&&clearInterval(M.current),M.current=null),()=>{M.current&&clearInterval(M.current)}},[n,R,l,j,T]),ee(()=>{R&&_!==void 0&&R.scrollTo(_)},[_]),ee(()=>{R&&R.reInit()},[R,L,t,I,i,u,h,y,b,C,w]);let ve=(0,G.useCallback)(({ref:t,...n}={})=>f({id:e,"aria-roledescription":`carousel`,"data-orientation":x},ae,{ref:t,onMouseEnter:ce,onMouseLeave:se},n)(),[e,ce,se,ae,x]),H=(0,G.useCallback)(({ref:e,...t}={})=>({id:A,"aria-live":n?`off`:`polite`,"data-orientation":x,...t,ref:d(e,N,me)}),[n,A,x,me]),ye=(0,G.useCallback)(({index:e,...t})=>{let n=e+1,r=O===e;return{id:`${A}-${e}`,"aria-label":D(`{page} of {total}`,{page:n,total:L}),"aria-roledescription":`slide`,"data-index":e.toString(),"data-orientation":x,"data-selected":a(r),role:`tabpanel`,...t}},[O,A,L,x,D]),be=(0,G.useCallback)((e={})=>({"aria-controls":A,"aria-label":D(`Go to previous slide`),"data-orientation":x,disabled:!R?.canScrollPrev(),...e,onClick:r(e.onClick,()=>R?.scrollPrev())}),[R,A,x,D]),xe=(0,G.useCallback)((e={})=>({"aria-controls":A,"aria-label":D(`Go to next slide`),"data-orientation":x,disabled:!R?.canScrollNext(),...e,onClick:r(e.onClick,()=>R?.scrollNext())}),[R,A,x,D]),Se=(0,G.useCallback)((e={})=>({"aria-label":D(`Slides`),"aria-orientation":x,role:`tablist`,...e}),[x,D]);return{carousel:R,index:O,setIndex:k,snapCount:ue,total:L,getIndicatorProps:(0,G.useCallback)(({ref:e,index:t,...n})=>{let i=t+1,o=O===t;return{type:`button`,"aria-controls":`${A}-${t}`,"aria-label":D(`Go to {page} slide`,{page:i}),"aria-selected":o,"data-index":t.toString(),"data-orientation":x,"data-selected":a(o),role:`tab`,tabIndex:o?0:-1,...n,ref:d(e,e=>{le.current.set(t,e)}),onClick:r(n.onClick,()=>R?.scrollTo(t)),onKeyDown:r(n.onKeyDown,_e(t))}},[O,A,D,x,_e,R]),getIndicatorsProps:Se,getItemProps:ye,getListProps:H,getNextTriggerProps:xe,getPrevTriggerProps:be,getRootProps:ve}}})))()}var Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,K,q,J,Y,X,Z,Jt;function Yt(){return(Yt=e((()=>{Bt=t(),re(),C(),o(),h(),me(),ce(),le(),ke(),zt(),Vt=b(),{ComponentContext:Ht,PropsContext:Ut,useComponentContext:Wt,usePropsContext:Gt,withContext:Kt,withProvider:qt}=ne(`carousel`,Oe),K=qt(({includeGapInSize:e=!0,...t})=>{let{carousel:n,index:r,setIndex:i,snapCount:a,total:o,getIndicatorProps:s,getIndicatorsProps:c,getItemProps:l,getListProps:u,getNextTriggerProps:d,getPrevTriggerProps:f,getRootProps:p}=Rt(t),m=(0,Bt.useMemo)(()=>({includeGapInSize:e}),[e]),h=(0,Bt.useMemo)(()=>({carousel:n,index:r,setIndex:i,snapCount:a,total:o,getIndicatorProps:s,getIndicatorsProps:c,getItemProps:l,getListProps:u,getNextTriggerProps:d,getPrevTriggerProps:f}),[n,o,r,i,a,s,c,l,u,d,f]);return(0,Vt.jsx)(It,{value:h,children:(0,Vt.jsx)(Ht,{value:m,children:(0,Vt.jsx)(w.section,{...p()})})})},`root`)(void 0,({gap:e,slideSize:t,...n})=>({...n,"--slide-gap":i(e,`spaces`),"--slide-size":i(t,`sizes`)})),q=Kt(`div`,`list`)(void 0,e=>{let{includeGapInSize:t}=Wt(),{getListProps:n}=Lt();return{"data-include-gap-in-size":a(t),...n(e)}}),J=Kt(`div`,`item`)(void 0,({slideSize:e,...t})=>{let{includeGapInSize:n}=Wt(),{getItemProps:r}=Lt();return{"data-include-gap-in-size":a(n),"--slide-size":i(e,`sizes`),...r(t)}}),Y=Kt(R,{name:`PrevTrigger`,slot:[`trigger`,`prev`]})(void 0,e=>{let{getPrevTriggerProps:t}=Lt();return{fullRounded:!0,icon:(0,Vt.jsx)(M,{}),...t(e)}}),X=Kt(R,{name:`NextTrigger`,slot:[`trigger`,`next`]})(void 0,e=>{let{getNextTriggerProps:t}=Lt();return{fullRounded:!0,icon:(0,Vt.jsx)(N,{}),...t(e)}}),Z=Kt(`div`,`indicators`)(void 0,({children:e,render:t,...n})=>{let{index:r,snapCount:i,getIndicatorProps:a,getIndicatorsProps:o}=Lt();return{children:(0,Bt.useMemo)(()=>e||Array.from({length:i},(e,n)=>{if(t){let e=t({index:n,selected:n===r});return(0,Bt.isValidElement)(e)?(0,Bt.cloneElement)(e,{...a({key:n,index:n})}):e}return(0,Vt.jsx)(Jt,{index:n},n)}),[e,a,t,r,i]),...o(n)}}),Jt=Kt(`button`,`indicator`)(void 0,e=>{let{getIndicatorProps:t}=Lt();return t(e)})})))()}var Q,$,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn;function xn(){return(xn=e((()=>{Q=t(),xe(),_(),h(),z(),de(),fe(),oe(),j(),De(),ve(),V(),ye(),I(),Yt(),$=b(),Xt={component:K,title:`Components / Carousel`},Zt=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},Qt=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsx)(Se,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(t,n,r)=>(0,$.jsxs)(K,{size:n,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]},r)})},$t=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsx)(Se,{variant:`stack`,rows:u,children:(t,n,r)=>(0,$.jsxs)(K,{colorScheme:n,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]},r)})},en=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{defaultIndex:1,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},tn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsx)(Se,{variant:`stack`,rows:[`horizontal`,`vertical`],children:(t,n,r)=>(0,$.jsxs)(K,{orientation:n,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]},r)})},nn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsx)(Se,{variant:`stack`,rows:[`center`,`start`,`end`],children:(t,n,r)=>(0,$.jsxs)(K,{align:n,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]},r)})},rn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{gap:0,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},an=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{duration:60,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},on=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{slideSize:`50%`,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,slideSize:t===1?`100%`:void 0,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},sn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{slideSize:`${100/3}%`,slidesToScroll:3,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},cn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{dragFree:!0,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},ln=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{autoplay:!0,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},un=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{autoplay:!0,delay:1e3,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},dn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},fn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{loop:!1,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},pn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{draggable:!1,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},mn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{includeGapInSize:!1,slideSize:`50%`,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},hn=()=>{let[e,t]=(0,Q.useState)(0),n=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(K,{dragFree:!0,loop:!1,onScrollProgress:t,children:[(0,$.jsx)(q,{children:n.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]}),(0,$.jsx)(_e,{value:e})]})},gn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{watchDrag:(e,t)=>(console.log(`drag`,e,t),!0),watchResize:(e,t)=>(console.log(`resized`,e,t),!0),watchSlides:(e,t)=>(console.log(`slides updated`,e,t),!0),children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},_n=()=>{let[e,t]=(0,Q.useState)(0),n=(0,Q.useMemo)(()=>Array.from({length:50},(e,t)=>`https://www.ghibli.jp/gallery/baron0${(t+1).toString().padStart(2,`0`)}.jpg`),[]);return(0,$.jsxs)(be,{children:[(0,$.jsx)(K,{index:e,onChange:t,children:(0,$.jsx)(q,{children:n.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))})}),(0,$.jsx)(K,{containScroll:`keepSnaps`,dragFree:!0,h:`5xs`,index:e,slideSize:`20%`,children:(0,$.jsx)(q,{children:n.map((e,n)=>(0,$.jsx)(J,{cursor:`pointer`,index:n,opacity:`0.4`,_selected:{opacity:1},onClick:()=>t(n),children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},n))})})]})},vn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{bottom:`4`,icon:(0,$.jsx)(A,{}),top:`unset`,transform:`unset`}),(0,$.jsx)(X,{bottom:`4`,icon:(0,$.jsx)(se,{}),top:`unset`,transform:`unset`}),(0,$.jsx)(Z,{h:`6`,render:({selected:e})=>(0,$.jsx)(pe,{as:`button`,cursor:`pointer`,children:(0,$.jsx)(Ee,{"data-selected":a(e),color:`transparent`,fill:`colorScheme.solid/40`,fontSize:`2xl`,_hover:{_notSelected:{fill:`colorScheme.solid/70`}},_selected:{fill:`colorScheme.solid`}})})})]})},yn=()=>{let e=(0,Q.useRef)(null),[t,n]=(0,Q.useState)(0),[r,i]=(0,Q.useState)([`https://www.ghibli.jp/gallery/baron001.jpg`,`https://www.ghibli.jp/gallery/baron002.jpg`,`https://www.ghibli.jp/gallery/baron003.jpg`,`https://www.ghibli.jp/gallery/baron004.jpg`,`https://www.ghibli.jp/gallery/baron005.jpg`]);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(K,{controlRef:e,index:t,onChange:n,children:[(0,$.jsx)(q,{children:r.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]}),(0,$.jsxs)(B,{children:[(0,$.jsx)(L,{disabled:r.length===50,onClick:()=>{let e=(r.length+1).toString().padStart(2,`0`),t=[...r,`https://www.ghibli.jp/gallery/baron0${e}.jpg`];i(t),n(t.length-1)},children:`Add`}),(0,$.jsx)(L,{disabled:r.length===1,onClick:()=>{t===r.length-1&&n(e=>e-1),i(r.slice(0,-1))},children:`Remove`})]}),(0,$.jsxs)(be,{gap:`sm`,children:[(0,$.jsx)(ue,{children:`State`}),(0,$.jsxs)(B,{children:[(0,$.jsx)(L,{onClick:()=>n(0),children:`Home`}),(0,$.jsx)(L,{onClick:()=>n(e=>e===0?r.length-1:e-1),children:`Prev`}),(0,$.jsx)(L,{onClick:()=>n(e=>e===r.length-1?0:e+1),children:`Next`}),(0,$.jsx)(L,{onClick:()=>n(r.length-1),children:`End`})]})]}),(0,$.jsxs)(be,{gap:`sm`,children:[(0,$.jsx)(ue,{children:`Ref`}),(0,$.jsxs)(B,{children:[(0,$.jsx)(L,{onClick:()=>e.current?.scrollTo(0),children:`Home`}),(0,$.jsx)(L,{onClick:()=>e.current?.scrollPrev(),children:`Prev`}),(0,$.jsx)(L,{onClick:()=>e.current?.scrollNext(),children:`Next`}),(0,$.jsx)(L,{onClick:()=>e.current?.scrollTo(r.length-1),children:`End`})]})]})]})},bn=[`Basic`,`Size`,`ColorScheme`,`DefaultIndex`,`Orientation`,`Align`,`Gap`,`Duration`,`SlideSize`,`SlidesToScroll`,`DragFree`,`Autoplay`,`Delay`,`DisabledStopMouseEnterAutoplay`,`DisabledLoop`,`DisabledDraggable`,`DisabledIncludeGapInSize`,`ScrollProgress`,`Methods`,`Thumbnails`,`CustomComponent`,`CustomControl`],Zt.parameters={...Zt.parameters,docs:{...Zt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Zt.parameters?.docs?.source}}},Qt.parameters={...Qt.parameters,docs:{...Qt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Qt.parameters?.docs?.source}}},$t.parameters={...$t.parameters,docs:{...$t.parameters?.docs,source:{originalSource:`() => {
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
}`,...$t.parameters?.docs?.source}}},en.parameters={...en.parameters,docs:{...en.parameters?.docs,source:{originalSource:`() => {
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
}`,...en.parameters?.docs?.source}}},tn.parameters={...tn.parameters,docs:{...tn.parameters?.docs,source:{originalSource:`() => {
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
}`,...tn.parameters?.docs?.source}}},nn.parameters={...nn.parameters,docs:{...nn.parameters?.docs,source:{originalSource:`() => {
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
}`,...nn.parameters?.docs?.source}}},rn.parameters={...rn.parameters,docs:{...rn.parameters?.docs,source:{originalSource:`() => {
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
}`,...rn.parameters?.docs?.source}}},an.parameters={...an.parameters,docs:{...an.parameters?.docs,source:{originalSource:`() => {
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
}`,...an.parameters?.docs?.source}}},on.parameters={...on.parameters,docs:{...on.parameters?.docs,source:{originalSource:`() => {
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
}`,...on.parameters?.docs?.source}}},sn.parameters={...sn.parameters,docs:{...sn.parameters?.docs,source:{originalSource:`() => {
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
}`,...sn.parameters?.docs?.source}}},cn.parameters={...cn.parameters,docs:{...cn.parameters?.docs,source:{originalSource:`() => {
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
}`,...cn.parameters?.docs?.source}}},ln.parameters={...ln.parameters,docs:{...ln.parameters?.docs,source:{originalSource:`() => {
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
}`,...ln.parameters?.docs?.source}}},un.parameters={...un.parameters,docs:{...un.parameters?.docs,source:{originalSource:`() => {
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
}`,...un.parameters?.docs?.source}}},dn.parameters={...dn.parameters,docs:{...dn.parameters?.docs,source:{originalSource:`() => {
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
}`,...dn.parameters?.docs?.source}}},fn.parameters={...fn.parameters,docs:{...fn.parameters?.docs,source:{originalSource:`() => {
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
}`,...fn.parameters?.docs?.source}}},pn.parameters={...pn.parameters,docs:{...pn.parameters?.docs,source:{originalSource:`() => {
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
}`,...pn.parameters?.docs?.source}}},mn.parameters={...mn.parameters,docs:{...mn.parameters?.docs,source:{originalSource:`() => {
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
}`,...mn.parameters?.docs?.source}}},hn.parameters={...hn.parameters,docs:{...hn.parameters?.docs,source:{originalSource:`() => {
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
}`,...hn.parameters?.docs?.source}}},gn.parameters={...gn.parameters,docs:{...gn.parameters?.docs,source:{originalSource:`() => {
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
}`,...gn.parameters?.docs?.source}}},_n.parameters={..._n.parameters,docs:{..._n.parameters?.docs,source:{originalSource:`() => {
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
}`,..._n.parameters?.docs?.source}}},vn.parameters={...vn.parameters,docs:{...vn.parameters?.docs,source:{originalSource:`() => {
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
}`,...vn.parameters?.docs?.source}}},yn.parameters={...yn.parameters,docs:{...yn.parameters?.docs,source:{originalSource:`() => {
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
}`,...yn.parameters?.docs?.source}}}})))()}xn();export{nn as Align,ln as Autoplay,Zt as Basic,$t as ColorScheme,vn as CustomComponent,yn as CustomControl,en as DefaultIndex,un as Delay,pn as DisabledDraggable,mn as DisabledIncludeGapInSize,fn as DisabledLoop,dn as DisabledStopMouseEnterAutoplay,cn as DragFree,an as Duration,rn as Gap,gn as Methods,tn as Orientation,hn as ScrollProgress,Qt as Size,on as SlideSize,sn as SlidesToScroll,_n as Thumbnails,bn as __namedExportsOrder,Xt as default};