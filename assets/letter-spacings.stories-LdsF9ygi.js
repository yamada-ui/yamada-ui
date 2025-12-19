import{j as e,V as d,T as n,ck as m}from"./iframe-D_HYglKf.js";import{H as l}from"./heading-D4a_pOa-.js";import{F as x}from"./for-B7ME2eWM.js";import{H as p}from"./h-stack-DUGJfnik.js";import{C as g,b as S}from"./container-C3A-fGJZ.js";import"./preload-helper-C1FmrZbK.js";const T={title:"Theme / Tokens"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Letter Spacings"}),e.jsx(g,{children:e.jsx(S,{gap:"lg",children:e.jsx(x,{each:Object.entries(m),children:([r,i],c)=>e.jsxs(d,{children:[e.jsxs(p,{children:[e.jsx(n,{children:r}),e.jsx(n,{color:"fg.muted",children:i})]}),e.jsx(n,{fontSize:"2xl",letterSpacing:r,children:"Hirotomo Yamada"})]},c)})})})]});var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const C=["LetterSpacings"];export{t as LetterSpacings,C as __namedExportsOrder,T as default};
