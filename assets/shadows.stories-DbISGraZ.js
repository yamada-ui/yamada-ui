import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ev as t,Fa as n,Ff as r,Lf as i,M_ as a,Ma as o,Pa as s,Pf as c,Rf as l,j_ as u,ja as d,ls as f,os as p,ss as m}from"./iframe-4z85howq.js";var h,g,_,v;e((()=>{c(),p(),s(),d(),i(),u(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{children:`Shadows`}),(0,h.jsx)(f,{children:(0,h.jsx)(m,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,h.jsx)(n,{each:Object.entries(a),children:([e],t)=>(0,h.jsx)(r,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,boxShadow:e,flexDirection:`column`,rounded:`l2`,children:(0,h.jsx)(l,{children:e})},t)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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