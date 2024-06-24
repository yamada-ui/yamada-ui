import{j as r}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{B as s}from"./box-D9DbeuYV.js";import{W as y}from"./flex-DpdDxX4h.js";import{C as _}from"./center-BDphHFlP.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-CJjTzqIw.js";import"./forward-ref-BmTAT9U5.js";const D={title:"System / Styles / Pseudo"},e=()=>r.jsx(s,{pos:"relative",bg:"primary",m:"lg",p:"lg",rounded:"lg",color:"white",_after:{content:"'after'",pos:"absolute",top:"lg",left:"lg",bg:"secondary",p:"lg",rounded:"lg",color:"white"},children:"Box"}),o=()=>r.jsx(s,{pos:"relative",bg:"warning",m:"lg",p:"lg",rounded:"lg",color:"white",_before:{content:"'before'",pos:"absolute",top:"-lg",left:"-lg",bg:"danger",p:"lg",rounded:"lg",color:"white"},children:"Box"}),n=()=>r.jsx(s,{bg:"primary",p:"md",rounded:"md",color:"white",cursor:"pointer",transitionProperty:"all",transitionDuration:"slower",transitionTimingFunction:"ease-in-out",_hover:{bg:"secondary"},children:"Please Hover"}),t=()=>{const w=[1,2,3,4,5,6,7,8];return r.jsx(y,{gap:"md",children:w.map(a=>r.jsx(_,{_odd:{bg:"red.500"},_even:{bg:"blue.500"},boxSize:"5xs",rounded:"md",color:"white",children:a},a))})};var l,i,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Box pos="relative" bg="primary" m="lg" p="lg" rounded="lg" color="white" _after={{
    content: "'after'",
    pos: "absolute",
    top: "lg",
    left: "lg",
    bg: "secondary",
    p: "lg",
    rounded: "lg",
    color: "white"
  }}>
      Box
    </Box>;
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,c,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Box pos="relative" bg="warning" m="lg" p="lg" rounded="lg" color="white" _before={{
    content: "'before'",
    pos: "absolute",
    top: "-lg",
    left: "-lg",
    bg: "danger",
    p: "lg",
    rounded: "lg",
    color: "white"
  }}>
      Box
    </Box>;
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,u,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Box bg="primary" p="md" rounded="md" color="white" cursor="pointer" transitionProperty="all" transitionDuration="slower" transitionTimingFunction="ease-in-out" _hover={{
    bg: "secondary"
  }}>
      Please Hover
    </Box>;
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,h,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return <Wrap gap="md">
      {numbers.map(number => <Center key={number} _odd={{
      bg: "red.500"
    }} _even={{
      bg: "blue.500"
    }} boxSize="5xs" rounded="md" color="white">
          {number}
        </Center>)}
    </Wrap>;
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const E=["after","before","hover","other"];export{E as __namedExportsOrder,e as after,o as before,D as default,n as hover,t as other};
