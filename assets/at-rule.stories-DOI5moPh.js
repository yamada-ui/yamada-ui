import{j as e,W as r,T as n,Q as W}from"./iframe-XZIatxOZ.js";import{u as _}from"./index-DSEObzUe.js";import{B}from"./box-BrwSXzyv.js";import"./preload-helper-C1FmrZbK.js";const k={title:"Styled System / At-rule"},t=()=>e.jsx(r,{borderWidth:"1px",boxSize:"3xs",p:"md",rounded:"l2",_print:{color:"success"},children:e.jsx(n,{children:"Print me"})}),o=()=>e.jsx(r,{borderWidth:"1px",boxSize:"3xs",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(n,{_container:[{css:{color:"success"},maxW:"560px",minW:"320px"}],children:"Resize me"})}),s=()=>e.jsx(r,{borderWidth:"1px",boxSize:"xs",containerName:"parent",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(r,{borderWidth:"1px",boxSize:"3xs",containerName:"child",containerType:"size",overflow:"auto",p:"md",resize:"both",rounded:"l2",children:e.jsx(n,{_container:[{name:"parent",css:{color:"success"},orientation:"portrait"},{name:"child",css:{color:"danger"},orientation:"landscape"}],children:"Resize me"})})}),a=()=>e.jsx(B,{_supports:[{css:{color:"success"},query:"(display: flex)"}],children:e.jsx(n,{children:"Supported flex"})}),c=()=>{const[C,{toggle:j}]=_();return e.jsxs(e.Fragment,{children:[e.jsx(W,{onClick:j,children:"Toggle"}),C?e.jsx(r,{bg:"bg.contrast",color:"fg.contrast",p:"md",transition:"all 0.3s ease-out",w:"fit-content",_startingStyle:{opacity:0,transform:"translateY(-20px)"},children:e.jsx(n,{children:"Starting style"})}):null]})};var i,d,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Center borderWidth="1px" boxSize="3xs" p="md" rounded="l2" _print={{
    color: "success"
  }}>
      <Text>Print me</Text>
    </Center>;
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,u,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var m,h,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,b,z;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Box _supports={[{
    css: {
      color: "success"
    },
    query: "(display: flex)"
  }]}>
      <Text>Supported flex</Text>
    </Box>;
}`,...(z=(b=a.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var f,y,T;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const q=["Basic","Container","ContainerName","Supports","StartingStyle"];export{t as Basic,o as Container,s as ContainerName,c as StartingStyle,a as Supports,q as __namedExportsOrder,k as default};
