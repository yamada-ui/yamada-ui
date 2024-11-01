import{j as e}from"./extends-CwFRzn3r.js";import{u as c}from"./index-CoJrGj-T.js";import{S as s}from"./slide-OVyNwlmf.js";import{B as o}from"./button-BtgxkHkM.js";import{V as a}from"./stack-BVZkmmtU.js";import{T as m}from"./text-DSnzXlBX.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-ZFP3ngUa.js";import"./index-DP81e-8u.js";import"./factory-CBW6YcbY.js";import"./theme-provider-B8NHi_rL.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./utils-CC31eNL0.js";import"./forward-ref-scR1bmHx.js";import"./use-component-style-Givb0biW.js";import"./factory-B6ZnNkK9.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-BqSD0U-m.js";import"./loading-DZQf4R8P.js";import"./icon-CQ7oKYSm.js";import"./use-var-BcRMoVLh.js";const K={component:s,title:"Components / Transitions / Slide"},l=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{isOpen:t,placement:"bottom",children:e.jsxs(a,{bg:"orange.500",p:"md",w:"full",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{alignSelf:"flex-end",onClick:n,children:"Close"})]})})]})},r=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{duration:.7,isOpen:t,placement:"bottom",children:e.jsxs(a,{bg:"orange.500",p:"md",w:"full",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{alignSelf:"flex-end",onClick:n,children:"Close"})]})})]})},i=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{isOpen:t,placement:"left",children:e.jsxs(a,{bg:"orange.500",p:"md",w:"full",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{alignSelf:"flex-end",onClick:n,children:"Close"})]})})]})};var p,d,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="bottom">
        <VStack bg="orange.500" p="md" w="full">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
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

      <Slide duration={0.7} isOpen={isOpen} placement="bottom">
        <VStack bg="orange.500" p="md" w="full">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
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
        <VStack bg="orange.500" p="md" w="full">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const L=["basic","withDuration","withPlacement"];export{L as __namedExportsOrder,l as basic,K as default,r as withDuration,i as withPlacement};
