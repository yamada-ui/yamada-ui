import{au as E,bg as O,r as w,A as g,bh as q,j as t,s as W,aS as z,aT as B,aU as V}from"./iframe-B58gGoPv.js";import{g as D}from"./index-DHDDxOxS.js";import{I as M}from"./image-s9hUaypD.js";const A=(o,i)=>{let n="";return o?(n=`(min-width: ${o}px)`,i&&(n+=` and (max-width: ${i}px)`)):n=`(max-width: ${i}px)`,n},l=({children:o,enableSorting:i=!0,sources:n=[],pictureProps:h,...b})=>{const{breakpoints:m,config:S}=E(),{theme:c}=O(),{queriesObj:P}=m,{direction:_="down",identifier:k="@media screen"}=S.breakpoint??{},C=k==="@media screen"?"@media screen and ":`${k} `,I=w.useCallback((a,r)=>{const s=_==="down"?"maxW":"minW";return g(a[s])&&!g(r[s])?-1:!g(a[s])&&g(r[s])?1:_==="down"?Number(a.maxW)-Number(r.maxW):Number(r.minW)-Number(a.minW)},[_]),y=w.useMemo(()=>{const a=n.map(({maxW:r,media:s,minW:e,...U})=>{if(s){const{maxW:T,minW:v,query:$}=P[s]??{};return $&&(s=$.replace(C,"")),{...U,maxW:T,media:s,minW:v}}else return e&&(e=q(D("sizes",e)(c)??e)),r&&(r=q(D("sizes",r)(c)??r)),s=A(e,r),{...U,maxW:r,media:s,minW:e}});return i?a.sort(I):a},[P,C,n,I,i,c]),N=w.useMemo(()=>y.map(({maxW:a,minW:r,...s},e)=>t.jsx(W.source,{...s},e)),[y]);return t.jsx(W.picture,{...h,children:o??t.jsxs(t.Fragment,{children:[N,t.jsx(M,{...b})]})})},j=({media:o,...i})=>{const{breakpoints:n,config:h}=E(),{queriesObj:b}=n,{identifier:m="@media screen"}=h.breakpoint??{},S=m==="@media screen"?"@media screen and ":`${m} `,{query:c}=o?b[o]??{}:{};return c&&(o=c.replace(S,"")),t.jsx(W.source,{media:o,...i})},G={component:l,title:"Components / Picture"},p=()=>t.jsxs(l,{children:[t.jsx(j,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}),t.jsx(j,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"}),t.jsx(j,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"}),t.jsx(M,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",w:"xl"})]}),d=()=>t.jsx(l,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}],w:"xl"}),f=()=>{const o=z(V,{breakpoint:{direction:"up"}});return t.jsx(B,{config:o,children:t.jsx(l,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}],w:"xl"})})},u=()=>t.jsx(l,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_6.png",media:"(max-width: 480px)"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_5.png",maxW:"3xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",maxW:"976px"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",maxW:1280}],w:"xl"}),x=()=>t.jsx(l,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",enableSorting:!1,maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"(max-width: 1280px)"}],w:"xl"});p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
  const config = merge<ThemeConfig>(defaultConfig, {
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
}`,...x.parameters?.docs?.source}}};const H=["Basic","PropsPattern","Direction","CustomMedia","DisableSorting"];export{p as Basic,u as CustomMedia,f as Direction,x as DisableSorting,d as PropsPattern,H as __namedExportsOrder,G as default};
