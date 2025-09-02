import{j as e,r as s,T as t,bN as i}from"./iframe-zUpmkGgl.js";import{H as d}from"./heading-D-hfGBzv.js";import{F as m}from"./for-yYl1Ggvn.js";import{C as c,b as l}from"./container-D233L2JA.js";import"./preload-helper-D9Z9MdNV.js";const j={title:"Theme / Tokens"},n=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:"Font Sizes"}),e.jsx(c,{children:e.jsx(l,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:e.jsx(m,{each:Object.entries(i),children:([r,o],a)=>e.jsxs(s.Fragment,{children:[e.jsx(t,{children:r}),e.jsx(t,{color:"fg.muted",children:o}),e.jsx(t,{fontSize:r,children:"Ag"})]},a)})})})]});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const h=["FontSizes"];export{n as FontSizes,h as __namedExportsOrder,j as default};
