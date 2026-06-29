import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{t as i}from"./text-ClYKebxE.js";import{t as a}from"./text-B2Y0ht7H.js";import{Aa as o,Cf as s,Ma as c,Na as l,Sf as u,as as d,is as f,ka as p,ss as m}from"./iframe-DpVGHWSQ.js";var h,g,_,v,y;t((()=>{h=e(n(),1),f(),c(),p(),a(),s(),g=r(),_={title:`Theme / Tokens`},v=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{children:`Font Weights`}),(0,g.jsx)(m,{children:(0,g.jsx)(d,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,g.jsx)(l,{each:Object.entries(u),children:([e,t],n)=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(i,{children:e}),(0,g.jsx)(i,{color:`fg.muted`,children:t}),(0,g.jsx)(i,{fontSize:`2xl`,fontWeight:e,children:`Ag`})]},n)})})})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Font Weights</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(fontWeights)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Text fontSize="2xl" fontWeight={token}>
                  Ag
                </Text>
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...v.parameters?.docs?.source}}},y=[`FontWeights`]}))();export{v as FontWeights,y as __namedExportsOrder,_ as default};