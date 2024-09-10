import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{u as s}from"./index-Du0-7Fls.js";import{C as r}from"./collapse-BWflzyeJ.js";import{V as d}from"./stack-ChUXZSU5.js";import{B as l}from"./button-CaNlM53L.js";import{B as t}from"./box-B5QxFMCs.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./motion-forward-ref-DCsEbWHi.js";import"./utils-Bj67fzFv.js";import"./factory-DIvfNQLw.js";import"./extends-CF3RwP-h.js";import"./factory-DY7K8SpK.js";import"./motion-Bd6WkMzw.js";import"./use-component-style-BLXFHnsW.js";import"./theme-provider-8-IaQrJV.js";import"./forward-ref-DKTvpK5d.js";import"./use-ripple-sRmjwWlS.js";import"./loading-_68QapUp.js";import"./icon-Bon_IeHI.js";import"./index-BpAeq05e.js";const W={title:"Components / Transitions / Collapse",component:r},a=()=>{const[e,{toggle:o}]=s();return n.jsxs(d,{gap:0,align:"flex-start",children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,children:n.jsx(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},i=()=>{const[e,{toggle:o}]=s();return n.jsxs(d,{gap:0,align:"flex-start",children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,duration:.7,children:n.jsx(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},c=()=>{const[e,{toggle:o}]=s();return n.jsxs(d,{gap:0,align:"flex-start",children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,unmountOnExit:!0,children:n.jsx(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[e,{toggle:o}]=s();return n.jsxs(d,{gap:0,align:"flex-start",children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,animationOpacity:!1,children:n.jsx(t,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",mt:"md",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",mt:"md",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},m=()=>{const[e,{toggle:o}]=s();return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,startingHeight:20,children:n.jsxs(t,{color:"purple.500",children:["私の戦闘力は530000です。",n.jsx("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};var u,g,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var S,P,V;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(V=(P=m.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const X=["basic","withDuration","exitUnmount","disabledOpacity","startingHeight"];export{X as __namedExportsOrder,a as basic,W as default,p as disabledOpacity,c as exitUnmount,m as startingHeight,i as withDuration};
