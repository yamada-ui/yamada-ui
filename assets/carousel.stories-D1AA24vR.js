import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as Ce,f as In,E as ur,b as lr}from"./icon-BQcQed63.js";import{r as T}from"./index-uCp2LrAq.js";import{u as dr}from"./index-ZgcAASpW.js";import{u as G}from"./index-CEbtGM79.js";import{u as Rn}from"./index-Dc2KQwVC.js";import{l as qn,a0 as Wn,a1 as Xn,f as er,h as Ye,d as Pn,t as Un,x as rr,Y as Qn,a4 as Kn,b as de,c as ce,w as Jn,G as Yn}from"./factory-Bf0a1C4O.js";import{f as ie}from"./forward-ref-Dr5Hqd9a.js";import{c as zn}from"./icon-BtMBNqBn.js";import{I as $n}from"./icon-button-De9wLvxW.js";import{a as Zn}from"./use-component-style-C1oydc60.js";import{o as ea,e as ra}from"./theme-provider-CfMKAtcZ.js";import{P as na}from"./progress-BjHRI_oU.js";import{C as i}from"./center-CSFPO4u1.js";import{C as Se,a as ve,b as he,c as be}from"./card-Cm5xeGDt.js";import{I as xe}from"./image-Dk7tIV7f.js";import{H as ye}from"./heading-DGjno4GO.js";import{T as je}from"./text-BOhk0htq.js";import{B as Fe}from"./button-C5HSAH_Q.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bz6F23rc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-DpNfAtp1.js";import"./index-CBqzus2r.js";import"./index-DnMy6eVY.js";import"./number-49BHn0Cl.js";import"./use-image-B2-OjlGF.js";import"./use-ripple-BZmEDmbU.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-Bi86PhT5.js";import"./loading-CD9zg-8p.js";function aa(r,n,s,t,a){return t+(a-t)*((r-n)/(s-n))}function ar(r){return typeof r=="number"}function cr(r){return typeof r=="string"}function nr(r){return Object.prototype.toString.call(r)==="[object Object]"}function sa(r){return Array.isArray(r)}function Cr(r){return nr(r)||sa(r)}function O(r){return Math.abs(r)}function sr(r){return r?r/O(r):0}function pe(r,n){return O(r-n)}function ta(r,n){if(r===0||n===0||O(r)<=O(n))return 0;var s=pe(O(r),O(n));return O(s/r)}function oa(r){var n=Math.pow(10,r);return function(s){return Math.round(s*n)/n}}function me(r){return ue(r).map(Number)}function te(r){return r[Ze(r)]}function Ze(r){return Math.max(0,r.length-1)}function ue(r){return Object.keys(r)}function kn(r,n){return[r,n].reduce(function(s,t){return ue(t).forEach(function(a){var l=s[a],d=t[a],C=nr(l)&&nr(d);s[a]=C?kn(l,d):d}),s},{})}function Tn(r,n){var s=ue(r),t=ue(n);return s.length!==t.length?!1:s.every(function(a){var l=r[a],d=n[a];return typeof l=="function"?"".concat(l)==="".concat(d):!Cr(l)||!Cr(d)?l===d:Tn(l,d)})}function ia(r,n){var s={start:t,center:a,end:l};function t(){return 0}function a(g){return l(g)/2}function l(g){return n-g}function d(){return n*Number(r)}function C(g){return ar(r)?d():s[r](g)}var f={measure:C};return f}function ua(r){var n=0;function s(d,C){return function(){d===!!n&&C()}}function t(){n=window.requestAnimationFrame(r)}function a(){window.cancelAnimationFrame(n),n=0}var l={proceed:s(!0,t),start:s(!1,t),stop:s(!0,a)};return l}function la(r,n){var s=r==="y"?"y":"x",t=r==="y"?"x":"y",a=C(),l=f();function d(c){var u=c.width,p=c.height;return s==="x"?u:p}function C(){return s==="y"?"top":n==="rtl"?"right":"left"}function f(){return s==="y"?"bottom":n==="rtl"?"left":"right"}var g={scroll:s,cross:t,startEdge:a,endEdge:l,measureSize:d};return g}function ge(r,n){var s=O(r-n);function t(g){return g<r}function a(g){return g>n}function l(g){return t(g)||a(g)}function d(g){return l(g)?t(g)?r:n:g}function C(g){return s?g-s*Math.ceil((g-n)/s):g}var f={length:s,max:n,min:r,constrain:d,reachedAny:l,reachedMax:a,reachedMin:t,removeOffset:C};return f}function _n(r,n,s){var t=ge(0,r),a=t.min,l=t.constrain,d=r+1,C=f(n);function f(S){return s?O((d+S)%d):l(S)}function g(){return C}function c(S){return C=f(S),m}function u(S){return c(g()+S)}function p(){return _n(r,g(),s)}var m={add:u,clone:p,get:g,set:c,min:a,max:r};return m}function da(r){var n=r==="rtl"?-1:1;function s(a){return a*n}var t={apply:s};return t}function $e(){var r=[];function n(a,l,d,C){return C===void 0&&(C={passive:!0}),a.addEventListener(l,d,C),r.push(function(){return a.removeEventListener(l,d,C)}),t}function s(){return r=r.filter(function(a){return a()}),t}var t={add:n,removeAll:s};return t}function oe(r){var n=r;function s(){return n}function t(u){return n=g(u),c}function a(u){return n+=g(u),c}function l(u){return n-=g(u),c}function d(u){return n*=u,c}function C(u){return n/=u,c}function f(){return n!==0&&C(n),c}function g(u){return ar(u)?u:u.get()}var c={add:a,divide:C,get:s,multiply:d,normalize:f,set:t,subtract:l};return c}function ca(r,n,s,t,a,l,d,C,f,g,c,u,p,m,S,E){var y=r.cross,v=["INPUT","SELECT","TEXTAREA"],h={passive:!1},j=oe(0),F=$e(),x=$e(),w=p.measure(20),D={mouse:300,touch:400},P={mouse:500,touch:600},_=S?5:16,q=1,B=0,Z=0,U=!1,W=!1,V=!1,z=!1;function Q(){var b=s;F.add(b,"dragstart",function(L){return L.preventDefault()},h).add(b,"touchmove",function(){},h).add(b,"touchend",function(){}).add(b,"touchstart",Y).add(b,"mousedown",Y).add(b,"touchcancel",re).add(b,"contextmenu",re).add(b,"click",J,!0)}function N(){var b=z?document:s;x.add(b,"touchmove",$,h).add(b,"touchend",re).add(b,"mousemove",$,h).add(b,"mouseup",re)}function X(){F.removeAll(),x.removeAll()}function ee(b){var L=b.nodeName||"";return v.indexOf(L)>-1}function M(){var b=S?P:D,L=z?"mouse":"touch";return b[L]}function K(b,L){var ae=c.clone().add(sr(b)*-1),H=ae.get()===c.min||ae.get()===c.max,ne=g.byDistance(b,!S).distance;return S||O(b)<w?ne:!m&&H?ne*.4:E&&L?ne*.5:g.byIndex(ae.get(),0).distance}function Y(b){if(z=!a.isTouchEvent(b),!(z&&b.button!==0)&&!ee(b.target)){var L=pe(t.get(),l.get())>=2,ae=z||!L;U=!0,a.pointerDown(b),j.set(t),t.set(l),f.useBaseMass().useSpeed(80),N(),B=a.readPoint(b),Z=a.readPoint(b,y),u.emit("pointerDown"),ae&&(V=!1)}}function $(b){if(!W&&!z){if(!b.cancelable)return re(b);var L=a.readPoint(b),ae=a.readPoint(b,y),H=pe(L,B),ne=pe(ae,Z);if(W=H>ne,!W&&!V)return re(b)}var fe=a.pointerMove(b);!V&&fe&&(V=!0),d.start(),t.add(n.apply(fe)),b.preventDefault()}function re(b){var L=g.byDistance(0,!1),ae=L.index!==c.get(),H=a.pointerUp(b)*M(),ne=K(n.apply(H),ae),fe=ta(H,ne),Ln=pe(t.get(),j.get())>=.5,ir=ae&&fe>.75,Hn=O(H)<w,Gn=ir?10:_,Vn=ir?q+2.5*fe:q;Ln&&!z&&(V=!0),W=!1,U=!1,x.removeAll(),f.useSpeed(Hn?9:Gn).useMass(Vn),C.distance(ne,!S),z=!1,u.emit("pointerUp")}function J(b){V&&(b.stopPropagation(),b.preventDefault())}function A(){return!V}function k(){return U}var R={addActivationEvents:Q,clickAllowed:A,pointerDown:k,removeAllEvents:X};return R}function Ca(r){var n=170,s,t;function a(u){return typeof TouchEvent<"u"&&u instanceof TouchEvent}function l(u){return u.timeStamp}function d(u,p){var m=p||r.scroll,S="client".concat(m==="x"?"X":"Y");return(a(u)?u.touches[0]:u)[S]}function C(u){return s=u,t=u,d(u)}function f(u){var p=d(u)-d(t),m=l(u)-l(s)>n;return t=u,m&&(s=u),p}function g(u){if(!s||!t)return 0;var p=d(t)-d(s),m=l(u)-l(s),S=l(u)-l(t)>n,E=p/m,y=m&&!S&&O(E)>.1;return y?E:0}var c={isTouchEvent:a,pointerDown:C,pointerMove:f,pointerUp:g,readPoint:d};return c}function ga(r){function n(t){return r*(t/100)}var s={measure:n};return s}function fa(r,n,s){var t=oa(2),a=oe(0),l=oe(0),d=oe(0),C=0,f=n,g=s;function c(){a.add(l),r.add(a),l.multiply(0)}function u(F){F.divide(g),l.add(F)}function p(F){d.set(F).subtract(r);var x=aa(d.get(),0,100,0,f);return C=sr(d.get()),d.normalize().multiply(x).subtract(a),u(d),j}function m(F){var x=F.get()-r.get(),w=!t(x);return w&&r.set(F),w}function S(){return C}function E(){return v(n)}function y(){return h(s)}function v(F){return f=F,j}function h(F){return g=F,j}var j={direction:S,seek:p,settle:m,update:c,useBaseMass:y,useBaseSpeed:E,useMass:h,useSpeed:v};return j}function pa(r,n,s,t,a){var l=a.measure(10),d=a.measure(50),C=.85,f=!1;function g(){return!(f||!r.reachedAny(s.get())||!r.reachedAny(n.get()))}function c(m){if(g()){var S=r.reachedMin(n.get())?"min":"max",E=O(r[S]-n.get()),y=s.get()-n.get(),v=Math.min(E/d,C);s.subtract(y*v),!m&&O(y)<l&&(s.set(r.constrain(s.get())),t.useSpeed(10).useMass(3))}}function u(m){f=!m}var p={constrain:c,toggleActive:u};return p}function ma(r,n,s,t){var a=ge(-n+r,s[0]),l=s.map(a.constrain),d=f();function C(){var c=l[0],u=te(l),p=l.lastIndexOf(c),m=l.indexOf(u)+1;return ge(p,m)}function f(){if(n<=r)return[a.max];if(t==="keepSnaps")return l;var c=C(),u=c.min,p=c.max;return l.slice(u,p)}var g={snapsContained:d};return g}function Sa(r,n,s){var t=a();function a(){var d=n[0],C=te(n),f=s?d-r:C,g=d;return ge(f,g)}var l={limit:t};return l}function va(r,n,s,t){var a=.1,l=n.min+a,d=n.max+a,C=ge(l,d),f=C.reachedMin,g=C.reachedMax;function c(m){return m===1?g(s.get()):m===-1?f(s.get()):!1}function u(m){if(c(m)){var S=r*(m*-1);t.forEach(function(E){return E.add(S)})}}var p={loop:u};return p}function ha(r){var n=r.max,s=r.length;function t(l){var d=l-n;return d/-s}var a={get:t};return a}function ba(r,n,s,t,a,l,d){var C=r.startEdge,f=r.endEdge,g=l.groupSlides,c=m().map(n.measure),u=S(),p=E();function m(){return g(t).map(function(v){return te(v)[f]-v[0][C]}).map(O)}function S(){return t.map(function(v){return s[C]-v[C]}).map(function(v){return-O(v)})}function E(){var v=0,h=te(u)-te(a);return g(u).map(function(j){return j[0]}).map(function(j,F,x){var w=!F,D=F===Ze(x);return d&&w?v:d&&D?h:j+c[F]})}var y={snaps:u,snapsAligned:p};return y}function xa(r,n,s,t,a){var l=t.reachedAny,d=t.removeOffset,C=t.constrain;function f(S){return S.concat().sort(function(E,y){return O(E)-O(y)})[0]}function g(S){var E=r?d(S):C(S),y=n.map(function(h){return h-E}).map(function(h){return c(h,0)}).map(function(h,j){return{diff:h,index:j}}).sort(function(h,j){return O(h.diff)-O(j.diff)}),v=y[0].index;return{index:v,distance:E}}function c(S,E){var y=[S,S+s,S-s];if(!r)return y[0];if(!E)return f(y);var v=y.filter(function(h){return sr(h)===E});return f(v)}function u(S,E){var y=n[S]-a.get(),v=c(y,E);return{index:S,distance:v}}function p(S,E){var y=a.get()+S,v=g(y),h=v.index,j=v.distance,F=!r&&l(y);if(!E||F)return{index:h,distance:S};var x=n[h]-j,w=S+c(x,0);return{index:h,distance:w}}var m={byDistance:p,byIndex:u,shortcut:c};return m}function ya(r,n,s,t,a,l){function d(c){var u=c.distance,p=c.index!==n.get();u&&(r.start(),a.add(u)),p&&(s.set(n.get()),n.set(c.index),l.emit("select"))}function C(c,u){var p=t.byDistance(c,u);d(p)}function f(c,u){var p=n.clone().set(c),m=t.byIndex(p.get(),u);d(m)}var g={distance:C,index:f};return g}function Mn(r,n,s){var t=r.scroll==="x"?d:C,a=s.style,l=!1;function d(p){return"translate3d(".concat(p,"px,0px,0px)")}function C(p){return"translate3d(0px,".concat(p,"px,0px)")}function f(p){l||(a.transform=t(n.apply(p.get())))}function g(p){l=!p}function c(){l||(a.transform="",s.getAttribute("style")||s.removeAttribute("style"))}var u={clear:c,to:f,toggleActive:g};return u}function ja(r,n,s,t,a,l,d,C,f){var g=me(a),c=me(a).reverse(),u=E().concat(y());function p(x,w){return x.reduce(function(D,P){return D-a[P]},w)}function m(x,w){return x.reduce(function(D,P){var _=p(D,w);return _>0?D.concat([P]):D},[])}function S(x,w){var D=w==="start",P=D?-t:t,_=d.findSlideBounds([P]);return x.map(function(q){var B=D?0:-t,Z=D?t:0,U=_.filter(function(X){return X.index===q})[0],W=U[D?"end":"start"],V=oe(-1),z=oe(-1),Q=Mn(r,n,f[q]),N=function(){return V.set(C.get()>W?B:Z)};return{index:q,location:z,translate:Q,target:N}})}function E(){var x=l[0]-1,w=m(c,x);return S(w,"end")}function y(){var x=s-l[0]-1,w=m(g,x);return S(w,"start")}function v(){return u.every(function(x){var w=x.index,D=g.filter(function(P){return P!==w});return p(D,s)<=.1})}function h(){u.forEach(function(x){var w=x.target,D=x.translate,P=x.location,_=w();_.get()!==P.get()&&(_.get()===0?D.clear():D.to(_),P.set(_))})}function j(){u.forEach(function(x){return x.translate.clear()})}var F={canLoop:v,clear:j,loop:h,loopPoints:u};return F}function Fa(r,n,s,t,a,l,d){var C=a.removeOffset,f=a.constrain,g=.5,c=l?[0,n,-n]:[0],u=m(c,d);function p(y){var v=y||0;return s.map(function(h){var j=ge(g,h-g);return j.constrain(h*v)})}function m(y,v){var h=y||c,j=p(v);return h.reduce(function(F,x){var w=t.map(function(D,P){return{start:D-s[P]+j[P]+x,end:D+r-j[P]+x,index:P}});return F.concat(w)},[])}function S(y,v){var h=l?C(y):f(y),j=v||u;return j.reduce(function(F,x){var w=x.index,D=x.start,P=x.end,_=F.indexOf(w)!==-1,q=D<h&&P>h;return!_&&q?F.concat([w]):F},[])}var E={check:S,findSlideBounds:m};return E}function wa(r,n,s,t,a){var l=r.measureSize,d=r.startEdge,C=r.endEdge,f=s[0]&&a,g=m(),c=S(),u=s.map(l),p=E();function m(){if(!f)return 0;var v=s[0];return O(n[d]-v[d])}function S(){if(!f)return 0;var v=window.getComputedStyle(te(t));return parseFloat(v.getPropertyValue("margin-".concat(C)))}function E(){return s.map(function(v,h,j){var F=!h,x=h===Ze(j);return F?u[h]+g:x?u[h]+c:j[h+1][d]-v[d]}).map(O)}var y={slideSizes:u,slideSizesWithGaps:p};return y}function Ea(r,n,s){var t=ar(s);function a(f,g){return me(f).filter(function(c){return c%g===0}).map(function(c){return f.slice(c,c+g)})}function l(f){return me(f).reduce(function(g,c){var u=n.slice(te(g),c+1),p=u.reduce(function(m,S){return m+S},0);return!c||p>r?g.concat(c):g},[]).map(function(g,c,u){return f.slice(g,u[c+1])})}function d(f){return t?a(f,s):l(f)}var C={groupSlides:d};return C}function Ba(r,n,s,t,a){var l=t.align,d=t.axis,C=t.direction,f=t.startIndex,g=t.inViewThreshold,c=t.loop,u=t.speed,p=t.dragFree,m=t.slidesToScroll,S=t.skipSnaps,E=t.containScroll,y=n.getBoundingClientRect(),v=s.map(function(ne){return ne.getBoundingClientRect()}),h=da(C),j=la(d,C),F=j.measureSize(y),x=ga(F),w=ia(l,F),D=!c&&E!=="",P=c||E!=="",_=wa(j,y,v,s,P),q=_.slideSizes,B=_.slideSizesWithGaps,Z=Ea(F,B,m),U=ba(j,w,y,v,B,Z,D),W=U.snaps,V=U.snapsAligned,z=-te(W)+te(B),Q=ma(F,z,V,E).snapsContained,N=D?Q:V,X=Sa(z,N,c).limit,ee=_n(Ze(N),f,c),M=ee.clone(),K=me(s),Y=function(){c||H.scrollBounds.constrain(H.dragHandler.pointerDown()),H.scrollBody.seek(A).update();var ne=H.scrollBody.settle(A);ne&&!H.dragHandler.pointerDown()&&(H.animation.stop(),a.emit("settle")),ne||a.emit("scroll"),c&&(H.scrollLooper.loop(H.scrollBody.direction()),H.slideLooper.loop()),H.translate.to(J),H.animation.proceed()},$=ua(Y),re=N[ee.get()],J=oe(re),A=oe(re),k=fa(J,u,1),R=xa(c,N,z,X,A),b=ya($,ee,M,R,A,a),L=Fa(F,z,q,W,X,c,g),ae=ca(j,h,r,A,Ca(j),J,$,b,k,R,ee,a,x,c,p,S),H={containerRect:y,slideRects:v,animation:$,axis:j,direction:h,dragHandler:ae,eventStore:$e(),percentOfView:x,index:ee,indexPrevious:M,limit:X,location:J,options:t,scrollBody:k,scrollBounds:pa(X,J,A,k,x),scrollLooper:va(z,X,J,[J,A]),scrollProgress:ha(X),scrollSnaps:N,scrollTarget:R,scrollTo:b,slideLooper:ja(j,h,F,z,B,N,L,J,s),slidesToScroll:Z,slidesInView:L,slideIndexes:K,target:A,translate:Mn(j,h,n)};return H}function Aa(){var r={};function n(d){return r[d]||[]}function s(d){return n(d).forEach(function(C){return C(d)}),l}function t(d,C){return r[d]=n(d).concat([C]),l}function a(d,C){return r[d]=n(d).filter(function(f){return f!==C}),l}var l={emit:s,off:a,on:t};return l}var Da={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function tr(){function r(a,l){return kn(a,l||{})}function n(a,l){var d=JSON.stringify(ue(a.breakpoints||{})),C=JSON.stringify(ue(l.breakpoints||{}));return d!==C?!1:Tn(a,l)}function s(a){var l=a.breakpoints||{},d=ue(l).filter(function(C){return window.matchMedia(C).matches}).map(function(C){return l[C]}).reduce(function(C,f){return r(C,f)},{});return r(a,d)}var t={merge:r,areEqual:n,atMedia:s};return t}function Ia(){var r=tr(),n=r.atMedia,s=r.areEqual,t=[],a=[];function l(){return a.some(function(c){return c()})}function d(c){var u=n(c.options);return function(){return!s(u,n(c.options))}}function C(c,u){return a=c.map(d),t=c.filter(function(p){return n(p.options).active}),t.forEach(function(p){return p.init(u)}),c.reduce(function(p,m){var S;return Object.assign(p,(S={},S[m.name]=m,S))},{})}function f(){t=t.filter(function(c){return c.destroy()})}var g={init:C,destroy:f,haveChanged:l};return g}function le(r,n,s){var t=$e(),a=tr(),l=Ia(),d=Aa(),C=d.on,f=d.off,g=x,c=!1,u,p=a.merge(Da,le.globalOptions),m=a.merge(p),S=[],E,y=0,v,h;function j(){var A=m.container,k=m.slides,R=cr(A)?r.querySelector(A):A;v=R||r.children[0];var b=cr(k)?v.querySelectorAll(k):k;h=[].slice.call(b||v.children)}function F(A,k){if(!c){if(p=a.merge(p,A),m=a.atMedia(p),j(),u=Ba(r,v,h,m,d),y=u.axis.measureSize(r.getBoundingClientRect()),!m.active)return w();if(u.translate.to(u.location),S=k||S,E=l.init(S,J),m.loop){if(!u.slideLooper.canLoop()){w(),F({loop:!1},k),p=a.merge(p,{loop:!0});return}u.slideLooper.loop()}m.draggable&&v.offsetParent&&h.length&&u.dragHandler.addActivationEvents()}}function x(A,k){var R=N();w(),F(a.merge({startIndex:R},A),k),d.emit("reInit")}function w(){u.dragHandler.removeAllEvents(),u.animation.stop(),u.eventStore.removeAll(),u.translate.clear(),u.slideLooper.clear(),l.destroy()}function D(){c||(c=!0,t.removeAll(),w(),d.emit("destroy"))}function P(){var A=a.atMedia(p),k=!a.areEqual(A,m),R=u.axis.measureSize(r.getBoundingClientRect()),b=y!==R,L=l.haveChanged();(b||k||L)&&x(),d.emit("resize")}function _(A){var k=u[A?"target":"location"].get(),R=m.loop?"removeOffset":"constrain";return u.slidesInView.check(u.limit[R](k))}function q(A){var k=_(A);return u.slideIndexes.filter(function(R){return k.indexOf(R)===-1})}function B(A,k,R){!m.active||c||(u.scrollBody.useBaseMass().useSpeed(k?100:m.speed),u.scrollTo.index(A,R||0))}function Z(A){var k=u.index.clone().add(1);B(k.get(),A===!0,-1)}function U(A){var k=u.index.clone().add(-1);B(k.get(),A===!0,1)}function W(){var A=u.index.clone().add(1);return A.get()!==N()}function V(){var A=u.index.clone().add(-1);return A.get()!==N()}function z(){return u.scrollSnaps.map(u.scrollProgress.get)}function Q(){return u.scrollProgress.get(u.location.get())}function N(){return u.index.get()}function X(){return u.indexPrevious.get()}function ee(){return u.dragHandler.clickAllowed()}function M(){return E}function K(){return u}function Y(){return r}function $(){return v}function re(){return h}var J={canScrollNext:W,canScrollPrev:V,clickAllowed:ee,containerNode:$,internalEngine:K,destroy:D,off:f,on:C,plugins:M,previousScrollSnap:X,reInit:g,rootNode:Y,scrollNext:Z,scrollPrev:U,scrollProgress:Q,scrollSnapList:z,scrollTo:B,selectedScrollSnap:N,slideNodes:re,slidesInView:_,slidesNotInView:q};return F(n,s),t.add(window,"resize",P),setTimeout(function(){return d.emit("init")},0),J}le.globalOptions=void 0;le.optionsHandler=tr;function Pa(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function gr(r){return r.concat().sort(function(n,s){return n.name>s.name?1:-1}).map(function(n){return n.options})}function za(r,n){if(r.length!==n.length)return!1;var s=le.optionsHandler().areEqual,t=gr(r),a=gr(n);return t.every(function(l,d){var C=a[d];return s(l,C)})}function or(r,n){r===void 0&&(r={}),n===void 0&&(n=[]);var s=T.useRef(le.optionsHandler()),t=T.useRef(r),a=T.useRef(n),l=T.useState(),d=l[0],C=l[1],f=T.useState(),g=f[0],c=f[1],u=T.useCallback(function(){d&&d.reInit(t.current,a.current)},[d]);return T.useEffect(function(){if(Pa()&&g){le.globalOptions=or.globalOptions;var p=le(g,t.current,a.current);return C(p),function(){return p.destroy()}}else C(void 0)},[g,C]),T.useEffect(function(){s.current.areEqual(t.current,r)||(t.current=r,u())},[r,u]),T.useEffect(function(){za(a.current,n)||(a.current=n,u())},[n,u]),[c,d]}or.globalOptions=void 0;const[ka,se]=qn({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),Ta=({index:r,defaultIndex:n=0,onChange:s,align:t="center",orientation:a="horizontal",autoplay:l=!1,stopMouseEnterAutoplay:d=!0,loop:C=!0,speed:f=10,delay:g=4e3,gap:c="fallback(4, 1rem)",slidesToScroll:u=1,draggable:p=!0,dragFree:m=!1,inViewThreshold:S=0,skipSnaps:E=!1,containScroll:y="",slideSize:v="100%",includeGapInSize:h=!0,onScrollProgress:j,children:F,...x})=>{const w=Wn(x,Xn),[D,P]=Rn({value:r,defaultValue:n,onChange:s}),_=a==="vertical",[q,B]=or({axis:_?"y":"x",startIndex:n,loop:C,align:t,slidesToScroll:u,draggable:p,dragFree:m,speed:f,inViewThreshold:S,skipSnaps:E,containScroll:y}),[Z,U]=T.useState([]),[W,V]=T.useState(!1),z=T.useRef(void 0),Q=T.useCallback(()=>{if(!B)return;const M=Math.round(Math.max(0,Math.min(1,B.scrollProgress()))*100);j==null||j(M)},[B,j]),N=T.useCallback(()=>{if(!B)return;const M=B.selectedScrollSnap();P(M)},[B,P]);T.useEffect(()=>{const M=W&&d,K=!(B!=null&&B.canScrollNext());return B&&l&&!M&&!K?z.current=setInterval(()=>{B.scrollNext()},g):(z.current&&clearInterval(z.current),z.current=void 0),()=>{z.current&&clearInterval(z.current)}},[l,g,d,B,W,C,D]),er(()=>{if(!B)return;B.reInit();const K=B.scrollSnapList().map((Y,$)=>$);U(K)},[T.Children.toArray(F).length,t,a,C,f,c,u,p,m,S,E,y,v,h]),er(()=>{if(!B)return;const K=B.scrollSnapList().map((Y,$)=>$);U(K)},[B]),er(()=>{if(B)return B.on("select",N),B.on("scroll",Q),Q(),()=>{B.off("select",N),B.off("scroll",Q)}},[B,Q]);const X=T.useCallback((M={},K=null)=>({...w[0],...M,ref:K,onMouseEnter:Ye(M.onMouseEnter,()=>{V(!0)}),onMouseLeave:Ye(M.onMouseLeave,()=>{V(!1)})}),[w]),ee=T.useCallback((M={})=>({...w[1],...M,ref:q}),[w,q]);return{carousel:B,children:F,indexes:Z,selectedIndex:D,orientation:a,slideSize:v,gap:c,slidesToScroll:u,includeGapInSize:h,getContainerProps:X,getSlidesProps:ee}},_a=({index:r})=>{const{selectedIndex:n,slidesToScroll:s}=se();r=Math.floor((r??0)/(s??1));const t=r===n;return{getSlideProps:T.useCallback((l={})=>({...l,"data-index":r,"data-selected":Pn(t)}),[t,r])}},On=({operation:r,...n})=>{const{carousel:s}=se(),t=r==="prev",a=n.disabled??n.isDisabled??(t?!(s!=null&&s.canScrollPrev()):!(s!=null&&s.canScrollNext())),l=T.useCallback(()=>{s&&(t?s.scrollPrev():s.scrollNext())},[s,t]);return{getControlProps:T.useCallback((C={},f=null)=>({...C,ref:f,disabled:a,onClick:Ye(C.onClick,l)}),[a,l])}},Ma=()=>{const{selectedIndex:r,carousel:n,indexes:s}=se(),t=T.useCallback((l,d)=>{n&&(l.stopPropagation(),n.scrollTo(d))},[n]),a=T.useCallback(({index:l,...d})=>{const C=l===r;return{"aria-label":`Go to ${l+1} slide`,...d,key:l,"data-index":l,"data-selected":Pn(C),onClick:Ye(d.onClick,f=>t(f,l))}},[t,r]);return{indexes:s,getIndicatorProps:a}},I=ie(({h:r,height:n,minH:s,minHeight:t,...a},l)=>{const d=G(a.orientation),C=G(a.align),f=G(a.autoplay),g=G(a.stopMouseEnterAutoplay),c=G(a.loop),u=G(a.speed),p=G(a.delay),m=G(a.slidesToScroll),S=G(a.draggable),E=G(a.dragFree),y=G(a.inViewThreshold),v=G(a.skipSnaps),h=G(a.containScroll),j=G(a.includeGapInSize),F=dr("spaces",G(a.gap))??G(a.gap),x=dr("sizes",G(a.slideSize))??G(a.slideSize),[w,D]=Zn("Carousel",{...a,orientation:d,align:C,autoplay:f,stopMouseEnterAutoplay:g,loop:c,speed:u,delay:p,slidesToScroll:m,draggable:S,dragFree:E,inViewThreshold:y,skipSnaps:v,containScroll:h,includeGapInSize:j,gap:F,slideSize:x}),{className:P,innerProps:_,withControls:q=!0,controlProps:B,controlPrevProps:Z,controlNextProps:U,withIndicators:W=!0,indicatorsProps:V,...z}=ea(D),Q=G(q),N=G(W),{getContainerProps:X,getSlidesProps:ee,children:M,...K}=Ta({...z}),Y=Un(M),[$]=rr(Y,Qe),[re]=rr(Y,Ke),[J]=rr(Y,Je),A=Qn(Y,o),k=Kn(Y,Qe,Ke,Je,o),R=A.map((b,L)=>T.cloneElement(b,{index:L}));return r??(r=n),s??(s=t),e.jsx(ka,{value:{styles:w,...K},children:e.jsxs(de.div,{className:ce("ui-carousel",P),__css:{position:"relative",h:"fit-content",...w.container},...X({},l),children:[$??(Q?e.jsx(Qe,{...B,...Z}):null),re??(Q?e.jsx(Ke,{...B,...U}):null),e.jsx(Oa,{...ee({...Jn({h:r,minH:s}),..._}),children:R}),J??(N?e.jsx(Je,{...V}):null),k]})})}),Oa=ie(({...r},n)=>{const s={w:"100%",h:"fit-content",overflow:"hidden"};return e.jsx(de.div,{ref:n,className:"ui-carousel__sliders",__css:s,children:e.jsx(Na,{...r})})}),Na=({...r})=>{const{orientation:n,includeGapInSize:s,gap:t,styles:a}=se(),l={display:"flex",flexDirection:n==="vertical"?"column":"row",...a.inner,...s?{var:[{__prefix:"ui",name:"gap",token:"spaces",value:t}],[n==="vertical"?"mb":"mr"]:ra.negate("var(--ui-gap)")}:{}};return e.jsx(de.div,{className:"ui-carousel__sliders__inner",__css:l,...r})},o=ie(({className:r,size:n,...s},t)=>{const{slideSize:a,includeGapInSize:l,orientation:d,gap:C}=se(),{getSlideProps:f}=_a(s);n??(n=a);const g={position:"relative",flex:`0 0 ${n}`,...l?{[d==="vertical"?"pb":"pr"]:C}:{[d==="vertical"?"mb":"mr"]:C}};return e.jsx(de.div,{className:ce("ui-carousel__slide",r),__css:g,...f({}),children:e.jsx(La,{ref:t,...s})})}),La=ie(({...r},n)=>e.jsx(de.div,{ref:n,className:"ui-carousel__slide__inner",w:"100%",h:"100%",...r})),Qe=ie(({className:r,...n},s)=>{const{orientation:t}=se(),{getControlProps:a}=On({operation:"prev"});return e.jsx(Nn,{operation:"prev",className:ce("ui-carousel__control--prev",r),"aria-label":"Go to previous slide",icon:e.jsx(zn,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),...a(n,s)})}),Ke=ie(({className:r,...n},s)=>{const{orientation:t}=se(),{getControlProps:a}=On({operation:"next"});return e.jsx(Nn,{operation:"next",className:ce("ui-carousel__control--next",r),"aria-label":"Go to next slide",icon:e.jsx(zn,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),...a(n,s)})}),Nn=ie(({className:r,operation:n,...s},t)=>{const{styles:a}=se(),l=Yn("whiteAlpha","blackAlpha"),d={position:"absolute",zIndex:"fallback(kurillin, 9)",...a.control,...a[n]};return e.jsx($n,{ref:t,className:ce("ui-carousel__control",r),colorScheme:l,isRounded:!0,__css:d,...s})}),Je=ie(({className:r,component:n,...s},t)=>{const{selectedIndex:a,orientation:l,styles:d}=se(),{indexes:C,getIndicatorProps:f}=Ma(),g={position:"absolute",zIndex:"fallback(kurillin, 9)",display:"flex",justifyContent:"center",...d.indicators,...l==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(de.div,{ref:t,className:ce("ui-carousel__indicators",r),__css:g,...s,children:C.map(c=>{const u=c===a;if(typeof n=="function"){const p=n({index:c,isSelected:u});if(!p)return null;const m=f({...p.props,index:c});return T.cloneElement(p,m)}else{const{key:p,...m}=f({index:c});return e.jsx(Ha,{...m},p)}})})}),Ha=({className:r,...n})=>{const{styles:s}=se(),t={...s.indicator};return e.jsx(de.button,{type:"button",tabIndex:-1,className:ce("ui-carousel__indicators__indicator",r),__css:t,...n})},bs={title:"Components / Data Display / Carousel",component:I},we=()=>e.jsxs(I,{children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ee=()=>e.jsxs(e.Fragment,{children:[e.jsxs(I,{size:"sm",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{size:"md",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{size:"lg",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{size:"xl",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),Be=()=>e.jsxs(e.Fragment,{children:[e.jsxs(I,{orientation:"horizontal",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{orientation:"vertical",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),Ae=()=>e.jsxs(I,{defaultIndex:1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),De=()=>e.jsxs(I,{gap:0,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ie=()=>e.jsxs(I,{speed:50,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Pe=()=>e.jsxs(I,{slideSize:"50%",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",size:"100%",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),ze=()=>e.jsxs(e.Fragment,{children:[e.jsxs(I,{slideSize:"50%",align:"center",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{slideSize:"50%",align:"start",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{slideSize:"50%",align:"end",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),ke=()=>e.jsxs(I,{slideSize:"33.3%",slidesToScroll:3,loop:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"}),e.jsx(o,{as:i,bg:"primary",children:"5"}),e.jsx(o,{as:i,bg:"secondary",children:"6"}),e.jsx(o,{as:i,bg:"danger",children:"7"}),e.jsx(o,{as:i,bg:"primary",children:"8"}),e.jsx(o,{as:i,bg:"secondary",children:"9"})]}),Te=()=>e.jsxs(I,{slideSize:"50%",align:"start",slidesToScroll:2,h:"auto",children:[e.jsxs(o,{as:Se,variant:"outline",children:[e.jsx(ve,{justifyContent:"center",children:e.jsx(xe,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(he,{children:[e.jsx(ye,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(je,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(be,{children:e.jsx(Fe,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:Se,variant:"outline",children:[e.jsx(ve,{justifyContent:"center",children:e.jsx(xe,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(he,{children:[e.jsx(ye,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(je,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(be,{children:e.jsx(Fe,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:Se,variant:"outline",children:[e.jsx(ve,{justifyContent:"center",children:e.jsx(xe,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(he,{children:[e.jsx(ye,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(je,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(be,{children:e.jsx(Fe,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:Se,variant:"outline",children:[e.jsx(ve,{justifyContent:"center",children:e.jsx(xe,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(he,{children:[e.jsx(ye,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(je,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(be,{children:e.jsx(Fe,{colorScheme:"primary",children:"Wikipedia"})})]})]}),_e=()=>e.jsxs(I,{autoplay:!0,loop:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Me=()=>e.jsxs(I,{autoplay:!0,delay:1e3,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Oe=()=>e.jsxs(I,{dragFree:!0,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ne=()=>{const[r,n]=T.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{loop:!1,dragFree:!0,onScrollProgress:n,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsx(na,{value:r,colorScheme:"gray"})]})},Le=()=>e.jsxs(I,{slideSize:"50%",includeGapInSize:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),He=()=>e.jsxs(I,{loop:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ge=()=>e.jsxs(I,{draggable:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ve=()=>e.jsxs(I,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(I,{withControls:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),qe=()=>e.jsxs(I,{withIndicators:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),We=()=>{const[r,n]=T.useState(0);return e.jsxs(I,{draggable:!1,index:r,onChange:n,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})},Xe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(I,{controlProps:{icon:e.jsx(Ce,{icon:In})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{controlPrevProps:{icon:e.jsx(Ce,{icon:ur})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{controlNextProps:{icon:e.jsx(Ce,{icon:lr})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{children:[e.jsx(Qe,{icon:e.jsx(Ce,{icon:ur})}),e.jsx(Ke,{icon:e.jsx(Ce,{icon:lr})}),e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),Ue=()=>e.jsxs(e.Fragment,{children:[e.jsxs(I,{indicatorsProps:{bottom:"8",component:({isSelected:r})=>e.jsx(Ce,{icon:In,color:r?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer"})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"}),e.jsx(Je,{sx:{"& > *":{w:"4",_selected:{w:"12"},transitionProperty:"width",transitionDuration:"slower"}}})]})]});var fr,pr,mr;we.parameters={...we.parameters,docs:{...(fr=we.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
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
}`,...(mr=(pr=we.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var Sr,vr,hr;Ee.parameters={...Ee.parameters,docs:{...(Sr=Ee.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
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
}`,...(hr=(vr=Ee.parameters)==null?void 0:vr.docs)==null?void 0:hr.source}}};var br,xr,yr;Be.parameters={...Be.parameters,docs:{...(br=Be.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
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
}`,...(yr=(xr=Be.parameters)==null?void 0:xr.docs)==null?void 0:yr.source}}};var jr,Fr,wr;Ae.parameters={...Ae.parameters,docs:{...(jr=Ae.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
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
}`,...(wr=(Fr=Ae.parameters)==null?void 0:Fr.docs)==null?void 0:wr.source}}};var Er,Br,Ar;De.parameters={...De.parameters,docs:{...(Er=De.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
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
}`,...(Ar=(Br=De.parameters)==null?void 0:Br.docs)==null?void 0:Ar.source}}};var Dr,Ir,Pr;Ie.parameters={...Ie.parameters,docs:{...(Dr=Ie.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
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
}`,...(Pr=(Ir=Ie.parameters)==null?void 0:Ir.docs)==null?void 0:Pr.source}}};var zr,kr,Tr;Pe.parameters={...Pe.parameters,docs:{...(zr=Pe.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
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
}`,...(Tr=(kr=Pe.parameters)==null?void 0:kr.docs)==null?void 0:Tr.source}}};var _r,Mr,Or;ze.parameters={...ze.parameters,docs:{...(_r=ze.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
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
}`,...(Or=(Mr=ze.parameters)==null?void 0:Mr.docs)==null?void 0:Or.source}}};var Nr,Lr,Hr;ke.parameters={...ke.parameters,docs:{...(Nr=ke.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
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
}`,...(Hr=(Lr=ke.parameters)==null?void 0:Lr.docs)==null?void 0:Hr.source}}};var Gr,Vr,Rr;Te.parameters={...Te.parameters,docs:{...(Gr=Te.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
  return <Carousel slideSize="50%" align="start" slidesToScroll={2} h="auto">
      <CarouselSlide as={Card} variant="outline">
        <CardHeader justifyContent="center">
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" w="full" rounded="md" alt="いちご100%" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『いちご100%』（いちごひゃくパーセント）</Heading>

          <Text>
            『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="outline">
        <CardHeader justifyContent="center">
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" w="full" rounded="md" alt="いちご100%" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『いちご100%』（いちごひゃくパーセント）</Heading>

          <Text>
            『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="outline">
        <CardHeader justifyContent="center">
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" w="full" rounded="md" alt="いちご100%" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『いちご100%』（いちごひゃくパーセント）</Heading>

          <Text>
            『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>

      <CarouselSlide as={Card} variant="outline">
        <CardHeader justifyContent="center">
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" w="full" rounded="md" alt="いちご100%" />
        </CardHeader>

        <CardBody>
          <Heading size="md">『いちご100%』（いちごひゃくパーセント）</Heading>

          <Text>
            『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!
          </Text>
        </CardBody>

        <CardFooter>
          <Button colorScheme="primary">Wikipedia</Button>
        </CardFooter>
      </CarouselSlide>
    </Carousel>;
}`,...(Rr=(Vr=Te.parameters)==null?void 0:Vr.docs)==null?void 0:Rr.source}}};var qr,Wr,Xr;_e.parameters={..._e.parameters,docs:{...(qr=_e.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
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
}`,...(Xr=(Wr=_e.parameters)==null?void 0:Wr.docs)==null?void 0:Xr.source}}};var Ur,Qr,Kr;Me.parameters={...Me.parameters,docs:{...(Ur=Me.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
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
}`,...(Kr=(Qr=Me.parameters)==null?void 0:Qr.docs)==null?void 0:Kr.source}}};var Jr,Yr,$r;Oe.parameters={...Oe.parameters,docs:{...(Jr=Oe.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
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
}`,...($r=(Yr=Oe.parameters)==null?void 0:Yr.docs)==null?void 0:$r.source}}};var Zr,en,rn;Ne.parameters={...Ne.parameters,docs:{...(Zr=Ne.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
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
}`,...(rn=(en=Ne.parameters)==null?void 0:en.docs)==null?void 0:rn.source}}};var nn,an,sn;Le.parameters={...Le.parameters,docs:{...(nn=Le.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
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
}`,...(sn=(an=Le.parameters)==null?void 0:an.docs)==null?void 0:sn.source}}};var tn,on,un;He.parameters={...He.parameters,docs:{...(tn=He.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
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
}`,...(un=(on=He.parameters)==null?void 0:on.docs)==null?void 0:un.source}}};var ln,dn,cn;Ge.parameters={...Ge.parameters,docs:{...(ln=Ge.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(cn=(dn=Ge.parameters)==null?void 0:dn.docs)==null?void 0:cn.source}}};var Cn,gn,fn;Ve.parameters={...Ve.parameters,docs:{...(Cn=Ve.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
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
}`,...(fn=(gn=Ve.parameters)==null?void 0:gn.docs)==null?void 0:fn.source}}};var pn,mn,Sn;Re.parameters={...Re.parameters,docs:{...(pn=Re.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(Sn=(mn=Re.parameters)==null?void 0:mn.docs)==null?void 0:Sn.source}}};var vn,hn,bn;qe.parameters={...qe.parameters,docs:{...(vn=qe.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
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
}`,...(bn=(hn=qe.parameters)==null?void 0:hn.docs)==null?void 0:bn.source}}};var xn,yn,jn;We.parameters={...We.parameters,docs:{...(xn=We.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
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
}`,...(jn=(yn=We.parameters)==null?void 0:yn.docs)==null?void 0:jn.source}}};var Fn,wn,En;Xe.parameters={...Xe.parameters,docs:{...(Fn=Xe.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
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
}`,...(En=(wn=Xe.parameters)==null?void 0:wn.docs)==null?void 0:En.source}}};var Bn,An,Dn;Ue.parameters={...Ue.parameters,docs:{...(Bn=Ue.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
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
}`,...(Dn=(An=Ue.parameters)==null?void 0:An.docs)==null?void 0:Dn.source}}};const xs=["basic","withSize","withOrientation","withDefaultIndex","withGap","withSpeed","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","customControl","customControlButton","customIndicators"];export{xs as __namedExportsOrder,we as basic,We as customControl,Xe as customControlButton,Ue as customIndicators,bs as default,Re as disabledControlButton,Ge as disabledDraggable,Le as disabledIncludeGapInSize,qe as disabledIndicators,He as disabledLoop,Ve as disabledStopMouseEnterAutoplay,ze as withAlign,_e as withAutoplay,Te as withCard,Ae as withDefaultIndex,Me as withDelay,Oe as withDragFree,De as withGap,Be as withOrientation,Ne as withScrollProgress,Ee as withSize,Pe as withSlideSize,ke as withSlidesToScroll,Ie as withSpeed};
