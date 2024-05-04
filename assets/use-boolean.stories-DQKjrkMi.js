import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-Du0-7Fls.js";import{T as c}from"./text-ya_NqogR.js";import{B as g}from"./button-CLAnfRTj.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-eZPQMXFE.js";import"./factory-DB2JyeD8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./theme-provider-CVa4tFyh.js";import"./use-ripple-BNFWROsb.js";import"./index-D53P4PVU.js";import"./motion-B93Hlbuy.js";import"./motion-DWzc3n8e.js";import"./loading-qhJXVDYI.js";import"./icon-BD9QHthp.js";import"./index-D8MHxai4.js";const _={title:"Hooks / useBoolean"},e=()=>{const[r,{toggle:n}]=p();return o.jsxs(o.Fragment,{children:[o.jsxs(c,{children:["state: ",String(r)]}),o.jsx(g,{onClick:n,children:"Click me to toggle the boolean value"})]})},t=()=>{const[r,{on:n,off:f}]=p();return o.jsx(c,{w:"full",onMouseEnter:n,onMouseLeave:f,children:r?"I am hovered":"Put mouse over me please"})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [flg, {
    on,
    off
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const F=["basic","useOnOff"];export{F as __namedExportsOrder,e as basic,_ as default,t as useOnOff};
