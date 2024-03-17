import{a as t,j as u,F as P}from"./jsx-runtime-2xDJh5tt.js";import{u as l}from"./index-rYLD436_.js";import{C as r}from"./collapse-DgBik72e.js";import{V as d}from"./stack-BnJQESm1.js";import{B as a}from"./button-DbN7DdZz.js";import{B as o}from"./box-BLs15Z1y.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-Ca3VN97B.js";import"./forward-ref-DuAegr0M.js";import"./factory-kXR3An-G.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./utils-BA6yXg59.js";import"./use-ripple-Q0byik3_.js";import"./loading-B8AyfAAt.js";import"./index-C-d4WQS4.js";import"./theme-provider-Bd5T4K5M.js";import"./index-DqoR4ST1.js";import"./index-B3rKjj8b.js";import"./icon-CXZIg4wR.js";import"./use-component-style-BnPBcn2P.js";const $={title:"Components / Transitions / Collapse",component:r},i=()=>{const[n,{toggle:e}]=l();return t(d,{gap:0,align:"flex-start",children:[u(a,{onClick:e,children:"Please Click"}),u(r,{isOpen:n,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},s=()=>{const[n,{toggle:e}]=l();return t(d,{gap:0,align:"flex-start",children:[u(a,{onClick:e,children:"Please Click"}),u(r,{isOpen:n,duration:.7,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},c=()=>{const[n,{toggle:e}]=l();return t(d,{gap:0,align:"flex-start",children:[u(a,{onClick:e,children:"Please Click"}),u(r,{isOpen:n,unmountOnExit:!0,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[n,{toggle:e}]=l();return t(d,{gap:0,align:"flex-start",children:[u(a,{onClick:e,children:"Please Click"}),u(r,{isOpen:n,animationOpacity:!1,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},m=()=>{const[n,{toggle:e}]=l();return t(P,{children:[u(a,{onClick:e,children:"Please Click"}),u(r,{isOpen:n,startingHeight:20,children:t(o,{color:"purple.500",children:["私の戦闘力は530000です。",u("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};var F,g,C;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(C=(g=i.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var B,h,E;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(E=(h=s.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var A,x,f;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,O,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var b,D,S;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(S=(D=m.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const uu=["basic","withDuration","exitUnmount","disabledOpacity","startingHeight"];export{uu as __namedExportsOrder,i as basic,$ as default,p as disabledOpacity,c as exitUnmount,m as startingHeight,s as withDuration};
