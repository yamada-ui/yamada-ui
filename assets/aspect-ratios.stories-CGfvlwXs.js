import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{t as n}from"./text-D-jnAopL.js";import{t as r}from"./text-DV5bCi2n.js";import{t as i}from"./center-DFRfqJq4.js";import{t as a}from"./center-Ctl81hnc.js";import{Aa as o,Ff as s,Ma as c,Na as l,Pf as u,as as d,is as f,ka as p,ss as m}from"./iframe-CgnmJX3j.js";var h,g,_,v;e((()=>{a(),f(),c(),p(),r(),s(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{children:`Aspect Ratios`}),(0,h.jsx)(m,{children:(0,h.jsx)(d,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(l,{each:Object.entries(u),children:([e,t],r)=>(0,h.jsxs)(i,{aspectRatio:e,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:`l2`,children:[(0,h.jsx)(n,{children:e}),(0,h.jsx)(n,{color:`fg.muted`,children:t})]},r)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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