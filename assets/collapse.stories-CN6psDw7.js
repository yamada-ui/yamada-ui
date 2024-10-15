import{j as n}from"./extends-CwFRzn3r.js";import{u as s}from"./index-CoJrGj-T.js";import{C as r}from"./collapse-DJJMrSmO.js";import{V as m}from"./stack-CwhPiWwF.js";import{B as l}from"./button-BG6kekf_.js";import{B as t}from"./box-BQhfyHd0.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-scR1bmHx.js";import"./utils-D_IeXbRL.js";import"./factory-DkiAY2ad.js";import"./factory-DmXgzuxm.js";import"./motion-I-9Hg3gW.js";import"./use-component-style-DQLsgxr3.js";import"./theme-provider-BQjm75QN.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-VNo1fv7Z.js";import"./loading-BAPtC7K8.js";import"./icon-A2vzomTu.js";import"./use-var-D2w0wtCZ.js";const Q={component:r,title:"Components / Transitions / Collapse"},a=()=>{const[e,{toggle:o}]=s();return n.jsxs(m,{align:"flex-start",gap:0,children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},i=()=>{const[e,{toggle:o}]=s();return n.jsxs(m,{align:"flex-start",gap:0,children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{duration:.7,isOpen:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})})]})},c=()=>{const[e,{toggle:o}]=s();return n.jsxs(m,{align:"flex-start",gap:0,children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,unmountOnExit:!0,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{bg:"purple.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[e,{toggle:o}]=s();return n.jsxs(m,{align:"flex-start",gap:0,children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{animationOpacity:!1,isOpen:e,children:n.jsx(t,{bg:"orange.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(t,{bg:"purple.500",color:"white",mt:"md",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},d=()=>{const[e,{toggle:o}]=s();return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:o,children:"Please Click"}),n.jsx(r,{isOpen:e,startingHeight:20,children:n.jsxs(t,{color:"purple.500",children:["私の戦闘力は530000です。",n.jsx("br",{}),"ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"]})})]})};var u,g,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,B,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse duration={0.7} isOpen={isOpen}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>
    </VStack>;
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var f,k,O;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} unmountOnExit>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var w,j,b;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <VStack align="flex-start" gap={0}>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse animationOpacity={false} isOpen={isOpen}>
        <Box bg="orange.500" color="white" mt="md" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Collapse>

      <Box bg="purple.500" color="white" mt="md" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </VStack>;
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var S,P,V;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Collapse isOpen={isOpen} startingHeight={20}>
        <Box color="purple.500">
          私の戦闘力は530000です。
          <br />
          ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Box>
      </Collapse>
    </>;
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const W=["basic","withDuration","exitUnmount","disabledOpacity","startingHeight"];export{W as __namedExportsOrder,a as basic,Q as default,p as disabledOpacity,c as exitUnmount,d as startingHeight,i as withDuration};
