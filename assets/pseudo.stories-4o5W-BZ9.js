import{j as r}from"./jsx-runtime-BpbtHYHY.js";import{B as i}from"./box-B5b1ezDi.js";import{V as I,H as T}from"./stack-D_e4Awei.js";import{T as z}from"./text-clsxocLN.js";import{C as e}from"./center-BgoPILRQ.js";import{W as A}from"./flex-DvtQc3o-.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-B_KMcXyW.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-65RA3nVD.js";import"./theme-provider-DGyR61Aa.js";const U={title:"System / Styles / Pseudo"},o=()=>r.jsx(i,{bg:"primary",color:"white",m:"lg",p:"lg",pos:"relative",rounded:"lg",_after:{bg:"secondary",color:"white",content:"'after'",left:"lg",p:"lg",pos:"absolute",rounded:"lg",top:"lg"},children:"Box"}),n=()=>r.jsx(i,{bg:"warning",color:"white",m:"lg",p:"lg",pos:"relative",rounded:"lg",_before:{bg:"danger",color:"white",content:"'before'",left:"-lg",p:"lg",pos:"absolute",rounded:"lg",top:"-lg"},children:"Box"}),t=()=>r.jsx(i,{bg:"primary",color:"white",cursor:"pointer",p:"md",rounded:"md",transitionDuration:"slower",transitionProperty:"all",transitionTimingFunction:"ease-in-out",_hover:{bg:"secondary"},children:"Please Hover"}),s=()=>r.jsxs(I,{borderWidth:"1px",outline:"0",p:"md",role:"group",rounded:"md",tabIndex:0,w:"auto",_focusVisible:{boxShadow:"outline"},children:[r.jsx(z,{textAlign:"center",children:"Focus me!"}),r.jsxs(T,{children:[r.jsx(e,{p:"md",_groupFocus:{color:"success"},children:"1"}),r.jsx(e,{p:"md",_groupFocus:{color:"warning"},children:"2"}),r.jsx(e,{p:"md",_groupFocus:{color:"danger"},children:"3"})]})]}),a=()=>r.jsxs(T,{children:[r.jsx(e,{"data-peer":!0,borderWidth:"1px",outline:"0",p:"md",rounded:"md",tabIndex:0,_focusVisible:{boxShadow:"outline"},children:"Focus me!"}),r.jsx(e,{bg:"primary",p:"md",rounded:"md",_peerFocus:{bg:"secondary"},children:"Focus the peer"})]}),d=()=>r.jsx(i,{bg:"primary",color:"white",p:"md",rounded:"lg",_portrait:{bg:"secondary"},children:"Box"}),c=()=>{const P=[1,2,3,4,5,6,7,8];return r.jsx(A,{gap:"md",children:P.map(p=>r.jsx(e,{boxSize:"5xs",color:"white",rounded:"md",_even:{bg:"blue.500"},_odd:{bg:"red.500"},children:p},p))})};var u,l,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,b,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,f,_;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Box bg="primary" color="white" cursor="pointer" p="md" rounded="md" transitionDuration="slower" transitionProperty="all" transitionTimingFunction="ease-in-out" _hover={{
    bg: "secondary"
  }}>
      Please Hover
    </Box>;
}`,...(_=(f=t.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var w,S,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var j,B,F;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(F=(B=a.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var C,v,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Box bg="primary" color="white" p="md" rounded="lg" _portrait={{
    bg: "secondary"
  }}>
      Box
    </Box>;
}`,...(k=(v=d.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var H,V,W;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const X=["after","before","hover","group","peer","orientation","other"];export{X as __namedExportsOrder,o as after,n as before,U as default,s as group,t as hover,d as orientation,c as other,a as peer};
