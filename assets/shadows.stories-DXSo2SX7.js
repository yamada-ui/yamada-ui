import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-ljAYVXXn.js";import{t as r}from"./text-DGi1MGSU.js";import{t as i}from"./center-Dtf2N07o.js";import{t as a}from"./center-DQ9zZX4u.js";import{Cf as o,Fa as s,Ia as c,Ma as l,Na as u,Sf as d,ds as f,fs as p,ms as m}from"./iframe-BI2Pxu8D.js";var h,g,_,v;e((()=>{a(),f(),s(),l(),r(),d(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{children:`Shadows`}),(0,h.jsx)(m,{children:(0,h.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,h.jsx)(c,{each:Object.entries(o),children:([e],t)=>(0,h.jsx)(i,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,boxShadow:e,flexDirection:`column`,rounded:`l2`,children:(0,h.jsx)(n,{children:e})},t)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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