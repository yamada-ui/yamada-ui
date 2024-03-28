import{j as u}from"./jsx-runtime-CKrituN3.js";import{u as r}from"./index-rYLD436_.js";import{C as t}from"./collapse-Buc6HD1B.js";import{V as m}from"./stack-BLwkV04r.js";import{B as s}from"./button-oNOtr6rX.js";import{B as o}from"./box-CoyWgssb.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CLgphBsa.js";import"./forward-ref-DuAegr0M.js";import"./factory-DKdOmnTE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./utils-Bs-IWrvS.js";import"./use-ripple-CmSVpGdD.js";import"./loading-wACCLo5l.js";import"./index-CdrX07di.js";import"./theme-provider-6JRwGmsH.js";import"./index-mdwqubC6.js";import"./index-5LWoB8xm.js";import"./icon-1JWgpStP.js";import"./use-component-style-CM81S9bB.js";const Y={title:"Components / Transitions / Collapse",component:t},l=()=>{const[n,{toggle:e}]=r();return u.jsxs(m,{gap:0,align:"flex-start",children:[u.jsx(s,{onClick:e,children:"Please Click"}),u.jsx(t,{isOpen:n,children:u.jsx(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},i=()=>{const[n,{toggle:e}]=r();return u.jsxs(m,{gap:0,align:"flex-start",children:[u.jsx(s,{onClick:e,children:"Please Click"}),u.jsx(t,{isOpen:n,duration:.7,children:u.jsx(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},a=()=>{const[n,{toggle:e}]=r();return u.jsxs(m,{gap:0,align:"flex-start",children:[u.jsx(s,{onClick:e,children:"Please Click"}),u.jsx(t,{isOpen:n,unmountOnExit:!0,children:u.jsx(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},c=()=>{const[n,{toggle:e}]=r();return u.jsxs(m,{gap:0,align:"flex-start",children:[u.jsx(s,{onClick:e,children:"Please Click"}),u.jsx(t,{isOpen:n,animationOpacity:!1,children:u.jsx(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[n,{toggle:e}]=r();return u.jsxs(u.Fragment,{children:[u.jsx(s,{onClick:e,children:"Please Click"}),u.jsx(t,{isOpen:n,startingHeight:20,children:u.jsxs(o,{color:"purple.500",children:["私の戦闘力は530000です。",u.jsx("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};var d,F,g;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(g=(F=l.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var C,x,B;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var h,E,A;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(A=(E=a.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var f,k,O;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var w,j,b;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const Z=["basic","withDuration","exitUnmount","disabledOpacity","startingHeight"];export{Z as __namedExportsOrder,l as basic,Y as default,c as disabledOpacity,a as exitUnmount,p as startingHeight,i as withDuration};
