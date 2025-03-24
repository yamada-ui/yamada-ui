import{j as o}from"./jsx-runtime-BpbtHYHY.js";import{u as p}from"./index-Cdjsi7Fd.js";import{u as a}from"./index-qZwaV1-B.js";import{T as l}from"./text-clsxocLN.js";import{B as g}from"./button-Dm54j0EP.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-65RA3nVD.js";import"./factory-B_KMcXyW.js";import"./theme-provider-DGyR61Aa.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./loading-C3oE1vJx.js";import"./icon-DIzRaLo1.js";import"./use-var-Tj-aA0qb.js";const H={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=a(),m=p(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
