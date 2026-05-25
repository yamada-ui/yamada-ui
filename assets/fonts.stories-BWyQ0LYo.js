import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,Fa as n,H_ as r,Ma as i,Pa as a,Rf as o,Sn as s,Tn as c,U_ as l,ja as u,ls as d,os as f,ss as p,zf as m}from"./iframe-DT1sT_sY.js";var h,g,_,v;e((()=>{f(),a(),u(),s(),o(),l(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{children:`Fonts`}),(0,h.jsx)(d,{children:(0,h.jsx)(p,{gap:`lg`,children:(0,h.jsx)(n,{each:Object.entries(r),children:([e,t],n)=>(0,h.jsxs)(c,{gap:`xs`,children:[(0,h.jsx)(m,{fontFamily:e,fontSize:`2xl`,children:`Ag`}),(0,h.jsx)(m,{children:e}),(0,h.jsx)(m,{color:`fg.muted`,children:t})]},n)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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