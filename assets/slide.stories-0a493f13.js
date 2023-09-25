import{a as o,F as s,j as e}from"./jsx-runtime-29545a09.js";import{S as a}from"./slide-64884543.js";import{u as m}from"./index-d68d7549.js";import{B as t}from"./button-29566724.js";import{V as p}from"./stack-e0824e8f.js";import{T as d}from"./text-34f78c84.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-24d8bf0d.js";import"./index-7b119b1a.js";import"./theme-53967a8a.js";import"./factory-0893e977.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./utils-008df4c7.js";import"./forward-ref-8b7d2a6f.js";import"./loading-0658c608.js";import"./index-500c6d69.js";import"./icon-1cfd45cb.js";import"./use-component-style-1d64e7de.js";const L={title:"Components / Transitions / Slide",component:a},r=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"bottom",children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},i=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"bottom",duration:.7,children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},c=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"left",children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})};var g,u,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement='bottom'>
        <VStack w='full' bg='orange.500' p='md'>
          <Text color='white'>
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf='flex-end'>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,k,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement='bottom' duration={0.7}>
        <VStack w='full' bg='orange.500' p='md'>
          <Text color='white'>
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf='flex-end'>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var S,B,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement='left'>
        <VStack w='full' bg='orange.500' p='md'>
          <Text color='white'>
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf='flex-end'>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(x=(B=c.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const M=["basic","withDuration","withPlacement"];export{M as __namedExportsOrder,r as basic,L as default,i as withDuration,c as withPlacement};
//# sourceMappingURL=slide.stories-0a493f13.js.map
