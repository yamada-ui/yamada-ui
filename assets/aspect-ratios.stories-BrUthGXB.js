import{j as e,W as l,T as o,ca as c}from"./iframe-3lFlqlPN.js";import{H as m}from"./heading-DSztmhpV.js";import{F as p}from"./for-kQoYqs5h.js";import{C as x,b as g}from"./container-B7Bgdn6i.js";import"./preload-helper-C1FmrZbK.js";const j={title:"Theme / Tokens"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"Aspect Ratios"}),e.jsx(x,{children:e.jsx(g,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.xs}, 1fr))",children:e.jsx(p,{each:Object.entries(c),children:([t,i],d)=>e.jsxs(l,{aspectRatio:t,bg:"bg",borderColor:"border.subtle",borderWidth:"1px",flexDirection:"column",rounded:"l2",children:[e.jsx(o,{children:t}),e.jsx(o,{color:"fg.muted",children:i})]},d)})})})]});var n,s,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <>
      <Heading>Aspect Ratios</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="repeat(auto-fill, minmax({sizes.xs}, 1fr))">
          <For each={Object.entries(aspectRatios)}>
            {([token, value], index) => <Center key={index} aspectRatio={token} bg="bg" borderColor="border.subtle" borderWidth="1px" flexDirection="column" rounded="l2">
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </Center>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const R=["AspectRatios"];export{r as AspectRatios,R as __namedExportsOrder,j as default};
