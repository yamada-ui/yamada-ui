import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-kkZeYk3H.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-CQ1XOkBi.js";import{t as a}from"./text-zxRSpQyg.js";import{Fa as o,Ia as s,Lf as c,Ma as l,Ml as u,Na as d,Nl as f,Rf as p,ds as m,fs as h,ms as g}from"./iframe-DYbENm1a.js";var _,v,y,b,x;t((()=>{_=e(n(),1),u(),m(),o(),l(),a(),p(),v=r(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{children:`Easings`}),(0,v.jsx)(g,{children:(0,v.jsx)(h,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(s,{each:Object.entries(c),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(i,{children:e}),(0,v.jsx)(i,{color:`fg.muted`,children:t}),(0,v.jsx)(f,{h:`10`,position:`relative`,children:(0,v.jsx)(f,{css:{"--animation-from-x":`0%`,"--animation-to-x":`calc(100% - {spaces.10})`},animationDirection:`alternate`,animationDuration:`1s`,animationIterationCount:`infinite`,animationName:`position`,animationTimingFunction:t,bg:`green`,boxSize:`10`,position:`absolute`,rounded:`l2`})})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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