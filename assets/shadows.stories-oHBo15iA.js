import{j as e,K as t,T as a,bV as s}from"./iframe-XeUDGc9-.js";import{H as i}from"./heading-C-Rlsbfa.js";import{F as d}from"./for-DJHVjIWJ.js";import{C as l,b as m}from"./container-C9ZHO5RG.js";import"./preload-helper-D9Z9MdNV.js";const b={title:"Theme / Tokens"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Shadows"}),e.jsx(l,{children:e.jsx(m,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:e.jsx(d,{each:Object.entries(s),children:([o],n)=>e.jsx(t,{aspectRatio:1,bg:"bg",borderColor:"border.subtle",borderWidth:"1px",boxShadow:o,flexDirection:"column",rounded:"l2",children:e.jsx(a,{children:o})},n)})})})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const u=["Shadows"];export{r as Shadows,u as __namedExportsOrder,b as default};
