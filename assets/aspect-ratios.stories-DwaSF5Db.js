import{n as e}from"./chunk-zsgVPwQN.js";import{Fa as t,La as n,Pa as r,Rp as i,au as a,gi as o,hi as s,nu as c,ou as l,ru as u,sm as d,vi as f,yi as p,zp as m}from"./iframe-CHoZGzMw.js";var h,g,_,v;e((()=>{c(),r(),f(),s(),a(),m(),h=d(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{children:`Aspect Ratios`}),(0,h.jsx)(n,{children:(0,h.jsx)(t,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(p,{each:Object.entries(i),children:([e,t],n)=>(0,h.jsxs)(u,{aspectRatio:e,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:`l2`,children:[(0,h.jsx)(l,{children:e}),(0,h.jsx)(l,{color:`fg.muted`,children:t})]},n)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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