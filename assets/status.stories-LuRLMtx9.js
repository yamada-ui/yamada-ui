import{n as e}from"./chunk-jRWAZmH_.js";import{Z as t,yn as n}from"./core-C7NnSGLR.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{a as i,r as a}from"./z-stack-D_lbkXhr.js";import{Dt as o,vt as s,yt as c}from"./iframe-CBZ1Bv9A.js";import{n as l,t as u}from"./storybook-BlZjOjHf.js";var d,f,p,m,h,g;e((()=>{u(),t(),o(),s(),d=r(),f={component:c,title:`Components / Status`},p=()=>(0,d.jsxs)(i,{children:[(0,d.jsx)(c,{value:`info`}),(0,d.jsx)(c,{value:`success`}),(0,d.jsx)(c,{value:`warning`}),(0,d.jsx)(c,{value:`error`})]}),m=()=>(0,d.jsxs)(i,{children:[(0,d.jsx)(c,{value:`info`,children:`Info`}),(0,d.jsx)(c,{value:`success`,children:`Success`}),(0,d.jsx)(c,{value:`warning`,children:`Warning`}),(0,d.jsx)(c,{value:`error`,children:`Error`})]}),h=()=>(0,d.jsx)(a,{children:(0,d.jsx)(l,{columns:[`info`,`success`,`warning`,`error`],rows:[`sm`,`md`,`lg`],children:(e,t,r)=>(0,d.jsx)(c,{size:t,value:e,children:n(e)},r)})}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info" />
      <Status value="success" />
      <Status value="warning" />
      <Status value="error" />
    </HStack>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info">Info</Status>
      <Status value="success">Success</Status>
      <Status value="warning">Warning</Status>
      <Status value="error">Error</Status>
    </HStack>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <PropsTable columns={["info", "success", "warning", "error"]} rows={["sm", "md", "lg"]}>
        {(column, row, key) => <Status key={key} size={row} value={column}>
            {toTitleCase(column)}
          </Status>}
      </PropsTable>
    </VStack>;
}`,...h.parameters?.docs?.source}}},g=[`Basic`,`Label`,`Size`]}))();export{p as Basic,m as Label,h as Size,g as __namedExportsOrder,f as default};