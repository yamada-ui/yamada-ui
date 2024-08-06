import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{B as s}from"./box-BMuUZYWP.js";import{W as y}from"./flex-Chb4wwx3.js";import{C as _}from"./center-B_1km1ec.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-CEsHZeW8.js";import"./extends-CF3RwP-h.js";import"./forward-ref-BmTAT9U5.js";const E={title:"System / Styles / Pseudo"},e=()=>r.jsx(s,{pos:"relative",bg:"primary",m:"lg",p:"lg",rounded:"lg",color:"white",_after:{content:"'after'",pos:"absolute",top:"lg",left:"lg",bg:"secondary",p:"lg",rounded:"lg",color:"white"},children:"Box"}),o=()=>r.jsx(s,{pos:"relative",bg:"warning",m:"lg",p:"lg",rounded:"lg",color:"white",_before:{content:"'before'",pos:"absolute",top:"-lg",left:"-lg",bg:"danger",p:"lg",rounded:"lg",color:"white"},children:"Box"}),t=()=>r.jsx(s,{bg:"primary",p:"md",rounded:"md",color:"white",cursor:"pointer",transitionProperty:"all",transitionDuration:"slower",transitionTimingFunction:"ease-in-out",_hover:{bg:"secondary"},children:"Please Hover"}),n=()=>{const w=[1,2,3,4,5,6,7,8];return r.jsx(y,{gap:"md",children:w.map(a=>r.jsx(_,{_odd:{bg:"red.500"},_even:{bg:"blue.500"},boxSize:"5xs",rounded:"md",color:"white",children:a},a))})};var l,i,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,u,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Box bg="primary" p="md" rounded="md" color="white" cursor="pointer" transitionProperty="all" transitionDuration="slower" transitionTimingFunction="ease-in-out" _hover={{
    bg: "secondary"
  }}>
      Please Hover
    </Box>;
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,h,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const F=["after","before","hover","other"];export{F as __namedExportsOrder,e as after,o as before,E as default,t as hover,n as other};
