import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{r as n,t as r}from"./i18n-provider-DGxawszX.js";import{t as i}from"./text-BU_JgSy6.js";import{t as a}from"./text-CIXXiNdJ.js";import{Cn as o,Fa as s,Ia as c,Rd as l,Vd as u,ml as d,wn as f,xl as p}from"./iframe-1VXrorm8.js";var m,h,g,_,v,y,b;e((()=>{r(),s(),l(),o(),a(),d(),m=t(),h={component:p,title:`Components / Format / Byte`},g=()=>(0,m.jsxs)(f,{gap:`0`,children:[(0,m.jsx)(p,{value:50}),(0,m.jsx)(p,{value:5e3}),(0,m.jsx)(p,{value:5e6}),(0,m.jsx)(p,{value:5e9})]}),_=()=>(0,m.jsx)(p,{unit:`bit`,value:1450}),v=()=>(0,m.jsx)(u,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(c,{each:n,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{color:`fg.muted`,children:e}),(0,m.jsx)(p,{locale:e,value:1450},e)]})})}),y=()=>(0,m.jsxs)(f,{gap:`0`,children:[(0,m.jsx)(p,{unitDisplay:`short`,value:50300}),(0,m.jsx)(p,{unitDisplay:`long`,value:50300}),(0,m.jsx)(p,{unitDisplay:`narrow`,value:50300})]}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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