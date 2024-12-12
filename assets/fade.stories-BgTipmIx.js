import{j as o}from"./jsx-runtime-CfatFE5O.js";import{F as s}from"./fade-Bn9hsHYb.js";import{u as d}from"./index-gGKStiao.js";import{B as p}from"./button-CCbGPPx6.js";import{B as n}from"./box-D-QJtIN2.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./forward-ref-2BKBy0Yi.js";import"./use-component-style-DXYrx7jC.js";import"./factory-Nur_zO5a.js";import"./theme-provider-BsBO7Bt7.js";import"./factory-C7oui4wX.js";import"./utils-Le3SFznY.js";import"./forward-ref-D13m8o2p.js";import"./use-ripple-D3zgM-CO.js";import"./loading-Bz0vGPrC.js";import"./icon-M07mMfJs.js";import"./use-var-BmU0CMcq.js";const G={component:s,title:"Components / Transitions / Fade"},t=()=>{const[e,{toggle:r}]=d();return o.jsxs(o.Fragment,{children:[o.jsx(p,{onClick:r,children:"Please Click"}),o.jsx(s,{open:e,children:o.jsx(n,{bg:"orange.500",color:"white",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),o.jsx(n,{bg:"purple.500",color:"white",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},l=()=>{const[e,{toggle:r}]=d();return o.jsxs(o.Fragment,{children:[o.jsx(p,{onClick:r,children:"Please Click"}),o.jsx(s,{duration:.4,open:e,children:o.jsx(n,{bg:"orange.500",color:"white",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),o.jsx(n,{bg:"purple.500",color:"white",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},i=()=>{const[e,{toggle:r}]=d();return o.jsxs(o.Fragment,{children:[o.jsx(p,{onClick:r,children:"Please Click"}),o.jsx(s,{open:e,unmountOnExit:!0,children:o.jsx(n,{bg:"orange.500",color:"white",p:"md",rounded:"md",w:"full",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),o.jsx(n,{bg:"purple.500",color:"white",p:"md",rounded:"md",w:"full",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var m,c,a;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade open={isOpen}>
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

      <Fade duration={0.4} open={isOpen}>
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

      <Fade open={isOpen} unmountOnExit>
        <Box bg="orange.500" color="white" p="md" rounded="md" w="full">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box bg="purple.500" color="white" p="md" rounded="md" w="full">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const H=["basic","withDuration","exitUnmount"];export{H as __namedExportsOrder,t as basic,G as default,i as exitUnmount,l as withDuration};
