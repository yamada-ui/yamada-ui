import{j as o,c9 as s}from"./iframe-BkSt7vyM.js";import{W as e}from"./wrap-a6hFSvA_.js";import{F as t}from"./for-B9rKCkzX.js";import{B as m}from"./box-D31hHSyQ.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-BpaptubY.js";const h={component:e,title:"Components / Wrap"},r=()=>o.jsx(e,{gap:"md",children:o.jsx(t,{each:s,children:(a,n)=>o.jsx(m,{bg:`${a}.500`,color:"white",p:"md",rounded:"l2",children:"Box"},n)})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={DEFAULT_COLOR_SCHEMES}>
        {(colorScheme, index) => <Box key={index} bg={\`\${colorScheme}.500\`} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Wrap>;
}`,...r.parameters?.docs?.source}}};const u=["Basic"];export{r as Basic,u as __namedExportsOrder,h as default};
