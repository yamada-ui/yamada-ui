import{j as o,r as e}from"./iframe-LqombrNM.js";import{M as n}from"./motion-DBKpRsXT.js";import"./preload-helper-C1FmrZbK.js";const Z={component:n,parameters:{layout:"centered"},title:"Components / Motion / Transition"},i=()=>o.jsx(n,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{delay:1,duration:2,ease:"easeOut"},children:"Motion"}),a=()=>o.jsx(n,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{type:"spring",stiffness:100},children:"Motion"}),s=()=>o.jsx(n,{animate:{opacity:1,x:100},bg:"mono",color:"mono.contrast",initial:{opacity:0},p:"md",rounded:"l2",transition:{delay:1,ease:"easeOut",opacity:{duration:1},x:{duration:2}},children:"Motion"}),d=()=>{const r=e.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:1}}}),[]),t=e.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return o.jsxs(n,{animate:"visible",bg:"mono",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"l3",variants:r,w:"2xs",children:[o.jsx(n,{bg:"mono.contrast",custom:1,h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",custom:2,h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",custom:3,h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",custom:4,h:"4",rounded:"l2",variants:t,w:"full"})]})},l=()=>{const r=e.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:1}}}),[]),t=e.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return o.jsxs(n,{animate:"visible",bg:"mono",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"l2",variants:r,w:"2xs",children:[o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"})]})},c=()=>{const r=e.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:1,staggerDirection:-1}}}),[]),t=e.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return o.jsxs(n,{animate:"visible",bg:"mono",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"l2",variants:r,w:"2xs",children:[o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"})]})},m=()=>{const r=e.useMemo(()=>({hidden:{opacity:0,transition:{when:"afterChildren"}}}),[]),t=e.useMemo(()=>({hidden:{opacity:0,transition:{duration:1}}}),[]);return o.jsxs(n,{animate:"hidden",bg:"mono",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",overflow:"hidden",p:"md",rounded:"l2",variants:r,w:"2xs",children:[o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"})]})},u=()=>o.jsx(n,{animate:{rotate:360},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:2,repeat:1/0},children:"Motion"}),p=()=>o.jsx(n,{animate:{rotate:360},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:2,repeat:1/0,repeatType:"reverse"},children:"Motion"}),g=()=>o.jsx(n,{animate:{rotate:360},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{duration:2,repeat:1/0,repeatDelay:1},children:"Motion"}),h=()=>o.jsx(n,{animate:{x:100},bg:"mono",color:"mono.contrast",p:"md",rounded:"l2",transition:{ease:[.17,.67,.83,.67]},children:"Motion"});var x,f,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    delay: 1,
    duration: 2,
    ease: "easeOut"
  }}>
      Motion
    </Motion>;
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var M,y,v;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    type: "spring",
    stiffness: 100
  }}>
      Motion
    </Motion>;
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,j,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var S,C,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(V=(C=d.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var R,T,I;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(I=(T=l.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var E,O,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var B,_,k;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(k=(_=m.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var q,z,F;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Motion animate={{
    rotate: 360
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 2,
    repeat: Infinity
  }}>
      Motion
    </Motion>;
}`,...(F=(z=u.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Motion animate={{
    rotate: 360
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse"
  }}>
      Motion
    </Motion>;
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,N;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Motion animate={{
    rotate: 360
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    duration: 2,
    repeat: Infinity,
    repeatDelay: 1
  }}>
      Motion
    </Motion>;
}`,...(N=(L=g.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,Q,U;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Motion animate={{
    x: 100
  }} bg="mono" color="mono.contrast" p="md" rounded="l2" transition={{
    ease: [0.17, 0.67, 0.83, 0.67]
  }}>
      Motion
    </Motion>;
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const $=["Basic","Type","ValueSpecific","DelayChildren","StaggerChildren","StaggerDirection","AfterChildren","Repeat","RepeatType","RepeatDelay","Ease"];export{m as AfterChildren,i as Basic,d as DelayChildren,h as Ease,u as Repeat,g as RepeatDelay,p as RepeatType,l as StaggerChildren,c as StaggerDirection,a as Type,s as ValueSpecific,$ as __namedExportsOrder,Z as default};
