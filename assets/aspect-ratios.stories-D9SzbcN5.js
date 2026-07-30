import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-CQ1XOkBi.js";import{t as r}from"./text-zxRSpQyg.js";import{t as i}from"./center-DRPAtnWz.js";import{t as a}from"./center-FEnWy_ei.js";import{Fa as o,Gf as s,Ia as c,Kf as l,Ma as u,Na as d,ds as f,fs as p,ms as m}from"./iframe-DYbENm1a.js";var h,g,_,v;e((()=>{a(),f(),o(),u(),r(),l(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{children:`Aspect Ratios`}),(0,h.jsx)(m,{children:(0,h.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(c,{each:Object.entries(s),children:([e,t],r)=>(0,h.jsxs)(i,{aspectRatio:e,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:`l2`,children:[(0,h.jsx)(n,{children:e}),(0,h.jsx)(n,{color:`fg.muted`,children:t})]},r)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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