import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Ll as n,Lt as r,Pl as i,au as a,ou as o,sm as s,vi as c,vu as l,ws as u,yi as d,ys as f,yu as p}from"./iframe-CXDvaz-K.js";var m,h,g,_,v,y,b;e((()=>{l(),c(),i(),r(),a(),f(),m=s(),h={component:u,title:`Components / Format / Byte`},g=()=>(0,m.jsxs)(t,{gap:`0`,children:[(0,m.jsx)(u,{value:50}),(0,m.jsx)(u,{value:5e3}),(0,m.jsx)(u,{value:5e6}),(0,m.jsx)(u,{value:5e9})]}),_=()=>(0,m.jsx)(u,{unit:`bit`,value:1450}),v=()=>(0,m.jsx)(n,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(d,{each:p,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{color:`fg.muted`,children:e}),(0,m.jsx)(u,{locale:e,value:1450},e)]})})}),y=()=>(0,m.jsxs)(t,{gap:`0`,children:[(0,m.jsx)(u,{unitDisplay:`short`,value:50300}),(0,m.jsx)(u,{unitDisplay:`long`,value:50300}),(0,m.jsx)(u,{unitDisplay:`narrow`,value:50300})]}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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