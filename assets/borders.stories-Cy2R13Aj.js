import{j as e,r as m,T as n,cc as c}from"./iframe-3lFlqlPN.js";import{H as l}from"./heading-DSztmhpV.js";import{F as x}from"./for-kQoYqs5h.js";import{B as p}from"./box-emitGOf7.js";import{C as g,b as u}from"./container-B7Bgdn6i.js";import"./preload-helper-C1FmrZbK.js";const F={title:"Theme / Tokens"},r=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Borders"}),e.jsx(g,{children:e.jsx(u,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:e.jsx(x,{each:Object.entries(c),children:([o,i],d)=>e.jsxs(m.Fragment,{children:[e.jsx(n,{children:o}),e.jsx(n,{color:"fg.muted",children:i}),e.jsx(p,{borderTop:o})]},d)})})})]});var t,a,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <>
      <Heading>Borders</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(borders)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box borderTop={token} />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const b=["Borders"];export{r as Borders,b as __namedExportsOrder,F as default};
