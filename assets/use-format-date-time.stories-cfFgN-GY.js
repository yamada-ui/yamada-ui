import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./text-BtxLC071.js";import{r as a,t as o}from"./use-format-date-time-V00MapLr.js";import{n as s,t as c}from"./v-stack-DruJBUtC.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l=t(),s(),r(),o(),u=n(),d={title:`Hooks / useFormatDateTime`},f=()=>{let[e]=(0,l.useState)(()=>new Date),t=a(e);return(0,u.jsx)(i,{children:t})},p=()=>{let[e]=(0,l.useState)(()=>new Date),t=a(e,{locale:`de-DE`}),n=a(e,{locale:`zh-CN`});return(0,u.jsxs)(c,{gap:`0`,children:[(0,u.jsx)(i,{children:t}),(0,u.jsx)(i,{children:n})]})},m=()=>{let[e]=(0,l.useState)(()=>new Date),t=a(e,{day:`numeric`,month:`long`,weekday:`long`,year:`numeric`}),n=a(e,{day:`numeric`,hour:`numeric`,hour12:!0,minute:`numeric`,month:`long`,second:`numeric`,weekday:`long`,year:`numeric`});return(0,u.jsxs)(c,{gap:`0`,children:[(0,u.jsx)(i,{children:t}),(0,u.jsx)(i,{children:n})]})},h=()=>{let[e]=(0,l.useState)(()=>new Date),t=a(e,{year:`numeric`});return(0,u.jsx)(i,{children:t})},g=()=>{let[e]=(0,l.useState)(()=>new Date),t=a(e,{month:`long`});return(0,u.jsx)(i,{children:t})},_=()=>{let[e]=(0,l.useState)(()=>new Date),t=a(e,{day:`2-digit`});return(0,u.jsx)(i,{children:t})},v=()=>{let[e]=(0,l.useState)(()=>new Date),t=a(e,{weekday:`long`});return(0,u.jsx)(i,{children:t})},y=[`Basic`,`Locale`,`Long`,`Year`,`Month`,`Day`,`Weekday`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  const formattedDate = useFormatDateTime(value);
  return <Text>{formattedDate}</Text>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  const formattedDateDE = useFormatDateTime(value, {
    locale: "de-DE"
  });
  const formattedDateCN = useFormatDateTime(value, {
    locale: "zh-CN"
  });
  return <VStack gap="0">
      <Text>{formattedDateDE}</Text>
      <Text>{formattedDateCN}</Text>
    </VStack>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  const formattedDate = useFormatDateTime(value, {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric"
  });
  const formattedDateTime = useFormatDateTime(value, {
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  const formattedDate = useFormatDateTime(value, {
    year: "numeric"
  });
  return <Text>{formattedDate}</Text>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  const formattedDate = useFormatDateTime(value, {
    month: "long"
  });
  return <Text>{formattedDate}</Text>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  const formattedDate = useFormatDateTime(value, {
    day: "2-digit"
  });
  return <Text>{formattedDate}</Text>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [value] = useState<Date>(() => new Date());
  const formattedDate = useFormatDateTime(value, {
    weekday: "long"
  });
  return <Text>{formattedDate}</Text>;
}`,...v.parameters?.docs?.source}}}})))()}b();export{f as Basic,_ as Day,p as Locale,m as Long,g as Month,v as Weekday,h as Year,y as __namedExportsOrder,d as default};