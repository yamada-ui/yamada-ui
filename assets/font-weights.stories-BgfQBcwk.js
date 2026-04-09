import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Du as n,Eu as r,Jr as i,Mf as a,Nf as o,Xp as s,Xr as c,Zr as l,da as u,pa as d,pp as f,qr as p,ua as m}from"./iframe-yoIXfJPu.js";var h,g,_,v,y;e((()=>{h=t(s(),1),m(),c(),p(),r(),o(),g=f(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{children:`Font Weights`}),(0,g.jsx)(d,{children:(0,g.jsx)(u,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(l,{each:Object.entries(a),children:([e,t],r)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(n,{children:e}),(0,g.jsx)(n,{color:`fg.muted`,children:t}),(0,g.jsx)(n,{fontSize:`2xl`,fontWeight:e,children:`Ag`})]},r)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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