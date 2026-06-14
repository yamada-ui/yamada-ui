import{i as e}from"./preload-helper-usAeo7Bx.js";import{$c as t,Ev as n,Fl as r,Kd as i,Lf as a,Nd as o,Pl as s,Rf as c,am as l,el as u,hm as d,om as f,pm as p,sm as m,vm as h}from"./iframe-4z85howq.js";var g,_,v,y,b;e((()=>{m(),t(),s(),o(),a(),f(),g=n(),_={component:l,title:`Components / Motion / Utils`},v=()=>{let[e,{toggle:t}]=u();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{onClick:t,children:`Please click`}),(0,g.jsx)(h,{children:e?(0,g.jsx)(l,{animate:{opacity:1},bg:`mono`,color:`mono.contrast`,exit:{opacity:0},initial:{opacity:0},p:`md`,rounded:`l2`,children:`Motion`}):null})]})},y=()=>{let{scrollYProgress:e}=d(),t=p(e,[0,1],[0,400]),n=p(e,[0,1],[0,-400]),i=p(e,[0,1],[0,200]),a=p(e,[0,1],[0,-200]);return(0,g.jsxs)(r,{h:`300vh`,position:`relative`,w:`full`,children:[(0,g.jsx)(c,{children:`Please scroll`}),(0,g.jsx)(l,{style:{y:t},bg:`info`,boxSize:`2xs`,left:`0`,position:`absolute`,rounded:`full`,top:`110vh`}),(0,g.jsx)(l,{style:{y:n},bg:`success`,boxSize:`sm`,left:`20%`,position:`absolute`,rounded:`full`,top:`120vh`}),(0,g.jsx)(l,{style:{y:i},bg:`warning`,boxSize:`3xs`,position:`absolute`,right:`30%`,rounded:`full`,top:`110vh`}),(0,g.jsx)(l,{style:{y:a},bg:`danger`,boxSize:`xs`,position:`absolute`,right:`0`,rounded:`full`,top:`120vh`})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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