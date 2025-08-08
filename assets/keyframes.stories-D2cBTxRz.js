import{j as n,V as t,K as a,T as r,bM as s}from"./iframe-Cz9Hkuf2.js";import{H as m}from"./heading-JI2tTkQW.js";import{F as l}from"./for-DDi6xP15.js";import{B as d}from"./box-B8YRHNqv.js";import{C as p,b as g}from"./container-DS2xkWS0.js";import"./preload-helper-D9Z9MdNV.js";const C={title:"Theme / Tokens / Keyframes"},i=()=>n.jsxs(n.Fragment,{children:[n.jsx(m,{children:"Keyframes"}),n.jsx(p,{children:n.jsx(g,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:n.jsx(l,{each:Object.entries(s),children:([e],o)=>n.jsxs(t,{alignItems:"center",gap:"sm",children:[n.jsx(a,{aspectRatio:1,bg:"bg",borderColor:"border.subtle",borderWidth:"1px",boxSize:"full",flexDirection:"column",overflow:"hidden",position:"relative",rounded:"l2",children:n.jsx(d,{css:{"--animation-from-x":"25%","--animation-from-y":"25%","--animation-height":"{sizes.12}","--animation-to-x":"50%","--animation-to-y":"50%","--animation-width":"{sizes.12}","--stripe-color":["rgba(255, 255, 255, 0.3)","rgba(0, 0, 0, 0.3)"]},animationDirection:e==="bg-position"?"normal":"alternate",animationDuration:"1s",animationIterationCount:"infinite",animationName:e,animationTimingFunction:e==="bg-position"?"linear":"ease-in-out",bg:"green",bgImage:e==="bg-position"?`linear-gradient(
                      45deg,
                      {stripe-color} 25%,
                      transparent 25%,
                      transparent 50%,
                      {stripe-color} 50%,
                      {stripe-color} 75%,
                      transparent 75%,
                      transparent
                    )`:void 0,bgSize:"1rem 1rem",boxSize:"12",position:"absolute",rounded:"l2"})}),n.jsx(r,{lineClamp:1,children:e})]},o)})})})]});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const y=["Basic"];export{i as Basic,y as __namedExportsOrder,C as default};
