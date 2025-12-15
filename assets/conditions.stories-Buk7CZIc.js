import{j as r,V as O,T as R,W as e}from"./iframe-C1QqsVA9.js";import{B as l}from"./box-BbsNZILY.js";import{H as P}from"./h-stack-jgSIB3-v.js";import{W as A}from"./wrap-3wPTj9O4.js";import"./preload-helper-C1FmrZbK.js";import"./flex-Bs-NHhmm.js";const J={title:"Styled System / Conditions"},o=()=>r.jsx(l,{bg:"bg.contrast",color:"fg.contrast",m:"lg",p:"lg",pos:"relative",rounded:"l3",_after:{bg:"secondary",color:"white",content:"'after'",left:"lg",p:"lg",pos:"absolute",rounded:"lg",top:"lg"},children:"Box"}),n=()=>r.jsx(l,{bg:"bg.contrast",color:"fg.contrast",m:"lg",p:"lg",pos:"relative",rounded:"l3",_before:{bg:"secondary",color:"white",content:"'before'",left:"-lg",p:"lg",pos:"absolute",rounded:"lg",top:"-lg"},children:"Box"}),t=()=>r.jsx(l,{bg:"bg.contrast",color:"fg.contrast",cursor:"pointer",p:"md",rounded:"l2",transitionDuration:"slower",transitionProperty:"all",transitionTimingFunction:"ease-in-out",_hover:{bg:"secondary"},children:"Please Hover"}),s=()=>r.jsxs(O,{borderWidth:"1px",focusVisibleRing:"outline",p:"md",role:"group",rounded:"l2",tabIndex:0,w:"auto",children:[r.jsx(R,{textAlign:"center",children:"Focus me!"}),r.jsxs(P,{children:[r.jsx(e,{p:"md",_groupFocus:{color:"success"},children:"1"}),r.jsx(e,{p:"md",_groupFocus:{color:"warning"},children:"2"}),r.jsx(e,{p:"md",_groupFocus:{color:"danger"},children:"3"})]})]}),c=()=>r.jsxs(P,{children:[r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",_peerFocus:{bg:"secondary"},children:"Focus the peer"}),r.jsx(e,{"data-peer":!0,borderWidth:"1px",focusVisibleRing:"outline",p:"md",rounded:"l2",tabIndex:0,children:"Focus me!"}),r.jsx(e,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l2",_peerFocus:{bg:"secondary"},children:"Focus the peer"})]}),a=()=>r.jsx(l,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"l3",_portrait:{bg:"secondary"},children:"Box"}),d=()=>{const T=[1,2,3,4,5,6,7,8];return r.jsx(A,{gap:"md",children:T.map(u=>r.jsx(e,{boxSize:"5xs",color:"white",rounded:"l2",_even:{bg:"blue.500"},_odd:{bg:"red.500"},children:u},u))})};var p,i,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(g=(i=o.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var m,b,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,h,_;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" cursor="pointer" p="md" rounded="l2" transitionDuration="slower" transitionProperty="all" transitionTimingFunction="ease-in-out" _hover={{
    bg: "secondary"
  }}>
      Please Hover
    </Box>;
}`,...(_=(h=t.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var F,S,j;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var B,y,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var v,w,H;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Box bg="bg.contrast" color="fg.contrast" p="md" rounded="l3" _portrait={{
    bg: "secondary"
  }}>
      Box
    </Box>;
}`,...(H=(w=a.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var k,W,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(V=(W=d.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const K=["After","Before","Hover","Group","Peer","Orientation","Other"];export{o as After,n as Before,s as Group,t as Hover,a as Orientation,d as Other,c as Peer,K as __namedExportsOrder,J as default};
