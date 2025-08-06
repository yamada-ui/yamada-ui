import{j as e,V as s,T as n,bN as i}from"./iframe-BVYXOt_x.js";import{H as c}from"./heading-BUA-B32m.js";import{F as d}from"./for-Cq1AI6gw.js";import{H as m}from"./h-stack-CO-yE6kv.js";import{C as l,b as x}from"./container-tsBrV9ac.js";import"./preload-helper-D9Z9MdNV.js";const f={title:"Theme / Tokens / Letter Spacings"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Letter Spacings"}),e.jsx(l,{children:e.jsx(x,{gap:"lg",children:e.jsx(d,{each:Object.entries(i),children:([r,a],o)=>e.jsxs(s,{children:[e.jsxs(m,{children:[e.jsx(n,{children:r}),e.jsx(n,{color:"fg.muted",children:a})]}),e.jsx(n,{fontSize:"2xl",letterSpacing:r,children:"Hirotomo Yamada"})]},o)})})})]});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const k=["Basic"];export{t as Basic,k as __namedExportsOrder,f as default};
