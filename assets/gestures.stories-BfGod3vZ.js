import{j as r,r as H}from"./iframe-LqombrNM.js";import{M as n}from"./motion-DBKpRsXT.js";import"./preload-helper-C1FmrZbK.js";const S={component:n,title:"Components / Motion / Gestures"},s=()=>r.jsx(n,{bg:"mono",cursor:"pointer",h:"2xs",rounded:"l3",w:"2xs",whileFocus:{scale:1.2},whileHover:{scale:1.2},whileTap:{scale:.9},onHoverEnd:(o,e)=>console.log("Hover ends",e),onHoverStart:(o,e)=>console.log("Hover starts",e),onTapCancel:(o,e)=>console.log("Tap cancels",e),onTapStart:(o,e)=>console.log("Tap starts",e)}),a=()=>r.jsx(n,{bg:"mono",cursor:"pointer",h:"2xs",rounded:"l3",w:"2xs",whileHover:{scale:1.2,transition:{duration:1}},whileTap:{scale:.9}}),t=()=>{const o=H.useMemo(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return r.jsx(n,{bg:"mono",cursor:"pointer",h:"2xs",rounded:"l3",variants:o,w:"2xs",whileHover:"enlarge",whileTap:"reduce"})},c=()=>{const o=H.useMemo(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return r.jsx(n,{bg:"mono",cursor:"pointer",display:"flex",h:"2xs",placeContent:"center",placeItems:"center",rounded:"l3",variants:o,w:"2xs",whileHover:"enlarge",whileTap:"reduce",children:r.jsx(n,{bg:"mono.contrast",h:"4xs",rounded:"l3",w:"4xs",onPointerDownCapture:e=>e.stopPropagation()})})};var l,i,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" w="2xs" whileFocus={{
    scale: 1.2
  }} whileHover={{
    scale: 1.2
  }} whileTap={{
    scale: 0.9
  }} onHoverEnd={(_, info) => console.log("Hover ends", info)} onHoverStart={(_, info) => console.log("Hover starts", info)} onTapCancel={(_, info) => console.log("Tap cancels", info)} onTapStart={(_, info) => console.log("Tap starts", info)} />;
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" w="2xs" whileHover={{
    scale: 1.2,
    transition: {
      duration: 1
    }
  }} whileTap={{
    scale: 0.9
  }} />;
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,x,w;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const variants: Variants = useMemo(() => ({
    enlarge: {
      scale: 1.2
    },
    reduce: {
      scale: 0.9
    }
  }), []);
  return <Motion bg="mono" cursor="pointer" h="2xs" rounded="l3" variants={variants} w="2xs" whileHover="enlarge" whileTap="reduce" />;
}`,...(w=(x=t.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var h,v,T;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const _=["Basic","Transition","Variant","StopPropagation"];export{s as Basic,c as StopPropagation,a as Transition,t as Variant,_ as __namedExportsOrder,S as default};
