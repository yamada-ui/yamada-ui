import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{i as t,r as n}from"./i18n-provider-Cc12Ys91.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./theme-Ca04YPbJ.js";import{r as o,t as s}from"./color-swatch-CYvL_PNL.js";import{n as c,t as l}from"./grid-DAC5TR2S.js";import{n as u,t as d}from"./wrap-Dg19SbjB.js";import{n as f,t as p}from"./props-table-CLkISL0o.js";var m,h;function g(){return(g=e((()=>{n(),c(),o(),m=r(),h=(({items:e=[],layers:n,withShadow:r=!0,itemProps:i,...a})=>{let{t:o}=t(`colorSwatch`);e.length>4&&console.warn(`ColorSwatchGroup: doesn't support more than 4 items`);let c=e.length===0,u=e.length===3;return c?(0,m.jsx)(s,{"aria-label":o(`Color swatch group`),layers:n,overflow:`hidden`,withShadow:r,...a}):(0,m.jsx)(s,{"aria-label":o(`Color swatch group`),layers:r?[{boxShadow:`inner`}]:[],...a,children:(0,m.jsx)(l,{templateColumns:`repeat(2, 1fr)`,children:e.map((e,t)=>(0,m.jsx)(s,{boxSize:`inherit`,color:e,gridColumn:u&&!t?`1 / 3`:void 0,rounded:`0`,w:u&&!t?`unset`:void 0,withShadow:!1,...i},t))})})})})))()}var _,v,y,b,x,S,C,w;function T(){return(T=e((()=>{f(),a(),u(),o(),g(),_=r(),v={component:s,title:`Components / ColorSwatch`},y=()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(d,{gap:`md`,children:[(0,_.jsx)(s,{color:`#4387f4`}),(0,_.jsx)(s,{color:`rgba(234, 22, 174, 0.5)`}),(0,_.jsx)(s,{color:`hsla(251, 87%, 67%, 0.7)`})]}),(0,_.jsx)(d,{gap:`md`,children:Object.entries(i.colors.whiteAlpha).map(([e,t])=>(0,_.jsx)(s,{color:t},e))}),(0,_.jsx)(d,{gap:`md`,children:Object.entries(i.colors.blackAlpha).map(([e,t])=>(0,_.jsx)(s,{color:t},e))})]}),b=()=>(0,_.jsx)(p,{variant:`stack`,rows:[`plain`,`circle`,`square`],children:(e,t,n)=>(0,_.jsxs)(d,{gap:`md`,children:[(0,_.jsx)(s,{variant:t,color:`#4387f4`}),(0,_.jsx)(s,{variant:t,color:`rgba(234, 22, 174, 0.5)`}),(0,_.jsx)(s,{variant:t,color:`hsla(251, 87%, 67%, 0.7)`})]},n)}),x=()=>(0,_.jsx)(p,{variant:`stack`,rows:[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],children:(e,t,n)=>(0,_.jsxs)(d,{gap:`md`,children:[(0,_.jsx)(s,{size:t,color:`#4387f4`}),(0,_.jsx)(s,{size:t,color:`rgba(234, 22, 174, 0.5)`}),(0,_.jsx)(s,{size:t,color:`hsla(251, 87%, 67%, 0.7)`})]},n)}),S=()=>(0,_.jsxs)(d,{gap:`md`,children:[(0,_.jsx)(s,{color:`#4387f4`,withShadow:!1}),(0,_.jsx)(s,{color:`rgba(234, 22, 174, 0.5)`,withShadow:!1}),(0,_.jsx)(s,{color:`hsla(251, 87%, 67%, 0.7)`,withShadow:!1})]}),C=()=>(0,_.jsxs)(d,{gap:`md`,children:[(0,_.jsx)(h,{items:[`green.500`,`green.600`,`green.700`,`green.800`]}),(0,_.jsx)(h,{items:[`red.500`,`red.400`,`red.300`]}),(0,_.jsx)(h,{items:[]})]}),w=[`Basic`,`Variant`,`Size`,`DisabledShadow`,`Group`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["plain", "circle", "square"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch variant={row} color="#4387f4" />
          <ColorSwatch variant={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch variant={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch size={row} color="#4387f4" />
          <ColorSwatch size={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch size={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" withShadow={false} />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" withShadow={false} />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" withShadow={false} />
    </Wrap>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatchGroup items={["green.500", "green.600", "green.700", "green.800"]} />
      <ColorSwatchGroup items={["red.500", "red.400", "red.300"]} />
      <ColorSwatchGroup items={[]} />
    </Wrap>;
}`,...C.parameters?.docs?.source}}}})))()}T();export{y as Basic,S as DisabledShadow,C as Group,x as Size,b as Variant,w as __namedExportsOrder,v as default};