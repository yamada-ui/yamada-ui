import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{_n as t,dn as n}from"./props-Bz1FL_va.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{d as i,f as a}from"./utils-DG4lHdyV.js";import{d as o,i as s,n as c,r as l}from"./create-component-DtmnY_ce.js";import{n as u,t as d}from"./h-stack-CueUnXBe.js";import{n as f,t as p}from"./v-stack-DgxvBjIl.js";import{n as m,t as h}from"./props-table-CLkISL0o.js";var g;function _(){return(_=e((()=>{o(),g=s({base:{indicator:{bg:`colorScheme.solid`,flexShrink:0,forcedColorAdjust:`none`,rounded:`full`},label:{},root:{alignItems:`center`,display:`inline-flex`,gap:`sm`}},sizes:{sm:{indicator:{boxSize:`2`},label:{fontSize:`sm`}},md:{indicator:{boxSize:`2.5`},label:{fontSize:`md`}},lg:{indicator:{boxSize:`3`},label:{fontSize:`lg`}}},defaultProps:{size:`md`}})})))()}var v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{l(),i(),_(),v=r(),{PropsContext:y,usePropsContext:b,withContext:x,withProvider:S}=c(`status`,g),C=S(({children:e,indicatorProps:t,labelProps:n,...r})=>(0,v.jsxs)(a.div,{...r,children:[(0,v.jsx)(w,{...t}),(0,v.jsx)(T,{...n,children:e})]}),`root`)(void 0,({colorScheme:e,value:t=`info`,...n})=>({colorScheme:e??t,...n})),w=x(`div`,`indicator`)(),T=x(`p`,`label`)()})))()}var D,O,k,A,j,M;function N(){return(N=e((()=>{m(),n(),u(),f(),E(),D=r(),O={component:C,title:`Components / Status`},k=()=>(0,D.jsxs)(d,{children:[(0,D.jsx)(C,{value:`info`}),(0,D.jsx)(C,{value:`success`}),(0,D.jsx)(C,{value:`warning`}),(0,D.jsx)(C,{value:`error`})]}),A=()=>(0,D.jsxs)(d,{children:[(0,D.jsx)(C,{value:`info`,children:`Info`}),(0,D.jsx)(C,{value:`success`,children:`Success`}),(0,D.jsx)(C,{value:`warning`,children:`Warning`}),(0,D.jsx)(C,{value:`error`,children:`Error`})]}),j=()=>(0,D.jsx)(p,{children:(0,D.jsx)(h,{columns:[`info`,`success`,`warning`,`error`],rows:[`sm`,`md`,`lg`],children:(e,n,r)=>(0,D.jsx)(C,{size:n,value:e,children:t(e)},r)})}),M=[`Basic`,`Label`,`Size`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info" />
      <Status value="success" />
      <Status value="warning" />
      <Status value="error" />
    </HStack>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info">Info</Status>
      <Status value="success">Success</Status>
      <Status value="warning">Warning</Status>
      <Status value="error">Error</Status>
    </HStack>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <PropsTable columns={["info", "success", "warning", "error"]} rows={["sm", "md", "lg"]}>
        {(column, row, key) => <Status key={key} size={row} value={column}>
            {toTitleCase(column)}
          </Status>}
      </PropsTable>
    </VStack>;
}`,...j.parameters?.docs?.source}}}})))()}N();export{k as Basic,A as Label,j as Size,M as __namedExportsOrder,O as default};