import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{n as i,t as a}from"./font-weights-CpmUG3gw.js";import{t as o}from"./text-DSMMc5B6.js";import{t as s}from"./text-BM4F8FHS.js";import{t as c}from"./heading-DnIVTUkI.js";import{Gi as l,Hr as u,Ur as d,Wi as f,Wr as p,qi as m}from"./iframe-Czx2JwYh.js";var h,g,_,v,y;e((()=>{h=t(n(),1),f(),d(),u(),s(),i(),g=r(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{children:`Font Weights`}),(0,g.jsx)(m,{children:(0,g.jsx)(l,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(p,{each:Object.entries(a),children:([e,t],n)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(o,{children:e}),(0,g.jsx)(o,{color:`fg.muted`,children:t}),(0,g.jsx)(o,{fontSize:`2xl`,fontWeight:e,children:`Ag`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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