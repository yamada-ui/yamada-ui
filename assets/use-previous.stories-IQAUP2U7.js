import{j as o}from"./jsx-runtime-BpbtHYHY.js";import{u as p}from"./index-Cdjsi7Fd.js";import{u as a}from"./index-qZwaV1-B.js";import{T as l}from"./text-DKjBQKmK.js";import{B as g}from"./button-CqSjNDtY.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-CpB_lyT3.js";import"./factory-DbNU74ts.js";import"./theme-provider-ChqdwXGn.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";const H={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=a(),m=p(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
