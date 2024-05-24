import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{u as p}from"./index-CBqzus2r.js";import{u as a}from"./index-DSMQnqoi.js";import{T as l}from"./text-h-EvdzOa.js";import{B as g}from"./button-Ct3RLDFk.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-component-style-CgbLkkPD.js";import"./factory-BskLObbI.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./theme-provider-jjrI8DS5.js";import"./use-ripple-CZ_-Qqh5.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-CrGhO2Op.js";import"./loading-saJjm8M-.js";import"./icon-fvknOP9v.js";import"./index-H5wmSkhu.js";const O={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const R=["basic"];export{R as __namedExportsOrder,t as basic,O as default};
