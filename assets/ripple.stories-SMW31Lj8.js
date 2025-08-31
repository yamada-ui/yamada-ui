import{j as o,T as p}from"./iframe-COpE3uSe.js";import{B as s}from"./box-D7U2gjmM.js";import{u as i,R as l}from"./use-ripple-dUKU3i3-.js";import"./preload-helper-D9Z9MdNV.js";const m={component:s,title:"Components / Ripple"},e=()=>{const{onClick:t,...r}=i();return o.jsxs(s,{as:"button",type:"button",bg:"mono",color:"mono.contrast",h:"10",overflow:"hidden",position:"relative",px:"md",rounded:"l2",onClick:t,children:[o.jsx(p,{children:"Button"}),o.jsx(l,{...r})]})},n=()=>{const{onClick:t,...r}=i();return o.jsxs(s,{as:"button",type:"button",bg:"mono",color:"mono.contrast",h:"10",overflow:"hidden",position:"relative",px:"md",rounded:"l2",onClick:t,children:[o.jsx(p,{children:"Button"}),o.jsx(l,{...r,disabled:!0})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    onClick,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="mono" color="mono.contrast" h="10" overflow="hidden" position="relative" px="md" rounded="l2" onClick={onClick}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    onClick,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="mono" color="mono.contrast" h="10" overflow="hidden" position="relative" px="md" rounded="l2" onClick={onClick}>
      <Text>Button</Text>

      <Ripple {...rippleProps} disabled />
    </Box>;
}`,...n.parameters?.docs?.source}}};const x=["Basic","Disabled"];export{e as Basic,n as Disabled,x as __namedExportsOrder,m as default};
