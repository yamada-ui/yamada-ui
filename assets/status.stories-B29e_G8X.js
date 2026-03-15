import{d as m,j as e,s as d,l as S,V as p,P as x}from"./iframe-BYxWTAfU.js";import{P as f}from"./props-table-Bo4bQ_jN.js";import{H as i}from"./h-stack-DvRoWcFB.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-bp-0Bl5B.js";import"./grid-item-DnsObMPH.js";import"./for-CEjldjdR.js";import"./flex-njHzf6oI.js";import"./heading-BIviWjk_.js";const v=m({base:{indicator:{bg:"colorScheme.solid",flexShrink:0,forcedColorAdjust:"none",rounded:"full"},label:{},root:{alignItems:"center",display:"inline-flex",gap:"sm"}},sizes:{sm:{indicator:{boxSize:"2"},label:{fontSize:"sm"}},md:{indicator:{boxSize:"2.5"},label:{fontSize:"md"}},lg:{indicator:{boxSize:"3"},label:{fontSize:"lg"}}},defaultProps:{size:"md"}}),{withContext:l,withProvider:j}=S("status",v),s=j(({children:r,indicatorProps:t,labelProps:a,...u})=>e.jsxs(d.div,{...u,children:[e.jsx(g,{...t}),e.jsx(b,{...a,children:r})]}),"root")(void 0,({colorScheme:r,value:t="info",...a})=>({colorScheme:r??t,...a})),g=l("div","indicator")(),b=l("p","label")(),E={component:s,title:"Components / Status"},o=()=>e.jsxs(i,{children:[e.jsx(s,{value:"info"}),e.jsx(s,{value:"success"}),e.jsx(s,{value:"warning"}),e.jsx(s,{value:"error"})]}),n=()=>e.jsxs(i,{children:[e.jsx(s,{value:"info",children:"Info"}),e.jsx(s,{value:"success",children:"Success"}),e.jsx(s,{value:"warning",children:"Warning"}),e.jsx(s,{value:"error",children:"Error"})]}),c=()=>e.jsx(p,{children:e.jsx(f,{columns:["info","success","warning","error"],rows:["sm","md","lg"],children:(r,t,a)=>e.jsx(s,{size:t,value:r,children:x(r)},a)})});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
