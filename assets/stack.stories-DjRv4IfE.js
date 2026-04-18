import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Dn as n,Fs as r,Gt as i,Ht as a,On as o,Ps as s,Rt as c,Ut as l,Vt as u,Wt as d,nu as f,ru as p,sm as m,vi as h,yi as g,zt as _}from"./iframe-CHoZGzMw.js";var v,y,b,x,S,C,w;e((()=>{s(),f(),h(),n(),l(),i(),u(),_(),v=m(),y={component:d,title:`Components / Stack`},b=()=>(0,v.jsx)(t,{children:(0,v.jsx)(g,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,v.jsx)(r,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),x=()=>(0,v.jsx)(a,{children:(0,v.jsx)(g,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,v.jsx)(r,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),S=()=>(0,v.jsx)(g,{each:[`end`,`start`,`center-end`,`center-start`,`end-start`,`end-end`,`start-start`,`start-end`],children:e=>(0,v.jsx)(c,{direction:e,children:[`info`,`success`,`warning`,`error`].map((e,t)=>(0,v.jsx)(r,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t))},e)}),C=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(t,{separator:(0,v.jsx)(o,{}),children:[(0,v.jsx)(r,{bg:`info`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(r,{bg:`success`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(r,{bg:`warning`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(r,{bg:`error`,color:`white`,p:`md`,rounded:`l2`,children:`Box`})]}),(0,v.jsxs)(a,{h:`2xs`,separator:(0,v.jsx)(o,{}),children:[(0,v.jsx)(p,{bg:`info`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(p,{bg:`success`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(p,{bg:`warning`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(p,{bg:`error`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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