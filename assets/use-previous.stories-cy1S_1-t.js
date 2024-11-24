import{j as o}from"./jsx-runtime-CfatFE5O.js";import{u as p}from"./index-gGKStiao.js";import{u as a}from"./index-ZUM2VoAh.js";import{T as l}from"./text-CIX2g0cs.js";import{B as g}from"./button-vnBqyEiG.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-BGLOU3Ga.js";import"./factory-Cp1Ju9mN.js";import"./theme-provider-DMHFYkuw.js";import"./use-ripple-SSdhQaN8.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-CYGsRDnQ.js";import"./loading-DkRHwhPr.js";import"./icon-Ch8QFxk9.js";import"./use-var-cHPN6Ir7.js";const H={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
