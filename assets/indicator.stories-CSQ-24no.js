import{j as a}from"./jsx-runtime-CKrituN3.js";import{u as Ya}from"./index-CUiYxF6a.js";import{u as Y}from"./index-DT1MKHzI.js";import{r as Aa}from"./index-CBqU2yxZ.js";import{f as Sa}from"./forward-ref-DuAegr0M.js";import{u as za}from"./use-component-style-x77HgIAf.js";import{o as _a}from"./theme-provider-B81-8twE.js";import{u,c as S,E as Ca}from"./factory-DBv693c8.js";import{W as w}from"./flex-CJ6Lv20s.js";import{A as r}from"./avatar-CuLxSgoV.js";import{G as Wa}from"./grid-DZhzxBQX.js";import{B as Ba}from"./box-CegYPPH6.js";import"./index-rYLD436_.js";import"./index-CsDlsuI0.js";import"./index-C_T8L7c2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./icon-CttZDCjD.js";import"./index-BLOGRGTX.js";import"./use-image-BmnWkuJe.js";const ya=(s,o)=>{const e={};let i="",n="";return s.includes("top")?(e.top=o,n="-50%"):s.includes("bottom")?(e.bottom=o,n="50%"):(e.top="50%",n="-50%"),s.includes("left")?(e.left=o,i="-50%"):s.includes("right")?(e.right=o,i="50%"):(e.left="50%",i="-50%"),e.transform=`translate(${i}, ${n})`,e},t=Sa((s,o)=>{const[e,i]=za("Indicator",s);let{className:n,inline:sa=!1,placement:ia="top-right",offset:ca=0,label:c,overflowCount:H=99,showZero:ma=!0,children:ua,isDisabled:A,containerProps:la,ping:da,pingColor:pa="var(--ui-ping)",pingDuration:ha="1.4s",pingCount:va="infinite",pingScale:ba=1.8,...ga}=_a(i);const xa=Ya({keyframes:{"75%, 100%":{transform:`scale(${ba})`,opacity:0}},fillMode:"forwards",duration:ha,timingFunction:"cubic-bezier(0, 0, 0.2, 1)",iterationCount:va}),m=typeof c=="number";m&&!ma&&c<=0&&(A??(A=!0));const fa=Y(sa),ja=Y(ia),Ia=Y(ca),wa=Aa.useMemo(()=>m&&c>H?a.jsxs(a.Fragment,{children:[H,a.jsx(u.span,{lineHeight:1,children:"+"})]}):c,[m,c,H]),Ha={position:"absolute",...ya(ja,Ia),...m?{fontWeight:"medium"}:{},...e};return a.jsxs(u.div,{ref:o,className:S("ui-indicator",n),__css:{position:"relative",display:fa?"inline-block":"block"},...la,children:[A?null:a.jsxs(u.div,{ref:o,className:S("ui-indicator__icon",n),__css:Ha,...Ca(ga,["withBorder"]),children:[wa,da?a.jsx(u.div,{className:"ui-indicator__icon__ping",__css:{position:"absolute",boxSize:"100%",rounded:"fallback(full, 9999px)",opacity:.75,zIndex:-1,bg:pa},animation:xa}):null]}),ua]})}),Ua={title:"Components / Media And Icons / Indicator",component:t},l=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"lg",offset:1.5,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),d=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{size:"sm",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"md",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"lg",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),p=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{variant:"solid",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{variant:"subtle",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),h=()=>a.jsxs(Wa,{p:"md",templateColumns:"repeat(3, 1fr)",gap:"md",children:[a.jsx(t,{placement:"top-left",label:99,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{placement:"top",label:99,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{placement:"top-right",label:99,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{placement:"left",label:99,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(Ba,{}),a.jsx(t,{placement:"right",label:99,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{placement:"bottom-left",label:99,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{placement:"bottom",label:99,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{placement:"bottom-right",label:99,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),v=()=>a.jsx(t,{label:"new",offset:4,children:a.jsx(r,{size:"2xl",name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),b=()=>a.jsx(t,{label:100,overflowCount:99,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),g=()=>a.jsxs(a.Fragment,{children:[a.jsx(t,{label:0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{showZero:!1,label:0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),x=()=>a.jsx(t,{label:99,withBorder:!0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),f=()=>a.jsx(t,{isDisabled:!0,label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),j=()=>a.jsx(t,{inline:!0,label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),I=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{label:"new",ping:!0,pingScale:1.4,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{variant:"subtle",label:"new",ping:!0,pingScale:1.4,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"lg",offset:1.5,ping:!0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{variant:"subtle",size:"lg",offset:1.5,ping:!0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]});var z,_,C;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>

      <Indicator size="lg" offset={1.5}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var W,B,y;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(y=(B=d.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var P,O,k;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator variant="solid" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator variant="subtle" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(k=(O=p.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var N,Z,D;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(D=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:D.source}}};var E,G,F;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Indicator label="new" offset={4}>
      <Avatar size="2xl" name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(F=(G=v.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var M,V,$;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Indicator label={100} overflowCount={99}>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...($=(V=b.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var R,L,T;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <>
      <Indicator label={0}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator showZero={false} label={0}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </>;
}`,...(T=(L=g.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var X,q,J;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Indicator label={99} withBorder>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(J=(q=x.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Indicator isDisabled label="new">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var aa,ta,ra;j.parameters={...j.parameters,docs:{...(aa=j.parameters)==null?void 0:aa.docs,source:{originalSource:`() => {
  return <Indicator inline label="new">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(ra=(ta=j.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};var ea,oa,na;I.parameters={...I.parameters,docs:{...(ea=I.parameters)==null?void 0:ea.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator label="new" ping pingScale={1.4}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>

      <Indicator variant="subtle" label="new" ping pingScale={1.4}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>

      <Indicator size="lg" offset={1.5} ping>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>

      <Indicator variant="subtle" size="lg" offset={1.5} ping>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(na=(oa=I.parameters)==null?void 0:oa.docs)==null?void 0:na.source}}};const at=["basic","withSize","withVariant","withPlacement","withOffset","withOverflowCount","withShowZero","withBorder","hidden","useInlineBlock","withPing"];export{at as __namedExportsOrder,l as basic,Ua as default,f as hidden,j as useInlineBlock,x as withBorder,v as withOffset,b as withOverflowCount,I as withPing,h as withPlacement,g as withShowZero,d as withSize,p as withVariant};
