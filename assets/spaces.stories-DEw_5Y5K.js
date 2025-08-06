import{j as e,r as i,T as a,bU as x,bV as p}from"./iframe-BVYXOt_x.js";import{H as o}from"./heading-BUA-B32m.js";import{F as d}from"./for-Cq1AI6gw.js";import{B as l}from"./box-Bkdbk87i.js";import{C as c,a as m,b as g}from"./container-tsBrV9ac.js";import"./preload-helper-D9Z9MdNV.js";const b={title:"Theme / Tokens / Spaces"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Spaces"}),e.jsxs(c,{children:[e.jsx(m,{children:e.jsx(o,{size:"2xl",children:"Tokens"})}),e.jsx(g,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(x).filter(([n])=>!isNaN(Number(n))).sort(([n],[r])=>parseInt(n)-parseInt(r)),children:([n,r],s)=>e.jsxs(i.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:r,rounded:"l1"})]},s)})})]}),e.jsxs(c,{children:[e.jsx(m,{children:e.jsx(o,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(g,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(p),children:([n,r],s)=>e.jsxs(i.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:"full",rounded:"l1",w:r})]},s)})})]})]});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const k=["Basic"];export{t as Basic,k as __namedExportsOrder,b as default};
