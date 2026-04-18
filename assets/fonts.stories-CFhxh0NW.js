import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Fa as n,La as r,Lt as i,Pa as a,Tp as o,au as s,gi as c,hi as l,ou as u,sm as d,vi as f,wp as p,yi as m}from"./iframe-CHoZGzMw.js";var h,g,_,v;e((()=>{a(),f(),l(),i(),s(),o(),h=d(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{children:`Fonts`}),(0,h.jsx)(r,{children:(0,h.jsx)(n,{gap:`lg`,children:(0,h.jsx)(m,{each:Object.entries(p),children:([e,n],r)=>(0,h.jsxs)(t,{gap:`xs`,children:[(0,h.jsx)(u,{fontFamily:e,fontSize:`2xl`,children:`Ag`}),(0,h.jsx)(u,{children:e}),(0,h.jsx)(u,{color:`fg.muted`,children:n})]},r)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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