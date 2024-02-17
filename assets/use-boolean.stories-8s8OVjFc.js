import{a as n,F as d,j as p}from"./jsx-runtime-5BUNAZ9W.js";import{u as c}from"./index-YuXFfT5-.js";import{T as f}from"./text-KdXH1h6O.js";import{B as x}from"./button-_x0xF1BK.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-ur23iJdL.js";import"./factory-RXTd6Ype.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./theme-provider-sgFj2JQg.js";import"./use-ripple-u7crcLVz.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-1HlxJrnU.js";import"./loading-wg4TUUCb.js";import"./index-CBfWCvKJ.js";import"./index-e7LtySSC.js";import"./index-DkyhaWsF.js";import"./icon-2cwE6nV2.js";const y={title:"Hooks / useBoolean"},o=()=>{const[t,{toggle:r}]=c();return n(d,{children:[n(f,{children:["state: ",String(t)]}),p(x,{onClick:r,children:"Click me to toggle the boolean value"})]})},e=()=>{const[t,{on:r,off:g}]=c();return p(f,{w:"full",onMouseEnter:r,onMouseLeave:g,children:t?"I am hovered":"Put mouse over me please"})};var s,a,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
