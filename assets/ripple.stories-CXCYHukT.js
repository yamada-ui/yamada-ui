import{bQ as u,j as o,T as m,bR as x}from"./iframe-D_HYglKf.js";import{B as s}from"./box-Dq_m1DJN.js";import"./preload-helper-C1FmrZbK.js";const C={component:s,title:"Components / Ripple"},e=()=>{const{onClick:t,...r}=u();return o.jsxs(s,{as:"button",type:"button",bg:"mono",color:"mono.contrast",h:"10",overflow:"hidden",position:"relative",px:"md",rounded:"l2",onClick:t,children:[o.jsx(m,{children:"Button"}),o.jsx(x,{...r})]})},n=()=>{const{onClick:t,...r}=u();return o.jsxs(s,{as:"button",type:"button",bg:"mono",color:"mono.contrast",h:"10",overflow:"hidden",position:"relative",px:"md",rounded:"l2",onClick:t,children:[o.jsx(m,{children:"Button"}),o.jsx(x,{...r,disabled:!0})]})};var p,i,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    onClick,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="mono" color="mono.contrast" h="10" overflow="hidden" position="relative" px="md" rounded="l2" onClick={onClick}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var a,c,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    onClick,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="mono" color="mono.contrast" h="10" overflow="hidden" position="relative" px="md" rounded="l2" onClick={onClick}>
      <Text>Button</Text>

      <Ripple {...rippleProps} disabled />
    </Box>;
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const R=["Basic","Disabled"];export{e as Basic,n as Disabled,R as __namedExportsOrder,C as default};
