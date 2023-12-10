import{a as l,F as p,j as o}from"./jsx-runtime-TtYKBvr-.js";import{u as c}from"./index-gWY0u-sb.js";import{u}from"./index-3NM3HJv2.js";import{T as g}from"./text-HhFMRBG-.js";import{B as f}from"./button-Qh4ZXxa_.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-BpP3TutA.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-cxLt7Ns7.js";import"./theme-provider-RZopMVJP.js";import"./use-ripple-XZ8Hx3Ay.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-SXgmxp4L.js";import"./loading-An8bmO0F.js";import"./index-3Y8obiWq.js";import"./index-c2grodQ_.js";import"./index-spaFW0BD.js";import"./icon-C1O_Nmpw.js";const _={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:m}]=c(),[n,a]=u();return l(p,{children:[o(g,{children:JSON.stringify(a)}),o(f,{ref:n,onClick:m,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
