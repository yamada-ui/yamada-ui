import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./aspect-ratios-Ca_vo42d.js";import{n as i,t as a}from"./text-b2W5euYI.js";import{n as o,t as s}from"./center-C6NHygeb.js";import{i as c,r as l,t as u}from"./container-C5kWx763.js";import{n as d,t as f}from"./for-BIl9Q3L3.js";import{n as p,t as m}from"./heading-mQlbK6e0.js";var h,g,_,v;function y(){return(y=e((()=>{o(),c(),d(),p(),i(),n(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{children:`Aspect Ratios`}),(0,h.jsx)(l,{children:(0,h.jsx)(u,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.xs}, 1fr))`,children:(0,h.jsx)(f,{each:Object.entries(r),children:([e,t],n)=>(0,h.jsxs)(s,{aspectRatio:e,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:`l2`,children:[(0,h.jsx)(a,{children:e}),(0,h.jsx)(a,{color:`fg.muted`,children:t})]},n)})})})]}),v=[`AspectRatios`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as AspectRatios,v as __namedExportsOrder,g as default};