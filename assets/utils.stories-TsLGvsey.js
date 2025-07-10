import{j as o,R as u,aG as d,aH as p,T as g,aI as f}from"./iframe-BG38LAQ9.js";import{u as x}from"./index-BoPMWYjX.js";import{M as e}from"./motion-CYjvGQm6.js";import{B as y}from"./button-CfsqSZ9w.js";import{u as b}from"./use-scroll-nKMscvIY.js";import{u as s}from"./use-transform-D6gR4RFg.js";import{B as h}from"./box-CvTUj01L.js";import"./use-ripple-MuLBmFKU.js";import"./rings-BXfyi9cx.js";const C={component:e,title:"Components / Motion / Utils"},t=()=>{const[n,{toggle:l}]=x();return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:l,children:"Please click"}),o.jsx(u,{children:n?o.jsx(e,{animate:{opacity:1},bg:"mono",color:"mono.contrast",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"md",children:"Motion"}):null})]})},r=()=>{const n=d(f,{motion:{config:{transition:{duration:2}}}});return o.jsx(p,{config:n,children:o.jsx(e,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"md",children:"Motion"})})},i=()=>{const{scrollYProgress:n}=b(),l=s(n,[0,1],[0,400]),a=s(n,[0,1],[0,-400]),c=s(n,[0,1],[0,200]),m=s(n,[0,1],[0,-200]);return o.jsxs(h,{h:"300vh",position:"relative",w:"full",children:[o.jsx(g,{children:"Please scroll"}),o.jsx(e,{style:{y:l},bg:"info",boxSize:"2xs",left:"0",position:"absolute",rounded:"full",top:"110vh"}),o.jsx(e,{style:{y:a},bg:"success",boxSize:"sm",left:"20%",position:"absolute",rounded:"full",top:"120vh"}),o.jsx(e,{style:{y:c},bg:"warning",boxSize:"3xs",position:"absolute",right:"30%",rounded:"full",top:"110vh"}),o.jsx(e,{style:{y:m},bg:"danger",boxSize:"xs",position:"absolute",right:"0",rounded:"full",top:"120vh"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
      }} p="md" rounded="md">
            Motion
          </Motion> : null}
      </AnimatePresence>
    </>;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const config = merge(defaultConfig, {
    motion: {
      config: {
        transition: {
          duration: 2
        }
      }
    }
  });
  return <UIProvider config={config}>
      <Motion animate={{
      x: 100
    }} bg="mono" color="mono.contrast" p="md" rounded="md">
        Motion
      </Motion>
    </UIProvider>;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const Y=["ExitPresenceAnimation","MotionConfig","ScrollAndTransform"];export{t as ExitPresenceAnimation,r as MotionConfig,i as ScrollAndTransform,Y as __namedExportsOrder,C as default};
