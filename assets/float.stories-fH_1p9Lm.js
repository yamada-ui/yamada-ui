import{j as e}from"./iframe-DaVT7dxo.js";import{F as t}from"./float-CqG0KHxH.js";import{B as S}from"./box-BD07YNoR.js";import{G as f}from"./grid-Cjbr-zPO.js";import{G as s}from"./grid-item-BPeiKHRL.js";import"./preload-helper-C1FmrZbK.js";const w={component:t,title:"Components / Float"},r=()=>e.jsx(S,{bg:"bg.panel",boxSize:"3xs",position:"relative",children:e.jsx(t,{bg:"bg.contrast",color:"fg.contrast",fontSize:"sm",px:"1.5",rounded:"l1",children:"New"})}),n=()=>{const u=["start-start","start-center","start-end","center-start","center-center","center-end","end-start","end-center","end-end"];return e.jsx(f,{gap:"lg",p:"lg",templateColumns:"repeat(3, 1fr)",children:u.map(a=>e.jsx(s,{bg:"bg.panel",boxSize:"3xs",position:"relative",children:e.jsx(t,{bg:"bg.contrast",color:"fg.contrast",fontSize:"sm",placement:a,px:"1.5",rounded:"l2",children:"New"})},a))})},o=()=>e.jsxs(f,{gap:"md",p:"md",templateColumns:"repeat(3, 1fr)",children:[e.jsx(s,{bg:"bg.panel",boxSize:"3xs",position:"relative",children:e.jsx(t,{bg:"bg.contrast",color:"fg.contrast",fontSize:"sm",offset:"md",placement:"start-start",px:"1.5",rounded:"l2",children:"New"})}),e.jsx(s,{bg:"bg.panel",boxSize:"3xs",position:"relative",children:e.jsx(t,{bg:"bg.contrast",color:"fg.contrast",fontSize:"sm",offset:["0","md"],placement:"center-start",px:"1.5",rounded:"l2",children:"New"})}),e.jsx(s,{bg:"bg.panel",boxSize:"3xs",position:"relative",children:e.jsx(t,{bg:"bg.contrast",color:"fg.contrast",fontSize:"sm",offset:["md","0"],placement:"end-end",px:"1.5",rounded:"l2",children:"New"})})]});var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Box bg="bg.panel" boxSize="3xs" position="relative">
      <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" px="1.5" rounded="l1">
        New
      </Float>
    </Box>;
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const placements = ["start-start", "start-center", "start-end", "center-start", "center-center", "center-end", "end-start", "end-center", "end-end"] as const;
  return <Grid gap="lg" p="lg" templateColumns="repeat(3, 1fr)">
      {placements.map(placement => <GridItem key={placement} bg="bg.panel" boxSize="3xs" position="relative">
          <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" placement={placement} px="1.5" rounded="l2">
            New
          </Float>
        </GridItem>)}
    </Grid>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,b,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Grid gap="md" p="md" templateColumns="repeat(3, 1fr)">
      <GridItem bg="bg.panel" boxSize="3xs" position="relative">
        <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" offset="md" placement="start-start" px="1.5" rounded="l2">
          New
        </Float>
      </GridItem>

      <GridItem bg="bg.panel" boxSize="3xs" position="relative">
        <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" offset={["0", "md"]} placement="center-start" px="1.5" rounded="l2">
          New
        </Float>
      </GridItem>

      <GridItem bg="bg.panel" boxSize="3xs" position="relative">
        <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" offset={["md", "0"]} placement="end-end" px="1.5" rounded="l2">
          New
        </Float>
      </GridItem>
    </Grid>;
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const N=["Basic","Placement","Offset"];export{r as Basic,o as Offset,n as Placement,N as __namedExportsOrder,w as default};
