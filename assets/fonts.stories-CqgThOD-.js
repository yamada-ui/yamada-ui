import{j as e,V as a,T as t,bL as i}from"./iframe-BVYXOt_x.js";import{H as c}from"./heading-BUA-B32m.js";import{F as x}from"./for-Cq1AI6gw.js";import{C as d,b as l}from"./container-tsBrV9ac.js";import"./preload-helper-D9Z9MdNV.js";const h={title:"Theme / Tokens / Fonts"},n=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Fonts"}),e.jsx(d,{children:e.jsx(l,{gap:"lg",children:e.jsx(x,{each:Object.entries(i),children:([o,r],s)=>e.jsxs(a,{gap:"xs",children:[e.jsx(t,{fontFamily:o,fontSize:"2xl",children:"Ag"}),e.jsx(t,{children:o}),e.jsx(t,{color:"fg.muted",children:r})]},s)})})})]});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Fonts</Heading>

      <Container.Root>
        <Container.Body gap="lg">
          <For each={Object.entries(fonts)}>
            {([token, value], index) => <VStack key={index} gap="xs">
                <Text fontFamily={token} fontSize="2xl">
                  Ag
                </Text>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </VStack>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...n.parameters?.docs?.source}}};const u=["Basic"];export{n as Basic,u as __namedExportsOrder,h as default};
