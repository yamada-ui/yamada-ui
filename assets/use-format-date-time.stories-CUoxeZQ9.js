import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./text-b2W5euYI.js";import{r as i,t as a}from"./use-format-date-time-0jwOerqQ.js";import{n as o,t as s}from"./v-stack-DgxvBjIl.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o(),n(),a(),c=t(),l={title:`Hooks / useFormatDateTime`},u=()=>{let e=i(new Date);return(0,c.jsx)(r,{children:e})},d=()=>{let e=i(new Date,{locale:`de-DE`}),t=i(new Date,{locale:`zh-CN`});return(0,c.jsxs)(s,{gap:`0`,children:[(0,c.jsx)(r,{children:e}),(0,c.jsx)(r,{children:t})]})},f=()=>{let e=i(new Date,{day:`numeric`,month:`long`,weekday:`long`,year:`numeric`}),t=i(new Date,{day:`numeric`,hour:`numeric`,hour12:!0,minute:`numeric`,month:`long`,second:`numeric`,weekday:`long`,year:`numeric`});return(0,c.jsxs)(s,{gap:`0`,children:[(0,c.jsx)(r,{children:e}),(0,c.jsx)(r,{children:t})]})},p=()=>{let e=i(new Date,{year:`numeric`});return(0,c.jsx)(r,{children:e})},m=()=>{let e=i(new Date,{month:`long`});return(0,c.jsx)(r,{children:e})},h=()=>{let e=i(new Date,{day:`2-digit`});return(0,c.jsx)(r,{children:e})},g=()=>{let e=i(new Date,{weekday:`long`});return(0,c.jsx)(r,{children:e})},_=[`Basic`,`Locale`,`Long`,`Year`,`Month`,`Day`,`Weekday`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}}})))()}v();export{u as Basic,h as Day,d as Locale,f as Long,m as Month,g as Weekday,p as Year,_ as __namedExportsOrder,l as default};