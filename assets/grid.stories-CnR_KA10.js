import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{Cn as n,Rd as r,Vd as i,wn as a,zd as o}from"./iframe-1VXrorm8.js";var s,c,l,u,d;e((()=>{r(),n(),s=t(),c={title:`Styled System / Grid`},l=()=>(0,s.jsx)(a,{borderWidth:`1px`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,children:(0,s.jsx)(i,{gap:`md`,templateColumns:`repeat(fill, minmax(min(100%, sm), 1fr))`,w:`full`,children:Array.from({length:4}).map((e,t)=>(0,s.jsx)(o,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`4`,textAlign:`center`,children:`Item`},t))})}),u=()=>(0,s.jsx)(a,{borderWidth:`1px`,overflow:`auto`,p:`md`,resize:`inline`,rounded:`l2`,children:(0,s.jsx)(i,{gap:`md`,templateColumns:`minmax(2xs, xs) 1fr 1fr`,w:`full`,children:Array.from({length:4}).map((e,t)=>(0,s.jsx)(o,{bg:`bg.contrast`,color:`fg.contrast`,p:`md`,rounded:`4`,textAlign:`center`,children:`Item`},t))})}),l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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