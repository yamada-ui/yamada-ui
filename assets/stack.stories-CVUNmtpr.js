import{g as L,r as c,bL as M,br as T,v as Z,j as e,F as $,bS as D,bT as _,b8 as O,bs as q,V as E,h as b}from"./iframe-D2MBOeiZ.js";import{H as R}from"./h-stack-kBvyQV0Z.js";import{B as l}from"./box-C_1IkXcX.js";import{S as z}from"./separator-Dt0-uFsX.js";import{F as k}from"./for-BMu6NIsT.js";import"./preload-helper-PPVm8Dsz.js";const A=L({base:{gap:"lg",overflow:"hidden",position:"relative"}}),{withContext:G}=O("stack--depth",A),J=G(({css:t,children:n,direction:r="end",fit:x=!0,reverse:o=!1,startIndex:H=0,...v})=>{r==="start-center"&&(r="start"),r==="end-center"&&(r="end");const F=c.useRef(new Map),[V,I]=c.useState({height:0,width:0}),W=c.useCallback(s=>r.startsWith("start")?{[o?"top":"bottom"]:s}:r.startsWith("end")?{[o?"bottom":"top"]:s}:{[o?"bottom":"top"]:0},[r,o]),y=c.useCallback(s=>r.endsWith("-start")?{[o?"left":"right"]:s}:r.endsWith("-end")?{[o?"right":"left"]:s}:{[o?"right":"left"]:0},[r,o]),P=c.useMemo(()=>M(n).map((a,d)=>{const p=c.createRef();F.current.set(d,p);const i=a.key??d,f=H+d,h=`calc({space} * ${d})`,m={position:"absolute",zIndex:f,...W(h),...y(h)},u={...a.props,ref:Z(a.props.ref,p),css:T(a.props.css,m)},j=c.cloneElement(a,u);return e.jsx(c.Fragment,{children:j},i)}),[n,H,W,y]);return c.useEffect(()=>{if(!x)return;let s=r.endsWith("-start"),g=r.startsWith("start"),a=0,d=0;o&&(s=!s,g=!g);for(const p of F.current.values()){if(!p.current)continue;let{offsetHeight:i,offsetLeft:f,offsetParent:h,offsetTop:m,offsetWidth:u}=p.current;h&&(s&&(f=(h?.offsetWidth??0)-f-u),g&&(m=(h?.offsetHeight??0)-m-i),u+=f,i+=m,u>a&&(a=u),i>d&&(d=i))}I({height:d,width:a})},[P,r,o,x]),e.jsx($.div,{css:t,minHeight:x?`${V.height}px`:void 0,minWidth:x?`${V.width}px`:void 0,...v,children:P})})(void 0,t=>{const n=D(t.css,{gap:"space"});return{..._(t,{gap:"space"}),css:n}}),ee={component:q,title:"Components / Stack"},w=()=>e.jsx(E,{children:e.jsx(k,{each:["info","success","warning","error"],children:(t,n)=>e.jsx(l,{bg:t,color:"white",p:"md",rounded:"l2",children:"Box"},n)})}),B=()=>e.jsx(R,{children:e.jsx(k,{each:["info","success","warning","error"],children:(t,n)=>e.jsx(l,{bg:t,color:"white",p:"md",rounded:"l2",children:"Box"},n)})}),C=()=>e.jsx(k,{each:["end","start","center-end","center-start","end-start","end-end","start-start","start-end"],children:t=>e.jsx(J,{direction:t,children:["info","success","warning","error"].map((n,r)=>e.jsx(l,{bg:n,color:"white",p:"md",rounded:"l2",children:"Box"},r))},t)}),S=()=>e.jsxs(e.Fragment,{children:[e.jsxs(E,{separator:e.jsx(z,{}),children:[e.jsx(l,{bg:"info",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(l,{bg:"success",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(l,{bg:"warning",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(l,{bg:"error",color:"white",p:"md",rounded:"l2",children:"Box"})]}),e.jsxs(R,{h:"2xs",separator:e.jsx(z,{}),children:[e.jsx(b,{bg:"info",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"}),e.jsx(b,{bg:"success",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"}),e.jsx(b,{bg:"warning",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"}),e.jsx(b,{bg:"error",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"})]})]});w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </VStack>;
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </HStack>;
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <For each={["end", "start", "center-end", "center-start", "end-start", "end-end", "start-start", "start-end"] as const}>
      {direction => <ZStack key={direction} direction={direction}>
          {["info", "success", "warning", "error"].map((bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
              Box
            </Box>)}
        </ZStack>}
    </For>;
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};const re=["Vertical","Horizontal","Depth","Border"];export{S as Border,C as Depth,B as Horizontal,w as Vertical,re as __namedExportsOrder,ee as default};
