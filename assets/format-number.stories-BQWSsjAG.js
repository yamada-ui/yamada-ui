import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,r as n}from"./i18n-provider-Cc12Ys91.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{d as i,f as a}from"./utils-DG4lHdyV.js";import{a as o,d as s,r as c,t as l}from"./create-component-DtmnY_ce.js";import{n as u,t as d}from"./text-b2W5euYI.js";import{n as f,t as p}from"./grid-DAC5TR2S.js";import{n as m,t as h}from"./use-format-number-CWpz-cMj.js";import{n as g,t as _}from"./for-BIl9Q3L3.js";var v;function y(){return(y=e((()=>{s(),v=o({})})))()}var b,x,S,C,w;function T(){return(T=e((()=>{c(),i(),y(),h(),b=r(),{PropsContext:x,usePropsContext:S,withContext:C}=l(`format-number`,v),w=C(({style:e,compactDisplay:t,currency:n,currencyDisplay:r,currencySign:i,locale:o,localeMatcher:s,maximumFractionDigits:c,maximumSignificantDigits:l,minimumFractionDigits:u,minimumIntegerDigits:d,minimumSignificantDigits:f,notation:p,numberingSystem:h,roundingIncrement:g,roundingMode:_,roundingPriority:v,signDisplay:y,trailingZeroDisplay:x,unit:S,unitDisplay:C,useGrouping:w,value:T,...E})=>{let D=m(T,{style:e,compactDisplay:t,currency:n,currencyDisplay:r,currencySign:i,locale:o,localeMatcher:s,maximumFractionDigits:c,maximumSignificantDigits:l,minimumFractionDigits:u,minimumIntegerDigits:d,minimumSignificantDigits:f,notation:p,numberingSystem:h,roundingIncrement:g,roundingMode:_,roundingPriority:v,signDisplay:y,trailingZeroDisplay:x,unit:S,unitDisplay:C,useGrouping:w});return(0,b.jsx)(a.span,{...E,children:D})})()})))()}var E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{n(),g(),f(),u(),T(),E=r(),D={component:w,title:`Components / Format / Number`},O=()=>(0,E.jsx)(w,{value:1e3}),k=()=>(0,E.jsx)(w,{style:`percent`,value:.145}),A=()=>(0,E.jsx)(w,{style:`currency`,currency:`JPY`,locale:`ja-JP`,value:1234.45}),j=()=>(0,E.jsx)(p,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,E.jsx)(_,{each:t,children:e=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(d,{color:`fg.muted`,children:e}),(0,E.jsx)(w,{locale:e,value:1450.45},e)]})})}),M=()=>(0,E.jsx)(w,{style:`unit`,unit:`kilometer`,value:384.4}),N=()=>(0,E.jsx)(w,{notation:`compact`,value:15e5}),P=[`Basic`,`Percentage`,`Currency`,`Locale`,`Unit`,`Notation`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number value={1000} />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number style="percent" value={0.145} />;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number style="currency" currency="JPY" locale="ja-JP" value={1234.45} />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.Number key={locale} locale={locale} value={1450.45} />
          </>}
      </For>
    </Grid>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number style="unit" unit="kilometer" value={384.4} />;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number notation="compact" value={1500000} />;
}`,...N.parameters?.docs?.source}}}})))()}F();export{O as Basic,A as Currency,j as Locale,N as Notation,k as Percentage,M as Unit,P as __namedExportsOrder,D as default};