import{j as e,W as r,T as n,Q as l}from"./iframe-BkSt7vyM.js";import{u as p}from"./index-I2nvmVQ6.js";import{B as u}from"./box-D31hHSyQ.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Styled System / At-rule"},t=()=>e.jsx(r,{borderWidth:"1px",boxSize:"3xs",p:"md",rounded:"l2",_print:{color:"success"},children:e.jsx(n,{children:"Print me"})}),o=()=>e.jsx(r,{borderWidth:"1px",boxSize:"3xs",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(n,{_container:[{css:{color:"success"},maxW:"560px",minW:"320px"}],children:"Resize me"})}),s=()=>e.jsx(r,{borderWidth:"1px",boxSize:"xs",containerName:"parent",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(r,{borderWidth:"1px",boxSize:"3xs",containerName:"child",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(n,{_container:[{name:"parent",css:{color:"success"},orientation:"portrait"},{name:"child",css:{color:"danger"},orientation:"landscape"}],children:"Resize me"})})}),a=()=>e.jsx(u,{_supports:[{css:{color:"success"},query:"(display: flex)"}],children:e.jsx(n,{children:"Supported flex"})}),c=()=>{const[i,{toggle:d}]=p();return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:d,children:"Toggle"}),i?e.jsx(r,{bg:"bg.contrast",color:"fg.contrast",p:"md",transition:"all 0.3s ease-out",w:"fit-content",_startingStyle:{opacity:0,transform:"translateY(-20px)"},children:e.jsx(n,{children:"Starting style"})}):null]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Center borderWidth="1px" boxSize="3xs" p="md" rounded="l2" _print={{
    color: "success"
  }}>
      <Text>Print me</Text>
    </Center>;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Box _supports={[{
    css: {
      color: "success"
    },
    query: "(display: flex)"
  }]}>
      <Text>Supported flex</Text>
    </Box>;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Toggle</Button>
      {open ? <Center bg="bg.contrast" color="fg.contrast" p="md" transition="all 0.3s ease-out" w="fit-content" _startingStyle={{
      opacity: 0,
      transform: "translateY(-20px)"
    }}>
          <Text>Starting style</Text>
        </Center> : null}
    </>;
}`,...c.parameters?.docs?.source}}};const b=["Basic","Container","ContainerName","Supports","StartingStyle"];export{t as Basic,o as Container,s as ContainerName,c as StartingStyle,a as Supports,b as __namedExportsOrder,S as default};
