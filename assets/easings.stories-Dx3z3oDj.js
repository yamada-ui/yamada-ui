import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Ap as n,Fa as r,Fs as i,La as a,Pa as o,Ps as s,au as c,gi as l,hi as u,jp as d,ou as f,qm as p,sm as m,vi as h,yi as g}from"./iframe-CHoZGzMw.js";var _,v,y,b,x;e((()=>{_=t(p(),1),s(),o(),h(),u(),c(),d(),v=m(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{children:`Easings`}),(0,v.jsx)(a,{children:(0,v.jsx)(r,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(g,{each:Object.entries(n),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(f,{children:e}),(0,v.jsx)(f,{color:`fg.muted`,children:t}),(0,v.jsx)(i,{h:`10`,position:`relative`,children:(0,v.jsx)(i,{css:{"--animation-from-x":`0%`,"--animation-to-x":`calc(100% - {spaces.10})`},animationDirection:`alternate`,animationDuration:`1s`,animationIterationCount:`infinite`,animationName:`position`,animationTimingFunction:t,bg:`green`,boxSize:`10`,position:`absolute`,rounded:`l2`})})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x=[`Easings`]}))();export{b as Easings,x as __namedExportsOrder,y as default};