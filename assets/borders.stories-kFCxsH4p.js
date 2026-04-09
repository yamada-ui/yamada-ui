import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Fa as n,Ma as r,Mp as i,Ms as a,Na as o,Ns as s,Wm as c,gi as l,hi as u,im as d,iu as f,jp as p,ru as m,vi as h,yi as g}from"./iframe-Dtrri4XQ.js";var _,v,y,b,x;e((()=>{_=t(c(),1),a(),r(),h(),u(),m(),i(),v=d(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{children:`Borders`}),(0,v.jsx)(n,{children:(0,v.jsx)(o,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(g,{each:Object.entries(p),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(f,{children:e}),(0,v.jsx)(f,{color:`fg.muted`,children:t}),(0,v.jsx)(s,{borderTop:e})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x=[`Borders`]}))();export{b as Borders,x as __namedExportsOrder,y as default};