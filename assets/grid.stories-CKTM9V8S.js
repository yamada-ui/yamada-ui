import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{r as n,t as r}from"./grid-item-Cmr2Zh1K.js";import{Ad as i,Sn as a,Tn as o}from"./iframe-QFtltEr1.js";var s,c,l,u,d;e((()=>{i(),a(),s=t(),c={title:`Styled System / Grid`},l=()=>(0,s.jsx)(o,{borderWidth:`1px`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,children:(0,s.jsx)(n,{gap:`md`,templateColumns:`repeat(fill, minmax(min(100%, sm), 1fr))`,w:`full`,children:Array.from({length:4}).map((e,t)=>(0,s.jsx)(r,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`4`,textAlign:`center`,children:`Item`},t))})}),u=()=>(0,s.jsx)(o,{borderWidth:`1px`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,children:(0,s.jsx)(n,{gap:`md`,templateColumns:`minmax(2xs, xs) 1fr 1fr`,w:`full`,children:Array.from({length:4}).map((e,t)=>(0,s.jsx)(r,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`4`,textAlign:`center`,children:`Item`},t))})}),l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Grid gap="md" templateColumns="repeat(fill, minmax(min(100%, sm), 1fr))" w="full">
        {Array.from({
        length: 4
      }).map((_, index) => <GridItem key={index} bg="bg.contrast" color="fg.contrast" p="md" rounded="4" textAlign="center">
            Item
          </GridItem>)}
      </Grid>
    </VStack>;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <VStack borderWidth="1px" overflow="auto" p="md" resize="inline" rounded="l2">
      <Grid gap="md" templateColumns="minmax(2xs, xs) 1fr 1fr" w="full">
        {Array.from({
        length: 4
      }).map((_, index) => <GridItem key={index} bg="bg.contrast" color="fg.contrast" p="md" rounded="4" textAlign="center">
            Item
          </GridItem>)}
      </Grid>
    </VStack>;
}`,...u.parameters?.docs?.source}}},d=[`Repeat`,`Minmax`]}))();export{u as Minmax,l as Repeat,d as __namedExportsOrder,c as default};