import{j as o}from"./extends-CwFRzn3r.js";import{u as v}from"./index-CoJrGj-T.js";import{e as P}from"./extend-config-BzgK19ci.js";import{U as j}from"./ui-provider-Bvww1J3G.js";import{M as r}from"./motion-C0aTDSHW.js";import{B as M}from"./button-BtgxkHkM.js";import{A as S}from"./index-CGy0U2a3.js";import{C as w}from"./center-CfmrFwEl.js";import{u as C}from"./use-scroll-C-hdLK9K.js";import{u as t}from"./use-transform-Dup5cyOK.js";import{B as T}from"./box-BtRRJWAU.js";import{T as B}from"./text-DSnzXlBX.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-33MD56qN.js";import"./theme-provider-B8NHi_rL.js";import"./factory-CBW6YcbY.js";import"./motion-B7t0mTYZ.js";import"./loading-provider-Ds-i5NRY.js";import"./index-BhJ-TW00.js";import"./Combination-IUp2vs9T.js";import"./loading-DZQf4R8P.js";import"./icon-CQ7oKYSm.js";import"./use-component-style-Givb0biW.js";import"./use-var-BcRMoVLh.js";import"./forward-ref-BWI-Phbn.js";import"./portal-DCEThVLn.js";import"./index-CS4BWtGh.js";import"./factory-B6ZnNkK9.js";import"./notice-CImpiTIX.js";import"./alert-Dm48qGsv.js";import"./triangle-alert-C2tUJAbO.js";import"./lucide-icon-4Wt4_XDL.js";import"./close-button-C6-nxxOU.js";import"./use-ripple-BqSD0U-m.js";import"./forward-ref-scR1bmHx.js";const po={component:r,title:"Components / Motion / Utils"},e=()=>{const[n,{toggle:l}]=v();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:l,children:"Please click"}),o.jsx(S,{children:n?o.jsx(r,{animate:{opacity:1},bg:"primary",color:"white",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=P({motion:{config:{transition:{duration:2}}}});return o.jsx(j,{config:n,children:o.jsx(w,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=C(),l=t(n,[0,1],[0,400]),y=t(n,[0,1],[0,-400]),h=t(n,[0,1],[0,200]),b=t(n,[0,1],[0,-200]);return o.jsxs(T,{h:"300vh",position:"relative",w:"full",children:[o.jsx(B,{children:"Please scroll"}),o.jsx(r,{style:{y:l},bg:"primary",boxSize:"2xs",left:"0",position:"absolute",rounded:"full",top:"110vh"}),o.jsx(r,{style:{y},bg:"warning",boxSize:"sm",left:"20%",position:"absolute",rounded:"full",top:"120vh"}),o.jsx(r,{style:{y:h},bg:"danger",boxSize:"3xs",position:"absolute",right:"30%",rounded:"full",top:"110vh"}),o.jsx(r,{style:{y:b},bg:"secondary",boxSize:"xs",position:"absolute",right:"0",rounded:"full",top:"120vh"})]})};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const uo=["animatePresence","motionConfig","useScrollAndTransform"];export{uo as __namedExportsOrder,e as animatePresence,po as default,i as motionConfig,s as useScrollAndTransform};
