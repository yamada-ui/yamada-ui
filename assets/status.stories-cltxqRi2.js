import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Gt as n,Mt as r,Ut as i,dp as a,jt as o,pp as s,yp as c}from"./iframe-DZGIdQv0.js";import{n as l,t as u}from"./storybook-Do_1vhrs.js";var d,f,p,m,h,g;e((()=>{u(),a(),t(),o(),d=s(),f={component:r,title:`Components / Status`},p=()=>(0,d.jsxs)(n,{children:[(0,d.jsx)(r,{value:`info`}),(0,d.jsx)(r,{value:`success`}),(0,d.jsx)(r,{value:`warning`}),(0,d.jsx)(r,{value:`error`})]}),m=()=>(0,d.jsxs)(n,{children:[(0,d.jsx)(r,{value:`info`,children:`Info`}),(0,d.jsx)(r,{value:`success`,children:`Success`}),(0,d.jsx)(r,{value:`warning`,children:`Warning`}),(0,d.jsx)(r,{value:`error`,children:`Error`})]}),h=()=>(0,d.jsx)(i,{children:(0,d.jsx)(l,{columns:[`info`,`success`,`warning`,`error`],rows:[`sm`,`md`,`lg`],children:(e,t,n)=>(0,d.jsx)(r,{size:t,value:e,children:c(e)},n)})}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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