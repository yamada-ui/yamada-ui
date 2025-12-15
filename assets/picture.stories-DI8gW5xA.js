import{ax as R,r as _,H as p,bJ as $,bK as q,j as t,s as w,ba as X,bb as Y}from"./iframe-C1QqsVA9.js";import{I as T}from"./image-BcHDpKPf.js";import"./preload-helper-C1FmrZbK.js";const Z=(r,i)=>{let n="";return r?(n=`(min-width: ${r}px)`,i&&(n+=` and (max-width: ${i}px)`)):n=`(max-width: ${i}px)`,n},m=({children:r,enableSorting:i=!0,sources:n=[],pictureProps:h,...S})=>{const a=R(),{queriesObj:g}=a.breakpoints,{direction:l="down",identifier:j="@media screen"}=a.config.breakpoint??{},P=j==="@media screen"?"@media screen and ":`${j} `,k=_.useCallback((e,o)=>{const s=l==="down"?"maxW":"minW";return p(e[s])&&!p(o[s])?-1:!p(e[s])&&p(o[s])?1:l==="down"?Number(e.maxW)-Number(o.maxW):Number(o.minW)-Number(e.minW)},[l]),y=_.useMemo(()=>{const e=n.map(({maxW:o,media:s,minW:c,...C})=>{if(s){const{maxW:G,minW:L,query:I}=g[s]??{};return I&&(s=I.replace(P,"")),{...C,maxW:G,media:s,minW:L}}else return c&&(c=$(q(a)("sizes",c))),o&&(o=$(q(a)("sizes",o))),s=Z(c,o),{...C,maxW:o,media:s,minW:c}});return i?e.sort(k):e},[n,i,a,g,P,k]),A=_.useMemo(()=>y.map(({maxW:e,minW:o,...s},c)=>t.jsx(w.source,{...s},c)),[y]);return t.jsx(w.picture,{...h,children:r??t.jsxs(t.Fragment,{children:[A,t.jsx(T,{...S})]})})},W=({media:r,...i})=>{const{breakpoints:n,config:h}=R(),{queriesObj:S}=n,{identifier:a="@media screen"}=h.breakpoint??{},g=a==="@media screen"?"@media screen and ":`${a} `,{query:l}=r?S[r]??{}:{};return l&&(r=l.replace(g,"")),t.jsx(w.source,{media:r,...i})},ot={component:m,title:"Components / Picture"},d=()=>t.jsxs(m,{children:[t.jsx(W,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}),t.jsx(W,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"}),t.jsx(W,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"}),t.jsx(T,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",w:"xl"})]}),f=()=>t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}],w:"xl"}),u=()=>{const r=X({breakpoint:{direction:"up"}});return t.jsx(Y,{config:r,children:t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}],w:"xl"})})},x=()=>t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_6.png",media:"(max-width: 480px)"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_5.png",maxW:"3xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",maxW:"976px"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",maxW:1280}],w:"xl"}),b=()=>t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",enableSorting:!1,maxW:"full",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"(max-width: 1280px)"}],w:"xl"});var D,E,M;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Picture>
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_4.png" media="md" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_3.png" media="lg" />
      <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_2.png" media="xl" />
      <Image src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" maxW="full" w="xl" />
    </Picture>;
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var N,U,v;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(v=(U=f.parameters)==null?void 0:U.docs)==null?void 0:v.source}}};var O,V,z;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(z=(V=u.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,F,H;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(H=(F=x.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" enableSorting={false} maxW="full" sources={[{
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
    media: "lg"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
    media: "(max-width: 1280px)"
  }]} w="xl" />;
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const nt=["Basic","PropsPattern","Direction","CustomMedia","DisableSorting"];export{d as Basic,x as CustomMedia,u as Direction,b as DisableSorting,f as PropsPattern,nt as __namedExportsOrder,ot as default};
