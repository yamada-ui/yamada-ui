import{j as e,V as x,T as t,ci as d}from"./iframe-C1QqsVA9.js";import{H as l}from"./heading-V-V_Ybpq.js";import{F as m}from"./for-Be_orN7T.js";import{C as p,b as g}from"./container-DHUXeB0u.js";import"./preload-helper-C1FmrZbK.js";const T={title:"Theme / Tokens"},n=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Fonts"}),e.jsx(p,{children:e.jsx(g,{gap:"lg",children:e.jsx(m,{each:Object.entries(d),children:([o,i],c)=>e.jsxs(x,{gap:"xs",children:[e.jsx(t,{fontFamily:o,fontSize:"2xl",children:"Ag"}),e.jsx(t,{children:o}),e.jsx(t,{color:"fg.muted",children:i})]},c)})})})]});var r,s,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const k=["Fonts"];export{n as Fonts,k as __namedExportsOrder,T as default};
