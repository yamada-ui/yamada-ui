import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,Fa as n,Ff as r,Fl as i,If as a,Il as o,Ma as s,Pa as c,Rf as l,Sn as u,Tn as d,X_ as f,Z_ as p,ja as m,ls as h,os as g,ss as _,zf as v}from"./iframe-B_RvmxW5.js";var y,b,x,S;e((()=>{i(),r(),g(),c(),m(),u(),l(),p(),y=t(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{children:`Durations`}),(0,y.jsx)(h,{children:(0,y.jsx)(_,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(n,{each:Object.entries(f),children:([e,t],n)=>(0,y.jsxs)(d,{alignItems:`center`,children:[(0,y.jsx)(a,{aspectRatio:1,w:`full`,children:(0,y.jsx)(o,{animationDirection:`alternate`,animationDuration:t,animationIterationCount:`infinite`,animationName:`spin`,animationTimingFunction:`ease-in-out`,bg:`green`,h:`1`,w:`full`})}),(0,y.jsx)(v,{children:e})]},n)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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