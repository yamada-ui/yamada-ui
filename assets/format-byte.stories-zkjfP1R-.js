import{p as d,q as y,j as e,s as x,V as c,a$ as j,T as v}from"./iframe-B0P9Y6nu.js";import{G as B}from"./grid-d_ej_Zt5.js";import{F}from"./for-ClzBHWNn.js";import{u as g}from"./use-format-byte-Biqv5bnS.js";import"./preload-helper-PPVm8Dsz.js";import"./use-format-number-_Qz0JsPc.js";import"./i18n-cache-2nrF3WCd.js";const S=d({}),{withContext:f}=y("format-byte",S),t=f(({locale:r,unit:l,unitDisplay:m,value:u,...i})=>{const p=g(u,{locale:r,unit:l,unitDisplay:m});return e.jsx(x.span,{...i,children:p})})(),G={component:t,title:"Components / Format / Byte"},a=()=>e.jsxs(c,{gap:"0",children:[e.jsx(t,{value:50}),e.jsx(t,{value:5e3}),e.jsx(t,{value:5e6}),e.jsx(t,{value:5e9})]}),s=()=>e.jsx(t,{unit:"bit",value:1450}),o=()=>e.jsx(B,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(F,{each:j,children:r=>e.jsxs(e.Fragment,{children:[e.jsx(v,{color:"fg.muted",children:r}),e.jsx(t,{locale:r,value:1450},r)]})})}),n=()=>e.jsxs(c,{gap:"0",children:[e.jsx(t,{unitDisplay:"short",value:50300}),e.jsx(t,{unitDisplay:"long",value:50300}),e.jsx(t,{unitDisplay:"narrow",value:50300})]});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.Byte value={50} />
      <Format.Byte value={5000} />
      <Format.Byte value={5000000} />
      <Format.Byte value={5000000000} />
    </VStack>;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Format.Byte unit="bit" value={1450} />;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.Byte key={locale} locale={locale} value={1450} />
          </>}
      </For>
    </Grid>;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.Byte unitDisplay="short" value={50300} />
      <Format.Byte unitDisplay="long" value={50300} />
      <Format.Byte unitDisplay="narrow" value={50300} />
    </VStack>;
}`,...n.parameters?.docs?.source}}};const T=["Basic","Bits","Locale","UnitDisplay"];export{a as Basic,s as Bits,o as Locale,n as UnitDisplay,T as __namedExportsOrder,G as default};
