import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./keyframes-BZ3TTj8r.js";import{n as i,t as a}from"./text-b2W5euYI.js";import{n as o,t as s}from"./center-C6NHygeb.js";import{n as c,t as l}from"./box-C47iDJeO.js";import{i as u,r as d,t as f}from"./container-C5kWx763.js";import{n as p,t as m}from"./for-BIl9Q3L3.js";import{n as h,t as g}from"./heading-mQlbK6e0.js";import{n as _,t as v}from"./v-stack-DgxvBjIl.js";var y,b,x,S;function C(){return(C=e((()=>{c(),o(),u(),p(),h(),_(),i(),r(),y=t(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{children:`Keyframes`}),(0,y.jsx)(d,{children:(0,y.jsx)(f,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(m,{each:Object.entries(n),children:([e],t)=>(0,y.jsxs)(v,{alignItems:`center`,gap:`sm`,children:[(0,y.jsx)(s,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,boxSize:`full`,flexDirection:`column`,overflow:`hidden`,position:`relative`,rounded:`l2`,children:(0,y.jsx)(l,{css:{"--animation-from-x":`25%`,"--animation-from-y":`25%`,"--animation-height":`{sizes.12}`,"--animation-to-x":`50%`,"--animation-to-y":`50%`,"--animation-width":`{sizes.12}`,"--stripe-color":[`rgba(255, 255, 255, 0.3)`,`rgba(0, 0, 0, 0.3)`]},animationDirection:e===`bg-position`?`normal`:`alternate`,animationDuration:`1s`,animationIterationCount:`infinite`,animationName:e,animationTimingFunction:e===`bg-position`?`linear`:`ease-in-out`,bg:`green`,bgImage:e===`bg-position`?`linear(
                      45deg,
                      {stripe-color} 25%,
                      transparent 25%,
                      transparent 50%,
                      {stripe-color} 50%,
                      {stripe-color} 75%,
                      transparent 75%,
                      transparent
                    )`:void 0,bgSize:`1rem 1rem`,boxSize:`12`,position:`absolute`,rounded:`l2`})}),(0,y.jsx)(a,{lineClamp:1,children:e})]},t)})})})]}),S=[`Keyframes`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
              }} animationDirection={token === "bg-position" ? "normal" : "alternate"} animationDuration="1s" animationIterationCount="infinite" animationName={token} animationTimingFunction={token === "bg-position" ? "linear" : "ease-in-out"} bg="green" bgImage={token === "bg-position" ? \`linear(
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Keyframes,S as __namedExportsOrder,b as default};