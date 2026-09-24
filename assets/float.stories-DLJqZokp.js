import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./grid-item-C8pMABh2.js";import{n as i,t as a}from"./grid-DAC5TR2S.js";import{n as o,t as s}from"./box-C47iDJeO.js";import{n as c,t as l}from"./float-BCYYni1E.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{o(),i(),n(),c(),u=t(),d={component:l,title:`Components / Float`},f=()=>(0,u.jsx)(s,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,u.jsx)(l,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,px:`1.5`,rounded:`l1`,children:`New`})}),p=()=>(0,u.jsx)(a,{gap:`lg`,p:`lg`,templateColumns:`repeat(3, 1fr)`,children:[`start-start`,`start-center`,`start-end`,`center-start`,`center-center`,`center-end`,`end-start`,`end-center`,`end-end`].map(e=>(0,u.jsx)(r,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,u.jsx)(l,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,placement:e,px:`1.5`,rounded:`l2`,children:`New`})},e))}),m=()=>(0,u.jsxs)(a,{gap:`md`,p:`md`,templateColumns:`repeat(3, 1fr)`,children:[(0,u.jsx)(r,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,u.jsx)(l,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,offset:`md`,placement:`start-start`,px:`1.5`,rounded:`l2`,children:`New`})}),(0,u.jsx)(r,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,u.jsx)(l,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,offset:[`0`,`md`],placement:`center-start`,px:`1.5`,rounded:`l2`,children:`New`})}),(0,u.jsx)(r,{bg:`bg.panel`,boxSize:`3xs`,position:`relative`,children:(0,u.jsx)(l,{bg:`bg.contrast`,color:`fg.contrast`,fontSize:`sm`,offset:[`md`,`0`],placement:`end-end`,px:`1.5`,rounded:`l2`,children:`New`})})]}),h=[`Basic`,`Placement`,`Offset`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <Box bg="bg.panel" boxSize="3xs" position="relative">
      <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" px="1.5" rounded="l1">
        New
      </Float>
    </Box>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const placements = ["start-start", "start-center", "start-end", "center-start", "center-center", "center-end", "end-start", "end-center", "end-end"] as const;
  return <Grid gap="lg" p="lg" templateColumns="repeat(3, 1fr)">
      {placements.map(placement => <GridItem key={placement} bg="bg.panel" boxSize="3xs" position="relative">
          <Float bg="bg.contrast" color="fg.contrast" fontSize="sm" placement={placement} px="1.5" rounded="l2">
            New
          </Float>
        </GridItem>)}
    </Grid>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as Basic,m as Offset,p as Placement,h as __namedExportsOrder,d as default};