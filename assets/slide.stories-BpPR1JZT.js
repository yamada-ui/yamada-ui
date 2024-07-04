import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{u as s}from"./index-Du0-7Fls.js";import{S as i}from"./slide-B9ddi7YC.js";import{B as o}from"./button-BD_75t9L.js";import{V as c}from"./stack-BOvxLa0N.js";import{T as a}from"./text-C4dJ5VQY.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-E9zP2zCA.js";import"./index-DoAPKQED.js";import"./theme-provider-CVIzrPws.js";import"./factory-BrsV2ztw.js";import"./index-OrIPcL7r.js";import"./motion-Bf7Eu1FP.js";import"./motion-DxSQdyy8.js";import"./forward-ref-BmTAT9U5.js";import"./utils-BHii_Be-.js";import"./use-ripple-D3kHZFSu.js";import"./loading-CAjNLNS_.js";import"./icon-bEgKfv7t.js";import"./index-CxO4lLi3.js";import"./use-component-style-C-MS2_vZ.js";const J={title:"Components / Transitions / Slide",component:i},u=()=>{const[t,{toggle:n}]=s();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(i,{isOpen:t,placement:"bottom",children:e.jsxs(c,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(a,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},l=()=>{const[t,{toggle:n}]=s();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(i,{isOpen:t,placement:"bottom",duration:.7,children:e.jsxs(c,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(a,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},r=()=>{const[t,{toggle:n}]=s();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(i,{isOpen:t,placement:"left",children:e.jsxs(c,{w:"full",bg:"orange.500",p:"md",children:[e.jsx(a,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})};var m,p,F;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(F=(p=u.parameters)==null?void 0:p.docs)==null?void 0:F.source}}};var d,g,x;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,h,f;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const K=["basic","withDuration","withPlacement"];export{K as __namedExportsOrder,u as basic,J as default,l as withDuration,r as withPlacement};
