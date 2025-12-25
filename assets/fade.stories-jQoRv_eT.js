import{j as e,Q as d}from"./iframe-3lFlqlPN.js";import{u as a}from"./index-CyVVgCbW.js";import{F as s}from"./fade-CU-f2qoO.js";import{B as c}from"./box-emitGOf7.js";import"./preload-helper-C1FmrZbK.js";import"./transition-BfAWYhwy.js";const E={component:s,title:"Components / Fade"},r=()=>{const[n,{toggle:o}]=a();return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:o,children:"Please Click"}),e.jsx(s,{bg:"orange.500",color:"white",open:n,p:"md",rounded:"l2",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(c,{bg:"purple.500",color:"white",p:"md",rounded:"l2",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},t=()=>{const[n,{toggle:o}]=a();return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:o,children:"Please Click"}),e.jsx(s,{bg:"orange.500",color:"white",duration:.4,open:n,p:"md",rounded:"l2",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(c,{bg:"purple.500",color:"white",p:"md",rounded:"l2",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},l=()=>{const[n,{toggle:o}]=a();return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:o,children:"Please Click"}),e.jsx(s,{bg:"orange.500",color:"white",open:n,p:"md",rounded:"l2",unmountOnExit:!0,children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(c,{bg:"purple.500",color:"white",p:"md",rounded:"l2",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var u,i,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,g,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,B,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(w=(B=l.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const P=["Basic","Duration","UnmountOnExit"];export{r as Basic,t as Duration,l as UnmountOnExit,P as __namedExportsOrder,E as default};
