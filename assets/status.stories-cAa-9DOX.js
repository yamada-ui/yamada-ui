import{d as m,f as d,j as e,s as S,V as p,H as x}from"./iframe-DiGnZRjA.js";import{P as f}from"./props-table-CJ2FC3qk.js";import{H as i}from"./h-stack-7bFSrl3N.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-hqdpEkci.js";import"./grid-item-Cd2v2oyq.js";import"./for-Cftywx3K.js";import"./flex-CwyW4tB2.js";import"./heading-Dm27pN13.js";const v=m({base:{indicator:{bg:"colorScheme.solid",flexShrink:0,forcedColorAdjust:"none",rounded:"full"},label:{},root:{alignItems:"center",display:"inline-flex",gap:"sm"}},sizes:{sm:{indicator:{boxSize:"2"},label:{fontSize:"sm"}},md:{indicator:{boxSize:"2.5"},label:{fontSize:"md"}},lg:{indicator:{boxSize:"3"},label:{fontSize:"lg"}}},defaultProps:{size:"md"}}),{withContext:l,withProvider:j}=d("status",v),s=j(({children:r,indicatorProps:n,labelProps:c,...u})=>e.jsxs(S.div,{...u,children:[e.jsx(g,{...n}),e.jsx(b,{...c,children:r})]}),"root")({colorScheme:"info",value:"info"}),g=l("div","indicator")(),b=l("p","label")(),E={component:s,title:"Components / Status"},t=()=>e.jsxs(i,{children:[e.jsx(s,{value:"info"}),e.jsx(s,{value:"success"}),e.jsx(s,{value:"warning"}),e.jsx(s,{value:"error"})]}),a=()=>e.jsxs(i,{children:[e.jsx(s,{value:"info",children:"Info"}),e.jsx(s,{value:"success",children:"Success"}),e.jsx(s,{value:"warning",children:"Warning"}),e.jsx(s,{value:"error",children:"Error"})]}),o=()=>e.jsx(p,{children:e.jsx(f,{columns:["info","success","warning","error"],rows:["sm","md","lg"],children:(r,n,c)=>e.jsx(s,{size:n,value:r,children:x(r)},c)})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const I=["Basic","Label","Size"];export{t as Basic,a as Label,o as Size,I as __namedExportsOrder,E as default};
