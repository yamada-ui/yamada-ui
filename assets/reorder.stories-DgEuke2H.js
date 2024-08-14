import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{u as Te}from"./use-drag-controls-C9XnoawY.js";import{u as Oe,a as G}from"./use-transform-D4IZzCRI.js";import{k as _e,n as ze,u as fe,m as ge,i as Ve}from"./motion-Bd6WkMzw.js";import{l as Ce,b as $,c as P,d as be,t as ke,f as Ee,h as H,a as Ne}from"./factory-CZghEhwx.js";import{a as Ze}from"./use-component-style-CVJyvgnb.js";import{o as Ge}from"./theme-provider-DVx9I-yC.js";import{D as S}from"./divider-PxC3aQYi.js";import{b as He}from"./icon-qNXYSgNB.js";import{f as $e}from"./forward-ref-BmTAT9U5.js";import{H as J}from"./stack-C1fz6XaD.js";import{T as A}from"./text-Z0assCpk.js";import{G as Pe}from"./ghost-CV6pSSMx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./index-CCkg_WlC.js";import"./lucide-icon-sIknX4Cs.js";const ye=a.createContext(null);function qe(n,o,s,v){if(!v)return n;const i=n.findIndex(j=>j.value===o);if(i===-1)return n;const c=v>0?1:-1,I=n[i+c];if(!I)return n;const m=n[i],t=I.layout,l=_e(t.min,t.max,.5);return c===1&&m.layout.max+s>l||c===-1&&m.layout.min+s<l?ze(n,i,i+c):n}function Je({children:n,as:o="ul",axis:s="y",onReorder:v,values:i,...c},I){const m=fe(()=>ge(o)),t=[],l=a.useRef(!1),j={axis:s,registerItem:(p,h)=>{const R=t.findIndex(x=>p===x.value);R!==-1?t[R].layout=h[s]:t.push({value:p,layout:h[s]}),t.sort(Le)},updateOrder:(p,h,R)=>{if(l.current)return;const x=qe(t,p,h,R);t!==x&&(l.current=!0,v(x.map(Fe).filter(d=>i.indexOf(d)!==-1)))}};return a.useEffect(()=>{l.current=!1}),e.jsx(m,{...c,ref:I,ignoreStrict:!0,children:e.jsx(ye.Provider,{value:j,children:n})})}const Ae=a.forwardRef(Je);function Fe(n){return n.value}function Le(n,o){return n.layout.min-o.layout.min}function F(n,o=0){return Ve(n)?n:G(o)}function Ue({children:n,style:o={},value:s,as:v="li",onDrag:i,layout:c=!0,...I},m){const t=fe(()=>ge(v)),l=a.useContext(ye),j={x:F(o.x),y:F(o.y)},p=Oe([j.x,j.y],([d,C])=>d||C?1:"unset"),{axis:h,registerItem:R,updateOrder:x}=l;return e.jsx(t,{drag:h,...I,dragSnapToOrigin:!0,style:{...o,x:j.x,y:j.y,zIndex:p},layout:c,onDrag:(d,C)=>{const{velocity:f}=C;f[h]&&x(s,j[h].get(),f[h]),i&&i(d,C)},onLayoutMeasure:d=>R(s,d),ref:m,ignoreStrict:!0,children:n})}const Ye=a.forwardRef(Ue),Se={Group:Ae,Item:Ye},[We,Be]=Ce({name:"ReorderContext",errorMessage:`useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`}),r=a.forwardRef(({className:n,label:o,value:s,children:v,...i},c)=>{var f;const{orientation:I,styles:m}=we(),t=Te(),[l,j]=a.useState(!1),[p,h]=a.useState(!1),R=G(0),x=G(0),d=a.useCallback(y=>j(!!y),[]);a.useEffect(()=>{const y=R.on("change",M=>{I==="horizontal"&&h(M!==0)}),w=x.on("change",M=>{I==="vertical"&&h(M!==0)});return()=>{y(),w()}},[I,R,x]);const C={_selected:{cursor:"grabbing"},...l?{userSelect:"none"}:{cursor:"grab"},...m.item,...l?{}:{_selected:{...(f=m.item)==null?void 0:f._selected,cursor:"grabbing"}}};return e.jsx(We,{value:{register:d,isDrag:p,dragControls:t},children:e.jsx($.li,{ref:c,as:Se.Item,className:P("ui-reorder__item",n),value:s,__css:C,...i,dragListener:!l,dragControls:t,"data-selected":be(p),style:{...i.style,x:R,y:x},children:v??o})})});r.displayName="ReorderItem";const[Xe,we]=Ce({name:"ReorderContext",errorMessage:`useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`}),Ke=n=>Array.from(new Set(n)),Qe=n=>n.filter((o,s,v)=>v.indexOf(o)===s&&s!==v.lastIndexOf(o)),u=a.forwardRef((n,o)=>{const[s,v]=Ze("Reorder",n),{className:i,orientation:c="vertical",gap:I="fallback(4, 1rem)",items:m=[],onChange:t,onCompleteChange:l,children:j,...p}=Ge(v),h=c==="vertical"?"y":"x",R=ke(j),x=!!R.length,d=a.useMemo(()=>{const g=x?R.map(({props:D})=>D.value):m.map(({value:D})=>D),b=Qe(g);return b.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${b.join("', '")}' `),Ke(g)},[x,R,m]),C=a.useRef(d),[f,y]=a.useState(d),w=a.useRef(d),M=a.useCallback(g=>{y(g),t==null||t(g)},[t]),q=a.useCallback(()=>{JSON.stringify(w.current)!==JSON.stringify(f)&&(w.current=f,l==null||l(f))},[l,f]);Ee(()=>{JSON.stringify(d)!==JSON.stringify(C.current)&&(w.current=d,C.current=d,y(d))},[d]);const Me=a.useMemo(()=>f.map(g=>{if(x)return R.find(({props:b})=>b.value===g);{const b=m.find(D=>D.value===g);return b?e.jsx(r,{...b},b.value):null}}),[f,x,R,m]),De={display:"flex",flexDirection:c==="vertical"?"column":"row",gap:I,...s.container};return e.jsx(Xe,{value:{orientation:c,styles:s},children:e.jsx($.ul,{ref:o,as:Se.Group,className:P("ui-reorder",i),axis:h,values:f,onReorder:M,__css:De,...p,onMouseUp:H(p.onMouseUp,q),onTouchEnd:H(p.onTouchEnd,q),children:Me})})});u.displayName="Reorder";const L=$e(({className:n,children:o=e.jsx(er,{}),...s},v)=>{const{styles:i}=we(),{register:c,isDrag:I,dragControls:m}=Be(),t={display:"flex",justifyContent:"center",alignItems:"center",cursor:"grab",_selected:{cursor:"grabbing"},...i.trigger};return e.jsx($.div,{ref:Ne(c,v),className:P("ui-reorder__trigger",n),__css:t,...s,"data-selected":be(I),onPointerDown:H(s.onPointerDown,l=>m.start(l)),children:o})}),er=n=>e.jsxs(He,{viewBox:"0 0 39 39",...n,children:[e.jsx("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z",fill:"currentColor"})]}),pr={title:"Components / Data Display / Reorder",component:u},T=()=>e.jsxs(u,{children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),O=()=>{const n=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(u,{items:n})},_=()=>e.jsxs(e.Fragment,{children:[e.jsxs(u,{orientation:"vertical",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{orientation:"horizontal",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsxs(u,{size:"sm",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{size:"md",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{size:"normal",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{size:"lg",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsxs(u,{variant:"outline",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{variant:"elevated",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{variant:"unstyled",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]})]}),k=()=>e.jsxs(u,{children:[e.jsx(r,{value:"孫悟空",children:e.jsxs(J,{children:[e.jsx(L,{}),e.jsx(A,{children:"孫悟空"})]})}),e.jsx(r,{value:"ベジータ",children:e.jsxs(J,{children:[e.jsx(L,{children:e.jsx(Pe,{})}),e.jsx(A,{children:"ベジータ"})]})})]}),E=()=>e.jsxs(u,{onChange:n=>console.log(`changed '${n.join("', '")}'`),children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),N=()=>e.jsxs(u,{onCompleteChange:n=>console.log(`completed '${n.join("', '")}'`),children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),Z=()=>e.jsxs(u,{h:"xs",p:"md",borderWidth:"1px",rounded:"md",overflowY:"scroll",layoutScroll:!0,tabIndex:0,outline:"0",_focusVisible:{boxShadow:"outline"},children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]});var U,Y,W;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(W=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var B,X,K;O.parameters={...O.parameters,docs:{...(B=O.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(K=(X=O.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,ee,re;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(re=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,te,oe;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(oe=(te=z.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ae,le;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(le=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var de,ie,ue;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(ue=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,me,Re;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Reorder onChange={labels => console.log(\`changed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(Re=(me=E.parameters)==null?void 0:me.docs)==null?void 0:Re.source}}};var ve,xe,Ie;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <Reorder onCompleteChange={labels => console.log(\`completed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(Ie=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var he,je,pe;Z.parameters={...Z.parameters,docs:{...(he=Z.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <Reorder h="xs" p="md" borderWidth="1px" rounded="md" overflowY="scroll" layoutScroll tabIndex={0} outline="0" _focusVisible={{
    boxShadow: "outline"
  }}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(pe=(je=Z.parameters)==null?void 0:je.docs)==null?void 0:pe.source}}};const fr=["basic","withItems","withOrientation","withSize","withVariant","withTrigger","withOnChange","withOnCompleteChange","useContainerScroll"];export{fr as __namedExportsOrder,T as basic,pr as default,Z as useContainerScroll,O as withItems,E as withOnChange,N as withOnCompleteChange,_ as withOrientation,z as withSize,k as withTrigger,V as withVariant};
