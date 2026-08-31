import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-CioY78R0.js";import{t as r}from"./text-D0TQhQLQ.js";import{t as i}from"./center-3lj5pUDb.js";import{t as a}from"./center-DdX31IlC.js";import{Fa as o,Ia as s,Ma as c,Na as l,Uf as u,Wf as d,cs as f,ds as p,ls as m}from"./iframe-6JM6_Yug.js";var h,g,_,v;e((()=>{a(),f(),o(),c(),r(),d(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{children:`Aspect Ratios`}),(0,h.jsx)(p,{children:(0,h.jsx)(m,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(s,{each:Object.entries(u),children:([e,t],r)=>(0,h.jsxs)(i,{aspectRatio:e,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:`l2`,children:[(0,h.jsx)(n,{children:e}),(0,h.jsx)(n,{color:`fg.muted`,children:t})]},r)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Aspect Ratios</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="repeat(auto-fill, minmax({sizes.xs}, 1fr))">
          <For each={Object.entries(aspectRatios)}>
            {([token, value], index) => <Center key={index} aspectRatio={token} bg="bg" borderColor="border.subtle" borderWidth="1px" flexDirection="column" rounded="l2">
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </Center>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,..._.parameters?.docs?.source}}},v=[`AspectRatios`]}))();export{_ as AspectRatios,v as __namedExportsOrder,g as default};