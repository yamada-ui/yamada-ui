import{j as e,W as t,T as a}from"./iframe-D_HYglKf.js";import{B as T}from"./box-Dq_m1DJN.js";import"./preload-helper-C1FmrZbK.js";const y={title:"Styled System / At-rule"},r=()=>e.jsx(t,{borderWidth:"1px",boxSize:"3xs",p:"md",rounded:"l2",_print:{color:"success"},children:e.jsx(a,{children:"Print me"})}),n=()=>e.jsx(t,{borderWidth:"1px",boxSize:"3xs",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(a,{_container:[{css:{color:"success"},maxW:"560px",minW:"320px"}],children:"Resize me"})}),o=()=>e.jsx(t,{borderWidth:"1px",boxSize:"xs",containerName:"parent",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(t,{borderWidth:"1px",boxSize:"3xs",containerName:"child",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(a,{_container:[{name:"parent",css:{color:"success"},orientation:"portrait"},{name:"child",css:{color:"danger"},orientation:"landscape"}],children:"Resize me"})})}),s=()=>e.jsx(T,{_supports:[{css:{color:"success"},query:"(display: flex)"}],children:e.jsx(a,{children:"Supported flex"})});var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Center borderWidth="1px" boxSize="3xs" p="md" rounded="l2" _print={{
    color: "success"
  }}>
      <Text>Print me</Text>
    </Center>;
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,x,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Center borderWidth="1px" boxSize="3xs" containerType="size" overflow="auto" p="md" resize="both" rounded="l2">
      <Text _container={[{
      css: {
        color: "success"
      },
      maxW: "560px",
      minW: "320px"
    }]}>
        Resize me
      </Text>
    </Center>;
}`,...(l=(x=n.parameters)==null?void 0:x.docs)==null?void 0:l.source}}};var u,m,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Center borderWidth="1px" boxSize="xs" containerName="parent" containerType="size" overflow="auto" p="md" resize="both" rounded="l2">
      <Center borderWidth="1px" boxSize="3xs" containerName="child" containerType="size" overflow="auto" p="md" resize="both" rounded="l2">
        <Text _container={[{
        name: "parent",
        css: {
          color: "success"
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
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var z,b,S;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Box _supports={[{
    css: {
      color: "success"
    },
    query: "(display: flex)"
  }]}>
      <Text>Supported flex</Text>
    </Box>;
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const j=["Basic","Container","ContainerName","Supports"];export{r as Basic,n as Container,o as ContainerName,s as Supports,j as __namedExportsOrder,y as default};
