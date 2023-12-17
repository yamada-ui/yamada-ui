import{j as r}from"./jsx-runtime-TtYKBvr-.js";import{r as H}from"./index-IybTgENJ.js";import{M as o}from"./motion-ONtTX0Ck.js";import{C as i}from"./center-YUZbzzyF.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./motion-AgWUVtfu.js";import"./forward-ref-6T0UNPU-.js";import"./factory-yYnGGCem.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";const j={title:"Components / Motion / Gestures",component:o},a=()=>r(i,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(o,{whileHover:{scale:1.2},whileTap:{scale:.9},whileFocus:{scale:1.2},onHoverStart:(n,e)=>console.log("Hover starts",e),onHoverEnd:(n,e)=>console.log("Hover ends",e),onTapStart:(n,e)=>console.log("Tap starts",e),onTapCancel:(n,e)=>console.log("Tap cancels",e),w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"pointer"})}),s=()=>r(i,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(o,{whileHover:{scale:1.2,transition:{duration:1}},whileTap:{scale:.9},w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"pointer"})}),t=()=>{const n=H.useMemo(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return r(i,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(o,{whileHover:"enlarge",whileTap:"reduce",variants:n,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"pointer"})})},c=()=>{const n=H.useMemo(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return r(i,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r(o,{whileHover:"enlarge",whileTap:"reduce",variants:n,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"pointer",display:"flex",placeContent:"center",placeItems:"center",children:r(o,{w:"4xs",h:"4xs",bg:"white",rounded:"2xl",onPointerDownCapture:e=>e.stopPropagation()})})})};var l,p,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion whileHover={{
      scale: 1.2
    }} whileTap={{
      scale: 0.9
    }} whileFocus={{
      scale: 1.2
    }} onHoverStart={(_, info) => console.log("Hover starts", info)} onHoverEnd={(_, info) => console.log("Hover ends", info)} onTapStart={(_, info) => console.log("Tap starts", info)} onTapCancel={(_, info) => console.log("Tap cancels", info)} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="pointer" />
    </Center>;
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,h,w;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion whileHover={{
      scale: 1.2,
      transition: {
        duration: 1
      }
    }} whileTap={{
      scale: 0.9
    }} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="pointer" />
    </Center>;
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var x,m,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const variants: MotionVariants = useMemo(() => ({
    enlarge: {
      scale: 1.2
    },
    reduce: {
      scale: 0.9
    }
  }), []);
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion whileHover="enlarge" whileTap="reduce" variants={variants} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="pointer" />
    </Center>;
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,T,C;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const variants: MotionVariants = useMemo(() => ({
    enlarge: {
      scale: 1.2
    },
    reduce: {
      scale: 0.9
    }
  }), []);
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion whileHover="enlarge" whileTap="reduce" variants={variants} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="pointer" display="flex" placeContent="center" placeItems="center">
        <Motion w="4xs" h="4xs" bg="white" rounded="2xl" onPointerDownCapture={ev => ev.stopPropagation()} />
      </Motion>
    </Center>;
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const D=["basic","withTransition","withVariants","useStopPropagation"];export{D as __namedExportsOrder,a as basic,j as default,c as useStopPropagation,s as withTransition,t as withVariants};
