import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{t as n}from"./center-BodL2_DM.js";import{t as r}from"./center-Clh7e36g.js";import{An as i,Cn as a,Dn as o,En as s,Ma as c,Na as l,Ol as u,On as d,Tn as f,_r as p,gr as m,kl as h,kn as g,wn as _}from"./iframe-DpVGHWSQ.js";var v,y,b,x,S,C,w;e((()=>{u(),r(),c(),m(),d(),i(),s(),_(),v=t(),y={component:g,title:`Components / Stack`},b=()=>(0,v.jsx)(f,{children:(0,v.jsx)(l,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,v.jsx)(h,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),x=()=>(0,v.jsx)(o,{children:(0,v.jsx)(l,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,v.jsx)(h,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),S=()=>(0,v.jsx)(l,{each:[`end`,`start`,`center-end`,`center-start`,`end-start`,`end-end`,`start-start`,`start-end`],children:e=>(0,v.jsx)(a,{direction:e,children:[`info`,`success`,`warning`,`error`].map((e,t)=>(0,v.jsx)(h,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t))},e)}),C=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(f,{separator:(0,v.jsx)(p,{}),children:[(0,v.jsx)(h,{bg:`info`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(h,{bg:`success`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(h,{bg:`warning`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(h,{bg:`error`,color:`white`,p:`md`,rounded:`l2`,children:`Box`})]}),(0,v.jsxs)(o,{h:`2xs`,separator:(0,v.jsx)(p,{}),children:[(0,v.jsx)(n,{bg:`info`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(n,{bg:`success`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(n,{bg:`warning`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(n,{bg:`error`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </VStack>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </HStack>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <For each={["end", "start", "center-end", "center-start", "end-start", "end-end", "start-start", "start-end"] as const}>
      {direction => <ZStack key={direction} direction={direction}>
          {["info", "success", "warning", "error"].map((bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
              Box
            </Box>)}
        </ZStack>}
    </For>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <>
      <VStack separator={<Separator />}>
        <Box bg="info" color="white" p="md" rounded="l2">
          Box
        </Box>

        <Box bg="success" color="white" p="md" rounded="l2">
          Box
        </Box>

        <Box bg="warning" color="white" p="md" rounded="l2">
          Box
        </Box>

        <Box bg="error" color="white" p="md" rounded="l2">
          Box
        </Box>
      </VStack>

      <HStack h="2xs" separator={<Separator />}>
        <Center bg="info" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>

        <Center bg="success" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>

        <Center bg="warning" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>

        <Center bg="error" color="white" h="full" p="md" rounded="l2">
          Center
        </Center>
      </HStack>
    </>;
}`,...C.parameters?.docs?.source}}},w=[`Vertical`,`Horizontal`,`Depth`,`Border`]}))();export{C as Border,S as Depth,x as Horizontal,b as Vertical,w as __namedExportsOrder,y as default};