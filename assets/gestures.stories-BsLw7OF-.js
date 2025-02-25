import{j as r}from"./jsx-runtime-BpbtHYHY.js";import{r as H}from"./index-BwPxMuoB.js";import{M as o}from"./motion-B3T2Zn_y.js";import{C as i}from"./center-B3pLLn64.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-Cy2nAbAn.js";import"./proxy-BdCiNrpl.js";import"./factory-DbNU74ts.js";const E={component:o,title:"Components / Motion / Gestures"},a=()=>r.jsx(i,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:r.jsx(o,{bg:"primary",cursor:"pointer",h:"2xs",rounded:"3xl",w:"2xs",whileFocus:{scale:1.2},whileHover:{scale:1.2},whileTap:{scale:.9},onHoverEnd:(n,e)=>console.log("Hover ends",e),onHoverStart:(n,e)=>console.log("Hover starts",e),onTapCancel:(n,e)=>console.log("Tap cancels",e),onTapStart:(n,e)=>console.log("Tap starts",e)})}),s=()=>r.jsx(i,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:r.jsx(o,{bg:"primary",cursor:"pointer",h:"2xs",rounded:"3xl",w:"2xs",whileHover:{scale:1.2,transition:{duration:1}},whileTap:{scale:.9}})}),t=()=>{const n=H.useMemo(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return r.jsx(i,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:r.jsx(o,{bg:"primary",cursor:"pointer",h:"2xs",rounded:"3xl",variants:n,w:"2xs",whileHover:"enlarge",whileTap:"reduce"})})},c=()=>{const n=H.useMemo(()=>({enlarge:{scale:1.2},reduce:{scale:.9}}),[]);return r.jsx(i,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:r.jsx(o,{bg:"primary",cursor:"pointer",display:"flex",h:"2xs",placeContent:"center",placeItems:"center",rounded:"3xl",variants:n,w:"2xs",whileHover:"enlarge",whileTap:"reduce",children:r.jsx(o,{bg:"white",h:"4xs",rounded:"2xl",w:"4xs",onPointerDownCapture:e=>e.stopPropagation()})})})};var l,p,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion bg="primary" cursor="pointer" h="2xs" rounded="3xl" w="2xs" whileFocus={{
      scale: 1.2
    }} whileHover={{
      scale: 1.2
    }} whileTap={{
      scale: 0.9
    }} onHoverEnd={(_, info) => console.log("Hover ends", info)} onHoverStart={(_, info) => console.log("Hover starts", info)} onTapCancel={(_, info) => console.log("Tap cancels", info)} onTapStart={(_, info) => console.log("Tap starts", info)} />
    </Center>;
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,d,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion bg="primary" cursor="pointer" h="2xs" rounded="3xl" w="2xs" whileHover={{
      scale: 1.2,
      transition: {
        duration: 1
      }
    }} whileTap={{
      scale: 0.9
    }} />
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
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion bg="primary" cursor="pointer" h="2xs" rounded="3xl" variants={variants} w="2xs" whileHover="enlarge" whileTap="reduce" />
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
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion bg="primary" cursor="pointer" display="flex" h="2xs" placeContent="center" placeItems="center" rounded="3xl" variants={variants} w="2xs" whileHover="enlarge" whileTap="reduce">
        <Motion bg="white" h="4xs" rounded="2xl" w="4xs" onPointerDownCapture={ev => ev.stopPropagation()} />
      </Motion>
    </Center>;
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const V=["basic","withTransition","withVariants","useStopPropagation"];export{V as __namedExportsOrder,a as basic,E as default,c as useStopPropagation,s as withTransition,t as withVariants};
