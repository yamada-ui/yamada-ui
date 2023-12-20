import{a as s,F as ea,j as a}from"./jsx-runtime-TtYKBvr-.js";import{u as Y}from"./index-dluY42U8.js";import{r as ba}from"./index-IybTgENJ.js";import{f as ga}from"./forward-ref-6T0UNPU-.js";import{a as fa}from"./use-component-style-5nTHLJk_.js";import{o as Ia}from"./theme-provider-_TpUstJ8.js";import{u as A,a as x,o as wa}from"./factory-0U35BYk-.js";import{W as S}from"./flex-HYvpX2jF.js";import{A as r}from"./avatar-8_gRU3dw.js";import{G as Ha}from"./grid-X91yL09M.js";import{B as Ya}from"./box-m5A1GaX7.js";import"./index-Vee3qruC.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./icon-gAHwiU-k.js";import"./index-sWcbvyzn.js";import"./use-image-vgkMyMC_.js";const Aa=(c,o)=>{const e={};let i="",n="";return c.includes("top")?(e.top=o,n="-50%"):c.includes("bottom")?(e.bottom=o,n="50%"):(e.top="50%",n="-50%"),c.includes("left")?(e.left=o,i="-50%"):c.includes("right")?(e.right=o,i="50%"):(e.left="50%",i="-50%"),e.transform=`translate(${i}, ${n})`,e},t=ga((c,o)=>{const[e,i]=fa("Indicator",c);let{className:n,inline:oa=!1,placement:na="top-right",offset:sa=0,label:m,overflowCount:H=99,showZero:ca=!0,children:ia,isDisabled:z,containerProps:ma,...ua}=Ia(i);const u=typeof m=="number";u&&!ca&&m<=0&&(z??(z=!0));const la=Y(oa),da=Y(na),pa=Y(sa),ha=ba.useMemo(()=>u&&m>H?s(ea,{children:[H,a(A.span,{lineHeight:1,children:"+"})]}):m,[u,m,H]),va={position:"absolute",...Aa(da,pa),...u?{fontWeight:"medium"}:{},...e};return s(A.div,{ref:o,className:x("ui-indicator",n),__css:{position:"relative",display:la?"inline-block":"block"},...ma,children:[z?null:a(A.div,{ref:o,className:x("ui-indicator__inner",n),__css:va,...wa(ua,["withBorder"]),children:ha}),ia]})}),Ea={title:"Components / Media And Icons / Indicator",component:t},l=()=>s(S,{gap:"md",children:[a(t,{label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{size:"lg",offset:1.5,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),d=()=>s(S,{gap:"md",children:[a(t,{size:"sm",label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{size:"md",label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{size:"lg",label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),p=()=>s(S,{gap:"md",children:[a(t,{variant:"solid",label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{variant:"subtle",label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),h=()=>s(Ha,{p:"md",templateColumns:"repeat(3, 1fr)",gap:"md",children:[a(t,{placement:"top-left",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"top",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"top-right",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"left",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(Ya,{}),a(t,{placement:"right",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"bottom-left",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"bottom",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"bottom-right",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),v=()=>a(t,{label:"new",offset:4,children:a(r,{size:"2xl",name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),b=()=>a(t,{label:100,overflowCount:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),g=()=>s(ea,{children:[a(t,{label:0,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{showZero:!1,label:0,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),f=()=>a(t,{label:99,withBorder:!0,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),I=()=>a(t,{isDisabled:!0,label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),w=()=>a(t,{inline:!0,label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})});var B,C,W;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>

      <Indicator size="lg" offset={1.5}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(W=(C=l.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var _,O,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator size="sm" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator size="md" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator size="lg" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var y,Z,j;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator variant="solid" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator variant="subtle" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(j=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var k,G,N;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Grid p="md" templateColumns="repeat(3, 1fr)" gap="md">
      <Indicator placement="top-left" label={99}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator placement="top" label={99}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator placement="top-right" label={99}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator placement="left" label={99}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Box />
      <Indicator placement="right" label={99}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator placement="bottom-left" label={99}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator placement="bottom" label={99}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator placement="bottom-right" label={99}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Grid>;
}`,...(N=(G=h.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var D,V,E;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Indicator label="new" offset={4}>
      <Avatar size="2xl" name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(E=(V=v.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var F,M,$;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Indicator label={100} overflowCount={99}>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...($=(M=b.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var L,R,T;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <Indicator label={0}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator showZero={false} label={0}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </>;
}`,...(T=(R=g.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var X,q,J;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Indicator label={99} withBorder>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Indicator isDisabled label="new">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(U=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var aa,ta,ra;w.parameters={...w.parameters,docs:{...(aa=w.parameters)==null?void 0:aa.docs,source:{originalSource:`() => {
  return <Indicator inline label="new">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(ra=(ta=w.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};const Fa=["basic","withSize","withVariant","withPlacement","withOffset","withOverflowCount","withShowZero","withBorder","hidden","useInlineBlock"];export{Fa as __namedExportsOrder,l as basic,Ea as default,I as hidden,w as useInlineBlock,f as withBorder,v as withOffset,b as withOverflowCount,h as withPlacement,g as withShowZero,d as withSize,p as withVariant};
