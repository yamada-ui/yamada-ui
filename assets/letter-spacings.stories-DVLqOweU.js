import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Fa as n,Ht as r,Lt as i,Ma as a,Na as o,_p as s,gi as c,hi as l,im as u,iu as d,ru as f,vi as p,vp as m,yi as h}from"./iframe-qqhVEcPq.js";var g,_,v,y;e((()=>{a(),p(),l(),i(),f(),s(),g=u(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{children:`Letter Spacings`}),(0,g.jsx)(n,{children:(0,g.jsx)(o,{gap:`lg`,children:(0,g.jsx)(h,{each:Object.entries(m),children:([e,n],i)=>(0,g.jsxs)(t,{children:[(0,g.jsxs)(r,{children:[(0,g.jsx)(d,{children:e}),(0,g.jsx)(d,{color:`fg.muted`,children:n})]}),(0,g.jsx)(d,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},i)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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