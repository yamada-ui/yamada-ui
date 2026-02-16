import{j as r,V as l}from"./iframe-Bh9OJiMa.js";import{G as c}from"./grid-DEBT4jh_.js";import{G as p}from"./grid-item-DglFRIPa.js";import"./preload-helper-C1FmrZbK.js";const G={title:"Styled System / Grid"},e=()=>r.jsx(l,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"l2",children:r.jsx(c,{gap:"md",templateColumns:"repeat(fill, minmax(min(100%, sm), 1fr))",w:"full",children:Array.from({length:4}).map((u,n)=>r.jsx(p,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"4",textAlign:"center",children:"Item"},n))})}),t=()=>r.jsx(l,{borderWidth:"1px",overflow:"auto",p:"md",resize:"inline",rounded:"l2",children:r.jsx(c,{gap:"md",templateColumns:"minmax(2xs, xs) 1fr 1fr",w:"full",children:Array.from({length:4}).map((u,n)=>r.jsx(p,{bg:"bg.contrast",color:"fg.contrast",p:"md",rounded:"4",textAlign:"center",children:"Item"},n))})});var o,m,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Grid gap="md" templateColumns="repeat(fill, minmax(min(100%, sm), 1fr))" w="full">
        {Array.from({
        length: 4
      }).map((_, index) => <GridItem key={index} bg="bg.contrast" color="fg.contrast" p="md" rounded="4" textAlign="center">
            Item
          </GridItem>)}
      </Grid>
    </VStack>;
}`,...(a=(m=e.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var d,i,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Grid gap="md" templateColumns="minmax(2xs, xs) 1fr 1fr" w="full">
        {Array.from({
        length: 4
      }).map((_, index) => <GridItem key={index} bg="bg.contrast" color="fg.contrast" p="md" rounded="4" textAlign="center">
            Item
          </GridItem>)}
      </Grid>
    </VStack>;
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const b=["Repeat","Minmax"];export{t as Minmax,e as Repeat,b as __namedExportsOrder,G as default};
