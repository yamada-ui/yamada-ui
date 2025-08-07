import{j as n,V as u}from"./iframe-CDTQ5ROD.js";import{u as l}from"./index-DcBYRjO0.js";import{C as r}from"./collapse-C0MBLyAu.js";import{B as a}from"./button-DJ5m59RZ.js";import{B as t}from"./box-DHXTkPpQ.js";import"./preload-helper-D9Z9MdNV.js";import"./transition-BQ9QLj2F.js";import"./use-ripple-CRajOxML.js";import"./rings-dYmcfrIU.js";const w={component:r,title:"Components / Collapse"},s=()=>{const[e,{toggle:o}]=l();return n.jsxs(u,{align:"flex-start",gap:0,children:[n.jsx(a,{onClick:o,children:"Please Click"}),n.jsx(r,{open:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"l2",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},c=()=>{const[e,{toggle:o}]=l();return n.jsxs(u,{align:"flex-start",gap:0,children:[n.jsx(a,{onClick:o,children:"Please Click"}),n.jsx(r,{duration:.7,open:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"l2",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},i=()=>{const[e,{toggle:o}]=l();return n.jsxs(u,{align:"flex-start",gap:0,children:[n.jsx(a,{onClick:o,children:"Please Click"}),n.jsx(r,{open:e,unmountOnExit:!0,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"l2",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{bg:"purple.500",color:"white",mt:"md",p:"md",rounded:"l2",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[e,{toggle:o}]=l();return n.jsxs(u,{align:"flex-start",gap:0,children:[n.jsx(a,{onClick:o,children:"Please Click"}),n.jsx(r,{animationOpacity:!1,open:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"l2",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{bg:"purple.500",color:"white",mt:"md",p:"md",rounded:"l2",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},d=()=>{const[e,{toggle:o}]=l();return n.jsxs(n.Fragment,{children:[n.jsx(a,{onClick:o,children:"Please Click"}),n.jsx(r,{open:e,startingHeight:20,children:n.jsxs(t,{color:"purple.500",children:["私の戦闘力は530000です。",n.jsx("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="l2" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse duration={0.7} open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="l2" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse open={open} unmountOnExit>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="l2" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="l2" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse animationOpacity={false} open={open}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="l2" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="l2" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};const S=["Basic","Duration","UnmountOnExit","AnimationOpacity","StartingHeight"];export{p as AnimationOpacity,s as Basic,c as Duration,d as StartingHeight,i as UnmountOnExit,S as __namedExportsOrder,w as default};
