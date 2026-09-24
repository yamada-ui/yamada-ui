import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n}from"./use-scroll-dldUqt9r.js";import{n as r}from"./use-transform-Decm3Pgf.js";import{t as i}from"./AnimatePresence-CdkiO36I.js";import{t as a}from"./react-DhJdH1Jr.js";import{n as o,t as s}from"./motion-B3D3Rpm_.js";import{n as c,t as l}from"./text-b2W5euYI.js";import{r as u,t as d}from"./button-CFBNyQlD.js";import{n as f,t as p}from"./box-C47iDJeO.js";import{n as m,t as h}from"./use-boolean-DS6wYhWQ.js";var g,_,v,y,b;function x(){return(x=e((()=>{a(),h(),f(),u(),c(),o(),g=t(),_={component:s,title:`Components / Motion / Utils`},v=()=>{let[e,{toggle:t}]=m();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{onClick:t,children:`Please click`}),(0,g.jsx)(i,{children:e?(0,g.jsx)(s,{animate:{opacity:1},bg:`mono`,color:`mono.contrast`,exit:{opacity:0},initial:{opacity:0},p:`md`,rounded:`l2`,children:`Motion`}):null})]})},y=()=>{let{scrollYProgress:e}=n(),t=r(e,[0,1],[0,400]),i=r(e,[0,1],[0,-400]),a=r(e,[0,1],[0,200]),o=r(e,[0,1],[0,-200]);return(0,g.jsxs)(p,{h:`300vh`,position:`relative`,w:`full`,children:[(0,g.jsx)(l,{children:`Please scroll`}),(0,g.jsx)(s,{style:{y:t},bg:`info`,boxSize:`2xs`,left:`0`,position:`absolute`,rounded:`full`,top:`110vh`}),(0,g.jsx)(s,{style:{y:i},bg:`success`,boxSize:`sm`,left:`20%`,position:`absolute`,rounded:`full`,top:`120vh`}),(0,g.jsx)(s,{style:{y:a},bg:`warning`,boxSize:`3xs`,position:`absolute`,right:`30%`,rounded:`full`,top:`110vh`}),(0,g.jsx)(s,{style:{y:o},bg:`danger`,boxSize:`xs`,position:`absolute`,right:`0`,rounded:`full`,top:`120vh`})]})},b=[`ExitPresenceAnimation`,`ScrollAndTransform`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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