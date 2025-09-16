import{j as e,r as s,T as n,c3 as i}from"./iframe-Brv718Ke.js";import{H as d}from"./heading-DLtRtgvj.js";import{F as m}from"./for-y9tZyjCV.js";import{B as c}from"./box-DZwUCUPQ.js";import{C as l,b as x}from"./container-lA0O-IzW.js";import"./preload-helper-D9Z9MdNV.js";const f={title:"Theme / Tokens"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:"Borders"}),e.jsx(l,{children:e.jsx(x,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:e.jsx(m,{each:Object.entries(i),children:([o,t],a)=>e.jsxs(s.Fragment,{children:[e.jsx(n,{children:o}),e.jsx(n,{color:"fg.muted",children:t}),e.jsx(c,{borderTop:o})]},a)})})})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const B=["Borders"];export{r as Borders,B as __namedExportsOrder,f as default};
