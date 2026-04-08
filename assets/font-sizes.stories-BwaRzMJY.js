import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Du as n,Eu as r,Ff as i,Jr as a,Pf as o,Xp as s,Xr as c,Zr as l,da as u,pa as d,pp as f,qr as p,ua as m}from"./iframe-DKFq6LfD.js";var h,g,_,v,y;e((()=>{h=t(s(),1),m(),c(),p(),r(),i(),g=f(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{children:`Font Sizes`}),(0,g.jsx)(d,{children:(0,g.jsx)(u,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(l,{each:Object.entries(o),children:([e,t],r)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(n,{children:e}),(0,g.jsx)(n,{color:`fg.muted`,children:t}),(0,g.jsx)(n,{fontSize:e,children:`Ag`})]},r)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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