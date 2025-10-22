import{j as e,V as s,T as n,cg as i}from"./iframe-CzLob2S8.js";import{H as c}from"./heading-Dcz9XRZZ.js";import{F as d}from"./for-CeSllMh9.js";import{H as m}from"./h-stack-D6WYhcqF.js";import{C as l,b as x}from"./container-Dzl6p2kR.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Theme / Tokens"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Letter Spacings"}),e.jsx(l,{children:e.jsx(x,{gap:"lg",children:e.jsx(d,{each:Object.entries(i),children:([r,a],o)=>e.jsxs(s,{children:[e.jsxs(m,{children:[e.jsx(n,{children:r}),e.jsx(n,{color:"fg.muted",children:a})]}),e.jsx(n,{fontSize:"2xl",letterSpacing:r,children:"Hirotomo Yamada"})]},o)})})})]});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const k=["LetterSpacings"];export{t as LetterSpacings,k as __namedExportsOrder,f as default};
