import{j as e,V as a,T as t,cd as i}from"./iframe-Dp_HdYH_.js";import{H as c}from"./heading-rI5evaQz.js";import{F as d}from"./for-B4pwjnZx.js";import{C as x,b as l}from"./container-CAAxzYjX.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Theme / Tokens"},n=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Fonts"}),e.jsx(x,{children:e.jsx(l,{gap:"lg",children:e.jsx(d,{each:Object.entries(i),children:([o,r],s)=>e.jsxs(a,{gap:"xs",children:[e.jsx(t,{fontFamily:o,fontSize:"2xl",children:"Ag"}),e.jsx(t,{children:o}),e.jsx(t,{color:"fg.muted",children:r})]},s)})})})]});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const u=["Fonts"];export{n as Fonts,u as __namedExportsOrder,h as default};
