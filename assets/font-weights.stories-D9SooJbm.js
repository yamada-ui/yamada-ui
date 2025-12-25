import{j as e,r as g,T as n,ch as m}from"./iframe-3lFlqlPN.js";import{H as c}from"./heading-DSztmhpV.js";import{F as l}from"./for-kQoYqs5h.js";import{C as x,b as h}from"./container-B7Bgdn6i.js";import"./preload-helper-C1FmrZbK.js";const T={title:"Theme / Tokens"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Font Weights"}),e.jsx(x,{children:e.jsx(h,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:e.jsx(l,{each:Object.entries(m),children:([r,i],d)=>e.jsxs(g.Fragment,{children:[e.jsx(n,{children:r}),e.jsx(n,{color:"fg.muted",children:i}),e.jsx(n,{fontSize:"2xl",fontWeight:r,children:"Ag"})]},d)})})})]});var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <>
      <Heading>Font Weights</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(fontWeights)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Text fontSize="2xl" fontWeight={token}>
                  Ag
                </Text>
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const C=["FontWeights"];export{t as FontWeights,C as __namedExportsOrder,T as default};
