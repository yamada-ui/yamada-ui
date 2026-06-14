import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dn as t,Ev as n,Fa as r,L_ as i,Lf as a,Ma as o,Pa as s,R_ as c,Rf as l,Sn as u,Tn as d,ja as f,ls as p,os as m,ss as h}from"./iframe-4z85howq.js";var g,_,v,y;e((()=>{m(),s(),f(),u(),a(),i(),g=n(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{children:`Letter Spacings`}),(0,g.jsx)(p,{children:(0,g.jsx)(h,{gap:`lg`,children:(0,g.jsx)(r,{each:Object.entries(c),children:([e,n],r)=>(0,g.jsxs)(d,{children:[(0,g.jsxs)(t,{children:[(0,g.jsx)(l,{children:e}),(0,g.jsx)(l,{color:`fg.muted`,children:n})]}),(0,g.jsx)(l,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},r)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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