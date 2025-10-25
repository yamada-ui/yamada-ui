import{ar as a,j as e,T as r,r as c,V as i}from"./iframe-5QspZtQ-.js";import{B as l}from"./box--AjZ-gTJ.js";import"./preload-helper-PPVm8Dsz.js";const p={component:a,parameters:{layout:"centered"},title:"Components / Portal"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"元の世界"}),e.jsx(a,{children:e.jsx(r,{children:"ナツキ・スバル"})})]}),n=()=>{const o=c.useRef(null);return e.jsxs(i,{children:[e.jsx(r,{children:"元の世界"}),e.jsx(a,{containerRef:o,children:e.jsx(r,{children:"ナツキ・スバル"})}),e.jsx(l,{ref:o,bg:"bg.contrast",color:"fg.contrast",p:"md",children:e.jsx(r,{children:"エミリアたん"})})]})},s=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"元の世界"}),e.jsx(a,{disabled:!0,children:e.jsx(r,{children:"ナツキ・スバル"})})]});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Text>元の世界</Text>
      <Portal>
        <Text>ナツキ・スバル</Text>
      </Portal>
    </>;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const containerRef = useRef<HTMLDivElement>(null);
  return <VStack>
      <Text>元の世界</Text>
      <Portal containerRef={containerRef}>
        <Text>ナツキ・スバル</Text>
      </Portal>
      <Box ref={containerRef} bg="bg.contrast" color="fg.contrast" p="md">
        <Text>エミリアたん</Text>
      </Box>
    </VStack>;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Text>元の世界</Text>
      <Portal disabled>
        <Text>ナツキ・スバル</Text>
      </Portal>
    </>;
}`,...s.parameters?.docs?.source}}};const u=["Basic","ChangeDestination","Disabled"];export{t as Basic,n as ChangeDestination,s as Disabled,u as __namedExportsOrder,p as default};
