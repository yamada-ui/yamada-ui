import{r as a,bN as Te,bO as ke,am as fe,bj as be,j as e,bm as we,d as Oe,c as he,R as Me,N as Pe,h as E,m as G,aA as Ve,i as ze,b as N,g as _e,s as Ie,T as U}from"./iframe-FV6Pf4zG.js";import{P as $}from"./props-table-DZUGPlYC.js";import{u as Ee}from"./index-gzKnGVq3.js";import{u as De}from"./use-drag-controls-C4jBrN2I.js";import{u as Ne,a as H}from"./use-transform-9yzRwON3.js";import{G as Ge}from"./grip-vertical-icon-CJJ11jqx.js";import{S as He}from"./separator-BL37Utr0.js";import{H as L}from"./h-stack-CiGVKtTr.js";import{G as $e}from"./ghost-icon-BPsJ4a5D.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CSiCDg7_.js";import"./grid-item-bFCU3E8M.js";import"./for-v94cQqt1.js";import"./flex-DLFcrCK5.js";import"./heading-CT3LVYzH.js";import"./use-breakpoint-DsgKrnZJ.js";import"./use-breakpoint-value-EeorSnRx.js";import"./use-color-mode-value-CR8x27_R.js";const je=a.createContext(null);function Ae(r,n,o,s){if(!s)return r;const c=r.findIndex(m=>m.value===n);if(c===-1)return r;const R=s>0?1:-1,p=r[c+R];if(!p)return r;const g=r[c],d=p.layout,v=Te(d.min,d.max,.5);return R===1&&g.layout.max+o>v||R===-1&&g.layout.min+o<v?ke(r,c,c+R):r}function Je({children:r,as:n="ul",axis:o="y",onReorder:s,values:c,...R},p){const g=fe(()=>be[n]),d=[],v=a.useRef(!1),m={axis:o,registerItem:(u,x)=>{const b=d.findIndex(h=>u===h.value);b!==-1?d[b].layout=x[o]:d.push({value:u,layout:x[o]}),d.sort(Le)},updateOrder:(u,x,b)=>{if(v.current)return;const h=Ae(d,u,x,b);d!==h&&(v.current=!0,s(h.map(Ue).filter(t=>c.indexOf(t)!==-1)))}};return a.useEffect(()=>{v.current=!1}),e.jsx(g,{...R,ref:p,ignoreStrict:!0,children:e.jsx(je.Provider,{value:m,children:r})})}const qe=a.forwardRef(Je);function Ue(r){return r.value}function Le(r,n){return r.layout.min-n.layout.min}function B(r,n=0){return we(r)?r:H(n)}function Be({children:r,style:n={},value:o,as:s="li",onDrag:c,layout:R=!0,...p},g){const d=fe(()=>be[s]),v=a.useContext(je),m={x:B(n.x),y:B(n.y)},u=Ne([m.x,m.y],([t,f])=>t||f?1:"unset"),{axis:x,registerItem:b,updateOrder:h}=v;return e.jsx(d,{drag:x,...p,dragSnapToOrigin:!0,style:{...n,x:m.x,y:m.y,zIndex:u},layout:R,onDrag:(t,f)=>{const{velocity:I}=f;I[x]&&h(o,m[x].get(),I[x]),c&&c(t,f)},onLayoutMeasure:t=>b(o,t),ref:g,ignoreStrict:!0,children:r})}const Fe=a.forwardRef(Be),Xe=Oe({base:{item:{"&[data-has-trigger]":{cursor:"default",userSelect:"none"},cursor:"grab",flex:"1",rounded:"l2",_selected:{boxShadow:"md",cursor:"grabbing"}},root:{display:"flex",w:"full"},trigger:{alignItems:"center",color:"fg.subtle",cursor:"grab",display:"flex",fontSize:"2xl",justifyContent:"center",_selected:{cursor:"grabbing"},_disabled:{layerStyle:"disabled"}}},sizes:{sm:{item:{p:"3"},root:{gap:"3"}},md:{item:{p:"4"},root:{gap:"4"}},lg:{item:{p:"6"},root:{gap:"6"}},xl:{item:{p:"8"},root:{gap:"8"}}},variants:{elevated:{item:{bg:"bg.panel",boxShadow:"md",_selected:{boxShadow:"lg"}}},outline:{item:{layerStyle:"outline",bg:"bg"}},panel:{item:{layerStyle:"panel"}},plain:{item:{flex:"inherit",p:"0px",rounded:"0px",_selected:{boxShadow:"unset"}},root:{gap:"0px"}},solid:{item:{layerStyle:"solid"}},subtle:{item:{layerStyle:"subtle"}},surface:{item:{layerStyle:"surface"}}},props:{orientation:{horizontal:{root:{flexDirection:"row"}},vertical:{root:{alignItems:"stretch",flexDirection:"column"}}}},defaultProps:{size:"md",variant:"panel",orientation:"vertical"}}),T=({children:r,label:n}={})=>S(r??n),S=r=>Ve(r)||ze(r)?JSON.stringify(r):r,[Ye,Ke]=he({name:"ReorderContext"}),[Qe,We]=he({name:"ReorderItemContext"}),Ze=({ref:r,children:n,item:o,items:s=[],orientation:c="vertical",onChange:R,onCompleteChange:p,...g}={})=>{const d=c==="vertical"?"y":"x",v=Me(n),m=!!v.length,u=a.useMemo(()=>{const l=m?v.map(({props:y})=>y.value??T(y)):s.map(y=>y.value??T(y)),C=l.filter((y,J,q)=>q.indexOf(y)===J&&J!==q.lastIndexOf(y));return C.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${C.join("', '")}' `),Array.from(new Set(l))},[m,v,s]),x=a.useMemo(()=>Object.fromEntries(v.map(l=>[S(l.props.value)??S(T(l.props)),l])),[v]),b=a.useMemo(()=>Object.fromEntries(s.map(l=>[S(l.value)??S(T(l)),l])),[s]),h=a.useRef(u),[t,f]=a.useState(u),I=a.useRef(u),Se=a.useMemo(()=>t.map(l=>{if(m)return x[S(l)];{const C=b[S(l)];return C&&o?a.cloneElement(o,{key:S(C.value),...C}):null}}),[t,m,x,b,o]),A=a.useCallback(l=>{f(l),R==null||R(l)},[R]),D=a.useCallback(()=>{JSON.stringify(I.current)!==JSON.stringify(t)&&(I.current=t,p==null||p(t))},[p,t]);Pe(()=>{JSON.stringify(u)!==JSON.stringify(h.current)&&(I.current=u,h.current=u,f(u))},[u]);const Ce=a.useCallback((l={})=>({axis:d,values:t,...g,...l,ref:G(l.ref,r),onMouseUp:E(l.onMouseUp,g.onMouseUp,D),onReorder:E(l.onReorder,g.onReorder,A),onTouchEnd:E(l.onTouchEnd,g.onTouchEnd,D)}),[g,r,D,A,d,t]);return{children:Se,orientation:c,values:t,getRootProps:Ce}},er=({ref:r,label:n,value:o,...s})=>{const{orientation:c}=Ke(),R=De(),[p,g]=a.useState(!1),[d,v]=a.useState(!1),m=H(0),u=H(0),x=a.useCallback(t=>g(!!t),[]);a.useEffect(()=>{const t=m.on("change",I=>{c==="horizontal"&&v(I!==0)}),f=u.on("change",I=>{c==="vertical"&&v(I!==0)});return()=>{t(),f()}},[c,m,u]);const b=a.useCallback((t={})=>{const f=t.children??s.children??n;return{"data-has-trigger":N(p),"data-selected":N(d),dragControls:R,dragListener:!p,value:o??T({children:f}),...t,...s,ref:G(t.ref,r),style:{x:m,y:u,...t.style,...s.style},children:f}},[r,s,R,p,o,m,u,d,n]),h=a.useCallback((t={})=>({...t,ref:G(x,t.ref),"data-selected":N(d),onPointerDown:E(t.onPointerDown,f=>R.start(f))}),[d,R,x]);return{getItemProps:b,getTriggerProps:h}},{withContext:ye,withProvider:rr}=_e("reorder",Xe),j=rr(({orientation:r,...n})=>{const o=Ee(r),{children:s,getRootProps:c}=Ze({...n,item:e.jsx(i,{}),orientation:o});return e.jsx(Ye,{value:{orientation:o},children:e.jsx(Ie.ul,{as:qe,...c(),children:s})})},"root",{transferProps:["orientation"]})(),i=ye(r=>{const{getItemProps:n,getTriggerProps:o}=er(r);return e.jsx(Qe,{value:{getTriggerProps:o},children:e.jsx(Ie.li,{as:Fe,...n()})})},"item")(),F=ye("div","trigger")(void 0,r=>{const{getTriggerProps:n}=We();return{children:e.jsx(Ge,{}),...n(r)}}),hr={component:j,title:"Components / Reorder"},k=()=>e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]}),e.jsx(He,{}),e.jsxs(j,{children:[e.jsx(i,{children:"ギニュー"}),e.jsx(i,{children:"リクーム"}),e.jsx(i,{children:"バータ"}),e.jsx(i,{children:"ジース"}),e.jsx(i,{children:"グルド"})]})]}),w=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(j,{items:r})},O=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx($,{variant:"stack",rows:["sm","md","lg","xl"],children:(n,o,s)=>e.jsx(j,{size:o,items:r},s)})},M=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx($,{variant:"stack",rows:["panel","outline","solid","subtle","surface","elevated","plain"],children:(n,o,s)=>e.jsx(j,{variant:o,items:r},s)})},P=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx($,{variant:"stack",rows:["vertical","horizontal"],children:(n,o,s)=>e.jsx(j,{items:r,orientation:o},s)})},V=()=>e.jsxs(j,{children:[e.jsx(i,{value:"孫悟空",children:e.jsxs(L,{children:[e.jsx(F,{}),e.jsx(U,{children:"孫悟空"})]})}),e.jsx(i,{value:"ベジータ",children:e.jsxs(L,{children:[e.jsx(F,{children:e.jsx($e,{})}),e.jsx(U,{children:"ベジータ"})]})})]}),z=()=>e.jsxs(j,{onChange:r=>console.log(`changed '${r.join("', '")}'`),children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]}),_=()=>e.jsxs(j,{onCompleteChange:r=>console.log(`completed '${r.join("', '")}'`),children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]});var X,Y,K;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Reorder.Root>
        <Reorder.Item value="ギニュー">ギニュー</Reorder.Item>
        <Reorder.Item value="リクーム">リクーム</Reorder.Item>
        <Reorder.Item value="バータ">バータ</Reorder.Item>
        <Reorder.Item value="ジース">ジース</Reorder.Item>
        <Reorder.Item value="グルド">グルド</Reorder.Item>
      </Reorder.Root>

      <Separator />

      <Reorder.Root>
        <Reorder.Item>ギニュー</Reorder.Item>
        <Reorder.Item>リクーム</Reorder.Item>
        <Reorder.Item>バータ</Reorder.Item>
        <Reorder.Item>ジース</Reorder.Item>
        <Reorder.Item>グルド</Reorder.Item>
      </Reorder.Root>
    </>;
}`,...(K=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Q,W,Z;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.Item[]>(() => [{
    label: "ギニュー",
    value: "ギニュー"
  }, {
    label: "リクーム",
    value: "リクーム"
  }, {
    label: "バータ",
    value: "バータ"
  }, {
    label: "ジース",
    value: "ジース"
  }, {
    label: "グルド",
    value: "グルド"
  }], []);
  return <ReorderRoot items={items} />;
}`,...(Z=(W=w.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var ee,re,te;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.Item[]>(() => [{
    label: "ギニュー",
    value: "ギニュー"
  }, {
    label: "リクーム",
    value: "リクーム"
  }, {
    label: "バータ",
    value: "バータ"
  }, {
    label: "ジース",
    value: "ジース"
  }, {
    label: "グルド",
    value: "グルド"
  }], []);
  return <PropsTable variant="stack" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => <ReorderRoot key={key} size={row} items={items} />}
    </PropsTable>;
}`,...(te=(re=O.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,oe,ae;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.Item[]>(() => [{
    label: "ギニュー",
    value: "ギニュー"
  }, {
    label: "リクーム",
    value: "リクーム"
  }, {
    label: "バータ",
    value: "バータ"
  }, {
    label: "ジース",
    value: "ジース"
  }, {
    label: "グルド",
    value: "グルド"
  }], []);
  return <PropsTable variant="stack" rows={["panel", "outline", "solid", "subtle", "surface", "elevated", "plain"]}>
      {(_, row, key) => <ReorderRoot key={key} variant={row} items={items} />}
    </PropsTable>;
}`,...(ae=(oe=M.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,le,ie;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.Item[]>(() => [{
    label: "ギニュー",
    value: "ギニュー"
  }, {
    label: "リクーム",
    value: "リクーム"
  }, {
    label: "バータ",
    value: "バータ"
  }, {
    label: "ジース",
    value: "ジース"
  }, {
    label: "グルド",
    value: "グルド"
  }], []);
  return <PropsTable variant="stack" rows={["vertical", "horizontal"]}>
      {(_, row, key) => <ReorderRoot key={key} items={items} orientation={row} />}
    </PropsTable>;
}`,...(ie=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,ce,de;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <ReorderRoot>
      <ReorderItem value="孫悟空">
        <HStack>
          <ReorderTrigger />
          <Text>孫悟空</Text>
        </HStack>
      </ReorderItem>

      <ReorderItem value="ベジータ">
        <HStack>
          <ReorderTrigger>
            <GhostIcon />
          </ReorderTrigger>
          <Text>ベジータ</Text>
        </HStack>
      </ReorderItem>
    </ReorderRoot>;
}`,...(de=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,Re,ve;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <ReorderRoot onChange={values => console.log(\`changed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...(ve=(Re=z.parameters)==null?void 0:Re.docs)==null?void 0:ve.source}}};var pe,xe,ge;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <ReorderRoot onCompleteChange={values => console.log(\`completed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...(ge=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};const Ir=["Basic","Items","Size","Variant","Orientation","Trigger","OnChange","OnCompleteChange"];export{k as Basic,w as Items,z as OnChange,_ as OnCompleteChange,P as Orientation,O as Size,V as Trigger,M as Variant,Ir as __namedExportsOrder,hr as default};
