import{a as r,j as n,F as j}from"./jsx-runtime-TtYKBvr-.js";import{u as a}from"./index-gWY0u-sb.js";import{C as l}from"./collapse-J7no4aHk.js";import{V as u}from"./stack-U7fyOJfq.js";import{B as i}from"./button-Qh4ZXxa_.js";import{B as t}from"./box-ACqpXpFo.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./utils-g9VGj7JG.js";import"./factory-BpP3TutA.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-XZ8Hx3Ay.js";import"./motion-SXgmxp4L.js";import"./loading-An8bmO0F.js";import"./index-3Y8obiWq.js";import"./theme-provider-RZopMVJP.js";import"./index-c2grodQ_.js";import"./index-spaFW0BD.js";import"./icon-C1O_Nmpw.js";import"./use-component-style-cxLt7Ns7.js";const $={title:"Components / Transitions / Collapse",component:l},s=()=>{const[e,{toggle:o}]=a();return r(u,{gap:0,align:"flex-start",children:[n(i,{onClick:o,children:"Please Click"}),n(l,{isOpen:e,children:n(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},c=()=>{const[e,{toggle:o}]=a();return r(u,{gap:0,align:"flex-start",children:[n(i,{onClick:o,children:"Please Click"}),n(l,{isOpen:e,duration:.7,children:n(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},p=()=>{const[e,{toggle:o}]=a();return r(u,{gap:0,align:"flex-start",children:[n(i,{onClick:o,children:"Please Click"}),n(l,{isOpen:e,unmountOnExit:!0,children:n(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(t,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},m=()=>{const[e,{toggle:o}]=a();return r(u,{gap:0,align:"flex-start",children:[n(i,{onClick:o,children:"Please Click"}),n(l,{isOpen:e,animationOpacity:!1,children:n(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(t,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},d=()=>{const[e,{toggle:o}]=a();return r(j,{children:[n(i,{onClick:o,children:"Please Click"}),n(l,{isOpen:e,startingHeight:20,children:r(t,{color:"purple.500",children:["私の戦闘力は530000です。",n("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};var g,h,B;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align="flex-start">
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white" mt="md">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(B=(h=s.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var C,x,f;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align="flex-start">
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} duration={0.7}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white" mt="md">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,O,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align="flex-start">
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} unmountOnExit>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white" mt="md">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white" mt="md">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var b,S,P;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack gap={0} align="flex-start">
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} animationOpacity={false}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white" mt="md">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white" mt="md">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(P=(S=m.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var V,y,H;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} startingHeight={20}>
        <Box color="purple.500">
          私の戦闘力は530000です。
          <br />
          ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Box>
      </Collapse>
    </>;
}`,...(H=(y=d.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};const nn=["basic","withDuration","exitUnmount","disabledOpacity","startingHeight"];export{nn as __namedExportsOrder,s as basic,$ as default,m as disabledOpacity,p as exitUnmount,d as startingHeight,c as withDuration};
