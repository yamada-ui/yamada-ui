import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-Du0-7Fls.js";import{u as a}from"./index-myp615oj.js";import{T as l}from"./text-B1bw_vjj.js";import{B as g}from"./button-DkZfvcgr.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-DhC_P_n8.js";import"./factory-R2Y4PRbz.js";import"./extends-CF3RwP-h.js";import"./theme-provider-DgHPuWDh.js";import"./use-ripple-07NCTLKG.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-Dpi5adfX.js";import"./loading-CS9bmOQf.js";import"./icon-Cag4izmS.js";import"./index-8JqQBj0s.js";const O={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
