import{n as e}from"./chunk-zsgVPwQN.js";import{Du as t,Eu as n,Fl as r,Il as i,Pl as a,ds as o,pp as s,us as c}from"./iframe-a-xI_IFE.js";var l,u,d,f,p;e((()=>{c(),n(),a(),l=s(),u={component:o,title:`Components / Ripple`},d=()=>{let{onClick:e,...n}=r();return(0,l.jsxs)(o,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,l.jsx)(t,{children:`Button`}),(0,l.jsx)(i,{...n})]})},f=()=>{let{onClick:e,...n}=r();return(0,l.jsxs)(o,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,l.jsx)(t,{children:`Button`}),(0,l.jsx)(i,{...n,disabled:!0})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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