import{j as e,a as c,F as T}from"./jsx-runtime-2xDJh5tt.js";import{I as o,r as a,s as j,t as K}from"./fontawesome-icon-8ycVrulE.js";import{r as b}from"./index-CBqU2yxZ.js";import{u as pe}from"./index-DffFcysT.js";import{c as We,l as W,n as Be,e as Pe,u as ye,a as Ce,K as N,h as _e}from"./factory-DpmudyXM.js";import{f as we}from"./forward-ref-DuAegr0M.js";import{u as Ae,R as Ne}from"./use-ripple-CYLHRNNs.js";import{u as Ue}from"./use-component-style-C8HPJoXa.js";import{o as je}from"./theme-provider-BSSgazaQ.js";import{W as U}from"./flex-BqXLc-Xk.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BPDO9FjE.js";import"./index-CjPoKz7c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-BNANSLgb.js";const[Ee,Fe]=We({strict:!1,name:"ToggleGroupContext"}),E=we(({value:r,defaultValue:d,onChange:g,className:s,size:f,variant:n,direction:v,isDisabled:p,isReadonly:u,...P},_)=>{const[S,B]=pe({value:r,defaultValue:d,onChange:g}),y=b.useRef(!W(S)),m=b.useCallback(i=>{W(i)||B(t=>Be(t)?t.includes(i)?t.filter(h=>h!==i):[...t,i]:i===t?void 0:i)},[B]),A={display:"inline-flex",gap:"0.5rem",flexDirection:v},I=b.useMemo(()=>({value:S,size:f,variant:n,isDisabled:p,isReadonly:u,isControlled:y.current,onChange:m}),[S,f,n,p,u,m]);return Pe(()=>{W(S)||(y.current=!0)},[r]),e(Ee,{value:I,children:e(ye.div,{ref:_,role:"group",className:Ce("ui-toggle-group",s),__css:A,...P})})});E.displayName="ToggleGroup";const l=we((r,d)=>{const{value:g,onChange:s,isControlled:f,...n}=Fe()??{},[v,p]=Ue("Toggle",{...n,...r}),{value:u,className:P,icon:_,isSelected:S,defaultIsSelected:B=!1,onChange:y,isRounded:m,isActive:A,isDisabled:I=n==null?void 0:n.isDisabled,isReadonly:i=n==null?void 0:n.isReadonly,disableRipple:t,children:F,...h}=je(p),[ke,Re]=pe({value:S,defaultValue:B,onChange:y});f&&W(u)&&console.warn("Toggle: value is required. Please set the value.");const xe=Be(g)?g.includes(u??""):u===g,q=f?xe:ke,{onPointerDown:Ve,...De}=Ae({...h,isDisabled:t||I}),Ge=()=>{Re(Me=>!Me),s==null||s(u)},ze=b.useMemo(()=>({display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",appearance:"none",userSelect:"none",position:"relative",verticalAlign:"middle",overflow:"hidden",outline:"none",pointerEvents:i?"none":"auto",...v,...m?{borderRadius:"9999px"}:{}}),[m,v,i]);return c(ye.button,{ref:d,type:"button",tabIndex:i?-1:0,disabled:I,"data-active":N(A),"data-selected":N(q),"data-readonly":N(i),"aria-pressed":q,className:Ce("ui-toggle",P),__css:ze,...h,onClick:_e(h.onClick,Ge),onPointerDown:Ve,children:[F||_,e(Ne,{isDisabled:t||I,...De})]})});l.displayName="Toggle";const tl={title:"Components / Forms / Toggle",component:l},C=()=>e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold"}),w=()=>c(l,{px:"4",children:[e(o,{icon:j}),"Italic"]}),k=()=>c(T,{children:[e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"primary",size:"xs"}),e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"secondary",size:"sm"}),e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"warning",size:"md"}),e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"danger",size:"lg"})]}),R=()=>c(T,{children:[e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"primary",variant:"subtle"}),e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"secondary",variant:"solid"}),e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",variant:"outline"}),e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",variant:"unstyled"})]}),x=()=>c(T,{children:[c(U,{gap:"md",children:[e(l,{defaultIsSelected:!0,colorScheme:"primary","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"secondary","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"success","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"warning","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"danger","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"link","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"gray","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"neutral","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"red","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"rose","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"pink","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"orange","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"amber","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"yellow","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"lime","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"green","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"emerald","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"teal","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"cyan","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"sky","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"blue","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"indigo","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"violet","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"purple","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,colorScheme:"fuchsia","aria-label":"Toggle bold",icon:e(o,{icon:a})})]}),c(U,{gap:"md",children:[e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"primary","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"secondary","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"success","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"warning","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"danger","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"link","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"gray","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"neutral","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"red","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"rose","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"pink","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"orange","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"amber","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"yellow","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"lime","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"green","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"emerald","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"teal","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"cyan","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"sky","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"blue","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"indigo","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"violet","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"purple","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"solid",colorScheme:"fuchsia","aria-label":"Toggle bold",icon:e(o,{icon:a})})]}),c(U,{gap:"md",children:[e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"primary","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"secondary","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"success","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"warning","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"danger","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"link","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"gray","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"neutral","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"red","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"rose","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"pink","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"orange","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"amber","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"yellow","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"lime","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"green","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"emerald","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"teal","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"cyan","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"sky","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"blue","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"indigo","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"violet","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"purple","aria-label":"Toggle bold",icon:e(o,{icon:a})}),e(l,{defaultIsSelected:!0,variant:"outline",colorScheme:"fuchsia","aria-label":"Toggle bold",icon:e(o,{icon:a})})]})]}),V=()=>e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",defaultIsSelected:!0,isRounded:!0}),D=()=>c(T,{children:[e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"primary",variant:"subtle",defaultIsSelected:!0,isDisabled:!0}),e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"secondary",variant:"solid",defaultIsSelected:!0,isDisabled:!0}),e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",variant:"outline",defaultIsSelected:!0,isDisabled:!0})]}),G=()=>c(T,{children:[e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"primary",variant:"subtle",defaultIsSelected:!0,isReadonly:!0}),e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",colorScheme:"secondary",variant:"solid",defaultIsSelected:!0,isReadonly:!0}),e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",variant:"outline",defaultIsSelected:!0,isReadonly:!0})]}),z=()=>{const[r,d]=b.useState(!1);return e(l,{icon:e(o,{icon:a}),"aria-label":"Toggle bold",isSelected:r,onChange:d})},M=()=>{const[r,d]=b.useState(void 0),[g,s]=b.useState([]);return c(T,{children:[c(E,{value:r,onChange:d,children:[e(l,{value:"bold",icon:e(o,{icon:a}),"aria-label":"Toggle bold"}),e(l,{value:"italic",icon:e(o,{icon:j}),"aria-label":"Toggle italic"}),e(l,{value:"underline",icon:e(o,{icon:K}),"aria-label":"Toggle underline"})]}),c(E,{value:g,onChange:s,children:[e(l,{value:"bold",icon:e(o,{icon:a}),"aria-label":"Toggle bold"}),e(l,{value:"italic",icon:e(o,{icon:j}),"aria-label":"Toggle italic"}),e(l,{value:"underline",icon:e(o,{icon:K}),"aria-label":"Toggle underline"})]})]})};var O,H,J;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" />;
}`,...(J=(H=C.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var L,Q,X;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Toggle px="4">
      <Icon icon={faItalic} />
      Italic
    </Toggle>;
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="primary" size="xs" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="secondary" size="sm" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="warning" size="md" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="danger" size="lg" />
    </>;
}`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,le,oe;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="primary" variant="subtle" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="secondary" variant="solid" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" variant="outline" />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" variant="unstyled" />
    </>;
}`,...(oe=(le=R.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ae,ce,ie;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <Toggle defaultIsSelected colorScheme="primary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="secondary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="success" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="warning" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="danger" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="link" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="gray" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="neutral" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="red" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="rose" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="pink" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="orange" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="amber" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="yellow" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="lime" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="green" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="emerald" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="teal" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="cyan" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="sky" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="blue" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="indigo" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="violet" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="purple" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected colorScheme="fuchsia" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle defaultIsSelected variant="solid" colorScheme="primary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="secondary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="success" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="warning" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="danger" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="link" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="gray" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="neutral" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="red" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="rose" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="pink" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="orange" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="amber" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="yellow" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="lime" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="green" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="emerald" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="teal" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="cyan" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="sky" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="blue" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="indigo" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="violet" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="purple" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="solid" colorScheme="fuchsia" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle defaultIsSelected variant="outline" colorScheme="primary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="secondary" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="success" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="warning" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="danger" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="link" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="gray" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="neutral" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="red" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="rose" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="pink" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="orange" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="amber" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="yellow" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="lime" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="green" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="emerald" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="teal" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="cyan" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="sky" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="blue" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="indigo" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="violet" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="purple" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
        <Toggle defaultIsSelected variant="outline" colorScheme="fuchsia" aria-label="Toggle bold" icon={<Icon icon={faBold} />} />
      </Wrap>
    </>;
}`,...(ie=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var ne,re,te;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" defaultIsSelected isRounded />;
}`,...(te=(re=V.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var de,ge,se;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="primary" variant="subtle" defaultIsSelected isDisabled />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="secondary" variant="solid" defaultIsSelected isDisabled />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" variant="outline" defaultIsSelected isDisabled />
    </>;
}`,...(se=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:se.source}}};var ue,be,Se;G.parameters={...G.parameters,docs:{...(ue=G.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="primary" variant="subtle" defaultIsSelected isReadonly />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" colorScheme="secondary" variant="solid" defaultIsSelected isReadonly />
      <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" variant="outline" defaultIsSelected isReadonly />
    </>;
}`,...(Se=(be=G.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var Te,fe,me;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" isSelected={isSelected} onChange={setIsSelected} />;
}`,...(me=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var Ie,he,ve;M.parameters={...M.parameters,docs:{...(Ie=M.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined);
  const [multiValue, setMultiValue] = useState<string[]>([]);
  return <>
      <ToggleGroup value={singleValue} onChange={setSingleValue}>
        <Toggle value="bold" icon={<Icon icon={faBold} />} aria-label="Toggle bold" />
        <Toggle value="italic" icon={<Icon icon={faItalic} />} aria-label="Toggle italic" />
        <Toggle value="underline" icon={<Icon icon={faUnderline} />} aria-label="Toggle underline" />
      </ToggleGroup>

      <ToggleGroup value={multiValue} onChange={setMultiValue}>
        <Toggle value="bold" icon={<Icon icon={faBold} />} aria-label="Toggle bold" />
        <Toggle value="italic" icon={<Icon icon={faItalic} />} aria-label="Toggle italic" />
        <Toggle value="underline" icon={<Icon icon={faUnderline} />} aria-label="Toggle underline" />
      </ToggleGroup>
    </>;
}`,...(ve=(he=M.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};const dl=["basic","withText","withSize","withVariant","withColorScheme","isRounded","isDisabled","isReadonly","customControl","useGroup"];export{dl as __namedExportsOrder,C as basic,z as customControl,tl as default,D as isDisabled,G as isReadonly,V as isRounded,M as useGroup,x as withColorScheme,k as withSize,w as withText,R as withVariant};
