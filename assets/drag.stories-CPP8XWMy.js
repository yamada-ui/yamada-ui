import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r}from"./use-drag-controls-ChFkUDGV.js";import{t as i}from"./react-DhJdH1Jr.js";import{n as a,t as o}from"./motion-B3D3Rpm_.js";import{n as s,t as c}from"./center-C6NHygeb.js";import{n as l,t as u}from"./box-C47iDJeO.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{i(),d=t(),l(),s(),a(),f=n(),p={component:o,title:`Components / Motion / Drag`},m=()=>(0,f.jsx)(o,{bg:`mono`,cursor:`grab`,drag:!0,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`},onDrag:(e,t)=>console.log(`Drag`,t),onDragEnd:(e,t)=>console.log(`Drag ends`,t),onDragStart:(e,t)=>console.log(`Drag starts`,t)}),h=()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{bg:`mono`,cursor:`grab`,drag:`x`,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}}),(0,f.jsx)(o,{bg:`secondary`,cursor:`grab`,drag:!0,dragConstraints:{bottom:100,left:-100,right:100,top:-100},h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})]}),g=()=>{let e=(0,d.useRef)(null);return(0,f.jsx)(c,{ref:e,flex:`1`,w:`full`,children:(0,f.jsx)(o,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})})},_=()=>{let e=(0,d.useRef)(null);return(0,f.jsx)(c,{ref:e,flex:`1`,w:`full`,children:(0,f.jsx)(o,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,dragElastic:0,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})})},v=()=>{let e=(0,d.useRef)(null);return(0,f.jsx)(c,{ref:e,flex:`1`,w:`full`,children:(0,f.jsx)(o,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,dragMomentum:!1,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})})},y=()=>{let e=(0,d.useRef)(null);return(0,f.jsx)(c,{ref:e,flex:`1`,w:`full`,children:(0,f.jsx)(o,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,dragTransition:{bounceDamping:10,bounceStiffness:600},h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})})},b=()=>{let e=(0,d.useRef)(null),t=(0,d.useRef)(null);return(0,f.jsx)(c,{ref:e,children:(0,f.jsx)(o,{ref:t,bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,h:`2xs`,p:`md`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`},children:(0,f.jsx)(o,{bg:`secondary`,cursor:`grab`,drag:!0,dragConstraints:t,dragPropagation:!0,h:`4xs`,rounded:`l3`,w:`4xs`,_active:{cursor:`grabbing`}})})})},x=()=>{let e=(0,d.useRef)(null),t=r();return(0,f.jsxs)(c,{ref:e,flex:`1`,gap:`md`,w:`full`,children:[(0,f.jsx)(u,{bg:`secondary`,cursor:`pointer`,h:`2xs`,rounded:`l3`,w:`2xs`,onPointerDown:e=>t.start(e,{snapToCursor:!0})}),(0,f.jsx)(o,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,dragControls:t,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})]})},S=()=>{let e=(0,d.useRef)(null),t=r();return(0,f.jsxs)(c,{ref:e,flex:`1`,gap:`md`,w:`full`,children:[(0,f.jsx)(u,{bg:`secondary`,cursor:`pointer`,h:`2xs`,rounded:`l3`,w:`2xs`,onPointerDown:e=>t.start(e,{snapToCursor:!0})}),(0,f.jsx)(o,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,dragControls:t,dragListener:!1,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})]})},C=[`Basic`,`DragConstraints`,`DragConstraintsRef`,`DragElastic`,`DragMomentum`,`DragTransition`,`DragPropagation`,`DragControls`,`DisabledDragListener`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="grab" drag h="2xs" rounded="l3" w="2xs" _active={{
    cursor: "grabbing"
  }} onDrag={(_, info) => console.log("Drag", info)} onDragEnd={(_, info) => console.log("Drag ends", info)} onDragStart={(_, info) => console.log("Drag starts", info)} />;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Motion bg="mono" cursor="grab" drag="x" h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />

      <Motion bg="secondary" cursor="grab" drag dragConstraints={{
      bottom: 100,
      left: -100,
      right: 100,
      top: -100
    }} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragElastic={0} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragMomentum={false} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragTransition={{
      bounceDamping: 10,
      bounceStiffness: 600
    }} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  return <Center ref={ref}>
      <Motion ref={itemRef} bg="mono" cursor="grab" drag dragConstraints={ref} h="2xs" p="md" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }}>
        <Motion bg="secondary" cursor="grab" drag dragConstraints={itemRef} dragPropagation h="4xs" rounded="l3" w="4xs" _active={{
        cursor: "grabbing"
      }} />
      </Motion>
    </Center>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  return <Center ref={constraintsRef} flex="1" gap="md" w="full">
      <Box bg="secondary" cursor="pointer" h="2xs" rounded="l3" w="2xs" onPointerDown={ev => dragControls.start(ev, {
      snapToCursor: true
    })} />

      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragControls={dragControls} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  return <Center ref={constraintsRef} flex="1" gap="md" w="full">
      <Box bg="secondary" cursor="pointer" h="2xs" rounded="l3" w="2xs" onPointerDown={ev => dragControls.start(ev, {
      snapToCursor: true
    })} />

      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragControls={dragControls} dragListener={false} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...S.parameters?.docs?.source}}}})))()}w();export{m as Basic,S as DisabledDragListener,h as DragConstraints,g as DragConstraintsRef,x as DragControls,_ as DragElastic,v as DragMomentum,b as DragPropagation,y as DragTransition,C as __namedExportsOrder,p as default};