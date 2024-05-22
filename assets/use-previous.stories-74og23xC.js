import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{u as p}from"./index-CBqzus2r.js";import{u as a}from"./index-DSMQnqoi.js";import{T as l}from"./text-B7cjXMz4.js";import{B as g}from"./button-D4Wm1JBG.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-component-style-Bt4oJcRH.js";import"./factory-DcjttzXA.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D3Fv6YO_.js";import"./theme-provider-blvefFsb.js";import"./use-ripple-DGdpgE18.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-CGV1aZSj.js";import"./loading-D2RTdWov.js";import"./icon-i9DNsLAz.js";import"./index-ZcQ9dmS1.js";const O={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
