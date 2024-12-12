import{j as o}from"./jsx-runtime-CfatFE5O.js";import{e as v}from"./extend-config-CHo3ufWH.js";import{U as P}from"./ui-provider-edvKUWiw.js";import{M as r}from"./motion-CF-raG4u.js";import{u as j}from"./index-gGKStiao.js";import{B as M}from"./button-CCbGPPx6.js";import{A as S}from"./index-BkD6i14w.js";import{C as w}from"./center-DbI1M6cv.js";import{u as C}from"./use-scroll-5lldejqQ.js";import{u as t}from"./use-transform-DCjtHAzj.js";import{B as T}from"./box-D-QJtIN2.js";import{T as B}from"./text-62Futka0.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BKO6AKac.js";import"./theme-provider-BsBO7Bt7.js";import"./factory-Nur_zO5a.js";import"./i18n-provider-CHVVk7pM.js";import"./proxy-BYKFXsWv.js";import"./loading-provider-Cgn_kgsf.js";import"./index-BNtkqexU.js";import"./Combination-CkmEMpJG.js";import"./loading-Bz0vGPrC.js";import"./icon-M07mMfJs.js";import"./use-component-style-DXYrx7jC.js";import"./use-var-BmU0CMcq.js";import"./forward-ref-D13m8o2p.js";import"./portal-BYArVHbV.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-C7oui4wX.js";import"./notice-BxRycEFA.js";import"./alert-Ol2ee-1X.js";import"./close-button-hZ5Z7fa0.js";import"./use-ripple-D3zgM-CO.js";import"./forward-ref-2BKBy0Yi.js";const po={component:r,title:"Components / Motion / Utils"},e=()=>{const[n,{toggle:l}]=j();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:l,children:"Please click"}),o.jsx(S,{children:n?o.jsx(r,{animate:{opacity:1},bg:"primary",color:"white",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=v({motion:{config:{transition:{duration:2}}}});return o.jsx(P,{config:n,children:o.jsx(w,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=C(),l=t(n,[0,1],[0,400]),y=t(n,[0,1],[0,-400]),h=t(n,[0,1],[0,200]),b=t(n,[0,1],[0,-200]);return o.jsxs(T,{h:"300vh",position:"relative",w:"full",children:[o.jsx(B,{children:"Please scroll"}),o.jsx(r,{style:{y:l},bg:"primary",boxSize:"2xs",left:"0",position:"absolute",rounded:"full",top:"110vh"}),o.jsx(r,{style:{y},bg:"warning",boxSize:"sm",left:"20%",position:"absolute",rounded:"full",top:"120vh"}),o.jsx(r,{style:{y:h},bg:"danger",boxSize:"3xs",position:"absolute",right:"30%",rounded:"full",top:"110vh"}),o.jsx(r,{style:{y:b},bg:"secondary",boxSize:"xs",position:"absolute",right:"0",rounded:"full",top:"120vh"})]})};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
