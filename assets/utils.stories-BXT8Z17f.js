import{j as o,Z as u,T as m}from"./iframe-Bn8cMbTR.js";import{u as p}from"./index-BCG1hiCF.js";import{M as s}from"./motion-Dn8IBEcK.js";import{B as d}from"./button-BuVkzRhm.js";import{u as x}from"./use-scroll-C_d1uY_2.js";import{u as e}from"./use-transform-D8dEhZK9.js";import{B as y}from"./box-BUG0hLOH.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-JbSDZe-p.js";import"./use-ripple-B-Mo0cfK.js";import"./rings-Di-RwxpC.js";const z={component:s,title:"Components / Motion / Utils"},t=()=>{const[n,{toggle:i}]=p();return o.jsxs(o.Fragment,{children:[o.jsx(d,{onClick:i,children:"Please click"}),o.jsx(u,{children:n?o.jsx(s,{animate:{opacity:1},bg:"mono",color:"mono.contrast",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"l2",children:"Motion"}):null})]})},r=()=>{const{scrollYProgress:n}=x(),i=e(n,[0,1],[0,400]),l=e(n,[0,1],[0,-400]),a=e(n,[0,1],[0,200]),c=e(n,[0,1],[0,-200]);return o.jsxs(y,{h:"300vh",position:"relative",w:"full",children:[o.jsx(m,{children:"Please scroll"}),o.jsx(s,{style:{y:i},bg:"info",boxSize:"2xs",left:"0",position:"absolute",rounded:"full",top:"110vh"}),o.jsx(s,{style:{y:l},bg:"success",boxSize:"sm",left:"20%",position:"absolute",rounded:"full",top:"120vh"}),o.jsx(s,{style:{y:a},bg:"warning",boxSize:"3xs",position:"absolute",right:"30%",rounded:"full",top:"110vh"}),o.jsx(s,{style:{y:c},bg:"danger",boxSize:"xs",position:"absolute",right:"0",rounded:"full",top:"120vh"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    scrollYProgress
  } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return <Box h="300vh" position="relative" w="full">
      <Text>Please scroll</Text>

      <Motion style={{
      y: y1
    }} bg="info" boxSize="2xs" left="0" position="absolute" rounded="full" top="110vh" />

      <Motion style={{
      y: y2
    }} bg="success" boxSize="sm" left="20%" position="absolute" rounded="full" top="120vh" />

      <Motion style={{
      y: y3
    }} bg="warning" boxSize="3xs" position="absolute" right="30%" rounded="full" top="110vh" />

      <Motion style={{
      y: y4
    }} bg="danger" boxSize="xs" position="absolute" right="0" rounded="full" top="120vh" />
    </Box>;
}`,...r.parameters?.docs?.source}}};const A=["ExitPresenceAnimation","ScrollAndTransform"];export{t as ExitPresenceAnimation,r as ScrollAndTransform,A as __namedExportsOrder,z as default};
