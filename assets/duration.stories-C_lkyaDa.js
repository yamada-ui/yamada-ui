import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./durations-xoaFeuRh.js";import{n as i,t as a}from"./text-Dqlf99YJ.js";import{n as o,t as s}from"./center-ClNDKGw_.js";import{n as c,t as l}from"./box-C85ajMHC.js";import{i as u,r as d,t as f}from"./container-ZTgWYDQH.js";import{n as p,t as m}from"./for-CbSj9DmS.js";import{n as h,t as g}from"./heading-DFJsy6_R.js";import{n as _,t as v}from"./v-stack-Du6arc5F.js";var y,b,x,S;function C(){return(C=e((()=>{c(),o(),u(),p(),h(),_(),i(),n(),y=t(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{children:`Durations`}),(0,y.jsx)(d,{children:(0,y.jsx)(f,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(m,{each:Object.entries(r),children:([e,t],n)=>(0,y.jsxs)(v,{alignItems:`center`,children:[(0,y.jsx)(s,{aspectRatio:1,w:`full`,children:(0,y.jsx)(l,{animationDirection:`alternate`,animationDuration:t,animationIterationCount:`infinite`,animationName:`spin`,animationTimingFunction:`ease-in-out`,bg:`green`,h:`1`,w:`full`})}),(0,y.jsx)(a,{children:e})]},n)})})})]}),S=[`Durations`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Durations,S as __namedExportsOrder,b as default};