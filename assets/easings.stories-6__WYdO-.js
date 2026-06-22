import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Dv as n,Fa as r,Fl as i,Il as a,J_ as o,Ma as s,Pa as c,Rf as l,Y_ as u,by as d,ja as f,ls as p,os as m,ss as h,zf as g}from"./iframe-B_RvmxW5.js";var _,v,y,b,x;t((()=>{_=e(d(),1),i(),m(),c(),f(),l(),u(),v=n(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{children:`Easings`}),(0,v.jsx)(p,{children:(0,v.jsx)(h,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(r,{each:Object.entries(o),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(g,{children:e}),(0,v.jsx)(g,{color:`fg.muted`,children:t}),(0,v.jsx)(a,{h:`10`,position:`relative`,children:(0,v.jsx)(a,{css:{"--animation-from-x":`0%`,"--animation-to-x":`calc(100% - {spaces.10})`},animationDirection:`alternate`,animationDuration:`1s`,animationIterationCount:`infinite`,animationName:`position`,animationTimingFunction:t,bg:`green`,boxSize:`10`,position:`absolute`,rounded:`l2`})})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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