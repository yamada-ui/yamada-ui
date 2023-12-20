import{j as e,a,F as j}from"./jsx-runtime-TtYKBvr-.js";import{I as fe,f as Ae}from"./fontawesome-icon-qUmlhaju.js";import{r as t}from"./index-IybTgENJ.js";import{f as ge,g as xe,u as Re,m as be,i as De}from"./motion-AgWUVtfu.js";import{a as ve,u as z}from"./use-transform-eDUMDNop.js";import{c as Be,p as ye,y as Se,u as k,a as Z,h as V,H as Fe,v as we}from"./factory-0U35BYk-.js";import{u as Me}from"./use-component-style-5nTHLJk_.js";import{o as Te}from"./theme-provider-_TpUstJ8.js";import{u as _e}from"./use-drag-controls-Ge2V3ppt.js";import{D}from"./divider-__owzm-t.js";import{b as Oe}from"./icon-gAHwiU-k.js";import{f as ze}from"./forward-ref-6T0UNPU-.js";import{H}from"./stack-POIjEuRa.js";import{T as P}from"./text-v7BrHFOc.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-sWcbvyzn.js";const Ie=t.createContext(null);function Ve(u,n,l,b){if(!b)return u;const d=u.findIndex(m=>m.value===n);if(d===-1)return u;const i=b>0?1:-1,F=u[d+i];if(!F)return u;const s=u[d],o=F.layout,c=ge(o.min,o.max,.5);return i===1&&s.layout.max+l>c||i===-1&&s.layout.min+l<c?xe(u,d,d+i):u}function je({children:u,as:n="ul",axis:l="y",onReorder:b,values:d,...i},F){const s=Re(()=>be(n)),o=[],c=t.useRef(!1),m={axis:l,registerItem:(h,C)=>{C&&o.findIndex(B=>h===B.value)===-1&&(o.push({value:h,layout:C[l]}),o.sort(He))},updateOrder:(h,C,B)=>{if(c.current)return;const I=Ve(o,h,C,B);o!==I&&(c.current=!0,b(I.map(Ze).filter(p=>d.indexOf(p)!==-1)))}};return t.useEffect(()=>{c.current=!1}),t.createElement(s,{...i,ref:F,ignoreStrict:!0},t.createElement(Ie.Provider,{value:m},u))}const ke=t.forwardRef(je);function Ze(u){return u.value}function He(u,n){return u.layout.min-n.layout.min}function $(u,n=0){return De(u)?u:z(n)}function Pe({children:u,style:n={},value:l,as:b="li",onDrag:d,layout:i=!0,...F},s){const o=Re(()=>be(b)),c=t.useContext(Ie),m={x:$(n.x),y:$(n.y)},h=ve([m.x,m.y],([E,f])=>E||f?1:"unset"),C=t.useRef(null),{axis:B,registerItem:I,updateOrder:p}=c;return t.useEffect(()=>{I(l,C.current)},[c]),t.createElement(o,{drag:B,...F,dragSnapToOrigin:!0,style:{...n,x:m.x,y:m.y,zIndex:h},layout:i,onDrag:(E,f)=>{const{velocity:A}=f;A[B]&&p(l,m[B].get(),A[B]),d&&d(E,f)},onLayoutMeasure:E=>{C.current=E},ref:s,ignoreStrict:!0},u)}const $e=t.forwardRef(Pe),he={Group:ke,Item:$e},[Ne,Ee]=Be({name:"ReorderContext",errorMessage:`useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`}),Le=u=>Array.from(new Set(u)),Ge=u=>u.filter((n,l,b)=>b.indexOf(n)===l&&l!==b.lastIndexOf(n)),R=t.forwardRef((u,n)=>{const[l,b]=Me("Reorder",u),{className:d,orientation:i="vertical",gap:F="md",onChange:s,onCompleteChange:o,children:c,...m}=Te(b),h=i==="vertical"?"y":"x",C=ye(c),B=t.useMemo(()=>{const g=C.map(({props:pe})=>pe.label),x=Ge(g);return x.length&&console.warn(`Reorder: 'label' of 'ReorderItem' must not be duplicated. duplicate 'label' is '${x.join("', '")}' `),Le(g)},[C]),[I,p]=t.useState(B),E=t.useCallback(g=>{p(g),s==null||s(g)},[s]);Se(()=>{B.every(x=>I.includes(x))||p(B)},[B]);const f=t.useMemo(()=>I.map(g=>C.find(({props:x})=>x.label===g)),[I,C]),A={display:"flex",flexDirection:i==="vertical"?"column":"row",gap:F,...l.container};return e(Ne,{value:{orientation:i,styles:l},children:e(k.ul,{ref:n,as:he.Group,className:Z("ui-reorder",d),axis:h,values:I,onReorder:E,__css:A,...m,onMouseUp:V(m.onMouseUp,()=>o==null?void 0:o(I)),onTouchEnd:V(m.onTouchEnd,()=>o==null?void 0:o(I)),children:f})})});R.displayName="Reorder";const[Ue,Ye]=Be({name:"ReorderContext",errorMessage:`useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`}),r=t.forwardRef(({className:u,label:n,...l},b)=>{var p;const{orientation:d,styles:i}=Ee(),F=_e(),[s,o]=t.useState(!1),[c,m]=t.useState(!1),h=z(0),C=z(0),B=t.useCallback(E=>o(!!E),[]);t.useEffect(()=>{const E=h.on("change",A=>{d==="horizontal"&&m(A!==0)}),f=C.on("change",A=>{d==="vertical"&&m(A!==0)});return()=>{E(),f()}},[d,h,C]);const I={...s?{userSelect:"none"}:{cursor:"grab"},...i.item,...s?{}:{_selected:{...(p=i.item)==null?void 0:p._selected,cursor:"grabbing"}}};return e(Ue,{value:{register:B,isDrag:c,dragControls:F},children:e(k.li,{ref:b,as:he.Item,className:Z("ui-reorder__item",u),value:n,__css:I,...l,dragListener:!s,dragControls:F,"data-selected":Fe(c),style:{...l.style,x:h,y:C}})})});r.displayName="ReorderItem";const N=ze(({className:u,children:n=e(We,{}),...l},b)=>{const{styles:d}=Ee(),{register:i,isDrag:F,dragControls:s}=Ye(),o={display:"flex",justifyContent:"center",alignItems:"center",cursor:"grab",_selected:{cursor:"grabbing"},...d.trigger};return e(k.div,{ref:we(i,b),className:Z("ui-reorder__trigger",u),__css:o,...l,"data-selected":Fe(F),onPointerDown:V(l.onPointerDown,c=>s.start(c)),children:n})}),We=u=>a(Oe,{viewBox:"0 0 39 39",...u,children:[e("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),e("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),e("path",{d:"M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z",fill:"currentColor"}),e("path",{d:"M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z",fill:"currentColor"}),e("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),e("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),e("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),e("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"}),e("path",{d:"M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z",fill:"currentColor"})]}),Cr={title:"Components / Data Display / Reorder",component:R},v=()=>a(R,{children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),y=()=>a(j,{children:[a(R,{orientation:"vertical",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),a(R,{orientation:"horizontal",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),S=()=>a(j,{children:[a(R,{size:"sm",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),a(R,{size:"md",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),a(R,{size:"normal",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),a(R,{size:"lg",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),w=()=>a(j,{children:[a(R,{variant:"outline",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),a(R,{variant:"elevated",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(D,{}),a(R,{variant:"unstyled",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),M=()=>a(R,{children:[e(r,{label:"孫悟空",children:a(H,{children:[e(N,{}),e(P,{children:"孫悟空"})]})}),e(r,{label:"ベジータ",children:a(H,{children:[e(N,{children:e(fe,{icon:Ae})}),e(P,{children:"ベジータ"})]})})]}),T=()=>a(R,{onChange:u=>console.log(`changed '${u.join("', '")}'`),children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),_=()=>a(R,{onCompleteChange:u=>console.log(`completed '${u.join("', '")}'`),children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),O=()=>a(R,{h:"xs",p:"md",borderWidth:"1px",rounded:"md",overflowY:"scroll",layoutScroll:!0,tabIndex:0,outline:"0",_focusVisible:{boxShadow:"outline"},children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]});var L,G,U;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(U=(G=v.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Y,W,X;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Reorder orientation="vertical">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder orientation="horizontal">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var q,J,K;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Reorder size="sm">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="md">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="normal">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="lg">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,ee,re;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <Reorder variant="outline">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant="elevated">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant="unstyled">
        <ReorderItem label="ギニュー">ギニュー</ReorderItem>
        <ReorderItem label="リクーム">リクーム</ReorderItem>
        <ReorderItem label="バータ">バータ</ReorderItem>
        <ReorderItem label="ジース">ジース</ReorderItem>
        <ReorderItem label="グルド">グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(re=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ue,oe,te;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem label="孫悟空">
        <HStack>
          <ReorderTrigger />
          <Text>孫悟空</Text>
        </HStack>
      </ReorderItem>

      <ReorderItem label="ベジータ">
        <HStack>
          <ReorderTrigger>
            <Icon icon={faPoo} />
          </ReorderTrigger>
          <Text>ベジータ</Text>
        </HStack>
      </ReorderItem>
    </Reorder>;
}`,...(te=(oe=M.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,le,ae;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Reorder onChange={labels => console.log(\`changed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(ae=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var de,ie,se;_.parameters={..._.parameters,docs:{...(de=_.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Reorder onCompleteChange={labels => console.log(\`completed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(se=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,me,Ce;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Reorder h="xs" p="md" borderWidth="1px" rounded="md" overflowY="scroll" layoutScroll tabIndex={0} outline="0" _focusVisible={{
    boxShadow: "outline"
  }}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(Ce=(me=O.parameters)==null?void 0:me.docs)==null?void 0:Ce.source}}};const Rr=["basic","withOrientation","withSize","withVariant","withTrigger","withOnChange","withOnCompleteChange","useContainerScroll"];export{Rr as __namedExportsOrder,v as basic,Cr as default,O as useContainerScroll,T as withOnChange,_ as withOnCompleteChange,y as withOrientation,S as withSize,M as withTrigger,w as withVariant};
