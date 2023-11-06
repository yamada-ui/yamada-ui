import{a as r}from"./jsx-runtime-03b4ddbf.js";import{B as s}from"./box-c0031f2e.js";import{W as w}from"./flex-f4e471d5.js";import{C as y}from"./center-b95d9abd.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-c9bc4a28.js";import"./forward-ref-8b7d2a6f.js";const F={title:"System / Styles / Pseudo"},e=()=>r(s,{pos:"relative",bg:"primary",m:"lg",p:"lg",rounded:"lg",color:"white",_after:{content:"'after'",pos:"absolute",top:"lg",left:"lg",bg:"secondary",p:"lg",rounded:"lg",color:"white"},children:"Box"}),o=()=>r(s,{pos:"relative",bg:"warning",m:"lg",p:"lg",rounded:"lg",color:"white",_before:{content:"'before'",pos:"absolute",top:"-lg",left:"-lg",bg:"danger",p:"lg",rounded:"lg",color:"white"},children:"Box"}),t=()=>r(s,{bg:"primary",p:"md",rounded:"md",color:"white",cursor:"pointer",transitionProperty:"all",transitionDuration:"slower",transitionTimingFunction:"ease-in-out",_hover:{bg:"secondary"},children:"Please Hover"}),n=()=>r(w,{gap:"md",children:[1,2,3,4,5,6,7,8].map(a=>r(y,{_odd:{bg:"red.500"},_even:{bg:"blue.500"},boxSize:"5xs",rounded:"md",color:"white",children:a},a))});var l,i,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Box pos='relative' bg='primary' m='lg' p='lg' rounded='lg' color='white' _after={{
    content: "'after'",
    pos: 'absolute',
    top: 'lg',
    left: 'lg',
    bg: 'secondary',
    p: 'lg',
    rounded: 'lg',
    color: 'white'
  }}>
      Box
    </Box>;
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,c,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Box pos='relative' bg='warning' m='lg' p='lg' rounded='lg' color='white' _before={{
    content: "'before'",
    pos: 'absolute',
    top: '-lg',
    left: '-lg',
    bg: 'danger',
    p: 'lg',
    rounded: 'lg',
    color: 'white'
  }}>
      Box
    </Box>;
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,u,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Box bg='primary' p='md' rounded='md' color='white' cursor='pointer' transitionProperty='all' transitionDuration='slower' transitionTimingFunction='ease-in-out' _hover={{
    bg: 'secondary'
  }}>
      Please Hover
    </Box>;
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,f,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return <Wrap gap='md'>
      {numbers.map(number => <Center key={number} _odd={{
      bg: 'red.500'
    }} _even={{
      bg: 'blue.500'
    }} boxSize='5xs' rounded='md' color='white'>
          {number}
        </Center>)}
    </Wrap>;
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const H=["after","before","hover","other"];export{H as __namedExportsOrder,e as after,o as before,F as default,t as hover,n as other};
//# sourceMappingURL=pseudo.stories-154b9612.js.map
