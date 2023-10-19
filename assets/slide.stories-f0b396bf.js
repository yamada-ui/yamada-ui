import{j as o,F as s,a as e}from"./jsx-runtime-b08f8875.js";import{S as a}from"./slide-d76d9f91.js";import{u as m}from"./index-c3db8104.js";import{B as t}from"./button-401f14b3.js";import{V as p}from"./stack-f811b10a.js";import{T as d}from"./text-50bfeca2.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-2cfd973b.js";import"./index-a69af9f5.js";import"./theme-provider-1097130b.js";import"./factory-ab7c3580.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-709acde9.js";import"./motion-5447b2d8.js";import"./utils-605cfd19.js";import"./forward-ref-cf7188bd.js";import"./loading-0bce3a59.js";import"./index-6cdd3cb8.js";import"./icon-1c0bf186.js";import"./use-component-style-07e84389.js";const L={title:"Components / Transitions / Slide",component:a},r=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"bottom",children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},i=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"bottom",duration:.7,children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},c=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"left",children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})};var g,u,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=slide.stories-f0b396bf.js.map
