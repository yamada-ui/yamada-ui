import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Du as n,Eu as r,If as i,Jr as a,Lf as o,Xp as s,Xr as c,Zr as l,da as u,ds as d,pa as f,pp as p,qr as m,ua as h,us as g}from"./iframe-DKFq6LfD.js";var _,v,y,b,x;e((()=>{_=t(s(),1),g(),h(),c(),m(),r(),o(),v=p(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{children:`Easings`}),(0,v.jsx)(f,{children:(0,v.jsx)(u,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(l,{each:Object.entries(i),children:([e,t],r)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(n,{children:e}),(0,v.jsx)(n,{color:`fg.muted`,children:t}),(0,v.jsx)(d,{h:`10`,position:`relative`,children:(0,v.jsx)(d,{css:{"--animation-from-x":`0%`,"--animation-to-x":`calc(100% - {spaces.10})`},animationDirection:`alternate`,animationDuration:`1s`,animationIterationCount:`infinite`,animationName:`position`,animationTimingFunction:t,bg:`green`,boxSize:`10`,position:`absolute`,rounded:`l2`})})]},r)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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