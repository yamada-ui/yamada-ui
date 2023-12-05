import{j as l,F as c,a as o}from"./jsx-runtime-yA-pgArV.js";import{u as p}from"./index-gWY0u-sb.js";import{u}from"./index-qqColMwJ.js";import{T as g}from"./text--Mf9pjVU.js";import{B as f}from"./button-9VUarSO2.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-LMyrE5lk.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-KGYGTazl.js";import"./theme-provider-JJMfppNb.js";import"./loading-d5fto5LV.js";import"./index-Fmh4I4_s.js";import"./index-_Bu2kJOQ.js";import"./index-sG_FZBUS.js";import"./icon-U1tgplMe.js";const F={title:"Hooks / useResizeObserver"},e=()=>{const[t,{toggle:i}]=p(),[m,a]=u();return l(c,{children:[o(g,{children:JSON.stringify(a)}),o(f,{ref:m,onClick:i,w:t?"xl":"sm",h:t?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const H=["basic"];export{H as __namedExportsOrder,e as basic,F as default};
