import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{f as r,p as i}from"./core-C7NnSGLR.js";import{t as a}from"./jsx-runtime-D_578c1K.js";import{t as o}from"./box-D_8v7EGt.js";import{Fo as s}from"./iframe-BgKbVVkz.js";var c,l,u,d,f,p;e((()=>{c=t(n(),1),s(),r(),l=a(),u={title:`Hooks / useCSS`},d=()=>(0,l.jsx)(o,{className:i({bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`md`}),children:`Box`}),f=()=>(0,l.jsx)(o,{className:i((0,c.useMemo)(()=>({bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`md`}),[])),children:`Box`}),d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const className = useCSS({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  });
  return <Box className={className}>Box</Box>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const css = useMemo(() => ({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  }), []);
  const className = useCSS(css);
  return <Box className={className}>Box</Box>;
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`Memoization`]}))();export{d as Basic,f as Memoization,p as __namedExportsOrder,u as default};