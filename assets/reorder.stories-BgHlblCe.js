import{r as n,bo as te,bp as oe,af as F,b0 as Y,j as e,b1 as ne,d as ae,c as K,G as se,E as le,h as _,m as H,X as ie,i as ue,b as G,g as ce,s as Q,T as U}from"./iframe-zUpmkGgl.js";import{P as N}from"./props-table-AHThgKBg.js";import{u as de}from"./index-Dh0dtizH.js";import{u as me}from"./use-drag-controls-DyK1GXun.js";import{u as pe,a as $}from"./use-transform-wwnNikSZ.js";import{G as Re}from"./grip-vertical-icon-R91txOvJ.js";import{S as ve}from"./separator-BYiai3_-.js";import{H as L}from"./h-stack-Cb7mFrDT.js";import{G as xe}from"./ghost-icon-CzaACvoZ.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-BedIdkoN.js";import"./grid-item-3R5iQPLC.js";import"./for-yYl1Ggvn.js";import"./flex-IclJcorr.js";import"./heading-D-hfGBzv.js";import"./use-breakpoint-rlMFjuDB.js";import"./use-breakpoint-value-CBhdCsru.js";import"./use-color-mode-value-DvQIHb0C.js";import"./createLucideIcon-D8b2f8gg.js";const W=n.createContext(null);function ge(r,o,a,s){if(!s)return r;const m=r.findIndex(d=>d.value===o);if(m===-1)return r;const R=s>0?1:-1,f=r[m+R];if(!f)return r;const x=r[m],c=f.layout,p=te(c.min,c.max,.5);return R===1&&x.layout.max+a>p||R===-1&&x.layout.min+a<p?oe(r,m,m+R):r}function fe({children:r,as:o="ul",axis:a="y",onReorder:s,values:m,...R},f){const x=F(()=>Y[o]),c=[],p=n.useRef(!1),d={axis:a,registerItem:(u,v)=>{const b=c.findIndex(h=>u===h.value);b!==-1?c[b].layout=v[a]:c.push({value:u,layout:v[a]}),c.sort(Ie)},updateOrder:(u,v,b)=>{if(p.current)return;const h=ge(c,u,v,b);c!==h&&(p.current=!0,s(h.map(he).filter(t=>m.indexOf(t)!==-1)))}};return n.useEffect(()=>{p.current=!1}),e.jsx(x,{...R,ref:f,ignoreStrict:!0,children:e.jsx(W.Provider,{value:d,children:r})})}const be=n.forwardRef(fe);function he(r){return r.value}function Ie(r,o){return r.layout.min-o.layout.min}function B(r,o=0){return ne(r)?r:$(o)}function je({children:r,style:o={},value:a,as:s="li",onDrag:m,layout:R=!0,...f},x){const c=F(()=>Y[s]),p=n.useContext(W),d={x:B(o.x),y:B(o.y)},u=pe([d.x,d.y],([t,g])=>t||g?1:"unset"),{axis:v,registerItem:b,updateOrder:h}=p;return e.jsx(c,{drag:v,...f,dragSnapToOrigin:!0,style:{...o,x:d.x,y:d.y,zIndex:u},layout:R,onDrag:(t,g)=>{const{velocity:I}=g;I[v]&&h(a,d[v].get(),I[v]),m&&m(t,g)},onLayoutMeasure:t=>b(a,t),ref:x,ignoreStrict:!0,children:r})}const ye=n.forwardRef(je),Se=ae({base:{item:{"&[data-has-trigger]":{cursor:"default",userSelect:"none"},cursor:"grab",flex:"1",rounded:"l2",_selected:{boxShadow:"md",cursor:"grabbing"}},root:{display:"flex",w:"full"},trigger:{alignItems:"center",color:"fg.subtle",cursor:"grab",display:"flex",fontSize:"2xl",justifyContent:"center",_selected:{cursor:"grabbing"},_disabled:{layerStyle:"disabled"}}},sizes:{sm:{item:{p:"3"},root:{gap:"3"}},md:{item:{p:"4"},root:{gap:"4"}},lg:{item:{p:"6"},root:{gap:"6"}},xl:{item:{p:"8"},root:{gap:"8"}}},variants:{elevated:{item:{bg:"bg.panel",boxShadow:"md",_selected:{boxShadow:"lg"}}},outline:{item:{layerStyle:"outline",bg:"bg"}},panel:{item:{layerStyle:"panel"}},plain:{item:{flex:"inherit",p:"0px",rounded:"0px",_selected:{boxShadow:"unset"}},root:{gap:"0px"}},solid:{item:{layerStyle:"solid"}},subtle:{item:{layerStyle:"subtle"}},surface:{item:{layerStyle:"surface"}}},props:{orientation:{horizontal:{root:{flexDirection:"row"}},vertical:{root:{alignItems:"stretch",flexDirection:"column"}}}},defaultProps:{size:"md",variant:"panel",orientation:"vertical"}}),T=({children:r,label:o}={})=>S(r??o),S=r=>ie(r)||ue(r)?JSON.stringify(r):r,[Ce,Te]=K({name:"ReorderContext"}),[ke,we]=K({name:"ReorderItemContext"}),Pe=({ref:r,children:o,item:a,items:s=[],orientation:m="vertical",onChange:R,onCompleteChange:f,...x}={})=>{const c=m==="vertical"?"y":"x",p=se(o),d=!!p.length,u=n.useMemo(()=>{const l=d?p.map(({props:y})=>y.value??T(y)):s.map(y=>y.value??T(y)),C=l.filter((y,J,q)=>q.indexOf(y)===J&&J!==q.lastIndexOf(y));return C.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${C.join("', '")}' `),Array.from(new Set(l))},[d,p,s]),v=n.useMemo(()=>Object.fromEntries(p.map(l=>[S(l.props.value)??S(T(l.props)),l])),[p]),b=n.useMemo(()=>Object.fromEntries(s.map(l=>[S(l.value)??S(T(l)),l])),[s]),h=n.useRef(u),[t,g]=n.useState(u),I=n.useRef(u),ee=n.useMemo(()=>t.map(l=>{if(d)return v[S(l)];{const C=b[S(l)];return C&&a?n.cloneElement(a,{key:S(C.value),...C}):null}}),[t,d,v,b,a]),A=n.useCallback(l=>{g(l),R?.(l)},[R]),D=n.useCallback(()=>{JSON.stringify(I.current)!==JSON.stringify(t)&&(I.current=t,f?.(t))},[f,t]);le(()=>{JSON.stringify(u)!==JSON.stringify(h.current)&&(I.current=u,h.current=u,g(u))},[u]);const re=n.useCallback((l={})=>({axis:c,values:t,...x,...l,ref:H(l.ref,r),onMouseUp:_(l.onMouseUp,x.onMouseUp,D),onReorder:_(l.onReorder,x.onReorder,A),onTouchEnd:_(l.onTouchEnd,x.onTouchEnd,D)}),[x,r,D,A,c,t]);return{children:ee,orientation:m,values:t,getRootProps:re}},Oe=({ref:r,label:o,value:a,...s})=>{const{orientation:m}=Te(),R=me(),[f,x]=n.useState(!1),[c,p]=n.useState(!1),d=$(0),u=$(0),v=n.useCallback(t=>x(!!t),[]);n.useEffect(()=>{const t=d.on("change",I=>{m==="horizontal"&&p(I!==0)}),g=u.on("change",I=>{m==="vertical"&&p(I!==0)});return()=>{t(),g()}},[m,d,u]);const b=n.useCallback((t={})=>{const g=t.children??s.children??o;return{"data-has-trigger":G(f),"data-selected":G(c),dragControls:R,dragListener:!f,value:a??T({children:g}),...t,...s,ref:H(t.ref,r),style:{x:d,y:u,...t.style,...s.style},children:g}},[r,s,R,f,a,d,u,c,o]),h=n.useCallback((t={})=>({...t,ref:H(v,t.ref),"data-selected":G(c),onPointerDown:_(t.onPointerDown,g=>R.start(g))}),[c,R,v]);return{getItemProps:b,getTriggerProps:h}},{withContext:Z,withProvider:Me}=ce("reorder",Se),j=Me(r=>{const o=de(r.orientation),{children:a,getRootProps:s}=Pe({...r,item:e.jsx(i,{}),orientation:o});return e.jsx(Ce,{value:{orientation:o},children:e.jsx(Q.ul,{as:be,...s(),children:a})})},"root",{transferProps:["orientation"]})(),i=Z(r=>{const{getItemProps:o,getTriggerProps:a}=Oe(r);return e.jsx(ke,{value:{getTriggerProps:a},children:e.jsx(Q.li,{as:ye,...o()})})},"item")(),X=Z("div","trigger")(void 0,r=>{const{getTriggerProps:o}=we();return{children:e.jsx(Re,{}),...o(r)}}),Qe={component:j,title:"Components / Reorder"},k=()=>e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]}),e.jsx(ve,{}),e.jsxs(j,{children:[e.jsx(i,{children:"ギニュー"}),e.jsx(i,{children:"リクーム"}),e.jsx(i,{children:"バータ"}),e.jsx(i,{children:"ジース"}),e.jsx(i,{children:"グルド"})]})]}),w=()=>{const r=n.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(j,{items:r})},P=()=>{const r=n.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(N,{variant:"stack",rows:["sm","md","lg","xl"],children:(o,a,s)=>e.jsx(j,{size:a,items:r},s)})},O=()=>{const r=n.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(N,{variant:"stack",rows:["panel","outline","solid","subtle","surface","elevated","plain"],children:(o,a,s)=>e.jsx(j,{variant:a,items:r},s)})},M=()=>{const r=n.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(N,{variant:"stack",rows:["vertical","horizontal"],children:(o,a,s)=>e.jsx(j,{items:r,orientation:a},s)})},V=()=>e.jsxs(j,{children:[e.jsx(i,{value:"孫悟空",children:e.jsxs(L,{children:[e.jsx(X,{}),e.jsx(U,{children:"孫悟空"})]})}),e.jsx(i,{value:"ベジータ",children:e.jsxs(L,{children:[e.jsx(X,{children:e.jsx(xe,{})}),e.jsx(U,{children:"ベジータ"})]})})]}),z=()=>e.jsxs(j,{onChange:r=>console.log(`changed '${r.join("', '")}'`),children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]}),E=()=>e.jsxs(j,{onCompleteChange:r=>console.log(`completed '${r.join("', '")}'`),children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]});k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onCompleteChange={values => console.log(\`completed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...E.parameters?.docs?.source}}};const We=["Basic","Items","Size","Variant","Orientation","Trigger","OnChange","OnCompleteChange"];export{k as Basic,w as Items,z as OnChange,E as OnCompleteChange,M as Orientation,P as Size,V as Trigger,O as Variant,We as __namedExportsOrder,Qe as default};
