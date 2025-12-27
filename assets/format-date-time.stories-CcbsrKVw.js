import{p as te,q as ne,j as e,s as oe,b5 as se,T as t,V as me}from"./iframe-DaVT7dxo.js";import{G as n}from"./grid-Cjbr-zPO.js";import{F as o}from"./for-CMUOzp-w.js";import{a as ce}from"./use-format-date-time-Bc56wAUk.js";import"./preload-helper-C1FmrZbK.js";import"./i18n-cache-2nrF3WCd.js";const ue=te({}),{withContext:ie}=ne("format-date-time",ue),a=ie(({calendar:r,dateStyle:A,day:B,dayPeriod:M,era:W,formatMatcher:Y,fractionalSecondDigits:_,hour:b,hour12:q,hourCycle:R,locale:z,localeMatcher:H,minute:I,month:J,numberingSystem:K,second:N,timeStyle:P,timeZone:Q,timeZoneName:U,value:Z,weekday:$,year:ee,...re})=>{const ae=ce(Z,{calendar:r,dateStyle:A,day:B,dayPeriod:M,era:W,formatMatcher:Y,fractionalSecondDigits:_,hour:b,hour12:q,hourCycle:R,locale:z,localeMatcher:H,minute:I,month:J,numberingSystem:K,second:N,timeStyle:P,timeZone:Q,timeZoneName:U,weekday:$,year:ee});return e.jsx(oe.span,{...re,children:ae})})(),ye={component:a,title:"Components / Format / DateTime"},s=()=>e.jsx(a,{value:new Date}),m=()=>e.jsx(n,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(o,{each:se,children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"fg.muted",children:r}),e.jsx(a,{locale:r,value:new Date},r)]})})}),c=()=>e.jsxs(me,{gap:"0",children:[e.jsx(a,{day:"numeric",month:"long",value:new Date,weekday:"long",year:"numeric"}),e.jsx(a,{day:"numeric",hour:"numeric",hour12:!0,minute:"numeric",month:"long",second:"numeric",value:new Date,weekday:"long",year:"numeric"})]}),u=()=>e.jsx(n,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(o,{each:["numeric","2-digit"],children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"fg.muted",children:r}),e.jsx(a,{value:new Date,year:r},r)]})})}),i=()=>e.jsx(n,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(o,{each:["short","long","numeric","2-digit","narrow"],children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"fg.muted",children:r}),e.jsx(a,{month:r,value:new Date},r)]})})}),l=()=>e.jsx(n,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(o,{each:["numeric","2-digit"],children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"fg.muted",children:r}),e.jsx(a,{day:r,value:new Date},r)]})})}),d=()=>e.jsx(n,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(o,{each:["short","long","narrow"],children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"fg.muted",children:r}),e.jsx(a,{value:new Date,weekday:r},r)]})})});var p,g,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Format.DateTime value={new Date()} />;
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,y,j;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.DateTime key={locale} locale={locale} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,...(j=(y=m.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var D,f,w;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.DateTime day="numeric" month="long" value={new Date()} weekday="long" year="numeric" />
      <Format.DateTime day="numeric" hour="numeric" hour12 minute="numeric" month="long" second="numeric" value={new Date()} weekday="long" year="numeric" />
    </VStack>;
}`,...(w=(f=c.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var F,T,k;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {year => <>
            <Text color="fg.muted">{year}</Text>
            <Format.DateTime key={year} value={new Date()} year={year} />
          </>}
      </For>
    </Grid>;
}`,...(k=(T=u.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var v,C,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "numeric", "2-digit", "narrow"] as const}>
        {month => <>
            <Text color="fg.muted">{month}</Text>
            <Format.DateTime key={month} month={month} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var G,X,L;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {day => <>
            <Text color="fg.muted">{day}</Text>
            <Format.DateTime key={day} day={day} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,...(L=(X=l.parameters)==null?void 0:X.docs)==null?void 0:L.source}}};var E,V,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "narrow"] as const}>
        {weekday => <>
            <Text color="fg.muted">{weekday}</Text>
            <Format.DateTime key={weekday} value={new Date()} weekday={weekday} />
          </>}
      </For>
    </Grid>;
}`,...(O=(V=d.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const je=["Basic","Locale","Long","Year","Month","Day","Weekday"];export{s as Basic,l as Day,m as Locale,c as Long,i as Month,d as Weekday,u as Year,je as __namedExportsOrder,ye as default};
