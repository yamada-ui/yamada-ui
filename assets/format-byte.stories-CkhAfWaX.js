import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,r as n}from"./i18n-provider-Cc12Ys91.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{d as i,f as a}from"./utils-DG4lHdyV.js";import{a as o,d as s,r as c,t as l}from"./create-component-DtmnY_ce.js";import{n as u,t as d}from"./text-b2W5euYI.js";import{n as f,t as p}from"./grid-DAC5TR2S.js";import{n as m,t as h}from"./use-format-byte-_B6oz4nz.js";import{n as g,t as _}from"./for-BIl9Q3L3.js";import{n as v,t as y}from"./v-stack-DgxvBjIl.js";var b;function x(){return(x=e((()=>{s(),b=o({})})))()}var S,C,w,T,E;function D(){return(D=e((()=>{c(),i(),x(),h(),S=r(),{PropsContext:C,usePropsContext:w,withContext:T}=l(`format-byte`,b),E=T(({locale:e,unit:t,unitDisplay:n,value:r,...i})=>{let o=m(r,{locale:e,unit:t,unitDisplay:n});return(0,S.jsx)(a.span,{...i,children:o})})()})))()}var O,k,A,j,M,N,P;function F(){return(F=e((()=>{n(),g(),f(),v(),u(),D(),O=r(),k={component:E,title:`Components / Format / Byte`},A=()=>(0,O.jsxs)(y,{gap:`0`,children:[(0,O.jsx)(E,{value:50}),(0,O.jsx)(E,{value:5e3}),(0,O.jsx)(E,{value:5e6}),(0,O.jsx)(E,{value:5e9})]}),j=()=>(0,O.jsx)(E,{unit:`bit`,value:1450}),M=()=>(0,O.jsx)(p,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,O.jsx)(_,{each:t,children:e=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{color:`fg.muted`,children:e}),(0,O.jsx)(E,{locale:e,value:1450},e)]})})}),N=()=>(0,O.jsxs)(y,{gap:`0`,children:[(0,O.jsx)(E,{unitDisplay:`short`,value:50300}),(0,O.jsx)(E,{unitDisplay:`long`,value:50300}),(0,O.jsx)(E,{unitDisplay:`narrow`,value:50300})]}),P=[`Basic`,`Bits`,`Locale`,`UnitDisplay`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.Byte value={50} />
      <Format.Byte value={5000} />
      <Format.Byte value={5000000} />
      <Format.Byte value={5000000000} />
    </VStack>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <Format.Byte unit="bit" value={1450} />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.Byte key={locale} locale={locale} value={1450} />
          </>}
      </For>
    </Grid>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.Byte unitDisplay="short" value={50300} />
      <Format.Byte unitDisplay="long" value={50300} />
      <Format.Byte unitDisplay="narrow" value={50300} />
    </VStack>;
}`,...N.parameters?.docs?.source}}}})))()}F();export{A as Basic,j as Bits,M as Locale,N as UnitDisplay,P as __namedExportsOrder,k as default};