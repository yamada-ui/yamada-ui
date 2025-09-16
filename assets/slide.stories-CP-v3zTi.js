import{j as n,R as o,V as a,T as i}from"./iframe-Brv718Ke.js";import{u as d}from"./index-2Zpngp_N.js";import{S as s}from"./slide-B84WWjD5.js";import"./preload-helper-D9Z9MdNV.js";import"./index-D5wu8vhg.js";import"./use-breakpoint-BYwrrTnn.js";import"./use-breakpoint-value-B49E1fW3.js";import"./use-color-mode-value-DNz64yif.js";import"./transition-CCH_TLdJ.js";const f={component:s,title:"Components / Slide"},t=()=>{const[l,{toggle:e}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(o,{onClick:e,children:"Please Click"}),n.jsx(s,{open:l,placement:"block-end",children:n.jsxs(a,{bg:"bg.panel",p:"md",w:"full",children:[n.jsx(i,{color:"bg.contrast",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),n.jsx(o,{alignSelf:"flex-end",onClick:e,children:"Close"})]})})]})},r=()=>{const[l,{toggle:e}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(o,{onClick:e,children:"Please Click"}),n.jsx(s,{duration:.7,open:l,placement:"block-end",children:n.jsxs(a,{bg:"bg.panel",p:"md",w:"full",children:[n.jsx(i,{color:"bg.contrast",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),n.jsx(o,{alignSelf:"flex-end",onClick:e,children:"Close"})]})})]})},c=()=>{const[l,{toggle:e}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(o,{onClick:e,children:"Please Click"}),n.jsx(s,{open:l,placement:"inline-end",children:n.jsxs(a,{bg:"bg.panel",h:"full",p:"md",children:[n.jsx(i,{color:"bg.contrast",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),n.jsx(o,{alignSelf:"flex-end",onClick:e,children:"Close"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const h=["Basic","Duration","Placement"];export{t as Basic,r as Duration,c as Placement,h as __namedExportsOrder,f as default};
