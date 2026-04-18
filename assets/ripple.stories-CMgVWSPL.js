import{n as e}from"./chunk-zsgVPwQN.js";import{Al as t,Fs as n,Ps as r,au as i,jl as a,kl as o,ou as s,sm as c}from"./iframe-CHoZGzMw.js";var l,u,d,f,p;e((()=>{r(),i(),o(),l=c(),u={component:n,title:`Components / Ripple`},d=()=>{let{onClick:e,...r}=t();return(0,l.jsxs)(n,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,l.jsx)(s,{children:`Button`}),(0,l.jsx)(a,{...r})]})},f=()=>{let{onClick:e,...r}=t();return(0,l.jsxs)(n,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,l.jsx)(s,{children:`Button`}),(0,l.jsx)(a,{...r,disabled:!0})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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