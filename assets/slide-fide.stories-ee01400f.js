import{a as t,F as d,j as e}from"./jsx-runtime-e6a661ac.js";import{S as l}from"./slide-fade-a3d3ee31.js";import{u as i}from"./index-11e13d28.js";import{B as s}from"./button-73490b67.js";import{B as n}from"./box-1be76882.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-d90de557.js";import"./index-a700ad96.js";import"./theme-2199e320.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./index-6bcd17ac.js";import"./motion-fb190baf.js";import"./forward-ref-c496b87d.js";import"./utils-274130e6.js";import"./loading-1f9d49b8.js";import"./index-44980711.js";import"./icon-0982bb38.js";import"./use-component-style-277e16ba.js";const R={title:"Components / Transitions / SlideFade",component:l},c=()=>{const[o,{toggle:r}]=i();return t(d,{children:[e(s,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},u=()=>{const[o,{toggle:r}]=i();return t(d,{children:[e(s,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,duration:.4,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[o,{toggle:r}]=i();return t(d,{children:[e(s,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,offsetX:20,offsetY:0,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},a=()=>{const[o,{toggle:r}]=i();return t(d,{children:[e(s,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,offsetY:-20,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},m=()=>{const[o,{toggle:r}]=i();return t(d,{children:[e(s,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,unmountOnExit:!0,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var g,h,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var w,B,x;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen} duration={0.4}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(x=(B=u.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var O,b,C;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen} offsetX={20} offsetY={0}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(C=(b=p.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,S,F;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen} offsetY={-20}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(F=(S=a.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var P,Y,X;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen} unmountOnExit>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(X=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};const V=["basic","withDuration","withOffsetX","withOffsetY","exitUnmount"];export{V as __namedExportsOrder,c as basic,R as default,m as exitUnmount,u as withDuration,p as withOffsetX,a as withOffsetY};
//# sourceMappingURL=slide-fide.stories-ee01400f.js.map
