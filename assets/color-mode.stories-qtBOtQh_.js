import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{C as T}from"./calendar-DefqZolT.js";import{o as a,X as s}from"./factory-C2Uq3ahE.js";import{B as b}from"./box-Bfrem8P5.js";import{T as g}from"./text-BJvDpKxV.js";import{B}from"./button-Bi9n-vY3.js";import{T as C}from"./tag-DeB5X3hv.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-JO6qx1eo.js";import"./theme-provider-jP6jS-pg.js";import"./icon-sIHrqgYT.js";import"./index-UM7KnhWq.js";import"./use-component-style-Bx1vUO5y.js";import"./forward-ref-DKTvpK5d.js";import"./icon-button-BYhYpu9p.js";import"./extends-CF3RwP-h.js";import"./use-ripple-Cy0wrTvg.js";import"./factory-uWFUvYzf.js";import"./motion-Bd6WkMzw.js";import"./loading-BNVTi1QG.js";import"./index-DIig5QpT.js";import"./index-Cphrmm8n.js";const L={title:"System / Styles / Color Mode"},e=()=>{const{colorMode:r}=a();return o.jsxs(b,{bg:["blackAlpha.800","whiteAlpha.800"],p:"md",rounded:"md",color:["whiteAlpha.800","blackAlpha.800"],transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',r,'"']})},t=()=>{const{colorMode:r}=a(),x=s("blackAlpha.800","whiteAlpha.800"),A=s("whiteAlpha.800","blackAlpha.800");return o.jsxs(b,{bg:x,p:"md",rounded:"md",color:A,transitionProperty:"all",transitionDuration:"normal",children:['The current colorMode is "',r,'"']})},n=()=>{const{colorMode:r}=a();return o.jsxs(o.Fragment,{children:[o.jsxs(g,{children:['The current colorMode is "',r,'"']}),o.jsx(B,{variant:["solid","outline"],children:"Button"}),o.jsx(C,{variant:["solid","subtle"],children:"Tag"}),o.jsx(T,{variant:["solid","subtle"]})]})};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
