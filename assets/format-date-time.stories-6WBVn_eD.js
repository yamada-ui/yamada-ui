import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{r as n,t as r}from"./i18n-provider-UJywef6q.js";import{t as i}from"./text-CWhjq_ZM.js";import{t as a}from"./text-PitPK9Eo.js";import{Cn as o,Fa as s,Ia as c,Rd as l,Vd as u,_l as d,ml as f,wn as p}from"./iframe-DVygIfsS.js";var m,h,g,_,v,y,b,x,S,C;e((()=>{r(),s(),l(),o(),a(),f(),m=t(),h={component:d,title:`Components / Format / DateTime`},g=()=>(0,m.jsx)(d,{value:new Date}),_=()=>(0,m.jsx)(u,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(c,{each:n,children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{color:`fg.muted`,children:e}),(0,m.jsx)(d,{locale:e,value:new Date},e)]})})}),v=()=>(0,m.jsxs)(p,{gap:`0`,children:[(0,m.jsx)(d,{day:`numeric`,month:`long`,value:new Date,weekday:`long`,year:`numeric`}),(0,m.jsx)(d,{day:`numeric`,hour:`numeric`,hour12:!0,minute:`numeric`,month:`long`,second:`numeric`,value:new Date,weekday:`long`,year:`numeric`})]}),y=()=>(0,m.jsx)(u,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(c,{each:[`numeric`,`2-digit`],children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{color:`fg.muted`,children:e}),(0,m.jsx)(d,{value:new Date,year:e},e)]})})}),b=()=>(0,m.jsx)(u,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(c,{each:[`short`,`long`,`numeric`,`2-digit`,`narrow`],children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{color:`fg.muted`,children:e}),(0,m.jsx)(d,{month:e,value:new Date},e)]})})}),x=()=>(0,m.jsx)(u,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(c,{each:[`numeric`,`2-digit`],children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{color:`fg.muted`,children:e}),(0,m.jsx)(d,{day:e,value:new Date},e)]})})}),S=()=>(0,m.jsx)(u,{gapX:`sm`,templateColumns:`auto 1fr`,children:(0,m.jsx)(c,{each:[`short`,`long`,`narrow`],children:e=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{color:`fg.muted`,children:e}),(0,m.jsx)(d,{value:new Date,weekday:e},e)]})})}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Format.DateTime value={new Date()} />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {locale => <>
            <Text color="fg.muted">{locale}</Text>
            <Format.DateTime key={locale} locale={locale} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <VStack gap="0">
      <Format.DateTime day="numeric" month="long" value={new Date()} weekday="long" year="numeric" />
      <Format.DateTime day="numeric" hour="numeric" hour12 minute="numeric" month="long" second="numeric" value={new Date()} weekday="long" year="numeric" />
    </VStack>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {year => <>
            <Text color="fg.muted">{year}</Text>
            <Format.DateTime key={year} value={new Date()} year={year} />
          </>}
      </For>
    </Grid>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "numeric", "2-digit", "narrow"] as const}>
        {month => <>
            <Text color="fg.muted">{month}</Text>
            <Format.DateTime key={month} month={month} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {day => <>
            <Text color="fg.muted">{day}</Text>
            <Format.DateTime key={day} day={day} value={new Date()} />
          </>}
      </For>
    </Grid>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "narrow"] as const}>
        {weekday => <>
            <Text color="fg.muted">{weekday}</Text>
            <Format.DateTime key={weekday} value={new Date()} weekday={weekday} />
          </>}
      </For>
    </Grid>;
}`,...S.parameters?.docs?.source}}},C=[`Basic`,`Locale`,`Long`,`Year`,`Month`,`Day`,`Weekday`]}))();export{g as Basic,x as Day,_ as Locale,v as Long,b as Month,S as Weekday,y as Year,C as __namedExportsOrder,h as default};