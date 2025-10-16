import{j as t,T as a,V as D}from"./iframe-B0P9Y6nu.js";import{a as r}from"./use-format-date-time-CjyNgs_Q.js";import"./preload-helper-PPVm8Dsz.js";import"./i18n-cache-2nrF3WCd.js";const f={title:"Hooks / useFormatDateTime"},n=()=>{const e=r(new Date);return t.jsx(a,{children:e})},o=()=>{const e=r(new Date,{locale:"de-DE"}),i=r(new Date,{locale:"zh-CN"});return t.jsxs(D,{gap:"0",children:[t.jsx(a,{children:e}),t.jsx(a,{children:i})]})},s=()=>{const e=r(new Date,{day:"numeric",month:"long",weekday:"long",year:"numeric"}),i=r(new Date,{day:"numeric",hour:"numeric",hour12:!0,minute:"numeric",month:"long",second:"numeric",weekday:"long",year:"numeric"});return t.jsxs(D,{gap:"0",children:[t.jsx(a,{children:e}),t.jsx(a,{children:i})]})},m=()=>{const e=r(new Date,{year:"numeric"});return t.jsx(a,{children:e})},c=()=>{const e=r(new Date,{month:"long"});return t.jsx(a,{children:e})},d=()=>{const e=r(new Date,{day:"2-digit"});return t.jsx(a,{children:e})},u=()=>{const e=r(new Date,{weekday:"long"});return t.jsx(a,{children:e})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date());
  return <Text>{formattedDate}</Text>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    year: "numeric"
  });
  return <Text>{formattedDate}</Text>;
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    month: "long"
  });
  return <Text>{formattedDate}</Text>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    day: "2-digit"
  });
  return <Text>{formattedDate}</Text>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    weekday: "long"
  });
  return <Text>{formattedDate}</Text>;
}`,...u.parameters?.docs?.source}}};const g=["Basic","Locale","Long","Year","Month","Day","Weekday"];export{n as Basic,d as Day,o as Locale,s as Long,c as Month,u as Weekday,m as Year,g as __namedExportsOrder,f as default};
