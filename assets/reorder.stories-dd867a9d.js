import{j as e,a as d,F as P}from"./jsx-runtime-29545a09.js";import{I as ye,f as ve}from"./fontawesome-icon-f04ed178.js";import{r as n}from"./index-76fb7be0.js";import{g as Se,h as we,u as Ie,m as be,i as De}from"./motion-90200a2f.js";import{u as Me,a as V}from"./use-transform-d4274318.js";import{o as he,s as Te,h as Oe,d as $,e as H,v as Z,w as ze}from"./factory-0893e977.js";import{a as Ee}from"./use-component-style-1d64e7de.js";import{o as _e,d as pe}from"./theme-53967a8a.js";import{u as je}from"./use-drag-controls-88876a11.js";import{b as ke}from"./icon-1cfd45cb.js";import{f as Ve}from"./forward-ref-8b7d2a6f.js";import{D as w}from"./divider-33353c9c.js";import{H as N}from"./stack-e0824e8f.js";import{T as L}from"./text-34f78c84.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-500c6d69.js";const fe=n.createContext(null);function Ze(o,l,a,b){if(!b)return o;const i=o.findIndex(u=>u.value===l);if(i===-1)return o;const s=b>0?1:-1,p=o[i+s];if(!p)return o;const c=o[i],t=p.layout,R=Se(t.min,t.max,.5);return s===1&&c.layout.max+a>R||s===-1&&c.layout.min+a<R?we(o,i,i+s):o}function Pe({children:o,as:l="ul",axis:a="y",onReorder:b,values:i,...s},p){const c=Ie(()=>be(l)),t=[],R=n.useRef(!1),u={axis:a,registerItem:(f,m)=>{m&&t.findIndex(h=>f===h.value)===-1&&(t.push({value:f,layout:m[a]}),t.sort(Ne))},updateOrder:(f,m,h)=>{if(R.current)return;const g=Ze(t,f,m,h);t!==g&&(R.current=!0,b(g.map(He).filter(x=>i.indexOf(x)!==-1)))}};return n.useEffect(()=>{R.current=!1}),n.createElement(c,{...s,ref:p,ignoreStrict:!0},n.createElement(fe.Provider,{value:u},o))}const $e=n.forwardRef(Pe);function He(o){return o.value}function Ne(o,l){return o.layout.min-l.layout.min}function A(o,l=0){return De(o)?o:V(l)}function Le({children:o,style:l={},value:a,as:b="li",onDrag:i,layout:s=!0,...p},c){const t=Ie(()=>be(b)),R=n.useContext(fe),u={x:A(l.x),y:A(l.y)},f=Me([u.x,u.y],([C,v])=>C||v?1:"unset"),m=n.useRef(null),{axis:h,registerItem:g,updateOrder:x}=R;return n.useEffect(()=>{g(a,m.current)},[R]),n.createElement(t,{drag:h,...p,dragSnapToOrigin:!0,style:{...l,x:u.x,y:u.y,zIndex:f},layout:s,onDrag:(C,v)=>{const{velocity:D}=v;D[h]&&x(a,u[h].get(),D[h]),i&&i(C,v)},onLayoutMeasure:C=>{m.current=C},ref:c,ignoreStrict:!0},o)}const Ae=n.forwardRef(Le),ge={Group:$e,Item:Ae},[Ge,Ce]=he({name:"ReorderContext",errorMessage:`useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`}),Ue=o=>Array.from(new Set(o)),Fe=o=>o.filter((l,a,b)=>b.indexOf(l)===a&&a!==b.lastIndexOf(l)),I=n.forwardRef((o,l)=>{const[a,b]=Ee("Reorder",o),{className:i,orientation:s="vertical",gap:p="md",onChange:c,onCompleteChange:t,children:R,...u}=_e(b),f=s==="vertical"?"y":"x",m=Te(R),h=n.useMemo(()=>{const y=m.map(({props:xe})=>xe.label),S=Fe(y);return S.length&&console.warn(`Reorder: 'label' of 'ReorderItem' must not be duplicated. duplicate 'label' is '${S.join("', '")}' `),Ue(y)},[m]),[g,x]=n.useState(h),C=n.useCallback(y=>{x(y),c==null||c(y)},[c]);Oe(()=>{h.every(S=>g.includes(S))||x(h)},[h]);const v=n.useMemo(()=>g.map(y=>m.find(({props:S})=>S.label===y)),[g,m]),D={display:"flex",flexDirection:s==="vertical"?"column":"row",gap:p,...a.container};return e(Ge,{value:{orientation:s,styles:a},children:e($.ul,{ref:l,as:ge.Group,className:H("ui-reorder",i),axis:f,values:g,onReorder:C,__css:D,...u,onMouseUp:Z(u.onMouseUp,()=>t==null?void 0:t(g)),onTouchEnd:Z(u.onTouchEnd,()=>t==null?void 0:t(g)),children:v})})});I.displayName="Reorder";const[We,Ye]=he({name:"ReorderContext",errorMessage:`useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`}),r=n.forwardRef(({className:o,label:l,...a},b)=>{var x;const{orientation:i,styles:s}=Ce(),p=je(),[c,t]=n.useState(!1),[R,u]=n.useState(!1),f=V(0),m=V(0),h=n.useCallback(C=>t(!!C),[]);n.useEffect(()=>(f.onChange(C=>{i==="horizontal"&&u(C!==0)}),m.onChange(C=>{i==="vertical"&&u(C!==0)}),()=>{f.destroy(),m.destroy()}),[i,f,m]);const g={...c?{userSelect:"none"}:{cursor:"grab"},...s.item,...c?{}:{_selected:{...(x=s.item)==null?void 0:x._selected,cursor:"grabbing"}}};return e(We,{value:{register:h,isDrag:R,dragControls:p},children:e($.li,{ref:b,as:ge.Item,className:H("ui-reorder-item",o),value:l,__css:g,...a,dragListener:!c,dragControls:p,"data-selected":pe(R),style:{...a.style,x:f,y:m}})})});r.displayName="ReorderItem";const G=Ve(({className:o,children:l=e(Be,{}),...a},b)=>{const{styles:i}=Ce(),{register:s,isDrag:p,dragControls:c}=Ye(),t={display:"flex",justifyContent:"center",alignItems:"center",cursor:"grab",_selected:{cursor:"grabbing"},...i.trigger};return e($.div,{ref:ze(s,b),className:H("ui-reorder-trigger",o),__css:t,...a,"data-selected":pe(p),onPointerDown:Z(a.onPointerDown,R=>c.start(R)),children:l})}),Be=o=>d(ke,{viewBox:"0 0 39 39",...o,children:[e("path",{d:"M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",fill:"currentColor"}),e("path",{d:"M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z",fill:"currentColor"}),e("path",{d:"M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z",fill:"currentColor"}),e("path",{d:"M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z",fill:"currentColor"}),e("path",{d:"M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z",fill:"currentColor"}),e("path",{d:"M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z",fill:"currentColor"}),e("path",{d:"M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z",fill:"currentColor"}),e("path",{d:"M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z",fill:"currentColor"}),e("path",{d:"M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z",fill:"currentColor"})]}),ur={title:"Components / Data Display / Reorder",component:I},M=()=>d(I,{children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),T=()=>d(P,{children:[d(I,{orientation:"vertical",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(w,{}),d(I,{orientation:"horizontal",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),O=()=>d(P,{children:[d(I,{size:"sm",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(w,{}),d(I,{size:"md",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(w,{}),d(I,{size:"normal",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(w,{}),d(I,{size:"lg",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),z=()=>d(P,{children:[d(I,{variant:"outline",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(w,{}),d(I,{variant:"elevated",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),e(w,{}),d(I,{variant:"unstyled",children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]})]}),E=()=>d(I,{children:[e(r,{label:"孫悟空",children:d(N,{children:[e(G,{}),e(L,{children:"孫悟空"})]})}),e(r,{label:"ベジータ",children:d(N,{children:[e(G,{children:e(ye,{icon:ve})}),e(L,{children:"ベジータ"})]})})]}),_=()=>d(I,{onChange:o=>console.log(`changed '${o.join("', '")}'`),children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),j=()=>d(I,{onCompleteChange:o=>console.log(`completed '${o.join("', '")}'`),children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]}),k=()=>d(I,{h:"xs",p:"md",borderWidth:"1px",rounded:"md",overflowY:"scroll",layoutScroll:!0,children:[e(r,{label:"ギニュー",children:"ギニュー"}),e(r,{label:"リクーム",children:"リクーム"}),e(r,{label:"バータ",children:"バータ"}),e(r,{label:"ジース",children:"ジース"}),e(r,{label:"グルド",children:"グルド"})]});var U,F,W;M.parameters={...M.parameters,docs:{...(U=M.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
      <ReorderItem label='リクーム'>リクーム</ReorderItem>
      <ReorderItem label='バータ'>バータ</ReorderItem>
      <ReorderItem label='ジース'>ジース</ReorderItem>
      <ReorderItem label='グルド'>グルド</ReorderItem>
    </Reorder>;
}`,...(W=(F=M.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var Y,B,q;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Reorder orientation='vertical'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder orientation='horizontal'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(q=(B=T.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var J,K,Q;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <Reorder size='sm'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size='md'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size='normal'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder size='lg'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(Q=(K=O.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,ee,re;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Reorder variant='outline'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant='elevated'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>

      <Divider />

      <Reorder variant='unstyled'>
        <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
        <ReorderItem label='リクーム'>リクーム</ReorderItem>
        <ReorderItem label='バータ'>バータ</ReorderItem>
        <ReorderItem label='ジース'>ジース</ReorderItem>
        <ReorderItem label='グルド'>グルド</ReorderItem>
      </Reorder>
    </>;
}`,...(re=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,te,ne;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Reorder>
      <ReorderItem label='孫悟空'>
        <HStack>
          <ReorderTrigger />
          <Text>孫悟空</Text>
        </HStack>
      </ReorderItem>

      <ReorderItem label='ベジータ'>
        <HStack>
          <ReorderTrigger>
            <Icon icon={faPoo} />
          </ReorderTrigger>
          <Text>ベジータ</Text>
        </HStack>
      </ReorderItem>
    </Reorder>;
}`,...(ne=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,ae,de;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Reorder onChange={labels => console.log(\`changed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
      <ReorderItem label='リクーム'>リクーム</ReorderItem>
      <ReorderItem label='バータ'>バータ</ReorderItem>
      <ReorderItem label='ジース'>ジース</ReorderItem>
      <ReorderItem label='グルド'>グルド</ReorderItem>
    </Reorder>;
}`,...(de=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ie,se,ce;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Reorder onCompleteChange={labels => console.log(\`completed '\${labels.join(\`', '\`)}'\`)}>
      <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
      <ReorderItem label='リクーム'>リクーム</ReorderItem>
      <ReorderItem label='バータ'>バータ</ReorderItem>
      <ReorderItem label='ジース'>ジース</ReorderItem>
      <ReorderItem label='グルド'>グルド</ReorderItem>
    </Reorder>;
}`,...(ce=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var me,Re,ue;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <Reorder h='xs' p='md' borderWidth='1px' rounded='md' overflowY='scroll' layoutScroll>
      <ReorderItem label='ギニュー'>ギニュー</ReorderItem>
      <ReorderItem label='リクーム'>リクーム</ReorderItem>
      <ReorderItem label='バータ'>バータ</ReorderItem>
      <ReorderItem label='ジース'>ジース</ReorderItem>
      <ReorderItem label='グルド'>グルド</ReorderItem>
    </Reorder>;
}`,...(ue=(Re=k.parameters)==null?void 0:Re.docs)==null?void 0:ue.source}}};const Ir=["basic","withOrientation","withSize","withVariant","withTrigger","withOnChange","withOnCompleteChange","useContainerScroll"];export{Ir as __namedExportsOrder,M as basic,ur as default,k as useContainerScroll,_ as withOnChange,j as withOnCompleteChange,T as withOrientation,O as withSize,E as withTrigger,z as withVariant};
//# sourceMappingURL=reorder.stories-dd867a9d.js.map
