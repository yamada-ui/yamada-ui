import{d as m,f as d,j as e,s as S,V as p,G as x}from"./iframe-CzCJWi2Q.js";import{H as i}from"./h-stack-kAIWxfdY.js";import{P as f}from"./props-table-DBQkC1jw.js";import"./grid-BgXiws5k.js";import"./grid-item-BRSvi5nv.js";import"./for-B9vVJZhr.js";import"./flex-CTfg42JT.js";import"./heading-Db76muhr.js";const v=m({base:{indicator:{bg:"colorScheme.solid",flexShrink:0,forcedColorAdjust:"none",rounded:"full"},label:{},root:{alignItems:"center",display:"inline-flex",gap:"sm"}},sizes:{sm:{indicator:{boxSize:"2"},label:{fontSize:"sm"}},md:{indicator:{boxSize:"2.5"},label:{fontSize:"md"}},lg:{indicator:{boxSize:"3"},label:{fontSize:"lg"}}},defaultProps:{size:"md"}}),{withContext:l,withProvider:j}=d("status",v),s=j(({children:r,indicatorProps:n,labelProps:c,...u})=>e.jsxs(S.div,{...u,children:[e.jsx(g,{...n}),e.jsx(b,{...c,children:r})]}),"root")({colorScheme:"info",value:"info"}),g=l("div","indicator")(),b=l("p","label")(),T={component:s,title:"Components / Status"},t=()=>e.jsxs(i,{children:[e.jsx(s,{value:"info"}),e.jsx(s,{value:"success"}),e.jsx(s,{value:"warning"}),e.jsx(s,{value:"error"})]}),a=()=>e.jsxs(i,{children:[e.jsx(s,{value:"info",children:"Info"}),e.jsx(s,{value:"success",children:"Success"}),e.jsx(s,{value:"warning",children:"Warning"}),e.jsx(s,{value:"error",children:"Error"})]}),o=()=>e.jsx(p,{children:e.jsx(f,{columns:["info","success","warning","error"],rows:["sm","md","lg"],children:(r,n,c)=>e.jsx(s,{size:n,value:r,children:x(r)},c)})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info" />
      <Status value="success" />
      <Status value="warning" />
      <Status value="error" />
    </HStack>;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info">Info</Status>
      <Status value="success">Success</Status>
      <Status value="warning">Warning</Status>
      <Status value="error">Error</Status>
    </HStack>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <PropsTable columns={["info", "success", "warning", "error"]} rows={["sm", "md", "lg"]}>
        {(column, row, key) => <Status key={key} size={row} value={column}>
            {toTitleCase(column)}
          </Status>}
      </PropsTable>
    </VStack>;
}`,...o.parameters?.docs?.source}}};const E=["Basic","Label","Size"];export{t as Basic,a as Label,o as Size,E as __namedExportsOrder,T as default};
