import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-Du0-7Fls.js";import{u as a}from"./index-myp615oj.js";import{T as l}from"./text-B7mQIKcl.js";import{B as g}from"./button-hJJyOv6z.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-Dz3o-zMC.js";import"./factory-QgPjGyGX.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./theme-provider-CJ7n5K3X.js";import"./use-ripple-BYp28iIh.js";import"./index-D53P4PVU.js";import"./motion-B93Hlbuy.js";import"./motion-TW7fLZQq.js";import"./loading-BANDzD4q.js";import"./icon-BzYp-3aP.js";import"./index-NB1UEv68.js";const O={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const R=["basic"];export{R as __namedExportsOrder,t as basic,O as default};
