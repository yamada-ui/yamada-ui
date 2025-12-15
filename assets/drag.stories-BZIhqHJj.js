import{j as n,r as e,W as a}from"./iframe-C1QqsVA9.js";import{M as o}from"./motion-6nvY9f6m.js";import{u as I}from"./use-drag-controls-Ct6xW2Yb.js";import{B as J}from"./box-BbsNZILY.js";import"./preload-helper-C1FmrZbK.js";const X={component:o,title:"Components / Motion / Drag"},t=()=>n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"},onDrag:(r,s)=>console.log("Drag",s),onDragEnd:(r,s)=>console.log("Drag ends",s),onDragStart:(r,s)=>console.log("Drag starts",s)}),c=()=>n.jsxs(n.Fragment,{children:[n.jsx(o,{bg:"mono",cursor:"grab",drag:"x",h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}}),n.jsx(o,{bg:"secondary",cursor:"grab",drag:!0,dragConstraints:{bottom:100,left:-100,right:100,top:-100},h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})]}),g=()=>{const r=e.useRef(null);return n.jsx(a,{ref:r,flex:"1",w:"full",children:n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})})},u=()=>{const r=e.useRef(null);return n.jsx(a,{ref:r,flex:"1",w:"full",children:n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,dragElastic:0,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})})},i=()=>{const r=e.useRef(null);return n.jsx(a,{ref:r,flex:"1",w:"full",children:n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,dragMomentum:!1,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})})},d=()=>{const r=e.useRef(null);return n.jsx(a,{ref:r,flex:"1",w:"full",children:n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,dragTransition:{bounceDamping:10,bounceStiffness:600},h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})})},l=()=>{const r=e.useRef(null),s=e.useRef(null);return n.jsx(a,{ref:r,children:n.jsx(o,{ref:s,bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,h:"2xs",p:"md",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"},children:n.jsx(o,{bg:"secondary",cursor:"grab",drag:!0,dragConstraints:s,dragPropagation:!0,h:"4xs",rounded:"l3",w:"4xs",_active:{cursor:"grabbing"}})})})},f=()=>{const r=e.useRef(null),s=I();return n.jsxs(a,{ref:r,flex:"1",gap:"md",w:"full",children:[n.jsx(J,{bg:"secondary",cursor:"pointer",h:"2xs",rounded:"l3",w:"2xs",onPointerDown:m=>s.start(m,{snapToCursor:!0})}),n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,dragControls:s,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})]})},b=()=>{const r=e.useRef(null),s=I();return n.jsxs(a,{ref:r,flex:"1",gap:"md",w:"full",children:[n.jsx(J,{bg:"secondary",cursor:"pointer",h:"2xs",rounded:"l3",w:"2xs",onPointerDown:m=>s.start(m,{snapToCursor:!0})}),n.jsx(o,{bg:"mono",cursor:"grab",drag:!0,dragConstraints:r,dragControls:s,dragListener:!1,h:"2xs",rounded:"l3",w:"2xs",_active:{cursor:"grabbing"}})]})};var x,p,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Motion bg="mono" cursor="grab" drag h="2xs" rounded="l3" w="2xs" _active={{
    cursor: "grabbing"
  }} onDrag={(_, info) => console.log("Drag", info)} onDragEnd={(_, info) => console.log("Drag ends", info)} onDragStart={(_, info) => console.log("Drag starts", info)} />;
}`,...(C=(p=t.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var D,R,w;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(w=(R=c.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var h,v,_;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(_=(v=g.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var M,j,E;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragElastic={0} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(E=(j=u.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var T,S,L;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragMomentum={false} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(L=(S=i.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var y,H,P;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} flex="1" w="full">
      <Motion bg="mono" cursor="grab" drag dragConstraints={constraintsRef} dragTransition={{
      bounceDamping: 10,
      bounceStiffness: 600
    }} h="2xs" rounded="l3" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var B,F,O;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(O=(F=l.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var W,k,q;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(q=(k=f.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,A,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(G=(A=b.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const Y=["Basic","DragConstraints","DragConstraintsRef","DragElastic","DragMomentum","DragTransition","DragPropagation","DragControls","DisabledDragListener"];export{t as Basic,b as DisabledDragListener,c as DragConstraints,g as DragConstraintsRef,f as DragControls,u as DragElastic,i as DragMomentum,l as DragPropagation,d as DragTransition,Y as __namedExportsOrder,X as default};
