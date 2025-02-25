import{j as n}from"./jsx-runtime-BpbtHYHY.js";import{r as o}from"./index-BwPxMuoB.js";import{u as J}from"./use-drag-controls-CgV5akI1.js";import{M as e}from"./motion-B3T2Zn_y.js";import{C as a}from"./center-B3pLLn64.js";import{B as K}from"./box-CKfluZfz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-BdCiNrpl.js";import"./forward-ref-Cy2nAbAn.js";import"./factory-DbNU74ts.js";const nr={component:e,title:"Components / Motion / Drag"},t=()=>n.jsx(a,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{bg:"primary",cursor:"grab",drag:!0,h:"2xs",rounded:"3xl",w:"2xs",_active:{cursor:"grabbing"},onDrag:(r,s)=>console.log("Drag",s),onDragEnd:(r,s)=>console.log("Drag ends",s),onDragStart:(r,s)=>console.log("Drag starts",s)})}),c=()=>n.jsxs(a,{gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[n.jsx(e,{bg:"primary",cursor:"grab",drag:"x",h:"2xs",rounded:"3xl",w:"2xs",_active:{cursor:"grabbing"}}),n.jsx(e,{bg:"secondary",cursor:"grab",drag:!0,dragConstraints:{bottom:100,left:-100,right:100,top:-100},h:"2xs",rounded:"3xl",w:"2xs",_active:{cursor:"grabbing"}})]}),i=()=>{const r=o.useRef(null);return n.jsx(a,{ref:r,gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{bg:"primary",cursor:"grab",drag:!0,dragConstraints:r,h:"2xs",rounded:"3xl",w:"2xs",_active:{cursor:"grabbing"}})})},g=()=>{const r=o.useRef(null);return n.jsx(a,{ref:r,gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{bg:"primary",cursor:"grab",drag:!0,dragConstraints:r,dragElastic:0,h:"2xs",rounded:"3xl",w:"2xs",_active:{cursor:"grabbing"}})})},u=()=>{const r=o.useRef(null);return n.jsx(a,{ref:r,gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{bg:"primary",cursor:"grab",drag:!0,dragConstraints:r,dragMomentum:!1,h:"2xs",rounded:"3xl",w:"2xs",_active:{cursor:"grabbing"}})})},d=()=>{const r=o.useRef(null);return n.jsx(a,{ref:r,gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{bg:"primary",cursor:"grab",drag:!0,dragConstraints:r,dragTransition:{bounceDamping:10,bounceStiffness:600},h:"2xs",rounded:"3xl",w:"2xs",_active:{cursor:"grabbing"}})})},l=()=>{const r=o.useRef(null),s=o.useRef(null);return n.jsx(a,{ref:r,h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(e,{ref:s,bg:"primary",cursor:"grab",drag:!0,dragConstraints:r,h:"2xs",p:"md",rounded:"3xl",w:"2xs",_active:{cursor:"grabbing"},children:n.jsx(e,{bg:"secondary",cursor:"grab",drag:!0,dragConstraints:s,dragPropagation:!0,h:"4xs",rounded:"3xl",w:"4xs",_active:{cursor:"grabbing"}})})})},x=()=>{const r=o.useRef(null),s=J();return n.jsxs(a,{ref:r,gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[n.jsx(K,{bg:"secondary",cursor:"pointer",h:"2xs",rounded:"3xl",w:"2xs",onPointerDown:m=>s.start(m,{snapToCursor:!0})}),n.jsx(e,{bg:"primary",cursor:"grab",drag:!0,dragConstraints:r,dragControls:s,h:"2xs",rounded:"3xl",w:"2xs",_active:{cursor:"grabbing"}})]})},p=()=>{const r=o.useRef(null),s=J();return n.jsxs(a,{ref:r,gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[n.jsx(K,{bg:"secondary",cursor:"pointer",h:"2xs",rounded:"3xl",w:"2xs",onPointerDown:m=>s.start(m,{snapToCursor:!0})}),n.jsx(e,{bg:"primary",cursor:"grab",drag:!0,dragConstraints:r,dragControls:s,dragListener:!1,h:"2xs",rounded:"3xl",w:"2xs",_active:{cursor:"grabbing"}})]})};var b,f,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion bg="primary" cursor="grab" drag h="2xs" rounded="3xl" w="2xs" _active={{
      cursor: "grabbing"
    }} onDrag={(_, info) => console.log("Drag", info)} onDragEnd={(_, info) => console.log("Drag ends", info)} onDragStart={(_, info) => console.log("Drag starts", info)} />
    </Center>;
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,v,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Center gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion bg="primary" cursor="grab" drag="x" h="2xs" rounded="3xl" w="2xs" _active={{
      cursor: "grabbing"
    }} />

      <Motion bg="secondary" cursor="grab" drag dragConstraints={{
      bottom: 100,
      left: -100,
      right: 100,
      top: -100
    }} h="2xs" rounded="3xl" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var R,D,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion bg="primary" cursor="grab" drag dragConstraints={constraintsRef} h="2xs" rounded="3xl" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(_=(D=i.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var M,y,j;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion bg="primary" cursor="grab" drag dragConstraints={constraintsRef} dragElastic={0} h="2xs" rounded="3xl" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(j=(y=g.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var E,T,S;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion bg="primary" cursor="grab" drag dragConstraints={constraintsRef} dragMomentum={false} h="2xs" rounded="3xl" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(S=(T=u.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var L,H,P;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return <Center ref={constraintsRef} gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion bg="primary" cursor="grab" drag dragConstraints={constraintsRef} dragTransition={{
      bounceDamping: 10,
      bounceStiffness: 600
    }} h="2xs" rounded="3xl" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var B,O,k;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  return <Center ref={containerRef} h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion ref={itemRef} bg="primary" cursor="grab" drag dragConstraints={containerRef} h="2xs" p="md" rounded="3xl" w="2xs" _active={{
      cursor: "grabbing"
    }}>
        <Motion bg="secondary" cursor="grab" drag dragConstraints={itemRef} dragPropagation h="4xs" rounded="3xl" w="4xs" _active={{
        cursor: "grabbing"
      }} />
      </Motion>
    </Center>;
}`,...(k=(O=l.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var q,z,A;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  return <Center ref={constraintsRef} gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Box bg="secondary" cursor="pointer" h="2xs" rounded="3xl" w="2xs" onPointerDown={ev => dragControls.start(ev, {
      snapToCursor: true
    })} />

      <Motion bg="primary" cursor="grab" drag dragConstraints={constraintsRef} dragControls={dragControls} h="2xs" rounded="3xl" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(A=(z=x.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,G,I;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  return <Center ref={constraintsRef} gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Box bg="secondary" cursor="pointer" h="2xs" rounded="3xl" w="2xs" onPointerDown={ev => dragControls.start(ev, {
      snapToCursor: true
    })} />

      <Motion bg="primary" cursor="grab" drag dragConstraints={constraintsRef} dragControls={dragControls} dragListener={false} h="2xs" rounded="3xl" w="2xs" _active={{
      cursor: "grabbing"
    }} />
    </Center>;
}`,...(I=(G=p.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const sr=["basic","withConstraints","withConstraintsRef","withElastic","withMomentum","withTransition","usePropagation","useControls","disabledListener"];export{sr as __namedExportsOrder,t as basic,nr as default,p as disabledListener,x as useControls,l as usePropagation,c as withConstraints,i as withConstraintsRef,g as withElastic,u as withMomentum,d as withTransition};
