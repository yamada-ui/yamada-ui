import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as T}from"./index-BwDkhjyp.js";import{u as ir}from"./index-CrSB-fKY.js";import{u as G}from"./index-DhTMHHr4.js";import{u as Vn}from"./index-ZiYChM0F.js";import{l as Rn,a0 as qn,a1 as Wn,f as Ze,h as Je,d as Dn,t as Xn,x as er,Y as Un,a4 as Qn,b as de,c as ce,w as Kn,G as Jn}from"./factory-CwKxIcmp.js";import{f as ie}from"./forward-ref-BmTAT9U5.js";import{c as In}from"./icon-DcxInhKK.js";import{I as Yn}from"./icon-button-BMPiwL_V.js";import{a as $n}from"./use-component-style-C6mmquFG.js";import{o as Zn,e as ea}from"./theme-provider-DjdgC7rR.js";import{P as ra}from"./progress-DoEXgCbO.js";import{A as ur}from"./arrow-left-DhJRzeUO.js";import{A as lr}from"./arrow-right-BYUpstQv.js";import{C as i}from"./center-Bx18Vgm_.js";import{C as me,a as Se,b as ve,c as he}from"./card-CrYHdWsg.js";import{I as be}from"./image-CTDEiauo.js";import{H as xe}from"./heading-B4IobJi1.js";import{T as ye}from"./text-OHsVmoc6.js";import{B as je}from"./button-D55cFWsi.js";import{G as Pn}from"./ghost-uLStP3Il.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DH_fprnQ.js";import"./index-DigcCZ6p.js";import"./index-Du0-7Fls.js";import"./index-DXSoq_1q.js";import"./number-49BHn0Cl.js";import"./lucide-icon-C38dhLDB.js";import"./use-image-3a3Vl8rR.js";import"./use-ripple-D3aSUQ2z.js";import"./index-yOmqRA4W.js";import"./motion-DkeuV4DN.js";import"./motion-gzykECjf.js";import"./loading-DIEre6X5.js";function na(r,n,s,t,a){return t+(a-t)*((r-n)/(s-n))}function nr(r){return typeof r=="number"}function dr(r){return typeof r=="string"}function rr(r){return Object.prototype.toString.call(r)==="[object Object]"}function aa(r){return Array.isArray(r)}function cr(r){return rr(r)||aa(r)}function O(r){return Math.abs(r)}function ar(r){return r?r/O(r):0}function fe(r,n){return O(r-n)}function sa(r,n){if(r===0||n===0||O(r)<=O(n))return 0;var s=fe(O(r),O(n));return O(s/r)}function ta(r){var n=Math.pow(10,r);return function(s){return Math.round(s*n)/n}}function pe(r){return ue(r).map(Number)}function te(r){return r[$e(r)]}function $e(r){return Math.max(0,r.length-1)}function ue(r){return Object.keys(r)}function zn(r,n){return[r,n].reduce(function(s,t){return ue(t).forEach(function(a){var l=s[a],d=t[a],C=rr(l)&&rr(d);s[a]=C?zn(l,d):d}),s},{})}function kn(r,n){var s=ue(r),t=ue(n);return s.length!==t.length?!1:s.every(function(a){var l=r[a],d=n[a];return typeof l=="function"?"".concat(l)==="".concat(d):!cr(l)||!cr(d)?l===d:kn(l,d)})}function oa(r,n){var s={start:t,center:a,end:l};function t(){return 0}function a(g){return l(g)/2}function l(g){return n-g}function d(){return n*Number(r)}function C(g){return nr(r)?d():s[r](g)}var f={measure:C};return f}function ia(r){var n=0;function s(d,C){return function(){d===!!n&&C()}}function t(){n=window.requestAnimationFrame(r)}function a(){window.cancelAnimationFrame(n),n=0}var l={proceed:s(!0,t),start:s(!1,t),stop:s(!0,a)};return l}function ua(r,n){var s=r==="y"?"y":"x",t=r==="y"?"x":"y",a=C(),l=f();function d(c){var u=c.width,p=c.height;return s==="x"?u:p}function C(){return s==="y"?"top":n==="rtl"?"right":"left"}function f(){return s==="y"?"bottom":n==="rtl"?"left":"right"}var g={scroll:s,cross:t,startEdge:a,endEdge:l,measureSize:d};return g}function Ce(r,n){var s=O(r-n);function t(g){return g<r}function a(g){return g>n}function l(g){return t(g)||a(g)}function d(g){return l(g)?t(g)?r:n:g}function C(g){return s?g-s*Math.ceil((g-n)/s):g}var f={length:s,max:n,min:r,constrain:d,reachedAny:l,reachedMax:a,reachedMin:t,removeOffset:C};return f}function Tn(r,n,s){var t=Ce(0,r),a=t.min,l=t.constrain,d=r+1,C=f(n);function f(S){return s?O((d+S)%d):l(S)}function g(){return C}function c(S){return C=f(S),m}function u(S){return c(g()+S)}function p(){return Tn(r,g(),s)}var m={add:u,clone:p,get:g,set:c,min:a,max:r};return m}function la(r){var n=r==="rtl"?-1:1;function s(a){return a*n}var t={apply:s};return t}function Ye(){var r=[];function n(a,l,d,C){return C===void 0&&(C={passive:!0}),a.addEventListener(l,d,C),r.push(function(){return a.removeEventListener(l,d,C)}),t}function s(){return r=r.filter(function(a){return a()}),t}var t={add:n,removeAll:s};return t}function oe(r){var n=r;function s(){return n}function t(u){return n=g(u),c}function a(u){return n+=g(u),c}function l(u){return n-=g(u),c}function d(u){return n*=u,c}function C(u){return n/=u,c}function f(){return n!==0&&C(n),c}function g(u){return nr(u)?u:u.get()}var c={add:a,divide:C,get:s,multiply:d,normalize:f,set:t,subtract:l};return c}function da(r,n,s,t,a,l,d,C,f,g,c,u,p,m,S,E){var y=r.cross,v=["INPUT","SELECT","TEXTAREA"],h={passive:!1},j=oe(0),F=Ye(),x=Ye(),w=p.measure(20),D={mouse:300,touch:400},P={mouse:500,touch:600},_=S?5:16,q=1,B=0,Z=0,U=!1,W=!1,V=!1,z=!1;function Q(){var b=s;F.add(b,"dragstart",function(L){return L.preventDefault()},h).add(b,"touchmove",function(){},h).add(b,"touchend",function(){}).add(b,"touchstart",Y).add(b,"mousedown",Y).add(b,"touchcancel",re).add(b,"contextmenu",re).add(b,"click",J,!0)}function N(){var b=z?document:s;x.add(b,"touchmove",$,h).add(b,"touchend",re).add(b,"mousemove",$,h).add(b,"mouseup",re)}function X(){F.removeAll(),x.removeAll()}function ee(b){var L=b.nodeName||"";return v.indexOf(L)>-1}function M(){var b=S?P:D,L=z?"mouse":"touch";return b[L]}function K(b,L){var ae=c.clone().add(ar(b)*-1),H=ae.get()===c.min||ae.get()===c.max,ne=g.byDistance(b,!S).distance;return S||O(b)<w?ne:!m&&H?ne*.4:E&&L?ne*.5:g.byIndex(ae.get(),0).distance}function Y(b){if(z=!a.isTouchEvent(b),!(z&&b.button!==0)&&!ee(b.target)){var L=fe(t.get(),l.get())>=2,ae=z||!L;U=!0,a.pointerDown(b),j.set(t),t.set(l),f.useBaseMass().useSpeed(80),N(),B=a.readPoint(b),Z=a.readPoint(b,y),u.emit("pointerDown"),ae&&(V=!1)}}function $(b){if(!W&&!z){if(!b.cancelable)return re(b);var L=a.readPoint(b),ae=a.readPoint(b,y),H=fe(L,B),ne=fe(ae,Z);if(W=H>ne,!W&&!V)return re(b)}var ge=a.pointerMove(b);!V&&ge&&(V=!0),d.start(),t.add(n.apply(ge)),b.preventDefault()}function re(b){var L=g.byDistance(0,!1),ae=L.index!==c.get(),H=a.pointerUp(b)*M(),ne=K(n.apply(H),ae),ge=sa(H,ne),Nn=fe(t.get(),j.get())>=.5,or=ae&&ge>.75,Ln=O(H)<w,Hn=or?10:_,Gn=or?q+2.5*ge:q;Nn&&!z&&(V=!0),W=!1,U=!1,x.removeAll(),f.useSpeed(Ln?9:Hn).useMass(Gn),C.distance(ne,!S),z=!1,u.emit("pointerUp")}function J(b){V&&(b.stopPropagation(),b.preventDefault())}function A(){return!V}function k(){return U}var R={addActivationEvents:Q,clickAllowed:A,pointerDown:k,removeAllEvents:X};return R}function ca(r){var n=170,s,t;function a(u){return typeof TouchEvent<"u"&&u instanceof TouchEvent}function l(u){return u.timeStamp}function d(u,p){var m=p||r.scroll,S="client".concat(m==="x"?"X":"Y");return(a(u)?u.touches[0]:u)[S]}function C(u){return s=u,t=u,d(u)}function f(u){var p=d(u)-d(t),m=l(u)-l(s)>n;return t=u,m&&(s=u),p}function g(u){if(!s||!t)return 0;var p=d(t)-d(s),m=l(u)-l(s),S=l(u)-l(t)>n,E=p/m,y=m&&!S&&O(E)>.1;return y?E:0}var c={isTouchEvent:a,pointerDown:C,pointerMove:f,pointerUp:g,readPoint:d};return c}function Ca(r){function n(t){return r*(t/100)}var s={measure:n};return s}function ga(r,n,s){var t=ta(2),a=oe(0),l=oe(0),d=oe(0),C=0,f=n,g=s;function c(){a.add(l),r.add(a),l.multiply(0)}function u(F){F.divide(g),l.add(F)}function p(F){d.set(F).subtract(r);var x=na(d.get(),0,100,0,f);return C=ar(d.get()),d.normalize().multiply(x).subtract(a),u(d),j}function m(F){var x=F.get()-r.get(),w=!t(x);return w&&r.set(F),w}function S(){return C}function E(){return v(n)}function y(){return h(s)}function v(F){return f=F,j}function h(F){return g=F,j}var j={direction:S,seek:p,settle:m,update:c,useBaseMass:y,useBaseSpeed:E,useMass:h,useSpeed:v};return j}function fa(r,n,s,t,a){var l=a.measure(10),d=a.measure(50),C=.85,f=!1;function g(){return!(f||!r.reachedAny(s.get())||!r.reachedAny(n.get()))}function c(m){if(g()){var S=r.reachedMin(n.get())?"min":"max",E=O(r[S]-n.get()),y=s.get()-n.get(),v=Math.min(E/d,C);s.subtract(y*v),!m&&O(y)<l&&(s.set(r.constrain(s.get())),t.useSpeed(10).useMass(3))}}function u(m){f=!m}var p={constrain:c,toggleActive:u};return p}function pa(r,n,s,t){var a=Ce(-n+r,s[0]),l=s.map(a.constrain),d=f();function C(){var c=l[0],u=te(l),p=l.lastIndexOf(c),m=l.indexOf(u)+1;return Ce(p,m)}function f(){if(n<=r)return[a.max];if(t==="keepSnaps")return l;var c=C(),u=c.min,p=c.max;return l.slice(u,p)}var g={snapsContained:d};return g}function ma(r,n,s){var t=a();function a(){var d=n[0],C=te(n),f=s?d-r:C,g=d;return Ce(f,g)}var l={limit:t};return l}function Sa(r,n,s,t){var a=.1,l=n.min+a,d=n.max+a,C=Ce(l,d),f=C.reachedMin,g=C.reachedMax;function c(m){return m===1?g(s.get()):m===-1?f(s.get()):!1}function u(m){if(c(m)){var S=r*(m*-1);t.forEach(function(E){return E.add(S)})}}var p={loop:u};return p}function va(r){var n=r.max,s=r.length;function t(l){var d=l-n;return d/-s}var a={get:t};return a}function ha(r,n,s,t,a,l,d){var C=r.startEdge,f=r.endEdge,g=l.groupSlides,c=m().map(n.measure),u=S(),p=E();function m(){return g(t).map(function(v){return te(v)[f]-v[0][C]}).map(O)}function S(){return t.map(function(v){return s[C]-v[C]}).map(function(v){return-O(v)})}function E(){var v=0,h=te(u)-te(a);return g(u).map(function(j){return j[0]}).map(function(j,F,x){var w=!F,D=F===$e(x);return d&&w?v:d&&D?h:j+c[F]})}var y={snaps:u,snapsAligned:p};return y}function ba(r,n,s,t,a){var l=t.reachedAny,d=t.removeOffset,C=t.constrain;function f(S){return S.concat().sort(function(E,y){return O(E)-O(y)})[0]}function g(S){var E=r?d(S):C(S),y=n.map(function(h){return h-E}).map(function(h){return c(h,0)}).map(function(h,j){return{diff:h,index:j}}).sort(function(h,j){return O(h.diff)-O(j.diff)}),v=y[0].index;return{index:v,distance:E}}function c(S,E){var y=[S,S+s,S-s];if(!r)return y[0];if(!E)return f(y);var v=y.filter(function(h){return ar(h)===E});return f(v)}function u(S,E){var y=n[S]-a.get(),v=c(y,E);return{index:S,distance:v}}function p(S,E){var y=a.get()+S,v=g(y),h=v.index,j=v.distance,F=!r&&l(y);if(!E||F)return{index:h,distance:S};var x=n[h]-j,w=S+c(x,0);return{index:h,distance:w}}var m={byDistance:p,byIndex:u,shortcut:c};return m}function xa(r,n,s,t,a,l){function d(c){var u=c.distance,p=c.index!==n.get();u&&(r.start(),a.add(u)),p&&(s.set(n.get()),n.set(c.index),l.emit("select"))}function C(c,u){var p=t.byDistance(c,u);d(p)}function f(c,u){var p=n.clone().set(c),m=t.byIndex(p.get(),u);d(m)}var g={distance:C,index:f};return g}function _n(r,n,s){var t=r.scroll==="x"?d:C,a=s.style,l=!1;function d(p){return"translate3d(".concat(p,"px,0px,0px)")}function C(p){return"translate3d(0px,".concat(p,"px,0px)")}function f(p){l||(a.transform=t(n.apply(p.get())))}function g(p){l=!p}function c(){l||(a.transform="",s.getAttribute("style")||s.removeAttribute("style"))}var u={clear:c,to:f,toggleActive:g};return u}function ya(r,n,s,t,a,l,d,C,f){var g=pe(a),c=pe(a).reverse(),u=E().concat(y());function p(x,w){return x.reduce(function(D,P){return D-a[P]},w)}function m(x,w){return x.reduce(function(D,P){var _=p(D,w);return _>0?D.concat([P]):D},[])}function S(x,w){var D=w==="start",P=D?-t:t,_=d.findSlideBounds([P]);return x.map(function(q){var B=D?0:-t,Z=D?t:0,U=_.filter(function(X){return X.index===q})[0],W=U[D?"end":"start"],V=oe(-1),z=oe(-1),Q=_n(r,n,f[q]),N=function(){return V.set(C.get()>W?B:Z)};return{index:q,location:z,translate:Q,target:N}})}function E(){var x=l[0]-1,w=m(c,x);return S(w,"end")}function y(){var x=s-l[0]-1,w=m(g,x);return S(w,"start")}function v(){return u.every(function(x){var w=x.index,D=g.filter(function(P){return P!==w});return p(D,s)<=.1})}function h(){u.forEach(function(x){var w=x.target,D=x.translate,P=x.location,_=w();_.get()!==P.get()&&(_.get()===0?D.clear():D.to(_),P.set(_))})}function j(){u.forEach(function(x){return x.translate.clear()})}var F={canLoop:v,clear:j,loop:h,loopPoints:u};return F}function ja(r,n,s,t,a,l,d){var C=a.removeOffset,f=a.constrain,g=.5,c=l?[0,n,-n]:[0],u=m(c,d);function p(y){var v=y||0;return s.map(function(h){var j=Ce(g,h-g);return j.constrain(h*v)})}function m(y,v){var h=y||c,j=p(v);return h.reduce(function(F,x){var w=t.map(function(D,P){return{start:D-s[P]+j[P]+x,end:D+r-j[P]+x,index:P}});return F.concat(w)},[])}function S(y,v){var h=l?C(y):f(y),j=v||u;return j.reduce(function(F,x){var w=x.index,D=x.start,P=x.end,_=F.indexOf(w)!==-1,q=D<h&&P>h;return!_&&q?F.concat([w]):F},[])}var E={check:S,findSlideBounds:m};return E}function Fa(r,n,s,t,a){var l=r.measureSize,d=r.startEdge,C=r.endEdge,f=s[0]&&a,g=m(),c=S(),u=s.map(l),p=E();function m(){if(!f)return 0;var v=s[0];return O(n[d]-v[d])}function S(){if(!f)return 0;var v=window.getComputedStyle(te(t));return parseFloat(v.getPropertyValue("margin-".concat(C)))}function E(){return s.map(function(v,h,j){var F=!h,x=h===$e(j);return F?u[h]+g:x?u[h]+c:j[h+1][d]-v[d]}).map(O)}var y={slideSizes:u,slideSizesWithGaps:p};return y}function wa(r,n,s){var t=nr(s);function a(f,g){return pe(f).filter(function(c){return c%g===0}).map(function(c){return f.slice(c,c+g)})}function l(f){return pe(f).reduce(function(g,c){var u=n.slice(te(g),c+1),p=u.reduce(function(m,S){return m+S},0);return!c||p>r?g.concat(c):g},[]).map(function(g,c,u){return f.slice(g,u[c+1])})}function d(f){return t?a(f,s):l(f)}var C={groupSlides:d};return C}function Ea(r,n,s,t,a){var l=t.align,d=t.axis,C=t.direction,f=t.startIndex,g=t.inViewThreshold,c=t.loop,u=t.speed,p=t.dragFree,m=t.slidesToScroll,S=t.skipSnaps,E=t.containScroll,y=n.getBoundingClientRect(),v=s.map(function(ne){return ne.getBoundingClientRect()}),h=la(C),j=ua(d,C),F=j.measureSize(y),x=Ca(F),w=oa(l,F),D=!c&&E!=="",P=c||E!=="",_=Fa(j,y,v,s,P),q=_.slideSizes,B=_.slideSizesWithGaps,Z=wa(F,B,m),U=ha(j,w,y,v,B,Z,D),W=U.snaps,V=U.snapsAligned,z=-te(W)+te(B),Q=pa(F,z,V,E).snapsContained,N=D?Q:V,X=ma(z,N,c).limit,ee=Tn($e(N),f,c),M=ee.clone(),K=pe(s),Y=function(){c||H.scrollBounds.constrain(H.dragHandler.pointerDown()),H.scrollBody.seek(A).update();var ne=H.scrollBody.settle(A);ne&&!H.dragHandler.pointerDown()&&(H.animation.stop(),a.emit("settle")),ne||a.emit("scroll"),c&&(H.scrollLooper.loop(H.scrollBody.direction()),H.slideLooper.loop()),H.translate.to(J),H.animation.proceed()},$=ia(Y),re=N[ee.get()],J=oe(re),A=oe(re),k=ga(J,u,1),R=ba(c,N,z,X,A),b=xa($,ee,M,R,A,a),L=ja(F,z,q,W,X,c,g),ae=da(j,h,r,A,ca(j),J,$,b,k,R,ee,a,x,c,p,S),H={containerRect:y,slideRects:v,animation:$,axis:j,direction:h,dragHandler:ae,eventStore:Ye(),percentOfView:x,index:ee,indexPrevious:M,limit:X,location:J,options:t,scrollBody:k,scrollBounds:fa(X,J,A,k,x),scrollLooper:Sa(z,X,J,[J,A]),scrollProgress:va(X),scrollSnaps:N,scrollTarget:R,scrollTo:b,slideLooper:ya(j,h,F,z,B,N,L,J,s),slidesToScroll:Z,slidesInView:L,slideIndexes:K,target:A,translate:_n(j,h,n)};return H}function Ba(){var r={};function n(d){return r[d]||[]}function s(d){return n(d).forEach(function(C){return C(d)}),l}function t(d,C){return r[d]=n(d).concat([C]),l}function a(d,C){return r[d]=n(d).filter(function(f){return f!==C}),l}var l={emit:s,off:a,on:t};return l}var Aa={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function sr(){function r(a,l){return zn(a,l||{})}function n(a,l){var d=JSON.stringify(ue(a.breakpoints||{})),C=JSON.stringify(ue(l.breakpoints||{}));return d!==C?!1:kn(a,l)}function s(a){var l=a.breakpoints||{},d=ue(l).filter(function(C){return window.matchMedia(C).matches}).map(function(C){return l[C]}).reduce(function(C,f){return r(C,f)},{});return r(a,d)}var t={merge:r,areEqual:n,atMedia:s};return t}function Da(){var r=sr(),n=r.atMedia,s=r.areEqual,t=[],a=[];function l(){return a.some(function(c){return c()})}function d(c){var u=n(c.options);return function(){return!s(u,n(c.options))}}function C(c,u){return a=c.map(d),t=c.filter(function(p){return n(p.options).active}),t.forEach(function(p){return p.init(u)}),c.reduce(function(p,m){var S;return Object.assign(p,(S={},S[m.name]=m,S))},{})}function f(){t=t.filter(function(c){return c.destroy()})}var g={init:C,destroy:f,haveChanged:l};return g}function le(r,n,s){var t=Ye(),a=sr(),l=Da(),d=Ba(),C=d.on,f=d.off,g=x,c=!1,u,p=a.merge(Aa,le.globalOptions),m=a.merge(p),S=[],E,y=0,v,h;function j(){var A=m.container,k=m.slides,R=dr(A)?r.querySelector(A):A;v=R||r.children[0];var b=dr(k)?v.querySelectorAll(k):k;h=[].slice.call(b||v.children)}function F(A,k){if(!c){if(p=a.merge(p,A),m=a.atMedia(p),j(),u=Ea(r,v,h,m,d),y=u.axis.measureSize(r.getBoundingClientRect()),!m.active)return w();if(u.translate.to(u.location),S=k||S,E=l.init(S,J),m.loop){if(!u.slideLooper.canLoop()){w(),F({loop:!1},k),p=a.merge(p,{loop:!0});return}u.slideLooper.loop()}m.draggable&&v.offsetParent&&h.length&&u.dragHandler.addActivationEvents()}}function x(A,k){var R=N();w(),F(a.merge({startIndex:R},A),k),d.emit("reInit")}function w(){u.dragHandler.removeAllEvents(),u.animation.stop(),u.eventStore.removeAll(),u.translate.clear(),u.slideLooper.clear(),l.destroy()}function D(){c||(c=!0,t.removeAll(),w(),d.emit("destroy"))}function P(){var A=a.atMedia(p),k=!a.areEqual(A,m),R=u.axis.measureSize(r.getBoundingClientRect()),b=y!==R,L=l.haveChanged();(b||k||L)&&x(),d.emit("resize")}function _(A){var k=u[A?"target":"location"].get(),R=m.loop?"removeOffset":"constrain";return u.slidesInView.check(u.limit[R](k))}function q(A){var k=_(A);return u.slideIndexes.filter(function(R){return k.indexOf(R)===-1})}function B(A,k,R){!m.active||c||(u.scrollBody.useBaseMass().useSpeed(k?100:m.speed),u.scrollTo.index(A,R||0))}function Z(A){var k=u.index.clone().add(1);B(k.get(),A===!0,-1)}function U(A){var k=u.index.clone().add(-1);B(k.get(),A===!0,1)}function W(){var A=u.index.clone().add(1);return A.get()!==N()}function V(){var A=u.index.clone().add(-1);return A.get()!==N()}function z(){return u.scrollSnaps.map(u.scrollProgress.get)}function Q(){return u.scrollProgress.get(u.location.get())}function N(){return u.index.get()}function X(){return u.indexPrevious.get()}function ee(){return u.dragHandler.clickAllowed()}function M(){return E}function K(){return u}function Y(){return r}function $(){return v}function re(){return h}var J={canScrollNext:W,canScrollPrev:V,clickAllowed:ee,containerNode:$,internalEngine:K,destroy:D,off:f,on:C,plugins:M,previousScrollSnap:X,reInit:g,rootNode:Y,scrollNext:Z,scrollPrev:U,scrollProgress:Q,scrollSnapList:z,scrollTo:B,selectedScrollSnap:N,slideNodes:re,slidesInView:_,slidesNotInView:q};return F(n,s),t.add(window,"resize",P),setTimeout(function(){return d.emit("init")},0),J}le.globalOptions=void 0;le.optionsHandler=sr;function Ia(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Cr(r){return r.concat().sort(function(n,s){return n.name>s.name?1:-1}).map(function(n){return n.options})}function Pa(r,n){if(r.length!==n.length)return!1;var s=le.optionsHandler().areEqual,t=Cr(r),a=Cr(n);return t.every(function(l,d){var C=a[d];return s(l,C)})}function tr(r,n){r===void 0&&(r={}),n===void 0&&(n=[]);var s=T.useRef(le.optionsHandler()),t=T.useRef(r),a=T.useRef(n),l=T.useState(),d=l[0],C=l[1],f=T.useState(),g=f[0],c=f[1],u=T.useCallback(function(){d&&d.reInit(t.current,a.current)},[d]);return T.useEffect(function(){if(Ia()&&g){le.globalOptions=tr.globalOptions;var p=le(g,t.current,a.current);return C(p),function(){return p.destroy()}}else C(void 0)},[g,C]),T.useEffect(function(){s.current.areEqual(t.current,r)||(t.current=r,u())},[r,u]),T.useEffect(function(){Pa(a.current,n)||(a.current=n,u())},[n,u]),[c,d]}tr.globalOptions=void 0;const[za,se]=Rn({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),ka=({index:r,defaultIndex:n=0,onChange:s,align:t="center",orientation:a="horizontal",autoplay:l=!1,stopMouseEnterAutoplay:d=!0,loop:C=!0,speed:f=10,delay:g=4e3,gap:c="fallback(4, 1rem)",slidesToScroll:u=1,draggable:p=!0,dragFree:m=!1,inViewThreshold:S=0,skipSnaps:E=!1,containScroll:y="",slideSize:v="100%",includeGapInSize:h=!0,onScrollProgress:j,children:F,...x})=>{const w=qn(x,Wn),[D,P]=Vn({value:r,defaultValue:n,onChange:s}),_=a==="vertical",[q,B]=tr({axis:_?"y":"x",startIndex:n,loop:C,align:t,slidesToScroll:u,draggable:p,dragFree:m,speed:f,inViewThreshold:S,skipSnaps:E,containScroll:y}),[Z,U]=T.useState([]),[W,V]=T.useState(!1),z=T.useRef(void 0),Q=T.useCallback(()=>{if(!B)return;const M=Math.round(Math.max(0,Math.min(1,B.scrollProgress()))*100);j==null||j(M)},[B,j]),N=T.useCallback(()=>{if(!B)return;const M=B.selectedScrollSnap();P(M)},[B,P]);T.useEffect(()=>{const M=W&&d,K=!(B!=null&&B.canScrollNext());return B&&l&&!M&&!K?z.current=setInterval(()=>{B.scrollNext()},g):(z.current&&clearInterval(z.current),z.current=void 0),()=>{z.current&&clearInterval(z.current)}},[l,g,d,B,W,C,D]),Ze(()=>{if(!B)return;B.reInit();const K=B.scrollSnapList().map((Y,$)=>$);U(K)},[T.Children.toArray(F).length,t,a,C,f,c,u,p,m,S,E,y,v,h]),Ze(()=>{if(!B)return;const K=B.scrollSnapList().map((Y,$)=>$);U(K)},[B]),Ze(()=>{if(B)return B.on("select",N),B.on("scroll",Q),Q(),()=>{B.off("select",N),B.off("scroll",Q)}},[B,Q]);const X=T.useCallback((M={},K=null)=>({...w[0],...M,ref:K,onMouseEnter:Je(M.onMouseEnter,()=>{V(!0)}),onMouseLeave:Je(M.onMouseLeave,()=>{V(!1)})}),[w]),ee=T.useCallback((M={})=>({...w[1],...M,ref:q}),[w,q]);return{carousel:B,children:F,indexes:Z,selectedIndex:D,orientation:a,slideSize:v,gap:c,slidesToScroll:u,includeGapInSize:h,getContainerProps:X,getSlidesProps:ee}},Ta=({index:r})=>{const{selectedIndex:n,slidesToScroll:s}=se();r=Math.floor((r??0)/(s??1));const t=r===n;return{getSlideProps:T.useCallback((l={})=>({...l,"data-index":r,"data-selected":Dn(t)}),[t,r])}},Mn=({operation:r,...n})=>{const{carousel:s}=se(),t=r==="prev",a=n.disabled??n.isDisabled??(t?!(s!=null&&s.canScrollPrev()):!(s!=null&&s.canScrollNext())),l=T.useCallback(()=>{s&&(t?s.scrollPrev():s.scrollNext())},[s,t]);return{getControlProps:T.useCallback((C={},f=null)=>({...C,ref:f,disabled:a,onClick:Je(C.onClick,l)}),[a,l])}},_a=()=>{const{selectedIndex:r,carousel:n,indexes:s}=se(),t=T.useCallback((l,d)=>{n&&(l.stopPropagation(),n.scrollTo(d))},[n]),a=T.useCallback(({index:l,...d})=>{const C=l===r;return{"aria-label":`Go to ${l+1} slide`,...d,key:l,"data-index":l,"data-selected":Dn(C),onClick:Je(d.onClick,f=>t(f,l))}},[t,r]);return{indexes:s,getIndicatorProps:a}},I=ie(({h:r,height:n,minH:s,minHeight:t,...a},l)=>{const d=G(a.orientation),C=G(a.align),f=G(a.autoplay),g=G(a.stopMouseEnterAutoplay),c=G(a.loop),u=G(a.speed),p=G(a.delay),m=G(a.slidesToScroll),S=G(a.draggable),E=G(a.dragFree),y=G(a.inViewThreshold),v=G(a.skipSnaps),h=G(a.containScroll),j=G(a.includeGapInSize),F=ir("spaces",G(a.gap))??G(a.gap),x=ir("sizes",G(a.slideSize))??G(a.slideSize),[w,D]=$n("Carousel",{...a,orientation:d,align:C,autoplay:f,stopMouseEnterAutoplay:g,loop:c,speed:u,delay:p,slidesToScroll:m,draggable:S,dragFree:E,inViewThreshold:y,skipSnaps:v,containScroll:h,includeGapInSize:j,gap:F,slideSize:x}),{className:P,innerProps:_,withControls:q=!0,controlProps:B,controlPrevProps:Z,controlNextProps:U,withIndicators:W=!0,indicatorsProps:V,...z}=Zn(D),Q=G(q),N=G(W),{getContainerProps:X,getSlidesProps:ee,children:M,...K}=ka({...z}),Y=Xn(M),[$]=er(Y,Ue),[re]=er(Y,Qe),[J]=er(Y,Ke),A=Un(Y,o),k=Qn(Y,Ue,Qe,Ke,o),R=A.map((b,L)=>T.cloneElement(b,{index:L}));return r??(r=n),s??(s=t),e.jsx(za,{value:{styles:w,...K},children:e.jsxs(de.div,{className:ce("ui-carousel",P),__css:{position:"relative",h:"fit-content",...w.container},...X({},l),children:[$??(Q?e.jsx(Ue,{...B,...Z}):null),re??(Q?e.jsx(Qe,{...B,...U}):null),e.jsx(Ma,{...ee({...Kn({h:r,minH:s}),..._}),children:R}),J??(N?e.jsx(Ke,{...V}):null),k]})})}),Ma=ie(({...r},n)=>{const s={w:"100%",h:"fit-content",overflow:"hidden"};return e.jsx(de.div,{ref:n,className:"ui-carousel__sliders",__css:s,children:e.jsx(Oa,{...r})})}),Oa=({...r})=>{const{orientation:n,includeGapInSize:s,gap:t,styles:a}=se(),l={display:"flex",flexDirection:n==="vertical"?"column":"row",...a.inner,...s?{var:[{__prefix:"ui",name:"gap",token:"spaces",value:t}],[n==="vertical"?"mb":"mr"]:ea.negate("var(--ui-gap)")}:{}};return e.jsx(de.div,{className:"ui-carousel__sliders__inner",__css:l,...r})},o=ie(({className:r,size:n,...s},t)=>{const{slideSize:a,includeGapInSize:l,orientation:d,gap:C}=se(),{getSlideProps:f}=Ta(s);n??(n=a);const g={position:"relative",flex:`0 0 ${n}`,...l?{[d==="vertical"?"pb":"pr"]:C}:{[d==="vertical"?"mb":"mr"]:C}};return e.jsx(de.div,{className:ce("ui-carousel__slide",r),__css:g,...f({}),children:e.jsx(Na,{ref:t,...s})})}),Na=ie(({...r},n)=>e.jsx(de.div,{ref:n,className:"ui-carousel__slide__inner",w:"100%",h:"100%",...r})),Ue=ie(({className:r,...n},s)=>{const{orientation:t}=se(),{getControlProps:a}=Mn({operation:"prev"});return e.jsx(On,{operation:"prev",className:ce("ui-carousel__control--prev",r),"aria-label":"Go to previous slide",icon:e.jsx(In,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),...a(n,s)})}),Qe=ie(({className:r,...n},s)=>{const{orientation:t}=se(),{getControlProps:a}=Mn({operation:"next"});return e.jsx(On,{operation:"next",className:ce("ui-carousel__control--next",r),"aria-label":"Go to next slide",icon:e.jsx(In,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),...a(n,s)})}),On=ie(({className:r,operation:n,...s},t)=>{const{styles:a}=se(),l=Jn("whiteAlpha","blackAlpha"),d={position:"absolute",zIndex:"fallback(kurillin, 9)",...a.control,...a[n]};return e.jsx(Yn,{ref:t,className:ce("ui-carousel__control",r),colorScheme:l,isRounded:!0,__css:d,...s})}),Ke=ie(({className:r,component:n,...s},t)=>{const{selectedIndex:a,orientation:l,styles:d}=se(),{indexes:C,getIndicatorProps:f}=_a(),g={position:"absolute",zIndex:"fallback(kurillin, 9)",display:"flex",justifyContent:"center",...d.indicators,...l==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(de.div,{ref:t,className:ce("ui-carousel__indicators",r),__css:g,...s,children:C.map(c=>{const u=c===a;if(typeof n=="function"){const p=n({index:c,isSelected:u});if(!p)return null;const m=f({...p.props,index:c});return T.cloneElement(p,m)}else{const{key:p,...m}=f({index:c});return e.jsx(La,{...m},p)}})})}),La=({className:r,...n})=>{const{styles:s}=se(),t={...s.indicator};return e.jsx(de.button,{type:"button",tabIndex:-1,className:ce("ui-carousel__indicators__indicator",r),__css:t,...n})},bs={title:"Components / Data Display / Carousel",component:I},Fe=()=>e.jsxs(I,{children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),we=()=>e.jsxs(e.Fragment,{children:[e.jsxs(I,{size:"sm",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{size:"md",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{size:"lg",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{size:"xl",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),Ee=()=>e.jsxs(e.Fragment,{children:[e.jsxs(I,{orientation:"horizontal",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{orientation:"vertical",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),Be=()=>e.jsxs(I,{defaultIndex:1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ae=()=>e.jsxs(I,{gap:0,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),De=()=>e.jsxs(I,{speed:50,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ie=()=>e.jsxs(I,{slideSize:"50%",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",size:"100%",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Pe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(I,{slideSize:"50%",align:"center",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{slideSize:"50%",align:"start",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{slideSize:"50%",align:"end",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),ze=()=>e.jsxs(I,{slideSize:"33.3%",slidesToScroll:3,loop:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"}),e.jsx(o,{as:i,bg:"primary",children:"5"}),e.jsx(o,{as:i,bg:"secondary",children:"6"}),e.jsx(o,{as:i,bg:"danger",children:"7"}),e.jsx(o,{as:i,bg:"primary",children:"8"}),e.jsx(o,{as:i,bg:"secondary",children:"9"})]}),ke=()=>e.jsxs(I,{slideSize:"50%",align:"start",slidesToScroll:2,h:"auto",children:[e.jsxs(o,{as:me,variant:"outline",children:[e.jsx(Se,{justifyContent:"center",children:e.jsx(be,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ve,{children:[e.jsx(xe,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(ye,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(he,{children:e.jsx(je,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:me,variant:"outline",children:[e.jsx(Se,{justifyContent:"center",children:e.jsx(be,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ve,{children:[e.jsx(xe,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(ye,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(he,{children:e.jsx(je,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:me,variant:"outline",children:[e.jsx(Se,{justifyContent:"center",children:e.jsx(be,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ve,{children:[e.jsx(xe,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(ye,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(he,{children:e.jsx(je,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:me,variant:"outline",children:[e.jsx(Se,{justifyContent:"center",children:e.jsx(be,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ve,{children:[e.jsx(xe,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(ye,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(he,{children:e.jsx(je,{colorScheme:"primary",children:"Wikipedia"})})]})]}),Te=()=>e.jsxs(I,{autoplay:!0,loop:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),_e=()=>e.jsxs(I,{autoplay:!0,delay:1e3,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Me=()=>e.jsxs(I,{dragFree:!0,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Oe=()=>{const[r,n]=T.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(I,{loop:!1,dragFree:!0,onScrollProgress:n,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsx(ra,{value:r,colorScheme:"gray"})]})},Ne=()=>e.jsxs(I,{slideSize:"50%",includeGapInSize:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Le=()=>e.jsxs(I,{loop:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),He=()=>e.jsxs(I,{draggable:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ge=()=>e.jsxs(I,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ve=()=>e.jsxs(I,{withControls:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(I,{withIndicators:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),qe=()=>{const[r,n]=T.useState(0);return e.jsxs(I,{draggable:!1,index:r,onChange:n,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})},We=()=>e.jsxs(e.Fragment,{children:[e.jsxs(I,{controlProps:{icon:e.jsx(Pn,{})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{controlPrevProps:{icon:e.jsx(ur,{})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{controlNextProps:{icon:e.jsx(lr,{})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{children:[e.jsx(Ue,{icon:e.jsx(ur,{})}),e.jsx(Qe,{icon:e.jsx(lr,{})}),e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),Xe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(I,{indicatorsProps:{bottom:"8",component:({isSelected:r})=>e.jsx(Pn,{fontSize:"2xl",color:r?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer"})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(I,{children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"}),e.jsx(Ke,{sx:{"& > *":{w:"4",_selected:{w:"12"},transitionProperty:"width",transitionDuration:"slower"}}})]})]});var gr,fr,pr;Fe.parameters={...Fe.parameters,docs:{...(gr=Fe.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
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
}`,...(pr=(fr=Fe.parameters)==null?void 0:fr.docs)==null?void 0:pr.source}}};var mr,Sr,vr;we.parameters={...we.parameters,docs:{...(mr=we.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
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
}`,...(vr=(Sr=we.parameters)==null?void 0:Sr.docs)==null?void 0:vr.source}}};var hr,br,xr;Ee.parameters={...Ee.parameters,docs:{...(hr=Ee.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
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
}`,...(xr=(br=Ee.parameters)==null?void 0:br.docs)==null?void 0:xr.source}}};var yr,jr,Fr;Be.parameters={...Be.parameters,docs:{...(yr=Be.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
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
}`,...(Fr=(jr=Be.parameters)==null?void 0:jr.docs)==null?void 0:Fr.source}}};var wr,Er,Br;Ae.parameters={...Ae.parameters,docs:{...(wr=Ae.parameters)==null?void 0:wr.docs,source:{originalSource:`() => {
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
}`,...(Br=(Er=Ae.parameters)==null?void 0:Er.docs)==null?void 0:Br.source}}};var Ar,Dr,Ir;De.parameters={...De.parameters,docs:{...(Ar=De.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
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
}`,...(Ir=(Dr=De.parameters)==null?void 0:Dr.docs)==null?void 0:Ir.source}}};var Pr,zr,kr;Ie.parameters={...Ie.parameters,docs:{...(Pr=Ie.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
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
}`,...(kr=(zr=Ie.parameters)==null?void 0:zr.docs)==null?void 0:kr.source}}};var Tr,_r,Mr;Pe.parameters={...Pe.parameters,docs:{...(Tr=Pe.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
}`,...(Mr=(_r=Pe.parameters)==null?void 0:_r.docs)==null?void 0:Mr.source}}};var Or,Nr,Lr;ze.parameters={...ze.parameters,docs:{...(Or=ze.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
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
}`,...(Lr=(Nr=ze.parameters)==null?void 0:Nr.docs)==null?void 0:Lr.source}}};var Hr,Gr,Vr;ke.parameters={...ke.parameters,docs:{...(Hr=ke.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
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
}`,...(Vr=(Gr=ke.parameters)==null?void 0:Gr.docs)==null?void 0:Vr.source}}};var Rr,qr,Wr;Te.parameters={...Te.parameters,docs:{...(Rr=Te.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
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
}`,...(Wr=(qr=Te.parameters)==null?void 0:qr.docs)==null?void 0:Wr.source}}};var Xr,Ur,Qr;_e.parameters={..._e.parameters,docs:{...(Xr=_e.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...(Qr=(Ur=_e.parameters)==null?void 0:Ur.docs)==null?void 0:Qr.source}}};var Kr,Jr,Yr;Me.parameters={...Me.parameters,docs:{...(Kr=Me.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
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
}`,...(Yr=(Jr=Me.parameters)==null?void 0:Jr.docs)==null?void 0:Yr.source}}};var $r,Zr,en;Oe.parameters={...Oe.parameters,docs:{...($r=Oe.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
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
}`,...(en=(Zr=Oe.parameters)==null?void 0:Zr.docs)==null?void 0:en.source}}};var rn,nn,an;Ne.parameters={...Ne.parameters,docs:{...(rn=Ne.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
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
}`,...(an=(nn=Ne.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var sn,tn,on;Le.parameters={...Le.parameters,docs:{...(sn=Le.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
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
}`,...(on=(tn=Le.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var un,ln,dn;He.parameters={...He.parameters,docs:{...(un=He.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(dn=(ln=He.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var cn,Cn,gn;Ge.parameters={...Ge.parameters,docs:{...(cn=Ge.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
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
}`,...(gn=(Cn=Ge.parameters)==null?void 0:Cn.docs)==null?void 0:gn.source}}};var fn,pn,mn;Ve.parameters={...Ve.parameters,docs:{...(fn=Ve.parameters)==null?void 0:fn.docs,source:{originalSource:`() => {
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
}`,...(mn=(pn=Ve.parameters)==null?void 0:pn.docs)==null?void 0:mn.source}}};var Sn,vn,hn;Re.parameters={...Re.parameters,docs:{...(Sn=Re.parameters)==null?void 0:Sn.docs,source:{originalSource:`() => {
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
}`,...(hn=(vn=Re.parameters)==null?void 0:vn.docs)==null?void 0:hn.source}}};var bn,xn,yn;qe.parameters={...qe.parameters,docs:{...(bn=qe.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
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
}`,...(yn=(xn=qe.parameters)==null?void 0:xn.docs)==null?void 0:yn.source}}};var jn,Fn,wn;We.parameters={...We.parameters,docs:{...(jn=We.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  return <>
      <Carousel controlProps={{
      icon: <Ghost />
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
      icon: <ArrowLeft />
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
      icon: <ArrowRight />
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
        <CarouselControlPrev icon={<ArrowLeft />} />
        <CarouselControlNext icon={<ArrowRight />} />

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
}`,...(wn=(Fn=We.parameters)==null?void 0:Fn.docs)==null?void 0:wn.source}}};var En,Bn,An;Xe.parameters={...Xe.parameters,docs:{...(En=Xe.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  return <>
      <Carousel indicatorsProps={{
      bottom: "8",
      component: ({
        isSelected
      }) => <Ghost fontSize="2xl" color={isSelected ? "whiteAlpha.700" : "whiteAlpha.400"} cursor="pointer" />
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
}`,...(An=(Bn=Xe.parameters)==null?void 0:Bn.docs)==null?void 0:An.source}}};const xs=["basic","withSize","withOrientation","withDefaultIndex","withGap","withSpeed","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","customControl","customControlButton","customIndicators"];export{xs as __namedExportsOrder,Fe as basic,qe as customControl,We as customControlButton,Xe as customIndicators,bs as default,Ve as disabledControlButton,He as disabledDraggable,Ne as disabledIncludeGapInSize,Re as disabledIndicators,Le as disabledLoop,Ge as disabledStopMouseEnterAutoplay,Pe as withAlign,Te as withAutoplay,ke as withCard,Be as withDefaultIndex,_e as withDelay,Me as withDragFree,Ae as withGap,Ee as withOrientation,Oe as withScrollProgress,we as withSize,Ie as withSlideSize,ze as withSlidesToScroll,De as withSpeed};
