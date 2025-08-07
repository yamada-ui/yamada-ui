import{j as o,r as e}from"./iframe-CDTQ5ROD.js";import{M as n}from"./motion-BMbvSfC9.js";import"./preload-helper-D9Z9MdNV.js";const M={component:n,parameters:{layout:"centered"},title:"Components / Motion / Transition"},i=()=>o.jsx(n,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{delay:1,duration:2,ease:"easeOut"},children:"Motion"}),a=()=>o.jsx(n,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{type:"spring",stiffness:100},children:"Motion"}),s=()=>o.jsx(n,{animate:{opacity:1,x:100},bg:"mono",color:"mono.contrast",initial:{opacity:0},p:"md",rounded:"l2",transition:{delay:1,ease:"easeOut",opacity:{duration:1},x:{duration:2}},children:"Motion"}),d=()=>{const r=e.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:1}}}),[]),t=e.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return o.jsxs(n,{animate:"visible",bg:"mono",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"l3",variants:r,w:"2xs",children:[o.jsx(n,{bg:"mono.contrast",custom:1,h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",custom:2,h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",custom:3,h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",custom:4,h:"4",rounded:"l2",variants:t,w:"full"})]})},l=()=>{const r=e.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:1}}}),[]),t=e.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return o.jsxs(n,{animate:"visible",bg:"mono",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"l2",variants:r,w:"2xs",children:[o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"})]})},c=()=>{const r=e.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:1,staggerDirection:-1}}}),[]),t=e.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return o.jsxs(n,{animate:"visible",bg:"mono",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"l2",variants:r,w:"2xs",children:[o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"})]})},m=()=>{const r=e.useMemo(()=>({hidden:{opacity:0,transition:{when:"afterChildren"}}}),[]),t=e.useMemo(()=>({hidden:{opacity:0,transition:{duration:1}}}),[]);return o.jsxs(n,{animate:"hidden",bg:"mono",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",overflow:"hidden",p:"md",rounded:"l2",variants:r,w:"2xs",children:[o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"})]})},u=()=>o.jsx(n,{animate:{rotate:360},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:2,repeat:1/0},children:"Motion"}),p=()=>o.jsx(n,{animate:{rotate:360},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:2,repeat:1/0,repeatType:"reverse"},children:"Motion"}),g=()=>o.jsx(n,{animate:{rotate:360},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:2,repeat:1/0,repeatDelay:1},children:"Motion"}),h=()=>o.jsx(n,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{ease:[.17,.67,.83,.67]},children:"Motion"});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    delay: 1,
    duration: 2,
    ease: "easeOut"
  }}>
      Motion
    </Motion>;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    type: "spring",
    stiffness: 100
  }}>
      Motion
    </Motion>;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    opacity: 1,
    x: 100
  }} bg="mono" color="mono.contrast" initial={{
    opacity: 0
  }} p="md" rounded="l2" transition={{
    delay: 1,
    ease: "easeOut",
    opacity: {
      duration: 1
    },
    x: {
      duration: 2
    }
  }}>
      Motion
    </Motion>;
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const list: Variants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1
      }
    }
  }), []);
  const item: Variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0
    }
  }), []);
  return <Motion animate="visible" bg="mono" cursor="pointer" display="flex" flexDirection="column" gap="md" initial="hidden" overflow="hidden" p="md" rounded="l3" variants={list} w="2xs">
      <Motion bg="mono.contrast" custom={1} h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" custom={2} h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" custom={3} h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" custom={4} h="4" rounded="l2" variants={item} w="full" />
    </Motion>;
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const list: Variants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1
      }
    }
  }), []);
  const item: Variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0
    }
  }), []);
  return <Motion animate="visible" bg="mono" cursor="pointer" display="flex" flexDirection="column" gap="md" initial="hidden" overflow="hidden" p="md" rounded="l2" variants={list} w="2xs">
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
    </Motion>;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const list: Variants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        staggerDirection: -1
      }
    }
  }), []);
  const item: Variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0
    }
  }), []);
  return <Motion animate="visible" bg="mono" cursor="pointer" display="flex" flexDirection="column" gap="md" initial="hidden" overflow="hidden" p="md" rounded="l2" variants={list} w="2xs">
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
    </Motion>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const list: Variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    }
  }), []);
  const item: Variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }), []);
  return <Motion animate="hidden" bg="mono" cursor="pointer" display="flex" flexDirection="column" gap="md" overflow="hidden" p="md" rounded="l2" variants={list} w="2xs">
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
    </Motion>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    rotate: 360
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 2,
    repeat: Infinity
  }}>
      Motion
    </Motion>;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    rotate: 360
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse"
  }}>
      Motion
    </Motion>;
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    rotate: 360
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 2,
    repeat: Infinity,
    repeatDelay: 1
  }}>
      Motion
    </Motion>;
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    ease: [0.17, 0.67, 0.83, 0.67]
  }}>
      Motion
    </Motion>;
}`,...h.parameters?.docs?.source}}};const y=["Basic","Type","ValueSpecific","DelayChildren","StaggerChildren","StaggerDirection","AfterChildren","Repeat","RepeatType","RepeatDelay","Ease"];export{m as AfterChildren,i as Basic,d as DelayChildren,h as Ease,u as Repeat,g as RepeatDelay,p as RepeatType,l as StaggerChildren,c as StaggerDirection,a as Type,s as ValueSpecific,y as __namedExportsOrder,M as default};
