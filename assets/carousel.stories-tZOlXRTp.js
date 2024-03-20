import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as Ce,f as _n,A as ir,b as lr}from"./fontawesome-icon-DuU4vFj3.js";import{r as z}from"./index-CBqU2yxZ.js";import{u as dr}from"./index-Cd5bWo2e.js";import{u as R}from"./index-BH_-S3fu.js";import{u as Vn}from"./index-BrWt32zn.js";import{a as qn,_ as Wn,$ as Un,e as er,h as Ye,M as In,v as Kn,O as rr,V as $n,a2 as Jn,u as de,c as ce,x as Xn,q as Yn}from"./factory-Dr9dj2_3.js";import{f as oe}from"./forward-ref-DuAegr0M.js";import{c as Pn}from"./icon-BEP1qdzi.js";import{I as Qn}from"./icon-button-BlH25fXJ.js";import{a as Zn}from"./use-component-style-hxhKhc0Q.js";import{o as ea}from"./theme-provider-Bm2ANCLL.js";import{P as ra}from"./progress-LJFuAfqp.js";import{C as o}from"./center-d6pbY6aS.js";import{C as Se,a as ve,b as he,c as be}from"./card-BinrKOQn.js";import{I as xe}from"./image-1mh3uZ9O.js";import{H as ye}from"./heading-CPnU0XGS.js";import{T as je}from"./text-DB123ecx.js";import{B as Fe}from"./button-DzbywrjQ.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C5SpnNA3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-DGJyigad.js";import"./index-rYLD436_.js";import"./index-MNVDWG0u.js";import"./number-49BHn0Cl.js";import"./use-image-BtRHDUtI.js";import"./use-ripple-D-hcQ8Cu.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CQQhr11g.js";import"./loading-93aTLmy8.js";function na(r,n,s,t,a){return t+(a-t)*((r-n)/(s-n))}function ar(r){return typeof r=="number"}function cr(r){return typeof r=="string"}function nr(r){return Object.prototype.toString.call(r)==="[object Object]"}function aa(r){return Array.isArray(r)}function Cr(r){return nr(r)||aa(r)}function N(r){return Math.abs(r)}function sr(r){return r?r/N(r):0}function pe(r,n){return N(r-n)}function sa(r,n){if(r===0||n===0||N(r)<=N(n))return 0;var s=pe(N(r),N(n));return N(s/r)}function ta(r){var n=Math.pow(10,r);return function(s){return Math.round(s*n)/n}}function me(r){return ie(r).map(Number)}function te(r){return r[Ze(r)]}function Ze(r){return Math.max(0,r.length-1)}function ie(r){return Object.keys(r)}function Ln(r,n){return[r,n].reduce(function(s,t){return ie(t).forEach(function(a){var l=s[a],d=t[a],C=nr(l)&&nr(d);s[a]=C?Ln(l,d):d}),s},{})}function zn(r,n){var s=ie(r),t=ie(n);return s.length!==t.length?!1:s.every(function(a){var l=r[a],d=n[a];return typeof l=="function"?"".concat(l)==="".concat(d):!Cr(l)||!Cr(d)?l===d:zn(l,d)})}function ua(r,n){var s={start:t,center:a,end:l};function t(){return 0}function a(g){return l(g)/2}function l(g){return n-g}function d(){return n*Number(r)}function C(g){return ar(r)?d():s[r](g)}var f={measure:C};return f}function oa(r){var n=0;function s(d,C){return function(){d===!!n&&C()}}function t(){n=window.requestAnimationFrame(r)}function a(){window.cancelAnimationFrame(n),n=0}var l={proceed:s(!0,t),start:s(!1,t),stop:s(!0,a)};return l}function ia(r,n){var s=r==="y"?"y":"x",t=r==="y"?"x":"y",a=C(),l=f();function d(c){var i=c.width,p=c.height;return s==="x"?i:p}function C(){return s==="y"?"top":n==="rtl"?"right":"left"}function f(){return s==="y"?"bottom":n==="rtl"?"left":"right"}var g={scroll:s,cross:t,startEdge:a,endEdge:l,measureSize:d};return g}function ge(r,n){var s=N(r-n);function t(g){return g<r}function a(g){return g>n}function l(g){return t(g)||a(g)}function d(g){return l(g)?t(g)?r:n:g}function C(g){return s?g-s*Math.ceil((g-n)/s):g}var f={length:s,max:n,min:r,constrain:d,reachedAny:l,reachedMax:a,reachedMin:t,removeOffset:C};return f}function Tn(r,n,s){var t=ge(0,r),a=t.min,l=t.constrain,d=r+1,C=f(n);function f(S){return s?N((d+S)%d):l(S)}function g(){return C}function c(S){return C=f(S),m}function i(S){return c(g()+S)}function p(){return Tn(r,g(),s)}var m={add:i,clone:p,get:g,set:c,min:a,max:r};return m}function la(r){var n=r==="rtl"?-1:1;function s(a){return a*n}var t={apply:s};return t}function Qe(){var r=[];function n(a,l,d,C){return C===void 0&&(C={passive:!0}),a.addEventListener(l,d,C),r.push(function(){return a.removeEventListener(l,d,C)}),t}function s(){return r=r.filter(function(a){return a()}),t}var t={add:n,removeAll:s};return t}function ue(r){var n=r;function s(){return n}function t(i){return n=g(i),c}function a(i){return n+=g(i),c}function l(i){return n-=g(i),c}function d(i){return n*=i,c}function C(i){return n/=i,c}function f(){return n!==0&&C(n),c}function g(i){return ar(i)?i:i.get()}var c={add:a,divide:C,get:s,multiply:d,normalize:f,set:t,subtract:l};return c}function da(r,n,s,t,a,l,d,C,f,g,c,i,p,m,S,E){var y=r.cross,v=["INPUT","SELECT","TEXTAREA"],h={passive:!1},j=ue(0),F=Qe(),x=Qe(),w=p.measure(20),D={mouse:300,touch:400},I={mouse:500,touch:600},T=S?5:16,q=1,B=0,Z=0,K=!1,W=!1,H=!1,P=!1;function $(){var b=s;F.add(b,"dragstart",function(k){return k.preventDefault()},h).add(b,"touchmove",function(){},h).add(b,"touchend",function(){}).add(b,"touchstart",Y).add(b,"mousedown",Y).add(b,"touchcancel",re).add(b,"contextmenu",re).add(b,"click",X,!0)}function O(){var b=P?document:s;x.add(b,"touchmove",Q,h).add(b,"touchend",re).add(b,"mousemove",Q,h).add(b,"mouseup",re)}function U(){F.removeAll(),x.removeAll()}function ee(b){var k=b.nodeName||"";return v.indexOf(k)>-1}function M(){var b=S?I:D,k=P?"mouse":"touch";return b[k]}function J(b,k){var ae=c.clone().add(sr(b)*-1),G=ae.get()===c.min||ae.get()===c.max,ne=g.byDistance(b,!S).distance;return S||N(b)<w?ne:!m&&G?ne*.4:E&&k?ne*.5:g.byIndex(ae.get(),0).distance}function Y(b){if(P=!a.isTouchEvent(b),!(P&&b.button!==0)&&!ee(b.target)){var k=pe(t.get(),l.get())>=2,ae=P||!k;K=!0,a.pointerDown(b),j.set(t),t.set(l),f.useBaseMass().useSpeed(80),O(),B=a.readPoint(b),Z=a.readPoint(b,y),i.emit("pointerDown"),ae&&(H=!1)}}function Q(b){if(!W&&!P){if(!b.cancelable)return re(b);var k=a.readPoint(b),ae=a.readPoint(b,y),G=pe(k,B),ne=pe(ae,Z);if(W=G>ne,!W&&!H)return re(b)}var fe=a.pointerMove(b);!H&&fe&&(H=!0),d.start(),t.add(n.apply(fe)),b.preventDefault()}function re(b){var k=g.byDistance(0,!1),ae=k.index!==c.get(),G=a.pointerUp(b)*M(),ne=J(n.apply(G),ae),fe=sa(G,ne),kn=pe(t.get(),j.get())>=.5,or=ae&&fe>.75,Gn=N(G)<w,Rn=or?10:T,Hn=or?q+2.5*fe:q;kn&&!P&&(H=!0),W=!1,K=!1,x.removeAll(),f.useSpeed(Gn?9:Rn).useMass(Hn),C.distance(ne,!S),P=!1,i.emit("pointerUp")}function X(b){H&&(b.stopPropagation(),b.preventDefault())}function A(){return!H}function L(){return K}var V={addActivationEvents:$,clickAllowed:A,pointerDown:L,removeAllEvents:U};return V}function ca(r){var n=170,s,t;function a(i){return typeof TouchEvent<"u"&&i instanceof TouchEvent}function l(i){return i.timeStamp}function d(i,p){var m=p||r.scroll,S="client".concat(m==="x"?"X":"Y");return(a(i)?i.touches[0]:i)[S]}function C(i){return s=i,t=i,d(i)}function f(i){var p=d(i)-d(t),m=l(i)-l(s)>n;return t=i,m&&(s=i),p}function g(i){if(!s||!t)return 0;var p=d(t)-d(s),m=l(i)-l(s),S=l(i)-l(t)>n,E=p/m,y=m&&!S&&N(E)>.1;return y?E:0}var c={isTouchEvent:a,pointerDown:C,pointerMove:f,pointerUp:g,readPoint:d};return c}function Ca(r){function n(t){return r*(t/100)}var s={measure:n};return s}function ga(r,n,s){var t=ta(2),a=ue(0),l=ue(0),d=ue(0),C=0,f=n,g=s;function c(){a.add(l),r.add(a),l.multiply(0)}function i(F){F.divide(g),l.add(F)}function p(F){d.set(F).subtract(r);var x=na(d.get(),0,100,0,f);return C=sr(d.get()),d.normalize().multiply(x).subtract(a),i(d),j}function m(F){var x=F.get()-r.get(),w=!t(x);return w&&r.set(F),w}function S(){return C}function E(){return v(n)}function y(){return h(s)}function v(F){return f=F,j}function h(F){return g=F,j}var j={direction:S,seek:p,settle:m,update:c,useBaseMass:y,useBaseSpeed:E,useMass:h,useSpeed:v};return j}function fa(r,n,s,t,a){var l=a.measure(10),d=a.measure(50),C=.85,f=!1;function g(){return!(f||!r.reachedAny(s.get())||!r.reachedAny(n.get()))}function c(m){if(g()){var S=r.reachedMin(n.get())?"min":"max",E=N(r[S]-n.get()),y=s.get()-n.get(),v=Math.min(E/d,C);s.subtract(y*v),!m&&N(y)<l&&(s.set(r.constrain(s.get())),t.useSpeed(10).useMass(3))}}function i(m){f=!m}var p={constrain:c,toggleActive:i};return p}function pa(r,n,s,t){var a=ge(-n+r,s[0]),l=s.map(a.constrain),d=f();function C(){var c=l[0],i=te(l),p=l.lastIndexOf(c),m=l.indexOf(i)+1;return ge(p,m)}function f(){if(n<=r)return[a.max];if(t==="keepSnaps")return l;var c=C(),i=c.min,p=c.max;return l.slice(i,p)}var g={snapsContained:d};return g}function ma(r,n,s){var t=a();function a(){var d=n[0],C=te(n),f=s?d-r:C,g=d;return ge(f,g)}var l={limit:t};return l}function Sa(r,n,s,t){var a=.1,l=n.min+a,d=n.max+a,C=ge(l,d),f=C.reachedMin,g=C.reachedMax;function c(m){return m===1?g(s.get()):m===-1?f(s.get()):!1}function i(m){if(c(m)){var S=r*(m*-1);t.forEach(function(E){return E.add(S)})}}var p={loop:i};return p}function va(r){var n=r.max,s=r.length;function t(l){var d=l-n;return d/-s}var a={get:t};return a}function ha(r,n,s,t,a,l,d){var C=r.startEdge,f=r.endEdge,g=l.groupSlides,c=m().map(n.measure),i=S(),p=E();function m(){return g(t).map(function(v){return te(v)[f]-v[0][C]}).map(N)}function S(){return t.map(function(v){return s[C]-v[C]}).map(function(v){return-N(v)})}function E(){var v=0,h=te(i)-te(a);return g(i).map(function(j){return j[0]}).map(function(j,F,x){var w=!F,D=F===Ze(x);return d&&w?v:d&&D?h:j+c[F]})}var y={snaps:i,snapsAligned:p};return y}function ba(r,n,s,t,a){var l=t.reachedAny,d=t.removeOffset,C=t.constrain;function f(S){return S.concat().sort(function(E,y){return N(E)-N(y)})[0]}function g(S){var E=r?d(S):C(S),y=n.map(function(h){return h-E}).map(function(h){return c(h,0)}).map(function(h,j){return{diff:h,index:j}}).sort(function(h,j){return N(h.diff)-N(j.diff)}),v=y[0].index;return{index:v,distance:E}}function c(S,E){var y=[S,S+s,S-s];if(!r)return y[0];if(!E)return f(y);var v=y.filter(function(h){return sr(h)===E});return f(v)}function i(S,E){var y=n[S]-a.get(),v=c(y,E);return{index:S,distance:v}}function p(S,E){var y=a.get()+S,v=g(y),h=v.index,j=v.distance,F=!r&&l(y);if(!E||F)return{index:h,distance:S};var x=n[h]-j,w=S+c(x,0);return{index:h,distance:w}}var m={byDistance:p,byIndex:i,shortcut:c};return m}function xa(r,n,s,t,a,l){function d(c){var i=c.distance,p=c.index!==n.get();i&&(r.start(),a.add(i)),p&&(s.set(n.get()),n.set(c.index),l.emit("select"))}function C(c,i){var p=t.byDistance(c,i);d(p)}function f(c,i){var p=n.clone().set(c),m=t.byIndex(p.get(),i);d(m)}var g={distance:C,index:f};return g}function Mn(r,n,s){var t=r.scroll==="x"?d:C,a=s.style,l=!1;function d(p){return"translate3d(".concat(p,"px,0px,0px)")}function C(p){return"translate3d(0px,".concat(p,"px,0px)")}function f(p){l||(a.transform=t(n.apply(p.get())))}function g(p){l=!p}function c(){l||(a.transform="",s.getAttribute("style")||s.removeAttribute("style"))}var i={clear:c,to:f,toggleActive:g};return i}function ya(r,n,s,t,a,l,d,C,f){var g=me(a),c=me(a).reverse(),i=E().concat(y());function p(x,w){return x.reduce(function(D,I){return D-a[I]},w)}function m(x,w){return x.reduce(function(D,I){var T=p(D,w);return T>0?D.concat([I]):D},[])}function S(x,w){var D=w==="start",I=D?-t:t,T=d.findSlideBounds([I]);return x.map(function(q){var B=D?0:-t,Z=D?t:0,K=T.filter(function(U){return U.index===q})[0],W=K[D?"end":"start"],H=ue(-1),P=ue(-1),$=Mn(r,n,f[q]),O=function(){return H.set(C.get()>W?B:Z)};return{index:q,location:P,translate:$,target:O}})}function E(){var x=l[0]-1,w=m(c,x);return S(w,"end")}function y(){var x=s-l[0]-1,w=m(g,x);return S(w,"start")}function v(){return i.every(function(x){var w=x.index,D=g.filter(function(I){return I!==w});return p(D,s)<=.1})}function h(){i.forEach(function(x){var w=x.target,D=x.translate,I=x.location,T=w();T.get()!==I.get()&&(T.get()===0?D.clear():D.to(T),I.set(T))})}function j(){i.forEach(function(x){return x.translate.clear()})}var F={canLoop:v,clear:j,loop:h,loopPoints:i};return F}function ja(r,n,s,t,a,l,d){var C=a.removeOffset,f=a.constrain,g=.5,c=l?[0,n,-n]:[0],i=m(c,d);function p(y){var v=y||0;return s.map(function(h){var j=ge(g,h-g);return j.constrain(h*v)})}function m(y,v){var h=y||c,j=p(v);return h.reduce(function(F,x){var w=t.map(function(D,I){return{start:D-s[I]+j[I]+x,end:D+r-j[I]+x,index:I}});return F.concat(w)},[])}function S(y,v){var h=l?C(y):f(y),j=v||i;return j.reduce(function(F,x){var w=x.index,D=x.start,I=x.end,T=F.indexOf(w)!==-1,q=D<h&&I>h;return!T&&q?F.concat([w]):F},[])}var E={check:S,findSlideBounds:m};return E}function Fa(r,n,s,t,a){var l=r.measureSize,d=r.startEdge,C=r.endEdge,f=s[0]&&a,g=m(),c=S(),i=s.map(l),p=E();function m(){if(!f)return 0;var v=s[0];return N(n[d]-v[d])}function S(){if(!f)return 0;var v=window.getComputedStyle(te(t));return parseFloat(v.getPropertyValue("margin-".concat(C)))}function E(){return s.map(function(v,h,j){var F=!h,x=h===Ze(j);return F?i[h]+g:x?i[h]+c:j[h+1][d]-v[d]}).map(N)}var y={slideSizes:i,slideSizesWithGaps:p};return y}function wa(r,n,s){var t=ar(s);function a(f,g){return me(f).filter(function(c){return c%g===0}).map(function(c){return f.slice(c,c+g)})}function l(f){return me(f).reduce(function(g,c){var i=n.slice(te(g),c+1),p=i.reduce(function(m,S){return m+S},0);return!c||p>r?g.concat(c):g},[]).map(function(g,c,i){return f.slice(g,i[c+1])})}function d(f){return t?a(f,s):l(f)}var C={groupSlides:d};return C}function Ea(r,n,s,t,a){var l=t.align,d=t.axis,C=t.direction,f=t.startIndex,g=t.inViewThreshold,c=t.loop,i=t.speed,p=t.dragFree,m=t.slidesToScroll,S=t.skipSnaps,E=t.containScroll,y=n.getBoundingClientRect(),v=s.map(function(ne){return ne.getBoundingClientRect()}),h=la(C),j=ia(d,C),F=j.measureSize(y),x=Ca(F),w=ua(l,F),D=!c&&E!=="",I=c||E!=="",T=Fa(j,y,v,s,I),q=T.slideSizes,B=T.slideSizesWithGaps,Z=wa(F,B,m),K=ha(j,w,y,v,B,Z,D),W=K.snaps,H=K.snapsAligned,P=-te(W)+te(B),$=pa(F,P,H,E).snapsContained,O=D?$:H,U=ma(P,O,c).limit,ee=Tn(Ze(O),f,c),M=ee.clone(),J=me(s),Y=function(){c||G.scrollBounds.constrain(G.dragHandler.pointerDown()),G.scrollBody.seek(A).update();var ne=G.scrollBody.settle(A);ne&&!G.dragHandler.pointerDown()&&(G.animation.stop(),a.emit("settle")),ne||a.emit("scroll"),c&&(G.scrollLooper.loop(G.scrollBody.direction()),G.slideLooper.loop()),G.translate.to(X),G.animation.proceed()},Q=oa(Y),re=O[ee.get()],X=ue(re),A=ue(re),L=ga(X,i,1),V=ba(c,O,P,U,A),b=xa(Q,ee,M,V,A,a),k=ja(F,P,q,W,U,c,g),ae=da(j,h,r,A,ca(j),X,Q,b,L,V,ee,a,x,c,p,S),G={containerRect:y,slideRects:v,animation:Q,axis:j,direction:h,dragHandler:ae,eventStore:Qe(),percentOfView:x,index:ee,indexPrevious:M,limit:U,location:X,options:t,scrollBody:L,scrollBounds:fa(U,X,A,L,x),scrollLooper:Sa(P,U,X,[X,A]),scrollProgress:va(U),scrollSnaps:O,scrollTarget:V,scrollTo:b,slideLooper:ya(j,h,F,P,B,O,k,X,s),slidesToScroll:Z,slidesInView:k,slideIndexes:J,target:A,translate:Mn(j,h,n)};return G}function Ba(){var r={};function n(d){return r[d]||[]}function s(d){return n(d).forEach(function(C){return C(d)}),l}function t(d,C){return r[d]=n(d).concat([C]),l}function a(d,C){return r[d]=n(d).filter(function(f){return f!==C}),l}var l={emit:s,off:a,on:t};return l}var Aa={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function tr(){function r(a,l){return Ln(a,l||{})}function n(a,l){var d=JSON.stringify(ie(a.breakpoints||{})),C=JSON.stringify(ie(l.breakpoints||{}));return d!==C?!1:zn(a,l)}function s(a){var l=a.breakpoints||{},d=ie(l).filter(function(C){return window.matchMedia(C).matches}).map(function(C){return l[C]}).reduce(function(C,f){return r(C,f)},{});return r(a,d)}var t={merge:r,areEqual:n,atMedia:s};return t}function Da(){var r=tr(),n=r.atMedia,s=r.areEqual,t=[],a=[];function l(){return a.some(function(c){return c()})}function d(c){var i=n(c.options);return function(){return!s(i,n(c.options))}}function C(c,i){return a=c.map(d),t=c.filter(function(p){return n(p.options).active}),t.forEach(function(p){return p.init(i)}),c.reduce(function(p,m){var S;return Object.assign(p,(S={},S[m.name]=m,S))},{})}function f(){t=t.filter(function(c){return c.destroy()})}var g={init:C,destroy:f,haveChanged:l};return g}function le(r,n,s){var t=Qe(),a=tr(),l=Da(),d=Ba(),C=d.on,f=d.off,g=x,c=!1,i,p=a.merge(Aa,le.globalOptions),m=a.merge(p),S=[],E,y=0,v,h;function j(){var A=m.container,L=m.slides,V=cr(A)?r.querySelector(A):A;v=V||r.children[0];var b=cr(L)?v.querySelectorAll(L):L;h=[].slice.call(b||v.children)}function F(A,L){if(!c){if(p=a.merge(p,A),m=a.atMedia(p),j(),i=Ea(r,v,h,m,d),y=i.axis.measureSize(r.getBoundingClientRect()),!m.active)return w();if(i.translate.to(i.location),S=L||S,E=l.init(S,X),m.loop){if(!i.slideLooper.canLoop()){w(),F({loop:!1},L),p=a.merge(p,{loop:!0});return}i.slideLooper.loop()}m.draggable&&v.offsetParent&&h.length&&i.dragHandler.addActivationEvents()}}function x(A,L){var V=O();w(),F(a.merge({startIndex:V},A),L),d.emit("reInit")}function w(){i.dragHandler.removeAllEvents(),i.animation.stop(),i.eventStore.removeAll(),i.translate.clear(),i.slideLooper.clear(),l.destroy()}function D(){c||(c=!0,t.removeAll(),w(),d.emit("destroy"))}function I(){var A=a.atMedia(p),L=!a.areEqual(A,m),V=i.axis.measureSize(r.getBoundingClientRect()),b=y!==V,k=l.haveChanged();(b||L||k)&&x(),d.emit("resize")}function T(A){var L=i[A?"target":"location"].get(),V=m.loop?"removeOffset":"constrain";return i.slidesInView.check(i.limit[V](L))}function q(A){var L=T(A);return i.slideIndexes.filter(function(V){return L.indexOf(V)===-1})}function B(A,L,V){!m.active||c||(i.scrollBody.useBaseMass().useSpeed(L?100:m.speed),i.scrollTo.index(A,V||0))}function Z(A){var L=i.index.clone().add(1);B(L.get(),A===!0,-1)}function K(A){var L=i.index.clone().add(-1);B(L.get(),A===!0,1)}function W(){var A=i.index.clone().add(1);return A.get()!==O()}function H(){var A=i.index.clone().add(-1);return A.get()!==O()}function P(){return i.scrollSnaps.map(i.scrollProgress.get)}function $(){return i.scrollProgress.get(i.location.get())}function O(){return i.index.get()}function U(){return i.indexPrevious.get()}function ee(){return i.dragHandler.clickAllowed()}function M(){return E}function J(){return i}function Y(){return r}function Q(){return v}function re(){return h}var X={canScrollNext:W,canScrollPrev:H,clickAllowed:ee,containerNode:Q,internalEngine:J,destroy:D,off:f,on:C,plugins:M,previousScrollSnap:U,reInit:g,rootNode:Y,scrollNext:Z,scrollPrev:K,scrollProgress:$,scrollSnapList:P,scrollTo:B,selectedScrollSnap:O,slideNodes:re,slidesInView:T,slidesNotInView:q};return F(n,s),t.add(window,"resize",I),setTimeout(function(){return d.emit("init")},0),X}le.globalOptions=void 0;le.optionsHandler=tr;function _a(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function gr(r){return r.concat().sort(function(n,s){return n.name>s.name?1:-1}).map(function(n){return n.options})}function Ia(r,n){if(r.length!==n.length)return!1;var s=le.optionsHandler().areEqual,t=gr(r),a=gr(n);return t.every(function(l,d){var C=a[d];return s(l,C)})}function ur(r,n){r===void 0&&(r={}),n===void 0&&(n=[]);var s=z.useRef(le.optionsHandler()),t=z.useRef(r),a=z.useRef(n),l=z.useState(),d=l[0],C=l[1],f=z.useState(),g=f[0],c=f[1],i=z.useCallback(function(){d&&d.reInit(t.current,a.current)},[d]);return z.useEffect(function(){if(_a()&&g){le.globalOptions=ur.globalOptions;var p=le(g,t.current,a.current);return C(p),function(){return p.destroy()}}else C(void 0)},[g,C]),z.useEffect(function(){s.current.areEqual(t.current,r)||(t.current=r,i())},[r,i]),z.useEffect(function(){Ia(a.current,n)||(a.current=n,i())},[n,i]),[c,d]}ur.globalOptions=void 0;const[Pa,se]=qn({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),La=({index:r,defaultIndex:n=0,onChange:s,align:t="center",orientation:a="horizontal",autoplay:l=!1,stopMouseEnterAutoplay:d=!0,loop:C=!0,speed:f=10,delay:g=4e3,gap:c="1rem",slidesToScroll:i=1,draggable:p=!0,dragFree:m=!1,inViewThreshold:S=0,skipSnaps:E=!1,containScroll:y="",slideSize:v="100%",includeGapInSize:h=!0,onScrollProgress:j,children:F,...x})=>{const w=Wn(x,Un),[D,I]=Vn({value:r,defaultValue:n,onChange:s}),T=a==="vertical",[q,B]=ur({axis:T?"y":"x",startIndex:n,loop:C,align:t,slidesToScroll:i,draggable:p,dragFree:m,speed:f,inViewThreshold:S,skipSnaps:E,containScroll:y}),[Z,K]=z.useState([]),[W,H]=z.useState(!1),P=z.useRef(void 0),$=z.useCallback(()=>{if(!B)return;const M=Math.round(Math.max(0,Math.min(1,B.scrollProgress()))*100);j==null||j(M)},[B,j]),O=z.useCallback(()=>{if(!B)return;const M=B.selectedScrollSnap();I(M)},[B,I]);z.useEffect(()=>{const M=W&&d,J=!(B!=null&&B.canScrollNext());return B&&l&&!M&&!J?P.current=setInterval(()=>{B.scrollNext()},g):(P.current&&clearInterval(P.current),P.current=void 0),()=>{P.current&&clearInterval(P.current)}},[l,g,d,B,W,C,D]),er(()=>{if(!B)return;B.reInit();const J=B.scrollSnapList().map((Y,Q)=>Q);K(J)},[z.Children.toArray(F).length,t,a,C,f,c,i,p,m,S,E,y,v,h]),er(()=>{if(!B)return;const J=B.scrollSnapList().map((Y,Q)=>Q);K(J)},[B]),er(()=>{if(B)return B.on("select",O),B.on("scroll",$),$(),()=>{B.off("select",O),B.off("scroll",$)}},[B,$]);const U=z.useCallback((M={},J=null)=>({...w[0],...M,ref:J,onMouseEnter:Ye(M.onMouseEnter,()=>{H(!0)}),onMouseLeave:Ye(M.onMouseLeave,()=>{H(!1)})}),[w]),ee=z.useCallback((M={})=>({...w[1],...M,ref:q}),[w,q]);return{carousel:B,children:F,indexes:Z,selectedIndex:D,orientation:a,slideSize:v,gap:c,slidesToScroll:i,includeGapInSize:h,getContainerProps:U,getSlidesProps:ee}},za=({index:r})=>{const{selectedIndex:n,slidesToScroll:s}=se();r=Math.floor((r??0)/(s??1));const t=r===n;return{getSlideProps:z.useCallback((l={})=>({...l,"data-index":r,"data-selected":In(t)}),[t,r])}},Nn=({operation:r,...n})=>{const{carousel:s}=se(),t=r==="prev",a=n.disabled??n.isDisabled??(t?!(s!=null&&s.canScrollPrev()):!(s!=null&&s.canScrollNext())),l=z.useCallback(()=>{s&&(t?s.scrollPrev():s.scrollNext())},[s,t]);return{getControlProps:z.useCallback((C={},f=null)=>({...C,ref:f,disabled:a,onClick:Ye(C.onClick,l)}),[a,l])}},Ta=()=>{const{selectedIndex:r,carousel:n,indexes:s}=se(),t=z.useCallback((l,d)=>{n&&(l.stopPropagation(),n.scrollTo(d))},[n]),a=z.useCallback(({index:l,...d})=>{const C=l===r;return{"aria-label":`Go to ${l+1} slide`,...d,key:l,"data-index":l,"data-selected":In(C),onClick:Ye(d.onClick,f=>t(f,l))}},[t,r]);return{indexes:s,getIndicatorProps:a}},_=oe(({h:r,height:n,minH:s,minHeight:t,...a},l)=>{const d=R(a.orientation),C=R(a.align),f=R(a.autoplay),g=R(a.stopMouseEnterAutoplay),c=R(a.loop),i=R(a.speed),p=R(a.delay),m=R(a.slidesToScroll),S=R(a.draggable),E=R(a.dragFree),y=R(a.inViewThreshold),v=R(a.skipSnaps),h=R(a.containScroll),j=R(a.includeGapInSize),F=dr("spaces",R(a.gap))??R(a.gap),x=dr("sizes",R(a.slideSize))??R(a.slideSize),[w,D]=Zn("Carousel",{...a,orientation:d,align:C,autoplay:f,stopMouseEnterAutoplay:g,loop:c,speed:i,delay:p,slidesToScroll:m,draggable:S,dragFree:E,inViewThreshold:y,skipSnaps:v,containScroll:h,includeGapInSize:j,gap:F,slideSize:x}),{className:I,innerProps:T,withControls:q=!0,controlProps:B,controlPrevProps:Z,controlNextProps:K,withIndicators:W=!0,indicatorsProps:H,...P}=ea(D),$=R(q),O=R(W),{getContainerProps:U,getSlidesProps:ee,children:M,...J}=La({...P}),Y=Kn(M),[Q]=rr(Y,$e),[re]=rr(Y,Je),[X]=rr(Y,Xe),A=$n(Y,u),L=Jn(Y,$e,Je,Xe,u),V=A.map((b,k)=>z.cloneElement(b,{index:k}));return r??(r=n),s??(s=t),e.jsx(Pa,{value:{styles:w,...J},children:e.jsxs(de.div,{className:ce("ui-carousel",I),__css:{position:"relative",h:"fit-content",...w.container},...U({},l),children:[Q??($?e.jsx($e,{...B,...Z}):null),re??($?e.jsx(Je,{...B,...K}):null),e.jsx(Ma,{...ee({...Xn({h:r,minH:s}),...T}),children:V}),X??(O?e.jsx(Xe,{...H}):null),L]})})}),Ma=oe(({...r},n)=>{const s={w:"100%",h:"fit-content",overflow:"hidden"};return e.jsx(de.div,{ref:n,className:"ui-carousel__sliders",__css:s,children:e.jsx(Na,{...r})})}),Na=({...r})=>{const{orientation:n,includeGapInSize:s,gap:t,styles:a}=se(),l={display:"flex",flexDirection:n==="vertical"?"column":"row",...a.inner,...s?{[n==="vertical"?"mb":"mr"]:`-${t}`}:{}};return e.jsx(de.div,{className:"ui-carousel__sliders__inner",__css:l,...r})},u=oe(({className:r,size:n,...s},t)=>{const{slideSize:a,includeGapInSize:l,orientation:d,gap:C}=se(),{getSlideProps:f}=za(s);n??(n=a);const g={position:"relative",flex:`0 0 ${n}`,...l?{[d==="vertical"?"pb":"pr"]:C}:{[d==="vertical"?"mb":"mr"]:C}};return e.jsx(de.div,{className:ce("ui-carousel__slide",r),__css:g,...f({}),children:e.jsx(Oa,{ref:t,...s})})}),Oa=oe(({...r},n)=>e.jsx(de.div,{ref:n,className:"ui-carousel__slide__inner",w:"100%",h:"100%",...r})),$e=oe(({className:r,...n},s)=>{const{orientation:t}=se(),{getControlProps:a}=Nn({operation:"prev"});return e.jsx(On,{operation:"prev",className:ce("ui-carousel__control--prev",r),"aria-label":"Go to previous slide",icon:e.jsx(Pn,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),...a(n,s)})}),Je=oe(({className:r,...n},s)=>{const{orientation:t}=se(),{getControlProps:a}=Nn({operation:"next"});return e.jsx(On,{operation:"next",className:ce("ui-carousel__control--next",r),"aria-label":"Go to next slide",icon:e.jsx(Pn,{__css:{fontSize:"1.5em",transform:t==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),...a(n,s)})}),On=oe(({className:r,operation:n,...s},t)=>{const{styles:a}=se(),l=Yn("whiteAlpha","blackAlpha"),d={position:"absolute",zIndex:9,...a.control,...a[n]};return e.jsx(Qn,{ref:t,className:ce("ui-carousel__control",r),colorScheme:l,isRounded:!0,__css:d,...s})}),Xe=oe(({className:r,component:n,...s},t)=>{const{selectedIndex:a,orientation:l,styles:d}=se(),{indexes:C,getIndicatorProps:f}=Ta(),g={position:"absolute",zIndex:9,display:"flex",justifyContent:"center",...d.indicators,...l==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(de.div,{ref:t,className:ce("ui-carousel__indicators",r),__css:g,...s,children:C.map(c=>{const i=c===a;if(typeof n=="function"){const p=n({index:c,isSelected:i});if(!p)return null;const m=f({...p.props,index:c});return z.cloneElement(p,m)}else{const{key:p,...m}=f({index:c});return e.jsx(ka,{...m},p)}})})}),ka=({className:r,...n})=>{const{styles:s}=se(),t={...s.indicator};return e.jsx(de.button,{type:"button",tabIndex:-1,className:ce("ui-carousel__indicators__indicator",r),__css:t,...n})},hs={title:"Components / Data Display / Carousel",component:_},we=()=>e.jsxs(_,{children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),Ee=()=>e.jsxs(e.Fragment,{children:[e.jsxs(_,{size:"sm",children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),e.jsxs(_,{size:"md",children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),e.jsxs(_,{size:"lg",children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),e.jsxs(_,{size:"xl",children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]})]}),Be=()=>e.jsxs(e.Fragment,{children:[e.jsxs(_,{orientation:"horizontal",children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),e.jsxs(_,{orientation:"vertical",children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]})]}),Ae=()=>e.jsxs(_,{defaultIndex:1,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),De=()=>e.jsxs(_,{gap:0,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),_e=()=>e.jsxs(_,{speed:50,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),Ie=()=>e.jsxs(_,{slideSize:"50%",children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",size:"100%",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),Pe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(_,{slideSize:"50%",align:"center",children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),e.jsxs(_,{slideSize:"50%",align:"start",children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),e.jsxs(_,{slideSize:"50%",align:"end",children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]})]}),Le=()=>e.jsxs(_,{slideSize:"33.3%",slidesToScroll:3,loop:!1,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"}),e.jsx(u,{as:o,bg:"primary",children:"5"}),e.jsx(u,{as:o,bg:"secondary",children:"6"}),e.jsx(u,{as:o,bg:"danger",children:"7"}),e.jsx(u,{as:o,bg:"primary",children:"8"}),e.jsx(u,{as:o,bg:"secondary",children:"9"})]}),ze=()=>e.jsxs(_,{slideSize:"50%",align:"start",slidesToScroll:2,h:"auto",controlProps:{colorScheme:"whiteAlpha",color:"white"},children:[e.jsxs(u,{as:Se,variant:"subtle",children:[e.jsx(ve,{justifyContent:"center",children:e.jsx(xe,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),e.jsxs(he,{children:[e.jsx(ye,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),e.jsx(je,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),e.jsx(be,{children:e.jsx(Fe,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(u,{as:Se,variant:"subtle",children:[e.jsx(ve,{justifyContent:"center",children:e.jsx(xe,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),e.jsxs(he,{children:[e.jsx(ye,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),e.jsx(je,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),e.jsx(be,{children:e.jsx(Fe,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(u,{as:Se,variant:"subtle",children:[e.jsx(ve,{justifyContent:"center",children:e.jsx(xe,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),e.jsxs(he,{children:[e.jsx(ye,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),e.jsx(je,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),e.jsx(be,{children:e.jsx(Fe,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(u,{as:Se,variant:"subtle",children:[e.jsx(ve,{justifyContent:"center",children:e.jsx(xe,{src:"https://www.toei.co.jp/movie/details/__icsFiles/afieldfile/2022/04/01/pub_honpos_wide_B_1.jpg",w:"full",rounded:"md",alt:"ドラゴンボール"})}),e.jsxs(he,{children:[e.jsx(ye,{size:"md",children:"『ドラゴンボール』（DRAGON BALL）"}),e.jsx(je,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]}),e.jsx(be,{children:e.jsx(Fe,{colorScheme:"primary",children:"Wikipedia"})})]})]}),Te=()=>e.jsxs(_,{autoplay:!0,loop:!1,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),Me=()=>e.jsxs(_,{autoplay:!0,delay:1e3,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),Ne=()=>e.jsxs(_,{dragFree:!0,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),Oe=()=>{const[r,n]=z.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(_,{loop:!1,dragFree:!0,onScrollProgress:n,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),e.jsx(ra,{value:r,colorScheme:"gray"})]})},ke=()=>e.jsxs(_,{slideSize:"50%",includeGapInSize:!1,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),Ge=()=>e.jsxs(_,{loop:!1,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(_,{draggable:!1,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),He=()=>e.jsxs(_,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),Ve=()=>e.jsxs(_,{withControls:!1,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),qe=()=>e.jsxs(_,{withIndicators:!1,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),We=()=>{const[r,n]=z.useState(0);return e.jsxs(_,{draggable:!1,index:r,onChange:n,children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]})},Ue=()=>e.jsxs(e.Fragment,{children:[e.jsxs(_,{controlProps:{icon:e.jsx(Ce,{icon:_n})},children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),e.jsxs(_,{controlPrevProps:{icon:e.jsx(Ce,{icon:ir})},children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),e.jsxs(_,{controlNextProps:{icon:e.jsx(Ce,{icon:lr})},children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),e.jsxs(_,{children:[e.jsx($e,{icon:e.jsx(Ce,{icon:ir})}),e.jsx(Je,{icon:e.jsx(Ce,{icon:lr})}),e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]})]}),Ke=()=>e.jsxs(e.Fragment,{children:[e.jsxs(_,{indicatorsProps:{bottom:"8",component:({isSelected:r})=>e.jsx(Ce,{icon:_n,color:r?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer"})},children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"})]}),e.jsxs(_,{children:[e.jsx(u,{as:o,bg:"primary",children:"1"}),e.jsx(u,{as:o,bg:"secondary",children:"2"}),e.jsx(u,{as:o,bg:"warning",children:"3"}),e.jsx(u,{as:o,bg:"danger",children:"4"}),e.jsx(Xe,{sx:{"& > *":{w:"4",_selected:{w:"12"},transitionProperty:"width",transitionDuration:"slower"}}})]})]});var fr,pr,mr;we.parameters={...we.parameters,docs:{...(fr=we.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
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
}`,...(Ar=(Br=De.parameters)==null?void 0:Br.docs)==null?void 0:Ar.source}}};var Dr,_r,Ir;_e.parameters={..._e.parameters,docs:{...(Dr=_e.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
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
}`,...(Ir=(_r=_e.parameters)==null?void 0:_r.docs)==null?void 0:Ir.source}}};var Pr,Lr,zr;Ie.parameters={...Ie.parameters,docs:{...(Pr=Ie.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
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
}`,...(zr=(Lr=Ie.parameters)==null?void 0:Lr.docs)==null?void 0:zr.source}}};var Tr,Mr,Nr;Pe.parameters={...Pe.parameters,docs:{...(Tr=Pe.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
}`,...(Nr=(Mr=Pe.parameters)==null?void 0:Mr.docs)==null?void 0:Nr.source}}};var Or,kr,Gr;Le.parameters={...Le.parameters,docs:{...(Or=Le.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
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
}`,...(Gr=(kr=Le.parameters)==null?void 0:kr.docs)==null?void 0:Gr.source}}};var Rr,Hr,Vr;ze.parameters={...ze.parameters,docs:{...(Rr=ze.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
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
}`,...(Vr=(Hr=ze.parameters)==null?void 0:Hr.docs)==null?void 0:Vr.source}}};var qr,Wr,Ur;Te.parameters={...Te.parameters,docs:{...(qr=Te.parameters)==null?void 0:qr.docs,source:{originalSource:`() => {
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
}`,...(Ur=(Wr=Te.parameters)==null?void 0:Wr.docs)==null?void 0:Ur.source}}};var Kr,$r,Jr;Me.parameters={...Me.parameters,docs:{...(Kr=Me.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
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
}`,...(Jr=($r=Me.parameters)==null?void 0:$r.docs)==null?void 0:Jr.source}}};var Xr,Yr,Qr;Ne.parameters={...Ne.parameters,docs:{...(Xr=Ne.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...(Qr=(Yr=Ne.parameters)==null?void 0:Yr.docs)==null?void 0:Qr.source}}};var Zr,en,rn;Oe.parameters={...Oe.parameters,docs:{...(Zr=Oe.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
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
}`,...(rn=(en=Oe.parameters)==null?void 0:en.docs)==null?void 0:rn.source}}};var nn,an,sn;ke.parameters={...ke.parameters,docs:{...(nn=ke.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
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
}`,...(sn=(an=ke.parameters)==null?void 0:an.docs)==null?void 0:sn.source}}};var tn,un,on;Ge.parameters={...Ge.parameters,docs:{...(tn=Ge.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
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
}`,...(on=(un=Ge.parameters)==null?void 0:un.docs)==null?void 0:on.source}}};var ln,dn,cn;Re.parameters={...Re.parameters,docs:{...(ln=Re.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(cn=(dn=Re.parameters)==null?void 0:dn.docs)==null?void 0:cn.source}}};var Cn,gn,fn;He.parameters={...He.parameters,docs:{...(Cn=He.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
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
}`,...(fn=(gn=He.parameters)==null?void 0:gn.docs)==null?void 0:fn.source}}};var pn,mn,Sn;Ve.parameters={...Ve.parameters,docs:{...(pn=Ve.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(Sn=(mn=Ve.parameters)==null?void 0:mn.docs)==null?void 0:Sn.source}}};var vn,hn,bn;qe.parameters={...qe.parameters,docs:{...(vn=qe.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
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
}`,...(jn=(yn=We.parameters)==null?void 0:yn.docs)==null?void 0:jn.source}}};var Fn,wn,En;Ue.parameters={...Ue.parameters,docs:{...(Fn=Ue.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
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
}`,...(En=(wn=Ue.parameters)==null?void 0:wn.docs)==null?void 0:En.source}}};var Bn,An,Dn;Ke.parameters={...Ke.parameters,docs:{...(Bn=Ke.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
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
}`,...(Dn=(An=Ke.parameters)==null?void 0:An.docs)==null?void 0:Dn.source}}};const bs=["basic","withSize","withOrientation","withDefaultIndex","withGap","withSpeed","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","customControl","customControlButton","customIndicators"];export{bs as __namedExportsOrder,we as basic,We as customControl,Ue as customControlButton,Ke as customIndicators,hs as default,Ve as disabledControlButton,Re as disabledDraggable,ke as disabledIncludeGapInSize,qe as disabledIndicators,Ge as disabledLoop,He as disabledStopMouseEnterAutoplay,Pe as withAlign,Te as withAutoplay,ze as withCard,Ae as withDefaultIndex,Me as withDelay,Ne as withDragFree,De as withGap,Be as withOrientation,Oe as withScrollProgress,Ee as withSize,Ie as withSlideSize,Le as withSlidesToScroll,_e as withSpeed};
