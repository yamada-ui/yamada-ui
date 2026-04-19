import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Cp as n,Fa as r,Fs as i,La as a,Lt as o,Pa as s,Ps as c,Sp as l,au as u,gi as d,hi as f,nu as p,ou as m,ru as h,sm as g,vi as _,yi as v}from"./iframe-CXDvaz-K.js";var y,b,x,S;e((()=>{c(),p(),s(),_(),f(),o(),u(),l(),y=g(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d,{children:`Keyframes`}),(0,y.jsx)(a,{children:(0,y.jsx)(r,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(v,{each:Object.entries(n),children:([e],n)=>(0,y.jsxs)(t,{alignItems:`center`,gap:`sm`,children:[(0,y.jsx)(h,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,boxSize:`full`,flexDirection:`column`,overflow:`hidden`,position:`relative`,rounded:`l2`,children:(0,y.jsx)(i,{css:{"--animation-from-x":`25%`,"--animation-from-y":`25%`,"--animation-height":`{sizes.12}`,"--animation-to-x":`50%`,"--animation-to-y":`50%`,"--animation-width":`{sizes.12}`,"--stripe-color":[`rgba(255, 255, 255, 0.3)`,`rgba(0, 0, 0, 0.3)`]},animationDirection:e===`bg-position`?`normal`:`alternate`,animationDuration:`1s`,animationIterationCount:`infinite`,animationName:e,animationTimingFunction:e===`bg-position`?`linear`:`ease-in-out`,bg:`green`,bgImage:e===`bg-position`?`linear-gradient(
                      45deg,
                      {stripe-color} 25%,
                      transparent 25%,
                      transparent 50%,
                      {stripe-color} 50%,
                      {stripe-color} 75%,
                      transparent 75%,
                      transparent
                    )`:void 0,bgSize:`1rem 1rem`,boxSize:`12`,position:`absolute`,rounded:`l2`})}),(0,y.jsx)(m,{lineClamp:1,children:e})]},n)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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