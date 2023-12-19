import{a as n,F as d,j as p}from"./jsx-runtime-TtYKBvr-.js";import{u as c}from"./index-gWY0u-sb.js";import{T as f}from"./text-dQvy8j4x.js";import{B as x}from"./button-FPtidzDX.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-eqg6O7Tm.js";import"./factory-LHs-Bkmb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./theme-provider-AD5gKQ6i.js";import"./use-ripple-cz0_rK7P.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-HWUA2jNq.js";import"./loading-t4SoIc4G.js";import"./index-S2htefC9.js";import"./index-OsV4SKtw.js";import"./index-Z94ctYOZ.js";import"./icon-lGxzm-PJ.js";const y={title:"Hooks / useBoolean"},o=()=>{const[t,{toggle:r}]=c();return n(d,{children:[n(f,{children:["state: ",String(t)]}),p(x,{onClick:r,children:"Click me to toggle the boolean value"})]})},e=()=>{const[t,{on:r,off:g}]=c();return p(f,{w:"full",onMouseEnter:r,onMouseLeave:g,children:t?"I am hovered":"Put mouse over me please"})};var s,a,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var i,l,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [flg, {
    on,
    off
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const z=["basic","useOnOff"];export{z as __namedExportsOrder,o as basic,y as default,e as useOnOff};
