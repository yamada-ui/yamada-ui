import{d as m,g as d,j as e,s as S,V as p,J as x}from"./iframe-6Bjnmk15.js";import{P as f}from"./props-table-ols_EFU2.js";import{H as i}from"./h-stack-DkB3151u.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-BOPRDfru.js";import"./grid-item-b6_EoPjA.js";import"./for-DmT075i_.js";import"./flex-DoVac8e8.js";import"./heading-OelD6mpu.js";const v=m({base:{indicator:{bg:"colorScheme.solid",flexShrink:0,forcedColorAdjust:"none",rounded:"full"},label:{},root:{alignItems:"center",display:"inline-flex",gap:"sm"}},sizes:{sm:{indicator:{boxSize:"2"},label:{fontSize:"sm"}},md:{indicator:{boxSize:"2.5"},label:{fontSize:"md"}},lg:{indicator:{boxSize:"3"},label:{fontSize:"lg"}}},defaultProps:{size:"md"}}),{withContext:l,withProvider:g}=d("status",v),s=g(({children:r,indicatorProps:t,labelProps:a,...u})=>e.jsxs(S.div,{...u,children:[e.jsx(j,{...t}),e.jsx(b,{...a,children:r})]}),"root")(void 0,({colorScheme:r,value:t="info",...a})=>({colorScheme:r??t,...a})),j=l("div","indicator")(),b=l("p","label")(),E={component:s,title:"Components / Status"},o=()=>e.jsxs(i,{children:[e.jsx(s,{value:"info"}),e.jsx(s,{value:"success"}),e.jsx(s,{value:"warning"}),e.jsx(s,{value:"error"})]}),n=()=>e.jsxs(i,{children:[e.jsx(s,{value:"info",children:"Info"}),e.jsx(s,{value:"success",children:"Success"}),e.jsx(s,{value:"warning",children:"Warning"}),e.jsx(s,{value:"error",children:"Error"})]}),c=()=>e.jsx(p,{children:e.jsx(f,{columns:["info","success","warning","error"],rows:["sm","md","lg"],children:(r,t,a)=>e.jsx(s,{size:t,value:r,children:x(r)},a)})});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info" />
      <Status value="success" />
      <Status value="warning" />
      <Status value="error" />
    </HStack>;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info">Info</Status>
      <Status value="success">Success</Status>
      <Status value="warning">Warning</Status>
      <Status value="error">Error</Status>
    </HStack>;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <PropsTable columns={["info", "success", "warning", "error"]} rows={["sm", "md", "lg"]}>
        {(column, row, key) => <Status key={key} size={row} value={column}>
            {toTitleCase(column)}
          </Status>}
      </PropsTable>
    </VStack>;
}`,...c.parameters?.docs?.source}}};const I=["Basic","Label","Size"];export{o as Basic,n as Label,c as Size,I as __namedExportsOrder,E as default};
