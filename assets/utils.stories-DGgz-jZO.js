import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{m as n,t as r,v as i,x as a}from"./react-BSAQLNNY.js";import{n as o,t as s}from"./motion-DFKc0xGX.js";import{n as c,t as l}from"./text-YXQv6zL3.js";import{r as u,t as d}from"./button-CliLQZ-3.js";import{n as f,t as p}from"./box-Czw6e43r.js";import{n as m,t as h}from"./use-boolean-D_o9gF-o.js";var g,_,v,y,b;function x(){return(x=e((()=>{r(),h(),f(),u(),c(),o(),g=t(),_={component:s,title:`Components / Motion / Utils`},v=()=>{let[e,{toggle:t}]=m();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{onClick:t,children:`Please click`}),(0,g.jsx)(a,{children:e?(0,g.jsx)(s,{animate:{opacity:1},bg:`mono`,color:`mono.contrast`,exit:{opacity:0},initial:{opacity:0},p:`md`,rounded:`l2`,children:`Motion`}):null})]})},y=()=>{let{scrollYProgress:e}=i(),t=n(e,[0,1],[0,400]),r=n(e,[0,1],[0,-400]),a=n(e,[0,1],[0,200]),o=n(e,[0,1],[0,-200]);return(0,g.jsxs)(p,{h:`300vh`,position:`relative`,w:`full`,children:[(0,g.jsx)(l,{children:`Please scroll`}),(0,g.jsx)(s,{style:{y:t},bg:`info`,boxSize:`2xs`,left:`0`,position:`absolute`,rounded:`full`,top:`110vh`}),(0,g.jsx)(s,{style:{y:r},bg:`success`,boxSize:`sm`,left:`20%`,position:`absolute`,rounded:`full`,top:`120vh`}),(0,g.jsx)(s,{style:{y:a},bg:`warning`,boxSize:`3xs`,position:`absolute`,right:`30%`,rounded:`full`,top:`110vh`}),(0,g.jsx)(s,{style:{y:o},bg:`danger`,boxSize:`xs`,position:`absolute`,right:`0`,rounded:`full`,top:`120vh`})]})},b=[`ExitPresenceAnimation`,`ScrollAndTransform`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{v as ExitPresenceAnimation,y as ScrollAndTransform,b as __namedExportsOrder,_ as default};