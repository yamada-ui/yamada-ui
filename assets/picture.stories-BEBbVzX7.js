import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{Ar as r,Dn as i,P as a,k as o,pt as s,t as c,tt as l}from"./core-RNiP33lW.js";import{t as u}from"./jsx-runtime-BBQGix-2.js";import{A as d,Sa as f,j as p,k as m,xa as h}from"./iframe-Clx83w1K.js";var g,_,v,y,b,x=t((()=>{g=e(n(),1),c(),s(),h(),_=u(),v=(e,t)=>{let n=``;return e?(n=`(min-width: ${e}px)`,t&&(n+=` and (max-width: ${t}px)`)):n=`(max-width: ${t}px)`,n},y=({children:e,enableSorting:t=!0,sources:n=[],pictureProps:s,...c})=>{let u=l(),{queriesObj:d}=u.breakpoints,{direction:p=`down`,identifier:m=`@media screen`}=u.config.breakpoint??{},h=m===`@media screen`?`@media screen and `:`${m} `,y=(0,g.useCallback)((e,t)=>{let n=p===`down`?`maxW`:`minW`;return r(e[n])&&!r(t[n])?-1:!r(e[n])&&r(t[n])?1:p===`down`?Number(e.maxW)-Number(t.maxW):Number(t.minW)-Number(e.minW)},[p]),b=(0,g.useMemo)(()=>{let e=n.map(({maxW:e,media:t,minW:n,...r})=>{if(t){let{maxW:e,minW:n,query:i}=d[t]??{};return i&&(t=i.replace(h,``)),{...r,maxW:e,media:t,minW:n}}else return n&&=i(o(u)(`sizes`,n)),e&&=i(o(u)(`sizes`,e)),t=v(n,e),{...r,maxW:e,media:t,minW:n}});return t?e.sort(y):e},[n,t,u,d,h,y]),x=(0,g.useMemo)(()=>b.map(({maxW:e,minW:t,...n},r)=>(0,_.jsx)(a.source,{...n},r)),[b]);return(0,_.jsx)(a.picture,{...s,children:e??(0,_.jsxs)(_.Fragment,{children:[x,(0,_.jsx)(f,{...c})]})})},b=({media:e,...t})=>{let{breakpoints:n,config:r}=l(),{queriesObj:i}=n,{identifier:o=`@media screen`}=r.breakpoint??{},s=o===`@media screen`?`@media screen and `:`${o} `,{query:c}=e?i[e]??{}:{};return c&&(e=c.replace(s,``)),(0,_.jsx)(a.source,{media:e,...t})}})),S,C,w,T,E,D,O,k;t((()=>{m(),h(),x(),S=u(),C={component:y,title:`Components / Picture`},w=()=>(0,S.jsxs)(y,{children:[(0,S.jsx)(b,{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_4.png`,media:`md`}),(0,S.jsx)(b,{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`}),(0,S.jsx)(b,{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`xl`}),(0,S.jsx)(f,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,w:`xl`})]}),T=()=>(0,S.jsx)(y,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`xl`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_4.png`,media:`md`}],w:`xl`}),E=()=>(0,S.jsx)(d,{config:p({breakpoint:{direction:`up`}}),children:(0,S.jsx)(y,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`xl`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_4.png`,media:`md`}],w:`xl`})}),D=()=>(0,S.jsx)(y,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_6.png`,media:`(max-width: 480px)`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_5.png`,maxW:`3xl`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,maxW:`976px`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,maxW:1280}],w:`xl`}),O=()=>(0,S.jsx)(y,{src:`https://dragon-ball-official.com/assets/img/intro/intro_1.png`,alt:`ドラゴンボール`,enableSorting:!1,maxW:`full`,sources:[{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_3.png`,media:`lg`},{srcSet:`https://dragon-ball-official.com/assets/img/intro/intro_2.png`,media:`(max-width: 1280px)`}],w:`xl`}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <Picture>
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_4.png" media="md" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_3.png" media="lg" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_2.png" media="xl" />
      <Image src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" maxW="full" w="xl" />
    </Picture>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" enableSorting={false} maxW="full" sources={[{
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
    media: "lg"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
    media: "(max-width: 1280px)"
  }]} w="xl" />;
}`,...O.parameters?.docs?.source}}},k=[`Basic`,`PropsPattern`,`Direction`,`CustomMedia`,`DisableSorting`]}))();export{w as Basic,D as CustomMedia,E as Direction,O as DisableSorting,T as PropsPattern,k as __namedExportsOrder,C as default};