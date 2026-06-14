import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ev as t,Fa as n,Ff as r,Lf as i,Ma as a,Pa as o,Pf as s,Rf as c,ja as l,ls as u,nv as d,os as f,ss as p,tv as m}from"./iframe-4z85howq.js";var h,g,_,v;e((()=>{s(),f(),o(),l(),i(),d(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{children:`Aspect Ratios`}),(0,h.jsx)(u,{children:(0,h.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(n,{each:Object.entries(m),children:([e,t],n)=>(0,h.jsxs)(r,{aspectRatio:e,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:`l2`,children:[(0,h.jsx)(c,{children:e}),(0,h.jsx)(c,{color:`fg.muted`,children:t})]},n)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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