import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Cu as n,Du as r,Eu as i,Jr as a,Of as o,Ut as s,Xr as c,Zr as l,da as u,ds as d,kf as f,pa as p,pp as m,qr as h,ua as g,us as _,wu as v}from"./iframe-DfzTHUcv.js";var y,b,x,S;e((()=>{_(),n(),g(),c(),h(),t(),i(),o(),y=m(),b={title:`Theme / Tokens`},x=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{children:`Keyframes`}),(0,y.jsx)(p,{children:(0,y.jsx)(u,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,y.jsx)(l,{each:Object.entries(f),children:([e],t)=>(0,y.jsxs)(s,{alignItems:`center`,gap:`sm`,children:[(0,y.jsx)(v,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,boxSize:`full`,flexDirection:`column`,overflow:`hidden`,position:`relative`,rounded:`l2`,children:(0,y.jsx)(d,{css:{"--animation-from-x":`25%`,"--animation-from-y":`25%`,"--animation-height":`{sizes.12}`,"--animation-to-x":`50%`,"--animation-to-y":`50%`,"--animation-width":`{sizes.12}`,"--stripe-color":[`rgba(255, 255, 255, 0.3)`,`rgba(0, 0, 0, 0.3)`]},animationDirection:e===`bg-position`?`normal`:`alternate`,animationDuration:`1s`,animationIterationCount:`infinite`,animationName:e,animationTimingFunction:e===`bg-position`?`linear`:`ease-in-out`,bg:`green`,bgImage:e===`bg-position`?`linear-gradient(
                      45deg,
                      {stripe-color} 25%,
                      transparent 25%,
                      transparent 50%,
                      {stripe-color} 50%,
                      {stripe-color} 75%,
                      transparent 75%,
                      transparent
                    )`:void 0,bgSize:`1rem 1rem`,boxSize:`12`,position:`absolute`,rounded:`l2`})}),(0,y.jsx)(r,{lineClamp:1,children:e})]},t)})})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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