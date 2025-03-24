import{j as o}from"./jsx-runtime-BpbtHYHY.js";import{e as v}from"./extend-config-B0-JQXbq.js";import{U as P}from"./ui-provider-CfomT70t.js";import{M as r}from"./motion-q3utTK2X.js";import{u as j}from"./index-qZwaV1-B.js";import{B as M}from"./button-Dm54j0EP.js";import{A as S}from"./index-2ihZSkad.js";import{C as w}from"./center-BgoPILRQ.js";import{u as C}from"./use-scroll-l-x7K6vf.js";import{u as t}from"./use-transform-YHK9YRRo.js";import{B as T}from"./box-B5b1ezDi.js";import{T as B}from"./text-clsxocLN.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BY-sriDS.js";import"./theme-provider-DGyR61Aa.js";import"./factory-B_KMcXyW.js";import"./i18n-provider-D_kv1vSA.js";import"./proxy-qc5arozF.js";import"./loading-provider-DTTuAu7E.js";import"./index-DSCI00mi.js";import"./Combination-4Rar1Jsv.js";import"./loading-C3oE1vJx.js";import"./icon-DIzRaLo1.js";import"./use-component-style-65RA3nVD.js";import"./use-var-Tj-aA0qb.js";import"./forward-ref-Ukjd1cIW.js";import"./memo-CPHdbx3K.js";import"./portal-DnDmgWrA.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./factory-CplEbptb.js";import"./notice-BteKmIuu.js";import"./alert-CFbf-Wsq.js";import"./close-button-DYk-GqDy.js";import"./use-ripple-DqSHYmP8.js";import"./forward-ref-Cy2nAbAn.js";const uo={component:r,title:"Components / Motion / Utils"},e=()=>{const[n,{toggle:l}]=j();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:l,children:"Please click"}),o.jsx(S,{children:n?o.jsx(r,{animate:{opacity:1},bg:"primary",color:"white",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"md",children:"Motion"}):null})]})},i=()=>{const n=v({motion:{config:{transition:{duration:2}}}});return o.jsx(P,{config:n,children:o.jsx(w,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:o.jsx(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})})},s=()=>{const{scrollYProgress:n}=C(),l=t(n,[0,1],[0,400]),y=t(n,[0,1],[0,-400]),h=t(n,[0,1],[0,200]),b=t(n,[0,1],[0,-200]);return o.jsxs(T,{h:"300vh",position:"relative",w:"full",children:[o.jsx(B,{children:"Please scroll"}),o.jsx(r,{style:{y:l},bg:"primary",boxSize:"2xs",left:"0",position:"absolute",rounded:"full",top:"110vh"}),o.jsx(r,{style:{y},bg:"warning",boxSize:"sm",left:"20%",position:"absolute",rounded:"full",top:"120vh"}),o.jsx(r,{style:{y:h},bg:"danger",boxSize:"3xs",position:"absolute",right:"30%",rounded:"full",top:"110vh"}),o.jsx(r,{style:{y:b},bg:"secondary",boxSize:"xs",position:"absolute",right:"0",rounded:"full",top:"120vh"})]})};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
