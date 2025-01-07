import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r}from"./index-ClcD9ViR.js";import{M as i}from"./motion-D1XeYKIG.js";import{C as o}from"./center-B5IQJJLi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-2BKBy0Yi.js";import"./proxy-DYgA1A03.js";import"./factory-D0ba2aB7.js";const _={component:i,title:"Components / Motion / Variants"},s=()=>{const t=r.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]);return n.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(i,{animate:"visible",bg:"primary",cursor:"pointer",h:"2xs",initial:"hidden",rounded:"3xl",variants:t,w:"2xs"})})},d=()=>{const t=r.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]),e=r.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return n.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsxs(i,{animate:"visible",bg:"primary",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"3xl",variants:t,w:"2xs",children:[n.jsx(i,{bg:"white",h:"4",rounded:"md",variants:e,w:"full"}),n.jsx(i,{bg:"white",h:"4",rounded:"md",variants:e,w:"full"}),n.jsx(i,{bg:"white",h:"4",rounded:"md",variants:e,w:"full"}),n.jsx(i,{bg:"white",h:"4",rounded:"md",variants:e,w:"full"})]})})},c=()=>{const t=r.useMemo(()=>({hidden:{opacity:0,transition:{when:"afterChildren"}},visible:{opacity:1,transition:{staggerChildren:.5,when:"beforeChildren"}}}),[]),e=r.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return n.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsxs(i,{animate:"visible",bg:"primary",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"3xl",variants:t,w:"2xs",children:[n.jsx(i,{bg:"white",h:"4",rounded:"md",variants:e,w:"full"}),n.jsx(i,{bg:"white",h:"4",rounded:"md",variants:e,w:"full"}),n.jsx(i,{bg:"white",h:"4",rounded:"md",variants:e,w:"full"}),n.jsx(i,{bg:"white",h:"4",rounded:"md",variants:e,w:"full"})]})})},l=()=>{const t=r.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]),e=r.useMemo(()=>({hidden:{opacity:0,x:-100},visible:a=>({opacity:1,transition:{delay:a*.3},x:0})}),[]);return n.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsxs(i,{animate:"visible",bg:"primary",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",initial:"hidden",overflow:"hidden",p:"md",rounded:"3xl",variants:t,w:"2xs",children:[n.jsx(i,{bg:"white",custom:1,h:"4",rounded:"md",variants:e,w:"full"}),n.jsx(i,{bg:"white",custom:2,h:"4",rounded:"md",variants:e,w:"full"}),n.jsx(i,{bg:"white",custom:3,h:"4",rounded:"md",variants:e,w:"full"}),n.jsx(i,{bg:"white",custom:4,h:"4",rounded:"md",variants:e,w:"full"})]})})},p=()=>{const t=r.useMemo(()=>({hidden:{opacity:0,pathLength:0},visible:e=>{const a=1+e*.5;return{opacity:1,pathLength:1,transition:{opacity:{delay:a,duration:.01},pathLength:{type:"spring",bounce:0,delay:a,duration:1.5}}}}}),[]);return n.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsxs(i,{as:"svg",animate:"visible",h:"200px",initial:"hidden",viewBox:"0 0 800 200",w:"800px",children:[n.jsx(i,{as:"circle",custom:1,cx:"100",cy:"100",fill:"transparent",r:"80",stroke:"#ed3237",strokeLinecap:"round",strokeWidth:"10px",variants:t}),n.jsx(i,{as:"line",custom:2,fill:"transparent",stroke:"#f5c535",strokeLinecap:"round",strokeWidth:"10px",variants:t,x1:"220",x2:"360",y1:"30",y2:"170"}),n.jsx(i,{as:"line",custom:2.5,fill:"transparent",stroke:"#f5c535",strokeLinecap:"round",strokeWidth:"10px",variants:t,x1:"220",x2:"360",y1:"170",y2:"30"}),n.jsx(i,{as:"rect",custom:3,fill:"transparent",h:"140px",rx:"20",stroke:"#0789c7",strokeLinecap:"round",strokeWidth:"10px",variants:t,w:"140px",x:"410",y:"30"}),n.jsx(i,{as:"polygon",custom:4,fill:"transparent",points:"670 30, 600 170, 740 170",stroke:"#42b7a5",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"10px",variants:t})]})})};var u,m,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const variants: MotionVariants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }), []);
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion animate="visible" bg="primary" cursor="pointer" h="2xs" initial="hidden" rounded="3xl" variants={variants} w="2xs" />
    </Center>;
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,v,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const list: MotionVariants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
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
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion animate="visible" bg="primary" cursor="pointer" display="flex" flexDirection="column" gap="md" initial="hidden" overflow="hidden" p="md" rounded="3xl" variants={list} w="2xs">
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
      </Motion>
    </Center>;
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,f,b;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const list: MotionVariants = useMemo(() => ({
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
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion animate="visible" bg="primary" cursor="pointer" display="flex" flexDirection="column" gap="md" initial="hidden" overflow="hidden" p="md" rounded="3xl" variants={list} w="2xs">
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
      </Motion>
    </Center>;
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,M,k;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const list: MotionVariants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }), []);
  const item: MotionVariants = useMemo(() => ({
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
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion animate="visible" bg="primary" cursor="pointer" display="flex" flexDirection="column" gap="md" initial="hidden" overflow="hidden" p="md" rounded="3xl" variants={list} w="2xs">
        <Motion bg="white" custom={1} h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" custom={2} h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" custom={3} h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" custom={4} h="4" rounded="md" variants={item} w="full" />
      </Motion>
    </Center>;
}`,...(k=(M=l.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var j,C,L;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const variants: MotionVariants = useMemo(() => ({
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
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion as="svg" animate="visible" h="200px" initial="hidden" viewBox="0 0 800 200" w="800px">
        <Motion as="circle" custom={1} cx="100" cy="100" fill="transparent" r="80" stroke="#ed3237" strokeLinecap="round" strokeWidth="10px" variants={variants} />
        <Motion as="line" custom={2} fill="transparent" stroke="#f5c535" strokeLinecap="round" strokeWidth="10px" variants={variants} x1="220" x2="360" y1="30" y2="170" />
        <Motion as="line" custom={2.5} fill="transparent" stroke="#f5c535" strokeLinecap="round" strokeWidth="10px" variants={variants} x1="220" x2="360" y1="170" y2="30" />
        <Motion as="rect" custom={3} fill="transparent" h="140px" rx="20" stroke="#0789c7" strokeLinecap="round" strokeWidth="10px" variants={variants} w="140px" x="410" y="30" />
        <Motion as="polygon" custom={4} fill="transparent" points="670 30, 600 170, 740 170" stroke="#42b7a5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10px" variants={variants} />
      </Motion>
    </Center>;
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const R=["basic","usePropagation","useOrchestration","useDynamicVariants","useValueSpecific"];export{R as __namedExportsOrder,s as basic,_ as default,l as useDynamicVariants,c as useOrchestration,d as usePropagation,p as useValueSpecific};
