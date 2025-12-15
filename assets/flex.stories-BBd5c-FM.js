import{j as e,r as w}from"./iframe-C1QqsVA9.js";import{F as o,a as j}from"./flex-Bs-NHhmm.js";import{F as d}from"./for-Be_orN7T.js";import{B as i}from"./box-BbsNZILY.js";import"./preload-helper-C1FmrZbK.js";const y={component:o,title:"Components / Flex"},s=()=>e.jsx(o,{gap:"md",children:e.jsx(d,{each:["info","success","warning","danger"],children:(r,n)=>e.jsx(i,{bg:r,color:"white",p:"md",rounded:"l2",children:"Box"},n)})}),c=()=>e.jsx(o,{direction:"column",gap:"md",children:e.jsx(d,{each:["info","success","warning","danger"],children:(r,n)=>e.jsx(i,{bg:r,color:"white",p:"md",rounded:"l2",children:"Box"},n)})}),a=()=>{const r=w.useMemo(()=>({direction:"column"}),[]);return e.jsxs(j,{value:r,children:[e.jsx(o,{gap:"md",children:e.jsx(d,{each:["info","success","warning","danger"],children:(n,t)=>e.jsx(i,{bg:n,color:"white",p:"md",rounded:"l2",children:"Box"},t)})}),e.jsx(o,{gap:"md",children:e.jsx(d,{each:["info","success","warning","danger"],children:(n,t)=>e.jsx(i,{bg:n,color:"white",p:"md",rounded:"l2",children:"Box"},t)})})]})};var x,l,m;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Flex gap="md">
      <For each={["info", "success", "warning", "danger"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Flex>;
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,g;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Flex direction="column" gap="md">
      <For each={["info", "success", "warning", "danger"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Flex>;
}`,...(g=(u=c.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,F,B;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const value = useMemo<FlexProps>(() => ({
    direction: "column"
  }), []);
  return <FlexPropsContext value={value}>
      <Flex gap="md">
        <For each={["info", "success", "warning", "danger"]}>
          {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
              Box
            </Box>}
        </For>
      </Flex>

      <Flex gap="md">
        <For each={["info", "success", "warning", "danger"]}>
          {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
              Box
            </Box>}
        </For>
      </Flex>
    </FlexPropsContext>;
}`,...(B=(F=a.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};const P=["Horizontal","Vertical","Context"];export{a as Context,s as Horizontal,c as Vertical,P as __namedExportsOrder,y as default};
