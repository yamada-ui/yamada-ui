import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Js as n,Ks as r,N as i,P as a,am as o,mm as s,qm as c,qs as l,sm as u,vi as d,yi as f,ym as p}from"./iframe-CHoZGzMw.js";import{n as m,t as h}from"./storybook-D7iTf7Rb.js";var g,_,v,y,b,x,S,C,w;e((()=>{h(),g=t(c(),1),o(),d(),i(),n(),_=u(),v={component:r,title:`Components / Badge`},y=()=>(0,_.jsx)(r,{children:`Badge`}),b=()=>(0,_.jsx)(m,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:p,children:(e,t,n)=>(0,_.jsx)(r,{colorScheme:t,variant:e,children:s(e)},n)}),x=()=>(0,_.jsx)(m,{columns:[`sm`,`md`,`lg`],rows:p,children:(e,t,n)=>(0,_.jsx)(r,{colorScheme:t,size:e,children:s(e)},n)}),S=()=>(0,_.jsx)(a,{gap:`md`,children:(0,_.jsx)(f,{each:[`solid`,`subtle`,`surface`,`outline`],children:(e,t)=>(0,_.jsx)(r,{variant:e,fullRounded:!0,children:s(e)},t)})}),C=()=>(0,_.jsx)(l,{value:(0,g.useMemo)(()=>({variant:`solid`}),[]),children:(0,_.jsx)(a,{gap:`md`,children:(0,_.jsx)(f,{each:p,children:(e,t)=>(0,_.jsx)(r,{colorScheme:e,children:`Badge`},t)})})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}},w=[`Basic`,`Variant`,`Size`,`FullRounded`,`Context`]}))();export{y as Basic,C as Context,S as FullRounded,x as Size,b as Variant,w as __namedExportsOrder,v as default};