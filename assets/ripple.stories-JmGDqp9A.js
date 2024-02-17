import{a as u,j as e}from"./jsx-runtime-5BUNAZ9W.js";import{u as c,R as b}from"./use-ripple-u7crcLVz.js";import{B as i}from"./box-er03aWxy.js";import{T as w}from"./text-KdXH1h6O.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-1HlxJrnU.js";import"./forward-ref-A-8Arhkk.js";import"./factory-RXTd6Ype.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./use-component-style-ur23iJdL.js";import"./theme-provider-sgFj2JQg.js";const S={title:"Components / Other / Ripple",component:i},o=()=>{const{onPointerDown:t,...n}=c();return u(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[e(w,{children:"Button"}),e(b,{...n})]})},r=()=>{const{onPointerDown:t,...n}=c();return u(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[e(w,{children:"Button"}),e(b,{...n,isDisabled:!0})]})};var p,s,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
