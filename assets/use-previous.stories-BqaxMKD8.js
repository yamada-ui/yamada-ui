import{j as o}from"./extends-CwFRzn3r.js";import{u as p}from"./index-CoJrGj-T.js";import{u as a}from"./index-myp615oj.js";import{T as l}from"./text-DSnzXlBX.js";import{B as g}from"./button-BEXyR-Sf.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-Givb0biW.js";import"./factory-CBW6YcbY.js";import"./theme-provider-B8NHi_rL.js";import"./use-ripple-BqSD0U-m.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-B6ZnNkK9.js";import"./loading-DEEkIiUz.js";import"./icon-CQ7oKYSm.js";import"./use-var-BcRMoVLh.js";const H={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
