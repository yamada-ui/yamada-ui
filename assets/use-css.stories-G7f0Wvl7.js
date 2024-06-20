import{j as i}from"./jsx-runtime-X2b_N9AH.js";import{r as l}from"./index-uCp2LrAq.js";import{u as d}from"./use-css-DDcDqxOK.js";import{B as p}from"./box-ANpItPfh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-Bf0a1C4O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";const f={title:"Hooks / useCSS"},s=()=>{const o=d({p:"md",rounded:"md",bg:"primary",color:"white"});return i.jsx(p,{className:o,children:"Box"})},r=()=>{const o=l.useMemo(()=>({p:"md",rounded:"md",bg:"primary",color:"white"}),[]),u=d(o);return i.jsx(p,{className:u,children:"Box"})};var e,a,m;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const className = useCSS({
    p: "md",
    rounded: "md",
    bg: "primary",
    color: "white"
  });
  return <Box className={className}>Box</Box>;
}`,...(m=(a=s.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var t,n,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const css = useMemo(() => ({
    p: "md",
    rounded: "md",
    bg: "primary",
    color: "white"
  }), []);
  const className = useCSS(css);
  return <Box className={className}>Box</Box>;
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const j=["basic","memoization"];export{j as __namedExportsOrder,s as basic,f as default,r as memoization};
