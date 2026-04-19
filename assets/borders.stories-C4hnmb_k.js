import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Fa as n,Fp as r,Fs as i,La as a,Pa as o,Pp as s,Ps as c,au as l,gi as u,hi as d,ou as f,qm as p,sm as m,vi as h,yi as g}from"./iframe-CXDvaz-K.js";var _,v,y,b,x;e((()=>{_=t(p(),1),c(),o(),h(),d(),l(),r(),v=m(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{children:`Borders`}),(0,v.jsx)(a,{children:(0,v.jsx)(n,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(g,{each:Object.entries(s),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(f,{children:e}),(0,v.jsx)(f,{color:`fg.muted`,children:t}),(0,v.jsx)(i,{borderTop:e})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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