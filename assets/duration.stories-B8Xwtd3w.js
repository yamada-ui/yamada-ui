import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{n,t as r}from"./durations-AbQcW8Gx.js";import{t as i}from"./text-DSMMc5B6.js";import{t as a}from"./text-BM4F8FHS.js";import{t as o}from"./center-B9iB-Iph.js";import{t as s}from"./center-DwGXhAh8.js";import{t as c}from"./box-D_8v7EGt.js";import{t as l}from"./heading-DnIVTUkI.js";import{r as u}from"./z-stack-D_lbkXhr.js";import{Dt as d,Fo as f,Gi as p,Hr as m,Ur as h,Wi as g,Wr as _,qi as v}from"./iframe-tUvmHr7L.js";var y,b,x,S;e((()=>{f(),s(),g(),h(),m(),d(),a(),n(),y=t(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{children:`Durations`}),(0,y.jsx)(v,{children:(0,y.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(_,{each:Object.entries(r),children:([e,t],n)=>(0,y.jsxs)(u,{alignItems:`center`,children:[(0,y.jsx)(o,{aspectRatio:1,w:`full`,children:(0,y.jsx)(c,{animationDirection:`alternate`,animationDuration:t,animationIterationCount:`infinite`,animationName:`spin`,animationTimingFunction:`ease-in-out`,bg:`green`,h:`1`,w:`full`})}),(0,y.jsx)(i,{children:e})]},n)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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