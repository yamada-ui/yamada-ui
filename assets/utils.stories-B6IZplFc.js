import{j as o,_ as u,aW as d,aX as p,T as g,aY as f}from"./iframe-zUpmkGgl.js";import{u as x}from"./index-DYRkv6Tb.js";import{M as e}from"./motion-UAYfnPES.js";import{B as y}from"./button-BSJyaaef.js";import{u as b}from"./use-scroll-Dv3CNkyz.js";import{u as s}from"./use-transform-wwnNikSZ.js";import{B as h}from"./box-B0C5PNF2.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-8mUR-5Ot.js";import"./use-ripple-BYstKMN-.js";import"./rings-tpb0S9kk.js";const k={component:e,title:"Components / Motion / Utils"},t=()=>{const[n,{toggle:l}]=x();return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:l,children:"Please click"}),o.jsx(u,{children:n?o.jsx(e,{animate:{opacity:1},bg:"mono",color:"mono.contrast",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"l2",children:"Motion"}):null})]})},r=()=>{const n=d(f,{motion:{config:{transition:{duration:2}}}});return o.jsx(p,{config:n,children:o.jsx(e,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Motion"})})},i=()=>{const{scrollYProgress:n}=b(),l=s(n,[0,1],[0,400]),a=s(n,[0,1],[0,-400]),c=s(n,[0,1],[0,200]),m=s(n,[0,1],[0,-200]);return o.jsxs(h,{h:"300vh",position:"relative",w:"full",children:[o.jsx(g,{children:"Please scroll"}),o.jsx(e,{style:{y:l},bg:"info",boxSize:"2xs",left:"0",position:"absolute",rounded:"full",top:"110vh"}),o.jsx(e,{style:{y:a},bg:"success",boxSize:"sm",left:"20%",position:"absolute",rounded:"full",top:"120vh"}),o.jsx(e,{style:{y:c},bg:"warning",boxSize:"3xs",position:"absolute",right:"30%",rounded:"full",top:"110vh"}),o.jsx(e,{style:{y:m},bg:"danger",boxSize:"xs",position:"absolute",right:"0",rounded:"full",top:"120vh"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
    }} bg="mono" color="mono.contrast" p="md" rounded="l2">
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
}`,...i.parameters?.docs?.source}}};const w=["ExitPresenceAnimation","MotionConfig","ScrollAndTransform"];export{t as ExitPresenceAnimation,r as MotionConfig,i as ScrollAndTransform,w as __namedExportsOrder,k as default};
