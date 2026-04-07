import{n as e}from"./chunk-zsgVPwQN.js";import{Cu as t,Gt as n,Ht as r,Jt as i,Kt as a,Ut as o,Vt as s,Wt as c,Xr as l,Zr as u,an as d,ds as f,on as p,pp as m,qt as h,us as g,wu as _}from"./iframe-a-xI_IFE.js";var v,y,b,x,S,C,w;e((()=>{g(),t(),l(),d(),a(),i(),c(),r(),v=m(),y={component:h,title:`Components / Stack`},b=()=>(0,v.jsx)(o,{children:(0,v.jsx)(u,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,v.jsx)(f,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),x=()=>(0,v.jsx)(n,{children:(0,v.jsx)(u,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,v.jsx)(f,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),S=()=>(0,v.jsx)(u,{each:[`end`,`start`,`center-end`,`center-start`,`end-start`,`end-end`,`start-start`,`start-end`],children:e=>(0,v.jsx)(s,{direction:e,children:[`info`,`success`,`warning`,`error`].map((e,t)=>(0,v.jsx)(f,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t))},e)}),C=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(o,{separator:(0,v.jsx)(p,{}),children:[(0,v.jsx)(f,{bg:`info`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(f,{bg:`success`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(f,{bg:`warning`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(f,{bg:`error`,color:`white`,p:`md`,rounded:`l2`,children:`Box`})]}),(0,v.jsxs)(n,{h:`2xs`,separator:(0,v.jsx)(p,{}),children:[(0,v.jsx)(_,{bg:`info`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(_,{bg:`success`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(_,{bg:`warning`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(_,{bg:`error`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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