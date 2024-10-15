import{j as e}from"./extends-CwFRzn3r.js";import{r as a}from"./index-BwDkhjyp.js";import{o as fe,b as $,c as P,d as ge,p as Te,f as Oe,h as G,a as _e}from"./factory-DkiAY2ad.js";import{u as ze}from"./use-drag-controls-CcgrkR3h.js";import{u as Ve,a as H}from"./use-transform-BAy6YnUp.js";import{k as ke,n as Ee,u as Ce,m as be,i as Ne}from"./motion-I-9Hg3gW.js";import{a as Ze}from"./use-component-style-DQLsgxr3.js";import{o as Ge}from"./theme-provider-BQjm75QN.js";import{D as S}from"./divider-B-KDSA8b.js";import{b as He}from"./icon-A2vzomTu.js";import{f as $e}from"./forward-ref-BWI-Phbn.js";import{H as J}from"./stack-CwhPiWwF.js";import{T as A}from"./text-DbAxj1fm.js";import{G as Pe}from"./ghost-BcoMEro7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-var-D2w0wtCZ.js";import"./lucide-icon-D_wrJNW-.js";const ye=a.createContext(null);function qe(n,t,o,v){if(!v)return n;const i=n.findIndex(m=>m.value===t);if(i===-1)return n;const I=v>0?1:-1,h=n[i+I];if(!h)return n;const c=n[i],s=h.layout,l=ke(s.min,s.max,.5);return I===1&&c.layout.max+o>l||I===-1&&c.layout.min+o<l?Ee(n,i,i+I):n}function Je({children:n,as:t="ul",axis:o="y",onReorder:v,values:i,...I},h){const c=Ce(()=>be(t)),s=[],l=a.useRef(!1),m={axis:o,registerItem:(p,j)=>{const R=s.findIndex(x=>p===x.value);R!==-1?s[R].layout=j[o]:s.push({value:p,layout:j[o]}),s.sort(Le)},updateOrder:(p,j,R)=>{if(l.current)return;const x=qe(s,p,j,R);s!==x&&(l.current=!0,v(x.map(Fe).filter(d=>i.indexOf(d)!==-1)))}};return a.useEffect(()=>{l.current=!1}),e.jsx(c,{...I,ref:h,ignoreStrict:!0,children:e.jsx(ye.Provider,{value:m,children:n})})}const Ae=a.forwardRef(Je);function Fe(n){return n.value}function Le(n,t){return n.layout.min-t.layout.min}function F(n,t=0){return Ne(n)?n:H(t)}function Ue({children:n,style:t={},value:o,as:v="li",onDrag:i,layout:I=!0,...h},c){const s=Ce(()=>be(v)),l=a.useContext(ye),m={x:F(t.x),y:F(t.y)},p=Ve([m.x,m.y],([d,C])=>d||C?1:"unset"),{axis:j,registerItem:R,updateOrder:x}=l;return e.jsx(s,{drag:j,...h,dragSnapToOrigin:!0,style:{...t,x:m.x,y:m.y,zIndex:p},layout:I,onDrag:(d,C)=>{const{velocity:f}=C;f[j]&&x(o,m[j].get(),f[j]),i&&i(d,C)},onLayoutMeasure:d=>R(o,d),ref:c,ignoreStrict:!0,children:n})}const Ye=a.forwardRef(Ue),Se={Group:Ae,Item:Ye},[We,we]=fe({name:"ReorderContext",errorMessage:`useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`}),[Be,Xe]=fe({name:"ReorderContext",errorMessage:`useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`}),r=a.forwardRef(({className:n,children:t,label:o,value:v,...i},I)=>{var f;const{orientation:h,styles:c}=we(),s=ze(),[l,m]=a.useState(!1),[p,j]=a.useState(!1),R=H(0),x=H(0),d=a.useCallback(y=>m(!!y),[]);a.useEffect(()=>{const y=R.on("change",M=>{h==="horizontal"&&j(M!==0)}),w=x.on("change",M=>{h==="vertical"&&j(M!==0)});return()=>{y(),w()}},[h,R,x]);const C={_selected:{cursor:"grabbing"},...l?{userSelect:"none"}:{cursor:"grab"},...c.item,...l?{}:{_selected:{...(f=c.item)==null?void 0:f._selected,cursor:"grabbing"}}};return e.jsx(Be,{value:{dragControls:s,isDrag:p,register:d},children:e.jsx($.li,{ref:I,as:Se.Item,className:P("ui-reorder__item",n),value:v,__css:C,...i,style:{...i.style,x:R,y:x},"data-selected":ge(p),dragControls:s,dragListener:!l,children:t??o})})});r.displayName="ReorderItem";const Ke=n=>Array.from(new Set(n)),Qe=n=>n.filter((t,o,v)=>v.indexOf(t)===o&&o!==v.lastIndexOf(t)),u=a.forwardRef((n,t)=>{const[o,v]=Ze("Reorder",n),{className:i,children:I,gap:h="fallback(4, 1rem)",items:c=[],orientation:s="vertical",onChange:l,onCompleteChange:m,...p}=Ge(v),j=s==="vertical"?"y":"x",R=Te(I),x=!!R.length,d=a.useMemo(()=>{const g=x?R.map(({props:D})=>D.value):c.map(({value:D})=>D),b=Qe(g);return b.length&&console.warn(`Reorder: 'value' of 'ReorderItem' must not be duplicated. duplicate 'value' is '${b.join("', '")}' `),Ke(g)},[x,R,c]),C=a.useRef(d),[f,y]=a.useState(d),w=a.useRef(d),M=a.useCallback(g=>{y(g),l==null||l(g)},[l]),q=a.useCallback(()=>{JSON.stringify(w.current)!==JSON.stringify(f)&&(w.current=f,m==null||m(f))},[m,f]);Oe(()=>{JSON.stringify(d)!==JSON.stringify(C.current)&&(w.current=d,C.current=d,y(d))},[d]);const Me=a.useMemo(()=>f.map(g=>{if(x)return R.find(({props:b})=>b.value===g);{const b=c.find(D=>D.value===g);return b?e.jsx(r,{...b},b.value):null}}),[f,x,R,c]),De={display:"flex",flexDirection:s==="vertical"?"column":"row",gap:h,...o.container};return e.jsx(We,{value:{orientation:s,styles:o},children:e.jsx($.ul,{ref:t,as:Se.Group,className:P("ui-reorder",i),axis:j,values:f,onReorder:M,__css:De,...p,onMouseUp:G(p.onMouseUp,q),onTouchEnd:G(p.onTouchEnd,q),children:Me})})});u.displayName="Reorder";const L=$e(({className:n,children:t=e.jsx(er,{}),...o},v)=>{const{styles:i}=we(),{dragControls:I,isDrag:h,register:c}=Xe(),s={alignItems:"center",cursor:"grab",display:"flex",justifyContent:"center",_selected:{cursor:"grabbing"},...i.trigger};return e.jsx($.div,{ref:_e(c,v),className:P("ui-reorder__trigger",n),__css:s,...o,"data-selected":ge(h),onPointerDown:G(o.onPointerDown,l=>I.start(l)),children:t})}),er=n=>e.jsxs(He,{viewBox:"0 0 39 39",...n,children:[e.jsx("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),e.jsx("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"}),e.jsx("path",{d:"M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z",fill:"currentColor"})]}),jr={component:u,title:"Components / Data Display / Reorder"},T=()=>e.jsxs(u,{children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),O=()=>{const n=a.useMemo(()=>[{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],[]);return e.jsx(u,{items:n})},_=()=>e.jsxs(e.Fragment,{children:[e.jsxs(u,{orientation:"vertical",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{orientation:"horizontal",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsxs(u,{size:"sm",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{size:"md",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{size:"normal",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{size:"lg",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsxs(u,{variant:"outline",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{variant:"elevated",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),e.jsx(S,{}),e.jsxs(u,{variant:"unstyled",children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]})]}),k=()=>e.jsxs(u,{children:[e.jsx(r,{value:"孫悟空",children:e.jsxs(J,{children:[e.jsx(L,{}),e.jsx(A,{children:"孫悟空"})]})}),e.jsx(r,{value:"ベジータ",children:e.jsxs(J,{children:[e.jsx(L,{children:e.jsx(Pe,{})}),e.jsx(A,{children:"ベジータ"})]})})]}),E=()=>e.jsxs(u,{onChange:n=>console.log(`changed '${n.join("', '")}'`),children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),N=()=>e.jsxs(u,{onCompleteChange:n=>console.log(`completed '${n.join("', '")}'`),children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]}),Z=()=>e.jsxs(u,{borderWidth:"1px",h:"xs",layoutScroll:!0,outline:"0",overflowY:"scroll",p:"md",rounded:"md",tabIndex:0,_focusVisible:{boxShadow:"outline"},children:[e.jsx(r,{value:"ギニュー",children:"ギニュー"}),e.jsx(r,{value:"リクーム",children:"リクーム"}),e.jsx(r,{value:"バータ",children:"バータ"}),e.jsx(r,{value:"ジース",children:"ジース"}),e.jsx(r,{value:"グルド",children:"グルド"})]});var U,Y,W;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
  return <Reorder borderWidth="1px" h="xs" layoutScroll outline="0" overflowY="scroll" p="md" rounded="md" tabIndex={0} _focusVisible={{
    boxShadow: "outline"
  }}>
      <ReorderItem value="ギニュー">ギニュー</ReorderItem>
      <ReorderItem value="リクーム">リクーム</ReorderItem>
      <ReorderItem value="バータ">バータ</ReorderItem>
      <ReorderItem value="ジース">ジース</ReorderItem>
      <ReorderItem value="グルド">グルド</ReorderItem>
    </Reorder>;
}`,...(pe=(je=Z.parameters)==null?void 0:je.docs)==null?void 0:pe.source}}};const pr=["basic","withItems","withOrientation","withSize","withVariant","withTrigger","withOnChange","withOnCompleteChange","useContainerScroll"];export{pr as __namedExportsOrder,T as basic,jr as default,Z as useContainerScroll,O as withItems,E as withOnChange,N as withOnCompleteChange,_ as withOrientation,z as withSize,k as withTrigger,V as withVariant};
