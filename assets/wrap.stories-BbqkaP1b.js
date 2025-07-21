import{j as o,bp as s}from"./iframe-BbB59fLB.js";import{W as e}from"./wrap-Cub2p6cp.js";import{F as t}from"./for-JwY7aMwm.js";import{B as m}from"./box-B5PL6uw9.js";import"./flex-mIT1fSUh.js";const l={component:e,title:"Components / Wrap"},r=()=>o.jsx(e,{gap:"md",children:o.jsx(t,{each:s,children:(a,n)=>o.jsx(m,{bg:`${a}.500`,color:"white",p:"md",rounded:"l2",children:"Box"},n)})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <For each={DEFAULT_COLOR_SCHEMES}>
        {(colorScheme, index) => <Box key={index} bg={\`\${colorScheme}.500\`} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </Wrap>;
}`,...r.parameters?.docs?.source}}};const h=["Basic"];export{r as Basic,h as __namedExportsOrder,l as default};
