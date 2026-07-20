import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-ljAYVXXn.js";import{t as a}from"./text-DGi1MGSU.js";import{Fa as o,Hf as s,Ia as c,Ma as l,Na as u,Nl as d,Pl as f,Uf as p,ds as m,fs as h,ms as g}from"./iframe-DQX-AWnu.js";var _,v,y,b,x;t((()=>{_=e(n(),1),d(),m(),o(),l(),a(),p(),v=r(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{children:`Borders`}),(0,v.jsx)(g,{children:(0,v.jsx)(h,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(c,{each:Object.entries(s),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(i,{children:e}),(0,v.jsx)(i,{color:`fg.muted`,children:t}),(0,v.jsx)(f,{borderTop:e})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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