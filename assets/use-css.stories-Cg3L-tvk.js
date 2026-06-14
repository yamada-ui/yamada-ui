import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Ev as n,Fl as r,Pl as i,dv as a,uv as o,yy as s}from"./iframe-4z85howq.js";var c,l,u,d,f,p;t((()=>{c=e(s(),1),i(),o(),l=n(),u={title:`Hooks / useCSS`},d=()=>(0,l.jsx)(r,{className:a({bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`md`}),children:`Box`}),f=()=>(0,l.jsx)(r,{className:a((0,c.useMemo)(()=>({bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`md`}),[])),children:`Box`}),d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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