import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{A as n,Bt as r,M as i,Nn as a,Tn as o,Yn as s,Yt as c,bn as l,dt as u,i as d,it as f,lt as p,o as m,ot as h,pt as g,rt as _,xn as v}from"./props-Bz1FL_va.js";import{i as y,r as b}from"./i18n-provider-Cc12Ys91.js";import{t as x}from"./jsx-runtime-BdxMnOeJ.js";import{E as S,T as C,d as w,f as T}from"./utils-DG4lHdyV.js";import{i as E,t as D}from"./effect-CjnfyxRk.js";import{d as ee,i as te,n as ne,r as re}from"./create-component-DtmnY_ce.js";import{n as O,r as k,t as A}from"./icon-vei_-6m2.js";import{n as j,t as ie}from"./createLucideIcon-CKl6Xqme.js";import{n as ae,t as M}from"./arrow-left-icon-Ch1--O5w.js";import{n as oe,t as se}from"./arrow-right-icon-D17aix0t.js";import{n as N,t as P}from"./chevron-left-icon-BrS3R11G.js";import{n as F,t as I}from"./chevron-right-icon-Cej9ZxLd.js";import{r as ce,t as L}from"./use-controllable-state-tJaJeRqU.js";import{n as le,t as ue}from"./text-b2W5euYI.js";import{r as de,t as R}from"./button-CFBNyQlD.js";import{n as fe,t as pe}from"./center-C6NHygeb.js";import{r as me,t as z}from"./icon-button-BPVZ8V7k.js";import{n as he,t as B}from"./button-group-xlX-FInQ.js";import{n as ge,t as _e}from"./use-boolean-DS6wYhWQ.js";import{n as V,t as ve}from"./progress-CgoFfTah.js";import{n as ye,t as H}from"./image-Bl1iVAUc.js";import{n as be,t as xe}from"./v-stack-DgxvBjIl.js";import{n as Se,t as Ce}from"./props-table-CLkISL0o.js";var we,Te;function Ee(){return(Ee=e((()=>{j(),we={name:`circle`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]},we.node,Te=ie(we)})))()}var De;function Oe(){return(Oe=e((()=>{Ee(),k(),De=O(A)({as:Te})})))()}var ke;function Ae(){return(Ae=e((()=>{ee(),ke=te({base:{indicator:{bg:`colorScheme.solid/40`,cursor:`pointer`,rounded:`full`,transitionDuration:`moderate`,transitionProperty:`common`,_horizontal:{w:`10`},_vertical:{h:`10`},_hover:{_notSelected:{bg:`colorScheme.solid/70`}},_selected:{bg:`colorScheme.solid`},_disabled:{layerStyle:`disabled`}},indicators:{display:`flex`,gap:`2`,justifyContent:`center`,position:`absolute`,zIndex:`yamcha`,_horizontal:{bottom:`4`,flexDirection:`row`,h:`2`,left:`50%`,px:`4`,transform:`translateX(-50%)`,w:`full`},_vertical:{flexDirection:`column`,h:`full`,py:`4`,right:`4`,top:`50%`,transform:`translateY(-50%)`,w:`2`}},item:{"&:not([data-include-gap-in-size])":{_horizontal:{mr:`{slide-gap}`},_vertical:{mb:`{slide-gap}`}},"&[data-include-gap-in-size]":{_horizontal:{pr:`{slide-gap}`},_vertical:{pb:`{slide-gap}`}},boxSize:`full`,flex:`0 0 {slide-size}`,position:`relative`},list:{"&[data-include-gap-in-size]":{_horizontal:{mr:`calc({slide-gap} * -1)`},_vertical:{mb:`calc({slide-gap} * -1)`}},display:`flex`,h:`full`,_horizontal:{flexDirection:`row`},_vertical:{flexDirection:`column`}},next:{_horizontal:{right:`4`},_vertical:{bottom:`4`}},prev:{_horizontal:{left:`4`},_vertical:{top:`4`}},root:{"--slide-gap":`spaces.4`,"--slide-size":`sizes.full`,overflow:`hidden`,position:`relative`,w:`full`},trigger:{position:`absolute`,zIndex:`kurillin`,_horizontal:{top:`50%`,transform:`translateY(-50%)`},_vertical:{left:`50%`,transform:`translateX(-50%) rotate(90deg)`}}},sizes:{sm:{root:{h:`sm`}},md:{root:{h:`md`}},lg:{root:{h:`lg`}}},defaultProps:{size:`md`}})})))()}function je(e){return Object.prototype.toString.call(e)===`[object Object]`}function Me(e){return je(e)||Array.isArray(e)}function Ne(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}function Pe(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length!==r.length||JSON.stringify(Object.keys(e.breakpoints||{}))!==JSON.stringify(Object.keys(t.breakpoints||{}))?!1:n.every(n=>{let r=e[n],i=t[n];return typeof r==`function`?`${r}`==`${i}`:!Me(r)||!Me(i)?r===i:Pe(r,i)})}function Fe(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function Ie(e,t){if(e.length!==t.length)return!1;let n=Fe(e),r=Fe(t);return n.every((e,t)=>{let n=r[t];return Pe(e,n)})}function Le(e){return typeof e==`number`}function Re(e){return typeof e==`string`}function ze(e){return typeof e==`boolean`}function Be(e){return Object.prototype.toString.call(e)===`[object Object]`}function U(e){return Math.abs(e)}function Ve(e){return Math.sign(e)}function He(e,t){return U(e-t)}function Ue(e,t){return e===0||t===0||U(e)<=U(t)?0:U(He(U(e),U(t))/e)}function We(e){return Math.round(e*100)/100}function Ge(e){return Ye(e).map(Number)}function W(e){return e[Ke(e)]}function Ke(e){return Math.max(0,e.length-1)}function qe(e,t){return t===Ke(e)}function Je(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function Ye(e){return Object.keys(e)}function Xe(e,t){return[e,t].reduce((e,t)=>(Ye(t).forEach(n=>{let r=e[n],i=t[n];e[n]=Be(r)&&Be(i)?Xe(r,i):i}),e),{})}function Ze(e,t){return t.MouseEvent!==void 0&&e instanceof t.MouseEvent}function Qe(e,t){let n={start:r,center:i,end:a};function r(){return 0}function i(e){return a(e)/2}function a(e){return t-e}function o(r,i){return Re(e)?n[e](r):e(t,r,i)}return{measure:o}}function $e(){let e=[];function t(t,n,i,a={passive:!0}){let o;if(`addEventListener`in t)t.addEventListener(n,i,a),o=()=>t.removeEventListener(n,i,a);else{let e=t;e.addListener(i),o=()=>e.removeListener(i)}return e.push(o),r}function n(){e=e.filter(e=>e())}let r={add:t,clear:n};return r}function et(e,t,n,r){let i=$e(),a=1e3/60,o=null,s=0,c=0;function l(){i.add(e,`visibilitychange`,()=>{e.hidden&&m()})}function u(){p(),i.clear()}function d(e){if(!c)return;o||(o=e,n(),n());let i=e-o;for(o=e,s+=i;s>=a;)n(),s-=a;r(s/a),c&&=t.requestAnimationFrame(d)}function f(){c||=t.requestAnimationFrame(d)}function p(){t.cancelAnimationFrame(c),o=null,s=0,c=0}function m(){o=null,s=0}return{init:l,destroy:u,start:f,stop:p,update:n,render:r}}function tt(e,t){let n=t===`rtl`,r=e===`y`,i=r?`y`:`x`,a=r?`x`:`y`,o=!r&&n?-1:1,s=u(),c=d();function l(e){let{height:t,width:n}=e;return r?t:n}function u(){return r?`top`:n?`right`:`left`}function d(){return r?`bottom`:n?`left`:`right`}function f(e){return e*o}return{scroll:i,cross:a,startEdge:s,endEdge:c,measureSize:l,direction:f}}function nt(e=0,t=0){let n=U(e-t);function r(t){return t<e}function i(e){return e>t}function a(e){return r(e)||i(e)}function o(n){return a(n)?r(n)?e:t:n}function s(e){return n?e-n*Math.ceil((e-t)/n):e}return{length:n,max:t,min:e,constrain:o,reachedAny:a,reachedMax:i,reachedMin:r,removeOffset:s}}function rt(e,t,n){let{constrain:r}=nt(0,e),i=e+1,a=o(t);function o(e){return n?U((i+e)%i):r(e)}function s(){return a}function c(e){return a=o(e),d}function l(e){return u().set(s()+e)}function u(){return rt(e,s(),n)}let d={get:s,set:c,add:l,clone:u};return d}function it(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){let{cross:y,direction:b}=e,x=[`INPUT`,`SELECT`,`TEXTAREA`],S={passive:!1},C=$e(),w=$e(),T=nt(50,225).constrain(p.measure(20)),E={mouse:300,touch:400},D={mouse:500,touch:600},ee=m?43:25,te=!1,ne=0,re=0,O=!1,k=!1,A=!1,j=!1;function ie(e){if(!v)return;function n(t){(ze(v)||v(e,t))&&P(t)}let r=t;C.add(r,`dragstart`,e=>e.preventDefault(),S).add(r,`touchmove`,()=>void 0,S).add(r,`touchend`,()=>void 0).add(r,`touchstart`,n).add(r,`mousedown`,n).add(r,`touchcancel`,I).add(r,`contextmenu`,I).add(r,`click`,ce,!0)}function ae(){C.clear(),w.clear()}function M(){let e=j?n:t;w.add(e,`touchmove`,F,S).add(e,`touchend`,I).add(e,`mousemove`,F,S).add(e,`mouseup`,I)}function oe(e){let t=e.nodeName||``;return x.includes(t)}function se(){return(m?D:E)[j?`mouse`:`touch`]}function N(e,t){let n=d.add(Ve(e)*-1),r=u.byDistance(e,!m).distance;return m||U(e)<T?r:g&&t?r*.5:u.byIndex(n.get(),0).distance}function P(e){let t=Ze(e,r);j=t,A=m&&t&&!e.buttons&&te,te=He(i.get(),o.get())>=2,!(t&&e.button!==0)&&(oe(e.target)||(O=!0,a.pointerDown(e),l.useFriction(0).useDuration(0),i.set(o),M(),ne=a.readPoint(e),re=a.readPoint(e,y),f.emit(`pointerDown`)))}function F(e){if(!Ze(e,r)&&e.touches.length>=2)return I(e);let t=a.readPoint(e),n=a.readPoint(e,y),o=He(t,ne),c=He(n,re);if(!k&&!j&&(!e.cancelable||(k=o>c,!k)))return I(e);let u=a.pointerMove(e);o>h&&(A=!0),l.useFriction(.3).useDuration(.75),s.start(),i.add(b(u)),e.preventDefault()}function I(e){let t=u.byDistance(0,!1).index!==d.get(),n=a.pointerUp(e)*se(),r=N(b(n),t),i=Ue(n,r),o=ee-10*i,s=_+i/50;k=!1,O=!1,w.clear(),l.useDuration(o).useFriction(s),c.distance(r,!m),j=!1,f.emit(`pointerUp`)}function ce(e){A&&=(e.stopPropagation(),e.preventDefault(),!1)}function L(){return O}return{init:ie,destroy:ae,pointerDown:L}}function at(e,t){let n,r;function i(e){return e.timeStamp}function a(n,r){let i=`client${(r||e.scroll)===`x`?`X`:`Y`}`;return(Ze(n,t)?n:n.touches[0])[i]}function o(e){return n=e,r=e,a(e)}function s(e){let t=a(e)-a(r),o=i(e)-i(n)>170;return r=e,o&&(n=e),t}function c(e){if(!n||!r)return 0;let t=a(r)-a(n),o=i(e)-i(n),s=i(e)-i(r)>170,c=t/o;return o&&!s&&U(c)>.1?c:0}return{pointerDown:o,pointerMove:s,pointerUp:c,readPoint:a}}function ot(){function e(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}return{measure:e}}function st(e){function t(t){return t/100*e}return{measure:t}}function ct(e,t,n,r,i,a,o){let s=[e].concat(r),c,l,u=[],d=!1;function f(e){return i.measureSize(o.measure(e))}function p(i){if(!a)return;l=f(e),u=r.map(f);function o(n){for(let a of n){if(d)return;let n=a.target===e,o=r.indexOf(a.target),s=n?l:u[o];if(U(f(n?e:r[o])-s)>=.5){i.reInit(),t.emit(`resize`);break}}}c=new ResizeObserver(e=>{(ze(a)||a(i,e))&&o(e)}),n.requestAnimationFrame(()=>{s.forEach(e=>c.observe(e))})}function m(){d=!0,c&&c.disconnect()}return{init:p,destroy:m}}function lt(e,t,n,r,i,a){let o=0,s=0,c=i,l=a,u=e.get(),d=0;function f(){let t=r.get()-e.get(),i=!c,a=0;return i?(o=0,n.set(r),e.set(r),a=t):(n.set(e),o+=t/c,o*=l,u+=o,e.add(o),a=u-d),s=Ve(a),d=u,x}function p(){return U(r.get()-t.get())<.001}function m(){return c}function h(){return s}function g(){return o}function _(){return y(i)}function v(){return b(a)}function y(e){return c=e,x}function b(e){return l=e,x}let x={direction:h,duration:m,velocity:g,seek:f,settled:p,useBaseFriction:v,useBaseDuration:_,useFriction:b,useDuration:y};return x}function ut(e,t,n,r,i){let a=i.measure(10),o=i.measure(50),s=nt(.1,.99),c=!1;function l(){return!(c||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function u(i){if(!l())return;let c=U(e[e.reachedMin(t.get())?`min`:`max`]-t.get()),u=n.get()-t.get(),d=s.constrain(c/o);n.subtract(u*d),!i&&U(u)<a&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(e){c=!e}return{shouldConstrain:l,constrain:u,toggleActive:d}}function dt(e,t,n,r,i){let a=nt(-t+e,0),o=d(),s=u(),c=f();function l(e,t){return He(e,t)<=1}function u(){let e=o[0],t=W(o);return nt(o.lastIndexOf(e),o.indexOf(t)+1)}function d(){return n.map((e,t)=>{let{min:r,max:i}=a,o=a.constrain(e),s=!t,c=qe(n,t);return s?i:c||l(r,o)?r:l(i,o)?i:o}).map(e=>parseFloat(e.toFixed(3)))}function f(){if(t<=e+i)return[a.max];if(r===`keepSnaps`)return o;let{min:n,max:c}=s;return o.slice(n,c)}return{snapsContained:c,scrollContainLimit:s}}function ft(e,t,n){let r=t[0];return{limit:nt(n?r-e:W(t),r)}}function pt(e,t,n,r){let i=.1,{reachedMin:a,reachedMax:o}=nt(t.min+i,t.max+i);function s(e){return e===1?o(n.get()):e===-1&&a(n.get())}function c(t){if(!s(t))return;let n=t*-1*e;r.forEach(e=>e.add(n))}return{loop:c}}function mt(e){let{max:t,length:n}=e;function r(e){let r=e-t;return n?r/-n:0}return{get:r}}function ht(e,t,n,r,i){let{startEdge:a,endEdge:o}=e,{groupSlides:s}=i,c=d().map(t.measure),l=f(),u=p();function d(){return s(r).map(e=>W(e)[o]-e[0][a]).map(U)}function f(){return r.map(e=>n[a]-e[a]).map(e=>-U(e))}function p(){return s(l).map(e=>e[0]).map((e,t)=>e+c[t])}return{snaps:l,snapsAligned:u}}function gt(e,t,n,r,i,a){let{groupSlides:o}=i,{min:s,max:c}=r,l=u();function u(){let r=o(a),i=!e||t===`keepSnaps`;return n.length===1?[a]:i?r:r.slice(s,c).map((e,t,n)=>{let r=!t,i=qe(n,t);return r?Je(W(n[0])+1):i?Je(Ke(a)-W(n)[0]+1,W(n)[0]):e})}return{slideRegistry:l}}function _t(e,t,n,r,i){let{reachedAny:a,removeOffset:o,constrain:s}=r;function c(e){return e.concat().sort((e,t)=>U(e)-U(t))[0]}function l(n){let r=e?o(n):s(n),{index:i}=t.map((e,t)=>({diff:u(e-r,0),index:t})).sort((e,t)=>U(e.diff)-U(t.diff))[0];return{index:i,distance:r}}function u(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return c(i);let a=i.filter(e=>Ve(e)===r);return a.length?c(a):W(i)-n}function d(e,n){return{index:e,distance:u(t[e]-i.get(),n)}}function f(n,r){let o=i.get()+n,{index:s,distance:c}=l(o),d=!e&&a(o);return!r||d?{index:s,distance:n}:{index:s,distance:n+u(t[s]-c,0)}}return{byDistance:f,byIndex:d,shortcut:u}}function vt(e,t,n,r,i,a,o){function s(i){let s=i.distance,c=i.index!==t.get();a.add(s),s&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(i.index),o.emit(`select`))}function c(e,t){s(i.byDistance(e,t))}function l(e,n){let r=t.clone().set(e);s(i.byIndex(r.get(),n))}return{distance:c,index:l}}function yt(e,t,n,r,i,a,o,s){let c={passive:!0,capture:!0},l=0;function u(u){if(!s)return;function f(t){if(new Date().getTime()-l>10)return;o.emit(`slideFocusStart`),e.scrollLeft=0;let a=n.findIndex(e=>e.includes(t));Le(a)&&(i.useDuration(0),r.index(a,0),o.emit(`slideFocus`))}a.add(document,`keydown`,d,!1),t.forEach((e,t)=>{a.add(e,`focus`,e=>{(ze(s)||s(u,e))&&f(t)},c)})}function d(e){e.code===`Tab`&&(l=new Date().getTime())}return{init:u}}function bt(e){let t=e;function n(){return t}function r(e){t=o(e)}function i(e){t+=o(e)}function a(e){t-=o(e)}function o(e){return Le(e)?e:e.get()}return{get:n,set:r,add:i,subtract:a}}function xt(e,t){let n=e.scroll===`x`?o:s,r=t.style,i=null,a=!1;function o(e){return`translate3d(${e}px,0px,0px)`}function s(e){return`translate3d(0px,${e}px,0px)`}function c(t){if(a)return;let o=We(e.direction(t));o!==i&&(r.transform=n(o),i=o)}function l(e){a=!e}function u(){a||(r.transform=``,t.getAttribute(`style`)||t.removeAttribute(`style`))}return{clear:u,to:c,toggleActive:l}}function St(e,t,n,r,i,a,o,s,c){let l=.5,u=Ge(i),d=Ge(i).reverse(),f=_().concat(v());function p(e,t){return e.reduce((e,t)=>e-i[t],t)}function m(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function h(e){return a.map((n,i)=>({start:n-r[i]+l+e,end:n+t-l+e}))}function g(t,r,i){let a=h(r);return t.map(t=>{let r=i?0:-n,o=i?n:0,l=i?`end`:`start`,u=a[t][l];return{index:t,loopPoint:u,slideLocation:bt(-1),translate:xt(e,c[t]),target:()=>s.get()>u?r:o}})}function _(){let e=o[0];return g(m(d,e),n,!1)}function v(){let e=t-o[0]-1;return g(m(u,e),-n,!0)}function y(){return f.every(({index:e})=>p(u.filter(t=>t!==e),t)<=.1)}function b(){f.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})}function x(){f.forEach(e=>e.translate.clear())}return{canLoop:y,clear:x,loop:b,loopPoints:f}}function Ct(e,t,n){let r,i=!1;function a(a){if(!n)return;function o(e){for(let n of e)if(n.type===`childList`){a.reInit(),t.emit(`slidesChanged`);break}}r=new MutationObserver(e=>{i||(ze(n)||n(a,e))&&o(e)}),r.observe(e,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:a,destroy:o}}function wt(e,t,n,r){let i={},a=null,o=null,s,c=!1;function l(){s=new IntersectionObserver(e=>{c||(e.forEach(e=>{let n=t.indexOf(e.target);i[n]=e}),a=null,o=null,n.emit(`slidesInView`))},{root:e.parentElement,threshold:r}),t.forEach(e=>s.observe(e))}function u(){s&&s.disconnect(),c=!0}function d(e){return Ye(i).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:a}=i[r];return(e&&a||!e&&!a)&&t.push(r),t},[])}function f(e=!0){if(e&&a)return a;if(!e&&o)return o;let t=d(e);return e&&(a=t),e||(o=t),t}return{init:l,destroy:u,get:f}}function Tt(e,t,n,r,i,a){let{measureSize:o,startEdge:s,endEdge:c}=e,l=n[0]&&i,u=m(),d=h(),f=n.map(o),p=g();function m(){if(!l)return 0;let e=n[0];return U(t[s]-e[s])}function h(){if(!l)return 0;let e=a.getComputedStyle(W(r));return parseFloat(e.getPropertyValue(`margin-${c}`))}function g(){return n.map((e,t,n)=>{let r=!t,i=qe(n,t);return r?f[t]+u:i?f[t]+d:n[t+1][s]-e[s]}).map(U)}return{slideSizes:f,slideSizesWithGaps:p,startGap:u,endGap:d}}function Et(e,t,n,r,i,a,o,s,c){let{startEdge:l,endEdge:u,direction:d}=e,f=Le(n);function p(e,t){return Ge(e).filter(e=>e%t===0).map(n=>e.slice(n,n+t))}function m(e){return e.length?Ge(e).reduce((n,f,p)=>{let m=W(n)||0,h=m===0,g=f===Ke(e),_=i[l]-a[m][l],v=i[l]-a[f][u],y=!r&&h?d(o):0,b=U(v-(!r&&g?d(s):0)-(_+y));return p&&b>t+c&&n.push(f),g&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}function h(e){return f?p(e,n):m(e)}return{groupSlides:h}}function Dt(e,t,n,r,i,a,o){let{align:s,axis:c,direction:l,startIndex:u,loop:d,duration:f,dragFree:p,dragThreshold:m,inViewThreshold:h,slidesToScroll:g,skipSnaps:_,containScroll:v,watchResize:y,watchSlides:b,watchDrag:x,watchFocus:S}=a,C=ot(),w=C.measure(t),T=n.map(C.measure),E=tt(c,l),D=E.measureSize(w),ee=st(D),te=Qe(s,D),ne=!d&&!!v,{slideSizes:re,slideSizesWithGaps:O,startGap:k,endGap:A}=Tt(E,w,T,n,d||!!v,i),j=Et(E,D,g,d,w,T,k,A,2),{snaps:ie,snapsAligned:ae}=ht(E,te,w,T,j),M=-W(ie)+W(O),{snapsContained:oe,scrollContainLimit:se}=dt(D,M,ae,v,2),N=ne?oe:ae,{limit:P}=ft(M,N,d),F=rt(Ke(N),u,d),I=F.clone(),ce=Ge(n),L=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},le=({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:i,scrollLooper:a,slideLooper:o,dragHandler:s,animation:c,eventHandler:l,scrollBounds:u,options:{loop:d}},f)=>{let p=e.settled(),m=!u.shouldConstrain(),h=d?p:p&&m,g=h&&!s.pointerDown();g&&c.stop();let _=n.get()*f+i.get()*(1-f);r.set(_),d&&(a.loop(e.direction()),o.loop()),t.to(r.get()),g&&l.emit(`settle`),h||l.emit(`scroll`)},ue=et(r,i,()=>L(be),e=>le(be,e)),de=.68,R=N[F.get()],fe=bt(R),pe=bt(R),me=bt(R),z=bt(R),he=lt(fe,me,pe,z,f,de),B=_t(d,N,M,P,z),ge=vt(ue,F,I,he,B,z,o),_e=mt(P),V=$e(),ve=wt(t,n,o,h),{slideRegistry:ye}=gt(ne,v,N,se,j,ce),H=yt(e,n,ye,ge,he,V,o,S),be={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:w,slideRects:T,animation:ue,axis:E,dragHandler:it(E,e,r,i,z,at(E,i),fe,ue,ge,he,B,F,o,ee,p,m,_,de,x),eventStore:V,percentOfView:ee,index:F,indexPrevious:I,limit:P,location:fe,offsetLocation:me,previousLocation:pe,options:a,resizeHandler:ct(t,o,i,n,E,y,C),scrollBody:he,scrollBounds:ut(P,me,z,he,ee),scrollLooper:pt(M,P,me,[fe,me,pe,z]),scrollProgress:_e,scrollSnapList:N.map(_e.get),scrollSnaps:N,scrollTarget:B,scrollTo:ge,slideLooper:St(E,D,M,re,O,ie,N,me,n),slideFocus:H,slidesHandler:Ct(t,o,b),slidesInView:ve,slideIndexes:ce,slideRegistry:ye,slidesToScroll:j,target:z,translate:xt(E,t)};return be}function Ot(){let e={},t;function n(e){t=e}function r(t){return e[t]||[]}function i(e){return r(e).forEach(n=>n(t,e)),c}function a(t,n){return e[t]=r(t).concat([n]),c}function o(t,n){return e[t]=r(t).filter(e=>e!==n),c}function s(){e={}}let c={init:n,emit:i,off:o,on:a,clear:s};return c}function kt(e){function t(e,t){return Xe(e,t||{})}function n(n){let r=n.breakpoints||{};return t(n,Ye(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{}))}function r(t){return t.map(e=>Ye(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:r}}function At(e){let t=[];function n(n,r){return t=r.filter(({options:t})=>e.optionsAtMedia(t).active!==!1),t.forEach(t=>t.init(n,e)),r.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})}function r(){t=t.filter(e=>e.destroy())}return{init:n,destroy:r}}function jt(e,t,n){let r=e.ownerDocument,i=r.defaultView,a=kt(i),o=At(a),s=$e(),c=Ot(),{mergeOptions:l,optionsAtMedia:u,optionsMediaQueries:d}=a,{on:f,off:p,emit:m}=c,h=D,g=!1,_,v=l(Mt,jt.globalOptions),y=l(v),b=[],x,S,C;function w(){let{container:t,slides:n}=y;S=(Re(t)?e.querySelector(t):t)||e.children[0];let r=Re(n)?S.querySelectorAll(n):n;C=[].slice.call(r||S.children)}function T(t){let n=Dt(e,S,C,r,i,t,c);return t.loop&&!n.slideLooper.canLoop()?T(Object.assign({},t,{loop:!1})):n}function E(e,t){g||(v=l(v,e),y=u(v),b=t||b,w(),_=T(y),d([v,...b.map(({options:e})=>e)]).forEach(e=>s.add(e,`change`,D)),y.active&&(_.translate.to(_.location.get()),_.animation.init(),_.slidesInView.init(),_.slideFocus.init(L),_.eventHandler.init(L),_.resizeHandler.init(L),_.slidesHandler.init(L),_.options.loop&&_.slideLooper.loop(),S.offsetParent&&C.length&&_.dragHandler.init(L),x=o.init(L,b)))}function D(e,t){let n=ae();ee(),E(l({startIndex:n},e),t),c.emit(`reInit`)}function ee(){_.dragHandler.destroy(),_.eventStore.clear(),_.translate.clear(),_.slideLooper.clear(),_.resizeHandler.destroy(),_.slidesHandler.destroy(),_.slidesInView.destroy(),_.animation.destroy(),o.destroy(),s.clear()}function te(){g||(g=!0,s.clear(),ee(),c.emit(`destroy`),c.clear())}function ne(e,t,n){y.active&&!g&&(_.scrollBody.useBaseFriction().useDuration(t===!0?0:y.duration),_.scrollTo.index(e,n||0))}function re(e){ne(_.index.add(1).get(),e,-1)}function O(e){ne(_.index.add(-1).get(),e,1)}function k(){return _.index.add(1).get()!==ae()}function A(){return _.index.add(-1).get()!==ae()}function j(){return _.scrollSnapList}function ie(){return _.scrollProgress.get(_.offsetLocation.get())}function ae(){return _.index.get()}function M(){return _.indexPrevious.get()}function oe(){return _.slidesInView.get()}function se(){return _.slidesInView.get(!1)}function N(){return x}function P(){return _}function F(){return e}function I(){return S}function ce(){return C}let L={canScrollNext:k,canScrollPrev:A,containerNode:I,internalEngine:P,destroy:te,off:p,on:f,emit:m,plugins:N,previousScrollSnap:M,reInit:h,rootNode:F,scrollNext:re,scrollPrev:O,scrollProgress:ie,scrollSnapList:j,scrollTo:ne,selectedScrollSnap:ae,slideNodes:ce,slidesInView:oe,slidesNotInView:se};return E(t,n),setTimeout(()=>c.emit(`init`),0),L}var Mt;function Nt(){return(Nt=e((()=>{Mt={align:`center`,axis:`x`,container:null,slides:null,containScroll:`trimSnaps`,direction:`ltr`,slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0},jt.globalOptions=void 0})))()}function Pt(e={},t=[]){let n=(0,Ft.useRef)(e),r=(0,Ft.useRef)(t),[i,a]=(0,Ft.useState)(),[o,s]=(0,Ft.useState)(),c=(0,Ft.useCallback)(()=>{i&&i.reInit(n.current,r.current)},[i]);return(0,Ft.useEffect)(()=>{Pe(n.current,e)||(n.current=e,c())},[e,c]),(0,Ft.useEffect)(()=>{Ie(r.current,t)||(r.current=t,c())},[t,c]),(0,Ft.useEffect)(()=>{if(Ne()&&o){jt.globalOptions=Pt.globalOptions;let e=jt(o,n.current,r.current);return a(e),()=>e.destroy()}a(void 0)},[o,a]),[s,i]}var Ft;function It(){return(It=e((()=>{Ft=t(),Nt(),Pt.globalOptions=void 0})))()}var G,Lt,Rt,zt;function Bt(){return(Bt=e((()=>{It(),G=t(),d(),_e(),L(),b(),f(),S(),c(),v(),p(),D(),[Lt,Rt]=C({name:`CarouselContext`}),zt=({id:e,align:t=`center`,autoplay:n=!1,containScroll:i=!1,controlRef:a,defaultIndex:o=0,delay:c=4e3,dragFree:d=!1,draggable:f=!0,duration:p=25,index:v,inViewThreshold:b=0,loop:x=!0,orientation:S=`horizontal`,plugins:C=[],skipSnaps:w=!1,slidesToScroll:T=1,stopMouseEnterAutoplay:D=!0,watchDrag:ee=f,watchResize:te=!0,watchSlides:ne=!0,onChange:re,onScrollProgress:O,...k}={})=>{let{t:A}=y(`carousel`),[j,ie]=ce({defaultValue:o,value:v,onChange:re}),[ae,M]=g(),[oe,{off:se,on:N}]=ge(),P=(0,G.useRef)(null),F=(0,G.useRef)(new Map),I=(0,G.useRef)(null),L=S===`horizontal`,le=L?`x`:`y`,[ue,de]=(0,G.useState)(0),[R,fe]=(0,G.useState)(0),pe=(0,G.useCallback)((e,t)=>{let n=!s(te)||te(e,t),r=e.scrollSnapList().length,i=e.slideNodes().length;return de(r),fe(i),n},[te]),[me,z]=Pt({align:t,axis:le,container:I.current,containScroll:i,dragFree:d,duration:p,inViewThreshold:b,loop:x,skipSnaps:w,slidesToScroll:T,startIndex:o,watchDrag:ee,watchResize:pe,watchSlides:ne},C);e??=ae;let he=(0,G.useCallback)(e=>{let t=e.scrollSnapList().length,n=e.slideNodes().length;de(t),fe(n)},[]),B=(0,G.useCallback)(()=>{if(!z)return;let e=Math.round(Math.max(0,Math.min(1,z.scrollProgress()))*100);O?.(e)},[z,O]),_e=(0,G.useCallback)(()=>{if(!z)return;let e=z.selectedScrollSnap();ie(e)},[z,ie]),V=(0,G.useCallback)(e=>{F.current.get(e)?.focus(),z?.scrollTo(e)},[z]),ve=(0,G.useCallback)(e=>t=>{let n=ue-1;u(t,{ArrowDown:()=>{L||(e=e===n?0:e+1,V(e))},ArrowLeft:()=>{L&&(e=e===0?n:e-1,V(e))},ArrowRight:()=>{L&&(e=e===n?0:e+1,V(e))},ArrowUp:()=>{L||(e=e===0?n:e-1,V(e))},End:()=>{V(n)},Home:()=>{V(0)}})},[ue,L,V]);_(a,z),(0,G.useEffect)(()=>{if(z)return z.on(`reInit`,he),z.on(`select`,_e),z.on(`scroll`,B),B(),()=>{z.off(`reInit`,he),z.off(`select`,_e),z.off(`scroll`,B)}},[z,he,B,_e]),(0,G.useEffect)(()=>{let e=oe&&D,t=!z?.canScrollNext();return z&&n&&!e&&!t?P.current=setInterval(()=>{z.scrollNext()},c):(P.current&&clearInterval(P.current),P.current=null),()=>{P.current&&clearInterval(P.current)}},[n,z,c,oe,D]),E(()=>{z&&v!==void 0&&z.scrollTo(v)},[v]),E(()=>{z&&z.reInit()},[z,R,t,le,i,d,p,b,x,w,T]);let ye=(0,G.useCallback)(({ref:t,...n}={})=>m({id:e,"aria-roledescription":`carousel`,"data-orientation":S},k,{ref:t,onMouseEnter:N,onMouseLeave:se},n)(),[e,N,se,k,S]),H=(0,G.useCallback)(({ref:e,...t}={})=>({id:M,"aria-live":n?`off`:`polite`,"data-orientation":S,...t,ref:h(e,I,me)}),[n,M,S,me]),be=(0,G.useCallback)(({index:e,...t})=>{let n=e+1,i=j===e;return{id:`${M}-${e}`,"aria-label":A(`{page} of {total}`,{page:n,total:R}),"aria-roledescription":`slide`,"data-index":e.toString(),"data-orientation":S,"data-selected":r(i),role:`tabpanel`,...t}},[j,M,R,S,A]),xe=(0,G.useCallback)((e={})=>({"aria-controls":M,"aria-label":A(`Go to previous slide`),"data-orientation":S,disabled:!z?.canScrollPrev(),...e,onClick:l(e.onClick,()=>z?.scrollPrev())}),[z,M,S,A]),Se=(0,G.useCallback)((e={})=>({"aria-controls":M,"aria-label":A(`Go to next slide`),"data-orientation":S,disabled:!z?.canScrollNext(),...e,onClick:l(e.onClick,()=>z?.scrollNext())}),[z,M,S,A]),Ce=(0,G.useCallback)((e={})=>({"aria-label":A(`Slides`),"aria-orientation":S,role:`tablist`,...e}),[S,A]);return{carousel:z,index:j,setIndex:ie,snapCount:ue,total:R,getIndicatorProps:(0,G.useCallback)(({ref:e,index:t,...n})=>{let i=t+1,a=j===t;return{type:`button`,"aria-controls":`${M}-${t}`,"aria-label":A(`Go to {page} slide`,{page:i}),"aria-selected":a,"data-index":t.toString(),"data-orientation":S,"data-selected":r(a),role:`tab`,tabIndex:a?0:-1,...n,ref:h(e,e=>{F.current.set(t,e)}),onClick:l(n.onClick,()=>z?.scrollTo(t)),onKeyDown:l(n.onKeyDown,ve(t))}},[j,M,A,S,ve,z]),getIndicatorsProps:Ce,getItemProps:be,getListProps:H,getNextTriggerProps:Se,getPrevTriggerProps:xe,getRootProps:ye}}})))()}var Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,K,q,J,Y,X,Z,Yt;function Xt(){return(Xt=e((()=>{Vt=t(),re(),w(),n(),c(),me(),N(),F(),Ae(),Bt(),Ht=x(),{ComponentContext:Ut,PropsContext:Wt,useComponentContext:Gt,usePropsContext:Kt,withContext:qt,withProvider:Jt}=ne(`carousel`,ke),K=Jt(({includeGapInSize:e=!0,...t})=>{let{carousel:n,index:r,setIndex:i,snapCount:a,total:o,getIndicatorProps:s,getIndicatorsProps:c,getItemProps:l,getListProps:u,getNextTriggerProps:d,getPrevTriggerProps:f,getRootProps:p}=zt(t),m=(0,Vt.useMemo)(()=>({includeGapInSize:e}),[e]),h=(0,Vt.useMemo)(()=>({carousel:n,index:r,setIndex:i,snapCount:a,total:o,getIndicatorProps:s,getIndicatorsProps:c,getItemProps:l,getListProps:u,getNextTriggerProps:d,getPrevTriggerProps:f}),[n,o,r,i,a,s,c,l,u,d,f]);return(0,Ht.jsx)(Lt,{value:h,children:(0,Ht.jsx)(Ut,{value:m,children:(0,Ht.jsx)(T.section,{...p()})})})},`root`)(void 0,({gap:e,slideSize:t,...n})=>({...n,"--slide-gap":i(e,`spaces`),"--slide-size":i(t,`sizes`)})),q=qt(`div`,`list`)(void 0,e=>{let{includeGapInSize:t}=Gt(),{getListProps:n}=Rt();return{"data-include-gap-in-size":r(t),...n(e)}}),J=qt(`div`,`item`)(void 0,({slideSize:e,...t})=>{let{includeGapInSize:n}=Gt(),{getItemProps:a}=Rt();return{"data-include-gap-in-size":r(n),"--slide-size":i(e,`sizes`),...a(t)}}),Y=qt(z,{name:`PrevTrigger`,slot:[`trigger`,`prev`]})(void 0,e=>{let{getPrevTriggerProps:t}=Rt();return{fullRounded:!0,icon:(0,Ht.jsx)(P,{}),...t(e)}}),X=qt(z,{name:`NextTrigger`,slot:[`trigger`,`next`]})(void 0,e=>{let{getNextTriggerProps:t}=Rt();return{fullRounded:!0,icon:(0,Ht.jsx)(I,{}),...t(e)}}),Z=qt(`div`,`indicators`)(void 0,({children:e,render:t,...n})=>{let{index:r,snapCount:i,getIndicatorProps:a,getIndicatorsProps:o}=Rt();return{children:(0,Vt.useMemo)(()=>e||Array.from({length:i},(e,n)=>{if(t){let e=t({index:n,selected:n===r});return(0,Vt.isValidElement)(e)?(0,Vt.cloneElement)(e,{...a({key:n,index:n})}):e}return(0,Ht.jsx)(Yt,{index:n},n)}),[e,a,t,r,i]),...o(n)}}),Yt=qt(`button`,`indicator`)(void 0,e=>{let{getIndicatorProps:t}=Rt();return t(e)})})))()}var Q,$,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn;function Sn(){return(Sn=e((()=>{Q=t(),Se(),a(),c(),he(),de(),fe(),ae(),oe(),Oe(),ye(),V(),be(),le(),Xt(),$=x(),Zt={component:K,title:`Components / Carousel`},Qt=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},$t=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsx)(Ce,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(t,n,r)=>(0,$.jsxs)(K,{size:n,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]},r)})},en=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsx)(Ce,{variant:`stack`,rows:o,children:(t,n,r)=>(0,$.jsxs)(K,{colorScheme:n,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]},r)})},tn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{defaultIndex:1,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},nn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsx)(Ce,{variant:`stack`,rows:[`horizontal`,`vertical`],children:(t,n,r)=>(0,$.jsxs)(K,{orientation:n,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]},r)})},rn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsx)(Ce,{variant:`stack`,rows:[`center`,`start`,`end`],children:(t,n,r)=>(0,$.jsxs)(K,{align:n,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]},r)})},an=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{gap:0,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},on=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{duration:60,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},sn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{slideSize:`50%`,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,slideSize:t===1?`100%`:void 0,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},cn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{slideSize:`${100/3}%`,slidesToScroll:3,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},ln=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{dragFree:!0,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},un=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{autoplay:!0,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},dn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{autoplay:!0,delay:1e3,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},fn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},pn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{loop:!1,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},mn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{draggable:!1,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},hn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{includeGapInSize:!1,slideSize:`50%`,children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},gn=()=>{let[e,t]=(0,Q.useState)(0),n=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(K,{dragFree:!0,loop:!1,onScrollProgress:t,children:[(0,$.jsx)(q,{children:n.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]}),(0,$.jsx)(ve,{value:e})]})},_n=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{watchDrag:(e,t)=>(console.log(`drag`,e,t),!0),watchResize:(e,t)=>(console.log(`resized`,e,t),!0),watchSlides:(e,t)=>(console.log(`slides updated`,e,t),!0),children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]})},vn=()=>{let[e,t]=(0,Q.useState)(0),n=(0,Q.useMemo)(()=>Array.from({length:50},(e,t)=>`https://www.ghibli.jp/gallery/baron0${(t+1).toString().padStart(2,`0`)}.jpg`),[]);return(0,$.jsxs)(xe,{children:[(0,$.jsx)(K,{index:e,onChange:t,children:(0,$.jsx)(q,{children:n.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))})}),(0,$.jsx)(K,{containScroll:`keepSnaps`,dragFree:!0,h:`5xs`,index:e,slideSize:`20%`,children:(0,$.jsx)(q,{children:n.map((e,n)=>(0,$.jsx)(J,{cursor:`pointer`,index:n,opacity:`0.4`,_selected:{opacity:1},onClick:()=>t(n),children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},n))})})]})},yn=()=>{let e=(0,Q.useMemo)(()=>[`https://www.ghibli.jp/gallery/chihiro015.jpg`,`https://www.ghibli.jp/gallery/howl049.jpg`,`https://www.ghibli.jp/gallery/totoro036.jpg`,`https://www.ghibli.jp/gallery/mononoke033.jpg`,`https://www.ghibli.jp/gallery/laputa047.jpg`,`https://www.ghibli.jp/gallery/porco025.jpg`],[]);return(0,$.jsxs)(K,{children:[(0,$.jsx)(q,{children:e.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{bottom:`4`,icon:(0,$.jsx)(M,{}),top:`unset`,transform:`unset`}),(0,$.jsx)(X,{bottom:`4`,icon:(0,$.jsx)(se,{}),top:`unset`,transform:`unset`}),(0,$.jsx)(Z,{h:`6`,render:({selected:e})=>(0,$.jsx)(pe,{as:`button`,cursor:`pointer`,children:(0,$.jsx)(De,{"data-selected":r(e),color:`transparent`,fill:`colorScheme.solid/40`,fontSize:`2xl`,_hover:{_notSelected:{fill:`colorScheme.solid/70`}},_selected:{fill:`colorScheme.solid`}})})})]})},bn=()=>{let e=(0,Q.useRef)(null),[t,n]=(0,Q.useState)(0),[r,i]=(0,Q.useState)([`https://www.ghibli.jp/gallery/baron001.jpg`,`https://www.ghibli.jp/gallery/baron002.jpg`,`https://www.ghibli.jp/gallery/baron003.jpg`,`https://www.ghibli.jp/gallery/baron004.jpg`,`https://www.ghibli.jp/gallery/baron005.jpg`]);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(K,{controlRef:e,index:t,onChange:n,children:[(0,$.jsx)(q,{children:r.map((e,t)=>(0,$.jsx)(J,{index:t,children:(0,$.jsx)(H,{src:e,alt:`スタジオジブリ作品静止画`,boxSize:`full`,objectFit:`cover`})},t))}),(0,$.jsx)(Y,{}),(0,$.jsx)(X,{}),(0,$.jsx)(Z,{})]}),(0,$.jsxs)(B,{children:[(0,$.jsx)(R,{disabled:r.length===50,onClick:()=>{let e=(r.length+1).toString().padStart(2,`0`),t=[...r,`https://www.ghibli.jp/gallery/baron0${e}.jpg`];i(t),n(t.length-1)},children:`Add`}),(0,$.jsx)(R,{disabled:r.length===1,onClick:()=>{t===r.length-1&&n(e=>e-1),i(r.slice(0,-1))},children:`Remove`})]}),(0,$.jsxs)(xe,{gap:`sm`,children:[(0,$.jsx)(ue,{children:`State`}),(0,$.jsxs)(B,{children:[(0,$.jsx)(R,{onClick:()=>n(0),children:`Home`}),(0,$.jsx)(R,{onClick:()=>n(e=>e===0?r.length-1:e-1),children:`Prev`}),(0,$.jsx)(R,{onClick:()=>n(e=>e===r.length-1?0:e+1),children:`Next`}),(0,$.jsx)(R,{onClick:()=>n(r.length-1),children:`End`})]})]}),(0,$.jsxs)(xe,{gap:`sm`,children:[(0,$.jsx)(ue,{children:`Ref`}),(0,$.jsxs)(B,{children:[(0,$.jsx)(R,{onClick:()=>e.current?.scrollTo(0),children:`Home`}),(0,$.jsx)(R,{onClick:()=>e.current?.scrollPrev(),children:`Prev`}),(0,$.jsx)(R,{onClick:()=>e.current?.scrollNext(),children:`Next`}),(0,$.jsx)(R,{onClick:()=>e.current?.scrollTo(r.length-1),children:`End`})]})]})]})},xn=[`Basic`,`Size`,`ColorScheme`,`DefaultIndex`,`Orientation`,`Align`,`Gap`,`Duration`,`SlideSize`,`SlidesToScroll`,`DragFree`,`Autoplay`,`Delay`,`DisabledStopMouseEnterAutoplay`,`DisabledLoop`,`DisabledDraggable`,`DisabledIncludeGapInSize`,`ScrollProgress`,`Methods`,`Thumbnails`,`CustomComponent`,`CustomControl`],Qt.parameters={...Qt.parameters,docs:{...Qt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Qt.parameters?.docs?.source}}},$t.parameters={...$t.parameters,docs:{...$t.parameters?.docs,source:{originalSource:`() => {
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
}`,...$t.parameters?.docs?.source}}},en.parameters={...en.parameters,docs:{...en.parameters?.docs,source:{originalSource:`() => {
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
}`,...en.parameters?.docs?.source}}},tn.parameters={...tn.parameters,docs:{...tn.parameters?.docs,source:{originalSource:`() => {
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
}`,...tn.parameters?.docs?.source}}},nn.parameters={...nn.parameters,docs:{...nn.parameters?.docs,source:{originalSource:`() => {
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
}`,...nn.parameters?.docs?.source}}},rn.parameters={...rn.parameters,docs:{...rn.parameters?.docs,source:{originalSource:`() => {
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
}`,...rn.parameters?.docs?.source}}},an.parameters={...an.parameters,docs:{...an.parameters?.docs,source:{originalSource:`() => {
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
}`,...an.parameters?.docs?.source}}},on.parameters={...on.parameters,docs:{...on.parameters?.docs,source:{originalSource:`() => {
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
}`,...on.parameters?.docs?.source}}},sn.parameters={...sn.parameters,docs:{...sn.parameters?.docs,source:{originalSource:`() => {
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
}`,...sn.parameters?.docs?.source}}},cn.parameters={...cn.parameters,docs:{...cn.parameters?.docs,source:{originalSource:`() => {
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
}`,...cn.parameters?.docs?.source}}},ln.parameters={...ln.parameters,docs:{...ln.parameters?.docs,source:{originalSource:`() => {
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
}`,...ln.parameters?.docs?.source}}},un.parameters={...un.parameters,docs:{...un.parameters?.docs,source:{originalSource:`() => {
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
}`,...un.parameters?.docs?.source}}},dn.parameters={...dn.parameters,docs:{...dn.parameters?.docs,source:{originalSource:`() => {
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
}`,...dn.parameters?.docs?.source}}},fn.parameters={...fn.parameters,docs:{...fn.parameters?.docs,source:{originalSource:`() => {
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
}`,...fn.parameters?.docs?.source}}},pn.parameters={...pn.parameters,docs:{...pn.parameters?.docs,source:{originalSource:`() => {
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
}`,...pn.parameters?.docs?.source}}},mn.parameters={...mn.parameters,docs:{...mn.parameters?.docs,source:{originalSource:`() => {
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
}`,...mn.parameters?.docs?.source}}},hn.parameters={...hn.parameters,docs:{...hn.parameters?.docs,source:{originalSource:`() => {
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
}`,...hn.parameters?.docs?.source}}},gn.parameters={...gn.parameters,docs:{...gn.parameters?.docs,source:{originalSource:`() => {
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
}`,...gn.parameters?.docs?.source}}},_n.parameters={..._n.parameters,docs:{..._n.parameters?.docs,source:{originalSource:`() => {
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
}`,..._n.parameters?.docs?.source}}},vn.parameters={...vn.parameters,docs:{...vn.parameters?.docs,source:{originalSource:`() => {
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
}`,...vn.parameters?.docs?.source}}},yn.parameters={...yn.parameters,docs:{...yn.parameters?.docs,source:{originalSource:`() => {
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
}`,...yn.parameters?.docs?.source}}},bn.parameters={...bn.parameters,docs:{...bn.parameters?.docs,source:{originalSource:`() => {
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
}`,...bn.parameters?.docs?.source}}}})))()}Sn();export{rn as Align,un as Autoplay,Qt as Basic,en as ColorScheme,yn as CustomComponent,bn as CustomControl,tn as DefaultIndex,dn as Delay,mn as DisabledDraggable,hn as DisabledIncludeGapInSize,pn as DisabledLoop,fn as DisabledStopMouseEnterAutoplay,ln as DragFree,on as Duration,an as Gap,_n as Methods,nn as Orientation,gn as ScrollProgress,$t as Size,sn as SlideSize,cn as SlidesToScroll,vn as Thumbnails,xn as __namedExportsOrder,Zt as default};