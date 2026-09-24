import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,r as i}from"./use-css-DDsXGbAo.js";import{n as a,t as o}from"./box-C47iDJeO.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=t(),a(),r(),c=n(),l={title:`Hooks / useCSS`},u=()=>{let e=i({bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`md`});return(0,c.jsx)(o,{className:e,children:`Box`})},d=()=>{let e=(0,s.useMemo)(()=>({bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`md`}),[]),t=i(e);return(0,c.jsx)(o,{className:t,children:`Box`})},f=[`Basic`,`Memoization`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const className = useCSS({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  });
  return <Box className={className}>Box</Box>;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const css = useMemo(() => ({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  }), []);
  const className = useCSS(css);
  return <Box className={className}>Box</Box>;
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Basic,d as Memoization,f as __namedExportsOrder,l as default};