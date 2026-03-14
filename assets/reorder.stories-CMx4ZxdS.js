import{r as a,bT as ce,bU as ie,ap as te,bq as ne,j as r,bt as ue,d as de,R as me,N as pe,h as $,m as B,c as oe,b as q,a3 as fe,i as ge,s as le,l as ve,T as K}from"./iframe-BkSt7vyM.js";import{P as X}from"./props-table-DN3lVgaW.js";import{u as Re}from"./index-CQxoNWT4.js";import{u as xe}from"./use-drag-controls-DFuCyO3R.js";import{u as he,a as J}from"./use-transform-DCltKgo9.js";import{G as be}from"./grip-vertical-icon-Dt9YIu0b.js";import{S as Ie}from"./separator-D0r-dgPX.js";import{H as Q}from"./h-stack-DUys5R97.js";import{G as ye}from"./ghost-icon-bWw1u4kf.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-DmgtKOBh.js";import"./grid-item-DSqTnqMu.js";import"./for-B9rKCkzX.js";import"./flex-BpaptubY.js";import"./heading-CMTXcFtE.js";import"./use-breakpoint-40vW7z1m.js";import"./use-breakpoint-value-wrLKYw6K.js";import"./use-color-mode-value-ChW2w8QO.js";const se=a.createContext(null);function Se(e,o,t,l){if(!l)return e;const n=e.findIndex(R=>R.value===o);if(n===-1)return e;const g=l>0?1:-1,i=e[n+g];if(!i)return e;const p=e[n],c=i.layout,u=ce(c.min,c.max,.5);return g===1&&p.layout.max+t>u||g===-1&&p.layout.min+t<u?ie(e,n,n+g):e}function je({children:e,as:o="ul",axis:t="y",onReorder:l,values:n,...g},i){const p=te(()=>ne[o]),c=[],u=a.useRef(!1),R=a.useRef(null),d={axis:t,groupRef:R,registerItem:(h,s)=>{const x=c.findIndex(v=>h===v.value);x!==-1?c[x].layout=s[t]:c.push({value:h,layout:s[t]}),c.sort(Te)},updateOrder:(h,s,x)=>{if(u.current)return;const v=Se(c,h,s,x);c!==v&&(u.current=!0,l(v.map(Ce).filter(I=>n.indexOf(I)!==-1)))}};a.useEffect(()=>{u.current=!1});const S=h=>{R.current=h,typeof i=="function"?i(h):i&&(i.current=h)},b={overflowAnchor:"none",...g.style};return r.jsx(p,{...g,style:b,ref:S,ignoreStrict:!0,children:r.jsx(se.Provider,{value:d,children:e})})}const we=a.forwardRef(je);function Ce(e){return e.value}function Te(e,o){return e.layout.min-o.layout.min}const V=50,Z=25,ke=new Set(["auto","scroll"]),P=new WeakMap,E=new WeakMap;let M=null;function Me(){if(M){const e=U(M,"y");e&&(E.delete(e),P.delete(e));const o=U(M,"x");o&&o!==e&&(E.delete(o),P.delete(o)),M=null}}function Oe(e,o){const t=getComputedStyle(e),l=o==="x"?t.overflowX:t.overflowY,n=e===document.body||e===document.documentElement;return ke.has(l)||n}function U(e,o){let t=e?.parentElement;for(;t;){if(Oe(t,o))return t;t=t.parentElement}return null}function Pe(e,o,t){const l=o.getBoundingClientRect(),n=t==="x"?Math.max(0,l.left):Math.max(0,l.top),g=t==="x"?Math.min(window.innerWidth,l.right):Math.min(window.innerHeight,l.bottom),i=e-n,p=g-e;if(i<V){const c=1-i/V;return{amount:-Z*c*c,edge:"start"}}else if(p<V){const c=1-p/V;return{amount:Z*c*c,edge:"end"}}return{amount:0,edge:null}}function Ee(e,o,t,l){if(!e)return;M=e;const n=U(e,t);if(!n)return;const g=o-(t==="x"?window.scrollX:window.scrollY),{amount:i,edge:p}=Pe(g,n,t);if(p===null){E.delete(n),P.delete(n);return}const c=E.get(n),u=n===document.body||n===document.documentElement;if(c!==p){if(!(p==="start"&&l<0||p==="end"&&l>0))return;E.set(n,p);const d=t==="x"?n.scrollWidth-(u?window.innerWidth:n.clientWidth):n.scrollHeight-(u?window.innerHeight:n.clientHeight);P.set(n,d)}if(i>0){const R=P.get(n);if((t==="x"?u?window.scrollX:n.scrollLeft:u?window.scrollY:n.scrollTop)>=R)return}t==="x"?u?window.scrollBy({left:i}):n.scrollLeft+=i:u?window.scrollBy({top:i}):n.scrollTop+=i}function ee(e,o=0){return ue(e)?e:J(o)}function Ve({children:e,style:o={},value:t,as:l="li",onDrag:n,onDragEnd:g,layout:i=!0,...p},c){const u=te(()=>ne[l]),R=a.useContext(se),d={x:ee(o.x),y:ee(o.y)},S=he([d.x,d.y],([v,I])=>v||I?1:"unset"),{axis:b,registerItem:h,updateOrder:s,groupRef:x}=R;return r.jsx(u,{drag:b,...p,dragSnapToOrigin:!0,style:{...o,x:d.x,y:d.y,zIndex:S},layout:i,onDrag:(v,I)=>{const{velocity:T,point:k}=I,W=d[b].get();s(t,W,T[b]),Ee(x.current,k[b],b,T[b]),n&&n(v,I)},onDragEnd:(v,I)=>{Me(),g&&g(v,I)},onLayoutMeasure:v=>{h(t,v)},ref:c,ignoreStrict:!0,children:e})}const Ae=a.forwardRef(Ve),ze=de({base:{item:{"&[data-has-trigger]":{cursor:"default",userSelect:"none"},cursor:"grab",flex:"1",rounded:"l2",_selected:{boxShadow:"md",cursor:"grabbing"}},root:{display:"flex",w:"full"},trigger:{alignItems:"center",color:"fg.subtle",cursor:"grab",display:"flex",fontSize:"2xl",justifyContent:"center",_selected:{cursor:"grabbing"},_disabled:{layerStyle:"disabled"}}},sizes:{sm:{item:{p:"3"},root:{gap:"3"}},md:{item:{p:"4"},root:{gap:"4"}},lg:{item:{p:"6"},root:{gap:"6"}},xl:{item:{p:"8"},root:{gap:"8"}}},variants:{elevated:{item:{bg:"bg.panel",boxShadow:"md",_selected:{boxShadow:"lg"}}},outline:{item:{layerStyle:"outline",bg:"bg"}},panel:{item:{layerStyle:"panel"}},plain:{item:{flex:"inherit",p:"0px",rounded:"0px",_selected:{boxShadow:"unset"}},root:{gap:"0px"}},solid:{item:{layerStyle:"solid"}},subtle:{item:{layerStyle:"subtle"}},surface:{item:{layerStyle:"surface"}}},props:{orientation:{horizontal:{root:{flexDirection:"row"}},vertical:{root:{alignItems:"stretch",flexDirection:"column"}}}},defaultProps:{size:"md",variant:"panel",orientation:"vertical"}}),O=({children:e,label:o}={})=>w(e??o),w=e=>fe(e)||ge(e)?JSON.stringify(e):e,[_e,He]=oe({name:"ReorderContext"}),[De,Ge]=oe({name:"ReorderItemContext"}),Ne=({ref:e,children:o,item:t,items:l=[],orientation:n="vertical",onChange:g,onCompleteChange:i,...p}={})=>{const c=n==="vertical"?"y":"x",u=me(o),R=!!u.length,d=a.useMemo(()=>{const m=R?u.map(({props:j})=>j.value??O(j)):l.map(j=>j.value??O(j)),C=m.filter((j,Y,F)=>F.indexOf(j)===Y&&Y!==F.lastIndexOf(j));return C.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${C.join("', '")}' `),Array.from(new Set(m))},[R,u,l]),S=a.useMemo(()=>Object.fromEntries(u.map(m=>[w(m.props.value)??w(O(m.props)),m])),[u]),b=a.useMemo(()=>Object.fromEntries(l.map(m=>[w(m.value)??w(O(m)),m])),[l]),h=a.useRef(d),[s,x]=a.useState(d),v=a.useRef(d),I=a.useMemo(()=>s.map(m=>{if(R)return S[w(m)];{const C=b[w(m)];return C&&t?a.cloneElement(t,{key:w(C.value),...C}):null}}),[s,R,S,b,t]),T=a.useCallback(m=>{x(m),g?.(m)},[g]),k=a.useCallback(()=>{JSON.stringify(v.current)!==JSON.stringify(s)&&(v.current=s,i?.(s))},[i,s]);pe(()=>{JSON.stringify(d)!==JSON.stringify(h.current)&&(v.current=d,h.current=d,x(d))},[d]);const W=a.useCallback((m={})=>({axis:c,values:s,...p,...m,ref:B(m.ref,e),onMouseUp:$(m.onMouseUp,p.onMouseUp,k),onReorder:$(m.onReorder,p.onReorder,T),onTouchEnd:$(m.onTouchEnd,p.onTouchEnd,k)}),[p,e,k,T,c,s]);return{children:I,orientation:n,values:s,getRootProps:W}},Le=({ref:e,label:o,value:t,...l})=>{const{orientation:n}=He(),g=xe(),[i,p]=a.useState(!1),[c,u]=a.useState(!1),R=J(0),d=J(0),S=a.useCallback(s=>p(!!s),[]);a.useEffect(()=>{const s=R.on("change",v=>{n==="horizontal"&&u(v!==0)}),x=d.on("change",v=>{n==="vertical"&&u(v!==0)});return()=>{s(),x()}},[n,R,d]);const b=a.useCallback((s={})=>{const x=s.children??l.children??o;return{"data-has-trigger":q(i),"data-selected":q(c),dragControls:g,dragListener:!i,value:t??O({children:x}),...s,...l,ref:B(s.ref,e),style:{x:R,y:d,...s.style,...l.style},children:x}},[e,l,g,i,t,R,d,c,o]),h=a.useCallback((s={})=>({...s,ref:B(S,s.ref),"data-selected":q(c),onPointerDown:$(s.onPointerDown,x=>g.start(x))}),[c,g,S]);return{getItemProps:b,getTriggerProps:h}},{withContext:ae,withProvider:$e}=ve("reorder",ze),y=$e(({orientation:e,...o})=>{const t=Re(e),{children:l,getRootProps:n}=Ne({...o,item:r.jsx(f,{}),orientation:t});return r.jsx(_e,{value:{orientation:t},children:r.jsx(le.ul,{as:we,...n(),children:l})})},"root",{transferProps:["orientation"]})(),f=ae(e=>{const{getItemProps:o,getTriggerProps:t}=Le(e);return r.jsx(De,{value:{getTriggerProps:t},children:r.jsx(le.li,{as:Ae,...o()})})},"item")(),re=ae("div","trigger")(void 0,e=>{const{getTriggerProps:o}=Ge();return{children:r.jsx(be,{}),...o(e)}}),ar={component:y,title:"Components / Reorder"},A=()=>r.jsxs(r.Fragment,{children:[r.jsxs(y,{children:[r.jsx(f,{value:"ギニュー",children:"ギニュー"}),r.jsx(f,{value:"リクーム",children:"リクーム"}),r.jsx(f,{value:"バータ",children:"バータ"}),r.jsx(f,{value:"ジース",children:"ジース"}),r.jsx(f,{value:"グルド",children:"グルド"})]}),r.jsx(Ie,{}),r.jsxs(y,{children:[r.jsx(f,{children:"ギニュー"}),r.jsx(f,{children:"リクーム"}),r.jsx(f,{children:"バータ"}),r.jsx(f,{children:"ジース"}),r.jsx(f,{children:"グルド"})]})]}),z=()=>{const e=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(y,{items:e})},_=()=>{const e=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(X,{variant:"stack",rows:["sm","md","lg","xl"],children:(o,t,l)=>r.jsx(y,{size:t,items:e},l)})},H=()=>{const e=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(X,{variant:"stack",rows:["panel","outline","solid","subtle","surface","elevated","plain"],children:(o,t,l)=>r.jsx(y,{variant:t,items:e},l)})},D=()=>{const e=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(X,{variant:"stack",rows:["vertical","horizontal"],children:(o,t,l)=>r.jsx(y,{items:e,orientation:t},l)})},G=()=>r.jsxs(y,{children:[r.jsx(f,{value:"孫悟空",children:r.jsxs(Q,{children:[r.jsx(re,{}),r.jsx(K,{children:"孫悟空"})]})}),r.jsx(f,{value:"ベジータ",children:r.jsxs(Q,{children:[r.jsx(re,{children:r.jsx(ye,{})}),r.jsx(K,{children:"ベジータ"})]})})]}),N=()=>r.jsxs(y,{onChange:e=>console.log(`changed '${e.join("', '")}'`),children:[r.jsx(f,{value:"ギニュー",children:"ギニュー"}),r.jsx(f,{value:"リクーム",children:"リクーム"}),r.jsx(f,{value:"バータ",children:"バータ"}),r.jsx(f,{value:"ジース",children:"ジース"}),r.jsx(f,{value:"グルド",children:"グルド"})]}),L=()=>r.jsxs(y,{onCompleteChange:e=>console.log(`completed '${e.join("', '")}'`),children:[r.jsx(f,{value:"ギニュー",children:"ギニュー"}),r.jsx(f,{value:"リクーム",children:"リクーム"}),r.jsx(f,{value:"バータ",children:"バータ"}),r.jsx(f,{value:"ジース",children:"ジース"}),r.jsx(f,{value:"グルド",children:"グルド"})]});A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
  return <PropsTable variant="stack" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => <ReorderRoot key={key} size={row} items={items} />}
    </PropsTable>;
}`,..._.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onChange={values => console.log(\`changed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...N.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <ReorderRoot onCompleteChange={values => console.log(\`completed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...L.parameters?.docs?.source}}};const cr=["Basic","Items","Size","Variant","Orientation","Trigger","OnChange","OnCompleteChange"];export{A as Basic,z as Items,N as OnChange,L as OnCompleteChange,D as Orientation,_ as Size,G as Trigger,H as Variant,cr as __namedExportsOrder,ar as default};
