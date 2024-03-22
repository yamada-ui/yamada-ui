import{j as e}from"./jsx-runtime-CKrituN3.js";import{C as t}from"./center-D4kPHTkn.js";import{T as i}from"./text-CKRf8NGT.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-D1MzC1Q2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-i7T2CPTB.js";import"./theme-provider-LCtE2tbw.js";const _={title:"System / Styles / At-rules"},r=()=>e.jsx(t,{p:"md",rounded:"md",borderWidth:"1px",boxSize:"3xs",_media:[{type:"print",css:{color:"red"}}],children:e.jsx(i,{children:"Print me"})}),n=()=>e.jsx(t,{containerType:"size",p:"md",rounded:"md",borderWidth:"1px",resize:"both",overflow:"auto",boxSize:"3xs",children:e.jsx(i,{_container:[{minW:"320px",maxW:"560px",css:{color:"primary"}}],children:"Resize me"})}),o=()=>e.jsx(t,{containerName:"parent",containerType:"size",p:"md",rounded:"md",borderWidth:"1px",resize:"both",overflow:"auto",boxSize:"xs",children:e.jsx(t,{containerName:"child",containerType:"size",p:"md",rounded:"md",borderWidth:"1px",resize:"both",overflow:"auto",boxSize:"3xs",children:e.jsx(i,{_container:[{name:"parent",orientation:"portrait",css:{color:"primary"}},{name:"child",orientation:"landscape",css:{color:"danger"}}],children:"Resize me"})})});var s,a,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Center p="md" rounded="md" borderWidth="1px" boxSize="3xs" _media={[{
    type: "print",
    css: {
      color: "red"
    }
  }]}>
      <Text>Print me</Text>
    </Center>;
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Center containerType="size" p="md" rounded="md" borderWidth="1px" resize="both" overflow="auto" boxSize="3xs">
      <Text _container={[{
      minW: "320px",
      maxW: "560px",
      css: {
        color: "primary"
      }
    }]}>
        Resize me
      </Text>
    </Center>;
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,l,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Center containerName="parent" containerType="size" p="md" rounded="md" borderWidth="1px" resize="both" overflow="auto" boxSize="xs">
      <Center containerName="child" containerType="size" p="md" rounded="md" borderWidth="1px" resize="both" overflow="auto" boxSize="3xs">
        <Text _container={[{
        name: "parent",
        orientation: "portrait",
        css: {
          color: "primary"
        }
      }, {
        name: "child",
        orientation: "landscape",
        css: {
          color: "danger"
        }
      }]}>
          Resize me
        </Text>
      </Center>
    </Center>;
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const w=["basic","container","withContainerName"];export{w as __namedExportsOrder,r as basic,n as container,_ as default,o as withContainerName};
