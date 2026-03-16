import{j as o,ca as s}from"./iframe-1jXkjttE.js";import{W as e}from"./wrap-CiIIn8a0.js";import{F as t}from"./for-97YvSO2o.js";import{B as m}from"./box-2X7PIZ2Z.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DQXuIXai.js";const h={component:e,title:"Components / Wrap"},r=()=>o.jsx(e,{gap:"md",children:o.jsx(t,{each:s,children:(a,n)=>o.jsx(m,{bg:`${a}.500`,color:"white",p:"md",rounded:"l2",children:"Box"},n)})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={DEFAULT_COLOR_SCHEMES}>
        {(colorScheme, index) => <Box key={index} bg={\`\${colorScheme}.500\`} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Wrap>;
}`,...r.parameters?.docs?.source}}};const u=["Basic"];export{r as Basic,u as __namedExportsOrder,h as default};
