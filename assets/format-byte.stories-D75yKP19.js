import{i as e}from"./preload-helper-usAeo7Bx.js";import{$f as t,Cl as n,Dv as r,Fa as i,Pa as a,Rf as o,Sn as s,Tn as c,ep as l,gl as u,if as d,sf as f,zf as p}from"./iframe-B_RvmxW5.js";var m,h,g,_,v,y,b;e((()=>{t(),a(),d(),s(),o(),u(),m=r(),h={component:n,title:`Components / Format / Byte`},g=()=>(0,m.jsxs)(c,{gap:`0`,children:[(0,m.jsx)(n,{value:50}),(0,m.jsx)(n,{value:5e3}),(0,m.jsx)(n,{value:5e6}),(0,m.jsx)(n,{value:5e9})]}),_=()=>(0,m.jsx)(n,{unit:`bit`,value:1450}),v=()=>(0,m.jsx)(f,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(i,{each:l,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p,{color:`fg.muted`,children:e}),(0,m.jsx)(n,{locale:e,value:1450},e)]})})}),y=()=>(0,m.jsxs)(c,{gap:`0`,children:[(0,m.jsx)(n,{unitDisplay:`short`,value:50300}),(0,m.jsx)(n,{unitDisplay:`long`,value:50300}),(0,m.jsx)(n,{unitDisplay:`narrow`,value:50300})]}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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