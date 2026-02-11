import{j as e,W as s,T as r,cn as u,co as b}from"./iframe-FV6Pf4zG.js";import{H as a}from"./heading-CT3LVYzH.js";import{F as d}from"./for-v94cQqt1.js";import{C as l,a as c,b as x}from"./container-BrZsutBm.js";import"./preload-helper-C1FmrZbK.js";const R={title:"Theme / Tokens"},i=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Radii"}),e.jsxs(l,{children:[e.jsx(c,{children:e.jsx(a,{size:"2xl",children:"Tokens"})}),e.jsx(x,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:e.jsx(d,{each:Object.entries(u),children:([n,o],t)=>e.jsxs(s,{aspectRatio:1,bg:"bg",borderColor:"border.subtle",borderWidth:"1px",flexDirection:"column",rounded:n,children:[e.jsx(r,{children:n}),e.jsx(r,{color:"fg.muted",children:o})]},t)})})]}),e.jsxs(l,{children:[e.jsx(c,{children:e.jsx(a,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(x,{alignItems:"center",display:"grid",gap:"xl",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:e.jsx(d,{each:Object.entries(b),children:([n,o],t)=>e.jsxs(s,{aspectRatio:1,bg:"bg",borderColor:"border.subtle",borderWidth:"1px",flexDirection:"column",rounded:n,children:[e.jsx(r,{children:n}),e.jsx(r,{color:"fg.muted",children:o})]},t)})})]})]});var m,g,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(p=(g=i.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const H=["Radii"];export{i as Radii,H as __namedExportsOrder,R as default};
