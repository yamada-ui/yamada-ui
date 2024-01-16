import{a as d,F,j as u}from"./jsx-runtime-5BUNAZ9W.js";import{u as s}from"./index-YuXFfT5-.js";import{F as l}from"./fade-9GMUcEfy.js";import{B as p}from"./button-wgRwFiXZ.js";import{B as o}from"./box-Y1ke70y9.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./forward-ref-A-8Arhkk.js";import"./factory-UVgmwG7m.js";import"./utils-sLDxo3pB.js";import"./use-ripple-BZv2-DZW.js";import"./motion-wmKyD4SQ.js";import"./loading-RG6ZNJzo.js";import"./index-Rnhjv4qA.js";import"./theme-provider-rx4ttYe3.js";import"./index-3vd3i3Ph.js";import"./index-_1szq5la.js";import"./icon-q2lrQR9J.js";import"./use-component-style-oL2nRWmA.js";const K={title:"Components / Transitions / Fade",component:l},r=()=>{const[n,{toggle:e}]=s();return d(F,{children:[u(p,{onClick:e,children:"Please Click"}),u(l,{isOpen:n,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},t=()=>{const[n,{toggle:e}]=s();return d(F,{children:[u(p,{onClick:e,children:"Please Click"}),u(l,{isOpen:n,duration:.4,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},i=()=>{const[n,{toggle:e}]=s();return d(F,{children:[u(p,{onClick:e,children:"Please Click"}),u(l,{isOpen:n,unmountOnExit:!0,children:u(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var a,c,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var B,g,C;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var E,h,A;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(A=(h=i.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};const L=["basic","withDuration","exitUnmount"];export{L as __namedExportsOrder,r as basic,K as default,i as exitUnmount,t as withDuration};
