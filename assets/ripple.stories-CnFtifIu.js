import{j as o}from"./extends-CwFRzn3r.js";import{u,R as c}from"./use-ripple-ug6Wud9C.js";import{B as i}from"./box-CJbYVqkD.js";import{T as x}from"./text-DR0EVEsm.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./factory-CYpx3TMG.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-CfUS8Ki1.js";import"./theme-provider-BZKkW4ID.js";const T={title:"Components / Other / Ripple",component:i},r=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n})]})},e=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n,isDisabled:!0})]})};var p,s,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var d,m,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} isDisabled />
    </Box>;
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const E=["basic","withIsDisabled"];export{E as __namedExportsOrder,r as basic,T as default,e as withIsDisabled};
