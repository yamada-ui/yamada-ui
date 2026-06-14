import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Ev as n,Fa as r,Fl as i,Lf as a,Ma as o,Pa as s,Pl as c,Q_ as l,Rf as u,Z_ as d,ja as f,ls as p,os as m,ss as h,yy as g}from"./iframe-4z85howq.js";var _,v,y,b,x;t((()=>{_=e(g(),1),c(),m(),s(),f(),a(),l(),v=n(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{children:`Borders`}),(0,v.jsx)(p,{children:(0,v.jsx)(h,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(r,{each:Object.entries(d),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(u,{children:e}),(0,v.jsx)(u,{color:`fg.muted`,children:t}),(0,v.jsx)(i,{borderTop:e})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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