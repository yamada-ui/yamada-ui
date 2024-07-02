import{j as n}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{u as h}from"./index-Du0-7Fls.js";import{M as e}from"./motion-gzykECjf.js";import{A as X}from"./index-yOmqRA4W.js";import{L as Y}from"./index-BqSttWob.js";import{C as r}from"./center-Bx18Vgm_.js";import{B as Z}from"./button-D55cFWsi.js";import{B as $}from"./box-ZylXTsGy.js";import{V as w,H as g}from"./stack-D9axiekm.js";import{H as y}from"./heading-B4IobJi1.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./motion-DkeuV4DN.js";import"./forward-ref-BmTAT9U5.js";import"./factory-CwKxIcmp.js";import"./use-ripple-D3aSUQ2z.js";import"./loading-DIEre6X5.js";import"./icon-DcxInhKK.js";import"./index-CrSB-fKY.js";import"./theme-provider-DjdgC7rR.js";import"./use-component-style-C6mmquFG.js";const Mn={title:"Components / Motion / Animation",component:e},a=()=>n.jsx(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(e,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),i=()=>n.jsx(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(e,{animate:{x:100},transition:{ease:"easeOut",duration:2},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),s=()=>n.jsx(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(e,{initial:{scale:0},animate:{rotate:360,scale:1},transition:{type:"spring",stiffness:260,damping:20},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),c=()=>n.jsx(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(e,{initial:{x:-100},animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),p=()=>{const[t,{toggle:o}]=h();return n.jsxs(n.Fragment,{children:[n.jsx(Z,{onClick:o,children:"Please click"}),n.jsx(X,{children:t?n.jsx(e,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},d=()=>n.jsx(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(e,{animate:{x:[0,100,0]},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),m=()=>n.jsx(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(e,{animate:{x:[0,100,0]},transition:{duration:3,times:[0,.2,1]},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),l=()=>n.jsx(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(e,{animate:{scale:[1,2,2,1,1],rotate:[0,0,180,180,0],borderRadius:["0%","0%","50%","50%","0%"]},transition:{duration:2,ease:"easeInOut",times:[0,.2,.5,.8,1],repeat:1/0,repeatDelay:1},w:"xs",h:"xs",bg:"primary"})}),u=()=>{const[t,{toggle:o}]=h();return n.jsx(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx($,{as:"button",bg:"primary",p:"1",rounded:"full",w:"14",h:"8",display:"flex",justifyContent:t?"flex-end":"flex-start",onClick:o,children:n.jsx(e,{layout:!0,transition:{type:"spring",stiffness:700,damping:30},bg:"white",w:"6",h:"6",rounded:"full"})})})},x=()=>{const t=()=>{const[o,{toggle:W}]=h(!1);return n.jsx(e,{as:"button",layout:!0,w:o?"32":"16",h:"16",p:"md",bg:"primary",rounded:"md",onClick:W,display:"flex",placeContent:"center"})};return n.jsxs(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:[n.jsxs(w,{children:[n.jsx(y,{size:"md",children:"Not using LayoutGroup"}),n.jsxs(g,{children:[n.jsx(t,{}),n.jsx(t,{})]})]}),n.jsxs(w,{children:[n.jsx(y,{size:"md",children:"Using LayoutGroup"}),n.jsx(g,{children:n.jsxs(Y,{children:[n.jsx(t,{}),n.jsx(t,{})]})})]})]})};var f,j,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      x: 100
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var M,b,C;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      x: 100
    }} transition={{
      ease: "easeOut",
      duration: 2
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var S,k,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion initial={{
      scale: 0
    }} animate={{
      rotate: 360,
      scale: 1
    }} transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var H,L,A;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion initial={{
      x: -100
    }} animate={{
      x: 100
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var G,V,O;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(O=(V=p.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var T,I,P;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      x: [0, 100, 0]
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var R,z,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      x: [0, 100, 0]
    }} transition={{
      duration: 3,
      times: [0, 0.2, 1]
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(E=(z=m.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var D,F,K;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 180, 180, 0],
      borderRadius: ["0%", "0%", "50%", "50%", "0%"]
    }} transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1
    }} w="xs" h="xs" bg="primary" />
    </Center>;
}`,...(K=(F=l.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var N,U,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Box as="button" bg="primary" p="1" rounded="full" w="14" h="8" display="flex" justifyContent={!flg ? "flex-start" : "flex-end"} onClick={toggle}>
        <Motion layout transition={{
        type: "spring",
        stiffness: 700,
        damping: 30
      }} bg="white" w="6" h="6" rounded="full" />
      </Box>
    </Center>;
}`,...(_=(U=u.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var q,J,Q;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const Accordion: FC = () => {
    const [isOpen, {
      toggle
    }] = useBoolean(false);
    return <Motion as="button" layout w={isOpen ? "32" : "16"} h="16" p="md" bg="primary" rounded="md" onClick={toggle} display="flex" placeContent="center" />;
  };
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <VStack>
        <Heading size="md">Not using LayoutGroup</Heading>

        <HStack>
          <Accordion />
          <Accordion />
        </HStack>
      </VStack>

      <VStack>
        <Heading size="md">Using LayoutGroup</Heading>

        <HStack>
          <LayoutGroup>
            <Accordion />
            <Accordion />
          </LayoutGroup>
        </HStack>
      </VStack>
    </Center>;
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const bn=["basic","withTransition","withTransitionType","withInitial","withExit","useKeyframes","withTimes","withRepeat","withLayout","useLayoutGroup"];export{bn as __namedExportsOrder,a as basic,Mn as default,d as useKeyframes,x as useLayoutGroup,p as withExit,c as withInitial,u as withLayout,l as withRepeat,m as withTimes,i as withTransition,s as withTransitionType};
