import{a as v,F as S,j as o}from"./jsx-runtime-37f7df21.js";import{A as C}from"./index-b62ab4fb.js";import{r as m}from"./index-f1f2c4b1.js";import{l as w,M as p,u as T}from"./motion-16fcbfe3.js";import{u as B}from"./use-scroll-24b5c6d6.js";import{u as s}from"./use-transform-9a0c9f2e.js";import{M as r}from"./motion-88bc75b0.js";import{u as z}from"./index-82c18e8f.js";import{B as A}from"./button-664b0d8f.js";import{C as Y}from"./center-24089e74.js";import{B as k}from"./box-81c93a1f.js";import{T as E}from"./text-6737f911.js";import"./forward-ref-92ccee95.js";import"./factory-81c6291d.js";import"./extends-3d932e16.js";import"./theme-2b4f2a73.js";import"./loading-8fe548f5.js";import"./index-e84132d8.js";import"./index-c08cc7ee.js";import"./index-18b70ca1.js";import"./icon-36765902.js";import"./use-component-style-f03a93f0.js";function j({children:t,isValidProp:e,...n}){e&&w(e),n={...m.useContext(p),...n},n.isStatic=T(()=>n.isStatic);const c=m.useMemo(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return m.createElement(p.Provider,{value:c},t)}const to={title:"Components / Motion / Utils",component:r},i=()=>{const[t,{toggle:e}]=z();return v(S,{children:[o(A,{onClick:e,children:"Please click"}),o(C,{children:t?o(r,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},a=()=>o(j,{transition:{duration:2},children:o(Y,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:o(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})}),l=()=>{const{scrollYProgress:t}=B(),e=s(t,[0,1],[0,400]),n=s(t,[0,1],[0,-400]),c=s(t,[0,1],[0,200]),P=s(t,[0,1],[0,-200]);return v(k,{position:"relative",w:"full",h:"300vh",children:[o(E,{children:"Please scroll"}),o(r,{style:{y:e},bg:"primary",boxSize:"2xs",rounded:"full",position:"absolute",top:"110vh",left:"0"}),o(r,{style:{y:n},bg:"warning",boxSize:"sm",rounded:"full",position:"absolute",top:"120vh",left:"20%"}),o(r,{style:{y:c},bg:"danger",boxSize:"3xs",rounded:"full",position:"absolute",top:"110vh",right:"30%"}),o(r,{style:{y:P},bg:"secondary",boxSize:"xs",rounded:"full",position:"absolute",top:"120vh",right:"0"})]})};var u,d,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(M=(b=l.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};const ro=["animatePresence","motionConfig","useScrollAndTransform"];export{ro as __namedExportsOrder,i as animatePresence,to as default,a as motionConfig,l as useScrollAndTransform};
//# sourceMappingURL=utils.stories-eb4e50f1.js.map
