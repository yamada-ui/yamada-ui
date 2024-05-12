import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{I as pe,f as fe}from"./fontawesome-icon-DZ7LyXjv.js";import{r as t}from"./index-BwDkhjyp.js";import{g as ge,h as Ae,u as Ce,m as Re,i as De}from"./motion-B93Hlbuy.js";import{u as ye,a as O}from"./use-transform-BDOr-Ezc.js";import{l as xe,t as ve,f as Se,u as z,c as V,h as _,d as be,a as we}from"./factory-QgPjGyGX.js";import{a as Me}from"./use-component-style-Dz3o-zMC.js";import{o as Te}from"./theme-provider-CJ7n5K3X.js";import{u as Oe}from"./use-drag-controls-B6dBGO-d.js";import{D as f}from"./divider-r8Z6ndbZ.js";import{b as _e}from"./icon-BzYp-3aP.js";import{f as ze}from"./forward-ref-BmTAT9U5.js";import{H as N}from"./stack-BPGCIIRz.js";import{T as Z}from"./text-B7mQIKcl.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./index-NB1UEv68.js";const Be=t.createContext(null);function Ve(u,o,n,x){if(!x)return u;const a=u.findIndex(m=>m.value===o);if(a===-1)return u;const d=x>0?1:-1,B=u[a+d];if(!B)return u;const i=u[a],l=B.layout,c=ge(l.min,l.max,.5);return d===1&&i.layout.max+n>c||d===-1&&i.layout.min+n<c?Ae(u,a,a+d):u}function ke({children:u,as:o="ul",axis:n="y",onReorder:x,values:a,...d},B){const i=Ce(()=>Re(o)),l=[],c=t.useRef(!1),m={axis:n,registerItem:(F,C)=>{C&&l.findIndex(s=>F===s.value)===-1&&(l.push({value:F,layout:C[n]}),l.sort(Pe))},updateOrder:(F,C,s)=>{if(c.current)return;const E=Ve(l,F,C,s);l!==E&&(c.current=!0,x(E.map(Ze).filter(b=>a.indexOf(b)!==-1)))}};return t.useEffect(()=>{c.current=!1}),t.createElement(i,{...d,ref:B,ignoreStrict:!0},t.createElement(Be.Provider,{value:m},u))}const Ne=t.forwardRef(ke);function Ze(u){return u.value}function Pe(u,o){return u.layout.min-o.layout.min}function P(u,o=0){return De(u)?u:O(o)}function $e({children:u,style:o={},value:n,as:x="li",onDrag:a,layout:d=!0,...B},i){const l=Ce(()=>Re(x)),c=t.useContext(Be),m={x:P(o.x),y:P(o.y)},F=ye([m.x,m.y],([I,h])=>I||h?1:"unset"),C=t.useRef(null),{axis:s,registerItem:E,updateOrder:b}=c;return t.useEffect(()=>{E(n,C.current)},[c]),t.createElement(l,{drag:s,...B,dragSnapToOrigin:!0,style:{...o,x:m.x,y:m.y,zIndex:F},layout:d,onDrag:(I,h)=>{const{velocity:p}=h;p[s]&&b(n,m[s].get(),p[s]),a&&a(I,h)},onLayoutMeasure:I=>{C.current=I},ref:i,ignoreStrict:!0},u)}const He=t.forwardRef($e),Fe={Group:Ne,Item:He},[qe,Ie]=xe({name:"ReorderContext",errorMessage:`useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`}),Je=u=>Array.from(new Set(u)),Le=u=>u.filter((o,n,x)=>x.indexOf(o)===n&&n!==x.lastIndexOf(o)),R=t.forwardRef((u,o)=>{const[n,x]=Me("Reorder",u),{className:a,orientation:d="vertical",gap:B="fallback(4, 1rem)",onChange:i,onCompleteChange:l,children:c,...m}=Te(x),F=d==="vertical"?"y":"x",C=ve(c),s=t.useMemo(()=>{const j=C.map(({props:je})=>je.label),g=Le(j);return g.length&&console.warn(`Reorder: 'label' of 'ReorderItem' must not be duplicated. duplicate 'label' is '${g.join("', '")}' `),Je(j)},[C]),E=t.useRef(s),[b,I]=t.useState(s),h=t.useRef(s),p=t.useCallback(j=>{I(j),i==null||i(j)},[i]),k=t.useCallback(()=>{JSON.stringify(h.current)!==JSON.stringify(b)&&(h.current=b,l==null||l(b))},[l,b]);Se(()=>{JSON.stringify(s)!==JSON.stringify(E.current)&&(h.current=s,E.current=s,I(s))},[s]);const he=t.useMemo(()=>b.map(j=>C.find(({props:g})=>g.label===j)),[b,C]),Ee={display:"flex",flexDirection:d==="vertical"?"column":"row",gap:B,...n.container};return e.jsx(qe,{value:{orientation:d,styles:n},children:e.jsx(z.ul,{ref:o,as:Fe.Group,className:V("ui-reorder",a),axis:F,values:b,onReorder:p,__css:Ee,...m,onMouseUp:_(m.onMouseUp,k),onTouchEnd:_(m.onTouchEnd,k),children:he})})});R.displayName="Reorder";const[Ge,Ue]=xe({name:"ReorderContext",errorMessage:`useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`}),r=t.forwardRef(({className:u,label:o,...n},x)=>{var b;const{orientation:a,styles:d}=Ie(),B=Oe(),[i,l]=t.useState(!1),[c,m]=t.useState(!1),F=O(0),C=O(0),s=t.useCallback(I=>l(!!I),[]);t.useEffect(()=>{const I=F.on("change",p=>{a==="horizontal"&&m(p!==0)}),h=C.on("change",p=>{a==="vertical"&&m(p!==0)});return()=>{I(),h()}},[a,F,C]);const E={...i?{userSelect:"none"}:{cursor:"grab"},...d.item,...i?{}:{_selected:{...(b=d.item)==null?void 0:b._selected,cursor:"grabbing"}}};return e.jsx(Ge,{value:{register:s,isDrag:c,dragControls:B},children:e.jsx(z.li,{ref:x,as:Fe.Item,className:V("ui-reorder__item",u),value:o,__css:E,...n,dragListener:!i,dragControls:B,"data-selected":be(c),style:{...n.style,x:F,y:C}})})});r.displayName="ReorderItem";const $=ze(({className:u,children:o=e.jsx(Ye,{}),...n},x)=>{const{styles:a}=Ie(),{register:d,isDrag:B,dragControls:i}=Ue(),l={display:"flex",justifyContent:"center",alignItems:"center",cursor:"grab",_selected:{cursor:"grabbing"},...a.trigger};return e.jsx(z.div,{ref:we(d,x),className:V("ui-reorder__trigger",u),__css:l,...n,"data-selected":be(B),onPointerDown:_(n.onPointerDown,c=>i.start(c)),children:o})}),Ye=u=>e.jsxs(_e,{viewBox:"0 0 39 39",...u,children:[e.jsx("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z",fill:"currentColor"})]}),Rr={title:"Components / Data Display / Reorder",component:R},A=()=>e.jsxs(R,{children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsxs(R,{orientation:"vertical",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{orientation:"horizontal",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsxs(R,{size:"sm",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{size:"md",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{size:"normal",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{size:"lg",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsxs(R,{variant:"outline",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{variant:"elevated",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{variant:"unstyled",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]})]}),S=()=>e.jsxs(R,{children:[e.jsx(r,{label:"孫悟空",children:e.jsxs(N,{children:[e.jsx($,{}),e.jsx(Z,{children:"孫悟空"})]})}),e.jsx(r,{label:"ベジータ",children:e.jsxs(N,{children:[e.jsx($,{children:e.jsx(pe,{icon:fe})}),e.jsx(Z,{children:"ベジータ"})]})})]}),w=()=>e.jsxs(R,{onChange:u=>console.log(`changed '${u.join("', '")}'`),children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),M=()=>e.jsxs(R,{onCompleteChange:u=>console.log(`completed '${u.join("', '")}'`),children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),T=()=>e.jsxs(R,{h:"xs",p:"md",borderWidth:"1px",rounded:"md",overflowY:"scroll",layoutScroll:!0,tabIndex:0,outline:"0",_focusVisible:{boxShadow:"outline"},children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]});var H,q,J;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(J=(q=A.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var L,G,U;D.parameters={...D.parameters,docs:{...(L=D.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(U=(G=D.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Y,W,X;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var K,Q,ee;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...(ee=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var re,ue,te;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(te=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:te.source}}};var oe,ne,le;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Reorder onChange={labels => console.log(\`changed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(le=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var se,ae,de;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Reorder onCompleteChange={labels => console.log(\`completed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(de=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ie,ce,me;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Reorder h="xs" p="md" borderWidth="1px" rounded="md" overflowY="scroll" layoutScroll tabIndex={0} outline="0" _focusVisible={{
    boxShadow: "outline"
  }}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(me=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const xr=["basic","withOrientation","withSize","withVariant","withTrigger","withOnChange","withOnCompleteChange","useContainerScroll"];export{xr as __namedExportsOrder,A as basic,Rr as default,T as useContainerScroll,w as withOnChange,M as withOnCompleteChange,D as withOrientation,y as withSize,S as withTrigger,v as withVariant};
