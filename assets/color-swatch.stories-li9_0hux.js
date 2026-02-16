import{j as r,af as u}from"./iframe-Bh9OJiMa.js";import{P as _}from"./props-table-Clbdh-et.js";import{C as o}from"./color-swatch-HzlrEBec.js";import{W as s}from"./wrap-BLv8Ry5J.js";import{G as B}from"./grid-DEBT4jh_.js";import"./preload-helper-C1FmrZbK.js";import"./grid-item-DglFRIPa.js";import"./for-Drx2NpVa.js";import"./flex-Cq9fG4Y2.js";import"./heading-D9jKM5Is.js";const h=({items:e=[],layers:a,withShadow:t=!0,itemProps:O,...d})=>{e.length>4&&console.warn("ColorSwatchMix: doesn't support more than 4 items");const A=e.length===0,w=e.length===3;return A?r.jsx(o,{"aria-label":"color swatch group",layers:a,overflow:"hidden",withShadow:t,...d}):r.jsx(o,{"aria-label":"color swatch group",layers:t?[{boxShadow:"inner"}]:[],...d,children:r.jsx(B,{templateColumns:"repeat(2, 1fr)",children:e.map((q,m)=>r.jsx(o,{boxSize:"inherit",color:q,gridColumn:w&&!m?"1 / 3":void 0,rounded:"0",w:w&&!m?"unset":void 0,withShadow:!1,...O},m))})})},L={component:o,title:"Components / ColorSwatch"},l=()=>r.jsxs(r.Fragment,{children:[r.jsxs(s,{gap:"md",children:[r.jsx(o,{color:"#4387f4"}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{color:"hsla(251, 87%, 67%, 0.7)"})]}),r.jsx(s,{gap:"md",children:Object.entries(u.colors.whiteAlpha).map(([e,a])=>r.jsx(o,{color:a},e))}),r.jsx(s,{gap:"md",children:Object.entries(u.colors.blackAlpha).map(([e,a])=>r.jsx(o,{color:a},e))})]}),c=()=>r.jsx(_,{variant:"stack",rows:["plain","circle","square"],children:(e,a,t)=>r.jsxs(s,{gap:"md",children:[r.jsx(o,{variant:a,color:"#4387f4"}),r.jsx(o,{variant:a,color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{variant:a,color:"hsla(251, 87%, 67%, 0.7)"})]},t)}),n=()=>r.jsx(_,{variant:"stack",rows:["2xs","xs","sm","md","lg","xl","2xl"],children:(e,a,t)=>r.jsxs(s,{gap:"md",children:[r.jsx(o,{size:a,color:"#4387f4"}),r.jsx(o,{size:a,color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{size:a,color:"hsla(251, 87%, 67%, 0.7)"})]},t)}),p=()=>r.jsxs(s,{gap:"md",children:[r.jsx(o,{color:"#4387f4",withShadow:!1}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)",withShadow:!1}),r.jsx(o,{color:"hsla(251, 87%, 67%, 0.7)",withShadow:!1})]}),i=()=>r.jsxs(s,{gap:"md",children:[r.jsx(h,{items:["green.500","green.600","green.700","green.800"]}),r.jsx(h,{items:["red.500","red.400","red.300"]}),r.jsx(h,{items:[]})]});var g,x,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,f,C;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["plain", "circle", "square"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch variant={row} color="#4387f4" />
          <ColorSwatch variant={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch variant={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var b,k,W;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]}>
      {(_, row, key) => <Wrap key={key} gap="md">
          <ColorSwatch size={row} color="#4387f4" />
          <ColorSwatch size={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch size={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>}
    </PropsTable>;
}`,...(W=(k=n.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var y,v,z;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" withShadow={false} />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" withShadow={false} />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" withShadow={false} />
    </Wrap>;
}`,...(z=(v=p.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var G,T,P;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatchGroup items={["green.500", "green.600", "green.700", "green.800"]} />
      <ColorSwatchGroup items={["red.500", "red.400", "red.300"]} />
      <ColorSwatchGroup items={[]} />
    </Wrap>;
}`,...(P=(T=i.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const N=["Basic","Variant","Size","DisabledShadow","Group"];export{l as Basic,p as DisabledShadow,i as Group,n as Size,c as Variant,N as __namedExportsOrder,L as default};
