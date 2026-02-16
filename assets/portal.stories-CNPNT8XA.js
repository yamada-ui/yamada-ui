import{ar as a,j as e,T as r,r as h,V as j}from"./iframe-Bh9OJiMa.js";import{B as f}from"./box-Bg2AiZ11.js";import"./preload-helper-C1FmrZbK.js";const R={component:a,parameters:{layout:"centered"},title:"Components / Portal"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"元の世界"}),e.jsx(a,{children:e.jsx(r,{children:"ナツキ・スバル"})})]}),n=()=>{const o=h.useRef(null);return e.jsxs(j,{children:[e.jsx(r,{children:"元の世界"}),e.jsx(a,{containerRef:o,children:e.jsx(r,{children:"ナツキ・スバル"})}),e.jsx(f,{ref:o,bg:"bg.contrast",color:"fg.contrast",p:"md",children:e.jsx(r,{children:"エミリアたん"})})]})},s=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"元の世界"}),e.jsx(a,{disabled:!0,children:e.jsx(r,{children:"ナツキ・スバル"})})]});var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <>
      <Text>元の世界</Text>
      <Portal>
        <Text>ナツキ・スバル</Text>
      </Portal>
    </>;
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var x,d,m;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,T;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <>
      <Text>元の世界</Text>
      <Portal disabled>
        <Text>ナツキ・スバル</Text>
      </Portal>
    </>;
}`,...(T=(u=s.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const B=["Basic","ChangeDestination","Disabled"];export{t as Basic,n as ChangeDestination,s as Disabled,B as __namedExportsOrder,R as default};
