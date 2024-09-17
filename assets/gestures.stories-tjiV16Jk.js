import{j as r}from"./extends-CwFRzn3r.js";import{r as H}from"./index-BwDkhjyp.js";import{M as o}from"./motion-Cb8krJe1.js";import{C as i}from"./center-BiJcy2pa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-scR1bmHx.js";import"./motion-I-9Hg3gW.js";import"./factory-CPqzzHTm.js";const E={title:"Components / Motion / Gestures",component:o},a=()=>r.jsx(i,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r.jsx(o,{whileHover:{scale:1.2},whileTap:{scale:.9},whileFocus:{scale:1.2},onHoverStart:(n,e)=>console.log("Hover starts",e),onHoverEnd:(n,e)=>console.log("Hover ends",e),onTapStart:(n,e)=>console.log("Tap starts",e),onTapCancel:(n,e)=>console.log("Tap cancels",e),w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"pointer"})}),s=()=>r.jsx(i,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r.jsx(o,{whileHover:{scale:1.2,transition:{duration:1}},whileTap:{scale:.9},w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"pointer"})}),t=()=>{const n=H.useMemo(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return r.jsx(i,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r.jsx(o,{whileHover:"enlarge",whileTap:"reduce",variants:n,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"pointer"})})},c=()=>{const n=H.useMemo(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return r.jsx(i,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:r.jsx(o,{whileHover:"enlarge",whileTap:"reduce",variants:n,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"pointer",display:"flex",placeContent:"center",placeItems:"center",children:r.jsx(o,{w:"4xs",h:"4xs",bg:"white",rounded:"2xl",onPointerDownCapture:e=>e.stopPropagation()})})})};var l,p,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion whileHover={{
      scale: 1.2
    }} whileTap={{
      scale: 0.9
    }} whileFocus={{
      scale: 1.2
    }} onHoverStart={(_, info) => console.log("Hover starts", info)} onHoverEnd={(_, info) => console.log("Hover ends", info)} onTapStart={(_, info) => console.log("Tap starts", info)} onTapCancel={(_, info) => console.log("Tap cancels", info)} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="pointer" />
    </Center>;
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,d,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var w,m,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const V=["basic","withTransition","withVariants","useStopPropagation"];export{V as __namedExportsOrder,a as basic,E as default,c as useStopPropagation,s as withTransition,t as withVariants};
