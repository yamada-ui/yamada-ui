import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-DEpu-Suh.js";import{t as r}from"./text-DScJ0tRC.js";import{Ia as i,La as a,Na as o,Nf as s,Pa as c,Pf as l,Tn as u,fs as d,hs as f,ps as p,wn as m}from"./iframe-CUT_NmNE.js";var h,g,_,v;e((()=>{d(),i(),o(),m(),r(),l(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{children:`Fonts`}),(0,h.jsx)(f,{children:(0,h.jsx)(p,{gap:`lg`,children:(0,h.jsx)(a,{each:Object.entries(s),children:([e,t],r)=>(0,h.jsxs)(u,{gap:`xs`,children:[(0,h.jsx)(n,{fontFamily:e,fontSize:`2xl`,children:`Ag`}),(0,h.jsx)(n,{children:e}),(0,h.jsx)(n,{color:`fg.muted`,children:t})]},r)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Fonts</Heading>

      <Container.Root>
        <Container.Body gap="lg">
          <For each={Object.entries(fonts)}>
            {([token, value], index) => <VStack key={index} gap="xs">
                <Text fontFamily={token} fontSize="2xl">
                  Ag
                </Text>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </VStack>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,..._.parameters?.docs?.source}}},v=[`Fonts`]}))();export{_ as Fonts,v as __namedExportsOrder,g as default};