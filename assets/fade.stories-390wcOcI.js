import{j as o}from"./jsx-runtime-DztICxWZ.js";import{F as i}from"./fade-ClU9tq3W.js";import{u as s}from"./index-YFprnXPi.js";import{B as m}from"./button-nZ2ZqBRb.js";import{B as n}from"./box-Ds8SIjx6.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./forward-ref-BMTIiRn4.js";import"./use-component-style-DHLtMqa5.js";import"./factory-7Z88KRtK.js";import"./theme-provider-DsbwOWxu.js";import"./factory-UaNlpug7.js";import"./utils-jtvc7GJt.js";import"./forward-ref-DH6f5tnY.js";import"./use-ripple-Vo7SgDWD.js";import"./loading-DVofVDF_.js";import"./icon-DKuqv-9Z.js";import"./use-var-Bz9rJ8_M.js";const G={component:i,title:"Components / Transitions / Fade"},t=()=>{const[e,{toggle:r}]=s();return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:r,children:"Please Click"}),o.jsx(i,{open:e,children:o.jsx(n,{bg:"orange.500",color:"white",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),o.jsx(n,{bg:"purple.500",color:"white",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},l=()=>{const[e,{toggle:r}]=s();return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:r,children:"Please Click"}),o.jsx(i,{duration:.4,open:e,children:o.jsx(n,{bg:"orange.500",color:"white",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),o.jsx(n,{bg:"purple.500",color:"white",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},d=()=>{const[e,{toggle:r}]=s();return o.jsxs(o.Fragment,{children:[o.jsx(m,{onClick:r,children:"Please Click"}),o.jsx(i,{open:e,unmountOnExit:!0,children:o.jsx(n,{bg:"orange.500",color:"white",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),o.jsx(n,{bg:"purple.500",color:"white",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var p,c,a;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade open={open}>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(a=(c=t.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var u,g,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade duration={0.4} open={open}>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,w,B;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade open={open} unmountOnExit>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(B=(w=d.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const H=["basic","withDuration","exitUnmount"];export{H as __namedExportsOrder,t as basic,G as default,d as exitUnmount,l as withDuration};
