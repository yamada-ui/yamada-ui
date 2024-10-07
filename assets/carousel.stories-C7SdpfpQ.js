import{j as e}from"./extends-CwFRzn3r.js";import{r as N}from"./index-BwDkhjyp.js";import{u as Fn}from"./index-CodSCr3E.js";import{u as Q}from"./index-BWWKr8fL.js";import{u as Is}from"./index-DeXdSJTC.js";import{o as vs,V as _s,a6 as zs,e as Ps,f as Sn,h as an,d as cs,c as pe,b as me,p as Es,q as hn,a2 as ks,a9 as Ts,y as Ls}from"./factory-CB2imrkD.js";import{c as ds}from"./icon-GDJ6YhRU.js";import{I as As}from"./icon-button-BQGRCYis.js";import{f as ge}from"./forward-ref-BWI-Phbn.js";import{a as Ds}from"./use-component-style-CLkw4iG2.js";import{o as Ns}from"./theme-provider-D1j4LEQ9.js";import{P as Os}from"./progress-nwBko6Yk.js";import{A as Bn}from"./arrow-left-BRuuV42i.js";import{A as Hn}from"./arrow-right-BmJ4mrMT.js";import{C as c}from"./center-tpAwapBn.js";import{C as Pe,a as Ee,b as ke,c as Te}from"./card-Cmk7gT2W.js";import{I as Le}from"./image-Dh24_Zyc.js";import{H as Ae}from"./heading-BtkaRthV.js";import{T as De}from"./text-DzUFhekZ.js";import{B as Ne}from"./button-D6MtFxez.js";import{G as us}from"./ghost-Bi5rdmyd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-wnA7eVNJ.js";import"./use-var-D-eiJB8b.js";import"./index-DORD3SAs.js";import"./index-CoJrGj-T.js";import"./index-C60CJblF.js";import"./number-CcP_arM8.js";import"./lucide-icon-DTzfJBKH.js";import"./use-image-Dw78bUOu.js";import"./use-ripple-D_F9Vz55.js";import"./factory-C3FBZMw9.js";import"./motion-I-9Hg3gW.js";import"./loading-6PAwx6O9.js";function Ms(n){return Object.prototype.toString.call(n)==="[object Object]"}function Gn(n){return Ms(n)||Array.isArray(n)}function Fs(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function yn(n,r){const s=Object.keys(n),o=Object.keys(r);if(s.length!==o.length)return!1;const t=JSON.stringify(Object.keys(n.breakpoints||{})),i=JSON.stringify(Object.keys(r.breakpoints||{}));return t!==i?!1:s.every(l=>{const u=n[l],d=r[l];return typeof u=="function"?`${u}`==`${d}`:!Gn(u)||!Gn(d)?u===d:yn(u,d)})}function Vn(n){return n.concat().sort((r,s)=>r.name>s.name?1:-1).map(r=>r.options)}function Bs(n,r){if(n.length!==r.length)return!1;const s=Vn(n),o=Vn(r);return s.every((t,i)=>{const l=o[i];return yn(t,l)})}function jn(n){return typeof n=="number"}function bn(n){return typeof n=="string"}function cn(n){return typeof n=="boolean"}function Rn(n){return Object.prototype.toString.call(n)==="[object Object]"}function F(n){return Math.abs(n)}function wn(n){return Math.sign(n)}function je(n,r){return F(n-r)}function Hs(n,r){if(n===0||r===0||F(n)<=F(r))return 0;const s=je(F(n),F(r));return F(s/n)}function we(n){return Ie(n).map(Number)}function te(n){return n[_e(n)]}function _e(n){return Math.max(0,n.length-1)}function In(n,r){return r===_e(n)}function Qn(n,r=0){return Array.from(Array(n),(s,o)=>r+o)}function Ie(n){return Object.keys(n)}function gs(n,r){return[n,r].reduce((s,o)=>(Ie(o).forEach(t=>{const i=s[t],l=o[t],u=Rn(i)&&Rn(l);s[t]=u?gs(i,l):l}),s),{})}function xn(n,r){return typeof r.MouseEvent<"u"&&n instanceof r.MouseEvent}function Gs(n,r){const s={start:o,center:t,end:i};function o(){return 0}function t(d){return i(d)/2}function i(d){return r-d}function l(d,g){return bn(n)?s[n](d):n(r,d,g)}return{measure:l}}function ve(){let n=[];function r(t,i,l,u={passive:!0}){let d;if("addEventListener"in t)t.addEventListener(i,l,u),d=()=>t.removeEventListener(i,l,u);else{const g=t;g.addListener(l),d=()=>g.removeListener(l)}return n.push(d),o}function s(){n=n.filter(t=>t())}const o={add:r,clear:s};return o}function Vs(n,r,s,o){const t=ve(),i=1e3/60;let l=null,u=0,d=0;function g(){t.add(n,"visibilitychange",()=>{n.hidden&&p()})}function h(){y(),t.clear()}function C(b){if(!d)return;l||(l=b);const f=b-l;for(l=b,u+=f;u>=i;)s(i),u-=i;const x=u/i;o(x),d&&r.requestAnimationFrame(C)}function m(){d||(d=r.requestAnimationFrame(C))}function y(){r.cancelAnimationFrame(d),l=null,u=0,d=0}function p(){l=null,u=0}return{init:g,destroy:h,start:m,stop:y,update:()=>s(i),render:o}}function Rs(n,r){const s=r==="rtl",o=n==="y",t=o?"y":"x",i=o?"x":"y",l=!o&&s?-1:1,u=h(),d=C();function g(p){const{height:S,width:b}=p;return o?S:b}function h(){return o?"top":s?"right":"left"}function C(){return o?"bottom":s?"left":"right"}function m(p){return p*l}return{scroll:t,cross:i,startEdge:u,endEdge:d,measureSize:g,direction:m}}function Ce(n=0,r=0){const s=F(n-r);function o(g){return g<n}function t(g){return g>r}function i(g){return o(g)||t(g)}function l(g){return i(g)?o(g)?n:r:g}function u(g){return s?g-s*Math.ceil((g-r)/s):g}return{length:s,max:r,min:n,constrain:l,reachedAny:i,reachedMax:t,reachedMin:o,removeOffset:u}}function fs(n,r,s){const{constrain:o}=Ce(0,n),t=n+1;let i=l(r);function l(m){return s?F((t+m)%t):o(m)}function u(){return i}function d(m){return i=l(m),C}function g(m){return h().set(u()+m)}function h(){return fs(n,u(),s)}const C={get:u,set:d,add:g,clone:h};return C}function Qs(n,r,s,o,t,i,l,u,d,g,h,C,m,y,p,S,b,f,x){const{cross:w,direction:k}=n,L=["INPUT","SELECT","TEXTAREA"],T={passive:!1},I=ve(),_=ve(),z=Ce(50,225).constrain(y.measure(20)),D={mouse:300,touch:400},E={mouse:500,touch:600},G=p?43:25;let $=!1,W=0,X=0,P=!1,re=!1,J=!1,q=!1;function oe(j){if(!x)return;function A(K){(cn(x)||x(j,K))&&B(K)}const H=r;I.add(H,"dragstart",K=>K.preventDefault(),T).add(H,"touchmove",()=>{},T).add(H,"touchend",()=>{}).add(H,"touchstart",A).add(H,"mousedown",A).add(H,"touchcancel",R).add(H,"contextmenu",R).add(H,"click",U,!0)}function V(){I.clear(),_.clear()}function Z(){const j=q?s:r;_.add(j,"touchmove",M,T).add(j,"touchend",R).add(j,"mousemove",M,T).add(j,"mouseup",R)}function se(j){const A=j.nodeName||"";return L.includes(A)}function ee(){return(p?E:D)[q?"mouse":"touch"]}function ne(j,A){const H=C.add(wn(j)*-1),K=h.byDistance(j,!p).distance;return p||F(j)<z?K:b&&A?K*.5:h.byIndex(H.get(),0).distance}function B(j){const A=xn(j,o);q=A,J=p&&A&&!j.buttons&&$,$=je(t.get(),l.get())>=2,!(A&&j.button!==0)&&(se(j.target)||(P=!0,i.pointerDown(j),g.useFriction(0).useDuration(0),t.set(l),Z(),W=i.readPoint(j),X=i.readPoint(j,w),m.emit("pointerDown")))}function M(j){if(!xn(j,o)&&j.touches.length>=2)return R(j);const H=i.readPoint(j),K=i.readPoint(j,w),ae=je(H,W),le=je(K,X);if(!re&&!q&&(!j.cancelable||(re=ae>le,!re)))return R(j);const ce=i.pointerMove(j);ae>S&&(J=!0),g.useFriction(.3).useDuration(.75),u.start(),t.add(k(ce)),j.preventDefault()}function R(j){const H=h.byDistance(0,!1).index!==C.get(),K=i.pointerUp(j)*ee(),ae=ne(k(K),H),le=Hs(K,ae),ce=G-10*le,de=f+le/50;re=!1,P=!1,_.clear(),g.useDuration(ce).useFriction(de),d.distance(ae,!p),q=!1,m.emit("pointerUp")}function U(j){J&&(j.stopPropagation(),j.preventDefault(),J=!1)}function Y(){return P}return{init:oe,destroy:V,pointerDown:Y}}function Xs(n,r){let o,t;function i(C){return C.timeStamp}function l(C,m){const p=`client${(m||n.scroll)==="x"?"X":"Y"}`;return(xn(C,r)?C:C.touches[0])[p]}function u(C){return o=C,t=C,l(C)}function d(C){const m=l(C)-l(t),y=i(C)-i(o)>170;return t=C,y&&(o=C),m}function g(C){if(!o||!t)return 0;const m=l(t)-l(o),y=i(C)-i(o),p=i(C)-i(t)>170,S=m/y;return y&&!p&&F(S)>.1?S:0}return{pointerDown:u,pointerMove:d,pointerUp:g,readPoint:l}}function $s(){function n(s){const{offsetTop:o,offsetLeft:t,offsetWidth:i,offsetHeight:l}=s;return{top:o,right:t+i,bottom:o+l,left:t,width:i,height:l}}return{measure:n}}function qs(n){function r(o){return n*(o/100)}return{measure:r}}function Us(n,r,s,o,t,i,l){const u=[n].concat(o);let d,g,h=[],C=!1;function m(b){return t.measureSize(l.measure(b))}function y(b){if(!i)return;g=m(n),h=o.map(m);function f(x){for(const w of x){if(C)return;const k=w.target===n,L=o.indexOf(w.target),T=k?g:h[L],I=m(k?n:o[L]);if(F(I-T)>=.5){b.reInit(),r.emit("resize");break}}}d=new ResizeObserver(x=>{(cn(i)||i(b,x))&&f(x)}),s.requestAnimationFrame(()=>{u.forEach(x=>d.observe(x))})}function p(){C=!0,d&&d.disconnect()}return{init:y,destroy:p}}function Ks(n,r,s,o,t,i){let l=0,u=0,d=t,g=i,h=n.get(),C=0;function m(T){const I=T/1e3,_=d*I,z=o.get()-n.get(),D=!d;let E=0;return D?(l=0,s.set(o),n.set(o),E=z):(s.set(n),l+=z/_,l*=g,h+=l,n.add(l*I),E=h-C),u=wn(E),C=h,L}function y(){const T=o.get()-r.get();return F(T)<.001}function p(){return d}function S(){return u}function b(){return l}function f(){return w(t)}function x(){return k(i)}function w(T){return d=T,L}function k(T){return g=T,L}const L={direction:S,duration:p,velocity:b,seek:m,settled:y,useBaseFriction:x,useBaseDuration:f,useFriction:k,useDuration:w};return L}function Ws(n,r,s,o,t){const i=t.measure(10),l=t.measure(50),u=Ce(.1,.99);let d=!1;function g(){return!(d||!n.reachedAny(s.get())||!n.reachedAny(r.get()))}function h(y){if(!g())return;const p=n.reachedMin(r.get())?"min":"max",S=F(n[p]-r.get()),b=s.get()-r.get(),f=u.constrain(S/l);s.subtract(b*f),!y&&F(b)<i&&(s.set(n.constrain(s.get())),o.useDuration(25).useBaseFriction())}function C(y){d=!y}return{shouldConstrain:g,constrain:h,toggleActive:C}}function Js(n,r,s,o,t){const i=Ce(-r+n,0),l=C(),u=h(),d=m();function g(p,S){return je(p,S)<1}function h(){const p=l[0],S=te(l),b=l.lastIndexOf(p),f=l.indexOf(S)+1;return Ce(b,f)}function C(){return s.map((p,S)=>{const{min:b,max:f}=i,x=i.constrain(p),w=!S,k=In(s,S);return w?f:k||g(b,x)?b:g(f,x)?f:x}).map(p=>parseFloat(p.toFixed(3)))}function m(){if(r<=n+t)return[i.max];if(o==="keepSnaps")return l;const{min:p,max:S}=u;return l.slice(p,S)}return{snapsContained:d,scrollContainLimit:u}}function Ys(n,r,s){const o=r[0],t=s?o-n:te(r);return{limit:Ce(t,o)}}function Zs(n,r,s,o){const i=r.min+.1,l=r.max+.1,{reachedMin:u,reachedMax:d}=Ce(i,l);function g(m){return m===1?d(s.get()):m===-1?u(s.get()):!1}function h(m){if(!g(m))return;const y=n*(m*-1);o.forEach(p=>p.add(y))}return{loop:h}}function et(n){const{max:r,length:s}=n;function o(i){const l=i-r;return s?l/-s:0}return{get:o}}function nt(n,r,s,o,t){const{startEdge:i,endEdge:l}=n,{groupSlides:u}=t,d=C().map(r.measure),g=m(),h=y();function C(){return u(o).map(S=>te(S)[l]-S[0][i]).map(F)}function m(){return o.map(S=>s[i]-S[i]).map(S=>-F(S))}function y(){return u(g).map(S=>S[0]).map((S,b)=>S+d[b])}return{snaps:g,snapsAligned:h}}function rt(n,r,s,o,t,i){const{groupSlides:l}=t,{min:u,max:d}=o,g=h();function h(){const m=l(i),y=!n||r==="keepSnaps";return s.length===1?[i]:y?m:m.slice(u,d).map((p,S,b)=>{const f=!S,x=In(b,S);if(f){const w=te(b[0])+1;return Qn(w)}if(x){const w=_e(i)-te(b)[0]+1;return Qn(w,te(b)[0])}return p})}return{slideRegistry:g}}function st(n,r,s,o,t){const{reachedAny:i,removeOffset:l,constrain:u}=o;function d(p){return p.concat().sort((S,b)=>F(S)-F(b))[0]}function g(p){const S=n?l(p):u(p),b=r.map((x,w)=>({diff:h(x-S,0),index:w})).sort((x,w)=>F(x.diff)-F(w.diff)),{index:f}=b[0];return{index:f,distance:S}}function h(p,S){const b=[p,p+s,p-s];if(!n)return p;if(!S)return d(b);const f=b.filter(x=>wn(x)===S);return f.length?d(f):te(b)-s}function C(p,S){const b=r[p]-t.get(),f=h(b,S);return{index:p,distance:f}}function m(p,S){const b=t.get()+p,{index:f,distance:x}=g(b),w=!n&&i(b);if(!S||w)return{index:f,distance:p};const k=r[f]-x,L=p+h(k,0);return{index:f,distance:L}}return{byDistance:m,byIndex:C,shortcut:h}}function tt(n,r,s,o,t,i,l){function u(C){const m=C.distance,y=C.index!==r.get();i.add(m),m&&(o.duration()?n.start():(n.update(),n.render(1),n.update())),y&&(s.set(r.get()),r.set(C.index),l.emit("select"))}function d(C,m){const y=t.byDistance(C,m);u(y)}function g(C,m){const y=r.clone().set(C),p=t.byIndex(y.get(),m);u(p)}return{distance:d,index:g}}function ot(n,r,s,o,t,i,l,u){const d={passive:!0,capture:!0};let g=0;function h(y){if(!u)return;function p(S){if(new Date().getTime()-g>10)return;l.emit("slideFocusStart"),n.scrollLeft=0;const x=s.findIndex(w=>w.includes(S));jn(x)&&(t.useDuration(0),o.index(x,0),l.emit("slideFocus"))}i.add(document,"keydown",C,!1),r.forEach((S,b)=>{i.add(S,"focus",f=>{(cn(u)||u(y,f))&&p(b)},d)})}function C(y){y.code==="Tab"&&(g=new Date().getTime())}return{init:h}}function ye(n){let r=n;function s(){return r}function o(d){r=l(d)}function t(d){r+=l(d)}function i(d){r-=l(d)}function l(d){return jn(d)?d:d.get()}return{get:s,set:o,add:t,subtract:i}}function Cs(n,r){const s=n.scroll==="x"?i:l,o=r.style;let t=!1;function i(C){return`translate3d(${C}px,0px,0px)`}function l(C){return`translate3d(0px,${C}px,0px)`}function u(C){t||(o.transform=s(n.direction(C)))}function d(C){t=!C}function g(){t||(o.transform="",r.getAttribute("style")||r.removeAttribute("style"))}return{clear:g,to:u,toggleActive:d}}function at(n,r,s,o,t,i,l,u,d){const h=we(t),C=we(t).reverse(),m=f().concat(x());function y(I,_){return I.reduce((z,D)=>z-t[D],_)}function p(I,_){return I.reduce((z,D)=>y(z,_)>0?z.concat([D]):z,[])}function S(I){return i.map((_,z)=>({start:_-o[z]+.5+I,end:_+r-.5+I}))}function b(I,_,z){const D=S(_);return I.map(E=>{const G=z?0:-s,$=z?s:0,W=z?"end":"start",X=D[E][W];return{index:E,loopPoint:X,slideLocation:ye(-1),translate:Cs(n,d[E]),target:()=>u.get()>X?G:$}})}function f(){const I=l[0],_=p(C,I);return b(_,s,!1)}function x(){const I=r-l[0]-1,_=p(h,I);return b(_,-s,!0)}function w(){return m.every(({index:I})=>{const _=h.filter(z=>z!==I);return y(_,r)<=.1})}function k(){m.forEach(I=>{const{target:_,translate:z,slideLocation:D}=I,E=_();E!==D.get()&&(z.to(E),D.set(E))})}function L(){m.forEach(I=>I.translate.clear())}return{canLoop:w,clear:L,loop:k,loopPoints:m}}function it(n,r,s){let o,t=!1;function i(d){if(!s)return;function g(h){for(const C of h)if(C.type==="childList"){d.reInit(),r.emit("slidesChanged");break}}o=new MutationObserver(h=>{t||(cn(s)||s(d,h))&&g(h)}),o.observe(n,{childList:!0})}function l(){o&&o.disconnect(),t=!0}return{init:i,destroy:l}}function lt(n,r,s,o){const t={};let i=null,l=null,u,d=!1;function g(){u=new IntersectionObserver(p=>{d||(p.forEach(S=>{const b=r.indexOf(S.target);t[b]=S}),i=null,l=null,s.emit("slidesInView"))},{root:n.parentElement,threshold:o}),r.forEach(p=>u.observe(p))}function h(){u&&u.disconnect(),d=!0}function C(p){return Ie(t).reduce((S,b)=>{const f=parseInt(b),{isIntersecting:x}=t[f];return(p&&x||!p&&!x)&&S.push(f),S},[])}function m(p=!0){if(p&&i)return i;if(!p&&l)return l;const S=C(p);return p&&(i=S),p||(l=S),S}return{init:g,destroy:h,get:m}}function ct(n,r,s,o,t,i){const{measureSize:l,startEdge:u,endEdge:d}=n,g=s[0]&&t,h=p(),C=S(),m=s.map(l),y=b();function p(){if(!g)return 0;const x=s[0];return F(r[u]-x[u])}function S(){if(!g)return 0;const x=i.getComputedStyle(te(o));return parseFloat(x.getPropertyValue(`margin-${d}`))}function b(){return s.map((x,w,k)=>{const L=!w,T=In(k,w);return L?m[w]+h:T?m[w]+C:k[w+1][u]-x[u]}).map(F)}return{slideSizes:m,slideSizesWithGaps:y,startGap:h,endGap:C}}function dt(n,r,s,o,t,i,l,u,d){const{startEdge:g,endEdge:h,direction:C}=n,m=jn(s);function y(f,x){return we(f).filter(w=>w%x===0).map(w=>f.slice(w,w+x))}function p(f){return f.length?we(f).reduce((x,w,k)=>{const L=te(x)||0,T=L===0,I=w===_e(f),_=t[g]-i[L][g],z=t[g]-i[w][h],D=!o&&T?C(l):0,E=!o&&I?C(u):0,G=F(z-E-(_+D));return k&&G>r+d&&x.push(w),I&&x.push(f.length),x},[]).map((x,w,k)=>{const L=Math.max(k[w-1]||0);return f.slice(L,x)}):[]}function S(f){return m?y(f,s):p(f)}return{groupSlides:S}}function ut(n,r,s,o,t,i,l){const{align:u,axis:d,direction:g,startIndex:h,loop:C,duration:m,dragFree:y,dragThreshold:p,inViewThreshold:S,slidesToScroll:b,skipSnaps:f,containScroll:x,watchResize:w,watchSlides:k,watchDrag:L,watchFocus:T}=i,I=2,_=$s(),z=_.measure(r),D=s.map(_.measure),E=Rs(d,g),G=E.measureSize(z),$=qs(G),W=Gs(u,G),X=!C&&!!x,P=C||!!x,{slideSizes:re,slideSizesWithGaps:J,startGap:q,endGap:oe}=ct(E,z,D,s,P,t),V=dt(E,G,b,C,z,D,q,oe,I),{snaps:Z,snapsAligned:se}=nt(E,W,z,D,V),ee=-te(Z)+te(J),{snapsContained:ne,scrollContainLimit:B}=Js(G,ee,se,x,I),M=X?ne:se,{limit:R}=Ys(ee,M,C),U=fs(_e(M),h,C),Y=U.clone(),O=we(s),j=({dragHandler:ue,scrollBody:Cn,scrollBounds:pn,options:{loop:ze}},mn)=>{ze||pn.constrain(ue.pointerDown()),Cn.seek(mn)},A=({scrollBody:ue,translate:Cn,location:pn,offsetLocation:ze,scrollLooper:mn,slideLooper:hs,dragHandler:bs,animation:xs,eventHandler:An,scrollBounds:ys,options:{loop:Dn}},Nn)=>{const On=ue.settled(),js=!ys.shouldConstrain(),Mn=Dn?On:On&&js;Mn&&!bs.pointerDown()&&(xs.stop(),An.emit("settle")),Mn||An.emit("scroll");const ws=pn.get()*Nn+ce.get()*(1-Nn);ze.set(ws),Dn&&(mn.loop(ue.direction()),hs.loop()),Cn.to(ze.get())},H=Vs(o,t,ue=>j(fn,ue),ue=>A(fn,ue)),K=.68,ae=M[U.get()],le=ye(ae),ce=ye(ae),de=ye(ae),fe=ye(ae),xe=Ks(le,de,ce,fe,m,K),un=st(C,M,ee,R,fe),gn=tt(H,U,Y,xe,un,fe,l),kn=et(R),Tn=ve(),ms=lt(r,s,l,S),{slideRegistry:Ln}=rt(X,x,M,B,V,O),Ss=ot(n,s,Ln,gn,xe,Tn,l,T),fn={ownerDocument:o,ownerWindow:t,eventHandler:l,containerRect:z,slideRects:D,animation:H,axis:E,dragHandler:Qs(E,n,o,t,fe,Xs(E,t),le,H,gn,xe,un,U,l,$,y,p,f,K,L),eventStore:Tn,percentOfView:$,index:U,indexPrevious:Y,limit:R,location:le,offsetLocation:de,previousLocation:ce,options:i,resizeHandler:Us(r,l,t,s,E,w,_),scrollBody:xe,scrollBounds:Ws(R,de,fe,xe,$),scrollLooper:Zs(ee,R,de,[le,de,ce,fe]),scrollProgress:kn,scrollSnapList:M.map(kn.get),scrollSnaps:M,scrollTarget:un,scrollTo:gn,slideLooper:at(E,G,ee,re,J,Z,M,de,s),slideFocus:Ss,slidesHandler:it(r,l,k),slidesInView:ms,slideIndexes:O,slideRegistry:Ln,slidesToScroll:V,target:fe,translate:Cs(E,r)};return fn}function gt(){let n={},r;function s(g){r=g}function o(g){return n[g]||[]}function t(g){return o(g).forEach(h=>h(r,g)),d}function i(g,h){return n[g]=o(g).concat([h]),d}function l(g,h){return n[g]=o(g).filter(C=>C!==h),d}function u(){n={}}const d={init:s,emit:t,off:l,on:i,clear:u};return d}const ft={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Ct(n){function r(i,l){return gs(i,l||{})}function s(i){const l=i.breakpoints||{},u=Ie(l).filter(d=>n.matchMedia(d).matches).map(d=>l[d]).reduce((d,g)=>r(d,g),{});return r(i,u)}function o(i){return i.map(l=>Ie(l.breakpoints||{})).reduce((l,u)=>l.concat(u),[]).map(n.matchMedia)}return{mergeOptions:r,optionsAtMedia:s,optionsMediaQueries:o}}function pt(n){let r=[];function s(i,l){return r=l.filter(({options:u})=>n.optionsAtMedia(u).active!==!1),r.forEach(u=>u.init(i,n)),l.reduce((u,d)=>Object.assign(u,{[d.name]:d}),{})}function o(){r=r.filter(i=>i.destroy())}return{init:s,destroy:o}}function ln(n,r,s){const o=n.ownerDocument,t=o.defaultView,i=Ct(t),l=pt(i),u=ve(),d=gt(),{mergeOptions:g,optionsAtMedia:h,optionsMediaQueries:C}=i,{on:m,off:y,emit:p}=d,S=E;let b=!1,f,x=g(ft,ln.globalOptions),w=g(x),k=[],L,T,I;function _(){const{container:O,slides:j}=w;T=(bn(O)?n.querySelector(O):O)||n.children[0];const H=bn(j)?T.querySelectorAll(j):j;I=[].slice.call(H||T.children)}function z(O){const j=ut(n,T,I,o,t,O,d);if(O.loop&&!j.slideLooper.canLoop()){const A=Object.assign({},O,{loop:!1});return z(A)}return j}function D(O,j){b||(x=g(x,O),w=h(x),k=j||k,_(),f=z(w),C([x,...k.map(({options:A})=>A)]).forEach(A=>u.add(A,"change",E)),w.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(Y),f.eventHandler.init(Y),f.resizeHandler.init(Y),f.slidesHandler.init(Y),f.options.loop&&f.slideLooper.loop(),T.offsetParent&&I.length&&f.dragHandler.init(Y),L=l.init(Y,k)))}function E(O,j){const A=V();G(),D(g({startIndex:A},O),j),d.emit("reInit")}function G(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),l.destroy(),u.clear()}function $(){b||(b=!0,u.clear(),G(),d.emit("destroy"),d.clear())}function W(O,j,A){!w.active||b||(f.scrollBody.useBaseFriction().useDuration(j===!0?0:w.duration),f.scrollTo.index(O,A||0))}function X(O){const j=f.index.add(1).get();W(j,O,-1)}function P(O){const j=f.index.add(-1).get();W(j,O,1)}function re(){return f.index.add(1).get()!==V()}function J(){return f.index.add(-1).get()!==V()}function q(){return f.scrollSnapList}function oe(){return f.scrollProgress.get(f.location.get())}function V(){return f.index.get()}function Z(){return f.indexPrevious.get()}function se(){return f.slidesInView.get()}function ee(){return f.slidesInView.get(!1)}function ne(){return L}function B(){return f}function M(){return n}function R(){return T}function U(){return I}const Y={canScrollNext:re,canScrollPrev:J,containerNode:R,internalEngine:B,destroy:$,off:y,on:m,emit:p,plugins:ne,previousScrollSnap:Z,reInit:S,rootNode:M,scrollNext:X,scrollPrev:P,scrollProgress:oe,scrollSnapList:q,scrollTo:W,selectedScrollSnap:V,slideNodes:U,slidesInView:se,slidesNotInView:ee};return D(r,s),setTimeout(()=>d.emit("init"),0),Y}ln.globalOptions=void 0;function vn(n={},r=[]){const s=N.useRef(n),o=N.useRef(r),[t,i]=N.useState(),[l,u]=N.useState(),d=N.useCallback(()=>{t&&t.reInit(s.current,o.current)},[t]);return N.useEffect(()=>{yn(s.current,n)||(s.current=n,d())},[n,d]),N.useEffect(()=>{Bs(o.current,r)||(o.current=r,d())},[r,d]),N.useEffect(()=>{if(Fs()&&l){ln.globalOptions=vn.globalOptions;const g=ln(l,s.current,o.current);return i(g),()=>g.destroy()}else i(void 0)},[l,i]),[u,t]}vn.globalOptions=void 0;const[mt,ie]=vs({name:"CarouselContext",errorMessage:`useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`}),St=({align:n="center",autoplay:r=!1,children:s,containScroll:o=!1,controlRef:t,defaultIndex:i=0,delay:l=4e3,dragFree:u=!1,draggable:d=!0,duration:g=25,includeGapInSize:h=!0,index:C,inViewThreshold:m=0,loop:y=!0,orientation:p="horizontal",skipSnaps:S=!1,slideSize:b="100%",slidesToScroll:f=1,stopMouseEnterAutoplay:x=!0,watchDrag:w=d,watchResize:k=!0,watchSlides:L=!0,onChange:T,onScrollProgress:I,..._})=>{const[{gap:z="fallback(4, 1rem)",...D},E]=_s(_,zs),[G,$]=Is({defaultValue:i,value:C,onChange:T}),W=p==="vertical",[X,P]=vn({align:n,axis:W?"y":"x",containScroll:o,dragFree:u,duration:g,inViewThreshold:m,loop:y,skipSnaps:S,slidesToScroll:f,startIndex:i,watchDrag:w,watchResize:k,watchSlides:L},[]);Ps(t,P);const[re,J]=N.useState([]),[q,oe]=N.useState(!1),V=N.useRef(void 0),Z=N.useCallback(()=>{if(!P)return;const B=Math.round(Math.max(0,Math.min(1,P.scrollProgress()))*100);I==null||I(B)},[P,I]),se=N.useCallback(()=>{if(!P)return;const B=P.selectedScrollSnap();$(B)},[P,$]);N.useEffect(()=>{const B=q&&x,M=!(P!=null&&P.canScrollNext());return P&&r&&!B&&!M?V.current=setInterval(()=>{P.scrollNext()},l):(V.current&&clearInterval(V.current),V.current=void 0),()=>{V.current&&clearInterval(V.current)}},[r,l,x,P,q,y,G]),Sn(()=>{if(!P)return;P.reInit();const M=P.scrollSnapList().map((R,U)=>U);J(M)},[N.Children.toArray(s).length,n,p,y,g,z,f,d,u,m,S,o,b,h]),Sn(()=>{if(!P)return;const M=P.scrollSnapList().map((R,U)=>U);J(M)},[P]),Sn(()=>{if(P)return P.on("select",se),P.on("scroll",Z),Z(),()=>{P.off("select",se),P.off("scroll",Z)}},[P,Z]);const ee=N.useCallback((B={},M=null)=>({...D,...B,ref:M,onMouseEnter:an(B.onMouseEnter,()=>{oe(!0)}),onMouseLeave:an(B.onMouseLeave,()=>{oe(!1)})}),[D]),ne=N.useCallback((B={})=>({...E,...B,ref:X}),[E,X]);return{carousel:P,children:s,gap:z,includeGapInSize:h,indexes:re,orientation:p,selectedIndex:G,slideSize:b,slidesToScroll:f,getContainerProps:ee,getSlidesProps:ne}},ht=({index:n})=>{const{selectedIndex:r,slidesToScroll:s}=ie();n=Math.floor((n??0)/s);const o=n===r;return{getSlideProps:N.useCallback((i={})=>({...i,"data-index":n,"data-selected":cs(o)}),[o,n])}},ps=({operation:n,...r})=>{const{carousel:s}=ie(),o=n==="prev",t=r.disabled??r.isDisabled??(o?!(s!=null&&s.canScrollPrev()):!(s!=null&&s.canScrollNext())),i=N.useCallback(()=>{s&&(o?s.scrollPrev():s.scrollNext())},[s,o]);return{getControlProps:N.useCallback((u={},d=null)=>({...u,ref:d,disabled:t,onClick:an(u.onClick,i)}),[t,i])}},bt=()=>{const{carousel:n,indexes:r,selectedIndex:s}=ie(),o=N.useCallback((i,l)=>{n&&(i.stopPropagation(),n.scrollTo(l))},[n]),t=N.useCallback(({index:i,...l})=>{const u=i===s;return{"aria-label":`Go to ${i+1} slide`,...l,key:i,"data-index":i,"data-selected":cs(u),onClick:an(l.onClick,d=>o(d,i))}},[o,s]);return{indexes:r,getIndicatorProps:t}},Se=ge(({className:n,...r},s)=>{const{orientation:o}=ie(),{getControlProps:t}=ps({operation:"prev"});return e.jsx(dn,{className:pe("ui-carousel__control--prev",n),"aria-label":"Go to previous slide",icon:e.jsx(ds,{__css:{fontSize:"1.5em",transform:o==="vertical"?"rotate(180deg)":"rotate(90deg)"}}),operation:"prev",...t(r,s)})});Se.displayName="CarouselControlPrev";Se.__ui__="CarouselControlPrev";const he=ge(({className:n,...r},s)=>{const{orientation:o}=ie(),{getControlProps:t}=ps({operation:"next"});return e.jsx(dn,{className:pe("ui-carousel__control--next",n),"aria-label":"Go to next slide",icon:e.jsx(ds,{__css:{fontSize:"1.5em",transform:o==="vertical"?"rotate(0deg)":"rotate(-90deg)"}}),operation:"next",...t(r,s)})});he.displayName="CarouselControlNext";he.__ui__="CarouselControlNext";const dn=ge(({className:n,operation:r,...s},o)=>{const{styles:t}=ie(),i={position:"absolute",zIndex:"fallback(kurillin, 9)",...t.control,...t[r]};return e.jsx(As,{ref:o,className:pe("ui-carousel__control",n),colorScheme:["whiteAlpha","blackAlpha"],isRounded:!0,__css:i,...s})});dn.displayName="CarouselControl";dn.__ui__="CarouselControl";const be=ge(({className:n,component:r,...s},o)=>{const{orientation:t,selectedIndex:i,styles:l}=ie(),{indexes:u,getIndicatorProps:d}=bt(),g={display:"flex",justifyContent:"center",position:"absolute",zIndex:"fallback(kurillin, 9)",...l.indicators,...t==="vertical"?{flexDirection:"column"}:{flexDirection:"row"}};return e.jsx(me.div,{ref:o,className:pe("ui-carousel__indicators",n),__css:g,...s,children:u.map(h=>{const C=h===i;if(typeof r=="function"){const m=r({index:h,isSelected:C});if(!m)return null;const y=d({...m.props,index:h});return N.cloneElement(m,y)}else{const{key:m,...y}=d({index:h});return e.jsx(_n,{...y},m)}})})});be.displayName="CarouselIndicators";be.__ui__="CarouselIndicators";const _n=({className:n,...r})=>{const{styles:s}=ie(),o={...s.indicator};return e.jsx(me.button,{type:"button",className:pe("ui-carousel__indicators__indicator",n),tabIndex:-1,__css:o,...r})};_n.displayName="CarouselIndicator";_n.__ui__="CarouselIndicator";const a=ge(({className:n,size:r,...s},o)=>{const{gap:t,includeGapInSize:i,orientation:l,slideSize:u}=ie(),{getSlideProps:d}=ht(s);r??(r=u);const g={flex:`0 0 ${r}`,position:"relative",...i?{[l==="vertical"?"pb":"pr"]:t}:{[l==="vertical"?"mb":"mr"]:t}};return e.jsx(me.div,{className:pe("ui-carousel__slide",n),__css:g,...d({}),children:e.jsx(zn,{ref:o,...s})})});a.displayName="CarouselSlide";a.__ui__="CarouselSlide";const zn=ge(({...n},r)=>e.jsx(me.div,{ref:r,className:"ui-carousel__slide__inner",h:"100%",w:"100%",...n}));zn.displayName="CarouselSlideInner";zn.__ui__="CarouselSlideInner";const v=ge(({h:n,height:r,minH:s,minHeight:o,...t},i)=>{const l=Q(t.orientation),u=Q(t.align),d=Q(t.autoplay),g=Q(t.stopMouseEnterAutoplay),h=Q(t.loop),C=Q(t.duration),m=Q(t.delay),y=Q(t.slidesToScroll),p=Q(t.draggable),S=Q(t.dragFree),b=Q(t.inViewThreshold),f=Q(t.skipSnaps),x=Q(t.containScroll),w=Q(t.includeGapInSize),k=Q(t.gap),L=Fn("spaces",k)??k,T=Q(t.slideSize),I=Fn("sizes",T)??T,[_,z]=Ds("Carousel",{...t,align:u,autoplay:d,containScroll:x,delay:m,dragFree:S,draggable:p,duration:C,gap:L,includeGapInSize:w,inViewThreshold:b,loop:h,orientation:l,skipSnaps:f,slideSize:I,slidesToScroll:y,stopMouseEnterAutoplay:g}),{className:D,withControls:E=!0,withIndicators:G=!0,controlNextProps:$,controlPrevProps:W,controlProps:X,indicatorsProps:P,innerProps:re,...J}=Ns(z),q=Q(E),oe=Q(G),{children:V,getContainerProps:Z,getSlidesProps:se,...ee}=St({...J}),ne=Es(V),B=hn(ne,Se),M=hn(ne,he),R=hn(ne,be),U=ks(ne,a),Y=Ts(ne,Se,he,be,a),O=U.map((j,A)=>N.cloneElement(j,{index:A}));return n??(n=r),s??(s=o),e.jsx(mt,{value:{styles:_,...ee},children:e.jsxs(me.div,{className:pe("ui-carousel",D),__css:{h:"fit-content",position:"relative",..._.container},...Z({},i),children:[B??(q?e.jsx(Se,{...X,...W}):null),M??(q?e.jsx(he,{...X,...$}):null),e.jsx(Pn,{...se({...Ls({h:n,minH:s}),...re}),children:O}),R??(oe?e.jsx(be,{...P}):null),Y]})})});v.displayName="Carousel";v.__ui__="Carousel";const Pn=ge(({...n},r)=>{const s={h:"fit-content",overflow:"hidden",w:"100%"};return e.jsx(me.div,{ref:r,className:"ui-carousel__sliders",__css:s,children:e.jsx(En,{...n})})});Pn.displayName="CarouselSlides";Pn.__ui__="CarouselSlides";const En=({...n})=>{const{gap:r,includeGapInSize:s,orientation:o,styles:t}=ie(),i={display:"flex",flexDirection:o==="vertical"?"column":"row",...t.inner,...s?{[o==="vertical"?"mb":"mr"]:"calc($gap * -1)",vars:[{name:"gap",token:"spaces",value:r}]}:{}};return e.jsx(me.div,{className:"ui-carousel__sliders__inner",__css:i,...n})};En.displayName="CarouselSlidesInner";En.__ui__="CarouselSlidesInner";const eo={component:v,title:"Components / Data Display / Carousel"},Oe=()=>e.jsxs(v,{children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Me=()=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{size:"sm",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{size:"md",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{size:"lg",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{size:"xl",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),Fe=()=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{orientation:"horizontal",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{orientation:"vertical",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),Be=()=>e.jsxs(v,{defaultIndex:1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),He=()=>e.jsxs(v,{gap:0,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ge=()=>e.jsxs(v,{duration:60,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ve=()=>e.jsxs(v,{slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,size:"100%",bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{align:"center",slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{align:"start",slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{align:"end",slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),Qe=()=>e.jsxs(v,{loop:!1,slideSize:"33.3%",slidesToScroll:3,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"}),e.jsx(a,{as:c,bg:"primary",children:"5"}),e.jsx(a,{as:c,bg:"secondary",children:"6"}),e.jsx(a,{as:c,bg:"danger",children:"7"}),e.jsx(a,{as:c,bg:"primary",children:"8"}),e.jsx(a,{as:c,bg:"secondary",children:"9"})]}),Xe=()=>e.jsxs(v,{align:"start",h:"auto",slideSize:"50%",slidesToScroll:2,children:[e.jsxs(a,{as:Pe,variant:"outline",children:[e.jsx(Ee,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(ke,{children:[e.jsx(Ae,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(De,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Te,{children:e.jsx(Ne,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(a,{as:Pe,variant:"outline",children:[e.jsx(Ee,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(ke,{children:[e.jsx(Ae,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(De,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Te,{children:e.jsx(Ne,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(a,{as:Pe,variant:"outline",children:[e.jsx(Ee,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(ke,{children:[e.jsx(Ae,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(De,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Te,{children:e.jsx(Ne,{colorScheme:"primary",children:"Wikipedia"})})]}),e.jsxs(a,{as:Pe,variant:"outline",children:[e.jsx(Ee,{justifyContent:"center",children:e.jsx(Le,{src:"https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000",alt:"いちご100%",rounded:"md",w:"full"})}),e.jsxs(ke,{children:[e.jsx(Ae,{size:"md",children:"『いちご100%』（いちごひゃくパーセント）"}),e.jsx(De,{children:"『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!"})]}),e.jsx(Te,{children:e.jsx(Ne,{colorScheme:"primary",children:"Wikipedia"})})]})]}),$e=()=>e.jsxs(v,{autoplay:!0,loop:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),qe=()=>e.jsxs(v,{autoplay:!0,delay:1e3,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ue=()=>e.jsxs(v,{dragFree:!0,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ke=()=>{const[n,r]=N.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(v,{dragFree:!0,loop:!1,onScrollProgress:r,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsx(Os,{colorScheme:"gray",value:n})]})},We=()=>e.jsxs(v,{includeGapInSize:!1,slideSize:"50%",children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Je=()=>e.jsxs(v,{loop:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ye=()=>e.jsxs(v,{draggable:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),Ze=()=>e.jsxs(v,{autoplay:!0,stopMouseEnterAutoplay:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),en=()=>e.jsxs(v,{withControls:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),nn=()=>e.jsxs(v,{withIndicators:!1,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),rn=()=>e.jsxs(v,{watchDrag:(n,r)=>(console.log("drag",n,r),!0),watchResize:(n,r)=>(console.log("resized",n,r),!0),watchSlides:(n,r)=>(console.log("slides updated",n,r),!0),children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),sn=()=>{const[n,r]=N.useState(0);return e.jsxs(v,{draggable:!1,index:n,onChange:r,children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})},tn=()=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{controlProps:{icon:e.jsx(us,{})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{controlPrevProps:{icon:e.jsx(Bn,{})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{controlNextProps:{icon:e.jsx(Hn,{})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{children:[e.jsx(Se,{icon:e.jsx(Bn,{})}),e.jsx(he,{icon:e.jsx(Hn,{})}),e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]})]}),on=()=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{indicatorsProps:{bottom:"8",component:({isSelected:n})=>e.jsx(us,{color:n?"whiteAlpha.700":"whiteAlpha.400",cursor:"pointer",fontSize:"2xl"})},children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"})]}),e.jsxs(v,{children:[e.jsx(a,{as:c,bg:"primary",children:"1"}),e.jsx(a,{as:c,bg:"secondary",children:"2"}),e.jsx(a,{as:c,bg:"warning",children:"3"}),e.jsx(a,{as:c,bg:"danger",children:"4"}),e.jsx(be,{sx:{"& > *":{transitionDuration:"slower",transitionProperty:"width",w:"4",_selected:{w:"12"}}}})]})]});var Xn,$n,qn;Oe.parameters={...Oe.parameters,docs:{...(Xn=Oe.parameters)==null?void 0:Xn.docs,source:{originalSource:`() => {
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
}`,...(qn=($n=Oe.parameters)==null?void 0:$n.docs)==null?void 0:qn.source}}};var Un,Kn,Wn;Me.parameters={...Me.parameters,docs:{...(Un=Me.parameters)==null?void 0:Un.docs,source:{originalSource:`() => {
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
}`,...(Wn=(Kn=Me.parameters)==null?void 0:Kn.docs)==null?void 0:Wn.source}}};var Jn,Yn,Zn;Fe.parameters={...Fe.parameters,docs:{...(Jn=Fe.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(Zn=(Yn=Fe.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var er,nr,rr;Be.parameters={...Be.parameters,docs:{...(er=Be.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
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
}`,...(rr=(nr=Be.parameters)==null?void 0:nr.docs)==null?void 0:rr.source}}};var sr,tr,or;He.parameters={...He.parameters,docs:{...(sr=He.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
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
}`,...(or=(tr=He.parameters)==null?void 0:tr.docs)==null?void 0:or.source}}};var ar,ir,lr;Ge.parameters={...Ge.parameters,docs:{...(ar=Ge.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
  return <Carousel duration={60}>
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
}`,...(lr=(ir=Ge.parameters)==null?void 0:ir.docs)==null?void 0:lr.source}}};var cr,dr,ur;Ve.parameters={...Ve.parameters,docs:{...(cr=Ve.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <Carousel slideSize="50%">
      <CarouselSlide as={Center} bg="primary">
        1
      </CarouselSlide>
      <CarouselSlide as={Center} size="100%" bg="secondary">
        2
      </CarouselSlide>
      <CarouselSlide as={Center} bg="warning">
        3
      </CarouselSlide>
      <CarouselSlide as={Center} bg="danger">
        4
      </CarouselSlide>
    </Carousel>;
}`,...(ur=(dr=Ve.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var gr,fr,Cr;Re.parameters={...Re.parameters,docs:{...(gr=Re.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  return <>
      <Carousel align="center" slideSize="50%">
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

      <Carousel align="start" slideSize="50%">
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

      <Carousel align="end" slideSize="50%">
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
}`,...(Cr=(fr=Re.parameters)==null?void 0:fr.docs)==null?void 0:Cr.source}}};var pr,mr,Sr;Qe.parameters={...Qe.parameters,docs:{...(pr=Qe.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  return <Carousel loop={false} slideSize="33.3%" slidesToScroll={3}>
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
}`,...(Sr=(mr=Qe.parameters)==null?void 0:mr.docs)==null?void 0:Sr.source}}};var hr,br,xr;Xe.parameters={...Xe.parameters,docs:{...(hr=Xe.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
  return <Carousel align="start" h="auto" slideSize="50%" slidesToScroll={2}>
      <CarouselSlide as={Card} variant="outline">
        <CardHeader justifyContent="center">
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" alt="いちご100%" rounded="md" w="full" />
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
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" alt="いちご100%" rounded="md" w="full" />
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
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" alt="いちご100%" rounded="md" w="full" />
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
          <Image src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000" alt="いちご100%" rounded="md" w="full" />
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
}`,...(xr=(br=Xe.parameters)==null?void 0:br.docs)==null?void 0:xr.source}}};var yr,jr,wr;$e.parameters={...$e.parameters,docs:{...(yr=$e.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
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
}`,...(wr=(jr=$e.parameters)==null?void 0:jr.docs)==null?void 0:wr.source}}};var Ir,vr,_r;qe.parameters={...qe.parameters,docs:{...(Ir=qe.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
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
}`,...(_r=(vr=qe.parameters)==null?void 0:vr.docs)==null?void 0:_r.source}}};var zr,Pr,Er;Ue.parameters={...Ue.parameters,docs:{...(zr=Ue.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
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
}`,...(Er=(Pr=Ue.parameters)==null?void 0:Pr.docs)==null?void 0:Er.source}}};var kr,Tr,Lr;Ke.parameters={...Ke.parameters,docs:{...(kr=Ke.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  const [value, onScrollProgress] = useState<number>(0);
  return <>
      <Carousel dragFree loop={false} onScrollProgress={onScrollProgress}>
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

      <Progress colorScheme="gray" value={value} />
    </>;
}`,...(Lr=(Tr=Ke.parameters)==null?void 0:Tr.docs)==null?void 0:Lr.source}}};var Ar,Dr,Nr;We.parameters={...We.parameters,docs:{...(Ar=We.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  return <Carousel includeGapInSize={false} slideSize="50%">
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
}`,...(Nr=(Dr=We.parameters)==null?void 0:Dr.docs)==null?void 0:Nr.source}}};var Or,Mr,Fr;Je.parameters={...Je.parameters,docs:{...(Or=Je.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
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
}`,...(Fr=(Mr=Je.parameters)==null?void 0:Mr.docs)==null?void 0:Fr.source}}};var Br,Hr,Gr;Ye.parameters={...Ye.parameters,docs:{...(Br=Ye.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
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
}`,...(Gr=(Hr=Ye.parameters)==null?void 0:Hr.docs)==null?void 0:Gr.source}}};var Vr,Rr,Qr;Ze.parameters={...Ze.parameters,docs:{...(Vr=Ze.parameters)==null?void 0:Vr.docs,source:{originalSource:`() => {
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
}`,...(Qr=(Rr=Ze.parameters)==null?void 0:Rr.docs)==null?void 0:Qr.source}}};var Xr,$r,qr;en.parameters={...en.parameters,docs:{...(Xr=en.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...(qr=($r=en.parameters)==null?void 0:$r.docs)==null?void 0:qr.source}}};var Ur,Kr,Wr;nn.parameters={...nn.parameters,docs:{...(Ur=nn.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
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
}`,...(Wr=(Kr=nn.parameters)==null?void 0:Kr.docs)==null?void 0:Wr.source}}};var Jr,Yr,Zr;rn.parameters={...rn.parameters,docs:{...(Jr=rn.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  return <Carousel watchDrag={(methods, ev) => {
    console.log("drag", methods, ev);
    return true;
  }} watchResize={(methods, entries) => {
    console.log("resized", methods, entries);
    return true;
  }} watchSlides={(methods, mutations) => {
    console.log("slides updated", methods, mutations);
    return true;
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
    </Carousel>;
}`,...(Zr=(Yr=rn.parameters)==null?void 0:Yr.docs)==null?void 0:Zr.source}}};var es,ns,rs;sn.parameters={...sn.parameters,docs:{...(es=sn.parameters)==null?void 0:es.docs,source:{originalSource:`() => {
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
}`,...(rs=(ns=sn.parameters)==null?void 0:ns.docs)==null?void 0:rs.source}}};var ss,ts,os;tn.parameters={...tn.parameters,docs:{...(ss=tn.parameters)==null?void 0:ss.docs,source:{originalSource:`() => {
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
}`,...(os=(ts=tn.parameters)==null?void 0:ts.docs)==null?void 0:os.source}}};var as,is,ls;on.parameters={...on.parameters,docs:{...(as=on.parameters)==null?void 0:as.docs,source:{originalSource:`() => {
  return <>
      <Carousel indicatorsProps={{
      bottom: "8",
      component: ({
        isSelected
      }) => <Ghost color={isSelected ? "whiteAlpha.700" : "whiteAlpha.400"} cursor="pointer" fontSize="2xl" />
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
          transitionDuration: "slower",
          transitionProperty: "width",
          w: "4",
          _selected: {
            w: "12"
          }
        }
      }} />
      </Carousel>
    </>;
}`,...(ls=(is=on.parameters)==null?void 0:is.docs)==null?void 0:ls.source}}};const no=["basic","withSize","withOrientation","withDefaultIndex","withGap","withDuration","withSlideSize","withAlign","withSlidesToScroll","withCard","withAutoplay","withDelay","withDragFree","withScrollProgress","disabledIncludeGapInSize","disabledLoop","disabledDraggable","disabledStopMouseEnterAutoplay","disabledControlButton","disabledIndicators","useMethods","customControl","customControlButton","customIndicators"];export{no as __namedExportsOrder,Oe as basic,sn as customControl,tn as customControlButton,on as customIndicators,eo as default,en as disabledControlButton,Ye as disabledDraggable,We as disabledIncludeGapInSize,nn as disabledIndicators,Je as disabledLoop,Ze as disabledStopMouseEnterAutoplay,rn as useMethods,Re as withAlign,$e as withAutoplay,Xe as withCard,Be as withDefaultIndex,qe as withDelay,Ue as withDragFree,Ge as withDuration,He as withGap,Fe as withOrientation,Ke as withScrollProgress,Me as withSize,Ve as withSlideSize,Qe as withSlidesToScroll};
