import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{u,R as c}from"./use-ripple-BYp28iIh.js";import{B as i}from"./box-BrhSB_Fu.js";import{T as x}from"./text-B7mQIKcl.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D53P4PVU.js";import"./motion-B93Hlbuy.js";import"./motion-TW7fLZQq.js";import"./forward-ref-BmTAT9U5.js";import"./factory-QgPjGyGX.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./use-component-style-Dz3o-zMC.js";import"./theme-provider-CJ7n5K3X.js";const I={title:"Components / Other / Ripple",component:i},r=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n})]})},e=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n,isDisabled:!0})]})};var p,s,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var m,d,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} isDisabled />
    </Box>;
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const O=["basic","withIsDisabled"];export{O as __namedExportsOrder,r as basic,I as default,e as withIsDisabled};
