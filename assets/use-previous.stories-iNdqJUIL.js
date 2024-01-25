import{a as r,F as a,j as p}from"./jsx-runtime-5BUNAZ9W.js";import{u as l}from"./index-YuXFfT5-.js";import{u as g}from"./index-6kAfjqEG.js";import{T as c}from"./text-op49pNyp.js";import{B as u}from"./button-Alg8QOdJ.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-w5CKuE2B.js";import"./factory-RgfxYELV.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./theme-provider-3UPjg8SK.js";import"./use-ripple-GML7p_Ge.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-cwWH0vUb.js";import"./loading-XllCM6KN.js";import"./index-C-jqR-WU.js";import"./index-l_LhqSw0.js";import"./index-DFTBuhAG.js";import"./icon-_8-FzyzA.js";const z={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=l(),m=g(t);return r(a,{children:[r(c,{children:["state: ",String(t),", prev: ",String(m??"none")]}),p(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
