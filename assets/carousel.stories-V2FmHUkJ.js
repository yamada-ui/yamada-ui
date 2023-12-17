import{j as r,a as w,F as pe}from"./jsx-runtime-TtYKBvr-.js";import{I as ge,f as In,r as lr,b as dr}from"./fontawesome-icon-ZfuIL68e.js";import{r as N}from"./index-IybTgENJ.js";import{u as cr}from"./index-dINoAjpC.js";import{u as R}from"./index-ndgh9KrK.js";import{u as Vn}from"./index-yP8_fdVn.js";import{c as Wn,Z as qn,_ as Un,y as rr,h as Ze,I as Pn,p as Kn,J as nr,S as Jn,a1 as $n,u as ce,a as Ce,q as Xn,k as Yn}from"./factory-yYnGGCem.js";import{f as ie}from"./forward-ref-6T0UNPU-.js";import{c as Ln}from"./icon-h0N_MwdT.js";import{I as Zn}from"./icon-button-kA4amgzM.js";import{u as Qn}from"./use-component-style-5-ma296Y.js";import{o as ea}from"./theme-provider-Wsw433nP.js";import{P as ra}from"./progress-mk0G1o5Q.js";import{C as o}from"./center-YUZbzzyF.js";import{C as ve,b as he,a as be,c as ye}from"./card-awWJqXCs.js";import{I as Fe}from"./image-aE8r78Tv.js";import{H as we}from"./heading-2VTgucYS.js";import{T as Be}from"./text-Kd5_YHaX.js";import{B as Ee}from"./button-vw3_AT4f.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-i3K_3DZd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-FtaGmSpW.js";import"./index-gWY0u-sb.js";import"./index-JdnEfjmQ.js";import"./number-T9-jc1Pg.js";import"./use-image-Ymqx05na.js";import"./use-ripple-oUvMmrsO.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-ONtTX0Ck.js";import"./loading-JdMW4dxy.js";function na(e,n,t,u,a){return u+(a-u)*((e-n)/(t-n))}function tr(e){return typeof e=="number"}function ar(e){return Object.prototype.toString.call(e)==="[object Object]"}function aa(e){return Array.isArray(e)}function Cr(e){return ar(e)||aa(e)}function O(e){return Math.abs(e)}function ur(e){return e?e/O(e):0}function me(e,n){return O(e-n)}function ta(e,n){if(e===0||n===0||O(e)<=O(n))return 0;var t=me(O(e),O(n));return O(t/e)}function ua(e){var n=Math.pow(10,e);return function(t){return Math.round(t*n)/n}}function Se(e){return le(e).map(Number)}function ue(e){return e[er(e)]}function er(e){return Math.max(0,e.length-1)}function le(e){return Object.keys(e)}function zn(e,n){return[e,n].reduce(function(t,u){return le(u).forEach(function(a){var l=t[a],d=u[a],C=ar(l)&&ar(d);t[a]=C?zn(l,d):d}),t},{})}function Nn(e,n){var t=le(e),u=le(n);return t.length!==u.length?!1:t.every(function(a){var l=e[a],d=n[a];return typeof l=="function"?"".concat(l)==="".concat(d):!Cr(l)||!Cr(d)?l===d:Nn(l,d)})}function sa(e,n){var t={start:u,center:a,end:l};function u(){return 0}function a(g){return l(g)/2}function l(g){return n-g}function d(){return n*Number(e)}function C(g){return tr(e)?d():t[e](g)}var f={measure:C};return f}function oa(e){var n=0;function t(d,C){return function(){d===!!n&&C()}}function u(){n=window.requestAnimationFrame(e)}function a(){window.cancelAnimationFrame(n),n=0}var l={proceed:t(!0,u),start:t(!1,u),stop:t(!0,a)};return l}function ia(e,n){var t=e==="y"?"y":"x",u=e==="y"?"x":"y",a=C(),l=f();function d(c){var i=c.width,p=c.height;return t==="x"?i:p}function C(){return t==="y"?"top":n==="rtl"?"right":"left"}function f(){return t==="y"?"bottom":n==="rtl"?"left":"right"}var g={scroll:t,cross:u,startEdge:a,endEdge:l,measureSize:d};return g}function fe(e,n){var t=O(e-n);function u(g){return g<e}function a(g){return g>n}function l(g){return u(g)||a(g)}function d(g){return l(g)?u(g)?e:n:g}function C(g){return t?g-t*Math.ceil((g-n)/t):g}var f={length:t,max:n,min:e,constrain:d,reachedAny:l,reachedMax:a,reachedMin:u,removeOffset:C};return f}function Tn(e,n,t){var u=fe(0,e),a=u.min,l=u.constrain,d=e+1,C=f(n);function f(v){return t?O((d+v)%d):l(v)}function g(){return C}function c(v){return C=f(v),m}function i(v){return c(g()+v)}function p(){return Tn(e,g(),t)}var m={add:i,clone:p,get:g,set:c,min:a,max:e};return m}function la(e){var n=e==="rtl"?-1:1;function t(a){return a*n}var u={apply:t};return u}function Qe(){var e=[];function n(a,l,d,C){return C===void 0&&(C=!1),a.addEventListener(l,d,C),e.push(function(){return a.removeEventListener(l,d,C)}),u}function t(){return e=e.filter(function(a){return a()}),u}var u={add:n,removeAll:t};return u}function oe(e){var n=e;function t(){return n}function u(i){return n=g(i),c}function a(i){return n+=g(i),c}function l(i){return n-=g(i),c}function d(i){return n*=i,c}function C(i){return n/=i,c}function f(){return n!==0&&C(n),c}function g(i){return tr(i)?i:i.get()}var c={add:a,divide:C,get:t,multiply:d,normalize:f,set:u,subtract:l};return c}function da(e,n,t,u,a,l,d,C,f,g,c,i,p,m,v,A){var b=e.cross,h=["INPUT","SELECT","TEXTAREA"],y=oe(0),F=Qe(),E=Qe(),B=p.measure(20),x={mouse:300,touch:400},_={mouse:500,touch:600},L=v?5:16,M=1,W=0,D=0,J=!1,$=!1,H=!1,G=!1;function j(){var S=t;F.add(S,"touchmove",function(){}).add(S,"touchend",function(){}).add(S,"touchstart",X).add(S,"mousedown",X).add(S,"touchcancel",q).add(S,"contextmenu",q).add(S,"click",se)}function Y(){var S=G?document:t;E.add(S,"touchmove",Q).add(S,"touchend",q).add(S,"mousemove",Q).add(S,"mouseup",q)}function U(){F.removeAll(),E.removeAll()}function V(S){var z=S.nodeName||"";return h.indexOf(z)>-1}function re(){var S=v?_:x,z=G?"mouse":"touch";return S[z]}function k(S,z){var K=c.clone().add(ur(S)*-1),ne=K.get()===c.min||K.get()===c.max,T=g.byDistance(S,!v).distance;return v||O(S)<B?T:!m&&ne?T*.4:A&&z?T*.5:g.byIndex(K.get(),0).distance}function X(S){if(G=S.type==="mousedown",!(G&&S.button!==0)){var z=me(u.get(),l.get())>=2,K=G||!z,ne=!V(S.target),T=z||G&&ne;J=!0,a.pointerDown(S),y.set(u),u.set(l),f.useBaseMass().useSpeed(80),Y(),W=a.readPoint(S),D=a.readPoint(S,b),i.emit("pointerDown"),K&&(H=!1),T&&S.preventDefault()}}function Q(S){if(!$&&!G){if(!S.cancelable)return q(S);var z=a.readPoint(S),K=a.readPoint(S,b),ne=me(z,W),T=me(K,D);if($=ne>T,!$&&!H)return q(S)}var ae=a.pointerMove(S);!H&&ae&&(H=!0),d.start(),u.add(n.apply(ae)),S.preventDefault()}function q(S){var z=g.byDistance(0,!1),K=z.index!==c.get(),ne=a.pointerUp(S)*re(),T=k(n.apply(ne),K),ae=ta(ne,T),Gn=me(u.get(),y.get())>=.5,ir=K&&ae>.75,jn=O(ne)<B,Rn=ir?10:L,Hn=ir?M+2.5*ae:M;Gn&&!G&&(H=!0),$=!1,J=!1,E.removeAll(),f.useSpeed(jn?9:Rn).useMass(Hn),C.distance(T,!v),G=!1,i.emit("pointerUp")}function se(S){H&&S.preventDefault()}function ee(){return!H}function Z(){return J}var P={addActivationEvents:j,clickAllowed:ee,pointerDown:Z,removeAllEvents:U};return P}function ca(e){var n=170,t,u;function a(i){return typeof TouchEvent<"u"&&i instanceof TouchEvent}function l(i){return i.timeStamp}function d(i,p){var m=p||e.scroll,v="client".concat(m==="x"?"X":"Y");return(a(i)?i.touches[0]:i)[v]}function C(i){return t=i,u=i,d(i)}function f(i){var p=d(i)-d(u),m=l(i)-l(t)>n;return u=i,m&&(t=i),p}function g(i){if(!t||!u)return 0;var p=d(u)-d(t),m=l(i)-l(t),v=l(i)-l(u)>n,A=p/m,b=m&&!v&&O(A)>.1;return b?A:0}var c={isTouchEvent:a,pointerDown:C,pointerMove:f,pointerUp:g,readPoint:d};return c}function Ca(e){function n(u){return e*(u/100)}var t={measure:n};return t}function ga(e,n,t){var u=ua(2),a=oe(0),l=oe(0),d=oe(0),C=0,f=n,g=t;function c(){a.add(l),e.add(a),l.multiply(0)}function i(E){E.divide(g),l.add(E)}function p(E){d.set(E).subtract(e);var B=na(d.get(),0,100,0,f);return C=ur(d.get()),d.normalize().multiply(B).subtract(a),i(d),F}function m(E){var B=E.get()-e.get(),x=!u(B);return x&&e.set(E),x}function v(){return C}function A(){return h(n)}function b(){return y(t)}function h(E){return f=E,F}function y(E){return g=E,F}var F={direction:v,seek:p,settle:m,update:c,useBaseMass:b,useBaseSpeed:A,useMass:y,useSpeed:h};return F}function fa(e,n,t,u,a){var l=a.measure(10),d=a.measure(50),C=.85,f=!1;function g(){return!(f||!e.reachedAny(t.get())||!e.reachedAny(n.get()))}function c(m){if(g()){var v=e.reachedMin(n.get())?"min":"max",A=O(e[v]-n.get()),b=t.get()-n.get(),h=Math.min(A/d,C);t.subtract(b*h),!m&&O(b)<l&&(t.set(e.constrain(t.get())),u.useSpeed(10).useMass(3))}}function i(m){f=!m}var p={constrain:c,toggleActive:i};return p}function pa(e,n,t,u){var a=fe(-n+e,t[0]),l=t.map(a.constrain),d=f();function C(){var c=l[0],i=ue(l),p=l.lastIndexOf(c),m=l.indexOf(i)+1;return fe(p,m)}function f(){if(n<=e)return[a.max];if(u==="keepSnaps")return l;var c=C(),i=c.min,p=c.max;return l.slice(i,p)}var g={snapsContained:d};return g}function ma(e,n,t){var u=a();function a(){var d=n[0],C=ue(n),f=t?d-e:C,g=d;return fe(f,g)}var l={limit:u};return l}function Sa(e,n,t,u){var a=.1,l=n.min+a,d=n.max+a,C=fe(l,d),f=C.reachedMin,g=C.reachedMax;function c(m){return m===1?g(t.get()):m===-1?f(t.get()):!1}function i(m){if(c(m)){var v=e*(m*-1);u.forEach(function(A){return A.add(v)})}}var p={loop:i};return p}function va(e){var n=e.max,t=e.length;function u(l){var d=l-n;return d/-t}var a={get:u};return a}function ha(e,n,t,u,a,l,d){var C=e.startEdge,f=e.endEdge,g=l.groupSlides,c=m().map(n.measure),i=v(),p=A();function m(){return g(u).map(function(h){return ue(h)[f]-h[0][C]}).map(O)}function v(){return u.map(function(h){return t[C]-h[C]}).map(function(h){return-O(h)})}function A(){var h=0,y=ue(i)-ue(a);return g(i).map(function(F){return F[0]}).map(function(F,E,B){var x=!E,_=E===er(B);return d&&x?h:d&&_?y:F+c[E]})}var b={snaps:i,snapsAligned:p};return b}function ba(e,n,t,u,a){var l=u.reachedAny,d=u.removeOffset,C=u.constrain;function f(v){return v.concat().sort(function(A,b){return O(A)-O(b)})[0]}function g(v){var A=e?d(v):C(v),b=n.map(function(y){return y-A}).map(function(y){return c(y,0)}).map(function(y,F){return{diff:y,index:F}}).sort(function(y,F){return O(y.diff)-O(F.diff)}),h=b[0].index;return{index:h,distance:A}}function c(v,A){var b=[v,v+t,v-t];if(!e)return b[0];if(!A)return f(b);var h=b.filter(function(y){return ur(y)===A});return f(h)}function i(v,A){var b=n[v]-a.get(),h=c(b,A);return{index:v,distance:h}}function p(v,A){var b=a.get()+v,h=g(b),y=h.index,F=h.distance,E=!e&&l(b);if(!A||E)return{index:y,distance:v};var B=n[y]-F,x=v+c(B,0);return{index:y,distance:x}}var m={byDistance:p,byIndex:i,shortcut:c};return m}function ya(e,n,t,u,a,l){function d(c){var i=c.distance,p=c.index!==n.get();i&&(e.start(),a.add(i)),p&&(t.set(n.get()),n.set(c.index),l.emit("select"))}function C(c,i){var p=u.byDistance(c,i);d(p)}function f(c,i){var p=n.clone().set(c),m=u.byIndex(p.get(),i);d(m)}var g={distance:C,index:f};return g}function Mn(e,n,t){var u=e.scroll==="x"?d:C,a=t.style,l=!1;function d(p){return"translate3d(".concat(p,"px,0px,0px)")}function C(p){return"translate3d(0px,".concat(p,"px,0px)")}function f(p){l||(a.transform=u(n.apply(p.get())))}function g(p){l=!p}function c(){l||(a.transform="",t.getAttribute("style")||t.removeAttribute("style"))}var i={clear:c,to:f,toggleActive:g};return i}function Fa(e,n,t,u,a,l,d,C,f){var g=Se(a),c=Se(a).reverse(),i=A().concat(b());function p(B,x){return B.reduce(function(_,L){return _-a[L]},x)}function m(B,x){return B.reduce(function(_,L){var M=p(_,x);return M>0?_.concat([L]):_},[])}function v(B,x){var _=x==="start",L=_?-u:u,M=d.findSlideBounds([L]);return B.map(function(W){var D=_?0:-u,J=_?u:0,$=M.filter(function(V){return V.index===W})[0],H=$[_?"end":"start"],G=oe(-1),j=oe(-1),Y=Mn(e,n,f[W]),U=function(){return G.set(C.get()>H?D:J)};return{index:W,location:j,translate:Y,target:U}})}function A(){var B=l[0]-1,x=m(c,B);return v(x,"end")}function b(){var B=t-l[0]-1,x=m(g,B);return v(x,"start")}function h(){return i.every(function(B){var x=B.index,_=g.filter(function(L){return L!==x});return p(_,t)<=.1})}function y(){i.forEach(function(B){var x=B.target,_=B.translate,L=B.location,M=x();M.get()!==L.get()&&(M.get()===0?_.clear():_.to(M),L.set(M))})}function F(){i.forEach(function(B){return B.translate.clear()})}var E={canLoop:h,clear:F,loop:y,loopPoints:i};return E}function wa(e,n,t,u,a,l,d){var C=a.removeOffset,f=a.constrain,g=.5,c=l?[0,n,-n]:[0],i=m(c,d);function p(b){var h=b||0;return t.map(function(y){var F=fe(g,y-g);return F.constrain(y*h)})}function m(b,h){var y=b||c,F=p(h);return y.reduce(function(E,B){var x=u.map(function(_,L){return{start:_-t[L]+F[L]+B,end:_+e-F[L]+B,index:L}});return E.concat(x)},[])}function v(b,h){var y=l?C(b):f(b),F=h||i;return F.reduce(function(E,B){var x=B.index,_=B.start,L=B.end,M=E.indexOf(x)!==-1,W=_<y&&L>y;return!M&&W?E.concat([x]):E},[])}var A={check:v,findSlideBounds:m};return A}function Ba(e,n,t,u,a){var l=e.measureSize,d=e.startEdge,C=e.endEdge,f=p(),g=m(),c=t.map(l),i=v();function p(){if(!a)return 0;var b=t[0];return O(n[d]-b[d])}function m(){if(!a)return 0;var b=window.getComputedStyle(ue(u));return parseFloat(b.getPropertyValue("margin-".concat(C)))}function v(){return t.map(function(b,h,y){var F=!h,E=h===er(y);return F?c[h]+f:E?c[h]+g:y[h+1][d]-b[d]}).map(O)}var A={slideSizes:c,slideSizesWithGaps:i};return A}function Ea(e,n,t){var u=tr(t);function a(f,g){return Se(f).filter(function(c){return c%g===0}).map(function(c){return f.slice(c,c+g)})}function l(f){return Se(f).reduce(function(g,c){var i=n.slice(ue(g),c+1),p=i.reduce(function(m,v){return m+v},0);return!c||p>e?g.concat(c):g},[]).map(function(g,c,i){return f.slice(g,i[c+1])})}function d(f){return u?a(f,t):l(f)}var C={groupSlides:d};return C}function Aa(e,n,t,u,a){var l=u.align,d=u.axis,C=u.direction,f=u.startIndex,g=u.inViewThreshold,c=u.loop,i=u.speed,p=u.dragFree,m=u.slidesToScroll,v=u.skipSnaps,A=u.containScroll,b=n.getBoundingClientRect(),h=t.map(function(ae){return ae.getBoundingClientRect()}),y=la(C),F=ia(d,C),E=F.measureSize(b),B=Ca(E),x=sa(l,E),_=!c&&A!=="",L=c||A!=="",M=Ba(F,b,h,t,L),W=M.slideSizes,D=M.slideSizesWithGaps,J=Ea(E,D,m),$=ha(F,x,b,h,D,J,_),H=$.snaps,G=$.snapsAligned,j=-ue(H)+ue(D),Y=pa(E,j,G,A).snapsContained,U=_?Y:G,V=ma(j,U,c).limit,re=Tn(er(U),f,c),k=re.clone(),X=Se(t),Q=function(){c||T.scrollBounds.constrain(T.dragHandler.pointerDown()),T.scrollBody.seek(Z).update();var ae=T.scrollBody.settle(Z);ae&&!T.dragHandler.pointerDown()&&(T.animation.stop(),a.emit("settle")),ae||a.emit("scroll"),c&&(T.scrollLooper.loop(T.scrollBody.direction()),T.slideLooper.loop()),T.translate.to(ee),T.animation.proceed()},q=oa(Q),se=U[re.get()],ee=oe(se),Z=oe(se),P=ga(ee,i,1),S=ba(c,U,j,V,Z),z=ya(q,re,k,S,Z,a),K=wa(E,j,W,H,V,c,g),ne=da(F,y,e,Z,ca(F),ee,q,z,P,S,re,a,B,c,p,v),T={containerRect:b,slideRects:h,animation:q,axis:F,direction:y,dragHandler:ne,eventStore:Qe(),percentOfView:B,index:re,indexPrevious:k,limit:V,location:ee,options:u,scrollBody:P,scrollBounds:fa(V,ee,Z,P,B),scrollLooper:Sa(j,V,ee,[ee,Z]),scrollProgress:va(V),scrollSnaps:U,scrollTarget:S,scrollTo:z,slideLooper:Fa(F,y,E,j,D,U,K,ee,t),slidesToScroll:J,slidesInView:K,slideIndexes:X,target:Z,translate:Mn(F,y,n)};return T}function xa(){var e={};function n(d){return e[d]||[]}function t(d){return n(d).forEach(function(C){return C(d)}),l}function u(d,C){return e[d]=n(d).concat([C]),l}function a(d,C){return e[d]=n(d).filter(function(f){return f!==C}),l}var l={emit:t,off:a,on:u};return l}var Da={align:"center",axis:"x",containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function sr(){function e(a,l){return zn(a,l||{})}function n(a,l){var d=JSON.stringify(le(a.breakpoints||{})),C=JSON.stringify(le(l.breakpoints||{}));return d!==C?!1:Nn(a,l)}function t(a){var l=a.breakpoints||{},d=le(l).filter(function(C){return window.matchMedia(C).matches}).map(function(C){return l[C]}).reduce(function(C,f){return e(C,f)},{});return e(a,d)}var u={merge:e,areEqual:n,atMedia:t};return u}function _a(){var e=sr(),n=e.atMedia,t=e.areEqual,u,a=[];function l(){return a.some(function(c){return c()})}function d(c){var i=n(c.options);return function(){return!t(i,n(c.options))}}function C(c,i){return a=c.map(d),u=c.filter(function(p){return n(p.options).active}),u.forEach(function(p){return p.init(i)}),c.reduce(function(p,m){var v;return Object.assign(p,(v={},v[m.name]=m,v))},{})}function f(){u=u.filter(function(c){return c.destroy()})}var g={init:C,destroy:f,haveChanged:l};return g}function de(e,n,t){var u=Qe(),a=sr(),l=_a(),d=xa(),C=d.on,f=d.off,g=x,c=!1,i,p=a.merge(Da,de.globalOptions),m=a.merge(p),v=[],A,b=0,h,y,F;function E(){var P="container"in e&&e.container,S="slides"in e&&e.slides;h="root"in e?e.root:e,y=P||h.children[0],F=S||[].slice.call(y.children)}function B(P,S){if(!c){if(E(),p=a.merge(p,P),m=a.atMedia(p),i=Aa(h,y,F,m,d),b=i.axis.measureSize(h.getBoundingClientRect()),!m.active)return _();if(i.translate.to(i.location),v=S||v,A=l.init(v,Z),m.loop){if(!i.slideLooper.canLoop())return _(),B({loop:!1},S);i.slideLooper.loop()}m.draggable&&y.offsetParent&&F.length&&i.dragHandler.addActivationEvents()}}function x(P,S){var z=V();_(),B(a.merge({startIndex:z},P),S),d.emit("reInit")}function _(){i.dragHandler.removeAllEvents(),i.animation.stop(),i.eventStore.removeAll(),i.translate.clear(),i.slideLooper.clear(),l.destroy()}function L(){c||(c=!0,u.removeAll(),_(),d.emit("destroy"))}function M(){var P=a.atMedia(p),S=!a.areEqual(P,m),z=i.axis.measureSize(h.getBoundingClientRect()),K=b!==z,ne=l.haveChanged();(K||S||ne)&&x(),d.emit("resize")}function W(P){var S=i[P?"target":"location"].get(),z=m.loop?"removeOffset":"constrain";return i.slidesInView.check(i.limit[z](S))}function D(P){var S=W(P);return i.slideIndexes.filter(function(z){return S.indexOf(z)===-1})}function J(P,S,z){!m.active||c||(i.scrollBody.useBaseMass().useSpeed(S?100:m.speed),i.scrollTo.index(P,z||0))}function $(P){var S=i.index.clone().add(1);J(S.get(),P===!0,-1)}function H(P){var S=i.index.clone().add(-1);J(S.get(),P===!0,1)}function G(){var P=i.index.clone().add(1);return P.get()!==V()}function j(){var P=i.index.clone().add(-1);return P.get()!==V()}function Y(){return i.scrollSnaps.map(i.scrollProgress.get)}function U(){return i.scrollProgress.get(i.location.get())}function V(){return i.index.get()}function re(){return i.indexPrevious.get()}function k(){return i.dragHandler.clickAllowed()}function X(){return A}function Q(){return i}function q(){return h}function se(){return y}function ee(){return F}var Z={canScrollNext:G,canScrollPrev:j,clickAllowed:k,containerNode:se,internalEngine:Q,destroy:L,off:f,on:C,plugins:X,previousScrollSnap:re,reInit:g,rootNode:q,scrollNext:$,scrollPrev:H,scrollProgress:U,scrollSnapList:Y,scrollTo:J,selectedScrollSnap:V,slideNodes:ee,slidesInView:W,slidesNotInView:D};return B(n,t),u.add(window,"resize",M),setTimeout(function(){return d.emit("init")},0),Z}de.globalOptions=void 0;de.optionsHandler=sr;function Ia(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function gr(e){return e.concat().sort(function(n,t){return n.name>t.name?1:-1}).map(function(n){return n.options})}function Pa(e,n){if(e.length!==n.length)return!1;var t=de.optionsHandler().areEqual,u=gr(e),a=gr(n);return u.every(function(l,d){var C=a[d];return t(l,C)})}function or(e,n){e===void 0&&(e={}),n===void 0&&(n=[]);var t=N.useRef(de.optionsHandler()),u=N.useRef(e),a=N.useRef(n),l=N.useState(),d=l[0],C=l[1],f=N.useState(),g=f[0],c=f[1],i=N.useCallback(function(){d&&d.reInit(u.current,a.current)},[d]);return N.useEffect(function(){if(Ia()&&g){de.globalOptions=or.globalOptions;var p=de(g,u.current,a.current);return C(p),function(){return p.destroy()}}else C(void 0)},[g,C]),N.useEffect(function(){t.current.areEqual(u.current,e)||(u.current=e,i())},[e,i]),N.useEffect(function(){Pa(a.current,n)||(a.current=n,i())},[n,i]),[c,d]}or.globalOptions=void 0;const[La,te]=Wn({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),za=({index:e,defaultIndex:n=0,onChange:t,align:u="center",orientation:a="horizontal",autoplay:l=!1,stopMouseEnterAutoplay:d=!0,loop:C=!0,speed:f=10,delay:g=4e3,gap:c="md",slidesToScroll:i=1,draggable:p=!0,dragFree:m=!1,inViewThreshold:v=0,skipSnaps:A=!1,containScroll:b="",slideSize:h="100%",includeGapInSize:y=!0,onScrollProgress:F,children:E,...B})=>{const x=qn(B,Un),[_,L]=Vn({value:e,defaultValue:n,onChange:t}),M=a==="vertical",[W,D]=or({axis:M?"y":"x",startIndex:n,loop:C,align:u,slidesToScroll:i,draggable:p,dragFree:m,speed:f,inViewThreshold:v,skipSnaps:A,containScroll:b}),[J,$]=N.useState([]),[H,G]=N.useState(!1),j=N.useRef(void 0),Y=N.useCallback(()=>{if(!D)return;const k=Math.round(Math.max(0,Math.min(1,D.scrollProgress()))*100);F==null||F(k)},[D,F]),U=N.useCallback(()=>{if(!D)return;const k=D.selectedScrollSnap();L(k)},[D,L]);N.useEffect(()=>{const k=H&&d,X=!(D!=null&&D.canScrollNext());return D&&l&&!k&&!X?j.current=setInterval(()=>{D.scrollNext()},g):(j.current&&clearInterval(j.current),j.current=void 0),()=>{j.current&&clearInterval(j.current)}},[l,g,d,D,H,C,_]),rr(()=>{if(!D)return;D.reInit();const X=D.scrollSnapList().map((Q,q)=>q);$(X)},[N.Children.toArray(E).length,u,a,C,f,c,i,p,m,v,A,b,h,y]),rr(()=>{if(!D)return;const X=D.scrollSnapList().map((Q,q)=>q);$(X)},[D]),rr(()=>{if(D)return D.on("select",U),D.on("scroll",Y),Y(),()=>{D.off("select",U),D.off("scroll",Y)}},[D,Y]);const V=N.useCallback((k={},X=null)=>({...x[0],...k,ref:X,onMouseEnter:Ze(k.onMouseEnter,()=>{G(!0)}),onMouseLeave:Ze(k.onMouseLeave,()=>{G(!1)})}),[x]),re=N.useCallback((k={})=>({...x[1],...k,ref:W}),[x,W]);return{carousel:D,children:E,indexes:J,selectedIndex:_,orientation:a,slideSize:h,gap:c,slidesToScroll:i,includeGapInSize:y,getContainerProps:V,getSlidesProps:re}},Na=({index:e})=>{const{selectedIndex:n,slidesToScroll:t}=te();e=Math.floor((e??0)/(t??1));const u=e===n;return{getSlideProps:N.useCallback((l={})=>({...l,"data-index":e,"data-selected":Pn(u)}),[u,e])}},kn=({operation:e,...n})=>{const{carousel:t}=te(),u=e==="prev",a=n.disabled??n.isDisabled??(u?!(t!=null&&t.canScrollPrev()):!(t!=null&&t.canScrollNext())),l=N.useCallback(()=>{t&&(u?t.scrollPrev():t.scrollNext())},[t,u]);return{getControlProps:N.useCallback((C={},f=null)=>({...C,ref:f,disabled:a,onClick:Ze(C.onClick,l)}),[a,l])}},Ta=()=>{const{selectedIndex:e,carousel:n,indexes:t}=te(),u=N.useCallback((l,d)=>{n&&(l.stopPropagation(),n.scrollTo(d))},[n]),a=N.useCallback(({index:l,...d}={})=>{const C=l===e;return{"aria-label":`Go to ${l+1} slide`,...d,key:l,"data-index":l,"data-selected":Pn(C),onClick:Ze(d.onClick,f=>u(f,l))}},[u,e]);return{indexes:t,getIndicatorProps:a}},I=ie(({h:e,height:n,minH:t,minHeight:u,...a},l)=>{const d=R(a.orientation),C=R(a.align),f=R(a.autoplay),g=R(a.stopMouseEnterAutoplay),c=R(a.loop),i=R(a.speed),p=R(a.delay),m=R(a.slidesToScroll),v=R(a.draggable),A=R(a.dragFree),b=R(a.inViewThreshold),h=R(a.skipSnaps),y=R(a.containScroll),F=R(a.includeGapInSize),E=cr("spaces",R(a.gap))??R(a.gap),B=cr("sizes",R(a.slideSize))??R(a.slideSize),[x,_]=Qn("Carousel",{...a,orientation:d,align:C,autoplay:f,stopMouseEnterAutoplay:g,loop:c,speed:i,delay:p,slidesToScroll:m,draggable:v,dragFree:A,inViewThreshold:b,skipSnaps:h,containScroll:y,includeGapInSize:F,gap:E,slideSize:B}),{className:L,innerProps:M,withControls:W=!0,controlProps:D,controlPrevProps:J,controlNextProps:$,withIndicators:H=!0,indicatorsProps:G,...j}=ea(_),Y=R(W),U=R(H),{getContainerProps:V,getSlidesProps:re,children:k,...X}=za({...j}),Q=Kn(k),[q]=nr(Q,$e),[se]=nr(Q,Xe),[ee]=nr(Q,Ye),Z=Jn(Q,s),P=$n(Q,$e,Xe,Ye,s),S=Z.map((z,K)=>N.cloneElement(z,{index:K}));return e??(e=n),t??(t=u),r(La,{value:{styles:x,...X},children:w(ce.div,{className:Ce("ui-carousel",L),__css:{position:"relative",h:"fit-content",...x.container},...V({},l),children:[q??(Y?r($e,{...D,...J}):null),se??(Y?r(Xe,{...D,...$}):null),r(Ma,{...re({...Xn({h:e,minH:t}),...M}),children:S}),ee??(U?r(Ye,{...G}):null),P]})})}),Ma=ie(({...e},n)=>{const t={w:"100%",h:"fit-content",overflow:"hidden"};return r(ce.div,{ref:n,className:"ui-carousel__sliders",__css:t,children:r(ka,{...e})})}),ka=({...e})=>{const{orientation:n,includeGapInSize:t,gap:u,styles:a}=te(),l={display:"flex",flexDirection:n==="vertical"?"column":"row",...a.inner,...t?{[n==="vertical"?"mb":"mr"]:`-${u}`}:{}};return r(ce.div,{className:"ui-carousel__sliders__inner",__css:l,...e})},s=ie(({className:e,size:n,...t},u)=>{const{slideSize:a,includeGapInSize:l,orientation:d,gap:C}=te(),{getSlideProps:f}=Na(t);n??(n=a);const g={position:"relative",flex:`0 0 ${n}`,...l?{[d==="vertical"?"pb":"pr"]:C}:{[d==="vertical"?"mb":"mr"]:C}};return r(ce.div,{className:Ce("ui-carousel__slide",e),__css:g,...f({}),children:r(Oa,{ref:u,...t})})}),Oa=ie(({...e},n)=>r(ce.div,{ref:n,className:"ui-carousel__slide__inner",w:"100%",h:"100%",...e})),$e=ie(({className:e,...n},t)=>{const{orientation:u}=te(),{getControlProps:a}=kn({operation:"prev"});return r(On,{operation:"prev",className:Ce("ui-carousel__control--prev",e),"aria-label":"Go to previous slide",icon:r(Ln,{__css:{fontSize:"1.5em",transform:u==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),...a(n,t)})}),Xe=ie(({className:e,...n},t)=>{const{orientation:u}=te(),{getControlProps:a}=kn({operation:"next"});return r(On,{operation:"next",className:Ce("ui-carousel__control--next",e),"aria-label":"Go to next slide",icon:r(Ln,{__css:{fontSize:"1.5em",transform:u==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),...a(n,t)})}),On=ie(({className:e,operation:n,...t},u)=>{const{styles:a}=te(),l=Yn("whiteAlpha","blackAlpha"),d={position:"absolute",zIndex:"kurillin",...a.control,...a[n]};return r(Zn,{ref:u,className:Ce("ui-carousel__control",e),colorScheme:l,isRounded:!0,__css:d,...t})}),Ye=ie(({className:e,component:n,...t},u)=>{const{selectedIndex:a,orientation:l,styles:d}=te(),{indexes:C,getIndicatorProps:f}=Ta(),g={position:"absolute",zIndex:"kurillin",display:"flex",justifyContent:"center",...d.indicators,...l==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return r(ce.div,{ref:u,className:Ce("ui-carousel__indicators",e),__css:g,...t,children:C.map(c=>{const i=c===a;if(typeof n=="function"){const p=n({index:c,isSelected:i});if(!p)return null;const m=f({...p.props,index:c});return N.cloneElement(p,m)}else{const{key:p,...m}=f({index:c});return r(Ga,{...m},p)}})})}),Ga=({className:e,...n})=>{const{styles:t}=te(),u={...t.indicator};return r(ce.button,{type:"button",tabIndex:-1,className:Ce("ui-carousel__indicators__indicator",e),__css:u,...n})},ht={title:"Components / Data Display / Carousel",component:I},Ae=()=>w(I,{children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),xe=()=>w(pe,{children:[w(I,{size:"sm",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(I,{size:"md",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(I,{size:"lg",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(I,{size:"xl",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]})]}),De=()=>w(pe,{children:[w(I,{orientation:"horizontal",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(I,{orientation:"vertical",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]})]}),_e=()=>w(I,{defaultIndex:1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Ie=()=>w(I,{gap:0,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Pe=()=>w(I,{speed:50,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Le=()=>w(I,{slideSize:"50%",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",size:"100%",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),ze=()=>w(pe,{children:[w(I,{slideSize:"50%",align:"center",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(I,{slideSize:"50%",align:"start",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(I,{slideSize:"50%",align:"end",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]})]}),Ne=()=>w(I,{slideSize:"33.3%",slidesToScroll:3,loop:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"}),r(s,{as:o,bg:"primary",children:"5"}),r(s,{as:o,bg:"secondary",children:"6"}),r(s,{as:o,bg:"danger",children:"7"}),r(s,{as:o,bg:"primary",children:"8"}),r(s,{as:o,bg:"secondary",children:"9"})]}),Te=()=>w(I,{slideSize:"50%",align:"start",slidesToScroll:2,h:"auto",controlProps:{colorScheme:"whiteAlpha",color:"white"},children:[w(s,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(Fe,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),w(be,{children:[r(we,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Be,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(Ee,{colorScheme:"primary",children:"Wikipedia"})})]}),w(s,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(Fe,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),w(be,{children:[r(we,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Be,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(Ee,{colorScheme:"primary",children:"Wikipedia"})})]}),w(s,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(Fe,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),w(be,{children:[r(we,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Be,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(Ee,{colorScheme:"primary",children:"Wikipedia"})})]}),w(s,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(Fe,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),w(be,{children:[r(we,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Be,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(Ee,{colorScheme:"primary",children:"Wikipedia"})})]})]}),Me=()=>w(I,{autoplay:!0,loop:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),ke=()=>w(I,{autoplay:!0,delay:1e3,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Oe=()=>w(I,{dragFree:!0,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Ge=()=>{const[e,n]=N.useState(0);return w(pe,{children:[w(I,{loop:!1,dragFree:!0,onScrollProgress:n,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),r(ra,{value:e,colorScheme:"gray"})]})},je=()=>w(I,{slideSize:"50%",includeGapInSize:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Re=()=>w(I,{loop:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),He=()=>w(I,{draggable:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Ve=()=>w(I,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),We=()=>w(I,{withControls:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),qe=()=>w(I,{withIndicators:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Ue=()=>{const[e,n]=N.useState(0);return w(I,{draggable:!1,index:e,onChange:n,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]})},Ke=()=>w(pe,{children:[w(I,{controlProps:{icon:r(ge,{icon:In})},children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(I,{controlPrevProps:{icon:r(ge,{icon:lr})},children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(I,{controlNextProps:{icon:r(ge,{icon:dr})},children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(I,{children:[r($e,{icon:r(ge,{icon:lr})}),r(Xe,{icon:r(ge,{icon:dr})}),r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]})]}),Je=()=>w(pe,{children:[w(I,{indicatorsProps:{bottom:"8",component:({isSelected:e})=>r(ge,{icon:In,color:e?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer"})},children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(I,{children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"}),r(Ye,{sx:{"& > *":{w:"4",_selected:{w:"12"},transitionProperty:"width",transitionDuration:"slower"}}})]})]});var fr,pr,mr;Ae.parameters={...Ae.parameters,docs:{...(fr=Ae.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
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
}`,...(mr=(pr=Ae.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var Sr,vr,hr;xe.parameters={...xe.parameters,docs:{...(Sr=xe.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
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
}`,...(hr=(vr=xe.parameters)==null?void 0:vr.docs)==null?void 0:hr.source}}};var br,yr,Fr;De.parameters={...De.parameters,docs:{...(br=De.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
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
}`,...(Fr=(yr=De.parameters)==null?void 0:yr.docs)==null?void 0:Fr.source}}};var wr,Br,Er;_e.parameters={..._e.parameters,docs:{...(wr=_e.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
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
}`,...(Er=(Br=_e.parameters)==null?void 0:Br.docs)==null?void 0:Er.source}}};var Ar,xr,Dr;Ie.parameters={...Ie.parameters,docs:{...(Ar=Ie.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
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
}`,...(Dr=(xr=Ie.parameters)==null?void 0:xr.docs)==null?void 0:Dr.source}}};var _r,Ir,Pr;Pe.parameters={...Pe.parameters,docs:{...(_r=Pe.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <Carousel speed={50}>
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
}`,...(Pr=(Ir=Pe.parameters)==null?void 0:Ir.docs)==null?void 0:Pr.source}}};var Lr,zr,Nr;Le.parameters={...Le.parameters,docs:{...(Lr=Le.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
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
}`,...(Nr=(zr=Le.parameters)==null?void 0:zr.docs)==null?void 0:Nr.source}}};var Tr,Mr,kr;ze.parameters={...ze.parameters,docs:{...(Tr=ze.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
}`,...(kr=(Mr=ze.parameters)==null?void 0:Mr.docs)==null?void 0:kr.source}}};var Or,Gr,jr;Ne.parameters={...Ne.parameters,docs:{...(Or=Ne.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
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
}`,...(jr=(Gr=Ne.parameters)==null?void 0:Gr.docs)==null?void 0:jr.source}}};var Rr,Hr,Vr;Te.parameters={...Te.parameters,docs:{...(Rr=Te.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
  return <Carousel slideSize="50%" align="start" slidesToScroll={2} h="auto" controlProps={{
    colorScheme: "whiteAlpha",
    color: "white"
  }}>
      <CarouselSlide as={Card} variant="subtle">
        <CardHeader justifyContent="center">
          <Image src="https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg" w="full" rounded="md" alt="ドラゴンボール" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>

          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="subtle">
        <CardHeader justifyContent="center">
          <Image src="https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg" w="full" rounded="md" alt="ドラゴンボール" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>

          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="subtle">
        <CardHeader justifyContent="center">
          <Image src="https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg" w="full" rounded="md" alt="ドラゴンボール" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>

          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="subtle">
        <CardHeader justifyContent="center">
          <Image src="https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg" w="full" rounded="md" alt="ドラゴンボール" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>

          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>
    </Carousel>;
}`,...(Vr=(Hr=Te.parameters)==null?void 0:Hr.docs)==null?void 0:Vr.source}}};var Wr,qr,Ur;Me.parameters={...Me.parameters,docs:{...(Wr=Me.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
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
}`,...(Ur=(qr=Me.parameters)==null?void 0:qr.docs)==null?void 0:Ur.source}}};var Kr,Jr,$r;ke.parameters={...ke.parameters,docs:{...(Kr=ke.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
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
}`,...($r=(Jr=ke.parameters)==null?void 0:Jr.docs)==null?void 0:$r.source}}};var Xr,Yr,Zr;Oe.parameters={...Oe.parameters,docs:{...(Xr=Oe.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...(Zr=(Yr=Oe.parameters)==null?void 0:Yr.docs)==null?void 0:Zr.source}}};var Qr,en,rn;Ge.parameters={...Ge.parameters,docs:{...(Qr=Ge.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
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
}`,...(rn=(en=Ge.parameters)==null?void 0:en.docs)==null?void 0:rn.source}}};var nn,an,tn;je.parameters={...je.parameters,docs:{...(nn=je.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
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
}`,...(tn=(an=je.parameters)==null?void 0:an.docs)==null?void 0:tn.source}}};var un,sn,on;Re.parameters={...Re.parameters,docs:{...(un=Re.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(on=(sn=Re.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};var ln,dn,cn;He.parameters={...He.parameters,docs:{...(ln=He.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(cn=(dn=He.parameters)==null?void 0:dn.docs)==null?void 0:cn.source}}};var Cn,gn,fn;Ve.parameters={...Ve.parameters,docs:{...(Cn=Ve.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
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
}`,...(fn=(gn=Ve.parameters)==null?void 0:gn.docs)==null?void 0:fn.source}}};var pn,mn,Sn;We.parameters={...We.parameters,docs:{...(pn=We.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(Sn=(mn=We.parameters)==null?void 0:mn.docs)==null?void 0:Sn.source}}};var vn,hn,bn;qe.parameters={...qe.parameters,docs:{...(vn=qe.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
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
}`,...(bn=(hn=qe.parameters)==null?void 0:hn.docs)==null?void 0:bn.source}}};var yn,Fn,wn;Ue.parameters={...Ue.parameters,docs:{...(yn=Ue.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
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
}`,...(wn=(Fn=Ue.parameters)==null?void 0:Fn.docs)==null?void 0:wn.source}}};var Bn,En,An;Ke.parameters={...Ke.parameters,docs:{...(Bn=Ke.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
  return <>
      <Carousel controlProps={{
      icon: <Icon icon={faPoo} />
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
      icon: <Icon icon={faArrowLeft} />
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
      icon: <Icon icon={faArrowRight} />
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
        <CarouselControlPrev icon={<Icon icon={faArrowLeft} />} />
        <CarouselControlNext icon={<Icon icon={faArrowRight} />} />

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
}`,...(An=(En=Ke.parameters)==null?void 0:En.docs)==null?void 0:An.source}}};var xn,Dn,_n;Je.parameters={...Je.parameters,docs:{...(xn=Je.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
  return <>
      <Carousel indicatorsProps={{
      bottom: "8",
      component: ({
        isSelected
      }) => <Icon icon={faPoo} color={isSelected ? "whiteAlpha.700" : "whiteAlpha.400"} cursor="pointer" />
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
}`,...(_n=(Dn=Je.parameters)==null?void 0:Dn.docs)==null?void 0:_n.source}}};const bt=["basic","withSize","withOrientation","withDefaultIndex","withGap","withSpeed","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","customControl","customControlButton","customIndicators"];export{bt as __namedExportsOrder,Ae as basic,Ue as customControl,Ke as customControlButton,Je as customIndicators,ht as default,We as disabledControlButton,He as disabledDraggable,je as disabledIncludeGapInSize,qe as disabledIndicators,Re as disabledLoop,Ve as disabledStopMouseEnterAutoplay,ze as withAlign,Me as withAutoplay,Te as withCard,_e as withDefaultIndex,ke as withDelay,Oe as withDragFree,Ie as withGap,De as withOrientation,Ge as withScrollProgress,xe as withSize,Le as withSlideSize,Ne as withSlidesToScroll,Pe as withSpeed};
