import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{n,t as r}from"./fonts-NxtkqAyx.js";import{t as i}from"./text-DSMMc5B6.js";import{t as a}from"./text-BM4F8FHS.js";import{t as o}from"./heading-DnIVTUkI.js";import{r as s}from"./z-stack-D_lbkXhr.js";import{Dt as c,Gi as l,Hr as u,Ur as d,Wi as f,Wr as p,qi as m}from"./iframe-va9k4Dhq.js";var h,g,_,v;e((()=>{f(),d(),u(),c(),a(),n(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{children:`Fonts`}),(0,h.jsx)(m,{children:(0,h.jsx)(l,{gap:`lg`,children:(0,h.jsx)(p,{each:Object.entries(r),children:([e,t],n)=>(0,h.jsxs)(s,{gap:`xs`,children:[(0,h.jsx)(i,{fontFamily:e,fontSize:`2xl`,children:`Ag`}),(0,h.jsx)(i,{children:e}),(0,h.jsx)(i,{color:`fg.muted`,children:t})]},n)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v=[`Fonts`]}))();export{_ as Fonts,v as __namedExportsOrder,g as default};