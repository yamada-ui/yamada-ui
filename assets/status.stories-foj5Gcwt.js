import{d as b,g as h,j as e,s as k,V as w,P as z}from"./iframe-3lFlqlPN.js";import{P as y}from"./props-table-CuU8BGsb.js";import{H as v}from"./h-stack-2m0l512O.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CdpynwT9.js";import"./grid-item-L-ZB7s7_.js";import"./for-kQoYqs5h.js";import"./flex-Bmyv4kyF.js";import"./heading-DSztmhpV.js";const C=b({base:{indicator:{bg:"colorScheme.solid",flexShrink:0,forcedColorAdjust:"none",rounded:"full"},label:{},root:{alignItems:"center",display:"inline-flex",gap:"sm"}},sizes:{sm:{indicator:{boxSize:"2"},label:{fontSize:"sm"}},md:{indicator:{boxSize:"2.5"},label:{fontSize:"md"}},lg:{indicator:{boxSize:"3"},label:{fontSize:"lg"}}},defaultProps:{size:"md"}}),{withContext:g,withProvider:P}=h("status",C),s=P(({children:r,indicatorProps:t,labelProps:a,...j})=>e.jsxs(k.div,{...j,children:[e.jsx(H,{...t}),e.jsx(T,{...a,children:r})]}),"root")(void 0,({colorScheme:r,value:t="info",...a})=>({colorScheme:r??t,...a})),H=g("div","indicator")(),T=g("p","label")(),R={component:s,title:"Components / Status"},o=()=>e.jsxs(v,{children:[e.jsx(s,{value:"info"}),e.jsx(s,{value:"success"}),e.jsx(s,{value:"warning"}),e.jsx(s,{value:"error"})]}),n=()=>e.jsxs(v,{children:[e.jsx(s,{value:"info",children:"Info"}),e.jsx(s,{value:"success",children:"Success"}),e.jsx(s,{value:"warning",children:"Warning"}),e.jsx(s,{value:"error",children:"Error"})]}),c=()=>e.jsx(w,{children:e.jsx(y,{columns:["info","success","warning","error"],rows:["sm","md","lg"],children:(r,t,a)=>e.jsx(s,{size:t,value:r,children:z(r)},a)})});var i,l,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info" />
      <Status value="success" />
      <Status value="warning" />
      <Status value="error" />
    </HStack>;
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,S;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info">Info</Status>
      <Status value="success">Success</Status>
      <Status value="warning">Warning</Status>
      <Status value="error">Error</Status>
    </HStack>;
}`,...(S=(d=n.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};var p,x,f;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <VStack>
      <PropsTable columns={["info", "success", "warning", "error"]} rows={["sm", "md", "lg"]}>
        {(column, row, key) => <Status key={key} size={row} value={column}>
            {toTitleCase(column)}
          </Status>}
      </PropsTable>
    </VStack>;
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const q=["Basic","Label","Size"];export{o as Basic,n as Label,c as Size,q as __namedExportsOrder,R as default};
