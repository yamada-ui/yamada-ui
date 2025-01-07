import{j as i}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as d}from"./use-css-0ZSHo6c7.js";import{B as p}from"./box-Ch0hVi2V.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-D0ba2aB7.js";const h={title:"Hooks / useCSS"},s=()=>{const o=d({bg:"primary",color:"white",p:"md",rounded:"md"});return i.jsx(p,{className:o,children:"Box"})},r=()=>{const o=l.useMemo(()=>({bg:"primary",color:"white",p:"md",rounded:"md"}),[]),u=d(o);return i.jsx(p,{className:u,children:"Box"})};var e,a,m;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const className = useCSS({
    bg: "primary",
    color: "white",
    p: "md",
    rounded: "md"
  });
  return <Box className={className}>Box</Box>;
}`,...(m=(a=s.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var t,n,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const css = useMemo(() => ({
    bg: "primary",
    color: "white",
    p: "md",
    rounded: "md"
  }), []);
  const className = useCSS(css);
  return <Box className={className}>Box</Box>;
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const f=["basic","memoization"];export{f as __namedExportsOrder,s as basic,h as default,r as memoization};
