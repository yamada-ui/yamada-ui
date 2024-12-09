import{j as o}from"./jsx-runtime-CfatFE5O.js";import{u,R as c}from"./use-ripple-DvgegkL5.js";import{B as i}from"./box-C9iD9jp7.js";import{T as x}from"./text-Q2VnSl4h.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CIS69Ejq.js";import"./proxy-Cmv22F1b.js";import"./factory-g1ZPYqox.js";import"./factory-ZSnRp-09.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-Bj6hwx_Q.js";import"./theme-provider-B08WIPTu.js";const E={component:i,title:"Components / Other / Ripple"},r=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",bg:"primary",color:"white",overflow:"hidden",p:"md",position:"relative",rounded:"md",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n})]})},e=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",bg:"primary",color:"white",overflow:"hidden",p:"md",position:"relative",rounded:"md",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n,disabled:!0})]})};var p,s,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="primary" color="white" overflow="hidden" p="md" position="relative" rounded="md" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var d,m,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" bg="primary" color="white" overflow="hidden" p="md" position="relative" rounded="md" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} disabled />
    </Box>;
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const I=["basic","withIsDisabled"];export{I as __namedExportsOrder,r as basic,E as default,e as withIsDisabled};
