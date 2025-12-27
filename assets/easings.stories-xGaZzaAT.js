import{j as n,r as l,T as o,cg as d}from"./iframe-DaVT7dxo.js";import{H as g}from"./heading-DKCzfUaM.js";import{F as x}from"./for-CMUOzp-w.js";import{B as t}from"./box-BD07YNoR.js";import{C as p,b as u}from"./container-DoFFmGHA.js";import"./preload-helper-C1FmrZbK.js";const b={title:"Theme / Tokens"},i=()=>n.jsxs(n.Fragment,{children:[n.jsx(g,{children:"Easings"}),n.jsx(p,{children:n.jsx(u,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:n.jsx(x,{each:Object.entries(d),children:([m,e],c)=>n.jsxs(l.Fragment,{children:[n.jsx(o,{children:m}),n.jsx(o,{color:"fg.muted",children:e}),n.jsx(t,{h:"10",position:"relative",children:n.jsx(t,{css:{"--animation-from-x":"0%","--animation-to-x":"calc(100% - {spaces.10})"},animationDirection:"alternate",animationDuration:"1s",animationIterationCount:"infinite",animationName:"position",animationTimingFunction:e,bg:"green",boxSize:"10",position:"absolute",rounded:"l2"})})]},c)})})})]});var a,r,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <>
      <Heading>Easings</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(easings)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box h="10" position="relative">
                  <Box css={{
                "--animation-from-x": "0%",
                "--animation-to-x": "calc(100% - {spaces.10})"
              }} animationDirection="alternate" animationDuration="1s" animationIterationCount="infinite" animationName="position" animationTimingFunction={value} bg="green" boxSize="10" position="absolute" rounded="l2" />
                </Box>
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...(s=(r=i.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const B=["Easings"];export{i as Easings,B as __namedExportsOrder,b as default};
