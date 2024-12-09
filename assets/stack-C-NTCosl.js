import{j as k}from"./jsx-runtime-CfatFE5O.js";import{r as c}from"./index-ClcD9ViR.js";import{f as R}from"./forward-ref-D13m8o2p.js";import{r as x,g as z,b as Z,c as W,a as T}from"./factory-ZSnRp-09.js";const v=R(({className:u,align:r,children:e,direction:n="column",divider:E,gap:s="fallback(md, 1rem)",justify:_,separator:g,wrap:C,...y},w)=>{g??(g=E);const m=t=>t==="column"||t==="column-reverse",M=c.useMemo(()=>({borderBottomWidth:x(n,t=>m(t)?"1px":0),borderLeftWidth:x(n,t=>m(t)?0:"1px"),h:x(n,t=>m(t)?"fit-content":"100%"),w:x(n,t=>m(t)?"100%":"fit-content")}),[n]),N=z(e),j=g?N.map((t,o)=>{const d=typeof t.key<"u"?t.key:o,l=c.cloneElement(g,{__css:M});return k.jsxs(c.Fragment,{children:[o?l:null,t]},d)}):N,H=c.useMemo(()=>({alignItems:r,display:"flex",flexDirection:n,flexWrap:C,gap:s,justifyContent:_}),[r,n,C,s,_]);return k.jsx(Z.div,{ref:w,className:W("ui-stack",u),__css:H,...y,children:j})});v.displayName="Stack";v.__ui__="Stack";const $=R(({className:u,...r},e)=>k.jsx(v,{ref:e,className:W("ui-stack--horizontal",u),align:"center",direction:"row",...r}));$.displayName="HStack";$.__ui__="HStack";const L=R(({className:u,...r},e)=>k.jsx(v,{ref:e,className:W("ui-stack--vertical",u),align:"stretch",direction:"column",w:"100%",...r}));L.displayName="VStack";L.__ui__="VStack";const F=R(({className:u,children:r,direction:e="bottom",fit:n=!0,gap:E="fallback(md, 1rem)",reverse:s=!1,startIndex:_=0,...g},C)=>{const y=c.useRef(new Map),[w,m]=c.useState({height:0,width:0}),M={minHeight:`${w.height}px`,minWidth:`${w.width}px`},N={overflow:"hidden",position:"relative",vars:[{name:"space",token:"spaces",value:E}],...n?M:{}},j=c.useCallback(o=>e.includes("top")?{[s?"top":"bottom"]:o}:e.includes("bottom")?{[s?"bottom":"top"]:o}:{[s?"bottom":"top"]:0},[e,s]),H=c.useCallback(o=>e.includes("left")?{[s?"left":"right"]:o}:e.includes("right")?{[s?"right":"left"]:o}:{[s?"right":"left"]:0},[e,s]),t=c.useMemo(()=>z(r).map((l,f)=>{const S=c.createRef();y.current.set(f,S);const h=l.key??f,b=_+f,i=`calc($space * ${f})`;let a={};a={...a,position:"absolute",zIndex:b},a={...a,...j(i)},a={...a,...H(i)};const p={...l.props,ref:T(l.ref,S),__css:a},V=c.cloneElement(l,p);return k.jsx(c.Fragment,{children:V},h)}),[r,_,j,H]);return c.useEffect(()=>{if(!n)return;let o=e.includes("left"),d=e.includes("top"),l=0,f=0;s&&(o=!o,d=!d);for(const S of y.current.values()){if(!S.current)continue;let{offsetHeight:h,offsetLeft:b,offsetParent:i,offsetTop:a,offsetWidth:p}=S.current;i&&(o&&(b=((i==null?void 0:i.offsetWidth)??0)-b-p),d&&(a=((i==null?void 0:i.offsetHeight)??0)-a-h),p+=b,h+=a,p>l&&(l=p),h>f&&(f=h))}m({height:f,width:l})},[t,e,s,n]),k.jsx(Z.div,{ref:C,className:W("ui-stack--depth",u),__css:N,...g,children:t})});F.displayName="ZStack";F.__ui__="ZStack";export{$ as H,v as S,L as V,F as Z};