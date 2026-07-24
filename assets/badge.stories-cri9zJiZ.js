import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{pt as r,qn as i,tr as a}from"./core-CwFz10Qm.js";import{t as o}from"./jsx-runtime-BBQGix-2.js";import{Fa as s,Ia as c,Jl as l,Kl as u,at as d,ot as f,ql as p}from"./iframe-DVygIfsS.js";import{n as m,t as h}from"./storybook-B4Nq5bXR.js";var g,_,v,y,b,x,S,C,w;t((()=>{g=e(n(),1),h(),r(),s(),d(),l(),_=o(),v={component:u,title:`Components / Badge`},y=()=>(0,_.jsx)(u,{children:`Badge`}),b=()=>(0,_.jsx)(m,{columns:[`solid`,`subtle`,`surface`,`outline`],rows:a,children:(e,t,n)=>(0,_.jsx)(u,{colorScheme:t,variant:e,children:i(e)},n)}),x=()=>(0,_.jsx)(m,{columns:[`sm`,`md`,`lg`],rows:a,children:(e,t,n)=>(0,_.jsx)(u,{colorScheme:t,size:e,children:i(e)},n)}),S=()=>(0,_.jsx)(f,{gap:`md`,children:(0,_.jsx)(c,{each:[`solid`,`subtle`,`surface`,`outline`],children:(e,t)=>(0,_.jsx)(u,{variant:e,fullRounded:!0,children:i(e)},t)})}),C=()=>(0,_.jsx)(p,{value:(0,g.useMemo)(()=>({variant:`solid`}),[]),children:(0,_.jsx)(f,{gap:`md`,children:(0,_.jsx)(c,{each:a,children:(e,t)=>(0,_.jsx)(u,{colorScheme:e,children:`Badge`},t)})})}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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