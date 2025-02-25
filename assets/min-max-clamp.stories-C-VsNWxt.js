import{j as r}from"./jsx-runtime-BpbtHYHY.js";import{V as o}from"./stack-BP8LKMVN.js";import{C as e}from"./center-B3pLLn64.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-Ukjd1cIW.js";import"./factory-DbNU74ts.js";const j={title:"System / Styles / Min Max Clamp"},d=()=>r.jsxs(o,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"md",children:[r.jsx(e,{bg:"primary",color:"white",p:"md",rounded:"md",w:"min(100%, lg)",children:"Min"}),r.jsx(e,{bg:"primary",color:"white",p:"md",rounded:"md",w:"min(100%, calc(md + md))",children:"Min with calc"}),r.jsx(e,{bg:"secondary",color:"white",p:"md",rounded:"md",w:"min(md)",children:"Omitted Min"})]}),n=()=>r.jsxs(o,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"md",children:[r.jsx(e,{bg:"primary",color:"white",p:"md",rounded:"md",w:"max(100%, lg)",children:"Max"}),r.jsx(e,{bg:"primary",color:"white",p:"md",rounded:"md",w:"max(100%, calc(md + md))",children:"Max with calc"}),r.jsx(e,{bg:"secondary",color:"white",p:"md",rounded:"md",w:"max(md)",children:"Omitted Max"})]}),m=()=>r.jsxs(o,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"md",children:[r.jsx(e,{bg:"primary",color:"white",p:"md",rounded:"md",w:"clamp(md, 100%, xl)",children:"Clamp"}),r.jsx(e,{bg:"primary",color:"white",p:"md",rounded:"md",w:"clamp(md, 100%, calc(md + md))",children:"Clamp with calc"}),r.jsx(e,{bg:"secondary",color:"white",p:"md",rounded:"md",w:"clamp(md, lg)",children:"Omitted Clamp"})]});var t,i,a;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="md">
      <Center bg="primary" color="white" p="md" rounded="md" w="min(100%, lg)">
        Min
      </Center>

      <Center bg="primary" color="white" p="md" rounded="md" w="min(100%, calc(md + md))">
        Min with calc
      </Center>

      <Center bg="secondary" color="white" p="md" rounded="md" w="min(md)">
        Omitted Min
      </Center>
    </VStack>;
}`,...(a=(i=d.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="md">
      <Center bg="primary" color="white" p="md" rounded="md" w="max(100%, lg)">
        Max
      </Center>

      <Center bg="primary" color="white" p="md" rounded="md" w="max(100%, calc(md + md))">
        Max with calc
      </Center>

      <Center bg="secondary" color="white" p="md" rounded="md" w="max(md)">
        Omitted Max
      </Center>
    </VStack>;
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var s,w,u;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="md">
      <Center bg="primary" color="white" p="md" rounded="md" w="clamp(md, 100%, xl)">
        Clamp
      </Center>

      <Center bg="primary" color="white" p="md" rounded="md" w="clamp(md, 100%, calc(md + md))">
        Clamp with calc
      </Center>

      <Center bg="secondary" color="white" p="md" rounded="md" w="clamp(md, lg)">
        Omitted Clamp
      </Center>
    </VStack>;
}`,...(u=(w=m.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};const S=["min","max","clamp"];export{S as __namedExportsOrder,m as clamp,j as default,n as max,d as min};
