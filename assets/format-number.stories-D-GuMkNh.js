import{i as e}from"./preload-helper-usAeo7Bx.js";import{$f as t,Dv as n,Fa as r,Pa as i,Rf as a,_l as o,ep as s,gl as c,if as l,sf as u,zf as d}from"./iframe-9OFoenoS.js";var f,p,m,h,g,_,v,y,b;e((()=>{t(),i(),l(),a(),c(),f=n(),p={component:o,title:`Components / Format / Number`},m=()=>(0,f.jsx)(o,{value:1e3}),h=()=>(0,f.jsx)(o,{style:`percent`,value:.145}),g=()=>(0,f.jsx)(o,{style:`currency`,currency:`JPY`,locale:`ja-JP`,value:1234.45}),_=()=>(0,f.jsx)(u,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,f.jsx)(r,{each:s,children:e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{color:`fg.muted`,children:e}),(0,f.jsx)(o,{locale:e,value:1450.45},e)]})})}),v=()=>(0,f.jsx)(o,{style:`unit`,unit:`kilometer`,value:384.4}),y=()=>(0,f.jsx)(o,{notation:`compact`,value:15e5}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number value={1000} />;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number style="percent" value={0.145} />;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number style="currency" currency="JPY" locale="ja-JP" value={1234.45} />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.Number key={locale} locale={locale} value={1450.45} />
          </>}
      </For>
    </Grid>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number style="unit" unit="kilometer" value={384.4} />;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number notation="compact" value={1500000} />;
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`Percentage`,`Currency`,`Locale`,`Unit`,`Notation`]}))();export{m as Basic,g as Currency,_ as Locale,y as Notation,h as Percentage,v as Unit,b as __namedExportsOrder,p as default};