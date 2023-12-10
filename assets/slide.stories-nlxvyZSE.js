import{a as o,F as s,j as e}from"./jsx-runtime-TtYKBvr-.js";import{u as m}from"./index-gWY0u-sb.js";import{S as a}from"./slide-MOTl1ya7.js";import{B as t}from"./button-Qh4ZXxa_.js";import{V as p}from"./stack-U7fyOJfq.js";import{T as d}from"./text-HhFMRBG-.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-c2grodQ_.js";import"./index-spaFW0BD.js";import"./theme-provider-RZopMVJP.js";import"./factory-BpP3TutA.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./utils-g9VGj7JG.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-XZ8Hx3Ay.js";import"./motion-SXgmxp4L.js";import"./loading-An8bmO0F.js";import"./index-3Y8obiWq.js";import"./icon-C1O_Nmpw.js";import"./use-component-style-cxLt7Ns7.js";const N={title:"Components / Transitions / Slide",component:a},r=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"bottom",children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},i=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"bottom",duration:.7,children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},c=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"left",children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})};var g,u,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,k,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var S,B,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(x=(B=c.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const Q=["basic","withDuration","withPlacement"];export{Q as __namedExportsOrder,r as basic,N as default,i as withDuration,c as withPlacement};
