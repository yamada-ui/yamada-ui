import{j as n}from"./extends-CwFRzn3r.js";import{u as s}from"./index-Du0-7Fls.js";import{C as r}from"./collapse-6Lf7ObB1.js";import{V as m}from"./stack-C8qilfIS.js";import{B as l}from"./button-Bx26J9Y6.js";import{B as t}from"./box-CJbYVqkD.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-scR1bmHx.js";import"./utils-3QxJ8ZLx.js";import"./factory-CYpx3TMG.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./use-component-style-CfUS8Ki1.js";import"./theme-provider-BZKkW4ID.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-ug6Wud9C.js";import"./loading-DndL1UZp.js";import"./icon-FPUxZQsz.js";import"./use-var-B0r_2U-t.js";const Q={title:"Components / Transitions / Collapse",component:r},a=()=>{const[e,{toggle:o}]=s();return n.jsxs(m,{gap:0,align:"flex-start",children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,children:n.jsx(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},i=()=>{const[e,{toggle:o}]=s();return n.jsxs(m,{gap:0,align:"flex-start",children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,duration:.7,children:n.jsx(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},c=()=>{const[e,{toggle:o}]=s();return n.jsxs(m,{gap:0,align:"flex-start",children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,unmountOnExit:!0,children:n.jsx(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[e,{toggle:o}]=s();return n.jsxs(m,{gap:0,align:"flex-start",children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,animationOpacity:!1,children:n.jsx(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},d=()=>{const[e,{toggle:o}]=s();return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,startingHeight:20,children:n.jsxs(t,{color:"purple.500",children:["私の戦闘力は530000です。",n.jsx("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};var u,g,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,B,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var f,k,O;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var w,j,b;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var S,P,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const W=["basic","withDuration","exitUnmount","disabledOpacity","startingHeight"];export{W as __namedExportsOrder,a as basic,Q as default,p as disabledOpacity,c as exitUnmount,d as startingHeight,i as withDuration};
