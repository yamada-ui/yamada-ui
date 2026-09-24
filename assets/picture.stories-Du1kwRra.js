import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Kt as n,Yt as r,b as i,nr as a,x as o}from"./props-Bz1FL_va.js";import{t as s}from"./jsx-runtime-BdxMnOeJ.js";import{d as c,f as l,v as u,y as d}from"./utils-DG4lHdyV.js";import{i as f,n as p,t as m}from"./ui-provider-CBf3K5m0.js";import{n as h,t as g}from"./image-Bl1iVAUc.js";var _,v,y,b,x;function S(){return(S=e((()=>{_=t(),c(),i(),u(),r(),h(),v=s(),y=(e,t)=>{let n=``;return e?(n=`(min-width: ${e}px)`,t&&(n+=` and (max-width: ${t}px)`)):n=`(max-width: ${t}px)`,n},b=({children:e,enableSorting:t=!0,sources:r=[],pictureProps:i,...s})=>{let c=d(),{queriesObj:u}=c.breakpoints,{direction:f=`down`,identifier:p=`@media screen`}=c.config.breakpoint??{},m=p===`@media screen`?`@media screen and `:`${p} `,h=(0,_.useCallback)((e,t)=>{let n=f===`down`?`maxW`:`minW`;return a(e[n])&&!a(t[n])?-1:!a(e[n])&&a(t[n])?1:f===`down`?Number(e.maxW)-Number(t.maxW):Number(t.minW)-Number(e.minW)},[f]),b=(0,_.useMemo)(()=>{let e=r.map(({maxW:e,media:t,minW:r,...i})=>{if(t){let{maxW:e,minW:n,query:r}=u[t]??{};return r&&(t=r.replace(m,``)),{...i,maxW:e,media:t,minW:n}}return r&&=n(o(c)(`sizes`,r)),e&&=n(o(c)(`sizes`,e)),t=y(r,e),{...i,maxW:e,media:t,minW:r}});return t?e.sort(h):e},[r,t,c,u,m,h]),x=(0,_.useMemo)(()=>b.map(({maxW:e,minW:t,...n},r)=>(0,v.jsx)(l.source,{...n},r)),[b]);return(0,v.jsx)(l.picture,{...i,children:e??(0,v.jsxs)(v.Fragment,{children:[x,(0,v.jsx)(g,{...s})]})})},x=({media:e,...t})=>{let{breakpoints:n,config:r}=d(),{queriesObj:i}=n,{identifier:a=`@media screen`}=r.breakpoint??{},o=a===`@media screen`?`@media screen and `:`${a} `,{query:s}=e?i[e]??{}:{};return s&&(e=s.replace(o,``)),(0,v.jsx)(l.source,{media:e,...t})}})))()}var C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{f(),h(),S(),C=s(),w={component:b,title:`Components / Picture`},T=()=>(0,C.jsxs)(b,{children:[(0,C.jsx)(x,{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_4.png`,media:`md`}),(0,C.jsx)(x,{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`}),(0,C.jsx)(x,{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`xl`}),(0,C.jsx)(g,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,w:`xl`})]}),E=()=>(0,C.jsx)(b,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`xl`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_4.png`,media:`md`}],w:`xl`}),D=()=>{let e=p({breakpoint:{direction:`up`}});return(0,C.jsx)(m,{config:e,children:(0,C.jsx)(b,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`xl`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_4.png`,media:`md`}],w:`xl`})})},O=()=>(0,C.jsx)(b,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_6.png`,media:`(max-width: 480px)`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_5.png`,maxW:`3xl`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,maxW:`976px`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,maxW:1280}],w:`xl`}),k=()=>(0,C.jsx)(b,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,enableSorting:!1,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`(max-width: 1280px)`}],w:`xl`}),A=[`Basic`,`PropsPattern`,`Direction`,`CustomMedia`,`DisableSorting`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <Picture>
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_4.png" media="md" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_3.png" media="lg" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_2.png" media="xl" />
      <Image src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" maxW="full" w="xl" />
    </Picture>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" maxW="full" sources={[{
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
    media: "xl"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
    media: "lg"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_4.png",
    media: "md"
  }]} w="xl" />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const config = extendConfig({
    breakpoint: {
      direction: "up"
    }
  });
  return <UIProvider config={config}>
      <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" maxW="full" sources={[{
      srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
      media: "xl"
    }, {
      srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
      media: "lg"
    }, {
      srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_4.png",
      media: "md"
    }]} w="xl" />
    </UIProvider>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" maxW="full" sources={[{
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_6.png",
    media: "(max-width: 480px)"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_5.png",
    maxW: "3xl"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
    maxW: "976px"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
    maxW: 1280
  }]} w="xl" />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" enableSorting={false} maxW="full" sources={[{
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
    media: "lg"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
    media: "(max-width: 1280px)"
  }]} w="xl" />;
}`,...k.parameters?.docs?.source}}}})))()}j();export{T as Basic,O as CustomMedia,D as Direction,k as DisableSorting,E as PropsPattern,A as __namedExportsOrder,w as default};