import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Gp as n,Ms as r,Ns as i,Wm as a,Wp as o,im as s}from"./iframe-B8XBG3U5.js";var c,l,u,d,f,p;e((()=>{c=t(a(),1),r(),o(),l=s(),u={title:`Hooks / useCSS`},d=()=>(0,l.jsx)(i,{className:n({bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`md`}),children:`Box`}),f=()=>(0,l.jsx)(i,{className:n((0,c.useMemo)(()=>({bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`md`}),[])),children:`Box`}),d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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