import{n as e}from"./chunk-zsgVPwQN.js";import{Fl as t,Ml as n,Ms as r,Nl as i,Ns as a,bi as o,im as s,xi as c}from"./iframe-BdSFgLyo.js";var l,u,d,f,p,m;e((()=>{r(),n(),c(),l=s(),u={component:o,title:`Components / Float`},d=()=>(0,l.jsx)(a,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,l.jsx)(o,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,px:`1.5`,rounded:`l1`,children:`New`})}),f=()=>(0,l.jsx)(t,{gap:`lg`,p:`lg`,templateColumns:`repeat(3, 1fr)`,children:[`start-start`,`start-center`,`start-end`,`center-start`,`center-center`,`center-end`,`end-start`,`end-center`,`end-end`].map(e=>(0,l.jsx)(i,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,l.jsx)(o,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,placement:e,px:`1.5`,rounded:`l2`,children:`New`})},e))}),p=()=>(0,l.jsxs)(t,{gap:`md`,p:`md`,templateColumns:`repeat(3, 1fr)`,children:[(0,l.jsx)(i,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,l.jsx)(o,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,offset:`md`,placement:`start-start`,px:`1.5`,rounded:`l2`,children:`New`})}),(0,l.jsx)(i,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,l.jsx)(o,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,offset:[`0`,`md`],placement:`center-start`,px:`1.5`,rounded:`l2`,children:`New`})}),(0,l.jsx)(i,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,l.jsx)(o,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,offset:[`md`,`0`],placement:`end-end`,px:`1.5`,rounded:`l2`,children:`New`})})]}),d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.panel" boxSize="3xs" position="relative">
      <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" px="1.5" rounded="l1">
        New
      </Float>
    </Box>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const placements = ["start-start", "start-center", "start-end", "center-start", "center-center", "center-end", "end-start", "end-center", "end-end"] as const;
  return <Grid gap="lg" p="lg" templateColumns="repeat(3, 1fr)">
      {placements.map(placement => <GridItem key={placement} bg="bg.panel" boxSize="3xs" position="relative">
          <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" placement={placement} px="1.5" rounded="l2">
            New
          </Float>
        </GridItem>)}
    </Grid>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m=[`Basic`,`Placement`,`Offset`]}))();export{d as Basic,p as Offset,f as Placement,m as __namedExportsOrder,u as default};