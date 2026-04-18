import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Ht as n,Lt as r,Ot as i,am as a,kt as o,mm as s,sm as c}from"./iframe-CHoZGzMw.js";import{n as l,t as u}from"./storybook-D7iTf7Rb.js";var d,f,p,m,h,g;e((()=>{u(),a(),r(),i(),d=c(),f={component:o,title:`Components / Status`},p=()=>(0,d.jsxs)(n,{children:[(0,d.jsx)(o,{value:`info`}),(0,d.jsx)(o,{value:`success`}),(0,d.jsx)(o,{value:`warning`}),(0,d.jsx)(o,{value:`error`})]}),m=()=>(0,d.jsxs)(n,{children:[(0,d.jsx)(o,{value:`info`,children:`Info`}),(0,d.jsx)(o,{value:`success`,children:`Success`}),(0,d.jsx)(o,{value:`warning`,children:`Warning`}),(0,d.jsx)(o,{value:`error`,children:`Error`})]}),h=()=>(0,d.jsx)(t,{children:(0,d.jsx)(l,{columns:[`info`,`success`,`warning`,`error`],rows:[`sm`,`md`,`lg`],children:(e,t,n)=>(0,d.jsx)(o,{size:t,value:e,children:s(e)},n)})}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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