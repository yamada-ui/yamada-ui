import{p as O,q as A,j as e,s as B,a$ as U,T as X}from"./iframe-DlW9lece.js";import{G as Y}from"./grid-DraM9h-y.js";import{F as _}from"./for-Bbje7Nyp.js";import{a as q}from"./use-format-number-CqrYylfs.js";import"./preload-helper-PPVm8Dsz.js";import"./i18n-cache-2nrF3WCd.js";const w=O({}),{withContext:R}=A("format-number",w),r=R(({style:t,compactDisplay:u,currency:l,currencyDisplay:p,currencySign:i,locale:d,localeMatcher:x,maximumFractionDigits:y,maximumSignificantDigits:j,minimumFractionDigits:F,minimumIntegerDigits:g,minimumSignificantDigits:f,notation:v,numberingSystem:N,roundingIncrement:b,roundingMode:C,roundingPriority:S,signDisplay:h,trailingZeroDisplay:L,unit:P,unitDisplay:E,useGrouping:G,value:J,...T})=>{const k=q(J,{style:t,compactDisplay:u,currency:l,currencyDisplay:p,currencySign:i,locale:d,localeMatcher:x,maximumFractionDigits:y,maximumSignificantDigits:j,minimumFractionDigits:F,minimumIntegerDigits:g,minimumSignificantDigits:f,notation:v,numberingSystem:N,roundingIncrement:b,roundingMode:C,roundingPriority:S,signDisplay:h,trailingZeroDisplay:L,unit:P,unitDisplay:E,useGrouping:G});return e.jsx(B.span,{...T,children:k})})(),M={component:r,title:"Components / Format / Number"},a=()=>e.jsx(r,{value:1e3}),o=()=>e.jsx(r,{style:"percent",value:.145}),s=()=>e.jsx(r,{style:"currency",currency:"JPY",locale:"ja-JP",value:1234.45}),n=()=>e.jsx(Y,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(_,{each:U,children:t=>e.jsxs(e.Fragment,{children:[e.jsx(X,{color:"fg.muted",children:t}),e.jsx(r,{locale:t,value:1450.45},t)]})})}),c=()=>e.jsx(r,{style:"unit",unit:"kilometer",value:384.4}),m=()=>e.jsx(r,{notation:"compact",value:15e5});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number value={1000} />;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number style="percent" value={0.145} />;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number style="currency" currency="JPY" locale="ja-JP" value={1234.45} />;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.Number key={locale} locale={locale} value={1450.45} />
          </>}
      </For>
    </Grid>;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number style="unit" unit="kilometer" value={384.4} />;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Format.Number notation="compact" value={1500000} />;
}`,...m.parameters?.docs?.source}}};const Q=["Basic","Percentage","Currency","Locale","Unit","Notation"];export{a as Basic,s as Currency,n as Locale,m as Notation,o as Percentage,c as Unit,Q as __namedExportsOrder,M as default};
