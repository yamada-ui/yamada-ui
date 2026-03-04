import{a4 as A,r as _,H as p,bN as N,bO as $,j as t,s as w,bP as X,bQ as Y}from"./iframe-BARHselC.js";import{I as G}from"./image-BviWQigX.js";import"./preload-helper-C1FmrZbK.js";const Z=(r,i)=>{let n="";return r?(n=`(min-width: ${r}px)`,i&&(n+=` and (max-width: ${i}px)`)):n=`(max-width: ${i}px)`,n},m=({children:r,enableSorting:i=!0,sources:n=[],pictureProps:h,...S})=>{const a=A(),{queriesObj:g}=a.breakpoints,{direction:l="down",identifier:j="@media screen"}=a.config.breakpoint??{},P=j==="@media screen"?"@media screen and ":`${j} `,k=_.useCallback((e,o)=>{const s=l==="down"?"maxW":"minW";return p(e[s])&&!p(o[s])?-1:!p(e[s])&&p(o[s])?1:l==="down"?Number(e.maxW)-Number(o.maxW):Number(o.minW)-Number(e.minW)},[l]),y=_.useMemo(()=>{const e=n.map(({maxW:o,media:s,minW:c,...C})=>{if(s){const{maxW:K,minW:L,query:I}=g[s]??{};return I&&(s=I.replace(P,"")),{...C,maxW:K,media:s,minW:L}}else return c&&(c=N($(a)("sizes",c))),o&&(o=N($(a)("sizes",o))),s=Z(c,o),{...C,maxW:o,media:s,minW:c}});return i?e.sort(k):e},[n,i,a,g,P,k]),J=_.useMemo(()=>y.map(({maxW:e,minW:o,...s},c)=>t.jsx(w.source,{...s},c)),[y]);return t.jsx(w.picture,{...h,children:r??t.jsxs(t.Fragment,{children:[J,t.jsx(G,{...S})]})})},W=({media:r,...i})=>{const{breakpoints:n,config:h}=A(),{queriesObj:S}=n,{identifier:a="@media screen"}=h.breakpoint??{},g=a==="@media screen"?"@media screen and ":`${a} `,{query:l}=r?S[r]??{}:{};return l&&(r=l.replace(g,"")),t.jsx(w.source,{media:r,...i})},ot={component:m,title:"Components / Picture"},d=()=>t.jsxs(m,{children:[t.jsx(W,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}),t.jsx(W,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"}),t.jsx(W,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"}),t.jsx(G,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",w:"xl"})]}),f=()=>t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}],w:"xl"}),u=()=>{const r=X({breakpoint:{direction:"up"}});return t.jsx(Y,{config:r,children:t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}],w:"xl"})})},x=()=>t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_6.png",media:"(max-width: 480px)"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_5.png",maxW:"3xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",maxW:"976px"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",maxW:1280}],w:"xl"}),b=()=>t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",enableSorting:!1,maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"(max-width: 1280px)"}],w:"xl"});var q,D,E;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Picture>
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_4.png" media="md" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_3.png" media="lg" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_2.png" media="xl" />
      <Image src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" maxW="full" w="xl" />
    </Picture>;
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var M,O,U;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(U=(O=f.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var v,V,z;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(z=(V=u.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,Q,F;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(F=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:F.source}}};var H,R,T;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" enableSorting={false} maxW="full" sources={[{
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
    media: "lg"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
    media: "(max-width: 1280px)"
  }]} w="xl" />;
}`,...(T=(R=b.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const nt=["Basic","PropsPattern","Direction","CustomMedia","DisableSorting"];export{d as Basic,x as CustomMedia,u as Direction,b as DisableSorting,f as PropsPattern,nt as __namedExportsOrder,ot as default};
