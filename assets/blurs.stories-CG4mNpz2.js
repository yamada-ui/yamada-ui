import{n as e}from"./chunk-zsgVPwQN.js";import{Fa as t,Ip as n,La as r,Lp as i,Pa as a,au as o,gi as s,hi as c,nu as l,ou as u,ru as d,sm as f,vi as p,yi as m}from"./iframe-CXDvaz-K.js";var h,g,_,v;e((()=>{l(),a(),p(),c(),o(),i(),h=f(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{children:`Blurs`}),(0,h.jsx)(r,{children:(0,h.jsx)(t,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(m,{each:Object.entries(n),children:([e,t],n)=>(0,h.jsx)(d,{aspectRatio:1,bg:`bg`,bgImage:`https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90`,bgSize:`cover`,borderColor:`border.subtle`,borderWidth:`1px`,overflow:`hidden`,rounded:`l2`,children:(0,h.jsxs)(d,{backdropBlur:e,boxSize:`full`,flexDirection:`column`,children:[(0,h.jsx)(u,{children:e}),(0,h.jsx)(u,{children:t})]})},n)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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