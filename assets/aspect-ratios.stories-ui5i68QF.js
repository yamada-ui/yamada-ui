import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{n,t as r}from"./aspect-ratios-D7Vx97d-.js";import{t as i}from"./text-b_IgAtWs.js";import{t as a}from"./text-BspHgeMQ.js";import{t as o}from"./center-CkuL8MEe.js";import{t as s}from"./center-33epxUvO.js";import{t as c}from"./heading-B8YDc5tv.js";import{Gi as l,Hr as u,Ur as d,Wi as f,Wr as p,qi as m}from"./iframe-DO0z5V9x.js";var h,g,_,v;e((()=>{s(),f(),d(),u(),a(),n(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{children:`Aspect Ratios`}),(0,h.jsx)(m,{children:(0,h.jsx)(l,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(p,{each:Object.entries(r),children:([e,t],n)=>(0,h.jsxs)(o,{aspectRatio:e,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:`l2`,children:[(0,h.jsx)(i,{children:e}),(0,h.jsx)(i,{color:`fg.muted`,children:t})]},n)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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