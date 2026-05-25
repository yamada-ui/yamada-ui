import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dn as t,Dv as n,Fa as r,Ma as i,Pa as a,R_ as o,Rf as s,Sn as c,Tn as l,ja as u,ls as d,os as f,ss as p,z_ as m,zf as h}from"./iframe-DT1sT_sY.js";var g,_,v,y;e((()=>{f(),a(),u(),c(),s(),o(),g=n(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{children:`Letter Spacings`}),(0,g.jsx)(d,{children:(0,g.jsx)(p,{gap:`lg`,children:(0,g.jsx)(r,{each:Object.entries(m),children:([e,n],r)=>(0,g.jsxs)(l,{children:[(0,g.jsxs)(t,{children:[(0,g.jsx)(h,{children:e}),(0,g.jsx)(h,{color:`fg.muted`,children:n})]}),(0,g.jsx)(h,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},r)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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