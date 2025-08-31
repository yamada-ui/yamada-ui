import{j as n,V as a,T as i}from"./iframe-COpE3uSe.js";import{u as p}from"./index-8bl8yV-6.js";import{S as s}from"./slide-B3cO77yv.js";import{B as o}from"./button-C1iRx7Aw.js";import"./preload-helper-D9Z9MdNV.js";import"./index-rIgF0o0K.js";import"./use-breakpoint-Dw6HOVd7.js";import"./use-breakpoint-value-CoBUj51o.js";import"./use-color-mode-value-DQ4glCV3.js";import"./transition-Cw2RDG12.js";import"./button.style-CEKjhFlf.js";import"./use-ripple-dUKU3i3-.js";import"./rings-3vgxaMbV.js";const P={component:s,title:"Components / Slide"},t=()=>{const[l,{toggle:e}]=p();return n.jsxs(n.Fragment,{children:[n.jsx(o,{onClick:e,children:"Please Click"}),n.jsx(s,{open:l,placement:"block-end",children:n.jsxs(a,{bg:"bg.panel",p:"md",w:"full",children:[n.jsx(i,{color:"bg.contrast",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),n.jsx(o,{alignSelf:"flex-end",onClick:e,children:"Close"})]})})]})},r=()=>{const[l,{toggle:e}]=p();return n.jsxs(n.Fragment,{children:[n.jsx(o,{onClick:e,children:"Please Click"}),n.jsx(s,{duration:.7,open:l,placement:"block-end",children:n.jsxs(a,{bg:"bg.panel",p:"md",w:"full",children:[n.jsx(i,{color:"bg.contrast",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),n.jsx(o,{alignSelf:"flex-end",onClick:e,children:"Close"})]})})]})},c=()=>{const[l,{toggle:e}]=p();return n.jsxs(n.Fragment,{children:[n.jsx(o,{onClick:e,children:"Please Click"}),n.jsx(s,{open:l,placement:"inline-end",children:n.jsxs(a,{bg:"bg.panel",h:"full",p:"md",children:[n.jsx(i,{color:"bg.contrast",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),n.jsx(o,{alignSelf:"flex-end",onClick:e,children:"Close"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const T=["Basic","Duration","Placement"];export{t as Basic,r as Duration,c as Placement,T as __namedExportsOrder,P as default};
