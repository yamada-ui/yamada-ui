import{j as r,V as i,T as m,E as e}from"./iframe-BVYXOt_x.js";import{B as u}from"./box-Bkdbk87i.js";import{H as p}from"./h-stack-CO-yE6kv.js";import{W as b}from"./wrap-BORFysRF.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-DrgWVwNM.js";const j={title:"Styled System / Conditions"},o=()=>r.jsx(u,{bg:"bg.contrast",color:"fg.contrast",m:"lg",p:"lg",pos:"relative",rounded:"lg",_after:{bg:"secondary",color:"white",content:"'after'",left:"lg",p:"lg",pos:"absolute",rounded:"lg",top:"lg"},children:"Box"}),n=()=>r.jsx(u,{bg:"bg.contrast",color:"fg.contrast",m:"lg",p:"lg",pos:"relative",rounded:"lg",_before:{bg:"secondary",color:"white",content:"'before'",left:"-lg",p:"lg",pos:"absolute",rounded:"lg",top:"-lg"},children:"Box"}),t=()=>r.jsx(u,{bg:"bg.contrast",color:"fg.contrast",cursor:"pointer",p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",transitionTimingFunction:"ease-in-out",_hover:{bg:"secondary"},children:"Please Hover"}),s=()=>r.jsxs(i,{borderWidth:"1px",focusVisibleRing:"outline",p:"md",role:"group",rounded:"md",tabIndex:0,w:"auto",children:[r.jsx(m,{textAlign:"center",children:"Focus me!"}),r.jsxs(p,{children:[r.jsx(e,{p:"md",_groupFocus:{color:"success"},children:"1"}),r.jsx(e,{p:"md",_groupFocus:{color:"warning"},children:"2"}),r.jsx(e,{p:"md",_groupFocus:{color:"danger"},children:"3"})]})]}),c=()=>r.jsxs(p,{children:[r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"md",_peerFocus:{bg:"secondary"},children:"Focus the peer"}),r.jsx(e,{"data-peer":!0,borderWidth:"1px",focusVisibleRing:"outline",p:"md",rounded:"md",tabIndex:0,children:"Focus me!"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"md",_peerFocus:{bg:"secondary"},children:"Focus the peer"})]}),a=()=>r.jsx(u,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"lg",_portrait:{bg:"secondary"},children:"Box"}),d=()=>{const g=[1,2,3,4,5,6,7,8];return r.jsx(b,{gap:"md",children:g.map(l=>r.jsx(e,{boxSize:"5xs",color:"white",rounded:"md",_even:{bg:"blue.500"},_odd:{bg:"red.500"},children:l},l))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" m="lg" p="lg" pos="relative" rounded="lg" _after={{
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
  return <Box bg="bg.contrast" color="fg.contrast" m="lg" p="lg" pos="relative" rounded="lg" _before={{
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
  return <Box bg="bg.contrast" color="fg.contrast" cursor="pointer" p="md" rounded="md" transitionDuration="slower" transitionProperty="all" transitionTimingFunction="ease-in-out" _hover={{
    bg: "secondary"
  }}>
      Please Hover
    </Box>;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" focusVisibleRing="outline" p="md" role="group" rounded="md" tabIndex={0} w="auto">
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
      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="md" _peerFocus={{
      bg: "secondary"
    }}>
        Focus the peer
      </Center>

      <Center data-peer borderWidth="1px" focusVisibleRing="outline" p="md" rounded="md" tabIndex={0}>
        Focus me!
      </Center>

      <Center bg="bg.contrast" color="fg.contrast" p="md" rounded="md" _peerFocus={{
      bg: "secondary"
    }}>
        Focus the peer
      </Center>
    </HStack>;
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" p="md" rounded="lg" _portrait={{
    bg: "secondary"
  }}>
      Box
    </Box>;
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return <Wrap gap="md">
      {numbers.map(number => <Center key={number} boxSize="5xs" color="white" rounded="md" _even={{
      bg: "blue.500"
    }} _odd={{
      bg: "red.500"
    }}>
          {number}
        </Center>)}
    </Wrap>;
}`,...d.parameters?.docs?.source}}};const B=["After","Before","Hover","Group","Peer","Orientation","Other"];export{o as After,n as Before,s as Group,t as Hover,a as Orientation,d as Other,c as Peer,B as __namedExportsOrder,j as default};
