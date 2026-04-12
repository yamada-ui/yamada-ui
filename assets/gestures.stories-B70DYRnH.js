import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Wm as n,_d as r,im as i,vd as a}from"./iframe-BdSFgLyo.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),a(),s=i(),c={component:r,title:`Components / Motion / Gestures`},l=()=>(0,s.jsx)(r,{bg:`mono`,cursor:`pointer`,h:`2xs`,rounded:`l3`,w:`2xs`,whileFocus:{scale:1.2},whileHover:{scale:1.2},whileTap:{scale:.9},onHoverEnd:(e,t)=>console.log(`Hover ends`,t),onHoverStart:(e,t)=>console.log(`Hover starts`,t),onTapCancel:(e,t)=>console.log(`Tap cancels`,t),onTapStart:(e,t)=>console.log(`Tap starts`,t)}),u=()=>(0,s.jsx)(r,{bg:`mono`,cursor:`pointer`,h:`2xs`,rounded:`l3`,w:`2xs`,whileHover:{scale:1.2,transition:{duration:1}},whileTap:{scale:.9}}),d=()=>(0,s.jsx)(r,{bg:`mono`,cursor:`pointer`,h:`2xs`,rounded:`l3`,variants:(0,o.useMemo)(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]),w:`2xs`,whileHover:`enlarge`,whileTap:`reduce`}),f=()=>(0,s.jsx)(r,{bg:`mono`,cursor:`pointer`,display:`flex`,h:`2xs`,placeContent:`center`,placeItems:`center`,rounded:`l3`,variants:(0,o.useMemo)(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]),w:`2xs`,whileHover:`enlarge`,whileTap:`reduce`,children:(0,s.jsx)(r,{bg:`mono.contrast`,h:`4xs`,rounded:`l3`,w:`4xs`,onPointerDownCapture:e=>e.stopPropagation()})}),l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" w="2xs" whileFocus={{
    scale: 1.2
  }} whileHover={{
    scale: 1.2
  }} whileTap={{
    scale: 0.9
  }} onHoverEnd={(_, info) => console.log("Hover ends", info)} onHoverStart={(_, info) => console.log("Hover starts", info)} onTapCancel={(_, info) => console.log("Tap cancels", info)} onTapStart={(_, info) => console.log("Tap starts", info)} />;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" w="2xs" whileHover={{
    scale: 1.2,
    transition: {
      duration: 1
    }
  }} whileTap={{
    scale: 0.9
  }} />;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const variants: Variants = useMemo(() => ({
    enlarge: {
      scale: 1.2
    },
    reduce: {
      scale: 0.9
    }
  }), []);
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" variants={variants} w="2xs" whileHover="enlarge" whileTap="reduce" />;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const variants: Variants = useMemo(() => ({
    enlarge: {
      scale: 1.2
    },
    reduce: {
      scale: 0.9
    }
  }), []);
  return <Motion bg="mono" cursor="pointer" display="flex" h="2xs" placeContent="center" placeItems="center" rounded="l3" variants={variants} w="2xs" whileHover="enlarge" whileTap="reduce">
      <Motion bg="mono.contrast" h="4xs" rounded="l3" w="4xs" onPointerDownCapture={ev => ev.stopPropagation()} />
    </Motion>;
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`Transition`,`Variant`,`StopPropagation`]}))();export{l as Basic,f as StopPropagation,u as Transition,d as Variant,p as __namedExportsOrder,c as default};