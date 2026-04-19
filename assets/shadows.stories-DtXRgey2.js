import{n as e}from"./chunk-zsgVPwQN.js";import{Fa as t,La as n,Pa as r,au as i,gi as a,hi as o,hp as s,mp as c,nu as l,ou as u,ru as d,sm as f,vi as p,yi as m}from"./iframe-CXDvaz-K.js";var h,g,_,v;e((()=>{l(),r(),p(),o(),i(),c(),h=f(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{children:`Shadows`}),(0,h.jsx)(n,{children:(0,h.jsx)(t,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,h.jsx)(m,{each:Object.entries(s),children:([e],t)=>(0,h.jsx)(d,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,boxShadow:e,flexDirection:`column`,rounded:`l2`,children:(0,h.jsx)(u,{children:e})},t)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Shadows</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))">
          <For each={Object.entries(shadows)}>
            {([token], index) => <Center key={index} aspectRatio={1} bg="bg" borderColor="border.subtle" borderWidth="1px" boxShadow={token} flexDirection="column" rounded="l2">
                <Text>{token}</Text>
              </Center>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,..._.parameters?.docs?.source}}},v=[`Shadows`]}))();export{_ as Shadows,v as __namedExportsOrder,g as default};