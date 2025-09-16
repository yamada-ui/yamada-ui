import{r as a,ar as H,bb as I,bc as j,j as n,R as A,a8 as E,V as C}from"./iframe-Brv718Ke.js";import{u as h}from"./index-2Zpngp_N.js";import{M as r}from"./motion-CvEOx8CP.js";import{B as T}from"./box-DZwUCUPQ.js";import{H as k}from"./heading-DLtRtgvj.js";import{H as S}from"./h-stack-CxP5ixKU.js";import"./preload-helper-D9Z9MdNV.js";const v=a.createContext(null);function F(){const o=a.useRef(!1);return H(()=>(o.current=!0,()=>{o.current=!1}),[]),o}function P(){const o=F(),[e,s]=a.useState(0),t=a.useCallback(()=>{o.current&&s(e+1)},[e]);return[a.useCallback(()=>I.postRender(t),[t]),e]}const V=o=>!o.isLayoutDirty&&o.willUpdate(!1);function L(){const o=new Set,e=new WeakMap,s=()=>o.forEach(V);return{add:t=>{o.add(t),e.set(t,t.addEventListener("willUpdate",s))},remove:t=>{o.delete(t);const i=e.get(t);i&&(i(),e.delete(t)),s()},dirty:s}}const G=o=>o===!0,z=o=>G(o===!0)||o==="id",O=({children:o,id:e,inherit:s=!0})=>{const t=a.useContext(j),i=a.useContext(v),[R,B]=P(),b=a.useRef(null),M=t.id||i;b.current===null&&(z(s)&&M&&(e=e?M+"-"+e:M),b.current={id:e,group:G(s)&&t.group||L()});const w=a.useMemo(()=>({...b.current,forceRender:R}),[B]);return n.jsx(j.Provider,{value:w,children:o})},J={component:r,title:"Components / Motion / Animation"},c=()=>n.jsx(r,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Motion"}),u=()=>n.jsx(r,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:2,ease:"easeOut"},children:"Motion"}),d=()=>n.jsx(r,{animate:{rotate:360,scale:1},bg:"mono",color:"mono.contrast",initial:{scale:0},p:"md",rounded:"l2",transition:{type:"spring",damping:20,stiffness:260},children:"Motion"}),l=()=>n.jsx(r,{animate:{x:100},bg:"mono",color:"mono.contrast",initial:{x:-100},p:"md",rounded:"l2",children:"Motion"}),m=()=>{const[o,{toggle:e}]=h();return n.jsxs(n.Fragment,{children:[n.jsx(A,{onClick:e,children:"Please click"}),n.jsx(E,{children:o?n.jsx(r,{animate:{opacity:1},bg:"mono",color:"mono.contrast",exit:{opacity:0},initial:{opacity:0},p:"md",rounded:"l2",children:"Motion"}):null})]})},p=()=>n.jsx(r,{animate:{x:[0,100,0]},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",children:"Motion"}),g=()=>n.jsx(r,{animate:{x:[0,100,0]},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:3,times:[0,.2,1]},children:"Motion"}),x=()=>n.jsx(r,{animate:{borderRadius:["0%","0%","50%","50%","0%"],rotate:[0,0,180,180,0],scale:[1,2,2,1,1]},bg:"mono",h:"xs",transition:{duration:2,ease:"easeInOut",repeat:1/0,repeatDelay:1,times:[0,.2,.5,.8,1]},w:"xs"}),f=()=>{const[o,{toggle:e}]=h();return n.jsx(T,{as:"button",bg:"mono",display:"flex",h:"8",justifyContent:o?"flex-end":"flex-start",p:"1",rounded:"full",w:"14",onClick:e,children:n.jsx(r,{bg:"mono.contrast",h:"6",layout:!0,rounded:"full",transition:{type:"spring",damping:30,stiffness:700},w:"6"})})},y=()=>{const o=()=>{const[e,{toggle:s}]=h(!1);return n.jsx(r,{as:"button",bg:"mono",display:"flex",h:"16",layout:!0,p:"md",placeContent:"center",rounded:"l2",w:e?"32":"16",onClick:s})};return n.jsxs(n.Fragment,{children:[n.jsxs(C,{children:[n.jsx(k,{size:"md",children:"Not using LayoutGroup"}),n.jsxs(S,{children:[n.jsx(o,{}),n.jsx(o,{})]})]}),n.jsxs(C,{children:[n.jsx(k,{size:"md",children:"Using LayoutGroup"}),n.jsx(S,{children:n.jsxs(O,{children:[n.jsx(o,{}),n.jsx(o,{})]})})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 2,
    ease: "easeOut"
  }}>
      Motion
    </Motion>;
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" initial={{
    x: -100
  }} p="md" rounded="l2">
      Motion
    </Motion>;
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2">
      Motion
    </Motion>;
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: [0, 100, 0]
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 3,
    times: [0, 0.2, 1]
  }}>
      Motion
    </Motion>;
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};const Q=["Basic","Transition","TransitionType","Initial","Exit","Keyframes","Times","Repeat","Layout","GroupLayout"];export{c as Basic,m as Exit,y as GroupLayout,l as Initial,p as Keyframes,f as Layout,x as Repeat,g as Times,u as Transition,d as TransitionType,Q as __namedExportsOrder,J as default};
