import{j as e,r as i,T as a,cr as x,cs as p}from"./iframe-5QspZtQ-.js";import{H as o}from"./heading-DabtuQYj.js";import{F as d}from"./for-DDltKb5N.js";import{B as l}from"./box--AjZ-gTJ.js";import{C as c,a as m,b as g}from"./container-iAGLOHR0.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Theme / Tokens"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Spaces"}),e.jsxs(c,{children:[e.jsx(m,{children:e.jsx(o,{size:"2xl",children:"Tokens"})}),e.jsx(g,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(x).filter(([n])=>!isNaN(Number(n))).sort(([n],[r])=>parseInt(n)-parseInt(r)),children:([n,r],s)=>e.jsxs(i.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:n,rounded:"l1"})]},s)})})]}),e.jsxs(c,{children:[e.jsx(m,{children:e.jsx(o,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(g,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(p),children:([n,r],s)=>e.jsxs(i.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:r,rounded:"l1"})]},s)})})]})]});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
          <For each={Object.entries(semanticSpaces)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={value} rounded="l1" />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...t.parameters?.docs?.source}}};const k=["Spaces"];export{t as Spaces,k as __namedExportsOrder,b as default};
