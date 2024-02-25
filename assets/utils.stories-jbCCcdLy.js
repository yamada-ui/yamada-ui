import{a as x,F as P,j as o}from"./jsx-runtime-TtYKBvr-.js";import{u as M}from"./index-gWY0u-sb.js";import{e as S}from"./extend-config-E-zL_egA.js";import{U as w}from"./ui-provider-nkFuVjNy.js";import{M as r}from"./motion-YDUrcbbR.js";import{B as C}from"./button-wRYGAgnL.js";import{A as T}from"./index-dKw0visz.js";import{C as B}from"./center-buHHRxIa.js";import{u as z}from"./use-scroll-TGEcoJFI.js";import{u as t}from"./use-transform-7M16CcG0.js";import{B as A}from"./box-aVe7Qm1R.js";import{T as Y}from"./text-HnlGO5B-.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-R8DBODQ4.js";import"./theme-provider-huIiJlAo.js";import"./factory-APG2CWDq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./environment-provider-ebV35j6x.js";import"./motion-RGBG165B.js";import"./loading-provider-qN3qwwi2.js";import"./index-dH9witMp.js";import"./Combination-X6sFZeet.js";import"./loading-tO_V0BGI.js";import"./index-VWNlQR2I.js";import"./index-iy1iKMCH.js";import"./index-DwEmuzi-.js";import"./icon-qB0k_Rc9.js";import"./forward-ref-6T0UNPU-.js";import"./container-portal-o5r_vKh6.js";import"./index-xIHD0DlW.js";import"./notice-1NARxRzM.js";import"./alert-JwLoPDAe.js";import"./use-component-style-OLn8-IaK.js";import"./close-button-0LYyHiMY.js";import"./use-ripple-PKVw7PLF.js";const go={title:"Components / Motion / Utils",component:r},e=()=>{const[n,{toggle:a}]=M();return x(P,{children:[o(C,{onClick:a,children:"Please click"}),o(T,{children:n?o(r,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=S({motion:{config:{transition:{duration:2}}}});return o(w,{config:n,children:o(B,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:o(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=z(),a=t(n,[0,1],[0,400]),h=t(n,[0,1],[0,-400]),b=t(n,[0,1],[0,200]),v=t(n,[0,1],[0,-200]);return x(A,{position:"relative",w:"full",h:"300vh",children:[o(Y,{children:"Please scroll"}),o(r,{style:{y:a},bg:"primary",boxSize:"2xs",rounded:"full",position:"absolute",top:"110vh",left:"0"}),o(r,{style:{y:h},bg:"warning",boxSize:"sm",rounded:"full",position:"absolute",top:"120vh",left:"20%"}),o(r,{style:{y:b},bg:"danger",boxSize:"3xs",rounded:"full",position:"absolute",top:"110vh",right:"30%"}),o(r,{style:{y:v},bg:"secondary",boxSize:"xs",rounded:"full",position:"absolute",top:"120vh",right:"0"})]})};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [isVisible, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please click</Button>

      <AnimatePresence>
        {isVisible ? <Motion initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} bg="primary" color="white" p="md" rounded="md">
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
      <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
        <Motion animate={{
        x: 100
      }} bg="primary" color="white" p="md" rounded="md">
          Motion
        </Motion>
      </Center>
    </UIProvider>;
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const {
    scrollYProgress
  } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return <Box position="relative" w="full" h="300vh">
      <Text>Please scroll</Text>

      <Motion style={{
      y: y1
    }} bg="primary" boxSize="2xs" rounded="full" position="absolute" top="110vh" left="0" />

      <Motion style={{
      y: y2
    }} bg="warning" boxSize="sm" rounded="full" position="absolute" top="120vh" left="20%" />

      <Motion style={{
      y: y3
    }} bg="danger" boxSize="3xs" rounded="full" position="absolute" top="110vh" right="30%" />

      <Motion style={{
      y: y4
    }} bg="secondary" boxSize="xs" rounded="full" position="absolute" top="120vh" right="0" />
    </Box>;
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const fo=["animatePresence","motionConfig","useScrollAndTransform"];export{fo as __namedExportsOrder,e as animatePresence,go as default,i as motionConfig,s as useScrollAndTransform};
