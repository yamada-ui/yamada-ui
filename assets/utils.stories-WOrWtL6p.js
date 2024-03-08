import{a as x,F as P,j as o}from"./jsx-runtime-5BUNAZ9W.js";import{u as M}from"./index-YuXFfT5-.js";import{e as S}from"./extend-config-x8I-lFJs.js";import{U as w}from"./ui-provider-IY1FvQAY.js";import{M as r}from"./motion-v7t8L39m.js";import{B as C}from"./button-74Rie5Vi.js";import{A as T}from"./index-eMn_GZVX.js";import{C as B}from"./center-vtSpiasz.js";import{u as z}from"./use-scroll-aYCTImDt.js";import{u as t}from"./use-transform-7JH9eBoL.js";import{B as A}from"./box-gsgHkkli.js";import{T as Y}from"./text-puUo1HSE.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-xNRvIn36.js";import"./theme-provider-bBWP4weD.js";import"./factory-d4qha7R6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./environment-provider-zx8rJJd-.js";import"./motion-heeYkzTb.js";import"./loading-provider-TwU9g3-b.js";import"./index-c3ZI6J-D.js";import"./Combination-DfugsOYv.js";import"./loading-a2VmdJrN.js";import"./index-gPPkT-3X.js";import"./index-NfIPy_Y6.js";import"./index-Ar4QPYE3.js";import"./icon-hF0n87st.js";import"./forward-ref-A-8Arhkk.js";import"./container-portal-0Gk-FyfS.js";import"./index-jmm5gWkb.js";import"./notice-WyKhFkM1.js";import"./alert-vFvawrLQ.js";import"./use-component-style-d9n8R3cE.js";import"./close-button-vaxwjIzp.js";import"./use-ripple-WbBjk5fz.js";const go={title:"Components / Motion / Utils",component:r},e=()=>{const[n,{toggle:a}]=M();return x(P,{children:[o(C,{onClick:a,children:"Please click"}),o(T,{children:n?o(r,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=S({motion:{config:{transition:{duration:2}}}});return o(w,{config:n,children:o(B,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:o(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=z(),a=t(n,[0,1],[0,400]),h=t(n,[0,1],[0,-400]),b=t(n,[0,1],[0,200]),v=t(n,[0,1],[0,-200]);return x(A,{position:"relative",w:"full",h:"300vh",children:[o(Y,{children:"Please scroll"}),o(r,{style:{y:a},bg:"primary",boxSize:"2xs",rounded:"full",position:"absolute",top:"110vh",left:"0"}),o(r,{style:{y:h},bg:"warning",boxSize:"sm",rounded:"full",position:"absolute",top:"120vh",left:"20%"}),o(r,{style:{y:b},bg:"danger",boxSize:"3xs",rounded:"full",position:"absolute",top:"110vh",right:"30%"}),o(r,{style:{y:v},bg:"secondary",boxSize:"xs",rounded:"full",position:"absolute",top:"120vh",right:"0"})]})};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
