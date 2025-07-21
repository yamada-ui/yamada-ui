import{j as e,r as s,T as n,bA as i}from"./iframe-BbB59fLB.js";import{H as d}from"./heading-DTYqldnT.js";import{F as m}from"./for-JwY7aMwm.js";import{B as c}from"./box-B5PL6uw9.js";import{C as l,b as x}from"./container-D7n_2PY_.js";const h={title:"Theme / Tokens / Borders"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:"Borders"}),e.jsx(l,{children:e.jsx(x,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:e.jsx(m,{each:Object.entries(i),children:([o,t],a)=>e.jsxs(s.Fragment,{children:[e.jsx(n,{children:o}),e.jsx(n,{color:"fg.muted",children:t}),e.jsx(c,{borderTop:o})]},a)})})})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Borders</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(borders)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box borderTop={token} />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...r.parameters?.docs?.source}}};const B=["Basic"];export{r as Basic,B as __namedExportsOrder,h as default};
