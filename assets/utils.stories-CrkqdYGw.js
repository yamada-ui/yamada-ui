import{n as e}from"./chunk-zsgVPwQN.js";import{Cd as t,Ms as n,Ns as r,Sd as i,Td as a,_d as o,im as s,is as c,iu as l,ml as u,rs as d,ru as f,vd as p,wl as m,yd as h}from"./iframe-BNaKCSd5.js";var g,_,v,y,b;e((()=>{h(),d(),n(),u(),f(),p(),g=s(),_={component:o,title:`Components / Motion / Utils`},v=()=>{let[e,{toggle:t}]=c();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m,{onClick:t,children:`Please click`}),(0,g.jsx)(a,{children:e?(0,g.jsx)(o,{animate:{opacity:1},bg:`mono`,color:`mono.contrast`,exit:{opacity:0},initial:{opacity:0},p:`md`,rounded:`l2`,children:`Motion`}):null})]})},y=()=>{let{scrollYProgress:e}=t(),n=i(e,[0,1],[0,400]),a=i(e,[0,1],[0,-400]),s=i(e,[0,1],[0,200]),c=i(e,[0,1],[0,-200]);return(0,g.jsxs)(r,{h:`300vh`,position:`relative`,w:`full`,children:[(0,g.jsx)(l,{children:`Please scroll`}),(0,g.jsx)(o,{style:{y:n},bg:`info`,boxSize:`2xs`,left:`0`,position:`absolute`,rounded:`full`,top:`110vh`}),(0,g.jsx)(o,{style:{y:a},bg:`success`,boxSize:`sm`,left:`20%`,position:`absolute`,rounded:`full`,top:`120vh`}),(0,g.jsx)(o,{style:{y:s},bg:`warning`,boxSize:`3xs`,position:`absolute`,right:`30%`,rounded:`full`,top:`110vh`}),(0,g.jsx)(o,{style:{y:c},bg:`danger`,boxSize:`xs`,position:`absolute`,right:`0`,rounded:`full`,top:`120vh`})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b=[`ExitPresenceAnimation`,`ScrollAndTransform`]}))();export{v as ExitPresenceAnimation,y as ScrollAndTransform,b as __namedExportsOrder,_ as default};