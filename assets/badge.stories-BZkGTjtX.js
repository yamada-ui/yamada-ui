import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{B as n,Cp as r,Cs as i,Ss as a,Xp as o,Xr as s,Zr as c,dp as l,pp as u,ws as d,yp as f,z as p}from"./iframe-BNI00s7o.js";import{n as m,t as h}from"./storybook-BZRvw9tA.js";var g,_,v,y,b,x,S,C,w;e((()=>{h(),g=t(o(),1),l(),s(),p(),d(),_=u(),v={component:a,title:`Components / Badge`},y=()=>(0,_.jsx)(a,{children:`Badge`}),b=()=>(0,_.jsx)(m,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:r,children:(e,t,n)=>(0,_.jsx)(a,{colorScheme:t,variant:e,children:f(e)},n)}),x=()=>(0,_.jsx)(m,{columns:[`sm`,`md`,`lg`],rows:r,children:(e,t,n)=>(0,_.jsx)(a,{colorScheme:t,size:e,children:f(e)},n)}),S=()=>(0,_.jsx)(n,{gap:`md`,children:(0,_.jsx)(c,{each:[`solid`,`subtle`,`surface`,`outline`],children:(e,t)=>(0,_.jsx)(a,{variant:e,fullRounded:!0,children:f(e)},t)})}),C=()=>(0,_.jsx)(i,{value:(0,g.useMemo)(()=>({variant:`solid`}),[]),children:(0,_.jsx)(n,{gap:`md`,children:(0,_.jsx)(c,{each:r,children:(e,t)=>(0,_.jsx)(a,{colorScheme:e,children:`Badge`},t)})})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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