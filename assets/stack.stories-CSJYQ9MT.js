import{t as M,u as Z,r as a,k as $,O as D,m as L,j as e,s as O,w as T,x as _,ar as q,V as z,E as w}from"./iframe-6cyGxZR1.js";import{H as R}from"./h-stack-B0wwgIid.js";import{F as k}from"./for-DFrhp0eJ.js";import{B as s}from"./box-BQQGFgNV.js";import{S as P}from"./separator-DjINDWSD.js";const A=M({base:{gap:"lg",overflow:"hidden",position:"relative"}}),{withContext:G}=Z("stack--depth",A),J=G(({css:r,children:d,direction:n="bottom",fit:m=!0,reverse:t=!1,startIndex:H=0,...I})=>{const V=a.useRef(new Map),[W,v]=a.useState({height:0,width:0}),F=a.useCallback(o=>n.startsWith("start")?{[t?"top":"bottom"]:o}:n.startsWith("end")?{[t?"bottom":"top"]:o}:{[t?"bottom":"top"]:0},[n,t]),y=a.useCallback(o=>n.endsWith("-start")?{[t?"left":"right"]:o}:n.endsWith("-end")?{[t?"right":"left"]:o}:{[t?"right":"left"]:0},[n,t]),E=a.useMemo(()=>$(d).map((c,l)=>{const p=a.createRef();V.current.set(l,p);const i=c.key??l,x=H+l,h=`calc({space} * ${l})`,f={position:"absolute",zIndex:x,...F(h),...y(h)},u={...c.props,ref:L(c.props.ref,p),css:D(c.props.css,f)},S=a.cloneElement(c,u);return e.jsx(a.Fragment,{children:S},i)}),[d,H,F,y]);return a.useEffect(()=>{if(!m)return;let o=n.endsWith("-start"),g=n.startsWith("start"),c=0,l=0;t&&(o=!o,g=!g);for(const p of V.current.values()){if(!p.current)continue;let{offsetHeight:i,offsetLeft:x,offsetParent:h,offsetTop:f,offsetWidth:u}=p.current;h&&(o&&(x=(h?.offsetWidth??0)-x-u),g&&(f=(h?.offsetHeight??0)-f-i),u+=x,i+=f,u>c&&(c=u),i>l&&(l=i))}v({height:l,width:c})},[E,n,t,m]),e.jsx(O.div,{css:r,minHeight:m?`${W.height}px`:void 0,minWidth:m?`${W.width}px`:void 0,...I,children:E})})(void 0,r=>{const d=T(r.css,{gap:"space"});return{..._(r,{gap:"space"}),css:d}}),Y={component:q,title:"Components / Stack"},B=()=>e.jsx(z,{children:e.jsx(k,{each:["info","success","warning","error"],children:(r,d)=>e.jsx(s,{bg:r,color:"white",p:"md",rounded:"l2",children:"Box"},d)})}),b=()=>e.jsx(R,{children:e.jsx(k,{each:["info","success","warning","error"],children:(r,d)=>e.jsx(s,{bg:r,color:"white",p:"md",rounded:"l2",children:"Box"},d)})}),C=()=>e.jsx(k,{each:["end","start","center-end","center-start","end-start","end-end","start-start","start-end"],children:r=>e.jsxs(J,{direction:r,children:[e.jsx(s,{bg:"info",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(s,{bg:"success",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(s,{bg:"warning",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(s,{bg:"error",color:"white",p:"md",rounded:"l2",children:"Box"})]},r)}),j=()=>e.jsxs(e.Fragment,{children:[e.jsxs(z,{separator:e.jsx(P,{}),children:[e.jsx(s,{bg:"info",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(s,{bg:"success",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(s,{bg:"warning",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(s,{bg:"error",color:"white",p:"md",rounded:"l2",children:"Box"})]}),e.jsxs(R,{h:"2xs",separator:e.jsx(P,{}),children:[e.jsx(w,{bg:"info",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"}),e.jsx(w,{bg:"success",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"}),e.jsx(w,{bg:"warning",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"}),e.jsx(w,{bg:"error",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"})]})]});B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </VStack>;
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </HStack>;
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <For each={["end", "start", "center-end", "center-start", "end-start", "end-end", "start-start", "start-end"] as const}>
      {direction => <ZStack key={direction} direction={direction}>
          <Box bg="info" color="white" p="md" rounded="l2">
            Box
          </Box>

          <Box bg="success" color="white" p="md" rounded="l2">
            Box
          </Box>

          <Box bg="warning" color="white" p="md" rounded="l2">
            Box
          </Box>

          <Box bg="error" color="white" p="md" rounded="l2">
            Box
          </Box>
        </ZStack>}
    </For>;
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <>
      <VStack separator={<Separator />}>
        <Box bg="info" color="white" p="md" rounded="l2">
          Box
        </Box>

        <Box bg="success" color="white" p="md" rounded="l2">
          Box
        </Box>

        <Box bg="warning" color="white" p="md" rounded="l2">
          Box
        </Box>

        <Box bg="error" color="white" p="md" rounded="l2">
          Box
        </Box>
      </VStack>

      <HStack h="2xs" separator={<Separator />}>
        <Center bg="info" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>

        <Center bg="success" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>

        <Center bg="warning" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>

        <Center bg="error" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>
      </HStack>
    </>;
}`,...j.parameters?.docs?.source}}};const ee=["Vertical","Horizontal","Depth","Border"];export{j as Border,C as Depth,b as Horizontal,B as Vertical,ee as __namedExportsOrder,Y as default};
