import{a as s,F as p,j as o}from"./jsx-runtime-29545a09.js";import{F as d}from"./fade-d34f170b.js";import{u as a}from"./index-d68d7549.js";import{B as c}from"./button-f58fea21.js";import{B as n}from"./box-988fdc58.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./factory-e20f0797.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./utils-b801d44f.js";import"./theme-752d0904.js";import"./loading-427fd69a.js";import"./index-7c33f66e.js";import"./index-be349d52.js";import"./index-8f493d3c.js";import"./icon-0ac17974.js";import"./use-component-style-eed0605d.js";const J={title:"Components / Transitions / Fade",component:d},t=()=>{const[e,{toggle:r}]=a();return s(p,{children:[o(c,{onClick:r,children:"Please Click"}),o(d,{isOpen:e,children:o(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),o(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},l=()=>{const[e,{toggle:r}]=a();return s(p,{children:[o(c,{onClick:r,children:"Please Click"}),o(d,{isOpen:e,duration:.4,children:o(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),o(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},i=()=>{const[e,{toggle:r}]=a();return s(p,{children:[o(c,{onClick:r,children:"Please Click"}),o(d,{isOpen:e,unmountOnExit:!0,children:o(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),o(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var m,u,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,w,B;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} duration={0.4}>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var x,f,O;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} unmountOnExit>
        <Box w='full' bg='orange.500' rounded='md' p='md' color='white'>
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w='full' bg='purple.500' rounded='md' p='md' color='white'>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(O=(f=i.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};const K=["basic","withDuration","exitUnmount"];export{K as __namedExportsOrder,t as basic,J as default,i as exitUnmount,l as withDuration};
//# sourceMappingURL=fade.stories-d9a3f546.js.map
