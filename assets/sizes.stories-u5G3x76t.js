import{j as e,r as s,T as a,bZ as u,b_ as c,b$ as p}from"./iframe-6Bjnmk15.js";import{H as i}from"./heading-OelD6mpu.js";import{F as d}from"./for-DmT075i_.js";import{B as l}from"./box-CFI6uNm2.js";import{C as g,a as m,b as x}from"./container-DI8Ffr4s.js";import"./preload-helper-D9Z9MdNV.js";const y={title:"Theme / Tokens"},o=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Sizes"}),e.jsxs(g,{children:[e.jsx(m,{children:e.jsx(i,{size:"2xl",children:"Tokens"})}),e.jsx(x,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(u).filter(([n])=>!isNaN(Number(n))).sort(([n],[r])=>parseInt(n)-parseInt(r)),children:([n,r],t)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:n,rounded:"l1"})]},t)})})]}),e.jsxs(g,{children:[e.jsx(m,{children:e.jsx(i,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(x,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(c).filter(([n])=>p(n)),children:([n,r],t)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:n,rounded:"l1"})]},t)})})]}),e.jsxs(g,{children:[e.jsx(m,{children:e.jsx(i,{size:"2xl",children:"Fractional Tokens"})}),e.jsx(x,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(c).filter(([n])=>n.includes("/")),children:([n,r],t)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:n,rounded:"l1"})]},t)})})]})]});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const b=["Sizes"];export{o as Sizes,b as __namedExportsOrder,y as default};
