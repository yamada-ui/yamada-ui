import{j as u}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{u as s}from"./index-Du0-7Fls.js";import{F as i}from"./fade-9WFQy8gF.js";import{B as d}from"./button-BD_75t9L.js";import{B as n}from"./box-B1ksl8ea.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-OrIPcL7r.js";import"./motion-Bf7Eu1FP.js";import"./motion-DxSQdyy8.js";import"./forward-ref-BmTAT9U5.js";import"./factory-BrsV2ztw.js";import"./utils-BHii_Be-.js";import"./use-ripple-D3kHZFSu.js";import"./loading-CAjNLNS_.js";import"./icon-bEgKfv7t.js";import"./index-CxO4lLi3.js";import"./theme-provider-CVIzrPws.js";import"./use-component-style-C-MS2_vZ.js";const z={title:"Components / Transitions / Fade",component:i},r=()=>{const[o,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(i,{isOpen:o,children:u.jsx(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},t=()=>{const[o,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(i,{isOpen:o,duration:.4,children:u.jsx(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},l=()=>{const[o,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(i,{isOpen:o,unmountOnExit:!0,children:u.jsx(n,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(n,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var F,m,p;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,a,B;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(B=(a=t.parameters)==null?void 0:a.docs)==null?void 0:B.source}}};var g,C,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const G=["basic","withDuration","exitUnmount"];export{G as __namedExportsOrder,r as basic,z as default,l as exitUnmount,t as withDuration};
