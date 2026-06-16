import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dn as t,Dv as n,Lv as r,Sn as i,Tn as a,dn as o,fn as s,wv as c}from"./iframe-BuTDpTUb.js";import{n as l,t as u}from"./storybook-A05TUAu9.js";var d,f,p,m,h,g;e((()=>{u(),c(),i(),o(),d=n(),f={component:s,title:`Components / Status`},p=()=>(0,d.jsxs)(t,{children:[(0,d.jsx)(s,{value:`info`}),(0,d.jsx)(s,{value:`success`}),(0,d.jsx)(s,{value:`warning`}),(0,d.jsx)(s,{value:`error`})]}),m=()=>(0,d.jsxs)(t,{children:[(0,d.jsx)(s,{value:`info`,children:`Info`}),(0,d.jsx)(s,{value:`success`,children:`Success`}),(0,d.jsx)(s,{value:`warning`,children:`Warning`}),(0,d.jsx)(s,{value:`error`,children:`Error`})]}),h=()=>(0,d.jsx)(a,{children:(0,d.jsx)(l,{columns:[`info`,`success`,`warning`,`error`],rows:[`sm`,`md`,`lg`],children:(e,t,n)=>(0,d.jsx)(s,{size:t,value:e,children:r(e)},n)})}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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