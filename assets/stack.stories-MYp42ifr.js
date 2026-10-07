import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{ct as n,ot as r,vt as i,yt as a}from"./props-CCQavtXy.js";import{t as o}from"./jsx-runtime-BdxMnOeJ.js";import{d as s,f as c,l,u}from"./utils-DZVvNDIZ.js";import{a as d,d as f,r as p,t as m}from"./create-component-CNpeiJ0q.js";import{n as h,r as g,t as _}from"./use-inject-vars-_XliWKP6.js";import{n as v,t as y}from"./center-BsJ6_cZ9.js";import{n as b,t as x}from"./box-hb1yJtuQ.js";import{n as S,t as C}from"./for-vlneEBu7.js";import{n as w,t as T}from"./separator-ERj64WNQ.js";import{n as E,t as D}from"./h-stack-C6vzXOlH.js";import{n as O,t as k}from"./stack-Cu608SWF.js";import{n as A,t as j}from"./v-stack-DFqT3QqZ.js";var M;function N(){return(N=e((()=>{f(),M=d({base:{gap:`lg`,overflow:`hidden`,position:`relative`}})})))()}var P,F,I,L,R,z;function B(){return(B=e((()=>{P=t(),p(),l(),s(),_(),a(),r(),N(),F=o(),{PropsContext:I,usePropsContext:L,withContext:R}=m(`stack--depth`,M),z=R(({css:e,children:t,direction:r=`end`,fit:a=!0,reverse:o=!1,startIndex:s=0,...l})=>{r===`start-center`&&(r=`start`),r===`end-center`&&(r=`end`);let d=(0,P.useRef)(new Map),[f,p]=(0,P.useState)({height:0,width:0}),m=(0,P.useCallback)(e=>r.startsWith(`start`)?{[o?`top`:`bottom`]:e}:r.startsWith(`end`)?{[o?`bottom`:`top`]:e}:{[o?`bottom`:`top`]:0},[r,o]),h=(0,P.useCallback)(e=>r.endsWith(`-start`)?{[o?`left`:`right`]:e}:r.endsWith(`-end`)?{[o?`right`:`left`]:e}:{[o?`right`:`left`]:0},[r,o]),g=(0,P.useMemo)(()=>i(t).map((e,t)=>{let r=(0,P.createRef)();d.current.set(t,r);let i=e.key??t,a=s+t,o=`calc({space} * ${t})`,c={position:`absolute`,zIndex:a,...m(o),...h(o)},l={...e.props,ref:n(e.props.ref,r),css:u(e.props.css,c)},f=(0,P.cloneElement)(e,l);return(0,F.jsx)(P.Fragment,{children:f},i)}),[t,s,m,h]);return(0,P.useEffect)(()=>{if(!a)return;let e=r.endsWith(`-start`),t=r.startsWith(`start`),n=0,i=0;o&&(e=!e,t=!t);for(let r of d.current.values()){if(!r.current)continue;let{offsetHeight:a,offsetLeft:o,offsetParent:s,offsetTop:c,offsetWidth:l}=r.current;s&&(e&&(o=(s?.offsetWidth??0)-o-l),t&&(c=(s?.offsetHeight??0)-c-a),l+=o,a+=c,l>n&&(n=l),a>i&&(i=a))}p({height:i,width:n})},[g,r,o,a]),(0,F.jsx)(c.div,{css:e,minHeight:a?`${f.height}px`:void 0,minWidth:a?`${f.width}px`:void 0,...l,children:g})})(void 0,e=>{let t=h(e.css,{gap:`space`});return{...g(e,{gap:`space`}),css:t}})})))()}var V,H,U,W,G,K,q;function J(){return(J=e((()=>{b(),v(),S(),w(),E(),O(),A(),B(),V=o(),H={component:k,title:`Components / Stack`},U=()=>(0,V.jsx)(j,{children:(0,V.jsx)(C,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,V.jsx)(x,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),W=()=>(0,V.jsx)(D,{children:(0,V.jsx)(C,{each:[`info`,`success`,`warning`,`error`],children:(e,t)=>(0,V.jsx)(x,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t)})}),G=()=>(0,V.jsx)(C,{each:[`end`,`start`,`center-end`,`center-start`,`end-start`,`end-end`,`start-start`,`start-end`],children:e=>(0,V.jsx)(z,{direction:e,children:[`info`,`success`,`warning`,`error`].map((e,t)=>(0,V.jsx)(x,{bg:e,color:`white`,p:`md`,rounded:`l2`,children:`Box`},t))},e)}),K=()=>(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(j,{separator:(0,V.jsx)(T,{}),children:[(0,V.jsx)(x,{bg:`info`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,V.jsx)(x,{bg:`success`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,V.jsx)(x,{bg:`warning`,color:`white`,p:`md`,rounded:`l2`,children:`Box`}),(0,V.jsx)(x,{bg:`error`,color:`white`,p:`md`,rounded:`l2`,children:`Box`})]}),(0,V.jsxs)(D,{h:`2xs`,separator:(0,V.jsx)(T,{}),children:[(0,V.jsx)(y,{bg:`info`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,V.jsx)(y,{bg:`success`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,V.jsx)(y,{bg:`warning`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`}),(0,V.jsx)(y,{bg:`error`,color:`white`,h:`full`,p:`md`,rounded:`l2`,children:`Center`})]})]}),q=[`Vertical`,`Horizontal`,`Depth`,`Border`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </VStack>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <HStack>
      <For each={["info", "success", "warning", "error"]}>
        {(bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
            Box
          </Box>}
      </For>
    </HStack>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <For each={["end", "start", "center-end", "center-start", "end-start", "end-end", "start-start", "start-end"] as const}>
      {direction => <ZStack key={direction} direction={direction}>
          {["info", "success", "warning", "error"].map((bg, index) => <Box key={index} bg={bg} color="white" p="md" rounded="l2">
              Box
            </Box>)}
        </ZStack>}
    </For>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}}})))()}J();export{K as Border,G as Depth,W as Horizontal,U as Vertical,q as __namedExportsOrder,H as default};