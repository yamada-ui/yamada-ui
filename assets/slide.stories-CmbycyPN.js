import{j as e}from"./extends-CwFRzn3r.js";import{u as c}from"./index-CoJrGj-T.js";import{S as s}from"./slide-Ckt3MmdS.js";import{B as o}from"./button-D6MtFxez.js";import{V as a}from"./stack-DlPMk-Cq.js";import{T as m}from"./text-DzUFhekZ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BWWKr8fL.js";import"./index-wnA7eVNJ.js";import"./factory-CB2imrkD.js";import"./theme-provider-D1j4LEQ9.js";import"./factory-C3FBZMw9.js";import"./motion-I-9Hg3gW.js";import"./utils-Da0AOJfu.js";import"./forward-ref-scR1bmHx.js";import"./use-component-style-CLkw4iG2.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-D_F9Vz55.js";import"./loading-6PAwx6O9.js";import"./icon-GDJ6YhRU.js";import"./use-var-D-eiJB8b.js";const J={component:s,title:"Components / Transitions / Slide"},l=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{isOpen:t,placement:"bottom",children:e.jsxs(a,{bg:"orange.500",p:"md",w:"full",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{alignSelf:"flex-end",onClick:n,children:"Close"})]})})]})},r=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{duration:.7,isOpen:t,placement:"bottom",children:e.jsxs(a,{bg:"orange.500",p:"md",w:"full",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{alignSelf:"flex-end",onClick:n,children:"Close"})]})})]})},i=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{isOpen:t,placement:"left",children:e.jsxs(a,{bg:"orange.500",p:"md",w:"full",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{alignSelf:"flex-end",onClick:n,children:"Close"})]})})]})};var p,d,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const K=["basic","withDuration","withPlacement"];export{K as __namedExportsOrder,l as basic,J as default,r as withDuration,i as withPlacement};
