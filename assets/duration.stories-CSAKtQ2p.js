import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-CioY78R0.js";import{t as r}from"./text-D0TQhQLQ.js";import{t as i}from"./center-3lj5pUDb.js";import{t as a}from"./center-DdX31IlC.js";import{Al as o,Cn as s,Fa as c,Ia as l,Lf as u,Ma as d,Na as f,Rf as p,cs as m,ds as h,jl as g,ls as _,wn as v}from"./iframe-BQRwcPv2.js";var y,b,x,S;e((()=>{o(),a(),m(),c(),d(),s(),r(),p(),y=t(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f,{children:`Durations`}),(0,y.jsx)(h,{children:(0,y.jsx)(_,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(l,{each:Object.entries(u),children:([e,t],r)=>(0,y.jsxs)(v,{alignItems:`center`,children:[(0,y.jsx)(i,{aspectRatio:1,w:`full`,children:(0,y.jsx)(g,{animationDirection:`alternate`,animationDuration:t,animationIterationCount:`infinite`,animationName:`spin`,animationTimingFunction:`ease-in-out`,bg:`green`,h:`1`,w:`full`})}),(0,y.jsx)(n,{children:e})]},r)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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