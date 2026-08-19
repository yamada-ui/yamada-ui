import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-6la-NVAW.js";import{t as r}from"./text-D2YSsabI.js";import{Af as i,Cn as a,Fa as o,Ia as s,Ma as c,Na as l,cs as u,ds as d,kf as f,ls as p,wn as m}from"./iframe-CyVxCk5b.js";var h,g,_,v;e((()=>{u(),o(),c(),a(),r(),i(),h=t(),g={title:`Theme / Tokens`},_=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{children:`Fonts`}),(0,h.jsx)(d,{children:(0,h.jsx)(p,{gap:`lg`,children:(0,h.jsx)(s,{each:Object.entries(f),children:([e,t],r)=>(0,h.jsxs)(m,{gap:`xs`,children:[(0,h.jsx)(n,{fontFamily:e,fontSize:`2xl`,children:`Ag`}),(0,h.jsx)(n,{children:e}),(0,h.jsx)(n,{color:`fg.muted`,children:t})]},r)})})})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Fonts</Heading>

      <Container.Root>
        <Container.Body gap="lg">
          <For each={Object.entries(fonts)}>
            {([token, value], index) => <VStack key={index} gap="xs">
                <Text fontFamily={token} fontSize="2xl">
                  Ag
                </Text>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </VStack>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,..._.parameters?.docs?.source}}},v=[`Fonts`]}))();export{_ as Fonts,v as __namedExportsOrder,g as default};