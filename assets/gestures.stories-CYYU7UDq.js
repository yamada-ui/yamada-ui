import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./motion-B3D3Rpm_.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{a=t(),r(),o=n(),s={component:i,title:`Components / Motion / Gestures`},c=()=>(0,o.jsx)(i,{bg:`mono`,cursor:`pointer`,h:`2xs`,rounded:`l3`,w:`2xs`,whileFocus:{scale:1.2},whileHover:{scale:1.2},whileTap:{scale:.9},onHoverEnd:(e,t)=>console.log(`Hover ends`,t),onHoverStart:(e,t)=>console.log(`Hover starts`,t),onTapCancel:(e,t)=>console.log(`Tap cancels`,t),onTapStart:(e,t)=>console.log(`Tap starts`,t)}),l=()=>(0,o.jsx)(i,{bg:`mono`,cursor:`pointer`,h:`2xs`,rounded:`l3`,w:`2xs`,whileHover:{scale:1.2,transition:{duration:1}},whileTap:{scale:.9}}),u=()=>{let e=(0,a.useMemo)(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return(0,o.jsx)(i,{bg:`mono`,cursor:`pointer`,h:`2xs`,rounded:`l3`,variants:e,w:`2xs`,whileHover:`enlarge`,whileTap:`reduce`})},d=()=>{let e=(0,a.useMemo)(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return(0,o.jsx)(i,{bg:`mono`,cursor:`pointer`,display:`flex`,h:`2xs`,placeContent:`center`,placeItems:`center`,rounded:`l3`,variants:e,w:`2xs`,whileHover:`enlarge`,whileTap:`reduce`,children:(0,o.jsx)(i,{bg:`mono.contrast`,h:`4xs`,rounded:`l3`,w:`4xs`,onPointerDownCapture:e=>e.stopPropagation()})})},f=[`Basic`,`Transition`,`Variant`,`StopPropagation`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" w="2xs" whileFocus={{
    scale: 1.2
  }} whileHover={{
    scale: 1.2
  }} whileTap={{
    scale: 0.9
  }} onHoverEnd={(_, info) => console.log("Hover ends", info)} onHoverStart={(_, info) => console.log("Hover starts", info)} onTapCancel={(_, info) => console.log("Tap cancels", info)} onTapStart={(_, info) => console.log("Tap starts", info)} />;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" w="2xs" whileHover={{
    scale: 1.2,
    transition: {
      duration: 1
    }
  }} whileTap={{
    scale: 0.9
  }} />;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const variants: Variants = useMemo(() => ({
    enlarge: {
      scale: 1.2
    },
    reduce: {
      scale: 0.9
    }
  }), []);
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" variants={variants} w="2xs" whileHover="enlarge" whileTap="reduce" />;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}}})))()}p();export{c as Basic,d as StopPropagation,l as Transition,u as Variant,f as __namedExportsOrder,s as default};