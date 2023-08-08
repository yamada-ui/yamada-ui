import{a as v,F as S,j as o}from"./jsx-runtime-e6a661ac.js";import{A as C}from"./index-6bcd17ac.js";import{r as m}from"./index-61bf1805.js";import{l as w,M as p,u as T}from"./motion-fb190baf.js";import{u as B}from"./use-scroll-50e14cf4.js";import{u as s}from"./use-transform-a731c76e.js";import{M as r}from"./motion-eb01b2a4.js";import{u as z}from"./index-11e13d28.js";import{B as A}from"./button-78028f3e.js";import{C as Y}from"./center-29cb8b4c.js";import{B as k}from"./box-1be76882.js";import{T as E}from"./text-db0e2e1e.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-c496b87d.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./theme-00f66a43.js";import"./loading-3c2f8b38.js";import"./index-1e5cc672.js";import"./index-14097b93.js";import"./index-f963e1c4.js";import"./icon-4e9764f5.js";import"./use-component-style-b3c7bc86.js";function j({children:t,isValidProp:e,...n}){e&&w(e),n={...m.useContext(p),...n},n.isStatic=T(()=>n.isStatic);const c=m.useMemo(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return m.createElement(p.Provider,{value:c},t)}const ro={title:"Components / Motion / Utils",component:r},i=()=>{const[t,{toggle:e}]=z();return v(S,{children:[o(A,{onClick:e,children:"Please click"}),o(C,{children:t?o(r,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},a=()=>o(j,{transition:{duration:2},children:o(Y,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:o(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})}),l=()=>{const{scrollYProgress:t}=B(),e=s(t,[0,1],[0,400]),n=s(t,[0,1],[0,-400]),c=s(t,[0,1],[0,200]),P=s(t,[0,1],[0,-200]);return v(k,{position:"relative",w:"full",h:"300vh",children:[o(E,{children:"Please scroll"}),o(r,{style:{y:e},bg:"primary",boxSize:"2xs",rounded:"full",position:"absolute",top:"110vh",left:"0"}),o(r,{style:{y:n},bg:"warning",boxSize:"sm",rounded:"full",position:"absolute",top:"120vh",left:"20%"}),o(r,{style:{y:c},bg:"danger",boxSize:"3xs",rounded:"full",position:"absolute",top:"110vh",right:"30%"}),o(r,{style:{y:P},bg:"secondary",boxSize:"xs",rounded:"full",position:"absolute",top:"120vh",right:"0"})]})};var u,d,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
      }} bg='primary' color='white' p='md' rounded='md'>
            Motion
          </Motion> : null}
      </AnimatePresence>
    </>;
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,x,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <MotionConfig transition={{
    duration: 2
  }}>
      <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
        <Motion animate={{
        x: 100
      }} bg='primary' color='white' p='md' rounded='md'>
          Motion
        </Motion>
      </Center>
    </MotionConfig>;
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,b,M;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    scrollYProgress
  } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return <Box position='relative' w='full' h='300vh'>
      <Text>Please scroll</Text>

      <Motion style={{
      y: y1
    }} bg='primary' boxSize='2xs' rounded='full' position='absolute' top='110vh' left='0' />

      <Motion style={{
      y: y2
    }} bg='warning' boxSize='sm' rounded='full' position='absolute' top='120vh' left='20%' />

      <Motion style={{
      y: y3
    }} bg='danger' boxSize='3xs' rounded='full' position='absolute' top='110vh' right='30%' />

      <Motion style={{
      y: y4
    }} bg='secondary' boxSize='xs' rounded='full' position='absolute' top='120vh' right='0' />
    </Box>;
}`,...(M=(b=l.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};const eo=["animatePresence","motionConfig","useScrollAndTransform"];export{eo as __namedExportsOrder,i as animatePresence,ro as default,a as motionConfig,l as useScrollAndTransform};
//# sourceMappingURL=utils.stories-3736f21f.js.map
