import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-Du0-7Fls.js";import{u as a}from"./index-myp615oj.js";import{T as l}from"./text-YMGHmnkp.js";import{B as g}from"./button-aTmEgxiZ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-CSU0rxou.js";import"./factory-Bw4mCpcs.js";import"./extends-CF3RwP-h.js";import"./theme-provider-Bt6-FvIL.js";import"./use-ripple-D1HcDDVg.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-BETOZcSS.js";import"./loading-B6ZCC3uy.js";import"./icon-CbMgljC8.js";import"./index-CouAGdSP.js";const O={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
