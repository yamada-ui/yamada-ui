import{p as K,q as N,r as d,aJ as Q,a4 as U,m as X,j as e,s as Y,v as ee,w as re,aT as te,V as J,W as w}from"./iframe-LqombrNM.js";import{H as O}from"./h-stack-Di-GU-bO.js";import{F as k}from"./for-CkWl_ugB.js";import{B as i}from"./box-SUOSHoaG.js";import{S as E}from"./separator--CAjmJLb.js";import"./preload-helper-C1FmrZbK.js";const ne=K({base:{gap:"lg",overflow:"hidden",position:"relative"}}),{withContext:oe}=N("stack--depth",ne),se=oe(({css:t,children:n,direction:r="end",fit:x=!0,reverse:o=!1,startIndex:H=0,...A})=>{r==="start-center"&&(r="start"),r==="end-center"&&(r="end");const W=d.useRef(new Map),[V,G]=d.useState({height:0,width:0}),F=d.useCallback(s=>r.startsWith("start")?{[o?"top":"bottom"]:s}:r.startsWith("end")?{[o?"bottom":"top"]:s}:{[o?"bottom":"top"]:0},[r,o]),y=d.useCallback(s=>r.endsWith("-start")?{[o?"left":"right"]:s}:r.endsWith("-end")?{[o?"right":"left"]:s}:{[o?"right":"left"]:0},[r,o]),z=d.useMemo(()=>Q(n).map((c,l)=>{const p=d.createRef();W.current.set(l,p);const h=c.key??l,m=H+l,a=`calc({space} * ${l})`,f={position:"absolute",zIndex:m,...F(a),...y(a)},u={...c.props,ref:X(c.props.ref,p),css:U(c.props.css,f)},j=d.cloneElement(c,u);return e.jsx(d.Fragment,{children:j},h)}),[n,H,F,y]);return d.useEffect(()=>{if(!x)return;let s=r.endsWith("-start"),g=r.startsWith("start"),c=0,l=0;o&&(s=!s,g=!g);for(const p of W.current.values()){if(!p.current)continue;let{offsetHeight:h,offsetLeft:m,offsetParent:a,offsetTop:f,offsetWidth:u}=p.current;a&&(s&&(m=((a==null?void 0:a.offsetWidth)??0)-m-u),g&&(f=((a==null?void 0:a.offsetHeight)??0)-f-h),u+=m,h+=f,u>c&&(c=u),h>l&&(l=h))}G({height:l,width:c})},[z,r,o,x]),e.jsx(Y.div,{css:t,minHeight:x?`${V.height}px`:void 0,minWidth:x?`${V.width}px`:void 0,...A,children:z})})(void 0,t=>{const n=ee(t.css,{gap:"space"});return{...re(t,{gap:"space"}),css:n}}),ue={component:te,title:"Components / Stack"},b=()=>e.jsx(J,{children:e.jsx(k,{each:["info","success","warning","error"],children:(t,n)=>e.jsx(i,{bg:t,color:"white",p:"md",rounded:"l2",children:"Box"},n)})}),B=()=>e.jsx(O,{children:e.jsx(k,{each:["info","success","warning","error"],children:(t,n)=>e.jsx(i,{bg:t,color:"white",p:"md",rounded:"l2",children:"Box"},n)})}),C=()=>e.jsx(k,{each:["end","start","center-end","center-start","end-start","end-end","start-start","start-end"],children:t=>e.jsx(se,{direction:t,children:["info","success","warning","error"].map((n,r)=>e.jsx(i,{bg:n,color:"white",p:"md",rounded:"l2",children:"Box"},r))},t)}),S=()=>e.jsxs(e.Fragment,{children:[e.jsxs(J,{separator:e.jsx(E,{}),children:[e.jsx(i,{bg:"info",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(i,{bg:"success",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(i,{bg:"warning",color:"white",p:"md",rounded:"l2",children:"Box"}),e.jsx(i,{bg:"error",color:"white",p:"md",rounded:"l2",children:"Box"})]}),e.jsxs(O,{h:"2xs",separator:e.jsx(E,{}),children:[e.jsx(w,{bg:"info",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"}),e.jsx(w,{bg:"success",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"}),e.jsx(w,{bg:"warning",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"}),e.jsx(w,{bg:"error",color:"white",h:"full",p:"md",rounded:"l2",children:"Center"})]})]});var R,v,I;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <VStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </VStack>;
}`,...(I=(v=b.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var M,T,Z;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <HStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </HStack>;
}`,...(Z=(T=B.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var $,D,L;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <For each={["end", "start", "center-end", "center-start", "end-start", "end-end", "start-start", "start-end"] as const}>
      {direction => <ZStack key={direction} direction={direction}>
          {["info", "success", "warning", "error"].map((bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
              Box
            </Box>)}
        </ZStack>}
    </For>;
}`,...(L=(D=C.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var P,_,q;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(q=(_=S.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const pe=["Vertical","Horizontal","Depth","Border"];export{S as Border,C as Depth,B as Horizontal,b as Vertical,pe as __namedExportsOrder,ue as default};
