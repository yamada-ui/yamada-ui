import{n as e}from"./chunk-zsgVPwQN.js";import{Fa as t,Ma as n,Na as r,Np as i,Pp as a,eu as o,gi as s,hi as c,im as l,iu as u,ru as d,tu as f,vi as p,yi as m}from"./iframe-Dtrri4XQ.js";var h,g,_,v;e((()=>{o(),n(),p(),c(),d(),a(),h=l(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{children:`Blurs`}),(0,h.jsx)(t,{children:(0,h.jsx)(r,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(m,{each:Object.entries(i),children:([e,t],n)=>(0,h.jsx)(f,{aspectRatio:1,bg:`bg`,bgImage:`https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90`,bgSize:`cover`,borderColor:`border.subtle`,borderWidth:`1px`,overflow:`hidden`,rounded:`l2`,children:(0,h.jsxs)(f,{backdropBlur:e,boxSize:`full`,flexDirection:`column`,children:[(0,h.jsx)(u,{children:e}),(0,h.jsx)(u,{children:t})]})},n)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Blurs</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="repeat(auto-fill, minmax({sizes.xs}, 1fr))">
          <For each={Object.entries(blurs)}>
            {([token, value], index) => <Center key={index} aspectRatio={1} bg="bg" bgImage="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90" bgSize="cover" borderColor="border.subtle" borderWidth="1px" overflow="hidden" rounded="l2">
                <Center backdropBlur={token} boxSize="full" flexDirection="column">
                  <Text>{token}</Text>
                  <Text>{value}</Text>
                </Center>
              </Center>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,..._.parameters?.docs?.source}}},v=[`Blurs`]}))();export{_ as Blurs,v as __namedExportsOrder,g as default};