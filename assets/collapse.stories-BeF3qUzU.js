import{j as n}from"./jsx-runtime-CfatFE5O.js";import{C as r}from"./collapse-CIqjkSFl.js";import{u as l}from"./index-gGKStiao.js";import{V as d}from"./stack-CcCHu966.js";import{B as s}from"./button-CtWzhuL8.js";import{B as t}from"./box-Ch0hVi2V.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BcVfKnbi.js";import"./factory-D0ba2aB7.js";import"./index-YDlv44yi.js";import"./proxy-DYgA1A03.js";import"./forward-ref-2BKBy0Yi.js";import"./use-component-style-B--WxH8d.js";import"./theme-provider-r-UN7Xzc.js";import"./factory-COvmBIaQ.js";import"./forward-ref-D13m8o2p.js";import"./use-ripple-DRMVQrUo.js";import"./loading-1q-H-TJ4.js";import"./icon-47ftZrjE.js";import"./use-var-CTLjK8Sl.js";const W={component:r,title:"Components / Transitions / Collapse"},a=()=>{const[e,{toggle:o}]=l();return n.jsxs(d,{align:"flex-start",gap:0,children:[n.jsx(s,{onClick:o,children:"Please Click"}),n.jsx(r,{open:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},i=()=>{const[e,{toggle:o}]=l();return n.jsxs(d,{align:"flex-start",gap:0,children:[n.jsx(s,{onClick:o,children:"Please Click"}),n.jsx(r,{duration:.7,open:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},c=()=>{const[e,{toggle:o}]=l();return n.jsxs(d,{align:"flex-start",gap:0,children:[n.jsx(s,{onClick:o,children:"Please Click"}),n.jsx(r,{open:e,unmountOnExit:!0,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{bg:"purple.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[e,{toggle:o}]=l();return n.jsxs(d,{align:"flex-start",gap:0,children:[n.jsx(s,{onClick:o,children:"Please Click"}),n.jsx(r,{animationOpacity:!1,open:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{bg:"purple.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},m=()=>{const[e,{toggle:o}]=l();return n.jsxs(n.Fragment,{children:[n.jsx(s,{onClick:o,children:"Please Click"}),n.jsx(r,{open:e,startingHeight:20,children:n.jsxs(t,{color:"purple.500",children:["私の戦闘力は530000です。",n.jsx("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};var u,g,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
