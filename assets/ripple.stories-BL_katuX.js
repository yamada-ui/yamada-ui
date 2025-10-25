import{bP as p,j as o,T as i,bQ as l}from"./iframe-5QspZtQ-.js";import{B as s}from"./box--AjZ-gTJ.js";import"./preload-helper-PPVm8Dsz.js";const u={component:s,title:"Components / Ripple"},e=()=>{const{onClick:t,...r}=p();return o.jsxs(s,{as:"button",type:"button",bg:"mono",color:"mono.contrast",h:"10",overflow:"hidden",position:"relative",px:"md",rounded:"l2",onClick:t,children:[o.jsx(i,{children:"Button"}),o.jsx(l,{...r})]})},n=()=>{const{onClick:t,...r}=p();return o.jsxs(s,{as:"button",type:"button",bg:"mono",color:"mono.contrast",h:"10",overflow:"hidden",position:"relative",px:"md",rounded:"l2",onClick:t,children:[o.jsx(i,{children:"Button"}),o.jsx(l,{...r,disabled:!0})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const m=["Basic","Disabled"];export{e as Basic,n as Disabled,m as __namedExportsOrder,u as default};
