import{r as a,bL as te,bM as ne,am as X,bh as Y,j as e,bk as oe,d as ae,c as K,R as se,N as le,h as E,m as H,az as ie,i as ue,b as G,g as ce,s as Q,T as L}from"./iframe-D0k82VKj.js";import{P as $}from"./props-table-CTaVRFRo.js";import{u as de}from"./index-BbBQJmyS.js";import{u as me}from"./use-drag-controls-hpcpvGn_.js";import{u as pe,a as N}from"./use-transform-Bek72UyH.js";import{G as Re}from"./grip-vertical-icon-DzuZOOFx.js";import{S as ve}from"./separator-gm5PScRo.js";import{H as U}from"./h-stack-2JM7Wrl-.js";import{G as xe}from"./ghost-icon-BLHDND4U.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-W2jtEO_S.js";import"./grid-item-BEXtmAs-.js";import"./for-VxQ1P6BR.js";import"./flex-DfSuxPUO.js";import"./heading-Z6IrjMgv.js";import"./use-breakpoint-CrBfJ-6O.js";import"./use-breakpoint-value-pZKkBl49.js";import"./use-color-mode-value-bOkTOA4p.js";const W=a.createContext(null);function ge(r,n,o,s){if(!s)return r;const c=r.findIndex(m=>m.value===n);if(c===-1)return r;const R=s>0?1:-1,f=r[c+R];if(!f)return r;const x=r[c],d=f.layout,p=te(d.min,d.max,.5);return R===1&&x.layout.max+o>p||R===-1&&x.layout.min+o<p?ne(r,c,c+R):r}function fe({children:r,as:n="ul",axis:o="y",onReorder:s,values:c,...R},f){const x=X(()=>Y[n]),d=[],p=a.useRef(!1),m={axis:o,registerItem:(u,v)=>{const b=d.findIndex(h=>u===h.value);b!==-1?d[b].layout=v[o]:d.push({value:u,layout:v[o]}),d.sort(Ie)},updateOrder:(u,v,b)=>{if(p.current)return;const h=ge(d,u,v,b);d!==h&&(p.current=!0,s(h.map(he).filter(t=>c.indexOf(t)!==-1)))}};return a.useEffect(()=>{p.current=!1}),e.jsx(x,{...R,ref:f,ignoreStrict:!0,children:e.jsx(W.Provider,{value:m,children:r})})}const be=a.forwardRef(fe);function he(r){return r.value}function Ie(r,n){return r.layout.min-n.layout.min}function B(r,n=0){return oe(r)?r:N(n)}function je({children:r,style:n={},value:o,as:s="li",onDrag:c,layout:R=!0,...f},x){const d=X(()=>Y[s]),p=a.useContext(W),m={x:B(n.x),y:B(n.y)},u=pe([m.x,m.y],([t,g])=>t||g?1:"unset"),{axis:v,registerItem:b,updateOrder:h}=p;return e.jsx(d,{drag:v,...f,dragSnapToOrigin:!0,style:{...n,x:m.x,y:m.y,zIndex:u},layout:R,onDrag:(t,g)=>{const{velocity:I}=g;I[v]&&h(o,m[v].get(),I[v]),c&&c(t,g)},onLayoutMeasure:t=>b(o,t),ref:x,ignoreStrict:!0,children:r})}const ye=a.forwardRef(je),Se=ae({base:{item:{"&[data-has-trigger]":{cursor:"default",userSelect:"none"},cursor:"grab",flex:"1",rounded:"l2",_selected:{boxShadow:"md",cursor:"grabbing"}},root:{display:"flex",w:"full"},trigger:{alignItems:"center",color:"fg.subtle",cursor:"grab",display:"flex",fontSize:"2xl",justifyContent:"center",_selected:{cursor:"grabbing"},_disabled:{layerStyle:"disabled"}}},sizes:{sm:{item:{p:"3"},root:{gap:"3"}},md:{item:{p:"4"},root:{gap:"4"}},lg:{item:{p:"6"},root:{gap:"6"}},xl:{item:{p:"8"},root:{gap:"8"}}},variants:{elevated:{item:{bg:"bg.panel",boxShadow:"md",_selected:{boxShadow:"lg"}}},outline:{item:{layerStyle:"outline",bg:"bg"}},panel:{item:{layerStyle:"panel"}},plain:{item:{flex:"inherit",p:"0px",rounded:"0px",_selected:{boxShadow:"unset"}},root:{gap:"0px"}},solid:{item:{layerStyle:"solid"}},subtle:{item:{layerStyle:"subtle"}},surface:{item:{layerStyle:"surface"}}},props:{orientation:{horizontal:{root:{flexDirection:"row"}},vertical:{root:{alignItems:"stretch",flexDirection:"column"}}}},defaultProps:{size:"md",variant:"panel",orientation:"vertical"}}),k=({children:r,label:n}={})=>S(r??n),S=r=>ie(r)||ue(r)?JSON.stringify(r):r,[Ce,ke]=K({name:"ReorderContext"}),[Te,we]=K({name:"ReorderItemContext"}),Me=({ref:r,children:n,item:o,items:s=[],orientation:c="vertical",onChange:R,onCompleteChange:f,...x}={})=>{const d=c==="vertical"?"y":"x",p=se(n),m=!!p.length,u=a.useMemo(()=>{const l=m?p.map(({props:y})=>y.value??k(y)):s.map(y=>y.value??k(y)),C=l.filter((y,J,q)=>q.indexOf(y)===J&&J!==q.lastIndexOf(y));return C.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${C.join("', '")}' `),Array.from(new Set(l))},[m,p,s]),v=a.useMemo(()=>Object.fromEntries(p.map(l=>[S(l.props.value)??S(k(l.props)),l])),[p]),b=a.useMemo(()=>Object.fromEntries(s.map(l=>[S(l.value)??S(k(l)),l])),[s]),h=a.useRef(u),[t,g]=a.useState(u),I=a.useRef(u),ee=a.useMemo(()=>t.map(l=>{if(m)return v[S(l)];{const C=b[S(l)];return C&&o?a.cloneElement(o,{key:S(C.value),...C}):null}}),[t,m,v,b,o]),A=a.useCallback(l=>{g(l),R?.(l)},[R]),D=a.useCallback(()=>{JSON.stringify(I.current)!==JSON.stringify(t)&&(I.current=t,f?.(t))},[f,t]);le(()=>{JSON.stringify(u)!==JSON.stringify(h.current)&&(I.current=u,h.current=u,g(u))},[u]);const re=a.useCallback((l={})=>({axis:d,values:t,...x,...l,ref:H(l.ref,r),onMouseUp:E(l.onMouseUp,x.onMouseUp,D),onReorder:E(l.onReorder,x.onReorder,A),onTouchEnd:E(l.onTouchEnd,x.onTouchEnd,D)}),[x,r,D,A,d,t]);return{children:ee,orientation:c,values:t,getRootProps:re}},Oe=({ref:r,label:n,value:o,...s})=>{const{orientation:c}=ke(),R=me(),[f,x]=a.useState(!1),[d,p]=a.useState(!1),m=N(0),u=N(0),v=a.useCallback(t=>x(!!t),[]);a.useEffect(()=>{const t=m.on("change",I=>{c==="horizontal"&&p(I!==0)}),g=u.on("change",I=>{c==="vertical"&&p(I!==0)});return()=>{t(),g()}},[c,m,u]);const b=a.useCallback((t={})=>{const g=t.children??s.children??n;return{"data-has-trigger":G(f),"data-selected":G(d),dragControls:R,dragListener:!f,value:o??k({children:g}),...t,...s,ref:H(t.ref,r),style:{x:m,y:u,...t.style,...s.style},children:g}},[r,s,R,f,o,m,u,d,n]),h=a.useCallback((t={})=>({...t,ref:H(v,t.ref),"data-selected":G(d),onPointerDown:E(t.onPointerDown,g=>R.start(g))}),[d,R,v]);return{getItemProps:b,getTriggerProps:h}},{withContext:Z,withProvider:Pe}=ce("reorder",Se),j=Pe(({orientation:r,...n})=>{const o=de(r),{children:s,getRootProps:c}=Me({...n,item:e.jsx(i,{}),orientation:o});return e.jsx(Ce,{value:{orientation:o},children:e.jsx(Q.ul,{as:be,...c(),children:s})})},"root",{transferProps:["orientation"]})(),i=Z(r=>{const{getItemProps:n,getTriggerProps:o}=Oe(r);return e.jsx(Te,{value:{getTriggerProps:o},children:e.jsx(Q.li,{as:ye,...n()})})},"item")(),F=Z("div","trigger")(void 0,r=>{const{getTriggerProps:n}=we();return{children:e.jsx(Re,{}),...n(r)}}),Ke={component:j,title:"Components / Reorder"},T=()=>e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]}),e.jsx(ve,{}),e.jsxs(j,{children:[e.jsx(i,{children:"ギニュー"}),e.jsx(i,{children:"リクーム"}),e.jsx(i,{children:"バータ"}),e.jsx(i,{children:"ジース"}),e.jsx(i,{children:"グルド"})]})]}),w=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(j,{items:r})},M=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx($,{variant:"stack",rows:["sm","md","lg","xl"],children:(n,o,s)=>e.jsx(j,{size:o,items:r},s)})},O=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx($,{variant:"stack",rows:["panel","outline","solid","subtle","surface","elevated","plain"],children:(n,o,s)=>e.jsx(j,{variant:o,items:r},s)})},P=()=>{const r=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx($,{variant:"stack",rows:["vertical","horizontal"],children:(n,o,s)=>e.jsx(j,{items:r,orientation:o},s)})},V=()=>e.jsxs(j,{children:[e.jsx(i,{value:"孫悟空",children:e.jsxs(U,{children:[e.jsx(F,{}),e.jsx(L,{children:"孫悟空"})]})}),e.jsx(i,{value:"ベジータ",children:e.jsxs(U,{children:[e.jsx(F,{children:e.jsx(xe,{})}),e.jsx(L,{children:"ベジータ"})]})})]}),z=()=>e.jsxs(j,{onChange:r=>console.log(`changed '${r.join("', '")}'`),children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]}),_=()=>e.jsxs(j,{onCompleteChange:r=>console.log(`completed '${r.join("', '")}'`),children:[e.jsx(i,{value:"ギニュー",children:"ギニュー"}),e.jsx(i,{value:"リクーム",children:"リクーム"}),e.jsx(i,{value:"バータ",children:"バータ"}),e.jsx(i,{value:"ジース",children:"ジース"}),e.jsx(i,{value:"グルド",children:"グルド"})]});T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};const Qe=["Basic","Items","Size","Variant","Orientation","Trigger","OnChange","OnCompleteChange"];export{T as Basic,w as Items,z as OnChange,_ as OnCompleteChange,P as Orientation,M as Size,V as Trigger,O as Variant,Qe as __namedExportsOrder,Ke as default};
