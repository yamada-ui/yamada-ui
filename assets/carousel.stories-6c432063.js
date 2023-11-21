import{a as r,j as x,F as pe}from"./jsx-runtime-b08f8875.js";import{I as fe,f as Ln,x as dr,k as cr}from"./fontawesome-icon-55aa2a9e.js";import{r as T}from"./index-8ee6c85d.js";import{u as ur}from"./index-7636bab8.js";import{u as G}from"./index-a8e328c0.js";import{u as Vn}from"./index-432541ee.js";import{k as Wn,Z as qn,_ as Un,B as rr,t as Ze,v as zn,p as Kn,q as nr,a1 as Jn,Y as Xn,d as ue,e as ge,o as Yn,a as $n}from"./factory-2d442159.js";import{f as le}from"./forward-ref-cf7188bd.js";import{c as Dn}from"./icon-a76117e5.js";import{I as Zn}from"./icon-button-18cc5ccd.js";import{a as Qn}from"./use-component-style-b6002d28.js";import{o as ea}from"./theme-provider-78d359c6.js";import{C as ve,a as he,b as be,c as ye}from"./card-e8f03305.js";import{C as i}from"./center-91109801.js";import{I as we}from"./image-0609fc88.js";import{H as xe}from"./heading-e87eb660.js";import{T as Ae}from"./text-c7eceae7.js";import{B as _e}from"./button-a09a9cfc.js";import{P as ra}from"./progress-773afe29.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./index-0e02ae64.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./use-image-9c7f5b4b.js";import"./loading-9c6ba408.js";import"./index-8b904657.js";import"./index-c3db8104.js";import"./index-98029261.js";import"./number-cdadea8f.js";function na(e,n,t,s,a){return s+(a-s)*((e-n)/(t-n))}function tr(e){return typeof e=="number"}function ar(e){return Object.prototype.toString.call(e)==="[object Object]"}function aa(e){return Array.isArray(e)}function gr(e){return ar(e)||aa(e)}function F(e){return Math.abs(e)}function sr(e){return e?e/F(e):0}function me(e,n){return F(e-n)}function ta(e,n){if(e===0||n===0||F(e)<=F(n))return 0;var t=me(F(e),F(n));return F(t/e)}function sa(e){var n=Math.pow(10,e);return function(t){return Math.round(t*n)/n}}function Se(e){return de(e).map(Number)}function se(e){return e[er(e)]}function er(e){return Math.max(0,e.length-1)}function de(e){return Object.keys(e)}function Nn(e,n){return[e,n].reduce(function(t,s){return de(s).forEach(function(a){var d=t[a],c=s[a],g=ar(d)&&ar(c);t[a]=g?Nn(d,c):c}),t},{})}function Tn(e,n){var t=de(e),s=de(n);return t.length!==s.length?!1:t.every(function(a){var d=e[a],c=n[a];return typeof d=="function"?"".concat(d)==="".concat(c):!gr(d)||!gr(c)?d===c:Tn(d,c)})}function oa(e,n){var t={start:s,center:a,end:d};function s(){return 0}function a(f){return d(f)/2}function d(f){return n-f}function c(){return n*Number(e)}function g(f){return tr(e)?c():t[e](f)}var C={measure:g};return C}function ia(e){var n=0;function t(c,g){return function(){c===!!n&&g()}}function s(){n=window.requestAnimationFrame(e)}function a(){window.cancelAnimationFrame(n),n=0}var d={proceed:t(!0,s),start:t(!1,s),stop:t(!0,a)};return d}function la(e,n){var t=e==="y"?"y":"x",s=e==="y"?"x":"y",a=g(),d=C();function c(u){var l=u.width,p=u.height;return t==="x"?l:p}function g(){return t==="y"?"top":n==="rtl"?"right":"left"}function C(){return t==="y"?"bottom":n==="rtl"?"left":"right"}var f={scroll:t,cross:s,startEdge:a,endEdge:d,measureSize:c};return f}function Ce(e,n){var t=F(e-n);function s(f){return f<e}function a(f){return f>n}function d(f){return s(f)||a(f)}function c(f){return d(f)?s(f)?e:n:f}function g(f){return t?f-t*Math.ceil((f-n)/t):f}var C={length:t,max:n,min:e,constrain:c,reachedAny:d,reachedMax:a,reachedMin:s,removeOffset:g};return C}function Mn(e,n,t){var s=Ce(0,e),a=s.min,d=s.constrain,c=e+1,g=C(n);function C(v){return t?F((c+v)%c):d(v)}function f(){return g}function u(v){return g=C(v),m}function l(v){return u(f()+v)}function p(){return Mn(e,f(),t)}var m={add:l,clone:p,get:f,set:u,min:a,max:e};return m}function da(e){var n=e==="rtl"?-1:1;function t(a){return a*n}var s={apply:t};return s}function Qe(){var e=[];function n(a,d,c,g){return g===void 0&&(g=!1),a.addEventListener(d,c,g),e.push(function(){return a.removeEventListener(d,c,g)}),s}function t(){return e=e.filter(function(a){return a()}),s}var s={add:n,removeAll:t};return s}function ie(e){var n=e;function t(){return n}function s(l){return n=f(l),u}function a(l){return n+=f(l),u}function d(l){return n-=f(l),u}function c(l){return n*=l,u}function g(l){return n/=l,u}function C(){return n!==0&&g(n),u}function f(l){return tr(l)?l:l.get()}var u={add:a,divide:g,get:t,multiply:c,normalize:C,set:s,subtract:d};return u}function ca(e,n,t,s,a,d,c,g,C,f,u,l,p,m,v,I){var b=e.cross,h=["INPUT","SELECT","TEXTAREA"],y=ie(0),w=Qe(),_=Qe(),A=p.measure(20),P={mouse:300,touch:400},B={mouse:500,touch:600},D=v?5:16,k=1,W=0,E=0,J=!1,X=!1,H=!1,j=!1;function R(){var S=t;w.add(S,"touchmove",function(){}).add(S,"touchend",function(){}).add(S,"touchstart",Y).add(S,"mousedown",Y).add(S,"touchcancel",q).add(S,"contextmenu",q).add(S,"click",oe)}function $(){var S=j?document:t;_.add(S,"touchmove",Q).add(S,"touchend",q).add(S,"mousemove",Q).add(S,"mouseup",q)}function U(){w.removeAll(),_.removeAll()}function V(S){var N=S.nodeName||"";return h.indexOf(N)>-1}function re(){var S=v?B:P,N=j?"mouse":"touch";return S[N]}function O(S,N){var K=u.clone().add(sr(S)*-1),ne=K.get()===u.min||K.get()===u.max,M=f.byDistance(S,!v).distance;return v||F(S)<A?M:!m&&ne?M*.4:I&&N?M*.5:f.byIndex(K.get(),0).distance}function Y(S){if(j=S.type==="mousedown",!(j&&S.button!==0)){var N=me(s.get(),d.get())>=2,K=j||!N,ne=!V(S.target),M=N||j&&ne;J=!0,a.pointerDown(S),y.set(s),s.set(d),C.useBaseMass().useSpeed(80),$(),W=a.readPoint(S),E=a.readPoint(S,b),l.emit("pointerDown"),K&&(H=!1),M&&S.preventDefault()}}function Q(S){if(!X&&!j){if(!S.cancelable)return q(S);var N=a.readPoint(S),K=a.readPoint(S,b),ne=me(N,W),M=me(K,E);if(X=ne>M,!X&&!H)return q(S)}var ae=a.pointerMove(S);!H&&ae&&(H=!0),c.start(),s.add(n.apply(ae)),S.preventDefault()}function q(S){var N=f.byDistance(0,!1),K=N.index!==u.get(),ne=a.pointerUp(S)*re(),M=O(n.apply(ne),K),ae=ta(ne,M),jn=me(s.get(),y.get())>=.5,lr=K&&ae>.75,Rn=F(ne)<A,Gn=lr?10:D,Hn=lr?k+2.5*ae:k;jn&&!j&&(H=!0),X=!1,J=!1,_.removeAll(),C.useSpeed(Rn?9:Gn).useMass(Hn),g.distance(M,!v),j=!1,l.emit("pointerUp")}function oe(S){H&&S.preventDefault()}function ee(){return!H}function Z(){return J}var z={addActivationEvents:R,clickAllowed:ee,pointerDown:Z,removeAllEvents:U};return z}function ua(e){var n=170,t,s;function a(l){return typeof TouchEvent<"u"&&l instanceof TouchEvent}function d(l){return l.timeStamp}function c(l,p){var m=p||e.scroll,v="client".concat(m==="x"?"X":"Y");return(a(l)?l.touches[0]:l)[v]}function g(l){return t=l,s=l,c(l)}function C(l){var p=c(l)-c(s),m=d(l)-d(t)>n;return s=l,m&&(t=l),p}function f(l){if(!t||!s)return 0;var p=c(s)-c(t),m=d(l)-d(t),v=d(l)-d(s)>n,I=p/m,b=m&&!v&&F(I)>.1;return b?I:0}var u={isTouchEvent:a,pointerDown:g,pointerMove:C,pointerUp:f,readPoint:c};return u}function ga(e){function n(s){return e*(s/100)}var t={measure:n};return t}function fa(e,n,t){var s=sa(2),a=ie(0),d=ie(0),c=ie(0),g=0,C=n,f=t;function u(){a.add(d),e.add(a),d.multiply(0)}function l(_){_.divide(f),d.add(_)}function p(_){c.set(_).subtract(e);var A=na(c.get(),0,100,0,C);return g=sr(c.get()),c.normalize().multiply(A).subtract(a),l(c),w}function m(_){var A=_.get()-e.get(),P=!s(A);return P&&e.set(_),P}function v(){return g}function I(){return h(n)}function b(){return y(t)}function h(_){return C=_,w}function y(_){return f=_,w}var w={direction:v,seek:p,settle:m,update:u,useBaseMass:b,useBaseSpeed:I,useMass:y,useSpeed:h};return w}function Ca(e,n,t,s,a){var d=a.measure(10),c=a.measure(50),g=.85,C=!1;function f(){return!(C||!e.reachedAny(t.get())||!e.reachedAny(n.get()))}function u(m){if(f()){var v=e.reachedMin(n.get())?"min":"max",I=F(e[v]-n.get()),b=t.get()-n.get(),h=Math.min(I/c,g);t.subtract(b*h),!m&&F(b)<d&&(t.set(e.constrain(t.get())),s.useSpeed(10).useMass(3))}}function l(m){C=!m}var p={constrain:u,toggleActive:l};return p}function pa(e,n,t,s){var a=Ce(-n+e,t[0]),d=t.map(a.constrain),c=C();function g(){var u=d[0],l=se(d),p=d.lastIndexOf(u),m=d.indexOf(l)+1;return Ce(p,m)}function C(){if(n<=e)return[a.max];if(s==="keepSnaps")return d;var u=g(),l=u.min,p=u.max;return d.slice(l,p)}var f={snapsContained:c};return f}function ma(e,n,t){var s=a();function a(){var c=n[0],g=se(n),C=t?c-e:g,f=c;return Ce(C,f)}var d={limit:s};return d}function Sa(e,n,t,s){var a=.1,d=n.min+a,c=n.max+a,g=Ce(d,c),C=g.reachedMin,f=g.reachedMax;function u(m){return m===1?f(t.get()):m===-1?C(t.get()):!1}function l(m){if(u(m)){var v=e*(m*-1);s.forEach(function(I){return I.add(v)})}}var p={loop:l};return p}function va(e){var n=e.max,t=e.length;function s(d){var c=d-n;return c/-t}var a={get:s};return a}function ha(e,n,t,s,a,d,c){var g=e.startEdge,C=e.endEdge,f=d.groupSlides,u=m().map(n.measure),l=v(),p=I();function m(){return f(s).map(function(h){return se(h)[C]-h[0][g]}).map(F)}function v(){return s.map(function(h){return t[g]-h[g]}).map(function(h){return-F(h)})}function I(){var h=0,y=se(l)-se(a);return f(l).map(function(w){return w[0]}).map(function(w,_,A){var P=!_,B=_===er(A);return c&&P?h:c&&B?y:w+u[_]})}var b={snaps:l,snapsAligned:p};return b}function ba(e,n,t,s,a){var d=s.reachedAny,c=s.removeOffset,g=s.constrain;function C(v){return v.concat().sort(function(I,b){return F(I)-F(b)})[0]}function f(v){var I=e?c(v):g(v),b=n.map(function(y){return y-I}).map(function(y){return u(y,0)}).map(function(y,w){return{diff:y,index:w}}).sort(function(y,w){return F(y.diff)-F(w.diff)}),h=b[0].index;return{index:h,distance:I}}function u(v,I){var b=[v,v+t,v-t];if(!e)return b[0];if(!I)return C(b);var h=b.filter(function(y){return sr(y)===I});return C(h)}function l(v,I){var b=n[v]-a.get(),h=u(b,I);return{index:v,distance:h}}function p(v,I){var b=a.get()+v,h=f(b),y=h.index,w=h.distance,_=!e&&d(b);if(!I||_)return{index:y,distance:v};var A=n[y]-w,P=v+u(A,0);return{index:y,distance:P}}var m={byDistance:p,byIndex:l,shortcut:u};return m}function ya(e,n,t,s,a,d){function c(u){var l=u.distance,p=u.index!==n.get();l&&(e.start(),a.add(l)),p&&(t.set(n.get()),n.set(u.index),d.emit("select"))}function g(u,l){var p=s.byDistance(u,l);c(p)}function C(u,l){var p=n.clone().set(u),m=s.byIndex(p.get(),l);c(m)}var f={distance:g,index:C};return f}function kn(e,n,t){var s=e.scroll==="x"?c:g,a=t.style,d=!1;function c(p){return"translate3d(".concat(p,"px,0px,0px)")}function g(p){return"translate3d(0px,".concat(p,"px,0px)")}function C(p){d||(a.transform=s(n.apply(p.get())))}function f(p){d=!p}function u(){d||(a.transform="",t.getAttribute("style")||t.removeAttribute("style"))}var l={clear:u,to:C,toggleActive:f};return l}function wa(e,n,t,s,a,d,c,g,C){var f=Se(a),u=Se(a).reverse(),l=I().concat(b());function p(A,P){return A.reduce(function(B,D){return B-a[D]},P)}function m(A,P){return A.reduce(function(B,D){var k=p(B,P);return k>0?B.concat([D]):B},[])}function v(A,P){var B=P==="start",D=B?-s:s,k=c.findSlideBounds([D]);return A.map(function(W){var E=B?0:-s,J=B?s:0,X=k.filter(function(V){return V.index===W})[0],H=X[B?"end":"start"],j=ie(-1),R=ie(-1),$=kn(e,n,C[W]),U=function(){return j.set(g.get()>H?E:J)};return{index:W,location:R,translate:$,target:U}})}function I(){var A=d[0]-1,P=m(u,A);return v(P,"end")}function b(){var A=t-d[0]-1,P=m(f,A);return v(P,"start")}function h(){return l.every(function(A){var P=A.index,B=f.filter(function(D){return D!==P});return p(B,t)<=.1})}function y(){l.forEach(function(A){var P=A.target,B=A.translate,D=A.location,k=P();k.get()!==D.get()&&(k.get()===0?B.clear():B.to(k),D.set(k))})}function w(){l.forEach(function(A){return A.translate.clear()})}var _={canLoop:h,clear:w,loop:y,loopPoints:l};return _}function xa(e,n,t,s,a,d,c){var g=a.removeOffset,C=a.constrain,f=.5,u=d?[0,n,-n]:[0],l=m(u,c);function p(b){var h=b||0;return t.map(function(y){var w=Ce(f,y-f);return w.constrain(y*h)})}function m(b,h){var y=b||u,w=p(h);return y.reduce(function(_,A){var P=s.map(function(B,D){return{start:B-t[D]+w[D]+A,end:B+e-w[D]+A,index:D}});return _.concat(P)},[])}function v(b,h){var y=d?g(b):C(b),w=h||l;return w.reduce(function(_,A){var P=A.index,B=A.start,D=A.end,k=_.indexOf(P)!==-1,W=B<y&&D>y;return!k&&W?_.concat([P]):_},[])}var I={check:v,findSlideBounds:m};return I}function Aa(e,n,t,s,a){var d=e.measureSize,c=e.startEdge,g=e.endEdge,C=p(),f=m(),u=t.map(d),l=v();function p(){if(!a)return 0;var b=t[0];return F(n[c]-b[c])}function m(){if(!a)return 0;var b=window.getComputedStyle(se(s));return parseFloat(b.getPropertyValue("margin-".concat(g)))}function v(){return t.map(function(b,h,y){var w=!h,_=h===er(y);return w?u[h]+C:_?u[h]+f:y[h+1][c]-b[c]}).map(F)}var I={slideSizes:u,slideSizesWithGaps:l};return I}function _a(e,n,t){var s=tr(t);function a(C,f){return Se(C).filter(function(u){return u%f===0}).map(function(u){return C.slice(u,u+f)})}function d(C){return Se(C).reduce(function(f,u){var l=n.slice(se(f),u+1),p=l.reduce(function(m,v){return m+v},0);return!u||p>e?f.concat(u):f},[]).map(function(f,u,l){return C.slice(f,l[u+1])})}function c(C){return s?a(C,t):d(C)}var g={groupSlides:c};return g}function Ia(e,n,t,s,a){var d=s.align,c=s.axis,g=s.direction,C=s.startIndex,f=s.inViewThreshold,u=s.loop,l=s.speed,p=s.dragFree,m=s.slidesToScroll,v=s.skipSnaps,I=s.containScroll,b=n.getBoundingClientRect(),h=t.map(function(ae){return ae.getBoundingClientRect()}),y=da(g),w=la(c,g),_=w.measureSize(b),A=ga(_),P=oa(d,_),B=!u&&I!=="",D=u||I!=="",k=Aa(w,b,h,t,D),W=k.slideSizes,E=k.slideSizesWithGaps,J=_a(_,E,m),X=ha(w,P,b,h,E,J,B),H=X.snaps,j=X.snapsAligned,R=-se(H)+se(E),$=pa(_,R,j,I).snapsContained,U=B?$:j,V=ma(R,U,u).limit,re=Mn(er(U),C,u),O=re.clone(),Y=Se(t),Q=function(){u||M.scrollBounds.constrain(M.dragHandler.pointerDown()),M.scrollBody.seek(Z).update();var ae=M.scrollBody.settle(Z);ae&&!M.dragHandler.pointerDown()&&(M.animation.stop(),a.emit("settle")),ae||a.emit("scroll"),u&&(M.scrollLooper.loop(M.scrollBody.direction()),M.slideLooper.loop()),M.translate.to(ee),M.animation.proceed()},q=ia(Q),oe=U[re.get()],ee=ie(oe),Z=ie(oe),z=fa(ee,l,1),S=ba(u,U,R,V,Z),N=ya(q,re,O,S,Z,a),K=xa(_,R,W,H,V,u,f),ne=ca(w,y,e,Z,ua(w),ee,q,N,z,S,re,a,A,u,p,v),M={containerRect:b,slideRects:h,animation:q,axis:w,direction:y,dragHandler:ne,eventStore:Qe(),percentOfView:A,index:re,indexPrevious:O,limit:V,location:ee,options:s,scrollBody:z,scrollBounds:Ca(V,ee,Z,z,A),scrollLooper:Sa(R,V,ee,[ee,Z]),scrollProgress:va(V),scrollSnaps:U,scrollTarget:S,scrollTo:N,slideLooper:wa(w,y,_,R,E,U,K,ee,t),slidesToScroll:J,slidesInView:K,slideIndexes:Y,target:Z,translate:kn(w,y,n)};return M}function Pa(){var e={};function n(c){return e[c]||[]}function t(c){return n(c).forEach(function(g){return g(c)}),d}function s(c,g){return e[c]=n(c).concat([g]),d}function a(c,g){return e[c]=n(c).filter(function(C){return C!==g}),d}var d={emit:t,off:a,on:s};return d}var Ea={align:"center",axis:"x",containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function or(){function e(a,d){return Nn(a,d||{})}function n(a,d){var c=JSON.stringify(de(a.breakpoints||{})),g=JSON.stringify(de(d.breakpoints||{}));return c!==g?!1:Tn(a,d)}function t(a){var d=a.breakpoints||{},c=de(d).filter(function(g){return window.matchMedia(g).matches}).map(function(g){return d[g]}).reduce(function(g,C){return e(g,C)},{});return e(a,c)}var s={merge:e,areEqual:n,atMedia:t};return s}function Ba(){var e=or(),n=e.atMedia,t=e.areEqual,s,a=[];function d(){return a.some(function(u){return u()})}function c(u){var l=n(u.options);return function(){return!t(l,n(u.options))}}function g(u,l){return a=u.map(c),s=u.filter(function(p){return n(p.options).active}),s.forEach(function(p){return p.init(l)}),u.reduce(function(p,m){var v;return Object.assign(p,(v={},v[m.name]=m,v))},{})}function C(){s=s.filter(function(u){return u.destroy()})}var f={init:g,destroy:C,haveChanged:d};return f}function ce(e,n,t){var s=Qe(),a=or(),d=Ba(),c=Pa(),g=c.on,C=c.off,f=P,u=!1,l,p=a.merge(Ea,ce.globalOptions),m=a.merge(p),v=[],I,b=0,h,y,w;function _(){var z="container"in e&&e.container,S="slides"in e&&e.slides;h="root"in e?e.root:e,y=z||h.children[0],w=S||[].slice.call(y.children)}function A(z,S){if(!u){if(_(),p=a.merge(p,z),m=a.atMedia(p),l=Ia(h,y,w,m,c),b=l.axis.measureSize(h.getBoundingClientRect()),!m.active)return B();if(l.translate.to(l.location),v=S||v,I=d.init(v,Z),m.loop){if(!l.slideLooper.canLoop())return B(),A({loop:!1},S);l.slideLooper.loop()}m.draggable&&y.offsetParent&&w.length&&l.dragHandler.addActivationEvents()}}function P(z,S){var N=V();B(),A(a.merge({startIndex:N},z),S),c.emit("reInit")}function B(){l.dragHandler.removeAllEvents(),l.animation.stop(),l.eventStore.removeAll(),l.translate.clear(),l.slideLooper.clear(),d.destroy()}function D(){u||(u=!0,s.removeAll(),B(),c.emit("destroy"))}function k(){var z=a.atMedia(p),S=!a.areEqual(z,m),N=l.axis.measureSize(h.getBoundingClientRect()),K=b!==N,ne=d.haveChanged();(K||S||ne)&&P(),c.emit("resize")}function W(z){var S=l[z?"target":"location"].get(),N=m.loop?"removeOffset":"constrain";return l.slidesInView.check(l.limit[N](S))}function E(z){var S=W(z);return l.slideIndexes.filter(function(N){return S.indexOf(N)===-1})}function J(z,S,N){!m.active||u||(l.scrollBody.useBaseMass().useSpeed(S?100:m.speed),l.scrollTo.index(z,N||0))}function X(z){var S=l.index.clone().add(1);J(S.get(),z===!0,-1)}function H(z){var S=l.index.clone().add(-1);J(S.get(),z===!0,1)}function j(){var z=l.index.clone().add(1);return z.get()!==V()}function R(){var z=l.index.clone().add(-1);return z.get()!==V()}function $(){return l.scrollSnaps.map(l.scrollProgress.get)}function U(){return l.scrollProgress.get(l.location.get())}function V(){return l.index.get()}function re(){return l.indexPrevious.get()}function O(){return l.dragHandler.clickAllowed()}function Y(){return I}function Q(){return l}function q(){return h}function oe(){return y}function ee(){return w}var Z={canScrollNext:j,canScrollPrev:R,clickAllowed:O,containerNode:oe,internalEngine:Q,destroy:D,off:C,on:g,plugins:Y,previousScrollSnap:re,reInit:f,rootNode:q,scrollNext:X,scrollPrev:H,scrollProgress:U,scrollSnapList:$,scrollTo:J,selectedScrollSnap:V,slideNodes:ee,slidesInView:W,slidesNotInView:E};return A(n,t),s.add(window,"resize",k),setTimeout(function(){return c.emit("init")},0),Z}ce.globalOptions=void 0;ce.optionsHandler=or;function La(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function fr(e){return e.concat().sort(function(n,t){return n.name>t.name?1:-1}).map(function(n){return n.options})}function za(e,n){if(e.length!==n.length)return!1;var t=ce.optionsHandler().areEqual,s=fr(e),a=fr(n);return s.every(function(d,c){var g=a[c];return t(d,g)})}function ir(e,n){e===void 0&&(e={}),n===void 0&&(n=[]);var t=T.useRef(ce.optionsHandler()),s=T.useRef(e),a=T.useRef(n),d=T.useState(),c=d[0],g=d[1],C=T.useState(),f=C[0],u=C[1],l=T.useCallback(function(){c&&c.reInit(s.current,a.current)},[c]);return T.useEffect(function(){if(La()&&f){ce.globalOptions=ir.globalOptions;var p=ce(f,s.current,a.current);return g(p),function(){return p.destroy()}}else g(void 0)},[f,g]),T.useEffect(function(){t.current.areEqual(s.current,e)||(s.current=e,l())},[e,l]),T.useEffect(function(){za(a.current,n)||(a.current=n,l())},[n,l]),[u,c]}ir.globalOptions=void 0;const[Da,te]=Wn({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),Na=({index:e,defaultIndex:n=0,onChange:t,align:s="center",orientation:a="horizontal",autoplay:d=!1,stopMouseEnterAutoplay:c=!0,loop:g=!0,speed:C=10,delay:f=4e3,gap:u="md",slidesToScroll:l=1,draggable:p=!0,dragFree:m=!1,inViewThreshold:v=0,skipSnaps:I=!1,containScroll:b="",slideSize:h="100%",includeGapInSize:y=!0,onScrollProgress:w,children:_,...A})=>{const P=qn(A,Un),[B,D]=Vn({value:e,defaultValue:n,onChange:t}),k=a==="vertical",[W,E]=ir({axis:k?"y":"x",startIndex:n,loop:g,align:s,slidesToScroll:l,draggable:p,dragFree:m,speed:C,inViewThreshold:v,skipSnaps:I,containScroll:b}),[J,X]=T.useState([]),[H,j]=T.useState(!1),R=T.useRef(void 0),$=T.useCallback(()=>{if(!E)return;const O=Math.round(Math.max(0,Math.min(1,E.scrollProgress()))*100);w==null||w(O)},[E,w]),U=T.useCallback(()=>{if(!E)return;const O=E.selectedScrollSnap();D(O)},[E,D]);T.useEffect(()=>{const O=H&&c,Y=!(E!=null&&E.canScrollNext());return E&&d&&!O&&!Y?R.current=setInterval(()=>{E.scrollNext()},f):(R.current&&clearInterval(R.current),R.current=void 0),()=>{R.current&&clearInterval(R.current)}},[d,f,c,E,H,g,B]),rr(()=>{if(!E)return;E.reInit();const Y=E.scrollSnapList().map((Q,q)=>q);X(Y)},[T.Children.toArray(_).length,s,a,g,C,u,l,p,m,v,I,b,h,y]),rr(()=>{if(!E)return;const Y=E.scrollSnapList().map((Q,q)=>q);X(Y)},[E]),rr(()=>{if(E)return E.on("select",U),E.on("scroll",$),$(),()=>{E.off("select",U),E.off("scroll",$)}},[E,$]);const V=T.useCallback((O={},Y=null)=>({...P[0],...O,ref:Y,onMouseEnter:Ze(O.onMouseEnter,()=>{j(!0)}),onMouseLeave:Ze(O.onMouseLeave,()=>{j(!1)})}),[P]),re=T.useCallback((O={})=>({...P[1],...O,ref:W}),[P,W]);return{carousel:E,children:_,indexes:J,selectedIndex:B,orientation:a,slideSize:h,gap:u,slidesToScroll:l,includeGapInSize:y,getContainerProps:V,getSlidesProps:re}},Ta=({index:e})=>{const{selectedIndex:n,slidesToScroll:t}=te();e=Math.floor((e??0)/(t??1));const s=e===n;return{getSlideProps:T.useCallback((d={})=>({...d,role:"carousel-slide","data-index":e,"data-selected":zn(s)}),[s,e])}},On=({operation:e,...n})=>{const{carousel:t}=te(),s=e==="prev",a=n.disabled??n.isDisabled??(s?!(t!=null&&t.canScrollPrev()):!(t!=null&&t.canScrollNext())),d=T.useCallback(()=>{t&&(s?t.scrollPrev():t.scrollNext())},[t,s]);return{getControlProps:T.useCallback((g={},C=null)=>({...g,ref:C,disabled:a,role:"carousel-control",onClick:Ze(g.onClick,d)}),[a,d])}},Ma=()=>{const{selectedIndex:e,carousel:n,indexes:t}=te(),s=T.useCallback((d,c)=>{n&&(d.stopPropagation(),n.scrollTo(c))},[n]),a=T.useCallback(({index:d,...c}={})=>({...c,key:d,role:"carousel-indicator","data-index":d,"data-selected":zn(d===e),onClick:Ze(c.onClick,C=>s(C,d))}),[s,e]);return{indexes:t,getIndicatorProps:a}},L=le(({h:e,height:n,minH:t,minHeight:s,...a},d)=>{const c=G(a.orientation),g=G(a.align),C=G(a.autoplay),f=G(a.stopMouseEnterAutoplay),u=G(a.loop),l=G(a.speed),p=G(a.delay),m=G(a.slidesToScroll),v=G(a.draggable),I=G(a.dragFree),b=G(a.inViewThreshold),h=G(a.skipSnaps),y=G(a.containScroll),w=G(a.includeGapInSize),_=ur("spaces",G(a.gap))??G(a.gap),A=ur("sizes",G(a.slideSize))??G(a.slideSize),[P,B]=Qn("Carousel",{...a,orientation:c,align:g,autoplay:C,stopMouseEnterAutoplay:f,loop:u,speed:l,delay:p,slidesToScroll:m,draggable:v,dragFree:I,inViewThreshold:b,skipSnaps:h,containScroll:y,includeGapInSize:w,gap:_,slideSize:A}),{className:D,innerProps:k,withControls:W=!0,controlProps:E,controlPrevProps:J,controlNextProps:X,withIndicators:H=!0,indicatorsProps:j,...R}=ea(B),$=G(W),U=G(H),{getContainerProps:V,getSlidesProps:re,children:O,...Y}=Na({...R}),Q=Kn(O),[q]=nr(Q,Xe),[oe]=nr(Q,Ye),[ee]=nr(Q,$e),Z=Jn(Q,o),z=Xn(Q,Xe,Ye,$e,o),S=Z.map((N,K)=>T.cloneElement(N,{index:K}));return e??(e=n),t??(t=s),r(Da,{value:{styles:P,...Y},children:x(ue.div,{className:ge("ui-carousel",D),__css:{position:"relative",h:"fit-content",...P.container},...V({},d),children:[q??($?r(Xe,{...E,...J}):null),oe??($?r(Ye,{...E,...X}):null),r(ka,{...re({...Yn({h:e,minH:t}),...k}),children:S}),ee??(U?r($e,{...j}):null),z]})})}),ka=le(({...e},n)=>{const t={w:"100%",h:"fit-content",overflow:"hidden"};return r(ue.div,{ref:n,className:"ui-carousel__sliders",__css:t,children:r(Oa,{...e})})}),Oa=({...e})=>{const{orientation:n,includeGapInSize:t,gap:s,styles:a}=te(),d={display:"flex",flexDirection:n==="vertical"?"column":"row",...a.inner,...t?{[n==="vertical"?"mb":"mr"]:`-${s}`}:{}};return r(ue.div,{className:"ui-carousel__sliders__inner",__css:d,...e})},o=le(({className:e,size:n,...t},s)=>{const{slideSize:a,includeGapInSize:d,orientation:c,gap:g}=te(),{getSlideProps:C}=Ta(t);n??(n=a);const f={position:"relative",flex:`0 0 ${n}`,...d?{[c==="vertical"?"pb":"pr"]:g}:{[c==="vertical"?"mb":"mr"]:g}};return r(ue.div,{className:ge("ui-carousel__slide",e),__css:f,...C({}),children:r(Fa,{ref:s,...t})})}),Fa=le(({...e},n)=>r(ue.div,{ref:n,className:"ui-carousel__slide__inner",w:"100%",h:"100%",...e})),Xe=le(({className:e,...n},t)=>{const{orientation:s}=te(),{getControlProps:a}=On({operation:"prev"});return r(Fn,{operation:"prev",className:ge("ui-carousel__control--prev",e),icon:r(Dn,{__css:{fontSize:"1.5em",transform:s==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),...a(n,t)})}),Ye=le(({className:e,...n},t)=>{const{orientation:s}=te(),{getControlProps:a}=On({operation:"next"});return r(Fn,{operation:"next",className:ge("ui-carousel__control--next",e),icon:r(Dn,{__css:{fontSize:"1.5em",transform:s==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),...a(n,t)})}),Fn=le(({className:e,operation:n,...t},s)=>{const{styles:a}=te(),d=$n("whiteAlpha","blackAlpha"),c={position:"absolute",zIndex:"kurillin",...a.control,...a[n]};return r(Zn,{ref:s,className:ge("ui-carousel__control",e),colorScheme:d,isRounded:!0,__css:c,...t})}),$e=le(({className:e,component:n,...t},s)=>{const{selectedIndex:a,orientation:d,styles:c}=te(),{indexes:g,getIndicatorProps:C}=Ma(),f={position:"absolute",zIndex:"kurillin",display:"flex",justifyContent:"center",...c.indicators,...d==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return r(ue.div,{ref:s,className:ge("ui-carousel__indicators",e),__css:f,...t,children:g.map(u=>{const l=u===a;if(typeof n=="function"){const p=n({index:u,isSelected:l});if(!p)return null;const m=C({...p.props,index:u});return T.cloneElement(p,m)}else{const{key:p,...m}=C({index:u});return r(ja,{...m},p)}})})}),ja=({className:e,...n})=>{const{styles:t}=te(),s={...t.indicator};return r(ue.button,{type:"button",tabIndex:-1,className:ge("ui-carousel__indicators__indicator",e),__css:s,...n})},pt={title:"Components / Data Display / Carousel",component:L},Ie=()=>x(L,{children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),Pe=()=>x(pe,{children:[x(L,{size:"sm",children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),x(L,{size:"md",children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),x(L,{size:"lg",children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),x(L,{size:"xl",children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]})]}),Ee=()=>x(pe,{children:[x(L,{orientation:"horizontal",children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),x(L,{orientation:"vertical",children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]})]}),Be=()=>x(L,{defaultIndex:1,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),Le=()=>x(L,{gap:0,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),ze=()=>x(L,{speed:50,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),De=()=>x(L,{slideSize:"50%",children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",size:"100%",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),Ne=()=>x(pe,{children:[x(L,{slideSize:"50%",align:"center",children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),x(L,{slideSize:"50%",align:"start",children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),x(L,{slideSize:"50%",align:"end",children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]})]}),Te=()=>x(L,{slideSize:"33.3%",slidesToScroll:3,loop:!1,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"}),r(o,{as:i,bg:"primary",children:"5"}),r(o,{as:i,bg:"secondary",children:"6"}),r(o,{as:i,bg:"danger",children:"7"}),r(o,{as:i,bg:"primary",children:"8"}),r(o,{as:i,bg:"secondary",children:"9"})]}),Me=()=>x(L,{slideSize:"50%",align:"start",slidesToScroll:2,h:"auto",controlProps:{colorScheme:"whiteAlpha",color:"white"},children:[x(o,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md"})}),x(be,{children:[r(xe,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Ae,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(_e,{colorScheme:"primary",children:"Wikipadia"})})]}),x(o,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md"})}),x(be,{children:[r(xe,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Ae,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(_e,{colorScheme:"primary",children:"Wikipadia"})})]}),x(o,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md"})}),x(be,{children:[r(xe,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Ae,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(_e,{colorScheme:"primary",children:"Wikipadia"})})]}),x(o,{as:ve,variant:"subtle",children:[r(he,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md"})}),x(be,{children:[r(xe,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Ae,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(ye,{children:r(_e,{colorScheme:"primary",children:"Wikipadia"})})]})]}),ke=()=>x(L,{autoplay:!0,loop:!1,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),Oe=()=>x(L,{autoplay:!0,delay:1e3,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),Fe=()=>x(L,{dragFree:!0,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),je=()=>{const[e,n]=T.useState(0);return x(pe,{children:[x(L,{loop:!1,dragFree:!0,onScrollProgress:n,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),r(ra,{value:e,colorScheme:"gray"})]})},Re=()=>x(L,{slideSize:"50%",includeGapInSize:!1,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),Ge=()=>x(L,{loop:!1,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),He=()=>x(L,{draggable:!1,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),Ve=()=>x(L,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),We=()=>x(L,{withControls:!1,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),qe=()=>x(L,{withIndicators:!1,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),Ue=()=>{const[e,n]=T.useState(0);return x(L,{draggable:!1,index:e,onChange:n,children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]})},Ke=()=>x(pe,{children:[x(L,{controlProps:{icon:r(fe,{icon:Ln})},children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),x(L,{controlPrevProps:{icon:r(fe,{icon:dr})},children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),x(L,{controlNextProps:{icon:r(fe,{icon:cr})},children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),x(L,{children:[r(Xe,{icon:r(fe,{icon:dr})}),r(Ye,{icon:r(fe,{icon:cr})}),r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]})]}),Je=()=>x(pe,{children:[x(L,{indicatorsProps:{bottom:"8",component:({isSelected:e})=>r(fe,{icon:Ln,color:e?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer"})},children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"})]}),x(L,{children:[r(o,{as:i,bg:"primary",children:"1"}),r(o,{as:i,bg:"secondary",children:"2"}),r(o,{as:i,bg:"warning",children:"3"}),r(o,{as:i,bg:"danger",children:"4"}),r($e,{sx:{"& > *":{w:"4",_selected:{w:"12"},transitionProperty:"width",transitionDuration:"slower"}}})]})]});var Cr,pr,mr;Ie.parameters={...Ie.parameters,docs:{...(Cr=Ie.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
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
}`,...(mr=(pr=Ie.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var Sr,vr,hr;Pe.parameters={...Pe.parameters,docs:{...(Sr=Pe.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
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
}`,...(hr=(vr=Pe.parameters)==null?void 0:vr.docs)==null?void 0:hr.source}}};var br,yr,wr;Ee.parameters={...Ee.parameters,docs:{...(br=Ee.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
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
}`,...(wr=(yr=Ee.parameters)==null?void 0:yr.docs)==null?void 0:wr.source}}};var xr,Ar,_r;Be.parameters={...Be.parameters,docs:{...(xr=Be.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
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
}`,...(_r=(Ar=Be.parameters)==null?void 0:Ar.docs)==null?void 0:_r.source}}};var Ir,Pr,Er;Le.parameters={...Le.parameters,docs:{...(Ir=Le.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
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
}`,...(Er=(Pr=Le.parameters)==null?void 0:Pr.docs)==null?void 0:Er.source}}};var Br,Lr,zr;ze.parameters={...ze.parameters,docs:{...(Br=ze.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
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
}`,...(zr=(Lr=ze.parameters)==null?void 0:Lr.docs)==null?void 0:zr.source}}};var Dr,Nr,Tr;De.parameters={...De.parameters,docs:{...(Dr=De.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
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
}`,...(Tr=(Nr=De.parameters)==null?void 0:Nr.docs)==null?void 0:Tr.source}}};var Mr,kr,Or;Ne.parameters={...Ne.parameters,docs:{...(Mr=Ne.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
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
}`,...(Or=(kr=Ne.parameters)==null?void 0:kr.docs)==null?void 0:Or.source}}};var Fr,jr,Rr;Te.parameters={...Te.parameters,docs:{...(Fr=Te.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
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
}`,...(Rr=(jr=Te.parameters)==null?void 0:jr.docs)==null?void 0:Rr.source}}};var Gr,Hr,Vr;Me.parameters={...Me.parameters,docs:{...(Gr=Me.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
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
}`,...(Vr=(Hr=Me.parameters)==null?void 0:Hr.docs)==null?void 0:Vr.source}}};var Wr,qr,Ur;ke.parameters={...ke.parameters,docs:{...(Wr=ke.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
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
}`,...(Ur=(qr=ke.parameters)==null?void 0:qr.docs)==null?void 0:Ur.source}}};var Kr,Jr,Xr;Oe.parameters={...Oe.parameters,docs:{...(Kr=Oe.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
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
}`,...(Xr=(Jr=Oe.parameters)==null?void 0:Jr.docs)==null?void 0:Xr.source}}};var Yr,$r,Zr;Fe.parameters={...Fe.parameters,docs:{...(Yr=Fe.parameters)==null?void 0:Yr.docs,source:{originalSource:`() => {
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
}`,...(Zr=($r=Fe.parameters)==null?void 0:$r.docs)==null?void 0:Zr.source}}};var Qr,en,rn;je.parameters={...je.parameters,docs:{...(Qr=je.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
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
}`,...(tn=(an=Re.parameters)==null?void 0:an.docs)==null?void 0:tn.source}}};var sn,on,ln;Ge.parameters={...Ge.parameters,docs:{...(sn=Ge.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
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
}`,...(ln=(on=Ge.parameters)==null?void 0:on.docs)==null?void 0:ln.source}}};var dn,cn,un;He.parameters={...He.parameters,docs:{...(dn=He.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
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
}`,...(un=(cn=He.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var gn,fn,Cn;Ve.parameters={...Ve.parameters,docs:{...(gn=Ve.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
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
}`,...(Cn=(fn=Ve.parameters)==null?void 0:fn.docs)==null?void 0:Cn.source}}};var pn,mn,Sn;We.parameters={...We.parameters,docs:{...(pn=We.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(bn=(hn=qe.parameters)==null?void 0:hn.docs)==null?void 0:bn.source}}};var yn,wn,xn;Ue.parameters={...Ue.parameters,docs:{...(yn=Ue.parameters)==null?void 0:yn.docs,source:{originalSource:`() => {
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
}`,...(xn=(wn=Ue.parameters)==null?void 0:wn.docs)==null?void 0:xn.source}}};var An,_n,In;Ke.parameters={...Ke.parameters,docs:{...(An=Ke.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
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
}`,...(In=(_n=Ke.parameters)==null?void 0:_n.docs)==null?void 0:In.source}}};var Pn,En,Bn;Je.parameters={...Je.parameters,docs:{...(Pn=Je.parameters)==null?void 0:Pn.docs,source:{originalSource:`() => {
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
}`,...(Bn=(En=Je.parameters)==null?void 0:En.docs)==null?void 0:Bn.source}}};const mt=["basic","withSize","withOrientation","withDefaultIndex","withGap","withSpeed","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","customControl","customControlButton","customIndicators"];export{mt as __namedExportsOrder,Ie as basic,Ue as customControl,Ke as customControlButton,Je as customIndicators,pt as default,We as disabledControlButton,He as disabledDraggable,Re as disabledIncludeGapInSize,qe as disabledIndicators,Ge as disabledLoop,Ve as disabledStopMouseEnterAutoplay,Ne as withAlign,ke as withAutoplay,Me as withCard,Be as withDefaultIndex,Oe as withDelay,Fe as withDragFree,Le as withGap,Ee as withOrientation,je as withScrollProgress,Pe as withSize,De as withSlideSize,Te as withSlidesToScroll,ze as withSpeed};
//# sourceMappingURL=carousel.stories-6c432063.js.map
