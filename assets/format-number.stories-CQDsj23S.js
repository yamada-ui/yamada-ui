import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{r as n,t as r}from"./i18n-provider-C-T7TQjy.js";import{t as i}from"./text-DSMMc5B6.js";import{t as a}from"./text-BM4F8FHS.js";import{r as o}from"./grid-item-DDwW3cLH.js";import{t as s}from"./grid--uOXgUdY.js";import{Co as c,So as l,Ur as u,Wr as d}from"./iframe-CBZ1Bv9A.js";var f,p,m,h,g,_,v,y,b;e((()=>{r(),u(),s(),a(),l(),f=t(),p={component:c,title:`Components / Format / Number`},m=()=>(0,f.jsx)(c,{value:1e3}),h=()=>(0,f.jsx)(c,{style:`percent`,value:.145}),g=()=>(0,f.jsx)(c,{style:`currency`,currency:`JPY`,locale:`ja-JP`,value:1234.45}),_=()=>(0,f.jsx)(o,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,f.jsx)(d,{each:n,children:e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{color:`fg.muted`,children:e}),(0,f.jsx)(c,{locale:e,value:1450.45},e)]})})}),v=()=>(0,f.jsx)(c,{style:`unit`,unit:`kilometer`,value:384.4}),y=()=>(0,f.jsx)(c,{notation:`compact`,value:15e5}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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