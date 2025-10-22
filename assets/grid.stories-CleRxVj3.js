import{j as r,V as o}from"./iframe-CzLob2S8.js";import{G as m}from"./grid-DcggJ69I.js";import{G as a}from"./grid-item-D2K3UNbQ.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Styled System / Grid"},e=()=>r.jsx(o,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"l2",children:r.jsx(m,{gap:"md",templateColumns:"repeat(fill, minmax(min(100%, sm), 1fr))",w:"full",children:Array.from({length:4}).map((d,n)=>r.jsx(a,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"4",textAlign:"center",children:"Item"},n))})}),t=()=>r.jsx(o,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"l2",children:r.jsx(m,{gap:"md",templateColumns:"minmax(2xs, xs) 1fr 1fr",w:"full",children:Array.from({length:4}).map((d,n)=>r.jsx(a,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"4",textAlign:"center",children:"Item"},n))})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Grid gap="md" templateColumns="repeat(fill, minmax(min(100%, sm), 1fr))" w="full">
        {Array.from({
        length: 4
      }).map((_, index) => <GridItem key={index} bg="bg.contrast" color="fg.contrast" p="md" rounded="4" textAlign="center">
            Item
          </GridItem>)}
      </Grid>
    </VStack>;
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Grid gap="md" templateColumns="minmax(2xs, xs) 1fr 1fr" w="full">
        {Array.from({
        length: 4
      }).map((_, index) => <GridItem key={index} bg="bg.contrast" color="fg.contrast" p="md" rounded="4" textAlign="center">
            Item
          </GridItem>)}
      </Grid>
    </VStack>;
}`,...t.parameters?.docs?.source}}};const u=["Repeat","Minmax"];export{t as Minmax,e as Repeat,u as __namedExportsOrder,p as default};
