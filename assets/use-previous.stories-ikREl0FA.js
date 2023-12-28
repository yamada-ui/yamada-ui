import{a as r,F as a,j as p}from"./jsx-runtime-TtYKBvr-.js";import{u as l}from"./index-gWY0u-sb.js";import{u as g}from"./index-X4SQYXzq.js";import{T as c}from"./text-Ir_nN7z7.js";import{B as u}from"./button-Aqw5XXIz.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-SBdvRTzg.js";import"./factory-K2EgzEzN.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./theme-provider-WG22_9xQ.js";import"./use-ripple-WyPsLtJa.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-IA6mdqBG.js";import"./loading-ubMXvBrR.js";import"./index-3YLteYYa.js";import"./index-IiCOgs8R.js";import"./index-fr2XEHwU.js";import"./icon-yFQ9IdhB.js";const z={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=l(),m=g(t);return r(a,{children:[r(c,{children:["state: ",String(t),", prev: ",String(m??"none")]}),p(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
