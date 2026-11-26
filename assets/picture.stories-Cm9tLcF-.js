import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{$t as n,C as r,lr as i,nn as a,w as o}from"./props-CAjJr30V.js";import{t as s}from"./jsx-runtime-BB9-612F.js";import{d as c,f as l,v as u,y as d}from"./utils-Bpx2jhpv.js";import{n as f,t as p}from"./image-tr1j8wB-.js";import{i as m,n as h,o as g,r as _}from"./iframe-Kpp_3rXj.js";var v,y,b,x,S;function C(){return(C=e((()=>{v=t(),c(),r(),u(),a(),f(),y=s(),b=(e,t)=>{let n=``;return e?(n=`(min-width: ${e}px)`,t&&(n+=` and (max-width: ${t}px)`)):n=`(max-width: ${t}px)`,n},x=({children:e,enableSorting:t=!0,sources:r=[],pictureProps:a,...s})=>{let c=d(),{queriesObj:u}=c.breakpoints,{direction:f,identifier:m=`@media screen`}=c.config.breakpoint??{},h=m===`@media screen`?`@media screen and `:`${m} `,g=(0,v.useCallback)((e,t)=>{let n=f===`up`?`minW`:`maxW`;return i(e[n])&&!i(t[n])?-1:!i(e[n])&&i(t[n])?1:f===`up`?Number(t.minW)-Number(e.minW):Number(e.maxW)-Number(t.maxW)},[f]),_=(0,v.useMemo)(()=>{let e=r.map(({maxW:e,media:t,minW:r,...i})=>{if(t){let{maxW:e,minW:n,query:r}=u[t]??{};return r&&(t=r.replace(h,``)),{...i,maxW:e,media:t,minW:n}}return r&&=n(o(c)(`sizes`,r)),e&&=n(o(c)(`sizes`,e)),t=b(r,e),{...i,maxW:e,media:t,minW:r}});return t?e.sort(g):e},[r,t,c,u,h,g]),x=(0,v.useMemo)(()=>_.map(({maxW:e,minW:t,...n},r)=>(0,y.jsx)(l.source,{...n},r)),[_]);return(0,y.jsx)(l.picture,{...a,children:e??(0,y.jsxs)(y.Fragment,{children:[x,(0,y.jsx)(p,{...s})]})})},S=({media:e,...t})=>{let{breakpoints:n,config:r}=d(),{queriesObj:i}=n,{identifier:a=`@media screen`}=r.breakpoint??{},o=a===`@media screen`?`@media screen and `:`${a} `,{query:s}=e?i[e]??{}:{};return s&&(e=s.replace(o,``)),(0,y.jsx)(l.source,{media:e,...t})}})))()}var w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{g(),_(),f(),C(),w=s(),T={component:x,title:`Components / Picture`},E=()=>(0,w.jsxs)(x,{children:[(0,w.jsx)(S,{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_4.png`,media:`md`}),(0,w.jsx)(S,{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`}),(0,w.jsx)(S,{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`xl`}),(0,w.jsx)(p,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,w:`xl`})]}),D=()=>(0,w.jsx)(x,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`xl`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_4.png`,media:`md`}],w:`xl`}),O=()=>{let e=m({breakpoint:{direction:`up`}});return(0,w.jsx)(h,{config:e,children:(0,w.jsx)(x,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`xl`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_4.png`,media:`md`}],w:`xl`})})},k=()=>(0,w.jsx)(x,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_6.png`,media:`(max-width: 480px)`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_5.png`,maxW:`3xl`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,maxW:`976px`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,maxW:1280}],w:`xl`}),A=()=>(0,w.jsx)(x,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,enableSorting:!1,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`(max-width: 1280px)`}],w:`xl`}),j=[`Basic`,`PropsPattern`,`Direction`,`CustomMedia`,`DisableSorting`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <Picture>
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_4.png" media="md" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_3.png" media="lg" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_2.png" media="xl" />
      <Image src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" maxW="full" w="xl" />
    </Picture>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" enableSorting={false} maxW="full" sources={[{
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
    media: "lg"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
    media: "(max-width: 1280px)"
  }]} w="xl" />;
}`,...A.parameters?.docs?.source}}}})))()}M();export{E as Basic,k as CustomMedia,O as Direction,A as DisableSorting,D as PropsPattern,j as __namedExportsOrder,T as default};