import{j as e,Z as t,T as a}from"./iframe-C__kp2ks.js";import{B as i}from"./box-CzhcZ9L5.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Styled System / At-rule"},r=()=>e.jsx(t,{borderWidth:"1px",boxSize:"3xs",p:"md",rounded:"l2",_print:{color:"success"},children:e.jsx(a,{children:"Print me"})}),n=()=>e.jsx(t,{borderWidth:"1px",boxSize:"3xs",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(a,{_container:[{css:{color:"success"},maxW:"560px",minW:"320px"}],children:"Resize me"})}),o=()=>e.jsx(t,{borderWidth:"1px",boxSize:"xs",containerName:"parent",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(t,{borderWidth:"1px",boxSize:"3xs",containerName:"child",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(a,{_container:[{name:"parent",css:{color:"success"},orientation:"portrait"},{name:"child",css:{color:"danger"},orientation:"landscape"}],children:"Resize me"})})}),s=()=>e.jsx(i,{_supports:[{css:{color:"success"},query:"(display: flex)"}],children:e.jsx(a,{children:"Supported flex"})});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Center borderWidth="1px" boxSize="3xs" p="md" rounded="l2" _print={{
    color: "success"
  }}>
      <Text>Print me</Text>
    </Center>;
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Box _supports={[{
    css: {
      color: "success"
    },
    query: "(display: flex)"
  }]}>
      <Text>Supported flex</Text>
    </Box>;
}`,...s.parameters?.docs?.source}}};const l=["Basic","Container","ContainerName","Supports"];export{r as Basic,n as Container,o as ContainerName,s as Supports,l as __namedExportsOrder,x as default};
