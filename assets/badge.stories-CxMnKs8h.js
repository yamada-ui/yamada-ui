import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Gs as n,Ks as r,N as i,P as a,Wm as o,Ws as s,dm as c,gm as l,im as u,nm as d,vi as f,yi as p}from"./iframe-Dtrri4XQ.js";import{n as m,t as h}from"./storybook-CVcXwApf.js";var g,_,v,y,b,x,S,C,w;e((()=>{h(),g=t(o(),1),d(),f(),i(),r(),_=u(),v={component:s,title:`Components / Badge`},y=()=>(0,_.jsx)(s,{children:`Badge`}),b=()=>(0,_.jsx)(m,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:l,children:(e,t,n)=>(0,_.jsx)(s,{colorScheme:t,variant:e,children:c(e)},n)}),x=()=>(0,_.jsx)(m,{columns:[`sm`,`md`,`lg`],rows:l,children:(e,t,n)=>(0,_.jsx)(s,{colorScheme:t,size:e,children:c(e)},n)}),S=()=>(0,_.jsx)(a,{gap:`md`,children:(0,_.jsx)(p,{each:[`solid`,`subtle`,`surface`,`outline`],children:(e,t)=>(0,_.jsx)(s,{variant:e,fullRounded:!0,children:c(e)},t)})}),C=()=>(0,_.jsx)(n,{value:(0,g.useMemo)(()=>({variant:`solid`}),[]),children:(0,_.jsx)(a,{gap:`md`,children:(0,_.jsx)(p,{each:l,children:(e,t)=>(0,_.jsx)(s,{colorScheme:e,children:`Badge`},t)})})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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