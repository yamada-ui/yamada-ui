import{p as M,q as W,j as e,s as Y,a$ as _,T as t,V as q}from"./iframe-C__kp2ks.js";import{G as n}from"./grid-CbQIAmub.js";import{F as o}from"./for-CRlK2fzt.js";import{a as R}from"./use-format-date-time-0AZu3HgB.js";import"./preload-helper-PPVm8Dsz.js";import"./i18n-cache-2nrF3WCd.js";const $=M({}),{withContext:b}=W("format-date-time",$),a=b(({calendar:r,dateStyle:p,day:g,dayPeriod:h,era:x,formatMatcher:y,fractionalSecondDigits:j,hour:D,hour12:f,hourCycle:w,locale:F,localeMatcher:T,minute:k,month:v,numberingSystem:C,second:S,timeStyle:G,timeZone:X,timeZoneName:L,value:E,weekday:V,year:O,...A})=>{const B=R(E,{calendar:r,dateStyle:p,day:g,dayPeriod:h,era:x,formatMatcher:y,fractionalSecondDigits:j,hour:D,hour12:f,hourCycle:w,locale:F,localeMatcher:T,minute:k,month:v,numberingSystem:C,second:S,timeStyle:G,timeZone:X,timeZoneName:L,weekday:V,year:O});return e.jsx(Y.span,{...A,children:B})})(),P={component:a,title:"Components / Format / DateTime"},s=()=>e.jsx(a,{value:new Date}),m=()=>e.jsx(n,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(o,{each:_,children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"fg.muted",children:r}),e.jsx(a,{locale:r,value:new Date},r)]})})}),c=()=>e.jsxs(q,{gap:"0",children:[e.jsx(a,{day:"numeric",month:"long",value:new Date,weekday:"long",year:"numeric"}),e.jsx(a,{day:"numeric",hour:"numeric",hour12:!0,minute:"numeric",month:"long",second:"numeric",value:new Date,weekday:"long",year:"numeric"})]}),u=()=>e.jsx(n,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(o,{each:["numeric","2-digit"],children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"fg.muted",children:r}),e.jsx(a,{value:new Date,year:r},r)]})})}),i=()=>e.jsx(n,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(o,{each:["short","long","numeric","2-digit","narrow"],children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"fg.muted",children:r}),e.jsx(a,{month:r,value:new Date},r)]})})}),l=()=>e.jsx(n,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(o,{each:["numeric","2-digit"],children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"fg.muted",children:r}),e.jsx(a,{day:r,value:new Date},r)]})})}),d=()=>e.jsx(n,{gapX:"sm",templateColumns:"auto 1fr",children:e.jsx(o,{each:["short","long","narrow"],children:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"fg.muted",children:r}),e.jsx(a,{value:new Date,weekday:r},r)]})})});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Format.DateTime value={new Date()} />;
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.DateTime key={locale} locale={locale} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.DateTime day="numeric" month="long" value={new Date()} weekday="long" year="numeric" />
      <Format.DateTime day="numeric" hour="numeric" hour12 minute="numeric" month="long" second="numeric" value={new Date()} weekday="long" year="numeric" />
    </VStack>;
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {year => <>
            <Text color="fg.muted">{year}</Text>
            <Format.DateTime key={year} value={new Date()} year={year} />
          </>}
      </For>
    </Grid>;
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "numeric", "2-digit", "narrow"] as const}>
        {month => <>
            <Text color="fg.muted">{month}</Text>
            <Format.DateTime key={month} month={month} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {day => <>
            <Text color="fg.muted">{day}</Text>
            <Format.DateTime key={day} day={day} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "narrow"] as const}>
        {weekday => <>
            <Text color="fg.muted">{weekday}</Text>
            <Format.DateTime key={weekday} value={new Date()} weekday={weekday} />
          </>}
      </For>
    </Grid>;
}`,...d.parameters?.docs?.source}}};const Q=["Basic","Locale","Long","Year","Month","Day","Weekday"];export{s as Basic,l as Day,m as Locale,c as Long,i as Month,d as Weekday,u as Year,Q as __namedExportsOrder,P as default};
