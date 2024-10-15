import{j as o}from"./extends-CwFRzn3r.js";import{C as T}from"./calendar-zgc1Glpz.js";import{E as a,_ as s}from"./factory-DkiAY2ad.js";import{B as b}from"./box-BQhfyHd0.js";import{T as g}from"./text-DbAxj1fm.js";import{B}from"./button-BG6kekf_.js";import{T as C}from"./tag-DCxYNsYA.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DRj4BzjX.js";import"./theme-provider-BQjm75QN.js";import"./icon-A2vzomTu.js";import"./use-component-style-DQLsgxr3.js";import"./use-var-D2w0wtCZ.js";import"./forward-ref-BWI-Phbn.js";import"./icon-button-BXVROZbx.js";import"./use-ripple-VNo1fv7Z.js";import"./factory-DmXgzuxm.js";import"./motion-I-9Hg3gW.js";import"./loading-BAPtC7K8.js";import"./index-Dxg_d1YV.js";import"./index-D5PbvzVk.js";const L={title:"System / Styles / Color Mode"},e=()=>{const{colorMode:r}=a();return o.jsxs(b,{bg:["blackAlpha.800","whiteAlpha.800"],color:["whiteAlpha.800","blackAlpha.800"],p:"md",rounded:"md",transitionDuration:"normal",transitionProperty:"all",children:['The current colorMode is "',r,'"']})},t=()=>{const{colorMode:r}=a(),x=s("blackAlpha.800","whiteAlpha.800"),A=s("whiteAlpha.800","blackAlpha.800");return o.jsxs(b,{bg:x,color:A,p:"md",rounded:"md",transitionDuration:"normal",transitionProperty:"all",children:['The current colorMode is "',r,'"']})},n=()=>{const{colorMode:r}=a();return o.jsxs(o.Fragment,{children:[o.jsxs(g,{children:['The current colorMode is "',r,'"']}),o.jsx(B,{variant:["solid","outline"],children:"Button"}),o.jsx(C,{variant:["solid","subtle"],children:"Tag"}),o.jsx(T,{variant:["solid","subtle"]})]})};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  return <Box bg={["blackAlpha.800", "whiteAlpha.800"]} color={["whiteAlpha.800", "blackAlpha.800"]} p="md" rounded="md" transitionDuration="normal" transitionProperty="all">
      The current colorMode is "{colorMode}"
    </Box>;
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    colorMode
  } = useColorMode();
  const bg = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  return <Box bg={bg} color={color} p="md" rounded="md" transitionDuration="normal" transitionProperty="all">
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
