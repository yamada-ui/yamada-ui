import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./blurs-HxRbzlki.js";import{n as i,t as a}from"./text-b2W5euYI.js";import{n as o,t as s}from"./center-C6NHygeb.js";import{i as c,r as l,t as u}from"./container-C5kWx763.js";import{n as d,t as f}from"./for-BIl9Q3L3.js";import{n as p,t as m}from"./heading-mQlbK6e0.js";var h,g,_,v;function y(){return(y=e((()=>{o(),c(),d(),p(),i(),n(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{children:`Blurs`}),(0,h.jsx)(l,{children:(0,h.jsx)(u,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(f,{each:Object.entries(r),children:([e,t],n)=>(0,h.jsx)(s,{aspectRatio:1,bg:`bg`,bgImage:`https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90`,bgSize:`cover`,borderColor:`border.subtle`,borderWidth:`1px`,overflow:`hidden`,rounded:`l2`,children:(0,h.jsxs)(s,{backdropBlur:e,boxSize:`full`,flexDirection:`column`,children:[(0,h.jsx)(a,{children:e}),(0,h.jsx)(a,{children:t})]})},n)})})})]}),v=[`Blurs`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Blurs</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="repeat(auto-fill, minmax({sizes.xs}, 1fr))">
          <For each={Object.entries(blurs)}>
            {([token, value], index) => <Center key={index} aspectRatio={1} bg="bg" bgImage="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90" bgSize="cover" borderColor="border.subtle" borderWidth="1px" overflow="hidden" rounded="l2">
                <Center backdropBlur={token} boxSize="full" flexDirection="column">
                  <Text>{token}</Text>
                  <Text>{value}</Text>
                </Center>
              </Center>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Blurs,v as __namedExportsOrder,g as default};