import{p as O,j as e,s as w,w as A,bf as B,T as U}from"./iframe-1jXkjttE.js";import{G as X}from"./grid-BFeokbW8.js";import{F as Y}from"./for-97YvSO2o.js";import{a as _}from"./use-format-number-h5xS63mb.js";import"./preload-helper-PPVm8Dsz.js";import"./i18n-cache-2nrF3WCd.js";const R=O({}),{withContext:q}=A("format-number",R),r=q(({style:t,compactDisplay:u,currency:l,currencyDisplay:p,currencySign:i,locale:d,localeMatcher:x,maximumFractionDigits:y,maximumSignificantDigits:j,minimumFractionDigits:F,minimumIntegerDigits:f,minimumSignificantDigits:g,notation:b,numberingSystem:v,roundingIncrement:N,roundingMode:C,roundingPriority:S,signDisplay:h,trailingZeroDisplay:L,unit:P,unitDisplay:E,useGrouping:G,value:J,...T})=>{const k=_(J,{style:t,compactDisplay:u,currency:l,currencyDisplay:p,currencySign:i,locale:d,localeMatcher:x,maximumFractionDigits:y,maximumSignificantDigits:j,minimumFractionDigits:F,minimumIntegerDigits:f,minimumSignificantDigits:g,notation:b,numberingSystem:v,roundingIncrement:N,roundingMode:C,roundingPriority:S,signDisplay:h,trailingZeroDisplay:L,unit:P,unitDisplay:E,useGrouping:G});return e.jsx(w.span,{...T,children:k})})(),Q={component:r,title:"Components / Format / Number"},a=()=>e.jsx(r,{value:1e3}),o=()=>e.jsx(r,{style:"percent",value:.145}),s=()=>e.jsx(r,{style:"currency",currency:"JPY",locale:"ja-JP",value:1234.45}),n=()=>e.jsx(X,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(Y,{each:B,children:t=>e.jsxs(e.Fragment,{children:[e.jsx(U,{color:"fg.muted",children:t}),e.jsx(r,{locale:t,value:1450.45},t)]})})}),c=()=>e.jsx(r,{style:"unit",unit:"kilometer",value:384.4}),m=()=>e.jsx(r,{notation:"compact",value:15e5});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const V=["Basic","Percentage","Currency","Locale","Unit","Notation"];export{a as Basic,s as Currency,n as Locale,m as Notation,o as Percentage,c as Unit,V as __namedExportsOrder,Q as default};
