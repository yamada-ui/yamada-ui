import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-CWhjq_ZM.js";import{t as r}from"./text-PitPK9Eo.js";import{Cn as i,En as a,Fa as o,Ia as s,Ma as c,Na as l,Of as u,ds as d,fs as f,kf as p,ms as m,wn as h}from"./iframe-DTxndMIb.js";var g,_,v,y;e((()=>{d(),o(),c(),i(),r(),u(),g=t(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{children:`Letter Spacings`}),(0,g.jsx)(m,{children:(0,g.jsx)(f,{gap:`lg`,children:(0,g.jsx)(s,{each:Object.entries(p),children:([e,t],r)=>(0,g.jsxs)(h,{children:[(0,g.jsxs)(a,{children:[(0,g.jsx)(n,{children:e}),(0,g.jsx)(n,{color:`fg.muted`,children:t})]}),(0,g.jsx)(n,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},r)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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