import{j as o,bo as s}from"./iframe-6cyGxZR1.js";import{W as e}from"./wrap-CND43N8c.js";import{F as t}from"./for-DFrhp0eJ.js";import{B as m}from"./box-BQQGFgNV.js";import"./flex-BPUJT_MQ.js";const l={component:e,title:"Components / Wrap"},r=()=>o.jsx(e,{gap:"md",children:o.jsx(t,{each:s,children:(a,n)=>o.jsx(m,{bg:`${a}.500`,color:"white",p:"md",rounded:"l2",children:"Box"},n)})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={DEFAULT_COLOR_SCHEMES}>
        {(colorScheme, index) => <Box key={index} bg={\`\${colorScheme}.500\`} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Wrap>;
}`,...r.parameters?.docs?.source}}};const h=["Basic"];export{r as Basic,h as __namedExportsOrder,l as default};
