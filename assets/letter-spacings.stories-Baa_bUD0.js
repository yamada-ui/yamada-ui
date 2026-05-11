import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{n,t as r}from"./letter-spacings-DPq4yBYO.js";import{t as i}from"./text-b_IgAtWs.js";import{t as a}from"./text-BspHgeMQ.js";import{t as o}from"./heading-B8YDc5tv.js";import{a as s,r as c}from"./z-stack-lWqh8Oxz.js";import{Dt as l,Gi as u,Hr as d,Ur as f,Wi as p,Wr as m,qi as h}from"./iframe-hd5efBrY.js";var g,_,v,y;e((()=>{p(),f(),d(),l(),a(),r(),g=t(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{children:`Letter Spacings`}),(0,g.jsx)(h,{children:(0,g.jsx)(u,{gap:`lg`,children:(0,g.jsx)(m,{each:Object.entries(n),children:([e,t],n)=>(0,g.jsxs)(c,{children:[(0,g.jsxs)(s,{children:[(0,g.jsx)(i,{children:e}),(0,g.jsx)(i,{color:`fg.muted`,children:t})]}),(0,g.jsx)(i,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y=[`LetterSpacings`]}))();export{v as LetterSpacings,y as __namedExportsOrder,_ as default};