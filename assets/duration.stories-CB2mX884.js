import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Fa as n,Fs as r,La as i,Lt as a,Mp as o,Np as s,Pa as c,Ps as l,au as u,gi as d,hi as f,nu as p,ou as m,ru as h,sm as g,vi as _,yi as v}from"./iframe-CHoZGzMw.js";var y,b,x,S;e((()=>{l(),p(),c(),_(),f(),a(),u(),s(),y=g(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d,{children:`Durations`}),(0,y.jsx)(i,{children:(0,y.jsx)(n,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(v,{each:Object.entries(o),children:([e,n],i)=>(0,y.jsxs)(t,{alignItems:`center`,children:[(0,y.jsx)(h,{aspectRatio:1,w:`full`,children:(0,y.jsx)(r,{animationDirection:`alternate`,animationDuration:n,animationIterationCount:`infinite`,animationName:`spin`,animationTimingFunction:`ease-in-out`,bg:`green`,h:`1`,w:`full`})}),(0,y.jsx)(m,{children:e})]},i)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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