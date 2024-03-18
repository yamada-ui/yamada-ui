import{a as u,j as e}from"./jsx-runtime-2xDJh5tt.js";import{u as c,R as b}from"./use-ripple-Df_aFKka.js";import{B as i}from"./box-YqUOaFa2.js";import{T as w}from"./text-D-2-8y30.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CIylrsRE.js";import"./forward-ref-DuAegr0M.js";import"./factory-DLpD49Xl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./use-component-style-D9HuanlY.js";import"./theme-provider-DXhTM26K.js";const S={title:"Components / Other / Ripple",component:i},o=()=>{const{onPointerDown:t,...n}=c();return u(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[e(w,{children:"Button"}),e(b,{...n})]})},r=()=>{const{onPointerDown:t,...n}=c();return u(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[e(w,{children:"Button"}),e(b,{...n,isDisabled:!0})]})};var p,s,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
