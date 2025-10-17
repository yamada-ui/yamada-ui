import{j as n,V as r,Z as o,T as s,ca as m}from"./iframe-BynoZ0Oq.js";import{H as l}from"./heading-Dpwm0c5v.js";import{F as c}from"./for-BimcTw3e.js";import{B as u}from"./box-DUrQbhTM.js";import{C as d,b as p}from"./container-2ETrBI-d.js";import"./preload-helper-PPVm8Dsz.js";const T={title:"Theme / Tokens"},e=()=>n.jsxs(n.Fragment,{children:[n.jsx(l,{children:"Durations"}),n.jsx(d,{children:n.jsx(p,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:n.jsx(c,{each:Object.entries(m),children:([t,a],i)=>n.jsxs(r,{alignItems:"center",children:[n.jsx(o,{aspectRatio:1,w:"full",children:n.jsx(u,{animationDirection:"alternate",animationDuration:a,animationIterationCount:"infinite",animationName:"spin",animationTimingFunction:"ease-in-out",bg:"green",h:"1",w:"full"})}),n.jsx(s,{children:t})]},i)})})})]});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const D=["Durations"];export{e as Durations,D as __namedExportsOrder,T as default};
