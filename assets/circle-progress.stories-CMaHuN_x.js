import{n as e}from"./chunk-zsgVPwQN.js";import{ao as t,gm as n,im as r,nm as i,oo as a,so as o,vi as s,yi as c}from"./iframe-BdSFgLyo.js";import{n as l,t as u}from"./storybook-BMIL35dG.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{u(),i(),s(),t(),d=r(),f={component:o,title:`Components / CircleProgress`},p=()=>(0,d.jsx)(o,{value:75}),m=()=>(0,d.jsx)(l,{columns:[`outline`,`subtle`],rows:n,children:(e,t,n)=>(0,d.jsx)(o,{colorScheme:t,variant:e,value:75},n)}),h=()=>(0,d.jsx)(l,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(e,t,n)=>(0,d.jsx)(o,{size:t,value:75},n)}),g=()=>(0,d.jsx)(l,{variant:`stack`,rows:[`rounded`,`square`],children:(e,t,n)=>(0,d.jsx)(o,{shape:t,value:50},n)}),_=()=>(0,d.jsx)(o,{value:null}),v=()=>(0,d.jsx)(o,{duration:2,value:null}),y=()=>(0,d.jsx)(o,{thickness:1,value:31}),b=()=>(0,d.jsx)(c,{each:[`md`,`lg`,`xl`],children:(e,t)=>(0,d.jsx)(o,{size:e,value:75,children:(0,d.jsx)(a,{children:`75%`})},t)}),x=()=>(0,d.jsx)(o,{rangeColor:`red.500`,trackColor:`blue.500`,value:31}),S=()=>(0,d.jsx)(o,{boxSize:`100px`,value:31}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root value={75} />;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["outline", "subtle"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <CircleProgress.Root key={key} colorScheme={row} variant={column} value={75} />;
    }}
    </PropsTable>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
      return <CircleProgress.Root key={key} size={row} value={75} />;
    }}
    </PropsTable>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "square"]}>
      {(_, row, key) => <CircleProgress.Root key={key} shape={row} value={50} />}
    </PropsTable>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root value={null} />;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root duration={2} value={null} />;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root thickness={1} value={31} />;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <For each={["md", "lg", "xl"] as const}>
      {(size, index) => <CircleProgress.Root key={index} size={size} value={75}>
          <CircleProgress.Label>75%</CircleProgress.Label>
        </CircleProgress.Root>}
    </For>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root rangeColor="red.500" trackColor="blue.500" value={31} />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <CircleProgress.Root boxSize="100px" value={31} />;
}`,...S.parameters?.docs?.source}}},C=[`Basic`,`Variant`,`Size`,`Shape`,`Indeterminate`,`Duration`,`Thickness`,`Label`,`CustomColor`,`CustomSize`]}))();export{p as Basic,x as CustomColor,S as CustomSize,v as Duration,_ as Indeterminate,b as Label,g as Shape,h as Size,y as Thickness,m as Variant,C as __namedExportsOrder,f as default};