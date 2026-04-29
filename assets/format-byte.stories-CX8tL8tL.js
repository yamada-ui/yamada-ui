import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{r as n,t as r}from"./i18n-provider-C-T7TQjy.js";import{t as i}from"./text-DSMMc5B6.js";import{t as a}from"./text-BM4F8FHS.js";import{r as o}from"./grid-item-DDwW3cLH.js";import{t as s}from"./grid--uOXgUdY.js";import{r as c}from"./z-stack-D_lbkXhr.js";import{Do as l,Dt as u,So as d,Ur as f,Wr as p}from"./iframe-B5StO6Da.js";var m,h,g,_,v,y,b;e((()=>{r(),f(),s(),u(),a(),d(),m=t(),h={component:l,title:`Components / Format / Byte`},g=()=>(0,m.jsxs)(c,{gap:`0`,children:[(0,m.jsx)(l,{value:50}),(0,m.jsx)(l,{value:5e3}),(0,m.jsx)(l,{value:5e6}),(0,m.jsx)(l,{value:5e9})]}),_=()=>(0,m.jsx)(l,{unit:`bit`,value:1450}),v=()=>(0,m.jsx)(o,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(p,{each:n,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{color:`fg.muted`,children:e}),(0,m.jsx)(l,{locale:e,value:1450},e)]})})}),y=()=>(0,m.jsxs)(c,{gap:`0`,children:[(0,m.jsx)(l,{unitDisplay:`short`,value:50300}),(0,m.jsx)(l,{unitDisplay:`long`,value:50300}),(0,m.jsx)(l,{unitDisplay:`narrow`,value:50300})]}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.Byte value={50} />
      <Format.Byte value={5000} />
      <Format.Byte value={5000000} />
      <Format.Byte value={5000000000} />
    </VStack>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Format.Byte unit="bit" value={1450} />;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.Byte key={locale} locale={locale} value={1450} />
          </>}
      </For>
    </Grid>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.Byte unitDisplay="short" value={50300} />
      <Format.Byte unitDisplay="long" value={50300} />
      <Format.Byte unitDisplay="narrow" value={50300} />
    </VStack>;
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`Bits`,`Locale`,`UnitDisplay`]}))();export{g as Basic,_ as Bits,v as Locale,y as UnitDisplay,b as __namedExportsOrder,h as default};