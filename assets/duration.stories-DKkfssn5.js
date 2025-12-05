import{j as n,V as m,W as l,T as c,ce as u}from"./iframe-BIJNUwA0.js";import{H as d}from"./heading-Bz9uY6e0.js";import{F as p}from"./for-Cpsr9B86.js";import{B as x}from"./box-C2FMWqo9.js";import{C as g,b as f}from"./container-DKsQu7Bz.js";import"./preload-helper-C1FmrZbK.js";const F={title:"Theme / Tokens"},e=()=>n.jsxs(n.Fragment,{children:[n.jsx(d,{children:"Durations"}),n.jsx(g,{children:n.jsx(f,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:n.jsx(p,{each:Object.entries(u),children:([r,o],s)=>n.jsxs(m,{alignItems:"center",children:[n.jsx(l,{aspectRatio:1,w:"full",children:n.jsx(x,{animationDirection:"alternate",animationDuration:o,animationIterationCount:"infinite",animationName:"spin",animationTimingFunction:"ease-in-out",bg:"green",h:"1",w:"full"})}),n.jsx(c,{children:r})]},s)})})})]});var t,i,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <>
      <Heading>Durations</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))">
          <For each={Object.entries(durations)}>
            {([token, value], index) => <VStack key={index} alignItems="center">
                <Center aspectRatio={1} w="full">
                  <Box animationDirection="alternate" animationDuration={value} animationIterationCount="infinite" animationName="spin" animationTimingFunction="ease-in-out" bg="green" h="1" w="full" />
                </Center>

                <Text>{token}</Text>
              </VStack>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const y=["Durations"];export{e as Durations,y as __namedExportsOrder,F as default};
