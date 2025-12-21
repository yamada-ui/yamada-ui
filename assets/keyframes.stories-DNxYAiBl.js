import{j as n,V as s,W as m,T as l,cj as d}from"./iframe-LqombrNM.js";import{H as p}from"./heading-Bq_Y6181.js";import{F as g}from"./for-CkWl_ugB.js";import{B as c}from"./box-SUOSHoaG.js";import{C as b,b as x}from"./container-w9QzqZyP.js";import"./preload-helper-C1FmrZbK.js";const z={title:"Theme / Tokens"},i=()=>n.jsxs(n.Fragment,{children:[n.jsx(p,{children:"Keyframes"}),n.jsx(b,{children:n.jsx(x,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:n.jsx(g,{each:Object.entries(d),children:([e],a)=>n.jsxs(s,{alignItems:"center",gap:"sm",children:[n.jsx(m,{aspectRatio:1,bg:"bg",borderColor:"border.subtle",borderWidth:"1px",boxSize:"full",flexDirection:"column",overflow:"hidden",position:"relative",rounded:"l2",children:n.jsx(c,{css:{"--animation-from-x":"25%","--animation-from-y":"25%","--animation-height":"{sizes.12}","--animation-to-x":"50%","--animation-to-y":"50%","--animation-width":"{sizes.12}","--stripe-color":["rgba(255, 255, 255, 0.3)","rgba(0, 0, 0, 0.3)"]},animationDirection:e==="bg-position"?"normal":"alternate",animationDuration:"1s",animationIterationCount:"infinite",animationName:e,animationTimingFunction:e==="bg-position"?"linear":"ease-in-out",bg:"green",bgImage:e==="bg-position"?`linear-gradient(
                      45deg,
                      {stripe-color} 25%,
                      transparent 25%,
                      transparent 50%,
                      {stripe-color} 50%,
                      {stripe-color} 75%,
                      transparent 75%,
                      transparent
                    )`:void 0,bgSize:"1rem 1rem",boxSize:"12",position:"absolute",rounded:"l2"})}),n.jsx(l,{lineClamp:1,children:e})]},a)})})})]});var o,t,r;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(r=(t=i.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const S=["Keyframes"];export{i as Keyframes,S as __namedExportsOrder,z as default};
