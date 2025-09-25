import{j as e,r as s,T as a,cg as u,ch as x,ci as p}from"./iframe-BToZTpox.js";import{H as i}from"./heading-D64Y19KZ.js";import{F as d}from"./for-uUJ5eupy.js";import{B as l}from"./box-C1VmAI8V.js";import{C as g,a as c,b as m}from"./container-BIaXOZVj.js";import"./preload-helper-D9Z9MdNV.js";const y={title:"Theme / Tokens"},o=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Sizes"}),e.jsxs(g,{children:[e.jsx(c,{children:e.jsx(i,{size:"2xl",children:"Tokens"})}),e.jsx(m,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(u).filter(([n])=>!isNaN(Number(n))).sort(([n],[r])=>parseInt(n)-parseInt(r)),children:([n,r],t)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:n,rounded:"l1"})]},t)})})]}),e.jsxs(g,{children:[e.jsx(c,{children:e.jsx(i,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(m,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(x).filter(([n])=>p(n)),children:([n,r],t)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:n,rounded:"l1"})]},t)})})]}),e.jsxs(g,{children:[e.jsx(c,{children:e.jsx(i,{size:"2xl",children:"Fractional Tokens"})}),e.jsx(m,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(x).filter(([n])=>n.includes("/")),children:([n,r],t)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:n,rounded:"l1"})]},t)})})]})]});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Sizes</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gapX="lg" gapY="md" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(sizes).filter(([key]) => !isNaN(Number(key))).sort(([a], [b]) => parseInt(a) - parseInt(b))}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={token} rounded="l1" />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Semantic Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gapX="lg" gapY="md" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(semanticSizes).filter(([key]) => isSize(key))}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={token} rounded="l1" />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Fractional Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gapX="lg" gapY="md" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(semanticSizes).filter(([key]) => key.includes("/"))}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={token} rounded="l1" />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...o.parameters?.docs?.source}}};const F=["Sizes"];export{o as Sizes,F as __namedExportsOrder,y as default};
