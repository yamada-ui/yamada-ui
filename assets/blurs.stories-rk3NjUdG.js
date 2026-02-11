import{j as e,W as n,T as t,cc as c}from"./iframe-FV6Pf4zG.js";import{H as x}from"./heading-CT3LVYzH.js";import{F as m}from"./for-v94cQqt1.js";import{C as u,b as p}from"./container-BrZsutBm.js";import"./preload-helper-C1FmrZbK.js";const j={title:"Theme / Tokens"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{children:"Blurs"}),e.jsx(u,{children:e.jsx(p,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.xs}, 1fr))",children:e.jsx(m,{each:Object.entries(c),children:([o,l],d)=>e.jsx(n,{aspectRatio:1,bg:"bg",bgImage:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90",bgSize:"cover",borderColor:"border.subtle",borderWidth:"1px",overflow:"hidden",rounded:"l2",children:e.jsxs(n,{backdropBlur:o,boxSize:"full",flexDirection:"column",children:[e.jsx(t,{children:o}),e.jsx(t,{children:l})]})},d)})})})]});var i,s,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <>
      <Heading>Blurs</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="repeat(auto-fill, minmax({sizes.xs}, 1fr))">
          <For each={Object.entries(blurs)}>
            {([token, value], index) => <Center key={index} aspectRatio={1} bg="bg" bgImage="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90" bgSize="cover" borderColor="border.subtle" borderWidth="1px" overflow="hidden" rounded="l2">
                <Center backdropBlur={token} boxSize="full" flexDirection="column">
                  <Text>{token}</Text>
                  <Text>{value}</Text>
                </Center>
              </Center>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const B=["Blurs"];export{r as Blurs,B as __namedExportsOrder,j as default};
