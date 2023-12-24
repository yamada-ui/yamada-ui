import{a as o,F as a,j as e}from"./jsx-runtime-TtYKBvr-.js";import{u as s}from"./index-gWY0u-sb.js";import{S as c}from"./slide-boxsKrfX.js";import{B as t}from"./button-JAyR2IrF.js";import{V as m}from"./stack-m-r0Bqwy.js";import{T as p}from"./text-ZvbV5Gil.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-QXkTb0vS.js";import"./index-Ni3ZWRlr.js";import"./theme-provider-gSdpxlBZ.js";import"./factory-4UsipNZi.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./utils-P9WZT_Jg.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-DtOELnn4.js";import"./motion-Nrmqvszs.js";import"./loading--J4ajAZG.js";import"./index-4xX5BTts.js";import"./icon-_M--SPCM.js";import"./use-component-style-46I8_shN.js";const N={title:"Components / Transitions / Slide",component:c},l=()=>{const[u,{toggle:n}]=s();return o(a,{children:[e(t,{onClick:n,children:"Please Click"}),e(c,{isOpen:u,placement:"bottom",children:o(m,{w:"full",bg:"orange.500",p:"md",children:[e(p,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},r=()=>{const[u,{toggle:n}]=s();return o(a,{children:[e(t,{onClick:n,children:"Please Click"}),e(c,{isOpen:u,placement:"bottom",duration:.7,children:o(m,{w:"full",bg:"orange.500",p:"md",children:[e(p,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},i=()=>{const[u,{toggle:n}]=s();return o(a,{children:[e(t,{onClick:n,children:"Please Click"}),e(c,{isOpen:u,placement:"left",children:o(m,{w:"full",bg:"orange.500",p:"md",children:[e(p,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})};var F,d,g;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="bottom">
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(g=(d=l.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var C,h,f;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="bottom" duration={0.7}>
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,S,B;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="left">
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const Q=["basic","withDuration","withPlacement"];export{Q as __namedExportsOrder,l as basic,N as default,r as withDuration,i as withPlacement};
