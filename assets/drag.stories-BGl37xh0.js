import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Cu as n,Gu as r,Ku as i,Uu as a,Wu as o,Xp as s,ds as c,pp as l,us as u,wu as d}from"./iframe-BNI00s7o.js";var f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{r(),f=t(s(),1),u(),n(),o(),p=l(),m={component:a,title:`Components / Motion / Drag`},h=()=>(0,p.jsx)(a,{bg:`mono`,cursor:`grab`,drag:!0,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`},onDrag:(e,t)=>console.log(`Drag`,t),onDragEnd:(e,t)=>console.log(`Drag ends`,t),onDragStart:(e,t)=>console.log(`Drag starts`,t)}),g=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{bg:`mono`,cursor:`grab`,drag:`x`,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}}),(0,p.jsx)(a,{bg:`secondary`,cursor:`grab`,drag:!0,dragConstraints:{bottom:100,left:-100,right:100,top:-100},h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})]}),_=()=>{let e=(0,f.useRef)(null);return(0,p.jsx)(d,{ref:e,flex:`1`,w:`full`,children:(0,p.jsx)(a,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})})},v=()=>{let e=(0,f.useRef)(null);return(0,p.jsx)(d,{ref:e,flex:`1`,w:`full`,children:(0,p.jsx)(a,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,dragElastic:0,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})})},y=()=>{let e=(0,f.useRef)(null);return(0,p.jsx)(d,{ref:e,flex:`1`,w:`full`,children:(0,p.jsx)(a,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,dragMomentum:!1,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})})},b=()=>{let e=(0,f.useRef)(null);return(0,p.jsx)(d,{ref:e,flex:`1`,w:`full`,children:(0,p.jsx)(a,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,dragTransition:{bounceDamping:10,bounceStiffness:600},h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})})},x=()=>{let e=(0,f.useRef)(null),t=(0,f.useRef)(null);return(0,p.jsx)(d,{ref:e,children:(0,p.jsx)(a,{ref:t,bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,h:`2xs`,p:`md`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`},children:(0,p.jsx)(a,{bg:`secondary`,cursor:`grab`,drag:!0,dragConstraints:t,dragPropagation:!0,h:`4xs`,rounded:`l3`,w:`4xs`,_active:{cursor:`grabbing`}})})})},S=()=>{let e=(0,f.useRef)(null),t=i();return(0,p.jsxs)(d,{ref:e,flex:`1`,gap:`md`,w:`full`,children:[(0,p.jsx)(c,{bg:`secondary`,cursor:`pointer`,h:`2xs`,rounded:`l3`,w:`2xs`,onPointerDown:e=>t.start(e,{snapToCursor:!0})}),(0,p.jsx)(a,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,dragControls:t,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})]})},C=()=>{let e=(0,f.useRef)(null),t=i();return(0,p.jsxs)(d,{ref:e,flex:`1`,gap:`md`,w:`full`,children:[(0,p.jsx)(c,{bg:`secondary`,cursor:`pointer`,h:`2xs`,rounded:`l3`,w:`2xs`,onPointerDown:e=>t.start(e,{snapToCursor:!0})}),(0,p.jsx)(a,{bg:`mono`,cursor:`grab`,drag:!0,dragConstraints:e,dragControls:t,dragListener:!1,h:`2xs`,rounded:`l3`,w:`2xs`,_active:{cursor:`grabbing`}})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="grab" drag h="2xs" rounded="l3" w="2xs" _active={{
    cursor: "grabbing"
  }} onDrag={(_, info) => console.log("Drag", info)} onDragEnd={(_, info) => console.log("Drag ends", info)} onDragStart={(_, info) => console.log("Drag starts", info)} />;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragElastic={0} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragMomentum={false} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragTransition={{
      bounceDamping: 10,
      bounceStiffness: 600
    }} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}},w=[`Basic`,`DragConstraints`,`DragConstraintsRef`,`DragElastic`,`DragMomentum`,`DragTransition`,`DragPropagation`,`DragControls`,`DisabledDragListener`]}))();export{h as Basic,C as DisabledDragListener,g as DragConstraints,_ as DragConstraintsRef,S as DragControls,v as DragElastic,y as DragMomentum,x as DragPropagation,b as DragTransition,w as __namedExportsOrder,m as default};