import{j as o}from"./jsx-runtime-CfatFE5O.js";import{u as p}from"./index-gGKStiao.js";import{u as a}from"./index-ZUM2VoAh.js";import{T as l}from"./text-BffdhSXQ.js";import{B as g}from"./button-BDTEGqqa.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-5HWcAXul.js";import"./factory-Db31n_eg.js";import"./theme-provider-C-TvIt_J.js";import"./use-ripple-shOr3g-0.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-BRZ9AYsk.js";import"./loading-BptEEwSR.js";import"./icon-BfxegGWg.js";import"./use-var-BbJRqi2C.js";const H={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const O=["basic"];export{O as __namedExportsOrder,t as basic,H as default};
