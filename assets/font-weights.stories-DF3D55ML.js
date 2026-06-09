import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Dv as n,Fa as r,G_ as i,Ma as a,Pa as o,Rf as s,W_ as c,by as l,ja as u,ls as d,os as f,ss as p,zf as m}from"./iframe-CM6ym36p.js";var h,g,_,v,y;t((()=>{h=e(l(),1),f(),o(),u(),s(),i(),g=n(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{children:`Font Weights`}),(0,g.jsx)(d,{children:(0,g.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(r,{each:Object.entries(c),children:([e,t],n)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(m,{children:e}),(0,g.jsx)(m,{color:`fg.muted`,children:t}),(0,g.jsx)(m,{fontSize:`2xl`,fontWeight:e,children:`Ag`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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