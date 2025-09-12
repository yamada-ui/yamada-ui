import{j as r,N as s}from"./iframe-Bn8cMbTR.js";import{B as n}from"./box-BUG0hLOH.js";import"./preload-helper-D9Z9MdNV.js";const l={title:"Styled System / CSS"},o=()=>r.jsxs(r.Fragment,{children:[r.jsxs(s,{boxShadow:"0 0 0 1px {colors.primary}",color:"white",p:"md",rounded:"l2",w:"full",children:["Change ",'"{colors.primary}"',' to "var(--ui-colors-primary)"']}),r.jsxs(s,{border:"{sizes.1} solid {colors.secondary}",color:"white",p:"md",rounded:"l2",w:"full",children:["Change ",'"{sizes.1}"',' to "var(--ui-sizes-1)"']})]}),e=()=>r.jsx(n,{css:{"--bg":"colors.bg.contrast"},bg:"{bg}",color:"{fg}",p:"md",rounded:"l2","--fg":"colors.fg.contrast",children:"Box"});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Center boxShadow="0 0 0 1px {colors.primary}" color="white" p="md" rounded="l2" w="full">
        Change {\`"{colors.primary}"\`} to "var(--ui-colors-primary)"
      </Center>

      <Center border="{sizes.1} solid {colors.secondary}" color="white" p="md" rounded="l2" w="full">
        Change {\`"{sizes.1}"\`} to "var(--ui-sizes-1)"
      </Center>
    </>;
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <Box css={{
    "--bg": "colors.bg.contrast"
  }} bg="{bg}" color="{fg}" p="md" rounded="l2" {...{
    "--fg": "colors.fg.contrast"
  }}>
      Box
    </Box>;
}`,...e.parameters?.docs?.source}}};const d=["Interpolation","Variable"];export{o as Interpolation,e as Variable,d as __namedExportsOrder,l as default};
