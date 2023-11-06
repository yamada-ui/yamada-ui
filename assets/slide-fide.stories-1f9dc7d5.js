import{j as t,F as d,a as e}from"./jsx-runtime-03b4ddbf.js";import{S as l}from"./slide-fade-656e79e8.js";import{u as i}from"./index-d68d7549.js";import{B as s}from"./button-0fc0cb94.js";import{B as n}from"./box-c0031f2e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-a701aaa0.js";import"./index-85f341f5.js";import"./theme-provider-a03ffa08.js";import"./factory-c9bc4a28.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./utils-dc7ab2be.js";import"./loading-24ec3d24.js";import"./index-f08d32bc.js";import"./icon-e1655999.js";import"./use-component-style-ab2b35f8.js";const Q={title:"Components / Transitions / SlideFade",component:l},c=()=>{const[o,{toggle:r}]=i();return t(d,{children:[e(s,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},u=()=>{const[o,{toggle:r}]=i();return t(d,{children:[e(s,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,duration:.4,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},a=()=>{const[o,{toggle:r}]=i();return t(d,{children:[e(s,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,offsetX:20,offsetY:0,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[o,{toggle:r}]=i();return t(d,{children:[e(s,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,offsetY:-20,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},m=()=>{const[o,{toggle:r}]=i();return t(d,{children:[e(s,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,unmountOnExit:!0,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var g,h,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(x=(B=u.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var O,b,C;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,S,F;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(F=(S=p.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var P,Y,X;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(X=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};const R=["basic","withDuration","withOffsetX","withOffsetY","exitUnmount"];export{R as __namedExportsOrder,c as basic,Q as default,m as exitUnmount,u as withDuration,a as withOffsetX,p as withOffsetY};
//# sourceMappingURL=slide-fide.stories-1f9dc7d5.js.map
