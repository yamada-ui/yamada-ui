import{j as e,K as n,T as t,bI as s}from"./iframe-DkaXVr_9.js";import{H as l}from"./heading-CmJx7P9m.js";import{F as d}from"./for-DxIEhtdT.js";import{C as c,b as x}from"./container-DSBYOQMF.js";import"./preload-helper-D9Z9MdNV.js";const g={title:"Theme / Tokens / Blurs"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Blurs"}),e.jsx(c,{children:e.jsx(x,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.xs}, 1fr))",children:e.jsx(d,{each:Object.entries(s),children:([o,i],a)=>e.jsx(n,{aspectRatio:1,bg:"bg",bgImage:"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90",bgSize:"cover",borderColor:"border.subtle",borderWidth:"1px",overflow:"hidden",rounded:"l2",children:e.jsxs(n,{backdropBlur:o,boxSize:"full",flexDirection:"column",children:[e.jsx(t,{children:o}),e.jsx(t,{children:i})]})},a)})})})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const h=["Basic"];export{r as Basic,h as __namedExportsOrder,g as default};
