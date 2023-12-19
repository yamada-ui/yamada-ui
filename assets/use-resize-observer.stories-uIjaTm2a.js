import{a as l,F as p,j as o}from"./jsx-runtime-TtYKBvr-.js";import{u as c}from"./index-gWY0u-sb.js";import{u}from"./index-6ZQmECTf.js";import{T as g}from"./text-dQvy8j4x.js";import{B as f}from"./button-FPtidzDX.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-LHs-Bkmb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-eqg6O7Tm.js";import"./theme-provider-AD5gKQ6i.js";import"./use-ripple-cz0_rK7P.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-HWUA2jNq.js";import"./loading-t4SoIc4G.js";import"./index-S2htefC9.js";import"./index-OsV4SKtw.js";import"./index-Z94ctYOZ.js";import"./icon-lGxzm-PJ.js";const _={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:m}]=c(),[n,a]=u();return l(p,{children:[o(g,{children:JSON.stringify(a)}),o(f,{ref:n,onClick:m,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
