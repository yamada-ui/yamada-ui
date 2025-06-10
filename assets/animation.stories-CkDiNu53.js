import{j as n}from"./jsx-runtime-DztICxWZ.js";import{M as e}from"./motion-Call8KhW.js";import{A as X}from"./index-B2HRqSdn.js";import{L as Y}from"./index-DrADDttQ.js";import{C as r}from"./center-D6SfTFGO.js";import{u as h}from"./index-YFprnXPi.js";import{B as Z}from"./button-nZ2ZqBRb.js";import{B as $}from"./box-Ds8SIjx6.js";import{V as w,H as g}from"./stack-DL8tKm2J.js";import{H as y}from"./heading-DiAnMbcf.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-BMTIiRn4.js";import"./proxy-r-x5KraU.js";import"./factory-7Z88KRtK.js";import"./forward-ref-DH6f5tnY.js";import"./use-ripple-Vo7SgDWD.js";import"./factory-UaNlpug7.js";import"./loading-DVofVDF_.js";import"./icon-DKuqv-9Z.js";import"./use-component-style-DHLtMqa5.js";import"./theme-provider-DsbwOWxu.js";import"./use-var-Bz9rJ8_M.js";const Cn={component:e,title:"Components / Motion / Animation"},a=()=>n.jsx(r,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{animate:{x:100},bg:["primary","secondary"],color:"white",p:"md",rounded:"md",children:"Motion"})}),i=()=>n.jsx(r,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",transition:{duration:2,ease:"easeOut"},children:"Motion"})}),s=()=>n.jsx(r,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{animate:{rotate:360,scale:1},bg:"primary",color:"white",initial:{scale:0},p:"md",rounded:"md",transition:{type:"spring",damping:20,stiffness:260},children:"Motion"})}),c=()=>n.jsx(r,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{animate:{x:100},bg:"primary",color:"white",initial:{x:-100},p:"md",rounded:"md",children:"Motion"})}),p=()=>{const[t,{toggle:o}]=h();return n.jsxs(n.Fragment,{children:[n.jsx(Z,{onClick:o,children:"Please click"}),n.jsx(X,{children:t?n.jsx(e,{animate:{opacity:1},bg:"primary",color:"white",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"md",children:"Motion"}):null})]})},d=()=>n.jsx(r,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{animate:{x:[0,100,0]},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),m=()=>n.jsx(r,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{animate:{x:[0,100,0]},bg:"primary",color:"white",p:"md",rounded:"md",transition:{duration:3,times:[0,.2,1]},children:"Motion"})}),l=()=>n.jsx(r,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{animate:{borderRadius:["0%","0%","50%","50%","0%"],rotate:[0,0,180,180,0],scale:[1,2,2,1,1]},bg:"primary",h:"xs",transition:{duration:2,ease:"easeInOut",repeat:1/0,repeatDelay:1,times:[0,.2,.5,.8,1]},w:"xs"})}),u=()=>{const[t,{toggle:o}]=h();return n.jsx(r,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx($,{as:"button",bg:"primary",display:"flex",h:"8",justifyContent:t?"flex-end":"flex-start",p:"1",rounded:"full",w:"14",onClick:o,children:n.jsx(e,{bg:"white",h:"6",layout:!0,rounded:"full",transition:{type:"spring",damping:30,stiffness:700},w:"6"})})})},x=()=>{const t=()=>{const[o,{toggle:W}]=h(!1);return n.jsx(e,{as:"button",bg:"primary",display:"flex",h:"16",layout:!0,p:"md",placeContent:"center",rounded:"md",w:o?"32":"16",onClick:W})};return n.jsxs(r,{gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[n.jsxs(w,{children:[n.jsx(y,{size:"md",children:"Not using LayoutGroup"}),n.jsxs(g,{children:[n.jsx(t,{}),n.jsx(t,{})]})]}),n.jsxs(w,{children:[n.jsx(y,{size:"md",children:"Using LayoutGroup"}),n.jsx(g,{children:n.jsxs(Y,{children:[n.jsx(t,{}),n.jsx(t,{})]})})]})]})};var f,j,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion animate={{
      x: 100
    }} bg={["primary", "secondary"]} color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var M,b,C;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion animate={{
      x: 100
    }} bg="primary" color="white" p="md" rounded="md" transition={{
      duration: 2,
      ease: "easeOut"
    }}>
        Motion
      </Motion>
    </Center>;
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var S,k,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion animate={{
      rotate: 360,
      scale: 1
    }} bg="primary" color="white" initial={{
      scale: 0
    }} p="md" rounded="md" transition={{
      type: "spring",
      damping: 20,
      stiffness: 260
    }}>
        Motion
      </Motion>
    </Center>;
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var H,L,A;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion animate={{
      x: 100
    }} bg="primary" color="white" initial={{
      x: -100
    }} p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(A=(L=c.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var G,V,T;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(T=(V=p.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var I,O,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion animate={{
      x: [0, 100, 0]
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,z,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion animate={{
      x: [0, 100, 0]
    }} bg="primary" color="white" p="md" rounded="md" transition={{
      duration: 3,
      times: [0, 0.2, 1]
    }}>
        Motion
      </Motion>
    </Center>;
}`,...(E=(z=m.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var D,F,K;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion animate={{
      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      rotate: [0, 0, 180, 180, 0],
      scale: [1, 2, 2, 1, 1]
    }} bg="primary" h="xs" transition={{
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
      times: [0, 0.2, 0.5, 0.8, 1]
    }} w="xs" />
    </Center>;
}`,...(K=(F=l.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var N,U,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Box as="button" bg="primary" display="flex" h="8" justifyContent={!flg ? "flex-start" : "flex-end"} p="1" rounded="full" w="14" onClick={toggle}>
        <Motion bg="white" h="6" layout rounded="full" transition={{
        type: "spring",
        damping: 30,
        stiffness: 700
      }} w="6" />
      </Box>
    </Center>;
}`,...(_=(U=u.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var q,J,Q;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const Accordion: FC = () => {
    const [open, {
      toggle
    }] = useBoolean(false);
    return <Motion as="button" bg="primary" display="flex" h="16" layout p="md" placeContent="center" rounded="md" w={open ? "32" : "16"} onClick={toggle} />;
  };
  return <Center gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
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
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Sn=["basic","withTransition","withTransitionType","withInitial","withExit","useKeyframes","withTimes","withRepeat","withLayout","useLayoutGroup"];export{Sn as __namedExportsOrder,a as basic,Cn as default,d as useKeyframes,x as useLayoutGroup,p as withExit,c as withInitial,u as withLayout,l as withRepeat,m as withTimes,i as withTransition,s as withTransitionType};
