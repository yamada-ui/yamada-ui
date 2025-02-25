import{j as n}from"./jsx-runtime-BpbtHYHY.js";import{C as r}from"./collapse-BHW3EzgU.js";import{u as l}from"./index-qZwaV1-B.js";import{V as d}from"./stack-BP8LKMVN.js";import{B as s}from"./button-CqSjNDtY.js";import{B as t}from"./box-CKfluZfz.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BynqOrQy.js";import"./factory-DbNU74ts.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./forward-ref-Cy2nAbAn.js";import"./use-component-style-CpB_lyT3.js";import"./theme-provider-ChqdwXGn.js";import"./factory-DGyI5Ya3.js";import"./forward-ref-Ukjd1cIW.js";import"./use-ripple-HQjPVeUd.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";const W={component:r,title:"Components / Transitions / Collapse"},a=()=>{const[e,{toggle:o}]=l();return n.jsxs(d,{align:"flex-start",gap:0,children:[n.jsx(s,{onClick:o,children:"Please Click"}),n.jsx(r,{open:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},i=()=>{const[e,{toggle:o}]=l();return n.jsxs(d,{align:"flex-start",gap:0,children:[n.jsx(s,{onClick:o,children:"Please Click"}),n.jsx(r,{duration:.7,open:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},c=()=>{const[e,{toggle:o}]=l();return n.jsxs(d,{align:"flex-start",gap:0,children:[n.jsx(s,{onClick:o,children:"Please Click"}),n.jsx(r,{open:e,unmountOnExit:!0,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{bg:"purple.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[e,{toggle:o}]=l();return n.jsxs(d,{align:"flex-start",gap:0,children:[n.jsx(s,{onClick:o,children:"Please Click"}),n.jsx(r,{animationOpacity:!1,open:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{bg:"purple.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},m=()=>{const[e,{toggle:o}]=l();return n.jsxs(n.Fragment,{children:[n.jsx(s,{onClick:o,children:"Please Click"}),n.jsx(r,{open:e,startingHeight:20,children:n.jsxs(t,{color:"purple.500",children:["私の戦闘力は530000です。",n.jsx("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};var u,g,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={isOpen}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,B,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse duration={0.7} open={isOpen}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var f,k,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={isOpen} unmountOnExit>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,O,b;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse animationOpacity={false} open={isOpen}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(b=(O=p.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var S,P,V;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={isOpen} startingHeight={20}>
        <Box color="purple.500">
          私の戦闘力は530000です。
          <br />
          ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Box>
      </Collapse>
    </>;
}`,...(V=(P=m.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const X=["basic","withDuration","exitUnmount","disabledOpacity","startingHeight"];export{X as __namedExportsOrder,a as basic,W as default,p as disabledOpacity,c as exitUnmount,m as startingHeight,i as withDuration};
