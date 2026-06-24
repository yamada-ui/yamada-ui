import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{t as n}from"./text-ClYKebxE.js";import{t as r}from"./text-B2Y0ht7H.js";import{Aa as i,Dn as a,Ma as o,Na as s,Sn as c,Tn as l,_f as u,as as d,gf as f,is as p,ka as m,ss as h}from"./iframe-QFtltEr1.js";var g,_,v,y;e((()=>{p(),o(),m(),c(),r(),f(),g=t(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{children:`Letter Spacings`}),(0,g.jsx)(h,{children:(0,g.jsx)(d,{gap:`lg`,children:(0,g.jsx)(s,{each:Object.entries(u),children:([e,t],r)=>(0,g.jsxs)(l,{children:[(0,g.jsxs)(a,{children:[(0,g.jsx)(n,{children:e}),(0,g.jsx)(n,{color:`fg.muted`,children:t})]}),(0,g.jsx)(n,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},r)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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