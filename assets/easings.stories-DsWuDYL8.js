import{j as n,r as s,T as o,cb as m}from"./iframe-DlW9lece.js";import{H as c}from"./heading-BVtzxnUn.js";import{F as l}from"./for-Bbje7Nyp.js";import{B as t}from"./box-6lZ3szAV.js";import{C as d,b as g}from"./container-DrplEQY2.js";import"./preload-helper-PPVm8Dsz.js";const T={title:"Theme / Tokens"},i=()=>n.jsxs(n.Fragment,{children:[n.jsx(c,{children:"Easings"}),n.jsx(d,{children:n.jsx(g,{alignItems:"center",display:"grid",gap:"lg",gridTemplateColumns:"auto auto 1fr",children:n.jsx(l,{each:Object.entries(m),children:([a,e],r)=>n.jsxs(s.Fragment,{children:[n.jsx(o,{children:a}),n.jsx(o,{color:"fg.muted",children:e}),n.jsx(t,{h:"10",position:"relative",children:n.jsx(t,{css:{"--animation-from-x":"0%","--animation-to-x":"calc(100% - {spaces.10})"},animationDirection:"alternate",animationDuration:"1s",animationIterationCount:"infinite",animationName:"position",animationTimingFunction:e,bg:"green",boxSize:"10",position:"absolute",rounded:"l2"})})]},r)})})})]});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const C=["Easings"];export{i as Easings,C as __namedExportsOrder,T as default};
