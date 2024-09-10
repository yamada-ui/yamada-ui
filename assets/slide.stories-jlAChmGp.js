import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as c}from"./index-Du0-7Fls.js";import{S as s}from"./slide-Da8QSeF3.js";import{B as o}from"./button-CaNlM53L.js";import{V as a}from"./stack-ChUXZSU5.js";import{T as m}from"./text-C5tpoCpM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_OHKpVK5.js";import"./index-BLm21oHB.js";import"./theme-provider-8-IaQrJV.js";import"./factory-DIvfNQLw.js";import"./extends-CF3RwP-h.js";import"./factory-DY7K8SpK.js";import"./motion-Bd6WkMzw.js";import"./utils-Bj67fzFv.js";import"./motion-forward-ref-DCsEbWHi.js";import"./use-component-style-BLXFHnsW.js";import"./forward-ref-DKTvpK5d.js";import"./use-ripple-sRmjwWlS.js";import"./loading-_68QapUp.js";import"./icon-Bon_IeHI.js";import"./index-BpAeq05e.js";const K={title:"Components / Transitions / Slide",component:s},l=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{isOpen:t,placement:"bottom",children:e.jsxs(a,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},r=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{isOpen:t,placement:"bottom",duration:.7,children:e.jsxs(a,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},i=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{isOpen:t,placement:"left",children:e.jsxs(a,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})};var p,d,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(g=(d=l.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,x,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,k,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const L=["basic","withDuration","withPlacement"];export{L as __namedExportsOrder,l as basic,K as default,r as withDuration,i as withPlacement};
