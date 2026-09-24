import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./fonts-ClFHxbNV.js";import{n as i,t as a}from"./text-b2W5euYI.js";import{i as o,r as s,t as c}from"./container-C5kWx763.js";import{n as l,t as u}from"./for-BIl9Q3L3.js";import{n as d,t as f}from"./heading-mQlbK6e0.js";import{n as p,t as m}from"./v-stack-DgxvBjIl.js";var h,g,_,v;function y(){return(y=e((()=>{o(),l(),d(),p(),i(),n(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{children:`Fonts`}),(0,h.jsx)(s,{children:(0,h.jsx)(c,{gap:`lg`,children:(0,h.jsx)(u,{each:Object.entries(r),children:([e,t],n)=>(0,h.jsxs)(m,{gap:`xs`,children:[(0,h.jsx)(a,{fontFamily:e,fontSize:`2xl`,children:`Ag`}),(0,h.jsx)(a,{children:e}),(0,h.jsx)(a,{color:`fg.muted`,children:t})]},n)})})})]}),v=[`Fonts`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Fonts</Heading>

      <Container.Root>
        <Container.Body gap="lg">
          <For each={Object.entries(fonts)}>
            {([token, value], index) => <VStack key={index} gap="xs">
                <Text fontFamily={token} fontSize="2xl">
                  Ag
                </Text>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </VStack>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Fonts,v as __namedExportsOrder,g as default};