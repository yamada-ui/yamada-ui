import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as t}from"./index-ClcD9ViR.js";import{u as he}from"./index-CSLw8Az-.js";import{p as Ge,E as _,J as je,f as Oe,b as fe,c as ve,d as W,h as ze}from"./factory-CehSyZ2b.js";import{f as pe}from"./forward-ref-D13m8o2p.js";import{u as Me,R as We}from"./use-ripple-lPfPkpPL.js";import{a as Fe}from"./use-component-style-PhZ538dD.js";import{o as Ee}from"./theme-provider-BOnS9RWG.js";import{B as o,I as E,U as A}from"./underline-DDl2DbUl.js";import{W as F}from"./flex-RGvlkkwh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-C8sDf1Q7.js";import"./icon-Tcjn8UpA.js";import"./use-var-C7Dt5UAR.js";import"./createLucideIcon-DHJHrKis.js";const[Pe,Ue]=Ge({name:"ToggleGroupContext",strict:!1}),D=pe(({className:i,size:c,variant:n,defaultValue:d,direction:S,isDisabled:s,isReadOnly:g,value:T,onChange:m,...G},O)=>{const[u,I]=he({defaultValue:d,value:T,onChange:m}),x=t.useRef(!_(u)),h=t.useCallback(a=>{_(a)||I(r=>je(r)?r.includes(a)?r.filter(b=>b!==a):[...r,a]:a===r?void 0:a)},[I]),z={display:"inline-flex",flexDirection:S,gap:"0.5rem"},j=t.useMemo(()=>({size:c,variant:n,isControlled:x.current,isDisabled:s,isReadOnly:g,value:u,onChange:h}),[u,c,n,s,g,h]);return Oe(()=>{_(u)||(x.current=!0)},[T]),e.jsx(Pe,{value:j,children:e.jsx(fe.div,{ref:O,className:ve("ui-toggle-group",i),role:"group",__css:z,...G})})});D.displayName="ToggleGroup";D.__ui__="ToggleGroup";const l=pe((i,c)=>{const{isControlled:n,isDisabled:d,isReadOnly:S,value:s,onChange:g,...T}=Ue()??{},[m,G]=Fe("Toggle",{...T,isDisabled:d,isReadOnly:S,...i}),{className:O,children:u,defaultIsSelected:I=!1,disableRipple:x,icon:h,isActive:z,isDisabled:j=d,isReadOnly:a=S,isRounded:r,isSelected:P,value:b,onChange:Be,...M}=Ee(G),[ye,Ce]=he({defaultValue:I,value:P,onChange:Be});n&&_(b)&&console.warn("Toggle: value is required. Please set the value.");const we=je(s)?s.includes(b??""):b===s,U=n?we:ye,{onPointerDown:Re,...ke}=Me({...M,isDisabled:x||j}),Ve=()=>{Ce(De=>!De),g==null||g(b)},_e=t.useMemo(()=>({alignItems:"center",appearance:"none",display:"inline-flex",gap:"fallback(2, 0.5rem)",justifyContent:"center",outline:"none",overflow:"hidden",pointerEvents:a?"none":"auto",position:"relative",userSelect:"none",verticalAlign:"middle",...m,...r?{borderRadius:"fallback(full, 9999px)"}:{}}),[r,m,a]);return e.jsxs(fe.button,{ref:c,type:"button",className:ve("ui-toggle",O),"aria-pressed":U,"data-active":W(z),"data-readonly":W(a),"data-selected":W(U),disabled:j,tabIndex:a?-1:0,__css:_e,...M,onClick:ze(M.onClick,Ve),onPointerDown:Re,children:[u||h,e.jsx(We,{...ke})]})});l.displayName="Toggle";l.__ui__="Toggle";const il={component:l,title:"Components / Forms / Toggle"},f=()=>e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{})}),v=()=>e.jsxs(l,{px:"4",children:[e.jsx(E,{}),"Italic"]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",size:"xs","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",size:"sm","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",size:"md","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",size:"lg","aria-label":"Toggle bold",icon:e.jsx(o,{})})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{variant:"unstyled","aria-label":"Toggle bold",icon:e.jsx(o,{})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsxs(F,{gap:"md",children:[e.jsx(l,{colorScheme:"primary","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})})]}),e.jsxs(F,{gap:"md",children:[e.jsx(l,{colorScheme:"primary",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})})]}),e.jsxs(F,{gap:"md",children:[e.jsx(l,{colorScheme:"primary",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})})]})]}),C=()=>e.jsx(l,{"aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isRounded:!0}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isDisabled:!0}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isDisabled:!0}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isDisabled:!0})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isReadOnly:!0}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isReadOnly:!0}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isReadOnly:!0})]}),k=()=>{const[i,c]=t.useState(!1);return e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),isSelected:i,onChange:c})},V=()=>{const[i,c]=t.useState(void 0),[n,d]=t.useState([]);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{value:i,onChange:c,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(E,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(A,{}),value:"underline"})]}),e.jsxs(D,{value:n,onChange:d,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(E,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(A,{}),value:"underline"})]})]})};var N,q,J;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} />;
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var H,K,L;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Toggle px="4">
      <ItalicIcon />
      Italic
    </Toggle>;
}`,...(L=(K=v.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" size="xs" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="secondary" size="sm" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="warning" size="md" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="danger" size="lg" aria-label="Toggle bold" icon={<BoldIcon />} />
    </>;
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle variant="outline" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle variant="unstyled" aria-label="Toggle bold" icon={<BoldIcon />} />
    </>;
}`,...(ee=($=B.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var le,oe,ae;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <Toggle colorScheme="primary" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="secondary" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="success" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="warning" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="danger" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="link" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="gray" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="neutral" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="red" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="rose" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="pink" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="orange" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="amber" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="yellow" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="lime" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="green" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="emerald" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="teal" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="cyan" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="sky" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="blue" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="indigo" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="violet" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="purple" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="fuchsia" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle colorScheme="primary" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="success" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="warning" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="danger" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="link" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="gray" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="neutral" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="red" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="rose" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="pink" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="orange" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="amber" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="yellow" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="lime" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="green" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="emerald" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="teal" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="cyan" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="sky" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="blue" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="indigo" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="violet" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="purple" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="fuchsia" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle colorScheme="primary" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="secondary" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="success" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="warning" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="danger" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="link" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="gray" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="neutral" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="red" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="rose" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="pink" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="orange" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="amber" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="yellow" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="lime" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="green" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="emerald" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="teal" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="cyan" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="sky" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="blue" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="indigo" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="violet" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="purple" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
        <Toggle colorScheme="fuchsia" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} />
      </Wrap>
    </>;
}`,...(ae=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ce,re,ie;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} isRounded />;
}`,...(ie=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ne,te,de;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} isDisabled />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} isDisabled />
      <Toggle variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} isDisabled />
    </>;
}`,...(de=(te=w.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var se,ge,ue;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} isReadOnly />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} isReadOnly />
      <Toggle variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<BoldIcon />} isReadOnly />
    </>;
}`,...(ue=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var be,Se,Te;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} isSelected={isSelected} onChange={setIsSelected} />;
}`,...(Te=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var me,Ie,xe;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(xe=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};const nl=["basic","withText","withSize","withVariant","withColorScheme","isRounded","isDisabled","isReadonly","customControl","useGroup"];export{nl as __namedExportsOrder,f as basic,k as customControl,il as default,w as isDisabled,R as isReadonly,C as isRounded,V as useGroup,y as withColorScheme,p as withSize,v as withText,B as withVariant};
