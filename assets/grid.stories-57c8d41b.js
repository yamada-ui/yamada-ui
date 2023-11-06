import{j as n,a as e}from"./jsx-runtime-03b4ddbf.js";import{G as t,a as r}from"./grid-9e8f55e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./factory-c9bc4a28.js";const _={title:"Components / Layouts / Grid",component:t},d=()=>n(t,{w:"full",templateColumns:"repeat(4, 1fr)",gap:"md",children:[e(r,{p:"md",rounded:"4",bg:"primary",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"secondary",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"warning",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"danger",color:"white",textAlign:"center",children:"GridItem"})]}),i=()=>n(t,{w:"full",templateRows:"repeat(4, 1fr)",gap:"md",children:[e(r,{p:"md",rounded:"4",bg:"primary",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"secondary",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"warning",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"danger",color:"white",textAlign:"center",children:"GridItem"})]}),o=()=>n(t,{w:"full",templateColumns:"repeat(3, 1fr)",templateRows:"repeat(4, 1fr)",gap:"md",children:[e(r,{p:"md",rounded:"4",bg:"primary",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"secondary",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"warning",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"danger",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"primary",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"secondary",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"warning",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"danger",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"primary",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"secondary",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"warning",color:"white",textAlign:"center",children:"GridItem"}),e(r,{p:"md",rounded:"4",bg:"danger",color:"white",textAlign:"center",children:"GridItem"})]}),m=()=>n(t,{w:"full",templateAreas:`
        "one one two three"
        "four five two six"
        "four seven seven eight"
      `,gap:"md",children:[e(r,{area:"one",p:"md",rounded:"4",bg:"primary",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"}),e(r,{area:"two",p:"md",rounded:"4",bg:"secondary",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"}),e(r,{area:"three",p:"md",rounded:"4",bg:"warning",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"}),e(r,{area:"four",p:"md",rounded:"4",bg:"danger",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"}),e(r,{area:"five",p:"md",rounded:"4",bg:"primary",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"}),e(r,{area:"six",p:"md",rounded:"4",bg:"secondary",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"}),e(r,{area:"seven",p:"md",rounded:"4",bg:"warning",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"}),e(r,{area:"eight",p:"md",rounded:"4",bg:"danger",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"})]}),c=()=>n(t,{w:"full",templateColumns:"repeat(4, 1fr)",templateRows:"repeat(3, 1fr)",gap:"md",children:[e(r,{colSpan:2,p:"md",rounded:"4",bg:"primary",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"}),e(r,{colSpan:2,rowSpan:3,p:"md",rounded:"4",bg:"secondary",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"}),e(r,{rowStart:2,rowEnd:4,p:"md",rounded:"4",bg:"warning",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"}),e(r,{colStart:2,colEnd:3,rowStart:2,rowEnd:4,p:"md",rounded:"4",bg:"danger",color:"white",justifyContent:"center",alignItems:"center",children:"GridItem"})]});var a,l,g;d.parameters={...d.parameters,docs:{...(a=d.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <Grid w='full' templateColumns='repeat(4, 1fr)' gap='md'>
      <GridItem p='md' rounded='4' bg='primary' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='secondary' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='warning' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='danger' color='white' textAlign='center'>
        GridItem
      </GridItem>
    </Grid>;
}`,...(g=(l=d.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var s,p,I;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Grid w='full' templateRows='repeat(4, 1fr)' gap='md'>
      <GridItem p='md' rounded='4' bg='primary' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='secondary' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='warning' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='danger' color='white' textAlign='center'>
        GridItem
      </GridItem>
    </Grid>;
}`,...(I=(p=i.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var u,G,w;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Grid w='full' templateColumns='repeat(3, 1fr)' templateRows='repeat(4, 1fr)' gap='md'>
      <GridItem p='md' rounded='4' bg='primary' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='secondary' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='warning' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='danger' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='primary' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='secondary' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='warning' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='danger' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='primary' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='secondary' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='warning' color='white' textAlign='center'>
        GridItem
      </GridItem>

      <GridItem p='md' rounded='4' bg='danger' color='white' textAlign='center'>
        GridItem
      </GridItem>
    </Grid>;
}`,...(w=(G=o.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var h,b,f;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Grid w='full' templateAreas={\`
        "one one two three"
        "four five two six"
        "four seven seven eight"
      \`} gap='md'>
      <GridItem area='one' p='md' rounded='4' bg='primary' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>

      <GridItem area='two' p='md' rounded='4' bg='secondary' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>

      <GridItem area='three' p='md' rounded='4' bg='warning' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>

      <GridItem area='four' p='md' rounded='4' bg='danger' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>

      <GridItem area='five' p='md' rounded='4' bg='primary' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>

      <GridItem area='six' p='md' rounded='4' bg='secondary' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>

      <GridItem area='seven' p='md' rounded='4' bg='warning' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>

      <GridItem area='eight' p='md' rounded='4' bg='danger' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>
    </Grid>;
}`,...(f=(b=m.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,x,A;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Grid w='full' templateColumns='repeat(4, 1fr)' templateRows='repeat(3, 1fr)' gap='md'>
      <GridItem colSpan={2} p='md' rounded='4' bg='primary' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>

      <GridItem colSpan={2} rowSpan={3} p='md' rounded='4' bg='secondary' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>

      <GridItem rowStart={2} rowEnd={4} p='md' rounded='4' bg='warning' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>

      <GridItem colStart={2} colEnd={3} rowStart={2} rowEnd={4} p='md' rounded='4' bg='danger' color='white' justifyContent='center' alignItems='center'>
        GridItem
      </GridItem>
    </Grid>;
}`,...(A=(x=c.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const L=["templateColumns","templateRows","templateColumnsAndRows","templateAreas","customStartAndEnd"];export{L as __namedExportsOrder,c as customStartAndEnd,_ as default,m as templateAreas,d as templateColumns,o as templateColumnsAndRows,i as templateRows};
//# sourceMappingURL=grid.stories-57c8d41b.js.map
