import{i as e}from"./preload-helper-usAeo7Bx.js";import{$d as t,Dv as n,Fl as r,Il as i,Qd as a,Rf as o,Xd as s,zf as c}from"./iframe-9OFoenoS.js";var l,u,d,f,p;e((()=>{r(),o(),s(),l=n(),u={component:i,title:`Components / Ripple`},d=()=>{let{onClick:e,...n}=a();return(0,l.jsxs)(i,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,l.jsx)(c,{children:`Button`}),(0,l.jsx)(t,{...n})]})},f=()=>{let{onClick:e,...n}=a();return(0,l.jsxs)(i,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,l.jsx)(c,{children:`Button`}),(0,l.jsx)(t,{...n,disabled:!0})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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