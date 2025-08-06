import{j as e,r as x}from"./iframe-BVYXOt_x.js";import{F as o,a as l}from"./flex-DrgWVwNM.js";import{F as d}from"./for-Cq1AI6gw.js";import{B as i}from"./box-Bkdbk87i.js";import"./preload-helper-D9Z9MdNV.js";const F={component:o,title:"Components / Flex"},s=()=>e.jsx(o,{gap:"md",children:e.jsx(d,{each:["info","success","warning","danger"],children:(r,n)=>e.jsx(i,{bg:r,color:"white",p:"md",rounded:"l2",children:"Box"},n)})}),c=()=>e.jsx(o,{direction:"column",gap:"md",children:e.jsx(d,{each:["info","success","warning","danger"],children:(r,n)=>e.jsx(i,{bg:r,color:"white",p:"md",rounded:"l2",children:"Box"},n)})}),a=()=>{const r=x.useMemo(()=>({direction:"column"}),[]);return e.jsxs(l,{value:r,children:[e.jsx(o,{gap:"md",children:e.jsx(d,{each:["info","success","warning","danger"],children:(n,t)=>e.jsx(i,{bg:n,color:"white",p:"md",rounded:"l2",children:"Box"},t)})}),e.jsx(o,{gap:"md",children:e.jsx(d,{each:["info","success","warning","danger"],children:(n,t)=>e.jsx(i,{bg:n,color:"white",p:"md",rounded:"l2",children:"Box"},t)})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Flex gap="md">
      <For each={["info", "success", "warning", "danger"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Flex>;
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Flex direction="column" gap="md">
      <For each={["info", "success", "warning", "danger"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Flex>;
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};const B=["Horizontal","Vertical","Context"];export{a as Context,s as Horizontal,c as Vertical,B as __namedExportsOrder,F as default};
