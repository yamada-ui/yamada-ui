import{r as a,bI as te,bJ as oe,ar as X,be as Y,j as e,bh as ne,d as ae,c as K,U as se,P as le,h as E,m as H,af as ie,i as ue,b as G,g as ce,s as Q,T as q}from"./iframe-DJ0yX4dv.js";import{P as J}from"./props-table-BghCA-CF.js";import{u as de}from"./index-Bsr4q0ET.js";import{u as me}from"./use-drag-controls-CM0w8M8z.js";import{u as pe,a as $}from"./use-transform-D5hyDcrq.js";import{G as Re}from"./grip-vertical-icon-DuKeIlSG.js";import{S as ve}from"./separator-CxXPeUiQ.js";import{H as L}from"./h-stack-iypRG99D.js";import{G as xe}from"./ghost-icon-CiTR3yEk.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-DQ8CIDMJ.js";import"./grid-item-cFKDS_xu.js";import"./for-DYqikCUI.js";import"./flex-DF7MWlRZ.js";import"./heading-BZy_ed_2.js";import"./use-breakpoint-DvjERWIj.js";import"./use-breakpoint-value-XHGZ9LH9.js";import"./use-color-mode-value-HUZW6Q_L.js";const W=a.createContext(null);function ge(r,o,n,s){if(!s)return r;const c=r.findIndex(m=>m.value===o);if(c===-1)return r;const R=s>0?1:-1,f=r[c+R];if(!f)return r;const x=r[c],d=f.layout,p=te(d.min,d.max,.5);return R===1&&x.layout.max+n>p||R===-1&&x.layout.min+n<p?oe(r,c,c+R):r}function fe({children:r,as:o="ul",axis:n="y",onReorder:s,values:c,...R},f){const x=X(()=>Y[o]),d=[],p=a.useRef(!1),m={axis:n,registerItem:(u,v)=>{const b=d.findIndex(h=>u===h.value);b!==-1?d[b].layout=v[n]:d.push({value:u,layout:v[n]}),d.sort(Ie)},updateOrder:(u,v,b)=>{if(p.current)return;const h=ge(d,u,v,b);d!==h&&(p.current=!0,s(h.map(he).filter(t=>c.indexOf(t)!==-1)))}};return a.useEffect(()=>{p.current=!1}),e.jsx(x,{...R,ref:f,ignoreStrict:!0,children:e.jsx(W.Provider,{value:m,children:r})})}const be=a.forwardRef(fe);function he(r){return r.value}function Ie(r,o){return r.layout.min-o.layout.min}function B(r,o=0){return ne(r)?r:$(o)}function je({children:r,style:o={},value:n,as:s="li",onDrag:c,layout:R=!0,...f},x){const d=X(()=>Y[s]),p=a.useContext(W),m={x:B(o.x),y:B(o.y)},u=pe([m.x,m.y],([t,g])=>t||g?1:"unset"),{axis:v,registerItem:b,updateOrder:h}=p;return e.jsx(d,{drag:v,...f,dragSnapToOrigin:!0,style:{...o,x:m.x,y:m.y,zIndex:u},layout:R,onDrag:(t,g)=>{const{velocity:I}=g;I[v]&&h(n,m[v].get(),I[v]),c&&c(t,g)},onLayoutMeasure:t=>b(n,t),ref:x,ignoreStrict:!0,children:r})}const ye=a.forwardRef(je),Se=ae({base:{item:{"&[data-has-trigger]":{cursor:"default",userSelect:"none"},cursor:"grab",flex:"1",rounded:"l2",_selected:{boxShadow:"md",cursor:"grabbing"}},root:{display:"flex",w:"full"},trigger:{alignItems:"center",color:"fg.subtle",cursor:"grab",display:"flex",fontSize:"2xl",justifyContent:"center",_selected:{cursor:"grabbing"},_disabled:{layerStyle:"disabled"}}},sizes:{sm:{item:{p:"3"},root:{gap:"3"}},md:{item:{p:"4"},root:{gap:"4"}},lg:{item:{p:"6"},root:{gap:"6"}},xl:{item:{p:"8"},root:{gap:"8"}}},variants:{elevated:{item:{bg:"bg.panel",boxShadow:"md",_selected:{boxShadow:"lg"}}},outline:{item:{layerStyle:"outline",bg:"bg"}},panel:{item:{layerStyle:"panel"}},plain:{item:{flex:"inherit",p:"0px",rounded:"0px",_selected:{boxShadow:"unset"}},root:{gap:"0px"}},solid:{item:{layerStyle:"solid"}},subtle:{item:{layerStyle:"subtle"}},surface:{item:{layerStyle:"surface"}}},props:{orientation:{horizontal:{root:{flexDirection:"row"}},vertical:{root:{alignItems:"stretch",flexDirection:"column"}}}},defaultProps:{size:"md",variant:"panel",orientation:"vertical"}}),T=({children:r,label:o}={})=>S(r??o),S=r=>ie(r)||ue(r)?JSON.stringify(r):r,[Ce,Te]=K({name:"ReorderContext"}),[ke,we]=K({name:"ReorderItemContext"}),Pe=({ref:r,children:o,item:n,items:s=[],orientation:c="vertical",onChange:R,onCompleteChange:f,...x}={})=>{const d=c==="vertical"?"y":"x",p=se(o),m=!!p.length,u=a.useMemo(()=>{const l=m?p.map(({props:y})=>y.value??T(y)):s.map(y=>y.value??T(y)),C=l.filter((y,A,U)=>U.indexOf(y)===A&&A!==U.lastIndexOf(y));return C.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${C.join("', '")}' `),Array.from(new Set(l))},[m,p,s]),v=a.useMemo(()=>Object.fromEntries(p.map(l=>[S(l.props.value)??S(T(l.props)),l])),[p]),b=a.useMemo(()=>Object.fromEntries(s.map(l=>[S(l.value)??S(T(l)),l])),[s]),h=a.useRef(u),[t,g]=a.useState(u),I=a.useRef(u),ee=a.useMemo(()=>t.map(l=>{if(m)return v[S(l)];{const C=b[S(l)];return C&&n?a.cloneElement(n,{key:S(C.value),...C}):null}}),[t,m,v,b,n]),N=a.useCallback(l=>{g(l),R?.(l)},[R]),D=a.useCallback(()=>{JSON.stringify(I.current)!==JSON.stringify(t)&&(I.current=t,f?.(t))},[f,t]);le(()=>{JSON.stringify(u)!==JSON.stringify(h.current)&&(I.current=u,h.current=u,g(u))},[u]);const re=a.useCallback((l={})=>({axis:d,values:t,...x,...l,ref:H(l.ref,r),onMouseUp:E(l.onMouseUp,x.onMouseUp,D),onReorder:E(l.onReorder,x.onReorder,N),onTouchEnd:E(l.onTouchEnd,x.onTouchEnd,D)}),[x,r,D,N,d,t]);return{children:ee,orientation:c,values:t,getRootProps:re}},Oe=({ref:r,label:o,value:n,...s})=>{const{orientation:c}=Te(),R=me(),[f,x]=a.useState(!1),[d,p]=a.useState(!1),m=$(0),u=$(0),v=a.useCallback(t=>x(!!t),[]);a.useEffect(()=>{const t=m.on("change",I=>{c==="horizontal"&&p(I!==0)}),g=u.on("change",I=>{c==="vertical"&&p(I!==0)});return()=>{t(),g()}},[c,m,u]);const b=a.useCallback((t={})=>{const g=t.children??s.children??o;return{"data-has-trigger":G(f),"data-selected":G(d),dragControls:R,dragListener:!f,value:n??T({children:g}),...t,...s,ref:H(t.ref,r),style:{x:m,y:u,...t.style,...s.style},children:g}},[r,s,R,f,n,m,u,d,o]),h=a.useCallback((t={})=>({...t,ref:H(v,t.ref),"data-selected":G(d),onPointerDown:E(t.onPointerDown,g=>R.start(g))}),[d,R,v]);return{getItemProps:b,getTriggerProps:h}},{withContext:Z,withProvider:Me}=ce("reorder",Se),j=Me(({orientation:r,...o})=>{const n=de(r),{children:s,getRootProps:c}=Pe({...o,item:e.jsx(i,{}),orientation:n});return e.jsx(Ce,{value:{orientation:n},children:e.jsx(Q.ul,{as:be,...c(),children:s})})},"root",{transferProps:["orientation"]})(),i=Z(r=>{const{getItemProps:o,getTriggerProps:n}=Oe(r);return e.jsx(ke,{value:{getTriggerProps:n},children:e.jsx(Q.li,{as:ye,...o()})})},"item")(),F=Z("div","trigger")(void 0,r=>{const{getTriggerProps:o}=we();return{children:e.jsx(Re,{}),...o(r)}}),Ke={component:j,title:"Components / Reorder"},k=()=>e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]}),e.jsx(ve,{}),e.jsxs(j,{children:[e.jsx(i,{children:"ギニュー"}),e.jsx(i,{children:"リクーム"}),e.jsx(i,{children:"バータ"}),e.jsx(i,{children:"ジース"}),e.jsx(i,{children:"グルド"})]})]}),w=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(j,{items:r})},P=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(J,{variant:"stack",rows:["sm","md","lg","xl"],children:(o,n,s)=>e.jsx(j,{size:n,items:r},s)})},O=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(J,{variant:"stack",rows:["panel","outline","solid","subtle","surface","elevated","plain"],children:(o,n,s)=>e.jsx(j,{variant:n,items:r},s)})},M=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(J,{variant:"stack",rows:["vertical","horizontal"],children:(o,n,s)=>e.jsx(j,{items:r,orientation:n},s)})},V=()=>e.jsxs(j,{children:[e.jsx(i,{value:"孫悟空",children:e.jsxs(L,{children:[e.jsx(F,{}),e.jsx(q,{children:"孫悟空"})]})}),e.jsx(i,{value:"ベジータ",children:e.jsxs(L,{children:[e.jsx(F,{children:e.jsx(xe,{})}),e.jsx(q,{children:"ベジータ"})]})})]}),z=()=>e.jsxs(j,{onChange:r=>console.log(`changed '${r.join("', '")}'`),children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]}),_=()=>e.jsxs(j,{onCompleteChange:r=>console.log(`completed '${r.join("', '")}'`),children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]});k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.RootProps["items"]>(() => [{
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
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.RootProps["items"]>(() => [{
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
}`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.RootProps["items"]>(() => [{
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
}`,...O.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Reorder.RootProps["items"]>(() => [{
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
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onChange={values => console.log(\`changed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...z.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onCompleteChange={values => console.log(\`completed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,..._.parameters?.docs?.source}}};const Qe=["Basic","Items","Size","Variant","Orientation","Trigger","OnChange","OnCompleteChange"];export{k as Basic,w as Items,z as OnChange,_ as OnCompleteChange,M as Orientation,P as Size,V as Trigger,O as Variant,Qe as __namedExportsOrder,Ke as default};
