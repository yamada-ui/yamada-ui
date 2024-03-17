import{j as n,a as o,F as Y}from"./jsx-runtime-2xDJh5tt.js";import{u as g}from"./index-rYLD436_.js";import{M as e}from"./motion-Ca3VN97B.js";import{A as Z}from"./index-_tcQm2Fk.js";import{L as $}from"./index-CpvBRLJe.js";import{C as r}from"./center-8K7PHZ-H.js";import{B as nn}from"./button-DbN7DdZz.js";import{B as en}from"./box-BLs15Z1y.js";import{V as x,H as y}from"./stack-BnJQESm1.js";import{H as f}from"./heading-BUhbUXJC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./motion-JgkBPv6g.js";import"./forward-ref-DuAegr0M.js";import"./factory-kXR3An-G.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./use-ripple-Q0byik3_.js";import"./loading-B8AyfAAt.js";import"./index-C-d4WQS4.js";import"./theme-provider-Bd5T4K5M.js";import"./index-DqoR4ST1.js";import"./index-B3rKjj8b.js";import"./icon-CXZIg4wR.js";import"./use-component-style-BnPBcn2P.js";const Hn={title:"Components / Motion / Animation",component:e},i=()=>n(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),c=()=>n(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{animate:{x:100},transition:{ease:"easeOut",duration:2},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),s=()=>n(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{initial:{scale:0},animate:{rotate:360,scale:1},transition:{type:"spring",stiffness:260,damping:20},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),p=()=>n(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{initial:{x:-100},animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),d=()=>{const[t,{toggle:a}]=g();return o(Y,{children:[n(nn,{onClick:a,children:"Please click"}),n(Z,{children:t?n(e,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},m=()=>n(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{animate:{x:[0,100,0]},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),l=()=>n(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{animate:{x:[0,100,0]},transition:{duration:3,times:[0,.2,1]},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),u=()=>n(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{animate:{scale:[1,2,2,1,1],rotate:[0,0,180,180,0],borderRadius:["0%","0%","50%","50%","0%"]},transition:{duration:2,ease:"easeInOut",times:[0,.2,.5,.8,1],repeat:1/0,repeatDelay:1},w:"xs",h:"xs",bg:"primary"})}),h=()=>{const[t,{toggle:a}]=g();return n(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(en,{as:"button",bg:"primary",p:"1",rounded:"full",w:"14",h:"8",display:"flex",justifyContent:t?"flex-end":"flex-start",onClick:a,children:n(e,{layout:!0,transition:{type:"spring",stiffness:700,damping:30},bg:"white",w:"6",h:"6",rounded:"full"})})})},w=()=>{const t=()=>{const[a,{toggle:X}]=g(!1);return n(e,{as:"button",layout:!0,w:a?"32":"16",h:"16",p:"md",bg:"primary",rounded:"md",onClick:X,display:"flex",placeContent:"center"})};return o(r,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:[o(x,{children:[n(f,{size:"md",children:"Not using LayoutGroup"}),o(y,{children:[n(t,{}),n(t,{})]})]}),o(x,{children:[n(f,{size:"md",children:"Using LayoutGroup"}),n(y,{children:o($,{children:[n(t,{}),n(t,{})]})})]})]})};var v,M,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      x: 100
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(b=(M=i.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var C,S,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var B,H,L;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(L=(H=s.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,G,V;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion initial={{
      x: -100
    }} animate={{
      x: 100
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(V=(G=p.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var O,T,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var j,P,z;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      x: [0, 100, 0]
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(z=(P=m.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var R,E,F;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var D,K,N;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(N=(K=u.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var U,_,q;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(q=(_=h.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var J,Q,W;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(W=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const Ln=["basic","withTransition","withTransitionType","withInitial","withExit","useKeyframes","withTimes","withRepeat","withLayout","useLayoutGroup"];export{Ln as __namedExportsOrder,i as basic,Hn as default,m as useKeyframes,w as useLayoutGroup,d as withExit,p as withInitial,h as withLayout,u as withRepeat,l as withTimes,c as withTransition,s as withTransitionType};
