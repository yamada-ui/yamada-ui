import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{r as n,t as r}from"./i18n-provider-UW7eGeyN.js";import{t as i}from"./text-ClYKebxE.js";import{t as a}from"./text-B2Y0ht7H.js";import{r as o}from"./grid-item-Cmr2Zh1K.js";import{Ad as s,Ma as c,Na as l,Sn as u,Tn as d,gl as f,ll as p}from"./iframe-DpVGHWSQ.js";var m,h,g,_,v,y,b;e((()=>{r(),c(),s(),u(),a(),p(),m=t(),h={component:f,title:`Components / Format / Byte`},g=()=>(0,m.jsxs)(d,{gap:`0`,children:[(0,m.jsx)(f,{value:50}),(0,m.jsx)(f,{value:5e3}),(0,m.jsx)(f,{value:5e6}),(0,m.jsx)(f,{value:5e9})]}),_=()=>(0,m.jsx)(f,{unit:`bit`,value:1450}),v=()=>(0,m.jsx)(o,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(l,{each:n,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{color:`fg.muted`,children:e}),(0,m.jsx)(f,{locale:e,value:1450},e)]})})}),y=()=>(0,m.jsxs)(d,{gap:`0`,children:[(0,m.jsx)(f,{unitDisplay:`short`,value:50300}),(0,m.jsx)(f,{unitDisplay:`long`,value:50300}),(0,m.jsx)(f,{unitDisplay:`narrow`,value:50300})]}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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