import{j as o}from"./jsx-runtime-DztICxWZ.js";import{e as v}from"./extend-config-PHBcbboa.js";import{U as P}from"./ui-provider-BhqK2kQi.js";import{M as r}from"./motion-Call8KhW.js";import{u as j}from"./index-YFprnXPi.js";import{B as M}from"./button-nZ2ZqBRb.js";import{A as S}from"./index-B2HRqSdn.js";import{C as w}from"./center-D6SfTFGO.js";import{u as C}from"./use-scroll-KBcYcBp5.js";import{u as t}from"./use-transform-FRsgly8J.js";import{B as T}from"./box-Ds8SIjx6.js";import{T as B}from"./text-KN7rBBtq.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BylWRU36.js";import"./theme-provider-DsbwOWxu.js";import"./factory-7Z88KRtK.js";import"./i18n-provider-CmpcPFo-.js";import"./proxy-r-x5KraU.js";import"./loading-provider-DbAaOp8i.js";import"./index-CIBO3FO4.js";import"./Combination--fBz1e3g.js";import"./loading-DVofVDF_.js";import"./icon-DKuqv-9Z.js";import"./use-component-style-DHLtMqa5.js";import"./use-var-Bz9rJ8_M.js";import"./forward-ref-DH6f5tnY.js";import"./memo-BZ69bafo.js";import"./portal-CFvSD_dh.js";import"./index-BcXpNjVA.js";import"./index-BaC3dPEX.js";import"./factory-UaNlpug7.js";import"./notice-BMy32cRJ.js";import"./alert-kLbVPxqu.js";import"./close-button-BbMPcnm8.js";import"./use-ripple-Vo7SgDWD.js";import"./forward-ref-BMTIiRn4.js";const uo={component:r,title:"Components / Motion / Utils"},e=()=>{const[n,{toggle:l}]=j();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:l,children:"Please click"}),o.jsx(S,{children:n?o.jsx(r,{animate:{opacity:1},bg:"primary",color:"white",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=v({motion:{config:{transition:{duration:2}}}});return o.jsx(P,{config:n,children:o.jsx(w,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=C(),l=t(n,[0,1],[0,400]),y=t(n,[0,1],[0,-400]),h=t(n,[0,1],[0,200]),b=t(n,[0,1],[0,-200]);return o.jsxs(T,{h:"300vh",position:"relative",w:"full",children:[o.jsx(B,{children:"Please scroll"}),o.jsx(r,{style:{y:l},bg:"primary",boxSize:"2xs",left:"0",position:"absolute",rounded:"full",top:"110vh"}),o.jsx(r,{style:{y},bg:"warning",boxSize:"sm",left:"20%",position:"absolute",rounded:"full",top:"120vh"}),o.jsx(r,{style:{y:h},bg:"danger",boxSize:"3xs",position:"absolute",right:"30%",rounded:"full",top:"110vh"}),o.jsx(r,{style:{y:b},bg:"secondary",boxSize:"xs",position:"absolute",right:"0",rounded:"full",top:"120vh"})]})};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const xo=["animatePresence","motionConfig","useScrollAndTransform"];export{xo as __namedExportsOrder,e as animatePresence,uo as default,i as motionConfig,s as useScrollAndTransform};
