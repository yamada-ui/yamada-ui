import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,r as n}from"./i18n-provider-Cc12Ys91.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{d as i,f as a}from"./utils-DG4lHdyV.js";import{a as o,d as s,r as c,t as l}from"./create-component-DtmnY_ce.js";import{n as u,t as d}from"./text-b2W5euYI.js";import{n as f,t as p}from"./grid-DAC5TR2S.js";import{r as m,t as h}from"./use-format-date-time-0jwOerqQ.js";import{n as g,t as _}from"./for-BIl9Q3L3.js";import{n as v,t as y}from"./v-stack-DgxvBjIl.js";var b;function x(){return(x=e((()=>{s(),b=o({})})))()}var S,C,w,T,E;function D(){return(D=e((()=>{c(),i(),x(),h(),S=r(),{PropsContext:C,usePropsContext:w,withContext:T}=l(`format-date-time`,b),E=T(({calendar:e,dateStyle:t,day:n,dayPeriod:r,era:i,formatMatcher:o,fractionalSecondDigits:s,hour:c,hour12:l,hourCycle:u,locale:d,localeMatcher:f,minute:p,month:h,numberingSystem:g,second:_,timeStyle:v,timeZone:y,timeZoneName:b,value:x,weekday:C,year:w,...T})=>{let E=m(x,{calendar:e,dateStyle:t,day:n,dayPeriod:r,era:i,formatMatcher:o,fractionalSecondDigits:s,hour:c,hour12:l,hourCycle:u,locale:d,localeMatcher:f,minute:p,month:h,numberingSystem:g,second:_,timeStyle:v,timeZone:y,timeZoneName:b,weekday:C,year:w});return(0,S.jsx)(a.span,{...T,children:E})})()})))()}var O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{n(),g(),f(),v(),u(),D(),O=r(),k={component:E,title:`Components / Format / DateTime`},A=()=>(0,O.jsx)(E,{value:new Date}),j=()=>(0,O.jsx)(p,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,O.jsx)(_,{each:t,children:e=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{color:`fg.muted`,children:e}),(0,O.jsx)(E,{locale:e,value:new Date},e)]})})}),M=()=>(0,O.jsxs)(y,{gap:`0`,children:[(0,O.jsx)(E,{day:`numeric`,month:`long`,value:new Date,weekday:`long`,year:`numeric`}),(0,O.jsx)(E,{day:`numeric`,hour:`numeric`,hour12:!0,minute:`numeric`,month:`long`,second:`numeric`,value:new Date,weekday:`long`,year:`numeric`})]}),N=()=>(0,O.jsx)(p,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,O.jsx)(_,{each:[`numeric`,`2-digit`],children:e=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{color:`fg.muted`,children:e}),(0,O.jsx)(E,{value:new Date,year:e},e)]})})}),P=()=>(0,O.jsx)(p,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,O.jsx)(_,{each:[`short`,`long`,`numeric`,`2-digit`,`narrow`],children:e=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{color:`fg.muted`,children:e}),(0,O.jsx)(E,{month:e,value:new Date},e)]})})}),F=()=>(0,O.jsx)(p,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,O.jsx)(_,{each:[`numeric`,`2-digit`],children:e=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{color:`fg.muted`,children:e}),(0,O.jsx)(E,{day:e,value:new Date},e)]})})}),I=()=>(0,O.jsx)(p,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,O.jsx)(_,{each:[`short`,`long`,`narrow`],children:e=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{color:`fg.muted`,children:e}),(0,O.jsx)(E,{value:new Date,weekday:e},e)]})})}),L=[`Basic`,`Locale`,`Long`,`Year`,`Month`,`Day`,`Weekday`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <Format.DateTime value={new Date()} />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.DateTime key={locale} locale={locale} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.DateTime day="numeric" month="long" value={new Date()} weekday="long" year="numeric" />
      <Format.DateTime day="numeric" hour="numeric" hour12 minute="numeric" month="long" second="numeric" value={new Date()} weekday="long" year="numeric" />
    </VStack>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {year => <>
            <Text color="fg.muted">{year}</Text>
            <Format.DateTime key={year} value={new Date()} year={year} />
          </>}
      </For>
    </Grid>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "numeric", "2-digit", "narrow"] as const}>
        {month => <>
            <Text color="fg.muted">{month}</Text>
            <Format.DateTime key={month} month={month} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {day => <>
            <Text color="fg.muted">{day}</Text>
            <Format.DateTime key={day} day={day} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "narrow"] as const}>
        {weekday => <>
            <Text color="fg.muted">{weekday}</Text>
            <Format.DateTime key={weekday} value={new Date()} weekday={weekday} />
          </>}
      </For>
    </Grid>;
}`,...I.parameters?.docs?.source}}}})))()}R();export{A as Basic,F as Day,j as Locale,M as Long,P as Month,I as Weekday,N as Year,L as __namedExportsOrder,k as default};