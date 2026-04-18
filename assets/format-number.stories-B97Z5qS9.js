import{n as e}from"./chunk-zsgVPwQN.js";import{Fl as t,Ml as n,_s as r,_u as i,gu as a,im as o,iu as s,ru as c,vi as l,vs as u,yi as d}from"./iframe-C1VNLErl.js";var f,p,m,h,g,_,v,y,b;e((()=>{a(),l(),n(),c(),r(),f=o(),p={component:u,title:`Components / Format / Number`},m=()=>(0,f.jsx)(u,{value:1e3}),h=()=>(0,f.jsx)(u,{style:`percent`,value:.145}),g=()=>(0,f.jsx)(u,{style:`currency`,currency:`JPY`,locale:`ja-JP`,value:1234.45}),_=()=>(0,f.jsx)(t,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,f.jsx)(d,{each:i,children:e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{color:`fg.muted`,children:e}),(0,f.jsx)(u,{locale:e,value:1450.45},e)]})})}),v=()=>(0,f.jsx)(u,{style:`unit`,unit:`kilometer`,value:384.4}),y=()=>(0,f.jsx)(u,{notation:`compact`,value:15e5}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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