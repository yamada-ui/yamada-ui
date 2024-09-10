import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-Du0-7Fls.js";import{u as a}from"./index-myp615oj.js";import{T as l}from"./text-C5tpoCpM.js";import{B as g}from"./button-CaNlM53L.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DKTvpK5d.js";import"./use-component-style-BLXFHnsW.js";import"./factory-DIvfNQLw.js";import"./extends-CF3RwP-h.js";import"./theme-provider-8-IaQrJV.js";import"./use-ripple-sRmjwWlS.js";import"./factory-DY7K8SpK.js";import"./motion-Bd6WkMzw.js";import"./loading-_68QapUp.js";import"./icon-Bon_IeHI.js";import"./index-BpAeq05e.js";const H={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
