import{a,F as s,j as e}from"./jsx-runtime-29545a09.js";import{S as l}from"./scale-fade-b8499830.js";import{u as p}from"./index-d68d7549.js";import{B as u}from"./button-900c3cb1.js";import{B as n}from"./box-e7553e69.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./factory-3e6420ff.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./utils-f00ed058.js";import"./theme-f3d0af46.js";import"./loading-a8f76bf0.js";import"./index-d953af92.js";import"./index-f3546514.js";import"./index-bd23768e.js";import"./icon-2298db64.js";import"./use-component-style-fb710021.js";const N={title:"Components / Transitions / ScaleFade",component:l},t=()=>{const[o,{toggle:r}]=p();return a(s,{children:[e(u,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},i=()=>{const[o,{toggle:r}]=p();return a(s,{children:[e(u,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,scale:.75,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},d=()=>{const[o,{toggle:r}]=p();return a(s,{children:[e(u,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,duration:.4,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},c=()=>{const[o,{toggle:r}]=p();return a(s,{children:[e(u,{onClick:r,children:"Please Click"}),e(l,{isOpen:o,unmountOnExit:!0,children:e(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),e(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var m,g,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <ScaleFade isOpen={isOpen}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </ScaleFade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var w,B,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <ScaleFade isOpen={isOpen} scale={0.75}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </ScaleFade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var f,O,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <ScaleFade isOpen={isOpen} duration={0.4}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </ScaleFade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(b=(O=d.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var C,S,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <ScaleFade isOpen={isOpen} unmountOnExit>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </ScaleFade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const Q=["basic","withScale","withDuration","exitUnmount"];export{Q as __namedExportsOrder,t as basic,N as default,c as exitUnmount,d as withDuration,i as withScale};
//# sourceMappingURL=scale-fade.stories-81bbd0ae.js.map
