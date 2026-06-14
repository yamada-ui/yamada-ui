import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ev as t,Fl as n,La as r,Pl as i,Ra as a,if as o,of as s,rf as c}from"./iframe-4z85howq.js";var l,u,d,f,p,m;e((()=>{i(),c(),a(),l=t(),u={component:r,title:`Components / Float`},d=()=>(0,l.jsx)(n,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,l.jsx)(r,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,px:`1.5`,rounded:`l1`,children:`New`})}),f=()=>(0,l.jsx)(s,{gap:`lg`,p:`lg`,templateColumns:`repeat(3, 1fr)`,children:[`start-start`,`start-center`,`start-end`,`center-start`,`center-center`,`center-end`,`end-start`,`end-center`,`end-end`].map(e=>(0,l.jsx)(o,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,l.jsx)(r,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,placement:e,px:`1.5`,rounded:`l2`,children:`New`})},e))}),p=()=>(0,l.jsxs)(s,{gap:`md`,p:`md`,templateColumns:`repeat(3, 1fr)`,children:[(0,l.jsx)(o,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,l.jsx)(r,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,offset:`md`,placement:`start-start`,px:`1.5`,rounded:`l2`,children:`New`})}),(0,l.jsx)(o,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,l.jsx)(r,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,offset:[`0`,`md`],placement:`center-start`,px:`1.5`,rounded:`l2`,children:`New`})}),(0,l.jsx)(o,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,l.jsx)(r,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,offset:[`md`,`0`],placement:`end-end`,px:`1.5`,rounded:`l2`,children:`New`})})]}),d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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