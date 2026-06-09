import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{$_ as n,Dv as r,Fa as i,Fl as a,Il as o,Ma as s,Pa as c,Q_ as l,Rf as u,by as d,ja as f,ls as p,os as m,ss as h,zf as g}from"./iframe-CM6ym36p.js";var _,v,y,b,x;t((()=>{_=e(d(),1),a(),m(),c(),f(),u(),n(),v=r(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{children:`Borders`}),(0,v.jsx)(p,{children:(0,v.jsx)(h,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(i,{each:Object.entries(l),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(g,{children:e}),(0,v.jsx)(g,{color:`fg.muted`,children:t}),(0,v.jsx)(o,{borderTop:e})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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