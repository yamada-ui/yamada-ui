import{j as o}from"./iframe-6cyGxZR1.js";import{u as d}from"./index-Bpe_Ryly.js";import{F as s}from"./fade-COtuqKn_.js";import{B as a}from"./button-G4XTmEMi.js";import{B as c}from"./box-BQQGFgNV.js";import"./transition-CmvqY4Ot.js";import"./use-ripple-CX8fxYrT.js";import"./rings-Cf-feOW-.js";const w={component:s,title:"Components / Fade"},r=()=>{const[e,{toggle:n}]=d();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:n,children:"Please Click"}),o.jsx(s,{bg:"orange.500",color:"white",open:e,p:"md",rounded:"l2",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),o.jsx(c,{bg:"purple.500",color:"white",p:"md",rounded:"l2",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},t=()=>{const[e,{toggle:n}]=d();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:n,children:"Please Click"}),o.jsx(s,{bg:"orange.500",color:"white",duration:.4,open:e,p:"md",rounded:"l2",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),o.jsx(c,{bg:"purple.500",color:"white",p:"md",rounded:"l2",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},l=()=>{const[e,{toggle:n}]=d();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:n,children:"Please Click"}),o.jsx(s,{bg:"orange.500",color:"white",open:e,p:"md",rounded:"l2",unmountOnExit:!0,children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),o.jsx(c,{bg:"purple.500",color:"white",p:"md",rounded:"l2",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade bg="orange.500" color="white" open={open} p="md" rounded="l2">
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Fade>

      <Box bg="purple.500" color="white" p="md" rounded="l2" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade bg="orange.500" color="white" duration={0.4} open={open} p="md" rounded="l2">
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Fade>

      <Box bg="purple.500" color="white" p="md" rounded="l2" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade bg="orange.500" color="white" open={open} p="md" rounded="l2" unmountOnExit>
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Fade>

      <Box bg="purple.500" color="white" p="md" rounded="l2" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...l.parameters?.docs?.source}}};const j=["Basic","Duration","UnmountOnExit"];export{r as Basic,t as Duration,l as UnmountOnExit,j as __namedExportsOrder,w as default};
