import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{r as n,t as r}from"./i18n-provider-B-SNd3Jr.js";import{t as i}from"./text-ljAYVXXn.js";import{t as a}from"./text-DGi1MGSU.js";import{Hd as o,Ia as s,La as c,gl as l,hl as u,zd as d}from"./iframe-D5Y3ROF5.js";var f,p,m,h,g,_,v,y,b;e((()=>{r(),s(),d(),a(),u(),f=t(),p={component:l,title:`Components / Format / Number`},m=()=>(0,f.jsx)(l,{value:1e3}),h=()=>(0,f.jsx)(l,{style:`percent`,value:.145}),g=()=>(0,f.jsx)(l,{style:`currency`,currency:`JPY`,locale:`ja-JP`,value:1234.45}),_=()=>(0,f.jsx)(o,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,f.jsx)(c,{each:n,children:e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{color:`fg.muted`,children:e}),(0,f.jsx)(l,{locale:e,value:1450.45},e)]})})}),v=()=>(0,f.jsx)(l,{style:`unit`,unit:`kilometer`,value:384.4}),y=()=>(0,f.jsx)(l,{notation:`compact`,value:15e5}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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