import{j as o,b_ as s}from"./iframe-Cq3rcaMI.js";import{W as e}from"./wrap-BovZRhxo.js";import{F as t}from"./for-CHPKWv_w.js";import{B as m}from"./box-CJbmBmxj.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-hG4eu5He.js";const h={component:e,title:"Components / Wrap"},r=()=>o.jsx(e,{gap:"md",children:o.jsx(t,{each:s,children:(a,n)=>o.jsx(m,{bg:`${a}.500`,color:"white",p:"md",rounded:"l2",children:"Box"},n)})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={DEFAULT_COLOR_SCHEMES}>
        {(colorScheme, index) => <Box key={index} bg={\`\${colorScheme}.500\`} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Wrap>;
}`,...r.parameters?.docs?.source}}};const u=["Basic"];export{r as Basic,u as __namedExportsOrder,h as default};
