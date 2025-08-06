import{j as e,E as s,T as r,bP as m,bQ as g}from"./iframe-BVYXOt_x.js";import{H as a}from"./heading-BUA-B32m.js";import{F as d}from"./for-Cq1AI6gw.js";import{C as l,a as c,b as x}from"./container-tsBrV9ac.js";import"./preload-helper-D9Z9MdNV.js";const j={title:"Theme / Tokens / Radii"},i=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Radii"}),e.jsxs(l,{children:[e.jsx(c,{children:e.jsx(a,{size:"2xl",children:"Tokens"})}),e.jsx(x,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:e.jsx(d,{each:Object.entries(m),children:([n,o],t)=>e.jsxs(s,{aspectRatio:1,bg:"bg",borderColor:"border.subtle",borderWidth:"1px",flexDirection:"column",rounded:n,children:[e.jsx(r,{children:n}),e.jsx(r,{color:"fg.muted",children:o})]},t)})})]}),e.jsxs(l,{children:[e.jsx(c,{children:e.jsx(a,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(x,{alignItems:"center",display:"grid",gap:"xl",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:e.jsx(d,{each:Object.entries(g),children:([n,o],t)=>e.jsxs(s,{aspectRatio:1,bg:"bg",borderColor:"border.subtle",borderWidth:"1px",flexDirection:"column",rounded:n,children:[e.jsx(r,{children:n}),e.jsx(r,{color:"fg.muted",children:o})]},t)})})]})]});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Radii</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))">
          <For each={Object.entries(radii)}>
            {([token, value], index) => <Center key={index} aspectRatio={1} bg="bg" borderColor="border.subtle" borderWidth="1px" flexDirection="column" rounded={token}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </Center>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Semantic Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gap="xl" gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))">
          <For each={Object.entries(semanticRadii)}>
            {([token, value], index) => <Center key={index} aspectRatio={1} bg="bg" borderColor="border.subtle" borderWidth="1px" flexDirection="column" rounded={token}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </Center>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...i.parameters?.docs?.source}}};const f=["Basic"];export{i as Basic,f as __namedExportsOrder,j as default};
