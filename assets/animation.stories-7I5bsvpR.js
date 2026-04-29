import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{m as n,n as r,p as i,r as a,t as o}from"./motion-CaViwnzb.js";import{l as s,t as c}from"./button-C66K-mOB.js";import{t as l}from"./box-D_8v7EGt.js";import{n as u,t as d}from"./use-boolean-DYW0OEzi.js";import{t as f}from"./heading-DnIVTUkI.js";import{a as p,r as m}from"./z-stack-D_lbkXhr.js";import{Dt as h,Fo as g,Hr as _}from"./iframe-BgKbVVkz.js";var v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{a(),d(),g(),c(),_(),h(),r(),v=t(),y={component:o,title:`Components / Motion / Animation`},b=()=>(0,v.jsx)(o,{animate:{x:100},bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,children:`Motion`}),x=()=>(0,v.jsx)(o,{animate:{x:100},bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,transition:{duration:2,ease:`easeOut`},children:`Motion`}),S=()=>(0,v.jsx)(o,{animate:{rotate:360,scale:1},bg:`mono`,color:`mono.contrast`,initial:{scale:0},p:`md`,rounded:`l2`,transition:{type:`spring`,damping:20,stiffness:260},children:`Motion`}),C=()=>(0,v.jsx)(o,{animate:{x:100},bg:`mono`,color:`mono.contrast`,initial:{x:-100},p:`md`,rounded:`l2`,children:`Motion`}),w=()=>{let[e,{toggle:t}]=u();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{onClick:t,children:`Please click`}),(0,v.jsx)(n,{children:e?(0,v.jsx)(o,{animate:{opacity:1},bg:`mono`,color:`mono.contrast`,exit:{opacity:0},initial:{opacity:0},p:`md`,rounded:`l2`,children:`Motion`}):null})]})},T=()=>(0,v.jsx)(o,{animate:{x:[0,100,0]},bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,children:`Motion`}),E=()=>(0,v.jsx)(o,{animate:{x:[0,100,0]},bg:`mono`,color:`mono.contrast`,p:`md`,rounded:`l2`,transition:{duration:3,times:[0,.2,1]},children:`Motion`}),D=()=>(0,v.jsx)(o,{animate:{borderRadius:[`0%`,`0%`,`50%`,`50%`,`0%`],rotate:[0,0,180,180,0],scale:[1,2,2,1,1]},bg:`mono`,h:`xs`,transition:{duration:2,ease:`easeInOut`,repeat:1/0,repeatDelay:1,times:[0,.2,.5,.8,1]},w:`xs`}),O=()=>{let[e,{toggle:t}]=u();return(0,v.jsx)(l,{as:`button`,"aria-label":`Toggle layout`,bg:`mono`,display:`flex`,h:`8`,justifyContent:e?`flex-end`:`flex-start`,p:`1`,rounded:`full`,w:`14`,onClick:t,children:(0,v.jsx)(o,{bg:`mono.contrast`,h:`6`,layout:!0,rounded:`full`,transition:{type:`spring`,damping:30,stiffness:700},w:`6`})})},k=()=>{let e=()=>{let[e,{toggle:t}]=u(!1);return(0,v.jsx)(o,{as:`button`,"aria-label":`Toggle accordion`,bg:`mono`,display:`flex`,h:`16`,layout:!0,p:`md`,placeContent:`center`,rounded:`l2`,w:e?`32`:`16`,onClick:t})};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(m,{children:[(0,v.jsx)(f,{size:`md`,children:`Not using LayoutGroup`}),(0,v.jsxs)(p,{children:[(0,v.jsx)(e,{}),(0,v.jsx)(e,{})]})]}),(0,v.jsxs)(m,{children:[(0,v.jsx)(f,{size:`md`,children:`Using LayoutGroup`}),(0,v.jsx)(p,{children:(0,v.jsxs)(i,{children:[(0,v.jsx)(e,{}),(0,v.jsx)(e,{})]})})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 2,
    ease: "easeOut"
  }}>
      Motion
    </Motion>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" initial={{
    x: -100
  }} p="md" rounded="l2">
      Motion
    </Motion>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 3,
    times: [0, 0.2, 1]
  }}>
      Motion
    </Motion>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}},A=[`Basic`,`Transition`,`TransitionType`,`Initial`,`Exit`,`Keyframes`,`Times`,`Repeat`,`Layout`,`GroupLayout`]}))();export{b as Basic,w as Exit,k as GroupLayout,C as Initial,T as Keyframes,O as Layout,D as Repeat,E as Times,x as Transition,S as TransitionType,A as __namedExportsOrder,y as default};