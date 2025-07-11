import{j as e,r as i,T as a,bL as x,bM as p}from"./iframe-Dqv37jui.js";import{H as o}from"./heading-DZTUzuGZ.js";import{F as d}from"./for-vxGyZb1G.js";import{B as l}from"./box-eZad9qV_.js";import{C as c,a as m,b as g}from"./container-BvUuGEvi.js";const f={title:"Theme / Tokens / Spaces"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Spaces"}),e.jsxs(c,{children:[e.jsx(m,{children:e.jsx(o,{size:"2xl",children:"Tokens"})}),e.jsx(g,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(x).filter(([n])=>!isNaN(Number(n))).sort(([n],[r])=>parseInt(n)-parseInt(r)),children:([n,r],s)=>e.jsxs(i.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:r,rounded:"l1"})]},s)})})]}),e.jsxs(c,{children:[e.jsx(m,{children:e.jsx(o,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(g,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(p),children:([n,r],s)=>e.jsxs(i.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:"full",rounded:"l1",w:r})]},s)})})]})]});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Spaces</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gapX="lg" gapY="md" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(spaces).filter(([key]) => !isNaN(Number(key))).sort(([a], [b]) => parseInt(a) - parseInt(b))}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={value} rounded="l1" />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Semantic Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gapX="lg" gapY="md" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(semanticSpaces)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW="full" rounded="l1" w={value} />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...t.parameters?.docs?.source}}};const b=["Basic"];export{t as Basic,b as __namedExportsOrder,f as default};
