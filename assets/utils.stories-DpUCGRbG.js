import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{u as v}from"./index-CBqzus2r.js";import{e as P}from"./extend-config-k2P6aacL.js";import{U as j}from"./ui-provider-B0qSiYNs.js";import{M as r}from"./motion-BPPCNfSa.js";import{B as M}from"./button-DOTfyR12.js";import{A as S}from"./index-B5H6KlGO.js";import{C as w}from"./center-CSFPO4u1.js";import{u as C}from"./use-scroll-DfP3MzTN.js";import{u as t}from"./use-transform-BS8wigaD.js";import{B as T}from"./box-ANpItPfh.js";import{T as B}from"./text-MYjKvx39.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DnMxUhsW.js";import"./theme-provider-zwL-D6eR.js";import"./factory-Bf0a1C4O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./environment-provider-BhdF2tQ4.js";import"./motion-B-hZ6xRg.js";import"./loading-provider-FTnuYIgn.js";import"./index-CAzj2Fxr.js";import"./Combination-nrDmEbEK.js";import"./component-IvP1ueaU.js";import"./loading-BMMGc-Ko.js";import"./icon-CVBZDjqd.js";import"./index-BJ39ysE2.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-component-style-C0MoE1pt.js";import"./container-portal--tud7o6s.js";import"./index-CqS9fqXy.js";import"./notice-r5iOQzsg.js";import"./alert-DkZClwrL.js";import"./close-button-qBeYcal4.js";import"./use-ripple-op6oFSyJ.js";const co={title:"Components / Motion / Utils",component:r},e=()=>{const[n,{toggle:l}]=v();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:l,children:"Please click"}),o.jsx(S,{children:n?o.jsx(r,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=P({motion:{config:{transition:{duration:2}}}});return o.jsx(j,{config:n,children:o.jsx(w,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:o.jsx(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=C(),l=t(n,[0,1],[0,400]),y=t(n,[0,1],[0,-400]),h=t(n,[0,1],[0,200]),b=t(n,[0,1],[0,-200]);return o.jsxs(T,{position:"relative",w:"full",h:"300vh",children:[o.jsx(B,{children:"Please scroll"}),o.jsx(r,{style:{y:l},bg:"primary",boxSize:"2xs",rounded:"full",position:"absolute",top:"110vh",left:"0"}),o.jsx(r,{style:{y},bg:"warning",boxSize:"sm",rounded:"full",position:"absolute",top:"120vh",left:"20%"}),o.jsx(r,{style:{y:h},bg:"danger",boxSize:"3xs",rounded:"full",position:"absolute",top:"110vh",right:"30%"}),o.jsx(r,{style:{y:b},bg:"secondary",boxSize:"xs",rounded:"full",position:"absolute",top:"120vh",right:"0"})]})};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var x,g,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const po=["animatePresence","motionConfig","useScrollAndTransform"];export{po as __namedExportsOrder,e as animatePresence,co as default,i as motionConfig,s as useScrollAndTransform};
