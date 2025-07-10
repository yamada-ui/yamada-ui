import{j as o,bn as s}from"./iframe-BG38LAQ9.js";import{W as e}from"./wrap-D_uUB3Mo.js";import{F as t}from"./for-1Jrr3mXT.js";import{B as m}from"./box-CvTUj01L.js";import"./flex-BnFbM7LR.js";const l={component:e,title:"Components / Wrap"},r=()=>o.jsx(e,{gap:"md",children:o.jsx(t,{each:s,children:(a,n)=>o.jsx(m,{bg:`${a}.500`,color:"white",p:"md",rounded:"l2",children:"Box"},n)})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={DEFAULT_COLOR_SCHEMES}>
        {(colorScheme, index) => <Box key={index} bg={\`\${colorScheme}.500\`} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Wrap>;
}`,...r.parameters?.docs?.source}}};const h=["Basic"];export{r as Basic,h as __namedExportsOrder,l as default};
