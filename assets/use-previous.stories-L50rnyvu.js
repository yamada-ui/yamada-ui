import{j as e,F as m,a as l}from"./jsx-runtime-yA-pgArV.js";import{u as p}from"./index-gWY0u-sb.js";import{u as g}from"./index-X4SQYXzq.js";import{T as c}from"./text--Mf9pjVU.js";import{B as u}from"./button-9VUarSO2.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-6T0UNPU-.js";import"./use-component-style-KGYGTazl.js";import"./theme-provider-JJMfppNb.js";import"./factory-LMyrE5lk.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./loading-d5fto5LV.js";import"./index-Fmh4I4_s.js";import"./index-_Bu2kJOQ.js";import"./index-sG_FZBUS.js";import"./icon-U1tgplMe.js";const O={title:"Hooks / usePrevious"},o=()=>{const[t,{toggle:i}]=p(),a=g(t);return e(m,{children:[e(c,{children:["state: ",String(t),", prev: ",String(a??"none")]}),l(u,{onClick:i,children:"Click me to toggle the boolean value"})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const q=["basic"];export{q as __namedExportsOrder,o as basic,O as default};
