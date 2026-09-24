import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./font-sizes-CmAv2O6g.js";import{n as a,t as o}from"./text-b2W5euYI.js";import{i as s,r as c,t as l}from"./container-C5kWx763.js";import{n as u,t as d}from"./for-BIl9Q3L3.js";import{n as f,t as p}from"./heading-mQlbK6e0.js";var m,h,g,_,v;function y(){return(y=e((()=>{m=t(),s(),u(),f(),a(),r(),h=n(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{children:`Font Sizes`}),(0,h.jsx)(c,{children:(0,h.jsx)(l,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,h.jsx)(d,{each:Object.entries(i),children:([e,t],n)=>(0,h.jsxs)(m.Fragment,{children:[(0,h.jsx)(o,{children:e}),(0,h.jsx)(o,{color:`fg.muted`,children:t}),(0,h.jsx)(o,{fontSize:e,children:`Ag`})]},n)})})})]}),v=[`FontSizes`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Font Sizes</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(fontSizes)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Text fontSize={token}>Ag</Text>
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as FontSizes,v as __namedExportsOrder,g as default};