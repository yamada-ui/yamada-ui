import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{n as i,t as a}from"./borders-HZXWnyLq.js";import{t as o}from"./text-DSMMc5B6.js";import{t as s}from"./text-BM4F8FHS.js";import{t as c}from"./box-D_8v7EGt.js";import{t as l}from"./heading-DnIVTUkI.js";import{Fo as u,Gi as d,Hr as f,Ur as p,Wi as m,Wr as h,qi as g}from"./iframe-DjYq9Cb7.js";var _,v,y,b,x;e((()=>{_=t(n(),1),u(),m(),p(),f(),s(),i(),v=r(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{children:`Borders`}),(0,v.jsx)(g,{children:(0,v.jsx)(d,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(h,{each:Object.entries(a),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(o,{children:e}),(0,v.jsx)(o,{color:`fg.muted`,children:t}),(0,v.jsx)(c,{borderTop:e})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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