import{j as r,V as o}from"./iframe-DqV1pF0Y.js";import{G as d}from"./grid-DVIWBgtE.js";import{G as m}from"./grid-item-eH7jfJXq.js";const c={title:"Styled System / Grid"},e=()=>r.jsx(o,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"md",children:r.jsx(d,{gap:"md",templateColumns:"repeat(fill, minmax(min(100%, sm), 1fr))",w:"full",children:Array.from({length:4}).map((a,n)=>r.jsx(m,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"4",textAlign:"center",children:"Item"},n))})}),t=()=>r.jsx(o,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"md",children:r.jsx(d,{gap:"md",templateColumns:"minmax(2xs, xs) 1fr 1fr",w:"full",children:Array.from({length:4}).map((a,n)=>r.jsx(m,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"4",textAlign:"center",children:"Item"},n))})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="md">
      <Grid gap="md" templateColumns="repeat(fill, minmax(min(100%, sm), 1fr))" w="full">
        {Array.from({
        length: 4
      }).map((_, index) => <GridItem key={index} bg="bg.contrast" color="fg.contrast" p="md" rounded="4" textAlign="center">
            Item
          </GridItem>)}
      </Grid>
    </VStack>;
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="md">
      <Grid gap="md" templateColumns="minmax(2xs, xs) 1fr 1fr" w="full">
        {Array.from({
        length: 4
      }).map((_, index) => <GridItem key={index} bg="bg.contrast" color="fg.contrast" p="md" rounded="4" textAlign="center">
            Item
          </GridItem>)}
      </Grid>
    </VStack>;
}`,...t.parameters?.docs?.source}}};const p=["Repeat","Minmax"];export{t as Minmax,e as Repeat,p as __namedExportsOrder,c as default};
