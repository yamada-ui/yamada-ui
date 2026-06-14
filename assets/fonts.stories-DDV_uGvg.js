import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ev as t,Fa as n,H_ as r,Lf as i,Ma as a,Pa as o,Rf as s,Sn as c,Tn as l,V_ as u,ja as d,ls as f,os as p,ss as m}from"./iframe-4z85howq.js";var h,g,_,v;e((()=>{p(),o(),d(),c(),i(),r(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{children:`Fonts`}),(0,h.jsx)(f,{children:(0,h.jsx)(m,{gap:`lg`,children:(0,h.jsx)(n,{each:Object.entries(u),children:([e,t],n)=>(0,h.jsxs)(l,{gap:`xs`,children:[(0,h.jsx)(s,{fontFamily:e,fontSize:`2xl`,children:`Ag`}),(0,h.jsx)(s,{children:e}),(0,h.jsx)(s,{color:`fg.muted`,children:t})]},n)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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