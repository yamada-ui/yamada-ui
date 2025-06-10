import{j as o}from"./jsx-runtime-DztICxWZ.js";import{u,R as c}from"./use-ripple-Vo7SgDWD.js";import{B as i}from"./box-Ds8SIjx6.js";import{T as x}from"./text-KN7rBBtq.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./factory-7Z88KRtK.js";import"./forward-ref-DH6f5tnY.js";import"./use-component-style-DHLtMqa5.js";import"./theme-provider-DsbwOWxu.js";const E={component:i,title:"Components / Other / Ripple"},r=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",bg:"primary",color:"white",overflow:"hidden",p:"md",position:"relative",rounded:"md",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n})]})},e=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",bg:"primary",color:"white",overflow:"hidden",p:"md",position:"relative",rounded:"md",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n,disabled:!0})]})};var p,s,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const O=["basic","disabled"];export{O as __namedExportsOrder,r as basic,E as default,e as disabled};
