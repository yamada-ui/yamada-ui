import{j as o}from"./jsx-runtime-CKrituN3.js";import{u as v}from"./index-rYLD436_.js";import{e as P}from"./extend-config-Ck3cSlsq.js";import{U as j}from"./ui-provider-Dy5tptwW.js";import{M as r}from"./motion-C1gM6QUe.js";import{B as M}from"./button-BkvW6mjw.js";import{A as S}from"./index-_tcQm2Fk.js";import{C as w}from"./center-D4kPHTkn.js";import{u as C}from"./use-scroll-DWjFA6Mb.js";import{u as t}from"./use-transform-Dp4yh7b6.js";import{B as T}from"./box-DgkVDNaQ.js";import{T as B}from"./text-CKRf8NGT.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-eo04oIqp.js";import"./theme-provider-LCtE2tbw.js";import"./factory-D1MzC1Q2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./environment-provider-By2IJ70o.js";import"./motion-JgkBPv6g.js";import"./loading-provider-CSi-RcGW.js";import"./index-CKo3gv6y.js";import"./Combination-DlzjZhkT.js";import"./loading-BxQYss10.js";import"./index-CYT3-ShY.js";import"./index-BY3Kv4Lb.js";import"./index-D62GHI4F.js";import"./icon-B3uV5IZ5.js";import"./forward-ref-DuAegr0M.js";import"./container-portal-CAcQI922.js";import"./index-BtM5VmRH.js";import"./notice-CM03qraR.js";import"./alert-xemOnRoP.js";import"./use-component-style-i7T2CPTB.js";import"./close-button-CIKMrptQ.js";import"./use-ripple-K38Z2Edq.js";const po={title:"Components / Motion / Utils",component:r},e=()=>{const[n,{toggle:l}]=v();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:l,children:"Please click"}),o.jsx(S,{children:n?o.jsx(r,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=P({motion:{config:{transition:{duration:2}}}});return o.jsx(j,{config:n,children:o.jsx(w,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:o.jsx(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=C(),l=t(n,[0,1],[0,400]),y=t(n,[0,1],[0,-400]),h=t(n,[0,1],[0,200]),b=t(n,[0,1],[0,-200]);return o.jsxs(T,{position:"relative",w:"full",h:"300vh",children:[o.jsx(B,{children:"Please scroll"}),o.jsx(r,{style:{y:l},bg:"primary",boxSize:"2xs",rounded:"full",position:"absolute",top:"110vh",left:"0"}),o.jsx(r,{style:{y},bg:"warning",boxSize:"sm",rounded:"full",position:"absolute",top:"120vh",left:"20%"}),o.jsx(r,{style:{y:h},bg:"danger",boxSize:"3xs",rounded:"full",position:"absolute",top:"110vh",right:"30%"}),o.jsx(r,{style:{y:b},bg:"secondary",boxSize:"xs",rounded:"full",position:"absolute",top:"120vh",right:"0"})]})};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const uo=["animatePresence","motionConfig","useScrollAndTransform"];export{uo as __namedExportsOrder,e as animatePresence,po as default,i as motionConfig,s as useScrollAndTransform};
