import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./text-b2W5euYI.js";import{i,n as a,r as o,t as s}from"./use-ripple-DlQTk6oV.js";import{n as c,t as l}from"./box-C47iDJeO.js";var u,d,f,p,m;function h(){return(h=e((()=>{c(),n(),i(),s(),u=t(),d={component:l,title:`Components / Ripple`},f=()=>{let{onClick:e,...t}=a();return(0,u.jsxs)(l,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,u.jsx)(r,{children:`Button`}),(0,u.jsx)(o,{...t})]})},p=()=>{let{onClick:e,...t}=a();return(0,u.jsxs)(l,{as:`button`,type:`button`,bg:`mono`,color:`mono.contrast`,h:`10`,overflow:`hidden`,position:`relative`,px:`md`,rounded:`l2`,onClick:e,children:[(0,u.jsx)(r,{children:`Button`}),(0,u.jsx)(o,{...t,disabled:!0})]})},m=[`Basic`,`Disabled`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    onClick,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="mono" color="mono.contrast" h="10" overflow="hidden" position="relative" px="md" rounded="l2" onClick={onClick}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    onClick,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="mono" color="mono.contrast" h="10" overflow="hidden" position="relative" px="md" rounded="l2" onClick={onClick}>
      <Text>Button</Text>

      <Ripple {...rippleProps} disabled />
    </Box>;
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Basic,p as Disabled,m as __namedExportsOrder,d as default};