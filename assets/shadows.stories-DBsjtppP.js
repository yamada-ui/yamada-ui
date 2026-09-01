import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-CioY78R0.js";import{t as r}from"./text-D0TQhQLQ.js";import{t as i}from"./center-3lj5pUDb.js";import{t as a}from"./center-DdX31IlC.js";import{Fa as o,Ia as s,Ma as c,Na as l,bf as u,cs as d,ds as f,ls as p,yf as m}from"./iframe-DgeyRRbK.js";var h,g,_,v;e((()=>{a(),d(),o(),c(),r(),m(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{children:`Shadows`}),(0,h.jsx)(f,{children:(0,h.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,h.jsx)(s,{each:Object.entries(u),children:([e],t)=>(0,h.jsx)(i,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,boxShadow:e,flexDirection:`column`,rounded:`l2`,children:(0,h.jsx)(n,{children:e})},t)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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