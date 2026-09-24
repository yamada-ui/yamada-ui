import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-DgylnHKd.js";import{_ as r,g as i}from"./core-zvV4jsAK.js";import{t as a}from"./jsx-runtime-BBQGix-2.js";import{Al as o,kl as s}from"./iframe-JqStoggy.js";var c,l,u,d,f,p;t((()=>{c=e(n(),1),s(),i(),l=a(),u={title:`Hooks / useCSS`},d=()=>(0,l.jsx)(o,{className:r({bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`md`}),children:`Box`}),f=()=>(0,l.jsx)(o,{className:r((0,c.useMemo)(()=>({bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`md`}),[])),children:`Box`}),p=[`Basic`,`Memoization`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}}}))();export{d as Basic,f as Memoization,p as __namedExportsOrder,u as default};