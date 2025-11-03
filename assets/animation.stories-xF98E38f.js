import{j as n,Q as b,a6 as j,V as x}from"./iframe-D0k82VKj.js";import{u as g}from"./index-BeFM66w5.js";import{M as o}from"./motion-jISuMisM.js";import{B as h}from"./box-BYUm6qHd.js";import{H as f}from"./heading-Z6IrjMgv.js";import{H as y}from"./h-stack-2JM7Wrl-.js";import{L as S}from"./index-BRg0U5ih.js";import"./preload-helper-PPVm8Dsz.js";const T={component:o,title:"Components / Motion / Animation"},r=()=>n.jsx(o,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Motion"}),a=()=>n.jsx(o,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:2,ease:"easeOut"},children:"Motion"}),s=()=>n.jsx(o,{animate:{rotate:360,scale:1},bg:"mono",color:"mono.contrast",initial:{scale:0},p:"md",rounded:"l2",transition:{type:"spring",damping:20,stiffness:260},children:"Motion"}),i=()=>n.jsx(o,{animate:{x:100},bg:"mono",color:"mono.contrast",initial:{x:-100},p:"md",rounded:"l2",children:"Motion"}),c=()=>{const[t,{toggle:e}]=g();return n.jsxs(n.Fragment,{children:[n.jsx(b,{onClick:e,children:"Please click"}),n.jsx(j,{children:t?n.jsx(o,{animate:{opacity:1},bg:"mono",color:"mono.contrast",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"l2",children:"Motion"}):null})]})},m=()=>n.jsx(o,{animate:{x:[0,100,0]},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Motion"}),d=()=>n.jsx(o,{animate:{x:[0,100,0]},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:3,times:[0,.2,1]},children:"Motion"}),l=()=>n.jsx(o,{animate:{borderRadius:["0%","0%","50%","50%","0%"],rotate:[0,0,180,180,0],scale:[1,2,2,1,1]},bg:"mono",h:"xs",transition:{duration:2,ease:"easeInOut",repeat:1/0,repeatDelay:1,times:[0,.2,.5,.8,1]},w:"xs"}),u=()=>{const[t,{toggle:e}]=g();return n.jsx(h,{as:"button",bg:"mono",display:"flex",h:"8",justifyContent:t?"flex-end":"flex-start",p:"1",rounded:"full",w:"14",onClick:e,children:n.jsx(o,{bg:"mono.contrast",h:"6",layout:!0,rounded:"full",transition:{type:"spring",damping:30,stiffness:700},w:"6"})})},p=()=>{const t=()=>{const[e,{toggle:M}]=g(!1);return n.jsx(o,{as:"button",bg:"mono",display:"flex",h:"16",layout:!0,p:"md",placeContent:"center",rounded:"l2",w:e?"32":"16",onClick:M})};return n.jsxs(n.Fragment,{children:[n.jsxs(x,{children:[n.jsx(f,{size:"md",children:"Not using LayoutGroup"}),n.jsxs(y,{children:[n.jsx(t,{}),n.jsx(t,{})]})]}),n.jsxs(x,{children:[n.jsx(f,{size:"md",children:"Using LayoutGroup"}),n.jsx(y,{children:n.jsxs(S,{children:[n.jsx(t,{}),n.jsx(t,{})]})})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 2,
    ease: "easeOut"
  }}>
      Motion
    </Motion>;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    rotate: 360,
    scale: 1
  }} bg="mono" color="mono.contrast" initial={{
    scale: 0
  }} p="md" rounded="l2" transition={{
    type: "spring",
    damping: 20,
    stiffness: 260
  }}>
      Motion
    </Motion>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" initial={{
    x: -100
  }} p="md" rounded="l2">
      Motion
    </Motion>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [visible, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please click</Button>

      <AnimatePresence>
        {visible ? <Motion animate={{
        opacity: 1
      }} bg="mono" color="mono.contrast" exit={{
        opacity: 0
      }} initial={{
        opacity: 0
      }} p="md" rounded="l2">
            Motion
          </Motion> : null}
      </AnimatePresence>
    </>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 3,
    times: [0, 0.2, 1]
  }}>
      Motion
    </Motion>;
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
    rotate: [0, 0, 180, 180, 0],
    scale: [1, 2, 2, 1, 1]
  }} bg="mono" h="xs" transition={{
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 1,
    times: [0, 0.2, 0.5, 0.8, 1]
  }} w="xs" />;
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <Box as="button" bg="mono" display="flex" h="8" justifyContent={!flg ? "flex-start" : "flex-end"} p="1" rounded="full" w="14" onClick={toggle}>
      <Motion bg="mono.contrast" h="6" layout rounded="full" transition={{
      type: "spring",
      damping: 30,
      stiffness: 700
    }} w="6" />
    </Box>;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const Accordion: FC = () => {
    const [open, {
      toggle
    }] = useBoolean(false);
    return <Motion as="button" bg="mono" display="flex" h="16" layout p="md" placeContent="center" rounded="l2" w={open ? "32" : "16"} onClick={toggle} />;
  };
  return <>
      <VStack>
        <Heading size="md">Not using LayoutGroup</Heading>

        <HStack>
          <Accordion />
          <Accordion />
        </HStack>
      </VStack>

      <VStack>
        <Heading size="md">Using LayoutGroup</Heading>

        <HStack>
          <LayoutGroup>
            <Accordion />
            <Accordion />
          </LayoutGroup>
        </HStack>
      </VStack>
    </>;
}`,...p.parameters?.docs?.source}}};const I=["Basic","Transition","TransitionType","Initial","Exit","Keyframes","Times","Repeat","Layout","GroupLayout"];export{r as Basic,c as Exit,p as GroupLayout,i as Initial,m as Keyframes,u as Layout,l as Repeat,d as Times,a as Transition,s as TransitionType,I as __namedExportsOrder,T as default};
