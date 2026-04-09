import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Cu as n,Du as r,Eu as i,Jr as a,Rf as o,Ut as s,Xr as c,Zr as l,da as u,ds as d,pa as f,pp as p,qr as m,ua as h,us as g,wu as _,zf as v}from"./iframe-yoIXfJPu.js";var y,b,x,S;e((()=>{g(),n(),h(),c(),m(),t(),i(),v(),y=p(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{children:`Durations`}),(0,y.jsx)(f,{children:(0,y.jsx)(u,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(l,{each:Object.entries(o),children:([e,t],n)=>(0,y.jsxs)(s,{alignItems:`center`,children:[(0,y.jsx)(_,{aspectRatio:1,w:`full`,children:(0,y.jsx)(d,{animationDirection:`alternate`,animationDuration:t,animationIterationCount:`infinite`,animationName:`spin`,animationTimingFunction:`ease-in-out`,bg:`green`,h:`1`,w:`full`})}),(0,y.jsx)(r,{children:e})]},n)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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