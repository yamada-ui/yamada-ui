import{j as o}from"./jsx-runtime-BpbtHYHY.js";import{C as r}from"./collapse-BHW3EzgU.js";import{u as l}from"./index-qZwaV1-B.js";import{V as d}from"./stack-BP8LKMVN.js";import{B as s}from"./button-CqSjNDtY.js";import{B as t}from"./box-CKfluZfz.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BynqOrQy.js";import"./factory-DbNU74ts.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./forward-ref-Cy2nAbAn.js";import"./use-component-style-CpB_lyT3.js";import"./theme-provider-ChqdwXGn.js";import"./factory-DGyI5Ya3.js";import"./forward-ref-Ukjd1cIW.js";import"./use-ripple-HQjPVeUd.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";const W={component:r,title:"Components / Transitions / Collapse"},a=()=>{const[n,{toggle:e}]=l();return o.jsxs(d,{align:"flex-start",gap:0,children:[o.jsx(s,{onClick:e,children:"Please Click"}),o.jsx(r,{open:n,children:o.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},i=()=>{const[n,{toggle:e}]=l();return o.jsxs(d,{align:"flex-start",gap:0,children:[o.jsx(s,{onClick:e,children:"Please Click"}),o.jsx(r,{duration:.7,open:n,children:o.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},c=()=>{const[n,{toggle:e}]=l();return o.jsxs(d,{align:"flex-start",gap:0,children:[o.jsx(s,{onClick:e,children:"Please Click"}),o.jsx(r,{open:n,unmountOnExit:!0,children:o.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),o.jsx(t,{bg:"purple.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[n,{toggle:e}]=l();return o.jsxs(d,{align:"flex-start",gap:0,children:[o.jsx(s,{onClick:e,children:"Please Click"}),o.jsx(r,{animationOpacity:!1,open:n,children:o.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),o.jsx(t,{bg:"purple.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},m=()=>{const[n,{toggle:e}]=l();return o.jsxs(o.Fragment,{children:[o.jsx(s,{onClick:e,children:"Please Click"}),o.jsx(r,{open:n,startingHeight:20,children:o.jsxs(t,{color:"purple.500",children:["私の戦闘力は530000です。",o.jsx("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};var u,g,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,B,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse duration={0.7} open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var f,k,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={open} unmountOnExit>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,b,S;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse animationOpacity={false} open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(S=(b=p.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var P,V,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={open} startingHeight={20}>
        <Box color="purple.500">
          私の戦闘力は530000です。
          <br />
          ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Box>
      </Collapse>
    </>;
}`,...(O=(V=m.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const X=["basic","withDuration","exitUnmount","disabledOpacity","startingHeight"];export{X as __namedExportsOrder,a as basic,W as default,p as disabledOpacity,c as exitUnmount,m as startingHeight,i as withDuration};
