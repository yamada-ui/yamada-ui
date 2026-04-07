import{n as e}from"./chunk-zsgVPwQN.js";import{Af as t,Bt as n,Du as r,Eu as i,Jr as a,Ut as o,Xr as s,Zr as c,da as l,jf as u,pa as d,pp as f,qr as p,ua as m}from"./iframe-DZGIdQv0.js";var h,g,_,v;e((()=>{m(),s(),p(),n(),i(),u(),h=f(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{children:`Fonts`}),(0,h.jsx)(d,{children:(0,h.jsx)(l,{gap:`lg`,children:(0,h.jsx)(c,{each:Object.entries(t),children:([e,t],n)=>(0,h.jsxs)(o,{gap:`xs`,children:[(0,h.jsx)(r,{fontFamily:e,fontSize:`2xl`,children:`Ag`}),(0,h.jsx)(r,{children:e}),(0,h.jsx)(r,{color:`fg.muted`,children:t})]},n)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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