import{a as m,j as r}from"./jsx-runtime-5BUNAZ9W.js";import{u as a,R as d}from"./use-ripple-X0fM5X0u.js";import{B as p}from"./box-UMGsOCaH.js";import{T as l}from"./text-3hpqDbhU.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-z0k3I5F3.js";import"./forward-ref-A-8Arhkk.js";import"./factory-Ddmu4EkR.js";import"./use-component-style-zqeBCG90.js";import"./theme-provider-ePNg-PER.js";const T={title:"Components / Other / Ripple",component:p},o=()=>{const{onPointerDown:i,...s}=a();return m(p,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:i,children:[r(l,{children:"Button"}),r(d,{...s})]})};var t,e,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const g=["basic"];export{g as __namedExportsOrder,o as basic,T as default};
