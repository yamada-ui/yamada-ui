import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as g}from"./index-BwDkhjyp.js";import{u as he}from"./index-D8-nW8Om.js";import{l as De,q as D,s as je,f as Ge,b as fe,c as Ie,d as O,h as ze}from"./factory-CJjTzqIw.js";import{f as ve}from"./forward-ref-BmTAT9U5.js";import{u as Me,R as Oe}from"./use-ripple-wDY3RbRD.js";import{a as We}from"./use-component-style-BHPJug4L.js";import{o as Fe}from"./theme-provider-QhVoByOm.js";import{B as o,I as F,U as A}from"./underline-BGST7N_P.js";import{W}from"./flex-DpdDxX4h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CSNxn7VS.js";import"./motion-Ceh1Zhyk.js";import"./motion-B0bI6Xcj.js";import"./lucide-icon-DuYAgJii.js";import"./icon-932iDb3I.js";import"./index-DARK8rH5.js";const[Pe,Ue]=De({strict:!1,name:"ToggleGroupContext"}),P=ve(({value:i,defaultValue:t,onChange:d,className:n,size:b,variant:r,direction:x,isDisabled:h,isReadOnly:s,...G},z)=>{const[u,j]=he({value:i,defaultValue:t,onChange:d}),f=g.useRef(!D(u)),S=g.useCallback(a=>{D(a)||j(c=>je(c)?c.includes(a)?c.filter(T=>T!==a):[...c,a]:a===c?void 0:a)},[j]),M={display:"inline-flex",gap:"0.5rem",flexDirection:x},m=g.useMemo(()=>({value:u,size:b,variant:r,isDisabled:h,isReadOnly:s,isControlled:f.current,onChange:S}),[u,b,r,h,s,S]);return Ge(()=>{D(u)||(f.current=!0)},[i]),e.jsx(Pe,{value:m,children:e.jsx(fe.div,{ref:z,role:"group",className:Ie("ui-toggle-group",n),__css:M,...G})})});P.displayName="ToggleGroup";const l=ve((i,t)=>{const{value:d,onChange:n,isControlled:b,...r}=Ue()??{},[x,h]=We("Toggle",{...r,...i}),{value:s,className:G,icon:z,isSelected:u,defaultIsSelected:j=!1,onChange:f,isRounded:S,isActive:M,isDisabled:m=r==null?void 0:r.isDisabled,isReadOnly:a=r==null?void 0:r.isReadOnly,disableRipple:c,children:U,...T}=Fe(h),[pe,Be]=he({value:u,defaultValue:j,onChange:f});b&&D(s)&&console.warn("Toggle: value is required. Please set the value.");const ye=je(d)?d.includes(s??""):s===d,_=b?ye:pe,{onPointerDown:Ce,...we}=Me({...T,isDisabled:c||m}),ke=()=>{Be(Ve=>!Ve),n==null||n(s)},Re=g.useMemo(()=>({display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"fallback(2, 0.5rem)",appearance:"none",userSelect:"none",position:"relative",verticalAlign:"middle",overflow:"hidden",outline:"none",pointerEvents:a?"none":"auto",...x,...S?{borderRadius:"fallback(full, 9999px)"}:{}}),[S,x,a]);return e.jsxs(fe.button,{ref:t,type:"button",tabIndex:a?-1:0,disabled:m,"data-active":O(M),"data-selected":O(_),"data-readonly":O(a),"aria-pressed":_,className:Ie("ui-toggle",G),__css:Re,...T,onClick:ze(T.onClick,ke),onPointerDown:Ce,children:[U||z,e.jsx(Oe,{isDisabled:c||m,...we})]})});l.displayName="Toggle";const rl={title:"Components / Forms / Toggle",component:l},I=()=>e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold"}),v=()=>e.jsxs(l,{px:"4",children:[e.jsx(F,{}),"Italic"]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",colorScheme:"primary",size:"xs"}),e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",colorScheme:"secondary",size:"sm"}),e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",colorScheme:"warning",size:"md"}),e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",colorScheme:"danger",size:"lg"})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",colorScheme:"primary",variant:"subtle"}),e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",colorScheme:"secondary",variant:"solid"}),e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",variant:"outline"}),e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",variant:"unstyled"})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsxs(W,{gap:"md",children:[e.jsx(l,{defaultIsSelected:!0,colorScheme:"primary","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"secondary","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"success","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"warning","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"danger","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"link","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"gray","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"neutral","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"red","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"rose","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"pink","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"orange","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"amber","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"yellow","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"lime","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"green","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"emerald","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"teal","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"cyan","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"sky","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"blue","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"indigo","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"violet","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"purple","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,colorScheme:"fuchsia","aria-label":"Toggle bold",icon:e.jsx(o,{})})]}),e.jsxs(W,{gap:"md",children:[e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"primary","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"secondary","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"success","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"warning","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"danger","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"link","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"gray","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"neutral","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"red","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"rose","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"pink","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"orange","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"amber","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"yellow","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"lime","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"green","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"emerald","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"teal","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"cyan","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"sky","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"blue","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"indigo","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"violet","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"purple","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"fuchsia","aria-label":"Toggle bold",icon:e.jsx(o,{})})]}),e.jsxs(W,{gap:"md",children:[e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"primary","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"secondary","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"success","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"warning","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"danger","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"link","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"gray","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"neutral","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"red","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"rose","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"pink","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"orange","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"amber","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"yellow","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"lime","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"green","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"emerald","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"teal","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"cyan","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"sky","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"blue","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"indigo","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"violet","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"purple","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"fuchsia","aria-label":"Toggle bold",icon:e.jsx(o,{})})]})]}),C=()=>e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",defaultIsSelected:!0,isRounded:!0}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",colorScheme:"primary",variant:"subtle",defaultIsSelected:!0,isDisabled:!0}),e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",colorScheme:"secondary",variant:"solid",defaultIsSelected:!0,isDisabled:!0}),e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",variant:"outline",defaultIsSelected:!0,isDisabled:!0})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",colorScheme:"primary",variant:"subtle",defaultIsSelected:!0,isReadOnly:!0}),e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",colorScheme:"secondary",variant:"solid",defaultIsSelected:!0,isReadOnly:!0}),e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",variant:"outline",defaultIsSelected:!0,isReadOnly:!0})]}),R=()=>{const[i,t]=g.useState(!1);return e.jsx(l,{icon:e.jsx(o,{}),"aria-label":"Toggle bold",isSelected:i,onChange:t})},V=()=>{const[i,t]=g.useState(void 0),[d,n]=g.useState([]);return e.jsxs(e.Fragment,{children:[e.jsxs(P,{value:i,onChange:t,children:[e.jsx(l,{value:"bold",icon:e.jsx(o,{}),"aria-label":"Toggle bold"}),e.jsx(l,{value:"italic",icon:e.jsx(F,{}),"aria-label":"Toggle italic"}),e.jsx(l,{value:"underline",icon:e.jsx(A,{}),"aria-label":"Toggle underline"})]}),e.jsxs(P,{value:d,onChange:n,children:[e.jsx(l,{value:"bold",icon:e.jsx(o,{}),"aria-label":"Toggle bold"}),e.jsx(l,{value:"italic",icon:e.jsx(F,{}),"aria-label":"Toggle italic"}),e.jsx(l,{value:"underline",icon:e.jsx(A,{}),"aria-label":"Toggle underline"})]})]})};var E,N,q;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Toggle icon={<Bold />} aria-label="Toggle bold" />;
}`,...(q=(N=I.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var H,J,K;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Toggle px="4">
      <Italic />
      Italic
    </Toggle>;
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,X;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Bold />} aria-label="Toggle bold" colorScheme="primary" size="xs" />
      <Toggle icon={<Bold />} aria-label="Toggle bold" colorScheme="secondary" size="sm" />
      <Toggle icon={<Bold />} aria-label="Toggle bold" colorScheme="warning" size="md" />
      <Toggle icon={<Bold />} aria-label="Toggle bold" colorScheme="danger" size="lg" />
    </>;
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Bold />} aria-label="Toggle bold" colorScheme="primary" variant="subtle" />
      <Toggle icon={<Bold />} aria-label="Toggle bold" colorScheme="secondary" variant="solid" />
      <Toggle icon={<Bold />} aria-label="Toggle bold" variant="outline" />
      <Toggle icon={<Bold />} aria-label="Toggle bold" variant="unstyled" />
    </>;
}`,...($=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,le,oe;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <Toggle defaultIsSelected colorScheme="primary" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="secondary" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="success" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="warning" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="danger" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="link" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="gray" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="neutral" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="red" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="rose" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="pink" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="orange" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="amber" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="yellow" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="lime" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="green" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="emerald" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="teal" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="cyan" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="sky" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="blue" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="indigo" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="violet" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="purple" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected colorScheme="fuchsia" aria-label="Toggle bold" icon={<Bold />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle defaultIsSelected variant="solid" colorScheme="primary" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="secondary" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="success" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="warning" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="danger" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="link" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="gray" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="neutral" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="red" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="rose" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="pink" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="orange" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="amber" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="yellow" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="lime" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="green" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="emerald" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="teal" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="cyan" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="sky" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="blue" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="indigo" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="violet" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="purple" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="fuchsia" aria-label="Toggle bold" icon={<Bold />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle defaultIsSelected variant="outline" colorScheme="primary" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="secondary" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="success" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="warning" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="danger" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="link" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="gray" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="neutral" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="red" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="rose" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="pink" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="orange" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="amber" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="yellow" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="lime" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="green" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="emerald" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="teal" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="cyan" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="sky" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="blue" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="indigo" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="violet" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="purple" aria-label="Toggle bold" icon={<Bold />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="fuchsia" aria-label="Toggle bold" icon={<Bold />} />
      </Wrap>
    </>;
}`,...(oe=(le=y.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ae,re,ie;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <Toggle icon={<Bold />} aria-label="Toggle bold" defaultIsSelected isRounded />;
}`,...(ie=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ce,te,de;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Bold />} aria-label="Toggle bold" colorScheme="primary" variant="subtle" defaultIsSelected isDisabled />
      <Toggle icon={<Bold />} aria-label="Toggle bold" colorScheme="secondary" variant="solid" defaultIsSelected isDisabled />
      <Toggle icon={<Bold />} aria-label="Toggle bold" variant="outline" defaultIsSelected isDisabled />
    </>;
}`,...(de=(te=w.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var ne,se,ge;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Bold />} aria-label="Toggle bold" colorScheme="primary" variant="subtle" defaultIsSelected isReadOnly />
      <Toggle icon={<Bold />} aria-label="Toggle bold" colorScheme="secondary" variant="solid" defaultIsSelected isReadOnly />
      <Toggle icon={<Bold />} aria-label="Toggle bold" variant="outline" defaultIsSelected isReadOnly />
    </>;
}`,...(ge=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ge.source}}};var ue,be,Se;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return <Toggle icon={<Bold />} aria-label="Toggle bold" isSelected={isSelected} onChange={setIsSelected} />;
}`,...(Se=(be=R.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var me,Te,xe;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined);
  const [multiValue, setMultiValue] = useState<string[]>([]);
  return <>
      <ToggleGroup value={singleValue} onChange={setSingleValue}>
        <Toggle value="bold" icon={<Bold />} aria-label="Toggle bold" />
        <Toggle value="italic" icon={<Italic />} aria-label="Toggle italic" />
        <Toggle value="underline" icon={<Underline />} aria-label="Toggle underline" />
      </ToggleGroup>

      <ToggleGroup value={multiValue} onChange={setMultiValue}>
        <Toggle value="bold" icon={<Bold />} aria-label="Toggle bold" />
        <Toggle value="italic" icon={<Italic />} aria-label="Toggle italic" />
        <Toggle value="underline" icon={<Underline />} aria-label="Toggle underline" />
      </ToggleGroup>
    </>;
}`,...(xe=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};const il=["basic","withText","withSize","withVariant","withColorScheme","isRounded","isDisabled","isReadonly","customControl","useGroup"];export{il as __namedExportsOrder,I as basic,R as customControl,rl as default,w as isDisabled,k as isReadonly,C as isRounded,V as useGroup,y as withColorScheme,p as withSize,v as withText,B as withVariant};
