import{a as l,F as p,j as o}from"./jsx-runtime-TtYKBvr-.js";import{u as c}from"./index-gWY0u-sb.js";import{u}from"./index-WbphDl_j.js";import{T as g}from"./text-Kd5_YHaX.js";import{B as f}from"./button-vw3_AT4f.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-yYnGGCem.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-5-ma296Y.js";import"./theme-provider-Wsw433nP.js";import"./use-ripple-oUvMmrsO.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-ONtTX0Ck.js";import"./loading-JdMW4dxy.js";import"./index-dINoAjpC.js";import"./index-ndgh9KrK.js";import"./index-i3K_3DZd.js";import"./icon-h0N_MwdT.js";const _={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:m}]=c(),[n,a]=u();return l(p,{children:[o(g,{children:JSON.stringify(a)}),o(f,{ref:n,onClick:m,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const [ref, rect] = useResizeObserver<HTMLButtonElement>();
  return <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button ref={ref} onClick={toggle} w={flg ? "xl" : "sm"} h={flg ? "xl" : "sm"}>
        Click me to toggle the boolean value
      </Button>
    </>;
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const L=["basic"];export{L as __namedExportsOrder,e as basic,_ as default};
