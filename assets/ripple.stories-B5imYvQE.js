import{j as o}from"./jsx-runtime-CfatFE5O.js";import{u,R as c}from"./use-ripple-SSdhQaN8.js";import{B as i}from"./box-C6uIdwxO.js";import{T as x}from"./text-CIX2g0cs.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-CYGsRDnQ.js";import"./factory-Cp1Ju9mN.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-BGLOU3Ga.js";import"./theme-provider-DMHFYkuw.js";const E={component:i,title:"Components / Other / Ripple"},r=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",bg:"primary",color:"white",overflow:"hidden",p:"md",position:"relative",rounded:"md",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n})]})},e=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",bg:"primary",color:"white",overflow:"hidden",p:"md",position:"relative",rounded:"md",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n,isDisabled:!0})]})};var p,s,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="primary" color="white" overflow="hidden" p="md" position="relative" rounded="md" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var m,d,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="primary" color="white" overflow="hidden" p="md" position="relative" rounded="md" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} isDisabled />
    </Box>;
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const I=["basic","withIsDisabled"];export{I as __namedExportsOrder,r as basic,E as default,e as withIsDisabled};