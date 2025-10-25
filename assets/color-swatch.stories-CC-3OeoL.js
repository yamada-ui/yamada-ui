import{j as r,af as u}from"./iframe-5QspZtQ-.js";import{P as g}from"./props-table-DAC1ISVp.js";import{C as o}from"./color-swatch-DYs2Z_QB.js";import{W as s}from"./wrap-DtWh82PK.js";import{G as f}from"./grid-lhGs18c5.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-item-CTbfQR9b.js";import"./for-DDltKb5N.js";import"./flex-F27-7WN2.js";import"./heading-DabtuQYj.js";const h=(({items:e=[],layers:a,withShadow:t=!0,itemProps:x,...d})=>{e.length>4&&console.warn("ColorSwatchMix: doesn't support more than 4 items");const S=e.length===0,w=e.length===3;return S?r.jsx(o,{"aria-label":"color swatch group",layers:a,overflow:"hidden",withShadow:t,...d}):r.jsx(o,{"aria-label":"color swatch group",layers:t?[{boxShadow:"inner"}]:[],...d,children:r.jsx(f,{templateColumns:"repeat(2, 1fr)",children:e.map((j,m)=>r.jsx(o,{boxSize:"inherit",color:j,gridColumn:w&&!m?"1 / 3":void 0,rounded:"0",w:w&&!m?"unset":void 0,withShadow:!1,...x},m))})})}),_={component:o,title:"Components / ColorSwatch"},l=()=>r.jsxs(r.Fragment,{children:[r.jsxs(s,{gap:"md",children:[r.jsx(o,{color:"#4387f4"}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{color:"hsla(251, 87%, 67%, 0.7)"})]}),r.jsx(s,{gap:"md",children:Object.entries(u.colors.whiteAlpha).map(([e,a])=>r.jsx(o,{color:a},e))}),r.jsx(s,{gap:"md",children:Object.entries(u.colors.blackAlpha).map(([e,a])=>r.jsx(o,{color:a},e))})]}),c=()=>r.jsx(g,{variant:"stack",rows:["plain","circle","square"],children:(e,a,t)=>r.jsxs(s,{gap:"md",children:[r.jsx(o,{variant:a,color:"#4387f4"}),r.jsx(o,{variant:a,color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{variant:a,color:"hsla(251, 87%, 67%, 0.7)"})]},t)}),n=()=>r.jsx(g,{variant:"stack",rows:["2xs","xs","sm","md","lg","xl","2xl"],children:(e,a,t)=>r.jsxs(s,{gap:"md",children:[r.jsx(o,{size:a,color:"#4387f4"}),r.jsx(o,{size:a,color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{size:a,color:"hsla(251, 87%, 67%, 0.7)"})]},t)}),p=()=>r.jsxs(s,{gap:"md",children:[r.jsx(o,{color:"#4387f4",withShadow:!1}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)",withShadow:!1}),r.jsx(o,{color:"hsla(251, 87%, 67%, 0.7)",withShadow:!1})]}),i=()=>r.jsxs(s,{gap:"md",children:[r.jsx(h,{items:["green.500","green.600","green.700","green.800"]}),r.jsx(h,{items:["red.500","red.400","red.300"]}),r.jsx(h,{items:[]})]});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["plain", "circle", "square"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch variant={row} color="#4387f4" />
          <ColorSwatch variant={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch variant={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch size={row} color="#4387f4" />
          <ColorSwatch size={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch size={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" withShadow={false} />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" withShadow={false} />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" withShadow={false} />
    </Wrap>;
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatchGroup items={["green.500", "green.600", "green.700", "green.800"]} />
      <ColorSwatchGroup items={["red.500", "red.400", "red.300"]} />
      <ColorSwatchGroup items={[]} />
    </Wrap>;
}`,...i.parameters?.docs?.source}}};const O=["Basic","Variant","Size","DisabledShadow","Group"];export{l as Basic,p as DisabledShadow,i as Group,n as Size,c as Variant,O as __namedExportsOrder,_ as default};
