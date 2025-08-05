import{j as e}from"./iframe-DiGnZRjA.js";import{F as t}from"./float-Dp663S61.js";import{B as i}from"./box-muduQaoT.js";import{G as c}from"./grid-hqdpEkci.js";import{G as s}from"./grid-item-Cd2v2oyq.js";import"./preload-helper-D9Z9MdNV.js";const f={component:t,title:"Components / Float"},r=()=>e.jsx(i,{bg:"bg.panel",boxSize:"3xs",position:"relative",children:e.jsx(t,{bg:"bg.contrast",color:"fg.contrast",fontSize:"sm",px:"1.5",rounded:"l1",children:"New"})}),n=()=>{const d=["start-start","start-center","start-end","center-start","center-center","center-end","end-start","end-center","end-end"];return e.jsx(c,{gap:"lg",p:"lg",templateColumns:"repeat(3, 1fr)",children:d.map(a=>e.jsx(s,{bg:"bg.panel",boxSize:"3xs",position:"relative",children:e.jsx(t,{bg:"bg.contrast",color:"fg.contrast",fontSize:"sm",placement:a,px:"1.5",rounded:"md",children:"New"})},a))})},o=()=>e.jsxs(c,{gap:"md",p:"md",templateColumns:"repeat(3, 1fr)",children:[e.jsx(s,{bg:"bg.panel",boxSize:"3xs",position:"relative",children:e.jsx(t,{bg:"bg.contrast",color:"fg.contrast",fontSize:"sm",offset:"md",placement:"start-start",px:"1.5",rounded:"md",children:"New"})}),e.jsx(s,{bg:"bg.panel",boxSize:"3xs",position:"relative",children:e.jsx(t,{bg:"bg.contrast",color:"fg.contrast",fontSize:"sm",offset:["0","md"],placement:"center-start",px:"1.5",rounded:"md",children:"New"})}),e.jsx(s,{bg:"bg.panel",boxSize:"3xs",position:"relative",children:e.jsx(t,{bg:"bg.contrast",color:"fg.contrast",fontSize:"sm",offset:["md","0"],placement:"end-end",px:"1.5",rounded:"md",children:"New"})})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.panel" boxSize="3xs" position="relative">
      <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" px="1.5" rounded="l1">
        New
      </Float>
    </Box>;
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const placements = ["start-start", "start-center", "start-end", "center-start", "center-center", "center-end", "end-start", "end-center", "end-end"] as const;
  return <Grid gap="lg" p="lg" templateColumns="repeat(3, 1fr)">
      {placements.map(placement => <GridItem key={placement} bg="bg.panel" boxSize="3xs" position="relative">
          <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" placement={placement} px="1.5" rounded="md">
            New
          </Float>
        </GridItem>)}
    </Grid>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Grid gap="md" p="md" templateColumns="repeat(3, 1fr)">
      <GridItem bg="bg.panel" boxSize="3xs" position="relative">
        <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" offset="md" placement="start-start" px="1.5" rounded="md">
          New
        </Float>
      </GridItem>

      <GridItem bg="bg.panel" boxSize="3xs" position="relative">
        <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" offset={["0", "md"]} placement="center-start" px="1.5" rounded="md">
          New
        </Float>
      </GridItem>

      <GridItem bg="bg.panel" boxSize="3xs" position="relative">
        <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" offset={["md", "0"]} placement="end-end" px="1.5" rounded="md">
          New
        </Float>
      </GridItem>
    </Grid>;
}`,...o.parameters?.docs?.source}}};const u=["Basic","Placement","Offset"];export{r as Basic,o as Offset,n as Placement,u as __namedExportsOrder,f as default};
