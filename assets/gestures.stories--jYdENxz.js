import{j as r,r as l}from"./iframe-5QspZtQ-.js";import{M as n}from"./motion-CTVZ6Nyb.js";import"./preload-helper-PPVm8Dsz.js";const d={component:n,title:"Components / Motion / Gestures"},s=()=>r.jsx(n,{bg:"mono",cursor:"pointer",h:"2xs",rounded:"l3",w:"2xs",whileFocus:{scale:1.2},whileHover:{scale:1.2},whileTap:{scale:.9},onHoverEnd:(o,e)=>console.log("Hover ends",e),onHoverStart:(o,e)=>console.log("Hover starts",e),onTapCancel:(o,e)=>console.log("Tap cancels",e),onTapStart:(o,e)=>console.log("Tap starts",e)}),a=()=>r.jsx(n,{bg:"mono",cursor:"pointer",h:"2xs",rounded:"l3",w:"2xs",whileHover:{scale:1.2,transition:{duration:1}},whileTap:{scale:.9}}),t=()=>{const o=l.useMemo(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return r.jsx(n,{bg:"mono",cursor:"pointer",h:"2xs",rounded:"l3",variants:o,w:"2xs",whileHover:"enlarge",whileTap:"reduce"})},c=()=>{const o=l.useMemo(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return r.jsx(n,{bg:"mono",cursor:"pointer",display:"flex",h:"2xs",placeContent:"center",placeItems:"center",rounded:"l3",variants:o,w:"2xs",whileHover:"enlarge",whileTap:"reduce",children:r.jsx(n,{bg:"mono.contrast",h:"4xs",rounded:"l3",w:"4xs",onPointerDownCapture:e=>e.stopPropagation()})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" w="2xs" whileFocus={{
    scale: 1.2
  }} whileHover={{
    scale: 1.2
  }} whileTap={{
    scale: 0.9
  }} onHoverEnd={(_, info) => console.log("Hover ends", info)} onHoverStart={(_, info) => console.log("Hover starts", info)} onTapCancel={(_, info) => console.log("Tap cancels", info)} onTapStart={(_, info) => console.log("Tap starts", info)} />;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" w="2xs" whileHover={{
    scale: 1.2,
    transition: {
      duration: 1
    }
  }} whileTap={{
    scale: 0.9
  }} />;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const variants: Variants = useMemo(() => ({
    enlarge: {
      scale: 1.2
    },
    reduce: {
      scale: 0.9
    }
  }), []);
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" variants={variants} w="2xs" whileHover="enlarge" whileTap="reduce" />;
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const m=["Basic","Transition","Variant","StopPropagation"];export{s as Basic,c as StopPropagation,a as Transition,t as Variant,m as __namedExportsOrder,d as default};
