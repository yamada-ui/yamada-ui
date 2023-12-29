import{a as x,F as P,j as o}from"./jsx-runtime-5BUNAZ9W.js";import{u as M}from"./index-YuXFfT5-.js";import{e as S}from"./extend-config-53h13G-7.js";import{U as w}from"./ui-provider-Mchkpo2u.js";import{M as r}from"./motion-8v_Pxw1E.js";import{B as C}from"./button-EhfgdiYF.js";import{A as T}from"./index-EargzzxG.js";import{C as B}from"./center-R2x8ZF0W.js";import{u as z}from"./use-scroll-6vGvqdBj.js";import{u as t}from"./use-transform-14f9m9J5.js";import{B as A}from"./box-cQy_yevs.js";import{T as Y}from"./text-2jUpFeVy.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-d-SMqVb2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./theme-provider-ra3mBbD9.js";import"./environment-provider-9v4vA1qk.js";import"./motion-ukEXpwwk.js";import"./loading-provider-81cExCED.js";import"./index-LMlayQyA.js";import"./Combination-8oCz4vin.js";import"./loading-PFbLA4vV.js";import"./index-as8PIm5E.js";import"./index-JersHic9.js";import"./index-JczG5yj_.js";import"./icon-tPRIl-kA.js";import"./forward-ref-A-8Arhkk.js";import"./container-portal-wAmMmLVa.js";import"./index-jmm5gWkb.js";import"./notice-z1BT5SGZ.js";import"./alert-j7LpJe_Q.js";import"./use-component-style-PZEwb5ud.js";import"./close-button-FADIJ_zZ.js";import"./use-ripple-Z-W-SYoZ.js";const uo={title:"Components / Motion / Utils",component:r},e=()=>{const[n,{toggle:a}]=M();return x(P,{children:[o(C,{onClick:a,children:"Please click"}),o(T,{children:n?o(r,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=S({motion:{config:{transition:{duration:2}}}});return o(w,{config:n,children:o(B,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:o(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=z(),a=t(n,[0,1],[0,400]),h=t(n,[0,1],[0,-400]),b=t(n,[0,1],[0,200]),v=t(n,[0,1],[0,-200]);return x(A,{position:"relative",w:"full",h:"300vh",children:[o(Y,{children:"Please scroll"}),o(r,{style:{y:a},bg:"primary",boxSize:"2xs",rounded:"full",position:"absolute",top:"110vh",left:"0"}),o(r,{style:{y:h},bg:"warning",boxSize:"sm",rounded:"full",position:"absolute",top:"120vh",left:"20%"}),o(r,{style:{y:b},bg:"danger",boxSize:"3xs",rounded:"full",position:"absolute",top:"110vh",right:"30%"}),o(r,{style:{y:v},bg:"secondary",boxSize:"xs",rounded:"full",position:"absolute",top:"120vh",right:"0"})]})};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const go=["animatePresence","motionConfig","useScrollAndTransform"];export{go as __namedExportsOrder,e as animatePresence,uo as default,i as motionConfig,s as useScrollAndTransform};
