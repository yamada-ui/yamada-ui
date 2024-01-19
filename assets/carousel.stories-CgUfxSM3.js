import{j as r,a as w,F as pe}from"./jsx-runtime-5BUNAZ9W.js";import{I as ge,f as Ln,x as dr,b as cr}from"./fontawesome-icon-FTmzG4P2.js";import{r as M}from"./index-4g5l5LRQ.js";import{u as Cr}from"./index-R-iIN9fN.js";import{u as H}from"./index-_j_eT4tT.js";import{u as Wn}from"./index-G8tKCAl8.js";import{c as Un,_ as Kn,$ as $n,e as nr,h as Ze,K as zn,v as Jn,M as ar,U as Xn,a2 as Yn,u as ce,a as Ce,x as Qn,q as Zn}from"./factory-cZuM5uc7.js";import{f as ie}from"./forward-ref-A-8Arhkk.js";import{c as Tn}from"./icon-bIO0usjb.js";import{I as ea}from"./icon-button-aNiJlXIx.js";import{u as ra}from"./use-component-style-UguhvTUx.js";import{o as na}from"./theme-provider-YeTkYVXb.js";import{P as aa}from"./progress-rR9T_Unp.js";import{C as o}from"./center-UYRiGEMd.js";import{C as he,a as be,b as ye,c as Fe}from"./card-XYwlqm-g.js";import{I as we}from"./image-FLQcPxbE.js";import{H as Be}from"./heading-GKenIkBr.js";import{T as Ee}from"./text-3Ui1tvgC.js";import{B as Ae}from"./button-fXXqKWAC.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-o8caY6Jh.js";import"./index-yqLFhgGW.js";import"./index-YuXFfT5-.js";import"./index-LREwicdH.js";import"./number-RReIgE2V.js";import"./use-image-eJzrk7Nf.js";import"./use-ripple--RYc3gC9.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-LsoKV39r.js";import"./loading-61VaiPw8.js";function ta(e,n,t,u,a){return u+(a-u)*((e-n)/(t-n))}function ur(e){return typeof e=="number"}function gr(e){return typeof e=="string"}function tr(e){return Object.prototype.toString.call(e)==="[object Object]"}function ua(e){return Array.isArray(e)}function fr(e){return tr(e)||ua(e)}function k(e){return Math.abs(e)}function sr(e){return e?e/k(e):0}function Se(e,n){return k(e-n)}function sa(e,n){if(e===0||n===0||k(e)<=k(n))return 0;var t=Se(k(e),k(n));return k(t/e)}function oa(e){var n=Math.pow(10,e);return function(t){return Math.round(t*n)/n}}function ve(e){return le(e).map(Number)}function se(e){return e[rr(e)]}function rr(e){return Math.max(0,e.length-1)}function le(e){return Object.keys(e)}function Mn(e,n){return[e,n].reduce(function(t,u){return le(u).forEach(function(a){var l=t[a],d=u[a],C=tr(l)&&tr(d);t[a]=C?Mn(l,d):d}),t},{})}function Nn(e,n){var t=le(e),u=le(n);return t.length!==u.length?!1:t.every(function(a){var l=e[a],d=n[a];return typeof l=="function"?"".concat(l)==="".concat(d):!fr(l)||!fr(d)?l===d:Nn(l,d)})}function ia(e,n){var t={start:u,center:a,end:l};function u(){return 0}function a(g){return l(g)/2}function l(g){return n-g}function d(){return n*Number(e)}function C(g){return ur(e)?d():t[e](g)}var f={measure:C};return f}function la(e){var n=0;function t(d,C){return function(){d===!!n&&C()}}function u(){n=window.requestAnimationFrame(e)}function a(){window.cancelAnimationFrame(n),n=0}var l={proceed:t(!0,u),start:t(!1,u),stop:t(!0,a)};return l}function da(e,n){var t=e==="y"?"y":"x",u=e==="y"?"x":"y",a=C(),l=f();function d(c){var i=c.width,p=c.height;return t==="x"?i:p}function C(){return t==="y"?"top":n==="rtl"?"right":"left"}function f(){return t==="y"?"bottom":n==="rtl"?"left":"right"}var g={scroll:t,cross:u,startEdge:a,endEdge:l,measureSize:d};return g}function fe(e,n){var t=k(e-n);function u(g){return g<e}function a(g){return g>n}function l(g){return u(g)||a(g)}function d(g){return l(g)?u(g)?e:n:g}function C(g){return t?g-t*Math.ceil((g-n)/t):g}var f={length:t,max:n,min:e,constrain:d,reachedAny:l,reachedMax:a,reachedMin:u,removeOffset:C};return f}function On(e,n,t){var u=fe(0,e),a=u.min,l=u.constrain,d=e+1,C=f(n);function f(S){return t?k((d+S)%d):l(S)}function g(){return C}function c(S){return C=f(S),m}function i(S){return c(g()+S)}function p(){return On(e,g(),t)}var m={add:i,clone:p,get:g,set:c,min:a,max:e};return m}function ca(e){var n=e==="rtl"?-1:1;function t(a){return a*n}var u={apply:t};return u}function er(){var e=[];function n(a,l,d,C){return C===void 0&&(C={passive:!0}),a.addEventListener(l,d,C),e.push(function(){return a.removeEventListener(l,d,C)}),u}function t(){return e=e.filter(function(a){return a()}),u}var u={add:n,removeAll:t};return u}function oe(e){var n=e;function t(){return n}function u(i){return n=g(i),c}function a(i){return n+=g(i),c}function l(i){return n-=g(i),c}function d(i){return n*=i,c}function C(i){return n/=i,c}function f(){return n!==0&&C(n),c}function g(i){return ur(i)?i:i.get()}var c={add:a,divide:C,get:t,multiply:d,normalize:f,set:u,subtract:l};return c}function Ca(e,n,t,u,a,l,d,C,f,g,c,i,p,m,S,x){var F=e.cross,v=["INPUT","SELECT","TEXTAREA"],h={passive:!1},B=oe(0),E=er(),y=er(),A=p.measure(20),I={mouse:300,touch:400},L={mouse:500,touch:600},N=S?5:16,W=1,D=0,ee=0,$=!1,U=!1,V=!1,z=!1;function J(){var b=t;E.add(b,"dragstart",function(j){return j.preventDefault()},h).add(b,"touchmove",function(){},h).add(b,"touchend",function(){}).add(b,"touchstart",Q).add(b,"mousedown",Q).add(b,"touchcancel",ne).add(b,"contextmenu",ne).add(b,"click",Y,!0)}function G(){var b=z?document:t;y.add(b,"touchmove",Z,h).add(b,"touchend",ne).add(b,"mousemove",Z,h).add(b,"mouseup",ne)}function K(){E.removeAll(),y.removeAll()}function re(b){var j=b.nodeName||"";return v.indexOf(j)>-1}function O(){var b=S?L:I,j=z?"mouse":"touch";return b[j]}function X(b,j){var te=c.clone().add(sr(b)*-1),R=te.get()===c.min||te.get()===c.max,ae=g.byDistance(b,!S).distance;return S||k(b)<A?ae:!m&&R?ae*.4:x&&j?ae*.5:g.byIndex(te.get(),0).distance}function Q(b){if(z=!a.isTouchEvent(b),!(z&&b.button!==0)&&!re(b.target)){var j=Se(u.get(),l.get())>=2,te=z||!j;$=!0,a.pointerDown(b),B.set(u),u.set(l),f.useBaseMass().useSpeed(80),G(),D=a.readPoint(b),ee=a.readPoint(b,F),i.emit("pointerDown"),te&&(V=!1)}}function Z(b){if(!U&&!z){if(!b.cancelable)return ne(b);var j=a.readPoint(b),te=a.readPoint(b,F),R=Se(j,D),ae=Se(te,ee);if(U=R>ae,!U&&!V)return ne(b)}var me=a.pointerMove(b);!V&&me&&(V=!0),d.start(),u.add(n.apply(me)),b.preventDefault()}function ne(b){var j=g.byDistance(0,!1),te=j.index!==c.get(),R=a.pointerUp(b)*O(),ae=X(n.apply(R),te),me=sa(R,ae),Rn=Se(u.get(),B.get())>=.5,lr=te&&me>.75,Hn=k(R)<A,Vn=lr?10:N,qn=lr?W+2.5*me:W;Rn&&!z&&(V=!0),U=!1,$=!1,y.removeAll(),f.useSpeed(Hn?9:Vn).useMass(qn),C.distance(ae,!S),z=!1,i.emit("pointerUp")}function Y(b){V&&(b.stopPropagation(),b.preventDefault())}function _(){return!V}function T(){return $}var q={addActivationEvents:J,clickAllowed:_,pointerDown:T,removeAllEvents:K};return q}function ga(e){var n=170,t,u;function a(i){return typeof TouchEvent<"u"&&i instanceof TouchEvent}function l(i){return i.timeStamp}function d(i,p){var m=p||e.scroll,S="client".concat(m==="x"?"X":"Y");return(a(i)?i.touches[0]:i)[S]}function C(i){return t=i,u=i,d(i)}function f(i){var p=d(i)-d(u),m=l(i)-l(t)>n;return u=i,m&&(t=i),p}function g(i){if(!t||!u)return 0;var p=d(u)-d(t),m=l(i)-l(t),S=l(i)-l(u)>n,x=p/m,F=m&&!S&&k(x)>.1;return F?x:0}var c={isTouchEvent:a,pointerDown:C,pointerMove:f,pointerUp:g,readPoint:d};return c}function fa(e){function n(u){return e*(u/100)}var t={measure:n};return t}function pa(e,n,t){var u=oa(2),a=oe(0),l=oe(0),d=oe(0),C=0,f=n,g=t;function c(){a.add(l),e.add(a),l.multiply(0)}function i(E){E.divide(g),l.add(E)}function p(E){d.set(E).subtract(e);var y=ta(d.get(),0,100,0,f);return C=sr(d.get()),d.normalize().multiply(y).subtract(a),i(d),B}function m(E){var y=E.get()-e.get(),A=!u(y);return A&&e.set(E),A}function S(){return C}function x(){return v(n)}function F(){return h(t)}function v(E){return f=E,B}function h(E){return g=E,B}var B={direction:S,seek:p,settle:m,update:c,useBaseMass:F,useBaseSpeed:x,useMass:h,useSpeed:v};return B}function ma(e,n,t,u,a){var l=a.measure(10),d=a.measure(50),C=.85,f=!1;function g(){return!(f||!e.reachedAny(t.get())||!e.reachedAny(n.get()))}function c(m){if(g()){var S=e.reachedMin(n.get())?"min":"max",x=k(e[S]-n.get()),F=t.get()-n.get(),v=Math.min(x/d,C);t.subtract(F*v),!m&&k(F)<l&&(t.set(e.constrain(t.get())),u.useSpeed(10).useMass(3))}}function i(m){f=!m}var p={constrain:c,toggleActive:i};return p}function Sa(e,n,t,u){var a=fe(-n+e,t[0]),l=t.map(a.constrain),d=f();function C(){var c=l[0],i=se(l),p=l.lastIndexOf(c),m=l.indexOf(i)+1;return fe(p,m)}function f(){if(n<=e)return[a.max];if(u==="keepSnaps")return l;var c=C(),i=c.min,p=c.max;return l.slice(i,p)}var g={snapsContained:d};return g}function va(e,n,t){var u=a();function a(){var d=n[0],C=se(n),f=t?d-e:C,g=d;return fe(f,g)}var l={limit:u};return l}function ha(e,n,t,u){var a=.1,l=n.min+a,d=n.max+a,C=fe(l,d),f=C.reachedMin,g=C.reachedMax;function c(m){return m===1?g(t.get()):m===-1?f(t.get()):!1}function i(m){if(c(m)){var S=e*(m*-1);u.forEach(function(x){return x.add(S)})}}var p={loop:i};return p}function ba(e){var n=e.max,t=e.length;function u(l){var d=l-n;return d/-t}var a={get:u};return a}function ya(e,n,t,u,a,l,d){var C=e.startEdge,f=e.endEdge,g=l.groupSlides,c=m().map(n.measure),i=S(),p=x();function m(){return g(u).map(function(v){return se(v)[f]-v[0][C]}).map(k)}function S(){return u.map(function(v){return t[C]-v[C]}).map(function(v){return-k(v)})}function x(){var v=0,h=se(i)-se(a);return g(i).map(function(B){return B[0]}).map(function(B,E,y){var A=!E,I=E===rr(y);return d&&A?v:d&&I?h:B+c[E]})}var F={snaps:i,snapsAligned:p};return F}function Fa(e,n,t,u,a){var l=u.reachedAny,d=u.removeOffset,C=u.constrain;function f(S){return S.concat().sort(function(x,F){return k(x)-k(F)})[0]}function g(S){var x=e?d(S):C(S),F=n.map(function(h){return h-x}).map(function(h){return c(h,0)}).map(function(h,B){return{diff:h,index:B}}).sort(function(h,B){return k(h.diff)-k(B.diff)}),v=F[0].index;return{index:v,distance:x}}function c(S,x){var F=[S,S+t,S-t];if(!e)return F[0];if(!x)return f(F);var v=F.filter(function(h){return sr(h)===x});return f(v)}function i(S,x){var F=n[S]-a.get(),v=c(F,x);return{index:S,distance:v}}function p(S,x){var F=a.get()+S,v=g(F),h=v.index,B=v.distance,E=!e&&l(F);if(!x||E)return{index:h,distance:S};var y=n[h]-B,A=S+c(y,0);return{index:h,distance:A}}var m={byDistance:p,byIndex:i,shortcut:c};return m}function wa(e,n,t,u,a,l){function d(c){var i=c.distance,p=c.index!==n.get();i&&(e.start(),a.add(i)),p&&(t.set(n.get()),n.set(c.index),l.emit("select"))}function C(c,i){var p=u.byDistance(c,i);d(p)}function f(c,i){var p=n.clone().set(c),m=u.byIndex(p.get(),i);d(m)}var g={distance:C,index:f};return g}function kn(e,n,t){var u=e.scroll==="x"?d:C,a=t.style,l=!1;function d(p){return"translate3d(".concat(p,"px,0px,0px)")}function C(p){return"translate3d(0px,".concat(p,"px,0px)")}function f(p){l||(a.transform=u(n.apply(p.get())))}function g(p){l=!p}function c(){l||(a.transform="",t.getAttribute("style")||t.removeAttribute("style"))}var i={clear:c,to:f,toggleActive:g};return i}function Ba(e,n,t,u,a,l,d,C,f){var g=ve(a),c=ve(a).reverse(),i=x().concat(F());function p(y,A){return y.reduce(function(I,L){return I-a[L]},A)}function m(y,A){return y.reduce(function(I,L){var N=p(I,A);return N>0?I.concat([L]):I},[])}function S(y,A){var I=A==="start",L=I?-u:u,N=d.findSlideBounds([L]);return y.map(function(W){var D=I?0:-u,ee=I?u:0,$=N.filter(function(K){return K.index===W})[0],U=$[I?"end":"start"],V=oe(-1),z=oe(-1),J=kn(e,n,f[W]),G=function(){return V.set(C.get()>U?D:ee)};return{index:W,location:z,translate:J,target:G}})}function x(){var y=l[0]-1,A=m(c,y);return S(A,"end")}function F(){var y=t-l[0]-1,A=m(g,y);return S(A,"start")}function v(){return i.every(function(y){var A=y.index,I=g.filter(function(L){return L!==A});return p(I,t)<=.1})}function h(){i.forEach(function(y){var A=y.target,I=y.translate,L=y.location,N=A();N.get()!==L.get()&&(N.get()===0?I.clear():I.to(N),L.set(N))})}function B(){i.forEach(function(y){return y.translate.clear()})}var E={canLoop:v,clear:B,loop:h,loopPoints:i};return E}function Ea(e,n,t,u,a,l,d){var C=a.removeOffset,f=a.constrain,g=.5,c=l?[0,n,-n]:[0],i=m(c,d);function p(F){var v=F||0;return t.map(function(h){var B=fe(g,h-g);return B.constrain(h*v)})}function m(F,v){var h=F||c,B=p(v);return h.reduce(function(E,y){var A=u.map(function(I,L){return{start:I-t[L]+B[L]+y,end:I+e-B[L]+y,index:L}});return E.concat(A)},[])}function S(F,v){var h=l?C(F):f(F),B=v||i;return B.reduce(function(E,y){var A=y.index,I=y.start,L=y.end,N=E.indexOf(A)!==-1,W=I<h&&L>h;return!N&&W?E.concat([A]):E},[])}var x={check:S,findSlideBounds:m};return x}function Aa(e,n,t,u,a){var l=e.measureSize,d=e.startEdge,C=e.endEdge,f=t[0]&&a,g=m(),c=S(),i=t.map(l),p=x();function m(){if(!f)return 0;var v=t[0];return k(n[d]-v[d])}function S(){if(!f)return 0;var v=window.getComputedStyle(se(u));return parseFloat(v.getPropertyValue("margin-".concat(C)))}function x(){return t.map(function(v,h,B){var E=!h,y=h===rr(B);return E?i[h]+g:y?i[h]+c:B[h+1][d]-v[d]}).map(k)}var F={slideSizes:i,slideSizesWithGaps:p};return F}function xa(e,n,t){var u=ur(t);function a(f,g){return ve(f).filter(function(c){return c%g===0}).map(function(c){return f.slice(c,c+g)})}function l(f){return ve(f).reduce(function(g,c){var i=n.slice(se(g),c+1),p=i.reduce(function(m,S){return m+S},0);return!c||p>e?g.concat(c):g},[]).map(function(g,c,i){return f.slice(g,i[c+1])})}function d(f){return u?a(f,t):l(f)}var C={groupSlides:d};return C}function Da(e,n,t,u,a){var l=u.align,d=u.axis,C=u.direction,f=u.startIndex,g=u.inViewThreshold,c=u.loop,i=u.speed,p=u.dragFree,m=u.slidesToScroll,S=u.skipSnaps,x=u.containScroll,F=n.getBoundingClientRect(),v=t.map(function(ae){return ae.getBoundingClientRect()}),h=ca(C),B=da(d,C),E=B.measureSize(F),y=fa(E),A=ia(l,E),I=!c&&x!=="",L=c||x!=="",N=Aa(B,F,v,t,L),W=N.slideSizes,D=N.slideSizesWithGaps,ee=xa(E,D,m),$=ya(B,A,F,v,D,ee,I),U=$.snaps,V=$.snapsAligned,z=-se(U)+se(D),J=Sa(E,z,V,x).snapsContained,G=I?J:V,K=va(z,G,c).limit,re=On(rr(G),f,c),O=re.clone(),X=ve(t),Q=function(){c||R.scrollBounds.constrain(R.dragHandler.pointerDown()),R.scrollBody.seek(_).update();var ae=R.scrollBody.settle(_);ae&&!R.dragHandler.pointerDown()&&(R.animation.stop(),a.emit("settle")),ae||a.emit("scroll"),c&&(R.scrollLooper.loop(R.scrollBody.direction()),R.slideLooper.loop()),R.translate.to(Y),R.animation.proceed()},Z=la(Q),ne=G[re.get()],Y=oe(ne),_=oe(ne),T=pa(Y,i,1),q=Fa(c,G,z,K,_),b=wa(Z,re,O,q,_,a),j=Ea(E,z,W,U,K,c,g),te=Ca(B,h,e,_,ga(B),Y,Z,b,T,q,re,a,y,c,p,S),R={containerRect:F,slideRects:v,animation:Z,axis:B,direction:h,dragHandler:te,eventStore:er(),percentOfView:y,index:re,indexPrevious:O,limit:K,location:Y,options:u,scrollBody:T,scrollBounds:ma(K,Y,_,T,y),scrollLooper:ha(z,K,Y,[Y,_]),scrollProgress:ba(K),scrollSnaps:G,scrollTarget:q,scrollTo:b,slideLooper:Ba(B,h,E,z,D,G,j,Y,t),slidesToScroll:ee,slidesInView:j,slideIndexes:X,target:_,translate:kn(B,h,n)};return R}function _a(){var e={};function n(d){return e[d]||[]}function t(d){return n(d).forEach(function(C){return C(d)}),l}function u(d,C){return e[d]=n(d).concat([C]),l}function a(d,C){return e[d]=n(d).filter(function(f){return f!==C}),l}var l={emit:t,off:a,on:u};return l}var Ia={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function or(){function e(a,l){return Mn(a,l||{})}function n(a,l){var d=JSON.stringify(le(a.breakpoints||{})),C=JSON.stringify(le(l.breakpoints||{}));return d!==C?!1:Nn(a,l)}function t(a){var l=a.breakpoints||{},d=le(l).filter(function(C){return window.matchMedia(C).matches}).map(function(C){return l[C]}).reduce(function(C,f){return e(C,f)},{});return e(a,d)}var u={merge:e,areEqual:n,atMedia:t};return u}function Pa(){var e=or(),n=e.atMedia,t=e.areEqual,u=[],a=[];function l(){return a.some(function(c){return c()})}function d(c){var i=n(c.options);return function(){return!t(i,n(c.options))}}function C(c,i){return a=c.map(d),u=c.filter(function(p){return n(p.options).active}),u.forEach(function(p){return p.init(i)}),c.reduce(function(p,m){var S;return Object.assign(p,(S={},S[m.name]=m,S))},{})}function f(){u=u.filter(function(c){return c.destroy()})}var g={init:C,destroy:f,haveChanged:l};return g}function de(e,n,t){var u=er(),a=or(),l=Pa(),d=_a(),C=d.on,f=d.off,g=y,c=!1,i,p=a.merge(Ia,de.globalOptions),m=a.merge(p),S=[],x,F=0,v,h;function B(){var _=m.container,T=m.slides,q=gr(_)?e.querySelector(_):_;v=q||e.children[0];var b=gr(T)?v.querySelectorAll(T):T;h=[].slice.call(b||v.children)}function E(_,T){if(!c){if(p=a.merge(p,_),m=a.atMedia(p),B(),i=Da(e,v,h,m,d),F=i.axis.measureSize(e.getBoundingClientRect()),!m.active)return A();if(i.translate.to(i.location),S=T||S,x=l.init(S,Y),m.loop){if(!i.slideLooper.canLoop()){A(),E({loop:!1},T),p=a.merge(p,{loop:!0});return}i.slideLooper.loop()}m.draggable&&v.offsetParent&&h.length&&i.dragHandler.addActivationEvents()}}function y(_,T){var q=G();A(),E(a.merge({startIndex:q},_),T),d.emit("reInit")}function A(){i.dragHandler.removeAllEvents(),i.animation.stop(),i.eventStore.removeAll(),i.translate.clear(),i.slideLooper.clear(),l.destroy()}function I(){c||(c=!0,u.removeAll(),A(),d.emit("destroy"))}function L(){var _=a.atMedia(p),T=!a.areEqual(_,m),q=i.axis.measureSize(e.getBoundingClientRect()),b=F!==q,j=l.haveChanged();(b||T||j)&&y(),d.emit("resize")}function N(_){var T=i[_?"target":"location"].get(),q=m.loop?"removeOffset":"constrain";return i.slidesInView.check(i.limit[q](T))}function W(_){var T=N(_);return i.slideIndexes.filter(function(q){return T.indexOf(q)===-1})}function D(_,T,q){!m.active||c||(i.scrollBody.useBaseMass().useSpeed(T?100:m.speed),i.scrollTo.index(_,q||0))}function ee(_){var T=i.index.clone().add(1);D(T.get(),_===!0,-1)}function $(_){var T=i.index.clone().add(-1);D(T.get(),_===!0,1)}function U(){var _=i.index.clone().add(1);return _.get()!==G()}function V(){var _=i.index.clone().add(-1);return _.get()!==G()}function z(){return i.scrollSnaps.map(i.scrollProgress.get)}function J(){return i.scrollProgress.get(i.location.get())}function G(){return i.index.get()}function K(){return i.indexPrevious.get()}function re(){return i.dragHandler.clickAllowed()}function O(){return x}function X(){return i}function Q(){return e}function Z(){return v}function ne(){return h}var Y={canScrollNext:U,canScrollPrev:V,clickAllowed:re,containerNode:Z,internalEngine:X,destroy:I,off:f,on:C,plugins:O,previousScrollSnap:K,reInit:g,rootNode:Q,scrollNext:ee,scrollPrev:$,scrollProgress:J,scrollSnapList:z,scrollTo:D,selectedScrollSnap:G,slideNodes:ne,slidesInView:N,slidesNotInView:W};return E(n,t),u.add(window,"resize",L),setTimeout(function(){return d.emit("init")},0),Y}de.globalOptions=void 0;de.optionsHandler=or;function La(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function pr(e){return e.concat().sort(function(n,t){return n.name>t.name?1:-1}).map(function(n){return n.options})}function za(e,n){if(e.length!==n.length)return!1;var t=de.optionsHandler().areEqual,u=pr(e),a=pr(n);return u.every(function(l,d){var C=a[d];return t(l,C)})}function ir(e,n){e===void 0&&(e={}),n===void 0&&(n=[]);var t=M.useRef(de.optionsHandler()),u=M.useRef(e),a=M.useRef(n),l=M.useState(),d=l[0],C=l[1],f=M.useState(),g=f[0],c=f[1],i=M.useCallback(function(){d&&d.reInit(u.current,a.current)},[d]);return M.useEffect(function(){if(La()&&g){de.globalOptions=ir.globalOptions;var p=de(g,u.current,a.current);return C(p),function(){return p.destroy()}}else C(void 0)},[g,C]),M.useEffect(function(){t.current.areEqual(u.current,e)||(u.current=e,i())},[e,i]),M.useEffect(function(){za(a.current,n)||(a.current=n,i())},[n,i]),[c,d]}ir.globalOptions=void 0;const[Ta,ue]=Un({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),Ma=({index:e,defaultIndex:n=0,onChange:t,align:u="center",orientation:a="horizontal",autoplay:l=!1,stopMouseEnterAutoplay:d=!0,loop:C=!0,speed:f=10,delay:g=4e3,gap:c="md",slidesToScroll:i=1,draggable:p=!0,dragFree:m=!1,inViewThreshold:S=0,skipSnaps:x=!1,containScroll:F="",slideSize:v="100%",includeGapInSize:h=!0,onScrollProgress:B,children:E,...y})=>{const A=Kn(y,$n),[I,L]=Wn({value:e,defaultValue:n,onChange:t}),N=a==="vertical",[W,D]=ir({axis:N?"y":"x",startIndex:n,loop:C,align:u,slidesToScroll:i,draggable:p,dragFree:m,speed:f,inViewThreshold:S,skipSnaps:x,containScroll:F}),[ee,$]=M.useState([]),[U,V]=M.useState(!1),z=M.useRef(void 0),J=M.useCallback(()=>{if(!D)return;const O=Math.round(Math.max(0,Math.min(1,D.scrollProgress()))*100);B==null||B(O)},[D,B]),G=M.useCallback(()=>{if(!D)return;const O=D.selectedScrollSnap();L(O)},[D,L]);M.useEffect(()=>{const O=U&&d,X=!(D!=null&&D.canScrollNext());return D&&l&&!O&&!X?z.current=setInterval(()=>{D.scrollNext()},g):(z.current&&clearInterval(z.current),z.current=void 0),()=>{z.current&&clearInterval(z.current)}},[l,g,d,D,U,C,I]),nr(()=>{if(!D)return;D.reInit();const X=D.scrollSnapList().map((Q,Z)=>Z);$(X)},[M.Children.toArray(E).length,u,a,C,f,c,i,p,m,S,x,F,v,h]),nr(()=>{if(!D)return;const X=D.scrollSnapList().map((Q,Z)=>Z);$(X)},[D]),nr(()=>{if(D)return D.on("select",G),D.on("scroll",J),J(),()=>{D.off("select",G),D.off("scroll",J)}},[D,J]);const K=M.useCallback((O={},X=null)=>({...A[0],...O,ref:X,onMouseEnter:Ze(O.onMouseEnter,()=>{V(!0)}),onMouseLeave:Ze(O.onMouseLeave,()=>{V(!1)})}),[A]),re=M.useCallback((O={})=>({...A[1],...O,ref:W}),[A,W]);return{carousel:D,children:E,indexes:ee,selectedIndex:I,orientation:a,slideSize:v,gap:c,slidesToScroll:i,includeGapInSize:h,getContainerProps:K,getSlidesProps:re}},Na=({index:e})=>{const{selectedIndex:n,slidesToScroll:t}=ue();e=Math.floor((e??0)/(t??1));const u=e===n;return{getSlideProps:M.useCallback((l={})=>({...l,"data-index":e,"data-selected":zn(u)}),[u,e])}},Gn=({operation:e,...n})=>{const{carousel:t}=ue(),u=e==="prev",a=n.disabled??n.isDisabled??(u?!(t!=null&&t.canScrollPrev()):!(t!=null&&t.canScrollNext())),l=M.useCallback(()=>{t&&(u?t.scrollPrev():t.scrollNext())},[t,u]);return{getControlProps:M.useCallback((C={},f=null)=>({...C,ref:f,disabled:a,onClick:Ze(C.onClick,l)}),[a,l])}},Oa=()=>{const{selectedIndex:e,carousel:n,indexes:t}=ue(),u=M.useCallback((l,d)=>{n&&(l.stopPropagation(),n.scrollTo(d))},[n]),a=M.useCallback(({index:l,...d})=>{const C=l===e;return{"aria-label":`Go to ${l+1} slide`,...d,key:l,"data-index":l,"data-selected":zn(C),onClick:Ze(d.onClick,f=>u(f,l))}},[u,e]);return{indexes:t,getIndicatorProps:a}},P=ie(({h:e,height:n,minH:t,minHeight:u,...a},l)=>{const d=H(a.orientation),C=H(a.align),f=H(a.autoplay),g=H(a.stopMouseEnterAutoplay),c=H(a.loop),i=H(a.speed),p=H(a.delay),m=H(a.slidesToScroll),S=H(a.draggable),x=H(a.dragFree),F=H(a.inViewThreshold),v=H(a.skipSnaps),h=H(a.containScroll),B=H(a.includeGapInSize),E=Cr("spaces",H(a.gap))??H(a.gap),y=Cr("sizes",H(a.slideSize))??H(a.slideSize),[A,I]=ra("Carousel",{...a,orientation:d,align:C,autoplay:f,stopMouseEnterAutoplay:g,loop:c,speed:i,delay:p,slidesToScroll:m,draggable:S,dragFree:x,inViewThreshold:F,skipSnaps:v,containScroll:h,includeGapInSize:B,gap:E,slideSize:y}),{className:L,innerProps:N,withControls:W=!0,controlProps:D,controlPrevProps:ee,controlNextProps:$,withIndicators:U=!0,indicatorsProps:V,...z}=na(I),J=H(W),G=H(U),{getContainerProps:K,getSlidesProps:re,children:O,...X}=Ma({...z}),Q=Jn(O),[Z]=ar(Q,Xe),[ne]=ar(Q,Ye),[Y]=ar(Q,Qe),_=Xn(Q,s),T=Yn(Q,Xe,Ye,Qe,s),q=_.map((b,j)=>M.cloneElement(b,{index:j}));return e??(e=n),t??(t=u),r(Ta,{value:{styles:A,...X},children:w(ce.div,{className:Ce("ui-carousel",L),__css:{position:"relative",h:"fit-content",...A.container},...K({},l),children:[Z??(J?r(Xe,{...D,...ee}):null),ne??(J?r(Ye,{...D,...$}):null),r(ka,{...re({...Qn({h:e,minH:t}),...N}),children:q}),Y??(G?r(Qe,{...V}):null),T]})})}),ka=ie(({...e},n)=>{const t={w:"100%",h:"fit-content",overflow:"hidden"};return r(ce.div,{ref:n,className:"ui-carousel__sliders",__css:t,children:r(Ga,{...e})})}),Ga=({...e})=>{const{orientation:n,includeGapInSize:t,gap:u,styles:a}=ue(),l={display:"flex",flexDirection:n==="vertical"?"column":"row",...a.inner,...t?{[n==="vertical"?"mb":"mr"]:`-${u}`}:{}};return r(ce.div,{className:"ui-carousel__sliders__inner",__css:l,...e})},s=ie(({className:e,size:n,...t},u)=>{const{slideSize:a,includeGapInSize:l,orientation:d,gap:C}=ue(),{getSlideProps:f}=Na(t);n??(n=a);const g={position:"relative",flex:`0 0 ${n}`,...l?{[d==="vertical"?"pb":"pr"]:C}:{[d==="vertical"?"mb":"mr"]:C}};return r(ce.div,{className:Ce("ui-carousel__slide",e),__css:g,...f({}),children:r(ja,{ref:u,...t})})}),ja=ie(({...e},n)=>r(ce.div,{ref:n,className:"ui-carousel__slide__inner",w:"100%",h:"100%",...e})),Xe=ie(({className:e,...n},t)=>{const{orientation:u}=ue(),{getControlProps:a}=Gn({operation:"prev"});return r(jn,{operation:"prev",className:Ce("ui-carousel__control--prev",e),"aria-label":"Go to previous slide",icon:r(Tn,{__css:{fontSize:"1.5em",transform:u==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),...a(n,t)})}),Ye=ie(({className:e,...n},t)=>{const{orientation:u}=ue(),{getControlProps:a}=Gn({operation:"next"});return r(jn,{operation:"next",className:Ce("ui-carousel__control--next",e),"aria-label":"Go to next slide",icon:r(Tn,{__css:{fontSize:"1.5em",transform:u==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),...a(n,t)})}),jn=ie(({className:e,operation:n,...t},u)=>{const{styles:a}=ue(),l=Zn("whiteAlpha","blackAlpha"),d={position:"absolute",zIndex:"kurillin",...a.control,...a[n]};return r(ea,{ref:u,className:Ce("ui-carousel__control",e),colorScheme:l,isRounded:!0,__css:d,...t})}),Qe=ie(({className:e,component:n,...t},u)=>{const{selectedIndex:a,orientation:l,styles:d}=ue(),{indexes:C,getIndicatorProps:f}=Oa(),g={position:"absolute",zIndex:"kurillin",display:"flex",justifyContent:"center",...d.indicators,...l==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return r(ce.div,{ref:u,className:Ce("ui-carousel__indicators",e),__css:g,...t,children:C.map(c=>{const i=c===a;if(typeof n=="function"){const p=n({index:c,isSelected:i});if(!p)return null;const m=f({...p.props,index:c});return M.cloneElement(p,m)}else{const{key:p,...m}=f({index:c});return r(Ra,{...m},p)}})})}),Ra=({className:e,...n})=>{const{styles:t}=ue(),u={...t.indicator};return r(ce.button,{type:"button",tabIndex:-1,className:Ce("ui-carousel__indicators__indicator",e),__css:u,...n})},ht={title:"Components / Data Display / Carousel",component:P},xe=()=>w(P,{children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),De=()=>w(pe,{children:[w(P,{size:"sm",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(P,{size:"md",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(P,{size:"lg",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(P,{size:"xl",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]})]}),_e=()=>w(pe,{children:[w(P,{orientation:"horizontal",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(P,{orientation:"vertical",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]})]}),Ie=()=>w(P,{defaultIndex:1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Pe=()=>w(P,{gap:0,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Le=()=>w(P,{speed:50,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),ze=()=>w(P,{slideSize:"50%",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",size:"100%",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Te=()=>w(pe,{children:[w(P,{slideSize:"50%",align:"center",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(P,{slideSize:"50%",align:"start",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(P,{slideSize:"50%",align:"end",children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]})]}),Me=()=>w(P,{slideSize:"33.3%",slidesToScroll:3,loop:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"}),r(s,{as:o,bg:"primary",children:"5"}),r(s,{as:o,bg:"secondary",children:"6"}),r(s,{as:o,bg:"danger",children:"7"}),r(s,{as:o,bg:"primary",children:"8"}),r(s,{as:o,bg:"secondary",children:"9"})]}),Ne=()=>w(P,{slideSize:"50%",align:"start",slidesToScroll:2,h:"auto",controlProps:{colorScheme:"whiteAlpha",color:"white"},children:[w(s,{as:he,variant:"subtle",children:[r(be,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),w(ye,{children:[r(Be,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Ee,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(Fe,{children:r(Ae,{colorScheme:"primary",children:"Wikipedia"})})]}),w(s,{as:he,variant:"subtle",children:[r(be,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),w(ye,{children:[r(Be,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Ee,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(Fe,{children:r(Ae,{colorScheme:"primary",children:"Wikipedia"})})]}),w(s,{as:he,variant:"subtle",children:[r(be,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),w(ye,{children:[r(Be,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Ee,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(Fe,{children:r(Ae,{colorScheme:"primary",children:"Wikipedia"})})]}),w(s,{as:he,variant:"subtle",children:[r(be,{justifyContent:"center",children:r(we,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),w(ye,{children:[r(Be,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),r(Ee,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),r(Fe,{children:r(Ae,{colorScheme:"primary",children:"Wikipedia"})})]})]}),Oe=()=>w(P,{autoplay:!0,loop:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),ke=()=>w(P,{autoplay:!0,delay:1e3,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Ge=()=>w(P,{dragFree:!0,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),je=()=>{const[e,n]=M.useState(0);return w(pe,{children:[w(P,{loop:!1,dragFree:!0,onScrollProgress:n,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),r(aa,{value:e,colorScheme:"gray"})]})},Re=()=>w(P,{slideSize:"50%",includeGapInSize:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),He=()=>w(P,{loop:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Ve=()=>w(P,{draggable:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),qe=()=>w(P,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),We=()=>w(P,{withControls:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Ue=()=>w(P,{withIndicators:!1,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),Ke=()=>{const[e,n]=M.useState(0);return w(P,{draggable:!1,index:e,onChange:n,children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]})},$e=()=>w(pe,{children:[w(P,{controlProps:{icon:r(ge,{icon:Ln})},children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(P,{controlPrevProps:{icon:r(ge,{icon:dr})},children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(P,{controlNextProps:{icon:r(ge,{icon:cr})},children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(P,{children:[r(Xe,{icon:r(ge,{icon:dr})}),r(Ye,{icon:r(ge,{icon:cr})}),r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]})]}),Je=()=>w(pe,{children:[w(P,{indicatorsProps:{bottom:"8",component:({isSelected:e})=>r(ge,{icon:Ln,color:e?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer"})},children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"})]}),w(P,{children:[r(s,{as:o,bg:"primary",children:"1"}),r(s,{as:o,bg:"secondary",children:"2"}),r(s,{as:o,bg:"warning",children:"3"}),r(s,{as:o,bg:"danger",children:"4"}),r(Qe,{sx:{"& > *":{w:"4",_selected:{w:"12"},transitionProperty:"width",transitionDuration:"slower"}}})]})]});var mr,Sr,vr;xe.parameters={...xe.parameters,docs:{...(mr=xe.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
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
}`,...(vr=(Sr=xe.parameters)==null?void 0:Sr.docs)==null?void 0:vr.source}}};var hr,br,yr;De.parameters={...De.parameters,docs:{...(hr=De.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
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
}`,...(yr=(br=De.parameters)==null?void 0:br.docs)==null?void 0:yr.source}}};var Fr,wr,Br;_e.parameters={..._e.parameters,docs:{...(Fr=_e.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
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
}`,...(Br=(wr=_e.parameters)==null?void 0:wr.docs)==null?void 0:Br.source}}};var Er,Ar,xr;Ie.parameters={...Ie.parameters,docs:{...(Er=Ie.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
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
}`,...(xr=(Ar=Ie.parameters)==null?void 0:Ar.docs)==null?void 0:xr.source}}};var Dr,_r,Ir;Pe.parameters={...Pe.parameters,docs:{...(Dr=Pe.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
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
}`,...(Ir=(_r=Pe.parameters)==null?void 0:_r.docs)==null?void 0:Ir.source}}};var Pr,Lr,zr;Le.parameters={...Le.parameters,docs:{...(Pr=Le.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
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
}`,...(zr=(Lr=Le.parameters)==null?void 0:Lr.docs)==null?void 0:zr.source}}};var Tr,Mr,Nr;ze.parameters={...ze.parameters,docs:{...(Tr=ze.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
}`,...(Nr=(Mr=ze.parameters)==null?void 0:Mr.docs)==null?void 0:Nr.source}}};var Or,kr,Gr;Te.parameters={...Te.parameters,docs:{...(Or=Te.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
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
}`,...(Gr=(kr=Te.parameters)==null?void 0:kr.docs)==null?void 0:Gr.source}}};var jr,Rr,Hr;Me.parameters={...Me.parameters,docs:{...(jr=Me.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
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
}`,...(Hr=(Rr=Me.parameters)==null?void 0:Rr.docs)==null?void 0:Hr.source}}};var Vr,qr,Wr;Ne.parameters={...Ne.parameters,docs:{...(Vr=Ne.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
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
}`,...(Wr=(qr=Ne.parameters)==null?void 0:qr.docs)==null?void 0:Wr.source}}};var Ur,Kr,$r;Oe.parameters={...Oe.parameters,docs:{...(Ur=Oe.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
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
}`,...($r=(Kr=Oe.parameters)==null?void 0:Kr.docs)==null?void 0:$r.source}}};var Jr,Xr,Yr;ke.parameters={...ke.parameters,docs:{...(Jr=ke.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
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
}`,...(Yr=(Xr=ke.parameters)==null?void 0:Xr.docs)==null?void 0:Yr.source}}};var Qr,Zr,en;Ge.parameters={...Ge.parameters,docs:{...(Qr=Ge.parameters)==null?void 0:Qr.docs,source:{originalSource:`() => {
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
}`,...(en=(Zr=Ge.parameters)==null?void 0:Zr.docs)==null?void 0:en.source}}};var rn,nn,an;je.parameters={...je.parameters,docs:{...(rn=je.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
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
}`,...(an=(nn=je.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var tn,un,sn;Re.parameters={...Re.parameters,docs:{...(tn=Re.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
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
}`,...(sn=(un=Re.parameters)==null?void 0:un.docs)==null?void 0:sn.source}}};var on,ln,dn;He.parameters={...He.parameters,docs:{...(on=He.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
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
}`,...(dn=(ln=He.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var cn,Cn,gn;Ve.parameters={...Ve.parameters,docs:{...(cn=Ve.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
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
}`,...(gn=(Cn=Ve.parameters)==null?void 0:Cn.docs)==null?void 0:gn.source}}};var fn,pn,mn;qe.parameters={...qe.parameters,docs:{...(fn=qe.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
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
}`,...(mn=(pn=qe.parameters)==null?void 0:pn.docs)==null?void 0:mn.source}}};var Sn,vn,hn;We.parameters={...We.parameters,docs:{...(Sn=We.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
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
}`,...(hn=(vn=We.parameters)==null?void 0:vn.docs)==null?void 0:hn.source}}};var bn,yn,Fn;Ue.parameters={...Ue.parameters,docs:{...(bn=Ue.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
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
}`,...(Fn=(yn=Ue.parameters)==null?void 0:yn.docs)==null?void 0:Fn.source}}};var wn,Bn,En;Ke.parameters={...Ke.parameters,docs:{...(wn=Ke.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
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
}`,...(En=(Bn=Ke.parameters)==null?void 0:Bn.docs)==null?void 0:En.source}}};var An,xn,Dn;$e.parameters={...$e.parameters,docs:{...(An=$e.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
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
}`,...(Dn=(xn=$e.parameters)==null?void 0:xn.docs)==null?void 0:Dn.source}}};var _n,In,Pn;Je.parameters={...Je.parameters,docs:{...(_n=Je.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(Pn=(In=Je.parameters)==null?void 0:In.docs)==null?void 0:Pn.source}}};const bt=["basic","withSize","withOrientation","withDefaultIndex","withGap","withSpeed","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","customControl","customControlButton","customIndicators"];export{bt as __namedExportsOrder,xe as basic,Ke as customControl,$e as customControlButton,Je as customIndicators,ht as default,We as disabledControlButton,Ve as disabledDraggable,Re as disabledIncludeGapInSize,Ue as disabledIndicators,He as disabledLoop,qe as disabledStopMouseEnterAutoplay,Te as withAlign,Oe as withAutoplay,Ne as withCard,Ie as withDefaultIndex,ke as withDelay,Ge as withDragFree,Pe as withGap,_e as withOrientation,je as withScrollProgress,De as withSize,ze as withSlideSize,Me as withSlidesToScroll,Le as withSpeed};
