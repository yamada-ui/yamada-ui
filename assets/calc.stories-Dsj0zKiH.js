import{j as r,W as e,V as s}from"./iframe-LqombrNM.js";import"./preload-helper-C1FmrZbK.js";const z={title:"Styled System / Calc"},n=()=>r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"calc(md + md)",rounded:"l2",w:"calc(lg / 2)",children:"Calc"}),t=()=>r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"calc(md + md)",rounded:"l2",w:"calc(lg - calc(2xs * 2))",children:"Calc"}),o=()=>r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"calc(md + md)",rounded:"l2",w:"calc(100% / {spaces.2})",children:"Use interpolated token"}),c=()=>r.jsxs(s,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"l2",children:[r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",w:"min(100%, lg)",children:"Min"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",w:"min(100%, calc(md + md))",children:"Min with calc"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",w:"min(md)",children:"Omitted Min"})]}),a=()=>r.jsxs(s,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"l2",children:[r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",w:"max(100%, lg)",children:"Max"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",w:"max(100%, calc(md + md))",children:"Max with calc"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",w:"max(md)",children:"Omitted Max"})]}),d=()=>r.jsxs(s,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"l2",children:[r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",w:"clamp(md, 100%, xl)",children:"Clamp"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",w:"clamp(md, 100%, calc(md + md))",children:"Clamp with calc"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",w:"clamp(md, lg)",children:"Omitted Clamp"})]});var l,m,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Center bg="bg.contrast" color="fg.contrast" p="calc(md + md)" rounded="l2" w="calc(lg / 2)">
      Calc
    </Center>;
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var i,p,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Center bg="bg.contrast" color="fg.contrast" p="calc(md + md)" rounded="l2" w="calc(lg - calc(2xs * 2))">
      Calc
    </Center>;
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,x,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Center bg="bg.contrast" color="fg.contrast" p="calc(md + md)" rounded="l2" w="calc(100% / {spaces.2})">
      Use interpolated token
    </Center>;
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var w,f,h;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="min(100%, lg)">
        Min
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="min(100%, calc(md + md))">
        Min with calc
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="min(md)">
        Omitted Min
      </Center>
    </VStack>;
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,M,S;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="max(100%, lg)">
        Max
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="max(100%, calc(md + md))">
        Max with calc
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="max(md)">
        Omitted Max
      </Center>
    </VStack>;
}`,...(S=(M=a.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var k,V,O;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="clamp(md, 100%, xl)">
        Clamp
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="clamp(md, 100%, calc(md + md))">
        Clamp with calc
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" w="clamp(md, lg)">
        Omitted Clamp
      </Center>
    </VStack>;
}`,...(O=(V=d.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const N=["Basic","Nested","NumericToken","Min","Max","Clamp"];export{n as Basic,d as Clamp,a as Max,c as Min,t as Nested,o as NumericToken,N as __namedExportsOrder,z as default};
