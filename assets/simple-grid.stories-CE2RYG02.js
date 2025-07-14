import{t as p,u as a,r as g,z as c,j as e}from"./iframe-DqV1pF0Y.js";import{G}from"./grid-DVIWBgtE.js";import{G as r}from"./grid-item-eH7jfJXq.js";const u=p({}),{withContext:x}=a("simple-grid",u),o=x(G)(void 0,({columns:m,minChildWidth:l,...s})=>({templateColumns:g.useMemo(()=>l?c(l,n=>n!=null?`repeat(auto-fit, minmax({sizes.${n}, ${n}}, 1fr))`:void 0):c(m,n=>n!=null?`repeat(${n}, minmax(0, 1fr))`:void 0),[l,m]),...s})),A={component:o,title:"Components / SimpleGrid"},t=()=>e.jsxs(o,{columns:2,gap:"md",w:"full",children:[e.jsx(r,{bg:"info",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"success",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"warning",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"danger",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"})]}),d=()=>e.jsxs(o,{columnGap:"lg",columns:2,rowGap:"md",w:"full",children:[e.jsx(r,{bg:"info",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"success",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"warning",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"danger",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"})]}),i=()=>e.jsxs(o,{gap:"md",minChildWidth:{base:"3xs",md:"8rem"},w:"full",children:[e.jsx(r,{bg:"info",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"success",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"warning",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"}),e.jsx(r,{bg:"danger",color:"white",p:"md",rounded:"l2",textAlign:"center",children:"GridItem"})]});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const f=["Basic","Gap","MinChildWidth"];export{t as Basic,d as Gap,i as MinChildWidth,f as __namedExportsOrder,A as default};
