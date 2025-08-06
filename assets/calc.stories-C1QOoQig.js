import{j as r,E as e,V as s}from"./iframe-BVYXOt_x.js";import"./preload-helper-D9Z9MdNV.js";const g={title:"Styled System / Calc"},n=()=>r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"calc(md + md)",rounded:"md",w:"calc(lg / 2)",children:"Calc"}),t=()=>r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"calc(md + md)",rounded:"md",w:"calc(lg - calc(2xs * 2))",children:"Calc"}),o=()=>r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"calc(md + md)",rounded:"md",w:"calc(100% / {spaces.2})",children:"Use interpolated token"}),c=()=>r.jsxs(s,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"md",children:[r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"md",w:"min(100%, lg)",children:"Min"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"md",w:"min(100%, calc(md + md))",children:"Min with calc"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"md",w:"min(md)",children:"Omitted Min"})]}),d=()=>r.jsxs(s,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"md",children:[r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"md",w:"max(100%, lg)",children:"Max"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"md",w:"max(100%, calc(md + md))",children:"Max with calc"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"md",w:"max(md)",children:"Omitted Max"})]}),a=()=>r.jsxs(s,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"md",children:[r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"md",w:"clamp(md, 100%, xl)",children:"Clamp"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"md",w:"clamp(md, 100%, calc(md + md))",children:"Clamp with calc"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"md",w:"clamp(md, lg)",children:"Omitted Clamp"})]});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Center bg="bg.contrast" color="fg.contrast" p="calc(md + md)" rounded="md" w="calc(lg / 2)">
      Calc
    </Center>;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Center bg="bg.contrast" color="fg.contrast" p="calc(md + md)" rounded="md" w="calc(lg - calc(2xs * 2))">
      Calc
    </Center>;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Center bg="bg.contrast" color="fg.contrast" p="calc(md + md)" rounded="md" w="calc(100% / {spaces.2})">
      Use interpolated token
    </Center>;
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="md">
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="md" w="min(100%, lg)">
        Min
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="md" w="min(100%, calc(md + md))">
        Min with calc
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="md" w="min(md)">
        Omitted Min
      </Center>
    </VStack>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="md">
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="md" w="max(100%, lg)">
        Max
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="md" w="max(100%, calc(md + md))">
        Max with calc
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="md" w="max(md)">
        Omitted Max
      </Center>
    </VStack>;
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="md">
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="md" w="clamp(md, 100%, xl)">
        Clamp
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="md" w="clamp(md, 100%, calc(md + md))">
        Clamp with calc
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="md" w="clamp(md, lg)">
        Omitted Clamp
      </Center>
    </VStack>;
}`,...a.parameters?.docs?.source}}};const i=["Basic","Nested","NumericToken","Min","Max","Clamp"];export{n as Basic,a as Clamp,d as Max,c as Min,t as Nested,o as NumericToken,i as __namedExportsOrder,g as default};
