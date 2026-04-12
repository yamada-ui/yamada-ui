import{n as e}from"./chunk-zsgVPwQN.js";import{Ap as t,Bt as n,Fa as r,Lt as i,Ma as a,Ms as o,Na as s,Ns as c,eu as l,gi as u,hi as d,im as f,iu as p,kp as m,ru as h,tu as g,vi as _,yi as v}from"./iframe-Opp2JRxh.js";var y,b,x,S;e((()=>{o(),l(),a(),_(),d(),i(),h(),t(),y=f(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u,{children:`Durations`}),(0,y.jsx)(r,{children:(0,y.jsx)(s,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(v,{each:Object.entries(m),children:([e,t],r)=>(0,y.jsxs)(n,{alignItems:`center`,children:[(0,y.jsx)(g,{aspectRatio:1,w:`full`,children:(0,y.jsx)(c,{animationDirection:`alternate`,animationDuration:t,animationIterationCount:`infinite`,animationName:`spin`,animationTimingFunction:`ease-in-out`,bg:`green`,h:`1`,w:`full`})}),(0,y.jsx)(p,{children:e})]},r)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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