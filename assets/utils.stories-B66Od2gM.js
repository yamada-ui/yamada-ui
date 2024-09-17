import{j as o}from"./extends-CwFRzn3r.js";import{u as v}from"./index-Du0-7Fls.js";import{e as P}from"./extend-config-CJ_pUdx0.js";import{U as j}from"./ui-provider-Bsa2Wmgf.js";import{M as r}from"./motion-DtKnsqis.js";import{B as M}from"./button-y-1VIkvD.js";import{A as S}from"./factory-COh1-7fC.js";import{C as w}from"./center-CgHKqMQH.js";import{u as C}from"./use-scroll-DOl__Dvn.js";import{u as t}from"./use-transform-BAy6YnUp.js";import{B as T}from"./box-B5FcoOR4.js";import{T as B}from"./text-CpJ_XsDk.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-MCBmKyEn.js";import"./theme-provider-CpaSpGZh.js";import"./factory-BjF4_dRw.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BQd0Ifle.js";import"./index-DEs2iorh.js";import"./Combination-IUp2vs9T.js";import"./loading-XAGgHBOO.js";import"./icon-Dq9f0XvE.js";import"./index-CuJ7J3XN.js";import"./use-component-style-DVO-iEPi.js";import"./forward-ref-BWI-Phbn.js";import"./portal-BL3IvHN0.js";import"./index-Drt3gf4w.js";import"./notice-DwW4vMoU.js";import"./alert-A1AK0WXZ.js";import"./close-button-B01cMkKC.js";import"./use-ripple-tjN9Ka0j.js";import"./forward-ref-scR1bmHx.js";const ao={title:"Components / Motion / Utils",component:r},e=()=>{const[n,{toggle:l}]=v();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:l,children:"Please click"}),o.jsx(S,{children:n?o.jsx(r,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=P({motion:{config:{transition:{duration:2}}}});return o.jsx(j,{config:n,children:o.jsx(w,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:o.jsx(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=C(),l=t(n,[0,1],[0,400]),y=t(n,[0,1],[0,-400]),h=t(n,[0,1],[0,200]),b=t(n,[0,1],[0,-200]);return o.jsxs(T,{position:"relative",w:"full",h:"300vh",children:[o.jsx(B,{children:"Please scroll"}),o.jsx(r,{style:{y:l},bg:"primary",boxSize:"2xs",rounded:"full",position:"absolute",top:"110vh",left:"0"}),o.jsx(r,{style:{y},bg:"warning",boxSize:"sm",rounded:"full",position:"absolute",top:"120vh",left:"20%"}),o.jsx(r,{style:{y:h},bg:"danger",boxSize:"3xs",rounded:"full",position:"absolute",top:"110vh",right:"30%"}),o.jsx(r,{style:{y:b},bg:"secondary",boxSize:"xs",rounded:"full",position:"absolute",top:"120vh",right:"0"})]})};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const mo=["animatePresence","motionConfig","useScrollAndTransform"];export{mo as __namedExportsOrder,e as animatePresence,ao as default,i as motionConfig,s as useScrollAndTransform};
