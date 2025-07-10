import{j as e,r as s,T as a,bJ as d,bK as u}from"./iframe-CzCJWi2Q.js";import{H as i}from"./heading-Db76muhr.js";import{F as l}from"./for-B9vVJZhr.js";import{B as g}from"./box-B7HQRlfK.js";import{C as x,a as c,b as m}from"./container-C2hf7qd3.js";const f={title:"Theme / Tokens / Sizes"},o=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Sizes"}),e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(i,{size:"2xl",children:"Tokens"})}),e.jsx(m,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(l,{each:Object.entries(d).filter(([n])=>!isNaN(Number(n))).sort(([n],[r])=>parseInt(n)-parseInt(r)),children:([n,r],t)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(g,{bg:"green",h:"4",maxW:r,rounded:"l1"})]},t)})})]}),e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(i,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(m,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(l,{each:Object.entries(d).filter(([n])=>u(n)),children:([n,r],t)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(g,{bg:"green",h:"4",maxW:r,rounded:"l1"})]},t)})})]}),e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(i,{size:"2xl",children:"Fractional Tokens"})}),e.jsx(m,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(l,{each:Object.entries(d).filter(([n])=>n.includes("/")),children:([n,r],t)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(g,{bg:"green",h:"4",maxW:r,rounded:"l1"})]},t)})})]})]});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
          <For each={Object.entries(sizes).filter(([key]) => isSize(key))}>
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
          <Heading size="2xl">Fractional Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gapX="lg" gapY="md" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(sizes).filter(([key]) => key.includes("/"))}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={value} rounded="l1" />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...o.parameters?.docs?.source}}};const k=["Basic"];export{o as Basic,k as __namedExportsOrder,f as default};
