import{j as n}from"./extends-CwFRzn3r.js";import{r}from"./index-BwDkhjyp.js";import{M as i}from"./motion-Cb8krJe1.js";import{C as o}from"./center-BiJcy2pa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-scR1bmHx.js";import"./motion-I-9Hg3gW.js";import"./factory-CPqzzHTm.js";const _={title:"Components / Motion / Variants",component:i},s=()=>{const t=r.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]);return n.jsx(o,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(i,{initial:"hidden",animate:"visible",variants:t,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"pointer"})})},d=()=>{const t=r.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]),e=r.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return n.jsx(o,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(i,{initial:"hidden",animate:"visible",variants:t,w:"2xs",p:"md",bg:"primary",overflow:"hidden",rounded:"3xl",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",children:[n.jsx(i,{variants:e,bg:"white",w:"full",h:"4",rounded:"md"}),n.jsx(i,{variants:e,bg:"white",w:"full",h:"4",rounded:"md"}),n.jsx(i,{variants:e,bg:"white",w:"full",h:"4",rounded:"md"}),n.jsx(i,{variants:e,bg:"white",w:"full",h:"4",rounded:"md"})]})})},c=()=>{const t=r.useMemo(()=>({hidden:{opacity:0,transition:{when:"afterChildren"}},visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.5}}}),[]),e=r.useMemo(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return n.jsx(o,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(i,{initial:"hidden",animate:"visible",variants:t,w:"2xs",p:"md",bg:"primary",overflow:"hidden",rounded:"3xl",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",children:[n.jsx(i,{variants:e,bg:"white",w:"full",h:"4",rounded:"md"}),n.jsx(i,{variants:e,bg:"white",w:"full",h:"4",rounded:"md"}),n.jsx(i,{variants:e,bg:"white",w:"full",h:"4",rounded:"md"}),n.jsx(i,{variants:e,bg:"white",w:"full",h:"4",rounded:"md"})]})})},l=()=>{const t=r.useMemo(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]),e=r.useMemo(()=>({hidden:{opacity:0,x:-100},visible:a=>({opacity:1,x:0,transition:{delay:a*.3}})}),[]);return n.jsx(o,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(i,{initial:"hidden",animate:"visible",variants:t,w:"2xs",p:"md",bg:"primary",overflow:"hidden",rounded:"3xl",cursor:"pointer",display:"flex",flexDirection:"column",gap:"md",children:[n.jsx(i,{variants:e,custom:1,bg:"white",w:"full",h:"4",rounded:"md"}),n.jsx(i,{variants:e,custom:2,bg:"white",w:"full",h:"4",rounded:"md"}),n.jsx(i,{variants:e,custom:3,bg:"white",w:"full",h:"4",rounded:"md"}),n.jsx(i,{variants:e,custom:4,bg:"white",w:"full",h:"4",rounded:"md"})]})})},p=()=>{const t=r.useMemo(()=>({hidden:{pathLength:0,opacity:0},visible:e=>{const a=1+e*.5;return{pathLength:1,opacity:1,transition:{pathLength:{delay:a,type:"spring",duration:1.5,bounce:0},opacity:{delay:a,duration:.01}}}}}),[]);return n.jsx(o,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(i,{as:"svg",w:"800px",h:"200px",viewBox:"0 0 800 200",initial:"hidden",animate:"visible",children:[n.jsx(i,{as:"circle",cx:"100",cy:"100",r:"80",stroke:"#ed3237",variants:t,custom:1,strokeWidth:"10px",strokeLinecap:"round",fill:"transparent"}),n.jsx(i,{as:"line",x1:"220",y1:"30",x2:"360",y2:"170",stroke:"#f5c535",variants:t,custom:2,strokeWidth:"10px",strokeLinecap:"round",fill:"transparent"}),n.jsx(i,{as:"line",x1:"220",y1:"170",x2:"360",y2:"30",stroke:"#f5c535",variants:t,custom:2.5,strokeWidth:"10px",strokeLinecap:"round",fill:"transparent"}),n.jsx(i,{as:"rect",w:"140px",h:"140px",x:"410",y:"30",rx:"20",stroke:"#0789c7",variants:t,custom:3,strokeWidth:"10px",strokeLinecap:"round",fill:"transparent"}),n.jsx(i,{as:"polygon",points:"670 30, 600 170, 740 170",stroke:"#42b7a5",variants:t,custom:4,strokeWidth:"10px",strokeLinecap:"round",strokeLinejoin:"round",fill:"transparent"})]})})};var u,m,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const variants: MotionVariants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }), []);
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion initial="hidden" animate="visible" variants={variants} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="pointer" />
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
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion initial="hidden" animate="visible" variants={list} w="2xs" p="md" bg="primary" overflow="hidden" rounded="3xl" cursor="pointer" display="flex" flexDirection="column" gap="md">
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} bg="white" w="full" h="4" rounded="md" />
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
        when: "beforeChildren",
        staggerChildren: 0.5
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
      x: 0,
      transition: {
        delay: i * 0.3
      }
    })
  }), []);
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion initial="hidden" animate="visible" variants={list} w="2xs" p="md" bg="primary" overflow="hidden" rounded="3xl" cursor="pointer" display="flex" flexDirection="column" gap="md">
        <Motion variants={item} custom={1} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} custom={2} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} custom={3} bg="white" w="full" h="4" rounded="md" />
        <Motion variants={item} custom={4} bg="white" w="full" h="4" rounded="md" />
      </Motion>
    </Center>;
}`,...(k=(M=l.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var j,C,L;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const variants: MotionVariants = useMemo(() => ({
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: i => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: "spring",
            duration: 1.5,
            bounce: 0
          },
          opacity: {
            delay,
            duration: 0.01
          }
        }
      };
    }
  }), []);
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion as="svg" w="800px" h="200px" viewBox="0 0 800 200" initial="hidden" animate="visible">
        <Motion as="circle" cx="100" cy="100" r="80" stroke="#ed3237" variants={variants} custom={1} strokeWidth="10px" strokeLinecap="round" fill="transparent" />
        <Motion as="line" x1="220" y1="30" x2="360" y2="170" stroke="#f5c535" variants={variants} custom={2} strokeWidth="10px" strokeLinecap="round" fill="transparent" />
        <Motion as="line" x1="220" y1="170" x2="360" y2="30" stroke="#f5c535" variants={variants} custom={2.5} strokeWidth="10px" strokeLinecap="round" fill="transparent" />
        <Motion as="rect" w="140px" h="140px" x="410" y="30" rx="20" stroke="#0789c7" variants={variants} custom={3} strokeWidth="10px" strokeLinecap="round" fill="transparent" />
        <Motion as="polygon" points="670 30, 600 170, 740 170" stroke="#42b7a5" variants={variants} custom={4} strokeWidth="10px" strokeLinecap="round" strokeLinejoin="round" fill="transparent" />
      </Motion>
    </Center>;
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const R=["basic","usePropagation","useOrchestration","useDynamicVariants","useValueSpecific"];export{R as __namedExportsOrder,s as basic,_ as default,l as useDynamicVariants,c as useOrchestration,d as usePropagation,p as useValueSpecific};
