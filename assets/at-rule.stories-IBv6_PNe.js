import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{t as n}from"./text-DSMMc5B6.js";import{t as r}from"./text-BM4F8FHS.js";import{t as i}from"./center-B9iB-Iph.js";import{t as a}from"./center-DwGXhAh8.js";import{l as o,t as s}from"./button-C66K-mOB.js";import{t as c}from"./box-D_8v7EGt.js";import{n as l,t as u}from"./use-boolean-DYW0OEzi.js";import{Fo as d}from"./iframe-D9C-laXS.js";var f,p,m,h,g,_,v,y;e((()=>{d(),s(),a(),r(),u(),f=t(),p={title:`Styled System / At-rule`},m=()=>(0,f.jsx)(i,{borderWidth:`1px`,boxSize:`3xs`,p:`md`,rounded:`l2`,_print:{color:`success`},children:(0,f.jsx)(n,{children:`Print me`})}),h=()=>(0,f.jsx)(i,{borderWidth:`1px`,boxSize:`3xs`,containerType:`size`,overflow:`auto`,p:`md`,resize:`both`,rounded:`l2`,children:(0,f.jsx)(n,{_container:[{css:{color:`success`},maxW:`560px`,minW:`320px`}],children:`Resize me`})}),g=()=>(0,f.jsx)(i,{borderWidth:`1px`,boxSize:`xs`,containerName:`parent`,containerType:`size`,overflow:`auto`,p:`md`,resize:`both`,rounded:`l2`,children:(0,f.jsx)(i,{borderWidth:`1px`,boxSize:`3xs`,containerName:`child`,containerType:`size`,overflow:`auto`,p:`md`,resize:`both`,rounded:`l2`,children:(0,f.jsx)(n,{_container:[{name:`parent`,css:{color:`success`},orientation:`portrait`},{name:`child`,css:{color:`danger`},orientation:`landscape`}],children:`Resize me`})})}),_=()=>(0,f.jsx)(c,{_supports:[{css:{color:`success`},query:`(display: flex)`}],children:(0,f.jsx)(n,{children:`Supported flex`})}),v=()=>{let[e,{toggle:t}]=l();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{onClick:t,children:`Toggle`}),e?(0,f.jsx)(i,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,transition:`all 0.3s ease-out`,w:`fit-content`,_startingStyle:{opacity:0,transform:`translateY(-20px)`},children:(0,f.jsx)(n,{children:`Starting style`})}):null]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Center borderWidth="1px" boxSize="3xs" p="md" rounded="l2" _print={{
    color: "success"
  }}>
      <Text>Print me</Text>
    </Center>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Box _supports={[{
    css: {
      color: "success"
    },
    query: "(display: flex)"
  }]}>
      <Text>Supported flex</Text>
    </Box>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`Container`,`ContainerName`,`Supports`,`StartingStyle`]}))();export{m as Basic,h as Container,g as ContainerName,v as StartingStyle,_ as Supports,y as __namedExportsOrder,p as default};