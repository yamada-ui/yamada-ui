import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{n,r}from"./i18n-provider-CVU3vuxJ.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{d as a,f as o}from"./utils-DU-a_DAF.js";import{a as s,d as c,r as l,t as u}from"./create-component-DQMvd0DD.js";import{n as d,t as f}from"./text-iKFupaae.js";import{n as p,t as m}from"./grid-BB0X4UgP.js";import{r as h,t as g}from"./use-format-date-time-CP60X2c7.js";import{n as _,t as v}from"./for-qrDiH4Lk.js";import{n as y,t as b}from"./v-stack-C4vQZUGD.js";var x;function S(){return(S=e((()=>{c(),x=s({})})))()}var C,w,T,E,D;function O(){return(O=e((()=>{l(),a(),S(),g(),C=i(),{PropsContext:w,usePropsContext:T,withContext:E}=u(`format-date-time`,x),D=E(({calendar:e,dateStyle:t,day:n,dayPeriod:r,era:i,formatMatcher:a,fractionalSecondDigits:s,hour:c,hour12:l,hourCycle:u,locale:d,localeMatcher:f,minute:p,month:m,numberingSystem:g,second:_,timeStyle:v,timeZone:y,timeZoneName:b,value:x,weekday:S,year:w,...T})=>{let E=h(x,{calendar:e,dateStyle:t,day:n,dayPeriod:r,era:i,formatMatcher:a,fractionalSecondDigits:s,hour:c,hour12:l,hourCycle:u,locale:d,localeMatcher:f,minute:p,month:m,numberingSystem:g,second:_,timeStyle:v,timeZone:y,timeZoneName:b,weekday:S,year:w});return(0,C.jsx)(o.span,{...T,children:E})})()})))()}var k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{k=t(),r(),_(),p(),y(),d(),O(),A=i(),j={component:D,title:`Components / Format / DateTime`},M=()=>{let[e]=(0,k.useState)(()=>new Date);return(0,A.jsx)(D,{value:e})},N=()=>{let[e]=(0,k.useState)(()=>new Date);return(0,A.jsx)(m,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,A.jsx)(v,{each:n,children:t=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f,{color:`fg.muted`,children:t}),(0,A.jsx)(D,{locale:t,value:e},t)]})})})},P=()=>{let[e]=(0,k.useState)(()=>new Date);return(0,A.jsxs)(b,{gap:`0`,children:[(0,A.jsx)(D,{day:`numeric`,month:`long`,value:e,weekday:`long`,year:`numeric`}),(0,A.jsx)(D,{day:`numeric`,hour:`numeric`,hour12:!0,minute:`numeric`,month:`long`,second:`numeric`,value:e,weekday:`long`,year:`numeric`})]})},F=()=>{let[e]=(0,k.useState)(()=>new Date);return(0,A.jsx)(m,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,A.jsx)(v,{each:[`numeric`,`2-digit`],children:t=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f,{color:`fg.muted`,children:t}),(0,A.jsx)(D,{value:e,year:t},t)]})})})},I=()=>{let[e]=(0,k.useState)(()=>new Date);return(0,A.jsx)(m,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,A.jsx)(v,{each:[`short`,`long`,`numeric`,`2-digit`,`narrow`],children:t=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f,{color:`fg.muted`,children:t}),(0,A.jsx)(D,{month:t,value:e},t)]})})})},L=()=>{let[e]=(0,k.useState)(()=>new Date);return(0,A.jsx)(m,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,A.jsx)(v,{each:[`numeric`,`2-digit`],children:t=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f,{color:`fg.muted`,children:t}),(0,A.jsx)(D,{day:t,value:e},t)]})})})},R=()=>{let[e]=(0,k.useState)(()=>new Date);return(0,A.jsx)(m,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,A.jsx)(v,{each:[`short`,`long`,`narrow`],children:t=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f,{color:`fg.muted`,children:t}),(0,A.jsx)(D,{value:e,weekday:t},t)]})})})},z=[`Basic`,`Locale`,`Long`,`Year`,`Month`,`Day`,`Weekday`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  return <Format.DateTime value={value} />;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.DateTime key={locale} locale={locale} value={value} />
          </>}
      </For>
    </Grid>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  return <VStack gap="0">
      <Format.DateTime day="numeric" month="long" value={value} weekday="long" year="numeric" />
      <Format.DateTime day="numeric" hour="numeric" hour12 minute="numeric" month="long" second="numeric" value={value} weekday="long" year="numeric" />
    </VStack>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {year => <>
            <Text color="fg.muted">{year}</Text>
            <Format.DateTime key={year} value={value} year={year} />
          </>}
      </For>
    </Grid>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "numeric", "2-digit", "narrow"] as const}>
        {month => <>
            <Text color="fg.muted">{month}</Text>
            <Format.DateTime key={month} month={month} value={value} />
          </>}
      </For>
    </Grid>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {day => <>
            <Text color="fg.muted">{day}</Text>
            <Format.DateTime key={day} day={day} value={value} />
          </>}
      </For>
    </Grid>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "narrow"] as const}>
        {weekday => <>
            <Text color="fg.muted">{weekday}</Text>
            <Format.DateTime key={weekday} value={value} weekday={weekday} />
          </>}
      </For>
    </Grid>;
}`,...R.parameters?.docs?.source}}}})))()}B();export{M as Basic,L as Day,N as Locale,P as Long,I as Month,R as Weekday,F as Year,z as __namedExportsOrder,j as default};