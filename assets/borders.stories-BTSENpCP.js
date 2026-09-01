import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-kkZeYk3H.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-CioY78R0.js";import{t as a}from"./text-D0TQhQLQ.js";import{Al as o,Bf as s,Fa as c,Ia as l,Ma as u,Na as d,cs as f,ds as p,jl as m,ls as h,zf as g}from"./iframe-DgeyRRbK.js";var _,v,y,b,x;t((()=>{_=e(n(),1),o(),f(),c(),u(),a(),s(),v=r(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{children:`Borders`}),(0,v.jsx)(p,{children:(0,v.jsx)(h,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(l,{each:Object.entries(g),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(i,{children:e}),(0,v.jsx)(i,{color:`fg.muted`,children:t}),(0,v.jsx)(m,{borderTop:e})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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