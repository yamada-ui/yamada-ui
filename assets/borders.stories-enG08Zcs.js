import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-wFqrq6bG.js";import{t as a}from"./text-hCwie9gl.js";import{Fl as o,Ia as s,La as c,Na as l,Pa as u,Pl as d,Uf as f,Wf as p,fs as m,hs as h,ps as g}from"./iframe-DeULREvG.js";var _,v,y,b,x;t((()=>{_=e(n(),1),d(),m(),s(),l(),a(),p(),v=r(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{children:`Borders`}),(0,v.jsx)(h,{children:(0,v.jsx)(g,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,v.jsx)(c,{each:Object.entries(f),children:([e,t],n)=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(i,{children:e}),(0,v.jsx)(i,{color:`fg.muted`,children:t}),(0,v.jsx)(o,{borderTop:e})]},n)})})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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