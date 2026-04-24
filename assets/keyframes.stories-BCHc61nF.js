import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{n,t as r}from"./keyframes-eM76wJsq.js";import{t as i}from"./text-DSMMc5B6.js";import{t as a}from"./text-BM4F8FHS.js";import{t as o}from"./center-B9iB-Iph.js";import{t as s}from"./center-DwGXhAh8.js";import{t as c}from"./box-D_8v7EGt.js";import{t as l}from"./heading-DnIVTUkI.js";import{r as u}from"./z-stack-D_lbkXhr.js";import{Dt as d,Fo as f,Gi as p,Hr as m,Ur as h,Wi as g,Wr as _,qi as v}from"./iframe-EKcHb3H8.js";var y,b,x,S;e((()=>{f(),s(),g(),h(),m(),d(),a(),r(),y=t(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{children:`Keyframes`}),(0,y.jsx)(v,{children:(0,y.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(_,{each:Object.entries(n),children:([e],t)=>(0,y.jsxs)(u,{alignItems:`center`,gap:`sm`,children:[(0,y.jsx)(o,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,boxSize:`full`,flexDirection:`column`,overflow:`hidden`,position:`relative`,rounded:`l2`,children:(0,y.jsx)(c,{css:{"--animation-from-x":`25%`,"--animation-from-y":`25%`,"--animation-height":`{sizes.12}`,"--animation-to-x":`50%`,"--animation-to-y":`50%`,"--animation-width":`{sizes.12}`,"--stripe-color":[`rgba(255, 255, 255, 0.3)`,`rgba(0, 0, 0, 0.3)`]},animationDirection:e===`bg-position`?`normal`:`alternate`,animationDuration:`1s`,animationIterationCount:`infinite`,animationName:e,animationTimingFunction:e===`bg-position`?`linear`:`ease-in-out`,bg:`green`,bgImage:e===`bg-position`?`linear-gradient(
                      45deg,
                      {stripe-color} 25%,
                      transparent 25%,
                      transparent 50%,
                      {stripe-color} 50%,
                      {stripe-color} 75%,
                      transparent 75%,
                      transparent
                    )`:void 0,bgSize:`1rem 1rem`,boxSize:`12`,position:`absolute`,rounded:`l2`})}),(0,y.jsx)(i,{lineClamp:1,children:e})]},t)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Keyframes</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))">
          <For each={Object.entries(keyframes)}>
            {([token], index) => <VStack key={index} alignItems="center" gap="sm">
                <Center aspectRatio={1} bg="bg" borderColor="border.subtle" borderWidth="1px" boxSize="full" flexDirection="column" overflow="hidden" position="relative" rounded="l2">
                  <Box css={{
                "--animation-from-x": "25%",
                "--animation-from-y": "25%",
                "--animation-height": "{sizes.12}",
                "--animation-to-x": "50%",
                "--animation-to-y": "50%",
                "--animation-width": "{sizes.12}",
                "--stripe-color": ["rgba(255, 255, 255, 0.3)", "rgba(0, 0, 0, 0.3)"]
              }} animationDirection={token === "bg-position" ? "normal" : "alternate"} animationDuration="1s" animationIterationCount="infinite" animationName={token} animationTimingFunction={token === "bg-position" ? "linear" : "ease-in-out"} bg="green" bgImage={token === "bg-position" ? \`linear-gradient(
                      45deg,
                      {stripe-color} 25%,
                      transparent 25%,
                      transparent 50%,
                      {stripe-color} 50%,
                      {stripe-color} 75%,
                      transparent 75%,
                      transparent
                    )\` : undefined} bgSize="1rem 1rem" boxSize="12" position="absolute" rounded="l2" />
                </Center>

                <Text lineClamp={1}>{token}</Text>
              </VStack>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...x.parameters?.docs?.source}}},S=[`Keyframes`]}))();export{x as Keyframes,S as __namedExportsOrder,b as default};