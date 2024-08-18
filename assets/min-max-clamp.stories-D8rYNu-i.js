import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{V as o}from"./stack-CrM9nmUB.js";import{C as e}from"./center-77kfJSFL.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./factory-CgjGrZPJ.js";import"./extends-CF3RwP-h.js";const S={title:"System / Styles / Min Max Clamp"},d=()=>r.jsxs(o,{p:"md",rounded:"md",borderWidth:"1px",resize:"inline",overflow:"auto",children:[r.jsx(e,{w:"min(100%, lg)",bg:"primary",p:"md",rounded:"md",color:"white",children:"Min"}),r.jsx(e,{w:"min(100%, calc(md + md))",bg:"primary",p:"md",rounded:"md",color:"white",children:"Min with calc"}),r.jsx(e,{w:"min(md)",bg:"secondary",p:"md",rounded:"md",color:"white",children:"Omitted Min"})]}),m=()=>r.jsxs(o,{p:"md",rounded:"md",borderWidth:"1px",resize:"inline",overflow:"auto",children:[r.jsx(e,{w:"max(100%, lg)",bg:"primary",p:"md",rounded:"md",color:"white",children:"Max"}),r.jsx(e,{w:"max(100%, calc(md + md))",bg:"primary",p:"md",rounded:"md",color:"white",children:"Max with calc"}),r.jsx(e,{w:"max(md)",bg:"secondary",p:"md",rounded:"md",color:"white",children:"Omitted Max"})]}),n=()=>r.jsxs(o,{p:"md",rounded:"md",borderWidth:"1px",resize:"inline",overflow:"auto",children:[r.jsx(e,{w:"clamp(md, 100%, xl)",bg:"primary",p:"md",rounded:"md",color:"white",children:"Clamp"}),r.jsx(e,{w:"clamp(md, 100%, calc(md + md))",bg:"primary",p:"md",rounded:"md",color:"white",children:"Clamp with calc"}),r.jsx(e,{w:"clamp(md, lg)",bg:"secondary",p:"md",rounded:"md",color:"white",children:"Omitted Clamp"})]});var t,i,a;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <VStack p="md" rounded="md" borderWidth="1px" resize="inline" overflow="auto">
      <Center w="min(100%, lg)" bg="primary" p="md" rounded="md" color="white">
        Min
      </Center>

      <Center w="min(100%, calc(md + md))" bg="primary" p="md" rounded="md" color="white">
        Min with calc
      </Center>

      <Center w="min(md)" bg="secondary" p="md" rounded="md" color="white">
        Omitted Min
      </Center>
    </VStack>;
}`,...(a=(i=d.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,l,p;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <VStack p="md" rounded="md" borderWidth="1px" resize="inline" overflow="auto">
      <Center w="max(100%, lg)" bg="primary" p="md" rounded="md" color="white">
        Max
      </Center>

      <Center w="max(100%, calc(md + md))" bg="primary" p="md" rounded="md" color="white">
        Max with calc
      </Center>

      <Center w="max(md)" bg="secondary" p="md" rounded="md" color="white">
        Omitted Max
      </Center>
    </VStack>;
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var s,w,u;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <VStack p="md" rounded="md" borderWidth="1px" resize="inline" overflow="auto">
      <Center w="clamp(md, 100%, xl)" bg="primary" p="md" rounded="md" color="white">
        Clamp
      </Center>

      <Center w="clamp(md, 100%, calc(md + md))" bg="primary" p="md" rounded="md" color="white">
        Clamp with calc
      </Center>

      <Center w="clamp(md, lg)" bg="secondary" p="md" rounded="md" color="white">
        Omitted Clamp
      </Center>
    </VStack>;
}`,...(u=(w=n.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};const f=["min","max","clamp"];export{f as __namedExportsOrder,n as clamp,S as default,m as max,d as min};
