import{j as o,S as u,a8 as m,T as p}from"./iframe-BynoZ0Oq.js";import{u as d}from"./index-Bu3mq-Bw.js";import{M as s}from"./motion-ryDKQntY.js";import{u as x}from"./use-scroll-BHZyVTTv.js";import{u as e}from"./use-transform-KYdHyoHO.js";import{B as y}from"./box-DUrQbhTM.js";import"./preload-helper-PPVm8Dsz.js";const j={component:s,title:"Components / Motion / Utils"},t=()=>{const[n,{toggle:i}]=d();return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:i,children:"Please click"}),o.jsx(m,{children:n?o.jsx(s,{animate:{opacity:1},bg:"mono",color:"mono.contrast",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"l2",children:"Motion"}):null})]})},r=()=>{const{scrollYProgress:n}=x(),i=e(n,[0,1],[0,400]),l=e(n,[0,1],[0,-400]),a=e(n,[0,1],[0,200]),c=e(n,[0,1],[0,-200]);return o.jsxs(y,{h:"300vh",position:"relative",w:"full",children:[o.jsx(p,{children:"Please scroll"}),o.jsx(s,{style:{y:i},bg:"info",boxSize:"2xs",left:"0",position:"absolute",rounded:"full",top:"110vh"}),o.jsx(s,{style:{y:l},bg:"success",boxSize:"sm",left:"20%",position:"absolute",rounded:"full",top:"120vh"}),o.jsx(s,{style:{y:a},bg:"warning",boxSize:"3xs",position:"absolute",right:"30%",rounded:"full",top:"110vh"}),o.jsx(s,{style:{y:c},bg:"danger",boxSize:"xs",position:"absolute",right:"0",rounded:"full",top:"120vh"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const M=["ExitPresenceAnimation","ScrollAndTransform"];export{t as ExitPresenceAnimation,r as ScrollAndTransform,M as __namedExportsOrder,j as default};
