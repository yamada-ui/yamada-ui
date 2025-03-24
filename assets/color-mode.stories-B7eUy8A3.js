import{j as o}from"./jsx-runtime-BpbtHYHY.js";import{C as T}from"./calendar-BxjAMc25.js";import{P as a,a9 as s}from"./factory-B_KMcXyW.js";import{B as b}from"./box-B5b1ezDi.js";import{T as g}from"./text-clsxocLN.js";import{B}from"./button-Dm54j0EP.js";import{T as C}from"./tag-ec1XZ_xP.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLOQPSsO.js";import"./i18n-provider-D_kv1vSA.js";import"./theme-provider-DGyR61Aa.js";import"./icon-DIzRaLo1.js";import"./use-component-style-65RA3nVD.js";import"./use-var-Tj-aA0qb.js";import"./forward-ref-Ukjd1cIW.js";import"./icon-button-DgceULQS.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./loading-C3oE1vJx.js";import"./index-tjcNNcsH.js";import"./index-HHw4H1QN.js";const Q={title:"System / Styles / Color Mode"},t=()=>{const{colorMode:r}=a();return o.jsxs(b,{bg:["blackAlpha.800","whiteAlpha.800"],color:["whiteAlpha.800","blackAlpha.800"],p:"md",rounded:"md",transitionDuration:"normal",transitionProperty:"all",children:['The current colorMode is "',r,'"']})},e=()=>{const{colorMode:r}=a(),x=s("blackAlpha.800","whiteAlpha.800"),A=s("whiteAlpha.800","blackAlpha.800");return o.jsxs(b,{bg:x,color:A,p:"md",rounded:"md",transitionDuration:"normal",transitionProperty:"all",children:['The current colorMode is "',r,'"']})},n=()=>{const{colorMode:r}=a();return o.jsxs(o.Fragment,{children:[o.jsxs(g,{children:['The current colorMode is "',r,'"']}),o.jsx(B,{variant:["solid","outline"],children:"Button"}),o.jsx(C,{variant:["solid","subtle"],children:"Tag"}),o.jsx(T,{variant:["solid","subtle"]})]})};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <Box bg={["blackAlpha.800", "whiteAlpha.800"]} color={["whiteAlpha.800", "blackAlpha.800"]} p="md" rounded="md" transitionDuration="normal" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  return <Box bg={bg} color={color} p="md" rounded="md" transitionDuration="normal" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,M;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <>
      <Text>The current colorMode is "{colorMode}"</Text>

      <Button variant={["solid", "outline"]}>Button</Button>

      <Tag variant={["solid", "subtle"]}>Tag</Tag>

      <Calendar variant={["solid", "subtle"]} />
    </>;
}`,...(M=(h=n.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const U=["basic","useHook","components"];export{U as __namedExportsOrder,t as basic,n as components,Q as default,e as useHook};
