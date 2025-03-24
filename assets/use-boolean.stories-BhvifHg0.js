import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{u as c}from"./index-qZwaV1-B.js";import{T as p}from"./text-clsxocLN.js";import{B as g}from"./button-Dm54j0EP.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-65RA3nVD.js";import"./factory-B_KMcXyW.js";import"./theme-provider-DGyR61Aa.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./loading-C3oE1vJx.js";import"./icon-DIzRaLo1.js";import"./use-var-Tj-aA0qb.js";const P={title:"Hooks / useBoolean"},o=()=>{const[r,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:["state: ",String(r)]}),e.jsx(g,{onClick:n,children:"Click me to toggle the boolean value"})]})},t=()=>{const[r,{off:n,on:f}]=c();return e.jsx(p,{w:"full",onMouseEnter:f,onMouseLeave:n,children:r?"I am hovered":"Put mouse over me please"})};var s,a,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [flg, {
    off,
    on
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const _=["basic","useOnOff"];export{_ as __namedExportsOrder,o as basic,P as default,t as useOnOff};
