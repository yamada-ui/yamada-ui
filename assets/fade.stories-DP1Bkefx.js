import{j as n}from"./extends-CwFRzn3r.js";import{u as d}from"./index-CoJrGj-T.js";import{F as s}from"./fade-CLGPnElT.js";import{B as m}from"./button-D6MtFxez.js";import{B as o}from"./box-DZiPb3wb.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-C3FBZMw9.js";import"./motion-I-9Hg3gW.js";import"./factory-CB2imrkD.js";import"./forward-ref-scR1bmHx.js";import"./use-component-style-CLkw4iG2.js";import"./theme-provider-D1j4LEQ9.js";import"./utils-Da0AOJfu.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-D_F9Vz55.js";import"./loading-6PAwx6O9.js";import"./icon-GDJ6YhRU.js";import"./use-var-D-eiJB8b.js";const A={component:s,title:"Components / Transitions / Fade"},t=()=>{const[e,{toggle:r}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(m,{onClick:r,children:"Please Click"}),n.jsx(s,{isOpen:e,children:n.jsx(o,{bg:"orange.500",color:"white",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(o,{bg:"purple.500",color:"white",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},l=()=>{const[e,{toggle:r}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(m,{onClick:r,children:"Please Click"}),n.jsx(s,{duration:.4,isOpen:e,children:n.jsx(o,{bg:"orange.500",color:"white",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(o,{bg:"purple.500",color:"white",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},i=()=>{const[e,{toggle:r}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(m,{onClick:r,children:"Please Click"}),n.jsx(s,{isOpen:e,unmountOnExit:!0,children:n.jsx(o,{bg:"orange.500",color:"white",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(o,{bg:"purple.500",color:"white",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var p,c,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen}>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(a=(c=t.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var u,g,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade duration={0.4} isOpen={isOpen}>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,w,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} unmountOnExit>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const G=["basic","withDuration","exitUnmount"];export{G as __namedExportsOrder,t as basic,A as default,i as exitUnmount,l as withDuration};
