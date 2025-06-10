import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as t}from"./index-Bv9Y92EF.js";import{u as Be}from"./index-D3uVnNfI.js";import{B as Ue,K as O,Q as ye,o as Ae,b as we,c as ke,h as Ee,d as N}from"./factory-7Z88KRtK.js";import{f as Ce}from"./forward-ref-DH6f5tnY.js";import{u as Ne,R as De}from"./use-ripple-Vo7SgDWD.js";import{a as qe}from"./use-component-style-DHLtMqa5.js";import{o as Ke}from"./theme-provider-DsbwOWxu.js";import{B as o,I as q,U as H}from"./underline-Bg6LDWj1.js";import{W as D}from"./flex-B0SWTXUi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./icon-DKuqv-9Z.js";import"./use-var-Bz9rJ8_M.js";import"./createLucideIcon-Bq8XVWwL.js";const[Qe,He]=Ue({name:"ToggleGroupContext",strict:!1}),G=Ce(({className:r,size:c,variant:n,defaultValue:d,direction:S,isDisabled:u,disabled:g=u,flexDirection:z=S,isReadOnly:m,readOnly:T=m,value:x,onChange:W,...F},M)=>{const[s,h]=Be({defaultValue:d,value:x,onChange:W}),j=t.useRef(!O(s)),b=t.useCallback(a=>{O(a)||h(i=>ye(i)?i.includes(a)?i.filter(A=>A!==a):[...i,a]:a===i?void 0:a)},[h]),P={display:"inline-flex",flexDirection:z,gap:"0.5rem"},U=t.useMemo(()=>({size:c,variant:n,controlled:j.current,disabled:g,readOnly:T,value:s,onChange:b}),[s,c,n,g,T,b]);return Ae(()=>{O(s)||(j.current=!0)},[x]),e.jsx(Qe,{value:U,children:e.jsx(we.div,{ref:M,className:ke("ui-toggle-group",r),role:"group",__css:P,...F})})});G.displayName="ToggleGroup";G.__ui__="ToggleGroup";const l=Ce((r,c)=>{const{controlled:n,disabled:d,readOnly:S,value:u,onChange:g,...z}=He()??{},[m,T]=qe("Toggle",{...z,isDisabled:d,isReadOnly:S,...r}),{className:x,isActive:W,active:F=W,children:M,defaultIsSelected:s=!1,defaultSelected:h=s,isDisabled:j=d,disabled:b=j,disableRipple:P,isRounded:U,fullRounded:a=U,icon:i,isReadOnly:K=S,isSelected:A,readOnly:f=K,selected:Re=A,value:v,onChange:Ve,...E}=Ke(T),[_e,Oe]=Be({defaultValue:h,value:Re,onChange:Ve});n&&O(v)&&console.warn("Toggle: value is required. Please set the value.");const Ge=ye(u)?u.includes(v??""):v===u,Q=n?Ge:_e,{onPointerDown:ze,...We}=Ne({...E,disabled:P||b}),Fe=()=>{Oe(Pe=>!Pe),g==null||g(v)},Me=t.useMemo(()=>({alignItems:"center",appearance:"none",display:"inline-flex",gap:"fallback(2, 0.5rem)",justifyContent:"center",outline:"none",overflow:"hidden",pointerEvents:f?"none":"auto",position:"relative",userSelect:"none",verticalAlign:"middle",...m,...a?{borderRadius:"fallback(full, 9999px)"}:{}}),[a,m,f]);return e.jsxs(we.button,{ref:c,type:"button",className:ke("ui-toggle",x),"aria-pressed":Q,"data-active":N(F),"data-readonly":N(f),"data-selected":N(Q),disabled:b,tabIndex:f?-1:0,__css:Me,...E,onClick:Ee(E.onClick,Fe),onPointerDown:ze,children:[M||i,e.jsx(De,{...We})]})});l.displayName="Toggle";l.__ui__="Toggle";const ul={component:l,title:"Components / Forms / Toggle"},p=()=>e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{})}),I=()=>e.jsxs(l,{px:"4",children:[e.jsx(q,{}),"Italic"]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",size:"xs","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",size:"sm","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",size:"md","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",size:"lg","aria-label":"Toggle bold",icon:e.jsx(o,{})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{variant:"unstyled","aria-label":"Toggle bold",icon:e.jsx(o,{})})]}),w=()=>e.jsxs(e.Fragment,{children:[e.jsxs(D,{gap:"md",children:[e.jsx(l,{colorScheme:"primary","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})})]}),e.jsxs(D,{gap:"md",children:[e.jsx(l,{colorScheme:"primary",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})})]}),e.jsxs(D,{gap:"md",children:[e.jsx(l,{colorScheme:"primary",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})})]})]}),k=()=>e.jsx(l,{"aria-label":"Toggle bold",defaultSelected:!0,fullRounded:!0,icon:e.jsx(o,{})}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",defaultSelected:!0,disabled:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,disabled:!0,icon:e.jsx(o,{})}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,disabled:!0,icon:e.jsx(o,{})})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{}),readOnly:!0}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{}),readOnly:!0}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{}),readOnly:!0})]}),V=()=>{const[r,c]=t.useState(!1);return e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),selected:r,onChange:c})},_=()=>{const[r,c]=t.useState(void 0),[n,d]=t.useState([]);return e.jsxs(e.Fragment,{children:[e.jsxs(G,{value:r,onChange:c,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(q,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(H,{}),value:"underline"})]}),e.jsxs(G,{value:n,onChange:d,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(q,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(H,{}),value:"underline"})]})]})};var J,L,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} />;
}`,...(X=(L=p.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var Y,Z,$;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <Toggle px="4">
      <ItalicIcon />
      Italic
    </Toggle>;
}`,...($=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,le,oe;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" size="xs" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="secondary" size="sm" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="warning" size="md" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="danger" size="lg" aria-label="Toggle bold" icon={<BoldIcon />} />
    </>;
}`,...(oe=(le=B.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ae,ce,re;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle variant="outline" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle variant="unstyled" aria-label="Toggle bold" icon={<BoldIcon />} />
    </>;
}`,...(re=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:re.source}}};var ne,ie,te;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <Toggle colorScheme="primary" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="secondary" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="success" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="warning" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="danger" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="link" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="gray" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="neutral" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="red" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="rose" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="pink" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="orange" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="amber" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="yellow" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="lime" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="green" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="emerald" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="teal" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="cyan" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="sky" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="blue" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="indigo" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="violet" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="purple" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="fuchsia" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle colorScheme="primary" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="success" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="warning" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="danger" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="link" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="gray" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="neutral" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="red" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="rose" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="pink" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="orange" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="amber" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="yellow" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="lime" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="green" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="emerald" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="teal" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="cyan" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="sky" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="blue" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="indigo" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="violet" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="purple" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="fuchsia" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle colorScheme="primary" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="secondary" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="success" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="warning" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="danger" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="link" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="gray" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="neutral" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="red" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="rose" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="pink" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="orange" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="amber" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="yellow" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="lime" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="green" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="emerald" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="teal" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="cyan" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="sky" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="blue" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="indigo" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="violet" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="purple" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="fuchsia" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
      </Wrap>
    </>;
}`,...(te=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var de,ge,se;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" defaultSelected fullRounded icon={<BoldIcon />} />;
}`,...(se=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:se.source}}};var ue,be,Se;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" defaultSelected disabled icon={<BoldIcon />} />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultSelected disabled icon={<BoldIcon />} />
      <Toggle variant="outline" aria-label="Toggle bold" defaultSelected disabled icon={<BoldIcon />} />
    </>;
}`,...(Se=(be=C.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var me,Te,xe;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} readOnly />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} readOnly />
      <Toggle variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} readOnly />
    </>;
}`,...(xe=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var he,je,fe;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} selected={isSelected} onChange={setIsSelected} />;
}`,...(fe=(je=V.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};var ve,pe,Ie;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined);
  const [multiValue, setMultiValue] = useState<string[]>([]);
  return <>
      <ToggleGroup value={singleValue} onChange={setSingleValue}>
        <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
        <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
        <Toggle aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
      </ToggleGroup>

      <ToggleGroup value={multiValue} onChange={setMultiValue}>
        <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
        <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
        <Toggle aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
      </ToggleGroup>
    </>;
}`,...(Ie=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:Ie.source}}};const bl=["basic","withText","withSize","withVariant","withColorScheme","isRounded","disabled","readOnly","customControl","useGroup"];export{bl as __namedExportsOrder,p as basic,V as customControl,ul as default,C as disabled,k as isRounded,R as readOnly,_ as useGroup,w as withColorScheme,B as withSize,I as withText,y as withVariant};
