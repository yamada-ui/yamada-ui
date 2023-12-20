import{a as r,F as a,j as p}from"./jsx-runtime-TtYKBvr-.js";import{u as l}from"./index-gWY0u-sb.js";import{u as g}from"./index-X4SQYXzq.js";import{T as c}from"./text-v7BrHFOc.js";import{B as u}from"./button-ZHiU-olu.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-5nTHLJk_.js";import"./factory-0U35BYk-.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./theme-provider-_TpUstJ8.js";import"./use-ripple-0Krh0NIL.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-oaSIzDbx.js";import"./loading-678li6bp.js";import"./index-sWcbvyzn.js";import"./index-dluY42U8.js";import"./index-Vee3qruC.js";import"./icon-gAHwiU-k.js";const z={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=l(),m=g(t);return r(a,{children:[r(c,{children:["state: ",String(t),", prev: ",String(m??"none")]}),p(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const prevFlg = usePrevious(flg);
  return <>
      <Text>
        state: {String(flg)}, prev: {String(prevFlg ?? "none")}
      </Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const A=["basic"];export{A as __namedExportsOrder,o as basic,z as default};
