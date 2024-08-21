import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{u as p}from"./index-Du0-7Fls.js";import{T as c}from"./text-B1bw_vjj.js";import{B as g}from"./button-DkZfvcgr.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-DhC_P_n8.js";import"./factory-R2Y4PRbz.js";import"./extends-CF3RwP-h.js";import"./theme-provider-DgHPuWDh.js";import"./use-ripple-07NCTLKG.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-Dpi5adfX.js";import"./loading-CS9bmOQf.js";import"./icon-Cag4izmS.js";import"./index-8JqQBj0s.js";const _={title:"Hooks / useBoolean"},e=()=>{const[r,{toggle:n}]=p();return o.jsxs(o.Fragment,{children:[o.jsxs(c,{children:["state: ",String(r)]}),o.jsx(g,{onClick:n,children:"Click me to toggle the boolean value"})]})},t=()=>{const[r,{on:n,off:f}]=p();return o.jsx(c,{w:"full",onMouseEnter:n,onMouseLeave:f,children:r?"I am hovered":"Put mouse over me please"})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [flg, {
    on,
    off
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const F=["basic","useOnOff"];export{F as __namedExportsOrder,e as basic,_ as default,t as useOnOff};
