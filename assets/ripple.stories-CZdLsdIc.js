import{j as o}from"./jsx-runtime-BpbtHYHY.js";import{u,R as c}from"./use-ripple-DqSHYmP8.js";import{B as i}from"./box-B5b1ezDi.js";import{T as x}from"./text-clsxocLN.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./factory-B_KMcXyW.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-65RA3nVD.js";import"./theme-provider-DGyR61Aa.js";const E={component:i,title:"Components / Other / Ripple"},r=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",bg:"primary",color:"white",overflow:"hidden",p:"md",position:"relative",rounded:"md",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n})]})},e=()=>{const{onPointerDown:t,...n}=u();return o.jsxs(i,{as:"button",type:"button",bg:"primary",color:"white",overflow:"hidden",p:"md",position:"relative",rounded:"md",onPointerDown:t,children:[o.jsx(x,{children:"Button"}),o.jsx(c,{...n,disabled:!0})]})};var p,s,a;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
