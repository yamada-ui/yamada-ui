import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Ep as n,Fa as r,Ma as i,Na as a,Tp as o,Wm as s,gi as c,hi as l,im as u,iu as d,ru as f,vi as p,yi as m}from"./iframe-zMOrAcxo.js";var h,g,_,v,y;e((()=>{h=t(s(),1),i(),p(),l(),f(),n(),g=u(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{children:`Font Sizes`}),(0,g.jsx)(r,{children:(0,g.jsx)(a,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(m,{each:Object.entries(o),children:([e,t],n)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(d,{children:e}),(0,g.jsx)(d,{color:`fg.muted`,children:t}),(0,g.jsx)(d,{fontSize:e,children:`Ag`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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