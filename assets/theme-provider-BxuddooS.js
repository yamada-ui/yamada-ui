import{j as O}from"./extends-CwFRzn3r.js";import{Q as J,F as V,n as C,g as pe,ap as ye,aq as he,ar as xe,I as Z,J as q,a3 as $e,m as X,a1 as je,as as K,_ as v,V as Q,l as ee,at as Se,$ as F,z as A,ac as ke,au as ze,av as we,aw as Y,E as de,T as Te,A as Ce}from"./factory-BFmlPmGv.js";import{r as k}from"./index-BwDkhjyp.js";function H(e,...t){return t.join(` ${e} `).replace(/calc/g,"")}function te(...e){return`calc(${H("+",...e)})`}function ne(...e){return`calc(${H("-",...e)})`}function B(...e){return`calc(${H("*",...e)})`}function re(...e){return`calc(${H("/",...e)})`}function se(e){return e!=null&&!isNaN(parseFloat(e.toString()))?String(e).startsWith("-")?String(e).slice(1):`-${e}`:B(e,-1)}const T=Object.assign(e=>({add:(...t)=>T(te(e,...t)),subtract:(...t)=>T(ne(e,...t)),multiply:(...t)=>T(B(e,...t)),divide:(...t)=>T(re(e,...t)),negate:()=>T(se(e)),toString:()=>e.toString()}),{add:te,subtract:ne,multiply:B,divide:re,negate:se});function j(e,t,n){return Math.min(Math.max(e,n),t)}class Ee extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var E=Ee;function S(e){if(typeof e!="string")throw new E(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=We.test(e)?Fe(e):e;const n=Re.exec(t);if(n){const o=Array.from(n).slice(1);return[...o.slice(0,3).map(i=>parseInt(R(i,2),16)),parseInt(R(o[3]||"f",2),16)/255]}const r=Ve.exec(t);if(r){const o=Array.from(r).slice(1);return[...o.slice(0,3).map(i=>parseInt(i,16)),parseInt(o[3]||"ff",16)/255]}const s=qe.exec(t);if(s){const o=Array.from(s).slice(1);return[...o.slice(0,3).map(i=>parseInt(i,10)),parseFloat(o[3]||"1")]}const a=Ae.exec(t);if(a){const[o,i,c,u]=Array.from(a).slice(1).map(parseFloat);if(j(0,100,i)!==i)throw new E(e);if(j(0,100,c)!==c)throw new E(e);return[...ve(o,i,c),Number.isNaN(u)?1:u]}throw new E(e)}function Me(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const ae=e=>parseInt(e.replace(/_/g,""),36),Oe="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=ae(t.substring(0,3)),r=ae(t.substring(3)).toString(16);let s="";for(let a=0;a<6-r.length;a++)s+="0";return e[n]=`${s}${r}`,e},{});function Fe(e){const t=e.toLowerCase().trim(),n=Oe[Me(t)];if(!n)throw new E(e);return`#${n}`}const R=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),Re=new RegExp(`^#${R("([a-f0-9])",3)}([a-f0-9])?$`,"i"),Ve=new RegExp(`^#${R("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),qe=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${R(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),Ae=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,We=/^[a-z]+$/i,oe=e=>Math.round(e*255),ve=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(oe);const s=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),o=a*(1-Math.abs(s%2-1));let i=0,c=0,u=0;s>=0&&s<1?(i=a,c=o):s>=1&&s<2?(i=o,c=a):s>=2&&s<3?(c=a,u=o):s>=3&&s<4?(c=o,u=a):s>=4&&s<5?(i=o,u=a):s>=5&&s<6&&(i=a,u=o);const l=r-a/2,d=i+l,_=c+l,g=u+l;return[d,_,g].map(oe)};function U(e){const[t,n,r,s]=S(e).map((d,_)=>_===3?d:d/255),a=Math.max(t,n,r),o=Math.min(t,n,r),i=(a+o)/2;if(a===o)return[0,0,i,s];const c=a-o,u=i>.5?c/(2-a-o):c/(a+o);return[60*(t===a?(n-r)/c+(n<r?6:0):n===a?(r-t)/c+2:(t-n)/c+4),u,i,s]}function me(e,t,n,r){return`hsla(${(e%360).toFixed()}, ${j(0,100,t*100).toFixed()}%, ${j(0,100,n*100).toFixed()}%, ${parseFloat(j(0,1,r).toFixed(3))})`}function I(e,t,n,r){return`rgba(${j(0,255,e).toFixed()}, ${j(0,255,t).toFixed()}, ${j(0,255,n).toFixed()}, ${parseFloat(j(0,1,r).toFixed(3))})`}function _e(e,t,n){const r=($,w)=>w===3?$:$/255,[s,a,o,i]=S(e).map(r),[c,u,l,d]=S(t).map(r),_=d-i,g=n*2-1,f=((g*_===-1?g:g+_/(1+g*_))+1)/2,m=1-f,h=(s*m+c*f)*255,b=(a*m+u*f)*255,y=(o*m+l*f)*255,x=d*n+i*(1-n);return I(h,b,y,x)}function He(e,t){const[n,r,s,a]=S(e);return I(n,r,s,a-t)}function z(e){const[t,n,r,s]=S(e);let a=o=>{const i=j(0,255,o).toString(16);return i.length===1?`0${i}`:i};return`#${a(t)}${a(n)}${a(r)}${s<1?a(Math.round(s*255)):""}`}function Ie(e){return I(...S(e))}function Ne(e){return me(...U(e))}const dt=["mono","primary","secondary","info","success","warning","danger","link"],mt=["gray","neutral","red","rose","pink","flashy","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia"],Pe=[50,100,200,300,400,500,600,700,800,900,950];function _t(e){return e==="gray"||e==="neutral"}function gt(e){return e==="yellow"||e==="cyan"||e==="lime"}function N(e,t="#000000"){return function(n={},r="light",s="base"){var c,u;const[a,o]=e.split(".");if(o){const[,l]=Object.entries(((c=n.semantics)==null?void 0:c.colorSchemes)??{}).find(([d])=>a===d)??[];l&&(e=`${l}.${o}`)}else{const[,l]=Object.entries(((u=n.semantics)==null?void 0:u.colors)??{}).find(([d])=>a===d)??[];l&&(e=l)}const i=J(n,`colors.${e}`,e);try{return V(i)?z(String(i[r!=="dark"?0:1])):C(i)?z(String(i[s])):z(String(i))}catch{try{return z(t)}catch{return"#000000"}}}}function bt(e,t){return function(n,r,s){const a=N(e,e)(n,r,s);return z(_e(a,"#fff",t/100))}}function pt(e,t){return function(n,r,s){const a=N(e,e)(n,r,s);return z(_e(a,"#000",t/100))}}function yt(e,t){return function(n,r,s){const a=N(e,e)(n,r,s);return He(a,1-t)}}function xt({string:e,colors:t}={}){const n=Ge();return e&&t?De(e,t):e&&!t?Le(e):t&&!e?Qe(t):n}function Ge(){return`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`}function Le(e){let t=0;if(e.length===0)return t.toString();for(let r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t),t=t&t;let n="#";for(let r=0;r<3;r+=1){const s=t>>r*8&255;n+=`00${s.toString(16)}`.substr(-2)}return n}function De(e,t){let n=0;if(e.length===0)return t[0];for(let r=0;r<e.length;r+=1)n=e.charCodeAt(r)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]}function Qe(e){return e[Math.floor(Math.random()*e.length)]}function Be(e){const[t,n,r]=S(e);return(t*299+n*587+r*114)/1e3}function Ue(e){return function(t,n,r){const s=t?N(e)(t,n,r):e;return Be(s)<128?"dark":"light"}}function $t(e){return function(t,n){return Ue(e)(t,n)==="light"}}function P(e,t){return function(n){try{const r=n.endsWith("a");if(/^[0-9a-fA-F]{6}$/.test(e)&&(e="#"+e),n.startsWith("hex")){let s=z(e);return r?s.length===7&&(s+="ff"):s=s.replace(new RegExp("(?<=^#([0-9a-fA-F]{6}))[0-9a-fA-F]{2}$"),""),s}else if(n.startsWith("hsl")){let s=Ne(e);return r||(s=s.replace(/hsla/,"hsl"),s=s.replace(/,\s*\d+(\.\d+)?\)$/,")")),s}else{let s=Ie(e);return r||(s=s.replace(/rgba/,"rgb"),s=s.replace(/,\s*\d+(\.\d+)?\)$/,")")),s}}catch{if(t)return P(t)(n)}}}function jt(e){return e.startsWith("hsl")?e.startsWith("hsla")?"hsla":"hsl":e.startsWith("rgb")?e.startsWith("rgba")?"rgba":"rgb":e.length===9?"hexa":"hex"}function St(e){return 0>e&&(e=0),1<e&&(e=1),Math.round(e*255).toString(16).padStart(2,"0")}function Je(e,t){try{return/^[0-9a-fA-F]{6}$/.test(e)&&(e="#"+e),S(e)}catch{if(t)return S(t)}}function kt(e,t){try{return/^[0-9a-fA-F]{6}$/.test(e)&&(e="#"+e),U(e)}catch{if(t)return U(t)}}function zt(e,t){let[n,r,s,a]=Je(e,t)??[255,255,255,1];n=n/255,r=r/255,s=s/255;const[o,i]=[Math.min(n,r,s),Math.max(n,r,s)],c=i-o;let[u,l,d]=[0,i,i==0?0:c/i];switch(o){case i:u=0;break;case n:u=60*((s-r)/c)+180;break;case r:u=60*((n-s)/c)+300;break;case s:u=60*((r-n)/c)+60;break}return[u,d,l,a]}function wt([e,t,n,r],s){return function(a="hex"){return P(I(e,t,n,r),s)(a)}}function Tt([e,t,n,r],s){return function(a="hex"){return P(me(e,t,n,r),s)(a)}}function Ct([e,t,n,r],s){return function(a="hex"){e=e/60;let o=[n,n,n],i=Math.floor(e),c=e-i,u=n*(1-t),l=n*(1-t*c),d=n*(1-t*(1-c));switch(i){case 0:case 6:o=[n,d,u];break;case 1:o=[l,n,u];break;case 2:o=[u,n,d];break;case 3:o=[u,l,n];break;case 4:o=[d,u,n];break;case 5:o=[n,u,l];break}let _=`rgb(${o.map(g=>Math.round(g*255)).join(", ")})`;return pe(r)&&(_=_.replace(/\)$/,`, ${r})`)),P(_,s)(a)}}function G(e,t,n="@media screen"){const r=[n];return e&&r.push("and",`(min-width: ${e}px)`),t&&r.push("and",`(max-width: ${t}px)`),r.length>1?r.join(" ").replace(/^@container(\s+\w*)?\s+and/,"@container$1"):void 0}function Xe(e,t){const{direction:n,identifier:r}=t,s=n!=="up";return Object.entries(e).map(([a,o],i,c)=>{const[,u]=c[i+1]??[];let l=s?u:o,d=s?o:u;a==="base"&&(s?d=void 0:l=void 0),s?l&&(l+=1):d&&(d-=1);const _=G(void 0,d,r),g=G(l,void 0,r),p=G(l,d,r);return{breakpoint:a,minW:l,maxW:d,query:s?_:g,maxWQuery:_,minWQuery:g,minMaxQuery:p}})}function Ye(e,t){return Object.fromEntries(Object.entries(e).map(([n,r])=>[n,ye(r)]).sort((n,r)=>t.direction!=="up"?r[1]-n[1]:n[1]-r[1]))}function Ze(e,t={}){if(!e)return;t.base??(t.base="9999px"),t.direction??(t.direction="down"),e.base=t.direction!=="up"?t.base:"0px",e=Ye(e,t);const n=Object.keys(e),r=Xe(e,t);return{keys:n,isResponsive:(a,o=!1)=>{const i=Object.keys(a);return!i.length||o&&!i.includes("base")?!1:i.every(c=>n.includes(c))},queries:r}}function Et(e){return function(t){var r,s;return`var(--${((s=(r=t.__config)==null?void 0:r.var)==null?void 0:s.prefix)??he}-${e})`}}const Ke=e=>e.startsWith("gradients."),et=e=>e.startsWith("animations."),tt=e=>e.startsWith("spaces.");function nt(e=he,t){function n(r){r=r.replace(/\./g,"-");const s=`--${[e,xe(r,"-")].filter(Boolean).join("-")}`,a=`var(${s})`;return{variable:s,reference:a}}return function(r){return function({prevTokens:s,cssMap:a={},cssVars:o={}}={}){const i={__cssMap:a};function c(f,m=""){const h=[f.split(".")[0],m].join(".");if(!(r[h]??(s==null?void 0:s[h])))return[,m];const{variable:y,reference:x}=n(h);return[y,x]}function u(f){var m;return(m=t.find(({breakpoint:h})=>h===f))==null?void 0:m.query}function l(f){return je(f)?f.replace(/\$([^,)/\s]+)/g,(m,h)=>r[h]??(s==null?void 0:s[h])?n(h).reference:h in a?a[h].ref:`var(--${e}-${h})`):f}function d(f,m){const h=f.split("."),[b,...y]=h,x=`${b}.-${y.join(".")}`,$=T.negate(m);return{negativeToken:x,negativeReference:$}}function _(f){return V(f)?f.map(m=>Z(m,i,q)).join(","):Z(f,i,q)}function g(f,m){return function(h){if(h){const[b,y]=c(f,m);return b?y:K(m,i)}else return K(m,i)}}function p(f,m,h){return function(b,y=[]){if(V(m)){const[x,$]=m;p(f,x,h)(b,y),p(f,$,h)(b,[...y,$e._dark])}else if(C(m))Object.entries(m).forEach(([x,$])=>{if(x==="base")p(f,$,h)(b,y);else{const w=u(x);if(!w)return;p(f,$,h)(b,[...y,w])}});else{let x=l(m);if(Ke(f))x=g(f,x)(b);else if(b){const[,$]=c(f,x);x=$}o=X(o,y.reduceRight(($,w)=>({[w]:$}),{[h]:x}))}}}for(let[f,{isSemantic:m,value:h}]of Object.entries(r)){const{variable:b,reference:y}=n(f);if(et(f)&&(h=_(h)),p(f,h,b)(m),!m&&tt(f)){const{negativeToken:x,negativeReference:$}=d(f,y);a[x]={var:b,ref:$}}a[f]={var:b,ref:y}}return{cssMap:a,cssVars:o}}}}const ie=["blurs","borders","colors","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","spaces","zIndices"],ce=["gradients"];function rt(e,t){var _,g;e=at(e);const n=(_=t==null?void 0:t.var)==null?void 0:_.prefix,r=Ze(e.breakpoints,t==null?void 0:t.breakpoint),s=st(r,(g=t==null?void 0:t.theme)==null?void 0:g.responsive),{queries:a=[]}=r??{},o=nt(n,a),i=s(e),c=s(e,"secondary"),u=s(e,"animation");let{cssMap:l,cssVars:d}=ue(o(i),o(c),o(u))();if(e.themeSchemes)for(const[p,f]of Object.entries(e.themeSchemes)){const m=s(f),h=s(f,"secondary"),b=s(f,"animation");let{cssVars:y}=ue(o(m),o(h),o(b))({...i,...c,...u});d={...d,[`[data-theme=${p}] &:not([data-theme]), &[data-theme=${p}]`]:y}}return Object.assign(e,{__config:t,__cssVars:d,__cssMap:l,__breakpoints:r}),e}function st(e,t){return function(n,r="primary"){let s,a=[],o=[],i=[];switch(t&&(s=_=>!(e!=null&&e.isResponsive(_,!0))),r){case"primary":a=[...ie,"transitions"],o=[...ie,"transitions","colorSchemes"];break;case"secondary":a=[...ce],o=[...ce];break;case"animation":a=["animations"],o=["animations"],i=["keyframes"];break}const c=Q(n,a),u=Q(n.semantics??{},o),l=Object.entries(ee(c,{omitKeys:i,shouldProcess:s})).map(([_,g])=>[_,{isSemantic:!1,value:g}]),d=Object.entries(ee(u,{omitKeys:i,shouldProcess:s})).reduce((_,[g,p])=>{if(g.startsWith("colorSchemes.")){const[,f,m]=g.split(".");if(m){const h={isSemantic:!1,value:p};_.push([`colors.${f}.${m}`,h])}else Pe.forEach(h=>{const b={isSemantic:!0,value:V(p)?[`${p[0]}.${h}`,`${p[1]}.${h}`]:`${p}.${h}`};_.push([`colors.${f}.${h}`,b])})}else{const f={isSemantic:!0,value:p};_.push([g,f])}return _},[]);return Se([...l,...d])}}function ue(...e){return function(t){let n={},r={};for(const s of e){const{cssMap:a,cssVars:o}=s({prevTokens:t,cssMap:n,cssVars:r});n={...n,...a},r={...r,...o}}return{cssMap:n,cssVars:r}}}function at(e){return v(e,["__cssMap","__cssVar","__breakpoints"])}function Mt(e,t=[]){return v(e,["size","variant","colorScheme",...t])}function Ot(e,...t){return function({omit:n=[],pick:r=[]}={}){return t.reduce((s,a)=>W(ge(s)({omit:n,pick:r}),a),e)}}function Ft(e,...t){return function({omit:n=[],pick:r=[]}={}){return t.reduce((s,a)=>W(ge(s)({omit:n,pick:r,isMulti:!0}),a),e)}}function W(e,t){let n=Object.assign({},e);if(C(t)&&C(e))for(const[r,s]of Object.entries(t)){const a=e[r];e.hasOwnProperty(r)?!F(a)&&!F(s)?n[r]=W(a,s):n[r]=o=>W(A(a,o),A(s,o)):Object.assign(n,{[r]:s})}else n=t;return n}function ge(e){return function({omit:t,pick:n,isMulti:r=!1}){return C(e)&&(t.length&&(e=M(e,t,r)(v)),n.length&&(e=M(e,n,r)(Q))),e}}function M(e,t,n,r=[]){return function(s){if(!C(e))return e;let a=Object.assign({},e);return a=s(a,t),Object.entries(a??{}).forEach(([o,i])=>{const c=t.filter(l=>l!==o),u=[...r,o];ot(u,n)&&(F(i)?a[o]=l=>M(i(l),c,n,u)(s):s===v||Object.keys(i).some(l=>c.includes(l))?a[o]=M(i,c,n,u)(s):a[o]=X(a[o],M(i,c,n,u)(s)))}),a}}function ot(e,t){switch(e[0]){case"baseStyle":return e.length<(t?2:1);case"variants":case"sizes":return e.length<(t?3:2);default:return!1}}function Rt(e,t,n=!0){const r={};return Object.entries(e).forEach(([s,a])=>{switch(s){case"baseStyle":F(a)?r[s]=o=>a(o)[t]:r[s]=a[t];break;case"variants":case"sizes":r[s]=Object.entries(a).reduce((o,[i,c])=>(F(c)?o[i]=u=>c(u)[t]:o[i]=c[t],o),{});break;case"defaultProps":n&&(r[s]=a);break}}),r}const L="ui-theme-scheme",be=!!(globalThis!=null&&globalThis.document),fe=e=>({ssr:!1,type:"localStorage",get:(t="base")=>(n=e)=>{if(!be)return t;try{return localStorage.getItem(n)||t}catch{return t}},set:t=>(n=e)=>{try{localStorage.setItem(n,String(t))}catch{}}}),le=(e,t)=>{const n=e.match(new RegExp(`(^| )${t}=([^;]+)`));return n==null?void 0:n[2]},D=(e,t)=>({ssr:!!t,type:"cookie",get:(n="base")=>(r=e)=>t?le(t,r)||n:be&&le(document.cookie,r)||n,set:n=>(r=e)=>{document.cookie=`${r}=${n}; max-age=31536000; path=/`}}),it={localStorage:fe(L),cookieStorage:D(L),ssr:e=>D(L,e),createLocalStorage:fe,createCookieStorage:D},{localStorage:ct}=it,Vt=({theme:e={},config:t,themeSchemeManager:n=ct,storageKey:r,children:s})=>{const a=ke(),[o,i]=k.useState(n.get(t==null?void 0:t.initialThemeScheme)(r)),c=k.useCallback(l=>{const{getDocument:d}=a,_=d(),g=t!=null&&t.disableTransitionOnChange?ze(a):void 0;_&&(_.documentElement.dataset.theme=l),g==null||g(),i(l),n.set(l)(r)},[t,a,n,r]),u=k.useMemo(()=>rt(e,t),[e,t]);return k.useEffect(()=>{const l=n.get()(r);l&&c(l)},[c,n,r]),O.jsxs(we,{theme:{themeScheme:o,changeThemeScheme:c,...u},children:[O.jsx(ut,{}),s]})},ut=()=>O.jsx(Y,{styles:({__cssVars:e})=>({":host, :root, [data-mode]":e})}),qt=()=>{const{colorMode:e}=de();return O.jsx(Y,{styles:t=>{const{themeScheme:n}=t;let r=J(t,"styles.resetStyle",{});const s=A(r,{theme:t,colorMode:e,themeScheme:n});if(s)return q(s)(t)}})},At=()=>{const{colorMode:e}=de();return O.jsx(Y,{styles:t=>{const{themeScheme:n}=t;let r=J(t,"styles.globalStyle",{});const s=A(r,{theme:t,colorMode:e,themeScheme:n});if(s)return q(s)(t)}})},Wt=()=>{const e=k.useContext(Te),t=k.useMemo(()=>{var a;const{themeScheme:r}=e;if(Ce(r)||r==="base")return e;const s=(a=e.themeSchemes)==null?void 0:a[r];return s?X(e,s):e},[e]);return k.useMemo(()=>{const{themeScheme:r,changeThemeScheme:s}=e;return{themeScheme:r,changeThemeScheme:s,theme:t,internalTheme:e}},[t,e])};export{mt as C,At as G,qt as R,dt as S,Pe as T,St as a,G as b,P as c,Vt as d,jt as e,T as f,Et as g,Ct as h,Tt as i,Je as j,zt as k,N as l,Ft as m,xt as n,Mt as o,kt as p,$t as q,wt as r,pt as s,bt as t,Wt as u,_t as v,yt as w,gt as x,Ot as y,Rt as z};