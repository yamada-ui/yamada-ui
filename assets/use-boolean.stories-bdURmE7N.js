import{a as n,F as d,j as p}from"./jsx-runtime-5BUNAZ9W.js";import{u as c}from"./index-YuXFfT5-.js";import{T as f}from"./text-gcqxlQ4L.js";import{B as x}from"./button-wgRwFiXZ.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-oL2nRWmA.js";import"./factory-UVgmwG7m.js";import"./theme-provider-rx4ttYe3.js";import"./use-ripple-BZv2-DZW.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-wmKyD4SQ.js";import"./loading-RG6ZNJzo.js";import"./index-Rnhjv4qA.js";import"./index-3vd3i3Ph.js";import"./index-_1szq5la.js";import"./icon-q2lrQR9J.js";const q={title:"Hooks / useBoolean"},o=()=>{const[t,{toggle:r}]=c();return n(d,{children:[n(f,{children:["state: ",String(t)]}),p(x,{onClick:r,children:"Click me to toggle the boolean value"})]})},e=()=>{const[t,{on:r,off:g}]=c();return p(f,{w:"full",onMouseEnter:r,onMouseLeave:g,children:t?"I am hovered":"Put mouse over me please"})};var s,a,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var l,i,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [flg, {
    on,
    off
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const y=["basic","useOnOff"];export{y as __namedExportsOrder,o as basic,q as default,e as useOnOff};
