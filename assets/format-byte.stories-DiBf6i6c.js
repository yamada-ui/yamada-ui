import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Du as n,Eu as r,Gl as i,Hl as a,Ut as o,Wl as s,Xr as c,Yo as l,Zr as u,es as d,pp as f,zl as p}from"./iframe-xN-XyuUR.js";var m,h,g,_,v,y,b;e((()=>{s(),c(),p(),t(),r(),l(),m=f(),h={component:d,title:`Components / Format / Byte`},g=()=>(0,m.jsxs)(o,{gap:`0`,children:[(0,m.jsx)(d,{value:50}),(0,m.jsx)(d,{value:5e3}),(0,m.jsx)(d,{value:5e6}),(0,m.jsx)(d,{value:5e9})]}),_=()=>(0,m.jsx)(d,{unit:`bit`,value:1450}),v=()=>(0,m.jsx)(a,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(u,{each:i,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n,{color:`fg.muted`,children:e}),(0,m.jsx)(d,{locale:e,value:1450},e)]})})}),y=()=>(0,m.jsxs)(o,{gap:`0`,children:[(0,m.jsx)(d,{unitDisplay:`short`,value:50300}),(0,m.jsx)(d,{unitDisplay:`long`,value:50300}),(0,m.jsx)(d,{unitDisplay:`narrow`,value:50300})]}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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