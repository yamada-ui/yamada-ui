import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{d as n,l as r,m as i,n as a,r as o,t as s}from"./motion-CaViwnzb.js";import{t as c}from"./text-DSMMc5B6.js";import{t as l}from"./text-BM4F8FHS.js";import{l as u,t as d}from"./button-C66K-mOB.js";import{t as f}from"./box-D_8v7EGt.js";import{n as p,t as m}from"./use-boolean-DYW0OEzi.js";import{Fo as h}from"./iframe-CL-k_-ao.js";var g,_,v,y,b;e((()=>{o(),m(),h(),d(),l(),a(),g=t(),_={component:s,title:`Components / Motion / Utils`},v=()=>{let[e,{toggle:t}]=p();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{onClick:t,children:`Please click`}),(0,g.jsx)(i,{children:e?(0,g.jsx)(s,{animate:{opacity:1},bg:`mono`,color:`mono.contrast`,exit:{opacity:0},initial:{opacity:0},p:`md`,rounded:`l2`,children:`Motion`}):null})]})},y=()=>{let{scrollYProgress:e}=n(),t=r(e,[0,1],[0,400]),i=r(e,[0,1],[0,-400]),a=r(e,[0,1],[0,200]),o=r(e,[0,1],[0,-200]);return(0,g.jsxs)(f,{h:`300vh`,position:`relative`,w:`full`,children:[(0,g.jsx)(c,{children:`Please scroll`}),(0,g.jsx)(s,{style:{y:t},bg:`info`,boxSize:`2xs`,left:`0`,position:`absolute`,rounded:`full`,top:`110vh`}),(0,g.jsx)(s,{style:{y:i},bg:`success`,boxSize:`sm`,left:`20%`,position:`absolute`,rounded:`full`,top:`120vh`}),(0,g.jsx)(s,{style:{y:a},bg:`warning`,boxSize:`3xs`,position:`absolute`,right:`30%`,rounded:`full`,top:`110vh`}),(0,g.jsx)(s,{style:{y:o},bg:`danger`,boxSize:`xs`,position:`absolute`,right:`0`,rounded:`full`,top:`120vh`})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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