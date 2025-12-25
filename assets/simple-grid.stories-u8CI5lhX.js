import{p as b,q as A,r as f,F as c,j as e}from"./iframe-3lFlqlPN.js";import{G as j}from"./grid-CdpynwT9.js";import{G as r}from"./grid-item-L-ZB7s7_.js";import"./preload-helper-C1FmrZbK.js";const S=b({}),{withContext:C}=A("simple-grid",S),o=C(j)(void 0,({columns:l,minChildWidth:m,...w})=>({templateColumns:f.useMemo(()=>m?c(m,n=>n!=null?`repeat(auto-fit, minmax({sizes.${n}, ${n}}, 1fr))`:void 0):c(l,n=>n!=null?`repeat(${n}, minmax(0, 1fr))`:void 0),[m,l]),...w})),O={component:o,title:"Components / SimpleGrid"},t=()=>e.jsxs(o,{columns:2,gap:"md",w:"full",children:[e.jsx(r,{bg:"info",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"success",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"warning",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"danger",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"})]}),d=()=>e.jsxs(o,{columnGap:"lg",columns:2,rowGap:"md",w:"full",children:[e.jsx(r,{bg:"info",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"success",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"warning",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"danger",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"})]}),i=()=>e.jsxs(o,{gap:"md",minChildWidth:{base:"3xs",md:"8rem"},w:"full",children:[e.jsx(r,{bg:"info",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"success",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"warning",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"danger",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"})]});var s,p,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <SimpleGrid columns={2} gap="md" w="full">
      <GridItem bg="info" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>

      <GridItem bg="success" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>

      <GridItem bg="warning" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>

      <GridItem bg="danger" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>
    </SimpleGrid>;
}`,...(a=(p=t.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var g,G,u;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <SimpleGrid columnGap="lg" columns={2} rowGap="md" w="full">
      <GridItem bg="info" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>

      <GridItem bg="success" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>

      <GridItem bg="warning" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>

      <GridItem bg="danger" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>
    </SimpleGrid>;
}`,...(u=(G=d.parameters)==null?void 0:G.docs)==null?void 0:u.source}}};var x,I,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <SimpleGrid gap="md" minChildWidth={{
    base: "3xs",
    md: "8rem"
  }} w="full">
      <GridItem bg="info" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>

      <GridItem bg="success" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>

      <GridItem bg="warning" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>

      <GridItem bg="danger" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </GridItem>
    </SimpleGrid>;
}`,...(h=(I=i.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const W=["Basic","Gap","MinChildWidth"];export{t as Basic,d as Gap,i as MinChildWidth,W as __namedExportsOrder,O as default};
