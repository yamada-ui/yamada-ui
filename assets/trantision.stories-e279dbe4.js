import{a as n,j as x}from"./jsx-runtime-b08f8875.js";import{r}from"./index-8ee6c85d.js";import{M as e}from"./motion-37a66323.js";import{C as t}from"./center-72365e1a.js";import"./_commonjsHelpers-de833af9.js";import"./motion-5447b2d8.js";import"./forward-ref-cf7188bd.js";import"./factory-7bddb6ec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";const dn={title:"Components / Motion / Transition",component:e},a=()=>n(t,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{animate:{x:100},transition:{ease:"easeOut",duration:2,delay:1},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),d=()=>n(t,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{animate:{x:100},transition:{type:"spring",stiffness:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),s=()=>n(t,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{initial:{opacity:0},animate:{opacity:1,x:100},transition:{ease:"easeOut",delay:1,x:{duration:2},opacity:{duration:1}},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),c=()=>{const o=r.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:1}}}),[]),i=r.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return n(t,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:x(e,{initial:"hidden",animate:"visible",variants:o,w:"2xs",p:"md",bg:"primary",overflow:"hidden",rounded:"3xl",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",children:[n(e,{variants:i,custom:1,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,custom:2,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,custom:3,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,custom:4,bg:"white",w:"full",h:"4",rounded:"md"})]})})},l=()=>{const o=r.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:1}}}),[]),i=r.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return n(t,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:x(e,{initial:"hidden",animate:"visible",variants:o,w:"2xs",p:"md",bg:"primary",overflow:"hidden",rounded:"3xl",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",children:[n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"})]})})},m=()=>{const o=r.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:1,staggerDirection:-1}}}),[]),i=r.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return n(t,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:x(e,{initial:"hidden",animate:"visible",variants:o,w:"2xs",p:"md",bg:"primary",overflow:"hidden",rounded:"3xl",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",children:[n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"})]})})},p=()=>{const o=r.useMemo(()=>({hidden:{opacity:0,transition:{when:"afterChildren"}}}),[]),i=r.useMemo(()=>({hidden:{opacity:0,transition:{duration:1}}}),[]);return n(t,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:x(e,{animate:"hidden",variants:o,w:"2xs",p:"md",bg:"primary",overflow:"hidden",rounded:"3xl",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",children:[n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"}),n(e,{variants:i,bg:"white",w:"full",h:"4",rounded:"md"})]})})},h=()=>n(t,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{animate:{rotate:360},transition:{repeat:1/0,duration:2},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),u=()=>n(t,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{animate:{rotate:360},transition:{repeat:1/0,repeatType:"reverse",duration:2},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),w=()=>n(t,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{animate:{rotate:360},transition:{repeat:1/0,duration:2,repeatDelay:1},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})}),v=()=>n(t,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{animate:{x:100},transition:{ease:[.17,.67,.83,.67]},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})});var g,y,M;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      x: 100
    }} transition={{
      ease: "easeOut",
      duration: 2,
      delay: 1
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(M=(y=a.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var f,b,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      x: 100
    }} transition={{
      type: "spring",
      stiffness: 100
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var D,S,V;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion initial={{
      opacity: 0
    }} animate={{
      opacity: 1,
      x: 100
    }} transition={{
      ease: "easeOut",
      delay: 1,
      x: {
        duration: 2
      },
      opacity: {
        duration: 1
      }
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(V=(S=s.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var T,I,R;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const list: MotionVariants = useMemo(() => ({
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
  const item: MotionVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0
    }
  }), []);
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion initial="hidden" animate="visible" variants={list} w="2xs" p="md" bg="primary" overflow="hidden" rounded="3xl" cursor="pointer" display="flex" flexDirection="column" gap="md">
        <Motion variants={item} custom={1} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} custom={2} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} custom={3} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} custom={4} bg="white" w="full" h="4" rounded="md" />
      </Motion>
    </Center>;
}`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var O,E,j;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const list: MotionVariants = useMemo(() => ({
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
  const item: MotionVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0
    }
  }), []);
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion initial="hidden" animate="visible" variants={list} w="2xs" p="md" bg="primary" overflow="hidden" rounded="3xl" cursor="pointer" display="flex" flexDirection="column" gap="md">
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
      </Motion>
    </Center>;
}`,...(j=(E=l.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var A,_,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const list: MotionVariants = useMemo(() => ({
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
  const item: MotionVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0
    }
  }), []);
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion initial="hidden" animate="visible" variants={list} w="2xs" p="md" bg="primary" overflow="hidden" rounded="3xl" cursor="pointer" display="flex" flexDirection="column" gap="md">
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
      </Motion>
    </Center>;
}`,...(k=(_=m.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var q,z,B;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const list: MotionVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    }
  }), []);
  const item: MotionVariants = useMemo(() => ({
    hidden: {
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }), []);
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate="hidden" variants={list} w="2xs" p="md" bg="primary" overflow="hidden" rounded="3xl" cursor="pointer" display="flex" flexDirection="column" gap="md">
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
      </Motion>
    </Center>;
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var F,G,H;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      rotate: 360
    }} transition={{
      repeat: Infinity,
      duration: 2
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,L;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      rotate: 360
    }} transition={{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(L=(K=u.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,P,Q;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      rotate: 360
    }} transition={{
      repeat: Infinity,
      duration: 2,
      repeatDelay: 1
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(Q=(P=w.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,W,X;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion animate={{
      x: 100
    }} transition={{
      ease: [0.17, 0.67, 0.83, 0.67]
    }} bg="primary" color="white" p="md" rounded="md">
        Motion
      </Motion>
    </Center>;
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const sn=["basic","withType","useValueSpecific","withDelayChildren","withStaggerChildren","withStaggerDirection","withAfterChildren","withRepeat","withRepeatType","withRepeatDelay","withEasing"];export{sn as __namedExportsOrder,a as basic,dn as default,s as useValueSpecific,p as withAfterChildren,c as withDelayChildren,v as withEasing,h as withRepeat,w as withRepeatDelay,u as withRepeatType,l as withStaggerChildren,m as withStaggerDirection,d as withType};
//# sourceMappingURL=trantision.stories-e279dbe4.js.map
