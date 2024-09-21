import{j as o}from"./extends-CwFRzn3r.js";import{C as T}from"./calendar-C2qn51A4.js";import{o as a,_ as s}from"./factory-DfCPDZht.js";import{B as b}from"./box-BNUHdVqZ.js";import{T as g}from"./text-C4kk1pFE.js";import{B}from"./button-CrM87X6c.js";import{T as C}from"./tag-DiuQgi_F.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-423R83gY.js";import"./theme-provider-Bw55Thfs.js";import"./icon-BY9dMEpR.js";import"./index-DOyhBR5n.js";import"./use-component-style-D0DGb12b.js";import"./forward-ref-BWI-Phbn.js";import"./icon-button-Cxlm05Fi.js";import"./use-ripple-C-c72TCS.js";import"./factory-B9-LT_yD.js";import"./motion-I-9Hg3gW.js";import"./loading-BhlblpEj.js";import"./index-Bq6qUkKi.js";import"./index-DX1ItL2L.js";const L={title:"System / Styles / Color Mode"},e=()=>{const{colorMode:r}=a();return o.jsxs(b,{bg:["blackAlpha.800","whiteAlpha.800"],p:"md",rounded:"md",color:["whiteAlpha.800","blackAlpha.800"],transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',r,'"']})},t=()=>{const{colorMode:r}=a(),x=s("blackAlpha.800","whiteAlpha.800"),A=s("whiteAlpha.800","blackAlpha.800");return o.jsxs(b,{bg:x,p:"md",rounded:"md",color:A,transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',r,'"']})},n=()=>{const{colorMode:r}=a();return o.jsxs(o.Fragment,{children:[o.jsxs(g,{children:['The current colorMode is "',r,'"']}),o.jsx(B,{variant:["solid","outline"],children:"Button"}),o.jsx(C,{variant:["solid","subtle"],children:"Tag"}),o.jsx(T,{variant:["solid","subtle"]})]})};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <Box bg={["blackAlpha.800", "whiteAlpha.800"]} p="md" rounded="md" color={["whiteAlpha.800", "blackAlpha.800"]} transitionProperty="all" transitionDuration="normal">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  return <Box bg={bg} p="md" rounded="md" color={color} transitionProperty="all" transitionDuration="normal">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,M;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <>
      <Text>The current colorMode is "{colorMode}"</Text>

      <Button variant={["solid", "outline"]}>Button</Button>

      <Tag variant={["solid", "subtle"]}>Tag</Tag>

      <Calendar variant={["solid", "subtle"]} />
    </>;
}`,...(M=(h=n.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const N=["basic","useHook","components"];export{N as __namedExportsOrder,e as basic,n as components,L as default,t as useHook};
