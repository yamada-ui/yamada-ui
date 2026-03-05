import{j as d,r as l}from"./iframe-C8QXMNnF.js";import{u}from"./use-css-C45Jc8ag.js";import{B as p}from"./box-Dzc6YqOT.js";import"./preload-helper-C1FmrZbK.js";const g={title:"Hooks / useCSS"},o=()=>{const r=u({bg:"mono",color:"mono.contrast",p:"md",rounded:"md"});return d.jsx(p,{className:r,children:"Box"})},s=()=>{const r=l.useMemo(()=>({bg:"mono",color:"mono.contrast",p:"md",rounded:"md"}),[]),i=u(r);return d.jsx(p,{className:i,children:"Box"})};var e,n,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const className = useCSS({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  });
  return <Box className={className}>Box</Box>;
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var c,m,t;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const css = useMemo(() => ({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  }), []);
  const className = useCSS(css);
  return <Box className={className}>Box</Box>;
}`,...(t=(m=s.parameters)==null?void 0:m.docs)==null?void 0:t.source}}};const b=["Basic","Memoization"];export{o as Basic,s as Memoization,b as __namedExportsOrder,g as default};
