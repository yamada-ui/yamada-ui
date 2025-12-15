import{p as D,q as k,j as e,s as L,V as F,b4 as V,T as b}from"./iframe-C1QqsVA9.js";import{G as E}from"./grid-DHpvRiol.js";import{F as G}from"./for-Be_orN7T.js";import{u as T}from"./use-format-byte-Cj_jTq0f.js";import"./preload-helper-C1FmrZbK.js";import"./use-format-number-Cq2m0Hw2.js";import"./i18n-cache-2nrF3WCd.js";const w=D({}),{withContext:O}=k("format-byte",w),t=O(({locale:r,unit:g,unitDisplay:S,value:f,...h})=>{const C=T(f,{locale:r,unit:g,unitDisplay:S});return e.jsx(L.span,{...h,children:C})})(),H={component:t,title:"Components / Format / Byte"},a=()=>e.jsxs(F,{gap:"0",children:[e.jsx(t,{value:50}),e.jsx(t,{value:5e3}),e.jsx(t,{value:5e6}),e.jsx(t,{value:5e9})]}),s=()=>e.jsx(t,{unit:"bit",value:1450}),o=()=>e.jsx(E,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(G,{each:V,children:r=>e.jsxs(e.Fragment,{children:[e.jsx(b,{color:"fg.muted",children:r}),e.jsx(t,{locale:r,value:1450},r)]})})}),n=()=>e.jsxs(F,{gap:"0",children:[e.jsx(t,{unitDisplay:"short",value:50300}),e.jsx(t,{unitDisplay:"long",value:50300}),e.jsx(t,{unitDisplay:"narrow",value:50300})]});var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.Byte value={50} />
      <Format.Byte value={5000} />
      <Format.Byte value={5000000} />
      <Format.Byte value={5000000000} />
    </VStack>;
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,i,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Format.Byte unit="bit" value={1450} />;
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,y,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.Byte key={locale} locale={locale} value={1450} />
          </>}
      </For>
    </Grid>;
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var j,v,B;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.Byte unitDisplay="short" value={50300} />
      <Format.Byte unitDisplay="long" value={50300} />
      <Format.Byte unitDisplay="narrow" value={50300} />
    </VStack>;
}`,...(B=(v=n.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};const I=["Basic","Bits","Locale","UnitDisplay"];export{a as Basic,s as Bits,o as Locale,n as UnitDisplay,I as __namedExportsOrder,H as default};
