import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{m as n,t as r,v as i,x as a}from"./react-DrABpq88.js";import{t as o}from"./text-BU_JgSy6.js";import{t as s}from"./text-CIXXiNdJ.js";import{d as c,t as l}from"./button-CqpQ8yWo.js";import{n as u,t as d}from"./use-boolean-BAa8oyUv.js";import{Nl as f,Pl as p}from"./iframe-Clx83w1K.js";import{n as m,t as h}from"./motion-DJcWEEzP.js";var g,_,v,y,b;e((()=>{r(),d(),f(),l(),s(),m(),g=t(),_={component:h,title:`Components / Motion / Utils`},v=()=>{let[e,{toggle:t}]=u();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{onClick:t,children:`Please click`}),(0,g.jsx)(a,{children:e?(0,g.jsx)(h,{animate:{opacity:1},bg:`mono`,color:`mono.contrast`,exit:{opacity:0},initial:{opacity:0},p:`md`,rounded:`l2`,children:`Motion`}):null})]})},y=()=>{let{scrollYProgress:e}=i(),t=n(e,[0,1],[0,400]),r=n(e,[0,1],[0,-400]),a=n(e,[0,1],[0,200]),s=n(e,[0,1],[0,-200]);return(0,g.jsxs)(p,{h:`300vh`,position:`relative`,w:`full`,children:[(0,g.jsx)(o,{children:`Please scroll`}),(0,g.jsx)(h,{style:{y:t},bg:`info`,boxSize:`2xs`,left:`0`,position:`absolute`,rounded:`full`,top:`110vh`}),(0,g.jsx)(h,{style:{y:r},bg:`success`,boxSize:`sm`,left:`20%`,position:`absolute`,rounded:`full`,top:`120vh`}),(0,g.jsx)(h,{style:{y:a},bg:`warning`,boxSize:`3xs`,position:`absolute`,right:`30%`,rounded:`full`,top:`110vh`}),(0,g.jsx)(h,{style:{y:s},bg:`danger`,boxSize:`xs`,position:`absolute`,right:`0`,rounded:`full`,top:`120vh`})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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