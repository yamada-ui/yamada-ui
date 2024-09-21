import{j as n}from"./extends-CwFRzn3r.js";import{u as d}from"./index-Du0-7Fls.js";import{F as s}from"./fade-CodbIXmR.js";import{B as m}from"./button-CrM87X6c.js";import{B as o}from"./box-BNUHdVqZ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-B9-LT_yD.js";import"./motion-I-9Hg3gW.js";import"./factory-DfCPDZht.js";import"./forward-ref-scR1bmHx.js";import"./use-component-style-D0DGb12b.js";import"./theme-provider-Bw55Thfs.js";import"./utils-bRj90FBN.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-C-c72TCS.js";import"./loading-BhlblpEj.js";import"./icon-BY9dMEpR.js";import"./index-DOyhBR5n.js";const A={title:"Components / Transitions / Fade",component:s},t=()=>{const[e,{toggle:r}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(m,{onClick:r,children:"Please Click"}),n.jsx(s,{isOpen:e,children:n.jsx(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},l=()=>{const[e,{toggle:r}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(m,{onClick:r,children:"Please Click"}),n.jsx(s,{isOpen:e,duration:.4,children:n.jsx(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},i=()=>{const[e,{toggle:r}]=d();return n.jsxs(n.Fragment,{children:[n.jsx(m,{onClick:r,children:"Please Click"}),n.jsx(s,{isOpen:e,unmountOnExit:!0,children:n.jsx(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var p,c,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(a=(c=t.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var u,g,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} duration={0.4}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
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
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const G=["basic","withDuration","exitUnmount"];export{G as __namedExportsOrder,t as basic,A as default,i as exitUnmount,l as withDuration};
