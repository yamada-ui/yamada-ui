import{G as D,j as r,b1 as g}from"./iframe-BtFlpYLv.js";import{P as O}from"./props-table-C-1iM-Ol.js";import{C as o}from"./color-swatch-DgrTfNGZ.js";import{W as s}from"./wrap-BGVloBGe.js";import{G as E}from"./grid-D1_nTnww.js";import"./preload-helper-C1FmrZbK.js";import"./grid-item-DSNOgZLY.js";import"./for-CkMu8O76.js";import"./flex-sv8FeSmq.js";import"./heading-BHQEJC0C.js";const h=({items:e=[],layers:a,withShadow:t=!0,itemProps:A,...d})=>{const{t:w}=D("colorSwatch");e.length>4&&console.warn("ColorSwatchGroup: doesn't support more than 4 items");const q=e.length===0,u=e.length===3;return q?r.jsx(o,{"aria-label":w("Color swatch group"),layers:a,overflow:"hidden",withShadow:t,...d}):r.jsx(o,{"aria-label":w("Color swatch group"),layers:t?[{boxShadow:"inner"}]:[],...d,children:r.jsx(E,{templateColumns:"repeat(2, 1fr)",children:e.map((B,m)=>r.jsx(o,{boxSize:"inherit",color:B,gridColumn:u&&!m?"1 / 3":void 0,rounded:"0",w:u&&!m?"unset":void 0,withShadow:!1,...A},m))})})},Q={component:o,title:"Components / ColorSwatch"},l=()=>r.jsxs(r.Fragment,{children:[r.jsxs(s,{gap:"md",children:[r.jsx(o,{color:"#4387f4"}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{color:"hsla(251, 87%, 67%, 0.7)"})]}),r.jsx(s,{gap:"md",children:Object.entries(g.colors.whiteAlpha).map(([e,a])=>r.jsx(o,{color:a},e))}),r.jsx(s,{gap:"md",children:Object.entries(g.colors.blackAlpha).map(([e,a])=>r.jsx(o,{color:a},e))})]}),n=()=>r.jsx(O,{variant:"stack",rows:["plain","circle","square"],children:(e,a,t)=>r.jsxs(s,{gap:"md",children:[r.jsx(o,{variant:a,color:"#4387f4"}),r.jsx(o,{variant:a,color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{variant:a,color:"hsla(251, 87%, 67%, 0.7)"})]},t)}),c=()=>r.jsx(O,{variant:"stack",rows:["2xs","xs","sm","md","lg","xl","2xl"],children:(e,a,t)=>r.jsxs(s,{gap:"md",children:[r.jsx(o,{size:a,color:"#4387f4"}),r.jsx(o,{size:a,color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{size:a,color:"hsla(251, 87%, 67%, 0.7)"})]},t)}),p=()=>r.jsxs(s,{gap:"md",children:[r.jsx(o,{color:"#4387f4",withShadow:!1}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)",withShadow:!1}),r.jsx(o,{color:"hsla(251, 87%, 67%, 0.7)",withShadow:!1})]}),i=()=>r.jsxs(s,{gap:"md",children:[r.jsx(h,{items:["green.500","green.600","green.700","green.800"]}),r.jsx(h,{items:["red.500","red.400","red.300"]}),r.jsx(h,{items:[]})]});var x,S,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["plain", "circle", "square"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch variant={row} color="#4387f4" />
          <ColorSwatch variant={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch variant={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var k,W,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch size={row} color="#4387f4" />
          <ColorSwatch size={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch size={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...(y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var v,G,z;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" withShadow={false} />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" withShadow={false} />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" withShadow={false} />
    </Wrap>;
}`,...(z=(G=p.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var T,P,_;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatchGroup items={["green.500", "green.600", "green.700", "green.800"]} />
      <ColorSwatchGroup items={["red.500", "red.400", "red.300"]} />
      <ColorSwatchGroup items={[]} />
    </Wrap>;
}`,...(_=(P=i.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const U=["Basic","Variant","Size","DisabledShadow","Group"];export{l as Basic,p as DisabledShadow,i as Group,c as Size,n as Variant,U as __namedExportsOrder,Q as default};
