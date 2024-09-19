import{j as o}from"./extends-CwFRzn3r.js";import{C as T}from"./calendar-Bm6hy1WL.js";import{o as a,X as s}from"./factory-BjF4_dRw.js";import{B as b}from"./box-B5FcoOR4.js";import{T as g}from"./text-CpJ_XsDk.js";import{B}from"./button-y-1VIkvD.js";import{T as C}from"./tag-etBC-Y9v.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BaNhddRa.js";import"./theme-provider-CpaSpGZh.js";import"./icon-Dq9f0XvE.js";import"./index-CuJ7J3XN.js";import"./use-component-style-DVO-iEPi.js";import"./forward-ref-BWI-Phbn.js";import"./icon-button-BiKyozLB.js";import"./use-ripple-tjN9Ka0j.js";import"./factory-COh1-7fC.js";import"./motion-I-9Hg3gW.js";import"./loading-XAGgHBOO.js";import"./index-BjUO4q1E.js";import"./index-DA9-26wc.js";const K={title:"System / Styles / Color Mode"},e=()=>{const{colorMode:r}=a();return o.jsxs(b,{bg:["blackAlpha.800","whiteAlpha.800"],p:"md",rounded:"md",color:["whiteAlpha.800","blackAlpha.800"],transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',r,'"']})},t=()=>{const{colorMode:r}=a(),x=s("blackAlpha.800","whiteAlpha.800"),A=s("whiteAlpha.800","blackAlpha.800");return o.jsxs(b,{bg:x,p:"md",rounded:"md",color:A,transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',r,'"']})},n=()=>{const{colorMode:r}=a();return o.jsxs(o.Fragment,{children:[o.jsxs(g,{children:['The current colorMode is "',r,'"']}),o.jsx(B,{variant:["solid","outline"],children:"Button"}),o.jsx(C,{variant:["solid","subtle"],children:"Tag"}),o.jsx(T,{variant:["solid","subtle"]})]})};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(M=(h=n.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const L=["basic","useHook","components"];export{L as __namedExportsOrder,e as basic,n as components,K as default,t as useHook};
