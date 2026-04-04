import{n as e}from"./chunk-zsgVPwQN.js";import{$o as t,Bt as n,Du as r,Eu as i,Qo as a,Ut as o,pp as s}from"./iframe-BNI00s7o.js";var c,l,u,d,f,p,m,h,g,_;e((()=>{n(),i(),a(),c=s(),l={title:`Hooks / useFormatDateTime`},u=()=>(0,c.jsx)(r,{children:t(new Date)}),d=()=>{let e=t(new Date,{locale:`de-DE`}),n=t(new Date,{locale:`zh-CN`});return(0,c.jsxs)(o,{gap:`0`,children:[(0,c.jsx)(r,{children:e}),(0,c.jsx)(r,{children:n})]})},f=()=>{let e=t(new Date,{day:`numeric`,month:`long`,weekday:`long`,year:`numeric`}),n=t(new Date,{day:`numeric`,hour:`numeric`,hour12:!0,minute:`numeric`,month:`long`,second:`numeric`,weekday:`long`,year:`numeric`});return(0,c.jsxs)(o,{gap:`0`,children:[(0,c.jsx)(r,{children:e}),(0,c.jsx)(r,{children:n})]})},p=()=>(0,c.jsx)(r,{children:t(new Date,{year:`numeric`})}),m=()=>(0,c.jsx)(r,{children:t(new Date,{month:`long`})}),h=()=>(0,c.jsx)(r,{children:t(new Date,{day:`2-digit`})}),g=()=>(0,c.jsx)(r,{children:t(new Date,{weekday:`long`})}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date());
  return <Text>{formattedDate}</Text>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const formattedDateDE = useFormatDateTime(new Date(), {
    locale: "de-DE"
  });
  const formattedDateCN = useFormatDateTime(new Date(), {
    locale: "zh-CN"
  });
  return <VStack gap="0">
      <Text>{formattedDateDE}</Text>
      <Text>{formattedDateCN}</Text>
    </VStack>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric"
  });
  const formattedDateTime = useFormatDateTime(new Date(), {
    day: "numeric",
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    month: "long",
    second: "numeric",
    weekday: "long",
    year: "numeric"
  });
  return <VStack gap="0">
      <Text>{formattedDate}</Text>
      <Text>{formattedDateTime}</Text>
    </VStack>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    year: "numeric"
  });
  return <Text>{formattedDate}</Text>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    month: "long"
  });
  return <Text>{formattedDate}</Text>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    day: "2-digit"
  });
  return <Text>{formattedDate}</Text>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    weekday: "long"
  });
  return <Text>{formattedDate}</Text>;
}`,...g.parameters?.docs?.source}}},_=[`Basic`,`Locale`,`Long`,`Year`,`Month`,`Day`,`Weekday`]}))();export{u as Basic,h as Day,d as Locale,f as Long,m as Month,g as Weekday,p as Year,_ as __namedExportsOrder,l as default};