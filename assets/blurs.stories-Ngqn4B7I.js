import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-ljAYVXXn.js";import{t as r}from"./text-DGi1MGSU.js";import{t as i}from"./center-Dtf2N07o.js";import{t as a}from"./center-DQ9zZX4u.js";import{Fa as o,Gf as s,Ia as c,Ma as l,Na as u,Wf as d,ds as f,fs as p,ms as m}from"./iframe-DQX-AWnu.js";var h,g,_,v;e((()=>{a(),f(),o(),l(),r(),s(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{children:`Blurs`}),(0,h.jsx)(m,{children:(0,h.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(c,{each:Object.entries(d),children:([e,t],r)=>(0,h.jsx)(i,{aspectRatio:1,bg:`bg`,bgImage:`https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90`,bgSize:`cover`,borderColor:`border.subtle`,borderWidth:`1px`,overflow:`hidden`,rounded:`l2`,children:(0,h.jsxs)(i,{backdropBlur:e,boxSize:`full`,flexDirection:`column`,children:[(0,h.jsx)(n,{children:e}),(0,h.jsx)(n,{children:t})]})},r)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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