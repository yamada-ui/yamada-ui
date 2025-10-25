import{ax as D,r as _,H as p,bI as $,bJ as q,j as t,s as w,b9 as v,ba as O}from"./iframe-5QspZtQ-.js";import{I as E}from"./image--o0El88_.js";import"./preload-helper-PPVm8Dsz.js";const V=(r,i)=>{let n="";return r?(n=`(min-width: ${r}px)`,i&&(n+=` and (max-width: ${i}px)`)):n=`(max-width: ${i}px)`,n},m=({children:r,enableSorting:i=!0,sources:n=[],pictureProps:h,...S})=>{const a=D(),{queriesObj:g}=a.breakpoints,{direction:l="down",identifier:j="@media screen"}=a.config.breakpoint??{},P=j==="@media screen"?"@media screen and ":`${j} `,k=_.useCallback((e,o)=>{const s=l==="down"?"maxW":"minW";return p(e[s])&&!p(o[s])?-1:!p(e[s])&&p(o[s])?1:l==="down"?Number(e.maxW)-Number(o.maxW):Number(o.minW)-Number(e.minW)},[l]),I=_.useMemo(()=>{const e=n.map(({maxW:o,media:s,minW:c,...y})=>{if(s){const{maxW:N,minW:U,query:C}=g[s]??{};return C&&(s=C.replace(P,"")),{...y,maxW:N,media:s,minW:U}}else return c&&(c=$(q(a)("sizes",c))),o&&(o=$(q(a)("sizes",o))),s=V(c,o),{...y,maxW:o,media:s,minW:c}});return i?e.sort(k):e},[n,i,a,g,P,k]),M=_.useMemo(()=>I.map(({maxW:e,minW:o,...s},c)=>t.jsx(w.source,{...s},c)),[I]);return t.jsx(w.picture,{...h,children:r??t.jsxs(t.Fragment,{children:[M,t.jsx(E,{...S})]})})},W=({media:r,...i})=>{const{breakpoints:n,config:h}=D(),{queriesObj:S}=n,{identifier:a="@media screen"}=h.breakpoint??{},g=a==="@media screen"?"@media screen and ":`${a} `,{query:l}=r?S[r]??{}:{};return l&&(r=l.replace(g,"")),t.jsx(w.source,{media:r,...i})},H={component:m,title:"Components / Picture"},d=()=>t.jsxs(m,{children:[t.jsx(W,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}),t.jsx(W,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"}),t.jsx(W,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"}),t.jsx(E,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",w:"xl"})]}),f=()=>t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}],w:"xl"}),u=()=>{const r=v({breakpoint:{direction:"up"}});return t.jsx(O,{config:r,children:t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}],w:"xl"})})},x=()=>t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_6.png",media:"(max-width: 480px)"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_5.png",maxW:"3xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",maxW:"976px"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",maxW:1280}],w:"xl"}),b=()=>t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",enableSorting:!1,maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"(max-width: 1280px)"}],w:"xl"});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Picture>
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_4.png" media="md" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_3.png" media="lg" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_2.png" media="xl" />
      <Image src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" maxW="full" w="xl" />
    </Picture>;
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" enableSorting={false} maxW="full" sources={[{
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
    media: "lg"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
    media: "(max-width: 1280px)"
  }]} w="xl" />;
}`,...b.parameters?.docs?.source}}};const J=["Basic","PropsPattern","Direction","CustomMedia","DisableSorting"];export{d as Basic,x as CustomMedia,u as Direction,b as DisableSorting,f as PropsPattern,J as __namedExportsOrder,H as default};
