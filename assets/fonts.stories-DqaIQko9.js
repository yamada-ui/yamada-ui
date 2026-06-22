import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{t as n}from"./text-ClYKebxE.js";import{t as r}from"./text-B2Y0ht7H.js";import{Aa as i,Ma as a,Na as o,Sn as s,Tn as c,as as l,bf as u,is as d,ka as f,ss as p,xf as m}from"./iframe-wumx2IEZ.js";var h,g,_,v;e((()=>{d(),a(),f(),s(),r(),m(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{children:`Fonts`}),(0,h.jsx)(p,{children:(0,h.jsx)(l,{gap:`lg`,children:(0,h.jsx)(o,{each:Object.entries(u),children:([e,t],r)=>(0,h.jsxs)(c,{gap:`xs`,children:[(0,h.jsx)(n,{fontFamily:e,fontSize:`2xl`,children:`Ag`}),(0,h.jsx)(n,{children:e}),(0,h.jsx)(n,{color:`fg.muted`,children:t})]},r)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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