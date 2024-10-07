import{j as e}from"./extends-CwFRzn3r.js";import{r as d}from"./index-BwDkhjyp.js";import{u as je}from"./index-DK-MzzHQ.js";import{o as Ge,A as D,F as fe,f as Oe,b as Ie,c as ve,d as M,h as ze}from"./factory-CTJ-ITwV.js";import{f as pe}from"./forward-ref-BWI-Phbn.js";import{u as Fe,R as Me}from"./use-ripple-MSZSdTJh.js";import{a as We}from"./use-component-style-_O1yHJxH.js";import{o as Ae}from"./theme-provider-gLqcKpHk.js";import{B as o,I as A,U as E}from"./underline-D-0WobT4.js";import{W}from"./flex-bsZaxQ-D.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-CmtZP4aZ.js";import"./motion-I-9Hg3gW.js";import"./lucide-icon-C1V1MxGy.js";import"./icon-DlOX_f12.js";import"./use-var-Cgd0M5xr.js";const[Pe,Ue]=Ge({name:"ToggleGroupContext",strict:!1}),_=pe(({className:c,size:r,variant:t,defaultValue:n,direction:m,isDisabled:s,isReadOnly:g,value:x,onChange:h,...G},O)=>{const[u,j]=je({defaultValue:n,value:x,onChange:h}),S=d.useRef(!D(u)),f=d.useCallback(a=>{D(a)||j(i=>fe(i)?i.includes(a)?i.filter(b=>b!==a):[...i,a]:a===i?void 0:a)},[j]),z={display:"inline-flex",flexDirection:m,gap:"0.5rem"},T=d.useMemo(()=>({size:r,variant:t,isControlled:S.current,isDisabled:s,isReadOnly:g,value:u,onChange:f}),[u,r,t,s,g,f]);return Oe(()=>{D(u)||(S.current=!0)},[x]),e.jsx(Pe,{value:T,children:e.jsx(Ie.div,{ref:O,className:ve("ui-toggle-group",c),role:"group",__css:z,...G})})});_.displayName="ToggleGroup";_.__ui__="ToggleGroup";const l=pe((c,r)=>{const{isControlled:t,isDisabled:n,isReadOnly:m,value:s,onChange:g,...x}=Ue()??{},[h,G]=We("Toggle",{...x,isDisabled:n,isReadOnly:m,...c}),{className:O,children:u,defaultIsSelected:j=!1,disableRipple:S,icon:f,isActive:z,isDisabled:T=n,isReadOnly:a=m,isRounded:i,isSelected:P,value:b,onChange:Be,...F}=Ae(G),[ye,Ce]=je({defaultValue:j,value:P,onChange:Be});t&&D(b)&&console.warn("Toggle: value is required. Please set the value.");const we=fe(s)?s.includes(b??""):b===s,U=t?we:ye,{onPointerDown:Re,...ke}=Fe({...F,isDisabled:S||T}),Ve=()=>{Ce(_e=>!_e),g==null||g(b)},De=d.useMemo(()=>({alignItems:"center",appearance:"none",display:"inline-flex",gap:"fallback(2, 0.5rem)",justifyContent:"center",outline:"none",overflow:"hidden",pointerEvents:a?"none":"auto",position:"relative",userSelect:"none",verticalAlign:"middle",...h,...i?{borderRadius:"fallback(full, 9999px)"}:{}}),[i,h,a]);return e.jsxs(Ie.button,{ref:r,type:"button",className:ve("ui-toggle",O),"aria-pressed":U,"data-active":M(z),"data-readonly":M(a),"data-selected":M(U),disabled:T,tabIndex:a?-1:0,__css:De,...F,onClick:ze(F.onClick,Ve),onPointerDown:Re,children:[u||f,e.jsx(Me,{isDisabled:S||T,...ke})]})});l.displayName="Toggle";l.__ui__="Toggle";const il={component:l,title:"Components / Forms / Toggle"},I=()=>e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{})}),v=()=>e.jsxs(l,{px:"4",children:[e.jsx(A,{}),"Italic"]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",size:"xs","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",size:"sm","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",size:"md","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",size:"lg","aria-label":"Toggle bold",icon:e.jsx(o,{})})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{variant:"unstyled","aria-label":"Toggle bold",icon:e.jsx(o,{})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsxs(W,{gap:"md",children:[e.jsx(l,{colorScheme:"primary","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})})]}),e.jsxs(W,{gap:"md",children:[e.jsx(l,{colorScheme:"primary",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})})]}),e.jsxs(W,{gap:"md",children:[e.jsx(l,{colorScheme:"primary",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia",variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{})})]})]}),C=()=>e.jsx(l,{"aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isRounded:!0}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isDisabled:!0}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isDisabled:!0}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isDisabled:!0})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isReadOnly:!0}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isReadOnly:!0}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",defaultIsSelected:!0,icon:e.jsx(o,{}),isReadOnly:!0})]}),k=()=>{const[c,r]=d.useState(!1);return e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),isSelected:c,onChange:r})},V=()=>{const[c,r]=d.useState(void 0),[t,n]=d.useState([]);return e.jsxs(e.Fragment,{children:[e.jsxs(_,{value:c,onChange:r,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(A,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(E,{}),value:"underline"})]}),e.jsxs(_,{value:t,onChange:n,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(A,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(E,{}),value:"underline"})]})]})};var N,q,H;I.parameters={...I.parameters,docs:{...(N=I.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" icon={<Bold />} />;
}`,...(H=(q=I.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,L;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Toggle px="4">
      <Italic />
      Italic
    </Toggle>;
}`,...(L=(K=v.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" size="xs" aria-label="Toggle bold" icon={<Bold />} />
      <Toggle colorScheme="secondary" size="sm" aria-label="Toggle bold" icon={<Bold />} />
      <Toggle colorScheme="warning" size="md" aria-label="Toggle bold" icon={<Bold />} />
      <Toggle colorScheme="danger" size="lg" aria-label="Toggle bold" icon={<Bold />} />
    </>;
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" icon={<Bold />} />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" icon={<Bold />} />
      <Toggle variant="outline" aria-label="Toggle bold" icon={<Bold />} />
      <Toggle variant="unstyled" aria-label="Toggle bold" icon={<Bold />} />
    </>;
}`,...(ee=($=B.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var le,oe,ae;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <Toggle colorScheme="primary" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="secondary" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="success" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="warning" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="danger" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="link" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="gray" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="neutral" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="red" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="rose" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="pink" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="orange" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="amber" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="yellow" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="lime" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="green" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="emerald" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="teal" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="cyan" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="sky" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="blue" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="indigo" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="violet" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="purple" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="fuchsia" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle colorScheme="primary" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="success" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="warning" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="danger" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="link" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="gray" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="neutral" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="red" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="rose" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="pink" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="orange" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="amber" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="yellow" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="lime" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="green" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="emerald" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="teal" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="cyan" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="sky" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="blue" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="indigo" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="violet" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="purple" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="fuchsia" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle colorScheme="primary" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="secondary" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="success" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="warning" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="danger" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="link" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="gray" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="neutral" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="red" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="rose" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="pink" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="orange" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="amber" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="yellow" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="lime" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="green" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="emerald" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="teal" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="cyan" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="sky" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="blue" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="indigo" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="violet" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="purple" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
        <Toggle colorScheme="fuchsia" variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} />
      </Wrap>
    </>;
}`,...(ae=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,ie,ce;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" defaultIsSelected icon={<Bold />} isRounded />;
}`,...(ce=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var te,de,ne;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} isDisabled />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} isDisabled />
      <Toggle variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} isDisabled />
    </>;
}`,...(ne=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var se,ge,ue;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} isReadOnly />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} isReadOnly />
      <Toggle variant="outline" aria-label="Toggle bold" defaultIsSelected icon={<Bold />} isReadOnly />
    </>;
}`,...(ue=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var be,Se,Te;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return <Toggle aria-label="Toggle bold" icon={<Bold />} isSelected={isSelected} onChange={setIsSelected} />;
}`,...(Te=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var me,xe,he;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined);
  const [multiValue, setMultiValue] = useState<string[]>([]);
  return <>
      <ToggleGroup value={singleValue} onChange={setSingleValue}>
        <Toggle aria-label="Toggle bold" icon={<Bold />} value="bold" />
        <Toggle aria-label="Toggle italic" icon={<Italic />} value="italic" />
        <Toggle aria-label="Toggle underline" icon={<Underline />} value="underline" />
      </ToggleGroup>

      <ToggleGroup value={multiValue} onChange={setMultiValue}>
        <Toggle aria-label="Toggle bold" icon={<Bold />} value="bold" />
        <Toggle aria-label="Toggle italic" icon={<Italic />} value="italic" />
        <Toggle aria-label="Toggle underline" icon={<Underline />} value="underline" />
      </ToggleGroup>
    </>;
}`,...(he=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};const cl=["basic","withText","withSize","withVariant","withColorScheme","isRounded","isDisabled","isReadonly","customControl","useGroup"];export{cl as __namedExportsOrder,I as basic,k as customControl,il as default,w as isDisabled,R as isReadonly,C as isRounded,V as useGroup,y as withColorScheme,p as withSize,v as withText,B as withVariant};
