import{j as r,Z as e}from"./iframe-DlW9lece.js";import{B as n}from"./box-6lZ3szAV.js";import"./preload-helper-PPVm8Dsz.js";const l={title:"Styled System / CSS"},o=()=>r.jsxs(r.Fragment,{children:[r.jsxs(e,{boxShadow:"0 0 0 1px {colors.primary}",p:"md",rounded:"l2",w:"full",children:["Change ",'"{colors.primary}"',' to "var(--ui-colors-primary)"']}),r.jsxs(e,{border:"{sizes.1} solid {colors.secondary}",p:"md",rounded:"l2",w:"full",children:["Change ",'"{sizes.1}"',' to "var(--ui-sizes-1)"']})]}),s=()=>r.jsx(n,{css:{"--bg":"colors.bg.contrast"},bg:"{bg}",color:"{fg}",p:"md",rounded:"l2","--fg":"colors.fg.contrast",children:"Box"});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Center boxShadow="0 0 0 1px {colors.primary}" p="md" rounded="l2" w="full">
        Change {\`"{colors.primary}"\`} to "var(--ui-colors-primary)"
      </Center>

      <Center border="{sizes.1} solid {colors.secondary}" p="md" rounded="l2" w="full">
        Change {\`"{sizes.1}"\`} to "var(--ui-sizes-1)"
      </Center>
    </>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Box css={{
    "--bg": "colors.bg.contrast"
  }} bg="{bg}" color="{fg}" p="md" rounded="l2" {...{
    "--fg": "colors.fg.contrast"
  }}>
      Box
    </Box>;
}`,...s.parameters?.docs?.source}}};const d=["Interpolation","Variable"];export{o as Interpolation,s as Variable,d as __namedExportsOrder,l as default};
