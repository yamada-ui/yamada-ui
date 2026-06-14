import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ev as t,Fa as n,Ff as r,Fl as i,Lf as a,Ma as o,Pa as s,Pf as c,Pl as l,Rf as u,Sn as d,Tn as f,X_ as p,Y_ as m,ja as h,ls as g,os as _,ss as v}from"./iframe-4z85howq.js";var y,b,x,S;e((()=>{l(),c(),_(),s(),h(),d(),a(),p(),y=t(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{children:`Durations`}),(0,y.jsx)(g,{children:(0,y.jsx)(v,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(n,{each:Object.entries(m),children:([e,t],n)=>(0,y.jsxs)(f,{alignItems:`center`,children:[(0,y.jsx)(r,{aspectRatio:1,w:`full`,children:(0,y.jsx)(i,{animationDirection:`alternate`,animationDuration:t,animationIterationCount:`infinite`,animationName:`spin`,animationTimingFunction:`ease-in-out`,bg:`green`,h:`1`,w:`full`})}),(0,y.jsx)(u,{children:e})]},n)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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