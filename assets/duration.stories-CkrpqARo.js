import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{t as n}from"./text-ClYKebxE.js";import{t as r}from"./text-B2Y0ht7H.js";import{t as i}from"./center-BodL2_DM.js";import{t as a}from"./center-Clh7e36g.js";import{Aa as o,Ma as s,Na as c,Of as l,Ol as u,Sn as d,Tn as f,as as p,is as m,ka as h,kf as g,kl as _,ss as v}from"./iframe-QFtltEr1.js";var y,b,x,S;e((()=>{u(),a(),m(),s(),h(),d(),r(),g(),y=t(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{children:`Durations`}),(0,y.jsx)(v,{children:(0,y.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(c,{each:Object.entries(l),children:([e,t],r)=>(0,y.jsxs)(f,{alignItems:`center`,children:[(0,y.jsx)(i,{aspectRatio:1,w:`full`,children:(0,y.jsx)(_,{animationDirection:`alternate`,animationDuration:t,animationIterationCount:`infinite`,animationName:`spin`,animationTimingFunction:`ease-in-out`,bg:`green`,h:`1`,w:`full`})}),(0,y.jsx)(n,{children:e})]},r)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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