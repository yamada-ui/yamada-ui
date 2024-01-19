import{a as m,j as r}from"./jsx-runtime-5BUNAZ9W.js";import{u as a,R as d}from"./use-ripple--RYc3gC9.js";import{B as p}from"./box-0KuW7_iA.js";import{T as l}from"./text-3Ui1tvgC.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-LsoKV39r.js";import"./forward-ref-A-8Arhkk.js";import"./factory-cZuM5uc7.js";import"./use-component-style-UguhvTUx.js";import"./theme-provider-YeTkYVXb.js";const T={title:"Components / Other / Ripple",component:p},o=()=>{const{onPointerDown:i,...s}=a();return m(p,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:i,children:[r(l,{children:"Button"}),r(d,{...s})]})};var t,e,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const g=["basic"];export{g as __namedExportsOrder,o as basic,T as default};
