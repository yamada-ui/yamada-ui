import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{n,t as r}from"./shadows-DiPmr5PP.js";import{t as i}from"./text-DSMMc5B6.js";import{t as a}from"./text-BM4F8FHS.js";import{t as o}from"./center-B9iB-Iph.js";import{t as s}from"./center-DwGXhAh8.js";import{t as c}from"./heading-DnIVTUkI.js";import{Gi as l,Hr as u,Ur as d,Wi as f,Wr as p,qi as m}from"./iframe-DjYq9Cb7.js";var h,g,_,v;e((()=>{s(),f(),d(),u(),a(),r(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{children:`Shadows`}),(0,h.jsx)(m,{children:(0,h.jsx)(l,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,h.jsx)(p,{each:Object.entries(n),children:([e],t)=>(0,h.jsx)(o,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,boxShadow:e,flexDirection:`column`,rounded:`l2`,children:(0,h.jsx)(i,{children:e})},t)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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