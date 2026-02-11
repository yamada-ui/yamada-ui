import{j as e,W as i,T as d,cp as l}from"./iframe-FV6Pf4zG.js";import{H as m}from"./heading-CT3LVYzH.js";import{F as c}from"./for-v94cQqt1.js";import{C as x,b as p}from"./container-BrZsutBm.js";import"./preload-helper-C1FmrZbK.js";const f={title:"Theme / Tokens"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Shadows"}),e.jsx(x,{children:e.jsx(p,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:e.jsx(c,{each:Object.entries(l),children:([o],s)=>e.jsx(i,{aspectRatio:1,bg:"bg",borderColor:"border.subtle",borderWidth:"1px",boxShadow:o,flexDirection:"column",rounded:"l2",children:e.jsx(d,{children:o})},s)})})})]});var n,t,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <>
      <Heading>Shadows</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))">
          <For each={Object.entries(shadows)}>
            {([token], index) => <Center key={index} aspectRatio={1} bg="bg" borderColor="border.subtle" borderWidth="1px" boxShadow={token} flexDirection="column" rounded="l2">
                <Text>{token}</Text>
              </Center>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const j=["Shadows"];export{r as Shadows,j as __namedExportsOrder,f as default};
