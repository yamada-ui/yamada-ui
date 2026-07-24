import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-CWhjq_ZM.js";import{t as a}from"./text-PitPK9Eo.js";import{Fa as o,Ia as s,If as c,Lf as l,Ma as u,Na as d,ds as f,fs as p,ms as m}from"./iframe-DTxndMIb.js";var h,g,_,v,y;t((()=>{h=e(n(),1),f(),o(),u(),a(),l(),g=r(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{children:`Font Sizes`}),(0,g.jsx)(m,{children:(0,g.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(s,{each:Object.entries(c),children:([e,t],n)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(i,{children:e}),(0,g.jsx)(i,{color:`fg.muted`,children:t}),(0,g.jsx)(i,{fontSize:e,children:`Ag`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Font Sizes</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(fontSizes)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Text fontSize={token}>Ag</Text>
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...v.parameters?.docs?.source}}},y=[`FontSizes`]}))();export{v as FontSizes,y as __namedExportsOrder,_ as default};