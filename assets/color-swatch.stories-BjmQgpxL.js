import{n as e}from"./chunk-zsgVPwQN.js";import{B as t,Ll as n,Rl as r,mf as i,pf as a,pp as o,ql as s,z as c}from"./iframe-DZGIdQv0.js";import{n as l,t as u}from"./storybook-Do_1vhrs.js";var d,f,p,m,h,g,_,v;e((()=>{u(),a(),c(),n(),d=o(),f={component:s,title:`Components / ColorSwatch`},p=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t,{gap:`md`,children:[(0,d.jsx)(s,{color:`#4387f4`}),(0,d.jsx)(s,{color:`rgba(234, 22, 174, 0.5)`}),(0,d.jsx)(s,{color:`hsla(251, 87%, 67%, 0.7)`})]}),(0,d.jsx)(t,{gap:`md`,children:Object.entries(i.colors.whiteAlpha).map(([e,t])=>(0,d.jsx)(s,{color:t},e))}),(0,d.jsx)(t,{gap:`md`,children:Object.entries(i.colors.blackAlpha).map(([e,t])=>(0,d.jsx)(s,{color:t},e))})]}),m=()=>(0,d.jsx)(l,{variant:`stack`,rows:[`plain`,`circle`,`square`],children:(e,n,r)=>(0,d.jsxs)(t,{gap:`md`,children:[(0,d.jsx)(s,{variant:n,color:`#4387f4`}),(0,d.jsx)(s,{variant:n,color:`rgba(234, 22, 174, 0.5)`}),(0,d.jsx)(s,{variant:n,color:`hsla(251, 87%, 67%, 0.7)`})]},r)}),h=()=>(0,d.jsx)(l,{variant:`stack`,rows:[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],children:(e,n,r)=>(0,d.jsxs)(t,{gap:`md`,children:[(0,d.jsx)(s,{size:n,color:`#4387f4`}),(0,d.jsx)(s,{size:n,color:`rgba(234, 22, 174, 0.5)`}),(0,d.jsx)(s,{size:n,color:`hsla(251, 87%, 67%, 0.7)`})]},r)}),g=()=>(0,d.jsxs)(t,{gap:`md`,children:[(0,d.jsx)(s,{color:`#4387f4`,withShadow:!1}),(0,d.jsx)(s,{color:`rgba(234, 22, 174, 0.5)`,withShadow:!1}),(0,d.jsx)(s,{color:`hsla(251, 87%, 67%, 0.7)`,withShadow:!1})]}),_=()=>(0,d.jsxs)(t,{gap:`md`,children:[(0,d.jsx)(r,{items:[`green.500`,`green.600`,`green.700`,`green.800`]}),(0,d.jsx)(r,{items:[`red.500`,`red.400`,`red.300`]}),(0,d.jsx)(r,{items:[]})]}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <ColorSwatch color="#4387f4" />
        <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
        <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" />
      </Wrap>

      <Wrap gap="md">
        {Object.entries(defaultTheme.colors.whiteAlpha).map(([key, color]) => <ColorSwatch key={key} color={color} />)}
      </Wrap>

      <Wrap gap="md">
        {Object.entries(defaultTheme.colors.blackAlpha).map(([key, color]) => <ColorSwatch key={key} color={color} />)}
      </Wrap>
    </>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["plain", "circle", "square"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch variant={row} color="#4387f4" />
          <ColorSwatch variant={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch variant={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch size={row} color="#4387f4" />
          <ColorSwatch size={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch size={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" withShadow={false} />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" withShadow={false} />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" withShadow={false} />
    </Wrap>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatchGroup items={["green.500", "green.600", "green.700", "green.800"]} />
      <ColorSwatchGroup items={["red.500", "red.400", "red.300"]} />
      <ColorSwatchGroup items={[]} />
    </Wrap>;
}`,..._.parameters?.docs?.source}}},v=[`Basic`,`Variant`,`Size`,`DisabledShadow`,`Group`]}))();export{p as Basic,g as DisabledShadow,_ as Group,h as Size,m as Variant,v as __namedExportsOrder,f as default};