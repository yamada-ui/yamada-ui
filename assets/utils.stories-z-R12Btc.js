import{j as o}from"./jsx-runtime-CfatFE5O.js";import{u as v}from"./index-gGKStiao.js";import{e as P}from"./extend-config-Y131j1Xp.js";import{U as j}from"./ui-provider-DveZq7vD.js";import{M as r}from"./motion-BbZAe4dz.js";import{B as M}from"./button-vnBqyEiG.js";import{A as S}from"./index-r0TXmcNt.js";import{C as w}from"./center-DltdbFpm.js";import{u as C}from"./use-scroll-sepqzpdE.js";import{u as t}from"./use-transform-Dz5KHhFK.js";import{B as T}from"./box-C6uIdwxO.js";import{T as B}from"./text-CIX2g0cs.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CugwT2-N.js";import"./theme-provider-DMHFYkuw.js";import"./factory-Cp1Ju9mN.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-l3NbYd4q.js";import"./index-CX-96MTv.js";import"./Combination-CkmEMpJG.js";import"./loading-DkRHwhPr.js";import"./icon-Ch8QFxk9.js";import"./use-component-style-BGLOU3Ga.js";import"./use-var-cHPN6Ir7.js";import"./forward-ref-D13m8o2p.js";import"./memo-CTsy6qLS.js";import"./portal-PrQSTmZ0.js";import"./index-ZuzByk-F.js";import"./factory-CYGsRDnQ.js";import"./notice-ubAmRwRC.js";import"./alert-OMyiK_aG.js";import"./close-button-KaaR9e9n.js";import"./use-ripple-SSdhQaN8.js";import"./forward-ref-2BKBy0Yi.js";const co={component:r,title:"Components / Motion / Utils"},e=()=>{const[n,{toggle:l}]=v();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:l,children:"Please click"}),o.jsx(S,{children:n?o.jsx(r,{animate:{opacity:1},bg:"primary",color:"white",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=P({motion:{config:{transition:{duration:2}}}});return o.jsx(j,{config:n,children:o.jsx(w,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=C(),l=t(n,[0,1],[0,400]),y=t(n,[0,1],[0,-400]),h=t(n,[0,1],[0,200]),b=t(n,[0,1],[0,-200]);return o.jsxs(T,{h:"300vh",position:"relative",w:"full",children:[o.jsx(B,{children:"Please scroll"}),o.jsx(r,{style:{y:l},bg:"primary",boxSize:"2xs",left:"0",position:"absolute",rounded:"full",top:"110vh"}),o.jsx(r,{style:{y},bg:"warning",boxSize:"sm",left:"20%",position:"absolute",rounded:"full",top:"120vh"}),o.jsx(r,{style:{y:h},bg:"danger",boxSize:"3xs",position:"absolute",right:"30%",rounded:"full",top:"110vh"}),o.jsx(r,{style:{y:b},bg:"secondary",boxSize:"xs",position:"absolute",right:"0",rounded:"full",top:"120vh"})]})};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [isVisible, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please click</Button>

      <AnimatePresence>
        {isVisible ? <Motion animate={{
        opacity: 1
      }} bg="primary" color="white" exit={{
        opacity: 0
      }} initial={{
        opacity: 0
      }} p="md" rounded="md">
            Motion
          </Motion> : null}
      </AnimatePresence>
    </>;
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const config = extendConfig({
    motion: {
      config: {
        transition: {
          duration: 2
        }
      }
    }
  });
  return <UIProvider config={config}>
      <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
        <Motion animate={{
        x: 100
      }} bg="primary" color="white" p="md" rounded="md">
          Motion
        </Motion>
      </Center>
    </UIProvider>;
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var x,g,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
    }} bg="primary" boxSize="2xs" left="0" position="absolute" rounded="full" top="110vh" />

      <Motion style={{
      y: y2
    }} bg="warning" boxSize="sm" left="20%" position="absolute" rounded="full" top="120vh" />

      <Motion style={{
      y: y3
    }} bg="danger" boxSize="3xs" position="absolute" right="30%" rounded="full" top="110vh" />

      <Motion style={{
      y: y4
    }} bg="secondary" boxSize="xs" position="absolute" right="0" rounded="full" top="120vh" />
    </Box>;
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const po=["animatePresence","motionConfig","useScrollAndTransform"];export{po as __namedExportsOrder,e as animatePresence,co as default,i as motionConfig,s as useScrollAndTransform};