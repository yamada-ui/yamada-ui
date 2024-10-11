import{j as e}from"./extends-CwFRzn3r.js";import{C as s}from"./center-BZRwAKPP.js";import{T as i}from"./text-CdDC9Ji7.js";import{B as S}from"./box-CTROe-BY.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-uBtAHRUq.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-Dk4hKw8J.js";import"./theme-provider-CXgbrDrx.js";const R={title:"System / Styles / At-rules"},r=()=>e.jsx(s,{borderWidth:"1px",boxSize:"3xs",p:"md",rounded:"md",_media:[{type:"print",css:{color:"red"}}],children:e.jsx(i,{children:"Print me"})}),n=()=>e.jsx(s,{borderWidth:"1px",boxSize:"3xs",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"md",children:e.jsx(i,{_container:[{css:{color:"primary"},maxW:"560px",minW:"320px"}],children:"Resize me"})}),o=()=>e.jsx(s,{borderWidth:"1px",boxSize:"xs",containerName:"parent",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"md",children:e.jsx(s,{borderWidth:"1px",boxSize:"3xs",containerName:"child",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"md",children:e.jsx(i,{_container:[{name:"parent",css:{color:"primary"},orientation:"portrait"},{name:"child",css:{color:"danger"},orientation:"landscape"}],children:"Resize me"})})}),t=()=>e.jsx(S,{_supports:[{css:{color:"red"},query:"(display: flex)"}],children:e.jsx(i,{children:"Supported flex"})});var a,d,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
