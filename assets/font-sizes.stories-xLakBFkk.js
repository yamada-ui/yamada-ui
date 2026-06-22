import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Dv as n,Fa as r,K_ as i,Ma as a,Pa as o,Rf as s,by as c,ja as l,ls as u,os as d,q_ as f,ss as p,zf as m}from"./iframe-9OFoenoS.js";var h,g,_,v,y;t((()=>{h=e(c(),1),d(),o(),l(),s(),f(),g=n(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{children:`Font Sizes`}),(0,g.jsx)(u,{children:(0,g.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(r,{each:Object.entries(i),children:([e,t],n)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(m,{children:e}),(0,g.jsx)(m,{color:`fg.muted`,children:t}),(0,g.jsx)(m,{fontSize:e,children:`Ag`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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