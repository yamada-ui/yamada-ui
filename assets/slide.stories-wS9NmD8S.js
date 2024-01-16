import{a as o,F as a,j as e}from"./jsx-runtime-5BUNAZ9W.js";import{u as s}from"./index-YuXFfT5-.js";import{S as c}from"./slide-VwujMGSO.js";import{B as t}from"./button-wgRwFiXZ.js";import{V as m}from"./stack-Y0EA3Zgz.js";import{T as p}from"./text-gcqxlQ4L.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-3vd3i3Ph.js";import"./index-_1szq5la.js";import"./theme-provider-rx4ttYe3.js";import"./factory-UVgmwG7m.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./utils-sLDxo3pB.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple-BZv2-DZW.js";import"./motion-wmKyD4SQ.js";import"./loading-RG6ZNJzo.js";import"./index-Rnhjv4qA.js";import"./icon-q2lrQR9J.js";import"./use-component-style-oL2nRWmA.js";const M={title:"Components / Transitions / Slide",component:c},l=()=>{const[u,{toggle:n}]=s();return o(a,{children:[e(t,{onClick:n,children:"Please Click"}),e(c,{isOpen:u,placement:"bottom",children:o(m,{w:"full",bg:"orange.500",p:"md",children:[e(p,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},r=()=>{const[u,{toggle:n}]=s();return o(a,{children:[e(t,{onClick:n,children:"Please Click"}),e(c,{isOpen:u,placement:"bottom",duration:.7,children:o(m,{w:"full",bg:"orange.500",p:"md",children:[e(p,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})},i=()=>{const[u,{toggle:n}]=s();return o(a,{children:[e(t,{onClick:n,children:"Please Click"}),e(c,{isOpen:u,placement:"left",children:o(m,{w:"full",bg:"orange.500",p:"md",children:[e(p,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e(t,{onClick:n,alignSelf:"flex-end",children:"Close"})]})})]})};var F,d,g;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="bottom">
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(g=(d=l.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var C,h,f;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="bottom" duration={0.7}>
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var k,S,B;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide isOpen={isOpen} placement="left">
        <VStack w="full" bg="orange.500" p="md">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button onClick={toggle} alignSelf="flex-end">
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const N=["basic","withDuration","withPlacement"];export{N as __namedExportsOrder,l as basic,M as default,r as withDuration,i as withPlacement};
