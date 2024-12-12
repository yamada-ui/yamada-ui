import{j as o}from"./jsx-runtime-CfatFE5O.js";import{u as p}from"./index-ZUM2VoAh.js";import{u as a}from"./index-gGKStiao.js";import{T as l}from"./text-62Futka0.js";import{B as g}from"./button-CCbGPPx6.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-DXYrx7jC.js";import"./factory-Nur_zO5a.js";import"./theme-provider-BsBO7Bt7.js";import"./use-ripple-D3zgM-CO.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./factory-C7oui4wX.js";import"./loading-Bz0vGPrC.js";import"./icon-M07mMfJs.js";import"./use-var-BmU0CMcq.js";const H={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=a(),m=p(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
