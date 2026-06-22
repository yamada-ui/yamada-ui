import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Dv as n,Fa as r,Jl as i,Lv as a,Pa as o,Uv as s,Xl as c,Yl as l,at as u,by as d,it as f,wv as p}from"./iframe-9OFoenoS.js";import{n as m,t as h}from"./storybook-BtXouxoB.js";var g,_,v,y,b,x,S,C,w;t((()=>{g=e(d(),1),h(),p(),o(),f(),c(),_=n(),v={component:i,title:`Components / Badge`},y=()=>(0,_.jsx)(i,{children:`Badge`}),b=()=>(0,_.jsx)(m,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:s,children:(e,t,n)=>(0,_.jsx)(i,{colorScheme:t,variant:e,children:a(e)},n)}),x=()=>(0,_.jsx)(m,{columns:[`sm`,`md`,`lg`],rows:s,children:(e,t,n)=>(0,_.jsx)(i,{colorScheme:t,size:e,children:a(e)},n)}),S=()=>(0,_.jsx)(u,{gap:`md`,children:(0,_.jsx)(r,{each:[`solid`,`subtle`,`surface`,`outline`],children:(e,t)=>(0,_.jsx)(i,{variant:e,fullRounded:!0,children:a(e)},t)})}),C=()=>(0,_.jsx)(l,{value:(0,g.useMemo)(()=>({variant:`solid`}),[]),children:(0,_.jsx)(u,{gap:`md`,children:(0,_.jsx)(r,{each:s,children:(e,t)=>(0,_.jsx)(i,{colorScheme:e,children:`Badge`},t)})})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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