import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Ev as n,Fa as r,Lf as i,Ma as a,Pa as o,Rf as s,U_ as c,W_ as l,ja as u,ls as d,os as f,ss as p,yy as m}from"./iframe-4z85howq.js";var h,g,_,v,y;t((()=>{h=e(m(),1),f(),o(),u(),i(),l(),g=n(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{children:`Font Weights`}),(0,g.jsx)(d,{children:(0,g.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(r,{each:Object.entries(c),children:([e,t],n)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(s,{children:e}),(0,g.jsx)(s,{color:`fg.muted`,children:t}),(0,g.jsx)(s,{fontSize:`2xl`,fontWeight:e,children:`Ag`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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