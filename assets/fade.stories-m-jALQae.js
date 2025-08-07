import{j as o}from"./iframe-CDTQ5ROD.js";import{u as d}from"./index-DcBYRjO0.js";import{F as s}from"./fade-DOpjQicd.js";import{B as a}from"./button-DJ5m59RZ.js";import{B as c}from"./box-DHXTkPpQ.js";import"./preload-helper-D9Z9MdNV.js";import"./transition-BQ9QLj2F.js";import"./use-ripple-CRajOxML.js";import"./rings-dYmcfrIU.js";const j={component:s,title:"Components / Fade"},r=()=>{const[e,{toggle:n}]=d();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:n,children:"Please Click"}),o.jsx(s,{bg:"orange.500",color:"white",open:e,p:"md",rounded:"l2",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),o.jsx(c,{bg:"purple.500",color:"white",p:"md",rounded:"l2",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},t=()=>{const[e,{toggle:n}]=d();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:n,children:"Please Click"}),o.jsx(s,{bg:"orange.500",color:"white",duration:.4,open:e,p:"md",rounded:"l2",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),o.jsx(c,{bg:"purple.500",color:"white",p:"md",rounded:"l2",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},l=()=>{const[e,{toggle:n}]=d();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:n,children:"Please Click"}),o.jsx(s,{bg:"orange.500",color:"white",open:e,p:"md",rounded:"l2",unmountOnExit:!0,children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),o.jsx(c,{bg:"purple.500",color:"white",p:"md",rounded:"l2",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const C=["Basic","Duration","UnmountOnExit"];export{r as Basic,t as Duration,l as UnmountOnExit,C as __namedExportsOrder,j as default};
