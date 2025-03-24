import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{S as s}from"./slide-mx1KSlfW.js";import{u as c}from"./index-qZwaV1-B.js";import{B as o}from"./button-Dm54j0EP.js";import{V as a}from"./stack-D_e4Awei.js";import{T as m}from"./text-clsxocLN.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-swnplGbx.js";import"./index-AoowuF6j.js";import"./factory-B_KMcXyW.js";import"./theme-provider-DGyR61Aa.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./utils-DODAe1Af.js";import"./forward-ref-Cy2nAbAn.js";import"./use-component-style-65RA3nVD.js";import"./factory-CplEbptb.js";import"./forward-ref-Ukjd1cIW.js";import"./use-ripple-DqSHYmP8.js";import"./loading-C3oE1vJx.js";import"./icon-DIzRaLo1.js";import"./use-var-Tj-aA0qb.js";const K={component:s,title:"Components / Transitions / Slide"},l=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{open:t,placement:"bottom",children:e.jsxs(a,{bg:"orange.500",p:"md",w:"full",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{alignSelf:"flex-end",onClick:n,children:"Close"})]})})]})},r=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{duration:.7,open:t,placement:"bottom",children:e.jsxs(a,{bg:"orange.500",p:"md",w:"full",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{alignSelf:"flex-end",onClick:n,children:"Close"})]})})]})},i=()=>{const[t,{toggle:n}]=c();return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n,children:"Please Click"}),e.jsx(s,{open:t,placement:"left",children:e.jsxs(a,{bg:"orange.500",p:"md",w:"full",children:[e.jsx(m,{color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(o,{alignSelf:"flex-end",onClick:n,children:"Close"})]})})]})};var p,d,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide open={open} placement="bottom">
        <VStack bg="orange.500" p="md" w="full">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(g=(d=l.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,x,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide duration={0.7} open={open} placement="bottom">
        <VStack bg="orange.500" p="md" w="full">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,k,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide open={open} placement="left">
        <VStack bg="orange.500" p="md" w="full">
          <Text color="white">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const L=["basic","withDuration","withPlacement"];export{L as __namedExportsOrder,l as basic,K as default,r as withDuration,i as withPlacement};
