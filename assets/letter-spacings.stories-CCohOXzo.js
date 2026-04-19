import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Fa as n,Ht as r,La as i,Lt as a,Pa as o,au as s,bp as c,gi as l,hi as u,ou as d,sm as f,vi as p,xp as m,yi as h}from"./iframe-CXDvaz-K.js";var g,_,v,y;e((()=>{o(),p(),u(),a(),s(),c(),g=f(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{children:`Letter Spacings`}),(0,g.jsx)(i,{children:(0,g.jsx)(n,{gap:`lg`,children:(0,g.jsx)(h,{each:Object.entries(m),children:([e,n],i)=>(0,g.jsxs)(t,{children:[(0,g.jsxs)(r,{children:[(0,g.jsx)(d,{children:e}),(0,g.jsx)(d,{color:`fg.muted`,children:n})]}),(0,g.jsx)(d,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},i)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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