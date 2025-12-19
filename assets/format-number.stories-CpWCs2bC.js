import{p as W,q as Z,j as e,s as $,b4 as ee,T as re}from"./iframe-D_HYglKf.js";import{G as te}from"./grid-CteH-i1E.js";import{F as ae}from"./for-B7ME2eWM.js";import{a as oe}from"./use-format-number-DvJk9ye1.js";import"./preload-helper-C1FmrZbK.js";import"./i18n-cache-2nrF3WCd.js";const se=W({}),{withContext:ne}=Z("format-number",se),r=ne(({style:t,compactDisplay:P,currency:E,currencyDisplay:G,currencySign:J,locale:T,localeMatcher:k,maximumFractionDigits:O,maximumSignificantDigits:A,minimumFractionDigits:B,minimumIntegerDigits:U,minimumSignificantDigits:X,notation:Y,numberingSystem:_,roundingIncrement:q,roundingMode:w,roundingPriority:R,signDisplay:z,trailingZeroDisplay:D,unit:H,unitDisplay:I,useGrouping:K,value:M,...Q})=>{const V=oe(M,{style:t,compactDisplay:P,currency:E,currencyDisplay:G,currencySign:J,locale:T,localeMatcher:k,maximumFractionDigits:O,maximumSignificantDigits:A,minimumFractionDigits:B,minimumIntegerDigits:U,minimumSignificantDigits:X,notation:Y,numberingSystem:_,roundingIncrement:q,roundingMode:w,roundingPriority:R,signDisplay:z,trailingZeroDisplay:D,unit:H,unitDisplay:I,useGrouping:K});return e.jsx($.span,{...Q,children:V})})(),de={component:r,title:"Components / Format / Number"},a=()=>e.jsx(r,{value:1e3}),o=()=>e.jsx(r,{style:"percent",value:.145}),s=()=>e.jsx(r,{style:"currency",currency:"JPY",locale:"ja-JP",value:1234.45}),n=()=>e.jsx(te,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(ae,{each:ee,children:t=>e.jsxs(e.Fragment,{children:[e.jsx(re,{color:"fg.muted",children:t}),e.jsx(r,{locale:t,value:1450.45},t)]})})}),c=()=>e.jsx(r,{style:"unit",unit:"kilometer",value:384.4}),m=()=>e.jsx(r,{notation:"compact",value:15e5});var u,l,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Format.Number value={1000} />;
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,d,x;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Format.Number style="percent" value={0.145} />;
}`,...(x=(d=o.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var y,j,F;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Format.Number style="currency" currency="JPY" locale="ja-JP" value={1234.45} />;
}`,...(F=(j=s.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var g,b,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.Number key={locale} locale={locale} value={1450.45} />
          </>}
      </For>
    </Grid>;
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,N,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Format.Number style="unit" unit="kilometer" value={384.4} />;
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var S,h,L;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Format.Number notation="compact" value={1500000} />;
}`,...(L=(h=m.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};const xe=["Basic","Percentage","Currency","Locale","Unit","Notation"];export{a as Basic,s as Currency,n as Locale,m as Notation,o as Percentage,c as Unit,xe as __namedExportsOrder,de as default};
