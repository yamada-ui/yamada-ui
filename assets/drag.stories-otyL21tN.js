import{j as n,a as b}from"./jsx-runtime-TtYKBvr-.js";import{r as o}from"./index-IybTgENJ.js";import{u as K}from"./use-drag-controls-Ge2V3ppt.js";import{M as e}from"./motion-HWUA2jNq.js";import{C as a}from"./center-5D7zPdPp.js";import{B as N}from"./box-o_C1MUpU.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./motion-AgWUVtfu.js";import"./forward-ref-6T0UNPU-.js";import"./factory-LHs-Bkmb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";const er={title:"Components / Motion / Drag",component:e},t=()=>n(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{drag:!0,onDrag:(r,s)=>console.log("Drag",s),onDragStart:(r,s)=>console.log("Drag starts",s),onDragEnd:(r,s)=>console.log("Drag ends",s),w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})}),c=()=>b(a,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:[n(e,{drag:"x",w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}}),n(e,{drag:!0,dragConstraints:{top:-100,left:-100,bottom:100,right:100},w:"2xs",h:"2xs",bg:"secondary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})]}),i=()=>{const r=o.useRef(null);return n(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:n(e,{drag:!0,dragConstraints:r,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})})},g=()=>{const r=o.useRef(null);return n(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:n(e,{drag:!0,dragConstraints:r,dragElastic:0,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})})},u=()=>{const r=o.useRef(null);return n(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:n(e,{drag:!0,dragConstraints:r,dragMomentum:!1,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})})},d=()=>{const r=o.useRef(null);return n(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:n(e,{drag:!0,dragConstraints:r,dragTransition:{bounceStiffness:600,bounceDamping:10},w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})})},l=()=>{const r=o.useRef(null),s=o.useRef(null);return n(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(e,{ref:s,drag:!0,dragConstraints:r,w:"2xs",h:"2xs",p:"md",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"},children:n(e,{drag:!0,dragConstraints:s,dragPropagation:!0,w:"4xs",h:"4xs",bg:"secondary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})})})},p=()=>{const r=o.useRef(null),s=K();return b(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:[n(N,{w:"2xs",h:"2xs",bg:"secondary",rounded:"3xl",cursor:"pointer",onPointerDown:m=>s.start(m,{snapToCursor:!0})}),n(e,{drag:!0,dragConstraints:r,dragControls:s,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})]})},x=()=>{const r=o.useRef(null),s=K();return b(a,{ref:r,w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",gap:"md",children:[n(N,{w:"2xs",h:"2xs",bg:"secondary",rounded:"3xl",cursor:"pointer",onPointerDown:m=>s.start(m,{snapToCursor:!0})}),n(e,{drag:!0,dragConstraints:r,dragControls:s,dragListener:!1,w:"2xs",h:"2xs",bg:"primary",rounded:"3xl",cursor:"grab",_active:{cursor:"grabbing"}})]})};var f,h,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion drag onDrag={(_, info) => console.log("Drag", info)} onDragStart={(_, info) => console.log("Drag starts", info)} onDragEnd={(_, info) => console.log("Drag ends", info)} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var v,C,R;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var D,_,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Motion drag dragConstraints={constraintsRef} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(M=(_=i.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var y,E,T;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Motion drag dragConstraints={constraintsRef} dragElastic={0} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(T=(E=g.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var S,L,H;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Motion drag dragConstraints={constraintsRef} dragMomentum={false} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(H=(L=u.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var P,B,j;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
      <Motion drag dragConstraints={constraintsRef} dragTransition={{
      bounceStiffness: 600,
      bounceDamping: 10
    }} w="2xs" h="2xs" bg="primary" rounded="3xl" cursor="grab" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(j=(B=d.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var O,k,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,A,F;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,I,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(J=(I=x.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const ar=["basic","withConstraints","withConstraintsRef","withElastic","withMomentum","withTransition","usePropagation","useControls","disabledListener"];export{ar as __namedExportsOrder,t as basic,er as default,x as disabledListener,p as useControls,l as usePropagation,c as withConstraints,i as withConstraintsRef,g as withElastic,u as withMomentum,d as withTransition};
