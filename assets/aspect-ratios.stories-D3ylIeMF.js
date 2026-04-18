import{n as e}from"./chunk-zsgVPwQN.js";import{Fa as t,Fp as n,Ip as r,Ma as i,Na as a,eu as o,gi as s,hi as c,im as l,iu as u,ru as d,tu as f,vi as p,yi as m}from"./iframe-C1VNLErl.js";var h,g,_,v;e((()=>{o(),i(),p(),c(),d(),r(),h=l(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{children:`Aspect Ratios`}),(0,h.jsx)(t,{children:(0,h.jsx)(a,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(m,{each:Object.entries(n),children:([e,t],n)=>(0,h.jsxs)(f,{aspectRatio:e,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:`l2`,children:[(0,h.jsx)(u,{children:e}),(0,h.jsx)(u,{color:`fg.muted`,children:t})]},n)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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