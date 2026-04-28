import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{t as n}from"./center-B9iB-Iph.js";import{t as r}from"./center-DwGXhAh8.js";import{t as i}from"./box-D_8v7EGt.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./z-stack-D_lbkXhr.js";import{Fo as p,Ur as m,Wr as h,an as g,on as _}from"./iframe-DADqdCkf.js";var v,y,b,x,S,C,w;e((()=>{p(),r(),m(),g(),l(),o(),s(),c(),v=t(),y={component:d,title:`Components / Stack`},b=()=>(0,v.jsx)(u,{children:(0,v.jsx)(h,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,v.jsx)(i,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),x=()=>(0,v.jsx)(a,{children:(0,v.jsx)(h,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,v.jsx)(i,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),S=()=>(0,v.jsx)(h,{each:[`end`,`start`,`center-end`,`center-start`,`end-start`,`end-end`,`start-start`,`start-end`],children:e=>(0,v.jsx)(f,{direction:e,children:[`info`,`success`,`warning`,`error`].map((e,t)=>(0,v.jsx)(i,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t))},e)}),C=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(u,{separator:(0,v.jsx)(_,{}),children:[(0,v.jsx)(i,{bg:`info`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(i,{bg:`success`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(i,{bg:`warning`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,v.jsx)(i,{bg:`error`,color:`white`,p:`md`,rounded:`l2`,children:`Box`})]}),(0,v.jsxs)(a,{h:`2xs`,separator:(0,v.jsx)(_,{}),children:[(0,v.jsx)(n,{bg:`info`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(n,{bg:`success`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(n,{bg:`warning`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,v.jsx)(n,{bg:`error`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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