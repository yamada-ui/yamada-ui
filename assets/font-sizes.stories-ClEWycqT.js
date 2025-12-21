import{j as e,r as m,T as t,cg as c}from"./iframe-LqombrNM.js";import{H as l}from"./heading-Bq_Y6181.js";import{F as g}from"./for-CkWl_ugB.js";import{C as x,b as p}from"./container-w9QzqZyP.js";import"./preload-helper-C1FmrZbK.js";const T={title:"Theme / Tokens"},n=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Font Sizes"}),e.jsx(x,{children:e.jsx(p,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:e.jsx(g,{each:Object.entries(c),children:([r,i],d)=>e.jsxs(m.Fragment,{children:[e.jsx(t,{children:r}),e.jsx(t,{color:"fg.muted",children:i}),e.jsx(t,{fontSize:r,children:"Ag"})]},d)})})})]});var o,a,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
