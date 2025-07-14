import{j as e,r as s,T as n,bB as i}from"./iframe-Cn-KGvUL.js";import{H as d}from"./heading-lDMaWbiz.js";import{F as c}from"./for-BdBeBw1j.js";import{C as g,b as l}from"./container-r00aTCSN.js";const u={title:"Theme / Tokens / Font Weights"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:"Font Weights"}),e.jsx(g,{children:e.jsx(l,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:e.jsx(c,{each:Object.entries(i),children:([r,o],a)=>e.jsxs(s.Fragment,{children:[e.jsx(n,{children:r}),e.jsx(n,{color:"fg.muted",children:o}),e.jsx(n,{fontSize:"2xl",fontWeight:r,children:"Ag"})]},a)})})})]});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const f=["Basic"];export{t as Basic,f as __namedExportsOrder,u as default};
