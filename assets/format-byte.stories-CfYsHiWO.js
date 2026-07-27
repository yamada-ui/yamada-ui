import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{r as n,t as r}from"./i18n-provider-CUbBHNej.js";import{t as i}from"./text-C2T69kx2.js";import{t as a}from"./text-CQ9C2I0D.js";import{Bd as o,Cn as s,Fa as c,Ia as l,Ld as u,bl as d,pl as f,wn as p}from"./iframe-BrNwOJju.js";var m,h,g,_,v,y,b;e((()=>{r(),c(),u(),s(),a(),f(),m=t(),h={component:d,title:`Components / Format / Byte`},g=()=>(0,m.jsxs)(p,{gap:`0`,children:[(0,m.jsx)(d,{value:50}),(0,m.jsx)(d,{value:5e3}),(0,m.jsx)(d,{value:5e6}),(0,m.jsx)(d,{value:5e9})]}),_=()=>(0,m.jsx)(d,{unit:`bit`,value:1450}),v=()=>(0,m.jsx)(o,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(l,{each:n,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{color:`fg.muted`,children:e}),(0,m.jsx)(d,{locale:e,value:1450},e)]})})}),y=()=>(0,m.jsxs)(p,{gap:`0`,children:[(0,m.jsx)(d,{unitDisplay:`short`,value:50300}),(0,m.jsx)(d,{unitDisplay:`long`,value:50300}),(0,m.jsx)(d,{unitDisplay:`narrow`,value:50300})]}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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