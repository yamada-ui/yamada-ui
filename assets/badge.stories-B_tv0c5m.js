import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Cn as n,_n as r,jn as i,zn as a}from"./props-BOrE8-AT.js";import{t as o}from"./jsx-runtime-BB9-612F.js";import{n as s,r as c,t as l}from"./badge-DaPBAmpA.js";import{n as u,t as d}from"./for-CKmYkTv5.js";import{n as f,t as p}from"./wrap-B5xNFCyK.js";import{n as m,t as h}from"./props-table-CnO6rz1W.js";var g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{g=t(),m(),a(),r(),u(),f(),c(),_=o(),v={component:l,title:`Components / Badge`},y=()=>(0,_.jsx)(l,{children:`Badge`}),b=()=>(0,_.jsx)(h,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:i,children:(e,t,r)=>(0,_.jsx)(l,{colorScheme:t,variant:e,children:n(e)},r)}),x=()=>(0,_.jsx)(h,{columns:[`sm`,`md`,`lg`],rows:i,children:(e,t,r)=>(0,_.jsx)(l,{colorScheme:t,size:e,children:n(e)},r)}),S=()=>(0,_.jsx)(p,{gap:`md`,children:(0,_.jsx)(d,{each:[`solid`,`subtle`,`surface`,`outline`],children:(e,t)=>(0,_.jsx)(l,{variant:e,fullRounded:!0,children:n(e)},t)})}),C=()=>{let e=(0,g.useMemo)(()=>({variant:`solid`}),[]);return(0,_.jsx)(s,{value:e,children:(0,_.jsx)(p,{gap:`md`,children:(0,_.jsx)(d,{each:i,children:(e,t)=>(0,_.jsx)(l,{colorScheme:e,children:`Badge`},t)})})})},w=[`Basic`,`Variant`,`Size`,`FullRounded`,`Context`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <Badge>Badge</Badge>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Badge key={key} colorScheme={row} variant={column}>
            {toTitleCase(column)}
          </Badge>;
    }}
    </PropsTable>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Badge key={key} colorScheme={row} size={column}>
            {toTitleCase(column)}
          </Badge>;
    }}
    </PropsTable>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <Badge key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Badge>}
      </For>
    </Wrap>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const value = useMemo<BadgeProps>(() => ({
    variant: "solid"
  }), []);
  return <BadgePropsContext value={value}>
      <Wrap gap="md">
        <For each={COLOR_SCHEMES}>
          {(colorScheme, index) => <Badge key={index} colorScheme={colorScheme}>
              Badge
            </Badge>}
        </For>
      </Wrap>
    </BadgePropsContext>;
}`,...C.parameters?.docs?.source}}}})))()}T();export{y as Basic,C as Context,S as FullRounded,x as Size,b as Variant,w as __namedExportsOrder,v as default};