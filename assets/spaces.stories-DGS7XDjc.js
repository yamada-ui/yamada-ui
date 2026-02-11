import{j as e,r as i,T as a,ct as h,cu as j}from"./iframe-FV6Pf4zG.js";import{H as s}from"./heading-CT3LVYzH.js";import{F as d}from"./for-v94cQqt1.js";import{B as l}from"./box-lmNTjs2t.js";import{C as c,a as m,b as g}from"./container-BrZsutBm.js";import"./preload-helper-C1FmrZbK.js";const F={title:"Theme / Tokens"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Spaces"}),e.jsxs(c,{children:[e.jsx(m,{children:e.jsx(s,{size:"2xl",children:"Tokens"})}),e.jsx(g,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(h).filter(([n])=>!isNaN(Number(n))).sort(([n],[r])=>parseInt(n)-parseInt(r)),children:([n,r],o)=>e.jsxs(i.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:n,rounded:"l1"})]},o)})})]}),e.jsxs(c,{children:[e.jsx(m,{children:e.jsx(s,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(g,{alignItems:"center",display:"grid",gapX:"lg",gapY:"md",gridTemplateColumns:"auto auto 1fr",children:e.jsx(d,{each:Object.entries(j),children:([n,r],o)=>e.jsxs(i.Fragment,{children:[e.jsx(a,{children:n}),e.jsx(a,{color:"fg.muted",children:r}),e.jsx(l,{bg:"green",h:"4",maxW:r,rounded:"l1"})]},o)})})]})]});var x,p,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const H=["Spaces"];export{t as Spaces,H as __namedExportsOrder,F as default};
