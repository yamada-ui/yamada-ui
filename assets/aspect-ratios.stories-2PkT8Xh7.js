import{j as e,Z as a,T as o,c6 as i}from"./iframe-DlW9lece.js";import{H as d}from"./heading-BVtzxnUn.js";import{F as l}from"./for-Bbje7Nyp.js";import{C as c,b as m}from"./container-DrplEQY2.js";import"./preload-helper-PPVm8Dsz.js";const C={title:"Theme / Tokens"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:"Aspect Ratios"}),e.jsx(c,{children:e.jsx(m,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"repeat(auto-fill, minmax({sizes.xs}, 1fr))",children:e.jsx(l,{each:Object.entries(i),children:([t,n],s)=>e.jsxs(a,{aspectRatio:t,bg:"bg",borderColor:"border.subtle",borderWidth:"1px",flexDirection:"column",rounded:"l2",children:[e.jsx(o,{children:t}),e.jsx(o,{color:"fg.muted",children:n})]},s)})})})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const f=["AspectRatios"];export{r as AspectRatios,f as __namedExportsOrder,C as default};
