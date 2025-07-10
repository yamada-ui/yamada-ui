import{j as e,V as s,T as t,bE as i}from"./iframe-CzCJWi2Q.js";import{H as c}from"./heading-Db76muhr.js";import{F as d}from"./for-B9vVJZhr.js";import{H as l}from"./h-stack-kAIWxfdY.js";import{C as m,b as x}from"./container-C2hf7qd3.js";const u={title:"Theme / Tokens / Letter Spacings"},n=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Letter Spacings"}),e.jsx(m,{children:e.jsx(x,{gap:"lg",children:e.jsx(d,{each:Object.entries(i),children:([r,a],o)=>e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(t,{children:r}),e.jsx(t,{color:"fg.muted",children:a})]}),e.jsx(t,{fontSize:"2xl",letterSpacing:r,children:"Hirotomo Yamada"})]},o)})})})]});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Letter Spacings</Heading>

      <Container.Root>
        <Container.Body gap="lg">
          <For each={Object.entries(letterSpacings)}>
            {([token, value], index) => <VStack key={index}>
                <HStack>
                  <Text>{token}</Text>
                  <Text color="fg.muted">{value}</Text>
                </HStack>

                <Text fontSize="2xl" letterSpacing={token}>
                  Hirotomo Yamada
                </Text>
              </VStack>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...n.parameters?.docs?.source}}};const f=["Basic"];export{n as Basic,f as __namedExportsOrder,u as default};
