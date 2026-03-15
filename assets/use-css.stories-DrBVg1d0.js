import{j as e,r as m}from"./iframe-BYxWTAfU.js";import{u as n}from"./use-css-uFcrR-rG.js";import{B as a}from"./box-BFXVRkYm.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Hooks / useCSS"},o=()=>{const r=n({bg:"mono",color:"mono.contrast",p:"md",rounded:"md"});return e.jsx(a,{className:r,children:"Box"})},s=()=>{const r=m.useMemo(()=>({bg:"mono",color:"mono.contrast",p:"md",rounded:"md"}),[]),c=n(r);return e.jsx(a,{className:c,children:"Box"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const className = useCSS({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  });
  return <Box className={className}>Box</Box>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const css = useMemo(() => ({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  }), []);
  const className = useCSS(css);
  return <Box className={className}>Box</Box>;
}`,...s.parameters?.docs?.source}}};const l=["Basic","Memoization"];export{o as Basic,s as Memoization,l as __namedExportsOrder,i as default};
