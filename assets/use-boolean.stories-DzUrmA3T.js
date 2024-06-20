import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{u as p}from"./index-CBqzus2r.js";import{T as c}from"./text-MYjKvx39.js";import{B as g}from"./button-DOTfyR12.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-component-style-C0MoE1pt.js";import"./factory-Bf0a1C4O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./theme-provider-zwL-D6eR.js";import"./use-ripple-op6oFSyJ.js";import"./index-B5H6KlGO.js";import"./motion-B-hZ6xRg.js";import"./motion-BPPCNfSa.js";import"./loading-BMMGc-Ko.js";import"./icon-CVBZDjqd.js";import"./index-BJ39ysE2.js";const _={title:"Hooks / useBoolean"},e=()=>{const[r,{toggle:n}]=p();return o.jsxs(o.Fragment,{children:[o.jsxs(c,{children:["state: ",String(r)]}),o.jsx(g,{onClick:n,children:"Click me to toggle the boolean value"})]})},t=()=>{const[r,{on:n,off:f}]=p();return o.jsx(c,{w:"full",onMouseEnter:n,onMouseLeave:f,children:r?"I am hovered":"Put mouse over me please"})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
