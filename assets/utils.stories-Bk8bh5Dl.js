import{j as o,Q as g,a6 as f,T as b}from"./iframe-C1QqsVA9.js";import{u as h}from"./index-KAAQppRK.js";import{M as s}from"./motion-6nvY9f6m.js";import{u as v}from"./use-scroll-BCyczcIE.js";import{u as e}from"./use-transform-BndhVESG.js";import{B as P}from"./box-BbsNZILY.js";import"./preload-helper-C1FmrZbK.js";const Y={component:s,title:"Components / Motion / Utils"},t=()=>{const[n,{toggle:i}]=h();return o.jsxs(o.Fragment,{children:[o.jsx(g,{onClick:i,children:"Please click"}),o.jsx(f,{children:n?o.jsx(s,{animate:{opacity:1},bg:"mono",color:"mono.contrast",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"l2",children:"Motion"}):null})]})},r=()=>{const{scrollYProgress:n}=v(),i=e(n,[0,1],[0,400]),d=e(n,[0,1],[0,-400]),x=e(n,[0,1],[0,200]),y=e(n,[0,1],[0,-200]);return o.jsxs(P,{h:"300vh",position:"relative",w:"full",children:[o.jsx(b,{children:"Please scroll"}),o.jsx(s,{style:{y:i},bg:"info",boxSize:"2xs",left:"0",position:"absolute",rounded:"full",top:"110vh"}),o.jsx(s,{style:{y:d},bg:"success",boxSize:"sm",left:"20%",position:"absolute",rounded:"full",top:"120vh"}),o.jsx(s,{style:{y:x},bg:"warning",boxSize:"3xs",position:"absolute",right:"30%",rounded:"full",top:"110vh"}),o.jsx(s,{style:{y},bg:"danger",boxSize:"xs",position:"absolute",right:"0",rounded:"full",top:"120vh"})]})};var l,a,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const k=["ExitPresenceAnimation","ScrollAndTransform"];export{t as ExitPresenceAnimation,r as ScrollAndTransform,k as __namedExportsOrder,Y as default};
