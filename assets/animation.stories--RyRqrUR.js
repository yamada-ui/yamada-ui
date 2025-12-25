import{j as n,Q as W,a6 as X,V as x}from"./iframe-3lFlqlPN.js";import{u as g}from"./index-CyVVgCbW.js";import{M as o}from"./motion-D1c002Ki.js";import{B as Y}from"./box-emitGOf7.js";import{H as f}from"./heading-DSztmhpV.js";import{H as y}from"./h-stack-2m0l512O.js";import{L as Z}from"./index-C_H-T7Nv.js";import"./preload-helper-C1FmrZbK.js";const cn={component:o,title:"Components / Motion / Animation"},r=()=>n.jsx(o,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Motion"}),a=()=>n.jsx(o,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:2,ease:"easeOut"},children:"Motion"}),s=()=>n.jsx(o,{animate:{rotate:360,scale:1},bg:"mono",color:"mono.contrast",initial:{scale:0},p:"md",rounded:"l2",transition:{type:"spring",damping:20,stiffness:260},children:"Motion"}),i=()=>n.jsx(o,{animate:{x:100},bg:"mono",color:"mono.contrast",initial:{x:-100},p:"md",rounded:"l2",children:"Motion"}),c=()=>{const[t,{toggle:e}]=g();return n.jsxs(n.Fragment,{children:[n.jsx(W,{onClick:e,children:"Please click"}),n.jsx(X,{children:t?n.jsx(o,{animate:{opacity:1},bg:"mono",color:"mono.contrast",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"l2",children:"Motion"}):null})]})},m=()=>n.jsx(o,{animate:{x:[0,100,0]},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Motion"}),d=()=>n.jsx(o,{animate:{x:[0,100,0]},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:3,times:[0,.2,1]},children:"Motion"}),l=()=>n.jsx(o,{animate:{borderRadius:["0%","0%","50%","50%","0%"],rotate:[0,0,180,180,0],scale:[1,2,2,1,1]},bg:"mono",h:"xs",transition:{duration:2,ease:"easeInOut",repeat:1/0,repeatDelay:1,times:[0,.2,.5,.8,1]},w:"xs"}),u=()=>{const[t,{toggle:e}]=g();return n.jsx(Y,{as:"button",bg:"mono",display:"flex",h:"8",justifyContent:t?"flex-end":"flex-start",p:"1",rounded:"full",w:"14",onClick:e,children:n.jsx(o,{bg:"mono.contrast",h:"6",layout:!0,rounded:"full",transition:{type:"spring",damping:30,stiffness:700},w:"6"})})},p=()=>{const t=()=>{const[e,{toggle:J}]=g(!1);return n.jsx(o,{as:"button",bg:"mono",display:"flex",h:"16",layout:!0,p:"md",placeContent:"center",rounded:"l2",w:e?"32":"16",onClick:J})};return n.jsxs(n.Fragment,{children:[n.jsxs(x,{children:[n.jsx(f,{size:"md",children:"Not using LayoutGroup"}),n.jsxs(y,{children:[n.jsx(t,{}),n.jsx(t,{})]})]}),n.jsxs(x,{children:[n.jsx(f,{size:"md",children:"Using LayoutGroup"}),n.jsx(y,{children:n.jsxs(Z,{children:[n.jsx(t,{}),n.jsx(t,{})]})})]})]})};var M,b,j;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var h,S,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(H=(C=s.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var L,A,G;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" initial={{
    x: -100
  }} p="md" rounded="l2">
      Motion
    </Motion>;
}`,...(G=(A=i.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var w,T,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var V,O,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,z,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 3,
    times: [0, 0.2, 1]
  }}>
      Motion
    </Motion>;
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var v,F,D;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(D=(F=l.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var K,N,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <Box as="button" bg="mono" display="flex" h="8" justifyContent={!flg ? "flex-start" : "flex-end"} p="1" rounded="full" w="14" onClick={toggle}>
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
    return <Motion as="button" bg="mono" display="flex" h="16" layout p="md" placeContent="center" rounded="l2" w={open ? "32" : "16"} onClick={toggle} />;
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
}`,...(q=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:q.source}}};const mn=["Basic","Transition","TransitionType","Initial","Exit","Keyframes","Times","Repeat","Layout","GroupLayout"];export{r as Basic,c as Exit,p as GroupLayout,i as Initial,m as Keyframes,u as Layout,l as Repeat,d as Times,a as Transition,s as TransitionType,mn as __namedExportsOrder,cn as default};
