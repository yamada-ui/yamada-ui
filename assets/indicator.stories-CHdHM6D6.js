import{j as a}from"./jsx-runtime-CfatFE5O.js";import{u as Aa}from"./index-u-n2PdDt.js";import{u as A}from"./index-ByME5iZS.js";import{r as Sa}from"./index-ClcD9ViR.js";import{f as za}from"./forward-ref-D13m8o2p.js";import{u as _a}from"./use-component-style-PhZ538dD.js";import{o as Ca}from"./theme-provider-BOnS9RWG.js";import{b as u,c as S}from"./factory-CehSyZ2b.js";import{W as w}from"./flex-RGvlkkwh.js";import{A as r}from"./avatar-GYZQ5fhP.js";import{G as Wa}from"./grid-DseuyjtV.js";import{B as ya}from"./box-W_OXCIvP.js";import"./index-gGKStiao.js";import"./index-DxxoX3c-.js";import"./index-DTdOA4MV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-Tcjn8UpA.js";import"./use-var-C7Dt5UAR.js";import"./use-image-C9hD9ID-.js";const Ba=(s,o)=>{const e={};let i="",n="";return s.includes("top")?(e.top=o,n="-50%"):s.includes("bottom")?(e.bottom=o,n="50%"):(e.top="50%",n="-50%"),s.includes("left")?(e.left=o,i="-50%"):s.includes("right")?(e.right=o,i="50%"):(e.left="50%",i="-50%"),e.transform=`translate(${i}, ${n})`,e},t=za((s,o)=>{const[e,i]=_a("Indicator",s);let{className:n,children:sa,disabled:H,inline:ia=!1,isDisabled:ca,label:c,offset:ma=0,overflowCount:Y=99,ping:ua,pingColor:la="$ping",pingCount:da="infinite",pingDuration:pa="1.4s",pingScale:ha=1.8,placement:va="top-right",showZero:ba=!0,containerProps:ga,...xa}=Ca(i,["withBorder"]);const fa=Aa({duration:pa,fillMode:"forwards",iterationCount:da,keyframes:{"75%, 100%":{opacity:0,transform:`scale(${ha})`}},timingFunction:"cubic-bezier(0, 0, 0.2, 1)"});H??(H=ca);const m=typeof c=="number";m&&!ba&&c<=0&&(H??(H=!0));const ja=A(ia),Ia=A(va),wa=A(ma),Ha=Sa.useMemo(()=>m&&c>Y?a.jsxs(a.Fragment,{children:[Y,a.jsx(u.span,{lineHeight:1,children:"+"})]}):c,[m,c,Y]),Ya={position:"absolute",...Ba(Ia,wa),...m?{fontWeight:"medium"}:{},...e};return a.jsxs(u.div,{ref:o,className:S("ui-indicator",n),__css:{display:ja?"inline-block":"block",position:"relative"},...ga,children:[H?null:a.jsxs(u.div,{ref:o,className:S("ui-indicator__icon",n),__css:Ya,...xa,children:[Ha,ua?a.jsx(u.div,{className:"ui-indicator__icon__ping",animation:fa,__css:{bg:la,boxSize:"100%",opacity:.75,position:"absolute",rounded:"fallback(full, 9999px)",zIndex:-1}}):null]}),sa]})});t.displayName="Indicator";t.__ui__="Indicator";const Qa={component:t,title:"Components / Media And Icons / Indicator"},l=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"lg",offset:1.5,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),d=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{size:"sm",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"md",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"lg",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),p=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{variant:"solid",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{variant:"subtle",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),h=()=>a.jsxs(Wa,{gap:"md",p:"md",templateColumns:"repeat(3, 1fr)",children:[a.jsx(t,{label:99,placement:"top-left",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"top",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"top-right",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"left",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(ya,{}),a.jsx(t,{label:99,placement:"right",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"bottom-left",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"bottom",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"bottom-right",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),v=()=>a.jsx(t,{label:"new",offset:4,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",size:"2xl"})}),b=()=>a.jsx(t,{label:100,overflowCount:99,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),g=()=>a.jsxs(a.Fragment,{children:[a.jsx(t,{label:0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:0,showZero:!1,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),x=()=>a.jsx(t,{label:99,withBorder:!0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),f=()=>a.jsx(t,{isDisabled:!0,label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),j=()=>a.jsx(t,{inline:!0,label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),I=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{label:"new",ping:!0,pingScale:1.4,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{variant:"subtle",label:"new",ping:!0,pingScale:1.4,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"lg",offset:1.5,ping:!0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"lg",variant:"subtle",offset:1.5,ping:!0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]});var z,_,C;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>

      <Indicator size="lg" offset={1.5}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var W,y,B;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(B=(y=d.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var P,k,O;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator variant="solid" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator variant="subtle" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(O=(k=p.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var N,Z,D;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Grid gap="md" p="md" templateColumns="repeat(3, 1fr)">
      <Indicator label={99} placement="top-left">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="top">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="top-right">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="left">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Box />
      <Indicator label={99} placement="right">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="bottom-left">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="bottom">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="bottom-right">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Grid>;
}`,...(D=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:D.source}}};var G,$,E;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Indicator label="new" offset={4}>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" size="2xl" />
    </Indicator>;
}`,...(E=($=v.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var F,M,V;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Indicator label={100} overflowCount={99}>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(V=(M=b.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var R,L,T;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <>
      <Indicator label={0}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={0} showZero={false}>
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

      <Indicator size="lg" variant="subtle" offset={1.5} ping>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(na=(oa=I.parameters)==null?void 0:oa.docs)==null?void 0:na.source}}};const Ua=["basic","withSize","withVariant","withPlacement","withOffset","withOverflowCount","withShowZero","withBorder","hidden","useInlineBlock","withPing"];export{Ua as __namedExportsOrder,l as basic,Qa as default,f as hidden,j as useInlineBlock,x as withBorder,v as withOffset,b as withOverflowCount,I as withPing,h as withPlacement,g as withShowZero,d as withSize,p as withVariant};
