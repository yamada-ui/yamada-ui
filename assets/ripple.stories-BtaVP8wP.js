import{n as e}from"./chunk-zsgVPwQN.js";import{Dl as t,Ms as n,Ns as r,Ol as i,im as a,iu as o,kl as s,ru as c}from"./iframe-ny1HWA6_.js";var l,u,d,f,p;e((()=>{n(),c(),t(),l=a(),u={component:r,title:`Components / Ripple`},d=()=>{let{onClick:e,...t}=i();return(0,l.jsxs)(r,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,l.jsx)(o,{children:`Button`}),(0,l.jsx)(s,{...t})]})},f=()=>{let{onClick:e,...t}=i();return(0,l.jsxs)(r,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,l.jsx)(o,{children:`Button`}),(0,l.jsx)(s,{...t,disabled:!0})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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