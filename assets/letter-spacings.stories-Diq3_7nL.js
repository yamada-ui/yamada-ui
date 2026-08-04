import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-6la-NVAW.js";import{t as r}from"./text-D2YSsabI.js";import{Cn as i,En as a,Fa as o,Ia as s,Ma as c,Na as l,Tf as u,cs as d,ds as f,ls as p,wf as m,wn as h}from"./iframe-BJ_HLsnT.js";var g,_,v,y;e((()=>{d(),o(),c(),i(),r(),m(),g=t(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{children:`Letter Spacings`}),(0,g.jsx)(f,{children:(0,g.jsx)(p,{gap:`lg`,children:(0,g.jsx)(s,{each:Object.entries(u),children:([e,t],r)=>(0,g.jsxs)(h,{children:[(0,g.jsxs)(a,{children:[(0,g.jsx)(n,{children:e}),(0,g.jsx)(n,{color:`fg.muted`,children:t})]}),(0,g.jsx)(n,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},r)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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