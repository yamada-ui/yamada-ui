import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Dp as n,Ep as r,Fa as i,La as a,Pa as o,au as s,gi as c,hi as l,ou as u,qm as d,sm as f,vi as p,yi as m}from"./iframe-CXDvaz-K.js";var h,g,_,v,y;e((()=>{h=t(d(),1),o(),p(),l(),s(),n(),g=f(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{children:`Font Weights`}),(0,g.jsx)(a,{children:(0,g.jsx)(i,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(m,{each:Object.entries(r),children:([e,t],n)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(u,{children:e}),(0,g.jsx)(u,{color:`fg.muted`,children:t}),(0,g.jsx)(u,{fontSize:`2xl`,fontWeight:e,children:`Ag`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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