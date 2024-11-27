import{j as o}from"./jsx-runtime-CfatFE5O.js";import{u as p}from"./index-gGKStiao.js";import{u as a}from"./index-ZUM2VoAh.js";import{T as l}from"./text-DxpipBZv.js";import{B as g}from"./button-CN2eQqjg.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-PhZ538dD.js";import"./factory-CehSyZ2b.js";import"./theme-provider-BOnS9RWG.js";import"./use-ripple-lPfPkpPL.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-C8sDf1Q7.js";import"./loading-J7FyZR17.js";import"./icon-Tcjn8UpA.js";import"./use-var-C7Dt5UAR.js";const H={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
