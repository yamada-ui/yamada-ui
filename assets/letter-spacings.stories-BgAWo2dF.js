import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-C2T69kx2.js";import{t as r}from"./text-CQ9C2I0D.js";import{Cn as i,Df as a,En as o,Fa as s,Ia as c,Ma as l,Na as u,Of as d,ds as f,fs as p,ms as m,wn as h}from"./iframe-BrNwOJju.js";var g,_,v,y;e((()=>{f(),s(),l(),i(),r(),a(),g=t(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{children:`Letter Spacings`}),(0,g.jsx)(m,{children:(0,g.jsx)(p,{gap:`lg`,children:(0,g.jsx)(c,{each:Object.entries(d),children:([e,t],r)=>(0,g.jsxs)(h,{children:[(0,g.jsxs)(o,{children:[(0,g.jsx)(n,{children:e}),(0,g.jsx)(n,{color:`fg.muted`,children:t})]}),(0,g.jsx)(n,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},r)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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