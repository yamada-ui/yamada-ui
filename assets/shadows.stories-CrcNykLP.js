import{j as e,E as t,T as a,bK as s}from"./iframe-BbB59fLB.js";import{H as i}from"./heading-DTYqldnT.js";import{F as d}from"./for-JwY7aMwm.js";import{C as l,b as c}from"./container-D7n_2PY_.js";const h={title:"Theme / Tokens / Shadows"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Shadows"}),e.jsx(l,{children:e.jsx(c,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.4xs}, 1fr))",children:e.jsx(d,{each:Object.entries(s),children:([o],n)=>e.jsx(t,{aspectRatio:1,bg:"bg",borderColor:"border.subtle",borderWidth:"1px",boxShadow:o,flexDirection:"column",rounded:"l2",children:e.jsx(a,{children:o})},n)})})})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const b=["Basic"];export{r as Basic,b as __namedExportsOrder,h as default};
