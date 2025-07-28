import{j as e,V as s,T as t,bI as i}from"./iframe-BHpF9Anv.js";import{H as c}from"./heading-D9cNz4N2.js";import{F as d}from"./for-ByLCT2H8.js";import{H as l}from"./h-stack-BO_IWPAf.js";import{C as m,b as x}from"./container-CjEh3B4k.js";const u={title:"Theme / Tokens / Letter Spacings"},n=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Letter Spacings"}),e.jsx(m,{children:e.jsx(x,{gap:"lg",children:e.jsx(d,{each:Object.entries(i),children:([r,a],o)=>e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(t,{children:r}),e.jsx(t,{color:"fg.muted",children:a})]}),e.jsx(t,{fontSize:"2xl",letterSpacing:r,children:"Hirotomo Yamada"})]},o)})})})]});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
