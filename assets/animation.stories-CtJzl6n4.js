import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{t as n}from"./LayoutGroup-nMSi9d6b.js";import{t as r}from"./AnimatePresence-CdkiO36I.js";import{t as i}from"./react-DhJdH1Jr.js";import{n as a,t as o}from"./motion-B3D3Rpm_.js";import{r as s,t as c}from"./button-CFBNyQlD.js";import{n as l,t as u}from"./box-C47iDJeO.js";import{n as d,t as f}from"./use-boolean-DS6wYhWQ.js";import{n as p,t as m}from"./heading-mQlbK6e0.js";import{n as h,t as g}from"./h-stack-CueUnXBe.js";import{n as _,t as v}from"./v-stack-DgxvBjIl.js";var y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{i(),f(),l(),s(),p(),h(),_(),a(),y=t(),b={component:o,title:`Components / Motion / Animation`},x=()=>(0,y.jsx)(o,{animate:{x:100},bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,children:`Motion`}),S=()=>(0,y.jsx)(o,{animate:{x:100},bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,transition:{duration:2,ease:`easeOut`},children:`Motion`}),C=()=>(0,y.jsx)(o,{animate:{rotate:360,scale:1},bg:`mono`,color:`mono.contrast`,initial:{scale:0},p:`md`,rounded:`l2`,transition:{type:`spring`,damping:20,stiffness:260},children:`Motion`}),w=()=>(0,y.jsx)(o,{animate:{x:100},bg:`mono`,color:`mono.contrast`,initial:{x:-100},p:`md`,rounded:`l2`,children:`Motion`}),T=()=>{let[e,{toggle:t}]=d();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c,{onClick:t,children:`Please click`}),(0,y.jsx)(r,{children:e?(0,y.jsx)(o,{animate:{opacity:1},bg:`mono`,color:`mono.contrast`,exit:{opacity:0},initial:{opacity:0},p:`md`,rounded:`l2`,children:`Motion`}):null})]})},E=()=>(0,y.jsx)(o,{animate:{x:[0,100,0]},bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,children:`Motion`}),D=()=>(0,y.jsx)(o,{animate:{x:[0,100,0]},bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,transition:{duration:3,times:[0,.2,1]},children:`Motion`}),O=()=>(0,y.jsx)(o,{animate:{borderRadius:[`0%`,`0%`,`50%`,`50%`,`0%`],rotate:[0,0,180,180,0],scale:[1,2,2,1,1]},bg:`mono`,h:`xs`,transition:{duration:2,ease:`easeInOut`,repeat:1/0,repeatDelay:1,times:[0,.2,.5,.8,1]},w:`xs`}),k=()=>{let[e,{toggle:t}]=d();return(0,y.jsx)(u,{as:`button`,"aria-label":`Toggle layout`,bg:`mono`,display:`flex`,h:`8`,justifyContent:e?`flex-end`:`flex-start`,p:`1`,rounded:`full`,w:`14`,onClick:t,children:(0,y.jsx)(o,{bg:`mono.contrast`,h:`6`,layout:!0,rounded:`full`,transition:{type:`spring`,damping:30,stiffness:700},w:`6`})})},A=()=>{let e=()=>{let[e,{toggle:t}]=d(!1);return(0,y.jsx)(o,{as:`button`,"aria-label":`Toggle accordion`,bg:`mono`,display:`flex`,h:`16`,layout:!0,p:`md`,placeContent:`center`,rounded:`l2`,w:e?`32`:`16`,onClick:t})};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(v,{children:[(0,y.jsx)(m,{size:`md`,children:`Not using LayoutGroup`}),(0,y.jsxs)(g,{children:[(0,y.jsx)(e,{}),(0,y.jsx)(e,{})]})]}),(0,y.jsxs)(v,{children:[(0,y.jsx)(m,{size:`md`,children:`Using LayoutGroup`}),(0,y.jsx)(g,{children:(0,y.jsxs)(n,{children:[(0,y.jsx)(e,{}),(0,y.jsx)(e,{})]})})]})]})},j=[`Basic`,`Transition`,`TransitionType`,`Initial`,`Exit`,`Keyframes`,`Times`,`Repeat`,`Layout`,`GroupLayout`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 2,
    ease: "easeOut"
  }}>
      Motion
    </Motion>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" initial={{
    x: -100
  }} p="md" rounded="l2">
      Motion
    </Motion>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 3,
    times: [0, 0.2, 1]
  }}>
      Motion
    </Motion>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <Box as="button" aria-label="Toggle layout" bg="mono" display="flex" h="8" justifyContent={!flg ? "flex-start" : "flex-end"} p="1" rounded="full" w="14" onClick={toggle}>
      <Motion bg="mono.contrast" h="6" layout rounded="full" transition={{
      type: "spring",
      damping: 30,
      stiffness: 700
    }} w="6" />
    </Box>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const Accordion: FC = () => {
    const [open, {
      toggle
    }] = useBoolean(false);
    return <Motion as="button" aria-label="Toggle accordion" bg="mono" display="flex" h="16" layout p="md" placeContent="center" rounded="l2" w={open ? "32" : "16"} onClick={toggle} />;
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
}`,...A.parameters?.docs?.source}}}})))()}M();export{x as Basic,T as Exit,A as GroupLayout,w as Initial,E as Keyframes,k as Layout,O as Repeat,D as Times,S as Transition,C as TransitionType,j as __namedExportsOrder,b as default};