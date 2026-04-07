import{n as e}from"./chunk-zsgVPwQN.js";import{Du as t,Eu as n,Fo as r,Gu as i,Io as a,Ju as o,Uu as s,Wu as c,Yu as l,Zu as u,ds as d,jl as f,pp as p,us as m,xl as h}from"./iframe-DZGIdQv0.js";var g,_,v,y,b;e((()=>{i(),r(),m(),h(),n(),c(),g=p(),_={component:s,title:`Components / Motion / Utils`},v=()=>{let[e,{toggle:t}]=a();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{onClick:t,children:`Please click`}),(0,g.jsx)(u,{children:e?(0,g.jsx)(s,{animate:{opacity:1},bg:`mono`,color:`mono.contrast`,exit:{opacity:0},initial:{opacity:0},p:`md`,rounded:`l2`,children:`Motion`}):null})]})},y=()=>{let{scrollYProgress:e}=l(),n=o(e,[0,1],[0,400]),r=o(e,[0,1],[0,-400]),i=o(e,[0,1],[0,200]),a=o(e,[0,1],[0,-200]);return(0,g.jsxs)(d,{h:`300vh`,position:`relative`,w:`full`,children:[(0,g.jsx)(t,{children:`Please scroll`}),(0,g.jsx)(s,{style:{y:n},bg:`info`,boxSize:`2xs`,left:`0`,position:`absolute`,rounded:`full`,top:`110vh`}),(0,g.jsx)(s,{style:{y:r},bg:`success`,boxSize:`sm`,left:`20%`,position:`absolute`,rounded:`full`,top:`120vh`}),(0,g.jsx)(s,{style:{y:i},bg:`warning`,boxSize:`3xs`,position:`absolute`,right:`30%`,rounded:`full`,top:`110vh`}),(0,g.jsx)(s,{style:{y:a},bg:`danger`,boxSize:`xs`,position:`absolute`,right:`0`,rounded:`full`,top:`120vh`})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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