import{a as u,j as e}from"./jsx-runtime-TtYKBvr-.js";import{u as c,R as b}from"./use-ripple-tuvEI28x.js";import{B as i}from"./box-aVe7Qm1R.js";import{T as w}from"./text-pQ1s1BAG.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-dKw0visz.js";import"./motion-RGBG165B.js";import"./motion-YDUrcbbR.js";import"./forward-ref-6T0UNPU-.js";import"./factory-APG2CWDq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./use-component-style-XlqdEMGL.js";import"./theme-provider-rjxHA_Gz.js";const S={title:"Components / Other / Ripple",component:i},o=()=>{const{onPointerDown:t,...n}=c();return u(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[e(w,{children:"Button"}),e(b,{...n})]})},r=()=>{const{onPointerDown:t,...n}=c();return u(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[e(w,{children:"Button"}),e(b,{...n,isDisabled:!0})]})};var p,s,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} isDisabled />
    </Box>;
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const _=["basic","withIsDisabled"];export{_ as __namedExportsOrder,o as basic,S as default,r as withIsDisabled};
