import{j as e,r as s,T as t,bA as i}from"./iframe-CzCJWi2Q.js";import{H as d}from"./heading-Db76muhr.js";import{F as c}from"./for-B9vVJZhr.js";import{C as m,b as l}from"./container-C2hf7qd3.js";const f={title:"Theme / Tokens / Font Sizes"},n=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:"Font Sizes"}),e.jsx(m,{children:e.jsx(l,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:e.jsx(c,{each:Object.entries(i),children:([r,o],a)=>e.jsxs(s.Fragment,{children:[e.jsx(t,{children:r}),e.jsx(t,{color:"fg.muted",children:o}),e.jsx(t,{fontSize:r,children:"Ag"})]},a)})})})]});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const j=["Basic"];export{n as Basic,j as __namedExportsOrder,f as default};
