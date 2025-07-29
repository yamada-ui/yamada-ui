import{r as n,bk as te,bl as oe,ac as F,aY as X,j as e,aZ as ne,d as ae,c as Z,z as se,O as le,h as E,m as H,aw as ie,i as ue,a as G,f as ce,s as K,T as U}from"./iframe-B58gGoPv.js";import{P as N}from"./props-table-DoDUM-tj.js";import{u as de}from"./index-BAwTtQKG.js";import{u as me}from"./use-drag-controls-naK53v8Y.js";import{u as pe,a as $}from"./use-transform-Byi63rzQ.js";import{G as Re}from"./grip-vertical-icon-X0FxeBbg.js";import{S as ve}from"./separator-nKILv7NJ.js";import{H as L}from"./h-stack-Q8dKBrIZ.js";import{G as xe}from"./ghost-icon-fWtwPA36.js";import"./grid-BkobzWyq.js";import"./grid-item-Cy-ugCgy.js";import"./for-Bky_3Tl1.js";import"./flex-Col0vMQb.js";import"./heading-Cefe2Dmh.js";import"./use-breakpoint-DJTFZdnw.js";import"./use-breakpoint-value-Dy8CsQBU.js";import"./use-color-mode-value-B677w30q.js";import"./createLucideIcon-BaHwRC9x.js";const Q=n.createContext(null);function ge(r,o,a,s){if(!s)return r;const m=r.findIndex(d=>d.value===o);if(m===-1)return r;const R=s>0?1:-1,f=r[m+R];if(!f)return r;const x=r[m],c=f.layout,p=te(c.min,c.max,.5);return R===1&&x.layout.max+a>p||R===-1&&x.layout.min+a<p?oe(r,m,m+R):r}function fe({children:r,as:o="ul",axis:a="y",onReorder:s,values:m,...R},f){const x=F(()=>X[o]),c=[],p=n.useRef(!1),d={axis:a,registerItem:(u,v)=>{const h=c.findIndex(b=>u===b.value);h!==-1?c[h].layout=v[a]:c.push({value:u,layout:v[a]}),c.sort(Ie)},updateOrder:(u,v,h)=>{if(p.current)return;const b=ge(c,u,v,h);c!==b&&(p.current=!0,s(b.map(be).filter(t=>m.indexOf(t)!==-1)))}};return n.useEffect(()=>{p.current=!1}),e.jsx(x,{...R,ref:f,ignoreStrict:!0,children:e.jsx(Q.Provider,{value:d,children:r})})}const he=n.forwardRef(fe);function be(r){return r.value}function Ie(r,o){return r.layout.min-o.layout.min}function B(r,o=0){return ne(r)?r:$(o)}function je({children:r,style:o={},value:a,as:s="li",onDrag:m,layout:R=!0,...f},x){const c=F(()=>X[s]),p=n.useContext(Q),d={x:B(o.x),y:B(o.y)},u=pe([d.x,d.y],([t,g])=>t||g?1:"unset"),{axis:v,registerItem:h,updateOrder:b}=p;return e.jsx(c,{drag:v,...f,dragSnapToOrigin:!0,style:{...o,x:d.x,y:d.y,zIndex:u},layout:R,onDrag:(t,g)=>{const{velocity:I}=g;I[v]&&b(a,d[v].get(),I[v]),m&&m(t,g)},onLayoutMeasure:t=>h(a,t),ref:x,ignoreStrict:!0,children:r})}const ye=n.forwardRef(je),Se=ae({base:{item:{"&[data-has-trigger]":{cursor:"default",userSelect:"none"},cursor:"grab",flex:"1",rounded:"l2",_selected:{boxShadow:"md",cursor:"grabbing"}},root:{display:"flex",w:"full"},trigger:{alignItems:"center",color:"fg.subtle",cursor:"grab",display:"flex",fontSize:"2xl",justifyContent:"center",_selected:{cursor:"grabbing"},_disabled:{layerStyle:"disabled"}}},sizes:{sm:{item:{p:"3"},root:{gap:"3"}},md:{item:{p:"4"},root:{gap:"4"}},lg:{item:{p:"6"},root:{gap:"6"}},xl:{item:{p:"8"},root:{gap:"8"}}},variants:{elevated:{item:{bg:"bg.panel",boxShadow:"md",_selected:{boxShadow:"lg"}}},outline:{item:{layerStyle:"outline",bg:"bg"}},panel:{item:{layerStyle:"panel"}},plain:{item:{flex:"inherit",p:"0px",rounded:"0px",_selected:{boxShadow:"unset"}},root:{gap:"0px"}},solid:{item:{layerStyle:"solid"}},subtle:{item:{layerStyle:"subtle"}},surface:{item:{layerStyle:"surface"}}},props:{orientation:{horizontal:{root:{flexDirection:"row"}},vertical:{root:{alignItems:"stretch",flexDirection:"column"}}}},defaultProps:{size:"md",variant:"panel",orientation:"vertical"}}),k=({children:r,label:o}={})=>S(r??o),S=r=>ie(r)||ue(r)?JSON.stringify(r):r,[Ce,ke]=Z({name:"ReorderContext"}),[Te,we]=Z({name:"ReorderItemContext"}),Oe=({ref:r,children:o,item:a,items:s=[],orientation:m="vertical",onChange:R,onCompleteChange:f,...x}={})=>{const c=m==="vertical"?"y":"x",p=se(o),d=!!p.length,u=n.useMemo(()=>{const l=d?p.map(({props:y})=>y.value??k(y)):s.map(y=>y.value??k(y)),C=l.filter((y,J,q)=>q.indexOf(y)===J&&J!==q.lastIndexOf(y));return C.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${C.join("', '")}' `),Array.from(new Set(l))},[d,p,s]),v=n.useMemo(()=>Object.fromEntries(p.map(l=>[S(l.props.value)??S(k(l.props)),l])),[p]),h=n.useMemo(()=>Object.fromEntries(s.map(l=>[S(l.value)??S(k(l)),l])),[s]),b=n.useRef(u),[t,g]=n.useState(u),I=n.useRef(u),ee=n.useMemo(()=>t.map(l=>{if(d)return v[S(l)];{const C=h[S(l)];return C&&a?n.cloneElement(a,{key:S(C.value),...C}):null}}),[t,d,v,h,a]),A=n.useCallback(l=>{g(l),R?.(l)},[R]),D=n.useCallback(()=>{JSON.stringify(I.current)!==JSON.stringify(t)&&(I.current=t,f?.(t))},[f,t]);le(()=>{JSON.stringify(u)!==JSON.stringify(b.current)&&(I.current=u,b.current=u,g(u))},[u]);const re=n.useCallback((l={})=>({axis:c,values:t,...x,...l,ref:H(l.ref,r),onMouseUp:E(l.onMouseUp,x.onMouseUp,D),onReorder:E(l.onReorder,x.onReorder,A),onTouchEnd:E(l.onTouchEnd,x.onTouchEnd,D)}),[x,r,D,A,c,t]);return{children:ee,orientation:m,values:t,getRootProps:re}},Pe=({ref:r,label:o,value:a,...s})=>{const{orientation:m}=ke(),R=me(),[f,x]=n.useState(!1),[c,p]=n.useState(!1),d=$(0),u=$(0),v=n.useCallback(t=>x(!!t),[]);n.useEffect(()=>{const t=d.on("change",I=>{m==="horizontal"&&p(I!==0)}),g=u.on("change",I=>{m==="vertical"&&p(I!==0)});return()=>{t(),g()}},[m,d,u]);const h=n.useCallback((t={})=>{const g=t.children??s.children??o;return{"data-has-trigger":G(f),"data-selected":G(c),dragControls:R,dragListener:!f,value:a??k({children:g}),...t,...s,ref:H(t.ref,r),style:{x:d,y:u,...t.style,...s.style},children:g}},[r,s,R,f,a,d,u,c,o]),b=n.useCallback((t={})=>({...t,ref:H(v,t.ref),"data-selected":G(c),onPointerDown:E(t.onPointerDown,g=>R.start(g))}),[c,R,v]);return{getItemProps:h,getTriggerProps:b}},{withContext:W,withProvider:Me}=ce("reorder",Se),j=Me(r=>{const o=de(r.orientation),{children:a,getRootProps:s}=Oe({...r,item:e.jsx(i,{}),orientation:o});return e.jsx(Ce,{value:{orientation:o},children:e.jsx(K.ul,{as:he,...s(),children:a})})},"root",{transferProps:["orientation"]})(),i=W(r=>{const{getItemProps:o,getTriggerProps:a}=Pe(r);return e.jsx(Te,{value:{getTriggerProps:a},children:e.jsx(K.li,{as:ye,...o()})})},"item")(),Y=W("div","trigger")(void 0,r=>{const{getTriggerProps:o}=we();return{children:e.jsx(Re,{}),...o(r)}}),Ze={component:j,title:"Components / Reorder"},T=()=>e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]}),e.jsx(ve,{}),e.jsxs(j,{children:[e.jsx(i,{children:"ギニュー"}),e.jsx(i,{children:"リクーム"}),e.jsx(i,{children:"バータ"}),e.jsx(i,{children:"ジース"}),e.jsx(i,{children:"グルド"})]})]}),w=()=>{const r=n.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(j,{items:r})},O=()=>{const r=n.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(N,{variant:"stack",rows:["sm","md","lg","xl"],children:(o,a,s)=>e.jsx(j,{size:a,items:r},s)})},P=()=>{const r=n.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(N,{variant:"stack",rows:["panel","outline","solid","subtle","surface","elevated","plain"],children:(o,a,s)=>e.jsx(j,{variant:a,items:r},s)})},M=()=>{const r=n.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(N,{variant:"stack",rows:["vertical","horizontal"],children:(o,a,s)=>e.jsx(j,{items:r,orientation:a},s)})},V=()=>e.jsxs(j,{children:[e.jsx(i,{value:"孫悟空",children:e.jsxs(L,{children:[e.jsx(Y,{}),e.jsx(U,{children:"孫悟空"})]})}),e.jsx(i,{value:"ベジータ",children:e.jsxs(L,{children:[e.jsx(Y,{children:e.jsx(xe,{})}),e.jsx(U,{children:"ベジータ"})]})})]}),z=()=>e.jsxs(j,{onChange:r=>console.log(`changed '${r.join("', '")}'`),children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]}),_=()=>e.jsxs(j,{onCompleteChange:r=>console.log(`completed '${r.join("', '")}'`),children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]});T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};const Ke=["Basic","Items","Size","Variant","Orientation","Trigger","OnChange","OnCompleteChange"];export{T as Basic,w as Items,z as OnChange,_ as OnCompleteChange,M as Orientation,O as Size,V as Trigger,P as Variant,Ke as __namedExportsOrder,Ze as default};
