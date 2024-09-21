import{j as o}from"./extends-CwFRzn3r.js";import{u as v}from"./index-Du0-7Fls.js";import{e as P}from"./extend-config-BEVeWXMv.js";import{U as j}from"./ui-provider-yMwBxUIm.js";import{M as r}from"./motion-gc-JlQYg.js";import{B as M}from"./button-CrM87X6c.js";import{A as S}from"./factory-B9-LT_yD.js";import{C as w}from"./center-B5cF8U0h.js";import{u as C}from"./use-scroll-DOl__Dvn.js";import{u as t}from"./use-transform-BAy6YnUp.js";import{B as T}from"./box-BNUHdVqZ.js";import{T as B}from"./text-C4kk1pFE.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B_KRzJwV.js";import"./theme-provider-Bw55Thfs.js";import"./factory-DfCPDZht.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-CXnmHf9o.js";import"./index-BMx7qnvq.js";import"./Combination-IUp2vs9T.js";import"./loading-BhlblpEj.js";import"./icon-BY9dMEpR.js";import"./index-DOyhBR5n.js";import"./use-component-style-D0DGb12b.js";import"./forward-ref-BWI-Phbn.js";import"./portal-CQMr5Yur.js";import"./index-Drt3gf4w.js";import"./notice-DTPWb24k.js";import"./alert-B68M2OPG.js";import"./close-button-nW1Gs_LT.js";import"./use-ripple-C-c72TCS.js";import"./forward-ref-scR1bmHx.js";const ao={title:"Components / Motion / Utils",component:r},e=()=>{const[n,{toggle:l}]=v();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:l,children:"Please click"}),o.jsx(S,{children:n?o.jsx(r,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=P({motion:{config:{transition:{duration:2}}}});return o.jsx(j,{config:n,children:o.jsx(w,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:o.jsx(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=C(),l=t(n,[0,1],[0,400]),y=t(n,[0,1],[0,-400]),h=t(n,[0,1],[0,200]),b=t(n,[0,1],[0,-200]);return o.jsxs(T,{position:"relative",w:"full",h:"300vh",children:[o.jsx(B,{children:"Please scroll"}),o.jsx(r,{style:{y:l},bg:"primary",boxSize:"2xs",rounded:"full",position:"absolute",top:"110vh",left:"0"}),o.jsx(r,{style:{y},bg:"warning",boxSize:"sm",rounded:"full",position:"absolute",top:"120vh",left:"20%"}),o.jsx(r,{style:{y:h},bg:"danger",boxSize:"3xs",rounded:"full",position:"absolute",top:"110vh",right:"30%"}),o.jsx(r,{style:{y:b},bg:"secondary",boxSize:"xs",rounded:"full",position:"absolute",top:"120vh",right:"0"})]})};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
