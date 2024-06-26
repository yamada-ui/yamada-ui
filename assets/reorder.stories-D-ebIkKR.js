import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as s}from"./index-BwDkhjyp.js";import{u as ye}from"./use-drag-controls-DhAAYE9j.js";import{u as Se,a as k}from"./use-transform-CJZ50l0W.js";import{k as we,n as Me,u as he,m as Ee,i as Te}from"./motion-DkeuV4DN.js";import{l as je,b as Z,c as G,d as pe,t as Oe,f as _e,h as N,a as ze}from"./factory-CJjTzqIw.js";import{a as Ve}from"./use-component-style-BHPJug4L.js";import{o as ke}from"./theme-provider-QhVoByOm.js";import{D as A}from"./divider-D5TiSSZB.js";import{b as Ne}from"./icon-932iDb3I.js";import{f as Ze}from"./forward-ref-BmTAT9U5.js";import{H as $}from"./stack-DAUYtLCM.js";import{T as P}from"./text-rr6Q65aJ.js";import{G as Ge}from"./ghost-Bb9dtjBQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DARK8rH5.js";import"./lucide-icon-DuYAgJii.js";const fe=s.createContext(null);function He(u,t,o,R){if(!R)return u;const d=u.findIndex(x=>x.value===t);if(d===-1)return u;const c=R>0?1:-1,B=u[d+c];if(!B)return u;const m=u[d],n=B.layout,a=we(n.min,n.max,.5);return c===1&&m.layout.max+o>a||c===-1&&m.layout.min+o<a?Me(u,d,d+c):u}function $e({children:u,as:t="ul",axis:o="y",onReorder:R,values:d,...c},B){const m=he(()=>Ee(t)),n=[],a=s.useRef(!1),x={axis:o,registerItem:(I,F)=>{const C=n.findIndex(v=>I===v.value);C!==-1?n[C].layout=F[o]:n.push({value:I,layout:F[o]}),n.sort(Je)},updateOrder:(I,F,C)=>{if(a.current)return;const v=He(n,I,F,C);n!==v&&(a.current=!0,R(v.map(qe).filter(l=>d.indexOf(l)!==-1)))}};return s.useEffect(()=>{a.current=!1}),e.jsx(m,{...c,ref:B,ignoreStrict:!0,children:e.jsx(fe.Provider,{value:x,children:u})})}const Pe=s.forwardRef($e);function qe(u){return u.value}function Je(u,t){return u.layout.min-t.layout.min}function q(u,t=0){return Te(u)?u:k(t)}function Le({children:u,style:t={},value:o,as:R="li",onDrag:d,layout:c=!0,...B},m){const n=he(()=>Ee(R)),a=s.useContext(fe),x={x:q(t.x),y:q(t.y)},I=Se([x.x,x.y],([l,E])=>l||E?1:"unset"),{axis:F,registerItem:C,updateOrder:v}=a;return e.jsx(n,{drag:F,...B,dragSnapToOrigin:!0,style:{...t,x:x.x,y:x.y,zIndex:I},layout:c,onDrag:(l,E)=>{const{velocity:h}=E;h[F]&&v(o,x[F].get(),h[F]),d&&d(l,E)},onLayoutMeasure:l=>C(o,l),ref:m,ignoreStrict:!0,children:u})}const Ue=s.forwardRef(Le),ge={Group:Pe,Item:Ue},[Ye,We]=je({name:"ReorderContext",errorMessage:`useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`}),r=s.forwardRef(({className:u,label:t,value:o,children:R,...d},c)=>{var h;const{orientation:B,styles:m}=Ae(),n=ye(),[a,x]=s.useState(!1),[I,F]=s.useState(!1),C=k(0),v=k(0),l=s.useCallback(f=>x(!!f),[]);s.useEffect(()=>{const f=C.on("change",b=>{B==="horizontal"&&F(b!==0)}),D=v.on("change",b=>{B==="vertical"&&F(b!==0)});return()=>{f(),D()}},[B,C,v]);const E={_selected:{cursor:"grabbing"},...a?{userSelect:"none"}:{cursor:"grab"},...m.item,...a?{}:{_selected:{...(h=m.item)==null?void 0:h._selected,cursor:"grabbing"}}};return e.jsx(Ye,{value:{register:l,isDrag:I,dragControls:n},children:e.jsx(Z.li,{ref:c,as:ge.Item,className:G("ui-reorder__item",u),value:o,__css:E,...d,dragListener:!a,dragControls:n,"data-selected":pe(I),style:{...d.style,x:C,y:v},children:R??t})})});r.displayName="ReorderItem";const[Xe,Ae]=je({name:"ReorderContext",errorMessage:`useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`}),Ke=u=>Array.from(new Set(u)),Qe=u=>u.filter((t,o,R)=>R.indexOf(t)===o&&o!==R.lastIndexOf(t)),i=s.forwardRef((u,t)=>{const[o,R]=Ve("Reorder",u),{className:d,orientation:c="vertical",gap:B="fallback(4, 1rem)",items:m=[],onChange:n,onCompleteChange:a,children:x,...I}=ke(R),F=c==="vertical"?"y":"x",C=Oe(x),v=!!C.length,l=s.useMemo(()=>{const j=v?C.map(({props:g})=>g.value):m.map(({value:g})=>g),p=Qe(j);return p.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${p.join("', '")}' `),Ke(j)},[v,C,m]),E=s.useRef(l),[h,f]=s.useState(l),D=s.useRef(l),b=s.useCallback(j=>{f(j),n==null||n(j)},[n]),H=s.useCallback(()=>{JSON.stringify(D.current)!==JSON.stringify(h)&&(D.current=h,a==null||a(h))},[a,h]);_e(()=>{JSON.stringify(l)!==JSON.stringify(E.current)&&(D.current=l,E.current=l,f(l))},[l]);const De=s.useMemo(()=>h.map(j=>{if(v)return C.find(({props:p})=>p.value===j);{const p=m.find(({value:g})=>g===g);return p?e.jsx(r,{...p},p.value):null}}),[h,v,C,m]),be={display:"flex",flexDirection:c==="vertical"?"column":"row",gap:B,...o.container};return e.jsx(Xe,{value:{orientation:c,styles:o},children:e.jsx(Z.ul,{ref:t,as:ge.Group,className:G("ui-reorder",d),axis:F,values:h,onReorder:b,__css:be,...I,onMouseUp:N(I.onMouseUp,H),onTouchEnd:N(I.onTouchEnd,H),children:De})})});i.displayName="Reorder";const J=Ze(({className:u,children:t=e.jsx(er,{}),...o},R)=>{const{styles:d}=Ae(),{register:c,isDrag:B,dragControls:m}=We(),n={display:"flex",justifyContent:"center",alignItems:"center",cursor:"grab",_selected:{cursor:"grabbing"},...d.trigger};return e.jsx(Z.div,{ref:ze(c,R),className:G("ui-reorder__trigger",u),__css:n,...o,"data-selected":pe(B),onPointerDown:N(o.onPointerDown,a=>m.start(a)),children:t})}),er=u=>e.jsxs(Ne,{viewBox:"0 0 39 39",...u,children:[e.jsx("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z",fill:"currentColor"})]}),xr={title:"Components / Data Display / Reorder",component:i},y=()=>e.jsxs(i,{children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),S=()=>{const u=s.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(i,{items:u})},w=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{orientation:"vertical",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{size:"sm",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(i,{size:"md",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(i,{size:"normal",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(i,{size:"lg",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{variant:"outline",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(i,{variant:"elevated",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(A,{}),e.jsxs(i,{variant:"unstyled",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]})]}),O=()=>e.jsxs(i,{children:[e.jsx(r,{value:"孫悟空",children:e.jsxs($,{children:[e.jsx(J,{}),e.jsx(P,{children:"孫悟空"})]})}),e.jsx(r,{value:"ベジータ",children:e.jsxs($,{children:[e.jsx(J,{children:e.jsx(Ge,{})}),e.jsx(P,{children:"ベジータ"})]})})]}),_=()=>e.jsxs(i,{onChange:u=>console.log(`changed '${u.join("', '")}'`),children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),z=()=>e.jsxs(i,{onCompleteChange:u=>console.log(`completed '${u.join("', '")}'`),children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),V=()=>e.jsxs(i,{h:"xs",p:"md",borderWidth:"1px",rounded:"md",overflowY:"scroll",layoutScroll:!0,tabIndex:0,outline:"0",_focusVisible:{boxShadow:"outline"},children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]});var L,U,Y;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(Y=(U=y.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var W,X,K;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const items = useMemo<ReorderGenerateItem[]>(() => [{
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
  return <Reorder items={items} />;
}`,...(K=(X=S.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,ee,re;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <Reorder orientation="vertical">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder orientation="horizontal">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(re=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ue,ne,te;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <Reorder size="sm">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="md">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="normal">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size="lg">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(te=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,se,ae;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <>
      <Reorder variant="outline">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant="elevated">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant="unstyled">
        <ReorderItem value="ギニュー">ギニュー</ReorderItem>
        <ReorderItem value="リクーム">リクーム</ReorderItem>
        <ReorderItem value="バータ">バータ</ReorderItem>
        <ReorderItem value="ジース">ジース</ReorderItem>
        <ReorderItem value="グルド">グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(ae=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,de,ie;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem value="孫悟空">
        <HStack>
          <ReorderTrigger />
          <Text>孫悟空</Text>
        </HStack>
      </ReorderItem>

      <ReorderItem value="ベジータ">
        <HStack>
          <ReorderTrigger>
            <Ghost />
          </ReorderTrigger>
          <Text>ベジータ</Text>
        </HStack>
      </ReorderItem>
    </Reorder>;
}`,...(ie=(de=O.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ce,me,Ce;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Reorder onChange={labels => console.log(\`changed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(Ce=(me=_.parameters)==null?void 0:me.docs)==null?void 0:Ce.source}}};var Re,ve,Be;z.parameters={...z.parameters,docs:{...(Re=z.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <Reorder onCompleteChange={labels => console.log(\`completed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(Be=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};var Fe,xe,Ie;V.parameters={...V.parameters,docs:{...(Fe=V.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <Reorder h="xs" p="md" borderWidth="1px" rounded="md" overflowY="scroll" layoutScroll tabIndex={0} outline="0" _focusVisible={{
    boxShadow: "outline"
  }}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(Ie=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};const Ir=["basic","withItems","withOrientation","withSize","withVariant","withTrigger","withOnChange","withOnCompleteChange","useContainerScroll"];export{Ir as __namedExportsOrder,y as basic,xr as default,V as useContainerScroll,S as withItems,_ as withOnChange,z as withOnCompleteChange,w as withOrientation,M as withSize,O as withTrigger,T as withVariant};
