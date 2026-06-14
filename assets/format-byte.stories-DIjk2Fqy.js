import{i as e}from"./preload-helper-usAeo7Bx.js";import{$f as t,Ev as n,Fa as r,Lf as i,Pa as a,Qf as o,Rf as s,Sl as c,Sn as l,Tn as u,hl as d,of as f,rf as p}from"./iframe-4z85howq.js";var m,h,g,_,v,y,b;e((()=>{o(),a(),p(),l(),i(),d(),m=n(),h={component:c,title:`Components / Format / Byte`},g=()=>(0,m.jsxs)(u,{gap:`0`,children:[(0,m.jsx)(c,{value:50}),(0,m.jsx)(c,{value:5e3}),(0,m.jsx)(c,{value:5e6}),(0,m.jsx)(c,{value:5e9})]}),_=()=>(0,m.jsx)(c,{unit:`bit`,value:1450}),v=()=>(0,m.jsx)(f,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(r,{each:t,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{color:`fg.muted`,children:e}),(0,m.jsx)(c,{locale:e,value:1450},e)]})})}),y=()=>(0,m.jsxs)(u,{gap:`0`,children:[(0,m.jsx)(c,{unitDisplay:`short`,value:50300}),(0,m.jsx)(c,{unitDisplay:`long`,value:50300}),(0,m.jsx)(c,{unitDisplay:`narrow`,value:50300})]}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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