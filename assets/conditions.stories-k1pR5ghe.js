import{j as r,V as g,T as m,Z as e}from"./iframe-DJ0yX4dv.js";import{B as l}from"./box-_dp70Pah.js";import{H as p}from"./h-stack-iypRG99D.js";import{W as b}from"./wrap-DrWITXtC.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DF7MWlRZ.js";const j={title:"Styled System / Conditions"},o=()=>r.jsx(l,{bg:"bg.contrast",color:"fg.contrast",m:"lg",p:"lg",pos:"relative",rounded:"l3",_after:{bg:"secondary",color:"white",content:"'after'",left:"lg",p:"lg",pos:"absolute",rounded:"lg",top:"lg"},children:"Box"}),n=()=>r.jsx(l,{bg:"bg.contrast",color:"fg.contrast",m:"lg",p:"lg",pos:"relative",rounded:"l3",_before:{bg:"secondary",color:"white",content:"'before'",left:"-lg",p:"lg",pos:"absolute",rounded:"lg",top:"-lg"},children:"Box"}),t=()=>r.jsx(l,{bg:"bg.contrast",color:"fg.contrast",cursor:"pointer",p:"md",rounded:"l2",transitionDuration:"slower",transitionProperty:"all",transitionTimingFunction:"ease-in-out",_hover:{bg:"secondary"},children:"Please Hover"}),s=()=>r.jsxs(g,{borderWidth:"1px",focusVisibleRing:"outline",p:"md",role:"group",rounded:"l2",tabIndex:0,w:"auto",children:[r.jsx(m,{textAlign:"center",children:"Focus me!"}),r.jsxs(p,{children:[r.jsx(e,{p:"md",_groupFocus:{color:"success"},children:"1"}),r.jsx(e,{p:"md",_groupFocus:{color:"warning"},children:"2"}),r.jsx(e,{p:"md",_groupFocus:{color:"danger"},children:"3"})]})]}),c=()=>r.jsxs(p,{children:[r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",_peerFocus:{bg:"secondary"},children:"Focus the peer"}),r.jsx(e,{"data-peer":!0,borderWidth:"1px",focusVisibleRing:"outline",p:"md",rounded:"l2",tabIndex:0,children:"Focus me!"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",_peerFocus:{bg:"secondary"},children:"Focus the peer"})]}),a=()=>r.jsx(l,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l3",_portrait:{bg:"secondary"},children:"Box"}),d=()=>{const i=[1,2,3,4,5,6,7,8];return r.jsx(b,{gap:"md",children:i.map(u=>r.jsx(e,{boxSize:"5xs",color:"white",rounded:"l2",_even:{bg:"blue.500"},_odd:{bg:"red.500"},children:u},u))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" m="lg" p="lg" pos="relative" rounded="l3" _after={{
    bg: "secondary",
    color: "white",
    content: "'after'",
    left: "lg",
    p: "lg",
    pos: "absolute",
    rounded: "lg",
    top: "lg"
  }}>
      Box
    </Box>;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" m="lg" p="lg" pos="relative" rounded="l3" _before={{
    bg: "secondary",
    color: "white",
    content: "'before'",
    left: "-lg",
    p: "lg",
    pos: "absolute",
    rounded: "lg",
    top: "-lg"
  }}>
      Box
    </Box>;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" cursor="pointer" p="md" rounded="l2" transitionDuration="slower" transitionProperty="all" transitionTimingFunction="ease-in-out" _hover={{
    bg: "secondary"
  }}>
      Please Hover
    </Box>;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" focusVisibleRing="outline" p="md" role="group" rounded="l2" tabIndex={0} w="auto">
      <Text textAlign="center">Focus me!</Text>

      <HStack>
        <Center p="md" _groupFocus={{
        color: "success"
      }}>
          1
        </Center>
        <Center p="md" _groupFocus={{
        color: "warning"
      }}>
          2
        </Center>
        <Center p="md" _groupFocus={{
        color: "danger"
      }}>
          3
        </Center>
      </HStack>
    </VStack>;
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" _peerFocus={{
      bg: "secondary"
    }}>
        Focus the peer
      </Center>

      <Center data-peer borderWidth="1px" focusVisibleRing="outline" p="md" rounded="l2" tabIndex={0}>
        Focus me!
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="l2" _peerFocus={{
      bg: "secondary"
    }}>
        Focus the peer
      </Center>
    </HStack>;
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" p="md" rounded="l3" _portrait={{
    bg: "secondary"
  }}>
      Box
    </Box>;
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return <Wrap gap="md">
      {numbers.map(number => <Center key={number} boxSize="5xs" color="white" rounded="l2" _even={{
      bg: "blue.500"
    }} _odd={{
      bg: "red.500"
    }}>
          {number}
        </Center>)}
    </Wrap>;
}`,...d.parameters?.docs?.source}}};const B=["After","Before","Hover","Group","Peer","Orientation","Other"];export{o as After,n as Before,s as Group,t as Hover,a as Orientation,d as Other,c as Peer,B as __namedExportsOrder,j as default};
