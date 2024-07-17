import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as D}from"./index-BwDkhjyp.js";import{u as ir}from"./index-CE9KK7vS.js";import{u as G}from"./index-CxRVbt0J.js";import{u as Vn}from"./index-BBYPUtnS.js";import{l as Rn,a0 as qn,a1 as Wn,f as Ze,h as Je,d as zn,t as Xn,w as er,Y as Un,a4 as Qn,b as ce,c as ue,A as Kn,G as Jn}from"./factory-C350H5ew.js";import{f as ie}from"./forward-ref-BmTAT9U5.js";import{c as kn}from"./icon-DNjxCNYA.js";import{I as Yn}from"./icon-button-BD-iFlsW.js";import{a as $n}from"./use-component-style-Deru9ana.js";import{o as Zn,e as ea}from"./theme-provider-Dk_cT8DX.js";import{P as ra}from"./progress-CyR9jIJp.js";import{A as lr}from"./arrow-left-DrsXYl9J.js";import{A as dr}from"./arrow-right-DJ0CIiUN.js";import{C as i}from"./center-BBcBgq3f.js";import{C as me,a as Se,b as ve,c as he}from"./card-9sauQvy4.js";import{I as be}from"./image-DmefPj-C.js";import{H as xe}from"./heading-yvxOe2cP.js";import{T as ye}from"./text-Bvuw3AK1.js";import{B as je}from"./button-Dcpd4CC4.js";import{G as Tn}from"./ghost-D-3sbtgV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3wegYoUk.js";import"./extends-CF3RwP-h.js";import"./index-DZzfrAcX.js";import"./index-Du0-7Fls.js";import"./index-BREjiUHm.js";import"./number-49BHn0Cl.js";import"./lucide-icon-BA2PCwti.js";import"./use-image-DS4piDzt.js";import"./use-ripple-7ZdFmUrk.js";import"./index-C9ZzZzxO.js";import"./motion-KSTl0G6b.js";import"./motion-CsCega8z.js";import"./loading-BZABKEnu.js";function na(r,n,s,t,a){return t+(a-t)*((r-n)/(s-n))}function nr(r){return typeof r=="number"}function cr(r){return typeof r=="string"}function rr(r){return Object.prototype.toString.call(r)==="[object Object]"}function aa(r){return Array.isArray(r)}function ur(r){return rr(r)||aa(r)}function N(r){return Math.abs(r)}function ar(r){return r?r/N(r):0}function Ce(r,n){return N(r-n)}function sa(r,n){if(r===0||n===0||N(r)<=N(n))return 0;var s=Ce(N(r),N(n));return N(s/r)}function ta(r){var n=Math.pow(10,r);return function(s){return Math.round(s*n)/n}}function pe(r){return le(r).map(Number)}function te(r){return r[$e(r)]}function $e(r){return Math.max(0,r.length-1)}function le(r){return Object.keys(r)}function _n(r,n){return[r,n].reduce(function(s,t){return le(t).forEach(function(a){var d=s[a],c=t[a],g=rr(d)&&rr(c);s[a]=g?_n(d,c):c}),s},{})}function Bn(r,n){var s=le(r),t=le(n);return s.length!==t.length?!1:s.every(function(a){var d=r[a],c=n[a];return typeof d=="function"?"".concat(d)==="".concat(c):!ur(d)||!ur(c)?d===c:Bn(d,c)})}function oa(r,n){var s={start:t,center:a,end:d};function t(){return 0}function a(f){return d(f)/2}function d(f){return n-f}function c(){return n*Number(r)}function g(f){return nr(r)?c():s[r](f)}var C={measure:g};return C}function ia(r){var n=0;function s(c,g){return function(){c===!!n&&g()}}function t(){n=window.requestAnimationFrame(r)}function a(){window.cancelAnimationFrame(n),n=0}var d={proceed:s(!0,t),start:s(!1,t),stop:s(!0,a)};return d}function la(r,n){var s=r==="y"?"y":"x",t=r==="y"?"x":"y",a=g(),d=C();function c(u){var l=u.width,p=u.height;return s==="x"?l:p}function g(){return s==="y"?"top":n==="rtl"?"right":"left"}function C(){return s==="y"?"bottom":n==="rtl"?"left":"right"}var f={scroll:s,cross:t,startEdge:a,endEdge:d,measureSize:c};return f}function ge(r,n){var s=N(r-n);function t(f){return f<r}function a(f){return f>n}function d(f){return t(f)||a(f)}function c(f){return d(f)?t(f)?r:n:f}function g(f){return s?f-s*Math.ceil((f-n)/s):f}var C={length:s,max:n,min:r,constrain:c,reachedAny:d,reachedMax:a,reachedMin:t,removeOffset:g};return C}function Dn(r,n,s){var t=ge(0,r),a=t.min,d=t.constrain,c=r+1,g=C(n);function C(S){return s?N((c+S)%c):d(S)}function f(){return g}function u(S){return g=C(S),m}function l(S){return u(f()+S)}function p(){return Dn(r,f(),s)}var m={add:l,clone:p,get:f,set:u,min:a,max:r};return m}function da(r){var n=r==="rtl"?-1:1;function s(a){return a*n}var t={apply:s};return t}function Ye(){var r=[];function n(a,d,c,g){return g===void 0&&(g={passive:!0}),a.addEventListener(d,c,g),r.push(function(){return a.removeEventListener(d,c,g)}),t}function s(){return r=r.filter(function(a){return a()}),t}var t={add:n,removeAll:s};return t}function oe(r){var n=r;function s(){return n}function t(l){return n=f(l),u}function a(l){return n+=f(l),u}function d(l){return n-=f(l),u}function c(l){return n*=l,u}function g(l){return n/=l,u}function C(){return n!==0&&g(n),u}function f(l){return nr(l)?l:l.get()}var u={add:a,divide:g,get:s,multiply:c,normalize:C,set:t,subtract:d};return u}function ca(r,n,s,t,a,d,c,g,C,f,u,l,p,m,S,I){var y=r.cross,v=["INPUT","SELECT","TEXTAREA"],h={passive:!1},j=oe(0),w=Ye(),x=Ye(),E=p.measure(20),z={mouse:300,touch:400},T={mouse:500,touch:600},M=S?5:16,q=1,A=0,Z=0,U=!1,W=!1,V=!1,_=!1;function Q(){var b=s;w.add(b,"dragstart",function(F){return F.preventDefault()},h).add(b,"touchmove",function(){},h).add(b,"touchend",function(){}).add(b,"touchstart",Y).add(b,"mousedown",Y).add(b,"touchcancel",re).add(b,"contextmenu",re).add(b,"click",J,!0)}function L(){var b=_?document:s;x.add(b,"touchmove",$,h).add(b,"touchend",re).add(b,"mousemove",$,h).add(b,"mouseup",re)}function X(){w.removeAll(),x.removeAll()}function ee(b){var F=b.nodeName||"";return v.indexOf(F)>-1}function O(){var b=S?T:z,F=_?"mouse":"touch";return b[F]}function K(b,F){var ae=u.clone().add(ar(b)*-1),H=ae.get()===u.min||ae.get()===u.max,ne=f.byDistance(b,!S).distance;return S||N(b)<E?ne:!m&&H?ne*.4:I&&F?ne*.5:f.byIndex(ae.get(),0).distance}function Y(b){if(_=!a.isTouchEvent(b),!(_&&b.button!==0)&&!ee(b.target)){var F=Ce(t.get(),d.get())>=2,ae=_||!F;U=!0,a.pointerDown(b),j.set(t),t.set(d),C.useBaseMass().useSpeed(80),L(),A=a.readPoint(b),Z=a.readPoint(b,y),l.emit("pointerDown"),ae&&(V=!1)}}function $(b){if(!W&&!_){if(!b.cancelable)return re(b);var F=a.readPoint(b),ae=a.readPoint(b,y),H=Ce(F,A),ne=Ce(ae,Z);if(W=H>ne,!W&&!V)return re(b)}var fe=a.pointerMove(b);!V&&fe&&(V=!0),c.start(),t.add(n.apply(fe)),b.preventDefault()}function re(b){var F=f.byDistance(0,!1),ae=F.index!==u.get(),H=a.pointerUp(b)*O(),ne=K(n.apply(H),ae),fe=sa(H,ne),Ln=Ce(t.get(),j.get())>=.5,or=ae&&fe>.75,Fn=N(H)<E,Hn=or?10:M,Gn=or?q+2.5*fe:q;Ln&&!_&&(V=!0),W=!1,U=!1,x.removeAll(),C.useSpeed(Fn?9:Hn).useMass(Gn),g.distance(ne,!S),_=!1,l.emit("pointerUp")}function J(b){V&&(b.stopPropagation(),b.preventDefault())}function P(){return!V}function B(){return U}var R={addActivationEvents:Q,clickAllowed:P,pointerDown:B,removeAllEvents:X};return R}function ua(r){var n=170,s,t;function a(l){return typeof TouchEvent<"u"&&l instanceof TouchEvent}function d(l){return l.timeStamp}function c(l,p){var m=p||r.scroll,S="client".concat(m==="x"?"X":"Y");return(a(l)?l.touches[0]:l)[S]}function g(l){return s=l,t=l,c(l)}function C(l){var p=c(l)-c(t),m=d(l)-d(s)>n;return t=l,m&&(s=l),p}function f(l){if(!s||!t)return 0;var p=c(t)-c(s),m=d(l)-d(s),S=d(l)-d(t)>n,I=p/m,y=m&&!S&&N(I)>.1;return y?I:0}var u={isTouchEvent:a,pointerDown:g,pointerMove:C,pointerUp:f,readPoint:c};return u}function ga(r){function n(t){return r*(t/100)}var s={measure:n};return s}function fa(r,n,s){var t=ta(2),a=oe(0),d=oe(0),c=oe(0),g=0,C=n,f=s;function u(){a.add(d),r.add(a),d.multiply(0)}function l(w){w.divide(f),d.add(w)}function p(w){c.set(w).subtract(r);var x=na(c.get(),0,100,0,C);return g=ar(c.get()),c.normalize().multiply(x).subtract(a),l(c),j}function m(w){var x=w.get()-r.get(),E=!t(x);return E&&r.set(w),E}function S(){return g}function I(){return v(n)}function y(){return h(s)}function v(w){return C=w,j}function h(w){return f=w,j}var j={direction:S,seek:p,settle:m,update:u,useBaseMass:y,useBaseSpeed:I,useMass:h,useSpeed:v};return j}function Ca(r,n,s,t,a){var d=a.measure(10),c=a.measure(50),g=.85,C=!1;function f(){return!(C||!r.reachedAny(s.get())||!r.reachedAny(n.get()))}function u(m){if(f()){var S=r.reachedMin(n.get())?"min":"max",I=N(r[S]-n.get()),y=s.get()-n.get(),v=Math.min(I/c,g);s.subtract(y*v),!m&&N(y)<d&&(s.set(r.constrain(s.get())),t.useSpeed(10).useMass(3))}}function l(m){C=!m}var p={constrain:u,toggleActive:l};return p}function pa(r,n,s,t){var a=ge(-n+r,s[0]),d=s.map(a.constrain),c=C();function g(){var u=d[0],l=te(d),p=d.lastIndexOf(u),m=d.indexOf(l)+1;return ge(p,m)}function C(){if(n<=r)return[a.max];if(t==="keepSnaps")return d;var u=g(),l=u.min,p=u.max;return d.slice(l,p)}var f={snapsContained:c};return f}function ma(r,n,s){var t=a();function a(){var c=n[0],g=te(n),C=s?c-r:g,f=c;return ge(C,f)}var d={limit:t};return d}function Sa(r,n,s,t){var a=.1,d=n.min+a,c=n.max+a,g=ge(d,c),C=g.reachedMin,f=g.reachedMax;function u(m){return m===1?f(s.get()):m===-1?C(s.get()):!1}function l(m){if(u(m)){var S=r*(m*-1);t.forEach(function(I){return I.add(S)})}}var p={loop:l};return p}function va(r){var n=r.max,s=r.length;function t(d){var c=d-n;return c/-s}var a={get:t};return a}function ha(r,n,s,t,a,d,c){var g=r.startEdge,C=r.endEdge,f=d.groupSlides,u=m().map(n.measure),l=S(),p=I();function m(){return f(t).map(function(v){return te(v)[C]-v[0][g]}).map(N)}function S(){return t.map(function(v){return s[g]-v[g]}).map(function(v){return-N(v)})}function I(){var v=0,h=te(l)-te(a);return f(l).map(function(j){return j[0]}).map(function(j,w,x){var E=!w,z=w===$e(x);return c&&E?v:c&&z?h:j+u[w]})}var y={snaps:l,snapsAligned:p};return y}function ba(r,n,s,t,a){var d=t.reachedAny,c=t.removeOffset,g=t.constrain;function C(S){return S.concat().sort(function(I,y){return N(I)-N(y)})[0]}function f(S){var I=r?c(S):g(S),y=n.map(function(h){return h-I}).map(function(h){return u(h,0)}).map(function(h,j){return{diff:h,index:j}}).sort(function(h,j){return N(h.diff)-N(j.diff)}),v=y[0].index;return{index:v,distance:I}}function u(S,I){var y=[S,S+s,S-s];if(!r)return y[0];if(!I)return C(y);var v=y.filter(function(h){return ar(h)===I});return C(v)}function l(S,I){var y=n[S]-a.get(),v=u(y,I);return{index:S,distance:v}}function p(S,I){var y=a.get()+S,v=f(y),h=v.index,j=v.distance,w=!r&&d(y);if(!I||w)return{index:h,distance:S};var x=n[h]-j,E=S+u(x,0);return{index:h,distance:E}}var m={byDistance:p,byIndex:l,shortcut:u};return m}function xa(r,n,s,t,a,d){function c(u){var l=u.distance,p=u.index!==n.get();l&&(r.start(),a.add(l)),p&&(s.set(n.get()),n.set(u.index),d.emit("select"))}function g(u,l){var p=t.byDistance(u,l);c(p)}function C(u,l){var p=n.clone().set(u),m=t.byIndex(p.get(),l);c(m)}var f={distance:g,index:C};return f}function Mn(r,n,s){var t=r.scroll==="x"?c:g,a=s.style,d=!1;function c(p){return"translate3d(".concat(p,"px,0px,0px)")}function g(p){return"translate3d(0px,".concat(p,"px,0px)")}function C(p){d||(a.transform=t(n.apply(p.get())))}function f(p){d=!p}function u(){d||(a.transform="",s.getAttribute("style")||s.removeAttribute("style"))}var l={clear:u,to:C,toggleActive:f};return l}function ya(r,n,s,t,a,d,c,g,C){var f=pe(a),u=pe(a).reverse(),l=I().concat(y());function p(x,E){return x.reduce(function(z,T){return z-a[T]},E)}function m(x,E){return x.reduce(function(z,T){var M=p(z,E);return M>0?z.concat([T]):z},[])}function S(x,E){var z=E==="start",T=z?-t:t,M=c.findSlideBounds([T]);return x.map(function(q){var A=z?0:-t,Z=z?t:0,U=M.filter(function(X){return X.index===q})[0],W=U[z?"end":"start"],V=oe(-1),_=oe(-1),Q=Mn(r,n,C[q]),L=function(){return V.set(g.get()>W?A:Z)};return{index:q,location:_,translate:Q,target:L}})}function I(){var x=d[0]-1,E=m(u,x);return S(E,"end")}function y(){var x=s-d[0]-1,E=m(f,x);return S(E,"start")}function v(){return l.every(function(x){var E=x.index,z=f.filter(function(T){return T!==E});return p(z,s)<=.1})}function h(){l.forEach(function(x){var E=x.target,z=x.translate,T=x.location,M=E();M.get()!==T.get()&&(M.get()===0?z.clear():z.to(M),T.set(M))})}function j(){l.forEach(function(x){return x.translate.clear()})}var w={canLoop:v,clear:j,loop:h,loopPoints:l};return w}function ja(r,n,s,t,a,d,c){var g=a.removeOffset,C=a.constrain,f=.5,u=d?[0,n,-n]:[0],l=m(u,c);function p(y){var v=y||0;return s.map(function(h){var j=ge(f,h-f);return j.constrain(h*v)})}function m(y,v){var h=y||u,j=p(v);return h.reduce(function(w,x){var E=t.map(function(z,T){return{start:z-s[T]+j[T]+x,end:z+r-j[T]+x,index:T}});return w.concat(E)},[])}function S(y,v){var h=d?g(y):C(y),j=v||l;return j.reduce(function(w,x){var E=x.index,z=x.start,T=x.end,M=w.indexOf(E)!==-1,q=z<h&&T>h;return!M&&q?w.concat([E]):w},[])}var I={check:S,findSlideBounds:m};return I}function wa(r,n,s,t,a){var d=r.measureSize,c=r.startEdge,g=r.endEdge,C=s[0]&&a,f=m(),u=S(),l=s.map(d),p=I();function m(){if(!C)return 0;var v=s[0];return N(n[c]-v[c])}function S(){if(!C)return 0;var v=window.getComputedStyle(te(t));return parseFloat(v.getPropertyValue("margin-".concat(g)))}function I(){return s.map(function(v,h,j){var w=!h,x=h===$e(j);return w?l[h]+f:x?l[h]+u:j[h+1][c]-v[c]}).map(N)}var y={slideSizes:l,slideSizesWithGaps:p};return y}function Ea(r,n,s){var t=nr(s);function a(C,f){return pe(C).filter(function(u){return u%f===0}).map(function(u){return C.slice(u,u+f)})}function d(C){return pe(C).reduce(function(f,u){var l=n.slice(te(f),u+1),p=l.reduce(function(m,S){return m+S},0);return!u||p>r?f.concat(u):f},[]).map(function(f,u,l){return C.slice(f,l[u+1])})}function c(C){return t?a(C,s):d(C)}var g={groupSlides:c};return g}function Ia(r,n,s,t,a){var d=t.align,c=t.axis,g=t.direction,C=t.startIndex,f=t.inViewThreshold,u=t.loop,l=t.speed,p=t.dragFree,m=t.slidesToScroll,S=t.skipSnaps,I=t.containScroll,y=n.getBoundingClientRect(),v=s.map(function(ne){return ne.getBoundingClientRect()}),h=da(g),j=la(c,g),w=j.measureSize(y),x=ga(w),E=oa(d,w),z=!u&&I!=="",T=u||I!=="",M=wa(j,y,v,s,T),q=M.slideSizes,A=M.slideSizesWithGaps,Z=Ea(w,A,m),U=ha(j,E,y,v,A,Z,z),W=U.snaps,V=U.snapsAligned,_=-te(W)+te(A),Q=pa(w,_,V,I).snapsContained,L=z?Q:V,X=ma(_,L,u).limit,ee=Dn($e(L),C,u),O=ee.clone(),K=pe(s),Y=function(){u||H.scrollBounds.constrain(H.dragHandler.pointerDown()),H.scrollBody.seek(P).update();var ne=H.scrollBody.settle(P);ne&&!H.dragHandler.pointerDown()&&(H.animation.stop(),a.emit("settle")),ne||a.emit("scroll"),u&&(H.scrollLooper.loop(H.scrollBody.direction()),H.slideLooper.loop()),H.translate.to(J),H.animation.proceed()},$=ia(Y),re=L[ee.get()],J=oe(re),P=oe(re),B=fa(J,l,1),R=ba(u,L,_,X,P),b=xa($,ee,O,R,P,a),F=ja(w,_,q,W,X,u,f),ae=ca(j,h,r,P,ua(j),J,$,b,B,R,ee,a,x,u,p,S),H={containerRect:y,slideRects:v,animation:$,axis:j,direction:h,dragHandler:ae,eventStore:Ye(),percentOfView:x,index:ee,indexPrevious:O,limit:X,location:J,options:t,scrollBody:B,scrollBounds:Ca(X,J,P,B,x),scrollLooper:Sa(_,X,J,[J,P]),scrollProgress:va(X),scrollSnaps:L,scrollTarget:R,scrollTo:b,slideLooper:ya(j,h,w,_,A,L,F,J,s),slidesToScroll:Z,slidesInView:F,slideIndexes:K,target:P,translate:Mn(j,h,n)};return H}function Aa(){var r={};function n(c){return r[c]||[]}function s(c){return n(c).forEach(function(g){return g(c)}),d}function t(c,g){return r[c]=n(c).concat([g]),d}function a(c,g){return r[c]=n(c).filter(function(C){return C!==g}),d}var d={emit:s,off:a,on:t};return d}var Pa={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function sr(){function r(a,d){return _n(a,d||{})}function n(a,d){var c=JSON.stringify(le(a.breakpoints||{})),g=JSON.stringify(le(d.breakpoints||{}));return c!==g?!1:Bn(a,d)}function s(a){var d=a.breakpoints||{},c=le(d).filter(function(g){return window.matchMedia(g).matches}).map(function(g){return d[g]}).reduce(function(g,C){return r(g,C)},{});return r(a,c)}var t={merge:r,areEqual:n,atMedia:s};return t}function za(){var r=sr(),n=r.atMedia,s=r.areEqual,t=[],a=[];function d(){return a.some(function(u){return u()})}function c(u){var l=n(u.options);return function(){return!s(l,n(u.options))}}function g(u,l){return a=u.map(c),t=u.filter(function(p){return n(p.options).active}),t.forEach(function(p){return p.init(l)}),u.reduce(function(p,m){var S;return Object.assign(p,(S={},S[m.name]=m,S))},{})}function C(){t=t.filter(function(u){return u.destroy()})}var f={init:g,destroy:C,haveChanged:d};return f}function de(r,n,s){var t=Ye(),a=sr(),d=za(),c=Aa(),g=c.on,C=c.off,f=x,u=!1,l,p=a.merge(Pa,de.globalOptions),m=a.merge(p),S=[],I,y=0,v,h;function j(){var P=m.container,B=m.slides,R=cr(P)?r.querySelector(P):P;v=R||r.children[0];var b=cr(B)?v.querySelectorAll(B):B;h=[].slice.call(b||v.children)}function w(P,B){if(!u){if(p=a.merge(p,P),m=a.atMedia(p),j(),l=Ia(r,v,h,m,c),y=l.axis.measureSize(r.getBoundingClientRect()),!m.active)return E();if(l.translate.to(l.location),S=B||S,I=d.init(S,J),m.loop){if(!l.slideLooper.canLoop()){E(),w({loop:!1},B),p=a.merge(p,{loop:!0});return}l.slideLooper.loop()}m.draggable&&v.offsetParent&&h.length&&l.dragHandler.addActivationEvents()}}function x(P,B){var R=L();E(),w(a.merge({startIndex:R},P),B),c.emit("reInit")}function E(){l.dragHandler.removeAllEvents(),l.animation.stop(),l.eventStore.removeAll(),l.translate.clear(),l.slideLooper.clear(),d.destroy()}function z(){u||(u=!0,t.removeAll(),E(),c.emit("destroy"))}function T(){var P=a.atMedia(p),B=!a.areEqual(P,m),R=l.axis.measureSize(r.getBoundingClientRect()),b=y!==R,F=d.haveChanged();(b||B||F)&&x(),c.emit("resize")}function M(P){var B=l[P?"target":"location"].get(),R=m.loop?"removeOffset":"constrain";return l.slidesInView.check(l.limit[R](B))}function q(P){var B=M(P);return l.slideIndexes.filter(function(R){return B.indexOf(R)===-1})}function A(P,B,R){!m.active||u||(l.scrollBody.useBaseMass().useSpeed(B?100:m.speed),l.scrollTo.index(P,R||0))}function Z(P){var B=l.index.clone().add(1);A(B.get(),P===!0,-1)}function U(P){var B=l.index.clone().add(-1);A(B.get(),P===!0,1)}function W(){var P=l.index.clone().add(1);return P.get()!==L()}function V(){var P=l.index.clone().add(-1);return P.get()!==L()}function _(){return l.scrollSnaps.map(l.scrollProgress.get)}function Q(){return l.scrollProgress.get(l.location.get())}function L(){return l.index.get()}function X(){return l.indexPrevious.get()}function ee(){return l.dragHandler.clickAllowed()}function O(){return I}function K(){return l}function Y(){return r}function $(){return v}function re(){return h}var J={canScrollNext:W,canScrollPrev:V,clickAllowed:ee,containerNode:$,internalEngine:K,destroy:z,off:C,on:g,plugins:O,previousScrollSnap:X,reInit:f,rootNode:Y,scrollNext:Z,scrollPrev:U,scrollProgress:Q,scrollSnapList:_,scrollTo:A,selectedScrollSnap:L,slideNodes:re,slidesInView:M,slidesNotInView:q};return w(n,s),t.add(window,"resize",T),setTimeout(function(){return c.emit("init")},0),J}de.globalOptions=void 0;de.optionsHandler=sr;function ka(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function gr(r){return r.concat().sort(function(n,s){return n.name>s.name?1:-1}).map(function(n){return n.options})}function Ta(r,n){if(r.length!==n.length)return!1;var s=de.optionsHandler().areEqual,t=gr(r),a=gr(n);return t.every(function(d,c){var g=a[c];return s(d,g)})}function tr(r,n){r===void 0&&(r={}),n===void 0&&(n=[]);var s=D.useRef(de.optionsHandler()),t=D.useRef(r),a=D.useRef(n),d=D.useState(),c=d[0],g=d[1],C=D.useState(),f=C[0],u=C[1],l=D.useCallback(function(){c&&c.reInit(t.current,a.current)},[c]);return D.useEffect(function(){if(ka()&&f){de.globalOptions=tr.globalOptions;var p=de(f,t.current,a.current);return g(p),function(){return p.destroy()}}else g(void 0)},[f,g]),D.useEffect(function(){s.current.areEqual(t.current,r)||(t.current=r,l())},[r,l]),D.useEffect(function(){Ta(a.current,n)||(a.current=n,l())},[n,l]),[u,c]}tr.globalOptions=void 0;const[_a,se]=Rn({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),Ba=({index:r,defaultIndex:n=0,onChange:s,align:t="center",orientation:a="horizontal",autoplay:d=!1,stopMouseEnterAutoplay:c=!0,loop:g=!0,speed:C=10,delay:f=4e3,gap:u="fallback(4, 1rem)",slidesToScroll:l=1,draggable:p=!0,dragFree:m=!1,inViewThreshold:S=0,skipSnaps:I=!1,containScroll:y="",slideSize:v="100%",includeGapInSize:h=!0,onScrollProgress:j,children:w,...x})=>{const E=qn(x,Wn),[z,T]=Vn({value:r,defaultValue:n,onChange:s}),M=a==="vertical",[q,A]=tr({axis:M?"y":"x",startIndex:n,loop:g,align:t,slidesToScroll:l,draggable:p,dragFree:m,speed:C,inViewThreshold:S,skipSnaps:I,containScroll:y}),[Z,U]=D.useState([]),[W,V]=D.useState(!1),_=D.useRef(void 0),Q=D.useCallback(()=>{if(!A)return;const O=Math.round(Math.max(0,Math.min(1,A.scrollProgress()))*100);j==null||j(O)},[A,j]),L=D.useCallback(()=>{if(!A)return;const O=A.selectedScrollSnap();T(O)},[A,T]);D.useEffect(()=>{const O=W&&c,K=!(A!=null&&A.canScrollNext());return A&&d&&!O&&!K?_.current=setInterval(()=>{A.scrollNext()},f):(_.current&&clearInterval(_.current),_.current=void 0),()=>{_.current&&clearInterval(_.current)}},[d,f,c,A,W,g,z]),Ze(()=>{if(!A)return;A.reInit();const K=A.scrollSnapList().map((Y,$)=>$);U(K)},[D.Children.toArray(w).length,t,a,g,C,u,l,p,m,S,I,y,v,h]),Ze(()=>{if(!A)return;const K=A.scrollSnapList().map((Y,$)=>$);U(K)},[A]),Ze(()=>{if(A)return A.on("select",L),A.on("scroll",Q),Q(),()=>{A.off("select",L),A.off("scroll",Q)}},[A,Q]);const X=D.useCallback((O={},K=null)=>({...E[0],...O,ref:K,onMouseEnter:Je(O.onMouseEnter,()=>{V(!0)}),onMouseLeave:Je(O.onMouseLeave,()=>{V(!1)})}),[E]),ee=D.useCallback((O={})=>({...E[1],...O,ref:q}),[E,q]);return{carousel:A,children:w,indexes:Z,selectedIndex:z,orientation:a,slideSize:v,gap:u,slidesToScroll:l,includeGapInSize:h,getContainerProps:X,getSlidesProps:ee}},Da=({index:r})=>{const{selectedIndex:n,slidesToScroll:s}=se();r=Math.floor((r??0)/(s??1));const t=r===n;return{getSlideProps:D.useCallback((d={})=>({...d,"data-index":r,"data-selected":zn(t)}),[t,r])}},On=({operation:r,...n})=>{const{carousel:s}=se(),t=r==="prev",a=n.disabled??n.isDisabled??(t?!(s!=null&&s.canScrollPrev()):!(s!=null&&s.canScrollNext())),d=D.useCallback(()=>{s&&(t?s.scrollPrev():s.scrollNext())},[s,t]);return{getControlProps:D.useCallback((g={},C=null)=>({...g,ref:C,disabled:a,onClick:Je(g.onClick,d)}),[a,d])}},Ma=()=>{const{selectedIndex:r,carousel:n,indexes:s}=se(),t=D.useCallback((d,c)=>{n&&(d.stopPropagation(),n.scrollTo(c))},[n]),a=D.useCallback(({index:d,...c})=>{const g=d===r;return{"aria-label":`Go to ${d+1} slide`,...c,key:d,"data-index":d,"data-selected":zn(g),onClick:Je(c.onClick,C=>t(C,d))}},[t,r]);return{indexes:s,getIndicatorProps:a}},k=ie(({h:r,height:n,minH:s,minHeight:t,...a},d)=>{const c=G(a.orientation),g=G(a.align),C=G(a.autoplay),f=G(a.stopMouseEnterAutoplay),u=G(a.loop),l=G(a.speed),p=G(a.delay),m=G(a.slidesToScroll),S=G(a.draggable),I=G(a.dragFree),y=G(a.inViewThreshold),v=G(a.skipSnaps),h=G(a.containScroll),j=G(a.includeGapInSize),w=ir("spaces",G(a.gap))??G(a.gap),x=ir("sizes",G(a.slideSize))??G(a.slideSize),[E,z]=$n("Carousel",{...a,orientation:c,align:g,autoplay:C,stopMouseEnterAutoplay:f,loop:u,speed:l,delay:p,slidesToScroll:m,draggable:S,dragFree:I,inViewThreshold:y,skipSnaps:v,containScroll:h,includeGapInSize:j,gap:w,slideSize:x}),{className:T,innerProps:M,withControls:q=!0,controlProps:A,controlPrevProps:Z,controlNextProps:U,withIndicators:W=!0,indicatorsProps:V,..._}=Zn(z),Q=G(q),L=G(W),{getContainerProps:X,getSlidesProps:ee,children:O,...K}=Ba({..._}),Y=Xn(O),[$]=er(Y,Ue),[re]=er(Y,Qe),[J]=er(Y,Ke),P=Un(Y,o),B=Qn(Y,Ue,Qe,Ke,o),R=P.map((b,F)=>D.cloneElement(b,{index:F}));return r??(r=n),s??(s=t),e.jsx(_a,{value:{styles:E,...K},children:e.jsxs(ce.div,{className:ue("ui-carousel",T),__css:{position:"relative",h:"fit-content",...E.container},...X({},d),children:[$??(Q?e.jsx(Ue,{...A,...Z}):null),re??(Q?e.jsx(Qe,{...A,...U}):null),e.jsx(Oa,{...ee({...Kn({h:r,minH:s}),...M}),children:R}),J??(L?e.jsx(Ke,{...V}):null),B]})})}),Oa=ie(({...r},n)=>{const s={w:"100%",h:"fit-content",overflow:"hidden"};return e.jsx(ce.div,{ref:n,className:"ui-carousel__sliders",__css:s,children:e.jsx(Na,{...r})})}),Na=({...r})=>{const{orientation:n,includeGapInSize:s,gap:t,styles:a}=se(),d={display:"flex",flexDirection:n==="vertical"?"column":"row",...a.inner,...s?{var:[{__prefix:"ui",name:"gap",token:"spaces",value:t}],[n==="vertical"?"mb":"mr"]:ea.negate("var(--ui-gap)")}:{}};return e.jsx(ce.div,{className:"ui-carousel__sliders__inner",__css:d,...r})},o=ie(({className:r,size:n,...s},t)=>{const{slideSize:a,includeGapInSize:d,orientation:c,gap:g}=se(),{getSlideProps:C}=Da(s);n??(n=a);const f={position:"relative",flex:`0 0 ${n}`,...d?{[c==="vertical"?"pb":"pr"]:g}:{[c==="vertical"?"mb":"mr"]:g}};return e.jsx(ce.div,{className:ue("ui-carousel__slide",r),__css:f,...C({}),children:e.jsx(La,{ref:t,...s})})}),La=ie(({...r},n)=>e.jsx(ce.div,{ref:n,className:"ui-carousel__slide__inner",w:"100%",h:"100%",...r})),Ue=ie(({className:r,...n},s)=>{const{orientation:t}=se(),{getControlProps:a}=On({operation:"prev"});return e.jsx(Nn,{operation:"prev",className:ue("ui-carousel__control--prev",r),"aria-label":"Go to previous slide",icon:e.jsx(kn,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),...a(n,s)})}),Qe=ie(({className:r,...n},s)=>{const{orientation:t}=se(),{getControlProps:a}=On({operation:"next"});return e.jsx(Nn,{operation:"next",className:ue("ui-carousel__control--next",r),"aria-label":"Go to next slide",icon:e.jsx(kn,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),...a(n,s)})}),Nn=ie(({className:r,operation:n,...s},t)=>{const{styles:a}=se(),d=Jn("whiteAlpha","blackAlpha"),c={position:"absolute",zIndex:"fallback(kurillin, 9)",...a.control,...a[n]};return e.jsx(Yn,{ref:t,className:ue("ui-carousel__control",r),colorScheme:d,isRounded:!0,__css:c,...s})}),Ke=ie(({className:r,component:n,...s},t)=>{const{selectedIndex:a,orientation:d,styles:c}=se(),{indexes:g,getIndicatorProps:C}=Ma(),f={position:"absolute",zIndex:"fallback(kurillin, 9)",display:"flex",justifyContent:"center",...c.indicators,...d==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(ce.div,{ref:t,className:ue("ui-carousel__indicators",r),__css:f,...s,children:g.map(u=>{const l=u===a;if(typeof n=="function"){const p=n({index:u,isSelected:l});if(!p)return null;const m=C({...p.props,index:u});return D.cloneElement(p,m)}else{const{key:p,...m}=C({index:u});return e.jsx(Fa,{...m},p)}})})}),Fa=({className:r,...n})=>{const{styles:s}=se(),t={...s.indicator};return e.jsx(ce.button,{type:"button",tabIndex:-1,className:ue("ui-carousel__indicators__indicator",r),__css:t,...n})},xs={title:"Components / Data Display / Carousel",component:k},we=()=>e.jsxs(k,{children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ee=()=>e.jsxs(e.Fragment,{children:[e.jsxs(k,{size:"sm",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(k,{size:"md",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(k,{size:"lg",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(k,{size:"xl",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),Ie=()=>e.jsxs(e.Fragment,{children:[e.jsxs(k,{orientation:"horizontal",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(k,{orientation:"vertical",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),Ae=()=>e.jsxs(k,{defaultIndex:1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Pe=()=>e.jsxs(k,{gap:0,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),ze=()=>e.jsxs(k,{speed:50,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),ke=()=>e.jsxs(k,{slideSize:"50%",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",size:"100%",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Te=()=>e.jsxs(e.Fragment,{children:[e.jsxs(k,{slideSize:"50%",align:"center",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(k,{slideSize:"50%",align:"start",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(k,{slideSize:"50%",align:"end",children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),_e=()=>e.jsxs(k,{slideSize:"33.3%",slidesToScroll:3,loop:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"}),e.jsx(o,{as:i,bg:"primary",children:"5"}),e.jsx(o,{as:i,bg:"secondary",children:"6"}),e.jsx(o,{as:i,bg:"danger",children:"7"}),e.jsx(o,{as:i,bg:"primary",children:"8"}),e.jsx(o,{as:i,bg:"secondary",children:"9"})]}),Be=()=>e.jsxs(k,{slideSize:"50%",align:"start",slidesToScroll:2,h:"auto",children:[e.jsxs(o,{as:me,variant:"outline",children:[e.jsx(Se,{justifyContent:"center",children:e.jsx(be,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ve,{children:[e.jsx(xe,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(ye,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(he,{children:e.jsx(je,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:me,variant:"outline",children:[e.jsx(Se,{justifyContent:"center",children:e.jsx(be,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ve,{children:[e.jsx(xe,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(ye,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(he,{children:e.jsx(je,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:me,variant:"outline",children:[e.jsx(Se,{justifyContent:"center",children:e.jsx(be,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ve,{children:[e.jsx(xe,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(ye,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(he,{children:e.jsx(je,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(o,{as:me,variant:"outline",children:[e.jsx(Se,{justifyContent:"center",children:e.jsx(be,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",w:"full",rounded:"md",alt:"いちご100%"})}),e.jsxs(ve,{children:[e.jsx(xe,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(ye,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(he,{children:e.jsx(je,{colorScheme:"primary",children:"Wikipedia"})})]})]}),De=()=>e.jsxs(k,{autoplay:!0,loop:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Me=()=>e.jsxs(k,{autoplay:!0,delay:1e3,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Oe=()=>e.jsxs(k,{dragFree:!0,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ne=()=>{const[r,n]=D.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(k,{loop:!1,dragFree:!0,onScrollProgress:n,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsx(ra,{value:r,colorScheme:"gray"})]})},Le=()=>e.jsxs(k,{slideSize:"50%",includeGapInSize:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Fe=()=>e.jsxs(k,{loop:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),He=()=>e.jsxs(k,{draggable:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ge=()=>e.jsxs(k,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Ve=()=>e.jsxs(k,{withControls:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(k,{withIndicators:!1,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),qe=()=>{const[r,n]=D.useState(0);return e.jsxs(k,{draggable:!1,index:r,onChange:n,children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})},We=()=>e.jsxs(e.Fragment,{children:[e.jsxs(k,{controlProps:{icon:e.jsx(Tn,{})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(k,{controlPrevProps:{icon:e.jsx(lr,{})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(k,{controlNextProps:{icon:e.jsx(dr,{})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(k,{children:[e.jsx(Ue,{icon:e.jsx(lr,{})}),e.jsx(Qe,{icon:e.jsx(dr,{})}),e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]})]}),Xe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(k,{indicatorsProps:{bottom:"8",component:({isSelected:r})=>e.jsx(Tn,{fontSize:"2xl",color:r?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer"})},children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"})]}),e.jsxs(k,{children:[e.jsx(o,{as:i,bg:"primary",children:"1"}),e.jsx(o,{as:i,bg:"secondary",children:"2"}),e.jsx(o,{as:i,bg:"warning",children:"3"}),e.jsx(o,{as:i,bg:"danger",children:"4"}),e.jsx(Ke,{sx:{"& > *":{w:"4",_selected:{w:"12"},transitionProperty:"width",transitionDuration:"slower"}}})]})]});var fr,Cr,pr;we.parameters={...we.parameters,docs:{...(fr=we.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
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
}`,...(pr=(Cr=we.parameters)==null?void 0:Cr.docs)==null?void 0:pr.source}}};var mr,Sr,vr;Ee.parameters={...Ee.parameters,docs:{...(mr=Ee.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
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
}`,...(vr=(Sr=Ee.parameters)==null?void 0:Sr.docs)==null?void 0:vr.source}}};var hr,br,xr;Ie.parameters={...Ie.parameters,docs:{...(hr=Ie.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
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
}`,...(xr=(br=Ie.parameters)==null?void 0:br.docs)==null?void 0:xr.source}}};var yr,jr,wr;Ae.parameters={...Ae.parameters,docs:{...(yr=Ae.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
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
}`,...(wr=(jr=Ae.parameters)==null?void 0:jr.docs)==null?void 0:wr.source}}};var Er,Ir,Ar;Pe.parameters={...Pe.parameters,docs:{...(Er=Pe.parameters)==null?void 0:Er.docs,source:{originalSource:`() => {
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
}`,...(Ar=(Ir=Pe.parameters)==null?void 0:Ir.docs)==null?void 0:Ar.source}}};var Pr,zr,kr;ze.parameters={...ze.parameters,docs:{...(Pr=ze.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
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
}`,...(kr=(zr=ze.parameters)==null?void 0:zr.docs)==null?void 0:kr.source}}};var Tr,_r,Br;ke.parameters={...ke.parameters,docs:{...(Tr=ke.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
}`,...(Br=(_r=ke.parameters)==null?void 0:_r.docs)==null?void 0:Br.source}}};var Dr,Mr,Or;Te.parameters={...Te.parameters,docs:{...(Dr=Te.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
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
}`,...(Or=(Mr=Te.parameters)==null?void 0:Mr.docs)==null?void 0:Or.source}}};var Nr,Lr,Fr;_e.parameters={..._e.parameters,docs:{...(Nr=_e.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
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
}`,...(Fr=(Lr=_e.parameters)==null?void 0:Lr.docs)==null?void 0:Fr.source}}};var Hr,Gr,Vr;Be.parameters={...Be.parameters,docs:{...(Hr=Be.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
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
}`,...(Vr=(Gr=Be.parameters)==null?void 0:Gr.docs)==null?void 0:Vr.source}}};var Rr,qr,Wr;De.parameters={...De.parameters,docs:{...(Rr=De.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
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
}`,...(Wr=(qr=De.parameters)==null?void 0:qr.docs)==null?void 0:Wr.source}}};var Xr,Ur,Qr;Me.parameters={...Me.parameters,docs:{...(Xr=Me.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...(Qr=(Ur=Me.parameters)==null?void 0:Ur.docs)==null?void 0:Qr.source}}};var Kr,Jr,Yr;Oe.parameters={...Oe.parameters,docs:{...(Kr=Oe.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
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
}`,...(Yr=(Jr=Oe.parameters)==null?void 0:Jr.docs)==null?void 0:Yr.source}}};var $r,Zr,en;Ne.parameters={...Ne.parameters,docs:{...($r=Ne.parameters)==null?void 0:$r.docs,source:{originalSource:`() => {
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
}`,...(en=(Zr=Ne.parameters)==null?void 0:Zr.docs)==null?void 0:en.source}}};var rn,nn,an;Le.parameters={...Le.parameters,docs:{...(rn=Le.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
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
}`,...(an=(nn=Le.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var sn,tn,on;Fe.parameters={...Fe.parameters,docs:{...(sn=Fe.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
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
}`,...(on=(tn=Fe.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var ln,dn,cn;He.parameters={...He.parameters,docs:{...(ln=He.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(cn=(dn=He.parameters)==null?void 0:dn.docs)==null?void 0:cn.source}}};var un,gn,fn;Ge.parameters={...Ge.parameters,docs:{...(un=Ge.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(fn=(gn=Ge.parameters)==null?void 0:gn.docs)==null?void 0:fn.source}}};var Cn,pn,mn;Ve.parameters={...Ve.parameters,docs:{...(Cn=Ve.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
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
}`,...(yn=(xn=qe.parameters)==null?void 0:xn.docs)==null?void 0:yn.source}}};var jn,wn,En;We.parameters={...We.parameters,docs:{...(jn=We.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
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
}`,...(En=(wn=We.parameters)==null?void 0:wn.docs)==null?void 0:En.source}}};var In,An,Pn;Xe.parameters={...Xe.parameters,docs:{...(In=Xe.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
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
}`,...(Pn=(An=Xe.parameters)==null?void 0:An.docs)==null?void 0:Pn.source}}};const ys=["basic","withSize","withOrientation","withDefaultIndex","withGap","withSpeed","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","customControl","customControlButton","customIndicators"];export{ys as __namedExportsOrder,we as basic,qe as customControl,We as customControlButton,Xe as customIndicators,xs as default,Ve as disabledControlButton,He as disabledDraggable,Le as disabledIncludeGapInSize,Re as disabledIndicators,Fe as disabledLoop,Ge as disabledStopMouseEnterAutoplay,Te as withAlign,De as withAutoplay,Be as withCard,Ae as withDefaultIndex,Me as withDelay,Oe as withDragFree,Pe as withGap,Ie as withOrientation,Ne as withScrollProgress,Ee as withSize,ke as withSlideSize,_e as withSlidesToScroll,ze as withSpeed};
