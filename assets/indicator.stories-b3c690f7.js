import{j as s,F as ea,a}from"./jsx-runtime-03b4ddbf.js";import{u as Y}from"./index-1560c0d4.js";import{r as va}from"./index-76fb7be0.js";import{f as ba}from"./forward-ref-8b7d2a6f.js";import{u as ga}from"./use-component-style-c6f16384.js";import{o as fa}from"./theme-provider-89b34f8f.js";import{d as A,e as x}from"./factory-0b90ba06.js";import{A as r}from"./avatar-d0eff88e.js";import{W as S}from"./flex-4bbc55fe.js";import{G as Ia}from"./grid-ad9414da.js";import{B as wa}from"./box-843ebc67.js";import"./index-a6848ad8.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./icon-583bdc7e.js";import"./index-8dce054c.js";import"./use-image-49e30b43.js";const Ha=(c,o)=>{const e={};let i="",n="";return c.includes("top")?(e.top=o,n="-50%"):c.includes("bottom")?(e.bottom=o,n="50%"):(e.top="50%",n="-50%"),c.includes("left")?(e.left=o,i="-50%"):c.includes("right")?(e.right=o,i="50%"):(e.left="50%",i="-50%"),e.transform=`translate(${i}, ${n})`,e},t=ba((c,o)=>{const[e,i]=ga("Indicator",c);let{className:n,inline:oa=!1,placement:na="top-right",offset:sa=0,label:m,overflowCount:H=99,showZero:ca=!0,children:ia,isDisabled:z,...ma}=fa(i);const u=typeof m=="number";u&&!ca&&m<=0&&(z??(z=!0));const ua=Y(oa),la=Y(na),da=Y(sa),pa=va.useMemo(()=>u&&m>H?s(ea,{children:[H,a(A.span,{lineHeight:1,children:"+"})]}):m,[u,m,H]),ha={position:"absolute",...Ha(la,da),...u?{fontWeight:"medium"}:{},...e};return s(A.div,{ref:o,className:x("ui-indicator-container",n),__css:{position:"relative",display:ua?"inline-block":"block"},children:[z?null:a(A.div,{ref:o,className:x("ui-indicator",n),__css:ha,...ma,children:pa}),ia]})}),Da={title:"Components / Media And Icons / Indicator",component:t},l=()=>s(S,{gap:"md",children:[a(t,{label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{size:"lg",offset:1.5,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),d=()=>s(S,{gap:"md",children:[a(t,{size:"sm",label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{size:"md",label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{size:"lg",label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),p=()=>s(S,{gap:"md",children:[a(t,{variant:"solid",label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{variant:"subtle",label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),h=()=>s(Ia,{p:"md",templateColumns:"repeat(3, 1fr)",gap:"md",children:[a(t,{placement:"top-left",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"top",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"top-right",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"left",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(wa,{}),a(t,{placement:"right",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"bottom-left",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"bottom",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{placement:"bottom-right",label:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),v=()=>a(t,{label:"new",offset:4,children:a(r,{size:"2xl",name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),b=()=>a(t,{label:100,overflowCount:99,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),g=()=>s(ea,{children:[a(t,{label:0,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a(t,{showZero:!1,label:0,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),f=()=>a(t,{label:99,withBorder:!0,children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),I=()=>a(t,{isDisabled:!0,label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),w=()=>a(t,{inline:!0,label:"new",children:a(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})});var B,C,W;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Wrap gap='md'>
      <Indicator label='new'>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>

      <Indicator size='lg' offset={1.5}>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
    </Wrap>;
}`,...(W=(C=l.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var y,O,P;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Wrap gap='md'>
      <Indicator size='sm' label='new'>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
      <Indicator size='md' label='new'>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
      <Indicator size='lg' label='new'>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
    </Wrap>;
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var _,Z,k;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Wrap gap='md'>
      <Indicator variant='solid' label='new'>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
      <Indicator variant='subtle' label='new'>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
    </Wrap>;
}`,...(k=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:k.source}}};var G,N,j;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Grid p='md' templateColumns='repeat(3, 1fr)' gap='md'>
      <Indicator placement='top-left' label={99}>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
      <Indicator placement='top' label={99}>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
      <Indicator placement='top-right' label={99}>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
      <Indicator placement='left' label={99}>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
      <Box />
      <Indicator placement='right' label={99}>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
      <Indicator placement='bottom-left' label={99}>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
      <Indicator placement='bottom' label={99}>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
      <Indicator placement='bottom-right' label={99}>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
    </Grid>;
}`,...(j=(N=h.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var D,V,E;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Indicator label='new' offset={4}>
      <Avatar size='2xl' name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
    </Indicator>;
}`,...(E=(V=v.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var F,M,$;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Indicator label={100} overflowCount={99}>
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
    </Indicator>;
}`,...($=(M=b.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var L,R,T;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <Indicator label={0}>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
      <Indicator showZero={false} label={0}>
        <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      </Indicator>
    </>;
}`,...(T=(R=g.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var X,q,J;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Indicator label={99} withBorder>
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
    </Indicator>;
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Indicator isDisabled label='new'>
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
    </Indicator>;
}`,...(U=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var aa,ta,ra;w.parameters={...w.parameters,docs:{...(aa=w.parameters)==null?void 0:aa.docs,source:{originalSource:`() => {
  return <Indicator inline label='new'>
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
    </Indicator>;
}`,...(ra=(ta=w.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};const Va=["basic","withSize","withVariant","withPlacement","withOffset","withOverflowCount","withShowZero","withBorder","hidden","useInlineBlock"];export{Va as __namedExportsOrder,l as basic,Da as default,I as hidden,w as useInlineBlock,f as withBorder,v as withOffset,b as withOverflowCount,h as withPlacement,g as withShowZero,d as withSize,p as withVariant};
//# sourceMappingURL=indicator.stories-b3c690f7.js.map
