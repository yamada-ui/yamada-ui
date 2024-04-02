import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as je,f as pe}from"./fontawesome-icon-DGDeQFte.js";import{r as t}from"./index-CBqU2yxZ.js";import{g as fe,h as ge,u as me,m as Ce,i as Ae}from"./motion-JgkBPv6g.js";import{u as De,a as O}from"./use-transform-Dp4yh7b6.js";import{r as Re,x as ye,e as ve,u as z,c as V,h as _,A as xe,a as Se}from"./factory-BVMa8fXZ.js";import{a as we}from"./use-component-style-DFx-AFMQ.js";import{o as Me}from"./theme-provider-BXaPRWNI.js";import{u as Te}from"./use-drag-controls-C8JsjTcm.js";import{D as f}from"./divider-BejJTbA7.js";import{b as Oe}from"./icon-BlEaeaZb.js";import{f as _e}from"./forward-ref-DuAegr0M.js";import{H as k}from"./stack-Y-4i-p3Z.js";import{T as N}from"./text-CocBWv30.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtoBQEmV.js";const be=t.createContext(null);function ze(u,o,n,x){if(!x)return u;const s=u.findIndex(m=>m.value===o);if(s===-1)return u;const a=x>0?1:-1,B=u[s+a];if(!B)return u;const d=u[s],l=B.layout,c=fe(l.min,l.max,.5);return a===1&&d.layout.max+n>c||a===-1&&d.layout.min+n<c?ge(u,s,s+a):u}function Ve({children:u,as:o="ul",axis:n="y",onReorder:x,values:s,...a},B){const d=me(()=>Ce(o)),l=[],c=t.useRef(!1),m={axis:n,registerItem:(F,C)=>{C&&l.findIndex(i=>F===i.value)===-1&&(l.push({value:F,layout:C[n]}),l.sort(Ze))},updateOrder:(F,C,i)=>{if(c.current)return;const h=ze(l,F,C,i);l!==h&&(c.current=!0,x(h.map(Ne).filter(b=>s.indexOf(b)!==-1)))}};return t.useEffect(()=>{c.current=!1}),t.createElement(d,{...a,ref:B,ignoreStrict:!0},t.createElement(be.Provider,{value:m},u))}const ke=t.forwardRef(Ve);function Ne(u){return u.value}function Ze(u,o){return u.layout.min-o.layout.min}function Z(u,o=0){return Ae(u)?u:O(o)}function Pe({children:u,style:o={},value:n,as:x="li",onDrag:s,layout:a=!0,...B},d){const l=me(()=>Ce(x)),c=t.useContext(be),m={x:Z(o.x),y:Z(o.y)},F=De([m.x,m.y],([I,p])=>I||p?1:"unset"),C=t.useRef(null),{axis:i,registerItem:h,updateOrder:b}=c;return t.useEffect(()=>{h(n,C.current)},[c]),t.createElement(l,{drag:i,...B,dragSnapToOrigin:!0,style:{...o,x:m.x,y:m.y,zIndex:F},layout:a,onDrag:(I,p)=>{const{velocity:E}=p;E[i]&&b(n,m[i].get(),E[i]),s&&s(I,p)},onLayoutMeasure:I=>{C.current=I},ref:d,ignoreStrict:!0},u)}const $e=t.forwardRef(Pe),Be={Group:ke,Item:$e},[He,Fe]=Re({name:"ReorderContext",errorMessage:`useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`}),qe=u=>Array.from(new Set(u)),Je=u=>u.filter((o,n,x)=>x.indexOf(o)===n&&n!==x.lastIndexOf(o)),R=t.forwardRef((u,o)=>{const[n,x]=we("Reorder",u),{className:s,orientation:a="vertical",gap:B="1rem",onChange:d,onCompleteChange:l,children:c,...m}=Me(x),F=a==="vertical"?"y":"x",C=ye(c),i=t.useMemo(()=>{const j=C.map(({props:Ee})=>Ee.label),g=Je(j);return g.length&&console.warn(`Reorder: 'label' of 'ReorderItem' must not be duplicated. duplicate 'label' is '${g.join("', '")}' `),qe(j)},[C]),h=t.useRef(i),[b,I]=t.useState(i),p=t.useCallback(j=>{I(j),d==null||d(j)},[d]),E=t.useCallback(()=>{JSON.stringify(h.current)!==JSON.stringify(b)&&(h.current=b,l==null||l(b))},[l,b]);ve(()=>{JSON.stringify(i)!==JSON.stringify(b)&&(h.current=i,I(i))},[i]);const Ie=t.useMemo(()=>b.map(j=>C.find(({props:g})=>g.label===j)),[b,C]),he={display:"flex",flexDirection:a==="vertical"?"column":"row",gap:B,...n.container};return e.jsx(He,{value:{orientation:a,styles:n},children:e.jsx(z.ul,{ref:o,as:Be.Group,className:V("ui-reorder",s),axis:F,values:b,onReorder:p,__css:he,...m,onMouseUp:_(m.onMouseUp,E),onTouchEnd:_(m.onTouchEnd,E),children:Ie})})});R.displayName="Reorder";const[Le,Ge]=Re({name:"ReorderContext",errorMessage:`useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`}),r=t.forwardRef(({className:u,label:o,...n},x)=>{var b;const{orientation:s,styles:a}=Fe(),B=Te(),[d,l]=t.useState(!1),[c,m]=t.useState(!1),F=O(0),C=O(0),i=t.useCallback(I=>l(!!I),[]);t.useEffect(()=>{const I=F.on("change",E=>{s==="horizontal"&&m(E!==0)}),p=C.on("change",E=>{s==="vertical"&&m(E!==0)});return()=>{I(),p()}},[s,F,C]);const h={...d?{userSelect:"none"}:{cursor:"grab"},...a.item,...d?{}:{_selected:{...(b=a.item)==null?void 0:b._selected,cursor:"grabbing"}}};return e.jsx(Le,{value:{register:i,isDrag:c,dragControls:B},children:e.jsx(z.li,{ref:x,as:Be.Item,className:V("ui-reorder__item",u),value:o,__css:h,...n,dragListener:!d,dragControls:B,"data-selected":xe(c),style:{...n.style,x:F,y:C}})})});r.displayName="ReorderItem";const P=_e(({className:u,children:o=e.jsx(Ue,{}),...n},x)=>{const{styles:s}=Fe(),{register:a,isDrag:B,dragControls:d}=Ge(),l={display:"flex",justifyContent:"center",alignItems:"center",cursor:"grab",_selected:{cursor:"grabbing"},...s.trigger};return e.jsx(z.div,{ref:Se(a,x),className:V("ui-reorder__trigger",u),__css:l,...n,"data-selected":xe(B),onPointerDown:_(n.onPointerDown,c=>d.start(c)),children:o})}),Ue=u=>e.jsxs(Oe,{viewBox:"0 0 39 39",...u,children:[e.jsx("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z",fill:"currentColor"})]}),Cr={title:"Components / Data Display / Reorder",component:R},A=()=>e.jsxs(R,{children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsxs(R,{orientation:"vertical",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{orientation:"horizontal",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsxs(R,{size:"sm",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{size:"md",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{size:"normal",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{size:"lg",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsxs(R,{variant:"outline",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{variant:"elevated",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),e.jsx(f,{}),e.jsxs(R,{variant:"unstyled",children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]})]}),S=()=>e.jsxs(R,{children:[e.jsx(r,{label:"孫悟空",children:e.jsxs(k,{children:[e.jsx(P,{}),e.jsx(N,{children:"孫悟空"})]})}),e.jsx(r,{label:"ベジータ",children:e.jsxs(k,{children:[e.jsx(P,{children:e.jsx(je,{icon:pe})}),e.jsx(N,{children:"ベジータ"})]})})]}),w=()=>e.jsxs(R,{onChange:u=>console.log(`changed '${u.join("', '")}'`),children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),M=()=>e.jsxs(R,{onCompleteChange:u=>console.log(`completed '${u.join("', '")}'`),children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]}),T=()=>e.jsxs(R,{h:"xs",p:"md",borderWidth:"1px",rounded:"md",overflowY:"scroll",layoutScroll:!0,tabIndex:0,outline:"0",_focusVisible:{boxShadow:"outline"},children:[e.jsx(r,{label:"ギニュー",children:"ギニュー"}),e.jsx(r,{label:"リクーム",children:"リクーム"}),e.jsx(r,{label:"バータ",children:"バータ"}),e.jsx(r,{label:"ジース",children:"ジース"}),e.jsx(r,{label:"グルド",children:"グルド"})]});var $,H,q;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(q=(H=A.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var J,L,G;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(G=(L=D.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var U,Y,W;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(W=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var X,K,Q;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var ee,re,ue;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(ue=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ue.source}}};var te,oe,ne;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Reorder onChange={labels => console.log(\`changed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(ne=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,se,ae;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Reorder onCompleteChange={labels => console.log(\`completed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(ae=(se=M.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var de,ie,ce;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Reorder h="xs" p="md" borderWidth="1px" rounded="md" overflowY="scroll" layoutScroll tabIndex={0} outline="0" _focusVisible={{
    boxShadow: "outline"
  }}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(ce=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Rr=["basic","withOrientation","withSize","withVariant","withTrigger","withOnChange","withOnCompleteChange","useContainerScroll"];export{Rr as __namedExportsOrder,A as basic,Cr as default,T as useContainerScroll,w as withOnChange,M as withOnCompleteChange,D as withOrientation,y as withSize,S as withTrigger,v as withVariant};
