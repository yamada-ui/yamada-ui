import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-wFqrq6bG.js";import{t as r}from"./text-hCwie9gl.js";import{i,r as a,t as o}from"./ripple-CSDlnofJ.js";import{Fl as s,Pl as c}from"./iframe-DeULREvG.js";var l,u,d,f,p;e((()=>{c(),r(),o(),l=t(),u={component:s,title:`Components / Ripple`},d=()=>{let{onClick:e,...t}=a();return(0,l.jsxs)(s,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,l.jsx)(n,{children:`Button`}),(0,l.jsx)(i,{...t})]})},f=()=>{let{onClick:e,...t}=a();return(0,l.jsxs)(s,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,l.jsx)(n,{children:`Button`}),(0,l.jsx)(i,{...t,disabled:!0})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    onClick,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="mono" color="mono.contrast" h="10" overflow="hidden" position="relative" px="md" rounded="l2" onClick={onClick}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    onClick,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="mono" color="mono.contrast" h="10" overflow="hidden" position="relative" px="md" rounded="l2" onClick={onClick}>
      <Text>Button</Text>

      <Ripple {...rippleProps} disabled />
    </Box>;
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`Disabled`]}))();export{d as Basic,f as Disabled,p as __namedExportsOrder,u as default};