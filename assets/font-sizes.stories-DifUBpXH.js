import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Fa as n,La as r,Op as i,Pa as a,au as o,gi as s,hi as c,kp as l,ou as u,qm as d,sm as f,vi as p,yi as m}from"./iframe-CHoZGzMw.js";var h,g,_,v,y;e((()=>{h=t(d(),1),a(),p(),c(),o(),l(),g=f(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{children:`Font Sizes`}),(0,g.jsx)(r,{children:(0,g.jsx)(n,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(m,{each:Object.entries(i),children:([e,t],n)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(u,{children:e}),(0,g.jsx)(u,{color:`fg.muted`,children:t}),(0,g.jsx)(u,{fontSize:e,children:`Ag`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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