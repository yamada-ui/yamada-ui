import{r as c,cr as ce,cs as ie,ak as te,aj as ne,j as r,bZ as ue,k as de,bt as me,O as fe,a1 as W,v as B,q as oe,Z as q,D as pe,i as ge,F as le,G as ve,T as Z}from"./iframe-C5w0vvr4.js";import{u as xe}from"./index-WFFqbtiE.js";import{u as Re}from"./use-drag-controls-C1rLzuko.js";import{u as he,a as J}from"./use-transform-BtWw2L2B.js";import{G as be}from"./grip-vertical-icon-B3QDFvQe.js";import{S as Ie}from"./separator-CHjrTS4k.js";import{H as K}from"./h-stack-cn75O_VR.js";import{P as F}from"./props-table-BNvAUKoQ.js";import{G as ye}from"./ghost-icon-D3Lx1BLs.js";import"./preload-helper-PPVm8Dsz.js";import"./use-breakpoint-C0xXCYwz.js";import"./use-breakpoint-value-BnVVonrJ.js";import"./use-color-mode-value-DgP09WEw.js";import"./grid-Drm6c-Tg.js";import"./grid-item-M74-NeoE.js";import"./for-ENMl83Kw.js";import"./flex-CMJCml74.js";import"./heading-BI5b63Dr.js";const se=c.createContext(null);function Se(e,o,t,l){if(!l)return e;const n=e.findIndex(x=>x.value===o);if(n===-1)return e;const g=l>0?1:-1,i=e[n+g];if(!i)return e;const f=e[n],s=i.layout,u=ce(s.min,s.max,.5);return g===1&&f.layout.max+t>u||g===-1&&f.layout.min+t<u?ie(e,n,n+g):e}function je({children:e,as:o="ul",axis:t="y",onReorder:l,values:n,...g},i){const f=te(()=>ne[o]),s=[],u=c.useRef(!1),x=c.useRef(null),d={axis:t,groupRef:x,registerItem:(h,a)=>{const R=s.findIndex(v=>h===v.value);R!==-1?s[R].layout=a[t]:s.push({value:h,layout:a[t]}),s.sort(Ce)},updateOrder:(h,a,R)=>{if(u.current)return;const v=Se(s,h,a,R);if(s!==v){u.current=!0;const b=[...n];for(let y=0;y<v.length;y++)if(s[y].value!==v[y].value){const w=n.indexOf(s[y].value),T=n.indexOf(v[y].value);w!==-1&&T!==-1&&([b[w],b[T]]=[b[T],b[w]]);break}l(b)}}};c.useEffect(()=>{u.current=!1});const j=h=>{x.current=h,typeof i=="function"?i(h):i&&(i.current=h)},I={overflowAnchor:"none",...g.style};return r.jsx(f,{...g,style:I,ref:j,ignoreStrict:!0,children:r.jsx(se.Provider,{value:d,children:e})})}const we=c.forwardRef(je);function Ce(e,o){return e.layout.min-o.layout.min}const A=50,Q=25,ke=new Set(["auto","scroll"]),E=new WeakMap,V=new WeakMap;let O=null;function Te(){if(O){const e=X(O,"y");e&&(V.delete(e),E.delete(e));const o=X(O,"x");o&&o!==e&&(V.delete(o),E.delete(o)),O=null}}function Me(e,o){const t=getComputedStyle(e),l=o==="x"?t.overflowX:t.overflowY,n=e===document.body||e===document.documentElement;return ke.has(l)||n}function X(e,o){let t=e?.parentElement;for(;t;){if(Me(t,o))return t;t=t.parentElement}return null}function Oe(e,o,t){const l=o.getBoundingClientRect(),n=t==="x"?Math.max(0,l.left):Math.max(0,l.top),g=t==="x"?Math.min(window.innerWidth,l.right):Math.min(window.innerHeight,l.bottom),i=e-n,f=g-e;if(i<A){const s=1-i/A;return{amount:-Q*s*s,edge:"start"}}else if(f<A){const s=1-f/A;return{amount:Q*s*s,edge:"end"}}return{amount:0,edge:null}}function Pe(e,o,t,l){if(!e)return;O=e;const n=X(e,t);if(!n)return;const g=o-(t==="x"?window.scrollX:window.scrollY),{amount:i,edge:f}=Oe(g,n,t);if(f===null){V.delete(n),E.delete(n);return}const s=V.get(n),u=n===document.body||n===document.documentElement;if(s!==f){if(!(f==="start"&&l<0||f==="end"&&l>0))return;V.set(n,f);const d=t==="x"?n.scrollWidth-(u?window.innerWidth:n.clientWidth):n.scrollHeight-(u?window.innerHeight:n.clientHeight);E.set(n,d)}if(i>0){const x=E.get(n);if((t==="x"?u?window.scrollX:n.scrollLeft:u?window.scrollY:n.scrollTop)>=x)return}t==="x"?u?window.scrollBy({left:i}):n.scrollLeft+=i:u?window.scrollBy({top:i}):n.scrollTop+=i}function ee(e,o=0){return ue(e)?e:J(o)}function Ee({children:e,style:o={},value:t,as:l="li",onDrag:n,onDragEnd:g,layout:i=!0,...f},s){const u=te(()=>ne[l]),x=c.useContext(se),d={x:ee(o.x),y:ee(o.y)},j=he([d.x,d.y],([v,b])=>v||b?1:"unset"),{axis:I,registerItem:h,updateOrder:a,groupRef:R}=x;return r.jsx(u,{drag:I,...f,dragSnapToOrigin:!0,style:{...o,x:d.x,y:d.y,zIndex:j},layout:i,onDrag:(v,b)=>{const{velocity:y,point:w}=b,T=d[I].get();a(t,T,y[I]),Pe(R.current,w[I],I,y[I]),n&&n(v,b)},onDragEnd:(v,b)=>{Te(),g&&g(v,b)},onLayoutMeasure:v=>{h(t,v)},ref:s,ignoreStrict:!0,children:e})}const Ve=c.forwardRef(Ee),Ae=de({base:{item:{"&[data-has-trigger]":{cursor:"default",userSelect:"none"},cursor:"grab",flex:"1",rounded:"l2",_selected:{boxShadow:"md",cursor:"grabbing"}},root:{display:"flex",w:"full"},trigger:{alignItems:"center",color:"fg.subtle",cursor:"grab",display:"flex",fontSize:"2xl",justifyContent:"center",_selected:{cursor:"grabbing"},_disabled:{layerStyle:"disabled"}}},sizes:{sm:{item:{p:"3"},root:{gap:"3"}},md:{item:{p:"4"},root:{gap:"4"}},lg:{item:{p:"6"},root:{gap:"6"}},xl:{item:{p:"8"},root:{gap:"8"}}},variants:{elevated:{item:{bg:"bg.panel",boxShadow:"md",_selected:{boxShadow:"lg"}}},outline:{item:{layerStyle:"outline",bg:"bg"}},panel:{item:{layerStyle:"panel"}},plain:{item:{flex:"inherit",p:"0px",rounded:"0px",_selected:{boxShadow:"unset"}},root:{gap:"0px"}},solid:{item:{layerStyle:"solid"}},subtle:{item:{layerStyle:"subtle"}},surface:{item:{layerStyle:"surface"}}},props:{orientation:{horizontal:{root:{flexDirection:"row"}},vertical:{root:{alignItems:"stretch",flexDirection:"column"}}}},defaultProps:{size:"md",variant:"panel",orientation:"vertical"}}),P=({children:e,label:o}={})=>k(e??o),k=e=>pe(e)||ge(e)?JSON.stringify(e):e,[ze,_e]=oe({name:"ReorderContext"}),[De,He]=oe({name:"ReorderItemContext"}),Ge=({ref:e,children:o,item:t,items:l=[],orientation:n="vertical",onChange:g,onCompleteChange:i,...f}={})=>{const s=n==="vertical"?"y":"x",u=me(o),x=!!u.length,d=c.useMemo(()=>{const m=x?u.map(({props:C})=>C.value??P(C)):l.map(C=>C.value??P(C)),M=m.filter((C,U,Y)=>Y.indexOf(C)===U&&U!==Y.lastIndexOf(C));return M.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${M.join("', '")}' `),Array.from(new Set(m))},[x,u,l]),j=c.useMemo(()=>Object.fromEntries(u.map(m=>[k(m.props.value)??k(P(m.props)),m])),[u]),I=c.useMemo(()=>Object.fromEntries(l.map(m=>[k(m.value)??k(P(m)),m])),[l]),h=c.useRef(d),[a,R]=c.useState(d),v=c.useRef(d),b=c.useMemo(()=>a.map(m=>{if(x)return j[k(m)];{const M=I[k(m)];return M&&t?c.cloneElement(t,{key:k(M.value),...M}):null}}),[a,x,j,I,t]),y=c.useCallback(m=>{R(m),g?.(m)},[g]),w=c.useCallback(()=>{JSON.stringify(v.current)!==JSON.stringify(a)&&(v.current=a,i?.(a))},[i,a]);fe(()=>{JSON.stringify(d)!==JSON.stringify(h.current)&&(v.current=d,h.current=d,R(d))},[d]);const T=c.useCallback((m={})=>({axis:s,values:a,...f,...m,ref:B(m.ref,e),onMouseUp:W(m.onMouseUp,f.onMouseUp,w),onReorder:W(m.onReorder,f.onReorder,y),onTouchEnd:W(m.onTouchEnd,f.onTouchEnd,w)}),[f,e,w,y,s,a]);return{children:b,orientation:n,values:a,getRootProps:T}},Le=({ref:e,label:o,value:t,...l})=>{const{orientation:n}=_e(),g=Re(),[i,f]=c.useState(!1),[s,u]=c.useState(!1),x=J(0),d=J(0),j=c.useCallback(a=>f(!!a),[]);c.useEffect(()=>{const a=x.on("change",v=>{n==="horizontal"&&u(v!==0)}),R=d.on("change",v=>{n==="vertical"&&u(v!==0)});return()=>{a(),R()}},[n,x,d]);const I=c.useCallback((a={})=>{const R=a.children??l.children??o;return{"data-has-trigger":q(i),"data-selected":q(s),dragControls:g,dragListener:!i,value:t??P({children:R}),...a,...l,ref:B(a.ref,e),style:{x,y:d,...a.style,...l.style},children:R}},[e,l,g,i,t,x,d,s,o]),h=c.useCallback((a={})=>({...a,ref:B(j,a.ref),"data-selected":q(s),onPointerDown:W(a.onPointerDown,R=>g.start(R))}),[s,g,j]);return{getItemProps:I,getTriggerProps:h}},{withContext:ae,withProvider:Ne}=ve("reorder",Ae),S=Ne(({orientation:e,...o})=>{const t=xe(e),{children:l,getRootProps:n}=Ge({...o,item:r.jsx(p,{}),orientation:t});return r.jsx(ze,{value:{orientation:t},children:r.jsx(le.ul,{as:we,...n(),children:l})})},"root",{transferProps:["orientation"]})(),p=ae(e=>{const{getItemProps:o,getTriggerProps:t}=Le(e);return r.jsx(De,{value:{getTriggerProps:t},children:r.jsx(le.li,{as:Ve,...o()})})},"item")(),re=ae("div","trigger")(void 0,e=>{const{getTriggerProps:o}=He();return{children:r.jsx(be,{}),...o(e)}}),sr={component:S,title:"Components / Reorder"},z=()=>r.jsxs(r.Fragment,{children:[r.jsxs(S,{children:[r.jsx(p,{value:"ギニュー",children:"ギニュー"}),r.jsx(p,{value:"リクーム",children:"リクーム"}),r.jsx(p,{value:"バータ",children:"バータ"}),r.jsx(p,{value:"ジース",children:"ジース"}),r.jsx(p,{value:"グルド",children:"グルド"})]}),r.jsx(Ie,{}),r.jsxs(S,{children:[r.jsx(p,{children:"ギニュー"}),r.jsx(p,{children:"リクーム"}),r.jsx(p,{children:"バータ"}),r.jsx(p,{children:"ジース"}),r.jsx(p,{children:"グルド"})]})]}),_=()=>{const e=c.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(S,{items:e})},D=()=>{const e=c.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(F,{variant:"stack",rows:["sm","md","lg","xl"],children:(o,t,l)=>r.jsx(S,{size:t,items:e},l)})},H=()=>{const e=c.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(F,{variant:"stack",rows:["panel","outline","solid","subtle","surface","elevated","plain"],children:(o,t,l)=>r.jsx(S,{variant:t,items:e},l)})},G=()=>{const e=c.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(F,{variant:"stack",rows:["vertical","horizontal"],children:(o,t,l)=>r.jsx(S,{items:e,orientation:t},l)})},L=()=>r.jsxs(S,{children:[r.jsx(p,{value:"孫悟空",children:r.jsxs(K,{children:[r.jsx(re,{}),r.jsx(Z,{children:"孫悟空"})]})}),r.jsx(p,{value:"ベジータ",children:r.jsxs(K,{children:[r.jsx(re,{children:r.jsx(ye,{})}),r.jsx(Z,{children:"ベジータ"})]})})]}),N=()=>r.jsxs(S,{onChange:e=>console.log(`changed '${e.join("', '")}'`),children:[r.jsx(p,{value:"ギニュー",children:"ギニュー"}),r.jsx(p,{value:"リクーム",children:"リクーム"}),r.jsx(p,{value:"バータ",children:"バータ"}),r.jsx(p,{value:"ジース",children:"ジース"}),r.jsx(p,{value:"グルド",children:"グルド"})]}),$=()=>r.jsxs(S,{onCompleteChange:e=>console.log(`completed '${e.join("', '")}'`),children:[r.jsx(p,{value:"ギニュー",children:"ギニュー"}),r.jsx(p,{value:"リクーム",children:"リクーム"}),r.jsx(p,{value:"バータ",children:"バータ"}),r.jsx(p,{value:"ジース",children:"ジース"}),r.jsx(p,{value:"グルド",children:"グルド"})]});z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onChange={values => console.log(\`changed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...N.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onCompleteChange={values => console.log(\`completed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...$.parameters?.docs?.source}}};const ar=["Basic","Items","Size","Variant","Orientation","Trigger","OnChange","OnCompleteChange"];export{z as Basic,_ as Items,N as OnChange,$ as OnCompleteChange,G as Orientation,D as Size,L as Trigger,H as Variant,ar as __namedExportsOrder,sr as default};
