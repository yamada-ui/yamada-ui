import{j as o}from"./jsx-runtime-CfatFE5O.js";import{C as T}from"./calendar-C9DE7MAI.js";import{O as a,a8 as s}from"./factory-Nur_zO5a.js";import{B as b}from"./box-D-QJtIN2.js";import{T as g}from"./text-62Futka0.js";import{B}from"./button-CCbGPPx6.js";import{T as C}from"./tag-DXoEf_E7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DKQLNlvR.js";import"./i18n-provider-CHVVk7pM.js";import"./theme-provider-BsBO7Bt7.js";import"./icon-M07mMfJs.js";import"./use-component-style-DXYrx7jC.js";import"./use-var-BmU0CMcq.js";import"./forward-ref-D13m8o2p.js";import"./icon-button-BbqNLP86.js";import"./use-ripple-D3zgM-CO.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./factory-C7oui4wX.js";import"./loading-Bz0vGPrC.js";import"./index-Ci6jtn_l.js";import"./index-DdZUI5bP.js";const Q={title:"System / Styles / Color Mode"},t=()=>{const{colorMode:r}=a();return o.jsxs(b,{bg:["blackAlpha.800","whiteAlpha.800"],color:["whiteAlpha.800","blackAlpha.800"],p:"md",rounded:"md",transitionDuration:"normal",transitionProperty:"all",children:['The current colorMode is "',r,'"']})},e=()=>{const{colorMode:r}=a(),x=s("blackAlpha.800","whiteAlpha.800"),A=s("whiteAlpha.800","blackAlpha.800");return o.jsxs(b,{bg:x,color:A,p:"md",rounded:"md",transitionDuration:"normal",transitionProperty:"all",children:['The current colorMode is "',r,'"']})},n=()=>{const{colorMode:r}=a();return o.jsxs(o.Fragment,{children:[o.jsxs(g,{children:['The current colorMode is "',r,'"']}),o.jsx(B,{variant:["solid","outline"],children:"Button"}),o.jsx(C,{variant:["solid","subtle"],children:"Tag"}),o.jsx(T,{variant:["solid","subtle"]})]})};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
