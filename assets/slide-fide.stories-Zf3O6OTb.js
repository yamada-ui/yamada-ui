import{a as l,F as t,j as u}from"./jsx-runtime-TtYKBvr-.js";import{u as d}from"./index-gWY0u-sb.js";import{S as r}from"./slide-fade-YfBSdzCw.js";import{B as i}from"./button-uXw5QfHK.js";import{B as e}from"./box-kDaKgkz4.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-LoV1DwO_.js";import"./index-sZBzzfRi.js";import"./theme-provider-M6E7j4xw.js";import"./factory-GBKO6tqf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./forward-ref-6T0UNPU-.js";import"./utils-cKmuvmfz.js";import"./use-ripple-Rwx17x6B.js";import"./motion--NSyoWHf.js";import"./loading-S17wzBnk.js";import"./index-LBRkRkdp.js";import"./icon-uEf7artW.js";import"./use-component-style-GDmDNOF2.js";const W={title:"Components / Transitions / SlideFade",component:r},F=()=>{const[n,{toggle:o}]=d();return l(t,{children:[u(i,{onClick:o,children:"Please Click"}),u(r,{isOpen:n,children:u(e,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},s=()=>{const[n,{toggle:o}]=d();return l(t,{children:[u(i,{onClick:o,children:"Please Click"}),u(r,{isOpen:n,duration:.4,children:u(e,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},c=()=>{const[n,{toggle:o}]=d();return l(t,{children:[u(i,{onClick:o,children:"Please Click"}),u(r,{isOpen:n,offsetX:20,offsetY:0,children:u(e,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},p=()=>{const[n,{toggle:o}]=d();return l(t,{children:[u(i,{onClick:o,children:"Please Click"}),u(r,{isOpen:n,offsetY:-20,children:u(e,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},a=()=>{const[n,{toggle:o}]=d();return l(t,{children:[u(i,{onClick:o,children:"Please Click"}),u(r,{isOpen:n,unmountOnExit:!0,children:u(e,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var m,B,g;F.parameters={...F.parameters,docs:{...(m=F.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(g=(B=F.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var C,E,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen} duration={0.4}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(h=(E=s.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var f,w,A;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen} offsetX={20} offsetY={0}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var x,D,O;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen} offsetY={-20}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var b,k,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <SlideFade isOpen={isOpen} unmountOnExit>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </SlideFade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const Z=["basic","withDuration","withOffsetX","withOffsetY","exitUnmount"];export{Z as __namedExportsOrder,F as basic,W as default,a as exitUnmount,s as withDuration,c as withOffsetX,p as withOffsetY};
