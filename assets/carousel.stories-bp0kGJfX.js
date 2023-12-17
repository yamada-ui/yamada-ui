import{j as r,a as F,F as pe}from"./jsx-runtime-TtYKBvr-.js";import{I as ge,f as In,r as lr,b as dr}from"./fontawesome-icon-ZfuIL68e.js";import{r as N}from"./index-IybTgENJ.js";import{u as cr}from"./index-dINoAjpC.js";import{u as G}from"./index-ndgh9KrK.js";import{u as Vn}from"./index-yP8_fdVn.js";import{c as Wn,Z as qn,_ as Un,y as rr,h as Ze,I as Pn,p as Kn,J as nr,S as Jn,a1 as Xn,u as ce,a as Ce,q as $n,k as Yn}from"./factory-yYnGGCem.js";import{f as ie}from"./forward-ref-6T0UNPU-.js";import{c as Ln}from"./icon-h0N_MwdT.js";import{I as Zn}from"./icon-button-kA4amgzM.js";import{u as Qn}from"./use-component-style-5-ma296Y.js";import{o as ea}from"./theme-provider-Wsw433nP.js";import{P as ra}from"./progress-mk0G1o5Q.js";import{C as u}from"./center-YUZbzzyF.js";import{C as ve,b as he,a as be,c as ye}from"./card-WokqULsH.js";import{I as we}from"./image-aE8r78Tv.js";import{H as Fe}from"./heading-2VTgucYS.js";import{T as Be}from"./text-Kd5_YHaX.js";import{B as Ee}from"./button-vw3_AT4f.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-i3K_3DZd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-FtaGmSpW.js";import"./index-gWY0u-sb.js";import"./index-JdnEfjmQ.js";import"./number-T9-jc1Pg.js";import"./use-image-Ymqx05na.js";import"./use-ripple-oUvMmrsO.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-ONtTX0Ck.js";import"./loading-JdMW4dxy.js";function na(e,n,t,s,a){return s+(a-s)*((e-n)/(t-n))}function tr(e){return typeof e=="number"}function ar(e){return Object.prototype.toString.call(e)==="[object Object]"}function aa(e){return Array.isArray(e)}function Cr(e){return ar(e)||aa(e)}function O(e){return Math.abs(e)}function sr(e){return e?e/O(e):0}function me(e,n){return O(e-n)}function ta(e,n){if(e===0||n===0||O(e)<=O(n))return 0;var t=me(O(e),O(n));return O(t/e)}function sa(e){var n=Math.pow(10,e);return function(t){return Math.round(t*n)/n}}function Se(e){return le(e).map(Number)}function se(e){return e[er(e)]}function er(e){return Math.max(0,e.length-1)}function le(e){return Object.keys(e)}function zn(e,n){return[e,n].reduce(function(t,s){return le(s).forEach(function(a){var l=t[a],d=s[a],C=ar(l)&&ar(d);t[a]=C?zn(l,d):d}),t},{})}function Nn(e,n){var t=le(e),s=le(n);return t.length!==s.length?!1:t.every(function(a){var l=e[a],d=n[a];return typeof l=="function"?"".concat(l)==="".concat(d):!Cr(l)||!Cr(d)?l===d:Nn(l,d)})}function oa(e,n){var t={start:s,center:a,end:l};function s(){return 0}function a(g){return l(g)/2}function l(g){return n-g}function d(){return n*Number(e)}function C(g){return tr(e)?d():t[e](g)}var f={measure:C};return f}function ua(e){var n=0;function t(d,C){return function(){d===!!n&&C()}}function s(){n=window.requestAnimationFrame(e)}function a(){window.cancelAnimationFrame(n),n=0}var l={proceed:t(!0,s),start:t(!1,s),stop:t(!0,a)};return l}function ia(e,n){var t=e==="y"?"y":"x",s=e==="y"?"x":"y",a=C(),l=f();function d(c){var i=c.width,p=c.height;return t==="x"?i:p}function C(){return t==="y"?"top":n==="rtl"?"right":"left"}function f(){return t==="y"?"bottom":n==="rtl"?"left":"right"}var g={scroll:t,cross:s,startEdge:a,endEdge:l,measureSize:d};return g}function fe(e,n){var t=O(e-n);function s(g){return g<e}function a(g){return g>n}function l(g){return s(g)||a(g)}function d(g){return l(g)?s(g)?e:n:g}function C(g){return t?g-t*Math.ceil((g-n)/t):g}var f={length:t,max:n,min:e,constrain:d,reachedAny:l,reachedMax:a,reachedMin:s,removeOffset:C};return f}function Tn(e,n,t){var s=fe(0,e),a=s.min,l=s.constrain,d=e+1,C=f(n);function f(v){return t?O((d+v)%d):l(v)}function g(){return C}function c(v){return C=f(v),m}function i(v){return c(g()+v)}function p(){return Tn(e,g(),t)}var m={add:i,clone:p,get:g,set:c,min:a,max:e};return m}function la(e){var n=e==="rtl"?-1:1;function t(a){return a*n}var s={apply:t};return s}function Qe(){var e=[];function n(a,l,d,C){return C===void 0&&(C=!1),a.addEventListener(l,d,C),e.push(function(){return a.removeEventListener(l,d,C)}),s}function t(){return e=e.filter(function(a){return a()}),s}var s={add:n,removeAll:t};return s}function ue(e){var n=e;function t(){return n}function s(i){return n=g(i),c}function a(i){return n+=g(i),c}function l(i){return n-=g(i),c}function d(i){return n*=i,c}function C(i){return n/=i,c}function f(){return n!==0&&C(n),c}function g(i){return tr(i)?i:i.get()}var c={add:a,divide:C,get:t,multiply:d,normalize:f,set:s,subtract:l};return c}function da(e,n,t,s,a,l,d,C,f,g,c,i,p,m,v,A){var b=e.cross,h=["INPUT","SELECT","TEXTAREA"],y=ue(0),w=Qe(),E=Qe(),B=p.measure(20),x={mouse:300,touch:400},_={mouse:500,touch:600},L=v?5:16,M=1,W=0,D=0,J=!1,X=!1,H=!1,j=!1;function R(){var S=t;w.add(S,"touchmove",function(){}).add(S,"touchend",function(){}).add(S,"touchstart",$).add(S,"mousedown",$).add(S,"touchcancel",q).add(S,"contextmenu",q).add(S,"click",oe)}function Y(){var S=j?document:t;E.add(S,"touchmove",Q).add(S,"touchend",q).add(S,"mousemove",Q).add(S,"mouseup",q)}function U(){w.removeAll(),E.removeAll()}function V(S){var z=S.nodeName||"";return h.indexOf(z)>-1}function re(){var S=v?_:x,z=j?"mouse":"touch";return S[z]}function k(S,z){var K=c.clone().add(sr(S)*-1),ne=K.get()===c.min||K.get()===c.max,T=g.byDistance(S,!v).distance;return v||O(S)<B?T:!m&&ne?T*.4:A&&z?T*.5:g.byIndex(K.get(),0).distance}function $(S){if(j=S.type==="mousedown",!(j&&S.button!==0)){var z=me(s.get(),l.get())>=2,K=j||!z,ne=!V(S.target),T=z||j&&ne;J=!0,a.pointerDown(S),y.set(s),s.set(l),f.useBaseMass().useSpeed(80),Y(),W=a.readPoint(S),D=a.readPoint(S,b),i.emit("pointerDown"),K&&(H=!1),T&&S.preventDefault()}}function Q(S){if(!X&&!j){if(!S.cancelable)return q(S);var z=a.readPoint(S),K=a.readPoint(S,b),ne=me(z,W),T=me(K,D);if(X=ne>T,!X&&!H)return q(S)}var ae=a.pointerMove(S);!H&&ae&&(H=!0),d.start(),s.add(n.apply(ae)),S.preventDefault()}function q(S){var z=g.byDistance(0,!1),K=z.index!==c.get(),ne=a.pointerUp(S)*re(),T=k(n.apply(ne),K),ae=ta(ne,T),jn=me(s.get(),y.get())>=.5,ir=K&&ae>.75,Rn=O(ne)<B,Gn=ir?10:L,Hn=ir?M+2.5*ae:M;jn&&!j&&(H=!0),X=!1,J=!1,E.removeAll(),f.useSpeed(Rn?9:Gn).useMass(Hn),C.distance(T,!v),j=!1,i.emit("pointerUp")}function oe(S){H&&S.preventDefault()}function ee(){return!H}function Z(){return J}var P={addActivationEvents:R,clickAllowed:ee,pointerDown:Z,removeAllEvents:U};return P}function ca(e){var n=170,t,s;function a(i){return typeof TouchEvent<"u"&&i instanceof TouchEvent}function l(i){return i.timeStamp}function d(i,p){var m=p||e.scroll,v="client".concat(m==="x"?"X":"Y");return(a(i)?i.touches[0]:i)[v]}function C(i){return t=i,s=i,d(i)}function f(i){var p=d(i)-d(s),m=l(i)-l(t)>n;return s=i,m&&(t=i),p}function g(i){if(!t||!s)return 0;var p=d(s)-d(t),m=l(i)-l(t),v=l(i)-l(s)>n,A=p/m,b=m&&!v&&O(A)>.1;return b?A:0}var c={isTouchEvent:a,pointerDown:C,pointerMove:f,pointerUp:g,readPoint:d};return c}function Ca(e){function n(s){return e*(s/100)}var t={measure:n};return t}function ga(e,n,t){var s=sa(2),a=ue(0),l=ue(0),d=ue(0),C=0,f=n,g=t;function c(){a.add(l),e.add(a),l.multiply(0)}function i(E){E.divide(g),l.add(E)}function p(E){d.set(E).subtract(e);var B=na(d.get(),0,100,0,f);return C=sr(d.get()),d.normalize().multiply(B).subtract(a),i(d),w}function m(E){var B=E.get()-e.get(),x=!s(B);return x&&e.set(E),x}function v(){return C}function A(){return h(n)}function b(){return y(t)}function h(E){return f=E,w}function y(E){return g=E,w}var w={direction:v,seek:p,settle:m,update:c,useBaseMass:b,useBaseSpeed:A,useMass:y,useSpeed:h};return w}function fa(e,n,t,s,a){var l=a.measure(10),d=a.measure(50),C=.85,f=!1;function g(){return!(f||!e.reachedAny(t.get())||!e.reachedAny(n.get()))}function c(m){if(g()){var v=e.reachedMin(n.get())?"min":"max",A=O(e[v]-n.get()),b=t.get()-n.get(),h=Math.min(A/d,C);t.subtract(b*h),!m&&O(b)<l&&(t.set(e.constrain(t.get())),s.useSpeed(10).useMass(3))}}function i(m){f=!m}var p={constrain:c,toggleActive:i};return p}function pa(e,n,t,s){var a=fe(-n+e,t[0]),l=t.map(a.constrain),d=f();function C(){var c=l[0],i=se(l),p=l.lastIndexOf(c),m=l.indexOf(i)+1;return fe(p,m)}function f(){if(n<=e)return[a.max];if(s==="keepSnaps")return l;var c=C(),i=c.min,p=c.max;return l.slice(i,p)}var g={snapsContained:d};return g}function ma(e,n,t){var s=a();function a(){var d=n[0],C=se(n),f=t?d-e:C,g=d;return fe(f,g)}var l={limit:s};return l}function Sa(e,n,t,s){var a=.1,l=n.min+a,d=n.max+a,C=fe(l,d),f=C.reachedMin,g=C.reachedMax;function c(m){return m===1?g(t.get()):m===-1?f(t.get()):!1}function i(m){if(c(m)){var v=e*(m*-1);s.forEach(function(A){return A.add(v)})}}var p={loop:i};return p}function va(e){var n=e.max,t=e.length;function s(l){var d=l-n;return d/-t}var a={get:s};return a}function ha(e,n,t,s,a,l,d){var C=e.startEdge,f=e.endEdge,g=l.groupSlides,c=m().map(n.measure),i=v(),p=A();function m(){return g(s).map(function(h){return se(h)[f]-h[0][C]}).map(O)}function v(){return s.map(function(h){return t[C]-h[C]}).map(function(h){return-O(h)})}function A(){var h=0,y=se(i)-se(a);return g(i).map(function(w){return w[0]}).map(function(w,E,B){var x=!E,_=E===er(B);return d&&x?h:d&&_?y:w+c[E]})}var b={snaps:i,snapsAligned:p};return b}function ba(e,n,t,s,a){var l=s.reachedAny,d=s.removeOffset,C=s.constrain;function f(v){return v.concat().sort(function(A,b){return O(A)-O(b)})[0]}function g(v){var A=e?d(v):C(v),b=n.map(function(y){return y-A}).map(function(y){return c(y,0)}).map(function(y,w){return{diff:y,index:w}}).sort(function(y,w){return O(y.diff)-O(w.diff)}),h=b[0].index;return{index:h,distance:A}}function c(v,A){var b=[v,v+t,v-t];if(!e)return b[0];if(!A)return f(b);var h=b.filter(function(y){return sr(y)===A});return f(h)}function i(v,A){var b=n[v]-a.get(),h=c(b,A);return{index:v,distance:h}}function p(v,A){var b=a.get()+v,h=g(b),y=h.index,w=h.distance,E=!e&&l(b);if(!A||E)return{index:y,distance:v};var B=n[y]-w,x=v+c(B,0);return{index:y,distance:x}}var m={byDistance:p,byIndex:i,shortcut:c};return m}function ya(e,n,t,s,a,l){function d(c){var i=c.distance,p=c.index!==n.get();i&&(e.start(),a.add(i)),p&&(t.set(n.get()),n.set(c.index),l.emit("select"))}function C(c,i){var p=s.byDistance(c,i);d(p)}function f(c,i){var p=n.clone().set(c),m=s.byIndex(p.get(),i);d(m)}var g={distance:C,index:f};return g}function Mn(e,n,t){var s=e.scroll==="x"?d:C,a=t.style,l=!1;function d(p){return"translate3d(".concat(p,"px,0px,0px)")}function C(p){return"translate3d(0px,".concat(p,"px,0px)")}function f(p){l||(a.transform=s(n.apply(p.get())))}function g(p){l=!p}function c(){l||(a.transform="",t.getAttribute("style")||t.removeAttribute("style"))}var i={clear:c,to:f,toggleActive:g};return i}function wa(e,n,t,s,a,l,d,C,f){var g=Se(a),c=Se(a).reverse(),i=A().concat(b());function p(B,x){return B.reduce(function(_,L){return _-a[L]},x)}function m(B,x){return B.reduce(function(_,L){var M=p(_,x);return M>0?_.concat([L]):_},[])}function v(B,x){var _=x==="start",L=_?-s:s,M=d.findSlideBounds([L]);return B.map(function(W){var D=_?0:-s,J=_?s:0,X=M.filter(function(V){return V.index===W})[0],H=X[_?"end":"start"],j=ue(-1),R=ue(-1),Y=Mn(e,n,f[W]),U=function(){return j.set(C.get()>H?D:J)};return{index:W,location:R,translate:Y,target:U}})}function A(){var B=l[0]-1,x=m(c,B);return v(x,"end")}function b(){var B=t-l[0]-1,x=m(g,B);return v(x,"start")}function h(){return i.every(function(B){var x=B.index,_=g.filter(function(L){return L!==x});return p(_,t)<=.1})}function y(){i.forEach(function(B){var x=B.target,_=B.translate,L=B.location,M=x();M.get()!==L.get()&&(M.get()===0?_.clear():_.to(M),L.set(M))})}function w(){i.forEach(function(B){return B.translate.clear()})}var E={canLoop:h,clear:w,loop:y,loopPoints:i};return E}function Fa(e,n,t,s,a,l,d){var C=a.removeOffset,f=a.constrain,g=.5,c=l?[0,n,-n]:[0],i=m(c,d);function p(b){var h=b||0;return t.map(function(y){var w=fe(g,y-g);return w.constrain(y*h)})}function m(b,h){var y=b||c,w=p(h);return y.reduce(function(E,B){var x=s.map(function(_,L){return{start:_-t[L]+w[L]+B,end:_+e-w[L]+B,index:L}});return E.concat(x)},[])}function v(b,h){var y=l?C(b):f(b),w=h||i;return w.reduce(function(E,B){var x=B.index,_=B.start,L=B.end,M=E.indexOf(x)!==-1,W=_<y&&L>y;return!M&&W?E.concat([x]):E},[])}var A={check:v,findSlideBounds:m};return A}function Ba(e,n,t,s,a){var l=e.measureSize,d=e.startEdge,C=e.endEdge,f=p(),g=m(),c=t.map(l),i=v();function p(){if(!a)return 0;var b=t[0];return O(n[d]-b[d])}function m(){if(!a)return 0;var b=window.getComputedStyle(se(s));return parseFloat(b.getPropertyValue("margin-".concat(C)))}function v(){return t.map(function(b,h,y){var w=!h,E=h===er(y);return w?c[h]+f:E?c[h]+g:y[h+1][d]-b[d]}).map(O)}var A={slideSizes:c,slideSizesWithGaps:i};return A}function Ea(e,n,t){var s=tr(t);function a(f,g){return Se(f).filter(function(c){return c%g===0}).map(function(c){return f.slice(c,c+g)})}function l(f){return Se(f).reduce(function(g,c){var i=n.slice(se(g),c+1),p=i.reduce(function(m,v){return m+v},0);return!c||p>e?g.concat(c):g},[]).map(function(g,c,i){return f.slice(g,i[c+1])})}function d(f){return s?a(f,t):l(f)}var C={groupSlides:d};return C}function Aa(e,n,t,s,a){var l=s.align,d=s.axis,C=s.direction,f=s.startIndex,g=s.inViewThreshold,c=s.loop,i=s.speed,p=s.dragFree,m=s.slidesToScroll,v=s.skipSnaps,A=s.containScroll,b=n.getBoundingClientRect(),h=t.map(function(ae){return ae.getBoundingClientRect()}),y=la(C),w=ia(d,C),E=w.measureSize(b),B=Ca(E),x=oa(l,E),_=!c&&A!=="",L=c||A!=="",M=Ba(w,b,h,t,L),W=M.slideSizes,D=M.slideSizesWithGaps,J=Ea(E,D,m),X=ha(w,x,b,h,D,J,_),H=X.snaps,j=X.snapsAligned,R=-se(H)+se(D),Y=pa(E,R,j,A).snapsContained,U=_?Y:j,V=ma(R,U,c).limit,re=Tn(er(U),f,c),k=re.clone(),$=Se(t),Q=function(){c||T.scrollBounds.constrain(T.dragHandler.pointerDown()),T.scrollBody.seek(Z).update();var ae=T.scrollBody.settle(Z);ae&&!T.dragHandler.pointerDown()&&(T.animation.stop(),a.emit("settle")),ae||a.emit("scroll"),c&&(T.scrollLooper.loop(T.scrollBody.direction()),T.slideLooper.loop()),T.translate.to(ee),T.animation.proceed()},q=ua(Q),oe=U[re.get()],ee=ue(oe),Z=ue(oe),P=ga(ee,i,1),S=ba(c,U,R,V,Z),z=ya(q,re,k,S,Z,a),K=Fa(E,R,W,H,V,c,g),ne=da(w,y,e,Z,ca(w),ee,q,z,P,S,re,a,B,c,p,v),T={containerRect:b,slideRects:h,animation:q,axis:w,direction:y,dragHandler:ne,eventStore:Qe(),percentOfView:B,index:re,indexPrevious:k,limit:V,location:ee,options:s,scrollBody:P,scrollBounds:fa(V,ee,Z,P,B),scrollLooper:Sa(R,V,ee,[ee,Z]),scrollProgress:va(V),scrollSnaps:U,scrollTarget:S,scrollTo:z,slideLooper:wa(w,y,E,R,D,U,K,ee,t),slidesToScroll:J,slidesInView:K,slideIndexes:$,target:Z,translate:Mn(w,y,n)};return T}function xa(){var e={};function n(d){return e[d]||[]}function t(d){return n(d).forEach(function(C){return C(d)}),l}function s(d,C){return e[d]=n(d).concat([C]),l}function a(d,C){return e[d]=n(d).filter(function(f){return f!==C}),l}var l={emit:t,off:a,on:s};return l}var Da={align:"center",axis:"x",containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function or(){function e(a,l){return zn(a,l||{})}function n(a,l){var d=JSON.stringify(le(a.breakpoints||{})),C=JSON.stringify(le(l.breakpoints||{}));return d!==C?!1:Nn(a,l)}function t(a){var l=a.breakpoints||{},d=le(l).filter(function(C){return window.matchMedia(C).matches}).map(function(C){return l[C]}).reduce(function(C,f){return e(C,f)},{});return e(a,d)}var s={merge:e,areEqual:n,atMedia:t};return s}function _a(){var e=or(),n=e.atMedia,t=e.areEqual,s,a=[];function l(){return a.some(function(c){return c()})}function d(c){var i=n(c.options);return function(){return!t(i,n(c.options))}}function C(c,i){return a=c.map(d),s=c.filter(function(p){return n(p.options).active}),s.forEach(function(p){return p.init(i)}),c.reduce(function(p,m){var v;return Object.assign(p,(v={},v[m.name]=m,v))},{})}function f(){s=s.filter(function(c){return c.destroy()})}var g={init:C,destroy:f,haveChanged:l};return g}function de(e,n,t){var s=Qe(),a=or(),l=_a(),d=xa(),C=d.on,f=d.off,g=x,c=!1,i,p=a.merge(Da,de.globalOptions),m=a.merge(p),v=[],A,b=0,h,y,w;function E(){var P="container"in e&&e.container,S="slides"in e&&e.slides;h="root"in e?e.root:e,y=P||h.children[0],w=S||[].slice.call(y.children)}function B(P,S){if(!c){if(E(),p=a.merge(p,P),m=a.atMedia(p),i=Aa(h,y,w,m,d),b=i.axis.measureSize(h.getBoundingClientRect()),!m.active)return _();if(i.translate.to(i.location),v=S||v,A=l.init(v,Z),m.loop){if(!i.slideLooper.canLoop())return _(),B({loop:!1},S);i.slideLooper.loop()}m.draggable&&y.offsetParent&&w.length&&i.dragHandler.addActivationEvents()}}function x(P,S){var z=V();_(),B(a.merge({startIndex:z},P),S),d.emit("reInit")}function _(){i.dragHandler.removeAllEvents(),i.animation.stop(),i.eventStore.removeAll(),i.translate.clear(),i.slideLooper.clear(),l.destroy()}function L(){c||(c=!0,s.removeAll(),_(),d.emit("destroy"))}function M(){var P=a.atMedia(p),S=!a.areEqual(P,m),z=i.axis.measureSize(h.getBoundingClientRect()),K=b!==z,ne=l.haveChanged();(K||S||ne)&&x(),d.emit("resize")}function W(P){var S=i[P?"target":"location"].get(),z=m.loop?"removeOffset":"constrain";return i.slidesInView.check(i.limit[z](S))}function D(P){var S=W(P);return i.slideIndexes.filter(function(z){return S.indexOf(z)===-1})}function J(P,S,z){!m.active||c||(i.scrollBody.useBaseMass().useSpeed(S?100:m.speed),i.scrollTo.index(P,z||0))}function X(P){var S=i.index.clone().add(1);J(S.get(),P===!0,-1)}function H(P){var S=i.index.clone().add(-1);J(S.get(),P===!0,1)}function j(){var P=i.index.clone().add(1);return P.get()!==V()}function R(){var P=i.index.clone().add(-1);return P.get()!==V()}function Y(){return i.scrollSnaps.map(i.scrollProgress.get)}function U(){return i.scrollProgress.get(i.location.get())}function V(){return i.index.get()}function re(){return i.indexPrevious.get()}function k(){return i.dragHandler.clickAllowed()}function $(){return A}function Q(){return i}function q(){return h}function oe(){return y}function ee(){return w}var Z={canScrollNext:j,canScrollPrev:R,clickAllowed:k,containerNode:oe,internalEngine:Q,destroy:L,off:f,on:C,plugins:$,previousScrollSnap:re,reInit:g,rootNode:q,scrollNext:X,scrollPrev:H,scrollProgress:U,scrollSnapList:Y,scrollTo:J,selectedScrollSnap:V,slideNodes:ee,slidesInView:W,slidesNotInView:D};return B(n,t),s.add(window,"resize",M),setTimeout(function(){return d.emit("init")},0),Z}de.globalOptions=void 0;de.optionsHandler=or;function Ia(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function gr(e){return e.concat().sort(function(n,t){return n.name>t.name?1:-1}).map(function(n){return n.options})}function Pa(e,n){if(e.length!==n.length)return!1;var t=de.optionsHandler().areEqual,s=gr(e),a=gr(n);return s.every(function(l,d){var C=a[d];return t(l,C)})}function ur(e,n){e===void 0&&(e={}),n===void 0&&(n=[]);var t=N.useRef(de.optionsHandler()),s=N.useRef(e),a=N.useRef(n),l=N.useState(),d=l[0],C=l[1],f=N.useState(),g=f[0],c=f[1],i=N.useCallback(function(){d&&d.reInit(s.current,a.current)},[d]);return N.useEffect(function(){if(Ia()&&g){de.globalOptions=ur.globalOptions;var p=de(g,s.current,a.current);return C(p),function(){return p.destroy()}}else C(void 0)},[g,C]),N.useEffect(function(){t.current.areEqual(s.current,e)||(s.current=e,i())},[e,i]),N.useEffect(function(){Pa(a.current,n)||(a.current=n,i())},[n,i]),[c,d]}ur.globalOptions=void 0;const[La,te]=Wn({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),za=({index:e,defaultIndex:n=0,onChange:t,align:s="center",orientation:a="horizontal",autoplay:l=!1,stopMouseEnterAutoplay:d=!0,loop:C=!0,speed:f=10,delay:g=4e3,gap:c="md",slidesToScroll:i=1,draggable:p=!0,dragFree:m=!1,inViewThreshold:v=0,skipSnaps:A=!1,containScroll:b="",slideSize:h="100%",includeGapInSize:y=!0,onScrollProgress:w,children:E,...B})=>{const x=qn(B,Un),[_,L]=Vn({value:e,defaultValue:n,onChange:t}),M=a==="vertical",[W,D]=ur({axis:M?"y":"x",startIndex:n,loop:C,align:s,slidesToScroll:i,draggable:p,dragFree:m,speed:f,inViewThreshold:v,skipSnaps:A,containScroll:b}),[J,X]=N.useState([]),[H,j]=N.useState(!1),R=N.useRef(void 0),Y=N.useCallback(()=>{if(!D)return;const k=Math.round(Math.max(0,Math.min(1,D.scrollProgress()))*100);w==null||w(k)},[D,w]),U=N.useCallback(()=>{if(!D)return;const k=D.selectedScrollSnap();L(k)},[D,L]);N.useEffect(()=>{const k=H&&d,$=!(D!=null&&D.canScrollNext());return D&&l&&!k&&!$?R.current=setInterval(()=>{D.scrollNext()},g):(R.current&&clearInterval(R.current),R.current=void 0),()=>{R.current&&clearInterval(R.current)}},[l,g,d,D,H,C,_]),rr(()=>{if(!D)return;D.reInit();const $=D.scrollSnapList().map((Q,q)=>q);X($)},[N.Children.toArray(E).length,s,a,C,f,c,i,p,m,v,A,b,h,y]),rr(()=>{if(!D)return;const $=D.scrollSnapList().map((Q,q)=>q);X($)},[D]),rr(()=>{if(D)return D.on("select",U),D.on("scroll",Y),Y(),()=>{D.off("select",U),D.off("scroll",Y)}},[D,Y]);const V=N.useCallback((k={},$=null)=>({...x[0],...k,ref:$,onMouseEnter:Ze(k.onMouseEnter,()=>{j(!0)}),onMouseLeave:Ze(k.onMouseLeave,()=>{j(!1)})}),[x]),re=N.useCallback((k={})=>({...x[1],...k,ref:W}),[x,W]);return{carousel:D,children:E,indexes:J,selectedIndex:_,orientation:a,slideSize:h,gap:c,slidesToScroll:i,includeGapInSize:y,getContainerProps:V,getSlidesProps:re}},Na=({index:e})=>{const{selectedIndex:n,slidesToScroll:t}=te();e=Math.floor((e??0)/(t??1));const s=e===n;return{getSlideProps:N.useCallback((l={})=>({...l,role:"carousel-slide","data-index":e,"data-selected":Pn(s)}),[s,e])}},kn=({operation:e,...n})=>{const{carousel:t}=te(),s=e==="prev",a=n.disabled??n.isDisabled??(s?!(t!=null&&t.canScrollPrev()):!(t!=null&&t.canScrollNext())),l=N.useCallback(()=>{t&&(s?t.scrollPrev():t.scrollNext())},[t,s]);return{getControlProps:N.useCallback((C={},f=null)=>({...C,ref:f,disabled:a,role:"carousel-control",onClick:Ze(C.onClick,l)}),[a,l])}},Ta=()=>{const{selectedIndex:e,carousel:n,indexes:t}=te(),s=N.useCallback((l,d)=>{n&&(l.stopPropagation(),n.scrollTo(d))},[n]),a=N.useCallback(({index:l,...d}={})=>({...d,key:l,role:"carousel-indicator","data-index":l,"data-selected":Pn(l===e),onClick:Ze(d.onClick,f=>s(f,l))}),[s,e]);return{indexes:t,getIndicatorProps:a}},I=ie(({h:e,height:n,minH:t,minHeight:s,...a},l)=>{const d=G(a.orientation),C=G(a.align),f=G(a.autoplay),g=G(a.stopMouseEnterAutoplay),c=G(a.loop),i=G(a.speed),p=G(a.delay),m=G(a.slidesToScroll),v=G(a.draggable),A=G(a.dragFree),b=G(a.inViewThreshold),h=G(a.skipSnaps),y=G(a.containScroll),w=G(a.includeGapInSize),E=cr("spaces",G(a.gap))??G(a.gap),B=cr("sizes",G(a.slideSize))??G(a.slideSize),[x,_]=Qn("Carousel",{...a,orientation:d,align:C,autoplay:f,stopMouseEnterAutoplay:g,loop:c,speed:i,delay:p,slidesToScroll:m,draggable:v,dragFree:A,inViewThreshold:b,skipSnaps:h,containScroll:y,includeGapInSize:w,gap:E,slideSize:B}),{className:L,innerProps:M,withControls:W=!0,controlProps:D,controlPrevProps:J,controlNextProps:X,withIndicators:H=!0,indicatorsProps:j,...R}=ea(_),Y=G(W),U=G(H),{getContainerProps:V,getSlidesProps:re,children:k,...$}=za({...R}),Q=Kn(k),[q]=nr(Q,Xe),[oe]=nr(Q,$e),[ee]=nr(Q,Ye),Z=Jn(Q,o),P=Xn(Q,Xe,$e,Ye,o),S=Z.map((z,K)=>N.cloneElement(z,{index:K}));return e??(e=n),t??(t=s),r(La,{value:{styles:x,...$},children:F(ce.div,{className:Ce("ui-carousel",L),__css:{position:"relative",h:"fit-content",...x.container},...V({},l),children:[q??(Y?r(Xe,{...D,...J}):null),oe??(Y?r($e,{...D,...X}):null),r(Ma,{...re({...$n({h:e,minH:t}),...M}),children:S}),ee??(U?r(Ye,{...j}):null),P]})})}),Ma=ie(({...e},n)=>{const t={w:"100%",h:"fit-content",overflow:"hidden"};return r(ce.div,{ref:n,className:"ui-carousel__sliders",__css:t,children:r(ka,{...e})})}),ka=({...e})=>{const{orientation:n,includeGapInSize:t,gap:s,styles:a}=te(),l={display:"flex",flexDirection:n==="vertical"?"column":"row",...a.inner,...t?{[n==="vertical"?"mb":"mr"]:`-${s}`}:{}};return r(ce.div,{className:"ui-carousel__sliders__inner",__css:l,...e})},o=ie(({className:e,size:n,...t},s)=>{const{slideSize:a,includeGapInSize:l,orientation:d,gap:C}=te(),{getSlideProps:f}=Na(t);n??(n=a);const g={position:"relative",flex:`0 0 ${n}`,...l?{[d==="vertical"?"pb":"pr"]:C}:{[d==="vertical"?"mb":"mr"]:C}};return r(ce.div,{className:Ce("ui-carousel__slide",e),__css:g,...f({}),children:r(Oa,{ref:s,...t})})}),Oa=ie(({...e},n)=>r(ce.div,{ref:n,className:"ui-carousel__slide__inner",w:"100%",h:"100%",...e})),Xe=ie(({className:e,...n},t)=>{const{orientation:s}=te(),{getControlProps:a}=kn({operation:"prev"});return r(On,{operation:"prev",className:Ce("ui-carousel__control--prev",e),icon:r(Ln,{__css:{fontSize:"1.5em",transform:s==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),...a(n,t)})}),$e=ie(({className:e,...n},t)=>{const{orientation:s}=te(),{getControlProps:a}=kn({operation:"next"});return r(On,{operation:"next",className:Ce("ui-carousel__control--next",e),icon:r(Ln,{__css:{fontSize:"1.5em",transform:s==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),...a(n,t)})}),On=ie(({className:e,operation:n,...t},s)=>{const{styles:a}=te(),l=Yn("whiteAlpha","blackAlpha"),d={position:"absolute",zIndex:"kurillin",...a.control,...a[n]};return r(Zn,{ref:s,className:Ce("ui-carousel__control",e),colorScheme:l,isRounded:!0,__css:d,...t})}),Ye=ie(({className:e,component:n,...t},s)=>{const{selectedIndex:a,orientation:l,styles:d}=te(),{indexes:C,getIndicatorProps:f}=Ta(),g={position:"absolute",zIndex:"kurillin",display:"flex",justifyContent:"center",...d.indicators,...l==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return r(ce.div,{ref:s,className:Ce("ui-carousel__indicators",e),__css:g,...t,children:C.map(c=>{const i=c===a;if(typeof n=="function"){const p=n({index:c,isSelected:i});if(!p)return null;const m=f({...p.props,index:c});return N.cloneElement(p,m)}else{const{key:p,...m}=f({index:c});return r(ja,{...m},p)}})})}),ja=({className:e,...n})=>{const{styles:t}=te(),s={...t.indicator};return r(ce.button,{type:"button",tabIndex:-1,className:Ce("ui-carousel__indicators__indicator",e),__css:s,...n})},ht={title:"Components / Data Display / Carousel",component:I},Ae=()=>F(I,{children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),xe=()=>F(pe,{children:[F(I,{size:"sm",children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),F(I,{size:"md",children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),F(I,{size:"lg",children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),F(I,{size:"xl",children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]})]}),De=()=>F(pe,{children:[F(I,{orientation:"horizontal",children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),F(I,{orientation:"vertical",children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]})]}),_e=()=>F(I,{defaultIndex:1,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),Ie=()=>F(I,{gap:0,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),Pe=()=>F(I,{speed:50,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),Le=()=>F(I,{slideSize:"50%",children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",size:"100%",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),ze=()=>F(pe,{children:[F(I,{slideSize:"50%",align:"center",children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),F(I,{slideSize:"50%",align:"start",children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),F(I,{slideSize:"50%",align:"end",children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]})]}),Ne=()=>F(I,{slideSize:"33.3%",slidesToScroll:3,loop:!1,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"}),r(o,{as:u,bg:"primary",children:"5"}),r(o,{as:u,bg:"secondary",children:"6"}),r(o,{as:u,bg:"danger",children:"7"}),r(o,{as:u,bg:"primary",children:"8"}),r(o,{as:u,bg:"secondary",children:"9"})]}),Te=()=>F(I,{slideSize:"50%",align:"start",slidesToScroll:2,h:"auto",controlProps:{colorScheme:"whiteAlpha",color:"white"},children:[F(o,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md"})}),F(be,{children:[r(Fe,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Be,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(Ee,{colorScheme:"primary",children:"Wikipadia"})})]}),F(o,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md"})}),F(be,{children:[r(Fe,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Be,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(Ee,{colorScheme:"primary",children:"Wikipadia"})})]}),F(o,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md"})}),F(be,{children:[r(Fe,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Be,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(Ee,{colorScheme:"primary",children:"Wikipadia"})})]}),F(o,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md"})}),F(be,{children:[r(Fe,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Be,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(Ee,{colorScheme:"primary",children:"Wikipadia"})})]})]}),Me=()=>F(I,{autoplay:!0,loop:!1,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),ke=()=>F(I,{autoplay:!0,delay:1e3,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),Oe=()=>F(I,{dragFree:!0,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),je=()=>{const[e,n]=N.useState(0);return F(pe,{children:[F(I,{loop:!1,dragFree:!0,onScrollProgress:n,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),r(ra,{value:e,colorScheme:"gray"})]})},Re=()=>F(I,{slideSize:"50%",includeGapInSize:!1,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),Ge=()=>F(I,{loop:!1,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),He=()=>F(I,{draggable:!1,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),Ve=()=>F(I,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),We=()=>F(I,{withControls:!1,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),qe=()=>F(I,{withIndicators:!1,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),Ue=()=>{const[e,n]=N.useState(0);return F(I,{draggable:!1,index:e,onChange:n,children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]})},Ke=()=>F(pe,{children:[F(I,{controlProps:{icon:r(ge,{icon:In})},children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),F(I,{controlPrevProps:{icon:r(ge,{icon:lr})},children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),F(I,{controlNextProps:{icon:r(ge,{icon:dr})},children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),F(I,{children:[r(Xe,{icon:r(ge,{icon:lr})}),r($e,{icon:r(ge,{icon:dr})}),r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]})]}),Je=()=>F(pe,{children:[F(I,{indicatorsProps:{bottom:"8",component:({isSelected:e})=>r(ge,{icon:In,color:e?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer"})},children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"})]}),F(I,{children:[r(o,{as:u,bg:"primary",children:"1"}),r(o,{as:u,bg:"secondary",children:"2"}),r(o,{as:u,bg:"warning",children:"3"}),r(o,{as:u,bg:"danger",children:"4"}),r(Ye,{sx:{"& > *":{w:"4",_selected:{w:"12"},transitionProperty:"width",transitionDuration:"slower"}}})]})]});var fr,pr,mr;Ae.parameters={...Ae.parameters,docs:{...(fr=Ae.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
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
}`,...(hr=(vr=xe.parameters)==null?void 0:vr.docs)==null?void 0:hr.source}}};var br,yr,wr;De.parameters={...De.parameters,docs:{...(br=De.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
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
}`,...(wr=(yr=De.parameters)==null?void 0:yr.docs)==null?void 0:wr.source}}};var Fr,Br,Er;_e.parameters={..._e.parameters,docs:{...(Fr=_e.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
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
}`,...(kr=(Mr=ze.parameters)==null?void 0:Mr.docs)==null?void 0:kr.source}}};var Or,jr,Rr;Ne.parameters={...Ne.parameters,docs:{...(Or=Ne.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
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
}`,...(Rr=(jr=Ne.parameters)==null?void 0:jr.docs)==null?void 0:Rr.source}}};var Gr,Hr,Vr;Te.parameters={...Te.parameters,docs:{...(Gr=Te.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <Carousel slideSize="50%" align="start" slidesToScroll={2} h="auto" controlProps={{
    colorScheme: "whiteAlpha",
    color: "white"
  }}>
      <CarouselSlide as={Card} variant="subtle">
        <CardHeader justifyContent="center">
          <Image src="https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg" w="full" rounded="md" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>

          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipadia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="subtle">
        <CardHeader justifyContent="center">
          <Image src="https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg" w="full" rounded="md" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>

          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipadia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="subtle">
        <CardHeader justifyContent="center">
          <Image src="https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg" w="full" rounded="md" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>

          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipadia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="subtle">
        <CardHeader justifyContent="center">
          <Image src="https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg" w="full" rounded="md" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『ドラゴンボール』（DRAGON BALL）</Heading>

          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipadia</Button>
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
}`,...(Ur=(qr=Me.parameters)==null?void 0:qr.docs)==null?void 0:Ur.source}}};var Kr,Jr,Xr;ke.parameters={...ke.parameters,docs:{...(Kr=ke.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
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
}`,...(Xr=(Jr=ke.parameters)==null?void 0:Jr.docs)==null?void 0:Xr.source}}};var $r,Yr,Zr;Oe.parameters={...Oe.parameters,docs:{...($r=Oe.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
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
}`,...(Zr=(Yr=Oe.parameters)==null?void 0:Yr.docs)==null?void 0:Zr.source}}};var Qr,en,rn;je.parameters={...je.parameters,docs:{...(Qr=je.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
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
}`,...(rn=(en=je.parameters)==null?void 0:en.docs)==null?void 0:rn.source}}};var nn,an,tn;Re.parameters={...Re.parameters,docs:{...(nn=Re.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
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
}`,...(tn=(an=Re.parameters)==null?void 0:an.docs)==null?void 0:tn.source}}};var sn,on,un;Ge.parameters={...Ge.parameters,docs:{...(sn=Ge.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
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
}`,...(un=(on=Ge.parameters)==null?void 0:on.docs)==null?void 0:un.source}}};var ln,dn,cn;He.parameters={...He.parameters,docs:{...(ln=He.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(bn=(hn=qe.parameters)==null?void 0:hn.docs)==null?void 0:bn.source}}};var yn,wn,Fn;Ue.parameters={...Ue.parameters,docs:{...(yn=Ue.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
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
}`,...(Fn=(wn=Ue.parameters)==null?void 0:wn.docs)==null?void 0:Fn.source}}};var Bn,En,An;Ke.parameters={...Ke.parameters,docs:{...(Bn=Ke.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
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
}`,...(_n=(Dn=Je.parameters)==null?void 0:Dn.docs)==null?void 0:_n.source}}};const bt=["basic","withSize","withOrientation","withDefaultIndex","withGap","withSpeed","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","customControl","customControlButton","customIndicators"];export{bt as __namedExportsOrder,Ae as basic,Ue as customControl,Ke as customControlButton,Je as customIndicators,ht as default,We as disabledControlButton,He as disabledDraggable,Re as disabledIncludeGapInSize,qe as disabledIndicators,Ge as disabledLoop,Ve as disabledStopMouseEnterAutoplay,ze as withAlign,Me as withAutoplay,Te as withCard,_e as withDefaultIndex,ke as withDelay,Oe as withDragFree,Ie as withGap,De as withOrientation,je as withScrollProgress,xe as withSize,Le as withSlideSize,Ne as withSlidesToScroll,Pe as withSpeed};
