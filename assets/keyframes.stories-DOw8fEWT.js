import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{t as n}from"./text-D-jnAopL.js";import{t as r}from"./text-DV5bCi2n.js";import{t as i}from"./center-DFRfqJq4.js";import{t as a}from"./center-Ctl81hnc.js";import{Aa as o,Ma as s,Na as c,Ol as l,Sn as u,Tn as d,as as f,is as p,ka as m,kl as h,ss as g,vf as _,yf as v}from"./iframe-CgnmJX3j.js";var y,b,x,S;e((()=>{l(),a(),p(),s(),m(),u(),r(),_(),y=t(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{children:`Keyframes`}),(0,y.jsx)(g,{children:(0,y.jsx)(f,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(c,{each:Object.entries(v),children:([e],t)=>(0,y.jsxs)(d,{alignItems:`center`,gap:`sm`,children:[(0,y.jsx)(i,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,boxSize:`full`,flexDirection:`column`,overflow:`hidden`,position:`relative`,rounded:`l2`,children:(0,y.jsx)(h,{css:{"--animation-from-x":`25%`,"--animation-from-y":`25%`,"--animation-height":`{sizes.12}`,"--animation-to-x":`50%`,"--animation-to-y":`50%`,"--animation-width":`{sizes.12}`,"--stripe-color":[`rgba(255, 255, 255, 0.3)`,`rgba(0, 0, 0, 0.3)`]},animationDirection:e===`bg-position`?`normal`:`alternate`,animationDuration:`1s`,animationIterationCount:`infinite`,animationName:e,animationTimingFunction:e===`bg-position`?`linear`:`ease-in-out`,bg:`green`,bgImage:e===`bg-position`?`linear-gradient(
                      45deg,
                      {stripe-color} 25%,
                      transparent 25%,
                      transparent 50%,
                      {stripe-color} 50%,
                      {stripe-color} 75%,
                      transparent 75%,
                      transparent
                    )`:void 0,bgSize:`1rem 1rem`,boxSize:`12`,position:`absolute`,rounded:`l2`})}),(0,y.jsx)(n,{lineClamp:1,children:e})]},t)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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