import{j as e}from"./jsx-runtime-DztICxWZ.js";import{C as s}from"./center-D6SfTFGO.js";import{T as i}from"./text-KN7rBBtq.js";import{B as S}from"./box-Ds8SIjx6.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-7Z88KRtK.js";import"./forward-ref-DH6f5tnY.js";import"./use-component-style-DHLtMqa5.js";import"./theme-provider-DsbwOWxu.js";const R={title:"System / Styles / At-rules"},r=()=>e.jsx(s,{borderWidth:"1px",boxSize:"3xs",p:"md",rounded:"md",_media:[{type:"print",css:{color:"red"}}],children:e.jsx(i,{children:"Print me"})}),n=()=>e.jsx(s,{borderWidth:"1px",boxSize:"3xs",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"md",children:e.jsx(i,{_container:[{css:{color:"primary"},maxW:"560px",minW:"320px"}],children:"Resize me"})}),o=()=>e.jsx(s,{borderWidth:"1px",boxSize:"xs",containerName:"parent",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"md",children:e.jsx(s,{borderWidth:"1px",boxSize:"3xs",containerName:"child",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"md",children:e.jsx(i,{_container:[{name:"parent",css:{color:"primary"},orientation:"portrait"},{name:"child",css:{color:"danger"},orientation:"landscape"}],children:"Resize me"})})}),t=()=>e.jsx(S,{_supports:[{css:{color:"red"},query:"(display: flex)"}],children:e.jsx(i,{children:"Supported flex"})});var a,d,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <Center borderWidth="1px" boxSize="3xs" p="md" rounded="md" _media={[{
    type: "print",
    css: {
      color: "red"
    }
  }]}>
      <Text>Print me</Text>
    </Center>;
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Center borderWidth="1px" boxSize="3xs" containerType="size" overflow="auto" p="md" resize="both" rounded="md">
      <Text _container={[{
      css: {
        color: "primary"
      },
      maxW: "560px",
      minW: "320px"
    }]}>
        Resize me
      </Text>
    </Center>;
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var l,u,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Center borderWidth="1px" boxSize="xs" containerName="parent" containerType="size" overflow="auto" p="md" resize="both" rounded="md">
      <Center borderWidth="1px" boxSize="3xs" containerName="child" containerType="size" overflow="auto" p="md" resize="both" rounded="md">
        <Text _container={[{
        name: "parent",
        css: {
          color: "primary"
        },
        orientation: "portrait"
      }, {
        name: "child",
        css: {
          color: "danger"
        },
        orientation: "landscape"
      }]}>
          Resize me
        </Text>
      </Center>
    </Center>;
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,z,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Box _supports={[{
    css: {
      color: "red"
    },
    query: "(display: flex)"
  }]}>
      <Text>Supported flex</Text>
    </Box>;
}`,...(y=(z=t.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const B=["basic","container","withContainerName","supports"];export{B as __namedExportsOrder,r as basic,n as container,R as default,t as supports,o as withContainerName};
