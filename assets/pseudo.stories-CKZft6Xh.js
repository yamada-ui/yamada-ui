import{j as e}from"./extends-CwFRzn3r.js";import{B as c}from"./box-DZiPb3wb.js";import{V,H as k}from"./stack-DlPMk-Cq.js";import{T as W}from"./text-DzUFhekZ.js";import{C as r}from"./center-tpAwapBn.js";import{W as T}from"./flex-DFuKYgFC.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-CB2imrkD.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-CLkw4iG2.js";import"./theme-provider-D1j4LEQ9.js";const L={title:"System / Styles / Pseudo"},o=()=>e.jsx(c,{bg:"primary",color:"white",m:"lg",p:"lg",pos:"relative",rounded:"lg",_after:{bg:"secondary",color:"white",content:"'after'",left:"lg",p:"lg",pos:"absolute",rounded:"lg",top:"lg"},children:"Box"}),n=()=>e.jsx(c,{bg:"warning",color:"white",m:"lg",p:"lg",pos:"relative",rounded:"lg",_before:{bg:"danger",color:"white",content:"'before'",left:"-lg",p:"lg",pos:"absolute",rounded:"lg",top:"-lg"},children:"Box"}),t=()=>e.jsx(c,{bg:"primary",color:"white",cursor:"pointer",p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",transitionTimingFunction:"ease-in-out",_hover:{bg:"secondary"},children:"Please Hover"}),s=()=>e.jsxs(V,{borderWidth:"1px",outline:"0",p:"md",role:"group",rounded:"md",tabIndex:0,w:"auto",_focusVisible:{boxShadow:"outline"},children:[e.jsx(W,{textAlign:"center",children:"Focus me!"}),e.jsxs(k,{children:[e.jsx(r,{p:"md",_groupFocus:{color:"success"},children:"1"}),e.jsx(r,{p:"md",_groupFocus:{color:"warning"},children:"2"}),e.jsx(r,{p:"md",_groupFocus:{color:"danger"},children:"3"})]})]}),a=()=>e.jsxs(k,{children:[e.jsx(r,{"data-peer":!0,borderWidth:"1px",outline:"0",p:"md",rounded:"md",tabIndex:0,_focusVisible:{boxShadow:"outline"},children:"Focus me!"}),e.jsx(r,{bg:"primary",p:"md",rounded:"md",_peerFocus:{bg:"secondary"},children:"Focus the peer"})]}),d=()=>{const H=[1,2,3,4,5,6,7,8];return e.jsx(T,{gap:"md",children:H.map(i=>e.jsx(r,{boxSize:"5xs",color:"white",rounded:"md",_even:{bg:"blue.500"},_odd:{bg:"red.500"},children:i},i))})};var p,u,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Box bg="primary" color="white" m="lg" p="lg" pos="relative" rounded="lg" _after={{
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
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var m,g,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Box bg="warning" color="white" m="lg" p="lg" pos="relative" rounded="lg" _before={{
    bg: "danger",
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
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,h,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Box bg="primary" color="white" cursor="pointer" p="md" rounded="md" transitionDuration="slower" transitionProperty="all" transitionTimingFunction="ease-in-out" _hover={{
    bg: "secondary"
  }}>
      Please Hover
    </Box>;
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var _,w,S;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" outline="0" p="md" role="group" rounded="md" tabIndex={0} w="auto" _focusVisible={{
    boxShadow: "outline"
  }}>
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
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var y,j,F;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <HStack>
      <Center data-peer borderWidth="1px" outline="0" p="md" rounded="md" tabIndex={0} _focusVisible={{
      boxShadow: "outline"
    }}>
        Focus me!
      </Center>

      <Center bg="primary" p="md" rounded="md" _peerFocus={{
      bg: "secondary"
    }}>
        Focus the peer
      </Center>
    </HStack>;
}`,...(F=(j=a.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var C,v,B;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(B=(v=d.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};const M=["after","before","hover","group","peer","other"];export{M as __namedExportsOrder,o as after,n as before,L as default,s as group,t as hover,d as other,a as peer};
