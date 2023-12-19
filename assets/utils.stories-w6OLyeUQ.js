import{a as v,F as S,j as o}from"./jsx-runtime-TtYKBvr-.js";import{u as C}from"./index-gWY0u-sb.js";import{r as c}from"./index-IybTgENJ.js";import{l as w,M as p,u as T}from"./motion-AgWUVtfu.js";import{M as r}from"./motion-HWUA2jNq.js";import{B}from"./button-FPtidzDX.js";import{A as z}from"./index-GPdqE8CR.js";import{C as A}from"./center-5D7zPdPp.js";import{u as Y}from"./use-scroll-H2dHgjAK.js";import{a as s}from"./use-transform-eDUMDNop.js";import{B as k}from"./box-o_C1MUpU.js";import{T as E}from"./text-dQvy8j4x.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-6T0UNPU-.js";import"./factory-LHs-Bkmb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./use-ripple-cz0_rK7P.js";import"./loading-t4SoIc4G.js";import"./index-S2htefC9.js";import"./theme-provider-AD5gKQ6i.js";import"./index-OsV4SKtw.js";import"./index-Z94ctYOZ.js";import"./icon-lGxzm-PJ.js";import"./use-component-style-eqg6O7Tm.js";function j({children:t,isValidProp:e,...n}){e&&w(e),n={...c.useContext(p),...n},n.isStatic=T(()=>n.isStatic);const m=c.useMemo(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return c.createElement(p.Provider,{value:m},t)}const eo={title:"Components / Motion / Utils",component:r},i=()=>{const[t,{toggle:e}]=C();return v(S,{children:[o(B,{onClick:e,children:"Please click"}),o(z,{children:t?o(r,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},a=()=>o(j,{transition:{duration:2},children:o(A,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:o(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})}),l=()=>{const{scrollYProgress:t}=Y(),e=s(t,[0,1],[0,400]),n=s(t,[0,1],[0,-400]),m=s(t,[0,1],[0,200]),P=s(t,[0,1],[0,-200]);return v(k,{position:"relative",w:"full",h:"300vh",children:[o(E,{children:"Please scroll"}),o(r,{style:{y:e},bg:"primary",boxSize:"2xs",rounded:"full",position:"absolute",top:"110vh",left:"0"}),o(r,{style:{y:n},bg:"warning",boxSize:"sm",rounded:"full",position:"absolute",top:"120vh",left:"20%"}),o(r,{style:{y:m},bg:"danger",boxSize:"3xs",rounded:"full",position:"absolute",top:"110vh",right:"30%"}),o(r,{style:{y:P},bg:"secondary",boxSize:"xs",rounded:"full",position:"absolute",top:"120vh",right:"0"})]})};var u,d,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,x,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <MotionConfig transition={{
    duration: 2
  }}>
      <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
        <Motion animate={{
        x: 100
      }} bg="primary" color="white" p="md" rounded="md">
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
}`,...(M=(b=l.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};const so=["animatePresence","motionConfig","useScrollAndTransform"];export{so as __namedExportsOrder,i as animatePresence,eo as default,a as motionConfig,l as useScrollAndTransform};
