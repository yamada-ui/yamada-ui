import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./shadows-DSqVL99d.js";import{n as i,t as a}from"./text-b2W5euYI.js";import{n as o,t as s}from"./center-C6NHygeb.js";import{i as c,r as l,t as u}from"./container-C5kWx763.js";import{n as d,t as f}from"./for-BIl9Q3L3.js";import{n as p,t as m}from"./heading-mQlbK6e0.js";var h,g,_,v;function y(){return(y=e((()=>{o(),c(),d(),p(),i(),r(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{children:`Shadows`}),(0,h.jsx)(l,{children:(0,h.jsx)(u,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,h.jsx)(f,{each:Object.entries(n),children:([e],t)=>(0,h.jsx)(s,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,boxShadow:e,flexDirection:`column`,rounded:`l2`,children:(0,h.jsx)(a,{children:e})},t)})})})]}),v=[`Shadows`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Shadows,v as __namedExportsOrder,g as default};