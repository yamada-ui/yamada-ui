import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as n}from"./index-uCp2LrAq.js";import{u as Se}from"./use-drag-controls-zoRc-TJ0.js";import{u as ve,a as V}from"./use-transform-ugCDQuL_.js";import{g as we,h as Me,u as he,m as Ie,i as Te}from"./motion-BNFRb361.js";import{l as Ee,b as N,c as Z,d as pe,t as Oe,f as _e,h as k,a as ze}from"./factory-Bf0a1C4O.js";import{a as Ve}from"./use-component-style-C1oydc60.js";import{o as ke}from"./theme-provider-CfMKAtcZ.js";import{D as A}from"./divider-CECBshPa.js";import{b as Ne}from"./icon-BtMBNqBn.js";import{f as Ze}from"./forward-ref-Dr5Hqd9a.js";import{H}from"./stack-DeQ5YYY4.js";import{T as $}from"./text-BOhk0htq.js";import{G as Ge}from"./ghost-DjysmoJn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./index-ZgcAASpW.js";import"./lucide-icon-DchBQEch.js";const je=n.createContext(null);function He(u,t,l,C){if(!C)return u;const a=u.findIndex(b=>b.value===t);if(a===-1)return u;const d=C>0?1:-1,x=u[a+d];if(!x)return u;const i=u[a],o=x.layout,s=we(o.min,o.max,.5);return d===1&&i.layout.max+l>s||d===-1&&i.layout.min+l<s?Me(u,a,a+d):u}function $e({children:u,as:t="ul",axis:l="y",onReorder:C,values:a,...d},x){const i=he(()=>Ie(t)),o=[],s=n.useRef(!1),b={axis:l,registerItem:(B,h)=>{h&&o.findIndex(m=>B===m.value)===-1&&(o.push({value:B,layout:h[l]}),o.sort(Je))},updateOrder:(B,h,m)=>{if(s.current)return;const E=He(o,B,h,m);o!==E&&(s.current=!0,C(E.map(qe).filter(R=>a.indexOf(R)!==-1)))}};return n.useEffect(()=>{s.current=!1}),n.createElement(i,{...d,ref:x,ignoreStrict:!0},n.createElement(je.Provider,{value:b},u))}const Pe=n.forwardRef($e);function qe(u){return u.value}function Je(u,t){return u.layout.min-t.layout.min}function P(u,t=0){return Te(u)?u:V(t)}function Le({children:u,style:t={},value:l,as:C="li",onDrag:a,layout:d=!0,...x},i){const o=he(()=>Ie(C)),s=n.useContext(je),b={x:P(t.x),y:P(t.y)},B=ve([b.x,b.y],([I,F])=>I||F?1:"unset"),h=n.useRef(null),{axis:m,registerItem:E,updateOrder:R}=s;return n.useEffect(()=>{E(l,h.current)},[s]),n.createElement(o,{drag:m,...x,dragSnapToOrigin:!0,style:{...t,x:b.x,y:b.y,zIndex:B},layout:d,onDrag:(I,F)=>{const{velocity:j}=F;j[m]&&R(l,b[m].get(),j[m]),a&&a(I,F)},onLayoutMeasure:I=>{h.current=I},ref:i,ignoreStrict:!0},u)}const Ue=n.forwardRef(Le),fe={Group:Pe,Item:Ue},[Ye,We]=Ee({name:"ReorderContext",errorMessage:`useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`}),r=n.forwardRef(({className:u,label:t,...l},C)=>{var R;const{orientation:a,styles:d}=Ae(),x=Se(),[i,o]=n.useState(!1),[s,b]=n.useState(!1),B=V(0),h=V(0),m=n.useCallback(I=>o(!!I),[]);n.useEffect(()=>{const I=B.on("change",j=>{a==="horizontal"&&b(j!==0)}),F=h.on("change",j=>{a==="vertical"&&b(j!==0)});return()=>{I(),F()}},[a,B,h]);const E={...i?{userSelect:"none"}:{cursor:"grab"},...d.item,...i?{}:{_selected:{...(R=d.item)==null?void 0:R._selected,cursor:"grabbing"}}};return e.jsx(Ye,{value:{register:m,isDrag:s,dragControls:x},children:e.jsx(N.li,{ref:C,as:fe.Item,className:Z("ui-reorder__item",u),value:t,__css:E,...l,dragListener:!i,dragControls:x,"data-selected":pe(s),style:{...l.style,x:B,y:h}})})});r.displayName="ReorderItem";const[Xe,Ae]=Ee({name:"ReorderContext",errorMessage:`useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`}),Ke=u=>Array.from(new Set(u)),Qe=u=>u.filter((t,l,C)=>C.indexOf(t)===l&&l!==C.lastIndexOf(t)),c=n.forwardRef((u,t)=>{const[l,C]=Ve("Reorder",u),{className:a,orientation:d="vertical",gap:x="fallback(4, 1rem)",items:i=[],onChange:o,onCompleteChange:s,children:b,...B}=ke(C),h=d==="vertical"?"y":"x",m=Oe(b),E=!!m.length,R=n.useMemo(()=>{const p=E?m.map(({props:g})=>g.label):i.map(({label:g})=>g),f=Qe(p);return f.length&&console.warn(`Reorder: 'label' of 'ReorderItem' must not be duplicated. duplicate 'label' is '${f.join("', '")}' `),Ke(p)},[E,m,i]),I=n.useRef(R),[F,j]=n.useState(R),z=n.useRef(R),ge=n.useCallback(p=>{j(p),o==null||o(p)},[o]),G=n.useCallback(()=>{JSON.stringify(z.current)!==JSON.stringify(F)&&(z.current=F,s==null||s(F))},[s,F]);_e(()=>{JSON.stringify(R)!==JSON.stringify(I.current)&&(z.current=R,I.current=R,j(R))},[R]);const De=n.useMemo(()=>F.map(p=>{if(E)return m.find(({props:f})=>f.label===p);{const f=i.find(({label:g})=>g===p);return f?e.jsx(r,{...f},f.label):null}}),[F,E,m,i]),ye={display:"flex",flexDirection:d==="vertical"?"column":"row",gap:x,...l.container};return e.jsx(Xe,{value:{orientation:d,styles:l},children:e.jsx(N.ul,{ref:t,as:fe.Group,className:Z("ui-reorder",a),axis:h,values:F,onReorder:ge,__css:ye,...B,onMouseUp:k(B.onMouseUp,G),onTouchEnd:k(B.onTouchEnd,G),children:De})})});c.displayName="Reorder";const q=Ze(({className:u,children:t=e.jsx(er,{}),...l},C)=>{const{styles:a}=Ae(),{register:d,isDrag:x,dragControls:i}=We(),o={display:"flex",justifyContent:"center",alignItems:"center",cursor:"grab",_selected:{cursor:"grabbing"},...a.trigger};return e.jsx(N.div,{ref:ze(d,C),className:Z("ui-reorder__trigger",u),__css:o,...l,"data-selected":pe(x),onPointerDown:k(l.onPointerDown,s=>i.start(s)),children:t})}),er=u=>e.jsxs(Ne,{viewBox:"0 0 39 39",...u,children:[e.jsx("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z",fill:"currentColor"})]}),hr={title:"Components / Data Display / Reorder",component:c},D=()=>e.jsxs(c,{children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),y=()=>{const u=n.useMemo(()=>[{label:"ギニュー",children:"ギニュー"},{label:"リクーム",children:"リクーム"},{label:"バータ",children:"バータ"},{label:"ジース",children:"ジース"},{label:"グルド",children:"グルド"}],[]);return e.jsx(c,{items:u})},S=()=>e.jsxs(e.Fragment,{children:[e.jsxs(c,{orientation:"vertical",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(c,{orientation:"horizontal",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsxs(c,{size:"sm",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(c,{size:"md",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(c,{size:"normal",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(c,{size:"lg",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]})]}),w=()=>e.jsxs(e.Fragment,{children:[e.jsxs(c,{variant:"outline",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(c,{variant:"elevated",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(c,{variant:"unstyled",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]})]}),M=()=>e.jsxs(c,{children:[e.jsx(r,{label:"孫悟空",children:e.jsxs(H,{children:[e.jsx(q,{}),e.jsx($,{children:"孫悟空"})]})}),e.jsx(r,{label:"ベジータ",children:e.jsxs(H,{children:[e.jsx(q,{children:e.jsx(Ge,{})}),e.jsx($,{children:"ベジータ"})]})})]}),T=()=>e.jsxs(c,{onChange:u=>console.log(`changed '${u.join("', '")}'`),children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),O=()=>e.jsxs(c,{onCompleteChange:u=>console.log(`completed '${u.join("', '")}'`),children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),_=()=>e.jsxs(c,{h:"xs",p:"md",borderWidth:"1px",rounded:"md",overflowY:"scroll",layoutScroll:!0,tabIndex:0,outline:"0",_focusVisible:{boxShadow:"outline"},children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]});var J,L,U;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(U=(L=D.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var Y,W,X;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const items = useMemo<ReorderGenerateItem[]>(() => [{
    label: "ギニュー",
    children: "ギニュー"
  }, {
    label: "リクーム",
    children: "リクーム"
  }, {
    label: "バータ",
    children: "バータ"
  }, {
    label: "ジース",
    children: "ジース"
  }, {
    label: "グルド",
    children: "グルド"
  }], []);
  return <Reorder items={items} />;
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var K,Q,ee;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...(ee=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var re,ue,ne;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(ne=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ne.source}}};var te,le,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(oe=(le=w.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var se,ae,de;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
            <Ghost />
          </ReorderTrigger>
          <Text>ベジータ</Text>
        </HStack>
      </ReorderItem>
    </Reorder>;
}`,...(de=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ie,ce,me;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Reorder onChange={labels => console.log(\`changed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(me=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var Ce,Re,be;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <Reorder onCompleteChange={labels => console.log(\`completed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(be=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:be.source}}};var Be,Fe,xe;_.parameters={..._.parameters,docs:{...(Be=_.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <Reorder h="xs" p="md" borderWidth="1px" rounded="md" overflowY="scroll" layoutScroll tabIndex={0} outline="0" _focusVisible={{
    boxShadow: "outline"
  }}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(xe=(Fe=_.parameters)==null?void 0:Fe.docs)==null?void 0:xe.source}}};const Ir=["basic","withItems","withOrientation","withSize","withVariant","withTrigger","withOnChange","withOnCompleteChange","useContainerScroll"];export{Ir as __namedExportsOrder,D as basic,hr as default,_ as useContainerScroll,y as withItems,T as withOnChange,O as withOnCompleteChange,S as withOrientation,v as withSize,M as withTrigger,w as withVariant};
