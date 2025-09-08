import{aw as M,bk as O,r as w,B as g,bl as D,j as t,s as W,aX as z,aY as T}from"./iframe-6Bjnmk15.js";import{g as E}from"./index-CDWqhHiY.js";import{I as N}from"./image-DOrLrHjb.js";import"./preload-helper-D9Z9MdNV.js";const V=(o,i)=>{let n="";return o?(n=`(min-width: ${o}px)`,i&&(n+=` and (max-width: ${i}px)`)):n=`(max-width: ${i}px)`,n},l=({children:o,enableSorting:i=!0,sources:n=[],pictureProps:b,...h})=>{const{breakpoints:m,config:S}=M(),{theme:c}=O(),{queriesObj:P}=m,{direction:_="down",identifier:k="@media screen"}=S.breakpoint??{},C=k==="@media screen"?"@media screen and ":`${k} `,I=w.useCallback((a,r)=>{const s=_==="down"?"maxW":"minW";return g(a[s])&&!g(r[s])?-1:!g(a[s])&&g(r[s])?1:_==="down"?Number(a.maxW)-Number(r.maxW):Number(r.minW)-Number(a.minW)},[_]),y=w.useMemo(()=>{const a=n.map(({maxW:r,media:s,minW:e,...$})=>{if(s){const{maxW:v,minW:B,query:q}=P[s]??{};return q&&(s=q.replace(C,"")),{...$,maxW:v,media:s,minW:B}}else return e&&(e=D(E("sizes",e)(c)??e)),r&&(r=D(E("sizes",r)(c)??r)),s=V(e,r),{...$,maxW:r,media:s,minW:e}});return i?a.sort(I):a},[P,C,n,I,i,c]),U=w.useMemo(()=>y.map(({maxW:a,minW:r,...s},e)=>t.jsx(W.source,{...s},e)),[y]);return t.jsx(W.picture,{...b,children:o??t.jsxs(t.Fragment,{children:[U,t.jsx(N,{...h})]})})},j=({media:o,...i})=>{const{breakpoints:n,config:b}=M(),{queriesObj:h}=n,{identifier:m="@media screen"}=b.breakpoint??{},S=m==="@media screen"?"@media screen and ":`${m} `,{query:c}=o?h[o]??{}:{};return c&&(o=c.replace(S,"")),t.jsx(W.source,{media:o,...i})},Y={component:l,title:"Components / Picture"},p=()=>t.jsxs(l,{children:[t.jsx(j,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}),t.jsx(j,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"}),t.jsx(j,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"}),t.jsx(N,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",w:"xl"})]}),d=()=>t.jsx(l,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}],w:"xl"}),f=()=>{const o=z({breakpoint:{direction:"up"}});return t.jsx(T,{config:o,children:t.jsx(l,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}],w:"xl"})})},u=()=>t.jsx(l,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_6.png",media:"(max-width: 480px)"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_5.png",maxW:"3xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",maxW:"976px"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",maxW:1280}],w:"xl"}),x=()=>t.jsx(l,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",enableSorting:!1,maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"(max-width: 1280px)"}],w:"xl"});p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Picture>
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_4.png" media="md" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_3.png" media="lg" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_2.png" media="xl" />
      <Image src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" maxW="full" w="xl" />
    </Picture>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" enableSorting={false} maxW="full" sources={[{
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
    media: "lg"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
    media: "(max-width: 1280px)"
  }]} w="xl" />;
}`,...x.parameters?.docs?.source}}};const A=["Basic","PropsPattern","Direction","CustomMedia","DisableSorting"];export{p as Basic,u as CustomMedia,f as Direction,x as DisableSorting,d as PropsPattern,A as __namedExportsOrder,Y as default};
