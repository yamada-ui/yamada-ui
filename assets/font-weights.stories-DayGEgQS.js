import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-ljAYVXXn.js";import{t as a}from"./text-DGi1MGSU.js";import{Ff as o,Ia as s,If as c,La as l,Na as u,Pa as d,fs as f,hs as p,ps as m}from"./iframe-D5Y3ROF5.js";var h,g,_,v,y;t((()=>{h=e(n(),1),f(),s(),u(),a(),c(),g=r(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{children:`Font Weights`}),(0,g.jsx)(p,{children:(0,g.jsx)(m,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(l,{each:Object.entries(o),children:([e,t],n)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(i,{children:e}),(0,g.jsx)(i,{color:`fg.muted`,children:t}),(0,g.jsx)(i,{fontSize:`2xl`,fontWeight:e,children:`Ag`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Font Weights</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(fontWeights)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Text fontSize="2xl" fontWeight={token}>
                  Ag
                </Text>
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...v.parameters?.docs?.source}}},y=[`FontWeights`]}))();export{v as FontWeights,y as __namedExportsOrder,_ as default};