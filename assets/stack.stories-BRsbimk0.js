import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{Ft as r,P as i,m as a,n as o,p as s,pt as c,t as l,y as u,yt as d}from"./core-DEigGAm3.js";import{t as f}from"./jsx-runtime-BBQGix-2.js";import{t as p}from"./center-CXtQvNiW.js";import{t as m}from"./center-t5sr6STJ.js";import{An as h,Dn as g,En as _,Fl as v,Ia as y,La as b,Mn as x,On as S,Pl as C,Tn as w,_r as T,jn as E,kn as D,vr as O}from"./iframe-D00dh1DN.js";var k,A,j,M,N,P,F=t((()=>{k=e(n(),1),l(),c(),E(),A=f(),{PropsContext:j,usePropsContext:M,withContext:N}=o(`stack--depth`,x),P=N(({css:e,children:t,direction:n=`end`,fit:a=!0,reverse:o=!1,startIndex:s=0,...c})=>{n===`start-center`&&(n=`start`),n===`end-center`&&(n=`end`);let l=(0,k.useRef)(new Map),[f,p]=(0,k.useState)({height:0,width:0}),m=(0,k.useCallback)(e=>n.startsWith(`start`)?{[o?`top`:`bottom`]:e}:n.startsWith(`end`)?{[o?`bottom`:`top`]:e}:{[o?`bottom`:`top`]:0},[n,o]),h=(0,k.useCallback)(e=>n.endsWith(`-start`)?{[o?`left`:`right`]:e}:n.endsWith(`-end`)?{[o?`right`:`left`]:e}:{[o?`right`:`left`]:0},[n,o]),g=(0,k.useMemo)(()=>r(t).map((e,t)=>{let n=(0,k.createRef)();l.current.set(t,n);let r=e.key??t,i=s+t,a=`calc({space} * ${t})`,o={position:`absolute`,zIndex:i,...m(a),...h(a)};return(0,A.jsx)(k.Fragment,{children:(0,k.cloneElement)(e,{...e.props,ref:d(e.props.ref,n),css:u(e.props.css,o)})},r)}),[t,s,m,h]);return(0,k.useEffect)(()=>{if(!a)return;let e=n.endsWith(`-start`),t=n.startsWith(`start`),r=0,i=0;o&&(e=!e,t=!t);for(let n of l.current.values()){if(!n.current)continue;let{offsetHeight:a,offsetLeft:o,offsetParent:s,offsetTop:c,offsetWidth:l}=n.current;s&&(e&&(o=(s?.offsetWidth??0)-o-l),t&&(c=(s?.offsetHeight??0)-c-a),l+=o,a+=c,l>r&&(r=l),a>i&&(i=a))}p({height:i,width:r})},[g,n,o,a]),(0,A.jsx)(i.div,{css:e,minHeight:a?`${f.height}px`:void 0,minWidth:a?`${f.width}px`:void 0,...c,children:g})})(void 0,e=>{let t=s(e.css,{gap:`space`});return{...a(e,{gap:`space`}),css:t}})})),I,L,R,z,B,V,H;t((()=>{C(),m(),y(),T(),S(),h(),_(),F(),I=f(),L={component:D,title:`Components / Stack`},R=()=>(0,I.jsx)(w,{children:(0,I.jsx)(b,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,I.jsx)(v,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),z=()=>(0,I.jsx)(g,{children:(0,I.jsx)(b,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,I.jsx)(v,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),B=()=>(0,I.jsx)(b,{each:[`end`,`start`,`center-end`,`center-start`,`end-start`,`end-end`,`start-start`,`start-end`],children:e=>(0,I.jsx)(P,{direction:e,children:[`info`,`success`,`warning`,`error`].map((e,t)=>(0,I.jsx)(v,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t))},e)}),V=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(w,{separator:(0,I.jsx)(O,{}),children:[(0,I.jsx)(v,{bg:`info`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,I.jsx)(v,{bg:`success`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,I.jsx)(v,{bg:`warning`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,I.jsx)(v,{bg:`error`,color:`white`,p:`md`,rounded:`l2`,children:`Box`})]}),(0,I.jsxs)(g,{h:`2xs`,separator:(0,I.jsx)(O,{}),children:[(0,I.jsx)(p,{bg:`info`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,I.jsx)(p,{bg:`success`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,I.jsx)(p,{bg:`warning`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,I.jsx)(p,{bg:`error`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`})]})]}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </VStack>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </HStack>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <For each={["end", "start", "center-end", "center-start", "end-start", "end-end", "start-start", "start-end"] as const}>
      {direction => <ZStack key={direction} direction={direction}>
          {["info", "success", "warning", "error"].map((bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
              Box
            </Box>)}
        </ZStack>}
    </For>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}},H=[`Vertical`,`Horizontal`,`Depth`,`Border`]}))();export{V as Border,B as Depth,z as Horizontal,R as Vertical,H as __namedExportsOrder,L as default};