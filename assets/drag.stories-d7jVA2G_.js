import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as o}from"./index-BwDkhjyp.js";import{u as J}from"./use-drag-controls-43DX9Lks.js";import{M as e}from"./motion-DbFL6ada.js";import{C as a}from"./center-CrIvuMIb.js";import{B as K}from"./box-DFfDP5ur.js";import"./_commonjsHelpers-BosuxZz1.js";import"./motion-D_mik6Sq.js";import"./forward-ref-BmTAT9U5.js";import"./factory-CSM9sPSx.js";import"./extends-CF3RwP-h.js";const sr={title:"Components / Motion / Drag",component:e},t=()=>n.jsx(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(e,{drag:!0,onDrag:(r,s)=>console.log("Drag",s),onDragStart:(r,s)=>console.log("Drag starts",s),onDragEnd:(r,s)=>console.log("Drag ends",s),w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})}),c=()=>n.jsxs(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:[n.jsx(e,{drag:"x",w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}}),n.jsx(e,{drag:!0,dragConstraints:{top:-100,left:-100,bottom:100,right:100},w:"2xs",h:"2xs",bg:"secondary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})]}),i=()=>{const r=o.useRef(null);return n.jsx(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:n.jsx(e,{drag:!0,dragConstraints:r,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})})},g=()=>{const r=o.useRef(null);return n.jsx(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:n.jsx(e,{drag:!0,dragConstraints:r,dragElastic:0,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})})},u=()=>{const r=o.useRef(null);return n.jsx(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:n.jsx(e,{drag:!0,dragConstraints:r,dragMomentum:!1,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})})},d=()=>{const r=o.useRef(null);return n.jsx(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:n.jsx(e,{drag:!0,dragConstraints:r,dragTransition:{bounceStiffness:600,bounceDamping:10},w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})})},l=()=>{const r=o.useRef(null),s=o.useRef(null);return n.jsx(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(e,{ref:s,drag:!0,dragConstraints:r,w:"2xs",h:"2xs",p:"md",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"},children:n.jsx(e,{drag:!0,dragConstraints:s,dragPropagation:!0,w:"4xs",h:"4xs",bg:"secondary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})})})},x=()=>{const r=o.useRef(null),s=J();return n.jsxs(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:[n.jsx(K,{w:"2xs",h:"2xs",bg:"secondary",rounded:"3xl",cursor:"pointer",onPointerDown:m=>s.start(m,{snapToCursor:!0})}),n.jsx(e,{drag:!0,dragConstraints:r,dragControls:s,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})]})},p=()=>{const r=o.useRef(null),s=J();return n.jsxs(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:[n.jsx(K,{w:"2xs",h:"2xs",bg:"secondary",rounded:"3xl",cursor:"pointer",onPointerDown:m=>s.start(m,{snapToCursor:!0})}),n.jsx(e,{drag:!0,dragConstraints:r,dragControls:s,dragListener:!1,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})]})};var b,f,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion drag onDrag={(_, info) => console.log("Drag", info)} onDragStart={(_, info) => console.log("Drag starts", info)} onDragEnd={(_, info) => console.log("Drag ends", info)} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,v,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Motion drag="x" w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />

      <Motion drag dragConstraints={{
      top: -100,
      left: -100,
      bottom: 100,
      right: 100
    }} w="2xs" h="2xs" bg="secondary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var R,D,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Motion drag dragConstraints={constraintsRef} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(_=(D=i.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var M,y,j;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Motion drag dragConstraints={constraintsRef} dragElastic={0} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(j=(y=g.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var E,T,S;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Motion drag dragConstraints={constraintsRef} dragMomentum={false} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(S=(T=u.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var L,H,P;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Motion drag dragConstraints={constraintsRef} dragTransition={{
      bounceStiffness: 600,
      bounceDamping: 10
    }} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var B,O,k;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  return <Center ref={containerRef} w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion ref={itemRef} drag dragConstraints={containerRef} w="2xs" h="2xs" p="md" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }}>
        <Motion drag dragConstraints={itemRef} dragPropagation w="4xs" h="4xs" bg="secondary" rounded="3xl" cursor="grab" _active={{
        cursor: "grabbing"
      }} />
      </Motion>
    </Center>;
}`,...(k=(O=l.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var q,z,A;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  return <Center ref={constraintsRef} w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Box w="2xs" h="2xs" bg="secondary" rounded="3xl" cursor="pointer" onPointerDown={ev => dragControls.start(ev, {
      snapToCursor: true
    })} />

      <Motion drag dragConstraints={constraintsRef} dragControls={dragControls} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(A=(z=x.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,G,I;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  return <Center ref={constraintsRef} w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Box w="2xs" h="2xs" bg="secondary" rounded="3xl" cursor="pointer" onPointerDown={ev => dragControls.start(ev, {
      snapToCursor: true
    })} />

      <Motion drag dragConstraints={constraintsRef} dragControls={dragControls} dragListener={false} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(I=(G=p.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const er=["basic","withConstraints","withConstraintsRef","withElastic","withMomentum","withTransition","usePropagation","useControls","disabledListener"];export{er as __namedExportsOrder,t as basic,sr as default,p as disabledListener,x as useControls,l as usePropagation,c as withConstraints,i as withConstraintsRef,g as withElastic,u as withMomentum,d as withTransition};
