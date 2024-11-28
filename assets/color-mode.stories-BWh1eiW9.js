import{j as o}from"./jsx-runtime-CfatFE5O.js";import{C as T}from"./calendar-B6Q8dTY7.js";import{O as a,a8 as s}from"./factory-Dfrbb1EY.js";import{B as b}from"./box-JOSxMso6.js";import{T as g}from"./text-ACfjY0cR.js";import{B}from"./button-3gvEA_m9.js";import{T as C}from"./tag-QSmx-Urc.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-De_nPH_B.js";import"./i18n-provider-BEOsEj1w.js";import"./theme-provider-DSx3k1bh.js";import"./icon-DDeGQYl6.js";import"./use-component-style-fOirb5M1.js";import"./use-var-BQS3JFPa.js";import"./forward-ref-D13m8o2p.js";import"./icon-button-jGL_DP59.js";import"./use-ripple-59xURXHY.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-DeSWW4o7.js";import"./loading-C7VoLX3j.js";import"./index-CgNA1xsw.js";import"./index-DqeO0dAp.js";const Q={title:"System / Styles / Color Mode"},t=()=>{const{colorMode:r}=a();return o.jsxs(b,{bg:["blackAlpha.800","whiteAlpha.800"],color:["whiteAlpha.800","blackAlpha.800"],p:"md",rounded:"md",transitionDuration:"normal",transitionProperty:"all",children:['The current colorMode is "',r,'"']})},e=()=>{const{colorMode:r}=a(),x=s("blackAlpha.800","whiteAlpha.800"),A=s("whiteAlpha.800","blackAlpha.800");return o.jsxs(b,{bg:x,color:A,p:"md",rounded:"md",transitionDuration:"normal",transitionProperty:"all",children:['The current colorMode is "',r,'"']})},n=()=>{const{colorMode:r}=a();return o.jsxs(o.Fragment,{children:[o.jsxs(g,{children:['The current colorMode is "',r,'"']}),o.jsx(B,{variant:["solid","outline"],children:"Button"}),o.jsx(C,{variant:["solid","subtle"],children:"Tag"}),o.jsx(T,{variant:["solid","subtle"]})]})};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
