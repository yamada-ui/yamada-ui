import{j as o,F as s,a as e}from"./jsx-runtime-yA-pgArV.js";import{u as m}from"./index-gWY0u-sb.js";import{S as a}from"./slide-FYXKvt-I.js";import{B as t}from"./button-9VUarSO2.js";import{V as p}from"./stack-Mcw13KPE.js";import{T as d}from"./text--Mf9pjVU.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-_Bu2kJOQ.js";import"./index-sG_FZBUS.js";import"./theme-provider-JJMfppNb.js";import"./factory-LMyrE5lk.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-xpiohnTl.js";import"./motion-XoqD_6Np.js";import"./utils-oLTI8GDX.js";import"./forward-ref-6T0UNPU-.js";import"./loading-d5fto5LV.js";import"./index-Fmh4I4_s.js";import"./icon-U1tgplMe.js";import"./use-component-style-KGYGTazl.js";const L={title:"Components / Transitions / Slide",component:a},r=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"bottom",children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},i=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"bottom",duration:.7,children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},c=()=>{const[l,{toggle:n}]=m();return o(s,{children:[e(t,{onClick:n,children:"Please Click"}),e(a,{isOpen:l,placement:"left",children:o(p,{w:"full",bg:"orange.500",p:"md",children:[e(d,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})};var g,u,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(x=(B=c.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const M=["basic","withDuration","withPlacement"];export{M as __namedExportsOrder,r as basic,L as default,i as withDuration,c as withPlacement};
