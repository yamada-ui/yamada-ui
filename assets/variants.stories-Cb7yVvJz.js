import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Wm as n,_d as r,im as i,vd as a}from"./iframe-e5Q0HVQf.js";var o,s,c,l,u,d,f,p,m;e((()=>{o=t(n(),1),a(),s=i(),c={component:r,title:`Components / Motion / Variants`},l=()=>(0,s.jsx)(r,{animate:`visible`,bg:`mono`,cursor:`pointer`,h:`2xs`,initial:`hidden`,rounded:`l2`,variants:(0,o.useMemo)(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]),w:`2xs`}),u=()=>{let e=(0,o.useMemo)(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]),t=(0,o.useMemo)(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return(0,s.jsxs)(r,{animate:`visible`,bg:`mono`,cursor:`pointer`,display:`flex`,flexDirection:`column`,gap:`md`,initial:`hidden`,overflow:`hidden`,p:`md`,rounded:`l2`,variants:e,w:`2xs`,children:[(0,s.jsx)(r,{bg:`mono.contrast`,h:`4`,rounded:`l2`,variants:t,w:`full`}),(0,s.jsx)(r,{bg:`mono.contrast`,h:`4`,rounded:`l2`,variants:t,w:`full`}),(0,s.jsx)(r,{bg:`mono.contrast`,h:`4`,rounded:`l2`,variants:t,w:`full`}),(0,s.jsx)(r,{bg:`mono.contrast`,h:`4`,rounded:`l2`,variants:t,w:`full`})]})},d=()=>{let e=(0,o.useMemo)(()=>({hidden:{opacity:0,transition:{when:`afterChildren`}},visible:{opacity:1,transition:{staggerChildren:.5,when:`beforeChildren`}}}),[]),t=(0,o.useMemo)(()=>({hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}),[]);return(0,s.jsxs)(r,{animate:`visible`,bg:`mono`,cursor:`pointer`,display:`flex`,flexDirection:`column`,gap:`md`,initial:`hidden`,overflow:`hidden`,p:`md`,rounded:`l2`,variants:e,w:`2xs`,children:[(0,s.jsx)(r,{bg:`mono.contrast`,h:`4`,rounded:`l2`,variants:t,w:`full`}),(0,s.jsx)(r,{bg:`mono.contrast`,h:`4`,rounded:`l2`,variants:t,w:`full`}),(0,s.jsx)(r,{bg:`mono.contrast`,h:`4`,rounded:`l2`,variants:t,w:`full`}),(0,s.jsx)(r,{bg:`mono.contrast`,h:`4`,rounded:`l2`,variants:t,w:`full`})]})},f=()=>{let e=(0,o.useMemo)(()=>({hidden:{opacity:0},visible:{opacity:1}}),[]),t=(0,o.useMemo)(()=>({hidden:{opacity:0,x:-100},visible:e=>({opacity:1,transition:{delay:e*.3},x:0})}),[]);return(0,s.jsxs)(r,{animate:`visible`,bg:`mono`,cursor:`pointer`,display:`flex`,flexDirection:`column`,gap:`md`,initial:`hidden`,overflow:`hidden`,p:`md`,rounded:`l2`,variants:e,w:`2xs`,children:[(0,s.jsx)(r,{bg:`mono.contrast`,custom:1,h:`4`,rounded:`l2`,variants:t,w:`full`}),(0,s.jsx)(r,{bg:`mono.contrast`,custom:2,h:`4`,rounded:`l2`,variants:t,w:`full`}),(0,s.jsx)(r,{bg:`mono.contrast`,custom:3,h:`4`,rounded:`l2`,variants:t,w:`full`}),(0,s.jsx)(r,{bg:`mono.contrast`,custom:4,h:`4`,rounded:`l2`,variants:t,w:`full`})]})},p=()=>{let e=(0,o.useMemo)(()=>({hidden:{opacity:0,pathLength:0},visible:e=>{let t=1+e*.5;return{opacity:1,pathLength:1,transition:{opacity:{delay:t,duration:.01},pathLength:{type:`spring`,bounce:0,delay:t,duration:1.5}}}}}),[]);return(0,s.jsxs)(r,{as:`svg`,animate:`visible`,h:`200px`,initial:`hidden`,viewBox:`0 0 800 200`,w:`800px`,children:[(0,s.jsx)(r,{as:`circle`,custom:1,cx:`100`,cy:`100`,fill:`transparent`,r:`80`,stroke:`#ed3237`,strokeLinecap:`round`,strokeWidth:`10px`,variants:e}),(0,s.jsx)(r,{as:`line`,custom:2,fill:`transparent`,stroke:`#f5c535`,strokeLinecap:`round`,strokeWidth:`10px`,variants:e,x1:`220`,x2:`360`,y1:`30`,y2:`170`}),(0,s.jsx)(r,{as:`line`,custom:2.5,fill:`transparent`,stroke:`#f5c535`,strokeLinecap:`round`,strokeWidth:`10px`,variants:e,x1:`220`,x2:`360`,y1:`170`,y2:`30`}),(0,s.jsx)(r,{as:`rect`,custom:3,fill:`transparent`,h:`140px`,rx:`20`,stroke:`#0789c7`,strokeLinecap:`round`,strokeWidth:`10px`,variants:e,w:`140px`,x:`410`,y:`30`}),(0,s.jsx)(r,{as:`polygon`,custom:4,fill:`transparent`,points:`670 30, 600 170, 740 170`,stroke:`#42b7a5`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`10px`,variants:e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const variants: Variants = useMemo(() => ({
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }), []);
  return <Motion animate="visible" bg="mono" cursor="pointer" h="2xs" initial="hidden" rounded="l2" variants={variants} w="2xs" />;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m=[`Basic`,`Propagation`,`Orchestration`,`DynamicVariants`,`ValueSpecific`]}))();export{l as Basic,f as DynamicVariants,d as Orchestration,u as Propagation,p as ValueSpecific,m as __namedExportsOrder,c as default};