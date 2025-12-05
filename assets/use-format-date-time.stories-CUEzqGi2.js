import{j as t,T as a,V as M}from"./iframe-BIJNUwA0.js";import{a as r}from"./use-format-date-time-DzHqPhZm.js";import"./preload-helper-C1FmrZbK.js";import"./i18n-cache-2nrF3WCd.js";const O={title:"Hooks / useFormatDateTime"},n=()=>{const e=r(new Date);return t.jsx(a,{children:e})},o=()=>{const e=r(new Date,{locale:"de-DE"}),i=r(new Date,{locale:"zh-CN"});return t.jsxs(M,{gap:"0",children:[t.jsx(a,{children:e}),t.jsx(a,{children:i})]})},s=()=>{const e=r(new Date,{day:"numeric",month:"long",weekday:"long",year:"numeric"}),i=r(new Date,{day:"numeric",hour:"numeric",hour12:!0,minute:"numeric",month:"long",second:"numeric",weekday:"long",year:"numeric"});return t.jsxs(M,{gap:"0",children:[t.jsx(a,{children:e}),t.jsx(a,{children:i})]})},m=()=>{const e=r(new Date,{year:"numeric"});return t.jsx(a,{children:e})},c=()=>{const e=r(new Date,{month:"long"});return t.jsx(a,{children:e})},d=()=>{const e=r(new Date,{day:"2-digit"});return t.jsx(a,{children:e})},u=()=>{const e=r(new Date,{weekday:"long"});return t.jsx(a,{children:e})};var D,l,p;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date());
  return <Text>{formattedDate}</Text>;
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var x,T,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var g,h,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,k,j;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    year: "numeric"
  });
  return <Text>{formattedDate}</Text>;
}`,...(j=(k=m.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var S,F,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    month: "long"
  });
  return <Text>{formattedDate}</Text>;
}`,...(E=(F=c.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var V,C,N;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    day: "2-digit"
  });
  return <Text>{formattedDate}</Text>;
}`,...(N=(C=d.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var L,z,B;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const formattedDate = useFormatDateTime(new Date(), {
    weekday: "long"
  });
  return <Text>{formattedDate}</Text>;
}`,...(B=(z=u.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const R=["Basic","Locale","Long","Year","Month","Day","Weekday"];export{n as Basic,d as Day,o as Locale,s as Long,c as Month,u as Weekday,m as Year,R as __namedExportsOrder,O as default};
