import{r as a,bT as Ee,bU as Ve,ao as Ce,bq as Te,j as r,bt as Ae,d as ze,R as _e,N as He,h as $,m as B,c as ke,b as q,a3 as De,i as Ge,s as Me,l as Ne,T as K}from"./iframe-DFva2jMV.js";import{P as X}from"./props-table-B_8J15-m.js";import{u as Le}from"./index-mWMErbgm.js";import{u as $e}from"./use-drag-controls-CqWZ0jm8.js";import{u as We,a as J}from"./use-transform-YdWGGA0z.js";import{G as qe}from"./grip-vertical-icon-DiBERoGn.js";import{S as Be}from"./separator-D8vtFJO1.js";import{H as Q}from"./h-stack-CsT_92zP.js";import{G as Je}from"./ghost-icon-D-YGjyyJ.js";import"./preload-helper-C1FmrZbK.js";import"./grid-x41VgY43.js";import"./grid-item-1UEeJgUu.js";import"./for-BFLNBjH-.js";import"./flex-nV8c4wGK.js";import"./heading-H0Zm1g-d.js";import"./use-breakpoint-CpfPhBXT.js";import"./use-breakpoint-value-CDxhf88S.js";import"./use-color-mode-value-BRQorAB5.js";const Oe=a.createContext(null);function Ue(e,o,t,s){if(!s)return e;const n=e.findIndex(g=>g.value===o);if(n===-1)return e;const u=s>0?1:-1,c=e[n+u];if(!c)return e;const p=e[n],i=c.layout,d=Ee(i.min,i.max,.5);return u===1&&p.layout.max+t>d||u===-1&&p.layout.min+t<d?Ve(e,n,n+u):e}function Xe({children:e,as:o="ul",axis:t="y",onReorder:s,values:n,...u},c){const p=Ce(()=>Te[o]),i=[],d=a.useRef(!1),g=a.useRef(null),m={axis:t,groupRef:g,registerItem:(h,l)=>{const x=i.findIndex(R=>h===R.value);x!==-1?i[x].layout=l[t]:i.push({value:h,layout:l[t]}),i.sort(Ke)},updateOrder:(h,l,x)=>{if(d.current)return;const R=Ue(i,h,l,x);i!==R&&(d.current=!0,s(R.map(Fe).filter(I=>n.indexOf(I)!==-1)))}};a.useEffect(()=>{d.current=!1});const S=h=>{g.current=h,typeof c=="function"?c(h):c&&(c.current=h)},b={overflowAnchor:"none",...u.style};return r.jsx(p,{...u,style:b,ref:S,ignoreStrict:!0,children:r.jsx(Oe.Provider,{value:m,children:e})})}const Ye=a.forwardRef(Xe);function Fe(e){return e.value}function Ke(e,o){return e.layout.min-o.layout.min}const V=50,Z=25,Qe=new Set(["auto","scroll"]),P=new WeakMap,E=new WeakMap;let M=null;function Ze(){if(M){const e=U(M,"y");e&&(E.delete(e),P.delete(e));const o=U(M,"x");o&&o!==e&&(E.delete(o),P.delete(o)),M=null}}function er(e,o){const t=getComputedStyle(e),s=o==="x"?t.overflowX:t.overflowY,n=e===document.body||e===document.documentElement;return Qe.has(s)||n}function U(e,o){let t=e==null?void 0:e.parentElement;for(;t;){if(er(t,o))return t;t=t.parentElement}return null}function rr(e,o,t){const s=o.getBoundingClientRect(),n=t==="x"?Math.max(0,s.left):Math.max(0,s.top),u=t==="x"?Math.min(window.innerWidth,s.right):Math.min(window.innerHeight,s.bottom),c=e-n,p=u-e;if(c<V){const i=1-c/V;return{amount:-Z*i*i,edge:"start"}}else if(p<V){const i=1-p/V;return{amount:Z*i*i,edge:"end"}}return{amount:0,edge:null}}function tr(e,o,t,s){if(!e)return;M=e;const n=U(e,t);if(!n)return;const u=o-(t==="x"?window.scrollX:window.scrollY),{amount:c,edge:p}=rr(u,n,t);if(p===null){E.delete(n),P.delete(n);return}const i=E.get(n),d=n===document.body||n===document.documentElement;if(i!==p){if(!(p==="start"&&s<0||p==="end"&&s>0))return;E.set(n,p);const m=t==="x"?n.scrollWidth-(d?window.innerWidth:n.clientWidth):n.scrollHeight-(d?window.innerHeight:n.clientHeight);P.set(n,m)}if(c>0){const g=P.get(n);if((t==="x"?d?window.scrollX:n.scrollLeft:d?window.scrollY:n.scrollTop)>=g)return}t==="x"?d?window.scrollBy({left:c}):n.scrollLeft+=c:d?window.scrollBy({top:c}):n.scrollTop+=c}function ee(e,o=0){return Ae(e)?e:J(o)}function nr({children:e,style:o={},value:t,as:s="li",onDrag:n,onDragEnd:u,layout:c=!0,...p},i){const d=Ce(()=>Te[s]),g=a.useContext(Oe),m={x:ee(o.x),y:ee(o.y)},S=We([m.x,m.y],([R,I])=>R||I?1:"unset"),{axis:b,registerItem:h,updateOrder:l,groupRef:x}=g;return r.jsx(d,{drag:b,...p,dragSnapToOrigin:!0,style:{...o,x:m.x,y:m.y,zIndex:S},layout:c,onDrag:(R,I)=>{const{velocity:T,point:k}=I,W=m[b].get();l(t,W,T[b]),tr(x.current,k[b],b,T[b]),n&&n(R,I)},onDragEnd:(R,I)=>{Ze(),u&&u(R,I)},onLayoutMeasure:R=>{h(t,R)},ref:i,ignoreStrict:!0,children:e})}const or=a.forwardRef(nr),sr=ze({base:{item:{"&[data-has-trigger]":{cursor:"default",userSelect:"none"},cursor:"grab",flex:"1",rounded:"l2",_selected:{boxShadow:"md",cursor:"grabbing"}},root:{display:"flex",w:"full"},trigger:{alignItems:"center",color:"fg.subtle",cursor:"grab",display:"flex",fontSize:"2xl",justifyContent:"center",_selected:{cursor:"grabbing"},_disabled:{layerStyle:"disabled"}}},sizes:{sm:{item:{p:"3"},root:{gap:"3"}},md:{item:{p:"4"},root:{gap:"4"}},lg:{item:{p:"6"},root:{gap:"6"}},xl:{item:{p:"8"},root:{gap:"8"}}},variants:{elevated:{item:{bg:"bg.panel",boxShadow:"md",_selected:{boxShadow:"lg"}}},outline:{item:{layerStyle:"outline",bg:"bg"}},panel:{item:{layerStyle:"panel"}},plain:{item:{flex:"inherit",p:"0px",rounded:"0px",_selected:{boxShadow:"unset"}},root:{gap:"0px"}},solid:{item:{layerStyle:"solid"}},subtle:{item:{layerStyle:"subtle"}},surface:{item:{layerStyle:"surface"}}},props:{orientation:{horizontal:{root:{flexDirection:"row"}},vertical:{root:{alignItems:"stretch",flexDirection:"column"}}}},defaultProps:{size:"md",variant:"panel",orientation:"vertical"}}),O=({children:e,label:o}={})=>w(e??o),w=e=>De(e)||Ge(e)?JSON.stringify(e):e,[lr,ar]=ke({name:"ReorderContext"}),[cr,ir]=ke({name:"ReorderItemContext"}),ur=({ref:e,children:o,item:t,items:s=[],orientation:n="vertical",onChange:u,onCompleteChange:c,...p}={})=>{const i=n==="vertical"?"y":"x",d=_e(o),g=!!d.length,m=a.useMemo(()=>{const f=g?d.map(({props:j})=>j.value??O(j)):s.map(j=>j.value??O(j)),C=f.filter((j,Y,F)=>F.indexOf(j)===Y&&Y!==F.lastIndexOf(j));return C.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${C.join("', '")}' `),Array.from(new Set(f))},[g,d,s]),S=a.useMemo(()=>Object.fromEntries(d.map(f=>[w(f.props.value)??w(O(f.props)),f])),[d]),b=a.useMemo(()=>Object.fromEntries(s.map(f=>[w(f.value)??w(O(f)),f])),[s]),h=a.useRef(m),[l,x]=a.useState(m),R=a.useRef(m),I=a.useMemo(()=>l.map(f=>{if(g)return S[w(f)];{const C=b[w(f)];return C&&t?a.cloneElement(t,{key:w(C.value),...C}):null}}),[l,g,S,b,t]),T=a.useCallback(f=>{x(f),u==null||u(f)},[u]),k=a.useCallback(()=>{JSON.stringify(R.current)!==JSON.stringify(l)&&(R.current=l,c==null||c(l))},[c,l]);He(()=>{JSON.stringify(m)!==JSON.stringify(h.current)&&(R.current=m,h.current=m,x(m))},[m]);const W=a.useCallback((f={})=>({axis:i,values:l,...p,...f,ref:B(f.ref,e),onMouseUp:$(f.onMouseUp,p.onMouseUp,k),onReorder:$(f.onReorder,p.onReorder,T),onTouchEnd:$(f.onTouchEnd,p.onTouchEnd,k)}),[p,e,k,T,i,l]);return{children:I,orientation:n,values:l,getRootProps:W}},dr=({ref:e,label:o,value:t,...s})=>{const{orientation:n}=ar(),u=$e(),[c,p]=a.useState(!1),[i,d]=a.useState(!1),g=J(0),m=J(0),S=a.useCallback(l=>p(!!l),[]);a.useEffect(()=>{const l=g.on("change",R=>{n==="horizontal"&&d(R!==0)}),x=m.on("change",R=>{n==="vertical"&&d(R!==0)});return()=>{l(),x()}},[n,g,m]);const b=a.useCallback((l={})=>{const x=l.children??s.children??o;return{"data-has-trigger":q(c),"data-selected":q(i),dragControls:u,dragListener:!c,value:t??O({children:x}),...l,...s,ref:B(l.ref,e),style:{x:g,y:m,...l.style,...s.style},children:x}},[e,s,u,c,t,g,m,i,o]),h=a.useCallback((l={})=>({...l,ref:B(S,l.ref),"data-selected":q(i),onPointerDown:$(l.onPointerDown,x=>u.start(x))}),[i,u,S]);return{getItemProps:b,getTriggerProps:h}},{withContext:Pe,withProvider:mr}=Ne("reorder",sr),y=mr(({orientation:e,...o})=>{const t=Le(e),{children:s,getRootProps:n}=ur({...o,item:r.jsx(v,{}),orientation:t});return r.jsx(lr,{value:{orientation:t},children:r.jsx(Me.ul,{as:Ye,...n(),children:s})})},"root",{transferProps:["orientation"]})(),v=Pe(e=>{const{getItemProps:o,getTriggerProps:t}=dr(e);return r.jsx(cr,{value:{getTriggerProps:t},children:r.jsx(Me.li,{as:or,...o()})})},"item")(),re=Pe("div","trigger")(void 0,e=>{const{getTriggerProps:o}=ir();return{children:r.jsx(qe,{}),...o(e)}}),Pr={component:y,title:"Components / Reorder"},A=()=>r.jsxs(r.Fragment,{children:[r.jsxs(y,{children:[r.jsx(v,{value:"ギニュー",children:"ギニュー"}),r.jsx(v,{value:"リクーム",children:"リクーム"}),r.jsx(v,{value:"バータ",children:"バータ"}),r.jsx(v,{value:"ジース",children:"ジース"}),r.jsx(v,{value:"グルド",children:"グルド"})]}),r.jsx(Be,{}),r.jsxs(y,{children:[r.jsx(v,{children:"ギニュー"}),r.jsx(v,{children:"リクーム"}),r.jsx(v,{children:"バータ"}),r.jsx(v,{children:"ジース"}),r.jsx(v,{children:"グルド"})]})]}),z=()=>{const e=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(y,{items:e})},_=()=>{const e=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(X,{variant:"stack",rows:["sm","md","lg","xl"],children:(o,t,s)=>r.jsx(y,{size:t,items:e},s)})},H=()=>{const e=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(X,{variant:"stack",rows:["panel","outline","solid","subtle","surface","elevated","plain"],children:(o,t,s)=>r.jsx(y,{variant:t,items:e},s)})},D=()=>{const e=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return r.jsx(X,{variant:"stack",rows:["vertical","horizontal"],children:(o,t,s)=>r.jsx(y,{items:e,orientation:t},s)})},G=()=>r.jsxs(y,{children:[r.jsx(v,{value:"孫悟空",children:r.jsxs(Q,{children:[r.jsx(re,{}),r.jsx(K,{children:"孫悟空"})]})}),r.jsx(v,{value:"ベジータ",children:r.jsxs(Q,{children:[r.jsx(re,{children:r.jsx(Je,{})}),r.jsx(K,{children:"ベジータ"})]})})]}),N=()=>r.jsxs(y,{onChange:e=>console.log(`changed '${e.join("', '")}'`),children:[r.jsx(v,{value:"ギニュー",children:"ギニュー"}),r.jsx(v,{value:"リクーム",children:"リクーム"}),r.jsx(v,{value:"バータ",children:"バータ"}),r.jsx(v,{value:"ジース",children:"ジース"}),r.jsx(v,{value:"グルド",children:"グルド"})]}),L=()=>r.jsxs(y,{onCompleteChange:e=>console.log(`completed '${e.join("', '")}'`),children:[r.jsx(v,{value:"ギニュー",children:"ギニュー"}),r.jsx(v,{value:"リクーム",children:"リクーム"}),r.jsx(v,{value:"バータ",children:"バータ"}),r.jsx(v,{value:"ジース",children:"ジース"}),r.jsx(v,{value:"グルド",children:"グルド"})]});var te,ne,oe;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(oe=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,le,ae;z.parameters={...z.parameters,docs:{...(se=z.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(ae=(le=z.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ce,ie,ue;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(ue=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var de,me,fe;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(fe=(me=H.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var pe,ve,Re;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(Re=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:Re.source}}};var ge,xe,he;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(he=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var be,Ie,ye;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <ReorderRoot onChange={values => console.log(\`changed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...(ye=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var Se,je,we;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <ReorderRoot onCompleteChange={values => console.log(\`completed '\${values.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </ReorderRoot>;
}`,...(we=(je=L.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};const Er=["Basic","Items","Size","Variant","Orientation","Trigger","OnChange","OnCompleteChange"];export{A as Basic,z as Items,N as OnChange,L as OnCompleteChange,D as Orientation,_ as Size,G as Trigger,H as Variant,Er as __namedExportsOrder,Pr as default};
