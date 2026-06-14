import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Ev as n,Fa as r,G_ as i,K_ as a,Lf as o,Ma as s,Pa as c,Rf as l,ja as u,ls as d,os as f,ss as p,yy as m}from"./iframe-4z85howq.js";var h,g,_,v,y;t((()=>{h=e(m(),1),f(),c(),u(),o(),a(),g=n(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{children:`Font Sizes`}),(0,g.jsx)(d,{children:(0,g.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(r,{each:Object.entries(i),children:([e,t],n)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(l,{children:e}),(0,g.jsx)(l,{color:`fg.muted`,children:t}),(0,g.jsx)(l,{fontSize:e,children:`Ag`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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