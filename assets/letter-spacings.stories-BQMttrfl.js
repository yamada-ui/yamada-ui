import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-CioY78R0.js";import{t as r}from"./text-D0TQhQLQ.js";import{Cn as i,Ef as a,En as o,Fa as s,Ia as c,Ma as l,Na as u,Tf as d,cs as f,ds as p,ls as m,wn as h}from"./iframe-6JM6_Yug.js";var g,_,v,y;e((()=>{f(),s(),l(),i(),r(),d(),g=t(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{children:`Letter Spacings`}),(0,g.jsx)(p,{children:(0,g.jsx)(m,{gap:`lg`,children:(0,g.jsx)(c,{each:Object.entries(a),children:([e,t],r)=>(0,g.jsxs)(h,{children:[(0,g.jsxs)(o,{children:[(0,g.jsx)(n,{children:e}),(0,g.jsx)(n,{color:`fg.muted`,children:t})]}),(0,g.jsx)(n,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},r)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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