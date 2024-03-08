import{j as e,a as l,F as k}from"./jsx-runtime-5BUNAZ9W.js";import{I as Ae,f as xe}from"./fontawesome-icon-kJVn1H4H.js";import{r as o}from"./index-4g5l5LRQ.js";import{g as De,h as ye,u as Re,m as be,i as ve}from"./motion-heeYkzTb.js";import{u as Se,a as z}from"./use-transform-7JH9eBoL.js";import{c as Be,v as we,e as Me,u as N,a as j,h as V,K as Fe,w as Te}from"./factory-d4qha7R6.js";import{u as Oe}from"./use-component-style-d9n8R3cE.js";import{o as _e}from"./theme-provider-bBWP4weD.js";import{u as ze}from"./use-drag-controls-NMonVrXY.js";import{D as x}from"./divider-30FbgPs8.js";import{b as Ve}from"./icon-hF0n87st.js";import{f as ke}from"./forward-ref-A-8Arhkk.js";import{H as Z}from"./stack-wIOq24gw.js";import{T as P}from"./text-puUo1HSE.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./index-gPPkT-3X.js";const Ie=o.createContext(null);function Ne(u,t,n,B){if(!B)return u;const d=u.findIndex(C=>C.value===t);if(d===-1)return u;const i=B>0?1:-1,I=u[d+i];if(!I)return u;const s=u[d],a=I.layout,m=De(a.min,a.max,.5);return i===1&&s.layout.max+n>m||i===-1&&s.layout.min+n<m?ye(u,d,d+i):u}function je({children:u,as:t="ul",axis:n="y",onReorder:B,values:d,...i},I){const s=Re(()=>be(t)),a=[],m=o.useRef(!1),C={axis:n,registerItem:(h,R)=>{R&&a.findIndex(c=>h===c.value)===-1&&(a.push({value:h,layout:R[n]}),a.sort($e))},updateOrder:(h,R,c)=>{if(m.current)return;const p=Ne(a,h,R,c);a!==p&&(m.current=!0,B(p.map(Pe).filter(F=>d.indexOf(F)!==-1)))}};return o.useEffect(()=>{m.current=!1}),o.createElement(s,{...i,ref:I,ignoreStrict:!0},o.createElement(Ie.Provider,{value:C},u))}const Ze=o.forwardRef(je);function Pe(u){return u.value}function $e(u,t){return u.layout.min-t.layout.min}function $(u,t=0){return ve(u)?u:z(t)}function He({children:u,style:t={},value:n,as:B="li",onDrag:d,layout:i=!0,...I},s){const a=Re(()=>be(B)),m=o.useContext(Ie),C={x:$(t.x),y:$(t.y)},h=Se([C.x,C.y],([E,A])=>E||A?1:"unset"),R=o.useRef(null),{axis:c,registerItem:p,updateOrder:F}=m;return o.useEffect(()=>{p(n,R.current)},[m]),o.createElement(a,{drag:c,...I,dragSnapToOrigin:!0,style:{...t,x:C.x,y:C.y,zIndex:h},layout:i,onDrag:(E,A)=>{const{velocity:f}=A;f[c]&&F(n,C[c].get(),f[c]),d&&d(E,A)},onLayoutMeasure:E=>{R.current=E},ref:s,ignoreStrict:!0},u)}const qe=o.forwardRef(He),he={Group:Ze,Item:qe},[Je,Ee]=Be({name:"ReorderContext",errorMessage:`useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`}),Le=u=>Array.from(new Set(u)),Ge=u=>u.filter((t,n,B)=>B.indexOf(t)===n&&n!==B.lastIndexOf(t)),b=o.forwardRef((u,t)=>{const[n,B]=Oe("Reorder",u),{className:d,orientation:i="vertical",gap:I="md",onChange:s,onCompleteChange:a,children:m,...C}=_e(B),h=i==="vertical"?"y":"x",R=we(m),c=o.useMemo(()=>{const g=R.map(({props:ge})=>ge.label),D=Ge(g);return D.length&&console.warn(`Reorder: 'label' of 'ReorderItem' must not be duplicated. duplicate 'label' is '${D.join("', '")}' `),Le(g)},[R]),p=o.useRef(c),[F,E]=o.useState(c),A=o.useCallback(g=>{E(g),s==null||s(g)},[s]),f=o.useCallback(()=>{JSON.stringify(p.current)!==JSON.stringify(F)&&(p.current=F,a==null||a(F))},[a,F]);Me(()=>{JSON.stringify(c)!==JSON.stringify(F)&&(p.current=c,E(c))},[c]);const pe=o.useMemo(()=>F.map(g=>R.find(({props:D})=>D.label===g)),[F,R]),fe={display:"flex",flexDirection:i==="vertical"?"column":"row",gap:I,...n.container};return e(Je,{value:{orientation:i,styles:n},children:e(N.ul,{ref:t,as:he.Group,className:j("ui-reorder",d),axis:h,values:F,onReorder:A,__css:fe,...C,onMouseUp:V(C.onMouseUp,f),onTouchEnd:V(C.onTouchEnd,f),children:pe})})});b.displayName="Reorder";const[Ue,Ye]=Be({name:"ReorderContext",errorMessage:`useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`}),r=o.forwardRef(({className:u,label:t,...n},B)=>{var F;const{orientation:d,styles:i}=Ee(),I=ze(),[s,a]=o.useState(!1),[m,C]=o.useState(!1),h=z(0),R=z(0),c=o.useCallback(E=>a(!!E),[]);o.useEffect(()=>{const E=h.on("change",f=>{d==="horizontal"&&C(f!==0)}),A=R.on("change",f=>{d==="vertical"&&C(f!==0)});return()=>{E(),A()}},[d,h,R]);const p={...s?{userSelect:"none"}:{cursor:"grab"},...i.item,...s?{}:{_selected:{...(F=i.item)==null?void 0:F._selected,cursor:"grabbing"}}};return e(Ue,{value:{register:c,isDrag:m,dragControls:I},children:e(N.li,{ref:B,as:he.Item,className:j("ui-reorder__item",u),value:t,__css:p,...n,dragListener:!s,dragControls:I,"data-selected":Fe(m),style:{...n.style,x:h,y:R}})})});r.displayName="ReorderItem";const H=ke(({className:u,children:t=e(We,{}),...n},B)=>{const{styles:d}=Ee(),{register:i,isDrag:I,dragControls:s}=Ye(),a={display:"flex",justifyContent:"center",alignItems:"center",cursor:"grab",_selected:{cursor:"grabbing"},...d.trigger};return e(N.div,{ref:Te(i,B),className:j("ui-reorder__trigger",u),__css:a,...n,"data-selected":Fe(I),onPointerDown:V(n.onPointerDown,m=>s.start(m)),children:t})}),We=u=>l(Ve,{viewBox:"0 0 39 39",...u,children:[e("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),e("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),e("path",{d:"M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z",fill:"currentColor"}),e("path",{d:"M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z",fill:"currentColor"}),e("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),e("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),e("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),e("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"}),e("path",{d:"M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z",fill:"currentColor"})]}),br={title:"Components / Data Display / Reorder",component:b},y=()=>l(b,{children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),v=()=>l(k,{children:[l(b,{orientation:"vertical",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(x,{}),l(b,{orientation:"horizontal",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),S=()=>l(k,{children:[l(b,{size:"sm",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(x,{}),l(b,{size:"md",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(x,{}),l(b,{size:"normal",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(x,{}),l(b,{size:"lg",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),w=()=>l(k,{children:[l(b,{variant:"outline",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(x,{}),l(b,{variant:"elevated",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(x,{}),l(b,{variant:"unstyled",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),M=()=>l(b,{children:[e(r,{label:"孫悟空",children:l(Z,{children:[e(H,{}),e(P,{children:"孫悟空"})]})}),e(r,{label:"ベジータ",children:l(Z,{children:[e(H,{children:e(Ae,{icon:xe})}),e(P,{children:"ベジータ"})]})})]}),T=()=>l(b,{onChange:u=>console.log(`changed '${u.join("', '")}'`),children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),O=()=>l(b,{onCompleteChange:u=>console.log(`completed '${u.join("', '")}'`),children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),_=()=>l(b,{h:"xs",p:"md",borderWidth:"1px",rounded:"md",overflowY:"scroll",layoutScroll:!0,tabIndex:0,outline:"0",_focusVisible:{boxShadow:"outline"},children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]});var q,J,L;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(L=(J=y.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var G,U,Y;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(Y=(U=v.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var W,K,X;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(X=(K=S.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Q,ee,re;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(ae=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var de,ie,se;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Reorder onCompleteChange={labels => console.log(\`completed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(se=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,me,Ce;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Reorder h="xs" p="md" borderWidth="1px" rounded="md" overflowY="scroll" layoutScroll tabIndex={0} outline="0" _focusVisible={{
    boxShadow: "outline"
  }}>
      <ReorderItem label="ギニュー">ギニュー</ReorderItem>
      <ReorderItem label="リクーム">リクーム</ReorderItem>
      <ReorderItem label="バータ">バータ</ReorderItem>
      <ReorderItem label="ジース">ジース</ReorderItem>
      <ReorderItem label="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(Ce=(me=_.parameters)==null?void 0:me.docs)==null?void 0:Ce.source}}};const Br=["basic","withOrientation","withSize","withVariant","withTrigger","withOnChange","withOnCompleteChange","useContainerScroll"];export{Br as __namedExportsOrder,y as basic,br as default,_ as useContainerScroll,T as withOnChange,O as withOnCompleteChange,v as withOrientation,S as withSize,M as withTrigger,w as withVariant};
