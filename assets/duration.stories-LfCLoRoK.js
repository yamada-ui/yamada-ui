import{j as n,V as r,N as o,T as s,bO as m}from"./iframe-6Bjnmk15.js";import{H as l}from"./heading-OelD6mpu.js";import{F as c}from"./for-DmT075i_.js";import{B as u}from"./box-CFI6uNm2.js";import{C as d,b as p}from"./container-DI8Ffr4s.js";import"./preload-helper-D9Z9MdNV.js";const T={title:"Theme / Tokens"},e=()=>n.jsxs(n.Fragment,{children:[n.jsx(l,{children:"Durations"}),n.jsx(d,{children:n.jsx(p,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:n.jsx(c,{each:Object.entries(m),children:([t,i],a)=>n.jsxs(r,{alignItems:"center",children:[n.jsx(o,{aspectRatio:1,w:"full",children:n.jsx(u,{animationDirection:"alternate",animationDuration:i,animationIterationCount:"infinite",animationName:"spin",animationTimingFunction:"ease-in-out",bg:"green",h:"1",w:"full"})}),n.jsx(s,{children:t})]},a)})})})]});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
