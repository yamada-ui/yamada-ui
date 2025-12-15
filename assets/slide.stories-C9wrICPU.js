import{j as n,Q as o,V as a,T as i}from"./iframe-C1QqsVA9.js";import{u as d}from"./index-KAAQppRK.js";import{S as s}from"./slide-8f2PLrWl.js";import"./preload-helper-C1FmrZbK.js";import"./index-BSgcRBWk.js";import"./use-breakpoint-CoNcer5t.js";import"./use-breakpoint-value-D2WNVgM0.js";import"./use-color-mode-value-CLV_hip_.js";import"./transition-CAjTtIHs.js";const D={component:s,title:"Components / Slide"},t=()=>{const[l,{toggle:e}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(o,{onClick:e,children:"Please Click"}),n.jsx(s,{open:l,placement:"block-end",children:n.jsxs(a,{bg:"bg.panel",p:"md",w:"full",children:[n.jsx(i,{color:"bg.contrast",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),n.jsx(o,{alignSelf:"flex-end",onClick:e,children:"Close"})]})})]})},r=()=>{const[l,{toggle:e}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(o,{onClick:e,children:"Please Click"}),n.jsx(s,{duration:.7,open:l,placement:"block-end",children:n.jsxs(a,{bg:"bg.panel",p:"md",w:"full",children:[n.jsx(i,{color:"bg.contrast",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),n.jsx(o,{alignSelf:"flex-end",onClick:e,children:"Close"})]})})]})},c=()=>{const[l,{toggle:e}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(o,{onClick:e,children:"Please Click"}),n.jsx(s,{open:l,placement:"inline-end",children:n.jsxs(a,{bg:"bg.panel",h:"full",p:"md",children:[n.jsx(i,{color:"bg.contrast",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),n.jsx(o,{alignSelf:"flex-end",onClick:e,children:"Close"})]})})]})};var p,g,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide open={open} placement="block-end">
        <VStack bg="bg.panel" p="md" w="full">
          <Text color="bg.contrast">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,x,k;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide duration={0.7} open={open} placement="block-end">
        <VStack bg="bg.panel" p="md" w="full">
          <Text color="bg.contrast">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(k=(x=r.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var C,S,b;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide open={open} placement="inline-end">
        <VStack bg="bg.panel" h="full" p="md">
          <Text color="bg.contrast">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const E=["Basic","Duration","Placement"];export{t as Basic,r as Duration,c as Placement,E as __namedExportsOrder,D as default};
