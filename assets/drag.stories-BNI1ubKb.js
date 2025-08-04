import{j as n,r as e,E as a}from"./iframe-CDvKCJeY.js";import{M as o}from"./motion-BJcCOCrK.js";import{u as x}from"./use-drag-controls-CghXwmrE.js";import{B as p}from"./box-xTzNsHnl.js";const h={component:o,title:"Components / Motion / Drag"},t=()=>n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"},onDrag:(r,s)=>console.log("Drag",s),onDragEnd:(r,s)=>console.log("Drag ends",s),onDragStart:(r,s)=>console.log("Drag starts",s)}),c=()=>n.jsxs(n.Fragment,{children:[n.jsx(o,{bg:"mono",cursor:"grab",drag:"x",h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}}),n.jsx(o,{bg:"secondary",cursor:"grab",drag:!0,dragConstraints:{bottom:100,left:-100,right:100,top:-100},h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})]}),g=()=>{const r=e.useRef(null);return n.jsx(a,{ref:r,flex:"1",w:"full",children:n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})})},u=()=>{const r=e.useRef(null);return n.jsx(a,{ref:r,flex:"1",w:"full",children:n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,dragElastic:0,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})})},i=()=>{const r=e.useRef(null);return n.jsx(a,{ref:r,flex:"1",w:"full",children:n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,dragMomentum:!1,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})})},d=()=>{const r=e.useRef(null);return n.jsx(a,{ref:r,flex:"1",w:"full",children:n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,dragTransition:{bounceDamping:10,bounceStiffness:600},h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})})},l=()=>{const r=e.useRef(null),s=e.useRef(null);return n.jsx(a,{ref:r,children:n.jsx(o,{ref:s,bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,h:"2xs",p:"md",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"},children:n.jsx(o,{bg:"secondary",cursor:"grab",drag:!0,dragConstraints:s,dragPropagation:!0,h:"4xs",rounded:"l3",w:"4xs",_active:{cursor:"grabbing"}})})})},f=()=>{const r=e.useRef(null),s=x();return n.jsxs(a,{ref:r,flex:"1",gap:"md",w:"full",children:[n.jsx(p,{bg:"secondary",cursor:"pointer",h:"2xs",rounded:"l3",w:"2xs",onPointerDown:m=>s.start(m,{snapToCursor:!0})}),n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,dragControls:s,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})]})},b=()=>{const r=e.useRef(null),s=x();return n.jsxs(a,{ref:r,flex:"1",gap:"md",w:"full",children:[n.jsx(p,{bg:"secondary",cursor:"pointer",h:"2xs",rounded:"l3",w:"2xs",onPointerDown:m=>s.start(m,{snapToCursor:!0})}),n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,dragControls:s,dragListener:!1,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="grab" drag h="2xs" rounded="l3" w="2xs" _active={{
    cursor: "grabbing"
  }} onDrag={(_, info) => console.log("Drag", info)} onDragEnd={(_, info) => console.log("Drag ends", info)} onDragStart={(_, info) => console.log("Drag starts", info)} />;
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragElastic={0} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragMomentum={false} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragTransition={{
      bounceDamping: 10,
      bounceStiffness: 600
    }} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};const v=["Basic","DragConstraints","DragConstraintsRef","DragElastic","DragMomentum","DragTransition","DragPropagation","DragControls","DisabledDragListener"];export{t as Basic,b as DisabledDragListener,c as DragConstraints,g as DragConstraintsRef,f as DragControls,u as DragElastic,i as DragMomentum,l as DragPropagation,d as DragTransition,v as __namedExportsOrder,h as default};
