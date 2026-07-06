import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-wFqrq6bG.js";import{t as r}from"./text-hCwie9gl.js";import{t as i}from"./center-CXtQvNiW.js";import{t as a}from"./center-t5sr6STJ.js";import{Fl as o,Hf as s,Ia as c,La as l,Na as u,Pa as d,Pl as f,Tn as p,Vf as m,fs as h,hs as g,ps as _,wn as v}from"./iframe-D00dh1DN.js";var y,b,x,S;e((()=>{f(),a(),h(),c(),u(),v(),r(),s(),y=t(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d,{children:`Durations`}),(0,y.jsx)(g,{children:(0,y.jsx)(_,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(l,{each:Object.entries(m),children:([e,t],r)=>(0,y.jsxs)(p,{alignItems:`center`,children:[(0,y.jsx)(i,{aspectRatio:1,w:`full`,children:(0,y.jsx)(o,{animationDirection:`alternate`,animationDuration:t,animationIterationCount:`infinite`,animationName:`spin`,animationTimingFunction:`ease-in-out`,bg:`green`,h:`1`,w:`full`})}),(0,y.jsx)(n,{children:e})]},r)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}},S=[`Durations`]}))();export{x as Durations,S as __namedExportsOrder,b as default};