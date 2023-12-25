import{a as m,j as r}from"./jsx-runtime-TtYKBvr-.js";import{u as a,R as d}from"./use-ripple-WyPsLtJa.js";import{B as p}from"./box-pVcTpmUt.js";import{T as l}from"./text-Ir_nN7z7.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-IA6mdqBG.js";import"./forward-ref-6T0UNPU-.js";import"./factory-K2EgzEzN.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./use-component-style-SBdvRTzg.js";import"./theme-provider-WG22_9xQ.js";const g={title:"Components / Other / Ripple",component:p},o=()=>{const{onPointerDown:i,...s}=a();return m(p,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:i,children:[r(l,{children:"Button"}),r(d,{...s})]})};var t,e,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const j=["basic"];export{j as __namedExportsOrder,o as basic,g as default};
