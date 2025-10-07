import{j as e,r as s,T as n,cc as i}from"./iframe-Dp_HdYH_.js";import{H as d}from"./heading-rI5evaQz.js";import{F as g}from"./for-B4pwjnZx.js";import{C as c,b as m}from"./container-CAAxzYjX.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Theme / Tokens"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:"Font Weights"}),e.jsx(c,{children:e.jsx(m,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:e.jsx(g,{each:Object.entries(i),children:([r,o],a)=>e.jsxs(s.Fragment,{children:[e.jsx(n,{children:r}),e.jsx(n,{color:"fg.muted",children:o}),e.jsx(n,{fontSize:"2xl",fontWeight:r,children:"Ag"})]},a)})})})]});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const j=["FontWeights"];export{t as FontWeights,j as __namedExportsOrder,f as default};
