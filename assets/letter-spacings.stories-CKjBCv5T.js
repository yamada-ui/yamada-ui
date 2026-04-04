import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Df as n,Du as r,Ef as i,Eu as a,Gt as o,Jr as s,Ut as c,Xr as l,Zr as u,da as d,pa as f,pp as p,qr as m,ua as h}from"./iframe-BNI00s7o.js";var g,_,v,y;e((()=>{h(),l(),m(),t(),a(),i(),g=p(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{children:`Letter Spacings`}),(0,g.jsx)(f,{children:(0,g.jsx)(d,{gap:`lg`,children:(0,g.jsx)(u,{each:Object.entries(n),children:([e,t],n)=>(0,g.jsxs)(c,{children:[(0,g.jsxs)(o,{children:[(0,g.jsx)(r,{children:e}),(0,g.jsx)(r,{color:`fg.muted`,children:t})]}),(0,g.jsx)(r,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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