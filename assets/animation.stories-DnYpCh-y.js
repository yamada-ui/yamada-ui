import{j as n,Q as W,ag as X,V as x}from"./iframe-79mlTu-5.js";import{u as g}from"./index-ItWicFrM.js";import{M as o}from"./motion-80G-TLRL.js";import{H as y}from"./heading-BRxEqdW1.js";import{H as f}from"./h-stack-Cqhst7Z3.js";import{B as Y}from"./box-Dfv8dwxQ.js";import{L as Z}from"./index-DRTeVLpV.js";import"./preload-helper-C1FmrZbK.js";const cn={component:o,title:"Components / Motion / Animation"},r=()=>n.jsx(o,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Motion"}),a=()=>n.jsx(o,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:2,ease:"easeOut"},children:"Motion"}),s=()=>n.jsx(o,{animate:{rotate:360,scale:1},bg:"mono",color:"mono.contrast",initial:{scale:0},p:"md",rounded:"l2",transition:{type:"spring",damping:20,stiffness:260},children:"Motion"}),i=()=>n.jsx(o,{animate:{x:100},bg:"mono",color:"mono.contrast",initial:{x:-100},p:"md",rounded:"l2",children:"Motion"}),c=()=>{const[e,{toggle:t}]=g();return n.jsxs(n.Fragment,{children:[n.jsx(W,{onClick:t,children:"Please click"}),n.jsx(X,{children:e?n.jsx(o,{animate:{opacity:1},bg:"mono",color:"mono.contrast",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"l2",children:"Motion"}):null})]})},l=()=>n.jsx(o,{animate:{x:[0,100,0]},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Motion"}),m=()=>n.jsx(o,{animate:{x:[0,100,0]},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:3,times:[0,.2,1]},children:"Motion"}),d=()=>n.jsx(o,{animate:{borderRadius:["0%","0%","50%","50%","0%"],rotate:[0,0,180,180,0],scale:[1,2,2,1,1]},bg:"mono",h:"xs",transition:{duration:2,ease:"easeInOut",repeat:1/0,repeatDelay:1,times:[0,.2,.5,.8,1]},w:"xs"}),u=()=>{const[e,{toggle:t}]=g();return n.jsx(Y,{as:"button","aria-label":"Toggle layout",bg:"mono",display:"flex",h:"8",justifyContent:e?"flex-end":"flex-start",p:"1",rounded:"full",w:"14",onClick:t,children:n.jsx(o,{bg:"mono.contrast",h:"6",layout:!0,rounded:"full",transition:{type:"spring",damping:30,stiffness:700},w:"6"})})},p=()=>{const e=()=>{const[t,{toggle:J}]=g(!1);return n.jsx(o,{as:"button","aria-label":"Toggle accordion",bg:"mono",display:"flex",h:"16",layout:!0,p:"md",placeContent:"center",rounded:"l2",w:t?"32":"16",onClick:J})};return n.jsxs(n.Fragment,{children:[n.jsxs(x,{children:[n.jsx(y,{size:"md",children:"Not using LayoutGroup"}),n.jsxs(f,{children:[n.jsx(e,{}),n.jsx(e,{})]})]}),n.jsxs(x,{children:[n.jsx(y,{size:"md",children:"Using LayoutGroup"}),n.jsx(f,{children:n.jsxs(Z,{children:[n.jsx(e,{}),n.jsx(e,{})]})})]})]})};var b,M,j;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...(j=(M=r.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var h,S,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 2,
    ease: "easeOut"
  }}>
      Motion
    </Motion>;
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var B,C,H;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Motion animate={{
    rotate: 360,
    scale: 1
  }} bg="mono" color="mono.contrast" initial={{
    scale: 0
  }} p="md" rounded="l2" transition={{
    type: "spring",
    damping: 20,
    stiffness: 260
  }}>
      Motion
    </Motion>;
}`,...(H=(C=s.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var L,T,A;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" initial={{
    x: -100
  }} p="md" rounded="l2">
      Motion
    </Motion>;
}`,...(A=(T=i.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var G,w,I;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const [visible, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please click</Button>

      <AnimatePresence>
        {visible ? <Motion animate={{
        opacity: 1
      }} bg="mono" color="mono.contrast" exit={{
        opacity: 0
      }} initial={{
        opacity: 0
      }} p="md" rounded="l2">
            Motion
          </Motion> : null}
      </AnimatePresence>
    </>;
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var V,O,P;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,z,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 3,
    times: [0, 0.2, 1]
  }}>
      Motion
    </Motion>;
}`,...(E=(z=m.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var v,F,D;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Motion animate={{
    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
    rotate: [0, 0, 180, 180, 0],
    scale: [1, 2, 2, 1, 1]
  }} bg="mono" h="xs" transition={{
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 1,
    times: [0, 0.2, 0.5, 0.8, 1]
  }} w="xs" />;
}`,...(D=(F=d.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var K,N,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <Box as="button" aria-label="Toggle layout" bg="mono" display="flex" h="8" justifyContent={!flg ? "flex-start" : "flex-end"} p="1" rounded="full" w="14" onClick={toggle}>
      <Motion bg="mono.contrast" h="6" layout rounded="full" transition={{
      type: "spring",
      damping: 30,
      stiffness: 700
    }} w="6" />
    </Box>;
}`,...(U=(N=u.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var _,Q,q;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const Accordion: FC = () => {
    const [open, {
      toggle
    }] = useBoolean(false);
    return <Motion as="button" aria-label="Toggle accordion" bg="mono" display="flex" h="16" layout p="md" placeContent="center" rounded="l2" w={open ? "32" : "16"} onClick={toggle} />;
  };
  return <>
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
    </>;
}`,...(q=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:q.source}}};const ln=["Basic","Transition","TransitionType","Initial","Exit","Keyframes","Times","Repeat","Layout","GroupLayout"];export{r as Basic,c as Exit,p as GroupLayout,i as Initial,l as Keyframes,u as Layout,d as Repeat,m as Times,a as Transition,s as TransitionType,ln as __namedExportsOrder,cn as default};
