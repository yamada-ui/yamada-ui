import{r as e,j as o}from"./iframe-DqV1pF0Y.js";import{M as n}from"./motion-CmSN-1Xw.js";const m={component:n,title:"Components / Motion / Variants"},s=()=>{const i=e.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]);return o.jsx(n,{animate:"visible",bg:"mono",cursor:"pointer",h:"2xs",initial:"hidden",rounded:"l2",variants:i,w:"2xs"})},a=()=>{const i=e.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]),t=e.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return o.jsxs(n,{animate:"visible",bg:"mono",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"l2",variants:i,w:"2xs",children:[o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"})]})},d=()=>{const i=e.useMemo(()=>({hidden:{opacity:0,transition:{when:"afterChildren"}},visible:{opacity:1,transition:{staggerChildren:.5,when:"beforeChildren"}}}),[]),t=e.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return o.jsxs(n,{animate:"visible",bg:"mono",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"l2",variants:i,w:"2xs",children:[o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",h:"4",rounded:"l2",variants:t,w:"full"})]})},l=()=>{const i=e.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]),t=e.useMemo(()=>({hidden:{opacity:0,x:-100},visible:r=>({opacity:1,transition:{delay:r*.3},x:0})}),[]);return o.jsxs(n,{animate:"visible",bg:"mono",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"l2",variants:i,w:"2xs",children:[o.jsx(n,{bg:"mono.contrast",custom:1,h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",custom:2,h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",custom:3,h:"4",rounded:"l2",variants:t,w:"full"}),o.jsx(n,{bg:"mono.contrast",custom:4,h:"4",rounded:"l2",variants:t,w:"full"})]})},c=()=>{const i=e.useMemo(()=>({hidden:{opacity:0,pathLength:0},visible:t=>{const r=1+t*.5;return{opacity:1,pathLength:1,transition:{opacity:{delay:r,duration:.01},pathLength:{type:"spring",bounce:0,delay:r,duration:1.5}}}}}),[]);return o.jsxs(n,{as:"svg",animate:"visible",h:"200px",initial:"hidden",viewBox:"0 0 800 200",w:"800px",children:[o.jsx(n,{as:"circle",custom:1,cx:"100",cy:"100",fill:"transparent",r:"80",stroke:"#ed3237",strokeLinecap:"round",strokeWidth:"10px",variants:i}),o.jsx(n,{as:"line",custom:2,fill:"transparent",stroke:"#f5c535",strokeLinecap:"round",strokeWidth:"10px",variants:i,x1:"220",x2:"360",y1:"30",y2:"170"}),o.jsx(n,{as:"line",custom:2.5,fill:"transparent",stroke:"#f5c535",strokeLinecap:"round",strokeWidth:"10px",variants:i,x1:"220",x2:"360",y1:"170",y2:"30"}),o.jsx(n,{as:"rect",custom:3,fill:"transparent",h:"140px",rx:"20",stroke:"#0789c7",strokeLinecap:"round",strokeWidth:"10px",variants:i,w:"140px",x:"410",y:"30"}),o.jsx(n,{as:"polygon",custom:4,fill:"transparent",points:"670 30, 600 170, 740 170",stroke:"#42b7a5",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"10px",variants:i})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const variants: Variants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }), []);
  return <Motion animate="visible" bg="mono" cursor="pointer" h="2xs" initial="hidden" rounded="l2" variants={variants} w="2xs" />;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const list: Variants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
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
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const list: Variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        when: "beforeChildren"
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const list: Variants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }), []);
  const item: Variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.3
      },
      x: 0
    })
  }), []);
  return <Motion animate="visible" bg="mono" cursor="pointer" display="flex" flexDirection="column" gap="md" initial="hidden" overflow="hidden" p="md" rounded="l2" variants={list} w="2xs">
      <Motion bg="mono.contrast" custom={1} h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" custom={2} h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" custom={3} h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" custom={4} h="4" rounded="l2" variants={item} w="full" />
    </Motion>;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const variants: Variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: i => {
      const delay = 1 + i * 0.5;
      return {
        opacity: 1,
        pathLength: 1,
        transition: {
          opacity: {
            delay,
            duration: 0.01
          },
          pathLength: {
            type: "spring",
            bounce: 0,
            delay,
            duration: 1.5
          }
        }
      };
    }
  }), []);
  return <Motion as="svg" animate="visible" h="200px" initial="hidden" viewBox="0 0 800 200" w="800px">
      <Motion as="circle" custom={1} cx="100" cy="100" fill="transparent" r="80" stroke="#ed3237" strokeLinecap="round" strokeWidth="10px" variants={variants} />
      <Motion as="line" custom={2} fill="transparent" stroke="#f5c535" strokeLinecap="round" strokeWidth="10px" variants={variants} x1="220" x2="360" y1="30" y2="170" />
      <Motion as="line" custom={2.5} fill="transparent" stroke="#f5c535" strokeLinecap="round" strokeWidth="10px" variants={variants} x1="220" x2="360" y1="170" y2="30" />
      <Motion as="rect" custom={3} fill="transparent" h="140px" rx="20" stroke="#0789c7" strokeLinecap="round" strokeWidth="10px" variants={variants} w="140px" x="410" y="30" />
      <Motion as="polygon" custom={4} fill="transparent" points="670 30, 600 170, 740 170" stroke="#42b7a5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10px" variants={variants} />
    </Motion>;
}`,...c.parameters?.docs?.source}}};const h=["Basic","Propagation","Orchestration","DynamicVariants","ValueSpecific"];export{s as Basic,l as DynamicVariants,d as Orchestration,a as Propagation,c as ValueSpecific,h as __namedExportsOrder,m as default};
