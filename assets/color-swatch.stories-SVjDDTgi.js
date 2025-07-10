import{d as j,f as C,j as r,s as v,p as y,D as g,U as S}from"./iframe-CzCJWi2Q.js";import{W as t}from"./wrap-S0g3aWr_.js";import{G as k}from"./grid-BgXiws5k.js";import{P as b}from"./props-table-DBQkC1jw.js";import"./flex-CTfg42JT.js";import"./grid-item-BRSvi5nv.js";import"./for-B9vVJZhr.js";import"./heading-Db76muhr.js";const z=j({base:{overlay:{boxSize:"full",inset:0,position:"absolute"},root:{"& > *":{alignItems:"center",boxSize:"full",display:"flex",inset:0,justifyContent:"center",overflow:"hidden",position:"absolute"},overflow:"hidden",position:"relative"}},sizes:{"2xs":{root:{boxSize:"6"}},xs:{root:{boxSize:"8"}},sm:{root:{boxSize:"9"}},md:{root:{boxSize:"10"}},lg:{root:{boxSize:"11"}},xl:{root:{boxSize:"12"}},"2xl":{root:{boxSize:"14"}}},variants:{circle:{root:{rounded:"full"}},plain:{root:{rounded:"l2"}},square:{root:{rounded:"0"}}},defaultProps:{size:"xs",variant:"plain"}}),W=(a,o)=>{const s=[{"--body":g(["whiteAlpha.500","blackAlpha.500"],"colors"),"--checkers":g(["blackAlpha.300","whiteAlpha.300"],"colors"),bgImage:"linear-gradient(45deg, {checkers} 25%, transparent 25%), linear-gradient(-45deg, {checkers} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, {checkers} 75%), linear-gradient(-45deg, {body} 75%, {checkers} 75%)",bgPosition:"0 0, 0 4px, 4px -4px, -4px 0",bgSize:"8px 8px"},{background:a}];return o&&s.push({boxShadow:"inner"}),s},{withContext:A,withProvider:P}=C("color-swatch",z),e=P(({children:a,color:o="#ffffff00",withShadow:s=!0,overlays:m=W(o,s),...l})=>r.jsxs(v.div,{"aria-label":y(o)?o:void 0,"aria-roledescription":"color swatch",role:"img",...l,children:[a,m.map((x,n)=>r.jsx(G,{...x},n))]}),"root")(),G=A("div","overlay")(),w=({items:a=[],overlays:o,withShadow:s=!0,itemProps:m,...l})=>{a.length>4&&console.warn("ColorSwatchMix: doesn't support more than 4 items");const x=a.length===0,n=a.length===3;return x?r.jsx(e,{"aria-label":"color swatch group",overflow:"hidden",overlays:o,withShadow:s,...l}):r.jsx(e,{"aria-label":"color swatch group",overlays:s?[{boxShadow:"inner"}]:[],...l,children:r.jsx(k,{templateColumns:"repeat(2, 1fr)",children:a.map((f,u)=>r.jsx(e,{boxSize:"inherit",color:f,gridColumn:n&&!u?"1 / 3":void 0,rounded:"0",w:n&&!u?"unset":void 0,withShadow:!1,...m},u))})})},V={component:e,title:"Components / ColorSwatch"},c=()=>r.jsxs(r.Fragment,{children:[r.jsxs(t,{gap:"md",children:[r.jsx(e,{color:"#4387f4"}),r.jsx(e,{color:"rgba(234, 22, 174, 0.5)"}),r.jsx(e,{color:"hsla(251, 87%, 67%, 0.7)"})]}),r.jsx(t,{gap:"md",children:Object.entries(S.colors.whiteAlpha).map(([a,o])=>r.jsx(e,{color:o},a))}),r.jsx(t,{gap:"md",children:Object.entries(S.colors.blackAlpha).map(([a,o])=>r.jsx(e,{color:o},a))})]}),i=()=>r.jsx(b,{variant:"stack",rows:["plain","circle","square"],children:(a,o,s)=>r.jsxs(t,{gap:"md",children:[r.jsx(e,{variant:o,color:"#4387f4"}),r.jsx(e,{variant:o,color:"rgba(234, 22, 174, 0.5)"}),r.jsx(e,{variant:o,color:"hsla(251, 87%, 67%, 0.7)"})]},s)}),p=()=>r.jsx(b,{variant:"stack",rows:["2xs","xs","sm","md","lg","xl","2xl"],children:(a,o,s)=>r.jsxs(t,{gap:"md",children:[r.jsx(e,{size:o,color:"#4387f4"}),r.jsx(e,{size:o,color:"rgba(234, 22, 174, 0.5)"}),r.jsx(e,{size:o,color:"hsla(251, 87%, 67%, 0.7)"})]},s)}),d=()=>r.jsxs(t,{gap:"md",children:[r.jsx(e,{color:"#4387f4",withShadow:!1}),r.jsx(e,{color:"rgba(234, 22, 174, 0.5)",withShadow:!1}),r.jsx(e,{color:"hsla(251, 87%, 67%, 0.7)",withShadow:!1})]}),h=()=>r.jsxs(t,{gap:"md",children:[r.jsx(w,{items:["green.500","green.600","green.700","green.800"]}),r.jsx(w,{items:["red.500","red.400","red.300"]}),r.jsx(w,{items:[]})]});c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["plain", "circle", "square"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch variant={row} color="#4387f4" />
          <ColorSwatch variant={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch variant={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch size={row} color="#4387f4" />
          <ColorSwatch size={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch size={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" withShadow={false} />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" withShadow={false} />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" withShadow={false} />
    </Wrap>;
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatchGroup items={["green.500", "green.600", "green.700", "green.800"]} />
      <ColorSwatchGroup items={["red.500", "red.400", "red.300"]} />
      <ColorSwatchGroup items={[]} />
    </Wrap>;
}`,...h.parameters?.docs?.source}}};const F=["Basic","Variant","Size","DisabledShadow","Group"];export{c as Basic,d as DisabledShadow,h as Group,p as Size,i as Variant,F as __namedExportsOrder,V as default};
