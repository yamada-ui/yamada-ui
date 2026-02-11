import{j as e,r as m,T as t,ch as c}from"./iframe-FV6Pf4zG.js";import{H as l}from"./heading-CT3LVYzH.js";import{F as x}from"./for-v94cQqt1.js";import{C as g,b as p}from"./container-BrZsutBm.js";import"./preload-helper-C1FmrZbK.js";const T={title:"Theme / Tokens"},n=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Font Sizes"}),e.jsx(g,{children:e.jsx(p,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:e.jsx(x,{each:Object.entries(c),children:([r,i],d)=>e.jsxs(m.Fragment,{children:[e.jsx(t,{children:r}),e.jsx(t,{color:"fg.muted",children:i}),e.jsx(t,{fontSize:r,children:"Ag"})]},d)})})})]});var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <>
      <Heading>Font Sizes</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(fontSizes)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Text fontSize={token}>Ag</Text>
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const C=["FontSizes"];export{n as FontSizes,C as __namedExportsOrder,T as default};
