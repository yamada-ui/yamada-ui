import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Bf as n,Du as r,Eu as i,Jr as a,Vf as o,Xp as s,Xr as c,Zr as l,da as u,ds as d,pa as f,pp as p,qr as m,ua as h,us as g}from"./iframe-DZGIdQv0.js";var _,v,y,b,x;e((()=>{_=t(s(),1),g(),h(),c(),m(),i(),o(),v=p(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{children:`Borders`}),(0,v.jsx)(f,{children:(0,v.jsx)(u,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(l,{each:Object.entries(n),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(r,{children:e}),(0,v.jsx)(r,{color:`fg.muted`,children:t}),(0,v.jsx)(d,{borderTop:e})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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